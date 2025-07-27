const casosRepository = require("../repositories/casosRepository");
const agentesRepository = require("../repositories/agentesRepository");

function validationsCase(data, res){
        if (data.id) {
        return res.status(400).json({ message: "Não é permitido alterar o ID de um caso." });
        }
         if (!data.titulo || typeof data.titulo !== 'string'  || data.titulo.trim() === '') {
        return res.status(400).json({ message: "Título do caso é obrigatório." });
         }
         if (!data.descricao || typeof data.titulo !== 'string'  ||  data.descricao.trim() === '') {
        return res.status(400).json({ message: "Descrição do caso é obrigatória." });
         }
         if (!data.status || !['aberto', 'solucionado'].includes(data.status)) {
        return res.status(400).json({ message: "Status inválido. Deve ser 'aberto' ou 'solucionado'." });
         }
         if (!data.agente_id || !agentesRepository.getAgentByID(data.agente_id)) {
        res.status(404).json({ message: "Agente não encontrado para o agente_id informado." });
        return false;
    }

     return true;    
}

function checkExist(id, res) {
    const caso = casosRepository.getCaseByID(id);
    if (!caso) {
        res.status(404).json({ message: "Caso não cadastrado no banco de dados!" });
        return null;
    }
    return caso; 
}


function getCasosController(req, res) {
        const casos = casosRepository.getAll()
        res.status(200).json(casos);
}

function getCaseByIDController(req, res) {
        const { id } = req.params;
        const caso = checkExist(id, res);
        if (!caso) return; 
        res.status(200).json(caso);
}

function createCaseController(req,res){
        const data = req.body;
        const isValid = validationsCase(data, res);
        if (!isValid) {
        return; 
        }

        const newCase = casosRepository.createCase(data);
        res.status(201).json(newCase);
}

function updateCaseController(req,res){
        const { id } = req.params;
        const data = req.body;
        const caso = checkExist(id, res);
        if (!caso) return; 
        const isValid =  validationsCase(data, res);
        if (!isValid) {
        return; 
        }

        const updatedCaseController = casosRepository.updateCase(id, data);
        res.status(200).json(updatedCaseController);
}

function patchCaseController(req,res){
        const { id } = req.params;
        const data = req.body;
        const caso = checkExist(id, res);
        if (!caso) return; 
        const isValid = validationsCase(data, res);
        if (!isValid) {
        return; 
        }
        
 
        const patchedCaseController = casosRepository.patchCase(id, data);
        res.status(200).json(patchedCaseController);
}

function deleteCaseController(req,res){
        const { id } = req.params;
        const caso = checkExist(id, res);
        if (!caso) return; 

        casosRepository.deleteCase(id);
        res.status(204).send();
        
}

module.exports = {
   getCasosController,
   getCaseByIDController,
   createCaseController,
   updateCaseController,
   deleteCaseController,
   patchCaseController
   
}
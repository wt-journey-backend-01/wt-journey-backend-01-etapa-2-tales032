const agentesRepository = require("../repositories/agentesRepository");
const { parse, isValid } = require('date-fns');


function checkDate(dateString) {
    const date = parse(dateString, 'yyyy/MM/dd', new Date());
    return isValid(date);
}


function validationsAgent(data, res){
        if (data.id) {
        return res.status(400).json({ message: "Não é permitido alterar o ID de um agente." });
        }
        if (!data.dataDeIncorporacao || !checkDate(data.dataDeIncorporacao)) {
        return res.status(400).json({ message: "Data de incorporação é obrigatória e deve estar no formato YYYY/MM/DD." });
         }
         if (!data.nome || typeof data.nome !== 'string'  || data.nome.trim() === '') {
        return res.status(400).json({ message: "Nome de um agente é obrigatório." });
         }
         if (!data.cargo || typeof data.cargo !== 'string'  ||  data.cargo.trim() === '') {
        return res.status(400).json({ message: "Cargo do agente é obrigatório." });
         }
    
     return true;    
}

function checkExist(id, res) {
    const agente = agentesRepository.getAgentByID(id);
    if (!agente) {
        res.status(404).json({ message: "Agente não cadastrado no banco de dados!" });
        return null;
    }
    return agente; 
}

function getAllController(req, res) {

        const agentes = agentesRepository.getAll()
        res.status(200).json(agentes);
}

function getAgentByIDController(req, res) {
        const { id } = req.params;
        const agente = checkExist(id, res);
         if (!agente) return; 
        res.status(200).json(agente);
}

function createAgentController(req, res) {
        const data = req.body;
       
         const isValid = validationsAgent(data, res);
         if (!isValid) {
        return; 
        }
        const newAgentController = agentesRepository.createAgent(data);
        res.status(201).json(newAgentController);
}

function updateAgentController(req,res){
        const { id } = req.params;
        const data = req.body;
        const agente = checkExist(id, res);
        if (!agente) return; 

        const isValid = validationsAgent(data, res);
        if (!isValid) {
        return; 
        }
     

        const updatedAgentController = agentesRepository.updateAgente(id, data);
        res.status(200).json(updatedAgentController);
}

function patchAgentController(req,res){
        const { id } = req.params;
        const data = req.body;
        const agente = checkExist(id, res);
        if (!agente) return; 
        const isValid = validationsAgent(data, res);
        if (!isValid) {
        return; 
        }

    const patchedAgentController = agentesRepository.patchAgente(id, data);
    res.status(200).json(patchedAgentController);
}



function deleteAgentController(req,res){
        const { id } = req.params;
        const agente = checkExist(id, res);
        if (!agente) return; 

        
        agentesRepository.deleteAgent(id);
        res.status(204).send();
}

module.exports = {
   getAllController,
   getAgentByIDController,
   createAgentController,
   updateAgentController,
   patchAgentController,
   deleteAgentController
}
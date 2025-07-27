const agentesRepository = require("../repositories/agentesRepository");
const validations = require("../utils/errorHandler")

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
        res.json(agentes)
}

function getAgentByIDController(req, res) {
        const { id } = req.params;
        const agente = checkExist(id, res);
         if (!agente) return; 
        res.status(200).json(agente);
}

function createAgentController(req, res) {
        const data = req.body;
        validations.validationsAgent(data, res);
         const isValid = validations.validationsAgent(data, res);
         if (!isValid) {
        return; 
        }
        const newAgentController = agentesRepository.createAgent(data);
        res.status(201).json(newAgentController);
}

function updateAgentController(req,res){
        const { id } = req.params;
        const data = req.body;
        const caso = checkExist(id, res);
        if (!caso) return; 
        const isValid = validations.validationsAgent(data, res);
        if (!isValid) {
        return; 
        }
     

        const updatedAgentController = agentesRepository.patchAgente(id, data);
        res.status(200).json(updatedAgentController);
}

function patchAgentController(req,res){
        const { id } = req.params;
        const data = req.body;
        const caso = checkExist(id, res);
        if (!caso) return; 
        const isValid = validations.validationsAgent(data, res);
        if (!isValid) {
        return; 
        }

    const patchedAgentController = agentesRepository.patchAgente(id, data);
    res.status(200).json(patchedAgentController);
}



function deleteAgentController(req,res){
        const { id } = req.params;
        const caso = checkExist(id, res);
        if (!caso) return; 

        
        agentesRepository.deleteAgent(id);
        res.status(294).json(id);
}

module.exports = {
   getAllController,
   getAgentByIDController,
   createAgentController,
   updateAgentController,
   patchAgentController,
   deleteAgentController
}
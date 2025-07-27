const agentesRepository = require("../repositories/agentesRepository");

function checkExist(id, res){
    const agente = agentesRepository.getAgentByID(id);
    if (!agente) {
        return res.status(404).json({
            message: "Agente não cadastrado no banco de dados!"
        });
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
    const newAgentController = agentesRepository.createAgent(data);
    res.status(201).json(newAgentController);
}

function updateAgentController(req,res){
        const { id } = req.params;
        const data = req.body;
        checkExist(id);
        
      // add verificacoes

        const updatedAgentController = agentesRepository.patchAgente(id, data);
        res.status(200).json(updatedAgentController);
}

function patchAgentController(req,res){
        const { id } = req.params;
        const data = req.body;

        checkExist(id);


    const patchedAgentController = agentesRepository.patchAgente(id, data);
    res.status(200).json(patchedAgentController);
}



function deleteAgentController(req,res){
        const { id } = req.params;
        checkExist(id);

        const deletedAgent = agentesRepository.deleteAgent(id);
        res.status(200).json(deletedAgent);
}

module.exports = {
   getAllController,
   getAgentByIDController,
   createAgentController,
   updateAgentController,
   patchAgentController,
   deleteAgentController
}
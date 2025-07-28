const {v4 : uuid} = require("uuid");

const agentes = [
    {
    "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "nome": "Rommel Carneiro",
    "dataDeIncorporacao": "1992-10-04",
    "cargo": "delegado"
    },
   
]

function getAll() {
    return agentes;
}


function getAgentByID(id) {
    return agentes.find(agente => agente.id === id);
}

function createAgent(data) {

    const newAgent = {
        id: uuid(),
        ...data
    };
 
    agentes.push(newAgent);
    return newAgent;
}


function updateAgent(id, dadosParaAtualizar){
    const agenteIndex = agentes.findIndex(agente => agente.id === id);

    if(agenteIndex === -1 ){
        return null;
    } 

    const agenteAtualizado = {
       ...agentes[agenteIndex],
       ...dadosParaAtualizar
    }


    agentes[agenteIndex] = agenteAtualizado;

    return agenteAtualizado;
    
}

function patchAgent(id, dadosParaAtualizar){
    const agenteIndex = agentes.findIndex(agente => agente.id === id);

    if(agenteIndex === -1 ){
        return null;
    } 

    const agentePatched = {
       ...agentes[agenteIndex],
       ...dadosParaAtualizar
    }


    agentes[agenteIndex] = agentePatched;

    return agentePatched;
    
}

function deleteAgent(id){
    const agenteIndex = agentes.findIndex(agente => agente.id === id);
    
     if(agenteIndex === -1 ){
        return null;
    } else{
        agentes.splice(agenteIndex, 1);
            return true;
    } 
}

module.exports = {
    getAll,
    getAgentByID,
    createAgent,
    updateAgent, 
    deleteAgent,
    patchAgent
}
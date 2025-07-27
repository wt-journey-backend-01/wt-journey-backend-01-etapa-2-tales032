const {v4 : uuid} = require("uuid");

const agentes = [
    {
    "id": "401bccf5-cf9e-489d-8412-446cd169a0f1",
    "nome": "Rommel Carneiro",
    "dataDeIncorporacao": "1992/10/04",
    "cargo": "delegado"

    }
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


function updateAgente(id, dadosParaAtualizar){
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

function patchAgente(id, dadosParaAtualizar){
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
    updateAgente, 
    deleteAgent,
    patchAgente
}
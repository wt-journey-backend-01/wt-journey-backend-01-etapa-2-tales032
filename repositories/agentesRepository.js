const {v4 : uuid} = require("uuid");

const agentes = [
    {
    "id": "401bccf5-cf9e-489d-8412-446cd169a0f1",
    "nome": "Rommel Carneiro",
    "dataDeIncorporacao": "1992/10/04",
    "cargo": "delegado"

    },
    {
        "id": "0f8b7f8e-8c3a-4a2b-9e3d-7f8e8c3a4a2b",
        "nome": "Clara Monteiro",
        "dataDeIncorporacao": "2010/05/15",
        "cargo": "Delegada Titular"
    },
    {
        "id": "1c2d3e4f-5a6b-7c8d-9e0f-1a2b3c4d5e6f",
        "nome": "Marcos Andrade",
        "dataDeIncorporacao": "2015/02/20",
        "cargo": "Investigador Chefe"
    },
    {
        "id": "2a3b4c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d",
        "nome": "Beatriz Costa",
        "dataDeIncorporacao": "2018/11/01",
        "cargo": "Perita Criminal"
    },
    {
        "id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a",
        "nome": "Ricardo Neves",
        "dataDeIncorporacao": "2021/07/30",
        "cargo": "Agente de Campo"
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
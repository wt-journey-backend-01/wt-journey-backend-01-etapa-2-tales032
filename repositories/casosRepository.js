const {v4 : uuid} = require("uuid");
const casos = [
    {
        "id": uuid(),
        "titulo": "homicidio",
        "descricao": "Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
        "status": "aberto",
        "agente_id": "401bccf5-cf9e-489d-8412-446cd169a0f1" 
    },
 
]

function getAll() {
    return casos
}

function getCaseByID(id) {
    return casos.find(caso => caso.id === id);
}


function createCase(data){
     const newCase = {
        id: uuid(),
        ...data
    }

    casos.push(newCase);
    return newCase;

}

function updateCase(id, dadosParaAtualizar){
    const caseIndex = casos.findIndex(caso => caso.id === id);

      if(caseIndex === -1 ){
        return null;
    } 

    const casoAtualizado = {
       ...casos[caseIndex],
       ...dadosParaAtualizar
    }

    casos[caseIndex] = casoAtualizado;
    return casoAtualizado;
    
}

function patchCase(id, dadosParaAtualizar){
    const caseIndex = casos.findIndex(caso => caso.id === id);

      if(caseIndex === -1 ){
        return null;
    } 

    const casoPatched = {
       ...casos[caseIndex],
       ...dadosParaAtualizar
    }

    casos[caseIndex] = casoPatched;
    return casoPatched;
    
}

function deleteCase(id){
   const caseIndex = casos.findIndex(caso => caso.id === id);
    
     if(caseIndex === -1 ){
        return null;
    } else{
        casos.splice(caseIndex, 1);
            return true;
    } 
}




module.exports = {
    getAll, 
    getCaseByID,
    createCase,
    updateCase,
    deleteCase,
    patchCase
}
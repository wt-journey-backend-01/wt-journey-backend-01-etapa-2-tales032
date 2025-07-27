const {v4 : uuid} = require("uuid");
const casos = [
    {
        "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        "titulo": "homicidio",
        "descricao": "Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
        "status": "aberto",
        "agente_id": "401bccf5-cf9e-489d-8412-446cd169a0f1" 
    },
    {
        "id": "4e5f6a7b-8c9d-0e1f-2a3b-4c5d6e7f8a9b",
        "titulo": "Operação Contas Fechadas",
        "descricao": "Investigação de fraude fiscal em grande escala envolvendo empresas de importação.",
        "status": "aberto",
        "agente_id": "1c2d3e4f-5a6b-7c8d-9e0f-1a2b3c4d5e6f"
    },
    {
        "id": "5f6a7b8c-9d0e-1f2a-3b4c-5d6e7f8a9b0c",
        "titulo": "O Sumiço do Artefato",
        "descricao": "Peça rara de museu desapareceu durante a noite. Suspeita de furto interno.",
        "status": "aberto",
        "agente_id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a"
    },
    {
        "id": "6a7b8c9d-0e1f-2a3b-4c5d-6e7f8a9b0c1d",
        "titulo": "Análise Forense do Incêndio",
        "descricao": "Análise pericial para determinar a causa de um incêndio em um armazém comercial.",
        "status": "solucionado",
        "agente_id": "2a3b4c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d"
    },
    {
        "id": "7b8c9d0e-1f2a-3b4c-5d6e-7f8a9b0c1d2e",
        "titulo": "Coleta de Depoimentos - Testemunha Chave",
        "descricao": "Intimação e coleta de depoimento de testemunha ocular em caso de roubo qualificado.",
        "status": "solucionado",
        "agente_id": "0f8b7f8e-8c3a-4a2b-9e3d-7f8e8c3a4a2b"
    }
    
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
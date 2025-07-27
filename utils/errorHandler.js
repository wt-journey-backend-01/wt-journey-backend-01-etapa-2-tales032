const agentesRepository = require("../repositories/agentesRepository");

const { parse, isValid } = require('date-fns');

function checkDate(dateString) {
    const date = parse(dateString, 'yyyy/MM/dd', new Date());
    return isValid(date);
}



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
         if (!agentesRepository.getAgentByID(data.agente_id)) {
        res.status(404).json({ message: "Agente não encontrado para o agente_id informado." });
        return false;
    }

     return true;    
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
module.exports = {
   validationsCase,
   validationsAgent
}
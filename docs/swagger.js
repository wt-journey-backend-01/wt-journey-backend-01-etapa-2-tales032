const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  // Informações básicas da API
  definition: {
    openapi: '3.0.0', // Versão da especificação OpenAPI
    info: {
      title: 'API do Departamento de Polícia',
      version: '1.0.0',
      description: 'Documentação da API para gerenciamento de Agentes e Casos.',
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL base do seu servidor
        description: 'Servidor de Desenvolvimento',
      },
    ],
  },
  // Caminho para os arquivos que contêm as anotações da API (suas rotas)
  apis: ['./routes/*.js'], // Vai ler todos os arquivos .js dentro da pasta routes
};

const swaggerDocs = swaggerJsdoc(options);

module.exports = swaggerDocs;
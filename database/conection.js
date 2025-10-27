// Conexão desativada temporariamente (sem banco de dados)

const { Sequelize } = require('sequelize');

// Cria conexão "fake" em memória só pra evitar erros
const connection = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:' // usa memória temporária (não cria arquivo)
});

module.exports = connection;

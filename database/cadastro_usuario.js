const { Sequelize } = require('sequelize');
const connection = require('./conection');

// Cria uma estrutura simples pra simular o modelo (sem banco real)
const usuario = connection.define('usuarios', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha_2: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Não sincroniza o banco (evita erro no Render)
 // usuario.sync({ force: false }).then(() => {});

module.exports = usuario;

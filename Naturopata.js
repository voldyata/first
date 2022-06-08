const crypto = require('crypto')
const db = require('./db');
const Bairro = require('./Bairro');

const Naturopata = db.sequelize.define('naturopata', {
    nome: {
        type: db.Sequelize.STRING,
        allownull: false,
        validate: {
            notEmpty: {
                msg: "esse campo não pode ser vazio"
            }
        }
    },
    email: {
        type: db.Sequelize.STRING,
        allownull: false,
        validate: {
            isEmail: {
                msg: "esse campo é um email"
            }
        },
        unique: true,
    },
    senha: {
        type: db.Sequelize.CHAR,
        allownull: false,
        validate: {
            notEmpty: {
                msg: "esse campo não pode ser vazio"
            },
            len: {
                args: [6, 10],
                msg: "deve conter entre 6 a 10 caracters"

            },
        },
    },
    telefone: {
        type: db.Sequelize.CHAR,
        allownull: false,
        validate: {
            notEmpty: {
                msg: "esse campo não pode ser vazio"
            },
              len: {
                  args: [9],
                  msg: "deve conter entre   9 digitos"

              },
        }
    },
})

Naturopata.belongsTo(Bairro, {
    constraint: true,
})

Bairro.hasMany(Naturopata)
//Naturopata.sync({
//alter: true
//})

module.exports = Naturopata;
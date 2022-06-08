const db = require('./db')

const Usuario = db.sequelize.define('usuario', {
    nome: {
        type: db.Sequelize.STRING,
        allownull: false,
        validate: {
            notEmpty : {
                msg :"esse campo não pode ser vazio"
            }
        }
    },
    email: {
        type: db.Sequelize.STRING,
        allownull: false,

        validate: {
            isEmail: {
                msg :"esse campo deve ser correio eletronico"
            }
        }
    },
    senha: {
        type: db.Sequelize.CHAR,
        allownull: false,

        validate: {
            notEmpty : {
                msg :"esse campo não pode ser vazio"
            },
            len :{ args :[6,8] ,
                msg :"deve conter entre 6 a 8 caracters"

            }
        }
    }
})

//Usuario.sync({ force: true })

module.exports = Usuario;


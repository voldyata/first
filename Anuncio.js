const db = require('./db');

const Naturopata = require('./Naturopata');


const Anuncio = db.sequelize.define('anuncio', {
    conteudo: {
        type: db.Sequelize.STRING
    },
})
Anuncio.belongsTo(Naturopata, {
    constraint: true
});

Naturopata.hasMany(Anuncio)

//Anuncio.sync({
Force: true
//})

module.exports = Anuncio;
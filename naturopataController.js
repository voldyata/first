const {
    Op
} = require('sequelize');


const Naturopata = require('../models/Naturopata');



const naturopataController = {
    cadastrar: async (req, res) => {
        const {
            nome,
            email,
            senha,
            telefone,
            BairroId,
        } = req.body;
        const cadastrar = await Naturopata.create({
            nome,
            email,
            senha,
            telefone,
            BairroId,
        })
        res.json(cadastrar)
    },
    listar: async (req, res) => {
        const naturopata = await Naturopata.findAll({
            include: [{
                association: 'Bairro',
                include: {
                    association: 'Municipio'
                }
            }]
        })
        res.json(naturopata)
    },
    findbyid: async (req, res) => {
        const {
            id
        } = req.params;
        const naturopata = await Naturopata.findOne({
            where: {
                id: id
            },
            include: [{
                association: 'Bairro',
                include: {
                    association: 'Municipio'
                }
            }]
        })
        res.json(naturopata)
    },
    eliminar: async (req, res) => {
        const {
            id
        } = req.params;
        const naturopata = await Naturopata.destroy({
            where: {
                id: id
            }
        })
        res.json(naturopata)
    },
    atualizar: async (req, res) => {
        const {
            id,
            nome,
            email,
        } = req.body;
        const naturopata = await Naturopata.update({
            nome,
            email,
        }, {
            where: {
                id: id
            }
        })
        res.json(naturopata)
    },
    findbynome: async (req, res) => {
        const {
            nome
        } = req.params;
        const naturopata = await Naturopata.findAll({
            where: {
                nome: {
                    [op.like]: '%nome'
                }
            }
        })
        res.json(naturopata)
    },
}

module.exports = naturopataController;
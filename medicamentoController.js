

const {
    where
} = require('sequelize');
const sequelize = require('sequelize')
const Medicamento = require('../models/Medicamento')
const naturopata = require('../models/Naturopata')

const medicamentoController = {
    cadastrar: async (req, res) => {
        const {

            nome,
            preco,
        } = req.body;

        const medicamento = await Medicamento.create({
            nome,
            preco,
        })
        res.json(medicamento)
    },


    listar: async (req, res) => {
        const medicamento = await Medicamento.findAll()
        res.json(medicamento)
    },
    findbyid: async (req, res) => {
        const {
            id
        } = req.params;
        const medicamento = await Medicamento.findAll({
            where: {
                id: id


            }

        })
        res.json(medicamento)
    },
    eliminar: async (req, res) => {
        const {
            id
        } = req.params;
        const medicamento = await Medicamento.destroy({
            where: {
                id: id


            }

        })
        res.json(medicamento)
    },

    atualizar: async (req, res) => {
        const {
            id,
            nome,
            preco,
        } = req.body;
        const medicamento = await Medicamento.update({
            nome,
            preco
        }, {
            where: {
                id: id
            }
        })

        res.json(medicamento)
    },
    findbynome: async (req, res) => {
        const {
            nome
        } = req.params;
        const medicamento = await Medicamento.findAll({
            where: {
                nome: '%nome'



            }

        })
        res.json(medicamento)
    },

}


module.exports = medicamentoController;
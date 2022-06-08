

const Usuario = require('../models/Usuario')
const  sequelize= require('sequelize')

const {
    Op
} = require('sequelize');




const usuarioController = {
    cadastrar: async (req, res) => {
        const {
            nome,
            email,
            senha,
        } = req.body;
        const usuario = await Usuario.create({
            nome,
            email,
            senha,
        })

        res.json(usuario)
    },




    listar: async (req, res) => {
        const usuario = await Usuario.findAll()
        res.json(usuario)
    },
    findbyid: async (req, res) => {
        const {
            id
        } = req.params;
        const usuario = await Usuario.findAll({
            where: {
                id: id


            }

        })
        res.json(usuario)
    },
    eliminar: async (req, res) => {
        const {
            id
        } = req.params;
        const usuario = await Usuario.destroy({
            where: {
                id: id


            }

        })
        res.json(usuario)
    },

    atualizar: async (req, res) => {
        const {
            id,
            nome,
            email,
            senha,

        } = req.body;
        const usuario = await Usuario.update({
            nome,
            email,
            senha,

        }, {
            where: {
                id: id
            }
        })

        res.json(usuario)
    },
    findbynome: async (req, res) => {
        const {
            nome
        } = req.params;
        const usuario = await Usuario.findAll({
            where: {
                nome: {
                    [op.like]: '%nome%'
                }
                


            }

        })
        res.json(Usuario)
    },

}


module.exports = usuarioController;
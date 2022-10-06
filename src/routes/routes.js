const routes = require('express').Router()

const controller = require('../controllers/controller')

routes.get('/PesquisandoPerfil/GitHub/:name', controller.pesquisarPerfilGitHub)

module.exports = routes
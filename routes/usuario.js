'use strict'

var express = require('express');
var UsuarioController = require('../controllers/usuario');

var api = express.Router();

api.get('/prueba-controlador', UsuarioController.pruebaUsuario);
api.post('/saveUsuario', UsuarioController.crearUsuario);
api.get('/getUsuarios', UsuarioController.getUsuarios);
api.post('/newContact', UsuarioController.newContact);

api.post('/login', UsuarioController.login);
api.post('/searchContacts', UsuarioController.searchContact);

module.exports = api;
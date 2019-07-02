'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    primer_nombre: String,
    segundo_nombre: String,
    primer_apellido: String,
    segundo_apellido: String,
    fecha_nacimiento: Date,
    correo: String,
    direccion: String,
    telefonos : 
        {
            celular: Number,
            casa: Number,
            otro: Number
        },
    contactos: []
    
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
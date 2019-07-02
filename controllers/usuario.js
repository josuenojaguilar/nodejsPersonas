'use strict'

//var mongoose = require('mongoose');
var Usuario = require('../models/usuario');
var Persona = require('../models/persona');

function pruebaUsuario(req, res){
     res.status(200).send({message: 'Usuario está corriendo'});
}

function getUsuarios(req, res){
    Usuario.find({}, (err, todasLasusuarios)=>{
        if(err){
            res.status(500).send({message: 'Error al traer los datos'});
        }else{
            res.status(200).send({todasLasusuarios});
        }
    });
}



function crearUsuario(req, res){
    var usuario = new Usuario();
    var params = req.body;
    
    if(params.primer_nombre && params.celular && params.correo){
        
            usuario.primer_nombre = params.primer_nombre;
            usuario.segundo_nombre = params.segundo_nombre;
            usuario.primer_apellido = params.primer_apellido;
            usuario.segundo_apellido = params.segundo_apellido;
            usuario.fecha_nacimiento = params.fecha_nacimiento;
            usuario.correo = params.correo;
            usuario.direccion = params.direccion;

                usuario.telefonos.celular = params.celular,
                usuario.telefonos.casa = params.casa,
                usuario.telefonos.otros = params.otros

                usuario.contactos = params.contacto;
            

        usuario.save((err, usuarioSave)=>{
            if(err){
                console.log(err);
                res.status(500).send({message: 'Usuario no guardado'})
            }else{
                res.status(200).send({usuarioSave});
            }
        })
    }else{
        console.log(params);
        res.status(500).send({message: 'Ingrese todos los campos requeridos'});

    }
}

function newContact(req, res){
    var contact = new Persona();
    var params = req.body;

    if(params.primer_nombre && params.celular && params._id){
        
        contact.primer_nombre = params.primer_nombre;
        contact.segundo_nombre = params.segundo_nombre;
        contact.primer_apellido = params.primer_apellido;
        contact.segundo_apellido = params.segundo_apellido;
        contact.fecha_nacimiento = params.fecha_nacimiento;
        contact.correo = params.correo;
        contact.direccion = params.direccion;

            contact.telefonos.celular = params.celular,
            contact.telefonos.casa = params.casa,
            contact.telefonos.otros = params.otros

                Usuario.findByIdAndUpdate({_id:params._id}, {$push:{contactos: contact}}, {new: true}, (err, user)=>{
                    if(err){
                        console.log(err)
                        res.status(500).send({message: 'Error general'});
                    }else{
                        if(!user){
                            res.status(500).send({message: 'El usuario con el que quieres navegar no existe'});
                        }else{
                            console.log(user)
                            res.status(200).send({user});
                        }
                    }
                });

        }else{
            res.status(500).send({message: 'Ingrese todos los campos requeridos'});
        }

}

module.exports = {
    pruebaUsuario,
    getUsuarios,
    crearUsuario,
    newContact

}
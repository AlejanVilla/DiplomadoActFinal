const {Schema, model} = require('mongoose');

const usuarioSchema = Schema({
    nombre: {
        type: String,
        required: true, // not null
    },
    documento: {
        type: String,
        required: true, // not null
    },
    email: {
        type: String,
        unique: true, //valor unico
    },
    telefono: {
        type: String,
        required: true, // not null
    },
    direccion: {
        type: String,
        required: true, // not null
    },
    tipoUsuario: {
        type: String,
        required: true, // not null
    },
    estado: {
        type: String,
        required: true, // not null
    }
    
});

module.exports= model("Usuarios", usuarioSchema);
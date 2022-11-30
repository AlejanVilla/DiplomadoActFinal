const {Schema, model} = require('mongoose');

const categoriaSchema = Schema({
    nombre: {
        type: String,
        required: true, // not null
    },
    codigo: {
        type: String,
        required: true, // not null
    }
        
});

module.exports= model("Categorias", categoriaSchema);
const {Schema, model} = require('mongoose');

const libroSchema = Schema({
    titulo: {
        type: String,
        
    },
    autor: {
        type: String,
        
    },
    ISBN: {
        type: String,
        
    },
    cantPaginas: {
        type: String,
        
    },
    editorial: {
        type: String,
        
    },
    formato: {
        type: String,
        
    },
    categoria: {
        type: String,
        
    },    
    cantEjemplares: {
        type: String,
        
    },
    estado: {
        type: String,
        
    }
    
});

module.exports= model("Libros", libroSchema);
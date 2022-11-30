const { Router } = require("express");
const ctrUsu = require("../controllers/usuarios.contraller")
const routerUsuarios = Router();
/*const usuarioSchema = require('../models/Usuarios');*/



routerUsuarios.get("/", ctrUsu.listar);

routerUsuarios.post('/', ctrUsu.agregar );

routerUsuarios.put('/:id', ctrUsu.actualizar);

routerUsuarios.delete('/:id', ctrUsu.eliminar);


module.exports = routerUsuarios;
const { Router } = require("express");
const ctrLib = require("../controllers/libros.contraller")
const routerLibros = Router();




routerLibros.get("/", ctrLib.listar);

routerLibros.post('/', ctrLib.agregar );

routerLibros.put('/:id', ctrLib.actualizar);

routerLibros.delete('/:id', ctrLib.eliminar);


module.exports = routerLibros;
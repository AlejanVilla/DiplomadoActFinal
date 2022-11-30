const { Router } = require("express");
const ctrCat = require("../controllers/categorias.contraller")
const routerCategorias = Router();




routerCategorias.get("/", ctrCat.listar);

routerCategorias.post('/', ctrCat.agregar );

routerCategorias.put('/:id', ctrCat.actualizar);

routerCategorias.delete('/:id', ctrCat.eliminar);


module.exports = routerCategorias;
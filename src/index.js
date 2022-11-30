const express = require('express');
const { getConnection } = require('../db/db-connection-mongo');
/*const mongoose = require('mongoose');*/
require("dotenv").config();

const routerUsuarios = require("./router/usuarios");
const routerCategorias = require("./router/categorias");
const routerLibros = require("./router/libros");

const app = express();
const port = process.env.PORT || 3000;

getConnection();

app.use(express.json());
/*app.use('/api', routerUsuarios);*/


app.use("/api/usuarios", routerUsuarios);
app.use("/api/categorias", routerCategorias);
app.use("/api/libros", routerLibros);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });


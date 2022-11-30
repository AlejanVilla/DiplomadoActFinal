const Usuarios= require('../models/Usuarios');



 exports.listar = async (req, res) =>{ 
    try {
        const usuario = await Usuarios.find();
        res.send(usuario);
    } catch(error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar los libros');
    } 
 };


 exports.agregar = async (req, res)=> {
   try{
    const { nombre,documento,email,telefono,direccion,tipoUsuario,estado} = req.body;
    

    if(nombre && documento && email && telefono && direccion && tipoUsuario && estado){
        const nuevoUsuario = new Usuarios ({nombre, documento, email, telefono, direccion,tipoUsuario,estado});
        await nuevoUsuario.save();
        res.json("Creado");
    }else {
        res.json("Ingresar los datos requeridos");
    }    
   }catch (error) {
    res.json(error)
   }
 };

 exports.actualizar = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;        
        await Usuarios.findByIdAndUpdate(id, data);
        res.json("Actualizado")
    } catch (error) {
        res.json("No fue posible la acción")
    }
 };

 exports.eliminar = async (req, res) =>{
    try {
        const id = req.params.id;
        console.log(id);
        const eliminado = await Usuarios.findByIdAndDelete(id);
        res.json("Eliminado")
    } catch (error) {
        res.json("No fue posible la acción")
    }
 };
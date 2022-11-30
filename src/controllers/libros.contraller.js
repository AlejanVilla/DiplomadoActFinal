const Libros= require('../models/Libros');



 exports.listar = async (req, res) =>{ 
    try {
        const libro = await Libros.find();
        res.send(libro);
    } catch(error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar los usuarios');
    } 
 };


 exports.agregar = async (req, res)=> {
   try{
    const { titulo,autor,ISBN,cantPaginas,editorial,formato,categoria,cantEjemplares,estado} = req.body;
    

    if(titulo && autor && ISBN && cantPaginas && editorial && formato && categoria && cantEjemplares && estado){
        const nuevoLibro = new Libros ({titulo,autor,ISBN,cantPaginas,editorial,formato,categoria,cantEjemplares,estado});
        await nuevoLibro.save();
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
        await Libros.findByIdAndUpdate(id, data);
        res.json("Actualizado")
    } catch (error) {
        res.json("No fue posible la acción")
    }
 };

 exports.eliminar = async (req, res) =>{
    try {
        const id = req.params.id;
        console.log(id);
        const eliminado = await Libros.findByIdAndDelete(id);
        res.json("Eliminado")
    } catch (error) {
        res.json("No fue posible la acción")
    }
 };
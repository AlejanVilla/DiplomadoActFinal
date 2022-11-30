const Categorias= require('../models/Categorias');



 exports.listar = async (req, res) =>{ 
    try {
        const categoria = await Categorias.find();
        res.send(categoria);
    } catch(error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar las categorias');
    } 
 };


 exports.agregar = async (req, res)=> {
   try{
    const { nombre,codigo} = req.body;
    

    if(nombre && codigo ){
        const nuevoCategoria = new Categorias ({nombre, codigo});
        await nuevoCategoria.save();
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
        await Categorias.findByIdAndUpdate(id, data);
        res.json("Actualizado")
    } catch (error) {
        res.json("No fue posible la acción")
    }
 };

 exports.eliminar = async (req, res) =>{
    try {
        const id = req.params.id;        
        const eliminado = await Categorias.findByIdAndDelete(id);
        res.json("Eliminado")
    } catch (error) {
        res.json("No fue posible la acción")
    }
 };
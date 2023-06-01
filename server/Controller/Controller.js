import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import movie from '../../server/Models/movies.js';


async function conectar()
{
   try 
    {
        console.log()
        await db.authenticate();
        console.log('la base de datos esta corriendo')

    }catch(e) 
    { 
        throw new Error(e)
    }  
 
}

conectar() 
 


 export async function select()
    {    
        try
        { 
      await movie.findAll()
.then(data =>console.log(data))
        
        
        }catch(e)
        {
        console.log(e) 
        }    
    }

 

 export async function selectId (id)
    {    
        try
        { 
        const user = await movie.findByPk(id)
      console.log(user.dataValues)
        
        }catch(e)
        {
        console.log(e)
        }    
    }
 

   export async function insert(id,titulo,descripcion,fecha,imagen)
    {
        const pelis = 
        {
        id:id,
        titulo:titulo,
        descripcion:descripcion,
        fecha:fecha,
        imagen:imagen
        }

    const existe1 = await movie.findOne({
            where:
            {
            titulo:pelis.titulo,
            }
        })

    if(existe1)
        {
        console.log('ese titulo o id ya existe')
        return null;
        }


        try
        {

        const usuario = new movie(pelis);
        await usuario.save();
        console.log({usuarioIngresado:usuario.dataValues});

        }catch(e)
        {
        console.log(e);
        }
    }


 

export async function Update (id,titulo,descripcion,fecha,imagen){
  

  try {
    // Busca el usuario por su ID
    const user = await movie.findByPk(id);

    if (!user) {
      console.log('Usuario no encontrado');
    }

    // Actualiza el usuario con los nuevos datos
    await user.update({ titulo:titulo, descripcion:descripcion, fecha:fecha,imagen:imagen });

    // Envía una respuesta con el usuario actualizado
    console.log(user)
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    console.log('Error al actualizar el usuario');
  }
}

  export async function Delete(req,res)
    {

    try {
        const peli =await movie.findOne({
            where:{id:req.params.id}
            })

            await movie.destroy({
            where: {id:req.params.id} // Borra el registro de la tabla donde id sea igual a 5
        // También resetea el contador de ID auto-incrementable en caso
        //de que queramos borrar todos los registros
            });

            console.log({PeliculaEliminada:peli})
        } catch (error) {
            console.error('Error al eliminar la tabla:', error);
        }
    }



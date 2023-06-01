import tareas from '../database/Models/tareasModels.js';


export const renderCreate = (req,res)=>
{
res.render('create')
}

 export async function render(req,res)
    {    
        try
        { 
      const user = await tareas.findAll()
  
res.render('index',{data:user})
         
          
        }catch(e)
        {
        console.log(e) 
        }    
    }

 

 

   export async function insert(req,res)
    {

const user  = req.body

      //const usuario = new tareas(user);
      //await usuario.save();
      //console.log({usuarioIngresado:usuario.dataValues});
console.log(user)
res.redirect('/') 
       
     
    }


 

export async function Update (req,res){
  

  try {
    const id = req.params.id
    const user = await tareas.findAll()
const usuario = await tareas.findOne({where: {id: id}})

 
  
    if (!user) {
      console.log('Usuario no encontrado');
     

    }

    //await user.update({ tarea:req.params.tarea, inicio:req.params.inicio, fin:req.params.fin,status:req.params.status });
console.log(usuario.dataValues);
res.render('edit',{datos:user,id:id})

  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    console.log('Error al actualizar el usuario');
  }
}

  export async function Delete(req,res)
    {

    try {
        const peli =await tareas.findOne({
            where:{id:req.params.id}
            })

            await tareas.destroy({
            where: {id:req.params.id} // Borra el registro de la tabla donde id sea igual a 5
        // También resetea el contador de ID auto-incrementable en caso
        //de que queramos borrar todos los registros
            });

            console.log({PeliculaEliminada:peli})
res.redirect('/')
        } catch (error) {
            console.error('Error al eliminar la tabla:', error);
        }
    }



import db from './src/database/db.js';
import express from 'express';
import rutas from './src/routes/routes.js';
const app = express()
const port = 3000 
const notFound = '404' || 'hola' 
 
 app.use(rutas)  
 app.use(express.json())
 app.set('view engine','ejs')
 app.set('views','./src/views')
 app.set(express.static('./src/public'))
 
app.use((req,res)=>
{
res.status(404).render(notFound) 
})  

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
 
console.clear()

app.listen(port,()=>
{
console.clear()
console.log('server is running in port '+port)
})


   app.get('/',(req,res)=>
{
})
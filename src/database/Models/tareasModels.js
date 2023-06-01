import { DataTypes } from 'sequelize';
import db from '../db.js';




const tareas = db.define('tareas',{
    id:
    {
        type:DataTypes.INTEGER,
        primaryKey:true
    },
 
    tarea:
    {
        type:DataTypes.STRING, 
        allowNull:false
    },

    inicio:
    {
         type:DataTypes.DATE,
        allowNull:false
    }, 

    fin:
    {
        type:DataTypes.DATE,
        allowNull:false
    },

    status: 
    {
        type:DataTypes.STRING,
        allowNull:false
    },
},{tableName:'tareas'}) 


 
export default tareas;
import sequelize from 'sequelize';


 const db = new sequelize('pelis','root','',{
host:'localhost',
dialect:'mysql',
})
 
export default db

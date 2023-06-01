import  express  from 'express';
import * as database from '../Controller/Controller.js'
const rutas = express.Router();    

rutas.get('/',database.render)
rutas.get('/create',database.renderCreate);
rutas.post('/insert',database.insert);
rutas.get('/update/:id',database.Update);
rutas.get('/delete/:id',database.Delete);



export default rutas




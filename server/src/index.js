 import express from 'express';

 import middlewareConfig from './config/middleware';
 import './config/db';
 import { CustomerRoutes } from './modules';

 const app = express();

 middlewareConfig(app)

 app.get('/', (req, res) => {
     res.send('welcome')
 })

 app.use('/api/v1/customers', CustomerRoutes)

 app.listen(1202, err => {
     if(err) {
         console.error(err);
     } else {
         console.log('Server is running 1202')
     }
 })
import express from 'express';

// Carga las variables de entorno. Se pueden usar en todo el proyecto. 
import 'dotenv/config'
// Carga la conexion a la bbdd
import {connectDB} from './config/bd'
import cors from 'cors';
import {corsConfig} from './config/cors'
import {errorHandler} from './src/middleware/error.middleware'
import MedicineRouter from './src/routes/medicines.routes'
const app = express()


connectDB();
app.use(cors(corsConfig))
// Permite leer los datos que vienen de un formulario
app.use(express.json())

app.use('/medicines', MedicineRouter)

app.use(errorHandler)


export default app; 

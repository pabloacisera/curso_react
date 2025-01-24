import express from 'express'
import cors from 'cors'
import { DataController } from './controller/DataController.js'

const app = express()

app.use(cors('*'))

app.get('/api/data', DataController.getData)

app.listen(3000, ()=>{
   console.log('Servidor corriendo en puerto 3000')
})

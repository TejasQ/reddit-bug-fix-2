import express from "express";
import cors from "cors"

//importar db
import db from "./database/db.js"

//impoetar enrutador
import blogRoutes from './routes/routes.js'

const app = express()

app.use( cors())
app.use(express.json())
app.use ('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa a la base de datos')
} catch (error) {
    console.log(`fail: ${error}`)
}

/* app.get('/', (req, res)=>{
    res.send('hola')
})  */
 
app.listen(3650, ()=>{
    console.log('server running 3650')
})
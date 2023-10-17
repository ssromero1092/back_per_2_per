const express = require('express')
const cors = require('cors');
const app=express()
const connection=require('../app/db/connection')

async function start(){
    const prueba = await connection()
    console.log('Conexion Exitosa a la BD');
};

start();


const routesChat = require('./routes/chatRoutes');
require('dotenv').config()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//consfiguraciones
const PORT = process.env.PORT || 3000;

const RUTA = process.env.RUTA;

console.log(RUTA);
app.use(RUTA,routesChat);


//rutas

app.listen(PORT,function() {
    console.log('Servidor en puerto : ',PORT);
});


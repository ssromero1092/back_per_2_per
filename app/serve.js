//const cors = require('cors');
const express = require('express')
const app=express()

const routesChat = require('./routes/chatRoutes');
require('dotenv').config()

//consfiguraciones
const PORT = process.env.PORT;

const RUTA = process.env.RUTA;

console.log(RUTA);
app.use(RUTA,routesChat);

//rutas

app.listen(PORT,function() {
    console.log('Servidor en puerto : ',PORT);
});


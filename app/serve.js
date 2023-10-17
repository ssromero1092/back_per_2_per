const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('../app/db/connection');

// Conexion con la Base de datos 
const start = async () => {
  try {
    await connection();
    console.log('Conexión exitosa a la BD');
  } catch (error) {
    console.error('Error al conectar a la BD:', error);
  }
};

// Ejecuta la conexion
start();

const routesChat = require('./routes/chatRoutes');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Configuraciones
const PORT = process.env.PORT || 3000;
const RUTA = process.env.RUTA;

console.log(`Ruta: ${RUTA}`);

app.use(RUTA, routesChat);

// Rutas
app.listen(PORT, () => {
  console.log(`Servidor en puerto: ${PORT}`);
});
// Rutas del sistema 
const express = require('express');
const router = express.Router();
const chat = require('../services/Chat/router');

router.use('/chat', chat);

module.exports = router;


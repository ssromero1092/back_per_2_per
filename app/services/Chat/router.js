const express = require('express');
const router = express.Router();


//Controllers
const chatController = require('./ChatController')



router.get('/',chatController.getChat);



module.exports = router;
const express = require('express');
const router = express.Router();


//Controllers
const chatController = require('./ChatController')



router.post('/',chatController.postChat);



module.exports = router;
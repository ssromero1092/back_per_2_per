const express = require('express');
const router = express.Router();


//Controllers
const chatController = require('./ChatController')


router.get('/',chatController.getChat);
router.post('/',chatController.postChat);



module.exports = router;
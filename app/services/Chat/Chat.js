//modelo tabla chatlog
const mongoose = require('mongoose');
const { Schema } = mongoose;
const Chatlog = new Schema({
    usuario: String,
    tipo_mensaje:String,
    valor_entrada:Number,
    valor_salida:Number,
    timestamp:Date,
});
const ChatlogModel = mongoose.model('chatlog',Chatlog)

module.exports = ChatlogModel
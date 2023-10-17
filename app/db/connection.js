const mongoose = require('mongoose')
const password = 'sXajVD06HFNKib8F'
const dbname = 'per2per'
const uri = `mongodb+srv://ssromero:${password}@cluster0.wwmygtz.mongodb.net/${dbname}?retryWrites=true&w=majority`
module.exports = ()=>mongoose.connect(uri)
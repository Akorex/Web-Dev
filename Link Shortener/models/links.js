const mongoose = require('mongoose')


const linkSchema = new mongoose.Schema({
    urlCode: String,
    shortUrl: String,
    longUrl: String,
    date: {type: String, default: Date.now()}
})

module.exports = mongoose.model('Link Schema', linkSchema)
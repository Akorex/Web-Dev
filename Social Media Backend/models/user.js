const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name must be provided']
    }, 
    email: {
        type: String, 
        required: [true, 'email must be provided'],
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'your password should be longer than 6 characters']
    }
})

model = mongoose.model("User", userSchema)
module.exports = model
const mongoose = require('mongoose')



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be blank'],
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: [true, 'Email cannot be blank'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
        unique: true 
    }, 

    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'your password should be longer than 6 characters']

    }
})



module.exports = mongoose.model("User Schema", UserSchema)
import mongoose  from "mongoose"
import { sign } from "jsonwebtoken"
import { jwt_lifetime, jwt_secret } from "../config/config"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        minlength: 3,
        maxlength: 50
    },

    email: {
        type: String,
        required: [true, 'email is required'],
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


const User = mongoose.model('User', UserSchema)

export default User
const User = require('../models/user')
const bcrypt = require('bcryptjs')

const getAllUsers = async(req, res) => {
    const users = await User.find({})

    if (!users) {
        return res.status(404).json({message: "No user found"})
    }

    return res.status(200).json({users})
}


const addUser = async(req, res) => {
    const {name, email, password} = req.body

    // check if user already exists
    const existingUser = await User.findOne({email})
    if (existingUser){
        return res.status(400).json({message: "User already exists. Login instead"})
    }
     
    // Create a salt
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt)

    const newUser = new User({
        name,
        email,
        password: hashedPassword, 
        blogs: []
    })

    
    try {
       await newUser.save()
    } catch (error) {
        console.log(error)
    }

    return res.status(201).json({newUser})
}

const login = async (req, res) => {
    const {email, password} = req.body

    const existingUser = await User.findOne({email})
    if (!existingUser){
        return res.status(404).json({message: "This user does not exist"})
    }
    
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)
    if (!isPasswordCorrect){
        return res.status(400).json({message: "Incorrect Password"})
    }

    return res.status(200).json({message: "Login successful"})
}


module.exports = {getAllUsers, addUser, login}
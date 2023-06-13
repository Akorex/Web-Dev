const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'company name cannot be blank'],
        maxlength: 50
    },
    position: {
        type: String,
        required: [true, 'position cannot be blank'],
        maxlength: 50
    },
    status: {
        type: String,
        enum: ['interview', 'pending', 'declined'],
        default: 'pending'
    }, 
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'please provide a user']
    }, 

}, { timestamps: true })

module.exports = mongoose.model('Jobs', JobSchema)
import mongoose from "mongoose"

const Workspace = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for the workspace'],
        maxlength: 20
    }, 

    members: [{
        type: mongoose.Types.ObjectId,
        ref: 'User', 
        required: [true, 'each workspace must have users']
    }], 

    visibility: {
        type: Boolean,
        default: false
    }
})
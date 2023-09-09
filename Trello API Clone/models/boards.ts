import mongoose from 'mongoose'

const BoardSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        maxlength: 50,
        unique: true
    },

    content: {
        type: String, 
        required: true
    },

    status: {
        type: String,
        enum: ['To do', 'Doing', 'Done'],
        default: 'To do'
    }, 

    workspace: {
        type: mongoose.Types.ObjectId,
        ref: 'Workspace',
        required: [true, 'each board must belong to a workspace']
    }

}, {timestamps: true}
)

const Boards = mongoose.model('Boards', BoardSchema)

export default Boards
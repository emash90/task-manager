const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'Name cannot be more than 20 characters']

    },
    completed: {
        default: false,
        type: Boolean,
    },
})
module.exports = mongoose.model('Task', TaskSchema)
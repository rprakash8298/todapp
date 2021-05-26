const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: String,
    status: {
        type:Boolean,
        default:false  
    }
})

module.exports = mongoose.model('Task', taskSchema)
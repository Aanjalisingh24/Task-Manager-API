const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        minlength:3
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        enum: ["pending" , "compleated"],
        default: "pending"
    },
    priority:{
        type: String,
        enum: ["low" , "medium" , "high"],
        default: "low"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

module.exports = mongoose.model('Task' , taskSchema);
const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type: String,
        unique: true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true});


module.exports = mongoose.model('User' , userschema);
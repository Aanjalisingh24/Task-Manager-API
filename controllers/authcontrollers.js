const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// signup
exports.signup = async(req,res) =>{
    try{
        const {name,email,password} = req.body;

        const userEXits = await User.findOne({email});
        if(userEXits){
            return res.status(400).json({message: "User exists"})
        }

        const hashedPassword = await bcrypt.hash(password , 10);

        const user = new User ({name, email, password: hashedPassword});
        await user.save();

        res.status(201).json({message: "User registered"});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

// login
exports.login = async (req,res) =>{
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email})
        if(!user) return res.status(400).json({message: "invalid creds"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: "invalid creds"});

        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        )

        res.json({token});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};
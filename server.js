require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json());

// routes
app.use('/api/auth', require('./routes/authroutes'));
app.use('/api/tasks', require('./routes/taskroutes'));

app.listen(3000, ()=>{
    console.log("server running...");
});
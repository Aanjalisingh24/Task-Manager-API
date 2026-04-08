const Task = require('../models/task');

const createTask = async(req,res) =>{
    try{
        const task = new Task({
            ...req.body,
            user: req.user.userId
        });

        await task.save();
        res.status(201).json({task});
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};

const getTasks = async (req,res)=>{
    try{
        const {status , priority} = req.query;

        let filter = {user: req.user.userId};
        if(status) filter.status = status;
        if(priority) filter.priority = priority;

        const tasks = await Task.find(filter);

        res.json(tasks);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};

const updateTask = async (req,res)=>{
    try{
        const task = await Task.findOneAndUpdate(
            {_id: req.params.id, user: req.user.userId},
            req.body,
            {new: true, runValidators: true}
        );

        if(!task) return res.status(404).json({message: "Not found"});

        res.json(task);
    } catch(err){
        res.status(400).json({message: err.message});
    }
};

const deleteTask = async (req,res)=>{
    try{
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            user: req.user.userId
        });

        if(!task) return res.status(404).json({message: "not found"});

        res.json({message: "Deleted"});
    }catch(err){
        res.status(400).json({message: err.message});
    }
};

module.exports = { createTask  ,getTasks , updateTask , deleteTask};
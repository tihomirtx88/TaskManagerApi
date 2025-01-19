const Task = require("../model/Task");

const getAllTasks = (req, res) =>{
    res.send('All tasks');
};

const createTasks = async (req, res) =>{
    const task = await Task.create(req.body);
    res.status(201).json({task});
};

const getTask = (req, res) =>{
    res.send('Get tasks');
};

const deleteTask = (req, res) =>{
    res.send('Delete tasks');
};

const updateTask = (req, res) =>{
    res.send('Update tasks');
};

module.exports = {
    getAllTasks, 
    createTasks, 
    getTask,
    deleteTask,
    updateTask
};
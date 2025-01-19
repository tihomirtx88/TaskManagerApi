const Task = require("../model/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({tasks});
  } catch (error) {
    
  }
};

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({msg: error});
  }
};

const getTask = (req, res) => {
  res.send("Get tasks");
};

const deleteTask = (req, res) => {
  res.send("Delete tasks");
};

const updateTask = (req, res) => {
  res.send("Update tasks");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  deleteTask,
  updateTask,
};

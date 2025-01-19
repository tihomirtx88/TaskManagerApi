const express = require("express");
const { getAllTasks, getTask, deleteTask, updateTask, createTasks, editTask } = require("../controllers/taskController");
const router = express.Router();

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask).put(editTask);

module.exports = router;
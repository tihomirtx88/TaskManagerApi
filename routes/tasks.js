const express = require("express");
const { getAllTasks, getTask, deleteTask, updateTask, createTasks } = require("../controllers/taskController");
const router = express.Router();

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
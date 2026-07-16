const express = require('express');
const taskController = require('../controllers/task.controller');

const router = express.Router();

router.route('/').get(taskController.listTasks).post(taskController.createTask);
router
  .route('/:taskId')
  .get(taskController.getTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;

const path = require('path');
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router
  .route('/todoList')
  .get(controller.fetch)
  .post(controller.post)
  .delete(controller.delete);

module.exports = router;
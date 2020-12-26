const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const TodosController = require('../controllers/TodosController');

router.get('/users', UserController.index);
router.post('/users', UserController.create);
router.delete('/users/:id', UserController.delete);
router.put('/users/:id', UserController.update);

router.get('/todos', TodosController.index);
router.post('/todos', TodosController.create);
router.delete('/todos/:id', TodosController.delete);
router.put('/todos/:id', TodosController.update);

module.exports = router;
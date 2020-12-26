const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const TodosController = require('../controllers/TodosController');

router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getSingle);
router.post('/users', UserController.create);
router.delete('/users/:id', UserController.delete);
router.put('/users/:id', UserController.update);

router.get('/todos', TodosController.getAll);
router.get('/todos/:id', TodosController.getSingle);
router.get('/todos/user/:user_id', TodosController.getFromUser);
router.post('/todos', TodosController.create);

module.exports = router;
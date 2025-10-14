var express = require('express');
var usersController = require('../controllers/users.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', usersController.index);
router.post('/', usersController.create);
router.get('/:id', usersController.findById);
router.patch('/:id', usersController.update);
router.delete('/:id', usersController.delete);
module.exports = router;

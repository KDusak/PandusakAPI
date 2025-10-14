var express = require('express');
var childExpensesController = require('../../controllers/admin/child-expenses.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', childExpensesController.index);
router.post('/', childExpensesController.create);
router.get('/:id', childExpensesController.findById);
router.patch('/:id', childExpensesController.update);
router.delete('/:id', childExpensesController.delete);
module.exports = router;

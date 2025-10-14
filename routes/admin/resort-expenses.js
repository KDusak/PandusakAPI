var express = require('express');
var resortExpensesController = require('../../controllers/admin/resort-expenses.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', resortExpensesController.index);
router.post('/', resortExpensesController.create);
router.get('/:id', resortExpensesController.findById);
router.patch('/:id', resortExpensesController.update);
router.delete('/:id', resortExpensesController.delete);
module.exports = router;

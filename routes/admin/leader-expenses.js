var express = require('express');
var leaderExpensesController = require('../../controllers/admin/leader-expenses.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', leaderExpensesController.index);
router.post('/', leaderExpensesController.create);
router.get('/:id', leaderExpensesController.findById);
router.patch('/:id', leaderExpensesController.update);
router.delete('/:id', leaderExpensesController.delete);
module.exports = router;

var express = require('express');
var employeeController = require('../../controllers/admin/employee.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', employeeController.index);
router.post('/', employeeController.create);
router.get('/:id', employeeController.findById);
router.patch('/:id', employeeController.update);
router.delete('/:id', employeeController.delete);
module.exports = router;

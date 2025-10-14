var express = require('express');
var campDescriptionController = require('../../controllers/admin/camp-description.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', campDescriptionController.index);
router.post('/', campDescriptionController.create);
router.get('/:id', campDescriptionController.findById);
router.patch('/:id', campDescriptionController.update);
router.delete('/:id', campDescriptionController.delete);
module.exports = router;

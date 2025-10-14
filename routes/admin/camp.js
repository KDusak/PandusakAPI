var express = require('express');
var campController = require('../../controllers/admin/camp.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', campController.index);
router.post('/', campController.create);
router.get('/:id', campController.findById);
router.put('/:id', campController.update);
router.delete('/:id', campController.delete);
router.get('/full/:id', campController.complexFindById);
module.exports = router;

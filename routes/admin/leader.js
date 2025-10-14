var express = require('express');
var leaderController = require('../../controllers/admin/leader.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', campController.index);
router.post('/', campController.create);
router.get('/:id', campController.findById);
router.patch('/:id', campController.update);
router.delete('/:id', campController.delete);
module.exports = router;

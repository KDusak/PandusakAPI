var models = require('../../models');
const Validator = require("fastest-validator");

const schema = {
    breakfastCost: {type: "number", nullable: false},
    breakfastCount: {type: "number", nullable: false},
    morning_snackCost: {type: "number", nullable: false},
    morning_snackCount: {type: "number", nullable: false},
    lunchCost: {type: "number", nullable: false},
    lunchCount: {type: "number", nullable: false},
    afternoon_snackCost: {type: "number", nullable: false},
    afternoon_snackCount: {type: "number", nullable: false},
    dinnerCost: {type: "number", nullable: false},
    dinnerCount: {type: "number", nullable: false},
    rewardsCost: {type: "number", nullable: false},
    entryFees: {type: "number", nullable: false}
}
const validator = new Validator();
const check = validator.compile(schema);

function getAll(req, res) {
    models.ChildExpenses.getAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({error: error});
    });
}

function findById(req, res) {
    const id = req.params.id;
    models.ChildExpenses.findByPk(id).then(result => {
        res.status(200);
        res.json(result);
    }).catch(error => {
        res.status(500);
        res.json({ error: error });
    })
}

function create(req, res) {
    const childExpenses = {
        breakfastCost: req.body.breakfastCost,
        breakfastCount: req.body.breakfastCount,
        morning_snackCost: req.body.morning_snackCost,
        morning_snackCount: req.body.morning_snackCount,
        lunchCost: req.body.lunchCost,
        lunchCount: req.body.lunchCount,
        afternoon_snackCost: req.body.afternoon_snackCost,
        afternoon_snackCount: req.body.afternoon_snackCount,
        dinnerCost: req.body.dinnerCost,
        dinnerCount: req.body.dinnerCount,
        rewardsCost: req.body.rewardsCost,
        entryFees: req.body.entryFees
    }

    const checkResult = check(childExpenses);
    if (checkResult) {
        models.ChildExpenses.create(childExpenses).then(result => {
            res.status(200).json({
                success: true,
                message: 'ChildExpenses created successfully.',
                childExpenses: result
            });
        }).catch(error => {
            res.status(500).json({
                success: false,
                message: error.message,
                error: error
            })
        });
    } else {
        res.status(500).json({
            success: false,
            message: "Object is invalid!",
            error: checkResult
        })
    }
}

function update(req, res) {
    const id = req.params.id;
    const updatedChildExpenses = {
        breakfastCost: req.body.breakfastCost,
        breakfastCount: req.body.breakfastCount,
        morning_snackCost: req.body.morning_snackCost,
        morning_snackCount: req.body.morning_snackCount,
        lunchCost: req.body.lunchCost,
        lunchCount: req.body.lunchCount,
        afternoon_snackCost: req.body.afternoon_snackCost,
        afternoon_snackCount: req.body.afternoon_snackCount,
        dinnerCost: req.body.dinnerCost,
        dinnerCount: req.body.dinnerCount,
        rewardsCost: req.body.rewardsCost,
        entryFees: req.body.entryFees
    }

    const checkResult = check(updatedChildExpenses);
    if (checkResult) {
        models.ChildExpenses.update(updatedChildExpenses, {where: {id: id}}).then(result => {
            res.status(200).json({
                success: true,
                message: 'ChildExpenses updated successfully.',
                childExpenses: result
            });
        }).catch(error => {
            res.status(500).json({
                success: false,
                message: error.message,
                error: error
            })
        });
    } else {
        res.status(500).json({
            success: false,
            message: "Object is invalid!",
            error: checkResult
        })
    }
}

function remove(req, res) {
    const id = req.params.id;
    models.ChildExpenses.destroy({where: {id: id}}).then(result => {
        res.status(200).json({
            success: true,
            message: 'ChildExpenses deleted successfully.'
        })
    }).catch(error => {
        res.status(500).json({
            success: false
        })
    })
}

module.exports = {
    index: getAll,
    findById: findById,
    create: create,
    update: update,
    delete: remove
}
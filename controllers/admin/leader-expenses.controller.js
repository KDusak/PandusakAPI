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
    payment: {type: "number", nullable: false},
    entryFees: {type: "number", nullable: false}
}
const validator = new Validator();
const check = validator.compile(schema);

function getAll(req, res) {
    models.LeaderExpenses.getAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({error: error});
    });
}

function findById(req, res) {
    const id = req.params.id;
    models.LeaderExpenses.findByPk(id).then(result => {
        res.status(200);
        res.json(result);
    }).catch(error => {
        res.status(500);
        res.json({ error: error });
    })
}

function create(req, res) {
    const leaderExpenses = {
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
        payment: req.body.payment,
        entryFees: req.body.entryFees
    }

    const checkResult = check(leaderExpenses);
    if (checkResult) {
        models.LeaderExpenses.create(leaderExpenses).then(result => {
            res.status(200).json({
                success: true,
                message: 'LeaderExpenses created successfully.',
                leaderExpenses: result
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
    const updatedLeaderExpenses = {
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

    const checkResult = check(updatedLeaderExpenses);
    if (checkResult) {
        models.LeaderExpenses.update(updatedLeaderExpenses, {where: {id: id}}).then(result => {
            res.status(200).json({
                success: true,
                message: 'LeaderExpenses updated successfully.',
                leaderExpenses: result
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
    models.LeaderExpenses.destroy({where: {id: id}}).then(result => {
        res.status(200).json({
            success: true,
            message: 'LeaderExpenses deleted successfully.'
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
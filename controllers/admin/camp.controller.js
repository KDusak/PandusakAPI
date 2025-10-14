var models = require('../../models');
const Validator = require("fastest-validator");
const schema = {
    startDate: {type: 'date', nullable: false},
    endDate: {type: 'date', nullable: false},
    campDescriptionId: {type: 'number', nullable: true},
    childExpensesId: {type: 'number', nullable: true},
    leaderExpensesId: {type: 'number', nullable: true},
}
const validator = new Validator();
const check = validator.compile(schema);


function getAll(req, res) {
    models.Camp.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({error: error});
    })
}

function findById(req, res) {
    const id = req.params.id;
    models.Camp.findByPk(id)
        .then(result => {
            res.status(200);
            res.json(result);
        }).catch(error => {
        res.status(500);
        res.json({ error: error });
    })
}

function complexFindById(req, res) {
    const id = req.params.id;
    models.Camp.findByPk(id,{include: [models.CampDescription, models.ChildExpenses, models.LeaderExpenses]})
        .then(result => {
            res.status(200);
            res.json(result);
    }).catch(error => {
        res.status(500);
        res.json({ error: error });
    })
}

function create(req, res) {
    const newCamp = {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        campDescriptionId: req.body.campDescriptionId,
        childExpensesId: req.body.childExpensesId,
        leaderExpensesId: req.body.leaderExpensesId
    }

    const checkResult = check(newCamp);
    if (checkResult) {
        models.Camp.create(newCamp).then(result => {
            res.status(200).json({
                success: true,
                message: 'Camp created successfully.',
                camp: result
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
    const updatedCamp = {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        campDescriptionId: req.body.campDescriptionId,
        childExpensesId: req.body.childExpensesId,
        leaderExpensesId: req.body.leaderExpensesId
    }

    const checkResult = check(updatedCamp);
    if (checkResult) {
        models.Camp.update(updatedCamp, {where: {id: id}}).then(result => {
            res.status(200).json({
                success: true,
                message: 'Camp updated successfully.',
                camp: result
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
    models.Camp.destroy({where: {id: id}}).then(result => {
        res.status(200).json({
            success: true,
            message: 'Camp deleted successfully.'
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
    fullFindById: complexFindById,
    create: create,
    update: update,
    delete: remove
}
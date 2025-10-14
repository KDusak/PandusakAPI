var models = require('../../models');
const Validator = require("fastest-validator");

const schema = {
    electricity: {type: "number", nullable: true},
    gas: {type: "number", nullable: true},
    water: {type: "number", nullable: true},
    waste: {type: "number", nullable: true},
    landLease: {type: "number", nullable: true},
    loan: {type: "number", nullable: true}
}
const validator = new Validator();
const check = validator.compile(schema);

function getAll(req, res) {
    models.ResortExpenses.getAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({error: error});
    });
}

function findById(req, res) {
    const id = req.params.id;
    models.ResortExpenses.findByPk(id).then(result => {
        res.status(200);
        res.json(result);
    }).catch(error => {
        res.status(500);
        res.json({ error: error });
    })
}

function create(req, res) {
    const leaderExpenses = {
        electricity: req.body.electricity,
        gas: req.body.gas,
        water: req.body.water,
        waste: req.body.waste,
        landLease: req.body.landLease,
        loan: req.body.loan
    }

    const checkResult = check(leaderExpenses);
    if (checkResult) {
        models.ResortExpenses.create(leaderExpenses).then(result => {
            res.status(200).json({
                success: true,
                message: 'ResortExpenses created successfully.',
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
    const updatedResortExpenses = {
        electricity: req.body.electricity,
        gas: req.body.gas,
        water: req.body.water,
        waste: req.body.waste,
        landLease: req.body.landLease,
        loan: req.body.loan
    }

    const checkResult = check(updatedResortExpenses);
    if (checkResult) {
        models.ResortExpenses.update(updatedResortExpenses, {where: {id: id}}).then(result => {
            res.status(200).json({
                success: true,
                message: 'ResortExpenses updated successfully.',
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
    models.ResortExpenses.destroy({where: {id: id}}).then(result => {
        res.status(200).json({
            success: true,
            message: 'ResortExpenses deleted successfully.'
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
var models = require('../../models');
const Validator = require("fastest-validator");
const schema = {
    firstName: {type: 'text', nullable: false},
    lastName: {type: 'text', nullable: false},
    wage: {type: 'number', nullable: true},
    wageTypeId: {type: 'number', nullable: true}
}
const validator = new Validator();
const check = validator.compile(schema);


function getAll(req, res) {
    models.Employee.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({error: error});
    })
}

function findById(req, res) {
    const id = req.params.id;
    models.Employee.findByPk(id)
        .then(result => {
            res.status(200);
            res.json(result);
        }).catch(error => {
        res.status(500);
        res.json({ error: error });
    })
}

function create(req, res) {
    const newEmployee = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        wage: req.body.wage,
        wageTypeId: req.body.wageTypeId
    }

    const checkResult = check(newEmployee);
    if (checkResult) {
        models.Employee.create(newEmployee).then(result => {
            res.status(200).json({
                success: true,
                message: 'Employee created successfully.',
                Employee: result
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
    const updatedEmployee = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        wage: req.body.wage,
        wageTypeId: req.body.wageTypeId
    }

    const checkResult = check(updatedEmployee);
    if (checkResult) {
        models.Employee.update(updatedEmployee, {where: {id: id}}).then(result => {
            res.status(200).json({
                success: true,
                message: 'Employee updated successfully.',
                Employee: result
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
    models.Employee.destroy({where: {id: id}}).then(result => {
        res.status(200).json({
            success: true,
            message: 'Employee deleted successfully.'
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
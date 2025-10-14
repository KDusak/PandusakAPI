var models = require('../../models');
const Validator = require("fastest-validator");
const schema = {
    firstName: {type: 'text', nullable: false},
    lastName: {type: 'text', nullable: false},
    chief: {type: 'boolean', nullable: false}
}
const validator = new Validator();
const check = validator.compile(schema);


function getAll(req, res) {
    models.Leader.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({error: error});
    })
}

function findById(req, res) {
    const id = req.params.id;
    models.Leader.findByPk(id)
        .then(result => {
            res.status(200);
            res.json(result);
        }).catch(error => {
        res.status(500);
        res.json({ error: error });
    })
}

function create(req, res) {
    const newLeader = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        chief: req.body.chief
    }

    const checkResult = check(newLeader);
    if (checkResult) {
        models.Leader.create(newLeader).then(result => {
            res.status(200).json({
                success: true,
                message: 'Leader created successfully.',
                Leader: result
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
    const updatedLeader = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        chief: req.body.chief
    }

    const checkResult = check(updatedLeader);
    if (checkResult) {
        models.Leader.update(updatedLeader, {where: {id: id}}).then(result => {
            res.status(200).json({
                success: true,
                message: 'Leader updated successfully.',
                Leader: result
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
    models.Leader.destroy({where: {id: id}}).then(result => {
        res.status(200).json({
            success: true,
            message: 'Leader deleted successfully.'
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
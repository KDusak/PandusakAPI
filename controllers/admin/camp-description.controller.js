var models = require('../../models');
const Validator = require("fastest-validator");
const schema = {
    name: {type: 'text', nullable: false},
    description: {type: 'text', nullable: true},
    duration: {type: 'number', nullable: false},
    capacity: {type: 'number', nullable: false}
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

function create(req, res) {
    const newCamp = {
        name: req.body.name,
        description: req.body.description,
        duration: req.body.duration,
        capacity: req.body.capacity
    }

    const checkResult = check(newCamp);
    if (checkResult) {
        models.Camp.create(newCamp).then(result => {
            res.status(200).json({
                success: true,
                message: 'CampDescription created successfully.',
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
        name: req.body.name,
        description: req.body.description,
        duration: req.body.duration,
        capacity: req.body.capacity
    }

    const checkResult = check(updatedCamp);
    if (checkResult) {
        models.Camp.update(updatedCamp, {where: {id: id}}).then(result => {
            res.status(200).json({
                success: true,
                message: 'CampDescription updated successfully.',
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
            message: 'CampDescription deleted successfully.'
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
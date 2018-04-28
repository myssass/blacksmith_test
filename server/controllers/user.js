const User = require("../models").User
const Spot = require("../models").Spot

module.exports = {
    create(req, res) {
        return User
            .create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                admin: req.body.admin,
                createdAt: new Date(),
            })
            .then(user => res.status(201).send(user))
            .catch(err => res.status(400).send(err))
    },
    list(req, res) {
        return User
            .findAll({
                include: [{
                    model: Spot,
                    as: 'Spot',
                }],
            })
            .then(users => res.status(200).send(users))
            .catch(err => res.status(400).send(err))
    },
    retrieve(req, res) {
        return User
            .findById(req.params.user_id, {
                include: [{
                    model: Spot,
                    as: "Spot"
                }]
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User not found'
                    })
                }
                res.status(200).send(user)
            })
            .catch(err => res.status(400).send(err))
    },
    
    update(req, res) {
        return User
            .findById(req.params.user_id, {
                include: [{
                    model: Spot,
                    as: "Spot"
                }],
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: "User not found"
                    });
                }
                return user
                    .update({
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        admin: req.body.admin,
                        updatedAt: new Date(),
                    })
                    .then(user => res.status(200).send(user))
                    .catch(err => res.status(400).send(err))
            })
            .catch(err => res.status(400).send(err))
    },
    destroy(req, res) {
        return User
            .findById(req.params.user_id)
            .then(user => {
                if (!user) { 
                    return res.status(404).send({
                        message: "User not found"
                    });
                }
                return user
                    .destroy()
                    .then(_ => res.status(204).send())
                    .catch(err => res.status(400).send(err))
            })
            .catch(err => res.status(400).send(err));
    }
} 
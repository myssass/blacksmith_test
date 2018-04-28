const Spot = require("../models").Spot

module.exports = {
    create(req, res) {
        return Spot
            .create({
                floor: req.body.floor,
                occupency: req.body.occupency,
                createdAt: new Date(),
                user_id: req.params.user_id
            })
            .then(spot => res.status(201).send(spot))
            .catch(err => res.status(400).send(err))
    },
    getFreeSpots(req, res) {
        return Spot
            .findAll({
                where: {
                    occupency: false
                },
            })
            .then(spot => {
                if (!spot) {
                    return res.status(404).send({
                        message: "There is no free spot"
                    });
                }
                console.log(spot)
                res.status(200).send(spot)
            })
            .catch(err => res.status(400).send(err))
    },
    update(req, res) {
        return Spot
            .find({
                where: {
                    id: req.params.spot_id,
                    user_id: req.params.user_id,
                },
            })
            .then(spot => {
                if (!spot) {
                    return res.status(404).send({
                        message: "Spot not found"
                    });
                }

                return spot
                    .update({
                        floor: req.body.floor,
                        occupency: req.body.occupency,
                        updatedAt: new Date(),
                        user_id: req.params.user_id,
                    })
                    .then(spot => res.status(200).send(spot))
                    .catch(err => res.status(400).send(err))
            })
            .catch(err => res.status(400).send(err))
    },
    destroy(req, res) {
        return Spot
            .find({
                where: {
                    id: req.params.spot_id,
                    user_id: req.params.user_id,
                },
            })
            .then(spot => {
                if (!spot) {
                    return res.status(404).send({
                        message: "Spot not found"
                    });
                }

                return spot
                    .destroy()
                    .then(_ => res.status(204).send())
                    .catch(err => res.status(400).send(err))
            })
            .catch(err => res.status(400).send(err))
    }
}
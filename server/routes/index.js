const userController = require("../controllers").user
const spotControllerspotController = require("../controllers").spot

module.exports = (app) => {
    app.get('/api', (req, res) => re.status(200).send({
        message: "Welcome to blacksmith studio test api"
    }))

    app.get('/api/users', userController.list)
    app.get('/api/user/:user_id', userController.retrieve)
    app.post('/api/user', userController.create)
    app.put('/api/user/:user_id', userController.update)
    app.delete('/api/user/:user_id', userController.destroy)

    app.get('/api/spots/free', spotController.freeSpots)
    app.put('/api/spot/:spot_id/:user_id', spotController.update)
    app.post('/api/spot/:user_id', spotController.create)
    app.delete('/api/spot/:spot_id/:user_id', spotController.destroy)
}
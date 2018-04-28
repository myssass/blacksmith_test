const express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    app = express()
    
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.set('content-type', 'application/json')
    res.set('Access-Control-Allow-Methods', ['GET', 'POST', 'DELETE', 'PUT'])
    next();
})

require('./server/routes')(app)
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome.',
}))

module.exports = app
const express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    app = express()
    
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./server/routes')(app)
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome.',
}))

module.exports = app
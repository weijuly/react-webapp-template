import router from './src/server/controllers'
const express = require('express')

const app = express()

app.use('/_api', router)
app.use('/', express.static('public'))

module.exports = app

const express =require('express')
const router = express.Router()
const users = require('./models/users')
const home = require('./models/home')
const todos = require('./models/todos')
const  { authenticator } = require('../middle-ware/auth')

router.use('/users', users)
router.use('/todos', authenticator, todos)
router.use('/', authenticator, home)


module.exports = router
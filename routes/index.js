const express =require('express')
const router = express.Router()
const users = require('./models/users')
const home = require('./models/home')
const todos = require('./models/todos')

router.use('/users', users)
router.use('/todos', todos)
router.use('/', home)


module.exports = router
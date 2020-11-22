const express =require('express')
const router = express.Router()
const users = require('./models/users')
const home = require('./models/home')

router.use('/users', users)
router.use('/', home)


module.exports = router
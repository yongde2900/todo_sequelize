const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')
const db = require('../../models')
const User = db.User

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
})
)

router.get('/register', (req, res) => {
    res.render('register')
})


router.post('/register', (req, res) => {
    const errors = []
    const { name, email, password, confirmPassword } = req.body
    if (!name || !email || !password || !confirmPassword) {
        errors.push({ message: '所有欄位必填' })
    }
    if (password !== confirmPassword) {
        errors.push({ message: '密碼不相符' })
    }
    if (errors.length) {
        return res.render('register', {
            name,
            email,
            password,
            confirmPassword,
            errors
        })
    }
    User.findOne({ where: { email } }).then(user => {
        if (user) {
            errors.push({ message: '這個Email已經註冊過了。' })
            return res.render('register', {
                name,
                email,
                password,
                confirmPassword,
                errors
            })
        }
        return bcrypt
            .genSalt(10)
            .then(salt => bcrypt.hash(password, salt))
            .then(hash => User.create({
                name,
                email,
                password: hash
            }))
            .then(() => res.redirect('/'))
            .catch(err => console.log(err))
    })
})

router.get('/logout', (req, res) => {
    req.logOut()
    req.flash('success_msg', '成功登出')
    res.redirect('/users/login')
})

module.exports = router
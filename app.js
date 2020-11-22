const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const router = require('./routes/index')
const session = require('express-session')
const flash = require('connect-flash')
const usePassport = require('./config/passport')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(session({
    secret: 'ThisIsMySecret',
    resave: false,
    saveUninitialized: true
}))
usePassport(app)
app.use(flash())
app.use((req, res, next) => {
    res.locals.user = req.user
    res.locals.isAuthenticated = req.isAuthenticated()
    res.locals.success_msg = req.flash('success_msg')  
    res.locals.warning_msg = req.flash('warning_msg')
    res.locals.error = req.flash('error')
    next()
})
app.use(router)


app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`))
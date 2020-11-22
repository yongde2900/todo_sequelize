const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const router = require('./routes/index')
const session =require('express-session')
const usePassport = require('./config/passport')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(session({
    secret: 'ThisIsMySecret',
    resave: false,
    saveUninitialzed: true
}))
usePassport(app)

app.use(router)


app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`))
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const exEjsLay = require('express-ejs-layouts');
require("./passportconfig")(passport)



app.use(express.static(__dirname + '/public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.set('layout', 'layout')
app.use (exEjsLay)


app.use(express.urlencoded({ extened: false}))
app.use(flash())


//passport initialization
app.use(passport.initialize())
app.use(passport.session())

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))




//app.use(bodyParser.urlencoded({ limit: '1mb', extended: false}))
// routers
app.use('/', require('./routes/index'));
app.use('/', require('./routes/user'));


// connect mongoose to db
mongoose.connect(process.env.DATABASE_URL, { userNewURLParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.error('Connected to Mongoose'))


// app port
app.listen(process.env.PORT || 3000)
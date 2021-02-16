const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require("../models/user.js");


router.get('/login', (req, res) => {
    res.render('login.ejs')
})

router.get('/register', (req, res) => {
    res.render('register')
})




router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true,
  })(req, res, next);
});




router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword

        })
        user.save()
        
        res.redirect('/login')
    } catch {
        res.redirect('/register')
        

    }
})

// logout
// router.D('/logout', (req, res) => {
//     req.logOut()
//     res.redirect('/login')
// })

module.exports = router
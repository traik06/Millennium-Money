const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require("../models/user.js");
const Expense = require("../models/expense.js");

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


router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

router.get('/spending', (req, res) => {
    res.render('spending')
})
router.get('/saving', (req, res) => {
    res.render('saving')
})
router.get('/monthlyPayment', (req, res) => {
    res.render('monthlyPayment')
})
router.get('/fileExpenses', (req, res) => {
    res.render('fileExpenses')
})
router.get('/reports', (req, res) => {
    res.render('reports')
})


router.post('/fileExpenses', async (req, res) => {
    keys = Object.keys(req.body)
    for (i = 0; i < keys.length; i++) {
        const expense = new Expense({
            name: keys[i],
            amount: req.body[keys[i]]
            
        })
        expense.save()
    }

    
    
    res.render('dashboard')



    
})

// logout
// router.D('/logout', (req, res) => {
//     req.logOut()
//     res.redirect('/login')
// })

module.exports = router
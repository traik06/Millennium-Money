const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require("../models/user.js");
const Expense = require("../models/expense.js");
const Account = require("../models/expense.js");
const { ensureAuthenticated } = require("../auth.js");

router.get('/login', (req, res) => {
    res.render('login.ejs')
})

router.get('/register', (req, res) => {
    res.render('register')
})




router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
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







// logout
router.get('/logout', (req, res) => {
    req.logout();
    //req.flash('success_msg', 'Now logged out');
    res.redirect('index');
  });
module.exports = router





// may need idk lel

// router.post('/fileExpenses', async (req, res) => {
//     keys = Object.keys(req.body)
//     for (i = 0; i < keys.length; i++) {
//         const expense = new Expense({
//             name: keys[i],
//             amount: req.body[keys[i]]
            
//         })
//         expense.save()
//     }

    
    
//     res.render('dashboard')



    
// })

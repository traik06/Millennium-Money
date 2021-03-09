const express = require('express');
const router = express.Router();
const Account = require("../models/account.js");
const passport = require('passport');
const { ensureAuthenticated } = require('../auth.js');

router.get('/account', ensureAuthenticated, (req, res) => {
    
    
    res.render('account', { user: req.user });
})

router.post('/account', (req, res) => {
    const account = new Account({
        checkingAmount: req.body.checking,
        savingsAmount: req.body.savings,
        userID: req.user._id
    })
    account.save()
    res.render('dashboard')


})


module.exports = router


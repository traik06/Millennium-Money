const express = require('express');
const router = express.Router();
const Account = require("../models/account.js");
const passport = require('passport');

router.get('/account', (req, res) => {
    res.render('account')
})

router.post('/account', (req, res) => {
    const account = new Account({
        checkingAmount: req.body.checking,
        savingsAmount: req.body.savings
    })
    account.save()
    res.render('dashboard')


})


module.exports = router


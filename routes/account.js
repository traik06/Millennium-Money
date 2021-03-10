const express = require('express');
const router = express.Router();
const Account = require("../models/account.js");
const passport = require('passport');
const { ensureAuthenticated } = require('../auth.js');
const { response } = require('express');

router.get('/account', ensureAuthenticated, (req, res) => {
    
    
    res.render('account', { user: req.user });
})

router.post('/account', (req, res) => {
    const account = new Account({
        checkingAmount: req.body.checking,
        savingsAmount: req.body.savings,
        monthlyIncome: req.body.monthlyIncome,
        userID: req.user._id
    })
    account.save()
    res.render('dashboard')


})


router.get('/api', (req, res) => {
    data = 132
    response.json(data);
});

//router.get('/getAccountData', (req, res) => {
    // Account.findOne({}, (err, data) => {
    //     if (err) {
    //         response.end();
    //         return;
    //     }
    //     response.json({test:123});
    // });
//});

module.exports = router


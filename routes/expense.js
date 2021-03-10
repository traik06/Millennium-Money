const express = require('express');
const router = express.Router();
const passport = require('passport');
const Expense = require("../models/expense.js");
const Account = require("../models/account.js");
const { ensureAuthenticated } = require("../auth.js");

router.get('/spending', ensureAuthenticated, function(req, res) {
    Account.findOne({userID: req.user}).exec(function(err,obj) { 
        savingsamt = obj.savingsAmount 
        checkingamt = obj.checkingAmount
        //res.send(jacob)
        //console.log(jacob)
    
        if (!obj) {
            req.flash('error', 'that user does not have accounts');
            return res.redirect('/spending');
        }
        //Account.
        
        // var jacob = res.locals.jacob
        res.render('spending', {
            user: req.user, 
            savings: savingsamt,
            checking : checkingamt 
        });

    });
});

router.get('/spending2', ensureAuthenticated, function(req, res) {
    Expense.findOne({userID: req.user}).exec(function(err,obj) { 
        rent = obj.rentAmount
        car = obj.carAmount
        phone = obj.phoneAmount
        food = obj.foodAmount
        fuel = obj.fuelAmount
        leisure = obj.leisureAmount
        memberships = obj.membershipsAmount
        util = obj.utilitiesAmount
        internet = obj.internetAmount

        if (!obj) {
            req.flash('error', 'that user does not have expenses');
            return res.redirect('/spending2');
        }
        //Account.
        
        // var jacob = res.locals.jacob
        res.render('spending2', {
            user: req.user, 
            Rent: rent,
            Car : car,
            Phone : phone,
            Fuel : fuel,
            Leisure : leisure,
            Memberships : memberships,
            Util : util,
            Internet : internet
        });

    });
});

router.get('/spending3', ensureAuthenticated, function(req, res) {
    Account.findOne({userID: req.user}).exec(function(err,obj) { 
        jacob = obj.savingsAmount 
        //res.send(jacob)
        //console.log(jacob)
    
        if (!obj) {
            req.flash('error', 'that user does not have accounts');
            return res.redirect('/spending');
        }
        //Account.
        
        // var jacob = res.locals.jacob
        res.render('spending', {
            user: req.user, 
            data: jacob 
        });

    });
});



router.get('/monthlyPayment', ensureAuthenticated, (req, res) => {
    res.render('monthlyPayment', { user: req.user });
})
router.get('/fileExpenses', ensureAuthenticated, (req, res) => {
    res.render('fileExpenses', { user: req.user });
})
router.get('/reports', ensureAuthenticated, (req, res) => {
    res.render('reports', { user: req.user });
})



router.post('/fileExpenses', (req, res) => {
    const expense = new Expense({
        rentAmount: req.body.rent,
        carAmount: req.body.car,
        phoneAmount: req.body.phone,
        foodAmount: req.body.food,
        fuelAmount: req.body.fuel,
        leisureAmount: req.body.leisure,
        membershipsAmount: req.body.memberships,
        utilitiesAmount: req.body.utilities,
        internetAmount: req.body.internet,
        userID: req.user._id

    })
    expense.save()
res.render('dashboard')    
})

module.exports = router
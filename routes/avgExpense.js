const express = require('express');
const router = express.Router();
const passport = require('passport');
const Expense = require("../models/expense.js");
const Account = require("../models/account.js");
const { ensureAuthenticated } = require("../auth.js");

router.get('/avgSpendingSplash', (req, res) => {
    res.render('avgSpendingSplash')
})

router.get('/avgSpending', ensureAuthenticated, function(req, res) {
    Expense.findOne({userID: req.user , time:{$gt: new Date(new Date().setMonth(new Date().getMonth()-1))}}).exec(function(err,obj) { 
        
        
        rent1 = obj.rentAmount
        car1 = obj.carAmount
        phone1 = obj.phoneAmount
        food1 = obj.foodAmount
        fuel1 = obj.fuelAmount
        leisure1 = obj.leisureAmount
        memberships1 = obj.membershipsAmount
        util1 = obj.utilitiesAmount
        internet1 = obj.internetAmount

        if (!obj) {
            req.flash('error', 'that user does not have expenses');
            console.log(2)
            return res.redirect('dashboard');
        }
        //Account.
        Expense.findOne({userID: req.user , time:{$lt: new Date(new Date().setMonth(new Date().getMonth()-1))}}).exec(function(err,obj) { 
        

        rent2 = obj.rentAmount
        car2 = obj.carAmount
        phone2 = obj.phoneAmount
        food2 = obj.foodAmount
        fuel2 = obj.fuelAmount
        leisure2 = obj.leisureAmount
        memberships2 = obj.membershipsAmount
        util2 = obj.utilitiesAmount
        internet2 = obj.internetAmount
        

        if (!obj) {
            req.flash('error', 'that user does not have expenses');
            console.log(2)
            return res.redirect('dashboard');
        }
        res.render('avgSpending', {
            user: req.user, 
            Rent1: rent1,
            Car1 : car1,
            Phone1 : phone1,
            Food1 : food1,
            Fuel1 : fuel1,
            Leisure1 : leisure1,
            Memberships1 : memberships1,
            Util1 : util1,
            Internet1 : internet1,
            Rent2: rent2,
            Car2 : car2,
            Phone2 : phone2,
            Food2 : food2,
            Fuel2 : fuel2,
            Leisure2 : leisure2,
            Memberships2 : memberships2,
            Util2 : util2,
            Internet2 : internet2,

        });
    });
    
    });
});






















module.exports = router
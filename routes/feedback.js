const express = require('express');
const router = express.Router();
const passport = require('passport');
const Expense = require("../models/expense.js");
const Account = require("../models/account.js");
const { ensureAuthenticated } = require("../auth.js");



router.get('/reportSplash', (req, res) => {
    res.render('reportSplash')
})


router.get('/reportFeedback', ensureAuthenticated, function(req, res) {
    
    Expense.findOne({userID: req.user, time:{$gt: new Date(new Date().setMonth(new Date().getMonth()-1))}}).exec(function(err,obj) { 
        
        // if (!obj) {
        //     req.flash('error', 'that user does have an expense from last month');
        //     return res.redirect('spending');
        // }
        // //Account.
        // Expense.findOne({userID: req.user}).exec(function(err,obj) { 
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
                return res.redirect('spending');
            }
        Account.findOne({userID: req.user}).exec(function(err,obj) { 
            savingsamt = obj.savingsAmount 
            checkingamt = obj.checkingAmount
            incomeamt = obj.monthlyIncome 
            
        
            if (!obj) {
                req.flash('error', 'that user does not have accounts');
                return res.redirect('spending');
            }
            
            res.render('reportFeedback', {
                user: req.user, 
                Rent: rent,
                Car : car,
                Phone : phone,
                Food : food,
                Fuel : fuel,
                Leisure : leisure,
                Memberships : memberships,
                Util : util,
                Internet : internet,
                savings: savingsamt,
                checking : checkingamt,
                income : incomeamt

            });
        
        });
        
    });
});





module.exports = router
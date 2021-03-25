const express = require('express');
const router = express.Router();
const passport = require('passport');
const Expense = require("../models/expense.js");
const Account = require("../models/account.js");
const { ensureAuthenticated } = require("../auth.js");




router.get('/prevExpense', ensureAuthenticated, function(req, res) {
    Expense.findOne({userID: req.user}).exec(function(err,obj) { 
        savingsamt = obj.savingsAmount 
        checkingamt = obj.checkingAmount
        incomeamt = obj.monthlyIncome 
        //res.send(jacob)
        //console.log(jacob)
    
        if (!obj) {
            req.flash('error', 'that user does not have accounts');
            return res.redirect('spending');
        }
        //Account.
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
                return res.redirect('spending');
            }
            //Account.
            
            // var jacob = res.locals.jacob
            res.render('spending3', {
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
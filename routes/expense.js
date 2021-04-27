const express = require('express');
const router = express.Router();
const passport = require('passport');
const Expense = require("../models/expense.js");
const Account = require("../models/account.js");
const { ensureAuthenticated } = require("../auth.js");




router.get('/spending', ensureAuthenticated, (req, res) => {
    
    
    res.render('spending', { user: req.user });
})

router.get('/spending1', ensureAuthenticated, function(req, res) {
    Account.findOne({userID: req.user}).exec(function(err,obj) { 
        savingsamt = obj.savingsAmount 
        checkingamt = obj.checkingAmount
       
    
        if (!obj) {
            req.flash('error', 'that user does not have accounts');
            return res.redirect('spending');
        }
        
        
        
        res.render('spending1', {
            user: req.user, 
            savings: savingsamt,
            checking : checkingamt 
        });

    });
});

// router.get('/spending2', ensureAuthenticated, function(req, res) {
//     monthData=new Date();
//     monthData.setMonth(monthData.getMonth());
//     console.log(monthData.setMonth(monthData.getMonth()));
//     Expense.findOne({time:{$eq:monthData}}).exec(function(err,obj) { 
        
//         // if (!obj) {
//         //     req.flash('error', 'that user does have an expense from this month');
//         //     console.log(1)
//         //     return res.redirect('spending');
//         // }
//     Expense.findOne({userID: req.user}).exec(function(err,obj) { 
//         rent = obj.rentAmount
//         car = obj.carAmount
//         phone = obj.phoneAmount
//         food = obj.foodAmount
//         fuel = obj.fuelAmount
//         leisure = obj.leisureAmount
//         memberships = obj.membershipsAmount
//         util = obj.utilitiesAmount
//         internet = obj.internetAmount

//         if (!obj) {
//             req.flash('error', 'that user does not have expenses');
//             console.log(2)
//             return res.redirect('spending');
//         }
//         //Account.
        
//         // var jacob = res.locals.jacob
//         res.render('spending2', {
//             user: req.user, 
//             Rent: rent,
//             Car : car,
//             Phone : phone,
//             Food : food,
//             Fuel : fuel,
//             Leisure : leisure,
//             Memberships : memberships,
//             Util : util,
//             Internet : internet
//         });
//     });
//     });
// });

router.get('/spending2', ensureAuthenticated, function(req, res) {
    Expense.findOne({userID: req.user , time:{$gt: new Date(new Date().setMonth(new Date().getMonth()-1))}}).exec(function(err,obj) { 
        
       
    
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
            console.log(2)
            return res.redirect('spending');
        }
        
        
        
        res.render('spending2', {
            user: req.user, 
            Rent: rent,
            Car : car,
            Phone : phone,
            Food : food,
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
        savingsamt = obj.savingsAmount 
        checkingamt = obj.checkingAmount
        incomeamt = obj.monthlyIncome 
       
    
        if (!obj) {
            req.flash('error', 'that user does not have accounts');
            return res.redirect('spending');
        }
        
        Expense.findOne({userID: req.user, time:{$gt: new Date(new Date().setMonth(new Date().getMonth()-1))}}).exec(function(err,obj) { 
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




router.get('/monthlyPayment', ensureAuthenticated, (req, res) => {
    Account.findOne({userID: req.user}).exec(function(err,obj) { 
        savingsamt = obj.savingsAmount 
        checkingamt = obj.checkingAmount
        incomeamt = obj.monthlyIncome 
       
    
        if (!obj) {
            req.flash('error', 'that user does not have accounts');
            return res.redirect('dashboard');
        }
       
        Expense.findOne({userID: req.user, time:{$gt: new Date(new Date().setMonth(new Date().getMonth()-1))}}).exec(function(err,obj) { 
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
                return res.redirect('dashboard');
            }
         
            res.render('monthlyPayment', {
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
})
// router.get('/fileExpenses', ensureAuthenticated, (req, res) => {
//     Expense.findOne({userID: req.user}).exec(function(err,obj) { 
        
//         if (!obj) {
//             //may need return on this line, not sure
//             return res.render('fileExpenses', { user: req.user });
//         }
//         else{
//             return res.render('monthlyPayment', { user: req.user });
//         }
    
// })
// });




//
//
//FIX THIS FIX THIS FIX THIS FIX THIS FIX THIS FIX THIS FIX THIS FIX THIS FIX THIS FIX THIS FIX THIS FIX THIS FIX THIS FIX THIS
//
//
//
router.get('/fileExpenses', ensureAuthenticated, (req, res) => {
    res.render('fileExpenses', { user: req.user });


//     Expense.findOne({userID: req.user}).exec(function(err,obj) { 
        
//         if (!obj) {
//             //may need return on this line, not sure
//             return res.render('fileExpenses', { user: req.user });
//         }
//         else{
//             return res.render('monthlyPayment', { user: req.user });
//         }
    
// })
});

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
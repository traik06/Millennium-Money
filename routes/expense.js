const express = require('express');
const router = express.Router();
const passport = require('passport');
const Expense = require("../models/expense.js");
const { ensureAuthenticated } = require("../auth.js");

router.get('/spending', ensureAuthenticated, (req, res) => {
    res.render('spending', { user: req.user });
})



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
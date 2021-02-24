const express = require('express');
const router = express.Router();
const passport = require('passport');
const { ensureAuthenticated } = require("../auth.js");

router.get('/spending', (req, res) => {
    res.render('spending')
})



router.get('/monthlyPayment', (req, res) => {
    res.render('monthlyPayment')
})
router.get('/fileExpenses', (req, res) => {
    res.render('fileExpenses')
})
router.get('/reports', (req, res) => {
    res.render('reports')
})



router.post('/fileExpenses',  (req, res) => {
    console.log(req.user.id)
    var userID = req.user.id;
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
        id: userID

    })
    expense.save()
res.render('dashboard')    
})





module.exports = router
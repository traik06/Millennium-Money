const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    rentAmount: {
        type: Number,
        required: false,
    },
    carAmount: {
        type: Number,
        required: false,
    },
    phoneAmount: {
        type: Number,
        required: false,
    },
    foodAmount: {
        type: Number,
        required: false,
    },
    fuelAmount: {
        type: Number,
        required: false,
    },
    leisureAmount: {
        type: Number,
        required: false,
    },
    membershipsAmount: {
        type: Number,
        required: false,
    },
    utilitiesAmount: {
        type: Number,
        required: false,
    },
    internetAmount: {
        type: Number,
        required: false,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    time : { 
        type : Date, 
        default: Date.now 
    }  
})

const Expense = mongoose.model('Expense', expenseSchema)
module.exports = Expense
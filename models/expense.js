const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: false,
    // },
    // amount: {
    //     type: Number,
    //     required: false,
    // },
    
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
    id: {
        type: String,
        required: true,
    }
})

const Expense = mongoose.model('Expense', expenseSchema)
module.exports = Expense
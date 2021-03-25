const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({

        
    checkingAmount: {
        type: Number,
        required: false,
    },
    savingsAmount: {
        type: Number,
        required: false,
    },
    monthlyIncome: {
        type: Number,
        required: true,
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

const Account = mongoose.model('Account', accountSchema)
module.exports = Account
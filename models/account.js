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
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }


})


const Account = mongoose.model('Account', accountSchema)
module.exports = Account
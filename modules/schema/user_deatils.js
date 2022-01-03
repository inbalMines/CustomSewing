
const mongoose = require('mongoose')
const { Schema } = mongoose;

const userDetails = new mongoose.Schema({

    user_id: [{

        type: mongoose.Types.ObjectId,
        ref: `userSchema`

    }],

    user_sizes: {
        
        type: mongoose.Types.ObjectId,
        ref: `sizeSchema`

    },

    user_orders: {

        type: mongoose.Types.ObjectId,
        ref: `orderSchema`
    },


})

module.exports = mongoose.model(`userDetails`, userDetails)

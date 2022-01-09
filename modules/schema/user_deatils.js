
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

    }


})

module.exports = mongoose.model(`UsersDetails`, userDetails)

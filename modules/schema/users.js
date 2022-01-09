const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },

    password: {
        type: String,
        required: true,
        minlength: 4
    },

    email: {
        type: String,
        required: true,
        // match: /.+\@.+\..+/,   מה זה אומר?!
        unique: true
    },

    phoneNumber: {
        type: Number,
        unique: true,
        minlength: 10
    }


})

module.exports = mongoose.model(`Users`, userSchema)

const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,

    },

    Password: {
        type: String,
        required: true,
        minlength: 4
    },

    Email: {
        type: String,
        required: true,
        // match: /.+\@.+\..+/,   מה זה אומר?!
        unique: true
    },

    PhoneNumber: {
        type: Number,
        unique: true,
        minlength: 10
    }


})

module.exports = mongoose.model(`userSchema`, userSchema)

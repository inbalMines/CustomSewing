
const mongoose = require('mongoose')

const sizes_schema = new mongoose.Schema({

    bust: {
        type: Number,
        required: true,
        min: 80,
        max: 130
    },
    hip: {
        type: Number,
        required: true,
        min: 90,
        max: 140
    },
    waist: {
        type: Number,
        required: true,
        min: 65,
        max: 110
    }
})

module.exports = mongoose.model('sizeSchema', sizes_schema)

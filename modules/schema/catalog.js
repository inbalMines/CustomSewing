const mongoose = require('mongoose')
const { Schema } = mongoose;

const catalogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    
    description: {
        type: String,
        required: true
    },
    fabric: {
        type: String,
        required: true
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('Cataloges', catalogSchema)
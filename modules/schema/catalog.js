const mongoose = require('mongoose')
const { Schema } = mongoose;

const catalogSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        unique: true,
    },
    
    Description: {
        type: String,
        required: true
    },
    Fabric: {
        type: String,
        required: true
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('catalogSchema', catalogSchema)
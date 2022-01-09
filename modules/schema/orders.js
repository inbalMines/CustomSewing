const mongoose = require('mongoose')
const { Schema } = mongoose;


const orderSchema = new mongoose.Schema({
    catalog_item: {

        type: mongoose.Types.ObjectId,
        ref: `catalogSchema`
       
    },
    
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: `userSchema`
    },

    price: {
        type: Number
      
    },

    order_status:
    {
        type: String
    }
})

module.exports = mongoose.model('Orders', orderSchema)
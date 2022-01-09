
const dal_Sizes =require( "../modules/dal/dal_Sizes");

const mongoose = require('mongoose')



async function addSizes(clientPostSizes) {
    //here we will do all teh validations
    // here we will do all teh calculation logic if needed
        await dal_Sizes.addSizesToDB(clientPostSizes)
         console.log(`item had been save`);

}

module.exports = { addSizes }
const sizeSchema = require("../modules/schema/sizes");
const mongoose = require('mongoose')

async function postSizesToDb(mySizes) {

    try {
        const mySizesInSchema = new sizeSchema(mySizes)
        await mySizesInSchema.save()
        console.log(mySizesInSchema);
        await console.log(`item had been save on db`);
    }
    catch (error) { console.log(error); }
}


postSizesToDb()

module.exports = {postSizesToDb }
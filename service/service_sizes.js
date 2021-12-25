const sizeSchema = require("../modules/schema/sizes");
const mongoose = require('mongoose')
const mySizes = require(`../controller/controller_sizes`)


async function postClientSizes(clientPostSizes) {
    try {
        const Sizes = mySizes.clientPostSizes()
        const sizesInService = new sizeSchema(Sizes)
        await sizesInService.save()
        await console.log(`item had been save to db`);
    }
    catch (error) { console.log(error); }
}

module.exports = { postClientSizes }
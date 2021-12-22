const sizes_schema = require("../modules/schema/sizes");
const mongoose = require('mongoose')
const controller_sizes=require(`../controller/controller_sizes`)


async function postClientSizes () {
    try {

        const sizes = new sizes_schema()
        sizes.save()
        await res.send(`item had been save`)
        await console.log(`item had been save`);
    }
    catch (error) { res.status(400).json(error); }
}



module.exports = { postClientSizes }
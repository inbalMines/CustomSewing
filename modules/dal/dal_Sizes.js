const sizeSchema =require('../schema/sizes');

async function addSizesToDB(postClientSizes) {

        const sizeRecord = new sizeSchema(postClientSizes)
        await sizeRecord.save()
        console.log(`item had been save`);
}
module.exports = { addSizesToDB }
const serviceSizes= require(`../service/service_sizes`)

async function clientPostSizes(req, res) {

    try {
        const mySizes = (req.body)

        await serviceSizes.postClientSizes(mySizes)
        await console.log(`item had been save in controller`);
        
    }
    catch (error) { console.log(error); }
}


module.exports = { clientPostSizes }

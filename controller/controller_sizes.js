

async function clientPostSizes(req, res) {

    try {

        const mySizes = (req.body)
        await console.log(`item had been save`);
    }
    catch (error) { console.log(error); }
}


module.exports = { clientPostSizes }

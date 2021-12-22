
async function getClientSizes(req, res) {

    try {

        const mySizes = (req.body)
        await res.send(mySizes)
        console.log(`item had been save`);
    }
    catch (error) { res.status(400).json(error); }
}


module.exports = { getClientSizes }

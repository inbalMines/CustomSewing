
const service_sizes =require ("../service/service_sizes");


async function addSizes(req, res) {
    try {

        const mySizes = req.body;
        // here we will check if user valid by token (next step)
        // we will add user identifiers to the addSize function to save sizes for specific client
        await service_sizes.addSizes(mySizes);
    }
    catch (error) { console.log(error);
    res.status(400).json({error_message:"error occur",error:error})}
}


module.exports = { addSizes: addSizes }

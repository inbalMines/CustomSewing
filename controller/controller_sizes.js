const service_sizes =require ("../service/service_sizes");


async function addSizes(req, res) {
    try {
        const mySizes = req.body;
        await service_sizes.addSizes(mySizes);
    }
    catch (error) { console.log(error);
    res.status(400).json({error_message:"error occur",error:error})}
}


module.exports = { addSizes: addSizes }

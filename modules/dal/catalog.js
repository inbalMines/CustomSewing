const catalog = require(`../schema/catalog`);

async function getCatalog(req, res) {
    try {
       await catalog.findById(req.body._id)
        ((catalogId)=>{res.json()})
    }
    catch (err) { console.log(`error`); }
}



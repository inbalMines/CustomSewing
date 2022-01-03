const catalog = require("../modules/schema/catalog");


function getCatalog(req,res){

    console.log(`getCatalog!`);
 const result= catalogService.getCatalog()
 res.send(result)
}
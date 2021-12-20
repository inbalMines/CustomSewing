const catalog = require("../modules/schema/catalog");

function healthCheck(req, res) {
     
        console.log('Health Check Request');
        res.status(200);
        res.send(`wellcome!`).end()
      

}



module.exports = { healthCheck }
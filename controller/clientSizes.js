const sizesScema = require("../modules/schema/sizes");

const mongoose = require('mongoose')

// async function postClientSizes (req, res) {
//     try {

//         const sizes = new sizes_schema(req.body)
//         sizes.save()
//         await res.send(sizes)
//         await console.log(sizes);
//     }
//     catch (error) { res.status(400).json(error); }
// }


async function postClientSizes (req, res) {
  
        const sizes = new sizes_schema(req.body)
        sizes.save()
        .then(data => {
            res.send("item saved to database");
          })
          .catch(err => {
            res.status(400).send("unable to save to database");
          })}
     


module.exports = { postClientSizes }
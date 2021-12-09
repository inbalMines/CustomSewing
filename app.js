const express = require(`express`)
const app = express()
const jwt = require(`jsonwebtoken`)
const mongooDb = require(`mongoose`)
const env = require(`dotenv`)
env.config()
const bodyParser = require(`body-parser`)
const nodemon = require(`nodemon`)
const nodeMailer = require(`nodemailer`)
const router = express.Router()


app.use(bodyParser.json())




app.listen(3000, () => {
    console.log(`Api Server running on ${process.env.PORT} port`);
})

app.get('/check', (req, res) => {
    console.log('Health Check Request');
    res.status(200);
    res.send(`wellcome!`).end()
    
});


// try {

//     mongooDb.connect(process.env.CONNECT_DB,
//         {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         }
//     ), err => {
//         if (!err) console.log("connected to mongodb sucsessfully" + "👍");
//         console.log(err);
//     };
// } catch (error) {
//     console.log(error);
// }

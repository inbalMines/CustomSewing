const express = require(`express`)
const app = express()
const jwt = require(`jsonwebtoken`)
const mongooDb = require('mongoose')
const env = require(`dotenv`)
env.config()
const bodyParser = require(`body-parser`)
const nodemon = require(`nodemon`)
const nodeMailer = require(`nodemailer`)
const { healthCheck } = require('./controller/index')
const router = require(`./controller/routes`)


app.use(bodyParser.json())
app.use(`/`, router)



app.listen(process.env.PORT, () => {
    console.log(`Api Server running on ${process.env.PORT} port`);
})


const userScema = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connectDb = async (req, res) => {
    try {
        mongooDb.connect(process.env.CONNECT_DB, userScema)
        console.log(`connect to db`);
    }
    catch (err) { console.log(`error in connection to mongoo+${err}`); }
}

connectDb()

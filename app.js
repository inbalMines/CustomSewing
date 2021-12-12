const express = require(`express`)
const app = express()
const jwt = require(`jsonwebtoken`)
const {MongoClient} = require('mongodb')
const env = require(`dotenv`)
env.config()
const bodyParser = require(`body-parser`)
const nodemon = require(`nodemon`)
const nodeMailer = require(`nodemailer`)
const router = express.Router()


app.use(bodyParser.json())


app.listen(process.env.PORT, () => {
    console.log(`Api Server running on ${process.env.PORT} port`);
})

app.get('/check', (req, res) => {
    console.log('Health Check Request');
    res.status(200);
    res.send(`wellcome!`).end()

});


async function main() {

    const uri = "mongodb+srv://inbalMines:nba3121@cluster0.ninh8.mongodb.net/costomSwing?retryWrites=true&w=majority";

    const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);




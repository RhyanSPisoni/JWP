const express = require('express');
const app = express();
const path = require("path")
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "public")))

app.get('/', async (req, res, next) => {
    try {
        var rest = {
            message: "Hello World",
            status: res.status(200).statusCode
        }
        res.send(rest)

    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
})

app.post('/login', async (req, res, next) => {

    console.log(req.body.mail)
    console.log(req.body.senha)

    t = {
        teste: "olá",
        ddsteste: "odsadsaá"
    }
    return res.send({ body: t })
})

module.exports = app
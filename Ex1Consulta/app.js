const express = require('express');
const app = express();
const path = require("path")

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

app.get('/filmes', async (req, res, next) => {


})

module.exports = app
const express = require('express');
const app = express();

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

app.get('/')

module.exports = app
const api = require('./gameapi')

const express = require('express');
const app = express();
const path = require("path")
const cors = require('cors');
const bodyParser = require('body-parser');
const { randomInt } = require('crypto');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "public")))

app.get('/', async (req, res, next) => {

})

app.get('/game', async (req, res, next) => {
    try {
        const { data } = await api.get('all.json')

        var listaid = []

        data.forEach(e => {
            listaid.push(e.id)
        });
        const numeroplayer1 = Math.floor(Math.random() * listaid.length);
        const numeroplayer2 = Math.floor(Math.random() * listaid.length);

        var player1 = data.indexOf(numeroplayer1)
        console.log(player1)

    } catch (error) {
        res.send({ error: error.message })
    }
})

app.post('/login', async (req, res, next) => {

    var content = {
        success: true,
        redirect: ''
    }

    var index = req.body.mail.indexOf('@');
    var sufix = req.body.mail.substring(index)

    if (sufix == "@unesc.net") {

        content.redirect = "criacaopersonagem/criacao_personagem.html"

        return res.send({ body: content })
    }
    else {
        content.success = false;
        return res.send({ body: content })
    }

})



module.exports = app
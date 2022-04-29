const api = require('./gameapi')

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

})

app.get('/game/choose', async (req, res, next) => {
    try {
        const { data } = await api.get('all.json')

        var listaid = []

        data.forEach(e => {
            listaid.push(e.id)
        });

        const numeroplayer1 = Math.floor(Math.random() * listaid.length);
        const numeroplayer2 = Math.floor(Math.random() * listaid.length);

        const player1 = data[numeroplayer1];
        const player2 = data[numeroplayer2];

        var choosens = {
            player1: player1,
            player2: player2
        }

        res.send({ body: choosens })


    } catch (error) {
        res.send({ error: error.message })
    }
})

app.post('/game/winner', async (req, res, next) => {
    try {
        const ply1 = await
            req.body[0].int +
            req.body[0].str +
            req.body[0].speed +
            req.body[0].durability +
            req.body[0].power +
            req.body[0].combat;


        const ply2 = await
            req.body[1].int +
            req.body[1].str +
            req.body[1].speed +
            req.body[1].durability +
            req.body[1].power +
            req.body[1].combat;

        var vencedor;

        if (ply1 > ply2)
            vencedor = {
                id: req.body[0].id,
                nome: req.body[0].nome,
                pontos: ply1,
                img: req.body[0].img
            }
        else
            vencedor = {
                id: req.body[1].id,
                nome: req.body[1].nome,
                pontos: ply1,
                img: req.body[1].img
            }


        res.send({ body: vencedor })


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
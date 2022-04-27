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

app.get('/game', async (req, res, next) => {
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

        const ply1 = player1.powerstats.intelligence + player1.powerstats.strength + player1.powerstats.speed + player1.powerstats.durability + player1.powerstats.power + player1.powerstats.combat;
        const ply2 = player2.powerstats.intelligence + player2.powerstats.strength + player2.powerstats.speed + player2.powerstats.durability + player2.powerstats.power + player2.powerstats.combat;
        var vencedor;

        if (ply1 > ply2)
            vencedor = {
                nome: player1.name,
                pontos: ply1
            }
        else
            vencedor = {
                nome: player2.name,
                pontos: ply2
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
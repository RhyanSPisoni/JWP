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
        
        console.log(req.body.powerstats)

        const ply1 = await
            req.body.player1.powerstats.intelligence +
            req.body.player1.powerstats.strength +
            req.body.player1.powerstats.speed +
            req.body.player1.powerstats.durability +
            req.body.player1.powerstats.power +
            req.body.player1.powerstats.combat;

        const ply2 = await
            req.body.player2.powerstats.intelligence +
            req.body.player2.powerstats.strength +
            req.body.player2.powerstats.speed +
            req.body.player2.powerstats.durability +
            req.body.player2.powerstats.power +
            req.body.player2.powerstats.combat;

        console.log("S")
        var vencedor;

        if (ply1 > ply2)
            vencedor = {
                id: player1.id,
                nome: player1.name,
                pontos: ply1,
                img: player1.images.md
            }
        else
            vencedor = {
                id: player2.id,
                nome: player2.name,
                pontos: ply2,
                img: player2.images.md
            }

        console.log(vencedor)

        // res.send({ body: vencedor })


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
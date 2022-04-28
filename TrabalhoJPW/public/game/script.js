var ListChoosen = {};

document.getElementById("btnChoose").addEventListener("click", onChooseRandom);
document.getElementById("btnVenc").addEventListener("click", Winner);

function onChooseRandom() {
    fetch("http://localhost:5200/game/choose", {
        method: 'GET',
        body: null,
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => {
        return res.json();
    }).then(res => {

        ListChoosen = []

        ListChoosen = [
            player1 = {
                id: res.body.player1.id,
                nome: res.body.player1.name,
                int: res.body.player1.powerstats.intelligence,
                str: res.body.player1.powerstats.strength,
                speed: res.body.player1.powerstats.speed,
                durability: res.body.player1.powerstats.durability,
                power: res.body.player1.powerstats.power,
                combat: res.body.player1.powerstats.combat,
                img: res.body.player1.images.md
            },
            player2 = {
                id: res.body.player2.id,
                nome: res.body.player2.name,
                int: res.body.player2.powerstats.intelligence,
                str: res.body.player2.powerstats.strength,
                speed: res.body.player2.powerstats.speed,
                durability: res.body.player2.powerstats.durability,
                power: res.body.player2.powerstats.power,
                combat: res.body.player2.powerstats.combat,
                img: res.body.player2.images.md
            }
        ]

        fetch(res.body.player1.images.md)
            .then(data => {
                return data.blob();
            }).then(res => {
                const imgURL = URL.createObjectURL(res)
                document.getElementById("imgC1").src = imgURL
            })

        fetch(res.body.player2.images.md)
            .then(data => {
                return data.blob();
            }).then(res => {
                const imgURL = URL.createObjectURL(res)
                document.getElementById("imgC2").src = imgURL
            })

        document.getElementById("comp1").textContent = `Competidor n°${res.body.player1.id}`;
        document.getElementById("FormNome1").textContent = `Nome: ${res.body.player1.name}`;
        document.getElementById("FormInt1").textContent = `Inteligência: ${res.body.player1.powerstats.intelligence}`;
        document.getElementById("FormFor1").textContent = `Força: ${res.body.player1.powerstats.strength}`;
        document.getElementById("FormVeloc1").textContent = `Velocidade: ${res.body.player1.powerstats.speed}`;
        document.getElementById("FormDurab1").textContent = `Durabilidade: ${res.body.player1.powerstats.durability}`;
        document.getElementById("FormPoder1").textContent = `Poder: ${res.body.player1.powerstats.power}`;
        document.getElementById("FormCombate1").textContent = `Combate: ${res.body.player1.powerstats.combat}`;

        //Competidor2
        document.getElementById("comp2").textContent = `Competidor n°${res.body.player2.id}`;
        document.getElementById("FormNome2").textContent = `Nome: ${res.body.player2.name}`;
        document.getElementById("FormInt2").textContent = `Inteligência: ${res.body.player2.powerstats.intelligence}`;
        document.getElementById("FormFor2").textContent = `Força: ${res.body.player2.powerstats.strength}`;
        document.getElementById("FormVeloc2").textContent = `Velocidade: ${res.body.player2.powerstats.speed}`;
        document.getElementById("FormDurab2").textContent = `Durabilidade: ${res.body.player2.powerstats.durability}`;
        document.getElementById("FormPoder2").textContent = `Poder: ${res.body.player2.powerstats.power}`;
        document.getElementById("FormCombate2").textContent = `Combate: ${res.body.player2.powerstats.combat}`;

    })
}

function Winner() {
    fetch("http://localhost:5200/game/winner", {
        method: "POST",
        body: JSON.stringify(ListChoosen),
        headers: {
            'content-type': "application/json"
        }
    }).then(res => {
        return res.json();
    }).then(res => {

        fetch(res.body.img)
            .then(data => {
                return data.blob();
            }).then(res => {
                const imgURL = URL.createObjectURL(res)
                document.getElementById("imgWinner").src = imgURL
            })

        document.getElementById("vencId").textContent = `Competidor n°${res.body.id}`
        document.getElementById("vencNome").textContent = `Nome: ${res.body.nome}`
        document.getElementById("vencPontos").textContent = `Pontos: ${res.body.pontos}`


    })
}
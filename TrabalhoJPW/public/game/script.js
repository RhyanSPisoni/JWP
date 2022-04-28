var ListChoosen = {};

document.getElementById("btnChoose").addEventListener("click", onChooseRandom);
document.getElementById("btnVenc").addEventListener("click", Winner);

function onChooseRandom(){
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
        
        ListChoosen.push(res)

        

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
        body: JSON.stringify(ListChoosen[0]),
        headers: {
            'content-type': "application/json"
        }
    }).then(res => {
        return res.json();
    }).then(rest => {

        console.log(ListChoosen[0])
        // fetch(res.body.img)
        //     .then(data => {
        //         return data.blob();
        //     }).then(res => {
        //         const imgURL = URL.createObjectURL(res)
        //         document.getElementById("imgWinner").src = imgURL
        //     })

        // document.getElementById("vencId").textContent = `Vencedor é: ${res.body.id}`
        // document.getElementById("Winner").textContent = `Vencedor é: ${res.body.nome}`
        // document.getElementById("Winner").textContent = `Vencedor é: ${res.body.pontos}`

    })
}
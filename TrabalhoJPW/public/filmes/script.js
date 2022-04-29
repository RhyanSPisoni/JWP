var filmes = [
    {
        NomeFilme: "Eternos",
        Sinopse: "Os Eternos são uma raça de seres imortais que viveram durante a antiguidade da Terra, moldando sua história e suas civilizações enquanto batalhavam os malignos Deviantes.",
        Imagem: "./assets/eternos.jpg",
        Personagens: [
            Nome = "Ikaris",
            Descricao = "Ikaris é um personagem das histórias em quadrinhos do Universo Marvel, publicado pela Marvel Comics. Ele apareceu pela primeira vez em The Eternals # 1 e foi criado por Jack Kirby. Ele é um membro dos Eternos, uma raça de super-humanos do Universo",
            LinkImagem = "./assets/eternosp.jpg"
        ],
    },
    {
        NomeFilme: "Vingadores: Ultimato",
        Sinopse: "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
        Imagem: "./assets/vingadores.jpg",
        Personagens: [
            Nome = "Thanos",
            Descricao = "Thanos é um personagem fictício, um supervilão das histórias em quadrinhos publicadas pela Marvel Comics, inspirado em Thanatos",
            LinkImagem = "./assets/thanos.jpg"
        ],
    }
]

const obj = filmes;

console.log(obj)

let ul = document.createElement('ul');
document.getElementById('listaFilmes').appendChild(ul);
obj.forEach(e => {
    let li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML += e.NomeFilme;
});


var contimg = 0;

obj.forEach(e => {
    let nomeFilme = document.createElement('h1');
    document.getElementById('filme').appendChild(nomeFilme);
    nomeFilme.innerHTML += '|' + e.NomeFilme + '|';

    let sinopse = document.createElement('h3');
    document.getElementById('filme').appendChild(sinopse);
    sinopse.innerHTML += '- ' + e.Sinopse

    let div = document.createElement('div');
    div.id = "divimgF"
    document.getElementById('filme').appendChild(div);

    const img = `<img src="${e.Imagem}"/>`;
    div.innerHTML = img
    // document.querySelector('#filme').innerHTML = img;
    
    contimg = contimg + 1
});

fetch("https://akabab.github.io/superhero-api/api/all.json")
    .then(data => {
        return data.json()
            .then(res => {
                var cont = 0;
                res.forEach(e => {

                    let nome = document.createElement('h5');
                    document.getElementById('filmeperonsagem').appendChild(nome);
                    nome.innerHTML += e.name;

                    var div = document.createElement('div');
                    div.id = `img${cont}`;
                    document.getElementById('filmeperonsagem').appendChild(div);

                    fetch(e.images.sm)
                        .then(data => {
                            return data.blob();
                        }).then(res => {
                            const imgURL = URL.createObjectURL(res)
                            const img = `<img src="${imgURL}"/>`;
                            div.innerHTML = img;
                        })
                    cont = cont + 1;
                })
            })
    })





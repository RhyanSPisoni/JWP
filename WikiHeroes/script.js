var filmes = [
    {
        NomeFilme: "Eternos",
        Sinopse: "Os Eternos são uma raça de seres imortais que viveram durante a antiguidade da Terra, moldando sua história e suas civilizações enquanto batalhavam os malignos Deviantes.",
        Imagens: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/11/eternos-capa-2.jpg",
        Personagens: [
            Nome = "Ikaris",
            Descricao = "Ikaris é um personagem das histórias em quadrinhos do Universo Marvel, publicado pela Marvel Comics. Ele apareceu pela primeira vez em The Eternals # 1 e foi criado por Jack Kirby. Ele é um membro dos Eternos, uma raça de super-humanos do Universo",
            LinkImagem = "https://rollingstone.uol.com.br/media/_versions/richard_madden_como_ikaris_em_eternos_foto_reproducao__twitter_widelg.jpg"
        ],
    },
    {
        NomeFilme: "Eternos",
        Sinopse: "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
        Imagens: "https://www.blogsoestado.com/marciohenrique/files/2019/09/VINGADORES-ULTIMATO-2019.jpg",
        Personagens: [
            Nome = "Thanos",
            Descricao = "Thanos é um personagem fictício, um supervilão das histórias em quadrinhos publicadas pela Marvel Comics, inspirado em Thanatos",
            LinkImagem = "https://uploads.jovemnerd.com.br/wp-content/uploads/2018/04/thanos-hot-toy-1210x540.jpg"
        ],
    }
]

const obj = JSON.parse(filmes);

console.log(obj)

let ul = document.createElement('ul');
document.getElementById('listaFilmes').appendChild(ul);
obj.forEach(e => {
    let li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML += e.NomeFilme;
});


obj.forEach(e => {
    let nomeFilme = document.createElement('h1');
    document.getElementById('filme').appendChild(nomeFilme);
    nomeFilme.innerHTML += '|' + e.NomeFilme + '|';

    let sinopse = document.createElement('h3');
    document.getElementById('filme').appendChild(sinopse);
    sinopse.innerHTML += '- ' + e.Sinopse

    fetch(e.Imagens)
        .then(data => {
            return data.blob();
        }).then(res => {
            const imgURL = URL.createObjectURL(res)
            const img = `<img src="${imgURL}"/>`;
            document.querySelector('#filme').innerHTML = img;
        })
});
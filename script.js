var filmes =
    '[{' +
    '"NomeFilme": "Eternos",' +
    '"Sinopse": "Os Eternos são uma raça de seres imortais que viveram durante a antiguidade da Terra, moldando sua história e suas civilizações enquanto batalhavam os malignos Deviantes.",' +
    '"Imagens": [' +
    '{' +
    '"Link": "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/11/eternos-capa-2.jpg"' +
    '},' +
    '{' +
    '"Link": "https://lumiere-a.akamaihd.net/v1/images/eternals_ka_pay1_brpo_92b0a4dd.jpeg"' +
    '}' +
    '],' +
    '"Personsagem": [' +
    '{' +
    '"Nome": "Ikaris",' +
    '"Descricao": "Ikaris é um personagem das histórias em quadrinhos do Universo Marvel, publicado pela Marvel Comics. Ele apareceu pela primeira vez em The Eternals # 1 e foi criado por Jack Kirby. Ele é um membro dos Eternos, uma raça de super-humanos do Universo",' +
    '"LinkImagem": "https://rollingstone.uol.com.br/media/_versions/richard_madden_como_ikaris_em_eternos_foto_reproducao__twitter_widelg.jpg"' +
    '},' +
    '{' +
    '"Nome": "Cavaleiro Negro",' +
    '"Descricao": "O Cavaleiro Negro é um personagem de história em quadrinhos da Marvel Comics. Sua primeira aparição foi em Avengers #47",' +
    '"LinkImagem": "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a1/Cavaleiro_Negro_por_Robert_Atkins.jpg/260px-Cavaleiro_Negro_por_Robert_Atkins.jpg"' +
    '}' +
    ']' +
    '}]';

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
    nomeFilme.innerHTML += e.NomeFilme;

    let sinopse = document.createElement('h3');
    document.getElementById('filme').appendChild(sinopse);
    sinopse.innerHTML += e.Sinopse

    let imagem = document.createElement('h3');
    document.getElementById('filme').appendChild(sinopse);
    sinopse.innerHTML += e.Sinopse
});
//Filmes
var obj = [
    {
        nome: "Vingadores Ultimato",
        sinopse: "Um filme da Marvel",
        personsagens: [
            {
                nome: "Thanos",
                img: ""
            },
            {
                nome: "Capitão America",
                img: ""
            }
        ]
    }
]

obj.forEach(e => {
    let nomeFilme = document.createElement('h2');
    document.getElementById('filmes').appendChild(nomeFilme);
    nomeFilme.innerHTML += e.nome;

    e.personsagens.forEach(e => {

        let nome = document.createElement('h5');
        document.getElementById('filmes').appendChild(nome);
        nome.innerHTML += e.nome;

        fetch(e.img)
            .then(data => {
                return data.blob();
            }).then(res => {
                const imgURL = URL.createObjectURL(res)
                const img = `<img src="${imgURL}"/>`;
                document.querySelector('#listapersonagensimgfilmes').innerHTML = img;
            })
    })
});

fetch("https://akabab.github.io/superhero-api/api/all.json")
    .then(data => {
        return data.t
            .then(res => {
                res.forEach(e => {

                    let nome = document.createElement('h5');
                    document.getElementById('listapersonagensfilmes').appendChild(nome);
                    nome.innerHTML += e.nome;

                    fetch(e.img)
                        .then(data => {
                            return data.blob();
                        }).then(res => {
                            const imgURL = URL.createObjectURL(res)
                            const img = `<img src="${imgURL}"/>`;
                            document.querySelector('#listapersonagensimgfilmes').innerHTML = img;
                        })

                })
            })
    })
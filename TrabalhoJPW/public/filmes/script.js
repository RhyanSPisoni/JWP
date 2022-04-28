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

        // fetch(e.img)
        //     .then(data => {
        //         return data.blob();
        //     }).then(res => {
        //         const imgURL = URL.createObjectURL(res)
        //         const img = `<img src="${imgURL}"/>`;
        //         document.querySelector('#listapersonagensimgfilmes').innerHTML = img;
        //     })
    })
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
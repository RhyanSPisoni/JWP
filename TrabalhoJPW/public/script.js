//Wiki
var filmes = [
    {
        nome: "Capitão América: O Primeiro Vingador(2011)",
        data: 1943
    }, {
        nome: "Capitã América(2019)",
        data: 1995
    }, {
        nome: "O incrível Hulk(2008)",
        data: 2005
    }, {
        nome: "Homem de Ferro(2008)",
        data: 2009
    }, {
        nome: "Homem de Ferro 2(2010)",
        data: 2011
    }, {
        nome: "Thor(2011)",
        data: 2011
    }, {
        nome: "Vingadores (2012)",
        data: 2012
    }, {
        nome: "Homem de Ferro 3(2012)",
        data: 2012
    }, {
        nome: "Thor: O Mundo Sombrio(2012)",
        data: 2013
    }, {
        nome: "Capitão América: O Soldado Invernal(2014)",
        data: 2014
    }, {
        nome: "Quardiões da Galáxia(2014)",
        data: 2014
    }, {
        nome: "Quardiões da Galáxia Vol2(2017)",
        data: 2014
    }, {
        nome: "Vingadores: Era de Ultron(2015)",
        data: 2015
    }, {
        nome: "Homem Formiga(2015)",
        data: 2015
    }, {
        nome: "Capitão América: Guerra Civil (2016)",
        data: 2016
    }, {
        nome: "Pantera Negra(2018)",
        data: 2016
    }, {
        nome: "Homem-Aranha(2017)",
        data: 2016
    }, {
        nome: "Viúva Negra(2021)",
        data: 2016
    }, {
        nome: "Doutor Estranho(2017)",
        data: 2017
    }, {
        nome: "Thor: Ragnorok(2017)",
        data: 2017
    }, {
        nome: "Homem-Formiga e a Vespa(2018)",
        data: 2018
    }, {
        nome: "Vingadores: Guerra Infinita(2018)",
        data: 2018
    }, {
        nome: "Vingadores: Ultimato(2019)",
        data: 2019
    }, {
        nome: "Shang-Chi e a lenda dos Dez Aneis(2021)",
        data: 2023
    }, {
        nome: "Eternos(2021)",
        data: 2024
    }, {
        nome: "Homem-Aranha: Longe de Casa(2019)",
        data: 2024
    }, {
        nome: "Homem-Aranha: Sem Volta para Casa(2021)",
        data: 2024
    },
]

console.log(filmes.sort(function (x, y) {
    return x.data - y.data
}))

filmes.sort(function (x, y) {
    return x.data - y.data
}).forEach(e => {
    let nomeFilme = document.createElement('tr');
    document.getElementById('wikicrono').appendChild(nomeFilme);
    nomeFilme.innerHTML += e.nome;
});

//Login

//Game
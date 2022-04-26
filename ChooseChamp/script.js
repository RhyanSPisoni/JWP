//URL de requisição
const url = 'https://projetofinal-ppw.herokuapp.com/api/123696'

let champs = []
let equipes = []

//-----

async function fetchCampeao() {
    await fetch('http://ddragon.leagueoflegends.com/cdn/11.23.1/data/pt_BR/champion.json')
        .then(request => {
            request.json()
                .then(response => {
                    for (camp in response.data) {

                        dado = response.data[camp]

                        let campeao = {
                            id: dado.id,
                            nome: dado.name,
                            tag: dado.tags[0],
                            img: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${dado.id}_0.jpg`,
                            icon: `http://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/${dado.id}.png`
                        }
                        champs.push(campeao)
                        addDataList(campeao)
                    }
                })
        })
}

function addDataList(campeao) {
    datalist = document.querySelector('datalist')
    option = document.createElement('option')
    option.textContent = campeao.nome
    datalist.appendChild(option)
}

function mostrarCampeao() {
    div = document.querySelectorAll('.lane')
    input = document.querySelectorAll('.inputNome')
    icon = document.querySelectorAll('.champ')

    for (let cont = 0; cont < 5; cont++) {
        let champExist = false

        let nome = div[cont].querySelector('h3')
        let img = div[cont].querySelector('.splash')
        let tags = div[cont].querySelector('.classe')

        input[cont].addEventListener('keyup', event => {

            if (event.keyCode != 13) {
                return
            }

            champs.map(champ => {
                if (input[cont].value.toLowerCase() == champ.nome.toLowerCase()) {
                    champExist = true

                    nome.textContent = champ.nome
                    icon[cont].src = champ.icon
                    img.src = champ.img
                    tags.src = `.\\img\\classes\\${champ.tag}.webp`
                }
            })
            if (!champExist) {
                nome.textContent = 'Este campeão não existe'
            }
        })
    }
}

function postCampeao() {

    //Json Time/Equipe
    let time = {
        nome: null,
        top: null,
        jg: null,
        mid: null,
        adc: null,
        sup: null
    }

    let div = document.querySelectorAll('.lane')
    document.querySelector('#confirmar').addEventListener('click', () => {
        time.nome = document.querySelector('#nome').value

        for (let cont = 0; cont < 5; cont++) {
            let nome = div[cont].querySelector('h3')

            champs.map(champ => {
                if (nome.textContent.toLocaleLowerCase() == champ.nome.toLowerCase()) {
                    if (cont == 0) {
                        time.top = champ.nome
                    } else if (cont == 1) {
                        time.jg = champ.nome
                    } else if (cont == 2) {
                        time.mid = champ.nome
                    } else if (cont == 3) {
                        time.adc = champ.nome
                    } else if (cont == 4) {
                        time.sup = champ.nome
                    }
                }
            })
        }

        let erro = document.querySelector('#erro')
        if (!timeCompleto(time)) {
            erro.textContent = 'Time incompleto.'
            return
        }
        erro.textContent = ''

        fetch(url, {
                method: 'POST',
                body: JSON.stringify(time),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(requisicao => {
                if (requisicao.status == 200) {
                    getEquipeLista()
                }
            })
    })
}

const listaEquipeHTML = document.querySelector("#listaEquipe")

function getEquipeLista() {
    let requisicao = fetch(url)
    requisicao.then(function(resposta) {
        resposta.json().then(function(vetorEquipes) {
            equipes = vetorEquipes
            atualizarLista(equipes)
        })
    })
}

function imprimirEquipe(equipe) {
    let div = document.createElement("div")
    let botaoDeletar = document.createElement("input")
    let botaoEditar = document.createElement("input")

    //Deletar Registro
    botaoDeletar.type = "button"
    botaoDeletar.value = "Deletar"

    botaoDeletar.onclick = function() {
        //Lança método para deletação
        DeleteEquipe(equipe.nome);
    }

    //Editar Registro
    botaoEditar.type = "button"
    botaoEditar.value = "Editar"

    botaoEditar.addEventListener('click', function() {
        //Lança método para edição

        //Pegar posição no vetor
        var i = 0;
        for (; i < equipes.length; i++) {
            if (equipe.nome == equipes[i].nome) {
                break
            }
        }

        let form = EquipeEditor(i, equipe)

        botaoEditar.disabled = true
        botaoDeletar.disabled = true

        div.appendChild(form)
    })

    let layout = `<h3>${equipe.nome}</h3>
    <span>Topo: ${equipe.top}</span>
    <span>Caçador: ${equipe.jg}</span>
    <span>Meio: ${equipe.mid}</span>
    <span>Atirador: ${equipe.adc}</span>
    <span>Suporte: ${equipe.sup}</span>`

    div.className = 'equipes'
    div.innerHTML = layout
    div.appendChild(botaoDeletar)
    div.appendChild(botaoEditar)
    listaEquipeHTML.appendChild(div)
}

function atualizarLista(equipes) {
    listaEquipeHTML.innerHTML = ""

    // imprimir lista
    for (let equipe of equipes) {
        imprimirEquipe(equipe)
    }
}

function timeCompleto(time) {
    let cont = 0

    for (posicao in time) {
        champs.map(champ => {
            if (time[posicao] == champ.nome) {
                cont += 1
            }
        })
    }
    if (cont == 5) {
        return true
    }
    return false
}

getEquipeLista()
postCampeao()
mostrarCampeao()
fetchCampeao()
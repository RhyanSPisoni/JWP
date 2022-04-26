function putEquipe(id, equipe) {
    const putUrl = url + '/' + id;

    console.log(putUrl)

    let requisicao = fetch(putUrl, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(equipe)
    })

    requisicao.then(function (resposta) {
        if (resposta.status == 200) {
            getEquipeLista()
        }
    })
}

// Função que cria e retorna um formulario completo
function EquipeEditor(id) {
    let datalist = document.querySelector('#lista').id
    // Cria os elementos do formulario na memoria
    let div = document.createElement('div')

    //Nome
    let inputNome = document.createElement('input')
    inputNome.placeholder = 'Nome do time'

    let inputNomeTop = document.createElement('input')
    inputNomeTop.placeholder = 'Topo'
    inputNomeTop.setAttribute('list', datalist)

    let inputNomeJg = document.createElement('input')
    inputNomeJg.placeholder = 'Caçador'
    inputNomeJg.setAttribute('list', datalist)

    let inputNomeMid = document.createElement('input')
    inputNomeMid.placeholder = 'Meio'
    inputNomeMid.setAttribute('list', datalist)

    let inputNomeAdc = document.createElement('input')
    inputNomeAdc.placeholder = 'Atirador'
    inputNomeAdc.setAttribute('list', datalist)

    let inputNomeSup = document.createElement('input')
    inputNomeSup.placeholder = 'Suporte'
    inputNomeSup.setAttribute('list', datalist)

    let buttonEdit = document.createElement('input')

    // pendura os elementos dentro da div
    div.appendChild(inputNome)
    div.appendChild(inputNomeTop)
    div.appendChild(inputNomeJg)
    div.appendChild(inputNomeMid)
    div.appendChild(inputNomeAdc)
    div.appendChild(inputNomeSup)
    div.appendChild(buttonEdit)


    // Atualizar as propriedades de cada elemento
    buttonEdit.type = "button"
    buttonEdit.value = "Salvar"

    buttonEdit.addEventListener('click', function () {
        let equipeEditado = {
            nome: inputNome.value,
            top: inputNomeTop.value,
            jg: inputNomeJg.value,
            mid: inputNomeMid.value,
            adc: inputNomeAdc.value,
            sup: inputNomeSup.value
        }
        let erro = document.createElement('span')

        if (!timeCompleto(equipeEditado)) {
            erro.textContent = 'Time incompleto ou algum campeão inexistente'
            div.appendChild(erro)
            return 
        }

        putEquipe(id, equipeEditado)

    })

    return div
}
var ListaPerson = []
function Salvar() {

    let pers = {
        nome: document.getElementById('nome').value,
        cidade: document.getElementById('cidade').value,
        classe: document.getElementById('classe').value,
        raca: document.getElementById('race').value,
        armas: document.getElementById('arma').value
    }
    ListaPerson.push(pers);
}

function MostrarLista() {
    lista = JSON.stringify(ListaPerson);
    console.log(lista);
}

function ValidaNome() {
    var SizeNome = document.getElementById('nome').value
    if (SizeNome.length < 5) {
        document.getElementById('nomef').textContent = 'Nome com menos de 5 caracteres';
    } else {
        document.getElementById('nomef').textContent = null;
    }
}

function ValidaCidade() {
    var SizeNome = document.getElementById('cidade').value
    if (SizeNome.length < 5) {
        document.getElementById('cidadef').textContent = 'Nome com menos de 5 caracteres';
    } else {
        document.getElementById('cidadef').textContent = null;
    }
}

function ValidaClasse() {
    var SizeNome = document.getElementById('classe').value
    if (SizeNome.length < 5) {
        document.getElementById('classef').textContent = 'Nome com menos de 5 caracteres';
    } else {
        document.getElementById('classef').textContent = null;
    }
}

function ValidaRace() {
    var SizeNome = document.getElementById('race').value
    if (SizeNome.length < 5) {
        document.getElementById('racef').textContent = 'Nome com menos de 5 caracteres';
    } else {
        document.getElementById('racef').textContent = null;
    }
}

function ValidaArmas() {
    var SizeNome = document.getElementById('arma').value
    if (SizeNome.length < 5) {
        document.getElementById('armasf').textContent = 'Nome com menos de 5 caracteres';
    } else {
        document.getElementById('armasf').textContent = null;
    }
}
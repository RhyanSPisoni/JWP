fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
    .then(data => {
        return data.json();
    }).then(res => {
        console.log(res)
        var opt;
        for (var i = 0; i < res.length; ++i) {
            opt += `<option value="${res[i].nome}"></option>`;
        }
        document.querySelector('#listFipe').innerHTML = opt;

    })

function abreLink() {
    window.open('http://www.google.com.br');
}

var entidade = document.getElementById('imagem');
var fator_lupa = 3;
entidade.onmouseover = function () { this.style.width = (this.clientWidth * fator_lupa) + "px"; };
entidade.onmouseout = function () { this.style.width = (this.clientWidth / fator_lupa) + "px"; };
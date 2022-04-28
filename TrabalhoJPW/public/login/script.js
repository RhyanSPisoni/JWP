document.getElementById("btnVerify").addEventListener("click", OnVerify);

document.getElementById("imail").addEventListener("keypress", ValidaTextMail);
document.getElementById("isenha").addEventListener("keypress", ValidaTextSenha);

function ValidaTextMail() {
    var SizeMail = document.getElementById('imail').value

    if (SizeMail.length < 5 && SizeMail.length > -1)
        document.getElementById('mailV').textContent = 'E-mail com menos de 5 caracteres';
    else
        document.getElementById('mailV').textContent = null;

}

function ValidaTextSenha() {
    var SizeSenha = document.getElementById('isenha').value

    if (SizeSenha.length < 5 && SizeSenha.length > -1)
        document.getElementById('senhaV').textContent = 'Senha com menos de 5 caracteres';
    else
        document.getElementById('senhaV').textContent = null;
}

function btnValidaText() {
    var SizeMail = document.getElementById('mailV').value
    var SizeSenha = document.getElementById('senhaV').value

    var verify;

    if (SizeMail.length == 0 || SizeMail.length == null) {
        document.getElementById('mailV').textContent = 'E-mail não pode ser Vazio ou Nulo';
        verify = false;
    }
    else
        verify = true;

    if (SizeSenha.length == 0 || SizeSenha.length == null) {
        document.getElementById('senhaV').textContent = 'Senha não pode ser Vazio ou Nulo';
        verify = false;
    }
    else
        verify = true;

    OnVerify(verify)
}


function OnVerify(res) {

    if (res = true) {
        let login = {
            mail: document.getElementById("imail").value,
            senha: document.getElementById('isenha').value
        }

        fetch("http://localhost:5200/login", {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(res => {

            if (res.body.success == true) {
                window.location.assign(res.body.redirect);
            }
        })
    }

    if (res == false)
        document.getElementById('infoMail').textContent = 'E-mail informado não está no domínio indicado!';
}


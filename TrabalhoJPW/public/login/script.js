function OnVerify() {
    let login = {
        mail: document.getElementById("mail").value,
        senha: document.getElementById('senha').value
    }
    console.log(login)

    fetch("http://localhost:5200/login/", {
        method: 'POST',
        body: JSON.stringify(login),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => {
            return res.json();
        }).then(r => {
            console.log(r)
        })
}
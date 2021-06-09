function enviarDados(){
    var txtLogin = document.getElementById("txtLogin").value;
    var txtSenha = document.getElementById("txtSenha").value;

    //console.log("digitou  = "+txtLogin+"/"+txtSenha);

    // passo 1 - montar o corpo da mensagem
    var msgBody = {
        email : txtLogin,
        racf  : txtLogin,
        senha : txtSenha
    }
    // passo 2 - definir o cabecalho
    var cabecalho = {
        method : "POST",
        body   : JSON.stringify(msgBody),
        headers : {
            "content-type": "application/json"
        }
    }

    // passo 3 - enviar para back end
    fetch("http://localhost:8080/login", cabecalho).then(resp => trataResposta(resp));  

    // se eu fosse interpretar esta instrução de forma estruturada, seria algo assim:
    // resp = fetch(http://...);
    // trataResposta(resp);
}

// passo 4 - tratar o resultado
function trataResposta(resp){
    console.log(resp);
}

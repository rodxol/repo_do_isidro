function verificaUsuario(){
    var strUser = localStorage.getItem("userDASH");
    if (!strUser){
        window.location = "index.html";
    }
}

function logout(){
    localStorage.removeItem("userDASH");
    window.location = "index.html"
}


function gerarRelatorio(){
    var txtIni = document.getElementById("txtDataIni").value;
    var txtFim = document.getElementById("txtDataFim").value;

    console.log("Datas capturadas "+txtIni+" / "+txtFim);

    /*
    passos: 
    1 - enviar os dados para o backend
    2 - ao chegar a resposta, precisamos extrair o JSON dela -> isso deve trazer uma lista de eventos
    3 - gerar dinamicamente uma tabela com esses valores da lista
    */
    /*
    res = fetch(...)
    lista = res.json()
    console.log(lista);
    */
    fetch("http://localhost:8080/eventosporperiodo?inicio="+txtIni+"&fim="+txtFim)
        .then(res => res.json())
        .then(lista => preencheRelatorio(lista));
}

function preencheRelatorio(lista){
    console.log("to na funcao");

    var dados = [];
    for (i=0;i<lista.length; i++){
        let evento= lista[i];

        let eventoAr = [];
        eventoAr.push(evento.numSeq);
        eventoAr.push(evento.data);
        eventoAr.push(evento.alarme.nome);
        eventoAr.push(evento.equipamento.hostname);
        eventoAr.push(evento.equipamento.ipAddr);
        console.log(eventoAr);

        dados.push(eventoAr);
    }
    console.log("=-==============================");
    console.log(dados);



    $("#tabelaRelatorio").DataTable({
        data: dados
    });



    console.log("gerei a tabela");

                            
}
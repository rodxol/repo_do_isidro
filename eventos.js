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

}
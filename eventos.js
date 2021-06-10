function verificaUsuario(){
    var strUser = localStorage.getItem("userDASH");
    if (!strUser){
        window.location = "index.html";
    }
}

function logout(){
    localStorage.removeItem("userDASH");
    window.location = "index.html";
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
    var strTabela = `<table class="table table-hover">
                         <thead>
                            <tr>
                                <th class="col">#</th>
                                <th class="col">Data</th>
                                <th class="col">Alarme</th>
                                <th class="col">Equipamento</th>
                                <th class="col">IP</th>
                            </tr>
                         </thead>
                         <tbody>`;
    // loop para percorrer cada item da lista e montar uma nova linha na tabela (concatenando o conteúdo)
    for (i=0; i<lista.length; i++){
        var evento = lista[i];
        strTabela = strTabela + `<tr>
                                    <td class="col">${evento.numSeq}</td>
                                    <td class="col">${evento.data}</td>
                                    <td class="col">${evento.alarme.nome}</td>
                                    <td class="col">${evento.equipamento.hostname}</td>
                                    <td class="col">${evento.equipamento.ipAddr}</td>
                                </tr>`;
    }
    // fechar a tabela
    strTabela = strTabela + `</tbody>
                             </table>`;

    document.getElementById("tabelaRelatorio").innerHTML = strTabela;                             
}
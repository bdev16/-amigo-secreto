//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let friends = [];

function adicionarAmigo() {
    let nomeAmigo =  document.querySelector('input').value
    let isValid = validaEntrada(nomeAmigo);

    if (!isValid) {
        alert("Por favor, insira um nome.");
    } else {
        friends.push(nomeAmigo);
        nomeAmigo = document.querySelector('input');
        nomeAmigo.value = '';
        mostraValoresDaListaNaTela();
    }
}

function validaEntrada(nomeAmigo) {
    if (!nomeAmigo) {
        return false;
    }

    return true;
}

function mostraValoresDaListaNaTela() {
    let contador = friends.length;
    do {
        let listaAmigosHtml = document.getElementById('listaAmigos').append(`${friends[contador - 1]}`, document.createElement("li"));
    } while (friends.length != contador);  
}


function validaArray() {
    if (friends.length == 0 || friends.length < 2) {
        return false;
    }

    return true;
}

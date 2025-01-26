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
    let listaAmigosHtml = document.getElementById('listaAmigos');

    let contador = friends.length;
    do {
        let componentesListaAmigos = document.createElement('li');
        componentesListaAmigos.textContent = `${friends[contador - 1]}`;
        componentesListaAmigos.classList.add('componenteDinamico');
        listaAmigosHtml.append(componentesListaAmigos);
    } while (friends.length != contador);  
}

function sortearAmigo() {
    let isValid = validaArray();

    if (isValid) {
        let numeroAleatorio = parseInt(Math.random() * friends.length);
        let amigoSorteado = friends[numeroAleatorio];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    } else {
        alert('Adiciona mais de 1 pessoa para realizar o sorteio!');
    }
}

function validaArray() {
    if (friends.length == 0 || friends.length < 2) {
        return false;
    }

    return true;
}

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nomeAmigo =  document.querySelector('input').value
    let isValid = validaEntrada(nomeAmigo);

    if (!isValid) {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nomeAmigo);
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

    let contador = amigos.length;
    do {
        let componentesListaAmigos = document.createElement('li');
        componentesListaAmigos.textContent = `${amigos[contador - 1]}`;
        componentesListaAmigos.classList.add('componenteDinamico');
        listaAmigosHtml.append(componentesListaAmigos);
    } while (amigos.length != contador);  
}

function sortearAmigo() {
    let isValid = validaArray();

    if (isValid) {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(numeroAleatorio);
        let amigoSorteado = amigos[numeroAleatorio];

        removeElementosLiListaAmigos();

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    } else {
        alert('Adiciona mais de 1 pessoa para realizar o sorteio!');
    }
}

function validaArray() {
    if (amigos.length == 0 || amigos.length < 2) {
        return false;
    }

    return true;
}

function removeElementosLiListaAmigos() {
    let componentesListaAmigos = document.querySelectorAll('.componenteDinamico');
    componentesListaAmigos.forEach(componente => componente.remove());
}

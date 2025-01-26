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
        console.log(friends);
    }
}

function validaEntrada(nomeAmigo) {
    if (!nomeAmigo) {
        return false;
    }

    return true;
}


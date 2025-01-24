//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo () {
    let nomeAmigo = document.getElementById('amigo').value

    if(nomeAmigo == '') {
        alert('Por favor, insira um nome!')
        return;
    } else {
        amigos.push(nomeAmigo)
    }

    document.getElementById('amigo').value = '';

    exibirAmigos()

}

function exibirAmigos () {

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let amigo of amigos) {
        let li = document.createElement('li')
        li.textContent = amigo;
        lista.appendChild(li)
    }
}

function sortearAmigo () {

    if(amigos.length === 0 ) {
        return alert('Nenhum amigo na lista pra sortear!')
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<li>Amigo secreto sorteado: ${amigoSorteado}</li>`;
}

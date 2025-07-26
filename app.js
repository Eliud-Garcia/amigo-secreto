// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo(){
    let nombre = document.querySelector("#amigo").value;
    nombre = nombre.trim();
    if(!validarNombre(nombre)){
        alert('Por favor, inserte un nombre.');
    }else{
        amigos.push(nombre);
    }
    limpiarCampoEntrada();
    actualizarListaAmigos();
}

function validarNombre(nombre){
    if(!nombre) return false;
    return nombre.length;
}

function limpiarCampoEntrada(){
    let elemento = document.querySelector("#amigo");
    elemento.value = '';
}

function actualizarListaAmigos(){
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function(nombre){
        const actual = document.createElement("li");
        actual.textContent = nombre;
        lista.appendChild(actual);
    });
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('No hay amigos todavia');
    }else{
        let aleatorio = generarNumeroAleatorio();
        let resultado = document.querySelector("#resultado");
        resultado.innerHTML = amigos[aleatorio];
    }
}

function generarNumeroAleatorio(){
    return Math.floor(Math.random() * amigos.length);
}

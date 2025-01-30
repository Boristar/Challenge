// En esta lista se guardarán los amigos ingresados
let amigos = []; 

//Aquí agregamos los amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim(); // Esto es por si se ingresan espacios como nombre

    // Aquí revisamos que de verdad se ingrese un nombre
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; 
    }

    // Aquí se agregan los amigos a la lista
    amigos.push(nombre);
    console.log(amigos)

    // Se actualiza la lista en el HTML
    actualizarListaAmigos();

    // Se limpia el campo de entrada
    inputAmigo.value = "";
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos"); // Accesamos a la lista en el HTML
    lista.innerHTML = ""; // Se limpia la lista antes de agregar los nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista, el premio será para mí.");
        return;
    }

    // Crear un número aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML con un mensaje personalizado
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>El amigo escogido es: <strong>${amigoSorteado}</strong></li>`;

    // Borrar la lista de amigos en el HTML
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // Vaciar el array de amigos
    amigos = [];
}
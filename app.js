// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let input = document.getElementById("amigo");
let boton = document.getElementById("btn");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let sorteo = document.getElementById("sortear");
boton.addEventListener("click", () => {
  let nombre_amigo = input.value;
  if (nombre_amigo === "") {
    alert("Ingrese un nombre");
  } else {
    amigos.push(nombre_amigo);
    listaAmigos.innerHTML = "";
    renderizado();
    input.value = "";
  }
});

function renderizado() {
  amigos.forEach((amigo) => {
    listaAmigos.innerHTML += `
                    <li>${amigo}</li>

    `;
  });
}

sorteo.addEventListener("click", () => {
  let indice = Math.floor(Math.random() * 10);
  if (amigos != []) {
    if (indice > amigos.length) {
      indice = Math.floor(Math.random() * 10);
    }

    if (indice <= amigos.length) {
      console.log(amigos[indice]);
      resultado.textContent = amigos[indice]
    }
  } else {
    alert("ingrese nombres");
  }
});

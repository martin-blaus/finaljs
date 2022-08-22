//PARTIDO.HTML
const form = document.getElementById("form");
const inputCantidad = document.getElementById("inputCantidad");
const cantEntradas = inputCantidad.value;
const botonCantidad = document.getElementById("botonCantidad");

botonCantidad.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(cantEntradas);
});

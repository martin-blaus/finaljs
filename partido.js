//PARTIDO.HTML
const evento = new URLSearchParams(window.location.search).get('event')
console.log("Showing details for "+ evento);
partidos = JSON.parse(localStorage.getItem("partidos"));
console.log(partidos)
const partido = partidos.find(p => p.id === parseInt(evento));
console.log(partido)
document.getElementById("titulo").innerHTML = partido.titulo;

let cardArea = document.getElementById("cardElegida");
cardArea.innerHTML = `
<div class="card mb-3 bg-dark text-white" style="max-width: 720px;">
<div class="row g-0">
    <div class="col-md-4">
        <img src="recursos/cards/${partido.id}.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${partido.titulo}</h5>
            <p class="card-text">${partido.torneo} ${partido.fecha}</p>
            <p class="card-text fw-bolder">${partido.esport}</small></p>
            <p class="card-text fw-bolder text-primary">$${partido.precio}</small></p>
            <p class="card-text text-success">Entradas disponibles: ${partido.cantidad}</small></p>
        </div>
    </div>
</div>
</div>
`;
const form = document.getElementById("form");
const botonCantidad = document.getElementById("botonCantidad");
const divPrecio = document.getElementById("precioParcial");

botonCantidad.addEventListener("click", (e) => {
    e.preventDefault();
    const inputCantidad = document.getElementById("inputCantidad");
    const cantEntradas = inputCantidad.value;
    const precioEvento = partido.precio;
    console.log(cantEntradas);
    
    function multiplicar (a, b) {
        return a * b};
    const precio = multiplicar (precioEvento, cantEntradas);
    console.log(precio);
    divPrecio.innerHTML = `
    <div class="">
        <p class="card-text fw-bolder text-primary m-3 text-center">Total a pagar= $${precio}</p> 
        <button id="botonConfirmar" class="btn btn-secondary m-3">Confirmar</button>
    </div>
    `
});


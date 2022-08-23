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
        <img src="recursos/cards/${partido.id}.png" id ="img" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${partido.titulo}</h5>
            <p class="card-text">${partido.torneo} - ${partido.fecha}</p>
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
    localStorage.setItem("cantidad", cantEntradas);
    function multiplicar (a, b) {
        return a * b};
    const precio = multiplicar (precioEvento, cantEntradas);
    console.log(precio);
    divPrecio.innerHTML = `
    <div class="">
        <p class="card-text fw-bolder text-primary m-3 text-center">Total a pagar= $${precio}</p> 
    </div>
    `
});

const botonConfirmar = document.getElementById("botonSi");
const entradaFormArea = document.getElementById("entradasForm");
const template = "";
const photo = document.getElementById("img");

function entradaPdf(e) {
    const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        //doc.addImage(); //Investigar como se hace 
        doc.text(`  ENTRADA
                    
                    partido:${partido.titulo}
                    Fecha: ${partido.fecha}
                    Torneo: ${partido.torneo}`, 10, 10);
        doc.save("Entrada.pdf");
}

botonConfirmar.addEventListener("click", (e) => {
    e.preventDefault();
    /* domEntradas(); */ 
    entradaPdf();
});

const domEntradas = (e) => {
    const entradas = inputCantidad.value;
    function buildTemplateForm (item){
        return  `
        <div class="card mb-3 bg-dark text-white" style="max-width: 540px;">
        <div class="row g-0">
                <div class="col-md-4">
                <img src="recursos/iUser.png" class="img-fluid rounded-start" alt="...">
                </div>
            <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${partido.titulo}</h5>
                <p class="card-text">${partido.torneo} - ${partido.fecha}</p>
                <p class="card-text">Propietario:</p>
                <div class="mb-3">
                    <label for="nombrePersona" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombrePersona" placeholder="Jorge Perez">
                </div>
                <div class="mb-3">
                    <label for="dniPersona" class="form-label">Documento de identidad</label>
                    <input type="text" class="form-control" id="dniPersona" placeholder="39.378.623">
                </div>
            </div>
        </div>
    </div>
    </div>
            `
        };
    
    for (let i = 0; i < entradas; i++) {
        template += buildTemplateForm(item);
        entradaFormArea.innerHTML = template;
    }
    
};

const confirmarCompra = (e) => {
    //restar cantidad de entradas compradas al array 
};
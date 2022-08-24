//PARTIDO.HTML
const evento = new URLSearchParams(window.location.search).get('event')
console.log("Detalles de "+ evento);
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
            <p class="card-text fw-bolder text-light">$${partido.precio}</small></p>
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
    <div class="mx-auto">
        <p class="card-text fw-bolder text-light m-3 text-center">Total a pagar= $${precio}</p> 
    </div>
    `
});

const botonSiguiente = document.getElementById("botonSi");
const entradaFormArea = document.getElementById("entradasForm");
const template = "";
const botonConfirmar = document.getElementById("botonFin");

botonConfirmar.style.display = "none"

botonSiguiente.addEventListener("click", (e) => {
    e.preventDefault();
    domEntradas(); 
    botonSiguiente.style.display = "none";
    botonConfirmar.style.display = "block";
});

const domEntradas = (e) => {
    const entradas = inputCantidad.value;
    function buildTemplateForm (){
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
                <p class="card-text">${entradas} Entradas</p>
                <p class="card-text">Titular:</p>
                <form id="formPersona">
                <div class="mb-3">
                    <label for="nombrePersona" class="form-label">Nombre</label>
                    <input type="text" class="form-control" name="nombrePersona" id="nombrePersona" placeholder="Jorge Perez">
                </div>
                <div class="mb-3">
                    <label for="dniPersona" class="form-label">Documento de identidad</label>
                    <input type="text" class="form-control" name="dniPersona" id="dniPersona" placeholder="39.378.623">
                </div>
                </form>
                <div id="alerta"></div>
            </div>
        </div>
    </div>
    </div>
            `
        };
        let template = "";
        template += buildTemplateForm();
        entradaFormArea.innerHTML = template;
};

botonConfirmar.addEventListener("click", (e) => {
    e.preventDefault();
    confirmarCompra();
});

const confirmarCompra = (e) => {
    let cantEntradas = inputCantidad.value;
    let nombreCompra = document.getElementById("nombrePersona").value;
    let dniCompra = document.getElementById("dniPersona").value;
    localStorage.setItem("cantidad", cantEntradas);
    localStorage.setItem("nombre", nombreCompra);
    localStorage.setItem("DNI", dniCompra);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Entrada Reservada',
        timer: 1500
    });
    function entradaPdf(e) {
        const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            //doc.addImage(); //Investigar como se hace 
            doc.text(`  ENTRADA
                        Titular: ${nombreCompra} - DNI: ${dniCompra}
                        Partido: ${partido.titulo}
                        Fecha: ${partido.fecha}
                        Torneo: ${partido.torneo}
                        Cantidad de entradas: ${cantEntradas} (Asiento no numerado)
                        `, 10, 10)
            doc.save("Entrada.pdf");
    };
    entradaPdf();
};

//validaciones
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	cantEntradas: /^\d{1}$/,//un caracter
    dni: /^\d{7,9}$/ //7 a 9 caracteres 
};

const alerta = document.getElementById("alerta");
const stay = () => {
    alerta.classList.remove("text-success");
    alerta.classList.add("text-danger");
    alerta.innerHTML = "Los campos son OBLIGATORIOS. Revisa que se hayan colocado correctamente.";
};
const go = () => {
    alerta.classList.remove("text-danger");
    alerta.classList.add("text-success");
    alerta.innerHTML = "¡Se ve bien!";
};

const formulario = document.getElementById("formPersona");
const inputs = document.querySelectorAll("#formPersona input");
const nombreInput = document.getElementById("nombrePersona");
const dniInput= document.getElementById("dniPersona");

const validarForm = (e) => {
    switch (e.target.name) {
        case"nombrePersona":
            if (expresiones.nombre.test(e.target.value)) {
                go();
            } else{
                stay();
            }
        break;
        case"dniPersona":
        if (expresiones.dni.test(e.target.value)) {
            go();
        } else{
            stay();
        }
        break;
    }};
    inputs.forEach((input) => {
        input.addEventListener("keyup", /* validarForm */ console.log("coso"));
        }); 
    

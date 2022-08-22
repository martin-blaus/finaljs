//vi un video que lo hacia asi a la base de datos y tenia el json aparte, no le encuentro el sentido pero al menos funciona 
const partidos = `[
    {
        "id":1,
        "torneo":"The Last Legends",
        "titulo":"BLACKTAIL vs MAYCAM EVOLVE",
        "fecha": "24 de septiembre",
        "precio": 1200,
        "esport": "League of Legends",
        "disponibles": true,
        "cantidad": 10
    },
    {
        "id":2,
        "torneo":"Valorant Champions",
        "titulo":"BLACKTAIL vs 9Z",
        "fecha": "16 de septiembre",
        "precio": 1500,
        "esport": "VALORANT",
        "disponibles": true,
        "cantidad": 15
    },
    {
        "id":3,
        "torneo":"Rocket League Championship",
        "titulo":"BLACKTAIL vs G2 ESPORTS",
        "fecha": "30 de septiembre",
        "precio": 900,
        "esport": "Rocket League",
        "disponibles": true,
        "cantidad": 10
    },
    {
        "id":4,
        "torneo":"Rocket League Championship",
        "titulo":"BLACKTAIL vs TEAM QUESO",
        "fecha": "1 de Octubre",
        "precio": 900,
        "esport": "Rocket League",
        "disponibles": true,
        "cantidad": 10
    }
]`
const jsondatos = JSON.parse(partidos);
console.log(jsondatos);

const inputBuscador = document.getElementById("buscador");
const botonBuscador = document.querySelector("#buscar")
const listaPartidos = document.getElementById("listaPartidos");

/* const filtro = () => {
    console.log(inputBuscador.value);
    const texto = inputBuscador.value.toLowerCase(); //no toma el tolowercase ¿?
    for (let partido of partidos) {
        let nombre = partido.titulo.toLowerCase();
        if (nombre.indexOf(texto) !== -1){
            //quitar elementos que no coinciden con la busqueda ¿?
        }
    }
//
}
botonBuscador.addEventListener("click", filtro);
inputBuscador.addEventListener("keyup", filtro); */

//template para las cards de cada evento (no logre poner las imagenes)
let template = "";
jsondatos.forEach((item) => {
    template += `
    <li>
    <div class= "row row-cols-1 row-cols-md-2 g-4" id="evento">
        <img src= ${item.img}"  class="card-img-top"></img> 
        <div class="card-body">
            <h5 class="card-title">${item.titulo}</h5>
            <p class="card-text">${item.fecha} - ${item.torneo} - ${item.esport}</p>
            <p class="card-text text-success fw-bolder">$${item.precio}</p>
            <button name="button" id="button" type="button" value="Input" class="btn btn-secondary">TICKETS</button>
        </div>
    </div>
    </li>
    `;
});
listaPartidos.innerHTML = template;

const areaCard = document.getElementById("evento");
const botonCard = document.getElementById("button");

areaCard.addEventListener("click", (e) => {
    console.log("elegido");
});

botonCard.addEventListener("click", (e) => {
    console.log("elegido");
});
//card elegida => data => localstorage => partido.html

//como no logre hacer que me devuelva la card elegida no puedo seguir con la parte del partido.html




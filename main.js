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

const barraBusqueda = document.getElementById("barraBusqueda");
const input = document.querySelectorAll("#barraBusqueda input");
const listaPartidos = document.getElementById("listaPartidos");


let template = "";
jsondatos.forEach((item) => {
    template += `
    <li>
    <div class= "row row-cols-1 row-cols-md-2 g-4">
        <img src= "${item.image}"  class="card-img-top"></img>
        <div class="card-body">
            <h5 class="card-title">${item.titulo}</h5>
            <p class="card-text">${item.fecha} - ${item.torneo} - ${item.esport}</p>
            <p class="card-text text-success fw-bolder">$${item.precio}</p>
            <button name="elegir" id="dos" type="button" value="Input" class="btn btn-secondary">TICKETS</button>
        </div>
    </div>
    </li>
    `;
});

listaPartidos.innerHTML = template;

/*const partidoUno = document.getElementById("partidoUno");
const partidoDos = document.getElementById("partidoDos");
const partidoTres = document.getElementById("partidoTres");
const partidoCuatro= document.getElementById("partidoCuatro");


inputs.forEach((input) => {
    input.addEventListener("keyup", (b) => {
        //buscarPartido
    });
    }); 
const buscarPartido = (e) => {
    //funcion para que se muestren solo los partidos que coinciden con la busqueda 
}

//opciones de cada partido
partidoUno.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("1");
});

partidoDos.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("2");
});

partidoTres.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("3");
});

partidoCuatro.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("4");
}); */
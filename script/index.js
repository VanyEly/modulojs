let contenedorCards = document.querySelector('#tarjeta');

contenedorCards.innerHTML= index(data.events);

function index(arrayData) {
let cards = '';

for (const evento of data.events){
    cards +=  ` 
   
    <div class="card m-1 p-2 card-i">
     
      <img src="${evento.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>
      </div>
      <div class="card-footer">
          <small class="text-muted">Precio $${evento.price}</small>
           
            <button onclick="seeDetails('${evento._id}')" class="btn btn-secondary m-4" type="button">
                 ver más
            </button>
         </div>
    </div>
      `
}
return cards;
}

function seeDetails(id){
  console.log(id);
  window.location.href= `./vermas.html?id=${id}`;
}


 

let formulario = document.getElementById('formulario');

//categorias
let categorias = [];
data.events.forEach (event => {  
  if(!categorias.includes(event.category)){
    categorias.push(event.category);
  }
}); 

let listaCategorias = "";
let containerChecks = document.querySelectorAll("#category1");
for ( eventos of events) {
  listaCategorias +=  ` <input class="form-check-input" type="checkbox" id="${eventos.category}" value="${eventos.category}" checked>
  <label class="form-check-label m-1 mx-2" for="${eventos.category}">${eventos.category} </label>
   `
}
containerChecks.innerHTML = listaCategorias;

// se chequean las categorias.


let catCheck = document.querySelectorAll(".form-check-input")
for (check of catCheck) {
  check.addEventListener("change", () => {
    let chequeado = []
    for (let tic of catCheck) {
      if (tic.checked) { 
        chequeado.push(tic.value)
    }
  }
  console.log(chequeado);
       if (chequeado.length > 0) {
          let tarjets = "";
          let containerCard = document.getElementById("tarjeta")
     data.events.filter(evento => chequeado.includes(evento.category)).forEach(evento => {
    tarjets += createCard(evento)
    })
 containerCard.innerHTML = tarjets;       
  }
});
};

let resultados = [];
let inputBusqueda = document.getElementById("formulario");

document.querySelector("#busqueda").onsubmit = (e) =>{
  e.preventDefault();

  let textIngresado = inputBusqueda.value.toLowerCase().trim(); 
  resultados = [];
    for (let event of data.events){
    if( event.name.toLowerCase().includes(textIngresado) ||                 
    event.description.toLowerCase().includes(textIngresado)
     ) {
      resultados.push(event);
      }
  }
    for (let resultado of resultados) {
    console.log(resultado);
  }
}

let formBusqueda = document.querySelector("#busqueda");
let wordIngresada = formBusqueda.querySelector("input[name='wordIngresada']");

    formBusqueda.addEventListener("submit", (evento) => {
    evento.preventDefault();
          
let search = wordIngresada.value.trim();
let result = buscar(value);
mostrarResultados(result);
})

function buscar(word){
  let resultado = [];
  return resultado;
}
function mostrarResultados(result){
  let verResultado = document.querySelector("#resultados-busqueda");
  if(result.length > 0){
  let htmlResultados = "<ul>" + result.map(r => "<li>" + r + "</li>").join("") + "</ul>";
  verResultado.innerHTML = htmlResultados;

  } else {
    verResultado.innerHTML = "<p> No results found for the search. Try again.</p>";
}
}


function nameEvent(arrayEvento){
  arrayEvento.forEach((value) => {
    let nombre = document.createElement('p')
    nombre.innerHTML = value
    } )
}


// let categorias = (Array.from (new Set(events.map(elemento => elemento.category))))

//  console.log(categorias)

//  function renderCheckboxs(category, conteiner){
//    let checkboxs = ""
//    category.forEach(element => {
//    checkboxs += ` <label class="form-check-label m-1 mx-2" for="category1">${element.category} </label>
//    <input class="form-check-input" type="checkbox" id="category1" value="category1" checked>`
//  })
//  conteiner.innerHTML += checkboxs
//  }
  
//  renderCheckboxs(categorias, categoryConteiner)


//  categoryConteinerPadre.addEventListener("change", (element) => {
//    let filtradoPorCategoria = filtrar()
//    console.log(filtradoPorCategoria)
//    index(filtradoPorCategoria, contenedorCards)
//  } )


//  function filtrarPorCategoria(eventos, category){
//    let checked = (Array.from(document.querySelectorAll("input[type ='checkbox']:checked"))
//    .map((element) => element.value));
//    let arrayFiltrado = checked
//      .map((value) =>
//        eventos.filter((elemento) => {
//          return elemento.category === value;
//        })
//      ).flat();
//      if (checked.length == false ) {
//        return eventos;
//      } else {
//        return arrayFiltrado;
//      }
//     }

//     let input = document.getElementById("input-texto")

//     input.addEventListener("input", () => {
//       let filtradoPorBusqueda = filtrar()
//       index(filtradoPorBusqueda, contenedorCards)
//     })

//     function filtrarPorBusqueda(eventos, valueSearch){
//       return eventos.filter(evento => (evento.name).toLowerCase().includes(valueSearch.toLowerCase()))
//     }

//     function filtrar(){
//       let filtradoPorCategoria = filtrarPorCategoria(events, categorias)
//       let filtradoPorBusqueda = filtrarPorBusqueda (filtradoPorCategoria, input.value)
//       return filtradoPorBusqueda 
//     }









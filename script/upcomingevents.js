function upComingDate(arrayData,date) {
    let currentDate = arrayData.currentDate;
    let year = parseInt(currentDate.substr(0,4));
    let mes = parseInt(currentDate.substr(5,2));

    let yearEvent = parseInt(date.substr(0,4));
    let mesEvent = parseInt(date.substr(5,2));

    if (yearEvent >= year && mesEvent >= mes){
        return true;
    }
    return false;
}

const upComingEvents = data.events.filter(event => upComingDate(data,event.date));

let upcomingCards = document.getElementById('tarjeta');

upcomingCards.innerHTML = cards(upComingEvents);

function cards(arrData){
    let cards = '';
    for (let evento of arrData){
        cards +=  `<div class="card m-1 p-2 card-i">
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

let contenedorCards = document.querySelector('#tarjeta');
// 

function seeDetails(id){
  // console.log(id);
  window.location.href= `./vermas.html?id=${id}`;
}


 

let formulario = document.getElementById('formulario');

// console.log(formulario);

formulario.addEventListener('input',() => {


  searchedInfo = formulario.value.toLowerCase();
  // console.log(searchedInfo);
  let filteredCards = data.events.filter((eventName) =>
   eventName.name.toLowerCase().includes(searchedInfo)|| 
  eventName.description.toLowerCase().includes(searchedInfo))
  console.log(filteredCards);

  let newCards = cards(filteredCards);

  contenedorCards.innerHTML = newCards

});

///
let listadoCategorias = []
for(let event of data.events){
    if (!listadoCategorias.includes(event.category)){
        listadoCategorias.push(event.category)
    }
}
let indexCategorias = ""
for (let categoria of listadoCategorias){
    indexCategorias += `<input class="form-check-input" type="checkbox" id="input-${categoria}" value="${categoria}" checked>
    <label class="form-check-label m-1 mx-2" for="input-${categoria}">${categoria}</label>`
}
document.querySelector("#checkbox").innerHTML= indexCategorias



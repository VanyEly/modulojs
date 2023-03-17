function pastEvent(arrayData,date) {
  let currentDate = arrayData.currentDate;
  let year = parseInt(currentDate.substring(0,10));
  let yearEvent = parseInt(date.substring(0,10));
  if (yearEvent < year){
      return true;
  }
  return false;
}

const pastEvents = data.events.filter(event => pastEvent(data,event.date));

let pastCards = document.getElementById('tarjeta');

pastCards.innerHTML = cards(pastEvents);

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
            <a href="./vermas.html">
             <button class="btn btn-secondary m-4" type="button">
                  ver más
             </button></a>
          </div>
     </div>
       `
  }
  return cards;
}

let contenedorCards = document.querySelector('#tarjeta');


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

let newCards = index(filteredCards);

contenedorCards.innerHTML = newCards

});

///
let check = document.querySelectorAll('input[type=checkbox]')
check.forEach(input => {
  input.addEventListener('change', (e)=>{
    if (e.target.checked) {
      let categoriaSeleccionada = e.target.value;
      let eventosFiltrados = data.events.filter(dt => {
          if (dt.category == categoriaSeleccionada) {
              console.log(dt.category)
              return true;
          }
      })
      for(let vnts of eventosFiltrados){
        // console.log(eventosFiltrados);
         contenedorCards.innerHTML += indexCategorias
      }
  }
})
})

let contenedorCards = document.querySelector('#tarjeta');
// console.log(tarjeta);
contenedorCards.innerHTML= index(data.events);

function index(arrayData) {
let cards = '';

for (const evento of arrayData){
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















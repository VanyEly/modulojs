let params = new URLSearchParams(document.location.search)
let id = params.get("id")

let evento = data.events.filter(evento => evento._id == id);
console.log(evento);
const container = document.getElementById("details");
let cards = "";

  cards = `
    <div class="card m-5 p-2 card-i d-flex justify-content-center">
   
    <img src="${evento[0].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${evento[0].name}</h5>
      <p class="card-text">${evento[0].description}</p>
    </div>
    <div class="card-footer">
        <small class="text-muted">Precio $${evento[0].price}</small>
         <a href="./vermas.html?id=${evento[0]._id}">
          <button class="btn btn-secondary m-4" type="button">
               ver más
          </button></a>
       </div>
  </div>
  `

container.innerHTML = cards 







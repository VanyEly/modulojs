let params = new URLSearchParams(document.location.search)
let id = parametros.get("id")
let evento = data.filter(evento => evento.id === id);

const container = document.getElementById("details");
let cards = "";

  cards = `
    <div class="card m-1 p-2 card-i">
   
    <img src="${evento.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${evento.name}</h5>
      <p class="card-text">${evento.description}</p>
    </div>
    <div class="card-footer">
        <small class="text-muted">Precio $${evento.price}</small>
         <a href="./vermas.html?id=${evento._id}">
          <button class="btn btn-secondary m-4" type="button">
               ver más
          </button></a>
       </div>
  </div>
  `

container.innerHTML = cards 







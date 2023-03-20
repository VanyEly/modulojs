let params = new URLSearchParams(document.location.search)
let id = params.get("id")

let evento = data.events.filter(evento => evento._id == id);
console.log(evento);
const container = document.getElementById("details");
let cards = "";

  cards = `<div class="card mb-3 m-3 d-flex justify-content-center">
  <div class="row g-0 col-12 ">
    <div class="col-md-6">
      <img  id="demas" src="${evento[0].image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">${evento[0].name}</h5>
        <p class="card-text">${evento[0].description}</p>
        <p class="card-text">Category: ${evento[0].category}</p>
        <p class="card-text">Place: ${evento[0].place}</p>
        <p class="card-text">Capacity: ${evento[0].capacity}</p>
        <p class="card-text"><small class="text-muted">Precio $${evento[0].price}</small></p>
      </div>
    </div>
  </div>
</div>
    
  `

container.innerHTML = cards 







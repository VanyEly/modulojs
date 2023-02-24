

const contenedorCards = document.querySelector('#tarjeta')


let cards = ''

for (const evento of data.events){
    cards +=  `<div  class="row row-cols-1 row-cols-md-4 g-4 m-1">
    <div class="col"> 
      <div class="card h-100">
        <img src="${evento.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          <p class="card-text">${evento.description}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Precio $${evento.price}</small>
          <a href="./vermas.html">
            <button class="btn btn-secondary m-4" type="button">
              ver más
            </button></a
          >
        </div>
      </div>
      </div>
    </div>`
}

contenedorCards.innerHTML = cards


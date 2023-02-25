

const contenedorCards = document.querySelector('#tarjeta')


let cards = ''

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
           <a href="./vermas.html">
            <button class="btn btn-secondary m-4" type="button">
                 ver más
            </button></a>
         </div>
    </div>
      `
}
contenedorCards.innerHTML = cards


                 
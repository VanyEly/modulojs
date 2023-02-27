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
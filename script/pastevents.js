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

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

// //axxxxx
// function getCategory(arrData){
//     let allCategories = [];
//     arrData.forEach((element) => {
//       if (allCategories.indexOf(element.category) < 0) {
//         allCategories.push(element.category);
//       }
//     });
//     return allCategories.sort();
// }

// function showCategories(arrData) {
//   let categories = "";
//   arrData.map((category) => (categories += `<div class="form-check form-check-inline">
//     <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
//     <label class="form-check-label" for="${category}">${category}</label></div>`)
//   );
//   return categories;
// }

// const upcomingEvents = data.events.filter(event => upcomingDate(data,event.date));

// document.title='Upcoming Events';

// let upcomingCards = document.getElementById('upcoming-card');
// upcomingCards.innerHTML = upCards(upcomingEvents);

// let homeCategories = document.getElementById("category");
// homeCategories.innerHTML = showCategories(getCategory(data.events));
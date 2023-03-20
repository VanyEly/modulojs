const { createApp } = Vue
createApp( {
    data() {
        return {
            cardAmazingEvents: null,
            checkboxes: null,
            valueBuscador: "",
            checked: [],
            cardsFiltradas: undefined
        }
    },
    created(){
        fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(Response => Response.json() )
        .then(data => {
            if(document.title ==  "upcoming events" ){
                this.cardAmazingEvents = data.events.filter(evento => evento.date > data.currentDate)
                console.log(this.cardAmazingEvents)
            }else if(document.title ==  "past events" ){this.cardAmazingEvents = data.events.filter(evento => evento.date < data.currentDate)
                
            }else {this.cardAmazingEvents = data.events}
            this.cardsFiltradas = this.cardAmazingEvents
            this.checkboxes = [ ... new Set( this.cardAmazingEvents.map(cardAmazingEvents => cardAmazingEvents.category ) ) ]
            console.log(this.cardsFiltradas)
            console.log(this.checkboxes)
        })
        .catch(err => console.log(err))
    },
    methods:{
        filtroCruzado: function(){
            let filtroPorBuscador = this.cardAmazingEvents.filter(cardAmazingEvents => cardAmazingEvents.name.toLowerCase().includes( this.valueBuscador.toLowerCase() ) )
            let filtroPorChecks = filtroPorBuscador.filter(cardAmazingEvents => this.checked.includes(cardAmazingEvents.category) || this.checked.length === 0 )
            this.cardsFiltradas = filtroPorChecks
        }
    } 
} ).mount("#app")






























// let contenedorCards = document.querySelector('#tarjeta');
// // console.log(tarjeta);
// // contenedorCards.innerHTML= index(data.events);
// let eventos = []

// function traerDatos(){
//   fetch('https://mindhub-xj03.onrender.com/api/amazing') 
// //  fetch('./dat.json')
// .then(response => response.json())
// .then(datosApi => {
// //  console.log(datosApi)
// eventos = datosApi.events
// index(events)
// })
// .catch(error => console.log(error.message))
// }

// traerDatos()

// function index(arrayData) {
// let cards = '';

// for (const evento of arrayData){
//     cards +=  ` 
   
//     <div class="card m-1 p-2 card-i">
     
//       <img src="${evento.image}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${evento.name}</h5>
//         <p class="card-text">${evento.description}</p>
//       </div>
//       <div class="card-footer">
//           <small class="text-muted">Precio $${evento.price}</small>
           
//             <button onclick="seeDetails('${evento._id}')" class="btn btn-secondary m-4" type="button">
//                  ver más
//             </button>
//          </div>
//     </div>
//       `
// }
// return cards;
// }

// function seeDetails(id){
//   // console.log(id);
//   window.location.href= `./vermas.html?id=${id}`;
// }


 

// let formulario = document.getElementById('formulario');

// // console.log(formulario);

// formulario.addEventListener('input',() => {


//   searchedInfo = formulario.value.toLowerCase();
//   // console.log(searchedInfo);
//   let filteredCards = data.events.filter((eventName) =>
//    eventName.name.toLowerCase().includes(searchedInfo)|| 
//   eventName.description.toLowerCase().includes(searchedInfo))
//   console.log(filteredCards);

//   let newCards = index(filteredCards);

//   contenedorCards.innerHTML = newCards

// });


// let listadoCategorias = []
// for(let event of data.events){
//     if (!listadoCategorias.includes(event.category)){
//         listadoCategorias.push(event.category)
//     }
// }
// let indexCategorias = ""
// for (let categoria of listadoCategorias){
//     indexCategorias += `<input class="form-check-input" type="checkbox" id="input-${categoria}" value="${categoria}" checked>
//     <label class="form-check-label m-1 mx-2" for="input-${categoria}">${categoria}</label>`
// }
// document.querySelector("#checkbox").innerHTML= indexCategorias




// let check = document.querySelectorAll('input[type=checkbox]')
// check.forEach(input => {
//     input.addEventListener('change', (e)=>{
//       if (e.target.checked) {
//         let categoriaSeleccionada = e.target.value;
//         let eventosFiltrados = data.events.filter(dt => {
//             if (dt.category == categoriaSeleccionada) {
//                 console.log(dt.category)
//                 return true;
//             }
//         })
//         for(let vnts of eventosFiltrados){
//           console.log(eventosFiltrados);
//            contenedorCards.innerHTML += indexCategorias
//         }
//     }
// })
// })




















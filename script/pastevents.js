const { createApp } = Vue

createApp({
    data(){
    return {
        eventsInformation: undefined,
        checkBoxesCategories : undefined, 
        pastEvents : undefined,
        keyWordSearch : "",
        checked: [],
        arrayEvents : [],
        }
    },
    created(){
        // fetch('./dat.json')
        fetch('https://mindhub-xj03.onrender.com/api/amazing')  
            .then( information => information.json ()) 
            .then( data =>{
                this.eventsInformation = data.events 
                this.pastEvents = this.eventsInformation.filter(event => event.date < data.currentDate)
                this.arrayEvents = this.pastEvents
                this.checkBoxes = this.checkBoxes (this.pastEvents) 
                
                
            })
            .catch(err => console.log(err) )
    },
methods:{
    checkBoxes : function (data){
        return this.checkBoxes = new Set (data.map(event => event.category))
    },
    filtroCruzado : function () {
        let filtroPorBusqueda = this.arrayEvents.filter(event => event.name.toLowerCase().includes (this.keyWordSearch.toLowerCase()))
        if (this.checked.length === 0){
            this.pastEvents = filtroPorBusqueda
        }
        else{
            let filtroPorCheck = filtroPorBusqueda.filter(event => this.checked.includes(event.category))
            this.pastEvents = filtroPorCheck
        }
    }
}               
}).mount('#app')
































































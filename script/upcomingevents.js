const { createApp } = Vue

createApp({
    data(){
    return {
        eventsInformation: undefined,
        checkBoxesCategories : undefined, 
        upcomingEvents : undefined,
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
                this.upcomingEvents = this.eventsInformation.filter(event => event.date > data.currentDate)
                this.arrayEvents = this.upcomingEvents
                this.checkBoxes = this.checkBoxes (this.upcomingEvents) 
                
                
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
            this.upcomingEvents = filtroPorBusqueda
        }
        else{
            let filtroPorCheck = filtroPorBusqueda.filter(event => this.checked.includes(event.category))
            this.upcomingEvents = filtroPorCheck
        }
    }
}               
}).mount('#app')




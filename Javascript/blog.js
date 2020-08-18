const Items=document.querySelectorAll('.post')
const tittles=document.querySelectorAll('.post h5')
const busqueda =document.getElementById('busqueda')
const classArr=['ciencia','informatica','aprendizaje','todo']
document.body.addEventListener('click',(e)=>{
    for(let i=0;i<classArr.length;i++){
        Evaluar(e.target.classList[0])
    }
})
busqueda.addEventListener("keyup",(e)=>{
     if (e.keyCode == 13 ) {
     Evaluar(busqueda.value)
     BusquedaPersonaliada(busqueda.value)
     busqueda.value=''
     }
  });
function MostrarCat(clase){
    Items.forEach(({classList: c})=>{
        if(c.contains(clase) || clase=='todo'){
            c.remove('d-none')
        }
        else{
            c.add('d-none')
        }
     })
}
function Evaluar(condicion){
    for(let i=0;i<classArr.length;i++){
        if(condicion==(classArr[i]) || 
        classArr[i].startsWith(condicion)){   
            MostrarCat(classArr[i])     
          } 
    }
}
function BusquedaPersonaliada(valor){
   tittles.forEach((evnt) => {
    if(evnt.textContent.toLowerCase().trim().includes(valor)){
        const clases=evnt.parentElement
            .parentElement
            .parentElement
            .parentElement
            .classList[2]
            Evaluar(clases)
        }
   });
}
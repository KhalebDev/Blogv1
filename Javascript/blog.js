const Items=document.querySelectorAll('.post')
const classArr=['html','css','boostrap','todo']
document.body.addEventListener('click',(e)=>{
    e.preventDefault()
    for(let i=0;i<classArr.length;i++){
        if(e.target.classList[0]==(classArr[i])){     
            MostrarCat(classArr[i])     
        } 
    }
})
//
console.log(Items)
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
//


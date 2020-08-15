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
function MostrarCat(clase){
    Items.forEach(item=>{
        if(item.classList.contains(clase) || clase=='todo'){
            item.classList.remove('d-none')
        }
        else{
            item.classList.add('d-none')
        }
     })
}
//


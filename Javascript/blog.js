const Items=document.querySelectorAll('.post')
const html=document.getElementById('html')
const css=document.getElementById('css')
const bostp=document.getElementById('boostrap')
const todo=document.getElementById('todo')


// categories

html.addEventListener('click',()=>{
    const cat=new BuscaCategoria()
    cat.MostrarCategoria('html')
})
css.addEventListener('click',()=>{
    const cat=new BuscaCategoria()
    cat.MostrarCategoria('css')
})
bostp.addEventListener('click',()=>{
    const cat=new BuscaCategoria()
    cat.MostrarCategoria('boostrap')
})
todo.addEventListener('click',()=>{
    const cat=new BuscaCategoria()
    cat.MostrarCategoria('post')
})

//evaluar categorias
class BuscaCategoria{
    constructor(){
    }

    MostrarCategoria(clase){
        Items.forEach(item=>{
            if(item.classList.contains(clase)){
                item.classList.remove('d-none')
            }
            else
            {
                item.classList.add('d-none')
            }
         })
    }
}
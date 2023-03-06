let panel  = document.querySelectorAll('.panel')

Array.from(panel).forEach((element)=>{
   element.addEventListener('click',()=>{
    removeactive();
    element.classList.add('active')
   })
}) 

const removeactive = () =>{
    panel.forEach((element)=>{
        element.classList.remove('active')
    })
}
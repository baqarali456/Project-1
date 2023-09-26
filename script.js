const panels = document.querySelectorAll('.panel');

for(i=0;i<panels.length;i++){
    panels[i].addEventListener('click',function(e){
        update()
      e.target.classList.add('active');
    })
}


function update(){
    for(i=0;i<panels.length;i++){
        panels[i].classList.remove('active')
    }
}
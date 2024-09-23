const box=document.querySelectorAll('.content');

window.addEventListener('scroll',showBox);
showBox()
function showBox(){
        const heightWindow=window.innerHeight*0.7
       
        box.forEach(elemenet => {
            const boxTop=elemenet.getBoundingClientRect().top
            
            if (boxTop<heightWindow){
                elemenet.classList.add('show');
            }
            else{
                elemenet.classList.remove('show')
            }
        })
}


const box=document.querySelectorAll('.content');

window.addEventListener('scroll',showBox);
showBox()
function showBox(){
        const lastBox=window.innerHeight*0.8
        box.forEach(elemenet => {
            const boxTop=elemenet.getBoundingClientRect().top
            if (boxTop<lastBox){
                elemenet.classList.add('show');
            }
            else{
                elemenet.classList.remove('show')
            }
        })
}


const box=document.querySelectorAll('.content');

window.addEventListener('scroll',showBox);


function showBox(){
        const heightWindow=window.innerHeight*0.8


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
// function showBox() {
//     const heightWindow = window.innerHeight; 
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;

//     box.forEach(element => {
//         const boxTop = element.offsetTop; 

//         if (scrollTop + heightWindow > boxTop) {
//             element.classList.add('show'); 
//         } else {
//             element.classList.remove('show'); 
//         }
//     });
// }





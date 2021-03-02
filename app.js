const btnbars = document.getElementById('btnbars');


function cambiox(){
    if(btnbars.innerHTML === '<i class="fas fa-bars"> </i>'){
        btnbars.innerHTML = '<i class="fas fa-times"> </i>'
    }else{
        btnbars.innerHTML = '<i class="fas fa-bars"> </i>'
    }
};


btnbars.addEventListener('click',()=>{
    const menumovil = document.querySelector('.menumovil');
    cambiox();
    menumovil.classList.toggle('movilactivo');
    const links = document.querySelectorAll('.menumovilitem');
    links.forEach(link =>{
        link.classList.toggle('fade')
    });
    
    
});


document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider',{
        type: 'loop',
        fixedWidth: 'auto',
    } ).mount();
} );



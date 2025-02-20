// Inicializa un nuevo carrusel utilizando la biblioteca Swiper en el elemento con la clase ".inicio"
var swiper = new Swiper(".inicio", {
    spaceBetween: 30,
    // Centra el slide activo en el viewport
    centeredSlides: true,

    navigation: {
        // El botón llama a la clase "next"
        nextEl: ".swiper-button-next",
        // El botón llama a la clase "prev"
        prevEl: ".swiper-button-prev",
    },
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.barra-navegacion');

// Al hacer clic se despliega
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('activo');
}

// Cuando bajemos, se oculta
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('activo');
}

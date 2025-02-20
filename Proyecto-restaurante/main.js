var swiper = new Swiper(".inicio", {
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
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

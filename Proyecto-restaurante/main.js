// Inicializa un nuevo carrusel utilizando la biblioteca Swiper en el elemento con la clase ".inicio"
var swiper = new Swiper(".inicio", {

    spaceBetween: 30,
    // Centra el slide activo en el viewport
    centeredSlides: true,

    navigation: {
        //el boton llama a la clase sig"
        nextEl: ".swiper-button-next",
        //el boton llama a la clase antes"
        prevEl: ".swiper-button-prev",
    },
});

menu.onclick = () => {
    // Alterna la clase 'bx-x' en el menú, lo que podría cambiar su estilo
    menu.classList.toggle('bx-x');
    // Alterna la clase 'active' en la barra de navegación, mostrando o escondiendo el menú
    navbar.classList.toggle('retroceder');
}

// Asigna una función que se ejecutará al hacer scroll en la ventana
window.onscroll = () => {
    // Elimina la clase 'bx-x' del menú cuando se desplaza la página
    menu.classList.remove('bx-x');
    // Elimina la clase 'active' de la barra de navegación, cerrando el menú si está abierto
    navbar.classList.remove('retroceder');
}

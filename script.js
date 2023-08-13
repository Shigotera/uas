
document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.openbtn');
    const closeBtn = document.querySelector('.closebtn');
    const navLinks = document.querySelector('.nav-links');

    openBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        openBtn.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        openBtn.classList.toggle('active');
    });
});

$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        draggable: true, // Mengaktifkan fitur drag
    });
});

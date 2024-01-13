const header = document.querySelector('header');
const content = document.querySelector('.content');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const headerHeight = header.offsetHeight;

    if (scrollPos < headerHeight) {
        header.style.backgroundColor = 'rgb(249, 226, 255) ' + (scrollPos / headerHeight) + ')'; // Fondo con opacidad variable
    } else {
        header.style.backgroundColor = 'rgb(249, 226, 255)'; // Fondo sólido
    }
});


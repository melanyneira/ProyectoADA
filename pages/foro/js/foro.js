/* const mensaje = "Si sos victima de violencia de género comunicate a la Linea 144";
document.getElementById("mensaje").textContent = mensaje;
 */

const mensaje = "Si sos victima de violencia de género comunicate a la Linea 144";
document.getElementById("mensaje").textContent = mensaje;
document.addEventListener('scroll', function () {
    var header = document.getElementById('myHeader');
    var scrollTop = window.scrollY;

    if (scrollTop > 50) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }


});

document.addEventListener('DOMContentLoaded', function () {
    var subir = document.getElementById('subir');


    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            subir.style.display = 'block';
        } else {
            subir.style.display = 'none';
        }
    };

    //SUBIR
    subir.addEventListener('click', function () {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });
});

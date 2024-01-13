
document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'befa388152744c4faf3bf8936af5e2d7';
    const country = 'ar';
    const keyword = 'women-mujeres' ; // Palabra clave específica
    const apiUrl = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;
    
    
    const cantidadDeNoticias = 4; // Cambia este número según tus preferencias
 
    // Realiza una solicitud a la API de noticias
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const noticiasDiv = document.getElementById('noticias');
            const noticias = data.articles;

            for (let i = 0; i < cantidadDeNoticias; i++) { // Solo mostrar la cantidad deseada de noticias
                const noticia = noticias[i];
                if (!noticia) break; // Evitar errores si no hay suficientes noticias

                const titulo = noticia.title;
                const descripcion = noticia.description;
                const url = noticia.url;
                const imagenUrl = noticia.urlToImage; // URL de la imagen

                const noticiaElement = document.createElement('div');
                noticiaElement.className = 'noticia'; // Agrega la clase .noticia
                noticiaElement.innerHTML = `
                    <h2><a href="${url}" target="_blank">${titulo}</a></h2>
                    <img src="${imagenUrl}" alt="Imagen de la noticia" />
                    <p>${descripcion}</p>
                `;

                noticiasDiv.appendChild(noticiaElement);
            }
        })
        .catch(error => {
            console.error('Error al obtener noticias', error);
        });
});






document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'befa388152744c4faf3bf8936af5e2d7';
    const country = 'ar';
    const keyword = 'mujeres-argentina' ; // Palabra clave específica
    const apiUrl = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;
    
    
    const cantidadDeNoticias = 8; // Cambia este número según tus preferencias
 
    // Realiza una solicitud a la API de noticias
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const noticiasDiv = document.getElementById('leyes');
            const noticias = data.articles;

            for (let i = 0; i < cantidadDeNoticias; i++) { // Solo mostrar la cantidad deseada de noticias
                const noticia = noticias[i];
                if (!noticia) break; // Evitar errores si no hay suficientes noticias

                const titulo = noticia.title;
                const descripcion = noticia.description;
                const url = noticia.url;
                const imagenUrl = noticia.urlToImage; // URL de la imagen

                const noticiaElement = document.createElement('div');
                noticiaElement.className = 'noticia'; // Agrega la clase .noticia
                noticiaElement.innerHTML = `
                    <h2><a href="${url}" target="_blank">${titulo}</a></h2>
                    <img src="${imagenUrl}" alt="Imagen de la noticia" />
                    <p>${descripcion}</p>
                `;

                noticiasDiv.appendChild(noticiaElement);
            }
        })
        .catch(error => {
            console.error('Error al obtener noticias', error);
        });
});

//header transparente
const header = document.querySelector('header');
const content = document.querySelector('.content');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const headerHeight = header.offsetHeight;

    if (scrollPos < headerHeight) {
        header.style.backgroundColor = 'rgb(240, 226, 241, 0.9) ' + (scrollPos / headerHeight) + ')'; // Fondo con opacidad variable
        header.style.color = `rgba(0, 0, 0, ${1 - opacity})`; 
    } else {
        header.style.backgroundColor = 'rgb(240, 226, 241, 0)'; // Fondo sólido
    }
});
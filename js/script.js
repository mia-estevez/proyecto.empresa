const boton= document.getElementById('modo-btn');
boton.addEventListener('click', () => {
    document.body.classList.toggle('modo-noche');

    if (document.body.classList.contains('modo-noche')) {
        boton.textContent = 'Desactivar modo noche';
    } else {
        boton.textContent = 'Activar modo noche';
    }

});

const boton = document.getElementById('botonEnviar');
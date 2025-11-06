const boton= document.getElementById('modo-btn');
boton.addEventListener('click', () => {
    document.body.classList.toggle('modo-noche');

    if (document.body.classList.contains('modo-noche')) {
        boton.textContent = 'Desactivar modo noche';
    } else {
        boton.textContent = 'Activar modo noche';
    }

});

const botón = document.getElementById('botonEnviar');
const modalConfirmar = document.getElementById('modalConfirmar');
const modalLimpiar = document.getElementById('modalLimpiar');
const formulario = document.getElementById('miFormulario');

// Click izq
boton.addEventListener('click', (e) => {
  e.preventDefault(); 
  modalConfirmar.style.display = 'block';
});

// Click derecho
boton.addEventListener('contextmenu', (e) => {
  e.preventDefault(); 
  modalLimpiar.style.display = 'block';
});
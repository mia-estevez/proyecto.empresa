document.addEventListener('DOMContentLoaded', () => {
  const botonModo = document.getElementById('modo-btn');

  if (botonModo) {
    botonModo.addEventListener('click', () => {
      document.body.classList.toggle('modo-noche');
      botonModo.textContent = document.body.classList.contains('modo-noche')
        ? 'Desactivar modo noche'
        : 'Activar modo noche';
    });
  }
});

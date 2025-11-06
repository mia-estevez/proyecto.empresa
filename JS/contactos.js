const button = document.getElementById('botonEnviar');
const modalConfirmar = document.getElementById('modalConfirmar');
const modalLimpiar = document.getElementById('modalLimpiar');
const formulario = document.getElementById('miFormulario');

button.addEventListener('click', (e) => {
  e.preventDefault();
  modalConfirmar.style.display = 'block';
});

button.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  modalLimpiar.style.display = 'block';
});

document.getElementById('confirmarEnvio').addEventListener('click', () => {
  modalConfirmar.style.display = 'none';
  alert('Formulario enviado con éxito ✅');
  formulario.submit();
});

document.getElementById('confirmarLimpieza').addEventListener('click', () => {
  modalLimpiar.style.display = 'none';
  formulario.reset();
  alert('Formulario limpiado 🧹');
});

document.querySelectorAll('.cerrar').forEach(botonCerrar => {
  botonCerrar.addEventListener('click', () => {
    modalConfirmar.style.display = 'none';
    modalLimpiar.style.display = 'none';
  });
});

const elemento = document.getElementById("texto-animado");

function animarConCSS() {
  elemento.classList.add("animar");
}

scroll ();
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      elemento.classList.add("animar");
   }
});
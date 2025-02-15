// Función para aceptar y redirigir a la página principal
function accept() {
    window.location.href = 'bienvenido.html';  // Cambia 'index.html' por el nombre de tu página principal
}

// Función para rechazar y mostrar la vaca llorando
function reject() {
    const cryingCow = document.getElementById('crying-cow');
    cryingCow.style.display = 'flex';  // Muestra la vaca llorando en toda la pantalla
    cryingCow.style.animation = 'none';  // Reinicia cualquier animación anterior
    cryingCow.offsetHeight;  // Forzamos un reflow para que la animación se reinicie
    cryingCow.style.animation = 'showCryingCow 1s ease-out';  // Vuelve a aplicar la animación de aparición
}

// Función para cerrar la vaca llorando con animación de salida
function closeCryingCow() {
    const cryingCow = document.getElementById('crying-cow');
    cryingCow.style.animation = 'hideCryingCow 1s forwards';  // Animación de salida
    setTimeout(() => {
        cryingCow.style.display = 'none';  // Ocultar la vaca llorando después de la animación
    }, 1000);  // Duración de la animación
}

// Función para cerrar la vaca llorando al hacer clic fuera de la imagen
const cryingCowOverlay = document.getElementById('crying-cow');
cryingCowOverlay.addEventListener('click', function(event) {
    if (event.target === cryingCowOverlay) {
        closeCryingCow();  // Llamamos a la función para cerrar la vaca llorando
    }
});

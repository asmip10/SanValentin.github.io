// Función para generar iconos de vaquitas al hacer clic en el botón
function generateVaquita(event) {
  const numVaquitas = 15;  // Número de vaquitas a generar

  for (let i = 0; i < numVaquitas; i++) {
      const vaquita = document.createElement('div');
      vaquita.className = 'vaquita';
      vaquita.innerHTML = '🐄';  // Puedes usar un icono de vaca o una imagen aquí

      // Generamos posiciones aleatorias para las vacas
      const x = Math.random() * window.innerWidth;
      const y = -100; // Comenzamos fuera de la pantalla en la parte superior

      // Posicionamos la vaca en la ubicación aleatoria
      vaquita.style.left = `${x}px`;
      vaquita.style.top = `${y}px`;

      // Añadimos la vaca a la página
      document.body.appendChild(vaquita);

      // Hacemos que se mueva y desaparezca con la animación
      vaquita.style.animation = `randomMovement ${Math.random() * 3 + 3}s linear infinite, floatVaquita 5s ease-in-out infinite`;

      // Después de un tiempo, eliminamos la vaca para evitar que se acumulen
      setTimeout(() => {
          vaquita.remove();
      }, 5000);  // Duración de 5 segundos
  }
}


// Detectar clics en cualquier parte de la página
document.body.addEventListener('click', generateHearts);

// // Funciones para abrir y cerrar el modal
// function openModal(imageUrl) {
//   const modal = document.getElementById('imageModal');
//   const modalImage = document.getElementById('modalImage');
//   modal.style.display = 'flex';
//   modalImage.src = imageUrl;
// }

function openModal(imageUrl) {
  // Obtener el modal y la imagen
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  // Mostrar el modal y la imagen seleccionada
  modal.style.display = 'flex';
  modalImage.src = imageUrl;
  
  // Quitar la clase 'selected' de todas las imágenes
  galleryItems.forEach(item => item.classList.remove('selected'));
  
  // Encontrar la imagen seleccionada y agregarle la clase 'selected'
  const selectedItem = Array.from(galleryItems).find(item => item.style.backgroundImage.includes(imageUrl));
  if (selectedItem) {
      selectedItem.classList.add('selected');
  }
}
function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}

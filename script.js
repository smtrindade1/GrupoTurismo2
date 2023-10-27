const botonLogin = document.getElementById('login-button');
const formularioRegistro = document.getElementById('registro-formulario');
const overlay = document.getElementById('overlay');

botonLogin.addEventListener('click', () => {
  // Agrega una clase al formulario para desplazarlo hacia abajo
  formularioRegistro.style.top = '0'; // Cambia la propiedad 'top' para mostrar el formulario
  overlay.style.display = 'block';
});
   
// Agrega un evento de clic al overlay
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    // Restablece la propiedad 'top' para ocultar el formulario
    formularioRegistro.style.top = '-100%';
    overlay.style.display = 'none';
  }
});



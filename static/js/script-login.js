

// Para reiniciar el formulario (inputs)
window.addEventListener('DOMContentLoaded', function() { // Cuando se haya cargado completamente.
  var form = document.querySelector('form'); // Busca el elemento form.
  if (form) { // Verifica si existe el formulario.
    form.reset(); // Reinicia el formulario completamente.
  }
});

function loginUser() { 

    // Declaramos variables para capturar los valores de los inputs
    // El trim se usa para eliminar espacios en blanco en los imputs.
    // Usamos TOLOWERCASE para que el correo se compare en minusculas.
    let inputCorreo = document.getElementById("mailLabel").value.trim().toLowerCase();
    let inputContraseña = document.getElementById("passwordLabel").value.trim();

    // Validaciones
    if (inputCorreo == "" || inputContraseña == "") {
        alert("Por favor, rellene todos los campos.");
    }
    
    // Obtener usuarios del LocalStorage registrados.
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; //o inicializar un array vacío
    const encontrarUsuario = usuarios.find(
        usuario => usuario.inputCorreo == inputCorreo && usuario.inputContraseña == inputContraseña
        // Estrictamente igual (===) que sean iguales tanto en valor y en el tipo de dato.
    )

    // Validar que el usuario exista y la contraseña sea correcta.
    if (!encontrarUsuario) {
        alert("Correo o contraseña incorrectos, verifique nuevamente.");

    } else {
      alert("Inicio de sesión exitoso.");
    }

    
}
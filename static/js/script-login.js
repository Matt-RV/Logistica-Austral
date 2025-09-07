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
        return; // Salir de la función si los campos están vacíos
    }
    
    // Obtener usuarios del LocalStorage registrados.
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; //o inicializar un array vacío
    
    const encontrarUsuario = usuarios.find(
        usuario => usuario.inputCorreo === inputCorreo && usuario.inputContraseña === inputContraseña
        // Usamos === para comparación estricta
        // Busca el primer elemento del array que cumpla con el correo y contrasennia.
        // que el correo y contrasennia del user sean iguales a los del input.
    )

    // Validar que el usuario exista y la contraseña sea correcta.
    if (!encontrarUsuario) {
        alert("Correo o contraseña incorrectos, verifique nuevamente.");
    } else {
        alert("Inicio de sesión exitoso.");
        // Se debe redirigir a explorar.html
        window.location.href = "explorar.html";
    }
}
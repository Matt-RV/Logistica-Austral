
// Para reiniciar el formulario (inputs)
window.addEventListener('DOMContentLoaded', function() { // Cuando se haya cargado completamente.
  var form = document.querySelector('form'); // Busca el elemento form.
  if (form) { // Verifica si existe el formulario.
    form.reset(); // Reinicia el formulario completamente.
  }
});


// Función para registrar el usuario.
function registroUser() { 
    // Colocamos el TRIM para eliminar espacios en blanco dentro de los imputs.
    // Usamos TOLOWERCASE para que el correo se guarde en minusculas
    let inputNombre = document.getElementById("nombreLabel").value.trim();
    let inputRut = document.getElementById("rutLabel").value.trim();
    let inputCorreo = document.getElementById("correoLabel").value.trim().toLowerCase();
    let inputTelefono = document.getElementById("telefonoLabel").value.trim();
    let inputContraseña = document.getElementById("contraseñaLabel").value.trim();
    let inputContraseña2 = document.getElementById("contraseñaLabel2").value.trim();

    let exist = false; // Variable para verificar si el usuario existe

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; // Obtener usuarios del localStorage o inicializar un array vacío

    for (let i = 0; i < usuarios.length; i++) { 
        if (usuarios[i].inputCorreo == inputCorreo) { 
            exist = true;
            break;
        } 
    }

    // Validaciones
    if (inputNombre == "" || inputRut == "" || inputCorreo == "" || inputTelefono == "" || inputContraseña == "" || inputContraseña2 == "") { 
        // Si todos los campos están vacios.
        alert("Por favor, rellene todos los campos.");
    }
    else if(inputContraseña != inputContraseña2) { 
        // Si las contraseñas son diferentes.
        alert("Las contraseñas no coinciden, por favor verifique nuevamente.")
    }
    else if(inputRut.length > 10) {
        //Rut: 8 Numeros sin guión ni rut verificador - 10 Numeros con guión y rut verificador.
        // Si el rut es mayor a 10 caracteres.
        alert("El RUT ingresado no es válido, verifique nuevamente.")
    }
    else if(inputTelefono.length > 9) {
        // Si el telefono es mayor a 9 caracteres.
        alert("El número telefónico ingresado no es válido, verifique nuevamente.")
    }
    else if(!inputCorreo.includes("@") || !inputCorreo.includes(".")) { 
        // Si el correo no contiene "@".
        alert("El correo electrónico no tiene @ o ., verifique nuevamente.")
    }
    else if(exist == true) { 
        // Si el usuario ya existe.
        alert("El usuario ya existe, por favor ingrese otro correo.")
    }
    else { 
        usuarios.push({inputNombre, inputRut, inputCorreo, inputTelefono, inputContraseña}) // Agrega el usuario al Array.
        localStorage.setItem("usuarios", JSON.stringify(usuarios)) // guarda el array actualizado en localStorage.
        alert("Usuario registrado con éxito.")
    }
    
}
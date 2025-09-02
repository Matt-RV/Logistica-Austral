








// Creamos la funcion para validar correo y contrasennia

function datosUser() { 
    let inputEmail = document.getElementById("inputEmail").value;
    let inputPassword = document.getElementById("inputPassword6").value;

    if (!inputEmail.value || !inputEmail.value.includes("@")) {
        alert("Por favor, ingrese un correo valido")
    }
}
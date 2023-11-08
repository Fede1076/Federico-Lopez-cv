let nombre = document.getElementById("name");
let email = document.getElementById("mail");
let messages = document.getElementById("message");

function validacion() {

    if (nombre.value === null || nombre.value === "") {
        alert("Debes ingresar tu nombre");
    }else if (email.value === null || email.value === "" || email.value === !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))) {
        alert("Debes ingresar tu correo electrónico");
    }else if (messages.value === null || messages.value === "") {
        alert("Debes ingresar algún mensaje");
    }

        return false;    
}



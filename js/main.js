function logearse() {
    let log = confirm("¿Desea ingresar?");
    if (log == true) {
        login();
    } else {
        console.log("NoLog");
    }
}

function login() {
    let nombre = prompt("Nombre");
    let apellido = prompt("Apellido");

    if (nombre != "" && apellido != "" && nombre != " " && apellido != " " && nombre != null && apellido != null) {
        let bienvenida = "Bienvenido/a " + nombre + " " + apellido;
        document.getElementById("entradaUsuario").innerHTML = '<p id="entradaUsuario" class="bg-success p-3 sticky">' + bienvenida + '</p>';
    } else {
        alert("Por favor, ingrese sus datos");
        logearse();
    }
}

// Formulario de contacto

function mensajeEnviado() {
    alert("Su mensaje ha sido enviado correctamente");
}
// Funcion Login

function logearse() {
    let log = confirm("¿Desea ingresar?");
    if (log == true) {
        login();
    } else {
        console.log("NoLog");
        location.href="../index.html";
    }
}

function login() {
    let user = prompt("Ingrese su nombre de usuario");
    let contraseña = prompt("Ingrese su contraseña");

    if (user != "admin" && contraseña != "3578") {
        alert("Por favor, ingrese sus datos")
        logearse();
    } else {
        alert("Bienvenido al administrador");
        let nombreApellido = prompt("Ingrese su nombre y apellido");
        let bienvenida = "Bienvenido/a al administrador " + nombreApellido;
        document.getElementById("entradaUsuario").innerHTML = bienvenida;
    }
}

// Funcion Capturar

function capturar() {
    function Objeto(modelo, marca, color, sexo, precio) {
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        this.sexo = sexo;
        this.precio = precio;
    }

    let agregarModelo = document.getElementById("modelo").value;
    let agregarMarca = document.getElementById("marca").value;
    let agregarColor = document.getElementById("color").value;
    let agregarSexo = document.getElementById("sexo").value;
    let agregarPrecio = document.getElementById("precio").value;

    if (agregarModelo, agregarMarca, agregarColor, agregarSexo, agregarPrecio == "") {
        alert("Rellenar todos campos");
    } else {
        nuevoProducto = new Objeto(agregarModelo, agregarMarca, agregarColor, agregarSexo, agregarPrecio);
        console.log(nuevoProducto);
        agregar();
    }


}

// Creacion de Array

let baseDatos = [];
let indice = 0;

// Funcion Agregar

function agregar() {
    indice++;
    baseDatos.push(nuevoProducto);
    document.getElementById("tabla").innerHTML += '<tbody><tr><th scope="row">' + indice + '</th><td>' + nuevoProducto.modelo + '<td>' + nuevoProducto.marca + '</td>' + '<td>' + nuevoProducto.color + '</td>' + '<td>' + nuevoProducto.sexo + '</td>' + '<td>' + nuevoProducto.precio + '</td>' + '</td></tr></tbody>';
    alert("Producto añadido correctamente")
}

// Llamado a Login

login();

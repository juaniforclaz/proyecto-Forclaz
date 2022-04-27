
// // Funcion Login y Loguearse para preguntar si desea ingresar

// function logearse() {
//     let log = confirm("¿Desea ingresar?");
//     if (log == true) {
//         login();
//     } else {
//         console.log("NoLog");
//         location.href = "../index.html";
//     }
// }

let confirmBtn = document.getElementById('confirmBtn');
confirmBtn.addEventListener('click', login);


function login() {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    // let admi = document.getElementById('administrador');
    // let formLog = document.getElementById('formLog');

    if (user == "admin" || password == "3578") {
        alert("Bienvenido al administrador");
        // formLog.classList.add('d-none');
        // admi.classList.remove('d-none');
        let nombreApellido = prompt("Ingrese su nombre y apellido");
        let bienvenida = "Bienvenido/a al administrador " + nombreApellido;
        document.getElementById("entradaUsuario").innerHTML = bienvenida;
        ;
    } else {
        alert("Por favor, ingrese sus datos")
    }
}


// Funcion de creacion de objeto

function Objeto(modelo, marca, color, genero, precio) {
    this.modelo = modelo;
    this.marca = marca;
    this.color = color;
    this.genero = genero;
    this.precio = precio;
}

// Funcion Capturar para guardar datos

function capturar() {

    let agregarModelo = document.getElementById("modelo").value;
    let agregarMarca = document.getElementById("marca").value;
    let agregarColor = document.getElementById("color").value;
    let agregarGenero = document.getElementById("genero").value;
    let agregarPrecio = document.getElementById("precio").value;

    if (agregarModelo, agregarMarca, agregarColor, agregarGenero, agregarPrecio === "") {
        alert("Rellenar todos campos");
    } else {
        nuevoProducto = new Objeto(agregarModelo, agregarMarca, agregarColor, agregarGenero, agregarPrecio);
        console.log(nuevoProducto);
        agregar();
    }
}

// Creacion de Array

const baseDatos = [
    nuevoProducto = new Objeto("Cartera", "LV", "Negro", "Femenino", 3000),
    nuevoProducto = new Objeto("Cartera", "LV", "Blanca", "Femenino", 3500),
    nuevoProducto = new Objeto("Cartera", "LV", "Marron", "Unisex", 3700),
    nuevoProducto = new Objeto("Cartera", "LV", "Verde", "Masculino", 4000),
    nuevoProducto = new Objeto("Bandolera", "XL", "Negro", "Unisex", 2400),
];

let indice = 0;

// Funcion Agregar para agregar los datos anteriormente guardados a la tabla

function agregar() {
    indice++;
    baseDatos.push(nuevoProducto);
    document.getElementById("tabla").innerHTML += '<tbody><tr><th scope="row">' + indice + '</th><td>' + nuevoProducto.modelo + '<td>' + nuevoProducto.marca + '</td>' + '<td>' + nuevoProducto.color + '</td>' + '<td>' + nuevoProducto.genero + '</td>' + '<td>' + nuevoProducto.precio + '</td>' + '</td></tr></tbody>';
    alert("Producto añadido correctamente");
}

// Filter y Map

let colorNegro = baseDatos.filter(nuevoProducto => nuevoProducto.color == "Negro");

let generoFemenino = baseDatos.filter(nuevoProducto => nuevoProducto.genero == "Femenino");

let generoMasculino = baseDatos.filter(nuevoProducto => nuevoProducto.genero == "Masculino");

let generoUnisex = baseDatos.filter(nuevoProducto => nuevoProducto.genero == "Unisex");

let precioMayor3200 = baseDatos.map(nuevoProducto => {
    return nuevoProducto.precio >= 3200;
});

// Llamado a Login

login();

//  Funcion para mostrar los filter

function mostrarGenero() {
    alert("Hay " + generoFemenino.length + " producto/s con genero femenino");
    alert("Hay " + generoMasculino.length + " producto/s con genero masculino");
    alert("Hay " + generoUnisex.length + " producto/s con genero unisex");
}

// Console para mostrar los productos con precio mayor o igual a 3200

console.log(precioMayor3200);

// Funcion para mostrar los productos anteriormente cargados

function mostrarProductosAnteriores() {
    baseDatos.forEach(Objeto => {
        console.log(Objeto);
    });
}
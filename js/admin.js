

let confirmBtn = document.getElementById('confirmBtn');

// Funcion de creacion de objeto

function Objeto(modelo, marca, color, genero, precio) {
    this.modelo = modelo;
    this.marca = marca;
    this.color = color;
    this.genero = genero;
    this.precio = precio;
}

// Funcion Capturar para guardar datos

let indice = 0

function capturar() {

    let agregarModelo = document.getElementById("modelo").value;
    let agregarMarca = document.getElementById("marca").value;
    let agregarColor = document.getElementById("color").value;
    let agregarGenero = document.getElementById("genero").value;
    let agregarPrecio = document.getElementById("precio").value;

    if (agregarModelo, agregarMarca, agregarColor, agregarGenero, agregarPrecio === "") {
        alert("Rellenar todos campos");
    } else {
        nuevoProducto = new Objeto(agregarModelo, agregarMarca, agregarColor, agregarGenero, agregarPrecio, indice);
        localStorage.setItem(`objeto${indice}`, JSON.stringify(nuevoProducto))
        console.log(nuevoProducto)
        agregar();
    }
}

// Creacion de Array

const baseDatos = [];


// Funcion Agregar para agregar los datos anteriormente guardados a la tabla

function agregar() {
    indice++;
    baseDatos.push(nuevoProducto);
    document.getElementById("tabla").innerHTML += '<tbody><tr><th scope="row">' + indice + '</th><td>' + nuevoProducto.modelo + '<td>' + nuevoProducto.marca + '</td>' + '<td>' + nuevoProducto.color + '</td>' + '<td>' + nuevoProducto.genero + '</td>' + '<td>' + nuevoProducto.precio + '</td>' + '</td></tr></tbody>';
}

let btnCapturar = document.getElementById('btnCapturar')
btnCapturar.addEventListener('click', capturar)

document.addEventListener('DOMContentLoaded', () => {
    while (localStorage.getItem(`objeto${indice}`)) {
        let producto = JSON.parse(localStorage.getItem(`objeto${indice}`))
        document.getElementById("tabla").innerHTML +=
            `<tbody><tr><th scope="row">${indice++}</th><td> ${producto.modelo}<td>${producto.marca}</td><td>${producto.color}</td><td> ${producto.genero}</td><td> ${producto.precio}</td></td></tr></tbody>`
    }
})

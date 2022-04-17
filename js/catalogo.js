/* 

function Objeto(modelo, marca, color, genero, precio) {
    this.modelo = modelo;
    this.marca = marca;
    this.color = color;
    this.genero = genero;
    this.precio = precio;
}

const baseDatos = [
    nuevoProducto = new Objeto("Cartera", "LV", "Negro", "Femenino", 3000),
    nuevoProducto = new Objeto("Cartera", "LV", "Blanca", "Femenino", 3500),
    nuevoProducto = new Objeto("Cartera", "LV", "Marron", "Unisex", 3700),
    nuevoProducto = new Objeto("Cartera", "LV", "Verde", "Masculino", 4000),
    nuevoProducto = new Objeto("Bandolera", "XL", "Negro", "Unisex", 2400),
];

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

// function agregar() {
//     indice++;
//     baseDatos.push(nuevoProducto);
document.getElementById("catalogo").innerHTML += '<div class="card mx-auto mb-5"><div class="card-body"><h5 class="card-title">' + nuevoProducto.modelo + '</h5>' + '<p class="card-text">' + nuevoProducto.marca + '</p></div></div>';
// alert("Producto añadido correctamente")
// }

// + '<td>' + nuevoProducto.color + '</td>' + '<td>' + nuevoProducto.genero + '</td>' + '<td>' + nuevoProducto.precio + '</td>' + '</td></tr></tbody>'

agregar(); */


document.getElementById('btnTop').addEventListener('click', scrollTop);

function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
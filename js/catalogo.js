
document.getElementById('btnTop').addEventListener('click', scrollTop);

function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

// Carrito

// Array con carrito vacio

carritoDeCompras = [];

// DOM

const contenedorProductos = document.getElementById('contenedorProductos');
const contenedorCarrito = document.getElementById('contenedorCarrito');

const btnTerminar = document.getElementById('');
const finCompra = document.getElementById('');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const seleccTalles = document.getElementById('seleccTalles');
const buscadorProductos = document.getElementById('');

// Filtro

seleccTalles.addEventListener('change', () => {
    if (seleccTalles.value == 'all') {
        mostrarProductos(stockProductos);
    } else {
        mostrarProductos(stockProductos.filter(elemento => elemento.talle == seleccTalles.value))
    }
})

// Funciones

function mostrarProductos(array) {
    contenedorProductos.innerHTML = ""
    array.forEach(item => {
        let div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML += `
        <div class="card mx-auto mb-5">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="mb-0">${item.descripcion}</p>
                <p class="mb-0">${item.talle}</p>
                <p class="mb-1">$${item.precio}</p>
                <a href="./producto.html" class="btn btn-primary">Ver más</a>
                <a href="#" class="btn btn-success" id="agregar${item.id}">Añadir al carrito</a>
            </div>
        </div>
        `
        contenedorProductos.appendChild(div)

        let btnAgregar = document.getElementById(`agregar${item.id}`)
        btnAgregar.addEventListener('click', () => {
            agregarAlCarrito(item.id)
        })
    });
}

function agregarAlCarrito(id) {

    let yaEsta = carritoDeCompras.find(item => item.id == id)
    if (yaEsta) {
        yaEsta.cantidad = yaEsta.cantidad + 1;
        document.getElementById(`cant${yaEsta.id}`).innerHTML = `<p id=cant${yaEsta.id}>Cantidad:${yaEsta.cantidad}</p>`
        actualizarCarrito();
    } else {
        let productoAgregar = stockProductos.find(elemento => elemento.id == id);

        productoAgregar.cantidad = 1;

        carritoDeCompras.push(productoAgregar);

        actualizarCarrito();

        mostrarCarrito(productoAgregar);
    }

    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))

}

function mostrarCarrito(productoAgregar) {

    let div = document.createElement('div');
    div.className = 'productoEnCarrito shadow-sm p-3 rounded mb-3 border border-2'
    div.innerHTML = `
    <h5 class="mb-0">$${productoAgregar.nombre}</h5>
    <p class="mb-0">${productoAgregar.talle}</p>
    <p class="mb-1" id="cant${productoAgregar.id}">Cantidad:${productoAgregar.cantidad}</p>
    <p class="mb-1">$${productoAgregar.precio}</p>
    <i class="fa-solid fa-delete-left rounded fs-5 pointer bg-danger p-2 text-white" id="eliminar${productoAgregar.id}"></i>
    `

    contenedorCarrito.appendChild(div);

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    btnEliminar.addEventListener('click', () => {
        if (productoAgregar.cantidad == 1) {
            btnEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(item => item.id != productoAgregar.id)
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
        } else {
            productoAgregar.cantidad = productoAgregar.cantidad - 1
            document.getElementById(`cant${productoAgregar.id}`).innerHTML = ` <p class="mb-1" id="cant${productoAgregar.id}">Cantidad:${productoAgregar.cantidad}</p> `
            actualizarCarrito();
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
        }

    })


}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0)
    precioTotal.innerText = "El precio total es: $" + carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
}

function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'));

    if (recuperarLS) {
        recuperarLS.forEach(el => {
            mostrarCarrito(el)
            carritoDeCompras.push(el)
            actualizarCarrito()
        })
    }
}

mostrarProductos(stockProductos);
recuperar();

/* function mostrarProductosModal(array) {
    contenedorProductos.innerHTML = ""
    array.forEach(item => {
        let div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML += `
        <div class="card mx-auto mb-5">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="mb-0">${item.descripcion}</p>
                <p class="mb-0">${item.talle}</p>
                <p class="mb-1">$${item.precio}</p>
                <a href="./producto.html" class="btn btn-primary">Ver más</a>
                <a href="#" class="btn btn-success" id="agregar${item.id}">Añadir al carrito</a>
            </div>
        </div>
        `
        contenedorProductos.appendChild(div)

        let btnAgregar = document.getElementById(`agregar${item.id}`)
        btnAgregar.addEventListener('click', () => {
            agregarAlCarrito(item.id)
        })
    });
} */
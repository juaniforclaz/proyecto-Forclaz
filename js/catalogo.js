
// Boton Top

document.getElementById('btnTop').addEventListener('click', scrollTop);

function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

// Carrito

const contenedorProductos = document.getElementById('contenedorProductos')
const contenedorCarrito = document.getElementById('contenedorCarrito')
const contadorCantidad = document.getElementById('contadorCantidad')

let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})

contenedorProductos.addEventListener('click', e => {
    addCarrito(e)
})

let productoEnCarrito = document.querySelector('.productoEnCarrito')

contenedorCarrito.addEventListener('click', e => {
    btnAccion(e)
})

const fetchData = async () => {
    try {
        const res = await fetch('../json/stock.json')
        const data = await res.json()
        console.log(data)
        mostrarProductos(data)
    } catch (error) {
        console.log(error)
    }
}

const mostrarProductos = data => {
    data.forEach(element => {
        const col = document.createElement('div')
        col.classList.add('col')
        col.innerHTML +=
            `
        <div class="card mx-auto mb-5">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body border-primary border-1 border-top">
        <h5 class="card-title">${element.nombre}</h5>
        <p class="mb-0 card-size">${element.talle}</p>
        <div class="precio">
        <span>$</span><p class="mb-1 card-price">${element.precio}</p>
        </div>
        <a class="btn btn-success btn-añadir" id="${element.id}">Añadir al carrito</a>
        </div>
        </div>
        `
        contenedorProductos.appendChild(col)

    });

}

const addCarrito = e => {
    if (e.target.classList.contains('btn-añadir')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.btn-success').id,
        nombre: objeto.querySelector('.card-title').textContent,
        talle: objeto.querySelector('.card-size').textContent,
        precio: objeto.querySelector('.card-price').textContent,
        cantidad: 1,
        precioT: 'ddd',
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = { ...producto }
    pintarCarrito()
}

// Mostrar los productos añadidos al carrito

const pintarCarrito = () => {
    contenedorCarrito.innerHTML = ``
    Object.values(carrito).forEach(producto => {
        let div = document.createElement('div');
        div.className = 'productoEnCarrito shadow-sm p-3 rounded mb-3 border border-2 delete'
        div.innerHTML = `
        <h5 class="mb-0"> ${producto.nombre}</h5 >
        <p class="mb-0">${producto.talle}</p>
        <p class="mb-1" id="cant${producto.id}">Cantidad: ${producto.cantidad}</p>
        <p class="mb-1">$${producto.precio * producto.cantidad}</p>
        <i class="fa-solid fa-delete-left rounded fs-5 pointer bg-danger p-2 text-white" id="eliminar${producto.id}" data-id="${producto.id}"></i>
        <i class="fa-solid fa-plus rounded fs-5 pointer bg-success p-2 text-white" id="agregar${producto.id}" data-id="${producto.id}"></i>
        `

        contenedorCarrito.appendChild(div);


    })


    pintarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))

}

// Mostrar datos en el footer del carrito

const footerCarrito = document.getElementById('footerCarrito')
const pintarFooter = () => {

    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)

    const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)

    let cantidadProductos = document.querySelector('.cantidadProductos')
    cantidadProductos.textContent = `Usted ha agregado ${nCantidad} articulos a su carrito`

    let cantidadPlata = document.querySelector('.cantidadPlata')
    cantidadPlata.textContent = `El total es $${nPrecio}`

    let contadorCarrito = document.getElementById('contadorCarrito')
    contadorCarrito.textContent = `${nCantidad}`

    const btnComprar = document.getElementById('btnComprar')
    const btnVaciar = document.getElementById('btnVaciar')
    btnVaciar.className = 'btn btn-danger'
    btnVaciar.textContent = 'Vaciar carrito'
    btnComprar.className = 'btn btn-success'
    btnComprar.textContent = 'Finalizar compra'
    btnVaciar.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
        btnComprar.classList.toggle('d-none')
        btnVaciar.textContent = ''
        btnVaciar.className = ''
        cantidadProductos.textContent = 'El carrito esta vacio'
        cantidadPlata.textContent = ''
    })

    btnComprar.addEventListener('click', () => {
        carrito = {}
        cantidadProductos.textContent = `Felicidades por la compra de ${nCantidad} articulos por $${nPrecio}`
        cantidadPlata.textContent = `Usted sera redirigido al inicio en breve`
        btnVaciar.textContent = ''
        btnVaciar.className = ''
        btnComprar.textContent = ''
        btnComprar.className = ''
        setTimeout(() => location.href = "/index.html", 2000)
    })

}

// Aumentar o disminuir cantidades carrito

const btnAccion = e => {
    // Aumentar
    if (e.target.classList.contains('bg-success')) {
        console.log(carrito[e.target.dataset.id])
        // carrito[e.target.dataset.id]
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        pintarCarrito()
    }

    if (e.target.classList.contains('bg-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()

    }
    e.stopPropagation()
}

const finalizarCompra = () => {

}

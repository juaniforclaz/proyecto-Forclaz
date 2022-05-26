
// Boton Logearse

entradaUsuario = document.getElementById('entradaUsuario')
document.getElementById('logearse').addEventListener('click', logearse);
let ocultarBody = document.getElementById('ocultarBody')
let capturaDatos = document.getElementById('capturaDatos')

let formDatos = document.getElementById('formDatos')
let mostrarDatos = document.getElementById('mostrarDatos')
let completarDatos = document.getElementById('completarDatos')

// Desea ingresar

function logearse() {
  capturaDatos.classList.toggle('d-none')
  ocultarBody.classList.toggle('d-none')
  entradaUsuario.classList.toggle('d-none')
  btnLogin.addEventListener('click', validar)
}

// Ingresar Nombre y Apellido


function validar() {
  let email = document.getElementById('Input1').value;
  let nombre = document.getElementById('Input2').value;
  let apellido = document.getElementById('Input3').value;

  if (email == '' || email == ' ') {
    email = false
  }
  if (nombre == '' || nombre == ' ') {
    nombre = false
  }
  if (apellido == '' || apellido == ' ') {
    apellido = false
  }

  if (email !== false && nombre !== false && apellido !== false) {
    let cliente = {
      email: document.getElementById('Input1').value,
      nombre: document.getElementById('Input2').value,
      apellido: document.getElementById('Input3').value
    }
    console.log(cliente)
    login(cliente)
  } else {
    completarDatos.textContent = 'Tiene que completar todos los datos para logearse correctamente'
    completarDatos.classList.remove('d-none')
    document.getElementById('Input1').classList.add('bg-danger')
    document.getElementById('Input1').classList.add('text-white')
    document.getElementById('Input2').classList.add('bg-danger')
    document.getElementById('Input2').classList.add('text-white')
    document.getElementById('Input3').classList.add('bg-danger')
    document.getElementById('Input3').classList.add('text-white')
  }
}

function login(cliente) {
  console.log('hola')
  formDatos.classList.toggle('d-none')
  entradaUsuario.textContent = 'bienvenido ' + (cliente.nombre) + ' ' + (cliente.apellido)
  mostrarDatos.innerHTML =
    `
        <h3 class="text-white">Gracias por registrarte!</h3>
        <hr></hr>
        <h4 class="text-white">Datos:</h4>
        <hr></hr>
        <label class="mb-2">Email:</label>
        <p id="email">${cliente.email}</p>
        <label class="mb-2">Nombre y Apellido:</label>
        <p id="nombreApellido">${cliente.nombre} ${cliente.apellido}</p>
        <hr></hr>
        <button class="mb-3 btn btn-success" id="volverAlSitio1">Volver al sitio</button>
        <button class="mb-3 btn btn-danger" id="eliminarUsuario1">Eliminar usuario</button>
        `



  localStorage.setItem('mail usuario', JSON.stringify(cliente.email))
  localStorage.setItem('nombre usuario', JSON.stringify(cliente.nombre))
  localStorage.setItem('apellido usuario', JSON.stringify(cliente.apellido))

  let eliminarUsuario1 = document.getElementById('eliminarUsuario1')
  eliminarUsuario1.addEventListener('click', () => {
    localStorage.removeItem('nombre usuario')
    localStorage.removeItem('mail usuario')
    localStorage.removeItem('apellido usuario')
    mostrarDatos.textContent = 'El usuario anterior ha sido eliminado correctamente, complete el formulario para crear otro'
    entradaUsuario.textContent = 'Si quiere registrar un usuario haga click en el icono'
    formDatos.classList.toggle('d-none')
  })

  let volverAlSitio1 = document.getElementById('volverAlSitio1')
  volverAlSitio1.addEventListener('click', () => {
    capturaDatos.classList.toggle('d-none')
    ocultarBody.classList.toggle('d-none')
    entradaUsuario.classList.toggle('d-none')
    entradaUsuario.textContent = 'bienvenido ' + cliente.nombre + ' ' + cliente.apellido
  })
}

document.addEventListener('DOMContentLoaded', () => {

  if (localStorage.getItem('nombre usuario'), localStorage.getItem('mail usuario'), localStorage.getItem('apellido usuario')) {
    nombreUsuario = JSON.parse(localStorage.getItem('nombre usuario')) + ' ' + JSON.parse(localStorage.getItem('apellido usuario'))
    entradaUsuario.textContent = 'bienvenido ' + nombreUsuario
    mostrarDatos.innerHTML =
      `
    <h3 class="text-white mt-3">Ya existe un usario registrado</h3>
    <p class="opacity-50">Para crear uno nuevo, completa el formulario de arriba. Si solo queres eliminar el usuario pulsa el boton rojo.</p>

    <h4 class="text-white">Datos:</h4>

    <label class="mb-2">Email:</label>
    <p id="email">${localStorage.getItem('mail usuario')}</p>
    <label class="mb-2">Nombre y Apellido:</label>
    <p id="nombreApellido">${nombreUsuario}</p>

    <button class="mb-3 btn btn-success" id="volverAlSitio">Volver al sitio</button>
    <button class="mb-3 btn btn-danger" id="eliminarUsuario">Eliminar usuario</button>
  `


    let eliminarUsuario = document.getElementById('eliminarUsuario')
    eliminarUsuario.addEventListener('click', () => {
      localStorage.removeItem('nombre usuario')
      localStorage.removeItem('mail usuario')
      localStorage.removeItem('apellido usuario')
      mostrarDatos.textContent = 'El usuario anterior ha sido eliminado correctamente, complete el formulario para crear otro'
      entradaUsuario.textContent = 'Si quiere registrar un usuario haga click en el icono'
    })

    let volverAlSitio = document.getElementById('volverAlSitio')
    volverAlSitio.addEventListener('click', () => {
      capturaDatos.classList.toggle('d-none')
      ocultarBody.classList.toggle('d-none')
      entradaUsuario.classList.toggle('d-none')
      entradaUsuario.textContent = 'bienvenido ' + cliente.nombre + ' ' + cliente.apellido
    })

  } else {
    mostrarDatos.innerHTML = ``
    entradaUsuario.textContent = 'Si quiere registrar un usuario haga click en el icono'
  }
})

// Modal de hot sale al scrollear

modalOferta = document.getElementById('modalOferta')

window.addEventListener('scroll', mostrarModal)

function mostrarModal() {
  modalOferta.innerHTML = `
    <div class="container-fluid text-center oferta vh-50 mt-5 p-5">
    <div class="row bg-light bg-gradient p-3 shadow-lg">
      <div class="row mb-2">
        <div class="col d-flex justify-content-end">
          <i class="fa-solid fa-xmark pointer fa-2xl mt-4" id="btnModalOferta"></i>
        </div>
      </div>
      <div class="col mx-auto p-5">
        <h3>Aprovecha el hot sale hasta el <span class="text-danger">10 de junio</span></h3>
        <h4>Todos los productos hasta <span class="text-success">$2000</span></h4>
      </div>
    </div>
  </div>
  `
  modalOferta.classList.remove('d-none')
  console.log('bien')


  btnModalOferta = document.getElementById('btnModalOferta')
  btnModalOferta.addEventListener('click', () => {
    modalOferta.innerHTML = ''
  })
  window.removeEventListener('scroll', mostrarModal)
}



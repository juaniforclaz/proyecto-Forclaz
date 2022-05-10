
// Boton Logearse

document.getElementById('logearse').addEventListener('click', logearse);

// Desea ingresar?

function logearse() {
    const log = (confirm('¿Desea ingresar?')) ? true : false;

    log ? login() : console.log('El usuario no se logeó')
}

// Ingresar Nombre y Apellido

function login() {
    let nombre = prompt('Nombre');
    let apellido = prompt('Apellido');
    let bienvenida = 'Bienvenido/a ' + nombre + " " + apellido;
    const logeado = (nombre, apellido != "") ? true : false;

    logeado ? document.getElementById("entradaUsuario").innerHTML = '<p id="entradaUsuario" class="bg-success p-3 sticky">' + bienvenida + '</p>' : alert("Por favor, ingrese sus datos") & logearse();

}

const DateTime = luxon.DateTime;
const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

const dt = DateTime.local(2017, 5, 15, 8, 30);
console.log(dt);
console.log(now);

const clientes = document.querySelector('#clientes')

fetch('../json/clientes.json')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            clientes.innerHTML += `
            <div class="col">
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${element.nombre}</h5>
                      <h5>${element.apellido}</h5>
                      <p class="card-text">${element.email}</p>
                      <p class="card-text"><small class="text-muted">${element.genero}</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `
        })
    });

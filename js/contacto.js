// Formulario de contacto

document.getElementById("btnEnviar").addEventListener("click", () =>
    Swal.fire({
        title: 'Felicitaciones',
        text: 'El mensaje ha sido enviado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
);

function mostrarPais() {
    let pais = document.getElementById("paises").value;
    document.getElementById("paisSeleccionado").innerHTML = "El pais seleccionado es " + pais;
}

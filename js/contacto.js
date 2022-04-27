// Formulario de contacto

document.getElementById("btnEnviar").addEventListener("click", mensajeEnviado);

function mensajeEnviado() {
    alert("Su mensaje ha sido enviado correctamente");
}

function mostrarPais() {
    let pais = document.getElementById("paises").value;
    document.getElementById("paisSeleccionado").innerHTML = "El pais seleccionado es " + pais;

}

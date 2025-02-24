document.getElementById("buscarColegiado").addEventListener("click", function () {
    // Mostrar overlay y modal
    document.getElementById("overlay").style.display = "block";
    document.getElementById("comprobacionColegiado").style.display = "block";
    document.querySelector(".spinner").style.display = "block"; // Mostrar spinner

    // Esperar 3 segundos antes de validar
    setTimeout(function () {
        let numColegiado = document.getElementById("num_colegiado").value.trim(); // Obtener y limpiar el input

        // Validar que tenga exactamente 9 dígitos
        if (/^\d{9}$/.test(numColegiado)) {
            document.getElementById("num_colegiado").style.color = "green";
            alert("Número de colegiado correcto");
            window.location.href = '2-aceptado.html';

        } else {
            document.getElementById("num_colegiado").style.color = "red";
            alert("Número de colegiado incorrecto")

        }

        // Cerrar modal después de la validación
        cerrarModal();
    }, 1500);
});

function cerrarModal() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("comprobacionColegiado").style.display = "none";
    document.querySelector(".spinner").style.display = "none"; // Ocultar spinner
}

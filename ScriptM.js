// Previsualizar la nueva imagen de perfil
const subirImagen = document.getElementById("subir-imagen");
const imagenPerfil = document.getElementById("imagen-perfil");

subirImagen.addEventListener("change", function () {
    const archivo = this.files[0];
    if (archivo) {
        const lector = new FileReader();
        lector.onload = function (e) {
            imagenPerfil.src = e.target.result;
        };
        lector.readAsDataURL(archivo);
    }
});

// Guardar el nuevo nombre de usuario
const guardarNombre = document.getElementById("guardar-nombre");
const nombreUsuario = document.getElementById("nombre-usuario");

guardarNombre.addEventListener("click", function () {
    const nuevoNombre = nombreUsuario.value.trim();
    if (nuevoNombre) {
        alert(`Nombre cambiado a: ${nuevoNombre}`);
        nombreUsuario.value = ""; // Limpiar el campo
    } else {
        alert("Por favor, escribe un nombre válido.");
    }
});

// Cerrar sesión
const cerrarSesion = document.getElementById("cerrar-sesion");

cerrarSesion.addEventListener("click", function () {
    const confirmar = confirm("¿Estás seguro de que quieres cerrar sesión?");
    if (confirmar) {
        // Aquí redirigirías al usuario a la página de inicio de sesión
        window.location.href = "index.html";
    }
});
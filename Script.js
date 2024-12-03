// Variables para manejar las categorías y votos
const categoriaBtns = document.querySelectorAll('.categoria-btn');
const listaDocentes = document.getElementById('lista-docentes');
const confirmacion = document.getElementById('confirmacion');

// Función para manejar la selección de categorías
categoriaBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const categoriaSeleccionada = this.getAttribute('data-categoria');
        const docentes = document.querySelectorAll('.docente');

        // Filtrar los docentes que corresponden a la categoría seleccionada
        docentes.forEach(docente => {
            if (docente.getAttribute('data-categoria') === categoriaSeleccionada || categoriaSeleccionada === "") {
                docente.style.display = 'flex'; // Mostrar docente
            } else {
                docente.style.display = 'none'; // Ocultar docente
            }
        });
    });
});

// Función para manejar el voto
listaDocentes.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('votar-btn')) {
        const docente = e.target.closest('.docente');
        const nombreDocente = docente.querySelector('span').textContent;
        
        // Mostrar mensaje de confirmación de voto
        confirmacion.style.display = 'block';
        confirmacion.innerHTML = `<p>Gracias por votar por ${nombreDocente}!</p>`;
        
        // Desactivar el botón de votar después de votar
        e.target.disabled = true;
        e.target.innerHTML = 'Votado';
    }
});
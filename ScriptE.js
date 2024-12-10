// Variables
const categoriaBtns = document.querySelectorAll('.categoria-btn');
const listaMaterias = document.getElementById('lista-materias');

// Materias por categoría (estático)
const materias = {
    "Programación": [
        { nombre: "Física", imagen: "libro.jpg" },
        { nombre: "Cálculo", imagen: "libro.jpg" },
        { nombre: "Ingles", imagen: "libro.jpg" }
        { nombre: "Mss1", imagen: "libro.jpg" },
        { nombre: "Cálculo", imagen: "libro.jpg" },
        { nombre: "Ingles", imagen: "libro.jpg" }
    ],
    "Animación digital": [
        { nombre: "Física", imagen: "libro.jpg" },
        { nombre: "Cálculo", imagen: "libro.jpg" },
        { nombre: "Ingles", imagen: "libro.jpg" }
    ],
    "Diseño de modas": [
        { nombre: "Física", imagen: "libro.jpg" },
        { nombre: "Cálculo", imagen: "libro.jpg" },
        { nombre: "Ingles", imagen: "libro.jpg" }
    ]
};

// Función para manejar la selección de categorías
categoriaBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const categoriaSeleccionada = this.getAttribute('data-categoria');
        mostrarMaterias(categoriaSeleccionada);
    });
});

// Función para mostrar las materias de la categoría seleccionada
function mostrarMaterias(categoria) {
    // Limpiar la lista de materias
    listaMaterias.innerHTML = "";

    // Obtener las materias de la categoría
    const materiasCategoria = materias[categoria];

    // Agregar las materias a la lista
    materiasCategoria.forEach(materia => {
        const li = document.createElement('li');
        li.classList.add('materia');

        // Crear la imagen de la materia
        const img = document.createElement('img');
        img.src = materia.imagen;
        img.alt = materia.nombre;
        img.classList.add('materia-img');

        // Crear el nombre de la materia
        const span = document.createElement('span');
        span.textContent = materia.nombre;

        // Agregar la imagen y el nombre al elemento li
        li.appendChild(img);
        li.appendChild(span);

        // Agregar el li a la lista de materias
        listaMaterias.appendChild(li);
    });
}

// Obtener todas las pizzas
const pizzas = document.querySelectorAll('.pizza');

// Agregar evento para mostrar descripción al pasar el cursor
pizzas.forEach((pizza) => {
    pizza.addEventListener('mouseenter', (event) => {
        const descripcion = pizza.querySelector('.info');
        descripcion.style.display = 'block';
    });

    pizza.addEventListener('mouseleave', (event) => {
        const descripcion = pizza.querySelector('.info');
        descripcion.style.display = 'none';
    });
});

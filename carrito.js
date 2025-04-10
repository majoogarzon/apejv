const carrito = [];

function renderizarCarrito() {
    const carritoContainer = document.getElementById("carrito");
    carritoContainer.innerHTML = "";

    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerText = `- ${item.nombre} - $${item.precio}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.className= "btn-eliminar";
        botonEliminar.addEventListener("click", () => {
            carrito.splice(index, 1);
            renderizarCarrito();
        });

        li.appendChild(botonEliminar);
        carritoContainer.appendChild(li);
    });

    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    const totalElement = document.createElement("p");
    totalElement.innerText = `Total: $${total}`;
    carritoContainer.appendChild(totalElement);

    const botonComprar = document.createElement("button");
    botonComprar.innerText = "Comprar";
    botonComprar.addEventListener("click", () => {
        carrito.length = 0;
        renderizarCarrito();
        alert("Gracias por tu compra!");
    });
    carritoContainer.appendChild(botonComprar);
}

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    renderizarCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
    const carritoDiv = document.createElement("div");
    carritoDiv.id = "carrito";
    document.body.appendChild(carritoDiv);


    renderizarCarrito();
});

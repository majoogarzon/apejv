const productos = [
    {
      id: 1,
      nombre: "Tapado",
      precio: 50000,
      imagen: "./img/tapadoA.png"
    },
    {
      id: 2,
      nombre: "Chaqueta",
      precio: 30000,
      imagen: "./img/chaqueta.png"
    },
    {
      id: 3,
      nombre: "Polerones",
      precio: 10000,
      imagen: "./img/polerones.png"
    },
    {
      id: 4,
      nombre: "Sweater Brillo",
      precio: 20000,
      imagen: "./img/sweater-brillo.png"
    },
    {
      id: 5,
      nombre: "Pantalones",
      precio: 30000,
      imagen: "./img/pantalones-s.png"
    },
    {
      id: 6,
      nombre: "Conjunto",
      precio: 60000,
      imagen: "./img/conjunto.png"
    },
    {
      id: 7,
      nombre: "Conjunto",
      precio: 80000,
      imagen: "./img/conjunto2.png"
    },
    {
      id: 8,
      nombre: "Pantalon Rosa",
      precio: 30000,
      imagen: "./img/pantalon-rosa.png"
    }
   
  ];
  
    
    const contenedorProductos = document.getElementById("productos-container");
    
    const crearCard = (prenda, container) => {
      const card = document.createElement("div");
      card.className = "tarjeta-producto";
    
      const nombre = document.createElement("h5");
      nombre.innerText = prenda.nombre;
    
      const precio = document.createElement("p");
      precio.innerText = `$${prenda.precio}`;
    
      const imagen = document.createElement("img");
      imagen.src = `${prenda.imagen}`;
      imagen.alt = prenda.nombre;
      imagen.style.width = "40%";
    
      const boton = document.createElement("button");
      boton.innerText = "Agregar al carrito";
      boton.className = "boton-agregar";
      boton.addEventListener("click", () => {
        carrito.push(prenda);
        renderizarCarrito();
      });
    
      card.appendChild(imagen);
      card.appendChild(nombre);
      card.appendChild(precio);
      card.appendChild(boton);
      container.appendChild(card);
    };
    
    productos.forEach(prenda => crearCard(prenda, contenedorProductos));
  
 
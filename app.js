// 1. BASE DE DATOS SIMULADA (Lo que en el futuro vendrá de PostgreSQL)
const productosBD = [
    { id: 101, nombre: "Zapatillas Running", precio: 180.00, imagen: "https://picsum.photos/id/21/200/150" },
    { id: 102, nombre: "Casaca de Cuero", precio: 350.00, imagen: "https://picsum.photos/id/1025/200/150" },
    { id: 103, nombre: "Reloj Inteligente", precio: 220.00, imagen: "https://picsum.photos/id/175/200/150" },
    { id: 104, nombre: "Mochila Urbana", precio: 90.00, imagen: "https://picsum.photos/id/1062/200/150" },
    // ➕ NUEVO PRODUCTO
    ];

// 2. ESTADO DE LA APLICACIÓN (El carrito guardado en la memoria RAM)
let carrito = [];

// 3. FUNCION: Renderizar el Catálogo en pantalla (Manipulación del DOM)
function cargarCatalogo() {
    const contenedorCatalogo = document.getElementById("catalogo");
    contenedorCatalogo.innerHTML = ""; // Limpiar antes de llenar

    productosBD.forEach(producto => {
        // Crear el HTML de cada tarjeta dinámicamente
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p><strong>S/ ${producto.precio.toFixed(2)}</strong></p>
            <button class="btn-comprar" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        contenedorCatalogo.appendChild(tarjeta);
    });
}

// 4. FUNCION: Agregar un producto al Carrito
function agregarAlCarrito(idProducto) {
    // Buscar el producto en nuestra "Base de datos"
    const productoEncontrado = productosBD.find(p => p.id === idProducto);
    
    if (productoEncontrado) {
        carrito.push(productoEncontrado);
        actualizarInterfazCarrito();
    }
}

// 5. FUNCION: Actualizar la vista del Carrito y los Totales
function actualizarInterfazCarrito() {
    const contenedorCarrito = document.getElementById("items-carrito");
    const contador = document.getElementById("contador-carrito");
    const totalElemento = document.getElementById("precio-total");

    // Actualizar el número de productos en el header
    contador.innerText = carrito.length;

    // Si el carrito está vacío
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p>El carrito está vacío.</p>";
        totalElemento.innerText = "0.00";
        return;
    }

    // Dibujar los elementos que están dentro del carrito
    contenedorCarrito.innerHTML = "";
    let sumaTotal = 0;

    carrito.forEach((item, index) => {
        sumaTotal += item.precio;
        
        const divItem = document.createElement("div");
        divItem.className = "item-carrito";
        divItem.innerHTML = `
            <span>${item.nombre}</span>
            <span>S/ ${item.precio.toFixed(2)}</span>
        `;
        contenedorCarrito.appendChild(divItem);
    });

    // Actualizar el monto total a pagar
    totalElemento.innerText = sumaTotal.toFixed(2);
}

// Inicializar la aplicación apenas cargue la página
cargarCatalogo();


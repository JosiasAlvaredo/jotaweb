let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito.");
}

function cargarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const total = document.getElementById("total");
  lista.innerHTML = "";
  let suma = 0;

  carrito.forEach((producto, index) => {
    suma += producto.precio;
    const item = document.createElement("li");
    item.className = "list-group-item d-flex justify-content-between align-items-center";
    item.innerHTML = `
      <span>${producto.nombre} - $${producto.precio}</span>
      <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${index})">X</button>
    `;
    lista.appendChild(item);
  });

  total.textContent = `Total: $${suma}`;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cargarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cargarCarrito();
}

function enviarPedidoWhatsApp() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  const productosTexto = carrito.map(p => `• ${p.nombre} - $${p.precio}`).join("\n");
  const total = carrito.reduce((acc, p) => acc + p.precio, 0);
  const texto = `Hola, quiero encargar los siguientes productos:\n\n${productosTexto}\n\nTotal: $${total}`;
  const url = `https://wa.me/549XXXXXXXXXX?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", cargarCarrito);

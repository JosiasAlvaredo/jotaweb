const productos = [
  {
    id: 1,
    nombre: "Sitio Portfolio Personal",
    descripcion: "Sitio web responsive ideal para mostrar tu trabajo profesional.",
    imagenes: ["./demos/portfolio1.png", "./demos/portfolio1-2.png"],
    precio: 20000,
    demo: "./demos/demo-001/index.html"
  },
  {
    id: 2,
    nombre: "Tienda Online Moderna",
    descripcion: "Diseño profesional para vender tus productos online con facilidad.",
    imagenes: ["./demos/tienda1.png", "./demos/tienda1-2.png"],
    precio: 35000,
    demo: "./demos/demo-002/index.html"
  }
];

function cargarProductos() {
  const contenedor = document.getElementById("contenedor-productos");
  productos.forEach(producto => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";
    contenedor.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${producto.imagenes[0]}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <a href="detalle.html?id=${producto.id}" target="_blank" class="btn btn-primary">Más detalles</a>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", cargarProductos);

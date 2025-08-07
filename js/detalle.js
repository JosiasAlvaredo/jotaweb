function mostrarDetalle(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  const seccion = document.getElementById("detalle-producto");
  seccion.innerHTML = `
    <div class="container py-5">
      <h2>${producto.nombre}</h2>
      <div class="row">
        <div class="col-md-6">
          <img src="${producto.imagenes[0]}" class="img-fluid mb-3">
          <img src="${producto.imagenes[1]}" class="img-fluid">
        </div>
        <div class="col-md-6">
          <p>${producto.descripcion}</p>
          <p><strong>Precio: $${producto.precio}</strong></p>
          <a href="${producto.demo}" class="btn btn-secondary mb-2" target="_blank">Ver demo</a><br>
          <button class="btn btn-success" onclick="agregarAlCarrito(${producto.id})">Encargar</button>
        </div>
      </div>
    </div>
  `;
  seccion.scrollIntoView({ behavior: "smooth" });
}

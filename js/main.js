let inventario = [
  {
    id: 1, nombre: "Abrigo", precio: 5000, imagen: "./img/abrigo.jpg"
  },
  {
    id: 2, nombre: "Borcegos", precio: 4100, imagen: "./img/borcegos.jpg"
  },
  {
    id: 3, nombre: "Cartera", precio: 2500, imagen: "./img/cartera.jpg"
  },
  {
    id: 4, nombre: "Chaleco", precio: 3500, imagen: "./img/chaleco.jpg"
  },
  {
    id: 5, nombre: "Falda", precio: 3200, imagen: "./img/falda.jpg"
  },
  {
    id: 6, nombre: "Top", precio: 3700, imagen: "./img/top.jpg"
  }
];

let total = 0

let carrito = [];

const divMain = document.getElementById ('container')

const divCarrito = document.getElementById('carrito')


//TARJETA DE PRODUCTOS EN EL HTML

inventario.forEach ((elem) => {
  const divProductos = document.createElement('div')
  divProductos.classList.add("card", "col-sm-6", "col-lg-4");
  divProductos.innerHTML = `
    <img src="${elem.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${elem.nombre}</h5>
      <p class="card-text">$${elem.precio}.-</p>
      <a href="#" class="btn btn-primary" id="agregar${elem.id}">Agregar al carrito</a>
    </div>`

  divMain.appendChild(divProductos)

  const boton = document.getElementById(`agregar${elem.id}`)

  boton.addEventListener("click", () => { 
    buscarProducto(elem.id)
  })
})

// BUSQUEDA DEL ELEMENTE Y PUSH AL CARRITO 

const buscarProducto = (idProd) => {
  const elementoClickeado = inventario.find((elem) => elem.id === idProd)

  carrito.push(elementoClickeado)

  console.log(carrito)

  agregarAlCarrito ()
}

//CREAR DIVS DE ELEMENTO EN EL CARRITO

const agregarAlCarrito = () => {
  divCarrito.innerHTML = ""

  carrito.forEach((elem) => {
    const divProductosCarrito = document.createElement('div')
    divProductosCarrito.innerHTML = `
    <p>Nombre:${elem.nombre}</p>
    <p>Precio:${elem.precio}</p>
    <p id="boton-cantidad">Cantidad:<span>${elem.cantidad}</span> </p>
    <p>Subtotal:</p>`;

    divCarrito.appendChild(divProductosCarrito)
  })

}

let inventario = [
  {
    id: 0, nombre: "Abrigo", precio: 5000, imagen: "./img/abrigo.jpg", cantidad:1
  },
  {
    id: 1, nombre: "Borcegos", precio: 4100, imagen: "./img/borcegos.jpg", cantidad:1
  },
  {
    id: 2, nombre: "Cartera", precio: 2500, imagen: "./img/cartera.jpg", cantidad:1
  },
  {
    id: 3, nombre: "Chaleco", precio: 3500, imagen: "./img/chaleco.jpg", cantidad:1
  },
  {
    id: 4, nombre: "Falda", precio: 3200, imagen: "./img/falda.jpg", cantidad:1
  },
  {
    id: 5, nombre: "Top", precio: 3700, imagen: "./img/top.jpg", cantidad:1
  }
];

let total = 0

let carrito = [];

const divMain = document.getElementById ('container')
const divCarrito = document.getElementById('carrito')
const divTotalCarrito = document.getElementById('totalCarrito')

//TARJETA DE PRODUCTOS EN EL HTML

inventario.forEach ((elem) => {
  const divProductos = document.createElement('div')
  divProductos.classList.add("card", "col-sm-6", "col-lg-4");
  divProductos.innerHTML = `
    <img src="${elem.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${elem.nombre}</h5>
      <p class="card-text">$${elem.precio}.-</p>
      <button href="#" class="btn btn-primary" id="agregar${elem.id}">Agregar al carrito</button>
    </div>`
  divMain.appendChild(divProductos)

  const boton = document.getElementById(`agregar${elem.id}`)

  boton.addEventListener("click", () => {
    buscarProducto(elem.id)
  })
})

//FUNCION CHEKEO PRODUCTOS EN LOCALSTORAGE

function productosEnStorage () {
  const itemsEnStorage = localStorage.getItem("NuevoItem")
  console.log(itemsEnStorage)

  if (itemsEnStorage != null){
    carrito = JSON.parse (itemsEnStorage);
    mostrarCarrito();
  }
}

// FUNCION DE BUSQUEDA DE PRODUCTOS REPETIDOS EN ARRAY CARRITO

const buscarProducto = (idProd) => {
  const objetoClickeado = inventario.find((elem) => elem.id === idProd)
  const buscarEnCarrito = carrito.find ((e) => {return e.id === objetoClickeado.id});

  if (buscarEnCarrito === undefined){
    carrito.push(objetoClickeado);
    mostrarCarrito();
  } else {
    objetoClickeado.cantidad +=1
    mostrarCarrito();
  }
}

// FUNCION CREAR CARRITO

const mostrarCarrito = () => {
  divCarrito.innerHTML = ""
  carrito.forEach((elem) => {

    const objetoenJSON = JSON.stringify (carrito)
    localStorage.setItem ("NuevoItem", objetoenJSON)

    total = carrito.reduce((accum,e) => {return accum += e.cantidad*e.precio}, 0)

    const divProductosCarrito = document.createElement('div')
    divProductosCarrito.innerHTML = `
    <p>Nombre: ${elem.nombre}</p>
    <p>Precio: ${elem.precio}</p>
    <p>Cantidad: ${elem.cantidad}</p>
    <p>Subtotal: ${elem.precio * elem.cantidad}</p>`
    ;

    divCarrito.appendChild(divProductosCarrito);
  })

  divTotalCarrito.innerHTML = `
  <p> TOTAL: ${total} </p>
  <button class="btn btn-primary" onClick="borrarCarrito()">Borrar Carrito</button>`;

}

productosEnStorage()

function borrarCarrito(){
  total = 0
  divCarrito.innerHTML= "";
  divTotalCarrito.innerHTML = "";
  carrito.splice(0,carrito.length);
  localStorage.clear();
}
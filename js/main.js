let inventario = [
  {
    id: 1, nombre: "Abrigo", precio: 5000
  },
  {
    id: 2, nombre: "Borcegos", precio: 4100
  },
  {
    id: 3, nombre: "Cartera", precio: 2500
  }
];


  let prenda = Number (prompt ("¿Qué prenda vas a comprar hoy? Escribe el numero de la opcion deseada: 1-abrigo 2-borcegos 3-cartera"))

  let prendaElegida = inventario.find((e) => e.id === prenda)

  console.log(prendaElegida)

  let total = 0

  
  let cantidad = Number (prompt ("Número de prendas a llevar:"));

  armarPedido (prenda, cantidad)

  
  function armarPedido (indice, cantidad) {
    total = prendaElegida.precio * cantidad
    if (indice === prendaElegida.id){
      console.log(`Pedido: ${prendaElegida.nombre}. valor: $ ${prendaElegida.precio} . Cantidad: ${cantidad} Total:${total}`)
    }
  }


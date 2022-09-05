let prenda

do {
  prenda = prompt ("¿Qué prenda vas a comprar hoy? 1. Buzo  2. Remera  3. Pantalón")
} while (prenda > 4)


let cantidad = Number (prompt ("Número de prendas a llevar:"));


function pedido () {
  switch (prenda) {
    case "1":
      prenda = "Buzo"
      precio = cantidad * 2500
      console.log(`Pedido: buzo. valor $2500 . Cantidad: ${cantidad}. Precio final: $ ${precio}`)
    break;
  
    case "2":
      prenda = "Remera"
      precio = cantidad * 1000
      console.log(`Pedido: remera. Valor $1000 . Cantidad: ${cantidad}. Precio final: $ ${precio}`)
    break;
  
    case "3":
      prenda = "Pantalón"
      precio = cantidad * 2900
      console.log(`Pedido: Pantalon. Valor $2900 . Cantidad: ${cantidad}. Precio final: $ ${precio}`)
    break;
  
    default:
      console.log("No realizaste ningun pedido")
    break;
  }
}


pedido ()

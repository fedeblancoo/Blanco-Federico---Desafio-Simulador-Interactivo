let nombre = prompt ("Introduce tu nombre para generar un saludo")

let repeticiones = Number( prompt ("Introduce el numero de repeticiones del mensaje de saludo"));


for (let i = 0; i< `${repeticiones}`; i++) {
    console.log (`¡Hola ${nombre}! ¿Cómo estás?`)
}






const productos = [
    {nombre: 'Anillo de oro', precio: 1500},
    {nombre: 'Anillo de Flor', precio: 900},
    {nombre: 'Collar de diamantes', precio: 5000},
    {nombre: 'Piedra amatista', precio: 650},
    {nombre: 'Corona', precio: 10000 },
    {nombre: 'Collar piedras', precio: 800},
    
];


let carrito = []

function solicitarNombre(){
    let nombreIngresado = prompt('Ingrese su nombre y apellido por favor')
    alert('Bienvenido/a ' + nombreIngresado)
}
solicitarNombre();



let seleccion = prompt('¿Desea comprar algun producto? Responda si o no')

while(seleccion != "si" && seleccion != "no"){
    alert('Por favor ingrese si o no')
    seleccion = prompt('¿Desea comprar algun producto? Responda si o no')
}

if(seleccion == "si"){
    alert('A continuación... nuestro catálogo')
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio );
    alert(todoslosProductos.join(" - "))
}
    else if (seleccion == "no"){
        alert('Gracias por venir, hasta pronto!')
    }


while(seleccion != "no") {
    let producto = prompt('Agrega un producto a tu carrito')
    let precio = 0

    if(producto == 'Anillo de oro'  || producto == 'Anillo de flor' || producto == 'Collar de diamantes' || producto == 'Piedra amatista' || producto == 'Corona' || producto == 'Collar piedras'){
        switch (producto) {
            case "Anillo de oro":
                precio = 1500;
                break;
            case "Anillo de Flor":
                precio = 900;
                break;
            case "Collar de diamantes":
                precio = 5000;
                break;
            case "Piedra amatista":
                precio = 650;
                break;
            case "Corona":
                precio = 10000;
                break;
            case "Collar piedras":
                precio = 800;
                break; 
              default:
                break;                            
        }
        
        
        let unidades = parseInt(prompt('¿Cuantas unidades quiere llevar?'))


        carrito.push({producto, precio, unidades})
        console.log(carrito)

    }   else{
        alert('no tenemos ese producto')
    }

    seleccion = prompt('¿Desea seguir comprando?')
    

    while(seleccion === "no"){
        alert("Gracias por la compra! Hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
  }
 
}  

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por sus compras es: ${total}`)



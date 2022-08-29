
//Selección de producto

let producto  = prompt("Ingrese el número de producto (1-5), o ESC para salir:")
let precioProducto;

while(producto != "ESC" ){
    switch (producto) {
        case "1":
             alert("Producto ingresado: Mouse \n Precio: "+parseInt(precioProducto=1500));
             break;
        case "2":
            alert("Producto ingresado: Teclado \n Precio: "+parseInt(precioProducto=2000));
            break;
        case "3":
            alert("Producto ingresado: Auriculares \n Precio: "+parseInt(precioProducto=5000));
            break;
        case "4":
            alert("Producto ingresado: Monitor \n Precio: "+parseInt(precioProducto=20000));
            break;    
        case "5":
            alert("Producto ingresado: Impresora \n Precio: "+parseInt(precioProducto=25000));
            break;
            default:
            alert("Producto no encontrado, por favor vuelva a ingresar una opción correcta");
            break;
    }
    producto  = prompt("Ingrese el número de producto (1-5), o ESC para salir:")
 }
 


// Aplica descuento
function desc(precioProducto){
    const descuento=0.15;
    
    let descProducto=parseFloat(precioProducto*descuento)

    return descProducto
}

let precioCondesc=desc(precioProducto)

// Aplica impuesto
function impuesto(precioProducto){
    const iva=0.21;
    
    let impProducto=parseFloat(precioProducto*iva)

    return impProducto
}

let precioImpuesto=impuesto(precioProducto)

// Calcula costo total
function costoTotal(precioProducto,precioCondesc,precioImpuesto){
    let costo = parseFloat(precioProducto-precioCondesc-precioImpuesto);
    
    return(costo);
}

let precioTotal=costoTotal(precioProducto,precioCondesc,precioImpuesto)

// Plan de Cuotas
function cuotas(precioTotal){
    let opcionCuota = prompt("Ingrese el plan de cuotas: \n 1 (3 cuotas) \n 2 (6 cuotas) \n 3 (12 cuotas):")

    switch (opcionCuota) {
        case "1":
             alert("Plan de cuotas seleccionado: "+parseInt(opcionCuota=3));
             break;
        case "2":
            alert("Plan de cuotas seleccionado: "+parseInt(opcionCuota=6));
            break;
        case "3":
            alert("Plan de cuotas seleccionado: "+parseInt(opcionCuota=12));
            break;
        default:
            alert("Ud. no ha seleccionado plan de cuotas");
            parseInt(opcionCuota=1);
            break;
    }
    let valorCuota=parseFloat(precioTotal/opcionCuota);
    return valorCuota;
}

let cuotaElegida=cuotas(precioTotal);

// Resumen de compra

function mostrar(precioProducto,precioCondesc,precioImpuesto,precioTotal,cuotaElegida)
{

    let mensaje;
    //let cuotaMensaje;
    
    if(precioTotal!=cuotaElegida) 
    {
        mensaje="Valor de cuota del plan seleccionado: ";
    }
    else 
    {
        mensaje="El cliente no ha seleccionado plan de cuotas, el monto en una pago es de: ";
    }
    

    alert("RESUMEN DE LA COMPRA\n"+"____________________________________________________________"+"\nEl precio del producto incial es: "+precioProducto+"\nEl precio del producto con descuento es: "+precioCondesc+"\nEl precio del producto con impuesto es: "+precioImpuesto+"\nEl precio total del producto es: "+precioTotal+"\n"+mensaje+cuotaElegida);
}

mostrar(precioProducto,precioCondesc,precioImpuesto,precioTotal,cuotaElegida);



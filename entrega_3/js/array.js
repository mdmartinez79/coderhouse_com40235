
class Producto {

    constructor (id,producto,precio)
    {
        this.id=id;
        this.producto=producto;
        this.precio=parseFloat(precio);
    }

    impuesto () 
    {
        return this.precio=this.precio * 1.21;
    }

}

let arrayProductos=[];
let producto;

do{
    producto  = prompt("Ingrese el número de producto (1-5), o ESC para salir:")
    let precioProducto;
    let productoIng;
    switch (producto) {
        case "1":
             alert("Producto ingresado: Mouse \n Precio: "+parseInt(precioProducto=1500));
             productoIng="Mouse";
             break;
        case "2":
            alert("Producto ingresado: Teclado \n Precio: "+parseInt(precioProducto=2000));
            productoIng="Teclado";
            break;
        case "3":
            alert("Producto ingresado: Auriculares \n Precio: "+parseInt(precioProducto=5000));
            productoIng="Auriculares";
            break;
        case "4":
            alert("Producto ingresado: Monitor \n Precio: "+parseInt(precioProducto=20000));
            productoIng="Monitor";
            break;    
        case "5":
            alert("Producto ingresado: Impresora \n Precio: "+parseInt(precioProducto=25000));
            productoIng="Impresora";
            break;
            default:
            alert("Producto no encontrado, por favor vuelva a ingresar una opción correcta");
            break;

    }
  
    if(producto!="ESC"){arrayProductos.push(new Producto(producto,productoIng,precioProducto))};
 }while(producto != "ESC" )

 console.log("Cantidad de producto para la compra:"+arrayProductos.length)
 
for (const producto of arrayProductos)
    {

      
        console.log("Producto seleccionado:"+producto.producto+"- Precio de lista:"+producto.precio
        +"- Precio con Impuesto:"+producto.impuesto());
       
}



class Cuotas {

    constructor (id,plan,cuota)
    {
        this.id=id;
        this.plan=plan;
        this.cuota=cuota;
        
    }
}


let arrayCuotas=[];
let cuota;
let opcionCuota
do
{
opcionCuota = prompt("Ingrese el plan de cuotas: \n 1 (3 cuotas) \n 2 (6 cuotas) \n 3 (12 cuotas), 0 para salir:")

switch (opcionCuota) {
    case "1":
         alert("Plan de cuotas seleccionado: "+parseInt(cuota=3));
         break;
    case "2":
        alert("Plan de cuotas seleccionado: "+parseInt(cuota=6));
        break;
    case "3":
        alert("Plan de cuotas seleccionado: "+parseInt(cuota=12));
        break;
    default:
        alert("Ud. no ha seleccionado plan de cuotas");
        parseInt(opcionCuota=0);
        break;
}
if(opcionCuota!=0)
{arrayCuotas.push(new Cuotas (opcionCuota,cuota,''))};
}while (opcionCuota !=0)


let cuotaSelec;
for (const cuotaE of arrayCuotas)
{
    console.log("Plan de cuotas elegido: "+cuotaE.plan)
    cuotaSelec=cuotaE.plan;
 
}


for (const producto of arrayProductos)
    {

      
        console.log("Producto seleccionado:"+producto.producto+"\n Cuota a pagar: "+producto.precio / cuotaSelec);
       
}


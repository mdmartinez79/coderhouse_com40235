
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
    //producto  = document.getElementById("producto").value;
    let precioProducto;
    let productoIng;
    let idprod;
    switch (producto) {
        case "1":
             alert("Producto ingresado: Mouse \n Precio: "+parseInt(precioProducto=1500));
             idprod=Math.random() * 100;
             productoIng="Mouse";
             break;
        case "2":
            alert("Producto ingresado: Teclado \n Precio: "+parseInt(precioProducto=2000));
            idprod=Math.random() * 100;
            productoIng="Teclado";
            break;
        case "3":
            alert("Producto ingresado: Auriculares \n Precio: "+parseInt(precioProducto=5000));
            idprod=Math.random() * 100;
            productoIng="Auriculares";
            break;
        case "4":
            alert("Producto ingresado: Monitor \n Precio: "+parseInt(precioProducto=20000));
            idprod=Math.random() * 100;
            productoIng="Monitor";
            break;    
        case "5":
            alert("Producto ingresado: Impresora \n Precio: "+parseInt(precioProducto=25000));
            idprod=Math.random() * 100;
            productoIng="Impresora";
            break;
        default:
            alert("Producto no encontrado, por favor vuelva a ingresar una opción correcta");
            break;
           

    }
  
    if(producto!="ESC"){arrayProductos.push(new Producto(parseInt(idprod),productoIng,precioProducto))};

 }while(producto != "ESC" )



 const listaProductos = document.getElementById('listaProductos')
 for (producto of arrayProductos)
     {
         //console.log("Nª producto: "+producto.id + "\n Producto :" + producto.producto + "- Precio de lista:"+ producto.precio + "- Precio con Impuesto:" + Math.round(producto.impuesto()));
 
         const item = document.createElement('li');
         item.innerHTML = '<h4> Nº: ' + producto.id + 'Producto: ' + producto.producto + 'Precio: '+ producto.precio +'</h4>'; 
         listaProductos.append(item);     
     
     };

const cantidadProductos = document.getElementById('cantidadProductos')
const cantProductos = document.createElement('li');     
cantProductos.innerHTML = '<h4> Cantidad de producto para la compra:'+ arrayProductos.length + '</h4>'
cantidadProductos.append(cantProductos);


const listaConImpProductos = document.getElementById('listaConImpProductos')
for (const producto of arrayProductos)
    {   /* console.log("Nª producto: "+producto.id+"\n Producto :"+producto.producto+"- Precio de lista:"+
        producto.precio+"- Precio con Impuesto:"+Math.round(producto.impuesto())); */
        const item = document.createElement('li');
        item.innerHTML = '<h4> Nº: ' + producto.id + 'Producto: ' + producto.producto + 'Precio de lista: '+ producto.precio +
        "- Precio con Impuesto:"+Math.round(producto.impuesto())+'</h4>'; 
        listaConImpProductos.append(item);   
       
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
do{
opcionCuota = prompt("Ingrese el plan de cuotas: \n 1 (3 cuotas) \n 2 (6 cuotas) \n 3 (12 cuotas), 0 para salir:")

//opcionCuota = document.getElementById("resultado").value;

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

//busca producto tipo Mouse
let resultado = arrayProductos.find((producto) => producto.producto === "Mouse");

console.log(resultado);
// fin de busqueda


function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}

const actualizado = arrayProductos.map((el) => {
    return {
        producto: el.producto,
        precio: el.precio * 1.25
    }
})

console.log(actualizado)
//


let cuotaSelec;
for (const cuotaE of arrayCuotas)
{
    console.log("Plan de cuotas elegido: "+cuotaE.plan)
    cuotaSelec=cuotaE.plan;
    document.getElementById("plan").value = +cuotaE.plan;
 
}


let fechaCompra=new Date();
const financiacion = document.getElementById('financiacion')
for (const producto of arrayProductos)
    {

       
        //console.log("Fecha de compra: "+fechaCompra.toLocaleDateString()+"\n Producto seleccionado:"+producto.producto+"\n Cuota a pagar: "
        //+ Math.round(producto.precio / cuotaSelec));
        const item = document.createElement('li');
        item.innerHTML = '<h4> Fecha de compra: '+fechaCompra.toLocaleDateString()+ 'Producto: ' + producto.producto + 'Cuota a pagar:' 
        + Math.round(producto.precio / cuotaSelec)+'</h4>'; 
        financiacion.append(item);   

        
       
}

// monto total de la compra

function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el.precio)
    }
}

let total = 0

function acumular(num) {
    total += num
}

porCadaUno(arrayProductos, acumular)

//console.log("Total de la compra: "+total) 


document.getElementById("resultado").value = +total;
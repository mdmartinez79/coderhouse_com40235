
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
//definir luxon
const DateTime = luxon.DateTime
///////////////
let productos = [
    {
      id: 1,
      nombre: "Mouse",
      precio: 1500,
      //imagen: "./img/imagenproducto.jpg",
    },
    {
      id: 2,
      nombre: "Teclado",
      precio: 2000,
      //imagen: "./img/imagenproducto.jpg",
    },
    {
      id: 3,
      nombre: "Auriculares",
      precio: 5000,
      imagen: "./img/imagenproducto.jpg",
    },
    {
      id: 4,
      nombre: "Monitor",
      precio: 20000,
      //imagen: "./img/imagenproducto.jpg",
    },
    {
      id: 5,
      nombre: "Impresora",
      precio: 15000,
      //imagen: "./img/imagenproducto.jpg",
    },
  
  ];

  
  const contenedor = document.getElementById("container");
  contenedor.innerHTML = "";
  
  productos.forEach((producto) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3");
    let html = `
      
      <div class="card-body">
      <ul>
        <li><h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
      </li>
      </ul>  
      </div>
        `;
    card.innerHTML = html;
    contenedor.appendChild(card);

    // spread de objetos 
    //lista todas las propiedades y valores de producto dentro de otro objeto
    const productos2 = {
      ...producto
    }

    console.log(productos2) //

    const productos3 = {
      ...producto,
      descuento: "15 %",
      
    }

    console.log(productos3)
    //fin spread

  });

  

  let formprod=document.querySelector("#listaprod")
  
  let botonp = document.getElementById("ingresaprod");
  botonp.addEventListener("click", cargarprod);
  botonp.addEventListener("click",(e) => e.preventDefault())
  
  // capturar elementos
    function cargarprod() {
    let opcionprod = document.getElementById("prod").value;
    let opcionprecio = document.getElementById("precio").value;
    

    let ingresaproductos = new Producto(parseInt(Math.random() * 100),opcionprod,opcionprecio);
    //operador ternario
    //cambio de alert por libreria sweet alert
    opcionprod ==='' ? 
    Swal.fire({
      title: 'Atención',
      text: 'Ud. no ha seleccionado un producto',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    }) : 
   
    Swal.fire({
      title: 'Realizaste tu compra!',
      text: 'Producto Seleccionado: '+opcionprod,
      icon: 'success',
      confirmButtonText: 'Confirmar'
    })
    //alert('Producto Seleccionado: '+opcionprod); 
    ///////////////////
    const prodIngresado= JSON.stringify(ingresaproductos);
    localStorage.setItem("produc", prodIngresado);  
    
    console.log(prodIngresado);
    
    mostrarProducto(ingresaproductos);
    impuestoProducto(ingresaproductos);
        
    detalleJson();
   
  }





  function mostrarProducto(producto) {
    
    //let fechaCompra=new Date();
    
    // luxon
    const dt = DateTime.now();

    console.log('Fecha de compra luxon:'+ dt.toLocaleString(DateTime.DATETIME_SHORT))
    ////////
    let formprod = document.getElementById("cantidadProductos");
    formprod.innerHTML = "";
    //agregar elementos
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `<h4> Fecha de Compra: ${dt.toLocaleString(DateTime.DATETIME_SHORT)} Nº:  ${producto.id} Producto: ${producto.producto} 
    Precio: ${producto.precio} </h4>`;
    /*nuevoContenido.innerHTML = `<h4> Fecha de Compra: ${fechaCompra.toLocaleDateString()} Nº:  ${producto.id} Producto: ${producto.producto} 
    Precio: ${producto.precio} </h4>`;*/
    nuevoContenido.className = "info-prod";
    formprod.appendChild(nuevoContenido);
  }

  function impuestoProducto(producto) {
    //let fechaCompra=new Date();
    
    //luxon
    const dt = DateTime.now();

    console.log('Fecha de compra luxon imp:'+ dt.toLocaleString(DateTime.DATETIME_SHORT))
    //////////////////////
    let formimpuesto = document.getElementById("listaConImpProductos");
    formprod.innerHTML = "";
    //agregar elementos
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `<h4> Fecha de Compra: ${dt.toLocaleString(DateTime.DATETIME_SHORT)} Nº:  ${producto.id} Producto: ${producto.producto} 
    Precio: ${producto.precio} Precio con Impuesto: ${Math.round(producto.impuesto())}</h4>`;
    /*nuevoContenido.innerHTML = `<h4> Fecha de Compra: ${fechaCompra.toLocaleDateString()} Nº:  ${producto.id} Producto: ${producto.producto} 
    Precio: ${producto.precio} Precio con Impuesto: ${Math.round(producto.impuesto())}</h4>`;*/
  
    nuevoContenido.className = "info-impuesto";
    formimpuesto.appendChild(nuevoContenido);
  }


  class Cuotas {
  
      constructor (id,plan,cuota)
      {
          this.id=id;
          this.plan=plan;
          this.cuota=cuota;
          
      }
  }

  
   
  
  let formplancuotas=document.querySelector("#planesdecuotas")
  
  let boton = document.getElementById("ingresarcuota");
  boton.addEventListener("click", cargarCuota);
  boton.addEventListener("click",(e) => e.preventDefault())
  
  // capturar elementos
  function cargarCuota() {
    console.log('ingreso en funcion cargar cuota')
    let opcionCuota = document.getElementById("cuotas").value;
    console.log('muestra opcion cuota'+opcionCuota)
   

    let cuota;
  
    switch (opcionCuota) {
      case "1":
          
           parseInt(cuota=3)
           break;
      case "2":
          
          parseInt(cuota=6)
          break;
      case "3":
        
          parseInt(cuota=12)
          break;
      default:
        //cambio de alert por libreria sweet alert
          opcionCuota ==='' ? 
          Swal.fire({
            title: 'Atención',
            text: 'Ud. no ha seleccionado plan de cuotas',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          }) : '';
          parseInt(cuota=1);
         
          
          break;
      }
    let ingresacuotas = new Cuotas(parseInt(Math.random() * 100),opcionCuota,cuota);
    console.log(ingresacuotas);
    mostrarPlandecuotas(ingresacuotas);
    
    //desesctruturacion  
    //let planElegido=ingresacuotas.plan;
    //alert('Plan seleccionado'+planElegido);
    ////////  
    //cambio de alert por libreria sweet alert
    /*Swal.fire({
      title: 'Financiación',
      text: 'Plan de cuotas seleccionado: '+planElegido ,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })*/
    


  }

  
  function mostrarPlandecuotas(cuotas) {
   
    let formcuota = document.getElementById("plan");
    formcuota.innerHTML = "";
    //agregar elementos
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `<h4> Plan de cuotas: ${cuotas.plan} Cantidad de cuotas:  ${cuotas.cuota} </h4>`;
  
    nuevoContenido.className = "info-cuota";
    formcuota.appendChild(nuevoContenido);
  }

  function detalleJson()
  {

    let almacenados= JSON.parse(localStorage.getItem("produc"));
   
        let formJson = document.getElementById("Json");
        formJson.innerHTML = "";
   
        let nuevoContenido = document.createElement("div");
        nuevoContenido.innerHTML = `<h4> Detalle de productos ingresados: Nº:  ${almacenados.id} 
        Producto: ${almacenados.producto} 
        Precio: ${almacenados.precio}</h4>`;
      
        nuevoContenido.className = "info-Json";
        formJson.appendChild(nuevoContenido);
   
        localStorage.removeItem("produc")

  }
  
  

  
 
  
  

  
  
  
 
 
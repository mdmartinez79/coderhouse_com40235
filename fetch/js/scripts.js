
const lista = document.querySelector("#listado")

fetch("./json/fetch.json")
.then ((res)=>res.json())
.then ((data)=>{
    data.forEach((producto)=>{
        let card = document.createElement("div");
        let html=`
        
        <div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center" id="infoprod">
                    <h5 class="fw-bolder" id="productoscompra">${producto.nombre}</h5>
                    <p id="preciocompra">${producto.precio}</p>    
                    </div>
                </div>
            
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                <button  type="button" class="btn btn-outline-dark mt-auto" id="btnRegistrarCompra">Añadir a carrito</button>
                </div>
            </div>
        </div>
        </div>
               
        `;
  
        card.innerHTML = html;
        lista.appendChild(card)
    })
})



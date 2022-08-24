for (let i = 1; i <= 5; i++) {
    // En cada repetición solicitamos un numero.
    let numero = Number(prompt("Ingrese un numero :"));
    //operación de suma por un número fijo
    if(numero >0){
    let resultado = numero + 5;
    let numerosIngresados=numero;
    // Informamos el turno asignado usando el número de repetición (i).

    alert(" Resultado de suma Nº "+i+" Número: "+numero+ "+ 5 ="+resultado);
    
    
    }else{

        alert('El número ingresado tiene que ser mayor a 0');
        break;
    }

}


let entrada = prompt("Ingrese un texto o ESC para interrumpir");
let texto = " ";
while (entrada != "ESC" && entrada != "esc") {
  texto += entrada + " ";
  entrada = prompt("Ingrese un texto o ESC para interrumpir");
}
alert(texto);

let numero = Number(prompt("Ingrese un numero :"));
for (let i = 1; i <= numero; i++) {
  let hola="Hola";
    
  alert(hola);  
}

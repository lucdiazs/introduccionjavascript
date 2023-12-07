//Dato "DATOS A UTILIZAR POR LA INFORMACIÓN"
const precio = 400000
let cantidad = 0

//Variable "LUGAR DONDE SE ALMACENA INFORMACIÓN"
function updatequantitydisplay (){
const quantityelement= document.querySelector(".cantidad");
const totalelement= document.querySelector(".valor-total");

quantityelement.innerHTML = cantidad;
totalelement.innerHTML = cantidadTotal(cantidad, precio);
}

//Función de acción al elementro creado "cantidadTotal"
function cantidadTotal(cantidad, precio){
    return cantidad * precio;
}

//Función de acción de sumar la cantidad
function aumentarCantidad(){
    cantidad++;
    updatequantitydisplay();
}

//Función de acción de que si la cantidad es mayor a 0 se puede disminuir
function disminuirCantidad(){
    if (cantidad > 0) { 
    cantidad--;
    updatequantitydisplay();
}
 }

 //Se de la funcionalidad al button
document.querySelector('button').addEventListener('click',aumentarCantidad);
document.querySelectorAll('button')[1].addEventListener('click',disminuirCantidad);

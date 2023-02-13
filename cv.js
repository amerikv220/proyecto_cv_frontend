
//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links= document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barras

window.onload = function() {
    animateprogress("#html",91);
    animateprogress("#php",70);
    animateprogress("#css",90);
    animateprogress("#javascript",75);
}

var getRequestAnimationFrame = function () {  
    return window.requestAnimationFrame ||
    
function ( callback ){
    window.setTimeout(enroute, 1 / 60 * 1000);
};
};

function animateprogress (id, val){    
 
    var fpAnimationFrame = getRequestAnimationFrame();   /* <--- Declaro una instancia de getRequestAnimationFrame para llamar a la función animación */
    var i = 0;
    var animacion = function () {
             
    if (i<=val)
        {
            document.querySelector(id).setAttribute("value",i);      /* <----  Incremento el valor de la barra de progreso */
            document.querySelector(id+"+ span").innerHTML = i+"%";     /* <---- Incremento el porcentaje y lo muestro en la etiqueta span */
            i++;
            fpAnimationFrame(animacion);          /* <------------------ Mientras que el contador no llega al porcentaje fijado la función vuelve a llamarse con fpAnimationFrame     */
        }
                                         
    }
 
        fpAnimationFrame(animacion);   /*  <---- Llamo la función animación por primera vez usando fpAnimationFrame para que se ejecute a 60fps  */
                 
}
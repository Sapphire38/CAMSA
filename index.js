let modal = document.getElementById("modal");

function mostrarModal(){
    modal.style.display = "grid"
}

function cerrarModal(){
    modal.style.display = "none"
}

var i = 0;
var txt = `Soluciones  rápidas` + ` y  de  calidad`;
var speed = 50;
function typeWriter() {
    
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
       i++;
      setTimeout(typeWriter, speed); 
    }
    // else{
    //     setTimeout(function() {document.getElementById("demo").innerHTML = ""}, 3000)  
    // }
}

  window.onload = function() {
    typeWriter()
  }
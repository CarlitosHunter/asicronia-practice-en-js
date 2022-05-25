console.log("Código de Asicronía");
console.log("Inicio");

function dos() {
  setTimeout(function () {
    console.log("Dos");
  }, 1000);
}

function uno() {
  setTimeout(function () {
    console.log("Uno");
  }, 0,5);
  cuatro();
  dos();
  console.log("Tres");
}

function cuatro(){
    setTimeout(function (){
        console.log("Cuatro");
    }, 10)
}

uno();
console.log("Fin");

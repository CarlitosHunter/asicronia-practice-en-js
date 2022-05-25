console.log("Código de Sicronía");
console.log("Inicio");

function dos() {
  console.log("Dos");
}

function uno() {
  console.log("Uno");
  dos();
  console.log("Tres");
  cuatro();
}

function cuatro() {
  console.log("Cuatro");
}

uno();
console.log("Fin");


/* 
function par1() {
  console.log("Dos");
  console.log("Cuatro");
}

function uno() {
  console.log("Uno");
  par1();
  console.log("Tres");

}

uno();
console.log("Fin");
 */
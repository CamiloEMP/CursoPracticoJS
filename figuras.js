// Coodigo cuadrado
console.group("Cuadrados");

function perimetroC(lado){
  return lado * 4;
}

function areaC(lado){
  return lado * lado;
}
console.groupEnd()

// Codigo triangulo
      console.group("Triangulos");

function perimetroT(a, b, base){
  return a + b + base;
}
function areaT(h, base) {
  return (base * h) / 2;
}
console.groupEnd();

// Codigo Circulo
console.group("Circulos");
//Diamtero
function diametroC(radio){
  return radio * 2;
}
// PI
const PI = Math.PI;
// Circuferencia
function perimetroCicurlo(radio) {
  let diametro = diametroC(radio);
  return diametro * PI;
}
//Área
function areaCiruclo(radio){
  return (radio * radio) * PI;
}
console.groupEnd();

// Interectrion with HTML

function perimetroCuadrado(){
  let input = document.getElementById("inputCuadrado");
  let value = input.value;
  let perimetro = perimetroC(value);
  alert(perimetro);
}
function areaCuadrado() {
  let input = document.getElementById("inputCuadrado");
  let value = input.value;
  let perimetro = areaC(value);
  alert(perimetro);
}
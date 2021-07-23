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
  let result = a + b + base
  return result;
}
function areaT(h, base) {
  return (base * h) / 2;
}
console.groupEnd();

function isosceles(a, b, base) {
  if (a == b) {
    let mitadBase = base / 2;
    let altura = Math.sqrt((b**2) - (mitadBase**2));
    console.log(altura)
  } else {
    console.log("No es un triangulo isósceles");
  }
}
isosceles(2, 2, 3);
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

// Triangulo1
function perimetroTriangulo1() {
  let ladoA = parseFloat(document.getElementById("inputLadoA").value);
  let ladoB = parseFloat(document.getElementById("inputLadoB").value);
  let base = parseFloat(document.getElementById("inputBase").value);
  let perimetro = perimetroT(ladoA, ladoB, base);
  alert(perimetro);
}
function areaTriangulo1() {
  let altura = parseFloat(document.getElementById(inputLado))
}
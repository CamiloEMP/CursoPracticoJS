// Coodigo cuadrado

function perimetroC(lado){
  return lado * 4;
}

function areaC(lado){
  return lado * lado;
}

// Codigo triangulo

function perimetroT(a, b, base){
  return a + b + base
}

function areaT(lado, base) {
  let z = base / 2;
  let h = Math.sqrt((lado**2) + (z**2))
  return (base * h) / 2
}

function isosceles(b, base) {
  let mitadBase = base / 2;
  let altura = Math.sqrt((b**2) - (mitadBase**2));
  return altura
}

// Codigo Circulo
console.group("Circulos");
//Diamtero
function diametroC(radio){
  return radio * 2;
}
// PI
const PI = Math.PI;
// Circuferencia
function perimetroCir(radio) {
  let diametro = diametroC(radio);
  return diametro * PI;
}
//Área
function areaC(radio){
  return (radio * radio) * PI;
}
console.groupEnd();

// Interectrion with HTML

function perimetroCuadrado(){
  let input = document.getElementById("inputCuadrado");
  let value = input.value;
  let result = document.getElementById("resultadoPCuadrado");
  if (value > 0) {
    let perimetro = perimetroC(value);
    result.innerHTML = perimetro;
  } else {
    result.innerHTML = "Error";
  }
}
function areaCuadrado() {
  let input = document.getElementById("inputCuadrado");
  let value = input.value;
  let result = document.getElementById("resultadoACuadrado");
  if (value > 0) {
    let area = areaC(value);
    result.innerHTML = area;
  } else {
    result.innerHTML = "Error";
  }
}

const perimetroTriangulo1= () => {
  let ladoA = parseFloat(document.getElementById("inputLadoA").value);
  let ladoB = parseFloat(document.getElementById("inputLadoB").value);
  let base = parseFloat(document.getElementById("inputBase").value);
  if (ladoA == ladoB && base == ladoA) {
    alert(perimetroT(ladoA, ladoB, base));
  } else {
    alert("No es un triangulo equilatero, revisa las medidas")
  }
}

function areaTriangulo1() {
  let ladoA = parseFloat(document.getElementById("inputLadoA").value);
  let ladoB = parseFloat(document.getElementById("inputLadoB").value);
  let base = parseFloat(document.getElementById("inputBase").value);
  if (ladoA == ladoB && base == ladoA) {
    return alert(areaT(ladoA, base));
  } else {
    alert("No es un triangulo equilatero, revisa las medidas");
    }
}

function pTrianguloIsosc() {
  let a = parseFloat(document.getElementById("ladoAIsosceles").value);
  let b = parseFloat(document.getElementById("ladoBIsosceles").value);
  let base = parseFloat(document.getElementById("baseIsosceles").value);
  if (a == b && a != base) {
    return alert(perimetroT(a, b, base));
  } else {
    return alert("No es un triangulo Isosceles, revisa las medidas");
  }
}

function hTrianguloIsosc() {
  let a = parseFloat(document.getElementById("ladoAIsosceles").value);
  let b = parseFloat(document.getElementById("ladoBIsosceles").value);
  let base = parseFloat(document.getElementById("baseIsosceles").value);
  if (a == b && a != base) {
    return alert(isosceles(b, base))
  } else {
    return alert("No es un triangulo Isosceles, revisa las medidas")
  }
}
function aTrianguloIsosc() {
  let a = parseFloat(document.getElementById("ladoAIsosceles").value);
  let b = parseFloat(document.getElementById("ladoBIsosceles").value);
  let base = parseFloat(document.getElementById("baseIsosceles").value);
  if (a == b && a != base) {
    return alert(areaT(a, b, base))
  } else {
    return alert("No es un triangulo Isosceles, revisa las medidas")
  }
}

function circuferenciaCriculo(){
  let radio = parseFloat(document.getElementById("radio").value);
  if (radio > 0) {
    return alert(perimetroCir(radio));
  } else {
    return alert("Error, valores negativos");
  }
}
function diametroCriculo(){
  let radio = parseFloat(document.getElementById("radio").value);
  if (radio > 0) {
    return alert(diametroC(radio));
  } else {
    return alert("Error, valores negativos");
  }
}
function areaCirculo(){
  let radio = parseFloat(document.getElementById("radio").value);
  if (radio > 0) {
    return alert(areaC(radio));
  } else {
    return alert("Error, valores negativos");
  }
}

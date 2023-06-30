console.log("Esta conectado")
// Funciones para operaciones matemáticas
function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

// Función para capturar entradas y realizar cálculos
function realizarCalculo(operacion) {
  var num1 = parseFloat(prompt("Ingresa el primer número:"));
  var num2 = parseFloat(prompt("Ingresa el segundo número:"));

  var resultado;

  switch (operacion) {
    case "suma":
      resultado = sumar(num1, num2);
      break;
    case "resta":
      resultado = restar(num1, num2);
      break;
    case "multiplicacion":
      resultado = multiplicar(num1, num2);
      break;
    case "division":
      resultado = dividir(num1, num2);
      break;
    default:
      alert("Operación inválida");
      return;
  }

  alert("El resultado es: " + resultado);
}

// Event listeners para los botones de operaciones
document.getElementById("suma").addEventListener("click", function() {
  realizarCalculo("suma");
});

document.getElementById("resta").addEventListener("click", function() {
  realizarCalculo("resta");
});

document.getElementById("multiplicacion").addEventListener("click", function() {
  realizarCalculo("multiplicacion");
});

document.getElementById("division").addEventListener("click", function() {
  realizarCalculo("division");
});

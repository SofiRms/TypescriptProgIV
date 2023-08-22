var numero = 7;
var n = 50;
console.log("Tabla de multiplicar del ".concat(numero, " hasta 50:"));
for (var i = 1; i <= n; i++) {
    var resultado = numero * i;
    console.log("".concat(numero, " x ").concat(i, " = ").concat(resultado));
}

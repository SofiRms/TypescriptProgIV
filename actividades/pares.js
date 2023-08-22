function contarParesImpares(inicio, fin) {
    var cantidadPares = 0;
    var cantidadImpares = 0;
    for (var i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            cantidadPares++;
        }
        else {
            cantidadImpares++;
        }
    }
    return [cantidadPares, cantidadImpares];
}
var inicioRango = 1;
var finRango = 10;
var _a = contarParesImpares(inicioRango, finRango), pares = _a[0], impares = _a[1];
console.log("Cantidad de n\u00FAmeros pares en el rango: ".concat(pares));
console.log("Cantidad de n\u00FAmeros impares en el rango: ".concat(impares));

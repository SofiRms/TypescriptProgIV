function fibonacci(n) {
    var list = [];
    if (n >= 1) {
        list.push(0);
    }
    if (n >= 2) {
        list.push(1);
    }
    for (var i = 2; i < n; i++) {
        var siguiente = list[i - 1] + list[i - 2];
        list.push(siguiente);
    }
    return list;
}
function displayFibonacci(list) {
    console.log("Secuencia de Fibonacci:");
    console.log(list.join(", "));
}
var N = 7; // seleccionar cantidad de números
var listaFibonacci = fibonacci(N);
displayFibonacci(listaFibonacci);

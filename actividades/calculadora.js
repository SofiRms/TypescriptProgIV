function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b !== 0) {
                return a / b;
            }
            else {
                throw new Error("No se puede dividir por cero.");
            }
        default:
            throw new Error("Operación no válida.");
    }
}
var num1 = 10; // modificar con los valores deseados
var num2 = 15;
var selectedOperation = "multiply"; // cambiar manualmente la operación deseada
try {
    var result = calculate(selectedOperation, num1, num2);
    console.log("El resultado de ".concat(num1, " ").concat(selectedOperation, " ").concat(num2, " es: ").concat(result));
}
catch (error) {
    console.log(error.message);
}

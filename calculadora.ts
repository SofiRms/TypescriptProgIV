type Operation = "add" | "subtract" | "multiply" | "divide";

function calculate(operation: Operation, a: number, b: number): number {
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
      } else {
        throw new Error("No se puede dividir por cero.");
      }
    default:
      throw new Error("Operación no válida.");
  }
}

const num1: number = 10; // modificar con los valores deseados
const num2: number = 15;
const selectedOperation: Operation = "multiply"; // cambiar manualmente la operación deseada

try {
  const result = calculate(selectedOperation, num1, num2);
  console.log(`El resultado de ${num1} ${selectedOperation} ${num2} es: ${result}`);
} catch (error) {
  console.log(error.message);
}

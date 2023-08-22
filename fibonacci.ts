function fibonacci(n: number): number[] {
    const list: number[] = [];
  
    if (n >= 1) {
      list.push(0);
    }
    if (n >= 2) {
      list.push(1);
    }
  
    for (let i = 2; i < n; i++) {
      const siguiente = list[i - 1] + list[i - 2];
      list.push(siguiente);
    }
  
    return list;
  }
  
  function displayFibonacci(list: number[]): void {
    console.log("Secuencia de Fibonacci:");
    console.log(list.join(", "));
  }
  
  const N: number = 7; // seleccionar cantidad de números
  const listaFibonacci: number[] = fibonacci(N);
  displayFibonacci(listaFibonacci);
  
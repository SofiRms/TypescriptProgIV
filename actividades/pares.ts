function contarParesImpares(inicio: number, fin: number): [number, number] {
    let cantidadPares = 0;
    let cantidadImpares = 0;
  
    for (let i = inicio; i <= fin; i++) {
      if (i % 2 === 0) {
        cantidadPares++;
      } else {
        cantidadImpares++;
      }
    }
  
    return [cantidadPares, cantidadImpares];
  }
  
  const inicioRango = 1; 
  const finRango = 10;
  
  const [pares, impares] = contarParesImpares(inicioRango, finRango);
  
  console.log(`Cantidad de números pares en el rango: ${pares}`);
  console.log(`Cantidad de números impares en el rango: ${impares}`);
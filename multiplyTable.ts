const numero : number = 7;
const n : number = 50
console.log(`Tabla de multiplicar del ${numero} hasta 50:`);
for (let i = 1; i <= n; i++) {
  const result = numero * i;
  console.log(`${numero} x ${i} = ${result}`);
}
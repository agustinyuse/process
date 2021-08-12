let numeros = {};

process.on("random", (quantity) => {
  console.log(`mensaje del padre ${quantity}`);
  for (let i = 0; i < 10000; i++) {
    let numero = parseInt(Math.random() * 20) + 1;
    if (!numeros[numero]) numeros[numero] = 0;
    numeros[numero]++;
  }

  process.send(numeros);
});

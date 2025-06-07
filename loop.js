let k = 1;
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(`${k++} i=${i} j=${j}`);
  }
}

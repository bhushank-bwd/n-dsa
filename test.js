let k = 5;
function printN(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  printN(n--);
}
// printN(5);
// printTillN(1);

function printTillN(n) {
  if (n > k) {
    return;
  }
  console.log(n);
  printTillN(++n);
}

function sumN(n) {
  if (n == 1) return 1;
  return n + sumN(n - 1);
}
// console.log(sumN(7));
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

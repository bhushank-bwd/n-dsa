let n = 10;
function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}
let total = sum(n);
console.log(total);

let num = [10, 5, 44, 12, 22, 54];

function sumOfArr(n) {
  if (n == 0) return num[0];
  return num[n] + sumOfArr(n - 1);
}

let totalNum = sumOfArr(num.length - 1);
console.log(totalNum);

let num2 = [10, 5, 44, 13, 22, 54, 17];

function sumOfOddArr(n) {
  let isOdd = num2[n] % 2 == 0;
  if (n == 0) return isOdd ? 0 : num2[0];
  return (isOdd ? 0 : num2[n]) + sumOfOddArr(n - 1);
}

let totalNum2 = sumOfOddArr(num2.length - 1);
console.log(totalNum2);

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}
let f5 = factorial(5);
let f7 = factorial(7);
console.log(f5, f7);

function powerOfTwo(n) {
  if (n === 1) return true;
  else if (n % 2 != 0 || n < 1) return false;

  return powerOfTwo(n / 2);
}

console.log(powerOfTwo(144));
console.log(powerOfTwo(256));

function fibonacci(n) {
  //   if (n == 0) return 0;
  //   else if (n == 1) return 1;
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));
console.log(fibonacci(8));
// iteration is top down approach
// recursion is bottom up approach

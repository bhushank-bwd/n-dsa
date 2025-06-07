function countDigit(n) {
  if (n == 0) return 1;
  // change this number to positive if it is negative
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let n = -25454545415;
console.log(countDigit(n));

// corner case
// 1. n=0
// n is negative then use Math.abs(n)

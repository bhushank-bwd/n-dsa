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
function isPalinDrome(num) {
  if (num < 0) {
    console.log("Not Palindrome Number " + num);
    return;
  }
  let tempNum = num;
  let rev = 0;
  while (num > 0) {
    let rem = num % 10; // get last digit
    rev = rem + 10 * rev; // attach last digit to reverse number
    num = Math.floor(num / 10); // divide number to modify num
  }
  if (tempNum == rev) console.log("Palindrome Number " + rev);
  else console.log("Not Palindrome Number " + rev);
}
// isPalinDrome(1234);
// isPalinDrome(2552);
// isPalinDrome(-2552);
// corner case
// n is negative then use Math.abs(n)
function reverseNum(num) {
  let tempNum = num;
  num = Math.abs(num);
  let rev = 0;
  while (num > 0) {
    let rem = num % 10; // get last digit
    rev = rem + 10 * rev; // attach last digit to reverse number
    num = Math.floor(num / 10); // divide number to modify num
  }
  let limit = 2 ** 31; // check for 32 bit integer
  if (rev < -limit || rev > limit - 1) return 0;

  return tempNum > 0 ? rev : rev * -1;
}
console.log(reverseNum(454512));
console.log(reverseNum(-4514));
console.log(reverseNum(-2147483649));
console.log(reverseNum(2147483648));

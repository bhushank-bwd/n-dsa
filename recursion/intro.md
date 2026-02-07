# Recursion

## Introduction

- Find Base case to end infinite loop
- Divide problem into sub problem

## Code

### Print 1 to n numbers

```js
let k = 5;
printTillN(1);

function printTillN(n) {
  if (n > k) {
    return;
  }
  console.log(n);
  printTillN(++n);
}
```

## Print n to 1

```js
function printN(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  printN(n--);
}
printN(5);
```

## Sum n numbers

```js
function sumN(n) {
  if (n == 1) return 1;
  return n + sumN(n - 1);
}
console.log(sumN(7));
```

## Factorial

```js
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
```

## Power of two

## Base Condition

1. N==1 it is power of two
   1. Note that 1 is 2<sup>0</sup> so keep this condition first
2. return false if number is odd or less than 1
   3 call power of two by dividing by 2

```js
function powerOfTwo(n) {
  if (n == 1) return true;
  else if (n < 1 || n % 2 != 0) return false;

  return powerOfTwo(n / 2);
}
console.log(powerOfTwo(32));
console.log(powerOfTwo(72));
console.log(powerOfTwo(67));
```

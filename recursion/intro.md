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

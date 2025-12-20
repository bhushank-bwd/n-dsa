# Merge two sorted array

## Inputs

- two array with non decreasing order

```js
let num11 = [1, 2, 3, 0, 0, 0];
let num21 = [2, 5, 6];
let num12 = [1, 2, 3, 7, 0, 0, 0];
let num22 = [2, 4, 5];
```

- first array with fill up of 0
- m length of first array
- n length of second array

## Output

```
[1, 2, 2, 3, 5, 6]
[1, 2, 2, 3, 4, 5, 7]
```

## Solution

### First approach with Copy first Array

- copy first array with slice
- keep two pointer p1,p2
- for loop for m+n
  - insert in first array if
    - p2 exhaust
    - p1 available and p1<sup>th</sup> of copied array less than p2<sup>th</sup> of second array and increase p1
  - else
    - insert p2<sup>th</sup> of second array in first array and increase p2
- return first array

```js
function firstApproach(n1, m, n2, n) {
  let nCopy = n1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nCopy[p1] < n2[p2])) {
      n1[i] = nCopy[p1];
      p1++;
    } else {
      n1[i] = n2[p2];
      p2++;
    }
  }
  return n1;
}
console.log(firstApproach(num11, 3, num21, 3));
console.log(firstApproach(num12, 4, num22, 3));
```

## Second Approach without copy

- keep pointer with last actual index of respective array
- i for iteration wih output length -1
- loop while til; p2 not exhausts
  - if p1 available and p1<sup>th</sup> of first array greater than p2<sup>th</sup> of second array then place it at i of first array and decrease p1
  - else
    - place p2<sup>th</sup> of second array in first array at i and decrease p2

```js
function secondApproach(n1, m, n2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let i = m + n - 1;
  while (p2 >= 0) {
    if (p1 >= 0 && n1[p1] > n2[p2]) {
      n1[i] = n1[p1];
      p1--;
    } else {
      n1[i] = n2[p2];
      p2--;
    }
    i--;
  }
  return n1;
}
console.log(secondApproach(num11, 3, num21, 3));
console.log(secondApproach(num12, 4, num22, 3));
```

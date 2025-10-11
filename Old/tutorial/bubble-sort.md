# Bubble sort

## Example 5,2,4,1

### First iteration

- `5,2`,4,1
- 2,`5,4`,1
- 2,4,`5,1`
- 2,4,1,5 => we get last element at correct position => three swaps

### second iteration

- 2,4,1,5
- 2,`4,1`,5
- 2,1,4,5 => we get last second element at correct position => two swaps

### third iteration

- `2,1`,4,5
- 1,2,4,5 => we get last third element at correct position => one swaps

> So outer loop will run n-1 i.e three times

> Inner loop will run n-1-i times

## Code

```js
let num = [5, 12, 24, 1, 43, 32, 23];

function sort(tempArr) {
  let n = tempArr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (tempArr[j] > tempArr[j + 1]) {
        let temp = tempArr[j];
        tempArr[j] = tempArr[j + 1];
        tempArr[j + 1] = temp;
      }
    }
  }
  return tempArr;
}

console.log(sort(num));
```

- Output

```
[
   1,  5, 12, 23,
  24, 32, 43
]
```

## Improve code

- if array of thousand element sorted after outer 10 iteration then we break loop using swapped flag

```js
let arr = [5, 2, 4, 1];
let num = [55, 1, 14, 17, 23, 32, 36];

function sort(tempArr) {
  let n = tempArr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (tempArr[j] > tempArr[j + 1]) {
        let temp = tempArr[j];
        tempArr[j] = tempArr[j + 1];
        tempArr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (isSwapped) break;
  }
  return tempArr;
}

console.log(sort(arr));
console.log(sort(num));
```

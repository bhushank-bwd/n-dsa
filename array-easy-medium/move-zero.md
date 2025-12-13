# Move Zero

## Input

- Integer array
- [0, 1, 0, 3, 12];

## Output

- change in place
- keep non zero element order same
- keep all 0 to end
- [1, 3, 12, 0, 0]

## Code

- keep two pointer
  - x to replace `0`
  - i for loop
- In loop
  - if non zero element then replace it to x<sup>th</sup> element and increase x by one
- use second loop start form x to array length and fill array with 0

```js
function moveZero(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[x] = arr[i];
      x++;
    }
  }
  for (let j = x; j < arr.length; j++) {
    arr[j] = 0;
  }
  return arr;
}
```

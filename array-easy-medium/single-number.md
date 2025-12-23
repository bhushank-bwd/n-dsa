# Single Number

## Input

- array of all number comes twice but only one number comes single
- return single number
- [3, 7, 9, 1, 1, 3, 2, 2, 7]

## outout

- 9

## Code

- use bitwise xor to get single number

```js
function singleNumber(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}
```

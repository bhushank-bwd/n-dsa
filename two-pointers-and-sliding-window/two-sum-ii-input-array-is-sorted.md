# Two Sum II - Input Array Is Sorted

## Input

- Sorted
- 1 Indexed that first index start from 1
- No extra space should use

```js
let arr = [1, 7, 9, 11, 15];
let target = 22;
```

## Solution

- set i at 0 and j at end
- while i not cross j
  - find sum of both element
    - if sum is greater than target decrement j index by one
    - if sum is less than target increment i index by one
    - else return [i,j] or break

```js
let i = 0;
let j = arr.length - 1;
while (i < j) {
  let sum = arr[i] + arr[j];
  if (sum > target) --j;
  else if (sum < target) ++i;
  else {
    ans = [i, j];
    break;
  }
}
```

- if array is 1 index then return `[i+1, j+1]`

## Time Complexity

- O(N)

## Space Complexity

- O(1)

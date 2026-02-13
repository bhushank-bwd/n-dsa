# Binary Search

## Input

- Sorted array in ascending order
- Binary search only work on sorted array

## Output

- If found return index
- else return -1

## Code

- find left and right
- use while where index are unknown
- while
  - **base condition** `left<=right`
    - left should not cross right
    - eg. this will work for if array count is one
  - find middle using math floor
  - middle element equal to target
    - return middle
  - if target is greater than middle
    - move left to middle + 1
  - else
    - move right to middle - 1
- return -1 for not found

```js
let arr = [-20, -5, 0, 1, 4, 11, 27, 38, 79];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) return middle;
    else if (target > arr[middle]) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
}
console.log(binarySearch(arr, 38));
console.log(binarySearch(arr, -5));
console.log(binarySearch(arr, 12));
```

## Complexity

### Time Complexity

- O(log n)
  - as array reduce to half every iteration

### Space complexity

- Constants
- O(1)

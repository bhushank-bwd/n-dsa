# Linear Search

## Explanation

Linear Search is a simple search algorithm used to find a specific element in an array. It checks each element of the array one by one until the target value is found or the end of the array is reached.

## Code

```js
let arr = [4, 5, 1, 3, 9];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

let result = linearSearch(arr, 5);
console.log("Element found at index", result);
```

## Time & Space Complexity:

- **Time Complexity:** O(n) where n is the size of the array.

- In the worst case, the algorithm traverses the entire array. Each element is checked exactly once.
- **Space Complexity:** O(1) Constant Space

# Max Consecutive One

## Input

- Binary array 0 or 1;
- `[1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]`;

## Output

- In above Case 10

## Code

- keep two pointer `currentCount` and `maxCount` with initial zero
- loop array
  - if zero then check which pointer is greater and set currentCount to zero
  - if one increase CurrentCount
- Again check which is maximum pointer return it
  - this because it will check for last consecutive count

```js
function maxConsecutiveOne(arr) {
  let currentCount = 0;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      maxCount = currentCount > maxCount ? currentCount : maxCount;
      currentCount = 0;
    }
    if (arr[i] == 1) {
      ++currentCount;
    }
  }
  maxCount = currentCount > maxCount ? currentCount : maxCount;

  return maxCount;
}
```

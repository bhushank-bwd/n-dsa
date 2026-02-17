# Selection sort

## Explanation

> Selecting Minimum element

- In each iteration from first element is sorted
- [`7`, `1`, 5, 4, 3, 2]
- [1, `7`, 5, 4, 3, `2`]
- [1, 2, `5`, 4, `3`, 7]
- [1, 2, 3, 4, 5, 7]

## Code

- first loop till last second element
  - keep i as min
  - second loop start from next of i to end
    - if second pointer element is less than min<sup>th</sup> then change min = j
  - swap min with i

```js
let arr = [15, 3, -20, -5, 2, 13, 0, 1, 4, 11, 6, 27, 14, 38, 79, 8];
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min == i) continue;
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  console.log(arr);
}
selectionSort(arr);
```

## Complexity

### Time Complexity

- O(N) \* O(N) => O(N<sup>2</sup>)

### Space Complexity

- O(1) => `constants`

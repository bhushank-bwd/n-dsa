# Bubble sort

## Algorithm

- works in pair
- pair element swapped if first element is greater than second

## Example

- Input [5,2,4,1]

### First iteration

- [`5, 2`, 4, 1] => [`2, 5`, 4, 1]
- [2, `5, 4`, 1] => [2, `4, 5`, 1]
- [2, 4, `5, 1`] => [2, 4, `1, 5`]
- in first iteration last element is sorted

### Second iteration

- [`2, 4`, 1, 5] => [`2, 4`, 1, 5]
- [2, `4, 1`, 5] => [2, `1, 4`, 1]
- in second iteration last second element is sorted and comparison count reduce by 1

### Third iteration

- [`2, 1`, 4, 5] => [`1, 2`, 4, 5]
- in last iteration all element is sorted(for array of 4 length) and comparison count reduce by 1
- every iteration element from last one by one sorted and reduces comparison one by each iteration

## code

```js
let arr = [15, 3, -20, -5, 2, 13, 0, 1, 4, 11, 6, 27, 14, 38, 79, 8];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}
bubbleSort(arr);
```

## Complexity

### Time Complexity

- (n-1)\*(n-1-i) = `O(N<sup>2</sup>)` in worst case
- not good
- not preferred

### Space complexity

- Constant `O(1)`

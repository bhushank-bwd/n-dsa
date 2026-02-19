# Insertion Sort

## Explanation

- in every iteration in increment index sort
- starts from second element
- first iteration 0,1 sorted
- second iteration 0,1,2 sorted
- and so on
- shift iteration i<sup>th</sup> at proper place by moving back if lesser than

## Code

- starts from second element
- keep two currentElement and previousIndex
  - while previous is greater than current and previous index exists
    - move previous to next one
    - decrement previousIndex
  - place current element to next previous

```js
let arr = [15, 3, -20, -5, 2, 13, 0, 1, 4, 11, 6, 27, 14, 38, 79, 8];
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let prevIndex = i - 1;
    while (arr[prevIndex] > current && prevIndex >= 0) {
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex--;
    }
    arr[prevIndex + 1] = current;
  }
  console.log(arr);
}
insertionSort(arr);
```

## Complexity

### Time Complexity

- O(N) \* O(N) => O(N<sup>2</sup>)

### Space Complexity

- O(1) => `constants`

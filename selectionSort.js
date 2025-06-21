let num1 = [-5, 12, -7, 3, 11, 14, 12, 67, 32];
let num2 = [5, 4, 3, 2, 1, 15, 0];

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(insertionSort(num1));
console.log(insertionSort(num2));

let num1 = [-5, 12, -7, 3, 11, 14, 12, 67, 32];
let num2 = [5, 4, 3, 2, 1, 15, 0];

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

console.log(insertionSort(num1));
console.log(insertionSort(num2));

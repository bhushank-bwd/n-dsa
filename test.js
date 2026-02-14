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

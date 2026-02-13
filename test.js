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

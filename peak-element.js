function anyPeakElement(arr) {
  let L = 0;
  let R = arr.length - 1;
  while (L < R) {
    let M = L + Math.floor((R - L) / 2);
    if (arr[M] < arr[M + 1]) {
      L = M + 1;
    } else {
      R = M;
    }
  }
  return L;
}
console.log(anyPeakElement([1, 2, 1, 3, 5, 6, 4, 7, 2]));

function findMin(arr) {
  let L = 0;
  let R = arr.length - 1;
  while (L <= R) {
    if (arr[L] <= arr[R]) return arr[L];

    let M = L + Math.floor((R - L) / 2);

    if (arr[M] < arr[M - 1]) {
      return arr[M];
    }
    if (arr[M] < arr[L]) {
      R = M - 1;
    } else {
      L = M + 1;
    }
  }
}
console.log(findMin([7, 8, 9, 10, 3, 4, 5, 6]));
console.log(findMin([10, 2, 3, 4, 5, 6]));
console.log(findMin([0, 1, 2, 3, 4, 5, 6]));

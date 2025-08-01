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
// console.log(anyPeakElement([1, 2, 1, 3, 5, 6, 4, 7, 2]));

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
// console.log(findMin([7, 8, 9, 10, 3, 4, 5, 6]));
// console.log(findMin([10, 2, 3, 4, 5, 6]));
// console.log(findMin([0, 1, 2, 3, 4, 5, 6]));

function searchRange(arr, target) {
  let L = 0;
  let R = arr.length - 1;
  let ans = [-1, -1];
  while (L < R) {
    let M = L + Math.floor((R - L) / 2);
    if (arr[M] < target) L = M + 1;
    else R = M;
  }
  if (arr[L] === target) ans[0] = L;
  L = 0;
  R = arr.length - 1;
  while (L < R) {
    let M = L + Math.ceil((R - L) / 2);
    if (arr[M] > target) R = M - 1;
    else L = M;
  }
  if (arr[L] === target) ans[1] = L;
  return ans;
}
// console.log(searchRange([0, 1, 1, 2, 2, 2, 2, 3, 3, 5], 2));
// console.log(searchRange([0, 1, 1, 2, 2, 2, 3, 3, 5], 12));

function searchRange1(arr, target) {
  let L = 0;
  let R = arr.length - 1;
  let ans = [-1, -1];

  while (L <= R) {
    let M = L + Math.floor((R - L) / 2);
    if (arr[M] === target) {
      ans[0] = M;
      R = M - 1;
    } else if (arr[M] < target) L = M + 1;
    else R = M - 1;
  }
  L = 0;
  R = arr.length - 1;
  while (L <= R) {
    let M = L + Math.floor((R - L) / 2);
    if (arr[M] === target) {
      ans[1] = M;
      L = M + 1;
    } else if (arr[M] < target) L = M + 1;
    else R = M - 1;
  }

  return ans;
}
console.log(searchRange1([0, 1, 1, 2, 2, 2, 2, 3, 3, 5], 2));
console.log(searchRange1([0, 1, 1, 2, 2, 2, 3, 3, 5], 12));

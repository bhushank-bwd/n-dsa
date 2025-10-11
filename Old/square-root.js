function squareRoot(x) {
  if (x < 2) return x;
  let l = 2;
  let r = Math.floor(x / 2);

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (m * m === x) return m;
    else if (x > m * m) l = m + 1;
    else r = m - 1;
  }
  return r;
}
// console.log(squareRoot(36), squareRoot(30), squareRoot(33), squareRoot(37));

function findHigher(range) {
  let l = 1;
  let r = range;
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);
    let res = guess(m);
    console.log(m, res);
    if (res === 0) return m;
    else if (res === 1) l = m + 1;
    else r = m - 1;
  }
}
function guess(middle) {
  let pick = 55;
  if (middle > pick) return -1;
  else if (middle < pick) return 1;
  return 0;
}
// console.log(findHigher(100));

function rotationalSearch(arr, target) {
  let R = arr.length - 1;
  let L = 0;
  while (L <= R) {
    let M = Math.floor(L + (R - L) / 2);
    if (arr[M] === target) return M;

    // left side is sorted
    if (arr[L] <= arr[M]) {
      if (target < arr[M] && target >= arr[L]) R = M - 1;
      else L = M + 1;
    } else {
      if (target > arr[M] && target <= arr[R]) L = M + 1;
      else R = M - 1;
    }
  }
  return -1;
}
console.log(rotationalSearch([4, 5, 6, 7, 0, 1, 2], 6));
console.log(rotationalSearch([4, 5, 6, 7, 0, 1, 2], 3));
console.log(rotationalSearch([4, 5, 6, 7, 0, 1, 2], 1));

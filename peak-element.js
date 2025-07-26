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
console.log(peakElement([1, 2, 1, 3, 5, 6, 4, 7, 2]));

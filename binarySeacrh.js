let num1 = [-3, 0, 1, 5, 12, 17, 19, 31];
let num2 = [-3];

function search(arr, element) {
  let l = 0;
  let r = arr.length;
  while (r >= l) {
    let m = Math.floor((l + r) / 2);
    if (element === arr[m]) {
      return m;
    } else if (element > arr[m]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
}
console.log(search(num1, 5));
console.log(search(num1, 17));
console.log(search(num1, 44));
console.log(search(num1, -4));
console.log(search(num2, -3));
console.log(search(num2, -5));

let num = [4, 9, 1, 0, 8];
let element = 0;

function linearSearch(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(num, 0));
console.log(linearSearch(num, 10));

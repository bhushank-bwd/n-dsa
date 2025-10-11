let arr = [11, 7, 15, 3];
let target = 22;
let ans;
let map = {};
for (let i = 0; i < arr.length; i++) {
  map[arr[i]] = i;
}
for (let i = 0; i < arr.length; i++) {
  let targetElement = target - arr[i];
  if (targetElement in map && map[targetElement] != i) {
    ans = [i, map[targetElement]];
    break;
  }
}
console.log(ans);

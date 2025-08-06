function findTwoSum(arr, target) {
  let n = arr.length;
  let map = {};
  for (let i = 0; i < n; i++) {
    map[arr[i]] = i;
  }
  for (let i = 0; i < n; i++) {
    let diff = target - arr[i];
    if (map[diff] && i != map[diff]) {
      return [i, map[diff]];
    }
  }
}
console.log(findTwoSum([1, 4, 1, 11, 23, 45, 17], 15));

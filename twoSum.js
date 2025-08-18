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
// console.log(findTwoSum([1, 4, 1, 11, 23, 45, 17], 15));

function twoSum(arr, target) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum > target) {
      --j;
    } else if (sum < target) {
      ++i;
    } else {
      return [i, j];
    }
  }
}
// console.log(twoSum([1, 2, 5, 7, 12], 9), twoSum([1, 2, 5, 7, 12], 8));

function isSubsequence(s, t) {
  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (s[i] == t[j]) {
      ++i;
    }
    ++j;
  }
  return i == s.length;
}
// console.log(
//   isSubsequence("adg", "abdfgn"),
//   isSubsequence("adn", "abdfgn"),
//   isSubsequence("agd", "abdfgn")
// );

function findStringIndex(needle, heyStack) {
  let n = needle.length;
  let h = heyStack.length;

  for (let i = 0; i <= h - n; i++) {
    let j;
    for (j = 0; j < n; j++) {
      if (heyStack[i + j] != needle[j]) {
        break;
      }
    }
    if (j == n) return i;
  }

  return -1;
}
// console.log(
//   findStringIndex("abc", "aabcabcd"),
//   findStringIndex("bcd", "aabcabcd"),
//   findStringIndex("abcde", "aabcabcd")
// );

function findMaxWater(arr) {
  let i = 0;
  let j = arr.length - 1;

  let area = 0;
  while (i < j) {
    let tempArea = Math.min(arr[i], arr[j]) * (j - i);
    area = Math.max(tempArea, area);
    if (arr[i] > arr[j]) {
      --j;
    } else {
      ++i;
    }
  }
  return area;
}
console.log(findMaxWater([1, 5, 4, 3, 8, 6, 5, 6]));

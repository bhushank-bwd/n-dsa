let needle = "sadal";
let haystack = "sadbutsada";

function firstIndexOfString(needle, haystack) {
  let m = needle.length;
  let n = haystack.length;

  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    for (j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) break;
    }
    if (j == m) return i;
  }

  return -1;
}
console.log(firstIndexOfString(needle, haystack));

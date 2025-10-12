# First Index Of String

## Input

```js
let needle = "sada";
let haystack = "sadbutsada";
```

- find first index of needle in haystack
  - sada => 6
  - sad => 0,6
- if not found return -1

## Solution

- get length of both string
- run loop through 0 to haystack length - needle length but include last sliding window `<=`
  - run loop again for needle length
    - check character equals or not
      - not equal then break
    - if length of inner loop index equal to needle length then return i
- return -1

```js
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
```

## Time Complexity

- O(N) \* O(M) = O(MN)

## Space Complexity

- O(1)

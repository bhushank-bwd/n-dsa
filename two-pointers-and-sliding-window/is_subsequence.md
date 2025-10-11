# Is Subsequence

## Input

- **s** -> Substring
- **t** -> full string in which search

```js
let s = "abc";
let t = "ahbgdc";
```

## Find s is part/subsequence of t by removing some character

- valid subsequence
  - abc
  - ac
  - abd
- invalid subsequence
  - bad
  - cad

## Solution

- Initialize i and j to 0
- keep while loop till t string length
  - increment j
  - if j<sup>th</sup> character of t == i<sup>th</sup> character of s then `increment i`
- return i==s.length means string found

```js
function isSubSequence(s, t) {
  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (s[i] == t[j]) ++i;
    ++j;
  }
  return i == s.length;
}
```

## Time Complexity

- O(N)

## Space Complexity

- O(1)

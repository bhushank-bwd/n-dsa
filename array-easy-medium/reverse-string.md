# Reverse String

## Input

- Array of string char `["h", "e", "l", "l", "o" ]`

## Output

- Array of char `["o", "l", "l", "e", "h" ]`

## Code

- find mid using math floor
- run loop through till mid
  - swap (i,n-1-i)

```js
let arr = ["h", "e", "l", "l", "o"];
let arr2 = ["a", "b", "c", "d", "e", "f"];
function reverseString(characters) {
  let n = characters.length;
  let mid = Math.floor(characters.length / 2);
  for (let i = 0; i < mid; i++) {
    let temp = characters[i];
    characters[i] = characters[n - 1 - i];
    characters[n - 1 - i] = temp;
  }
  return characters;
}
let reverseChar = reverseString(arr);
let reverseChar2 = reverseString(arr2);
console.log(reverseChar, reverseChar2);
```

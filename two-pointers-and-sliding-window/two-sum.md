# Two Sum

## Input

- array of integer
- integer target

```js
let arr = [2, 7, 11, 15];
let target = 26;
```

## Find the pair of index that sum equal to target

- Only one pair solution

## Brute Force Method

- Run For loop i 0 to N
  - run other loop j from i+1 to N
  - find sum == target and return index

```js
let arr = [2, 7, 11, 15];
let target = 26;
let ans;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] + arr[i] == target) {
      ans = [i, j];
      break;
    }
  }
}
console.log(ans);
```

### Time Complexity

- Due to double for loop it is **O(N<sup>2</sup>)**

### Space Complexity

- **O(1)**

## Using Map

- stored all values of array in map in form of value:index
- find difference between current element of iteration and target
  - if targetElement found in map and both index not same(For avoid same/duplicate answer) then return ans

```js
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
```

### Time Complexity

- O(N) + O(N) = O(2N) = O(N)

### Space Complexity

- O(N)

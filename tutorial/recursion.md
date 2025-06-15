# Recursion

> Function call itself to solve small version of the same problem

## Parts of recursion

1. **Base Case** -> stop condition (when to stop calling itself)
2. **Recursing Case** -> Part where function calls itself

## Real Time example

1. Queue of people -> count people
2. Comment thread
3. Org. structure

## example

```js
function print(num){
    if(num==0) return;
    console.log(num)
    print(---num)
}
print(5)
```

```js
let n = 5;
function print2(x) {
  if (x > n) return;
  console.log(x);
  print2(++x);
}
print2(1);
```

## Stack overflow

> Infinite recursion leads to stack overflow

- In above example run in browser by commenting condition it will give `Maximum call stack size exceeded`

## Common mistake

- Missing Base Case -> stack overflow
- Not simplifying input -> never reach base case
- Too many deep recursion -> large input
- Keeping in mind Time complexity O(N)

## When to use

- Problem can be broken into sub problem
- Tree and Graphs
- Backtracking, DP, Divide and Conquer

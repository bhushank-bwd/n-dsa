function nextGreaterElement(num1, num2) {
  let ngeMap = {};
  let stack = [];
  let len2 = num2.length;
  ngeMap[num2[len2 - 1]] = -1;
  stack.push(num2[len2 - 1]);
  for (let i = len2 - 2; i >= 0; i--) {
    while (stack.length) {
      if (stack[stack.length - 1] < num2[i]) {
        stack.pop();
      } else {
        ngeMap[num2[i]] = stack[stack.length - 1];
        break;
      }
    }
    if (stack.length === 0) {
      ngeMap[num2[i]] = -1;
    }
    stack.push(num2[i]);
  }
  return num1.map((x) => ngeMap[x]);
}

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

function nextWarmerDay(num) {
  let len = num.length;
  let stack = [];
  let ans = Array(len).fill(0);
  stack.push(len - 1);
  for (let i = len - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (num[top] <= num[i]) {
        stack.pop();
      } else {
        ans[i] = top - i;
        break;
      }
    }
    if (stack.length === 0) {
      ans[i] = 0;
    }
    stack.push(i);
  }
  return ans;
}
// console.log(nextWarmerDay([73, 74, 75, 71, 71, 69, 72, 76, 73]));
function nextGreaterElementCircular(num) {
  let stack = [];
  num = [...num, ...num];
  let len = num.length;
  let ans = Array(len).fill(-1);
  stack.push(num[len - 1]);
  for (let i = len - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (num[i] >= top) {
        stack.pop();
      } else {
        ans[i] = top;
        break;
      }
    }
    stack.push(num[i]);
  }
  return ans.slice(0, len / 2);
}
console.log(nextGreaterElementCircular([1, 3, 4, 2, 5]));
function nextGreaterElementCircular2(num) {
  let stack = [];
  let len = num.length;
  let ans = Array(len).fill(-1);
  stack.push(num[len - 1]);
  for (let i = 2 * len - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (num[i % len] >= top) {
        stack.pop();
      } else {
        ans[i % len] = top;
        break;
      }
    }
    stack.push(num[i % len]);
  }
  return ans.slice(0, len);
}
console.log(nextGreaterElementCircular2([1, 3, 4, 2, 5]));

function removeOuterParentheses(s) {
  let stack = [];
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(s[i]);
      if (stack.length > 1) {
        ans = ans + s[i];
      }
    } else {
      if (stack.length > 1) {
        ans = ans + s[i];
      }
      stack.pop();
    }
  }
  return ans;
}
function removeOuterParentheses1(s) {
  let level = 0;
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      ++level;
      ans += level > 1 ? s[i] : "";
    } else {
      ans += level > 1 ? s[i] : "";
      --level;
    }
  }
  return ans;
}
console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("()()"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses1("(()())(())"));
console.log(removeOuterParentheses1("()()"));
console.log(removeOuterParentheses1("(()())(())(()(()))"));

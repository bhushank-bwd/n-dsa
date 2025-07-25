function isParenthesis(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (
        !top ||
        (top == "{" && s[i] != "}") ||
        (top == "[" && s[i] != "]") ||
        (top == "(" && s[i] != ")")
      ) {
        return false;
      }
    }
  }
  return stack.length == 0;
}
function isParenthesis2(s) {
  let stack = [];
  let map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (!top || map[top] != s[i]) {
        return false;
      }
    }
  }
  return stack.length == 0;
}
console.log(isParenthesis("([{}]{[]})"), isParenthesis("([{}]{[]})]"));
console.log(isParenthesis2("([{}]{[]})"), isParenthesis2("([{}]{[]})]"));

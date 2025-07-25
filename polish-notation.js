function polishNotation(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+" || arr[i] === "-" || arr[i] === "/" || arr[i] === "*") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(Math.trunc(eval(`${b}  ${arr[i]}  ${a}`)));
    } else {
      stack.push(arr[i]);
    }
  }
  return parseInt(stack.pop());
}
console.log(
  polishNotation([10, 6, 9, 3, "+", -11, "*", "/", "*", 17, "+", 5, "+"])
);
console.log(polishNotation([10, 6, -9, "-", 3, "+", "*"]));

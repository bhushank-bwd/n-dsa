var MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (x) {
  if (this.stack.length === 0) this.stack.push([x, x]);
  else {
    let lastMinVal = this.stack[this.stack.length - 1][1];
    let minVal = Math.min(x, lastMinVal);
    this.stack.push([x, minVal]);
  }
};
MinStack.prototype.pop = function () {
  this.stack.pop();
};
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1][0];
};
MinStack.prototype.min = function () {
  return this.stack[this.stack.length - 1][1];
};
let ms = new MinStack();
ms.push(3);
ms.push(5);
ms.push(2);
ms.push(7);
ms.push(1);
console.log(ms.stack, "min", ms.min(), "top", ms.top());
ms.push(0);
console.log(ms.stack, "min", ms.min(), "top", ms.top());
ms.pop();
console.log(ms.stack, "min", ms.min(), "top", ms.top());
ms.pop();
console.log(ms.stack, "min", ms.min(), "top", ms.top());

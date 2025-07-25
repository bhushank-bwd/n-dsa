class MyQueue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
}
MyQueue.prototype.push = function (element) {
  this.s1.push(element);
};
MyQueue.prototype.pop = function () {
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2.pop();
};
MyQueue.prototype.peek = function () {
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2[this.s2.length - 1];
};
MyQueue.prototype.isEmpty = function () {
  return this.s1.length == 0 && this.s2.length == 0;
};
let q = new MyQueue();
q.push(1);
q.push(2);
q.push(3);
console.log(q.pop());
console.log(q.peek());
q.push(4);
console.log(q.peek());
console.log(q.pop());
console.log(q.isEmpty());
console.log(q.pop());
console.log(q.pop());
console.log(q.isEmpty());

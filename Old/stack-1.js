class MyStack {
  constructor() {
    this.q = [];
  }
}
MyStack.prototype.push = function (element) {
  this.q.push(element);
};
MyStack.prototype.pop = function () {
  let n = this.q.length;
  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift());
  }
  return this.q.shift();
};
MyStack.prototype.top = function () {
  let n = this.q.length;
  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift());
  }
  let front = this.q[0];
  this.q.push(this.q.shift());
  return front;
};
MyStack.prototype.isEmpty = function () {
  return this.q.length == 0;
};
let s = new MyStack();
s.push(1);
s.push(2);
let t1 = s.top();
console.log(t1);
let p1 = s.pop();
console.log(p1);
console.log(s.isEmpty());
let p2 = s.pop();
console.log(p2);
console.log(s.isEmpty());

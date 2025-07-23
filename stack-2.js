class MyStack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
}
MyStack.prototype.push = function (element) {
  this.q1.push(element);
};
MyStack.prototype.pop = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let ans = this.q1.shift();
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return ans;
};
MyStack.prototype.top = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let front = this.q1[0];
  this.q2.push(this.q1.shift());
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return front;
};
MyStack.prototype.isEmpty = function () {
  return this.q1.length == 0;
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

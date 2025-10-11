function Node(value) {
  this.value = value;
  this.next = null;
}
function MyLinkedList() {
  this.head = null;
  this.size = 0;
}
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  if (index == 0) {
    this.addAtHead(val);
    return;
  } else if (index == this.size) {
    this.addAtTail(val);
    return;
  } else {
    let newNode = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
  }
};

MyLinkedList.prototype.getAtIndex = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) curr = curr.next;
  return curr.value;
};
MyLinkedList.prototype.getNodeAtIndex = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) curr = curr.next;
  return curr;
};
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) this.head = this.head.next;
  else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) curr = curr.next;
    curr.next = curr.next.next;
  }
  this.size--;
};

MyLinkedList.prototype.findMiddle = function () {
  let fast = this.head;
  let slow = this.head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
MyLinkedList.prototype.reverseLinkList = function () {
  let prev = null;
  let curr = this.head;
  while (curr) {
    let temp = curr.next; // take backup of next as link list will broke
    curr.next = prev;
    prev = curr;
    curr = temp; // keep for next iteration if not null
  }
  this.head = prev;
  //   return prev; // as prev becomes head after all iteration
};

MyLinkedList.prototype.isCycle = function () {
  let seenNode = new Set();
  let curr = this.head;
  while (curr != null) {
    if (seenNode.has(curr)) {
      return true;
    }
    seenNode.add(curr);
    curr = curr.next;
  }
  return false;
};

let ll = new MyLinkedList();
ll.addAtIndex(0, 1);
ll.addAtIndex(1, 10);
ll.addAtIndex(2, 20);
ll.addAtIndex(3, 30);
ll.addAtIndex(4, 40);
ll.addAtIndex(5, 50);

let secondNode = ll.getNodeAtIndex(2);
let lastNode = ll.getNodeAtIndex(ll.size - 1);
lastNode.next = secondNode;

let ll2 = new MyLinkedList();
ll2.addAtIndex(0, 1);
ll2.addAtIndex(1, 10);
ll2.addAtIndex(2, 20);
ll2.addAtIndex(3, 30);
ll2.addAtIndex(4, 40);
ll2.addAtIndex(5, 50);

MyLinkedList.prototype.floydCycle = function () {
  if (!this.head) return false;
  let slow = this.head;
  let fast = this.head.next; // taken next because in very first iteration while loop should not break;
  while (fast != slow) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
let ll3 = new MyLinkedList();
console.log(
  ll.isCycle(),
  ll2.isCycle(),
  ll3.isCycle(),
  ll.floydCycle(),
  ll2.floydCycle(),
  ll3.floydCycle()
);

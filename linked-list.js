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

let ll = new MyLinkedList();
ll.addAtHead(15);
ll.addAtTail(25);
ll.addAtTail(45);
ll.addAtIndex(2, 35);
console.log(
  ll.getAtIndex(0),
  ll.getAtIndex(1),
  ll.getAtIndex(2),
  ll.getAtIndex(3),
  ll.getAtIndex(4)
);
console.log(ll);

// console.log(ll.getAtIndex(2), ll.size);
// ll.deleteAtIndex(2);
// console.log(ll.getAtIndex(2), ll.size);

// console.log(ll.findMiddle());
// console.log(ll);

ll.reverseLinkList();
// console.log(ll);

console.log(
  ll.getAtIndex(0),
  ll.getAtIndex(1),
  ll.getAtIndex(2),
  ll.getAtIndex(3),
  ll.getAtIndex(4)
);

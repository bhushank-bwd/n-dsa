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
MyLinkedList.prototype.isPalindrome = function () {
  let slow = this.head;
  let fast = this.head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  let firstHalf = this.head;
  let secondHalf = prev;
  while (secondHalf) {
    if (firstHalf.value != secondHalf.value) {
      return false;
    }
    secondHalf = secondHalf.next;
    firstHalf = firstHalf.next;
  }
  return true;
};

let ll1 = new MyLinkedList();
ll1.addAtHead(1);

let ll2 = new MyLinkedList();
ll2.addAtHead(1);
ll2.addAtIndex(1, 2);
ll2.addAtIndex(2, 1);

let ll3 = new MyLinkedList();
ll3.addAtHead(1);
ll3.addAtIndex(1, 2);
ll3.addAtIndex(2, 2);
ll3.addAtIndex(3, 1);

let ll4 = new MyLinkedList();
ll4.addAtHead(1);
ll4.addAtIndex(1, 2);
ll4.addAtIndex(2, 2);
ll4.addAtIndex(3, 3);

let ll5 = new MyLinkedList();
ll5.addAtHead(1);
ll5.addAtIndex(1, 2);
console.log(
  ll1.isPalindrome(),
  ll2.isPalindrome(),
  ll3.isPalindrome(),
  ll4.isPalindrome(),
  ll5.isPalindrome()
);

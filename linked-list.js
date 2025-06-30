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
let linkedList = new MyLinkedList();
linkedList.addAtHead(15);

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
linkedList.addAtTail(25);
linkedList.addAtTail(45);
linkedList.addAtIndex(2, 35);
console.log(linkedList.getAtIndex(0));
console.log(linkedList.getAtIndex(1));
console.log(linkedList.getAtIndex(2));
console.log(linkedList.getAtIndex(3));
console.log(linkedList.getAtIndex(4));
console.log(linkedList);

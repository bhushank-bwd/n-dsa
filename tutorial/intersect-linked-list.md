# Intersect Linked List

> Find intersect point

## Example

- (headA of M length) a1->a2->c1->c2-c3
- (headB of N length) b1->b2->b3->c1->c2->c3

## First Approach - Brute Force

- check a1 exist in headB
- check a2 exist in headB
- check c1 exist in headB
  - if yes return c1 as intersect point/node

### Time complexity

- O(M\*N) = similar to O(N<sup>2</sup>)

### Space complexity

- O(1)

## Second Approach - use HasH Map

- use set in javascript
- put all element of headB into set => O(N)
- check a1 in set until headA is null, return if found O(1)

### Time complexity

- O(N)

### Code

```js
let intersectLL1 = new MyLinkedList();
let intersectLL2 = new MyLinkedList();
let intersectLL3 = new MyLinkedList();

intersectLL1.addAtHead("a1");
intersectLL1.addAtIndex(1, "a2");

intersectLL2.addAtHead("c1");
intersectLL2.addAtIndex(1, "c2");
intersectLL2.addAtIndex(2, "c3");

intersectLL3.addAtHead("b1");
intersectLL3.addAtIndex(1, "b2");
intersectLL3.addAtIndex(2, "b3");

intersectLL3.getNodeAtIndex(intersectLL3.size - 1).next =
  intersectLL2.getNodeAtIndex(0);
intersectLL1.getNodeAtIndex(intersectLL1.size - 1).next =
  intersectLL2.getNodeAtIndex(0);

var isIntersect = function (headA, headB) {
  let store = new Set();
  while (headB) {
    store.add(headB);
    headB = headB.next;
  }

  while (headA) {
    if (store.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }
  console.log("hello");
  return null;
};
console.log(
  intersectLL1,
  intersectLL2,
  intersectLL3,
  isIntersect(intersectLL1.head, intersectLL3.head)
);
```

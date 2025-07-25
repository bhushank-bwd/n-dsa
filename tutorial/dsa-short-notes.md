# Stack

## MinStack with O(1) Time Complexity

- **Push** -> while pushing keep min value track of comparing current element and last element and push([currentElement,minVal])
- pop is normal; top = lastElement[0]; min = lastElement[1]

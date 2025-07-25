# Stack

## MinStack with O(1) Time Complexity

- **Push** -> while pushing keep min value track of comparing current element and last element and push([currentElement,minVal])
- pop is normal; top = lastElement[0]; min = lastElement[1]

## Remove Outer most parentheses

- Mark level of nesting
- remove 0(index-0 length-1) level nesting
- in loop push for `(` and pop for `)`
- meanwhile `before popping` element and `after pushing` element put char in ans if `length > 1`

## Remove Outer most parentheses without stack

- in loop increase level(++) for `(` and decrease level(--) for `)`
- meanwhile `before decrease` element and `after increase` element put char in ans if `level > 1`

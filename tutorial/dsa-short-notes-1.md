## Two Sum

1. map with value:index
2. find difference between current element and target exists in map but i!=difference.index

## Two Sum with sorted Array

1. two index start and end
2. while start < end
   1. sum of both index element
      1. sum greater than target then decrease end
      2. else sum lesser then increase start
      3. return both index

## Is Subsequence of another string

- `adg`, `abdfgn` :white_check_mark:
- `agd`, `abdfgn` :x:

- i and j with o
- while j < t.length
  - if s ith element == t's jth element
    - increase i
  - increase j
- return i == s.length

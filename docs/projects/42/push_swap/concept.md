---
sidebar_position: 3
---

# CHEAP-SORT - The Concept

Move all numbers but 3 to **B**, map numbers to **A**, move the cheapest first.

### push all but 3 to b

The idea is to move all numbers but 3 to the "b stack" .  
![move all but 3](./img/push_all_but_3.png)

### tiny sort

Sort the remaining 3 numbers in the "a stack".  
(_maximum 2 instructions are needed_)  
![tiny sort](./img/push_sort_3.png)

### map and move cheapest

- **mapping:**
  1. every number in the B stack is mapped (_paired_) with the next bigger number in A  
     (_e.g. B -66 => A -22, B 45 => 65, ..._)
  2. if there is no bigger number in A, then the number is mapped with the smallest  
     (_e.g. B 99 => A -22, B 78 => -22, ..._)

![map numbers](./img/push_map.png)

- **move cheapest:**
  1. the cost for moving both pairs to the top is calculated for each number in B (_meta data 'cost'_)  
     (_e.g. if it cost 3 instructions to bring the num in B and 2 to bring its pair in A up to the top, then the total cost is 3, because we can move both at the same time for two moves_)
  2. the cheapest number is then moved back to A, after each push all meta values are recalculated

### rotate to start

After all numbers are back in A, we may need to rotate the lowest number to the top.

---

## Meta Data

On the screen shot below you can see a `printf` of the meta data which I assigned to each number (_node_). I used a lot of this information during development to test the actual values and to fine tune the algorithm.  
![meta data](./img/meta_data.png)  
After moving a number to the "a stack" all the data needs to be updated again. Note: the meta data of that numbers in the A are not updated because they don't need to be moved any more.
![meta explain](./img/push_meta_explain.png)

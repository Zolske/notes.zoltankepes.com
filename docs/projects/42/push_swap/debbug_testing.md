---
sidebar_position: 5
---

# Debugging and Testing

How I tested and debugged my code.

## test if instruction are really sorting the numbers

- use the command to count how many commands (_lines_) are used by your program:  
   `ARG="2 -5 78 45 22 -66 99 65 0 -22"; ./push_swap $ARG | wc -l`
- use the "checker_linux" to confirm that the numbers have really been sorted:  
  `ARG="2 -5 78 45 22 -66 99 65 0 -22"; ./push_swap $ARG | ./checker_linux $ARG`

## download a tester

- I used the **[push_swap_tester](https://github.com/LeoFu9487/push_swap_tester?tab=readme-ov-file#debug)** from yfu from 42LYON for testing
- it also contains a debugger to visualize how your numbers are moving

## write printf() functions to check what is going on

- used a lot of printf() statements to see if the meta data was correct and what was going on.

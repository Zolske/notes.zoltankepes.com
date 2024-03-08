---
sidebar_position: 3
---

# Implementation

source: [gitHub repository](https://github.com/Zolske/42_projects/tree/main/03_cursus/push_swap)

## program entry (main) - push_swap.c

```c showLineNumbers
int	main(int argc, char **argv)
{
	t_node	*head_a;								// pointer for linked list

	head_a = NULL;
	if (argc == 1)									// end if no args
		return (0);
	else
		list_from_parameter(argc, argv, &head_a);	// convert to int, error check
	add_goal_list(&head_a);							// make finale index, goal
	cheap_sort(&head_a);							// sort num, print instructions
	free_node(&head_a);								// free allocated memory
	return (0);
}
```

<details>
	<summary>code explanation</summary>
	<ul>
		<li><b>line 3-5:</b> I declare and initialize a pointer of type <code>t_node</code> with the identifier <code>head_a</code>,<br></br>
		it will point later to a "<b>Doubly Linked List</b>" representing the "<b>stack A</b>" (<i>see <a href="https://github.com/Zolske/42_projects/blob/main/03_cursus/push_swap/push_swap.h" target="_blank"><code>push_swap.h</code></a> for structure explanation</i>).<br></br>
		This allows me to easily rotate the stuck by changing to which node the "head" is pointing to and to add "meta data" to each node (<i>number</i>).
		</li>
		<li><b>line 6-7:</b> If there are no arguments then end the program (<i><code>1</code> counts only the name of the program</i>) .</li>
		<li><b>line 9:</b> <a href="https://github.com/Zolske/42_projects/blob/main/03_cursus/push_swap/push_swap.c" target="_blank"><code>list_from_parameter()</code></a> Convert the arguments to integers and crates a linked list to which the pointer <code>head_a</code> is pointing to. While doing that, I also perform error checking (<i>no doubles, must be int, only numeric input</i>).</li>
		<li><b>line 10:</b> <a href="https://github.com/Zolske/42_projects/blob/main/03_cursus/push_swap/push_swap.c" target="_blank"><code>add_goal_list()</code></a> create an array from the input values, sorts it ascending and marks the nodes in <code>head_a</code> with the index of there final position (<i>the goal of the sorting</i>).</li>
		<li><b>line 11:</b> <a href="https://github.com/Zolske/42_projects/blob/main/03_cursus/push_swap/push_swap.c" target="_blank"><code>cheap_sort()</code></a> contains the algorithm to sort the numbers and print the instructions.</li>
	</ul>
</details>

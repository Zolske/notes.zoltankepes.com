# fprime

<details>
  <summary>Subject</summary>

### Subject

     Assignment name  : fprime
     Expected files   : fprime.c
     Allowed functions: printf, atoi
     --------------------------------------------------------------------------------

     Write a program that takes a positive int and displays its prime factors on the
     standard output, followed by a newline.

     Factors must be displayed in ascending order and separated by '\*', so that
     the expression in the output gives the right result.

     If the number of parameters is not 1, simply display a newline.

     The input, when there is one, will be valid.

     Examples:

     $> ./fprime 225225 | cat -e
        3*3*5*5*7*11*13$
     $> ./fprime 8333325 | cat -e
        3*3*5*5*7*11*13*37$
     $> ./fprime 9539 | cat -e
        9539$
     $> ./fprime 804577 | cat -e
        804577$
     $> ./fprime 42 | cat -e
        2*3*7$
     $> ./fprime 1 | cat -e
        1$
     $> ./fprime | cat -e
     $
     $> ./fprime 42 21 | cat -e
     $

</details>

```c showLineNumbers
#include <stdio.h>
#include <stdlib.h>

int	main(int argc, char *argv[])
{
	int	i;
	int	number;

	if (argc == 2)
	{
		i = 1;
		number = atoi(argv[1]);
		if (number == 1)
			printf("1");
		while (number >= ++i)
		{
			if (number % i == 0)
			{
				printf("%d", i);
				if (number == i)
					break ;
				printf("*");
				number /= i;
				i = 1;
			}
		}
	}
	printf("\n");
	return (0);
}
```

<details>
  <summary>Code Explanation</summary>

### Code Explanation

- **line 15:** as long `number` is bigger then `i`, NOTE: every time we find a number which we can use to multiply, we reduce `number` by the same number, `i` increments if we can not find a number to multiply with.
- **line 17:** to find a number we can multiply with, we check if there is a remainder if we get the modulus with the `number`
- **line 20:** `number` is equal to the increment `i` then we can end the loop
- **line 22-24:** print '\*', divide the `number` with the incrementor, set `i` to 0

</details>

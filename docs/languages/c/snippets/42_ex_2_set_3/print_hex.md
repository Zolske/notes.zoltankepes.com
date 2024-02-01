# print_hex

<details>
  <summary>Subject</summary>

### Subject

    Assignment name  : print_hex
    Expected files   : print_hex.c
    Allowed functions: write
    --------------------------------------------------------------------------------

    Write a program that takes a positive (or zero) number expressed in base 10,
    and displays it in base 16 (lowercase letters) followed by a newline.

    If the number of parameters is not 1, the program displays a newline.

    Examples:

    $> ./print_hex "10" | cat -e
    a$
    $> ./print_hex "255" | cat -e
    ff$
    $> ./print_hex "5156454" | cat -e
    4eae66$
    $> ./print_hex | cat -e
    $

</details>

```c showLineNumbers
#include <unistd.h>

int	ft_atoi(char *str)
{
	int n = 0;

	while (*str != '\0')
	{
		n = n * 10;
		n = n + *str - '0';
		++str;
	}
	return (n);
}

void	print_hex(int n)
{
	char hex_digits[] = "0123456789abcdef";

	if (n >= 16)
		print_hex(n / 16);
	write(1, &hex_digits[n % 16], 1);
}

int	main(int argc, char **argv)
{
	if (argc == 2)
		print_hex(ft_atoi(argv[1]));
	write(1, "\n", 1);
}
```

<details>
  <summary>Code Explanation</summary>

### Code Explanation

- **line 20-21:** if `n >= 16` , then we call our function recursively but only a 16th of its original value -> the function (_with its unchanged value of n_) waits for the recursive function to resolve, which then itself waits if it can not pass the condition on line 20 -> till we get to the point where one function with its smaller value `n` will pass the condition. It then completes the function to the end, after that the previous function continues.
- **line 22:** the character of the of the array is chosen by the index which comes from the reminder of `16`. NOTE: if `n` is smaller then 16 then it stays unchanged.

</details>

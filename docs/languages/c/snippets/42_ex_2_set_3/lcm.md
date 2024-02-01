# lcm

<details>
  <summary>Subject</summary>

### Subject

    Assignment name  : lcm
    Expected files   : lcm.c
    Allowed functions:
    --------------------------------------------------------------------------------

    Write a function who takes two unsigned int as parameters and returns the
    computed LCM of those parameters.

    LCM (Lowest Common Multiple) of two non-zero integers is the smallest postive
    integer divisible by the both integers.

    A LCM can be calculated in two ways:

    - You can calculate every multiples of each integers until you have a common
    multiple other than 0

    - You can use the HCF (Highest Common Factor) of these two integers and
    calculate as follows:

    	LCM(x, y) = | x * y | / HCF(x, y)

      | x * y | means "Absolute value of the product of x by y"

    If at least one integer is null, LCM is equal to 0.

    Your function must be prototyped as follows:

      unsigned int    lcm(unsigned int a, unsigned int b);

</details>

```c showLineNumbers
unsigned int lcm(unsigned int a, unsigned int b)
{
	unsigned int n;

	if (a == 0 || b == 0)
		return (0);
	if (a > b)
		n = a;
	else
		n = b;
	while (1)
	{
		if (n % a == 0 && n % b == 0)
			return (n);
		++n;
	}
}
```

<details>
  <summary>Code Explanation</summary>

The lowest common multiple is the lowest multiple shared by two or more numbers. For example, common multiples of 4 and 6 are 12, 24 and 36, but the lowest of those is 12; therefore, the lowest common multiple of 4 and 6 is 12.

### Code Explanation

- **line 5-6:** -> if one of the arguments is `0`, end function and return `0`
- **line 7-8:** -> assign the higher of the two arguments to the variable `n` (_just to make the loop shorter_)
- **line 11-16:** loop runs till `n` can be divided by both arguments without rest.

</details>

# is_power_of_2

The function returns `1` if the argument is a "number to power of 2" otherwise `0` is returned. See [geeksforgeeks](https://www.geeksforgeeks.org/program-to-find-whether-a-given-number-is-power-of-2/)

<details>
<summary>Subject</summary>

### Subject

    Assignment name  : is_power_of_2
    Expected files   : is_power_of_2.c
    Allowed functions: None
    --------------------------------------------------------------------------------

    Write a function that determines if a given number is a power of 2.

    This function returns 1 if the given number is a power of 2, otherwise it returns 0.

    Your function must be declared as follows:

    int	    is_power_of_2(unsigned int n);

</details>

```c showLineNumbers
int is_power_of_2(unsigned int n)
{
    if (n == 0)
        return 0;
    while (n != 1)
    {
        if (n % 2 != 0)     // if num is odd
            return (0);
        n /= 2;
    }
    return (1);
}
```

:::tip How to find out if a number is a "power of 2"
Keep dividing the number by two, e.g., do `n = n/2` iteratively.  
In any iteration, if `n%2` becomes **non-zero** and `n` **is not 1** then `n` is **not a power of 2**.  
If `n` becomes 1 (_trough dividing it by 2_) then **it is a power of 2**.
:::

<details>
<summary>Code Explanation</summary>

### Code Explanation

As you can see in the table below, the "power of 2 sequence" starts with 1, we go all the way back and then check if we have 1 left.  
To make the loop shorter and to prevent that an odd number becomes even after dividing it by 2 (_int 5 / 2 = 2_) we check first if the number is odd (_odd numbers, apart of 1, can not be a product of power by 2_).

#### Key Concepts

- **Power of 2:** A number that can be expressed as 2 raised to some exponent. E.g., 2^0 = 1, 2^1 = 2, 2^2 = 4, and so on.

- **Modulo Operator (%):** The modulo operator returns the remainder of a division operation. E.g., 5 % 2 = 1, as 5 divided by 2 leaves a remainder of 1.

#### Code Structure

- **line 3:** It first checks if `n` is equal to 0. If it is, the function immediately returns `0`, as 0 is not a "power of 2".
- **line 5:** If `n` is not equal to 0, the function enters a while loop.
- **line 7:** Inside the while loop, the function checks if `n` is divisible by 2 without leaving a remainder (i.e., n % 2 == 0). If it is not, the function returns `0`, as `n` is not a "power of 2".
- **line 9:** If `n` is divisible by 2, the function divides `n` by 2 (i.e., n /= 2) and continues the loop until `n` becomes `1`.

- **line 5:** Once `n` becomes 1, the function exits the loop and returns `1`, indicating that the input number is a "power of 2".

| 1-10        | 11-20          |
| :---------- | :------------- |
| 2^1 = 2     | 2^11 = 2048    |
| 2^2 = 4     | 2^12 = 4096    |
| 2^3 = 8     | 2^13 = 8192    |
| 2^4 = 16    | 2^14 = 16384   |
| 2^5 = 32    | 2^15 = 32768   |
| 2^6 = 64    | 2^16 = 65536   |
| 2^7 = 128   | 2^17 = 131072  |
| 2^8 = 256   | 2^18 = 262144  |
| 2^9 = 512   | 2^19 = 524288  |
| 2^10 = 1024 | 2^20 = 1048576 |

</details>

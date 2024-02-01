# ft_atoi_base

<details>
  <summary>Subject</summary>

### Subject

     Assignment name  : ft_atoi_base
     Expected files   : ft_atoi_base.c
     Allowed functions: None
     --------------------------------------------------------------------------------

     Write a function that converts the string argument str (base N <= 16)
     to an integer (base 10) and returns it.

     The characters recognized in the input are: 0123456789abcdef
     Those are, of course, to be trimmed according to the requested base. For
     example, base 4 recognizes "0123" and base 16 recognizes "0123456789abcdef".

     Uppercase letters must also be recognized: "12fdb3" is the same as "12FDB3".

     Minus signs ('-') are interpreted only if they are the first character of the
     string.

     Your function must be declared as follows:

     int	ft_atoi_base(const char *str, int str_base);

</details>

```c showLineNumbers
char to_lower(char c)
{
    if (c >= 'A' && c <= 'Z')
        return (c + ('a' - 'A'));
    return (c);
}

int get_digit(char c)
{
    if (c >= '0' && c <= '9')
        return (c - '0');
    else if (c >= 'a' && c <= 'f')
        return (10 + c - 'a');
    else
        return (-1);
}

int ft_atoi_base(const char *str, int str_base)
{
    int result = 0;
    int sign = 1;
    int digit;

    if (*str == '-')
    {
        sign = -1;
        ++str;
    }

    while ((digit = get_digit(to_lower(*str)) >= 0))
    {
        result *= str_base;
        result += digit * sign;
        ++str;
    }
    return (result);
}
```

<details>
  <summary>Code Explanation</summary>

### Code Explanation

Works the same as "atoi", with a few differences

- `get_digit()` -> translates the character based of its range
  - if in range -> `c >= '0' && c <= '9'` -> subtract '0' (48) from the character to get the corresponding ascii value ('4' (52) - '0' (48) = 4)
  - if in range -> `c >= 'a' && c <= 'f'` -> subtract 'a' from the character to get the difference as a value (e.g. 'f' (102) - 'a' (97) = 5) and add 10 to it (15)
  - if the character is not within any of the ranges, then it is most likely the null-terminator which will cause the function to return -1, which then ends the loop
- **line 32:** multiples the result with the base so the next value can be added on the next line  
  e.g., 0 \* 10 = 0 -_next line_-> 0 + 4 = 4 -_next iteration_-> 4 \* 10 = 40 -_next line_-> 40 + 2 = 42
- **line 33:** add digit to result, the number is negatives, then all numbers need to be added as negatives

</details>

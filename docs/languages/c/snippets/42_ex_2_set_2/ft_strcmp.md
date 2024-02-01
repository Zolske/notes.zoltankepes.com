# ft_strcmp

Reproduce the behavior of the function `strcmp` ([MAN strcmp](https://man7.org/linux/man-pages/man3/strcmp.3.html)).  
Compares two strings till one of the strings characters is unequal to the other. The difference of the ASCII value is then returned.

- 0, if the `s1` and `s2` are equal;
- a negative value if `s1` is less than `s2`;
- a positive value if `s1` is greater than `s2`.

NOTE: The original `strcmp` function would return `64` while `./ft_strcmp $'\201' A` returns `-193`.

<details>
<summary>Subject</summary>

### Subject

    Assignment name  : ft_strcmp
    Expected files   : ft_strcmp.c
    Allowed functions:
    --------------------------------------------------------------------------------

    Reproduce the behavior of the function strcmp (man strcmp).

    Your function must be declared as follows:

    int    ft_strcmp(char *s1, char *s2);

</details>

```c showLineNumbers
int ft_strcmp(char *s1, char *s2)
{
    int i = 0;

    while (s1[i] != '\0' && s2[i] != '\0' && s1[i] == s2[i])
        i++;
    return (s1[i] - s2[i]);
}
```

<details>
<summary>Code Explanation</summary>

### Key Concepts

- **Strings in C:** In C, strings are represented as arrays of characters. Each character in the string is stored in consecutive memory locations, terminated by a null character (`'\0'`).

- **String Comparison:** String comparison involves comparing the characters of two strings to determine their relative order. The comparison is done character by character until a difference is found or one of the strings ends.

### Code Explanation

The function `ft_strcmp` is defined with the "return type `int`" and takes two parameters: `s1` and `s2`, which are pointers to the strings to be compared.

- **line 3:** An integer variable `i` is initialized to 0. This variable will be used to iterate through the characters of the strings.

- **line 5:** The while loop is used to compare the characters of `s1` and `s2` until one of the following conditions is met:

  - The current characters being compared are not equal.
  - The end of either string is reached (indicated by the null character `'\0'`).
    - `s1[i] != '\0'` ensures that we have not reached the end of `s1`.
    - `s2[i] != '\0'` ensures that we have not reached the end of `s2`.
    - `s1[i] == s2[i]` checks if the current characters being compared are equal.

- **line 7:** `s1[i] - s2[i]`
  - If the loop terminates without encountering any differences, it means that both strings are equal. In this case, the function will return 0.
  - If the loop terminates due to a difference in characters or one of the strings ending, the function will return the difference between the ASCII values of the differing characters.

</details>

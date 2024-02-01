# ft_strpbrk

The function returns a pointer to the first character in the string `s1` that matches any character specified in `s2` (_excludes terminating null-characters_). If no characters match NULL is returned. See [MAN pages](https://linux.die.net/man/3/strpbrk), [geeksforgeeks](https://www.geeksforgeeks.org/strpbrk-in-c/).

<details>
<summary>Subject</summary>

### Subject

    Assignment name  : ft_strpbrk
    Expected files   : ft_strpbrk.c
    Allowed functions: None
    ---------------------------------------------------------------

    Reproduce exactly the behavior of the function strpbrk
    (man strpbrk).

    The function should be prototyped as follows:

    char *ft_strpbrk(const char *s1, const char *s2);

</details>

```c showLineNumbers
char *ft_strpbrk(const char *s1, const char *s2)
{
    int i = 0;

    if (!s1 || !s2)     // if one of the strings is empty
        return (0);

    // highlight-start
    while (*s1)
    // highlight-end
    {
        while (s2[i])
            // highlight-start
            if (*s1 == s2[i++])
                return ((char *)s1);
            // highlight-end
        i = 0;
        // highlight-start
        s1++;
        // highlight-end
    }
    return (0);         // pointer context: 0 -> NULL
}
```

:::tip
In the **context of an pointer** the following are equal:

```c
if (!pointer)        // shorter
if (pointer == NULL) // more readable
if (pointer == 0)
```

`NULL` is a macro which requires the `stddef.h` library. [stack overflow](https://stackoverflow.com/questions/1296843/what-is-the-difference-between-null-0-and-0)
:::

<details>
<summary>Code Explanation</summary>

### Code Explanation

#### Key Concept

- **Pointer Arithmetic:** A pointer points to the first address of the variable (_target_). Through arithmetic we can move this pointer to the next address in memory. If we have a pointer to a character (`char *`), then we move to the next character. This saves us from declaring an extra variable, but it would be tricky to get back to the beginning if we would need to.

#### Code Structure

- **line 5-6:** if one of the strings is empty then the function ends and returns `NULL` (0).
- **line 8:** **outer loop**, the 1st element of the string `s1` is dereferenced (`*`), as long it is not the `NULL` terminator ('\0') the loop runs.
- **line 10:** **inner loop**, loops the string `s2` till it reaches the `NULL` terminator ('\0'), the purpose is to check wether any of its characters match the current `s1` character.
- **line 11:** the string `s1` is dereference at its first position and compared to the current position of `s2`
- **line 12:** the address of where the match happened is returned which ends the function.  
   NOTE: the pointer needs to be casted (`(char *)`) to a pointer of char because the original is a const char pointer.
- **line 13:** reset `i` to 0, so we can start the loop for `s2` again (_to check all characters_)
- **line 14:** because we are using pointer arithmetic, we need to increment the "**first position**" to where the pointer `s1` is pointing `s1++`.
- **line 16:** because the return type is a pointer `char *ft_strpbrk()`, `0` is interpreted as `NULL` when returned!

</details>

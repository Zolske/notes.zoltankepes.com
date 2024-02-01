# ft_strspn

The characters of the first argument are matched with the ones of the second argument. As long there is a match the counter is increased for every character. The function returns how many characters of the first string could be **initialy** matched before no match could be found (_not counting matches after_).  
E.g. `size_t	ft_strspn("HelloWorld", "Helxxxxorl")` -> `5` `W` could not be matched any more, the ones after don't count. See [MAN pages](https://linux.die.net/man/3/strspn), [tutorialspoint](https://www.tutorialspoint.com/c_standard_library/c_function_strspn.htm).

<details>
<summary>Subject</summary>

### Subject

    Assignment name	 : ft_strspn
    Expected files	 : ft_strspn.c
    Allowed functions: None
    ---------------------------------------------------------------

    Reproduce exactly the behavior of the strspn function
    (man strspn).

    The function should be prototyped as follows:

    size_t	ft_strspn(const char *s, const char *accept);

</details>

```c showLineNumbers
#include <stdlib.h>         // for size_t
#include <stdbool.h>        // for boolean

size_t ft_strspn(const char *s, const char *accept)
{
    int i = 0;
    size_t count = 0;
    bool not_found = true;

    while (*s)
    {
        while (accept[i])
            if (*s == accept[i++])
                not_found = false;
        if (not_found)
            return (count);
        not_found = true;
        count++;
        i = 0;
        s++;
    }
    return (count);
}
```

<details>
<summary>Code Explanation</summary>

### Code Explanation

- **line 3:** `i` to iterate through `accept`,
- **line 4:** `count` to keep track of the matching characters
- **line 5:** `not_found` to track if a match is found.
- **line 7:** outer while loop that iterates through each character in `s`.
- **line 9:** inner while loop, start another while loop that iterates through each character in `accept`.
- **line 10:** Compare the current character in `s` with the current character in `accept`. If a match is found, set `not_found` to `false`.
- **line 12:** If `not_found` is still `true` after the inner loop, it means the current character in `s` is not found in `accept`. Return the current value of `count`.
- **line 14:** If a match is found, set `not_found` back to `true`, increment `count` by 1, reset `i` to 0, and move to the next character in `s`.
- **line 19:** After the while loop ends, return the final value of `count`.

</details>

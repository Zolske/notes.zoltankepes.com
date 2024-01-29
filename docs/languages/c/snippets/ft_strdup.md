# ft_strdup - string duplication

Returns a pointer to a new string which is a duplicate of the string `s`. Memory for the new string is obtained with `malloc`, and can be freed with `free`. [MAN page](https://linux.die.net/man/3/strdup)

<details>
<summary>Subject</summary>

### Subject

     Assignment name  : ft_strdup
     Expected files   : ft_strdup.c
     Allowed functions: malloc
     --------------------------------------------------------------------------------

     Reproduce the behavior of the function strdup (man strdup).

     Your function must be declared as follows:

     char *ft_strdup(char *src);

</details>

```c showLineNumbers
#include <stdlib.h>                 // for melloc

char *ft_strdup(char *src)
{
    char *strcpy;
    size_t i = 0;

    while (src[i++]);               // space for '\0' is added
    strcpy = (char *)malloc(sizeof(char) * i);
    i = 0;
    if (strcpy != NULL)             // if malloc was successful
    {
        while (src[i])
        {
            strcpy[i] = src[i];
            i++;                    // does not work on src[i++]
        }
        strcpy[i] = '\0';
    }
    return (strcpy);
}
```

:::caution
You can increment a variable with `++` in an expression (_line 8_), but not when this expression an **assignment** is (_line 15_)!
:::

<details>
<summary>Code Explanation</summary>

### Code Explanation

#### Key Concepts

- **malloc:** The `malloc` function is used to dynamically allocate memory in C. It takes the size of the memory block to be allocated as an argument and returns a pointer to the allocated memory.
- **char:** In C, the char data type is used to represent characters and strings. It is a 1-byte data type that can hold a single character.
- **'\0' (Null Terminator):** In C, strings are represented as arrays of characters terminated by a `null` character (`'\0'`). The `null` character marks the end of the string.

#### Code Structure

The ft_strdup function takes a char pointer `src` as an argument and returns a char pointer to the duplicated string.

- **line 1:** Include the necessary header file `stdlib.h` for the `malloc` function.
- **line 3:** Declare the ft_strdup function with the char pointer `src` as the parameter.
- **line 6:** Initialize a `size_t` variable `i` to 0.
- **line 8:** Use a `while` loop to calculate the length of the `src` string by incrementing `i` until the `null` terminator is encountered.  
   NOTE: Even after the `null` terminator is found, `i` is incremented on more time, this makes it long enough to allocate enough space for `'\0'` later.
- **line 9:** Allocate memory for the duplicate string using the `malloc` function. The size of the memory block is calculated as `sizeof(char) * i`, where `i` is the length of the `src` string.
- **line 10:** Reset i to 0, which is now going to be used as string index.
- **line 11:** Check if the memory allocation was successful by verifying if the `strcpy` pointer is not `NULL`.
- **line 13:** Use a `while` loop to copy the characters from the `src` string to the `strcpy` string until the `null` terminator is encountered.
- **line 18:** Add the `null` terminator at the end of the `strcpy` string.
- **line 20:** Return the `strcpy` pointer.

</details>

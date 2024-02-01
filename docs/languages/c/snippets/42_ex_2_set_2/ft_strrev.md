# ft_strrev

The function mirrors the string which has been passed to it, which it then returns. E.g. "hello" -> "olleh".

<details>
<summary>Subject</summary>

### Subject

    Assignment name  : ft_strrev
    Expected files   : ft_strrev.c
    Allowed functions:
    --------------------------------------------------------------------------------

    Write a function that reverses (in-place) a string.

    It must return its parameter.

    Your function must be declared as follows:

    char    *ft_strrev(char *str);

</details>

```c showLineNumbers
char *ft_strrev(char *str)
{
    int end = 0;
    int start = 0;
    char swap;

    while (str[end])
        end++;
    end--;
    while (start < end)
    {
        swap = str[end];
        str[end] = str[start];
        str[start] = swap;
        end--;
        start++;
    }
    return (str);
}
```

<details>
<summary>Code Explanation</summary>

### Code Explanation

#### Key Concepts

- **Swapping Characters:** To reverse a string, we need to swap the characters from the beginning and end of the string. We can use a temporary variable to hold one character while swapping.

#### Code Structure

- **line 7-9:** get the length of the string and reduce it by one, because we need the last index.
- **line 10:** the loop is going to increment `start` which starts from the beginning of the string and decrementing `end` which starts from the end of the string. When they meet in the middle the loop is done.
- **line 12:** saves the last character before it is overwrite with the first character on the following line.
- **line 13:** overwrites the last character with the first.
- **line 14:** overwrite the first with the previous saved last character.
- **line 15-16:** decrement the last index position and increment the first index position for the next iteration to swap.

</details>

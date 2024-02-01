# max

The function takes an array of integers and the length of the array. It then has to return the highest value of the array, if the array is empty, then the return is 0.

<details>
  <summary>Subject</summary>

### Subject

    Assignment name  : max
    Expected files   : max.c
    Allowed functions:
    --------------------------------------------------------------------------------

    Write the following function:

    int		max(int* tab, unsigned int len);

    The first parameter is an array of int, the second is the number of elements in
    the array.

    The function returns the largest number found in the array.

    If the array is empty, the function returns 0.

</details>

```c showLineNumbers
int max(int *tab, unsigned int len)
{

    if (!len)
        return (0);

    int highest = tab[0];

    while (len-- > 0)
        if (highest < tab[len])
            highest = tab[len];

    return (highest);
}
```

<details>
  <summary>Code Explanation</summary>

### Code Explanation

- **line 4:** if the len(gth) of the array is 0 then it is empty, return 0
- **line 7:** initiate the variable highest with the first value of the array
- **line 9:** as long length is bigger then 0, subtract 1 to get the index
- **line 10:** if the current value of the array is bigger then the highest, then overwrite it.

</details>

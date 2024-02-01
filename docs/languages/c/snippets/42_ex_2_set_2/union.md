# union

<details>
  <summary>Subject</summary>

### Subject

     Assignment name  : union
     Expected files   : union.c
     Allowed functions: write
     --------------------------------------------------------------------------------

     Write a program that takes two strings and displays, without doubles, the
     characters that appear in either one of the strings.

     The display will be in the order characters appear in the command line, and
     will be followed by a \n.

     If the number of arguments is not 2, the program displays \n.

     Example:

     $>./union zpadinton "paqefwtdjetyiytjneytjoeyjnejeyj" | cat -e
     zpadintoqefwjy$
     $>./union ddf6vewg64f gtwthgdwthdwfteewhrtag6h4ffdhsd | cat -e
     df6vewg4thras$
     $>./union "rien" "cette phrase ne cache rien" | cat -e
     rienct phas$
     $>./union | cat -e
     $
     $>
     $>./union "rien" | cat -e
     $
     $>

</details>

```c showLineNumbers
#include <unistd.h>

int d_check(char *str_check, char c, int len);

int main(int argc, char **argv)
{
    int i = 0;

    if (argc == 3)
    {
        while (argv[1][i])
        {
            if (d_check(argv[1], argv[1][i], i))
                write(1, &argv[1][i], 1);
            i++;
        }
        i = 0;
        while (argv[2][i])
        {
            if (d_check(argv[1], argv[2][i], -1))
                if (d_check(argv[2], argv[2][i], i))
                    write(1, &argv[2][i], 1);
            i++;
        }
    }
    write(1, "\n", 1);
    return (0);
}

int d_check(char *str_check, char c, int len)
{
    int i = 0;

    if (len == -1)
    {
        len = 0;
        while (str_check[len])
            len++;
    }

    while (i < len)
    {
        if (str_check[i] == c)
            return (0);
        i++;
    }
    return (1);
}
```

<details>
  <summary>Code Explanation</summary>

### Code Explanation

#### main()

- **line 9:** if we do not get two arguments then we just return a "new line"
- **line 11:** first we iterate through the first string (argument) and print every character it contains, as long we have not printed it already.
- **line 18:** now we iterate through the second string (argument) and print every of its character, which is not part of the first and which we have not already printed

#### int d_check(str_check, c, len)

- Checks if the character `c` is contained in the string `str_check`. If it is, then it returns **false**.
- `len` is the limit till where to search in the string, this is useful if we want to know if we have printed the character already. `len` is then the current index `i` and the string `str_check` is the current string we want to print.
- **line 34:** if we want to check the entire string, then we set `len` to -1, in that case we loop till we find the null-terminator to get the entire length. This is used when we want to know if the character is part of the first string (argument)
- **line 41:** Note that the function returns **true** if the len is 0, because on the first iriterateion we would compare our current string and get a always a **false** back.

</details>

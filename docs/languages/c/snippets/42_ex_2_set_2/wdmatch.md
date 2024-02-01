# wdmatch

Takes two strings as argument. The first is returned if all the needed characters appear in the second string in the correct order.

<details>
  <summary>Subject</summary>

### Subject

     Assignment name  : wdmatch
     Expected files   : wdmatch.c
     Allowed functions: write
     --------------------------------------------------------------------------------

     Write a program that takes two strings and checks whether it's possible to
     write the first string with characters from the second string, while respecting
     the order in which these characters appear in the second string.

     If it's possible, the program displays the string, followed by a \n, otherwise
     it simply displays a \n.

     If the number of arguments is not 2, the program displays a \n.

     Examples:

     $>./wdmatch "faya" "fgvvfdxcacpolhyghbreda" | cat -e
     faya$
     $>./wdmatch "faya" "fgvvfdxcacpolhyghbred" | cat -e
     $
     $>./wdmatch "quarante deux" "qfqfsudf arzgsayns tsregfdgs sjytdekuoixq " | cat -e
     quarante deux$
     $>./wdmatch "error" rrerrrfiiljdfxjyuifrrvcoojh | cat -e
     $
     $>./wdmatch | cat -e
     $

</details>

```c showLineNumbers
#include <unistd.h>

int main(int argc, char **argv)
{
    int match = 0;
    int i = 0;

    if (argc == 3)
    {
        while (argv[1][i] && *argv[2])
        {
            while (argv[1][i] != *argv[2] && *argv[2])
                argv[2]++;
            if (argv[1][i] == *argv[2])
                match++;
            i++;
        }
        if (i == match)
            write(1, argv[1], match);
    }
    write(1, "\n", 1);
    return (0);
}
```

<details>
  <summary>Code Explanation</summary>

### Code Explanation

- **line 10:** outer loop, as long the first string and the second string are not null terminated
- **line 12** inner loop, as long there is no match and the second string is not null terminated, keep incrementing the second string
- **line 14:** if the characters of both strings are matching, increment the matching variable
- **line 18:** if the variable matching and the index i are equal, then all characters where present in the second string and we can write the first string to the standard output

</details>

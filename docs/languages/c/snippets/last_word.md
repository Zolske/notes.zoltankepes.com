# last_word

<details>
  <summary>Subject</summary>

### Subject

    Assignment name  : last_word
    Expected files   : last_word.c
    Allowed functions: write
    --------------------------------------------------------------------------------

    Write a program that takes a string and displays its last word followed by a \n.

    A word is a section of string delimited by spaces/tabs or by the start/end of
    the string.

    If the number of parameters is not 1, or there are no words, display a newline.

    Example:

    $> ./last_word "FOR PONY" | cat -e
    PONY$
    $> ./last_word "this        ...       is sparta, then again, maybe    not" | cat -e
    not$
    $> ./last_word "   " | cat -e
    $
    $> ./last_word "a" "b" | cat -e
    $
    $> ./last_word "  lorem,ipsum  " | cat -e
    lorem,ipsum$
    $>

</details>

```c showLineNumbers
#include <unistd.h>

int main(int argc, char **argv)
{
    int i = 0;
    int i_word = -1;

    if (argc == 2)
    {
        while (argv[1][i])
        {
            if (i == 0 && argv[1][0] >= '!' && argv[1][0] <= '~')
                i_word = 0;
            if (argv[1][i] == ' ' && argv[1][i + 1] >= '!' && argv[1][i + 1] <= '~')
                i_word = i + 1;
            i++;
        }
        if (i_word != -1)
            while (argv[1][i_word] && argv[1][i_word] >= '!' && argv[1][i_word] <= '~')
                write(1, &argv[1][i_word++], 1);
    }
    write(1, "\n", 1);
    return (0);
}
```

<details>
  <summary>Code Explanation</summary>

#### Key Concepts

- **printable characters:** `argv[1][i_word] >= '!' && argv[1][i_word] <= '~'` this determines the range of printable characters (`!` == 33 and `~` == 126) according to the ASCII table.

  ### Code Explanation

- **line 6:** the variable will mark the index from where the last word starts, if it remails negative, then no word was found.
- **line 10-17:** determent the index form where the last word starts
- **line 12:** if the first character is printable, set `i_word` to 0
- **line 14:** keep overwriting if the pattern is true, current character == ' ' -> next printable character
- **line 18:** print if `i_word` is not -1, except non printable characters (which can be after the last word)

</details>

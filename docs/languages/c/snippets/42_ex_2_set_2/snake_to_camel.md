# snake_to_camel

Takes a single argument and writes it to the standard output, it transforms it from "snake" to "camel case".  
NOTE: there are no (_extra_) variables used.

<details>
<summery>Subject</summery>

### Subject

    Assignment name  : snake_to_camel
    Expected files   : snake_to_camel.c
    Allowed functions: malloc, free, realloc, write
    --------------------------------------------------------------------------------

    Write a program that takes a single string in snake_case format
    and converts it into a string in lowerCamelCase format.

    A snake_case string is a string where each word is in lower case, separated by
    an underscore "_".

    A lowerCamelCase string is a string where each word begins with a capital letter
    except for the first one.

    Examples:
    $>./snake_to_camel "here_is_a_snake_case_word"
    hereIsASnakeCaseWord
    $>./snake_to_camel "hello_world" | cat -e
    helloWorld$
    $>./snake_to_camel | cat -e
    $

</details>

```c showLineNumbers
#include <unistd.h>                 // for write

int main(int argc, char **argv)
{
    if (argc == 2)
        while (*argv[1])
        {
            // highlight-next-line
            if (*argv[1] == '_' && argv[1]++)
                *argv[1] -= 32;
            write(1, argv[1], 1);
            argv[1]++;
        }
    write(1, "\n", 1);
    return (0);
}
```

:::tip short-circuit
The **logical AND** and **logical OR** operators ( **&&** and **||** , respectively) exhibit "short-circuit" operation. That is, the second operand is not evaluated if the result can be deduced solely by evaluating the first operand.

You can see this on "line 8", only if the first condition (`*argv[1] == '_'`) is true, then the second is evaluated, only then the pointer is incremented.
:::

<details>
<summery>Code Explanation</summery>

### Code Explanation

- **line 5:** only if there is one argument
- **line 6:** as long we are not pointing to the `'\0'` terminator
- **line 8:** if the pointer points to the `'_'` character, then increment the pointer to the next address (_character_)
- **line 9:** overwrite the value by subtracting 32 from it (_make it upper case_)
- **line 10:** write the string to the standard output (only one byte - character)
- **line 11:** increment the pointer to keep the loop moving forward
- **line 13:** after the loop is finished, print a "new line"

#### NOTE

- it is expected that the last character is not `_`

</details>

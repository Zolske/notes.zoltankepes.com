# camel_to_snake

Transforms a single argument from camel case to snake case.

<details>
<summary>Subject</summary>

### Subject

    Assignment name     : camel_to_snake
    Expected files      : camel_to_snake.c
    Allowed functions   : malloc, free, realloc, write
    --------------------------------------------------------------------------------

    Write a program that takes a single string in lowerCamelCase format
    and converts it into a string in snake_case format.

    A lowerCamelCase string is a string where each word begins with a capital letter
    except for the first one.

    A snake*case string is a string where each word is in lower case, separated by
    an underscore "_".

    Examples:

    $>./camel_to_snake "hereIsACamelCaseWord"
    here_is_a_camel_case_word
    $>./camel_to_snake "helloWorld" | cat -e
    hello_world$
    $>./camel_to_snake | cat -e
    $

</details>

```c showLineNumbers
#include <unistd.h>

int main(int argc, char **argv)
{
    int i;

    if (argc == 2)
    {
        i = 0;
        while (argv[1][i])
        {
            if (argv[1][i] >= 'A' && argv[1][i] <= 'Z')
            {
                write(1, "_", 1);
                // highlight-next-line
                argv[1][i] += 32;                           // convert to lowercase
            }
            write(1, &argv[1][i++], 1);
        }
    }
    write(1, "\n", 1);
    return (0);
}
```

:::tip
You can manipulate "argument variables" (_if they are not constant_). This way you do not need to declare an extra variable.  
On "line 15", I overwrite the uppercase character with its lowercase.
:::

<details>
<summary>Code Explanation</summary>

### Key Concepts

- **ASCII values:** In the ASCII character encoding scheme, each character is represented by a unique numeric value. Uppercase letters have ASCII values ranging from 65 ('A') to 90 ('Z'), while lowercase letters have ASCII values ranging from 97 ('a') to 122 ('z').

- **Character manipulation:** In C, characters can be manipulated using their ASCII values. By adding or subtracting specific values, we can convert characters from uppercase to lowercase and vice versa.

### Code Structure

- **line 5:** Declare a variable i of type int to be used as a loop counter.

- **line 7:** Check if the program was executed with exactly one command-line argument (`argc == 2`).

- **line 9-10:** If there is a command-line argument, initialize `i` to 0 and enter a while loop that iterates over each character in the argument.

- **line 12:** Inside the loop, check if the current character is an uppercase letter (`argv[1][i] >= 'A' && argv[1][i] <= 'Z'`).

- **line 14-15:** If the character is uppercase, write an underscore (`_`) to the console using the write function and convert the character to lowercase by adding 32 to its ASCII value (`argv[1][i] += 32`).

- **line 17:** Write the current character to the console using the write function and increment i to move to the next character in the argument.

- **line 20:** After the loop, write a newline character (`\n`) to the console to separate the output.

</details>

# Do Operation

The program calculates the 1st with the 3rd argument. The 2nd argument determents the type of the operation.  
NOTE: The result will be a integer (_e.g.: 5 / 2 = 2_).

<details>
<summary>Subject</summary>

### Subject

    Assignment name  : do_op
    Expected files   : *.c, *.h
    Allowed functions: atoi, printf, write
    --------------------------------------------------------------------------------

    Write a program that takes three strings:

    - The first and the third one are representations of base-10 signed integers
      that fit in an int.
    - The second one is an arithmetic operator chosen from: + - \* / %

    The program must display the result of the requested arithmetic operation,
    followed by a newline. If the number of parameters is not 3, the program
    just displays a newline.

    You can assume the string have no mistakes or extraneous characters. Negative
    numbers, in input or output, will have one and only one leading '-'. The
    result of the operation fits in an int.

    Examples:

    $> ./do_op "123" "*" 456 | cat -e
    56088$
    $> ./do_op "9828" "/" 234 | cat -e
    42$
    $> ./do_op "1" "+" "-43" | cat -e
    -42$
    $> ./do_op | cat -e
    $

</details>

```c showLineNumbers
#include <stdio.h>

int atoi(const char *str);

int main(int argc, char **argv)
{
    if (argc == 4)
    {
        if ('+' == argv[2][0])
            printf("%d", atoi(argv[1]) + atoi(argv[3]));
        else if ('-' == argv[2][0])
            printf("%d", atoi(argv[1]) - atoi(argv[3]));
        else if ('*' == argv[2][0])
            printf("%d", atoi(argv[1]) * atoi(argv[3]));
        else if ('/' == argv[2][0])
            printf("%d", atoi(argv[1]) / atoi(argv[3]));
        else if ('%' == argv[2][0])
            printf("%d", atoi(argv[1]) % atoi(argv[3]));
    }
    printf("\n");
    return (0);
}

int atoi(const char *str)
{
    long int nbr;
    int i;

    nbr = 0;
    i = 0;
    if (str[i] == '-' || str[i] == '+')
        i++;
    while (str[i] >= '0' && str[i] <= '9')
        nbr = nbr * 10 + (str[i++] - '0');
    if (str[0] == '-')
        nbr *= -1;
    return (nbr);
}
```

<details>
<summary>Code Explanation</summary>

### Key Concepts

- **Arithmetic operations:** The program performs basic arithmetic operations such as addition, subtraction, multiplication, division, and modulo.
- **atoi function:** The program uses the atoi function to convert a string to an integer.

### Code Structure

#### The main function:

- **line 7:** Checks if the number of command-line arguments is equal to 4.
- **line 9-18:**
  - **line 9:** Checks the operator specified in the second argument.
  - **line 10:** Performs the corresponding arithmetic operation using the atoi function and prints the result of the arithmetic operation.

#### The atoi function:

Takes a string as input and converts it to an integer.
Handles negative numbers by checking if the first character is a minus sign.
Iterates through the string, converting each digit to its corresponding integer value and accumulating the result.
Multiplies the result by -1 if the number is negative.
Returns the converted integer.

</details>

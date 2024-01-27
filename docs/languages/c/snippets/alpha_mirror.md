# Alpha Mirror - mirror letter

The program takes one argument as a string and mirrors the text by replacing each letter with its corresponding mirror character.

<details>
<summary>Subject</summary>

### Subject

     Assignment name    : alpha_mirror
     Expected files     : alpha_mirror.c
     Allowed functions  : write
     --------------------------------------------------------------------------------

     Write a program called alpha_mirror that takes a string and displays this string
     after replacing each alphabetical character by the opposite alphabetical
     character, followed by a newline.

     'a' becomes 'z', 'Z' becomes 'A'
     'd' becomes 'w', 'M' becomes 'N'

     and so on.

     Case is not changed.

     If the number of arguments is not 1, display only a newline.

     Examples:

     $>./alpha_mirror "abc"
     zyx
     $>./alpha_mirror "My horse is Amazing." | cat -e
     Nb slihv rh Znzarmt.$
     $>./alpha_mirror | cat -e
     $
     $>

</details>

```c showLineNumbers
#include <unistd.h>

int main(int argc, char **argv)
{
    int i;
    char c_mirror;
    if (argc == 2)
    {
        i = 0;
        while (argv[1][i])
        {
            if ((argv[1][i] >= 'A' && argv[1][i] <= 'Z'))
                c_mirror = 'Z' - (argv[1][i] - 'A');
            else if ((argv[1][i] >= 'a' && argv[1][i] <= 'z'))
                c_mirror = 'z' - (argv[1][i] - 'a');
            else
                c_mirror = argv[1][i];
            write(1, &c_mirror, 1);
            i++;
        }
    }
    write(1, "\n", 1);
    return (0);
}
```

<details>
<summary>Code Explanation</summary>

### Key Concepts

- **Command-line arguments:** The program uses the `argc` and `argv` parameters of the main function to access the command-line arguments. `argc` represents the number of arguments passed, and `argv` is an array of strings containing the arguments.

- **ASCII values:** The program utilizes the ASCII values of characters to determine their mirror images. The ASCII values of uppercase letters range from 65 ('A') to 90 ('Z'), and the ASCII values of lowercase letters range from 97 ('a') to 122 ('z').

- **Symmetric mirror image:** The mirror image of a letter is determined by subtracting its ASCII value from the corresponding mirror image's ASCII value.

### Code Structure

- **line 7:** Inside the main function, the program checks if exactly one command-line argument is provided (`argc == 2`). If not, the program skips the mirroring process and directly prints a newline character (`\n`) to the standard output.

- **line 9:** If a single command-line argument is provided, the program proceeds to mirror the text. It initializes a variable `i` to 0 and enters a while loop that iterates until the end of the input string (`argv[1][i]`).

- **line 12:** Within the loop, the program checks if the current character is an uppercase letter (`argv[1][i] >= 'A' && argv[1][i] <= 'Z'`). If true, it calculates the mirror image by subtracting the ASCII value of the letter from the ASCII value of `'Z'`. The result is stored in the variable `c_mirror`.

- **line 14:** If the current character is a lowercase letter (`argv[1][i] >= 'a' && argv[1][i] <= 'z'`), the program calculates the mirror image by subtracting the ASCII value of the letter from the ASCII value of `'z'`. Again, the result is stored in `c_mirror`.

- **line 16:** If the current character is neither an uppercase nor a lowercase letter, it is considered a non-alphabetic character, and the program assigns the current character as the mirror image (`c_mirror = argv[1][i]`).

- **line 18:** After calculating the mirror image, the program writes the mirrored character to the standard output using the write function. The loop then increments the value of i to move to the next character in the input string.

- **line 22:** Once the loop finishes, the program writes a newline character (`\n`) to the standard output to separate the mirrored text from the command prompt.

</details>

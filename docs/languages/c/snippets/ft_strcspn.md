# ft_strcspn - str len without str_2

Calculates the length of the initial segment of `s`, which consists entirely of characters not in `reject`.  
See [MAN page](https://linux.die.net/man/3/strcspn) or [tutorialspoint](https://www.tutorialspoint.com/c_standard_library/c_function_strcspn.htm).

<details>
<summary>Subject</summary>

### Subject

    Assignment name	 : ft_strcspn
    Expected files	 : ft_strcspn.c
    Allowed functions: None
    ---------------------------------------------------------------

    Reproduce exactly the behavior of the function strcspn (man strcspn).

    The function should be prototyped as follows:

    size_t	ft_strcspn(const char *s, const char *reject);

</details>

<details>
<summary>size_t</summary>

### size_t

_source:_ [geeksforgeeks](https://www.geeksforgeeks.org/size_t-data-type-c-language/) [pvs-studio](https://pvs-studio.com/en/blog/terms/0044/#:~:text=size_t%20is%20a%20special%20unsigned,possible%20array%20or%20an%20object.)

- needs one of the following libraries:  
  `<stddef.h>`, `<stdio.h>`, `<stdlib.h>`, `<string.h>`, `<time.h>`, `<wchar.h>`

- is used to represent the **size of objects in bytes**:
  - E.g. for the return type by the `sizeof` operator.
  - It is guaranteed to be big enough to contain the size of the biggest object the host system can handle. Basically the maximum permissible size is dependent on the compiler; if the compiler is 32 bit then it is simply a `typedef`(_i.e., alias_) for `unsigned int` but if the compiler is 64 bit then it would be a `typedef` for `unsigned long long`.
- The `size_t` data type is **never negative**.
  Therefore many C library functions like `malloc`, `memcpy` and `strlen` declare their arguments and return type as `size_t`.

#### Example - objects

The `size_t` data type in C is an `unsigned integer` type used to represent the size of objects in bytes, commonly used to represent the size of arrays, memory blocks, and strings.

```c
#include <stddef.h>     // for sizeof
#include <stdio.h>      // for printf

int main()
{
    int array[5] = { 1, 2, 3, 4, 5 };
    size_t size = sizeof(array);
    size_t length = sizeof(array) / sizeof(array[0]);
    printf("The size of the array is: %lu\n", size);     // 20
    printf("The length of the array is: %lu\n", length); // 5
    return (0);
}
```

#### Advantages of using size_t in C programming:

- **Portability:** The `size_t` data type is defined in the `stddef.h` header, which is part of the C standard library. By using `size_t`, you can ensure that your code is portable across different platforms and compilers.
- **Unsigned:** `size_t` is an `unsigned integer` type, which means it can represent sizes up to the maximum size of unsigned integers. This is useful when dealing with arrays and memory blocks, as sizes can never be negative.
- **Performance:** `size_t` is usually implemented as a fast and efficient integer type, and using it can result in better performance than using other integer types.
- **Clear intent:** Using `size_t` makes it clear to the reader of your code that you are dealing with sizes and not other types of integers. This makes the code easier to understand and less prone to errors.
- **Standardization:** By using `size_t`, you are following a widely used and accepted standard, which makes your code more readable and maintainable for other programmers.
- **Interoperability:** `size_t` is widely used in many libraries and APIs, and using it in your code allows for easier integration with other code.

</details>

<details>
<summary></summary>
</details>

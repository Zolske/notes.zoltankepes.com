---
sidebar_position: 2
---

# 10 Typedef, Compiler Flags, Header Files

---

## 1. Renaming Data Types with Typedef

Any data type in c can be renamed. This is for convenience only. The underlying type that they are based on is unchanged. We use the typedef keyword to create a synonym for the base type. In this way, we supply additional context about the intent or purpose of a variable via a renamed type declaration.

-**CONVENTION:** typedef names should start with the prefix `t_` followed by the chosen name.

- The typedef specifiers do not allocate any memory. Memory allocation does not happen until we declare a variable of the new type, regardless of whether it is an enum type, a struct type, or a type that has been defined via typedef.
- if we would need to change the data type of an variable, then we can do this in one place (where we have renamed the data type)
- can be used on any data type:
  - intrinsic (_whole numbers (integers), real numbers (floating point and complex numbers), characters, enumerations, Boolean_)
  - structures, arrays, pointers, functions, pointer to functions

### basic example:

```c
int height, width, length;
```

- Their use as measurements is fairly obvious, but what are the intended units of measurement?

```c
typedef int t_meters;
t_meters height, width, length;
height = 4;
width  = height * 2;
length = 100;
```

- the variables have been declared as type `t_meter` but in reality they are still of type `int`

### renaming a typedef data type

```c
typedef t_meters t_cm;
struct s_in_cm {
  t_cm c_height;
  t_cm c_width;
  t_cm c_length;
};
```

- based on the example before, we have renamed the data type for the variables from `t_meter` to `t_cm` which is still `int`

---

## 2. Compiler Flags

The compiler (_whether gcc, clang, or icc_) has a bewildering array of options which you can explore with `cc -help` or `man gcc`. Some of these options are for the compiler only; others are passed on to the linker only. They are there for both very specialized system software configurations and for the compiler and linker writers.
The table below lists the most useful flags, to catch existing and potential errors in your code.

| option              | explanation                                                                                                                |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `-std=c17`          | uses 'C standard' from 2017                                                                                                |
| `-w*`               | disable all warnings                                                                                                       |
| `-Wall`             | shows all warnings when compiling                                                                                          |
| `-Wextra`           | includes additional warnings that might catch potential issues in your code                                                |
| `-Werror`           | any warning will prevent further processing (the linker will not be invoked) and no executable output file will be created |
| `-fmax-errors=10`   | shows only the first 10 errors                                                                                             |
| `-Dname=definition` | defines a macro to be used by the preprocessor [see](https://www.rapidtables.com/code/linux/gcc/gcc-d.html)                |

---

## 3. Header Files

The two type of header files are **predefined header** files and **custom header** files.

- all header files are listed at the beginning of the code
- the preprocessor instruction `#include` instructs the compiler to look for the file and to include it's contained into the code
- a header file provides prototypes, typedef specifiers, enumerations, and structures needed for libraries

:::caution what to put into a header file

- Put anything in a header that **does not allocate memory** (_variables_) and **does not define functions**.
- Put anything into the source file that allocates memory or defines functions.

:::

_example of an header file:_

```c title="card.h"
typedef enum {                              // definition of an enum
  eClub  = 1 , eDiamond , eHeart , eSpade
} e_suit;

typedef struct {                            // definition of an structure
  e_suit  suit;
  int     num;
  bool    isWild;
} s_card;

s_card addCard(s_card, int );               // function prototype
void  some_func(void);                      // function prototype
```

```c title="source file"
#include "card.h"                           // add to beginning to include the above code
```

### predefined header files

- `< >` look in a predefined list of places for those files
- are needed for the official C functions
- e.g.: `#include <stdio.h>`

### custom header files

- `" "` the compiler first looks in the same directory as the source `.c` file before it starts looking elsewhere for a given file
- e.g.: `#include "card.h"`

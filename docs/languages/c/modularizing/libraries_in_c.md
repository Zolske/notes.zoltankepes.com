# C Libraries

A Library is an archive of object files which contain functions that can be used in an C program. The name of the function needs to be referenced in the source code as "prototype" or "header".
There are two types of libraries, "Static" and "Dynamic".

---

## How to use a Library

1.  add header which contains the prototype of the function to be used
2.  add the path to the library (_if it is not a standard library_ ) when compiling

### 1. Prototypes and Header files

The compiler needs to be informed that a function is defined somewhere else. This is done through the "prototype" or "header file". The header file itself is a collections of prototypes and can also include macros.

#### Header Files

- the pre-processor instruction `#include` is processed as the first step when the source code is compiled, it needs to be followed by the name of the header file with the conventional extension `.h`
- setting the name in `<>` instructs the pre-processor to search for the file in the designated directory  
  (_e.g. Ubuntu `/usr/include`_)
- setting the name in `""` instructs the pre-processor to search for the file first in the current directory and after in the designated directory
- the functions prototypes are then placed by the pre-processor into the code

```c
#include<stdio.h>        // header for a standard C Library
#include"myHeader.h"     // user defined header file
```

#### Prototype

- the prototype could be placed directly without the need of the header file

```c
int printf (const char *__restrict __format, ...);  // prototype for printf() instead of #include<stdio.h>

int main(void)
{
        printf("Hello");
        return (0);
}
```

_I found the prototype in the file /usr/include/x86_64-linux-gnu/stdio.h_.

### 2. Linking or Adding code from a Library

Note: The name of the header file and the name of the library don't have to match.  
_E.g.: the prototype of `sqrt()` is declared in the header `math.h` file but the library is named `libm.a` in linux._

- **from the standard `libc.a` library :**
  - nothing extra needs to be done when compiling, library is loaded by default
- **from a standard library :**
  - the `-l` flag with the name of the library
  - without the `-L` flag the standard library location is amused
    _e.g.:_ `-lm` for the `libm.a` (_the prefix `lib` and the extension `.a` are cut off_ )
- **non standard libraries :**
  - the `-L` flag followed by the path to the library without spaces
  - the `-l` flag with the name of the library,
  - _e.g.:_ `-L. -lsomething` _in the current directory `.` with the name `libsomething.a`_

#### finding the location of the standard libraries in Linux

The pre-processor is a program used by `gcc` when compiling, we can use it to find the location of the libraries.

- `cpp -v` (_stands for **C** **P**re-**P**rocessor_ )

```text
...
 /usr/lib/gcc/x86_64-linux-gnu/11/include
 /usr/local/include
 /usr/include/x86_64-linux-gnu
 /usr/include
```

- the pre-processor checks the directories from top to bottom and stops soon as he finds a match  
   _my libraries are stored in `/usr/include/x86_64-linux-gnu`_

---

## Creating a Static Libraries

1. The source files (.c) which contain the functions need to be compiled into object files (.o).
   - _syntax:_ `gcc -c FILE_CONTAINING_FUNCTION.c -o FILE_CONTAINING_FUNCTION.o`
   - use a C compiler like `gcc` with the `-c` flag to create an object file which you can name with `-o`
2. bundle these object files to an archive (_.a_ )
   - _syntax:_ `ar rcs libNAME.a Object_FILE.o [Object_FILE_2.o ...]`
   - use the `ar` command with the parameter `rcs` followed by the library name and the object file(s)
   - `rcs` (_**r**eplace existing object file that is already part of your library_ ) (_**c**reate archive if not exist_ ) (_**s**_ _create index for faster access_ )
   - library names usually start with "lib" and end with the extension ".a"
3. link the library to your code containing the main function
   - _syntax:_ `gcc PROGRAM.c  libNAME.a -o program` _one source file, library is in current directory_
   - _syntax:_ `gcc PROGRAM_1.o PROGRAM_2.o  libNAME.a -o program` _compile multiple source files first to object files and than link them together, library in current directory_
   - _syntax:_ `-L/somewhere -lName` _if not in current directory, the prefix `lib` and the extension `.a` is cut off_

---

### Example: creating static library and linking to executable

In the example we have a simple program which ask the user to enter his name which it than displays to the screen.

- program.c : _contains the main function_
- askName.c : _contains the function (askName()) which waits for the user to enter his name, which it than returns_
- myHeaders .h: _contains the "prototype" of the askName() function_

```c title="program.c" showLineNumbers {2}
#include<stdio.h>       // for printf()
#include"myHeaders.h"   // prototype for askName(),  "" instead of <>

int main(void)
{
        char name[20];

        printf("Please, enter your name:\n");
        printf("Your name is, %s.\n", askName(name));
        return (0);
}
```

- line 2: _the "header" file needs to be set in `"` because it is not located in the standard library directory_

```c title="askName.c"
#include<stdio.h>       // for scanf()

char* askName(char* name)
{
        scanf("%s", name);
        return (name);
}
```

```c title="myHeaders.h"
char* askName(char*);
```

1. compile the source files (_.c_ ) to object files (_.o_ )
   - `gcc -c askName.c -o askName.o`
2. bundle the object file which contains the function for the library to an archive (_.a_ )
   - `ar rcs libAskName.a askName.o`
3. link the library to your code containing the main function
   - `gcc program.c libAskName.a -o program`

The function "askName()" comes now from the library "libAskName.a" and not from "askName.o" to the executable "program".

---

## Static Versus Dynamic Libraries in C

| Static                                                                                                                  | Dynamic                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Linker finds all used library functions (such as printf(), sqrt(), etc) and copies them into your executable file.      | Linked dynamically at run-time by the OS: every program that accesses the library uses the same copy. |
| Libraries have the extension .a (Linux) or .lib (Windows).                                                              | Libraries have the extension .so (Linux) or .dll (Windows).                                           |
| Executable is a larger file, needing more disk space and main memory.                                                   | Executable only contains the name of (a link to) the library.                                         |
| If library changes, the executable dose not automatically update -- needs to be re-linked.                              | If library changes, the executable will automatically use the new library code.                       |
| If library becomes incompatible with your code, your executable will still run just fine, as long as you don't re-link. | If library becomes incompatible with your code, your executable will no longer run.                   |
| Library access is faster.                                                                                               | Dynamic querying of symbols takes time.                                                               |

### Summery of Static and Dynamic Libraries (Linux OS)

| Library                      | Static                                                      | Dynamic                                                                                                                                                      |
| ---------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Compile library files        | `gcc -c part1.c -o part1.o` `gcc -c part2.c -o part2.o` ... | `gcc -c -fpic part1.c -o part1.o` `gcc -c -fpic part2.c -o part2.o` ...                                                                                      |
| Create library               | `ar rcs libmylib.a part1.o part2.o` ...                     | `gcc -shared -o libmylib.so part1.o part2.o` ...                                                                                                             |
| Compile main program         | `gcc -c program.c -o program.o`                             | `gcc -c program.c -o program.o`                                                                                                                              |
| Link library to main program | `gcc -o program program.o -L. -lmylib`                      | `gcc -o program program.o -L. -lmylib` _Add library path to environment variable (type excactliy like this):_ `export LD_LIBRARY_PATH=$PWD:$LD_LIBRARY_PATH` |
| Run program                  | `./program`                                                 | `./program`                                                                                                                                                  |

_assuming the library is in the same directory as executable, `-fpic`(**p**osition **i**ndependent **c**ode)_

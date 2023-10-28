# Splitting C Code Into Multiple Files

The source code of an program can be split into different files to make it easier to organize and maintain it.

---

_Example code to be split: the program ask the user for his name which is printed to the screen after._

```c title="program.c"
#include<stdio.h>       // for printf() and scanf()

char* askName(char*);   // informs the compiler, func. def. is coming later

int main(void)
{
        char name[20];

        printf("Please, enter your name:\n");
        printf("Your name is, %s.\n", askName(name));
        return (0);
}

char* askName(char* name)
{
        scanf("%s", name);
        return (name);
}
```

---

#### 1. Split the code into multiple source files with the extension `.c`

```c title="program.c"
#include<stdio.h>       // for printf()

char* askName(char*);   // informs the compiler, func. def. is coming later

int main(void)
{
       char name[20];

       printf("Please, enter your name:\n");
       printf("Your name is, %s.\n", askName(name));
       return (0);
}
```

```c title="askName.c"
#include<stdio.h>       // for scanf()

char* askName(char* name)
{
        scanf("%s", name);
        return (name);
}
```

---

#### 2. Inform the compiler that the function definition is somewhere else by either ...

- option A: **declaring a prototype** for each function that is called at the beginning of the code **or** ...
- option B: **creating a "header" file** in which you move every "prototype"

_option B: create header file "myHeader.h" and move prototype `char_ askName(char*);`*

```c title="myHeader.h"
char* askName(char*);   // informs the compiler, func. def. is coming later
```

_option B: add the pre-processor directive to include the prototypes from the header file "myHeader.h"_

```c title="program.c"
#include<stdio.h>       // <> point's pre-processor to the "include" directory
#include"myHeader.h"    //  "" point's pre-processor to the current directory

int main(void)
{ ....
```

- the pre-processor will replace line 2 and 3 with the necessary prototypes from the header file
  - **Note:** `""` points pre-processor to current directory, `<>` points pre-processor to include directory.

---

#### 3. compile every source file to an object file `.o` with the `-c` flag and name it with the `-o` flag

The `gcc` program is compiling and then linking all files (_which are passed as argument_ ) together to an executable. We need to pass the `-c` flag if we want the compiler to only compile and not to link the files. This needs to be done file by file. The resulting file is a **object** file which is named with the name after the `-o` flag and should get the extension `.o`.

1. `gcc -c program.c -o program.o`
2. `gcc -c askName.c -o askName.o`

---

#### 4. link all object files (_not the header file_ ) and name the program with the `-o` flag

The `gcc` compiler knows that the files are already object files and will then link them together to an executable.

- Make sure your header file (_if you have one_) is in the same directory together with all of your object files.  
  `gcc program.o askName.o -o program`

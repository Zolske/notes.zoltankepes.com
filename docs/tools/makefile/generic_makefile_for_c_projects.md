---
sidebar_position: 2
---

# Generic Makefile for C Projects

Blueprint for a Makefile to be used in basic C projects.

---

## blueprint for C projects

```makefile title="Makefile" showLineNumbers {19-20}
# define the C compiler to use
CC              = gcc
# define compiler flags
CFLAGS          = -Wall -fmax-errors=10 -Wextra
# define library paths in addition to to /usr/lib
LFLAGS          =
# define the object files that this project needs
OBJFILES        = program.o askName.o
# define the name of the executable file
MAIN            = program

# all of the below is generic - one typically only adjusts the above

all: $(MAIN)

$(MAIN): $(OBJFILES)
        $(CC) $(CFLAGS) -o $(MAIN) $(OBJFILES)

%.o: %.c
        $(CC) $(CFLAGS) -c $< -o $@  # $@ before : , $< after :

clean:
        rm -f $(OBJFILES) $(MAIN)

test: $(MAIN)
       ./$(MAIN)
```

- line 19:
  - _`%` is a wildcard for every character, `%.o` for every file ending in `.o` and `%.c` for every file ending in `.c`, but both names are the same in every "rule". E.g. `askName.o: askName.c`_
  - _if `askName.o` does not exist, than `askName.c` is used to create (through the "recipe") the `askName.o` file._
  - _if `askName.o` exist, than `make` checks if `askName.c` has an newer modification date and if so than it recreates (through the "recipe") the `askName.o` file._
- line 20:
  - _`$@` the name of the file before the `:` , e.g. `askName.o`_
  - _`$<` the name of the file after the `:` , e.g. `askName.c`_
- line 19-20:

  _evaluate to:_

```makefile
progrma.o: program.c
      gcc -Wall -fmax-errors=10 -Wextra -c program.c -o program.o
```

_and:_

```makefile
askName.o: askName.c
      gcc -Wall -fmax-errors=10 -Wextra -c askName.c -o askName.o
```

- line 22: _`make clean` cleans up the object files and the executable, for a fresh start._
- line 25: _`make test` generally compiles, updates and runs the program, it does not matter how the program is called in that individual project._

---

## blueprint for C projects with libraries

This example assumes that a static library with the name "libaskName.a" has been already made and is located in the "current" directory.

```makefile title="Makefile"
# define the C compiler to use
CC              = gcc
# define compiler flags
CFLAGS          = -Wall -fmax-errors=10 -Wextra
# define library paths in addition to to /usr/lib
LFLAGS          = -L.
# define libraries to be use
LIBS            =  -laskName
# define the object files that this project needs
OBJFILES        = program.o
# define the name of the executable file
MAIN            = program

# all of the below is generic - one typically only adjusts the above

all: $(MAIN)

$(MAIN): $(OBJFILES)
        $(CC) $(CFLAGS) -o $(MAIN) $(OBJFILES) $(LFLAGS) $(LIBS)

%.o: %.c
        $(CC) $(CFLAGS) -c $< -o $@  # $@ before : , $< after :

clean:
        rm -f $(OBJFILES) $(MAIN)

test: $(MAIN)
       ./$(MAIN)
```

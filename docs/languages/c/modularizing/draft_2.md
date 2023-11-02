# List and explanation C library functions

## character functions
These functions check whether c, which must have the value of an unsigned char or EOF, falls into a certain character class according to the current locale.

### function description

#### isalnum() `int isalnum(int c);` `<ctype.h>`
checks for an alphanumeric character; it is equivalent to (isalpha(c) || isdigit(c)).

#### isalpha() `int isalpha(int c);` `<ctype.h>`
checks for an alphabetic character; in the standard "C" locale, it is equivalent to (isupper(c) || islower(c)). In some locales, there may be additional characters for which isalpha() is true-letters which are neither upper case nor lower case.

#### isascii() `int isascii(int c);` `<ctype.h>`
checks whether c is a 7-bit unsigned char value that fits into the ASCII character set.

#### isblank() `int isblank(int c);` `<ctype.h>`
checks for a blank character; that is, a space or a tab.

#### iscntrl() `int iscntrl(int c);` `<ctype.h>`
checks for a control character.

#### isdigit() `int isdigit(int c);` `<ctype.h>`
checks for a digit (0 through 9).

#### isgraph() `int isgraph(int c);` `<ctype.h>`
checks for any printable character except space.

#### islower() `int islower(int c);` `<ctype.h>`
checks for a lower-case character.

#### isprint() `int isprint(int c);` `<ctype.h>`
checks for any printable character including space.

#### ispunct() `int ispunct(int c);` `<ctype.h>`
checks for any printable character which is not a space or an alphanumeric character.

#### isspace() `int isspace(int c);` `<ctype.h>`
checks for white-space characters. In the "C" and "POSIX" locales, these are: space, form-feed ('\f'), newline ('\n'), carriage return ('\r'), horizontal tab ('\t'), and vertical tab ('\v').

#### isupper() `int isupper(int c);` `<ctype.h>`
checks for an uppercase letter.

#### isxdigit() `int isxdigit(int c);` `<ctype.h>`
checks for a hexadecimal digits, that is, one of
0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F.

### Return Value
The values returned are nonzero if the character c falls into the tested class, and a zero value if not.

### Note
The details of what characters belong into which class depend on the current locale. For example, isupper() will not recognize an A-umlaut (Ã„) as an uppercase letter in the default C locale.

---

## Sring functions

### strlen `size_t strlen(const char *s);` `<string.h>` `Standard C library (libc, -lc)`
The strlen() function calculates the length of the string pointed to by `s`, excluding the terminating null byte ('\0').
#### RETURN VALUE
The strlen() function returns the number of bytes in the string pointed to by `s`.
#### NOTES
In cases where the input buffer may not contain a terminating null byte, strnlen(3) should be used instead.

### strnlen `size_t strnlen(const char s[.maxlen], size_t maxlen);` `<string.h>` `Standard C library (libc, -lc)`
The strnlen() function returns the number of bytes in the string pointed to by s, excluding the terminating null byte ('\0'), but at most maxlen. In doing this, strnlen() looks only at the first maxlen characters in the string pointed to by s and never beyond s[maxlen-1].
#### RETURN VALUE
The strnlen() function returns strlen(s), if that is less than maxlen, or maxlen if there is no null terminating ('\0') among the first maxlen characters pointed to by s.


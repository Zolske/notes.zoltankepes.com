# Standard C library functions

## character check functions
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

## Change Character Value
The character is stored in integer form in C programming. When a character is passed as an argument, corresponding ASCII value (integer) of the character is passed instead of that character itself.

### Changing the case
#### tolower `int tolower(int argument);` `ctype.h` 
If the arguments passed to the tolower() function are other than an uppercase alphabet, it returns the same character passed to the function otherwise it returns a lowercase character.

#### toupper `int toupper(int argument);` `ctype.h` 
If the arguments passed to the toupper() function are other than a lowercase alphabet, it returns the same character passed to the function otherwise it returns an uppercase character.

---

## String Functions

### String Length
#### strlen `size_t strlen(const char *s);` `<string.h>`
The strlen() function calculates the length of the string pointed to by `s`, excluding the terminating null byte ('\0').
##### RETURN VALUE
The strlen() function returns the number of bytes in the string pointed to by `s`.
##### NOTES
In cases where the input buffer may not contain a terminating null byte, strnlen(3) should be used instead.

#### strnlen `size_t strnlen(const char s[.maxlen], size_t maxlen);` `<string.h>`
The strnlen() function returns the number of bytes in the string pointed to by s, excluding the terminating null byte ('\0'), but at most maxlen. In doing this, strnlen() looks only at the first maxlen characters in the string pointed to by s and never beyond s[maxlen-1].
##### RETURN VALUE
The strnlen() function returns strlen(s), if that is less than maxlen, or maxlen if there is no null terminating ('\0') among the first maxlen characters pointed to by s.

---
### String Copy

#### strcpy `char *strcpy(char *dest, const char *src);` `<string.h>` 
The strcpy() function copies the string pointed to by src, including the terminating null byte ('\0'), to the buffer pointed to by dest. The strings may not overlap, and the destination string dest must be large enough to receive the copy. Beware of buffer overruns!
:::info  string overlapping
When the beginning of the destination string crosses the ending of the source string.
:::

#### strncpy `char *strncpy(char *dest, const char *src, size_t n);` `<string.h>`
The strncpy() function is similar, except that at most n bytes of src are copied.    
:::danger 
If there is no null byte among the first n bytes of src, the string placed in dest will not be null-terminated.
:::
If the length of src is less than n, strncpy() writes additional null bytes to dest to ensure that a total of n bytes are written.
##### RETURN VALUE
The strcpy(), and strncpy() functions return a pointer to the destination string dest.

#### strlcpy `size_t strlcpy(char *dst, const char *src, size_t size);` `<string.h>`
Copies up to `size - 1` characters from the NUL-terminated string `src` to `dst`, NUL-terminating the result.
##### RETURN VALUE
The length of src.

###### summary:
|function |Null termination |return |
|---|---|---|
|strcpy |yes, copy Null from source |pointer to `dest` string |
|str**n**cpy |if Null is within the range of `n` or the remaining spaces if `n` is longer than `src` |pointer to `dest` string |
|str**l**cpy |yes |length of `src` |

---
### String Concatenation

#### strncat `char *strncat(char *dest, const char *src, size_t n);`
Appends the string pointed to by src to the end of the string pointed to by dest up to n characters long. Only Null-terminated if there was one in src within the range of src. 
##### RETURN VALUE
A pointer to the destination string dest.

#### strlcat `size_t strlcat(char *dst, const char *src, size_t size);` `<string.h>`
Appends the NUL-terminated string `src` to the end of `dst`. It will append at most `size - strlen(dst) - 1` bytes, NUL-terminating the result.
##### RETURN VALUE
The initial length of dst plus the length of src.

---
### Find Character / String in String

#### strchr `char *strchr(const char *str, int c)`
Searches for the first occurrence of the character c (an unsigned char) in the string pointed to by the argument str.
##### RETURN VALUE
Returns a pointer to the **first** occurrence of the character c in the string str, or NULL if the character is not found.

#### strrchr `char *strrchr(const char *str, int c)`
Searches for the last occurrence of the character c (an unsigned char) in the string pointed to, by the argument str.
##### RETURN VALUE
Returns a pointer to the **last** occurrence of the character c in the string str, or NULL if the character is not found.

#### strstr `char *strstr(const char *haystack, const char *needle)`
Finds the first occurrence of the substring needle in the string haystack. The terminating '\0' characters are not compared.
- haystack − This is the main C string to be scanned.
- needle − This is the small string to be searched within haystack string.
##### RETURN VALUE
This function returns a pointer to the first occurrence in haystack of any of the entire sequence of characters specified in needle, or a Null pointer if the sequence is not present in haystack.

---
### Compare Strings
Is done character by character as long as they are the same, soon as one character becomes different, the comparison stops.

#### strcmp `int strcmp(const char *str1, const char *str2)`
Compares the string pointed to, by str1 to the string pointed to by str2.

#### strncmp `int strncmp(const char *str1, const char *str2, size_t n)`
Compares at most the first n bytes of str1 and str2.

##### RETURN VALUE for strcmp and strncmp
- if Return value < 0 then it indicates str1 is less than str2.
- if Return value > 0 then it indicates str2 is less than str1.
- if Return value = 0 then it indicates str1 is equal to str2.

---
## Memory Manipulation

#### memcpy `void *memcpy(void *dest, const void *src, size_t numBytes);` `<string.h>`
Is used to copy a block of memory from one location to another. Unlike other copy functions, the memcpy function copies the specified number of bytes from one memory location to the other memory location regardless of the type of data stored.

#### memset `void *memset(void *str, int c, size_t n)`
Copies the character c (an unsigned char) to the first n characters of the string pointed to, by the argument str.
- str − This is a pointer to the block of memory to fill.
- c − This is the value to be set. The value is passed as an int, but the function fills the block of memory using the unsigned char conversion of this value.
- n − This is the number of bytes to be set to the value.
##### RETURN VALUE
This function returns a pointer to the memory area str.
##### example for an int
```c
#include <stdio.h> 
#include <string.h> 
  
void printArray(int arr[], int n) 
{ 
   for (int i=0; i<n; i++) 
      printf("%d ", arr[i]); 
} 
  
int main() 
{ 
    int n = 10; 
    int arr[n]; 
  
    // Fill whole array with 100. 
    memset(arr, 10, n*sizeof(arr[0])); 
    printf("Array after memset()\n"); 
    printArray(arr, n); 
  
    return 0; 
}
```

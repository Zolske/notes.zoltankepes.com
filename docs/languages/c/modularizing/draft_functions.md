# Standard C library functions

---

- [x] isalpha
- [x] isprint
- [x] isdigit
- [x] isalnum
- [x] isascii
- [x] tolower
- [ ] bzero
- [x] strlen
- [x] strlcpy
- [x] strlcat
- [x] strchr
- [x] strrchr
- [x] strncmp
- [x] strnstr
- [ ] memchr
- [ ] memcpy
- [ ] memcmp
- [ ] memmove
- [ ] memset
- [ ] atoi
- [ ] calloc
- [ ] strdup

## Character Functions

### Check Character

These functions check whether c, which must have the value of an unsigned char or EOF, falls into a certain character class according to the current locale.

<details>
    <summary>check character type</summary>
    <table>
  <thead>
    <tr>
      <th>prototype</th>
      <th>explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>int isalnum(int c);</code></td>
      <td>checks for an alphanumeric character; it is equivalent to (isalpha(c) || isdigit(c)).
      </td>
    </tr>
    <tr>
      <td><code>int isalpha(int c);</code></td>
      <td>checks for an alphabetic character; in the standard "C" locale, it is equivalent to (isupper(c) || islower(c)). In some locales, there may be additional characters for which isalpha() is true-letters which are neither upper case nor lower case.</td>
    </tr>
    <tr>
      <td><code>int isascii(int c);</code></td>
      <td>checks whether c is a 7-bit unsigned char value that fits into the ASCII character set.</td>
    </tr>
    <tr>
      <td><code>int isblank(int c);</code></td>
      <td>checks for a blank character; that is, a space or a tab.</td>
    </tr>
    <tr>
      <td><code>int iscntrl(int c);</code></td>
      <td>checks for a control character.</td>
    </tr>
    <tr>
      <td><code>int isdigit(int c);</code></td>
      <td>checks for a digit (0 through 9).</td>
    </tr>
    <tr>
      <td><code>int isgraph(int c);</code></td>
      <td>checks for any printable character except space.</td>
    </tr>
    <tr>
      <td><code>int islower(int c);</code></td>
      <td>checks for a lower-case character.</td>
    </tr>
    <tr>
      <td><code>int isprint(int c);</code></td>
      <td>checks for any printable character including space.</td>
    </tr>
    <tr>
      <td><code>int ispunct(int c);</code></td>
      <td>checks for any printable character which is not a space or an alphanumeric character.</td>
    </tr>
    <tr>
      <td><code>int isspace(int c);</code></td>
      <td>checks for white-space characters. In the "C" and "POSIX" locales, these are: space, form-feed ('\f'), newline ('\n'), carriage return ('\r'), horizontal tab ('\t'), and vertical tab ('\v').</td>
    </tr>
    <tr>
      <td><code>int isupper(int c);</code></td>
      <td>checks for an uppercase letter.</td>
    </tr>
    <tr>
      <td><code>int&nbsp;isxdigit(int&nbsp;c);</code></td>
      <td>checks for a hexadecimal digits, that is, one of<br />
        0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F.</td>
    </tr>
  </tbody>
  <tfoot>
     <tr>
      <td colspan="2"><b>Header:</b><br />
        <code>&lt;ctype.h&gt;</code>
      </td>
    </tr>
    <tr>
      <td colspan="2"><b>Return Value:</b><br />
        The values returned are nonzero if the character c falls into the tested class, and a zero value if not.
      </td>
    </tr>
    <tr>
      <td colspan="2"><b>Note:</b><br />
        The details of what characters belong into which class depend on the current locale. For example, isupper() will not recognize an A-umlaut (Ä) as an uppercase letter in the default C locale.
      </td>
    </tr>
  </tfoot>
</table>
</details>

---

### Changing Character Case

The character is stored in integer form in C programming. When a character is passed as an argument, corresponding ASCII value (integer) of the character is passed instead of that character itself.

<details>
  <summary>changing character case</summary>
  <table>
    <thead>
      <tr>
          <th>prototype</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>int tolower(int arg);</code></td>
        <td>If the arguments passed to the tolower() function are other than an uppercase alphabet, it returns the same character passed to the function otherwise it returns a lowercase character.</td>
      </tr>
      <tr>
        <td><code>int&nbsp;toupper(int&nbsp;arg);</code></td>
        <td>If the arguments passed to the toupper() function are other than a lowercase alphabet, it returns the same character passed to the function otherwise it returns an uppercase character.</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2"><b>Header:</b><br />
          <code>&lt;ctype.h&gt;</code>
        </td>
      </tr>
    </tfoot>
  </table>
</details>

---

## String Functions

### Finding String Length

<details>
  <summary>string length</summary>
  <table>
    <thead>
        <tr>
          <th>prototype</th>
          <th>description</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>size_t strlen(const char *s);</code></td>
        <td>The strlen() function calculates the length of the string pointed to by `s`, excluding the terminating null byte ('\0').
          <br /><b>Return Value:</b><br />
          The strlen() function returns the number of bytes in the string pointed to by `s`.
          <br /><b>Note:</b><br />
          In cases where the input buffer may not contain a terminating null byte, strnlen(3) should be used instead.
        </td>
      </tr>
      <tr>
        <td><code>size_t&nbsp;strnlen(const&nbsp;char&nbsp;*s,&nbsp;size_t&nbsp;maxlen);</code></td>
        <td>
          strnlen() returns the number of characters in the string s, not including the terminating \0 character, but at most maxlen. In doing this, strnlen() looks only at the first maxlen characters at s and never beyond s + maxlen.
          <br /><b>Return Value:</b><br />
          strnlen() returns <b>strlen(s)</b>, if that is less than maxlen, or maxlen if there is no \0 character among the first maxlen characters pointed to by s.
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2"><b>Header:</b><br />
          <code>&lt;string.h&gt;</code></td>
      </tr>
    </tfoot>
  </table>
</details>

---

### Copy String

<details>
  <summary>copy string to ...</summary>
  <table>
    <thead>
      <tr>
          <th>prototype</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>char&nbsp;*strcpy(char&nbsp;*dest,&nbsp;const&nbsp;char&nbsp;*src);</code></td>
        <td>
          The strcpy() function copies the string pointed to by src, including the terminating null byte ('\0'), to the buffer pointed to by dest. The strings may not overlap, and the destination string dest must be large enough to receive the copy. Beware of buffer overruns!
          When the beginning of the destination string crosses the ending of the source string.
          <br /><b>Return Value:</b><br />
          Returns a pointer to the destination string dest.
        </td>
      </tr>
      <tr>
        <td><code>char&nbsp;*strncpy(char&nbsp;*dest,&nbsp;const&nbsp;char&nbsp;*src,&nbsp;size_t&nbsp;n);</code></td>
        <td>
          The strncpy() function is similar, except that at most n bytes of src are copied.  
          If there is no null byte among the first n bytes of src, the string placed in dest will not be null-terminated.
          If the length of src is less than n, strncpy() writes additional null bytes to dest to ensure that a total of n bytes are written.
          <br /><b>Return Value:</b><br />
          Returns a pointer to the destination string dest.
        </td>
      </tr>
      <tr>
        <td><code>size_t&nbsp;strlcpy(char&nbsp;*dst,&nbsp;const&nbsp;char&nbsp;*src,&nbsp;size_t&nbsp;size);</code></td>
        <td>
          Copies up to size - 1 characters from the NUL-terminated string src to dst, NUL-terminating the result.
          <br /><b>Return Value:</b><br />
          The length of src.
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2"><b>Header:</b><br />
          <code>&lt;string.h&gt;</code></td>
      </tr>
    </tfoot>
  </table>
</details>

---

### Concatenate String

<details>
  <summary>adding strings together</summary>
  <table>
    <thead>
        <tr>
          <th>prototype</th>
          <th>description</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>char&nbsp;*strncat(char&nbsp;*dest,&nbsp;const&nbsp;char&nbsp;*src,&nbsp;size_t&nbsp;n);</code></td>
        <td>
          Appends the string pointed to by src to the end of the string pointed to by dest up to n characters long. Only Null-terminated if there was one in src within the range of src.
          <br /><b>Return Value:</b><br />
          A pointer to the destination string dest.
        </td>
      </tr>
      <tr>
        <td><code>size_t&nbsp;strlcat(char&nbsp;*dst,&nbsp;const&nbsp;char&nbsp;*src,&nbsp;size_t&nbsp;size);</code></td>
        <td>
          Appends the NUL-terminated string `src` to the end of `dst`. It will append at most `size - strlen(dst) - 1` bytes, NUL-terminating the result.
          <br /><b>Return Value:</b><br />
          The initial length of dst plus the length of src.
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2"><b>Header:</b><br />
          <code>&lt;string.h&gt;</code></td>
      </tr>
    </tfoot>
  </table>
</details>

---

### Find Character / String in String

<details>
  <summary>find character or string in string</summary>
  <table>
    <thead>
        <tr>
          <th>prototype</th>
          <th>description</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>char&nbsp;*strchr(const&nbsp;char&nbsp;*str,&nbsp;int&nbsp;c)</code></td>
        <td>
          Searches for the first occurrence of the character c (an unsigned char) in the string pointed to by the argument str.
          <br /><b>Return Value:</b><br />
          Returns a pointer to the first occurrence of the character c in the string str, or NULL if the character is not found.       
        </td>
      </tr>
      <tr>
        <td><code>char *strrchr(const&nbsp;char&nbsp;*str,&nbsp;int&nbsp;c)</code></td>
        <td>
          Searches for the last occurrence of the character c (an unsigned char) in the string pointed to, by the argument str.
          <br /><b>Return Value:</b><br />
          Returns a pointer to the last occurrence of the character c in the string str, or NULL if the character is not found.     
        </td>
      </tr>
      <tr>
        <td><code>char&nbsp;*strstr(const&nbsp;char&nbsp;*haystack,&nbsp;const&nbsp;char&nbsp;*needle)</code></td>
        <td>
          Finds the first occurrence of the substring needle in the string haystack. The terminating '\0' characters are not compared.
          <br />- haystack - This is the main C string to be scanned.
          <br />- needle - This is the small string to be searched within haystack string.
          <br /><b>Return Value:</b><br />
          This function returns a pointer to the first occurrence in haystack of any of the entire sequence of characters specified in needle, or a Null pointer if the sequence is not present in haystack. If needle is an empty string then haystack is returned.
        </td>
      </tr>
      <tr>
        <td><code>char&nbsp;*strnstr(const&nbsp;char&nbsp;*haystack,&nbsp;const&nbsp;char&nbsp;*needle,&nbsp;size_t&nbsp;len)</code></td>
        <td>
          The same as "strstr", with the addition that no more than len characters are searched.
          <br /><b>Return Value:</b><br />
            The same us "strstr".
          <br /><b>Note:</b><br />
          Is not portable because it is a "NetBSD" specific API function.
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2"><b>Header:</b><br />
          <code>&lt;string.h&gt;</code>
        </td>
      </tr>
    </tfoot>
  </table>
</details>

---

### Compare Strings

Is done character by character as long as they are the same, soon as one character becomes different, the comparison stops and the result is returned.

<details>
  <summary>comparing strings</summary>
  <table>
    <thead>
        <tr>
          <th>prototype</th>
          <th>description</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>int&nbsp;strcmp(const&nbsp;char&nbsp;*str1,&nbsp;const&nbsp;char&nbsp;*str2)</code></td>
        <td>Compares the string pointed to, by str1 to the string pointed to by str2.</td>
      </tr>
      <tr>
        <td><code>int&nbsp;strncmp(const&nbsp;char&nbsp;*str1,&nbsp;const&nbsp;char&nbsp;*str2,&nbsp;size_t&nbsp;n)</code></td>
        <td>Compares at most the first n bytes of str1 and str2.</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2"><b>Return Value:</b>
          <br />- Return value &lt; 0 :&nbsp; str1 is less than str2.
          <br />- Return value &gt; 0 :&nbsp; str2 is less than str1.
          <br />- Return value = 0 :&nbsp; str1 is equal to str2.
        </td>
      </tr>
      <tr>
        <td colspan="2"><b>Header:</b><br />
          <code>&lt;string.h&gt;</code>
        </td>
      </tr>
    </tfoot>
  </table>
</details>

---

[example code](https://replit.com/@ZoltsKe/cexamples#main.c)

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

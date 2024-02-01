# reverse_bits

Reversing the bits of a byte means changing the order of its binary representation. The last bite becomes the first and so on, e.g., `00000001` -> `10000000`

 <details>
<summary>Subject</summary>

### Subject

     Assignment name  : reverse_bits
     Expected files   : reverse_bits.c
     Allowed functions:
     --------------------------------------------------------------------------------

     Write a function that takes a byte, reverses it, bit by bit (like the
     example) and returns the result.

     Your function must be declared as follows:

     unsigned char	reverse_bits(unsigned char octet);

     Example:

       1 byte
     _____________
      0010  0110
     	 ||
     	 \/
      0110  0100

 </details>

```c showLineNumbers
unsigned char reverse_bits(unsigned char octet)
{
    int i = 8;
    unsigned char reverse = 0;

    while (i--)
    {
        if (octet & (1 << (7 - i)))
            reverse |= (1 << i);
    }
    return (reverse);
}
```

  <details>
<summary>Code Explanation</summary>

### Code Explanation

- **line 3:** `i` is used ... :
  - as a counter, we need to perform 8 operations, one for each bit
  - to determine how far we "left shift"
- **line 4:** is initialized to `0` -> all bits are set to 0 (`00000000`), we now only need to set the once which need to be `1`.
- **line 8:** -> _to find out if we need to set a "1 bit"_

  - `(7 - i)` -> in the first iteration the value is `0`, but it is going to increment till it reaches `7` with the last iteration
  - `(1 << (7 - i))` -> we are shifting the one bite which is `1` (`00000001`) from the right to the left with each iteration:

  | iteration |  (1 << (7 - i))  | value |    bits    |
  | :-------: | :--------------: | :---: | :--------: |
  |    1st    | `(1 << (7 - 7))` |   1   | `00000001` |
  |    2nd    | `(1 << (7 - 6))` |   2   | `00000010` |
  |    3rd    | `(1 << (7 - 5))` |   4   | `00000100` |
  |    4th    | `(1 << (7 - 4))` |   8   | `00001000` |
  |    5th    | `(1 << (7 - 3))` |  16   | `00010000` |
  |    6th    | `(1 << (7 - 2))` |  32   | `00100000` |
  |    7th    | `(1 << (7 - 1))` |  64   | `01000000` |
  |    8th    | `(1 << (7 - 0))` |  128  | `10000000` |

  - `octet & (1 << (7 - i))` -> if the `octet` has on the same position also a "1 bite" the condition becomes **true** otherwise we don't need to do anything because we set all positions of the `reverse` variable to `0` when we initialized it.

  | bit a | bit b | a & b (a AND b) |
  | :---- | :---- | :-------------- |
  | 0     | 0     | 0               |
  | 0     | 1     | 0               |
  | 1     | 0     | 0               |
  | 1     | 1     | 1               |

  |        |   binary   |
  | :----: | :--------: |
  | octet  | `00000010` |
  |   &    | `00000010` |
  | result | `00000010` |

_if the 1 bit matches: the result is a **non-zero value** which makes the condition **true**_

- **line 9:** _-> we set on the opposite position a "1 bit"_

  - `(1 << i)` -> we use the "left shift operator" to move our "1 bit" to the opposite side, e.g. `00000001` -> `10000000`

  | iteration | (1 << (7 - i)) | value |    bits    |
  | :-------: | :------------: | :---: | :--------: |
  |    1st    |   `(1 << 7)`   |  128  | `10000000` |
  |    2nd    |   `(1 << 6)`   |  64   | `01000000` |
  |    3rd    |   `(1 << 5)`   |  32   | `00100000` |
  |    4th    |   `(1 << 4)`   |  16   | `00010000` |
  |    5th    |   `(1 << 3)`   |   8   | `00001000` |
  |    6th    |   `(1 << 2)`   |   4   | `00000100` |
  |    7th    |   `(1 << 1)`   |   2   | `00000010` |
  |    8th    |   `(1 << 0)`   |   1   | `00000001` |

  - `reverse |= (1 << i)` -> we use the "OR bitwise assign operator" to assign the result of the "OR Bitwise operation" to `reverse`.

  | bit a | bit b | a \| b (a OR b) |
  | :---- | :---- | :-------------- |
  | 0     | 0     | 0               |
  | 0     | 1     | 1               |
  | 1     | 0     | 1               |
  | 1     | 1     | 1               |

  |         |   binary   |
  | :-----: | :--------: |
  | reverse | `00000000` |
  |   \|    | `01000000` |
  | result  | `01000000` |

_0 bit is going to be changed to 1 bit if the second operand has "1 bit" on that position_

 </details>

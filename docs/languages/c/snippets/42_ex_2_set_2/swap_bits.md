# swap_bits

Swaps the first half of the bits with the last half.

<details>
  <summary>Subject</summary>

### Subject

    Assignment name  : swap_bits
    Expected files   : swap_bits.c
    Allowed functions:
    --------------------------------------------------------------------------------

    Write a function that takes a byte, swaps its halves (like the example) and
    returns the result.

    Your function must be declared as follows:

    unsigned char	swap_bits(unsigned char octet);

    Example:

      1 byte
    _____________
     0100 | 0001
         \ /
         / \
     0001 | 0100

</details>

```c showLineNumbers
unsigned char swap_bits(unsigned char octet)
{
    unsigned char swap = 0;
    int i = -1;
    int offset = 4;

    while (++i < 8)
    {
        if (octet & (1 << i))
            swap |= (1 << (offset + i));
        if (i == 3)
            offset = -4;
    }
    return (swap);
}
```

<details>
  <summary>Code Explanation</summary>

### Code Explanation

Works in the same principe as "reverse_bits" only that we are using an offset to chang the position from where we are setting our "1 bit".

</details>

---

## Advanced Function

```c
unsigned char swap_bits(unsigned char octet)
{
    return ((octet >> 4) | (octet << 4));
}
```

<details>
  <summary>Advanced Explanation</summary>

### Advanced Explanation

The Explanation is split into 3 parts. Based on the following example:

| character | value |   binary   |
| :-------: | :---: | :--------: |
|   `'z'`   | `122` | `01111010` |

1. `(octet >> 4)`

|   octet    | operator |   result   |
| :--------: | :------: | :--------: |
| `01111010` |  `>> 4`  | `00000111` |

2. `(octet << 4)`

|   octet    | operator |   result   |
| :--------: | :------: | :--------: |
| `01111010` |  `<< 4`  | `10100000` |

3. `|`

| bit a | bit b | a \| b (a OR b) |
| :---: | :---: | :-------------: |
|   0   |   0   |        0        |
|   0   |   1   |        1        |
|   1   |   0   |        1        |
|   1   |   1   |        1        |

_basically everything what is '0 | 0' stays '0' everything where is a '1' becomes '1'._

| `(octet >> 4)` | \|  | `(octet << 4)` |   result   |
| :------------: | :-: | :------------: | :--------: |
|   `00000111`   | \|  |   `10100000`   | `10100111` |

</details>

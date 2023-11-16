---
sidebar_position: 8
---

# 8. Creating and Using Enumerations

### What are Enumerations?

Enumeration or Enum in C is a special kind of data type defined by the user. It consists of constant integrals or integers that are given names by a user. The use of enum in C to name the integer values makes the entire program easy to learn, understand, and maintain by the same or even different programmer.

- allow us to group conceptually related values together in an set (_to make the relationship between each value clear_)
- helps to write more readable code, by grouping related values together, which can be used by an meaningful name
- the value itself is not always impotent, it is the "enum item names" which can be used as a "super boolean"

### Defining Enumerations

- enumerations values are always of type `const int` (_the value itself can not change_)

![enum data type](./img/enum_data_type.png)

- **line 1:** defines the `enum suit` data type, the name is arbitrary
  - **NOTE:** "enumeration item names" need to be uniq, but there values can be the same
- **line 2:** declare a variable of the data type `enum suit` with the name `card`
- **line 3:** assign a value `4` to the variable `card`

#### without defining values

```c title="let the compiler assign values"
 enum suit { eSpade, eHeart, eDiamond, eClub };
 // the values are up to the compiler, usually they are sequenced from: 0, 1, 2, 3
```

```c title="can be assigned by compiler and programmer"
 enum suit { eSpade = 0, eHeart, eDiamond, eClub = 2};
 // the undefined values are up to the compiler, does not consider set values: 0, 1, 2, 2
```

### examples of "enum data type variable" usage

```c title="possible values for a variable of the data type enum ..."
card = eHart;       // value is 3
card = 8;           // value is 8, 'eHart' is a const but the variable itself can change
card = 4.3;         // value is 4, because of conversion to int
card = card - 3;    // value is 1, can be used like any other number in operations
card = "string";    // NOT POSSIBLE! can be only int
if (card == eClub)  // can be used in comparison
if (card == 1)      // the same as above
```

### scoping the enum data type

```c title="global (anywhere accessible in the whole file, but not in other files)"
enum something { someA = 1, someB = 2, someC = 5 };

int	main(void){
    enum something hello;}
```

```c title="local (only within the block and its sub blocks )"
int	main(void){
    enum something { someA = 1, someB = 2, someC = 5 };
    enum something hello;
    if (true)
        // "hello" is accessible
}
void some_function(void){
        // "hello" is not accessible
}
```

### anonymous enumerations type (literal integer constants)

We can declare an anonymous enumerated type that contains enumerated items that act identically to literal constants, as follows:

```c title="without name"
#include <stdio.h>                                  // needed for printf
enum { inchesPerFoot = 12, feetPerMile   = 5280 };

int main(void){
    printf("feet per mile: %d", feetPerMile);}     // "feet per mile: 5280"
```

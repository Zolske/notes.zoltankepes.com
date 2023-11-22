---
sidebar_position: 1
---

# 9. Creating and using Structures

A structure is a user-defined type. There may be multiple values in a structure and they may be of the same type or different types. A structure, then, is a collection of information representing a complex object.

## Declaring Structures

### defining a structure type

```c title="defining a 'enum e_suit' for the structure below"
 enum e_suit { eSpade = 1, eHeart = 2, eDiamond = 3, eClub = 4 };
```

![diagram structure declaration](../part_2_complex_data_types/img/declaring_structure.png)

- **CONVENTION:** structure names should be in lowercase and start with the prefix `s_`
- each component can be of any intrinsic data type (_Integer, Real, Boolean, Char, ..._) or any **previously** defined custom type (enum, a structure within a structure)
- components can't be initialized within a structure when the structure is defined
- the initialization of components is done when a variable of that structure type is declared

### initializing structures

Structures can be initialized in 3 different ways:

#### 1. initializing all components with 0

```c
struct s_card card = {0};  // Entire structure is zero-d.
```

- initializing a instance of the structure `s_card` with the name `card` and every component with the value `0`
- can only be done when the variable (_`card` in this example_) is declared

#### 2. at the time of declaration

```c
struct s_card card = { eSpade , (int) eHeart , false };
```

- must be in the same order in which the structure was declared

#### 3. assigning a already initiated structure of the same type

```c
struct s_card card_1 = card_0;
```

- creates an copy of the before initiated structure `card_0`
- a default instance of the structure can be created which serves as blueprint for future instances
- the component type of the two structures and padding must match for the bitwise assignment to work

#### after declaration, component by component:

```c
struct s_card card_2 = {0}; // Entire structure is zero-d.
card_2.suit = eHart;
card_2.number = 42;
card_2.isWild = false;
```

- values of an structure can be resigned (_like variables_) at any time later in the program
- the components do not have to be assigned in the same order that they are defined in the structure, but it is a good practice to do so

### accessing structure values

```c
enum e_suit e_card;                             // declaring a variable of enum 'e_card'
e_card = eDiamond;                              // assign a value to the variable 'e_card'
int handValue = card_2.suit + card_2.number;    // assign the sum of card_2.suit and card_2.number to handValue
if (card_2.suit < e_card){ ...}                 // compare value of card_2.suit to enum variable e_card
```

### structure alignment

- a given structure is padded with enough space so that it contains an even multiple of the size of its largest component
  - _e.g.: if the biggest component is an int with 4 byte then the structure size is an multitude of 4, e.g.:_
    - _1x int (4byte), 3x char (1byte) = 8 byte_
    - _1x int (4byte), 5x char (1byte) = 12 byte_
- Padding within a structure can occur at the end or even in between components. Holes may appear between two consecutive components or after the last component.
- Because of the padding that's used to align structures, we cannot compare two structures as whole entities for comparison. If padding is present in a structure, the contents of that padding may be undefined, depending on how it is initialized. Therefore, even if two structures have identical component values, the values in the padding are highly unlikely to be equal.
- If an equality test is required, a function must be written to compare two structures component by component.

### performing operations on structures – functions

- Except for assignment, there are no intrinsic operations for structures. To perform any operation on a single structure or with two structures, a function must be written to perform the desired operation.

```c title="function to compare two structure components"
bool isEqual( struct s_card card_1 , struct s_card card_2 )  {
  if( card_1.suit != card_2.suit ) return false;
  if( card_1.number != card_2.number ) return false;
  return true;
}
```

### structures of structures

- A structure can contain components of any type, even other structures.

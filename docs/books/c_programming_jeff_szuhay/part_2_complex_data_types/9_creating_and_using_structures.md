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
- can only done when the variable (_'card' in this example_) is declared

#### 2. at the time of declaration

```c
struct s_card card = { eSpade , (int) eHeart , false };
```

- must be in the same order in which the structure was declared

#### 3. assigning a already initiated structure of the same type

```c
struct s_card card = card_0;
```

- creates an copy of the before initiated structure `card_0`
- components and padding must match for bitwise assignment to work

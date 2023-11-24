---
sidebar_position: 3
---

# 11 Working with Arrays

- An array is a collection of two or more values, all of which have the same type and share a single common base name.
- Once an array is declared, its size is fixed and cannot be changed.

---

## Creating an Array

There are two types of arrays: **constant-length** and **variable-length VLA** arrays

![array graphic](./img/array.png)

### Declaring an Array

- **data type:**
  - any intrinsic data types: whole numbers (_integers_), real numbers (_floating point and complex numbers_), characters, Boolean
  - user-defined data types: enumeration and structures
  - complex data types: arrays, pointers
- **name:**
  - name of the array
- **length:**
  - the length determents how many elements an array can have, it can not be changed after
  - must be a positive integer

### Initializing and Accessing an Array

- is done by accessing the index position of an element and assigning an value to it
- **NOTE:** indexing starts from 0, a array with 4 elements has an index from 0 to 3

```c
int arr[4];             // declaring an array with 4 elements
int index;
index = 1;
arr[0] = 100;           // initializing a value to the 1st index position
arr[index] = 200;       // using a variable to assign a value to the 2nd index position
arr[index +1] = 300;    // using an expression to get to the 3th index position
arr[fun()] = arr[2];    // evaluating a function "int fun(void) { return (3); }" to get to the 3rd index, assign the value from the 2nd index
```

#### declaring and initializing

All of this examples are constant-length arrays:

```c
float lengthArray[] = {1.0 , 2.0 , 3.0}; // dynamic assignment: the length is determent by its values in this example 3
int anArray[10] = {8};                   // the length is 10 elements and every element is set to '8'
```

#### calculating the length of an array

Can also be used to index the last element of an array or to start a loop from the last element.

```c
int arr[4] = {0};
unsigned long arr_length;
int           last_element;
arr[3] = 99;
arr_length = sizeof(arr) / sizeof(int);             // length of array as "unsigned long
last_element = arr[sizeof(arr) / sizeof(int) - 1];  // accessing the last element, 99
```

---

## Constant-Length Arrays

- Is an array who's size or length is known at compile time and before runtime.

```c
int anArray[10];                // literal constant value

#define ARRAY_SIZE 10
int secondArray[ ARRAY_SIZE ];  // a preprocessor symbol is used to define the array size

enum {
  eArraySize = 10
}
int thirdArray[ eArraySize ];   // an enumeration constant is used to define the array size
```

---

## Variable-Length Arrays VLA

- Is an array who's size or length is **not** known until runtime and can only be evaluated when the program is running, at runtime.
- Once created, the size of a VLA is fixed and cannot change.
- Can not be initialized when they are declared.
- Enable functions to operate on arrays much more flexibly (_function parameters_).
- since C11, variable length arrays are optional, not all compiler support them.

```c showLineNumbers
const int kArraySize = 10;
int fourthArray[ kArraySize ];                      // constant is used
int arraySize = 10;
int fifthArray[ arraySize ];                        // variable is used
int someVariable = 5;
int sixthArray[ 2 * someVariable ];                 // a variable is involved
double tireTread[ getNumberOfWheels( tricycle ) ];  // return of an function
int n;
scanf("%d", &n);
int array[n];                                       // user input
```

- **line 2, 4:** The C compiler does not see any difference between a variable and constant variables when they have been declared.

:::info

In C99, VLAs were a mandatory feature of the language. However, VLAs could not be reliably implemented due to memory constraints in certain environments. This, therefore, limited the adoption of C99. To remedy this, C11 made VLAs an optional feature of the language. Any implementation that does not support VLAs sets the `STDC_NO_VLA` symbol to 1. This can then be tested by the programmer at runtime and handled appropriately, as follows:

```c
#if __STDC_NO_VLA__

  … Code that does not use VLAs.

#else

  … Code that uses VLAs.

#endif
```

:::

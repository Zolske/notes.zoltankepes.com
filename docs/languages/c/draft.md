# type void pointer
---
reference:  [Void Pointer in C](https://byjus.com/gate/void-pointer-in-c/#:~:text=Faqs-,What%20is%20a%20Void%20Pointer%20in%20C%3F,type%20address%20in%20the%20program.)
---

## What is a "type Void Pointer" in C?
- The **type void pointers** refer to the pointers that have no data type associated with them. As the name suggests, it can point to any type of data (*e.g. int, float, char, ...*). 
- The allocation of memory also becomes very easy with such void pointers. It is because they make the functions flexible enough to be allocated with bytes and memories appropriately.
- This is possible because all addresses have the same length, no matter if the address points to an int or char, ...

## Why use a Void Pointer in C?
As we all know, the address that is assigned to any pointer must have the same data type as we have specified in the declaration of the pointer. For instance, when we are declaring the float pointer, this float pointer won’t be able to point to an int variable or any other variable. In simpler words, it will only be able to point to the float type variable. We thus use a pointer to void to overcome this very problem.
The pointer to void can be used in generic functions in C because it is capable of pointing to any data type. One can assign the void pointer with any data type’s address, and then assign the void pointer to any pointer without even performing some sort of explicit typecasting. So, it reduces complications in a code.

## Syntax
- The declaration of a void pointer happens with the keyword `void`, a `*` followed by the name of the pointer.
- The address of any data type can then be assigned to the void pointer multiply times
- But to dereference the void pointer, it needs to be casted into the appropriated data type first and then dereferenced.
```c title="declaring a void pointer and passing addresses of different types" showLineNumbers
#include<stdlib.h>
#include<stdio.h>

int main(void) {
	int    num = 42;
	float	flo = 4.2;
	char   *str = "42";
	void   *name_of_pointer;  //declaring a void pointer

	name_of_pointer = &num;  //assign address of an int
  // highlight-next-line
	printf("The Integer value is = %d\n", *( (int*)name_of_pointer) );
	name_of_pointer = &flo; //assign address of an float
  // highlight-next-line
	printf("The Float value is = %.1f\n", *( (float*)name_of_pointer) );
	name_of_pointer = str;  //assign the first address of a sequence of characters
  // highlight-next-line
	printf("The String value is = %s", (char*)name_of_pointer);
	return (0);}
```
- **line 10-12:**   
  pointer needs to be cast to the appropriated data type (*pointer to int and float*) and then dereferenced
- **line 14:**   
  because the string is a pointer of char (*pointing to the beginning of the string*), the void pointer does not need to be dereferenced

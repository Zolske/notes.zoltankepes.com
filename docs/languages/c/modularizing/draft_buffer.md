# Buffer

## Clear Buffer
### The problem
- if for example, a `scanf` function gets more input than it saves, the remaining values stay in the buffer which is then passed to the next `scanf` function without even asking the user for input.
```c
#include<stdio.h>

void main()
{
  int v1,v2;
  printf("\n Enter v1: ");
  scanf("%d", &v1); //if more then one value entered separated by space 
  printf("\n Enter v2: ");
  scanf("%d", &v2); //value taken from buffer not the user
  printf("\n v1+v2=%d ",v1+v2);
}
```
### The Solution
- clear the buffer before asking for the second `scanf`   
  `while (getchar() != '\n'); //Clearing the buffer`
  

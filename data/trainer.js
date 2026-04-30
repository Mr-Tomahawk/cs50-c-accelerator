window.CS50C = window.CS50C || {};

window.CS50C.trainerCards = [
  {
    prompt: "After Week 1's first lesson: write the minimal C skeleton that prints hello, world.",
    answer: `#include <stdio.h>

int main(void)
{
    printf("hello, world\\n");
}`
  },
  {
    prompt: "After Weeks 1-4 headers have appeared: which headers provide `printf`, `strlen`, `toupper`, and `malloc`?",
    answer: `printf  -> #include <stdio.h>
strlen  -> #include <string.h>
toupper -> #include <ctype.h>
malloc  -> #include <stdlib.h>`
  },
  {
    prompt: "After arrays are introduced: what is the last valid index of `int scores[10]`?",
    answer: "9. Indexes are zero-based, so valid indexes are 0 through 9."
  },
  {
    prompt: "After strings and `strlen` are introduced: write this fragment, a loop over every character in string `s`.",
    answer: `for (int i = 0, n = strlen(s); i < n; i++)
{
    printf("%c\\n", s[i]);
}`
  },
  {
    prompt: "After command-line arguments are introduced: what do `argc` and `argv` mean?",
    answer: "`argc` is the argument count. `argv` is the argument vector, an array of strings. `argv[0]` is the program name."
  },
  {
    prompt: "After Week 3 search: when can you use binary search?",
    answer: "When the data is sorted and you can compare the target to the middle element."
  },
  {
    prompt: "After recursion is introduced: what two things must every recursive function have?",
    answer: "A base case and a recursive case that moves toward the base case."
  },
  {
    prompt: "After pointers are introduced: what do `&x` and `*p` mean?",
    answer: "`&x` is the address of x. `*p` is the value stored at the address inside pointer p."
  },
  {
    prompt: "After dynamic memory is introduced: write this fragment, the safe shape for `malloc` inside `main`.",
    answer: `int *x = malloc(sizeof(int));
if (x == NULL)
{
    return 1;
}
free(x);`
  },
  {
    prompt: "After string copying is introduced: why does a copied string often need `strlen(s) + 1` bytes?",
    answer: "The extra byte stores the null terminator, `\\0`."
  },
  {
    prompt: "After structs and pointers are introduced: what is `ptr->number` equivalent to?",
    answer: "It is shorthand for `(*ptr).number`."
  },
  {
    prompt: "After linked lists are introduced: write this fragment, a linked-list traversal that assumes `node` and `list` exist.",
    answer: `for (node *ptr = list; ptr != NULL; ptr = ptr->next)
{
    printf("%i\\n", ptr->number);
}`
  },
  {
    prompt: "After linked-list cleanup is introduced: write this fragment, a safe linked-list free loop that assumes `node` and `list` exist.",
    answer: `node *ptr = list;
while (ptr != NULL)
{
    node *next = ptr->next;
    free(ptr);
    ptr = next;
}`
  },
  {
    prompt: "After files and heap allocation are introduced: what should you check after `fopen` and `malloc`?",
    answer: "Check whether the return value is `NULL` before using it."
  },
  {
    prompt: "Name the CS50 C practice assignments from Weeks 1-5.",
    answer: "Week 1: Hello, Mario, Cash, Credit. Week 2: Scrabble, Readability, Caesar. Week 3: Sort, Plurality, Runoff, Tideman. Week 4: Volume, Filter, Recover. Week 5: Inheritance, Speller."
  }
];

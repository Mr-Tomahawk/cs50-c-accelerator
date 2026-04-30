window.CS50C = window.CS50C || {};

window.CS50C.syntaxBlocks = [
  {
    title: "Minimal program",
    note: "Complete program: if saved as `hello.c`, run `make hello`, then `./hello`. `stdio.h` provides `printf`; `int main(void)` means the starting function returns an integer status and receives no inputs.",
    code: `#include <stdio.h>

int main(void)
{
    printf("hello, world\\n");
}`
  },
  {
    title: "Compile and run",
    note: "Terminal commands: create/edit the source file, compile it into an executable, then run that executable.",
    code: `code hello.c
make hello
./hello`
  },
  {
    title: "Input with CS50",
    note: "Complete program: if saved as `profile.c`, run `make profile`, then `./profile`. `cs50.h` provides `string`, `get_string`, and `get_int`. The shape is `type name = returned_value;`.",
    code: `#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string name = get_string("Name: ");
    int age = get_int("Age: ");
    printf("%s is %i\\n", name, age);
}`
  },
  {
    title: "Format codes",
    note: "Reference fragment: a placeholder inside the quoted format string is filled by a later argument to `printf`, in order.",
    code: `%c   char
%f   float or double
%i   int
%li  long
%s   string`
  },
  {
    title: "Conditionals",
    note: "Fragment, not a full runnable file: belongs inside a function. `if` asks a yes/no question. `else if` asks another only if needed. `else` catches what remains.",
    code: `if (x < y)
{
    printf("less\\n");
}
else if (x > y)
{
    printf("greater\\n");
}
else
{
    printf("equal\\n");
}`
  },
  {
    title: "Validated input",
    note: "Fragment, not a full runnable file: belongs inside `main`. `do while` runs once before checking the condition, which is why it works well for asking until input is valid.",
    code: `int n;
do
{
    n = get_int("Height: ");
}
while (n < 1 || n > 8);`
  },
  {
    title: "Function prototype",
    note: "Complete program body except headers: add `#include <stdio.h>`. If saved as `meow.c`, run `make meow`, then `./meow`. `void` before `meow` means it returns no value.",
    code: `void meow(int n);

int main(void)
{
    meow(3);
}

void meow(int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("meow\\n");
    }
}`
  },
  {
    title: "Array loop",
    note: "Fragment, not a full runnable file: belongs inside `main`. `int scores[3]` creates three integer slots. Indexes start at 0 and stop before length.",
    code: `int scores[3];

for (int i = 0; i < 3; i++)
{
    scores[i] = get_int("Score: ");
}`
  },
  {
    title: "String character loop",
    note: "Fragment, not a full runnable file: assumes `s` already exists. `string s` can be indexed like characters. `strlen` comes from `string.h`.",
    code: `#include <string.h>

for (int i = 0, n = strlen(s); i < n; i++)
{
    printf("%c\\n", s[i]);
}`
  },
  {
    title: "Command-line arguments",
    note: "Fragment, not a full runnable file: this is a complete `main` function, but the file still needs `#include <cs50.h>` and `#include <stdio.h>`. If saved as `3.c`, run `make 3`, then pass the word at launch: `./3 InsertWord`. `argc` counts terminal words and `argv` stores them.",
    code: `int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./program word\\n");
        return 1;
    }
    printf("hello, %s\\n", argv[1]);
}`
  },
  {
    title: "Linear search",
    note: "Fragment, not a full runnable file: assumes `numbers` is an array, `length` is its count, and `target` is the value to find. Returns `true` or `false`.",
    code: `for (int i = 0; i < length; i++)
{
    if (numbers[i] == target)
    {
        return true;
    }
}
return false;`
  },
  {
    title: "Recursive shape",
    note: "Fragment, not a full runnable file: helper function only. `int factorial(int n)` returns an integer. Base case first, then a smaller subproblem.",
    code: `int factorial(int n)
{
    if (n == 1)
    {
        return 1;
    }
    return n * factorial(n - 1);
}`
  },
  {
    title: "Pointer basics",
    note: "Fragment, not a full runnable file: belongs inside `main`. `int *p` declares a pointer to an integer. `&` gets an address; `*` follows an address.",
    code: `int n = 50;
int *p = &n;

printf("%p\\n", p);
printf("%i\\n", *p);`
  },
  {
    title: "Allocate and free",
    note: "Fragment, not a full runnable file: belongs inside `main` with `stdlib.h`. `malloc` asks for heap memory and can return `NULL`.",
    code: `int *x = malloc(sizeof(int));
if (x == NULL)
{
    return 1;
}

*x = 42;
free(x);`
  },
  {
    title: "File copy loop",
    note: "Fragment, not a full runnable file: belongs inside `main` with file checks added. `FILE *` is a file handle; `fread` and `fwrite` move bytes.",
    code: `FILE *input = fopen("in.bin", "r");
FILE *output = fopen("out.bin", "w");

uint8_t buffer[512];
while (fread(buffer, 1, 512, input) > 0)
{
    fwrite(buffer, 1, 512, output);
}

fclose(input);
fclose(output);`
  },
  {
    title: "Struct and linked list node",
    note: "Fragment, not a full runnable file: type definition near the top of a file. `typedef` creates the shorter name `node`.",
    code: `typedef struct node
{
    int number;
    struct node *next;
}
node;`
  },
  {
    title: "Linked list traversal",
    note: "Fragment, not a full runnable file: assumes `node` and `list` already exist. `ptr != NULL` means keep going until the end marker.",
    code: `for (node *ptr = list; ptr != NULL; ptr = ptr->next)
{
    printf("%i\\n", ptr->number);
}`
  },
  {
    title: "Free linked list",
    note: "Fragment, not a full runnable file: assumes `node` and `list` already exist. After `free(ptr)`, you cannot safely read `ptr->next`; save `next` first.",
    code: `node *ptr = list;
while (ptr != NULL)
{
    node *next = ptr->next;
    free(ptr);
    ptr = next;
}`
  }
];

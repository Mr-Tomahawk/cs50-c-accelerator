window.CS50C = window.CS50C || {};

window.CS50C.course = [
  {
    id: "week1",
    shortTitle: "Week 1",
    title: "C Basics: syntax, types, control flow, functions",
    summary:
      "This is the foundation. You learn how source code becomes machine code, how C programs are shaped, how values get typed, and how to make decisions, repeat work, and extract logic into functions.",
    concepts: [
      "Source code, compiler, terminal commands, machine code, and `make`.",
      "Program skeleton: headers, `int main(void)`, braces, semicolons, and `printf`; `void` here means no inputs to `main`.",
      "Types: `int`, `long`, `float`, `double`, `char`, `bool`, and CS50's `string`; `string` comes from `cs50.h`.",
      "Variables, assignment, arithmetic, integer division, modulo, overflow, and floating-point imprecision.",
      "`if`, `else if`, `else`, Boolean expressions, `&&`, `||`, and `!`.",
      "`while`, `for`, and `do while` loops.",
      "Functions, prototypes, parameters, return values, scope, constants, correctness, design, and style."
    ],
    coverage: [
      "Explain source code vs machine code and why C must be compiled.",
      "Use terminal commands: `cd`, `ls`, `mkdir`, `cp`, `mv`, `rm`, `code`, `make`, and `./program`.",
      "Write `#include`, `int main(void)`, braces, statements, semicolons, and comments correctly, including what `int` and `void` mean in the skeleton.",
      "Use `printf`, escape sequences, placeholders, and multiple arguments.",
      "Use CS50 input functions: `get_char`, `get_string`, `get_int`, `get_long`, `get_float`, `get_double`.",
      "Declare and initialize variables with `int`, `long`, `float`, `double`, `char`, `bool`, and `string`.",
      "Apply arithmetic operators `+`, `-`, `*`, `/`, `%`, and shorthand operators like `++` and `+=`.",
      "Predict integer division, casting behavior, overflow, and floating-point imprecision.",
      "Write Boolean expressions with relational operators, `&&`, `||`, and `!`.",
      "Write `if`, `else if`, `else`, `while`, `for`, and `do while` patterns.",
      "Write functions with prototypes, parameters, return values, and `void`.",
      "Explain local scope and why variables inside braces are not visible everywhere.",
      "Use constants to replace magic numbers.",
      "Evaluate code for correctness, design, and style using CS50's style expectations.",
      "Complete Hello, Mario less/more, Cash, and Credit."
    ],
    memorize: [
      "`#include <stdio.h>` for `printf`; `#include <cs50.h>` for CS50 input helpers.",
      "Compile `hello.c` with `make hello`; run it with `./hello`.",
      "`=` assigns; `==` compares.",
      "`%i`, `%li`, `%f`, `%c`, `%s` must match the printed value's type.",
      "A `do while` loop is the default pattern for input validation."
    ],
    lessons: [
      {
        title: "Compilation model",
        explain:
          "C is not interpreted line-by-line. You write a `.c` file, compile it into an executable, and run that executable. If the source changes, the old executable does not change until you compile again.",
        tags: ["source", "compiler", "make", "terminal"],
        practice: "Break a working program three different ways and read the compiler's first error each time."
      },
      {
        title: "Minimal program structure",
        explain:
          "The compiler needs declarations before use, a `main` function as the starting point, braces to group code, parentheses for function calls, and semicolons to end statements. In `int main(void)`, `int` is the status-code type and `void` means no inputs.",
        tags: ["main", "headers", "printf", "syntax"],
        practice: "Type the hello-world program from memory until you can do it without missing punctuation."
      },
      {
        title: "Types and placeholders",
        explain:
          "A type is a promise about what kind of value a variable stores. `string` is CS50's beginner text type from `cs50.h`. `printf` placeholders are promises too; the placeholder must match the argument you pass after the format string.",
        tags: ["types", "variables", "format codes"],
        practice: "Create one variable of each beginner type and print all of them correctly."
      },
      {
        title: "Control flow",
        explain:
          "Conditionals select one path. Loops repeat a path. The discipline is to know which inputs enter each branch and what changes each loop iteration.",
        tags: ["if", "for", "while", "do while"],
        practice: "Write a number classifier and test negative, zero, positive, even, and odd cases."
      },
      {
        title: "Functions and scope",
        explain:
          "Functions give names to tasks, reduce repetition, and create scope boundaries. `void` before a helper function means it returns no value. A prototype lets `main` call a function whose full definition appears later.",
        tags: ["functions", "prototype", "return", "scope"],
        practice: "Extract input validation into `get_positive_int(void)` and reuse it in two programs."
      }
    ],
    pitfalls: [
      "Using `=` when you meant `==`.",
      "Forgetting that `int / int` truncates.",
      "Declaring a variable inside braces and trying to use it after those braces end.",
      "Writing a loop condition that never becomes false.",
      "Using magic numbers instead of named constants."
    ]
  },
  {
    id: "week2",
    shortTitle: "Week 2",
    title: "Arrays: memory sequences, strings, command-line arguments",
    summary:
      "Arrays introduce contiguous storage: many values of the same type under one name. Strings become less magical when you view them as character arrays ending with `\\0`.",
    concepts: [
      "Array declaration, indexing, zero-based offsets, and fixed size.",
      "Iteration over arrays with `for` loops.",
      "Passing arrays to functions and separately passing their length.",
      "Strings as arrays of `char` terminated by the null character `\\0`.",
      "`strlen`, `toupper`, `isalpha`, `isdigit`, and other helpers from `string.h` and `ctype.h`.",
      "`argc` and `argv` for command-line arguments.",
      "Debugging by stepping through code and inspecting variables."
    ],
    coverage: [
      "Declare arrays with a fixed size and access values by zero-based index.",
      "Explain why the last valid index is `length - 1`.",
      "Use arrays to avoid separate variables like `score1`, `score2`, `score3`.",
      "Pass arrays to functions and pass their length separately.",
      "Calculate sums and averages from array data.",
      "Explain how strings are arrays of characters ending in `\\0`.",
      "Index into strings and print individual characters.",
      "Use ASCII values to reason about characters.",
      "Use `strlen` from `string.h` and know why repeated `strlen` inside a loop can be wasteful.",
      "Use `ctype.h` helpers including `isalpha`, `isupper`, `islower`, `isdigit`, and `toupper`.",
      "Use `argc` and `argv` to read command-line arguments.",
      "Validate argument count before reading `argv[1]` or beyond.",
      "Return nonzero status codes for incorrect command-line usage.",
      "Use a debugger to step through, inspect variables, and find logic errors.",
      "Complete Scrabble, Readability, and Caesar."
    ],
    memorize: [
      "`int scores[3];` creates three integers indexed `0`, `1`, and `2`.",
      "Last valid index is always `length - 1`.",
      "`string s` behaves like a sequence of characters in CS50.",
      "A C string ends with `\\0`; this is how functions know where text stops.",
      "`int main(int argc, string argv[])` receives command-line words: `argc` is the count and `argv` is the string array."
    ],
    lessons: [
      {
        title: "Array indexing",
        explain:
          "An array name identifies the first element of a contiguous block. Index `0` means no offset from the start, index `1` means one element after the start, and so on.",
        tags: ["arrays", "index", "bounds"],
        practice: "Write `average.c` that stores three scores and prints their average."
      },
      {
        title: "Strings are character arrays",
        explain:
          "CS50's `string` type hides pointer details for now, but the useful model is an array of characters followed by a null terminator. That explains why string length can be measured by scanning characters until `\\0`.",
        tags: ["strings", "char", "null terminator"],
        practice: "Print each character of a user's name on its own line, including its numeric ASCII value."
      },
      {
        title: "Character libraries",
        explain:
          "`ctype.h` functions answer questions about characters and transform characters. `string.h` gives string utilities like `strlen`. Prefer library helpers to hand-rolled ASCII arithmetic unless the exercise requires it.",
        tags: ["ctype.h", "string.h", "strlen", "toupper"],
        practice: "Uppercase user input using `toupper`, then rewrite using ASCII arithmetic to understand the mapping."
      },
      {
        title: "Command-line arguments",
        explain:
          "`argc` counts words passed to the program at launch. `argv` stores them as strings in an array. If you run `./3 InsertWord`, `argv[0]` is `./3` and the first user-supplied argument is `argv[1]`, which is `InsertWord`.",
        tags: ["argc", "argv", "cli"],
        practice: "Write a program that requires exactly one command-line argument. If saved as `3.c`, run `make 3`, then test `./3 InsertWord`, `./3`, and `./3 one two`."
      }
    ],
    pitfalls: [
      "Reading or writing `array[length]`; that is one past the end.",
      "Calling `strlen(s)` in every loop condition instead of storing the result once.",
      "Assuming every command-line argument exists before checking `argc`.",
      "Forgetting headers: `string.h` for `strlen`, `ctype.h` for character helpers.",
      "Confusing a character like `'A'` with a string like `\"A\"`."
    ]
  },
  {
    id: "week3",
    shortTitle: "Week 3",
    title: "Algorithms: searching, sorting, Big O, recursion",
    summary:
      "Algorithms make you reason about correctness and cost. You learn how data organization changes what is possible, and how to compare approaches using asymptotic notation.",
    concepts: [
      "Linear search over unsorted data.",
      "Binary search over sorted data.",
      "Running time: `O`, `Ω`, and `Θ`.",
      "Bubble sort, selection sort, and merge sort.",
      "Tradeoffs among simplicity, speed, and memory.",
      "Struct arrays for related fields.",
      "Recursion and call stacks."
    ],
    coverage: [
      "Explain why linear search works on unsorted data.",
      "Implement linear search over numbers and strings.",
      "Explain why binary search requires sorted data.",
      "Trace binary search and identify the midpoint decision each step.",
      "Use `O`, `Ω`, and `Θ` to describe upper, lower, and tight bounds.",
      "Rank common classes: `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n^2)`.",
      "Trace and compare bubble sort, selection sort, and merge sort.",
      "Explain why merge sort is faster asymptotically but more complex.",
      "Use arrays of structs to model related data.",
      "Use `strcmp` for string comparison rather than `==`.",
      "Write recursive functions with base cases and smaller recursive calls.",
      "Explain call stack growth during recursion.",
      "Reason about algorithmic tradeoffs before coding.",
      "Complete Sort, Plurality, Runoff, and Tideman."
    ],
    memorize: [
      "Linear search is `O(n)` and works without sorting.",
      "Binary search is `O(log n)` but requires sorted data.",
      "Selection sort repeatedly selects the smallest remaining item.",
      "Bubble sort repeatedly swaps adjacent out-of-order items.",
      "A recursive function needs a base case and a smaller subproblem."
    ],
    lessons: [
      {
        title: "Search depends on data order",
        explain:
          "If data is unsorted, the safe strategy is to inspect each element. If data is sorted, binary search can discard half the remaining data at every step.",
        tags: ["linear search", "binary search", "sorted data"],
        practice: "Implement linear search for an array of integers, then trace binary search by hand on sorted input."
      },
      {
        title: "Big O vocabulary",
        explain:
          "Big O describes an upper bound on growth. It is not exact seconds; it tells you how work scales as input gets larger. CS50 also uses omega for lower bounds and theta when upper and lower bounds match.",
        tags: ["O", "Omega", "Theta", "growth"],
        practice: "Rank `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n^2)` from best to worst for large inputs."
      },
      {
        title: "Sorting tradeoffs",
        explain:
          "Sorting rearranges data so later operations can be faster or simpler. Simpler sorts are useful for learning, but merge sort shows how divide-and-conquer can improve asymptotic performance.",
        tags: ["bubble", "selection", "merge sort"],
        practice: "Trace one full pass of bubble sort and selection sort on the same array."
      },
      {
        title: "Recursion",
        explain:
          "Recursion solves a problem by calling the same function on a smaller version of the problem. Each call gets its own stack frame, so a missing base case can exhaust the stack.",
        tags: ["recursion", "base case", "call stack"],
        practice: "Write a recursive factorial and a recursive pyramid printer. Identify the base case in both."
      }
    ],
    pitfalls: [
      "Using binary search on unsorted data.",
      "Thinking Big O is a stopwatch measurement instead of a growth model.",
      "Writing recursive code without a base case.",
      "Sorting data when a single linear scan would be simpler and fast enough.",
      "Comparing strings with `==` instead of a string comparison function."
    ]
  },
  {
    id: "week4",
    shortTitle: "Week 4",
    title: "Memory: addresses, pointers, allocation, files",
    summary:
      "This is where C becomes C. You stop treating strings and arrays as magic and start working with addresses, pointer values, heap allocation, and bytes in files.",
    concepts: [
      "Hexadecimal notation and memory addresses.",
      "Address-of operator `&` and dereference operator `*`.",
      "Pointers as variables that store addresses.",
      "String representation as `char *`.",
      "Pointer arithmetic and array equivalence.",
      "`malloc`, `free`, heap memory, garbage values, leaks, and invalid accesses.",
      "File I/O with `FILE *`, `fopen`, `fread`, `fwrite`, and `fclose`."
    ],
    coverage: [
      "Read and write hexadecimal notation and explain why it is convenient for addresses and bytes.",
      "Use `&` to get an address and `%p` to print pointer values.",
      "Use `*` in declarations and dereferencing, and distinguish those meanings by context.",
      "Declare typed pointers such as `int *`, `char *`, and `FILE *`.",
      "Explain why strings are `char *` addresses to first characters.",
      "Compare strings with `strcmp`, not pointer equality.",
      "Explain shallow copy vs deep copy for strings.",
      "Use `malloc`, check for `NULL`, initialize allocated memory, and `free` it.",
      "Reserve space for null terminators when copying strings.",
      "Use `valgrind` to find leaks and invalid reads/writes.",
      "Explain stack vs heap at a beginner level.",
      "Use pointers to swap values in caller-owned variables.",
      "Open files with `fopen`, read/write with `fread`/`fwrite`, and close with `fclose`.",
      "Treat files as byte streams and identify signatures such as JPEG headers.",
      "Complete Volume, Filter less/more, and Recover."
    ],
    memorize: [
      "`&x` means the address of `x`; `int *p` declares a pointer; `*p` means the value at address `p`.",
      "`int *p = &n;` stores the address of an integer.",
      "`malloc` returns memory from the heap or `NULL` if it fails; every successful allocation needs `free`.",
      "Check pointers for `NULL` before dereferencing.",
      "Always `fclose` files you successfully open."
    ],
    lessons: [
      {
        title: "Pointers and dereferencing",
        explain:
          "A pointer is not the value itself; it is where the value lives. The type of a pointer tells C how many bytes to interpret when you dereference it.",
        tags: ["pointer", "address", "dereference"],
        practice: "Print an integer, its address, a pointer to it, and the dereferenced pointer."
      },
      {
        title: "Strings without training wheels",
        explain:
          "A string is the address of its first character. This is why copying a string variable can copy only the address, not the characters themselves.",
        tags: ["char *", "string", "copy"],
        practice: "Demonstrate shallow copy vs deep copy with two strings and `malloc`."
      },
      {
        title: "Dynamic allocation",
        explain:
          "`malloc` asks for raw bytes at runtime. You are responsible for checking success, initializing memory before relying on it, and freeing it exactly when it is no longer needed.",
        tags: ["malloc", "free", "heap", "valgrind"],
        practice: "Allocate space for a copied string, copy character by character, and verify with `valgrind`."
      },
      {
        title: "File bytes",
        explain:
          "Files are bytes. `fread` and `fwrite` let you move bytes between files and memory. This makes image/audio recovery problems possible because file formats have recognizable byte patterns.",
        tags: ["FILE *", "fopen", "fread", "fwrite"],
        practice: "Write a byte-copy program and confirm the input and output files have the same size."
      }
    ],
    pitfalls: [
      "Dereferencing an uninitialized pointer.",
      "Freeing memory twice or using memory after `free`.",
      "Forgetting room for the null terminator when copying strings.",
      "Assuming `=` deep-copies arrays or strings.",
      "Not checking whether `fopen` or `malloc` returned `NULL`."
    ]
  },
  {
    id: "week5",
    shortTitle: "Week 5",
    title: "Data Structures: linked lists, hash tables, tries",
    summary:
      "Data structures are memory layouts plus operations. You use structs and pointers to build containers that trade memory, speed, and complexity in different ways.",
    concepts: [
      "`struct` and `typedef` for custom types.",
      "Linked list nodes containing data and a next pointer.",
      "Insertion, traversal, search, and freeing linked lists.",
      "Stacks and queues as abstract data types.",
      "Hash tables: buckets, hash functions, collisions, and load.",
      "Tries: character-indexed trees for fast dictionary-style lookup.",
      "Choosing structures by operation costs and memory overhead."
    ],
    coverage: [
      "Define custom types with `struct` and `typedef`.",
      "Explain self-referential structs and why `struct node *next` is needed inside the definition.",
      "Allocate nodes with `malloc` and check for `NULL`.",
      "Use `->` to access fields through a pointer.",
      "Insert at the beginning of a linked list without losing the existing head.",
      "Insert into a sorted linked list by rewiring pointers in the right order.",
      "Traverse a linked list with a temporary pointer.",
      "Search a linked list and explain its `O(n)` cost.",
      "Free a linked list by saving `next` before freeing the current node.",
      "Explain stacks as LIFO and queues as FIFO abstract data types.",
      "Explain hash tables, buckets, hash functions, collisions, and load factor.",
      "Implement separate chaining with linked lists.",
      "Explain trie nodes and why tries spend memory for fast lookup.",
      "Choose between arrays, linked lists, hash tables, and tries based on operation costs.",
      "Complete Inheritance and Speller, including `load`, `hash`, `check`, `size`, and `unload`."
    ],
    memorize: [
      "`node *next;` links one node to another; `NULL` marks the end.",
      "Allocate a node, fill its fields, then connect it; do not lose the existing list head.",
      "Traversal pattern: `for (node *ptr = list; ptr != NULL; ptr = ptr->next)`.",
      "`ptr->field` accesses a struct field through a pointer and is shorthand for `(*ptr).field`.",
      "Every allocated node must eventually be freed."
    ],
    lessons: [
      {
        title: "Structs and nodes",
        explain:
          "A struct groups related fields. A linked-list node is a struct that stores useful data plus a pointer to the next node.",
        tags: ["struct", "typedef", "node"],
        practice: "Define a node type that stores an integer and a pointer to the next node."
      },
      {
        title: "Linked list operations",
        explain:
          "A linked list can grow dynamically, unlike a fixed array, but finding an item usually requires traversal from the head. Insertion is pointer rewiring; order matters.",
        tags: ["linked list", "insert", "traverse", "free"],
        practice: "Build a sorted linked list from command-line integers. If saved as `list.c`, run `make list`, then test with `./list 3 1 4`."
      },
      {
        title: "Stacks and queues",
        explain:
          "Stacks are last-in, first-out. Queues are first-in, first-out. They can be implemented with arrays or linked structures depending on constraints.",
        tags: ["stack", "queue", "ADT"],
        practice: "Write push/pop or enqueue/dequeue pseudocode and identify the edge cases."
      },
      {
        title: "Hash tables and tries",
        explain:
          "Hash tables use a hash function to choose a bucket. Tries use characters as path choices. Both aim to reduce search time by spending extra memory and implementation complexity.",
        tags: ["hash table", "collision", "trie", "dictionary"],
        practice: "Design a hash function for words, then list three inputs that collide and how your table handles them."
      }
    ],
    pitfalls: [
      "Overwriting the only pointer to allocated memory and causing a leak.",
      "Using `.` on a pointer when you need `->`.",
      "Forgetting to handle insertion into an empty list.",
      "Freeing the current node before saving the next pointer.",
      "Assuming a hash table is automatically fast with a bad hash function."
    ]
  }
];

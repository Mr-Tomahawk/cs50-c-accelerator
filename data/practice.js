window.CS50C = window.CS50C || {};

window.CS50C.practices = [
  {
    week: "Week 1",
    stage: "Warm-up",
    title: "Hello, me",
    goal: "After the Week 1 input lesson: prove you can create, compile, run, prompt, store input, and print with placeholders.",
    steps: [
      "Write `hello.c` from memory.",
      "Prompt for a name with `get_string`.",
      "Print `hello, name` using `%s`.",
      "Compile and run after each small change."
    ],
    hints: "`get_string` and `string` require `cs50.h`; `printf` requires `stdio.h`; `%s` is filled by the name variable after the quoted format string."
  },
  {
    week: "Week 1",
    stage: "Practice Assignment",
    title: "Mario, Cash, Credit",
    goal: "Practice loops, validation, arithmetic, decomposition, and edge-case testing.",
    steps: [
      "Mario less: print a right-aligned pyramid.",
      "Mario more: print two half-pyramids with a gap.",
      "Cash: minimize coins using integer cents.",
      "Credit: implement Luhn's algorithm and classify card type."
    ],
    hints: "Use integer math. For Credit, repeatedly use `% 10` and `/ 10` to peel off digits."
  },
  {
    week: "Week 2",
    stage: "Arrays",
    title: "Scores and averages",
    goal: "After arrays and functions are introduced: use arrays, length constants, loops, and function parameters.",
    steps: [
      "Create an array of scores.",
      "Prompt for each score in a loop.",
      "Write `float average(int length, int array[])`.",
      "Print the average with a decimal."
    ],
    hints: "`int array[]` is a parameter for an integer array. Arrays passed to functions do not carry their length, so pass length separately."
  },
  {
    week: "Week 2",
    stage: "Practice Assignment",
    title: "Scrabble, Readability, Caesar",
    goal: "Work with strings as character arrays and command-line arguments.",
    steps: [
      "Scrabble: score words by letters.",
      "Readability: count letters, words, and sentences.",
      "Caesar: validate a numeric key from `argv`, then rotate letters.",
      "Test uppercase, lowercase, punctuation, and invalid arguments."
    ],
    hints: "`ctype.h` provides `isalpha`, `isdigit`, and case helpers. Validate `argc` before reading `argv[1]`."
  },
  {
    week: "Week 3",
    stage: "Algorithms",
    title: "Search and sort lab",
    goal: "Trace and implement searching and sorting while reasoning about Big O.",
    steps: [
      "Implement linear search on an integer array.",
      "Trace binary search on a sorted array by hand.",
      "Trace bubble, selection, and merge sort on the same input.",
      "Explain each algorithm's running time in one sentence."
    ],
    hints: "Binary search only works after sorting. Merge sort is faster asymptotically but uses more structure."
  },
  {
    week: "Week 3",
    stage: "Practice Assignment",
    title: "Sort, Plurality, Runoff, Tideman",
    goal: "Use arrays of structs, sorting logic, vote counting, and careful conditionals.",
    steps: [
      "Sort: identify which sorting algorithm is used from behavior.",
      "Plurality: count votes and print winner(s).",
      "Runoff: handle preferences, eliminated candidates, and rounds.",
      "Tideman: lock pairs without creating cycles."
    ],
    hints: "For election problems, make the data model explicit before coding: candidates, voters, ranks, pairs, locked graph."
  },
  {
    week: "Week 4",
    stage: "Memory",
    title: "Pointer and allocation drills",
    goal: "Build intuition for addresses, dereferencing, copying, and memory ownership.",
    steps: [
      "Print addresses and values for variables.",
      "Write a swap function and explain why pointer parameters are needed.",
      "Copy a string with `malloc` and a loop.",
      "Run `valgrind` and fix leaks."
    ],
    hints: "If a function must modify the caller's variable, pass an address with `&`; inside the function, follow it with `*`."
  },
  {
    week: "Week 4",
    stage: "Practice Assignment",
    title: "Volume, Filter, Recover",
    goal: "Treat files as bytes and practice pointer-safe image/audio manipulation.",
    steps: [
      "Volume: read WAV samples and scale them.",
      "Filter: manipulate image pixels in memory.",
      "Recover: scan raw bytes for JPEG signatures and write files.",
      "Check every file open and close every file you open."
    ],
    hints: "`FILE *` values come from `fopen`; check them before use. Use fixed-size buffers when reading blocks. JPEG headers are byte patterns, not text."
  },
  {
    week: "Week 5",
    stage: "Data structures",
    title: "Linked list from command-line numbers",
    goal: "Allocate nodes, connect pointers, traverse, and free everything.",
    steps: [
      "Define a `node` struct.",
      "Convert each `argv` number with `atoi`.",
      "Insert each number into a sorted linked list.",
      "Print the list, then free every node."
    ],
    hints: "`node *` is a pointer to a node. Never lose the head pointer. For sorted insertion, handle empty list and new-smallest as special cases."
  },
  {
    week: "Week 5",
    stage: "Practice Assignment",
    title: "Inheritance and Speller",
    goal: "Use structs, recursion, hash tables, linked lists, and memory cleanup.",
    steps: [
      "Inheritance: build and free a family tree recursively.",
      "Speller: load dictionary words into a hash table.",
      "Implement `hash`, `load`, `check`, `size`, and `unload`.",
      "Measure speed and memory, then improve your hash function."
    ],
    hints: "`hash` chooses a bucket; `load` allocates nodes; `unload` traverses every bucket and frees each linked-list node without losing the next pointer."
  }
];

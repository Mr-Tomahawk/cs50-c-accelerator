window.CS50C = window.CS50C || {};

window.CS50C.drills = [
  {
    week: "Week 1",
    focus: "Syntax memorization",
    title: "Blank-page C skeletons",
    goal: "After the first Week 1 lesson: make the punctuation automatic so you can focus on logic.",
    steps: [
      "From a blank file, write a complete program that prints one line.",
      "Repeat with one `get_int` prompt and one `%i` print.",
      "After functions are introduced, repeat with one function prototype, `main`, and a function definition below `main`.",
      "Compile every version and fix errors without looking up the skeleton."
    ],
    check: "`void` in `main(void)` means no inputs; `void` before another function means no returned value. You should no longer forget headers, braces, parentheses, semicolons, or `\\n`."
  },
  {
    week: "Week 1",
    focus: "Branch coverage",
    title: "Truth table classifier",
    goal: "After conditionals are introduced: stop guessing and prove each path runs.",
    steps: [
      "Ask for an integer.",
      "Print whether it is negative, zero, or positive.",
      "Also print whether it is even or odd, but do not call zero odd.",
      "Write a test table before running: `-3`, `-2`, `0`, `1`, `2`."
    ],
    check: "Every branch should have at least one test input that reaches it."
  },
  {
    week: "Week 1",
    focus: "Loop control",
    title: "Input jail",
    goal: "After `do while` is introduced: master input validation.",
    steps: [
      "Prompt for a number between 1 and 10.",
      "Reject anything outside the range.",
      "After accepting it, print that many alternating `#` and `.` characters.",
      "Test `0`, `-1`, `11`, `1`, and `10`."
    ],
    check: "The loop should always ask at least once and should eventually stop for valid input."
  },
  {
    week: "Week 2",
    focus: "Array bounds",
    title: "Reverse an array",
    goal: "After arrays are introduced: practice indexes without going out of bounds.",
    steps: [
      "Prompt for five integers into an array.",
      "Print them forward.",
      "Print them backward using indexes.",
      "Then reverse the array in place by swapping pairs."
    ],
    check: "No access should use index `5`; valid indexes are `0` through `4`."
  },
  {
    week: "Week 2",
    focus: "Strings",
    title: "Manual string length",
    goal: "After strings are introduced as character arrays: understand null termination instead of treating `strlen` as magic.",
    steps: [
      "Prompt for a string.",
      "Count characters manually until `s[i] == '\\0'`.",
      "Print the length.",
      "Compare your result to `strlen(s)`."
    ],
    check: "Your loop stops at the null terminator, not at a guessed maximum."
  },
  {
    week: "Week 2",
    focus: "Command-line arguments",
    title: "Argument validator",
    goal: "After `argc` and `argv` are introduced: make command-line validation automatic.",
    steps: [
      "Require exactly two arguments after the program name.",
      "If the file is `sumargs.c`, compile with `make sumargs` and run with two launch-time arguments, such as `./sumargs 12 30`.",
      "Reject input if either argument contains a non-digit character.",
      "Convert both arguments to integers with `atoi` only after validation.",
      "Print their sum."
    ],
    check: "The program should not read `argv[1]` or `argv[2]` before proving they exist."
  },
  {
    week: "Week 3",
    focus: "Algorithm tracing",
    title: "Sort trace notebook",
    goal: "After Week 3 sorting is introduced: understand sorting mechanically before coding it.",
    steps: [
      "Use the array `[5, 2, 4, 1, 3]`.",
      "Write every pass of bubble sort.",
      "Write every selection made by selection sort.",
      "Write the split and merge phases of merge sort."
    ],
    check: "You should be able to say which elements are compared or moved at each step."
  },
  {
    week: "Week 3",
    focus: "Recursion",
    title: "Recursive sum",
    goal: "After recursion is introduced: build base-case discipline.",
    steps: [
      "Write `int sum(int n)` that returns `1 + 2 + ... + n` recursively.",
      "Handle `n == 0` as the base case.",
      "Print the call chain for `sum(4)` as comments.",
      "Rewrite it iteratively and compare."
    ],
    check: "Each recursive call must use a smaller `n`; otherwise it will not terminate."
  },
  {
    week: "Week 3",
    focus: "Struct arrays",
    title: "Mini phonebook",
    goal: "After structs and `strcmp` are introduced: practice related data with structs and string comparison.",
    steps: [
      "Define a `person` struct with `name` and `number` fields.",
      "Create an array of three people.",
      "Prompt for a name.",
      "Use `strcmp` to find and print the number."
    ],
    check: "Do not compare strings with `==`; that compares addresses."
  },
  {
    week: "Week 4",
    focus: "Pointers",
    title: "Pointer prediction",
    goal: "After pointers are introduced: separate values from addresses.",
    steps: [
      "Declare `int n = 50; int *p = &n;`.",
      "Before running, predict `n`, `&n`, `p`, and `*p`.",
      "Change `*p = 99;` and predict `n` again.",
      "Print each value and compare."
    ],
    check: "Changing `*p` changes `n` because `p` points to `n`."
  },
  {
    week: "Week 4",
    focus: "Deep copy",
    title: "Safe string copier",
    goal: "After `malloc`, `free`, and null terminators are introduced: own copied memory correctly.",
    steps: [
      "Prompt for a string `s`.",
      "Allocate `strlen(s) + 1` chars for `t`.",
      "Copy every character, including `\\0`.",
      "Modify `t[0]` and prove `s[0]` did not change.",
      "Free `t`."
    ],
    check: "If changing `t` changes `s`, you made a shallow copy."
  },
  {
    week: "Week 4",
    focus: "File I/O",
    title: "512-byte scanner",
    goal: "After `FILE *`, `fread`, and byte buffers are introduced: practice block reads like Recover.",
    steps: [
      "Open a file in binary read mode.",
      "Read 512-byte blocks into a `uint8_t buffer[512]`.",
      "Count how many full or partial blocks were read.",
      "Close the file even if zero blocks were read."
    ],
    check: "The loop condition should be based on `fread`'s return value."
  },
  {
    week: "Week 5",
    focus: "Linked list insertion",
    title: "Prepend safely",
    goal: "After linked-list nodes are introduced: learn pointer rewiring order.",
    steps: [
      "Start with `node *list = NULL`.",
      "Allocate a new node for each command-line number.",
      "If the file is `list.c`, compile with `make list` and run with numbers after the program name, such as `./list 3 1 4`.",
      "Set the new node's `next` to the current list.",
      "Move `list` to the new node.",
      "Print and free the list."
    ],
    check: "If you assign `list = n` before `n->next = list`, you lose the old list."
  },
  {
    week: "Week 5",
    focus: "Memory cleanup",
    title: "Free without losing next",
    goal: "After linked-list traversal and `free` are introduced: make linked-list cleanup automatic.",
    steps: [
      "Build any linked list of at least three nodes.",
      "Write the cleanup loop from memory.",
      "Save `ptr->next` before calling `free(ptr)`.",
      "Run under `valgrind` and confirm no leaks."
    ],
    check: "After `free(ptr)`, you must not read `ptr->next`; save it first."
  },
  {
    week: "Week 5",
    focus: "Hash table design",
    title: "Collision diary",
    goal: "After hash tables are introduced: understand that hashing is design, not magic.",
    steps: [
      "Design a hash function for lowercase words.",
      "List ten words and their bucket indexes.",
      "Identify collisions.",
      "Write how linked-list chaining stores collided words."
    ],
    check: "A good hash function spreads realistic inputs across buckets; collisions still need handling."
  },
  {
    week: "Cumulative",
    focus: "Capstone",
    title: "Tiny dictionary",
    goal: "After Week 5: combine arrays, strings, files, pointers, structs, linked lists, and hashing.",
    steps: [
      "Read words from a small dictionary file.",
      "Hash each word into one of 26 buckets by first letter.",
      "Store words in linked-list nodes.",
      "Prompt for a word and check whether it exists.",
      "Free all nodes before exit."
    ],
    check: "This is a miniature Speller. If you can build it cleanly, Week 5 is connecting."
  }
];

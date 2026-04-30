window.CS50C = window.CS50C || {};

window.CS50C.accelerator = [
  {
    id: "week1",
    title: "Week 1: C",
    mission: "CS50 flow: lecture first, shorts for syntax, section for guided practice, then the Week 1 programming assignments.",
    sections: [
      {
        kind: "Lecture",
        title: "C programs, compiling, and first output",
        transcriptBasis: [
          "Lecture 1 introduces the CS50 VS Code environment and its Linux terminal before moving into C syntax.",
          "Lecture 1 introduces source code as what programmers write and contrasts it with compiled machine code.",
          "Lecture 1 uses the Scratch “hello world” idea as the bridge into the first C `printf` program.",
          "Lecture 1 explains syntax pieces like headers, `main`, strings, and printed output before moving into variables and control flow."
        ],
        body: [
          "CS50's programming environment is Visual Studio Code connected to a Linux terminal. VS Code is where you edit source files. The terminal is where you run commands like `ls`, `cd`, `make`, and `./hello`.",
          "A C program starts as source code: text you write in a file ending in `.c`. The computer cannot run that text directly. A compiler translates your source code into machine code, which is a runnable program.",
          "In CS50, `make hello` means compile `hello.c` and create a program named `hello`. Then `./hello` means run the program named `hello` in the current folder. The `./` part matters because your current folder is not searched automatically like built-in terminal commands are.",
          "Text inside double quotes is called a string. In `printf(\"hello, world\\n\");`, the string is `hello, world\\n`. The `\\n` is an escape sequence: two typed characters that represent one newline character. It moves the cursor to the next line after printing.",
          "CS50 uses the word string in two related ways. A string literal is text directly inside quotes, like `\"hello\"`. Later, CS50's `string` type lets you store text in a variable, like `string name`.",
          "In `int main(void)`, `main` is the function C runs first. The `int` before `main` means the function's result is an integer status code. The `void` inside the parentheses means this beginner version of `main` receives no inputs.",
          "`#include <stdio.h>` gives your program access to standard input/output functions, including `printf`. `int main(void)` is the starting point of this beginner program. Braces `{ ... }` contain the work to do. A semicolon ends a statement."
        ],
        codeNote: "Complete program: you can put this in `hello.c`, run `make hello`, then run `./hello`.",
        code: `#include <stdio.h>

int main(void)
{
    printf("hello, world\\n");
}`,
        walkthrough: [
          "`#include <stdio.h>` tells C about standard input/output tools, including `printf`.",
          "`int main(void)` marks where this program starts running.",
          "`int` before `main` is the kind of answer `main` gives back to the operating system: an integer status code.",
          "`void` inside the parentheses means `main` takes no inputs in this first form.",
          "`{` and `}` surround the body of `main`, the code that runs.",
          "`printf(...)` calls a function that prints text.",
          "`\"hello, world\\n\"` is the text being printed. The double quotes mark it as a string.",
          "`\\n` means newline, so the terminal moves to the next line after printing.",
          "`;` ends the `printf` statement."
        ],
        checks: [
          {
            question: "What is source code?",
            answer: "Source code is the human-readable text you write, such as `hello.c`."
          },
          {
            question: "What does `make hello` do?",
            answer: "It compiles `hello.c` into a runnable program named `hello`."
          },
          {
            question: "What does `\\n` do inside a string?",
            answer: "`\\n` prints a newline. It makes the output continue on the next line."
          },
          {
            question: "What does `void` mean in `int main(void)`?",
            answer: "It means this version of `main` receives no inputs."
          }
        ],
        exercises: [
          "Create `hello.c`, type the program exactly, run `make hello`, then run `./hello`.",
          "Change the string to print your own sentence. Compile again before running.",
          "Remove the semicolon after `printf`, compile, read the first error, then fix it."
        ],
        sources: [
          { label: "CS50 Lecture 1 notes: Visual Studio Code for CS50, Linux, Source Code, Hello World, From Scratch to C", href: "https://cs50.harvard.edu/x/notes/1/" },
          { label: "CS50 Week 1 lecture transcript", href: "https://cdn.cs50.net/2025/fall/lectures/1/lang/en/lecture1.txt" },
          { label: "CS50 Week 1 source code", href: "https://cdn.cs50.net/2025/fall/lectures/1/src1/" }
        ]
      },
      {
        kind: "Lecture",
        title: "Variables, types, input, and placeholders",
        transcriptBasis: [
          "Lecture 1 moves from `hello, world` to `hello, you`, using CS50 input functions to personalize output.",
          "Lecture 1 separately covers types, format codes, and variables before using them together.",
          "Section 1 explicitly frames this week as learning to read and write C with variables and functions."
        ],
        body: [
          "A variable is a named place to store a value. C requires every variable to have a type. The type tells C what kind of value is allowed and how much memory may be needed.",
          "A declaration has the shape `type name`. For example, `int age` means: create a variable named `age` that can store an integer.",
          "Common Week 1 types are `int` for integers, `long` for bigger integers, `float` and `double` for decimal values, `char` for one character, `bool` for true/false values, and CS50's `string` for text. `string` is provided by `#include <cs50.h>`; it is not one of C's original built-in keywords.",
          "CS50's input functions ask the user for data and return what the user typed. For example, `get_string(\"Name: \")` asks for text and gives back a string. You store that returned string in a variable with `string name = get_string(\"Name: \");`.",
          "The `=` in a declaration stores the value on the right into the variable on the left. `string name = get_string(...)` means: make a text variable named `name`, ask the user for text, then store the answer in `name`.",
          "`printf` placeholders mark where values should be inserted into a printed string. `%s` prints a string, `%i` prints an int, `%li` prints a long, `%f` prints a decimal, and `%c` prints one character."
        ],
        codeNote: "Complete program: if you save this as `profile.c`, run `make profile`, then run `./profile`. The CS50 library must be available because this uses `cs50.h`.",
        code: `#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string name = get_string("Name: ");
    int age = get_int("Age: ");
    printf("%s is %i years old.\\n", name, age);
}`,
        walkthrough: [
          "`#include <cs50.h>` enables CS50 helpers like `string`, `get_string`, and `get_int`.",
          "`#include <stdio.h>` enables standard output tools like `printf`.",
          "`int main(void)` is the same program starting point as before: `int` is the status-code type and `void` means no inputs to `main`.",
          "`string name` creates a variable named `name` that stores text.",
          "`=` stores the result of `get_string(...)` into `name`.",
          "`get_string(\"Name: \")` prints the prompt `Name: ` and returns the text the user types.",
          "`int age` creates a variable named `age` that stores a whole number.",
          "`=` stores the result of `get_int(...)` into `age`.",
          "`get_int(\"Age: \")` asks the user for a whole number.",
          "In `printf`, the first argument is the format string: `\"%s is %i years old.\\n\"`.",
          "`%s` is a placeholder. It says: insert a string here.",
          "`%i` is a placeholder. It says: insert an integer here.",
          "`name` and `age` are outside the quotes because they are not literal text. They are the values that fill `%s` and `%i`, in order.",
          "So `printf(\"%s is %i years old.\\n\", name, age);` means: print the sentence pattern, putting `name` where `%s` is and `age` where `%i` is."
        ],
        checks: [
          {
            question: "Why do we write `#include <cs50.h>` here?",
            answer: "`cs50.h` declares CS50's helper functions and types, including `get_string`, `get_int`, and `string`."
          },
          {
            question: "What does `%s` mean in `printf`?",
            answer: "`%s` is a placeholder for a string value."
          },
          {
            question: "Why is `name` not inside double quotes in the final `printf` argument?",
            answer: "Because `name` is a variable. `\"name\"` would mean the literal text n-a-m-e."
          }
        ],
        exercises: [
          "Ask for a name and print `hello, name`.",
          "Ask for an integer and print it with `%i`.",
          "Ask for one character with `get_char` and print it with `%c`."
        ],
        sources: [
          { label: "CS50 Lecture 1 notes: Header Files, Hello You, Types, Format Codes, Variables", href: "https://cs50.harvard.edu/x/notes/1/" },
          { label: "CS50 Manual Pages", href: "https://manual.cs50.io/" },
          { label: "CS50 Week 1 source code", href: "https://cdn.cs50.net/2025/fall/lectures/1/src1/" }
        ]
      },
      {
        kind: "Shorts",
        title: "Week 1 syntax shorts",
        transcriptBasis: [
          "Week 1 official shorts are Data Types, Operators, Conditional Statements, Loops, Command Line, and Magic Numbers.",
          "Lecture 1 demonstrates `compare.c`, `agree.c`, `meow.c`, and Mario-style loops as the core syntax practice."
        ],
        body: [
          "Data types: choose a type based on the value you need to store. Use `int` for normal whole numbers, `long` for larger whole numbers, `float` or `double` for decimal values, `char` for a single character, and `string` for text in CS50.",
          "`bool` stores only `true` or `false`. In CS50 Week 1 examples, `bool` is available after including CS50's header.",
          "Operators: `+`, `-`, `*`, `/`, and `%` do arithmetic. `%` gives the remainder. `x++` adds one to `x`. `x += 2` adds two to `x`.",
          "Conditional statements: `if` asks a yes/no question. `else if` asks another question only if the earlier one was false. `else` runs when none of the earlier conditions ran.",
          "Loops: `while` repeats while a condition is true. `for` is useful when counting. `do while` is useful for input validation because it asks once before checking.",
          "Magic numbers: a number like `8` is hard to understand if it appears everywhere. A named constant like `const int MAX_HEIGHT = 8;` explains its purpose."
        ],
        codeNote: "Complete program: if you save this as `height.c`, run `make height`, then run `./height`.",
        code: `#include <cs50.h>
#include <stdio.h>

const int MAX_HEIGHT = 8;

int main(void)
{
    int height;
    do
    {
        height = get_int("Height: ");
    }
    while (height < 1 || height > MAX_HEIGHT);
}`,
        walkthrough: [
          "`#include <cs50.h>` is required because the program uses `get_int`.",
          "`#include <stdio.h>` is included for standard input/output tools used throughout Week 1.",
          "`const int MAX_HEIGHT = 8;` creates a named value that should not change.",
          "`int main(void)` starts the program; the validation code belongs inside its braces.",
          "`int height;` declares a variable before the loop so it can still be used in the `while` condition.",
          "`do { ... } while (...);` means: run the code inside the braces once first, then check the condition after.",
          "`get_int(\"Height: \")` asks the user for a whole number.",
          "The answer from `get_int` is stored in `height` because of `height = get_int(...)`.",
          "`height < 1 || height > MAX_HEIGHT` means repeat if height is too small OR too large.",
          "`||` means OR. The loop repeats when either side is true.",
          "When the height is at least `1` and at most `MAX_HEIGHT`, the condition is false, so the loop stops."
        ],
        checks: [
          {
            question: "What does `%` do?",
            answer: "`%` gives the remainder after division. `10 % 3` is `1`."
          },
          {
            question: "Why use `do while` for height?",
            answer: "The program must ask for height at least once, then repeat only if the answer is invalid."
          },
          {
            question: "Why is `MAX_HEIGHT` clearer than writing `8` everywhere?",
            answer: "The name explains what the number means and lets you change it in one place."
          }
        ],
        exercises: [
          "Write a program that asks for a number from 1 to 10 until valid.",
          "Write a program that prints whether a number is even or odd.",
          "Change the validation program to use `const int MIN_HEIGHT = 1;` and `const int MAX_HEIGHT = 10;`, then use both names in the `while` condition."
        ],
        sources: [
          { label: "CS50 Lecture 1 notes: Conditionals, Loops, Operators, Mario", href: "https://cs50.harvard.edu/x/notes/1/" },
          { label: "CS50 Short: Data Types", href: "https://cs50.harvard.edu/x/shorts/data_types/" },
          { label: "CS50 Short: Operators", href: "https://cs50.harvard.edu/x/shorts/operators/" },
          { label: "CS50 Short: Conditional Statements", href: "https://cs50.harvard.edu/x/shorts/conditional_statements/" },
          { label: "CS50 Short: Loops", href: "https://cs50.harvard.edu/x/shorts/loops/" },
          { label: "CS50 Short: Magic Numbers", href: "https://cs50.harvard.edu/x/shorts/magic_numbers/" }
        ]
      },
      {
        kind: "Section",
        title: "Guided practice: Mario-style rows",
        transcriptBasis: [
          "Lecture 1 uses Mario to connect loops, functions, operators, and design.",
          "Section 1 is specifically intended to review lecture concepts and show code in action before assignments."
        ],
        body: [
          "CS50's Mario problems ask you to print pyramid shapes like the blocks in Nintendo's Super Mario Bros. In C, the bricks are just `#` characters printed in the terminal.",
          "Section turns this visual goal into loops. A row of a pyramid is made from spaces, bricks, and a newline. Instead of thinking about the whole pyramid at once, solve one row, then repeat that solution for every row.",
          "For height `4`, row `0` has 3 spaces and 1 brick. Row `1` has 2 spaces and 2 bricks. The pattern is: spaces are `height - row - 1`, bricks are `row + 1`.",
          "A helper function like `print_row` makes the design cleaner. `main` decides how many spaces/bricks each row needs; `print_row` handles printing them."
        ],
        goalPreview: {
          title: "Mario less, height 4",
          caption: "The goal is to print a right-aligned pyramid. Dots are shown here only to make spaces visible; your program prints spaces, not dots.",
          art: `...#
..##
.###
####`
        },
        codeNote: "Fragment, not a full runnable file: this is only the helper function. To compile it, add `#include <stdio.h>`, a prototype if `main` calls it before the definition, and a `main` function that calls `print_row`. If the full file is `mario_rows.c`, run `make mario_rows`, then `./mario_rows`.",
        code: `void print_row(int spaces, int bricks)
{
    for (int i = 0; i < spaces; i++)
    {
        printf(" ");
    }
    for (int i = 0; i < bricks; i++)
    {
        printf("#");
    }
    printf("\\n");
}`,
        walkthrough: [
          "`void print_row(int spaces, int bricks)` defines a helper function that does not return a value.",
          "`void` before `print_row` means the function performs an action but gives no value back.",
          "`spaces` and `bricks` are parameters: inputs given to the function.",
          "A `for` loop has three parts inside the parentheses: where the counter starts, when the loop should keep going, and how the counter changes after each pass.",
          "In `for (int i = 0; i < spaces; i++)`, `int i = 0` creates a counter named `i` and starts it at 0.",
          "`i < spaces` means the loop keeps running while `i` is less than the number of spaces requested.",
          "`i++` means add 1 to `i` after each pass through the loop.",
          "Inside the first loop, `printf(\" \");` prints exactly one space. If `spaces` is 3, the loop prints one space three times.",
          "The second `for` loop has the same shape, but its condition is `i < bricks`, so it repeats once per brick.",
          "Inside the second loop, `printf(\"#\");` prints exactly one `#`. If `bricks` is 2, the loop prints two bricks.",
          "`printf(\"\\n\");` ends the row after the spaces and bricks are printed."
        ],
        checks: [
          {
            question: "For height 4 and row 0, how many spaces and bricks?",
            answer: "3 spaces and 1 brick."
          },
          {
            question: "For height 4 and row 2, how many spaces and bricks?",
            answer: "1 space and 3 bricks."
          },
          {
            question: "What does the final `printf(\"\\n\");` do?",
            answer: "It ends the current row and moves output to the next line."
          }
        ],
        exercises: [
          "Write `print_row` exactly as shown, below `main` in a complete file.",
          "Inside `main`, call `print_row(3, 1)`, `print_row(2, 2)`, `print_row(1, 3)`, and `print_row(0, 4)`.",
          "Then replace those calls with a loop that computes spaces and bricks."
        ],
        sources: [
          { label: "CS50 Lecture 1 notes: Functions and Mario", href: "https://cs50.harvard.edu/x/notes/1/" },
          { label: "CS50 Section 1: C", href: "https://cs50.harvard.edu/x/sections/1/" },
          { label: "CS50 Week 1 section transcript", href: "https://cdn.cs50.net/2025/fall/sections/1/lang/en/section1.txt" }
        ]
      },
      {
        kind: "Practice Assignment",
        title: "Week 1 assignments: Hello, Mario, Cash, Credit",
        transcriptBasis: [
          "CS50 Week 1 assignments are Hello, Mario less/more, Cash, and Credit.",
          "Lecture 1’s operators and Mario material prepare for row patterns, greedy arithmetic, and digit processing."
        ],
        body: [
          "This section is the CS50 assignment checklist, not a replacement prompt. Open each official assignment and complete it there.",
          "CS50 Week 1 requires Hello, World and Hello, It's Me. Then choose Mario less or Mario more. Then choose Cash or Credit. If you do both choices, CS50 records the higher score.",
          "Use the lessons above as preparation. Do not expect the assignment to restate every concept; part of the work is deciding which Week 1 tool applies."
        ],
        assignmentItems: [
          {
            type: "Required",
            title: "Hello, World",
            href: "https://cs50.harvard.edu/x/psets/1/world/",
            goal: "Confirm you can create a C file, compile it, and print exactly specified output.",
            action: "Complete this first."
          },
          {
            type: "Required",
            title: "Hello, It's Me",
            href: "https://cs50.harvard.edu/x/psets/1/me/",
            goal: "Use `get_string`, a variable, and `%s` to personalize output.",
            action: "Complete this after Hello, World."
          },
          {
            type: "Choose one",
            title: "Mario less or Mario more",
            href: "https://cs50.harvard.edu/x/psets/1/",
            goal: "Use loops to print pyramid rows. The more-comfortable version adds the second half-pyramid.",
            action: "Do Mario less if you are still new; do Mario more if the row logic is already comfortable."
          },
          {
            type: "Choose one",
            title: "Cash or Credit",
            href: "https://cs50.harvard.edu/x/psets/1/",
            goal: "Use Week 1 arithmetic and loops. Cash focuses on greedy coin counting; Credit is harder and uses digit-by-digit arithmetic.",
            action: "Do Cash first unless you are ready for a larger challenge."
          }
        ],
        checks: [
          {
            question: "Which Week 1 assignments are required before choices?",
            answer: "Hello, World and Hello, It's Me."
          },
          {
            question: "Which Mario version should you pick first as a new programmer?",
            answer: "Mario less, unless the row logic already feels comfortable."
          },
          {
            question: "Which should you do first, Cash or Credit?",
            answer: "Cash first. Credit is a harder digit-processing assignment."
          }
        ],
        exercises: [
          "Open the official Week 1 pset page.",
          "Complete the required Hello assignments.",
          "Complete one Mario option.",
          "Complete one Cash/Credit option."
        ],
        sources: [
          { label: "CS50 Week 1 programming assignments", href: "https://cs50.harvard.edu/x/psets/1/" },
          { label: "CS50 Lecture 1 notes: Operators and Mario", href: "https://cs50.harvard.edu/x/notes/1/" }
        ]
      },
      {
        kind: "Review",
        title: "Week 1 review: one-tool-at-a-time practice",
        transcriptBasis: [
          "Week 1 teaches input, output, variables, types, conditionals, operators, loops, constants, and functions.",
          "These review tasks are supplemental practice, not CS50 assignments."
        ],
        body: [
          "Do this after the official Week 1 assignments. Each task targets one thing you learned, using only Week 1 tools.",
          "If you cannot explain why each `if`, loop, and placeholder is there, return to the earlier Week 1 lesson before moving on."
        ],
        codeNote: "Complete program: if you save this as `parity.c`, run `make parity`, then run `./parity`.",
        code: `#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int n = get_int("Number: ");

    if (n % 2 == 0)
    {
        printf("even\\n");
    }
    else
    {
        printf("odd\\n");
    }
}`,
        walkthrough: [
          "`get_int` asks for one integer.",
          "`if (...)` chooses between two paths based on whether the condition inside parentheses is true.",
          "`n % 2` gives the remainder after dividing by 2.",
          "`== 0` checks whether the remainder is zero.",
          "If the condition is true, the program runs the first block and prints `even`.",
          "If the condition is false, the program skips to `else` and prints `odd`.",
          "A zero remainder means even; otherwise the number is odd."
        ],
        checks: [
          {
            question: "What Week 1 concept does `%` test here?",
            answer: "Remainder arithmetic."
          },
          {
            question: "Why is `else` enough after the `if`?",
            answer: "Every integer is either evenly divisible by 2 or not."
          }
        ],
        exercises: [
          "Target variables/placeholders: ask for a name and age, then print one sentence using `%s` and `%i`.",
          "Target conditionals: ask for a number and print negative, zero, or positive.",
          "Target loops: ask for a height from 1 through 8 until valid, then print that many `#` characters on one line.",
          "Combined review: write a program that asks for a height from 1 through 8 and prints a left-aligned block of that height."
        ],
        sources: [
          { label: "CS50 Lecture 1 notes", href: "https://cs50.harvard.edu/x/notes/1/" },
          { label: "CS50 Week 1 section transcript", href: "https://cdn.cs50.net/2025/fall/sections/1/lang/en/section1.txt" }
        ]
      }
    ]
  },
  {
    id: "week2",
    title: "Week 2: Arrays",
    mission: "CS50 flow: lecture on arrays and strings, shorts for syntax, section for guided string practice, then the Week 2 assignments.",
    sections: [
      {
        kind: "Lecture",
        title: "Arrays and zero-based indexing",
        transcriptBasis: [
          "Lecture 2 introduces arrays as contiguous chunks of memory for storing multiple values.",
          "Lecture 2 connects arrays to examples like scores and repeated data.",
          "Section 2 opens by reviewing compilation, arrays, and how code turns into lower-level forms."
        ],
        body: [
          "An array stores multiple values of the same type under one name. `int scores[3];` creates space for three integers.",
          "`int scores[3];` has three pieces: `int` is the element type, `scores` is the array name, and `[3]` is how many integers the array can hold.",
          "Array indexes start at 0. For three values, the valid indexes are `0`, `1`, and `2`. Index `3` is one past the end and is invalid.",
          "Loops and arrays fit together because the loop counter can become the index."
        ],
        codeNote: "Fragment, not a full runnable file: this belongs inside `main`. To compile it, add `#include <cs50.h>`, `#include <stdio.h>`, and an `int main(void)` wrapper. If the full file is `scores.c`, run `make scores`, then `./scores`.",
        code: `int scores[3];

for (int i = 0; i < 3; i++)
{
    scores[i] = get_int("Score: ");
}`,
        walkthrough: [
          "`int scores[3];` creates an array named `scores` with room for three integers.",
          "`scores[i]` uses square brackets to choose one slot from the array.",
          "`for (int i = 0; i < 3; i++)` is a counting loop with three parts.",
          "`int i = 0` creates a counter named `i` and starts it at 0, the first valid array index.",
          "`i < 3` means keep looping while `i` is less than 3. That gives the valid indexes 0, 1, and 2.",
          "`i++` adds 1 to `i` after each score is entered.",
          "`scores[i]` means the array element at index `i`.",
          "Each loop asks for one score and stores it in the next array slot."
        ],
        checks: [
          {
            question: "What indexes are valid for `scores[3]`?",
            answer: "`0`, `1`, and `2`."
          },
          {
            question: "Why does the loop use `i < 3` and not `i <= 3`?",
            answer: "`i <= 3` would allow `i` to become 3, which is outside the array."
          }
        ],
        exercises: [
          "Prompt for three scores and print their average.",
          "Change the program to use a named constant for the number of scores.",
          "Print the scores backward."
        ],
        sources: [
          { label: "CS50 Lecture 2 notes: Arrays", href: "https://cs50.harvard.edu/x/notes/2/" },
          { label: "CS50 Lecture 2 transcript", href: "https://cdn.cs50.net/2025/fall/lectures/2/lang/en/lecture2.txt" },
          { label: "CS50 Week 2 source code", href: "https://cdn.cs50.net/2025/fall/lectures/2/src2/" },
          { label: "CS50 Section 2 transcript", href: "https://cdn.cs50.net/2025/fall/sections/2/lang/en/section2.txt" }
        ]
      },
      {
        kind: "Lecture",
        title: "Strings as character arrays",
        transcriptBasis: [
          "Lecture 2 moves from arrays into strings and reading levels, because text must be represented and inspected character by character.",
          "Lecture 2 covers string length and why a string can be traversed like a sequence.",
          "Week 2 assignments rely on counting letters, words, sentences, and rotating characters."
        ],
        body: [
          "A string is text stored as characters in memory. C marks the end of the string with a special character called the null terminator, written `\\0`.",
          "If a string contains `HI`, memory stores `H`, `I`, and `\\0`. The terminator is not printed as a normal letter; it tells string functions where the text ends.",
          "`strlen` counts characters before `\\0`. It comes from `#include <string.h>`. `ctype.h` gives helper functions like `isalpha`, `isdigit`, and `toupper`."
        ],
        codeNote: "Fragment, not a full runnable file: this belongs inside `main`. To compile it, add `#include <cs50.h>`, `#include <stdio.h>`, `#include <string.h>`, and an `int main(void)` wrapper. If the full file is `characters.c`, run `make characters`, then `./characters`.",
        code: `string s = get_string("Text: ");

for (int i = 0, n = strlen(s); i < n; i++)
{
    printf("%c\\n", s[i]);
}`,
        walkthrough: [
          "`string s` stores the text the user types.",
          "`s[i]` treats the string like an array and selects one character.",
          "`strlen(s)` computes how many visible characters are in the string.",
          "`for (int i = 0, n = strlen(s); i < n; i++)` is a counting loop over the string.",
          "`int i = 0` creates the character index and starts it at the first character.",
          "`n = strlen(s)` saves the string length once so the program does not need to recalculate it every pass.",
          "`i < n` stops before going past the end of the string.",
          "`i++` moves to the next character after each pass.",
          "`%c` prints one character, and `s[i]` is the character at index `i`."
        ],
        checks: [
          {
            question: "What is `\\0`?",
            answer: "The null terminator: the hidden character that marks the end of a C string."
          },
          {
            question: "What does `s[i]` mean?",
            answer: "The character at index `i` in string `s`."
          },
          {
            question: "What header provides `strlen`?",
            answer: "`#include <string.h>`."
          }
        ],
        exercises: [
          "Print each character of your name on its own line.",
          "Print each character and its numeric ASCII value.",
          "Rewrite the loop to stop at `s[i] == '\\0'` instead of using `strlen`."
        ],
        sources: [
          { label: "CS50 Lecture 2 notes: Strings and String Length", href: "https://cs50.harvard.edu/x/notes/2/" },
          { label: "CS50 Lecture 2 transcript", href: "https://cdn.cs50.net/2025/fall/lectures/2/lang/en/lecture2.txt" },
          { label: "CS50 Week 2 programming assignments", href: "https://cs50.harvard.edu/x/psets/2/" }
        ]
      },
      {
        kind: "Shorts",
        title: "Functions, scope, debugging, arrays, and command-line arguments",
        transcriptBasis: [
          "Week 2 official shorts include Functions, Variables and Scope, Debugging, Arrays, and Command Line Arguments.",
          "Lecture 2 covers debugging, compiling, command-line arguments, and exit status."
        ],
        body: [
          "Functions let you name reusable work. Scope controls where a variable exists. A variable declared inside a function or loop block cannot be used everywhere.",
          "Debugging means finding and fixing mistakes. CS50 demonstrates stepping through code so you can see values change line by line.",
          "Command-line arguments let the user provide words when launching the program. You type them after the program name, before pressing Enter. For example, `./3 InsertWord` runs the program named `3` and gives it one extra word, `InsertWord`.",
          "`argc` is the count; `argv` is the array of argument strings. `argv[0]` is the program name. If you run `./3 InsertWord`, then `argc` is 2, `argv[0]` is `./3`, and `argv[1]` is `InsertWord`.",
          "`int main(int argc, string argv[])` is a new shape of `main`. It still returns an integer status code, but instead of `void`, it receives two inputs from the command line: the count `argc` and the words `argv`."
        ],
        codeNote: "Fragment, not a full runnable file: this is a complete `main` function, but the file still needs `#include <cs50.h>` and `#include <stdio.h>` above it. If you save the full file as `3.c`, run `make 3`, then run `./3 InsertWord`. Quotes are only needed when one argument contains spaces, as in `./3 \"two words\"`.",
        code: `int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./program word\\n");
        return 1;
    }
    printf("hello, %s\\n", argv[1]);
}`,
        walkthrough: [
          "`int main(int argc, string argv[])` lets the program receive words from the terminal.",
          "`argc` is an integer because it counts how many words were typed.",
          "`string argv[]` is an array of strings because it stores the typed words.",
          "The terminal splits what you type by spaces. `./3 InsertWord` becomes two argument strings: `argv[0]` is `./3`, and `argv[1]` is `InsertWord`.",
          "`argc != 2` checks that the user typed exactly one word after the program name.",
          "If you run `./3` with no extra word, `argc` is 1, so the usage message prints. If you run `./3 one two`, `argc` is 3, so the usage message also prints.",
          "`return 1;` stops `main` and gives the operating system a nonzero status code, meaning something went wrong.",
          "`argv[1]` is the first user-provided command-line argument.",
          "`%s` is filled by `argv[1]`, so the program prints the supplied word."
        ],
        checks: [
          {
            question: "What is `argc`?",
            answer: "The number of command-line arguments, including the program name."
          },
          {
            question: "What is `argv[0]`?",
            answer: "The program name as typed in the terminal."
          },
          {
            question: "Why check `argc` before using `argv[1]`?",
            answer: "Because `argv[1]` only exists if the user supplied at least one argument after the program name."
          }
        ],
        exercises: [
          "Add `#include <cs50.h>` and `#include <stdio.h>` above this `main` function, save it as `3.c`, run `make 3`, then run `./3 InsertWord`.",
          "Run `./3` and `./3 one two` to prove the usage message appears when the argument count is wrong.",
          "Replace the final `printf` with a new `for` loop that prints every command-line argument.",
          "Use the debugger or print statements to inspect `argc` and `argv`."
        ],
        sources: [
          { label: "CS50 Lecture 2 notes: Debugging, Command-Line Arguments, Exit Status", href: "https://cs50.harvard.edu/x/notes/2/" },
          { label: "CS50 Short: Functions", href: "https://cs50.harvard.edu/x/shorts/functions/" },
          { label: "CS50 Short: Variables and Scope", href: "https://cs50.harvard.edu/x/shorts/variables_and_scope/" },
          { label: "CS50 Short: Arrays", href: "https://cs50.harvard.edu/x/shorts/arrays/" },
          { label: "CS50 Short: Command Line Arguments", href: "https://cs50.harvard.edu/x/shorts/command_line_arguments/" }
        ]
      },
      {
        kind: "Section",
        title: "Guided practice: Caesar-style rotation",
        transcriptBasis: [
          "Section 2 reviews Week 2 C topics interactively before the string-heavy assignments.",
          "The Week 2 assignment list includes Caesar, which requires command-line validation and character rotation."
        ],
        body: [
          "Caesar is a cipher: it turns readable text into shifted text by moving each letter forward by a fixed key. With key `1`, `A` becomes `B`, `B` becomes `C`, and `Z` wraps around to `A`.",
          "Caesar rotates letters through the alphabet. The key idea is to convert a letter into a 0-25 position, add the key, wrap with `% 26`, then convert back to a letter.",
          "For uppercase letters, subtract `'A'` to get a position. For example, `'A' - 'A'` is 0 and `'C' - 'A'` is 2. After rotation, add `'A'` back.",
          "A `char` is one character, written with single quotes like `'A'`. A string is text, written with double quotes like `\"A\"`. Non-letters should not change."
        ],
        goalPreview: {
          title: "Caesar, key 1",
          caption: "The goal is to shift letters while preserving the alphabet cycle. Punctuation and spaces stay as they are in the full assignment.",
          art: `A -> B
B -> C
Z -> A
HELLO -> IFMMP`
        },
        codeNote: "Fragment, not a full runnable file: this is only a helper function. To compile a simple test program around it, add `#include <stdio.h>` and a `main` function that calls `rotate_upper` and prints the returned character. If the full file is `rotate.c`, run `make rotate`, then `./rotate`.",
        code: `char rotate_upper(char c, int key)
{
    return 'A' + (c - 'A' + key) % 26;
}`,
        walkthrough: [
          "`char rotate_upper(char c, int key)` defines a function that receives one uppercase character and a rotation amount.",
          "`char` before `rotate_upper` means the function returns one character.",
          "`char c` and `int key` are parameters: inputs the caller gives to the function.",
          "`c - 'A'` converts a letter like `C` into an alphabet index like 2.",
          "`+ key` shifts that alphabet index.",
          "`% 26` wraps around after 25 so letters stay in the alphabet.",
          "`'A' + ...` converts the 0-25 index back into an uppercase character.",
          "The whole `return` line sends that final rotated character back to whoever called `rotate_upper`."
        ],
        checks: [
          {
            question: "Why subtract `'A'`?",
            answer: "To turn an uppercase letter into a 0-25 alphabet position."
          },
          {
            question: "Why use `% 26`?",
            answer: "To wrap around after `Z`."
          },
          {
            question: "Should punctuation rotate?",
            answer: "No. Non-letter characters should stay unchanged."
          }
        ],
        exercises: [
          "Call `rotate_upper('A', 1)` from `main` and confirm it returns `B`.",
          "Call `rotate_upper('Z', 1)` and confirm `% 26` wraps it to `A`.",
          "After the uppercase helper works, add lowercase support in a separate helper or branch."
        ],
        sources: [
          { label: "CS50 Section 2: Arrays", href: "https://cs50.harvard.edu/x/sections/2/" },
          { label: "CS50 Section 2 transcript", href: "https://cdn.cs50.net/2025/fall/sections/2/lang/en/section2.txt" },
          { label: "CS50 Week 2: Caesar", href: "https://cs50.harvard.edu/x/psets/2/caesar/" }
        ]
      },
      {
        kind: "Practice Assignment",
        title: "Week 2 assignments: Scrabble, Readability, Caesar",
        transcriptBasis: [
          "CS50 Week 2 assignments are Scrabble, Readability, and Caesar.",
          "Lecture 2’s reading-level discussion leads directly into counting text features for Readability."
        ],
        body: [
          "This section is the official CS50 Week 2 assignment checklist. Complete these on CS50's assignment pages.",
          "CS50 Week 2 requires Scrabble and Readability. Then choose Caesar if feeling less comfortable or Substitution if feeling more comfortable. This C accelerator focuses on Caesar because it is the C-relevant assignment linked in your source list and uses command-line arguments, strings, and character arithmetic.",
          "If you submit both Caesar and Substitution, CS50 records the higher score."
        ],
        assignmentItems: [
          {
            type: "Required",
            title: "Scrabble",
            href: "https://cs50.harvard.edu/x/psets/2/scrabble/",
            goal: "Use arrays and character scoring to compare two words.",
            action: "Complete this first."
          },
          {
            type: "Required",
            title: "Readability",
            href: "https://cs50.harvard.edu/x/psets/2/readability/",
            goal: "Count letters, words, and sentences in text.",
            action: "Complete this after Scrabble."
          },
          {
            type: "Choose one",
            title: "Caesar or Substitution",
            href: "https://cs50.harvard.edu/x/psets/2/",
            goal: "Practice command-line arguments, strings, validation, and character transformations.",
            action: "Do Caesar first if you are new; Substitution is the more-comfortable option."
          }
        ],
        checks: [
          {
            question: "Which Week 2 assignments are required?",
            answer: "Scrabble and Readability."
          },
          {
            question: "Which choice should you do first as a new programmer?",
            answer: "Caesar."
          }
        ],
        exercises: [
          "Open the official Week 2 pset page.",
          "Complete Scrabble.",
          "Complete Readability.",
          "Complete Caesar unless you intentionally choose Substitution."
        ],
        sources: [
          { label: "CS50 Week 2 programming assignments", href: "https://cs50.harvard.edu/x/psets/2/" },
          { label: "CS50 Lecture 2 notes", href: "https://cs50.harvard.edu/x/notes/2/" }
        ]
      },
      {
        kind: "Review",
        title: "Week 2 review: arrays, strings, and arguments",
        transcriptBasis: [
          "Week 2 teaches arrays, strings, string length, command-line arguments, exit status, and debugging.",
          "These review tasks are supplemental practice after the official Week 2 assignments."
        ],
        body: [
          "Do this after the official Week 2 assignments. Each task uses only Week 1 and Week 2 tools.",
          "The goal is to separate the three Week 2 skills: array indexing, string indexing, and command-line validation.",
          "For the command-line review tasks, the input is not typed after a prompt. It is typed when you launch the program, for example `./letters InsertWord`."
        ],
        codeNote: "Fragment, not a full runnable file: this belongs inside `main` after `argc == 2` has been checked. If the full file is `letters.c`, run `make letters`, then run it with one command-line word, such as `./letters InsertWord`.",
        code: `for (int i = 0; argv[1][i] != '\\0'; i++)
{
    printf("%c\\n", argv[1][i]);
}`,
        walkthrough: [
          "`argv[1]` is the first command-line word after the program name.",
          "`argv[1][i]` is one character inside that word.",
          "`for (int i = 0; argv[1][i] != '\\0'; i++)` loops through the word one character at a time.",
          "`int i = 0` starts at the first character.",
          "`!= '\\0'` keeps looping until the string's null terminator.",
          "`i++` moves to the next character after each pass.",
          "`%c` prints one character."
        ],
        checks: [
          {
            question: "Why check `argc` before this loop?",
            answer: "Because `argv[1]` only exists if the user typed an argument."
          },
          {
            question: "What stops the loop?",
            answer: "The null terminator `\\0` at the end of the string."
          }
        ],
        exercises: [
          "Target arrays: ask for 5 scores, store them in an array, and print the average.",
          "Target strings: ask for text and count alphabetic characters with `isalpha`.",
          "Target command-line arguments: require exactly one argument and print each character on its own line.",
          "Combined review: write a program that receives one word as a command-line argument and prints how many letters it contains."
        ],
        sources: [
          { label: "CS50 Lecture 2 notes", href: "https://cs50.harvard.edu/x/notes/2/" },
          { label: "CS50 Section 2 transcript", href: "https://cdn.cs50.net/2025/fall/sections/2/lang/en/section2.txt" }
        ]
      }
    ]
  },
  {
    id: "week3",
    title: "Week 3: Algorithms",
    mission: "CS50 flow: lecture on search/sort/Big O, shorts for algorithms, section for tracing, then election-style assignments.",
    sections: [
      {
        kind: "Lecture",
        title: "Searching, search.c, and Big O",
        transcriptBasis: [
          "Lecture 3 formalizes linear search and binary search after demonstrating different search strategies.",
          "Lecture 3 uses `search.c` to turn the search idea into C code over arrays.",
          "Lecture 3 introduces running time as the way to describe how long algorithms take as inputs grow.",
          "The official Week 3 shorts include Linear Search and Binary Search."
        ],
        body: [
          "An algorithm is a step-by-step method for solving a problem. Searching means finding whether a value is present.",
          "`search.c` is the CS50 bridge from the idea of searching to actual C: loop over the array, compare each value to the target, and return as soon as the answer is known.",
          "This search snippet assumes three names already exist: `numbers` is an array, `length` is how many values are in it, and `target` is the value being searched for.",
          "`true` and `false` are Boolean values. A function can return them when its job is to answer a yes/no question.",
          "Linear search checks items one at a time. It works even if data is unsorted. Binary search checks the middle and discards half, but it only works on sorted data.",
          "Big O describes how running time grows as input grows. `O(n)` means work grows roughly with the number of items. `O(log n)` grows much more slowly."
        ],
        codeNote: "Fragment, not a full runnable file: this is the body of a Boolean search function. It assumes `numbers`, `length`, and `target` already exist. To run it, wrap it in a function such as `bool search(int target, int numbers[], int length)` and call that function from `main`.",
        code: `for (int i = 0; i < length; i++)
{
    if (numbers[i] == target)
    {
        return true;
    }
}
return false;`,
        walkthrough: [
          "`for (int i = 0; i < length; i++)` checks array positions one at a time.",
          "`i` starts at 0, the first valid array index.",
          "`i < length` keeps the loop inside the array.",
          "`i++` moves to the next array index after each check.",
          "`if (...)` asks whether the current value is the target.",
          "`numbers[i] == target` asks whether the current element is the value being searched for.",
          "`return true;` exits immediately when the target is found and answers yes.",
          "`return false;` runs only after every element has been checked and answers no."
        ],
        checks: [
          {
            question: "When can you use binary search?",
            answer: "Only when the data is sorted and you can compare the target to the middle item."
          },
          {
            question: "What is linear search's Big O?",
            answer: "`O(n)` because in the worst case it may check every item."
          }
        ],
        exercises: [
          "Trace linear search with the target first, last, and absent.",
          "Trace binary search on 16 sorted numbers.",
          "Explain why sorting first can make repeated searches faster."
        ],
        sources: [
          { label: "CS50 Lecture 3 notes: Linear Search, Binary Search, Running Time, search.c", href: "https://cs50.harvard.edu/x/notes/3/" },
          { label: "CS50 Lecture 3 transcript", href: "https://cdn.cs50.net/2025/fall/lectures/3/lang/en/lecture3.txt" },
          { label: "CS50 Short: Linear Search", href: "https://cs50.harvard.edu/x/shorts/linear_search/" },
          { label: "CS50 Short: Binary Search", href: "https://cs50.harvard.edu/x/shorts/binary_search/" }
        ]
      },
      {
        kind: "Lecture",
        title: "Sorting and recursion",
        transcriptBasis: [
          "Lecture 3 covers selection sort, bubble sort, recursion, and merge sort in that sequence.",
          "Lecture 3 describes recursion as a function defined in terms of itself with a smaller problem.",
          "The official Week 3 shorts include Bubble Sort, Selection Sort, Call Stacks, Recursion, and Merge Sort."
        ],
        body: [
          "Sorting puts values in order. Selection sort repeatedly finds the smallest remaining value. Bubble sort repeatedly swaps adjacent out-of-order values. Merge sort splits, sorts halves, and merges results.",
          "Recursion is when a function calls itself on a smaller version of the problem. It must have a base case: a condition where it stops calling itself.",
          "`return` sends a value back to the code that called the function. In `int factorial(int n)`, the function must return an integer because its return type is `int`."
        ],
        codeNote: "Fragment, not a full runnable file: this is a helper function. To compile it, add `#include <stdio.h>` and a `main` function that calls `factorial` and prints the result. If the full file is `factorial.c`, run `make factorial`, then `./factorial`.",
        code: `int factorial(int n)
{
    if (n == 1)
    {
        return 1;
    }
    return n * factorial(n - 1);
}`,
        walkthrough: [
          "`int factorial(int n)` defines a function that returns an integer.",
          "`if (n == 1)` asks whether this call has reached the base case, the simplest version of the problem.",
          "`return 1;` stops recursion at the base case.",
          "`factorial(n - 1)` calls the same function with a smaller input.",
          "`n * factorial(n - 1)` combines the current value with the smaller answer.",
          "For `factorial(3)`, the calls go `factorial(3)`, `factorial(2)`, `factorial(1)`, then the returns multiply back upward."
        ],
        checks: [
          {
            question: "What is a base case?",
            answer: "The stopping condition in a recursive function."
          },
          {
            question: "Which sort repeatedly swaps neighbors?",
            answer: "Bubble sort."
          },
          {
            question: "Which sort uses divide and conquer?",
            answer: "Merge sort."
          }
        ],
        exercises: [
          "Trace `factorial(3)` by writing each call and return value.",
          "Change the base case to `n == 0` and adjust the returned value correctly.",
          "Separately, trace bubble sort and selection sort on `[5, 2, 4, 1, 3]` because those are the sorting algorithms from this same lecture section."
        ],
        sources: [
          { label: "CS50 Lecture 3 notes: Sorting, Recursion, Merge Sort", href: "https://cs50.harvard.edu/x/notes/3/" },
          { label: "CS50 Lecture 3 transcript", href: "https://cdn.cs50.net/2025/fall/lectures/3/lang/en/lecture3.txt" },
          { label: "CS50 Short: Bubble Sort", href: "https://cs50.harvard.edu/x/shorts/bubble_sort/" },
          { label: "CS50 Short: Selection Sort", href: "https://cs50.harvard.edu/x/shorts/selection_sort/" },
          { label: "CS50 Short: Recursion", href: "https://cs50.harvard.edu/x/shorts/recursion/" },
          { label: "CS50 Short: Merge Sort", href: "https://cs50.harvard.edu/x/shorts/merge_sort/" }
        ]
      },
      {
        kind: "Shorts and Section",
        title: "Structs, call stacks, and election data",
        transcriptBasis: [
          "Lecture 3 introduces structs using phonebook-style examples.",
          "Section 3 states that it covers algorithms, recursion, and structs.",
          "Week 3 assignments use arrays and structs to model election data."
        ],
        body: [
          "The election assignments model real-world ballots with data. A candidate is not just a name; the program also needs vote counts, elimination status, preferences, pairs, or locked relationships depending on the assignment.",
          "A struct groups related values into one custom type. CS50's election assignments use structs for candidates and pairs because each candidate has a name, vote count, elimination status, or relationship to another candidate.",
          "`typedef` gives a type a shorter name. In CS50's examples, `typedef struct { ... } candidate;` lets you write `candidate` later instead of repeating the full struct definition.",
          "A call stack is the stack of active function calls. Recursion grows the call stack because each recursive call waits for the smaller call to finish."
        ],
        goalPreview: {
          title: "Candidate data",
          caption: "Instead of keeping separate arrays for names and votes, a struct lets one candidate value carry related fields together.",
          art: `candidate
---------
name:  Alice
votes: 3`
        },
        codeNote: "Fragment, not a full runnable file: this is a type definition. Because it uses CS50's `string` type, put `#include <cs50.h>` above it. It belongs near the top of the file, before functions that use `candidate`.",
        code: `typedef struct
{
    string name;
    int votes;
}
candidate;`,
        walkthrough: [
          "`typedef struct { ... } candidate;` creates a new type name, `candidate`.",
          "`string name;` stores the candidate's name.",
          "`int votes;` stores the candidate's vote count.",
          "After this definition, you can create variables or arrays of type `candidate`."
        ],
        checks: [
          {
            question: "Why use a struct for a candidate?",
            answer: "Because one candidate has multiple related pieces of data, such as name and votes."
          },
          {
            question: "Why not compare strings with `==`?",
            answer: "`==` compares addresses for strings. Use `strcmp` to compare text."
          }
        ],
        exercises: [
          "Create an array of three `candidate` structs after this type definition.",
          "Use `strcmp` to search the candidate array by name.",
          "Draw the call stack for `factorial(3)`."
        ],
        sources: [
          { label: "CS50 Lecture 3 notes: phonebook.c and Structs", href: "https://cs50.harvard.edu/x/notes/3/" },
          { label: "CS50 Section 3 transcript", href: "https://cdn.cs50.net/2025/fall/sections/3/lang/en/section3.txt" },
          { label: "CS50 Short: Call Stacks", href: "https://cs50.harvard.edu/x/shorts/call_stacks/" },
          { label: "CS50 Week 3 source code", href: "https://cdn.cs50.net/2025/fall/lectures/3/src3/" }
        ]
      },
      {
        kind: "Practice Assignment",
        title: "Week 3 assignments: Sort, Plurality, Runoff, Tideman",
        transcriptBasis: [
          "CS50 Week 3 assignments are Sort, Plurality, Runoff, and Tideman.",
          "Lecture 3’s search/sort and struct topics support the election assignments."
        ],
        body: [
          "This section is the official CS50 Week 3 assignment checklist. Complete these on CS50's assignment pages.",
          "CS50 Week 3 requires Sort and Plurality. Then submit one of Runoff or Tideman. Tideman is optional but challenging.",
          "If you submit both Runoff and Tideman, CS50 records the higher score."
        ],
        assignmentItems: [
          {
            type: "Required",
            title: "Sort",
            href: "https://cs50.harvard.edu/x/psets/3/sort/",
            goal: "Identify sorting algorithms by their behavior.",
            action: "Complete this first."
          },
          {
            type: "Required",
            title: "Plurality",
            href: "https://cs50.harvard.edu/x/psets/3/plurality/",
            goal: "Use arrays, structs, string comparison, and vote counting.",
            action: "Complete this after Sort."
          },
          {
            type: "Choose one",
            title: "Runoff or Tideman",
            href: "https://cs50.harvard.edu/x/psets/3/",
            goal: "Practice ranked-choice election logic. Tideman adds graph-style locking and cycle prevention.",
            action: "Do Runoff first unless you are very comfortable."
          }
        ],
        checks: [
          {
            question: "Which Week 3 assignments are required?",
            answer: "Sort and Plurality."
          },
          {
            question: "Which ranked-choice assignment should you pick first?",
            answer: "Runoff. Tideman is the very challenging option."
          }
        ],
        exercises: [
          "Open the official Week 3 pset page.",
          "Complete Sort.",
          "Complete Plurality.",
          "Complete Runoff unless you intentionally choose Tideman."
        ],
        sources: [
          { label: "CS50 Week 3 programming assignments", href: "https://cs50.harvard.edu/x/psets/3/" },
          { label: "CS50 Lecture 3 notes", href: "https://cs50.harvard.edu/x/notes/3/" }
        ]
      },
      {
        kind: "Review",
        title: "Week 3 review: search, sort, structs, recursion",
        transcriptBasis: [
          "Week 3 teaches search, running time, structs, sorting, recursion, and call stacks.",
          "These review tasks are supplemental practice after the official Week 3 assignments."
        ],
        body: [
          "Do this after the official Week 3 assignments. Use only Week 1 through Week 3 concepts.",
          "The review separates algorithm tracing from C syntax so you can tell whether you are stuck on logic or code."
        ],
        codeNote: "Fragment, not a full runnable file: this is the core vote-counting idea inside Plurality's vote function. It assumes `candidates`, `i`, and `name` already exist.",
        code: `if (strcmp(candidates[i].name, name) == 0)
{
    candidates[i].votes++;
}`,
        walkthrough: [
          "`strcmp` compares two strings by text.",
          "`candidates[i].name` gets the name field from candidate `i`.",
          "`strcmp(...) == 0` means the strings match.",
          "`if (...)` means only run the vote-increment code when the names match.",
          "`candidates[i].votes++` adds one vote to that candidate."
        ],
        checks: [
          {
            question: "Why use `strcmp` instead of `==`?",
            answer: "Strings need text comparison; `==` compares addresses."
          },
          {
            question: "What data structure holds name and votes together?",
            answer: "A struct."
          }
        ],
        exercises: [
          "Target search: write linear search for an array of integers.",
          "Target structs: create three `candidate` values and print the candidate with most votes.",
          "Target recursion: trace `factorial(4)` by writing every call and return value.",
          "Combined review: build a tiny phonebook with an array of structs and search it by name."
        ],
        sources: [
          { label: "CS50 Lecture 3 notes", href: "https://cs50.harvard.edu/x/notes/3/" },
          { label: "CS50 Section 3 transcript", href: "https://cdn.cs50.net/2025/fall/sections/3/lang/en/section3.txt" }
        ]
      }
    ]
  },
  {
    id: "week4",
    title: "Week 4: Memory",
    mission: "CS50 flow: lecture on addresses/pointers/files, shorts for memory syntax, section for byte practice, then file/image assignments.",
    sections: [
      {
        kind: "Lecture",
        title: "Addresses and pointers",
        transcriptBasis: [
          "Lecture 4 starts with pixel art to show that files and images are ultimately bytes.",
          "Lecture 4 introduces hexadecimal before memory addresses.",
          "Lecture 4 identifies pointers as one of the more complicated C topics and builds them from addresses.",
          "The official Week 4 shorts include Hexadecimal and Pointers."
        ],
        body: [
          "Pixel art gives the Week 4 mental model: a picture can be represented by many small numeric values. Once you accept that files are bytes, C's memory and file operations become less mysterious.",
          "Memory is a large collection of bytes. Each byte has an address. C lets you work with addresses directly.",
          "`&x` means the address of `x`. A pointer is a variable that stores an address. `*p` means go to the address stored in `p` and use the value there.",
          "Pointer types matter. `int *p` means `p` stores the address of an integer. The star has two related meanings: in `int *p` it declares a pointer; in `*p` by itself it follows the pointer."
        ],
        codeNote: "Fragment, not a full runnable file: this belongs inside `main` with `#include <stdio.h>` above it. If the full file is `pointer.c`, run `make pointer`, then `./pointer`.",
        code: `int n = 50;
int *p = &n;

printf("%p\\n", p);
printf("%i\\n", *p);`,
        walkthrough: [
          "`int n = 50;` stores the integer 50 in a variable.",
          "`int *p` declares a pointer to an integer. Read it as: `p` will store the address of an `int`.",
          "`&n` means the address where `n` lives.",
          "`p` stores that address, so `%p` prints the address.",
          "`*p` follows the address and reads the integer stored there."
        ],
        checks: [
          {
            question: "What does `&n` mean?",
            answer: "The address of `n`."
          },
          {
            question: "What does `*p` mean after `int *p = &n;`?",
            answer: "The value stored at the address in `p`, which is `n`."
          }
        ],
        exercises: [
          "Print an integer, its address, a pointer to it, and the dereferenced value.",
          "Change `*p` and observe that `n` changes.",
          "Only after this pointer example is clear, write `swap` using pointer parameters."
        ],
        sources: [
          { label: "CS50 Lecture 4 notes: Pixel Art, Hexadecimal, Memory, Pointers", href: "https://cs50.harvard.edu/x/notes/4/" },
          { label: "CS50 Lecture 4 transcript", href: "https://cdn.cs50.net/2025/fall/lectures/4/lang/en/lecture4.txt" },
          { label: "CS50 Short: Hexadecimal", href: "https://cs50.harvard.edu/x/shorts/hexadecimal/" },
          { label: "CS50 Short: Pointers", href: "https://cs50.harvard.edu/x/shorts/pointers/" }
        ]
      },
      {
        kind: "Lecture and Shorts",
        title: "Strings, malloc, free, and valgrind",
        transcriptBasis: [
          "Lecture 4 revisits strings through pointers and pointer arithmetic.",
          "Lecture 4 shows why string comparison must compare characters, not just pointer addresses.",
          "Lecture 4 covers copying strings with `malloc`, checking memory behavior with Valgrind, and garbage values.",
          "The official Week 4 shorts include Dynamic Memory Allocation."
        ],
        body: [
          "A string is really an address to its first character. Assigning one string variable to another copies the address, not the characters. That is a shallow copy.",
          "Pointer arithmetic means moving from one address to another based on the pointer type. For strings, `s[1]` and `*(s + 1)` both mean the character one position after the first character.",
          "Two string variables can point to different addresses even if they contain the same visible text. That is why text comparison uses `strcmp`, not `==`.",
          "A deep copy allocates new memory and copies every character, including the null terminator `\\0`.",
          "`malloc` asks for memory on the heap. It can fail, so check for `NULL`. `NULL` means no valid address was returned. When you are done with allocated memory, call `free`. `valgrind` helps find leaks and invalid memory use."
        ],
        codeNote: "Fragment, not a full runnable file: this belongs inside `main` after `s` already exists. To compile it, add `#include <stdlib.h>` for `malloc`/`free` and `#include <string.h>` for `strlen`/`strcpy`. If the full file is `copy.c`, run `make copy`, then `./copy`.",
        code: `char *t = malloc(strlen(s) + 1);
if (t == NULL)
{
    return 1;
}
strcpy(t, s);
free(t);`,
        walkthrough: [
          "`char *t` is a pointer to a character. For strings, that means `t` stores the address of the first character.",
          "`malloc(strlen(s) + 1)` requests enough bytes for all characters plus `\\0`.",
          "`t == NULL` checks whether allocation failed.",
          "`strcpy(t, s)` copies the string contents into the new memory.",
          "`free(t)` releases the memory when finished."
        ],
        checks: [
          {
            question: "Why allocate `strlen(s) + 1` bytes?",
            answer: "The extra byte stores the null terminator `\\0`."
          },
          {
            question: "What is a memory leak?",
            answer: "Allocated memory that your program no longer has a way to free."
          }
        ],
        exercises: [
          "Copy a string manually with a loop.",
          "Run `valgrind` on a program that forgets `free`, then fix it.",
          "Explain shallow copy vs deep copy in your own words."
        ],
        sources: [
          { label: "CS50 Lecture 4 notes: Strings, Pointer Arithmetic, String Comparison, Copying and malloc, Valgrind", href: "https://cs50.harvard.edu/x/notes/4/" },
          { label: "CS50 Lecture 4 transcript", href: "https://cdn.cs50.net/2025/fall/lectures/4/lang/en/lecture4.txt" },
          { label: "CS50 Short: Dynamic Memory Allocation", href: "https://cs50.harvard.edu/x/shorts/dynamic_memory_allocation/" },
          { label: "CS50 Week 4 source code", href: "https://cdn.cs50.net/2025/fall/lectures/4/src4/" }
        ]
      },
      {
        kind: "Lecture and Section",
        title: "Swapping, overflow, and scanf",
        transcriptBasis: [
          "Lecture 4 covers Pointer Fun with Binky, swapping, overflow, and `scanf` before file I/O.",
          "The swapping example shows why a function needs addresses to change caller-owned variables.",
          "`scanf` appears as a lower-level input function that writes into memory through addresses."
        ],
        body: [
          "Swapping two caller variables requires pointers. If a function receives only copies of `a` and `b`, it can swap the copies but not the originals. Passing `&a` and `&b` gives the function addresses it can dereference.",
          "Overflow happens when a value grows beyond what its type can store. In Week 4, this connects back to memory: fixed-size storage has limits.",
          "`scanf` reads input into a memory location. That is why beginner `scanf` examples use `&n` for an integer: the function needs the address where it should place the value.",
          "Unlike CS50's `get_int`, `scanf` does not return the typed integer directly. It writes into the variable whose address you provide."
        ],
        codeNote: "Fragment, not a full runnable file: this belongs inside `main` with `#include <stdio.h>` above it. If the full file is `scan.c`, run `make scan`, then `./scan`.",
        code: `int n;
printf("n: ");
scanf("%i", &n);
printf("n is %i\\n", n);`,
        walkthrough: [
          "`int n;` creates space for an integer but does not yet give it a meaningful value.",
          "`printf(\"n: \");` prints a prompt without a newline, so the user types on the same line.",
          "`scanf(\"%i\", &n)` reads an integer from input.",
          "`%i` tells `scanf` what kind of value to read.",
          "`&n` gives `scanf` the address of `n`, so `scanf` can store the user's integer there.",
          "`printf` then prints the value now stored in `n`."
        ],
        checks: [
          {
            question: "Why does `scanf` use `&n` for an integer?",
            answer: "Because `scanf` must write into `n`, so it needs the address where `n` lives."
          },
          {
            question: "Why does a swap function need pointers?",
            answer: "Pointers let the function modify the original caller variables instead of local copies."
          },
          {
            question: "What is overflow?",
            answer: "A value exceeding the range its fixed-size type can represent."
          }
        ],
        exercises: [
          "Write a program that reads one integer with `scanf` and prints it.",
          "Write `swap(int *a, int *b)` as a separate helper function and test that the caller's variables change.",
          "Explain why `swap(int a, int b)` does not change the caller's variables."
        ],
        sources: [
          { label: "CS50 Lecture 4 notes: Pointer Fun with Binky, Swapping, Overflow, scanf", href: "https://cs50.harvard.edu/x/notes/4/" },
          { label: "CS50 Lecture 4 transcript", href: "https://cdn.cs50.net/2025/fall/lectures/4/lang/en/lecture4.txt" },
          { label: "CS50 Section 4 transcript", href: "https://cdn.cs50.net/2025/fall/sections/4/lang/en/section4.txt" }
        ]
      },
      {
        kind: "Section",
        title: "Files are bytes",
        transcriptBasis: [
          "Lecture 4 ends with file I/O after memory and pointer topics.",
          "Section 4 states that it covers memory, pointers, and reading/writing data from a file.",
          "The official Week 4 shorts include File Pointers."
        ],
        body: [
          "Recover-style file problems treat a file as raw bytes. The program reads fixed-size chunks, inspects byte patterns, and writes matching bytes into output files.",
          "A file is a sequence of bytes. C uses `FILE *` to work with files. `fopen` opens, `fread` reads bytes, `fwrite` writes bytes, and `fclose` closes.",
          "`FILE *input` means `input` is a pointer to file information managed by C's standard library. You do not inspect the internals directly; you pass it to file functions.",
          "`uint8_t` means an unsigned 8-bit integer, which is a clear way to represent one byte. It comes from `#include <stdint.h>`.",
          "Recover-style problems scan fixed-size blocks. JPEG files begin with recognizable byte patterns, so you can detect the start of a file by inspecting bytes."
        ],
        goalPreview: {
          title: "Recover-style byte scan",
          caption: "The goal is to read one block at a time, check whether the block starts a JPEG, and write bytes to the right output file.",
          art: `input bytes
---------
block 0: not JPEG
block 1: JPEG header
block 2: JPEG data`
        },
        codeNote: "Fragment, not a full runnable file: this loop belongs inside `main` after `input` and `output` have been opened and checked. Add `#include <stdint.h>` for `uint8_t` and `#include <stdio.h>` for `FILE`, `fread`, and `fwrite`. If the full file is `copyfile.c`, run `make copyfile`, then pass file names when you run it, such as `./copyfile input.raw output.raw`.",
        code: `uint8_t buffer[512];
while (fread(buffer, 1, 512, input) > 0)
{
    fwrite(buffer, 1, 512, output);
}`,
        walkthrough: [
          "`uint8_t buffer[512]` creates an array of 512 bytes.",
          "`while (...)` repeats as long as the condition inside parentheses is true.",
          "`fread(buffer, 1, 512, input)` tries to read up to 512 one-byte items from `input` into `buffer`.",
          "`fread` returns how many items it actually read.",
          "`> 0` means the loop continues while at least one byte was read.",
          "`fwrite(buffer, 1, 512, output)` writes bytes from the buffer to `output`."
        ],
        checks: [
          {
            question: "What does `fread` return?",
            answer: "The number of items successfully read."
          },
          {
            question: "Why use `uint8_t` for a byte buffer?",
            answer: "`uint8_t` is an unsigned 8-bit integer, matching one byte."
          }
        ],
        exercises: [
          "Write a file copy program.",
          "Count 512-byte blocks in a file.",
          "Detect a JPEG header pattern in a byte buffer."
        ],
        sources: [
          { label: "CS50 Lecture 4 notes: File I/O", href: "https://cs50.harvard.edu/x/notes/4/" },
          { label: "CS50 Section 4 transcript", href: "https://cdn.cs50.net/2025/fall/sections/4/lang/en/section4.txt" },
          { label: "CS50 Short: File Pointers", href: "https://cs50.harvard.edu/x/shorts/file_pointers/" }
        ]
      },
      {
        kind: "Practice Assignment",
        title: "Week 4 assignments: Volume, Filter, Recover",
        transcriptBasis: [
          "CS50 Week 4 assignments are Volume, Filter less/more, and Recover.",
          "Lecture 4’s memory and file I/O topics support byte-level audio/image/file work."
        ],
        body: [
          "This section is the official CS50 Week 4 assignment checklist. Complete these on CS50's assignment pages.",
          "CS50 Week 4 requires Volume, one version of Filter, and Recover.",
          "Filter has less-comfortable and more-comfortable versions. Pick the version that matches your comfort with image pixel logic."
        ],
        assignmentItems: [
          {
            type: "Required",
            title: "Volume",
            href: "https://cs50.harvard.edu/x/psets/4/volume/",
            goal: "Read and modify audio samples.",
            action: "Complete this first."
          },
          {
            type: "Choose one",
            title: "Filter less or Filter more",
            href: "https://cs50.harvard.edu/x/psets/4/",
            goal: "Manipulate image pixels in memory.",
            action: "Do Filter less first unless you are ready for the more-comfortable version."
          },
          {
            type: "Required",
            title: "Recover",
            href: "https://cs50.harvard.edu/x/psets/4/recover/",
            goal: "Scan raw bytes for JPEG signatures and write recovered image files.",
            action: "Complete this after practicing file reads."
          }
        ],
        checks: [
          {
            question: "Which Week 4 assignments are required?",
            answer: "Volume, one Filter version, and Recover."
          },
          {
            question: "What does Recover practice?",
            answer: "Reading raw bytes, detecting JPEG signatures, and writing files."
          }
        ],
        exercises: [
          "Open the official Week 4 pset page.",
          "Complete Volume.",
          "Complete one Filter option.",
          "Complete Recover."
        ],
        sources: [
          { label: "CS50 Week 4 programming assignments", href: "https://cs50.harvard.edu/x/psets/4/" },
          { label: "CS50 Lecture 4 notes", href: "https://cs50.harvard.edu/x/notes/4/" }
        ]
      },
      {
        kind: "Review",
        title: "Week 4 review: pointers, heap memory, and files",
        transcriptBasis: [
          "Week 4 teaches hexadecimal, memory, pointers, string copying, malloc, Valgrind, scanf, and file I/O.",
          "These review tasks are supplemental practice after the official Week 4 assignments."
        ],
        body: [
          "Do this after the official Week 4 assignments. Each task isolates one memory idea before combining them.",
          "If a program uses `malloc` or `fopen`, your review standard is not just correct output; it must also clean up memory and close files."
        ],
        codeNote: "Fragment, not a full runnable file: this condition belongs inside Recover's 512-byte read loop after `buffer` has been filled by `fread`.",
        code: `if (buffer[0] == 0xff &&
    buffer[1] == 0xd8 &&
    buffer[2] == 0xff &&
    (buffer[3] & 0xf0) == 0xe0)
{
    // start of JPEG
}`,
        walkthrough: [
          "`buffer[0]`, `buffer[1]`, and so on inspect individual bytes in the block.",
          "`0xff`, `0xd8`, and `0xe0` are hexadecimal byte values.",
          "`&&` means all conditions must be true.",
          "`buffer[3] & 0xf0` uses bitwise AND to keep only the high four bits of the fourth byte.",
          "`== 0xe0` then checks whether those high four bits match the JPEG pattern.",
          "If the pattern matches, the block is treated as the start of a JPEG."
        ],
        checks: [
          {
            question: "What is a file signature?",
            answer: "A recognizable byte pattern that identifies a file type."
          },
          {
            question: "What must you do with every file you successfully open?",
            answer: "Close it with `fclose`."
          }
        ],
        exercises: [
          "Target pointers: write a program that changes an integer through `int *p`.",
          "Target heap memory: copy a string into newly allocated memory and free it.",
          "Target files: copy one file to another using a 512-byte buffer.",
          "Combined review: scan a file in 512-byte blocks and count how many blocks begin with `0xff`."
        ],
        sources: [
          { label: "CS50 Lecture 4 notes", href: "https://cs50.harvard.edu/x/notes/4/" },
          { label: "CS50 Section 4 transcript", href: "https://cdn.cs50.net/2025/fall/sections/4/lang/en/section4.txt" }
        ]
      }
    ]
  },
  {
    id: "week5",
    title: "Week 5: Data Structures",
    mission: "CS50 flow: lecture on structs/lists/tables/tries, shorts for structures, section for linked lists, then dictionary assignments.",
    sections: [
      {
        kind: "Lecture",
        title: "Jack Learns the Facts: structs and linked lists",
        transcriptBasis: [
          "Lecture 5 begins with the “Jack Learns the Facts” framing before moving into concrete C data structures.",
          "Lecture 5 focuses on data structures as the final C week.",
          "Lecture 5 discusses arrays, linked lists, and the tradeoff between dynamic growth and search cost.",
          "The official Week 5 shorts include Structures and Singly-Linked Lists."
        ],
        body: [
          "CS50 opens Week 5 by motivating data structures through the need to organize facts so that later operations become easier or faster. The C version of that idea is to choose a memory layout intentionally.",
          "A struct defines a custom type that groups related fields. A linked-list node stores data plus a pointer to the next node.",
          "Arrays are contiguous and allow direct indexing. Linked lists can grow dynamically but require traversal from node to node.",
          "`struct node *next` appears inside the node definition because each node needs to point to another node of the same kind. `NULL` marks the end of a list.",
          "`ptr->number` means access the `number` field through pointer `ptr`. It is shorthand for `(*ptr).number`."
        ],
        codeNote: "Fragment, not a full runnable file: this type definition itself does not need a header. Put it near the top of the file, before functions that allocate or traverse nodes. Code that allocates nodes will also need `#include <stdlib.h>` for `malloc` and `free`.",
        code: `typedef struct node
{
    int number;
    struct node *next;
}
node;`,
        walkthrough: [
          "`typedef struct node` begins a self-referential structure definition.",
          "`int number;` stores the node's data.",
          "`struct node *next;` stores the address of the next node. It uses `struct node` because the shorter name `node` is not finished being created yet.",
          "`node;` creates the shorter type name `node` for later use."
        ],
        checks: [
          {
            question: "What does the `next` field store?",
            answer: "The address of the next node, or `NULL` if there is no next node."
          },
          {
            question: "Why can linked lists grow more easily than arrays?",
            answer: "Each node is allocated separately and connected by pointers."
          }
        ],
        exercises: [
          "Allocate one node and store a number in it.",
          "Link two nodes together.",
          "Traverse the list and print each number."
        ],
        sources: [
          { label: "CS50 Lecture 5 notes: Jack Learns the Facts, Data Structures, Arrays, Linked Lists", href: "https://cs50.harvard.edu/x/notes/5/" },
          { label: "CS50 Lecture 5 transcript", href: "https://cdn.cs50.net/2025/fall/lectures/5/lang/en/lecture5.txt" },
          { label: "CS50 Short: Structures", href: "https://cs50.harvard.edu/x/shorts/structures/" },
          { label: "CS50 Short: Singly-Linked Lists", href: "https://cs50.harvard.edu/x/shorts/singly_linked_lists/" },
          { label: "CS50 Week 5 source code", href: "https://cdn.cs50.net/2025/fall/lectures/5/src5/" }
        ]
      },
      {
        kind: "Shorts and Section",
        title: "Stacks, queues, trees, hash tables, tries",
        transcriptBasis: [
          "Lecture 5 covers queues, stacks, trees, hash tables, and tries after introducing data-structure tradeoffs.",
          "Section 5 states that it focuses on data-structure tradeoffs, linked-list operations, and building a hash table.",
          "The official Week 5 shorts include Stacks, Queues, Hash Tables, Tries, and Data Structures."
        ],
        body: [
          "Hash tables solve a dictionary-style problem: given a word, quickly decide which bucket should store it or where to look for it later.",
          "A stack is last-in, first-out. A queue is first-in, first-out. These are abstract data types: ideas about behavior, not one specific implementation.",
          "A tree stores nodes in branching parent-child relationships. A binary search tree keeps smaller values on one side and larger values on the other, which can make search faster when the tree stays balanced.",
          "A hash table uses a hash function to choose a bucket. Collisions happen when multiple values land in the same bucket. A common solution is to store a linked list in each bucket.",
          "A trie stores words by following characters through nodes. It can make lookup fast but may use lots of memory.",
          "`const char *word` means `word` is a pointer to character data that this function promises not to modify. In CS50's string terms, it is a read-only string input."
        ],
        goalPreview: {
          title: "Hash by first letter",
          caption: "This simple hash sends words to buckets based on their first letter. It is easy to understand, but many words can collide in the same bucket.",
          art: `apple  -> bucket 0
banana -> bucket 1
boat   -> bucket 1`
        },
        codeNote: "Fragment, not a full runnable file: this is a hash helper function. A full file must add `#include <ctype.h>` for `toupper` and define how many buckets the table has. To run it alone, also add `#include <stdio.h>` and write a `main` that calls `hash(\"apple\")` and prints the returned bucket.",
        code: `unsigned int hash(const char *word)
{
    return toupper(word[0]) - 'A';
}`,
        walkthrough: [
          "`unsigned int hash(...)` returns a nonnegative bucket number.",
          "`const` means this function should not change the characters in `word`.",
          "`char *word` means `word` points to the first character of a string.",
          "`word[0]` gets the first character of the word.",
          "`toupper(word[0])` treats lowercase and uppercase first letters the same.",
          "`- 'A'` converts `A` through `Z` into numbers 0 through 25.",
          "`return` sends that bucket number back to the code that called `hash`."
        ],
        checks: [
          {
            question: "What is a collision?",
            answer: "When two or more inputs hash to the same bucket."
          },
          {
            question: "What does LIFO mean?",
            answer: "Last in, first out. The most recently added item is removed first."
          },
          {
            question: "Why can tries use lots of memory?",
            answer: "Each node may need many child pointers, even if most are unused."
          }
        ],
        exercises: [
          "Use the hash function shown to hash ten words by first letter and list collisions.",
          "Then draw a stack after three pushes and one pop.",
          "Then draw a queue after three enqueues and one dequeue."
        ],
        sources: [
          { label: "CS50 Lecture 5 notes: Queues, Stacks, Trees, Hash Tables, Tries", href: "https://cs50.harvard.edu/x/notes/5/" },
          { label: "CS50 Lecture 5 transcript", href: "https://cdn.cs50.net/2025/fall/lectures/5/lang/en/lecture5.txt" },
          { label: "CS50 Section 5 transcript", href: "https://cdn.cs50.net/2025/fall/sections/5/lang/en/section5.txt" },
          { label: "CS50 Short: Hash Tables", href: "https://cs50.harvard.edu/x/shorts/hash_tables/" },
          { label: "CS50 Short: Tries", href: "https://cs50.harvard.edu/x/shorts/tries/" }
        ]
      },
      {
        kind: "Practice Assignment",
        title: "Week 5 assignments: Inheritance, Speller",
        transcriptBasis: [
          "CS50 Week 5 assignments are Inheritance and Speller.",
          "Speller is grounded in the Week 5 hash-table and linked-list material."
        ],
        body: [
          "This section is the official CS50 Week 5 assignment checklist. Complete both assignments on CS50's assignment pages.",
          "Inheritance practices structs, pointers, recursion, and freeing tree-like memory.",
          "Speller is the C capstone: it combines files, strings, hash tables, linked lists, performance, and memory cleanup."
        ],
        assignmentItems: [
          {
            type: "Required",
            title: "Inheritance",
            href: "https://cs50.harvard.edu/x/psets/5/inheritance/",
            goal: "Build and free a family tree with structs, pointers, and recursion.",
            action: "Complete this first."
          },
          {
            type: "Required",
            title: "Speller",
            href: "https://cs50.harvard.edu/x/psets/5/speller/",
            goal: "Load dictionary words into a hash table, check text words, and unload all allocated memory.",
            action: "Complete this after Inheritance."
          }
        ],
        checks: [
          {
            question: "Which Week 5 assignments are required?",
            answer: "Inheritance and Speller."
          },
          {
            question: "Why is Speller the C capstone?",
            answer: "It combines files, strings, hash tables, linked lists, performance, and memory cleanup."
          }
        ],
        exercises: [
          "Open the official Week 5 pset page.",
          "Complete Inheritance.",
          "Complete Speller.",
          "Run memory checks and ensure every allocated node is freed."
        ],
        sources: [
          { label: "CS50 Week 5 programming assignments", href: "https://cs50.harvard.edu/x/psets/5/" },
          { label: "CS50 Lecture 5 notes", href: "https://cs50.harvard.edu/x/notes/5/" },
          { label: "CS50 Section 5 transcript", href: "https://cdn.cs50.net/2025/fall/sections/5/lang/en/section5.txt" }
        ]
      },
      {
        kind: "Review",
        title: "Week 5 review: linked lists and hash-table lookup",
        transcriptBasis: [
          "Week 5 teaches structs, linked lists, stacks, queues, trees, hash tables, and tries.",
          "These review tasks are supplemental practice after the official Week 5 assignments."
        ],
        body: [
          "Do this after the official Week 5 assignments. The review focuses on the same memory patterns that make Speller work.",
          "For any linked-list program, the standard is: allocate carefully, connect pointers in the right order, traverse without losing the head, and free every node."
        ],
        goalPreview: {
          title: "Speller lookup",
          caption: "The goal is to hash the word, walk that bucket's linked list, and return true if a matching dictionary word is found.",
          art: `table[bucket]
   |
 word -> word -> word -> NULL`
        },
        codeNote: "Fragment, not a full runnable file: this is the core loop inside Speller's `check` function. It assumes `table`, `bucket`, `node`, and `word` already exist.",
        code: `for (node *cursor = table[bucket]; cursor != NULL; cursor = cursor->next)
{
    if (strcasecmp(cursor->word, word) == 0)
    {
        return true;
    }
}`,
        walkthrough: [
          "`table[bucket]` is the head of the linked list for one hash bucket.",
          "`for (node *cursor = table[bucket]; cursor != NULL; cursor = cursor->next)` walks through one linked list.",
          "`node *cursor = table[bucket]` creates a temporary pointer starting at the first node in the bucket.",
          "`cursor != NULL` means keep going until the end of the list.",
          "`cursor = cursor->next` moves to the next node.",
          "`if (...)` checks each node's word while the loop visits it.",
          "`strcasecmp` compares words without caring about uppercase vs lowercase.",
          "`return true;` exits as soon as a matching word is found."
        ],
        checks: [
          {
            question: "What must `load` do in Speller?",
            answer: "Read dictionary words, allocate nodes, store words, and insert them into the hash table."
          },
          {
            question: "What must `unload` do?",
            answer: "Free every node allocated for every bucket."
          }
        ],
        exercises: [
          "Target linked lists: allocate three nodes, link them, print them, and free them.",
          "Target hash functions: hash ten words by first letter and write down collisions.",
          "Target traversal: search one bucket's linked list for a word.",
          "Combined review: build a 26-bucket mini dictionary using first-letter hashing."
        ],
        sources: [
          { label: "CS50 Lecture 5 notes", href: "https://cs50.harvard.edu/x/notes/5/" },
          { label: "CS50 Section 5 transcript", href: "https://cdn.cs50.net/2025/fall/sections/5/lang/en/section5.txt" }
        ]
      }
    ]
  }
];

# CS50 C Accelerator

A beginner-first, static study site for learning the C programming material from CS50x Weeks 1-5 without needing to watch every lecture video end to end.

The site is organized like a course: pick a week, read the lesson, walk through code line by line, check your understanding, complete CS50-style assignments, then use review drills for extra practice.

## What It Covers

- Week 1: C basics, compiling, `printf`, variables, types, conditionals, loops, functions, Mario, Cash, and Credit.
- Week 2: arrays, strings, command-line arguments, exit codes, Scrabble, Readability, and Caesar.
- Week 3: linear search, binary search, running time, structs, sorting, recursion, Plurality, Runoff, and Tideman.
- Week 4: hexadecimal, memory, pointers, strings as addresses, `malloc`, Valgrind, file I/O, Filter, Volume, and Recover.
- Week 5: data structures, linked lists, trees, hash tables, tries, Inheritance, and Speller.

## Run Locally

You only need a browser and a small local web server. No build step is required.

```sh
git clone https://github.com/Mr-Tomahawk/cs50-c-accelerator.git
cd cs50-c-accelerator
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

If port `8000` is already in use, choose another port:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## How To Use It

1. Start with Week 1, even if you have never programmed before.
2. Read each lesson section before opening the checks or exercises.
3. Type the code yourself instead of copying it.
4. Do the official assignment section for that week.
5. Use the review section only after finishing the lesson and assignment material.

## Project Layout

```text
.
├── index.html              # Static page shell
├── styles.css              # Responsive visual design
├── app.js                  # Rendering, navigation, flashcards, and interactions
├── data/
│   ├── accelerator.js      # Week-by-week teaching path
│   ├── course.js           # Course overview data
│   ├── drills.js           # Practice drills
│   ├── practice.js         # Assignment and exercise data
│   ├── syntax.js           # Syntax reference blocks
│   └── trainer.js          # Active-recall trainer content
├── materials/
│   ├── PROVENANCE.md       # Source and coverage map
│   └── README.md           # Notes about source material collection
└── scripts/
    └── download-transcripts.sh
```

## Source Material And Attribution

This project is an independent learning aid based on the C-relevant portions of CS50x. It is not affiliated with or endorsed by Harvard, CS50, or edX.

Teaching content is grounded in CS50x Weeks 1-5, including official course pages, notes, source code, sections, problem-set pages, and YouTube transcripts. See [materials/PROVENANCE.md](materials/PROVENANCE.md) for the coverage map.

Raw downloaded transcripts, HTML snapshots, and zip files are intentionally not committed to this public repository. The site contains condensed teaching notes, code walkthroughs, exercises, and provenance references rather than republished raw source material.

## Optional: Download Transcript References

The helper script uses [`yt-dlp`](https://github.com/yt-dlp/yt-dlp) to download subtitle files for local reference.

```sh
python3 -m pip install --user -U yt-dlp
YTDLP="$(python3 -m site --user-base)/bin/yt-dlp" ./scripts/download-transcripts.sh
```

The script writes files under `materials/raw/`, which is ignored by git.

## Development Checks

Run JavaScript syntax checks:

```sh
for f in app.js data/*.js; do node --check "$f" || exit 1; done
```

Run a local server and manually verify the course navigation:

```sh
python3 -m http.server 8000
```

## Contributions

Issues, corrections, and pull requests are welcome. Good contributions include clearer beginner explanations, bug fixes, accessibility improvements, typo fixes, and exercises that stay faithful to the CS50 C material.

## License

No open-source license has been added yet. Ask before reusing the repository contents outside personal study.

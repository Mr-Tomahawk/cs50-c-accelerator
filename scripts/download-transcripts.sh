#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
YTDLP="${YTDLP:-/Users/pc/Library/Python/3.13/bin/yt-dlp}"
NODE="${NODE:-/opt/homebrew/bin/node}"

mkdir -p "$ROOT/materials/raw/transcripts"

"$YTDLP" \
  --js-runtimes "node:$NODE" \
  --skip-download \
  --write-subs \
  --sub-langs en \
  --sub-format vtt \
  -o "$ROOT/materials/raw/transcripts/%(id)s-%(title).80B.%(ext)s" \
  "https://www.youtube.com/watch?v=SlqjA04_dpk" \
  "https://www.youtube.com/watch?v=h5Gc1n8ZuU8" \
  "https://www.youtube.com/watch?v=6Svu_ae5ebk" \
  "https://www.youtube.com/watch?v=db0H0U13YsA" \
  "https://www.youtube.com/watch?v=PmAI76OGE_E" \
  "https://www.youtube.com/watch?v=8N5ZpIh9gzM" \
  "https://www.youtube.com/watch?v=-ZSpTeuuHcQ" \
  "https://www.youtube.com/watch?v=r383B4M1EgE" \
  "https://www.youtube.com/watch?v=Gjf0L3mkVtY" \
  "https://www.youtube.com/watch?v=sLrnELP1nT0"

# HarpShed Cowork Handover

Use this prompt at the start of every new Cowork session when working on the HarpShed website. It tells Claude everything it needs to know about the site structure, file locations, data formats, and how to add new content.

---

## What is HarpShed

HarpShed (harpshed.com) is a membership site for harmonica players built by Gareth Tucker (GT Harmonica). It focuses on old time, pre-war blues, solo harp, and roots music. The site is a static HTML/CSS/JS site hosted on GitHub Pages. There is no framework, no build step, no backend. Everything runs from two main files.

## Local Path on Gareth's Machine

```
/Users/garethtucker/Documents/Claude/Projects/HarpShed App build/harpshed-site
```

Note the space in "HarpShed App build" so always quote the path when using terminal commands.

## GitHub Repo

```
https://github.com/Gtharmonica/harpshed-site.git
```

To push changes:
```bash
cd "/Users/garethtucker/Documents/Claude/Projects/HarpShed App build/harpshed-site" && git add -A && git commit -m "Your message" && git push
```

## File Structure

```
harpshed-site/
  index.html              <- The entire site (HTML + CSS + JS, ~7600 lines)
  content.js              <- All site data (lessons, tabs, trails, articles, etc. ~700 lines)
  tabs/                   <- Tab PDF files (generated with Python/reportlab)
    Salt_River.pdf
    Rain_Crow_Bill.pdf
    Tree_of_Life.pdf
    Cherry_Pink_and_Apple_Blossom_White.pdf
    Yew_Piney_Mountain.pdf
  harpshed-logo.png       <- Main logo used in headers and PDFs
  hero-photo.jpg          <- Hero image and default tab image
  gareth-harpshed.jpg     <- Alternative image used on tab cards
  gareth-live-colour.jpg  <- Live performance photo
  fox-chaser.jpg          <- Fox Chaser painting
  admin.html              <- Admin panel (separate)
  HarpShed_Cowork_Handover.md <- This file
```

## content.js

This is the single source of truth for all site content. It defines a global `SITE_CONTENT` object with these top level keys:

- **lessons** - Video lesson entries
- **tabs** - Tune library entries (the main data used by the Tunes page, each with tab PDF, jam tracks, video, etc.)
- **jamTracks** - Standalone jam track entries (legacy array, kept for reference)
- **articles** - Written articles
- **fundamentals** - Technique pillars (breathing, bending, scales, rhythm, greasing)
- **trails** - The three learning pathways (Blue Ridge, Solo Harp, Juke Joint)
- **communityPosts** - Fox Chasers community posts
- **gallery** - Photo gallery images

## Site Architecture

The site is a single page app using hash-based routing. All pages live inside `index.html` as `<div class="page" id="page-xxx">` containers. The `showPage(key)` function shows/hides them.

**Key technical facts:**
- Tone.js loaded from CDN for jam track audio engine (independent pitch + speed)
- Web Audio API for metronome (OscillatorNode + GainNode, no external files)
- localStorage for trail progress tracking (key: `harpshed_trail_progress`)
- All render functions and filter state are on `window` so inline handlers work
- CSS custom properties defined at top of style block (--wood-dark, --parchment, --rust, --rust-light, --charcoal, --wood-light)

## Adding a New Tune

### 1. Add to the tabs array in content.js

```javascript
{
  "title": "Tune Name",
  "description": "Short description of the tune, its origin, and what makes it interesting.",
  "key": "D",
  "position": "2nd",
  "difficulty": "Intermediate",
  "trail": "blue-ridge",
  "genre": "Old Time",
  "method": "standard",
  "downloadUrl": "tabs/Tune_Name.pdf",
  "youtubeUrl": "https://youtu.be/XXXXXXXXXXX",
  "youtubeVideos": [
    {"url": "https://youtu.be/XXXXXXXXXXX", "label": "A Part"},
    {"url": "https://youtu.be/YYYYYYYYYYY", "label": "B Part"}
  ],
  "jamTracks": [
    {"url": "tracks/tune-slow.mp3", "title": "Slow (70 BPM)"},
    {"url": "tracks/tune-medium.mp3", "title": "Medium (100 BPM)"}
  ],
  "image": "gareth-harpshed.jpg",
  "free": false
}
```

**Multiple YouTube videos:** If a tune has separate lesson videos (e.g. A Part and B Part), use the `youtubeVideos` array. When present, the rendering code shows each video with its label above it. The `youtubeUrl` field should still be set to the first video URL for thumbnail/fallback purposes. If `youtubeVideos` is absent or empty, the single `youtubeUrl` is used as before.

### 2. Add to a trail stage (if applicable)

Find the relevant trail in the `trails` array, find the right stage, and add to its `content` array:

```javascript
{
  "title": "Tune Name",
  "youtubeUrl": "https://youtu.be/XXXXXXXXXXX",
  "youtubeVideos": [
    {"url": "https://youtu.be/XXXXXXXXXXX", "label": "A Part"},
    {"url": "https://youtu.be/YYYYYYYYYYY", "label": "B Part"}
  ],
  "insight": "Longer description with playing tips, context, and what to focus on.",
  "tabPdf": "tabs/Tune_Name.pdf",
  "jamTracks": [
    {"url": "tracks/tune-slow.mp3", "title": "Slow (70 BPM)"},
    {"url": "tracks/tune-medium.mp3", "title": "Medium (100 BPM)"}
  ],
  "key": "D",
  "position": "2nd"
}
```

If the tune has a subgenre (used in Juke Joint trail), add `"subgenre": "Country Blues"`.

### 3. Create the tab PDF

Tab PDFs are generated using Python with reportlab. The script `create_yew_piney_tab.py` shows the exact pattern. All PDFs follow the same visual style:

- HarpShed logo centered at top
- Title in Times-Bold 36pt, dark brown (#5C3A1E)
- Subtitle with key, position, form info in Times-Roman 11pt
- Source line in Times-Italic 10pt
- Tab notation in Courier 11pt monospace
- Thin brown horizontal rules (#C4A882)
- Copyright footer: GT Harmonica 2026
- Optional second page for History and Context

Save PDFs to `tabs/Tune_Name.pdf`.

## Genre Mappings

| Trail       | Default Genre          |
|-------------|------------------------|
| blue-ridge  | Old Time               |
| juke-joint  | Blues (or subgenre)    |
| solo-harp   | Solo                   |

Other genres in use: Blues / Jazz Crossover

## The Three Trails

Each trail is a structured course with 6 stages. Each has its own dedicated page with expandable tune cards, progress checkboxes, and completion tracking.

1. **The Blue Ridge Trail** (Old Time) - color #4a7199 - Appalachian fiddle tunes, string band playing
2. **The Solo Harp Trail** (Solo) - color #a0522d - Fox chases, train pieces, self-accompaniment
3. **The Juke Joint Trail** (Early Blues) - color #8b3a3a - Pre-war blues, Delta style, country blues

Stages: Getting Started, Getting a Sound, Playing Along, Holding It Down, Carrying Tunes, Playing Your Own Way.

## The Tunes Page

The unified library showing all entries from the `tabs` array as expandable cards.

Features:
- Search box filters tunes by name as you type
- Filter dropdowns for Genre, Key, Position, Difficulty auto-update the grid on change
- Show All button resets all filters and search in one click
- Expandable tune cards with YouTube video embed (supports multiple labelled videos), jam track player, metronome, tab PDF download
- Cards show badges for genre, key, position, difficulty, and free/members status
- Tune count updates live as filters change

## Jam Track Player (Tone.js)

Each tune card and trail tune has an integrated jam track player powered by Tone.js. It provides independent pitch and speed control, similar to the Amazing Slow Downer app.

Features: multiple MP3 support with dropdown selector, speed control 50-200%, semitone pitch buttons (+/- 12), cents fine-tuning slider (-50 to +50), loop controls with start/end time, Reset All button, lazy loading.

To add jam tracks, populate the `jamTracks` array:
```javascript
"jamTracks": [
  {"url": "tracks/salt-river-slow.mp3", "title": "Slow (70 BPM)"},
  {"url": "tracks/salt-river-medium.mp3", "title": "Medium (100 BPM)"}
]
```
Empty array `[]` shows "Jam track coming soon".

## Metronome (Web Audio API)

Every tune card and trail tune has a built-in metronome. No external files. BPM slider (30-300), time signatures (4/4, 3/4, 2/4, 6/8, 8/8), tone options (Woodblock, Click, Cowbell, Rimshot, Soft Click), visual beat dots with accent on beat 1.

## Progress Tracking

Trail progress uses localStorage (key: `harpshed_trail_progress`). Each tune can be ticked complete. Progress bars show percentage per trail and per stage.

## Key JavaScript Functions

All on `window` unless noted:

- `renderTuneFilters()` / `renderTunes()` / `clearTuneFilters()` - Tunes page filter and render
- `tuneFilters` - Object: { genre, key, position, difficulty, search }
- `renderTrails()` / `showFullTrail(trailId)` / `showTrailTabs(trailId)` - Trail pages
- `renderLessons()` / `renderFundamentals()` - Other content pages
- `showPage(key)` - Main navigation function
- `buildMetronomeHtml(id)` / `getMetronome(id)` / `destroyAllMetronomes()` - Metronome
- `buildJamTrackHtml(id, jamTracks)` / `createJamEngine(id, url)` / `getJamEngine(id, url)` / `destroyAllJamEngines()` - Jam track player
- `getYouTubeId(url)` - Extracts video ID from YouTube URLs
- `getTrailProgress()` / `saveTrailProgress()` - localStorage helpers
- `isTuneComplete()` / `toggleTuneComplete()` - Per-tune completion
- `getTrailCompletionStats()` / `getStageCompletionStats()` - Progress calculations

## Page Map

Hash-based routing. `pageMap` maps URL hashes to page container IDs:

```
lessons, tunes, fundamentals, trails, trail-detail, articles,
gallery, community, zoom-lessons, whats-new, contact, lesson-detail
```

## Adding Other Content Types

### New Lesson
```javascript
{
  "title": "Lesson Title",
  "description": "What the lesson covers.",
  "youtubeUrl": "https://youtu.be/XXXXXXXXXXX",
  "duration": "24 min",
  "level": "Beginner",
  "category": "old-time",
  "free": true
}
```

### New Article
```javascript
{
  "title": "Article Title",
  "excerpt": "Short preview text.",
  "category": "History",
  "date": "2026-04-06",
  "readTime": "8 min",
  "content": "",
  "image": ""
}
```

### New Fundamental Item
Find the relevant pillar in `fundamentals` and add to its `items` array:
```javascript
{
  "title": "Topic Title",
  "description": "What this covers.",
  "level": "Start Here",
  "youtubeUrl": ""
}
```

## Hosting and Deployment

GitHub Pages, main branch. CNAME points to harpshed.com. Commit and push to deploy. Allow 2-3 minutes for GitHub Pages to rebuild.

## PDF Generation

Tab PDFs use Python + reportlab. Pattern in `create_yew_piney_tab.py`.

- Page size: US Letter
- Logo: harpshed-logo.png centered at top
- Colors: dark brown (#5C3A1E), medium brown (#8B6914), light brown (#A0784C), rule brown (#C4A882)
- Fonts: Times-Bold for titles, Times-Roman for body, Courier for tab notation
- Copyright: GT Harmonica 2026

## Current State (April 2026)

### What's working:
- Unified Tunes page with search, genre/key/position/difficulty filters, Show All reset
- Expandable tune cards with video embed, jam track player (Tone.js), metronome, tab PDF download
- Multiple YouTube video support per tune (with labels like "A Part", "B Part") on both Tunes page and Trail pages
- Three trail course pages (Blue Ridge, Solo Harp, Juke Joint) with progress tracking
- 9 tunes in the library, 5 with tab PDFs
- Yew Piney Mountain has two YouTube lesson URLs (A Part and B Part)
- All navigation, footer links, feature cards working

### What still needs doing:
- Jam track MP3 files need to be uploaded (all jamTracks arrays are currently empty)
- YouTube URLs need adding to most tunes (only Yew Piney Mountain has them so far)
- More tunes to be added to the library
- Trail stages with empty content arrays need populating
- Lesson YouTube URLs still empty
- Article full content still empty
- Footer logo in tab PDFs was requested but image wasn't accessible at the time
- Changes from 7 April 2026 session have NOT been pushed to GitHub yet

## Notes

- All JS is vanilla, no frameworks. Tone.js is the only external library (loaded from CDN).
- Mobile responsive with hamburger nav at smaller breakpoints
- The admin.html file is a separate admin panel
- Images go in the root harpshed-site directory
- Tab PDFs go in tabs/ subdirectory
- Jam track MP3s should go in a tracks/ subdirectory (create it when ready)

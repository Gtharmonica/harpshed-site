# HarpShed Cowork Handover

Use this prompt at the start of every new Cowork session when working on the HarpShed website. It tells Claude everything it needs to know about the site structure, file locations, data formats, and how to add new content.

---

## What is HarpShed

HarpShed (harpshed.com) is a membership site for harmonica players built by Gareth Tucker (GT Harmonica). It focuses on old time, pre-war blues, solo harp, and roots music. The site is a static HTML/CSS/JS site hosted on GitHub Pages. There is no framework, no build step, no backend. Everything runs from two main files.

## File Structure

```
harpshed-site/
  index.html          <- The entire site (HTML + CSS + JS, ~7100 lines)
  content.js           <- All site data (lessons, tabs, trails, articles, etc.)
  tabs/                <- Tab PDF files (generated with Python/reportlab)
    Salt_River.pdf
    Rain_Crow_Bill.pdf
    Tree_of_Life.pdf
    Cherry_Pink_and_Apple_Blossom_White.pdf
    Yew_Piney_Mountain.pdf
  harpshed-logo.png    <- Main logo used in headers and PDFs
  hero-photo.jpg       <- Hero image and default tab image
  gareth-harpshed.jpg  <- Alternative image used on tab cards
  admin.html           <- Admin panel (separate)
```

## content.js

This is the single source of truth for all site content. It defines a global `SITE_CONTENT` object with these top level keys:

- **lessons** - Video lesson entries
- **tabs** - Tune library entries (tabs, jam tracks, videos, metronome)
- **jamTracks** - Standalone jam track entries (legacy, still referenced)
- **articles** - Written articles
- **fundamentals** - Technique pillars (breathing, bending, scales, rhythm, greasing)
- **trails** - The three learning pathways (Blue Ridge, Solo Harp, Juke Joint)
- **communityPosts** - Fox Chasers community posts
- **gallery** - Photo gallery images

## Adding a New Tune

### 1. Add to the tabs array in content.js

```javascript
{
  "title": "Tune Name",
  "description": "Short description of the tune, its origin, and what makes it interesting.",
  "key": "D",              // Harmonica key (C, D, A, G, Bb, etc.)
  "position": "2nd",       // Playing position (1st, 2nd, 3rd)
  "difficulty": "Intermediate",  // Beginner, Intermediate, Advanced
  "trail": "blue-ridge",   // Which trail it belongs to: blue-ridge, solo-harp, juke-joint
  "genre": "Old Time",     // Genre for filtering: Old Time, Blues, Solo, Blues / Jazz Crossover
  "method": "standard",
  "downloadUrl": "tabs/Tune_Name.pdf",  // Path to the tab PDF (use underscores)
  "youtubeUrl": "https://youtu.be/XXXXXXXXXXX",  // YouTube lesson URL (leave "" if none)
  "jamTracks": [            // Array of jam track MP3s (empty [] for coming soon)
    {"url": "tracks/tune-slow.mp3", "title": "Slow (70 BPM)"},
    {"url": "tracks/tune-medium.mp3", "title": "Medium (100 BPM)"}
  ],
  "image": "gareth-harpshed.jpg",  // Card image
  "free": false            // true = free, false = members only
}
```

### 2. Add to a trail stage (if applicable)

Find the relevant trail in the `trails` array, find the right stage, and add to its `content` array:

```javascript
{
  "title": "Tune Name",
  "youtubeUrl": "https://youtu.be/XXXXXXXXXXX",
  "insight": "Longer description with playing tips, context, and what to focus on when learning this tune.",
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

Tab PDFs are generated using Python with reportlab. The existing script `create_yew_piney_tab.py` in the working directory shows the exact pattern. All PDFs follow the same visual style:

- HarpShed logo centered at top
- Title in Times-Bold 36pt, dark brown (#5C3A1E)
- Subtitle with key, position, form info in Times-Roman 11pt
- Source line in Times-Italic 10pt
- Tab notation in Courier 11pt monospace
- Thin brown horizontal rules (#C4A882)
- Copyright footer: GT Harmonica 2026
- Optional second page for History and Context

Save PDFs to `tabs/Tune_Name.pdf` (use underscores in filename).

## Genre Mappings

These are the genres used across the site. When adding tunes, use the correct genre string:

| Trail        | Default Genre            |
|-------------|--------------------------|
| blue-ridge   | Old Time                 |
| juke-joint   | Blues (or subgenre)      |
| solo-harp    | Solo                     |

Other genres in use: Blues / Jazz Crossover

## The Three Trails

Each trail is a structured learning pathway with 6 stages:

1. **The Blue Ridge Trail** (Old Time) - Appalachian fiddle tunes, string band playing
2. **The Solo Harp Trail** (Solo) - Fox chases, train pieces, self-accompaniment
3. **The Juke Joint Trail** (Early Blues) - Pre-war blues, Delta style, country blues

Each trail has these stages: Getting Started, Getting a Sound, Playing Along, Holding It Down, Carrying Tunes, Playing Your Own Way.

Trail detail pages show expandable tune cards with video embed, jam track player (speed/pitch/loop controls), metronome, and tab PDF download. Progress is tracked per tune in localStorage.

## The Tunes Page

The Tunes page is the unified library that replaced the old separate Tabs and Jam Tracks pages. It shows all entries from the `tabs` array as expandable cards. Features:

- **Filter bar** with dropdowns for Genre, Key, Position, Difficulty
- **Expandable tune cards** with: YouTube video embed, jam track player with speed/pitch/loop, metronome, tab PDF download button
- Cards show badges for genre, key, position, difficulty, and free/members status
- Filter state is preserved when navigating between pages

## Jam Track Player

Each tune card and trail tune has an integrated jam track player powered by Tone.js (loaded from CDN). The player provides independent pitch and speed control, similar to the Amazing Slow Downer app.

Features:

- Multiple MP3 support: dropdown selector when a tune has more than one track
- Speed control: 50% to 200% playback rate (preserves pitch via Tone.GrainPlayer time-stretching)
- Pitch control: semitone buttons (+/- 12 semitones) for coarse adjustment
- Cents fine-tuning: slider from -50 to +50 cents for precise pitch matching
- Speed and pitch are fully independent (changing speed keeps your pitch setting, and vice versa)
- Loop controls: start/end time in seconds, set/clear buttons
- Reset All button to return everything to defaults
- Lazy loading: audio engine only initialises when the user first interacts

To add jam tracks to a tune, populate the `jamTracks` array:
```javascript
"jamTracks": [
  {"url": "tracks/salt-river-slow.mp3", "title": "Slow (70 BPM)"},
  {"url": "tracks/salt-river-medium.mp3", "title": "Medium (100 BPM)"},
  {"url": "tracks/salt-river-fast.mp3", "title": "Fast (130 BPM)"}
]
```
If the array is empty `[]`, the player shows "Jam track coming soon".

## Metronome

Every tune card and trail tune has a built in metronome using Web Audio API (no external files). Features:

- BPM slider (30 to 300)
- Time signature: 4/4, 3/4 (Waltz), 2/4 (March), 6/8 (Jig), 8/8
- Tone options: Woodblock, Click, Cowbell, Rimshot, Soft Click
- Visual beat dots with accent on beat 1

## Progress Tracking

Trail progress uses localStorage with key `harpshed_trail_progress`. Each tune can be marked complete with a checkbox. Progress bars show completion percentage per trail and per stage.

## Key JavaScript Functions

These are the main JS functions in index.html relevant to content:

- `renderTuneFilters()` - Builds the filter dropdowns from tab data
- `renderTunes()` - Renders the tune grid based on active filters
- `renderTrails()` - Renders trail selection cards
- `showFullTrail(trailId)` - Opens a trail's dedicated course page
- `renderLessons()` - Renders the video lessons page
- `renderFundamentals()` - Renders the technique fundamentals page
- `showPage(key)` - Main navigation function
- `buildMetronomeHtml(id)` - Returns HTML string for a metronome widget
- `getMetronome(id)` - Gets or creates a metronome engine instance
- `buildJamTrackHtml(id, jamTracks)` - Returns HTML for the enhanced jam track player
- `createJamEngine(id, url)` - Creates a Tone.js audio engine (GrainPlayer + PitchShift)
- `getJamEngine(id, url)` - Gets or lazy-creates a jam engine instance
- `destroyAllJamEngines()` - Cleans up all Tone.js engines on navigation
- `getYouTubeId(url)` - Extracts video ID from YouTube URLs

## Page Map

Navigation uses hash-based routing. The `pageMap` object maps URL hashes to page container IDs:

```
lessons -> page-lessons
tunes -> page-tunes
fundamentals -> page-fundamentals
trails -> page-trails
trail-detail -> page-trail-detail
articles -> page-articles
gallery -> page-gallery
community -> page-community
zoom-lessons -> page-zoom-lessons
whats-new -> page-whats-new
contact -> page-contact
lesson-detail -> page-lesson-detail
```

## Adding Other Content Types

### New Lesson
Add to `lessons` array in content.js:
```javascript
{
  "title": "Lesson Title",
  "description": "What the lesson covers.",
  "youtubeUrl": "https://youtu.be/XXXXXXXXXXX",
  "duration": "24 min",
  "level": "Beginner",       // Beginner, Intermediate, Advanced
  "category": "old-time",    // old-time, blues, pre-war, technique
  "free": true
}
```

### New Article
Add to `articles` array in content.js:
```javascript
{
  "title": "Article Title",
  "excerpt": "Short preview text.",
  "category": "History",      // History, Player Profile, Technique
  "date": "2026-04-06",
  "readTime": "8 min",
  "content": "",              // Full article content (HTML allowed)
  "image": ""
}
```

### New Fundamental Item
Find the relevant pillar in `fundamentals` and add to its `items` array:
```javascript
{
  "title": "Topic Title",
  "description": "What this covers.",
  "level": "Start Here",     // Start Here, Building, Developing
  "youtubeUrl": ""
}
```

## Hosting and Deployment

The site is on GitHub Pages. To deploy, commit and push changes to the main branch. The CNAME file points to harpshed.com.

## PDF Generation

Tab PDFs are created with Python using the reportlab library. The pattern is in `create_yew_piney_tab.py`. Key details:

- Page size: US Letter
- Logo: harpshed-logo.png centered at top
- Color scheme: dark brown (#5C3A1E), medium brown (#8B6914), light brown (#A0784C), rule brown (#C4A882)
- Fonts: Times-Bold for titles, Times-Roman for body, Courier for tab notation
- Copyright: GT Harmonica 2026

To create a new tab PDF, copy and modify the existing script, updating the title, subtitle, tab lines, and history content.

## Notes

- The site uses CSS custom properties defined at the top of the style block in index.html
- All JS is vanilla (no jQuery, no frameworks)
- Mobile responsive with hamburger nav at smaller breakpoints
- The admin.html file is a separate admin panel
- Images should be placed in the root harpshed-site directory
- Tab PDFs go in the tabs/ subdirectory

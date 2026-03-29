/*  ═══════════════════════════════════════════════════════════════════
    HARPSHED CONTENT — Edit this file to add/remove/change content.

    HOW TO USE:
    Each section below is a simple list. To add a new item, copy an
    existing entry, paste it at the end of the list, and change the
    values. To remove, just delete the entry. Save, commit, push.

    YOUTUBE VIDEOS: Paste the full YouTube URL. The site extracts the
    embed automatically. Example: "https://www.youtube.com/watch?v=ABC123"

    IMAGES: Place image files in this folder and use the filename.
    Example: "my-photo.jpg"
    ═══════════════════════════════════════════════════════════════════ */

var SITE_CONTENT = {

  // ─── VIDEO LESSONS ──────────────────────────────────────────────
  // Each lesson needs: title, description, youtubeUrl, duration, level, category
  // Categories: "old-time", "pre-war", "blues", "technique", "theory"
  // Levels: "Beginner", "Intermediate", "Advanced"

  lessons: [
    {
      title: "Old Joe Clark — Your First Fiddle Tune",
      description: "A classic Appalachian reel and the perfect place to start. We'll get you playing the melody in first position and feeling the groove of old time music.",
      youtubeUrl: "",  // ← Paste YouTube URL here
      duration: "18 min",
      level: "Beginner",
      category: "old-time",
      free: true
    },
    {
      title: "Fox Chase — DeFord Bailey Style",
      description: "Learn the iconic Fox Chase that made DeFord Bailey a star. Train sounds, animal calls, and the showmanship that defined early American harp.",
      youtubeUrl: "",
      duration: "24 min",
      level: "Intermediate",
      category: "pre-war",
      free: true
    },
    {
      title: "Tongue Blocking Fundamentals",
      description: "The foundation of real harmonica tone. Chords, octaves, slaps — the Joe Filisko method that separates folk players from everyone else.",
      youtubeUrl: "",
      duration: "32 min",
      level: "Beginner",
      category: "technique",
      free: false
    },
    {
      title: "Country Blues Phrasing in 2nd Position",
      description: "The bends, the timing, the feel. How to phrase like the pre-war masters — Sonny Terry, DeFord Bailey, and the Delta tradition.",
      youtubeUrl: "",
      duration: "28 min",
      level: "Intermediate",
      category: "blues",
      free: false
    }
  ],

  // ─── TABLATURE ──────────────────────────────────────────────────
  // Each tab needs: title, description, key, position, difficulty,
  // downloadUrl (PDF link or Google Drive share link), image (optional photo)
  // Method: "filisko" for Filisko notation, "standard" for regular tab

  tabs: [
    {
      title: "Fox Chase — DeFord Bailey",
      description: "Full Filisko-method notation for the original Fox Chase. Every bend, every tongue block, every train whistle marked precisely.",
      key: "C",
      position: "1st",
      difficulty: "Intermediate",
      method: "filisko",
      downloadUrl: "",  // ← Paste PDF download URL here
      image: "gareth-harpshed.jpg",  // ← Use your own photos here
      free: true
    },
    {
      title: "Old Joe Clark",
      description: "Full tab for this Appalachian reel. Clean first-position melody with ornaments and groove markings.",
      key: "C",
      position: "1st",
      difficulty: "Beginner",
      method: "standard",
      downloadUrl: "",
      image: "hero-photo.jpg",
      free: true
    },
    {
      title: "Lost John — String Band Arrangement",
      description: "A driving old-time tune arranged for solo harmonica. Tongue-blocked chords and single notes weaving together.",
      key: "G",
      position: "2nd",
      difficulty: "Intermediate",
      method: "filisko",
      downloadUrl: "",
      image: "gareth-harpshed.jpg",
      free: false
    },
    {
      title: "Sittin' On Top of the World",
      description: "The Mississippi Sheiks classic, arranged for cross-harp blues. Full notation with bends and dynamics.",
      key: "A",
      position: "2nd",
      difficulty: "Intermediate",
      method: "standard",
      downloadUrl: "",
      image: "hero-photo.jpg",
      free: false
    }
  ],

  // ─── JAM TRACKS ─────────────────────────────────────────────────
  // Each jam track needs: title, description, key, genre, bpm,
  // youtubeUrl or audioUrl, tempos (array of available tempos)

  jamTracks: [
    {
      title: "Country Blues in E",
      description: "Fingerpicked acoustic guitar, upright bass, light shuffle. Perfect for working on your pre-war country blues phrasing.",
      key: "E",
      genre: "Country Blues",
      bpm: 95,
      youtubeUrl: "",  // ← Paste YouTube URL here
      tempos: ["Slow (70bpm)", "Medium (95bpm)", "Up (120bpm)"],
      free: true
    },
    {
      title: "Old Time String Band in G",
      description: "Fiddle, banjo, and guitar driving a square dance groove. Lock in with the feel of an Appalachian porch session.",
      key: "G",
      genre: "Old Time",
      bpm: 110,
      youtubeUrl: "",
      tempos: ["Slow (85bpm)", "Medium (110bpm)", "Fast (130bpm)"],
      free: true
    },
    {
      title: "Slow Delta Blues in A",
      description: "Deep, heavy, swampy. Slide guitar and bass drum. The kind of groove that makes you close your eyes and lean back.",
      key: "A",
      genre: "Delta Blues",
      bpm: 65,
      youtubeUrl: "",
      tempos: ["Crawl (50bpm)", "Slow (65bpm)", "Walk (80bpm)"],
      free: false
    },
    {
      title: "Gospel Shuffle in D",
      description: "Organ, tambourine, and handclaps. That Sunday morning feel for practicing your melodic gospel lines.",
      key: "D",
      genre: "Gospel",
      bpm: 100,
      youtubeUrl: "",
      tempos: ["Gentle (80bpm)", "Service (100bpm)", "Fire (125bpm)"],
      free: false
    }
  ],

  // ─── ARTICLES ───────────────────────────────────────────────────
  // Each article needs: title, excerpt, category, date, readTime,
  // content (full article text — supports basic HTML), image (optional)

  articles: [
    {
      title: "The Appalachian Harp Tradition",
      excerpt: "Before the blues, there was old time. The mountain roots of American harmonica playing.",
      category: "History",
      date: "2026-03-28",
      readTime: "8 min",
      content: "",  // ← Paste full article HTML here
      image: ""
    },
    {
      title: "DeFord Bailey: The Harmonica Wizard",
      excerpt: "The first star of the Grand Ole Opry and the man who made the Fox Chase famous.",
      category: "Player Profile",
      date: "2026-03-25",
      readTime: "12 min",
      content: "",
      image: ""
    },
    {
      title: "Medicine Shows and the Travelling Harp",
      excerpt: "How the harmonica became America's pocket instrument, from wagon stages to front porches.",
      category: "History",
      date: "2026-03-20",
      readTime: "10 min",
      content: "",
      image: ""
    },
    {
      title: "The Filisko Method: Why Notation Matters",
      excerpt: "Joe Filisko's approach to harmonica notation and why it changed how we teach the instrument.",
      category: "Technique",
      date: "2026-03-15",
      readTime: "6 min",
      content: "",
      image: ""
    }
  ],

  // ─── FOX CHASERS COMMUNITY POSTS ───────────────────────────────
  // Each post needs: author, date, text, type ("discussion", "recording", "question", "challenge")
  // For recordings: add youtubeUrl or audioUrl
  // Comments: an array of {author, date, text}

  communityPosts: [
    {
      author: "GT Harmonica",
      date: "2026-03-28",
      type: "challenge",
      title: "March Tune Challenge: Fox Chase",
      text: "This month's challenge — learn any version of the Fox Chase and share your recording here. DeFord Bailey, Freeman Stowers, or your own take. Let's hear it.",
      youtubeUrl: "",
      audioUrl: "",
      pinned: true,
      comments: [
        { author: "Sample Member", date: "2026-03-28", text: "Working on the DeFord version — those train sounds are killing me!" }
      ]
    },
    {
      author: "GT Harmonica",
      date: "2026-03-26",
      type: "discussion",
      title: "What harp keys do you carry to a session?",
      text: "I'm curious — when you turn up to a jam, what keys are in your bag? I always have C, A, D, G, and Bb. The Bb covers more than people think.",
      youtubeUrl: "",
      audioUrl: "",
      pinned: false,
      comments: []
    },
    {
      author: "GT Harmonica",
      date: "2026-03-22",
      type: "recording",
      title: "Working on Lost John — slow practice take",
      text: "Here's where I am with Lost John this week. Still cleaning up the tongue-blocked chords in the B section. Feedback welcome.",
      youtubeUrl: "",
      audioUrl: "",
      pinned: false,
      comments: []
    }
  ]
};

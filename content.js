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

  // ─── FUNDAMENTALS ──────────────────────────────────────────────
  // The five pillars of harmonica playing. Each pillar has lessons/exercises inside it.
  // Add items to each pillar's "items" array as you build content.

  fundamentals: [
    {
      id: "breathing",
      title: "Breathing & Tone",
      subtitle: "Where everything starts",
      description: "Diaphragm breathing, clean single notes, tone production, getting a full sound from the instrument. The difference between noise and music lives here.",
      icon: "&#127788;",
      items: [
        { title: "Finding Your Breath", description: "Diaphragm breathing for harmonica — the foundation of all good tone.", level: "Start Here", youtubeUrl: "" },
        { title: "Clean Single Notes", description: "Lip pursing vs tongue blocking — two roads to the same destination.", level: "Start Here", youtubeUrl: "" },
        { title: "Tone Production", description: "Opening your throat, shaping the cavity, getting that warm, fat sound.", level: "Building", youtubeUrl: "" },
        { title: "Breath Control & Dynamics", description: "Playing quiet, playing loud, and everything between. Making the harp whisper and roar.", level: "Developing", youtubeUrl: "" }
      ]
    },
    {
      id: "bending",
      title: "Bending & Technique",
      subtitle: "The tools of expression",
      description: "Draw bends, blow bends, tongue blocking, embouchure, slaps, pulls, and shakes. The mechanics that unlock the full range of the instrument.",
      icon: "&#127925;",
      items: [
        { title: "Your First Draw Bend", description: "Starting on hole 4 — finding the bend and learning to control it.", level: "Start Here", youtubeUrl: "" },
        { title: "All the Draw Bends", description: "Holes 1-6 — half steps, whole steps, and the deep bends on 2 and 3.", level: "Building", youtubeUrl: "" },
        { title: "Tongue Blocking Essentials", description: "The Filisko method — chords, octaves, slaps, pulls, and shimmer.", level: "Building", youtubeUrl: "" },
        { title: "Blow Bends & Overblows", description: "Opening up the top end of the harp. Holes 7-10 and beyond.", level: "Developing", youtubeUrl: "" }
      ]
    },
    {
      id: "scales",
      title: "Scales & Positions",
      subtitle: "Knowing where you are",
      description: "Major scale, blues scale, pentatonics, 1st/2nd/3rd position theory. Understanding the layout so you can find any note, in any key, without thinking.",
      icon: "&#127929;",
      items: [
        { title: "The Major Scale in 1st Position", description: "Do re mi on the harmonica. Where the notes live and how to find them.", level: "Start Here", youtubeUrl: "" },
        { title: "2nd Position & Cross Harp", description: "The blues position. Why we play a C harp in the key of G.", level: "Building", youtubeUrl: "" },
        { title: "3rd Position & Minor Keys", description: "Dorian mode — the gateway to minor key playing and darker textures.", level: "Developing", youtubeUrl: "" },
        { title: "Pentatonics & Blues Scales", description: "The five-note scales that power blues, old-time, and most American roots music.", level: "Building", youtubeUrl: "" }
      ]
    },
    {
      id: "rhythm",
      title: "Rhythm & Groove",
      subtitle: "The thing that makes people tap their feet",
      description: "Timing, shuffle feel, train rhythms, chug patterns, syncopation. You can know every note on the instrument — but if you can't groove, none of it matters.",
      icon: "&#129345;",
      items: [
        { title: "Finding the Pulse", description: "Playing in time. Metronome work. Feeling the beat before you play a note.", level: "Start Here", youtubeUrl: "" },
        { title: "The Chug Pattern", description: "Rhythmic breathing that drives old-time and blues. The engine of solo harp.", level: "Building", youtubeUrl: "" },
        { title: "Shuffle Feel", description: "Swing vs straight. The difference between sounding like a player and sounding like a machine.", level: "Building", youtubeUrl: "" },
        { title: "Train Rhythms", description: "The iconic harmonica sound — building a locomotive from breath and tongue.", level: "Developing", youtubeUrl: "" }
      ]
    },
    {
      id: "greasing",
      title: "Greasing the Greens",
      subtitle: "From single notes to controlled dirt",
      description: "The art of making clean playing sound lived-in. Vibrato, growls, trills, flutter tongue, wah effects, and all the textures that turn notes into music. This is where technique becomes feel.",
      icon: "&#128293;",
      items: [
        { title: "Hand Vibrato & Wah", description: "Using your hands to shape the sound. The cup, the open-close, finding your voice.", level: "Start Here", youtubeUrl: "" },
        { title: "Throat Vibrato", description: "Deep vibrato from the diaphragm and throat. The pulse that makes a note sing.", level: "Building", youtubeUrl: "" },
        { title: "Growls, Flutter & Dirty Tone", description: "Controlled distortion. Making the harp snarl, growl, and bite.", level: "Developing", youtubeUrl: "" },
        { title: "Ornaments & Grace Notes", description: "Hammer-ons, pull-offs, dips, scoops — the little details that make playing sound human.", level: "Developing", youtubeUrl: "" }
      ]
    }
  ],

  // ─── THE HARPSHED TRAILS ──────────────────────────────────────
  // Achievement/progression system. Each trail has stages inside it.
  // Stages are consistent across all trails.

  trails: [
    {
      id: "blue-ridge",
      title: "The Blue Ridge Trail",
      tradition: "Old-Time",
      description: "Appalachian fiddle tunes, string band rhythms, porch-session playing. The groove and drive of old-time music on harmonica.",
      color: "#4a7199",
      icon: "&#127956;",
      stages: [
        { name: "Getting Started", description: "Learning your first fiddle tune melody. Clean notes, simple rhythm, getting the shape of the tune.", tunes: "Old Joe Clark, Cripple Creek, Soldier's Joy" },
        { name: "Getting a Sound", description: "Developing tone and timing. Playing with a metronome, getting clean single notes with some character.", tunes: "Cluck Old Hen, Red Haired Boy, Shady Grove" },
        { name: "Playing Along", description: "Fitting in with other instruments. Following a fiddle, locking with a banjo, not stepping on toes.", tunes: "Angeline the Baker, Sandy Boys, June Apple" },
        { name: "Holding It Down", description: "Driving the rhythm. Chords, chugs, and breathing patterns that hold a tune together even without melody.", tunes: "Sail Away Ladies, Liberty, Cumberland Gap" },
        { name: "Carrying Tunes", description: "Leading a tune from start to finish. Ornaments, dynamics, knowing when to push and when to lay back.", tunes: "Forked Deer, Blackberry Blossom, Whiskey Before Breakfast" },
        { name: "Playing Your Own Way", description: "Making the tunes yours. Arranging, improvising, and bringing your own voice to the tradition.", tunes: "Your own arrangements and variations" }
      ]
    },
    {
      id: "solo-harp",
      title: "The Solo Harp Trail",
      tradition: "Solo Harp",
      description: "Self-contained harmonica playing — train pieces, fox chases, novelty tunes, old melodies reworked. From DeFord Bailey to Big Walter to Kim Wilson. Rhythm and melody together, one instrument doing everything.",
      color: "#a0522d",
      icon: "&#128646;",
      stages: [
        { name: "Getting Started", description: "Simple melodies played solo. Learning to carry a tune on your own without backing.", tunes: "Oh Susanna, Amazing Grace, When the Saints" },
        { name: "Getting a Sound", description: "Building tone and texture. Tongue blocking, adding chords behind melody, first steps toward self-accompaniment.", tunes: "Fox Chase (simple), Pan American Blues, basic train rhythms" },
        { name: "Playing Along", description: "Developing the rhythm-melody split. Chugging and playing melody simultaneously.", tunes: "Lost John, Cherry Pink and Apple Blossom White (simple), Bugle Call Rag" },
        { name: "Holding It Down", description: "Full self-accompaniment. Train pieces with multiple sections, novelty tunes with showmanship.", tunes: "DeFord Bailey Fox Chase, La Cucaracha (Big Walter style), freight train pieces" },
        { name: "Carrying Tunes", description: "Complete performances. Multi-section pieces with dynamics, storytelling, and crowd engagement.", tunes: "Full DeFord Bailey repertoire, Sonny Terry pieces, narrative train suites" },
        { name: "Playing Your Own Way", description: "Creating your own solo pieces. Arranging any tune for unaccompanied harmonica.", tunes: "Your own solo arrangements and original pieces" }
      ]
    },
    {
      id: "juke-joint",
      title: "The Juke Joint Trail",
      tradition: "Early Blues",
      description: "Pre-war phrasing, Delta feel, country blues, and the raw sound that came before amplification. The music that filled juke joints, front porches, and Saturday night fish fries.",
      color: "#8b3a3a",
      icon: "&#127928;",
      comingSoon: true,
      stages: [
        { name: "Getting Started", description: "Basic 2nd position playing. Finding the blues notes, learning to bend with intention.", tunes: "Simple 12-bar blues, basic riffs" },
        { name: "Getting a Sound", description: "Developing a pre-war tone. Acoustic playing, hand effects, throat vibrato.", tunes: "Easy Rider, Sitting on Top of the World" },
        { name: "Playing Along", description: "Playing with a guitar. Call and response, filling spaces, supporting a song.", tunes: "Key to the Highway, Trouble in Mind" },
        { name: "Holding It Down", description: "Phrasing like the masters. Space, timing, and the notes you don't play.", tunes: "Sonny Terry pieces, early Sonny Boy" },
        { name: "Carrying Tunes", description: "Leading a blues. Playing the head, improvising choruses, building intensity.", tunes: "Full arrangements in country blues style" },
        { name: "Playing Your Own Way", description: "Your own blues voice. Writing, arranging, and performing original material.", tunes: "Original blues compositions" }
      ]
    }
  ],

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

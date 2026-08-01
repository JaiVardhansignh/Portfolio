/* ============================================================
   SITE-DATA.JS — THE ONLY FILE YOU EVER EDIT
   ============================================================
   This file is the CMS. Every page reads from it.

   ADD A NEW GAME:
     1. Drop media into images/ and videos/
     2. Copy one project object below, edit it
     3. Commit. Done. Never touch the other files.

   RULES:
     - Filenames in here must match files in your repo
       LETTER-FOR-LETTER, extension included.
     - Any empty "" field or empty [] list = that section
       simply doesn't render. Nothing ever looks broken.
     - aud: "player" | "recruiter" | "both" controls what the
       Player / Recruiter mode toggle shows.
   ============================================================ */

const STUDIO = {
  name: "Jai Vardhan Singh",
  brand: "MrCing Dev",
  roles: "GAMEPLAY PROGRAMMER • INDIE GAME DEVELOPER • WORLD BUILDER • PROBLEM SOLVER",
  intro: "I design and build gameplay systems, optimized mechanics, and worlds players remember — solo, in Unreal Engine 5.",
  email: "cingstudio@gmail.com",
  discord: "",                       // e.g. "mrcing"
  resume: "",                        // e.g. "resume.pdf" (upload the PDF to the repo root)
  heroImage: "",                     // optional: "images/hero.jpg" — cinematic backdrop for the home hero

  socials: [
    { label: "YOUTUBE",     url: "" },
    { label: "FAB STORE",   url: "" },
    { label: "GOOGLE PLAY", url: "" },
    { label: "ITCH.IO",     url: "" },
    { label: "GITHUB",      url: "" },
  ],

  stats: [
    { value: 3,  suffix: "",  label: "Projects built" },
    { value: 60, suffix: "",  label: "Levels designed" },
    { value: 1,  suffix: "",  label: "Marketplace asset" },
    { value: 5,  suffix: "+", label: "Years in Unreal" },
    { value: 8,  suffix: "d", label: "Game jam build" },
  ],

  journey: [
    { yr: "2020",    title: "The switch flips",        text: "Discovered Unreal Engine. Started grinding gameplay systems daily, self-taught from zero." },
    { yr: "2021—23", title: "Systems years",           text: "Mechanics, prototypes, jam projects. Learned optimization, UI, and shipping discipline the hard way." },
    { yr: "2024",    title: "First revenue",           text: "Tactical Warfare Kit launches on Fab (Epic Games marketplace). It still sells today." },
    { yr: "2025—26", title: "The Ruffies",             text: "A 60-level action-puzzle adventure built solo end-to-end — now in closed testing on Android." },
    { yr: "2026",    title: "Loose End — 8 days",      text: "Cinematic FPS prototype built solo for KGeN's Road To Game Jam." },
    { yr: "NOW",     title: "Open for contracts",      text: "Blueprint gameplay systems, mechanics, optimization, mobile shipping." },
  ],

  /* ============================================================
     PROJECTS
     ============================================================ */
  projects: [

    /* ---------------- THE RUFFIES ---------------- */
    {
      id: "ruffies",
      title: "The Ruffies",
      status: "Closed Testing · Android",
      statusType: "testing",              // released | testing | prototype
      platforms: ["Android"],
      engine: "Unreal Engine 5",
      role: "Solo Developer",
      tags: ["Puzzle","Adventure","Android","UE5","Blueprint","Solo Developer","Mobile Optimized","Closed Testing"],
      cover: "images/ruffies-1.png",      // card + banner image
      short: "A fast-paced action-puzzle adventure — eleven unlikely heroes reclaim their city's stolen Crystal Gems.",

      overview: "A 60-level action-puzzle adventure set in the ruined city of Munchington, built end-to-end by one developer — gameplay systems, UI, monetization, optimization, and store submission.",

      story: { aud: "player", text: "The once-prosperous city of Munchington lost everything when an invasion stole its wealth and its rare Crystal Gems. Eleven underestimated friends decide to take it all back — with almost no resources, using each hero's unique abilities, gadgets, and teamwork." },

      gameplay: { aud: "player", points: [
        "Coin collection, puzzle solving, and enemy avoidance across 60 maze levels",
        "Character switching across eleven heroes with unique abilities",
        "Upgradeable powers: Magnet, Shield, Spring Jump, Speed Boost",
        "Character progression with a persistent save system",
      ]},

      galleries: [
        { title: "Screenshots", aud: "both", images: [
          { src: "images/ruffies-1.png", caption: "The rooftops of Munchington" },
          // { src: "images/ruffies-2.png", caption: "..." },  <- add as you upload
        ]},
        // { title: "Characters",   aud: "player", images: [] },
        // { title: "Environments", aud: "player", images: [] },
        // { title: "UI",           aud: "recruiter", images: [] },
      ],

      videos: [
        { title: "Gameplay", src: "videos/ruffies-web.mp4", aud: "both" },
      ],

      downloads: [
        { platform: "Android", version: "Closed Test Build", size: "", requirements: "Android 8+", notes: "Closed testing — request access via email.", url: "" },
      ],

      tech: { aud: "recruiter", groups: [
        { h: "Maze Generation", points: [
          "Custom Blueprint system: grid data first, geometry second — each cell tracks its four wall states",
          "Stack-based carve with backtracking generates fully connected mazes; walls spawn from grid data after generation",
          "Powers all 60 levels of the shipped design",
        ]},
        { h: "Optimization", points: [
          "Runtime system replaces thousands of individual coin actors with Hierarchical Instanced Static Meshes — major draw-call and FPS gains on low-end Android",
          "AAB size cut from 280MB to under 200MB",
          "Mobile rendering settings tuned per-device tier",
        ]},
        { h: "Monetization & Store", points: [
          "Rewarded ads, banner ads, and in-app purchases",
          "Diagnosed and fixed a Google Play ad-format policy rejection",
        ]},
        { h: "Systems", points: [
          "Persistent save system and character progression",
          "Full UI flow in UMG: menus, HUD, level select, shop",
          "Niagara effects for pickups and abilities",
        ]},
      ]},

      challenges: { aud: "recruiter", points: [
        "Generating procedural mazes solo with no formal CS background",
        "Optimizing thousands of collectible objects for low-end devices",
        "Shipping rewarded ads + IAP through Play policy review",
      ]},

      lessons: { aud: "both", points: [
        "Optimization, character modelling, rigging, animation, materials, lighting, Niagara, AI, widgets, audio — the full solo pipeline",
      ]},

      roadmap: { aud: "player", points: [
        "Public release", "More levels", "New characters", "Online leaderboards", "Additional worlds",
      ]},

      devnotes: "",
    },

    /* ---------------- TACTICAL WARFARE KIT ---------------- */
    {
      id: "twk",
      title: "Tactical Warfare Kit",
      status: "Released · Fab Marketplace",
      statusType: "released",
      platforms: ["PC","Android"],
      engine: "Unreal Engine 5",
      role: "Solo Developer",
      tags: ["FPS","Gameplay Framework","Marketplace Asset","UE5","Blueprint","AI","Released"],
      cover: "",                          // "images/twk-1.png" when you upload it
      short: "A modular tactical FPS framework inspired by Call of Duty, Battlefield, and Project IGI — sold on Epic's Fab marketplace.",

      overview: "Originally planned as a complete game, evolved into a professional marketplace asset other developers build on. Generating ongoing revenue on Fab.",

      story: { aud: "player", text: "" },

      gameplay: { aud: "both", points: [
        "Complete weapon systems: inventory, switching, knife, grenades",
        "Recoil and weapon sway tuned for tactical feel",
        "Companion AI and enemy AI with sound detection",
        "Squad communication framework",
      ]},

      galleries: [],
      videos: [],                         // { title:"Systems overview", src:"videos/twk-web.mp4", aud:"both" }

      downloads: [],

      tech: { aud: "recruiter", groups: [
        { h: "Architecture", points: [
          "Modular inventory and weapon architecture designed for other developers to extend",
          "One codebase serving two goals: playable game core and resellable framework",
          "Documented for marketplace buyers",
        ]},
        { h: "AI", points: [
          "AI Perception-driven enemies with sound detection",
          "Companion AI and squad communication",
        ]},
      ]},

      challenges: { aud: "recruiter", points: [
        "Designing one architecture that works as both a game and a product",
        "Marketplace-grade documentation and packaging",
      ]},

      lessons: { aud: "both", points: [
        "Building for other developers forces cleaner architecture than building for yourself",
      ]},

      roadmap: { aud: "both", points: [
        "Multiplayer via Epic Online Services", "Weapon customization",
      ]},

      devnotes: "",
    },

    /* ---------------- LOOSE END ---------------- */
    {
      id: "loose-end",
      title: "Loose End",
      status: "Game Jam Prototype · 8 Days",
      statusType: "prototype",
      platforms: ["PC"],
      engine: "Unreal Engine 5",
      role: "Solo Developer",
      tags: ["FPS","Action","Game Jam","UE5","Blueprint","Physics","Story Driven","Prototype"],
      cover: "",                          // "images/looseend-1.png"
      short: "A cinematic FPS built in 8 days — protect your boss's grandfather while physically tethered to him by a rope.",

      overview: "Built solo for KGeN's Road To Game Jam: an elite undercover agent must protect their boss's grandfather through four story-driven missions — connected to him by a rope the whole way.",

      story: { aud: "player", text: "You are an elite undercover agent. The mission: keep the old man alive. The complication: you're physically tied to him. Every fight, every jump, every escape happens on the rope." },

      gameplay: { aud: "player", points: [
        "Movement stack: wall running, rocket jump, sliding, grappling, dash kill",
        "Rope-tethered companion physics — fight while protecting",
        "AI combat encounters across four story-driven levels",
        "Shop and weapon unlock progression",
      ]},

      galleries: [],
      videos: [],                         // { title:"Jam build gameplay", src:"videos/looseend-web.mp4", aud:"both" }

      downloads: [
        // { platform:"Windows", version:"Jam Build 1.0", size:"", requirements:"Win 10+", notes:"Original 8-day jam build.", url:"" },
      ],

      tech: { aud: "recruiter", groups: [
        { h: "Rapid Prototyping", points: [
          "Playable, story-driven FPS in 8 days, solo — scoped ruthlessly, kept the hook",
          "Parkour movement stack layered on CharacterMovement",
        ]},
        { h: "Physics", points: [
          "Rope-constrained companion that survives player parkour without breaking movement",
          "Companion AI that follows, reacts, and stays protectable in combat",
        ]},
      ]},

      challenges: { aud: "recruiter", points: [
        "Companion physics on a rope constraint vs. a fast-moving player",
        "Jam deadline scope control",
      ]},

      lessons: { aud: "both", points: [
        "A strong constraint (the rope) generates better design than a big feature list",
      ]},

      roadmap: { aud: "player", points: [
        "Full polish pass", "Improved graphics", "Bug fixes", "Android port", "Expanded campaign",
      ]},

      devnotes: "",
    },

    // ── Add your next game by copying any object above ──
  ],
};

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
  email: "mrcingstudio@gmail.com",
  emailSubject: "Project Inquiry",
  emailBody: "Hello Jai,\n\nI saw your portfolio and would like to discuss...",
  discord: "mr_cing",
  resume: "Jai-Vardhan-Singh-Gameplay-Programmer.pdf",
  heroImage: "",                     // optional: "images/hero.jpg" — cinematic backdrop for the home hero

  socials: [
    { label: "FAB STORE", url: "https://www.fab.com/sellers/WeirdoGamingStudio" },
    { label: "ITCH.IO",   url: "https://mrching.itch.io/" },
    { label: "LINKEDIN",  url: "https://www.linkedin.com/in/jai-vardhan-signh/" },
    { label: "YOUTUBE",   url: "https://www.youtube.com/@MrCing" },
  ],

  stats: [
    { value: 7,  suffix: "",  label: "Projects built" },
    { value: 60, suffix: "",  label: "Levels designed" },
    { value: 5,  suffix: "",  label: "Marketplace assets" },
    { value: 5,  suffix: "+", label: "Years in Unreal" },
    { value: 8,  suffix: "d", label: "Game jam build" },
  ],

  journey: [
    { yr: "2020",    title: "The switch flips",        text: "Discovered Unreal Engine. Started grinding gameplay systems daily, self-taught from zero." },
    { yr: "2021—23", title: "Systems years",           text: "Mechanics, prototypes, jam projects. Learned optimization, UI, and shipping discipline the hard way." },
    { yr: "2025",    title: "First revenue",           text: "Tactical Warfare Kit launches on Fab (Epic Games marketplace) as the Modern Warfare Kit. It still sells today." },
    { yr: "2025—26", title: "The Ruffies",             text: "A 60-level action-puzzle adventure built solo end-to-end — submitted to Google Play, waiting for approval." },
    { yr: "2026",    title: "Loose End — 8 days",      text: "Cinematic FPS built solo for KGeN's Road To Game Jam — now free to play on itch.io." },
    { yr: "NOW",     title: "Open for contracts",      text: "Blueprint gameplay systems, mechanics, optimization, mobile shipping." },
  ],

  /* ============================================================
     PROJECTS
     ============================================================ */
  projects: [

    /* ---------------- 1. THE RUFFIES ---------------- */
    {
      id: "ruffies",
      title: "The Ruffies",
      status: "Waiting For Approval",
      statusType: "testing",              // released | testing | prototype
      platforms: ["Android"],
      genre: "Puzzle Adventure",
      engine: "Unreal Engine 5",
      role: "Solo Developer",
      tags: ["Puzzle","Adventure","Android","UE5","Blueprint","Solo Developer","Mobile Optimized"],
      cover: "images/ruffieswebep/ruffies-cover.jpg",
      short: "A fast-paced action-puzzle adventure — eleven unlikely heroes reclaim their city's stolen Crystal Gems.",
      links: [],                          // store button appears when the Play listing goes live

      overview: "A 60-level action-puzzle adventure set in the ruined city of Munchington, built end-to-end by one developer — gameplay systems, UI, monetization, optimization, and store submission. Currently submitted to Google Play and waiting for approval.",

      story: { aud: "player", text: "The once-prosperous city of Munchington lost everything when an invasion stole its wealth and its rare Crystal Gems. Eleven underestimated friends decide to take it all back — with almost no resources, using each hero's unique abilities, gadgets, and teamwork." },

      gameplay: { aud: "player", points: [
        "Coin collection, puzzle solving, and enemy avoidance across 60 maze levels",
        "Character switching across eleven heroes with unique abilities",
        "Upgradeable powers: Magnet, Shield, Spring Jump, Speed Boost",
        "Character progression with a persistent save system",
      ]},

      galleries: [
        { title: "Screenshots", aud: "both", images: [
          { src: "images/ruffieswebep/ruffies-1.webp",  caption: "" },
          { src: "images/ruffieswebep/ruffies-2.webp",  caption: "" },
          { src: "images/ruffieswebep/ruffies-3.webp",  caption: "" },
          { src: "images/ruffieswebep/ruffies-4.webp",  caption: "" },
          { src: "images/ruffieswebep/ruffies-5.webp",  caption: "" },
          { src: "images/ruffieswebep/ruffies-6.webp",  caption: "" },
          { src: "images/ruffieswebep/ruffies-7.webp",  caption: "" },
          { src: "images/ruffieswebep/ruffies-8.webp",  caption: "" },
          { src: "images/ruffieswebep/ruffies-9.webp",  caption: "" },
          { src: "images/ruffieswebep/ruffies-10.webp", caption: "" },
          { src: "images/ruffieswebep/ruffies-11.webp", caption: "" },
          { src: "images/ruffieswebep/ruffies-12.webp", caption: "" },
          { src: "images/ruffieswebep/ruffies-13.webp", caption: "" },
          { src: "images/ruffieswebep/ruffies-14.webp", caption: "" },
          { src: "images/ruffieswebep/ruffies-15.webp", caption: "" },
          { src: "images/ruffieswebep/ruffies-16.webp", caption: "" },
        ]},
      ],

      videos: [
        { title: "Gameplay Trailer", src: "videos/ruffies-web.mp4", aud: "both" },
      ],

      downloads: [
        { platform: "Google Play", version: "Release Build", size: "", requirements: "Android 8+", notes: "Coming Soon on Google Play — download opens the moment the store approves the release.", url: "" },
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

    /* ---------------- 2. TACTICAL WARFARE KIT ---------------- */
    {
      id: "twk",
      title: "Tactical Warfare Kit",
      status: "Released · Fab Marketplace",
      statusType: "released",
      platforms: ["Windows","Mac","Android","iOS","Linux"],
      genre: "FPS Game Template",
      engine: "Unreal Engine 5.0 – 5.5",
      role: "Solo Developer",
      tags: ["FPS","Game Template","Marketplace Asset","UE5","Blueprint","AI","Multi-Platform","Released"],
      cover: "images/Twkwebep/twk-cover.webp",
      short: "A complete multi-platform FPS template sold on Epic's Fab marketplace as the Modern Warfare Kit — 23 Blueprints, 21 Widgets, zero coding required.",
      links: [
        { label: "VIEW ON FAB",     url: "https://www.fab.com/listings/59919c33-9898-4509-9901-d5d2673f32a5" },
        { label: "DOWNLOAD ON FAB", url: "https://www.fab.com/listings/59919c33-9898-4509-9901-d5d2673f32a5" },
      ],

      overview: "An all-in-one FPS template for Unreal Engine 5.0–5.5, published on Fab as the Modern Warfare Kit. Build once, deploy to Windows, Mac, Android, iOS, and Linux. Originally planned as a complete game, it evolved into a professional marketplace product other developers build on — rated 4.7/5 and generating ongoing revenue.",

      story: { aud: "player", text: "" },

      gameplay: { aud: "both", points: [
        "Complete weapon systems: sway, recoil, attachments, fire modes, customizable buttons, sensitivity settings",
        "Smart enemy AI plus Companion AI for cooperative gameplay",
        "Health, score, money, and game-stats systems with save/load checkpoints",
        "Dynamic crosshair, bullet holes, physics-based decals, hit reactions, dynamic footstep sounds",
        "First-person and third-person skeleton support; gamepad, keyboard, mouse, and touch input",
      ]},

      galleries: [
        { title: "Systems & Screens", aud: "both", images: [
          { src: "images/Twkwebep/twk-1.webp",  caption: "" },
          { src: "images/Twkwebep/twk-2.webp",  caption: "" },
          { src: "images/Twkwebep/twk-3.webp",  caption: "" },
          { src: "images/Twkwebep/twk-4.webp",  caption: "" },
          { src: "images/Twkwebep/twk-5.webp",  caption: "" },
          { src: "images/Twkwebep/twk-6.webp",  caption: "" },
          { src: "images/Twkwebep/twk-7.webp",  caption: "" },
          { src: "images/Twkwebep/twk-8.webp",  caption: "" },
          { src: "images/Twkwebep/twk-9.webp",  caption: "" },
          { src: "images/Twkwebep/twk-10.webp", caption: "" },
          { src: "images/Twkwebep/twk-11.webp", caption: "" },
          { src: "images/Twkwebep/twk-12.webp", caption: "" },
          { src: "images/Twkwebep/twk-13.webp", caption: "" },
          { src: "images/Twkwebep/twk-14.webp", caption: "" },
          { src: "images/Twkwebep/twk-15.webp", caption: "" },
          { src: "images/Twkwebep/twk-16.webp", caption: "" },
          { src: "images/Twkwebep/twk-17.webp", caption: "" },
          { src: "images/Twkwebep/twk-18.webp", caption: "" },
          { src: "images/Twkwebep/twk-19.webp", caption: "" },
          { src: "images/Twkwebep/twk-20.webp", caption: "" },
          { src: "images/Twkwebep/twk-21.webp", caption: "" },
          { src: "images/Twkwebep/twk-22.webp", caption: "" },
          { src: "images/Twkwebep/twk-23.webp", caption: "" },
          { src: "images/Twkwebep/twk-24.webp", caption: "" },
          { src: "images/Twkwebep/twk-25.webp", caption: "" },
          { src: "images/Twkwebep/twk-26.webp", caption: "" },
        ]},
      ],

      videos: [
        { title: "Systems Overview", src: "videos/twk-web.mp4", aud: "both" },
      ],

      downloads: [
        { platform: "Fab Marketplace", version: "UE 5.0 – 5.5 · Complete Project", size: "", requirements: "Unreal Engine 5", notes: "Standard License — sold on Fab as the Modern Warfare Kit.", url: "https://www.fab.com/listings/59919c33-9898-4509-9901-d5d2673f32a5" },
      ],

      tech: { aud: "recruiter", groups: [
        { h: "Architecture", points: [
          "23 Blueprints and 21 Widgets — fully no-code customization for buyers",
          "Modular inventory and weapon architecture designed for other developers to extend",
          "One codebase serving two goals: playable game core and resellable framework",
          "Distributed as a complete project, documented for marketplace buyers",
        ]},
        { h: "AI", points: [
          "AI Perception-driven enemies with sound detection",
          "Companion AI and squad communication",
        ]},
        { h: "Multi-Platform", points: [
          "Ships to Windows, Mac, Android, iOS, and Linux from one project",
          "Touch, gamepad, and keyboard/mouse input handled natively",
        ]},
      ]},

      challenges: { aud: "recruiter", points: [
        "Designing one architecture that works as both a game and a product",
        "Marketplace-grade documentation and packaging",
        "Passing Epic's Fab review for a complete-project listing",
      ]},

      lessons: { aud: "both", points: [
        "Building for other developers forces cleaner architecture than building for yourself",
      ]},

      roadmap: { aud: "both", points: [
        "Multiplayer via Epic Online Services", "Weapon customization",
      ]},

      devnotes: "",
    },

    /* ---------------- 3. LOOSE END ---------------- */
    {
      id: "loose-end",
      title: "Loose End",
      status: "Released · itch.io",
      statusType: "released",
      platforms: ["Windows"],
      genre: "Cinematic FPS",
      engine: "Unreal Engine 5",
      role: "Solo Developer",
      tags: ["FPS","Action","Game Jam","UE5","Blueprint","Physics","Story Driven","Released"],
      cover: "images/looseendwebep/looseend-cover.png",
      short: "A cinematic FPS built in 8 days — protect your boss's grandfather while physically tethered to him by a rope.",
      links: [
        { label: "PLAY ON ITCH.IO", url: "https://mrching.itch.io/loose-end" },
      ],

      overview: "Built solo for KGeN's Road To Game Jam: you are your nation's premier undercover operative on an unusual mission — protect your boss's grandfather through four story-driven levels while bound to him by a rope. Free to play on itch.io (name your own price).",

      story: { aud: "player", text: "You are an elite undercover agent. The mission: keep the old man alive. The complication: you're physically tied to him. Every fight, every jump, every escape happens on the rope — a story of espionage, loyalty, and overwhelming odds." },

      gameplay: { aud: "player", points: [
        "Movement stack: wall running, rocket jump, sliding, grappling, dash kill",
        "Rope-tethered companion physics — fight while protecting; lift and carry grandpa when he slows you down",
        "AI combat encounters, drones, and environmental hazards across four escalating levels",
        "Shop and weapon unlock progression",
      ]},

      galleries: [
        { title: "Screenshots", aud: "both", images: [
          { src: "images/looseendwebep/looseend-1.webp", caption: "" },
          { src: "images/looseendwebep/looseend-2.webp", caption: "" },
          { src: "images/looseendwebep/looseend-3.webp", caption: "" },
          { src: "images/looseendwebep/looseend-4.webp", caption: "" },
          { src: "images/looseendwebep/looseend-5.webp", caption: "" },
          { src: "images/looseendwebep/looseend-6.webp", caption: "" },
          { src: "images/looseendwebep/looseend-7.webp", caption: "" },
          { src: "images/looseendwebep/looseend-8.webp", caption: "" },
        ]},
      ],

      videos: [
        { title: "Gameplay", src: "videos/looseend-web.mp4", aud: "both" },
      ],

      downloads: [
        { platform: "Windows", version: "Release Build", size: "933 MB", requirements: "Windows 10+", notes: "Free — name your own price on itch.io.", url: "https://mrching.itch.io/loose-end" },
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

      devnotes: "The jam build ships with a few known rough edges — including a rare clip-through near the companion — documented honestly on the itch.io page. No generative AI was used in development.",
    },

    /* ---------------- 4. XENO FANG ---------------- */
    {
      id: "xeno-fang",
      title: "Xeno Fang",
      status: "Released · Fab Marketplace",
      statusType: "released",
      platforms: ["Any Engine"],
      genre: "Game-Ready 3D Weapon",
      engine: "Engine-Agnostic (FBX / GLB / Blend)",
      role: "Solo Developer",
      tags: ["3D Asset","Sci-Fi","Weapon","Low Poly","PBR","Blender","Released"],
      cover: "images/xenofang-1.jpg",
      short: "A game-ready sci-fi combat knife — clean low-poly geometry with optimized 4K PBR textures, rated 5.0 on Fab.",
      links: [
        { label: "VIEW ON FAB", url: "https://www.fab.com/listings/3467aaaf-8ec1-44a7-b394-2f0cd4112073" },
      ],

      overview: "Xeno Fang is a game-ready sci-fi combat knife built for futuristic, alien, and cyberpunk settings. Modeled with clean low-poly geometry and packed with optimized 4K PBR textures, it drops into a stealth game, futuristic FPS, or survival space adventure in minutes. Rated 5.0/5 on Fab.",

      story: { aud: "player", text: "" },
      gameplay: { aud: "both", points: [] },

      galleries: [
        { title: "Renders", aud: "both", images: [
          { src: "images/xenofang-1.jpg", caption: "Xeno Fang — sci-fi combat knife" },
        ]},
      ],

      videos: [],

      downloads: [],

      tech: { aud: "both", groups: [
        { h: "Asset Specs", points: [
          "Low-poly, clean mesh — mobile and PC friendly",
          "4K PBR textures: Base Color, Normal, Metallic-Roughness packed",
          "Formats: FBX, GLB, and Blender source file (11.12 MB)",
          "Works in Unity, Unreal, Godot, and any modern engine",
        ]},
      ]},

      challenges: { aud: "recruiter", points: [] },
      lessons: { aud: "both", points: [] },
      roadmap: { aud: "player", points: [] },
      devnotes: "",
    },

    /* ---------------- 5. PHANTOM SLICE ---------------- */
    {
      id: "phantom-slice",
      title: "Phantom Slice",
      status: "Released · Fab Marketplace",
      statusType: "released",
      platforms: ["Any Engine"],
      genre: "Game-Ready 3D Weapon",
      engine: "Engine-Agnostic (FBX / GLB / Blend)",
      role: "Solo Developer",
      tags: ["3D Asset","Tactical","Weapon","Low Poly","PBR","Cyberpunk","Released"],
      cover: "images/phantomslice-2.jpg",
      short: "A cyber-tactical knife with a stealthy, sharp silhouette — 4K PBR textures, optimized for PC and mobile, rated 5.0 on Fab.",
      links: [
        { label: "VIEW ON FAB", url: "https://www.fab.com/listings/3c0d5eae-84b8-48de-8db3-1398435ab11f" },
      ],

      overview: "Phantom Slice is a cyber-tactical knife with a stealthy, sharp silhouette and modern edge. Built for fast-action gameplay and fully optimized for both high-end PCs and mobile platforms — ideal for FPS games, stealth missions, cyberpunk characters, survival kits, and cutscenes. Rated 5.0/5 on Fab.",

      story: { aud: "player", text: "" },
      gameplay: { aud: "both", points: [] },

      galleries: [
        { title: "Renders", aud: "both", images: [
          { src: "images/phantomslice-2.jpg", caption: "Phantom Slice — futuristic tactical knife" },
        ]},
      ],

      videos: [],

      downloads: [],

      tech: { aud: "both", groups: [
        { h: "Asset Specs", points: [
          "Optimized low-poly design — mobile and PC ready",
          "4K PBR textures: Base Color, Normal, Metallic-Roughness packed",
          "Formats: FBX, GLB, PNG textures, and Blender source file (10.33 MB)",
          "Usage: FPS games, stealth missions, cyberpunk characters, survival kits, cutscenes",
        ]},
      ]},

      challenges: { aud: "recruiter", points: [] },
      lessons: { aud: "both", points: [] },
      roadmap: { aud: "player", points: [] },
      devnotes: "",
    },

    /* ---------------- 6. SIDE ARM STEEL SECONDARY WEAPON PACK ---------------- */
    {
      id: "sidearm-steel",
      title: "Side Arm Steel — Secondary Weapon Pack",
      status: "Released · itch.io",
      statusType: "released",
      platforms: ["Windows","Mac","Android"],
      genre: "3D Weapon Pack",
      engine: "Engine-Agnostic (FBX)",
      role: "Solo Developer",
      tags: ["3D Asset","Weapon Pack","Animated","Low Poly","PBR","Released"],
      cover: "images/sspwebep/ssp-cover.png",
      short: "Three fully animated pistols and revolvers inspired by Indian metallic design — game-ready for FPS, action-adventure, and survival games.",
      links: [
        { label: "GET ON ITCH.IO", url: "https://mrching.itch.io/the-sidearm-steel-secondary-weapon-pack" },
      ],

      overview: "A secondary-weapon asset pack inspired by Indian metallic design: three fully animated pistols and revolvers with idle, fire, and reload sequences, optimized for game integration across mobile and desktop. Free on itch.io — name your own price.",

      story: { aud: "player", text: "" },
      gameplay: { aud: "both", points: [] },

      galleries: [
        { title: "Weapons", aud: "both", images: [
          { src: "images/sspwebep/ssp-1.webp", caption: "" },
          { src: "images/sspwebep/ssp-2.webp", caption: "" },
          { src: "images/sspwebep/ssp-3.webp", caption: "" },
          { src: "images/sspwebep/ssp-4.webp", caption: "" },
          { src: "images/sspwebep/ssp-5.webp", caption: "" },
          { src: "images/sspwebep/ssp-6.webp", caption: "" },
          { src: "images/sspwebep/ssp-7.webp", caption: "" },
        ]},
      ],

      videos: [],

      downloads: [
        { platform: "itch.io", version: "SSSP.zip", size: "5.6 MB", requirements: "", notes: "Free — name your own price on itch.io.", url: "https://mrching.itch.io/the-sidearm-steel-secondary-weapon-pack" },
      ],

      tech: { aud: "both", groups: [
        { h: "Asset Specs", points: [
          "3 unique weapon models: Glock (16,276 verts), Magnum (12,533), Pistol (2,640)",
          "Complete animation sets per weapon: idle, fire, and reload",
          "8 materials and instances, 1024×1024 textures, auto-generated collision",
          "Low-to-medium poly optimization for mobile and desktop platforms",
        ]},
      ]},

      challenges: { aud: "recruiter", points: [] },
      lessons: { aud: "both", points: [] },
      roadmap: { aud: "player", points: [] },
      devnotes: "",
    },

    /* ---------------- 7. UE4 FPS PROTOTYPE ---------------- */
    {
      id: "ue4-fps-prototype",
      title: "UE4 FPS Prototype",
      status: "Released · itch.io",
      statusType: "released",
      platforms: ["Windows"],
      genre: "FPS Starter Template",
      engine: "Unreal Engine 4",
      role: "Solo Developer",
      tags: ["FPS","Starter Template","UE4","Blueprint","AI","Weapon Systems","Released"],
      cover: "images/ue4prototype/ue4pro-cover.png",
      short: "Your game's jumpstart — a complete UE4 FPS foundation with weapon customization, AI, and gameplay systems, ready to build on.",
      links: [
        { label: "GET ON ITCH.IO", url: "https://mrching.itch.io/unreal-engine-4-fps-prototype-your-games-jumpstart" },
      ],

      overview: "A complete first-person shooter foundation for Unreal Engine 4, built so developers can skip the core systems and start on their actual game. This project contains weapon customization, a full FPS framework, gameplay systems, and a beginner-friendly starter template — all in customizable source.",

      story: { aud: "player", text: "" },

      gameplay: { aud: "both", points: [
        "Weapon customization and an extensive weapon system with diverse armaments",
        "Complete FPS framework: movement, weapon sway, shooting mechanics",
        "Gameplay systems: intelligent AI enemies and allies, shop system",
        "Starter template with customizable, beginner-friendly source code",
        "Built in Unreal Engine 4 with world-building tools for varied environments",
      ]},

      galleries: [
        { title: "Screenshots", aud: "both", images: [
          { src: "images/ue4prototype/ue4pro-1.webp",  caption: "" },
          { src: "images/ue4prototype/ue4pro-2.webp",  caption: "" },
          { src: "images/ue4prototype/ue4pro-3.webp",  caption: "" },
          { src: "images/ue4prototype/ue4pro-4.webp",  caption: "" },
          { src: "images/ue4prototype/ue4pro-5.webp",  caption: "" },
          { src: "images/ue4prototype/ue4pro-6.webp",  caption: "" },
          { src: "images/ue4prototype/ue4pro-7.webp",  caption: "" },
          { src: "images/ue4prototype/ue4pro-8.webp",  caption: "" },
          { src: "images/ue4prototype/ue4pro-9.webp",  caption: "" },
          { src: "images/ue4prototype/ue4pro-10.webp", caption: "" },
          { src: "images/ue4prototype/ue4pro-11.webp", caption: "" },
        ]},
      ],

      videos: [],

      downloads: [
        { platform: "Windows", version: "FPS_Prototype.zip", size: "171 MB", requirements: "Unreal Engine 4", notes: "$10 — complete project source on itch.io.", url: "https://mrching.itch.io/unreal-engine-4-fps-prototype-your-games-jumpstart" },
      ],

      tech: { aud: "recruiter", groups: [
        { h: "Framework Design", points: [
          "Core FPS loop packaged as a reusable, extensible foundation",
          "AI enemies and allies driven by behavior systems",
          "Shop and progression systems wired into the gameplay framework",
          "Performance-optimized and documented for rapid prototyping",
        ]},
      ]},

      challenges: { aud: "recruiter", points: [] },
      lessons: { aud: "both", points: [] },
      roadmap: { aud: "player", points: [] },
      devnotes: "",
    },

    // ── Add your next game by copying any object above ──
  ],
};

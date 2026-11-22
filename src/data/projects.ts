export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: "Systems" | "Software" | "Experiments" | "Electronics" | "Web" | "Research";
  status: "Active" | "Maintained" | "Prototype" | "Completed" | "Archived";
  commits: number;
  languages: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
  architectureNotes?: string[];
  createdDate: string;
  lastUpdated: string;
}

export const projects: Project[] = [
  {
    slug: "omni-dashboard",
    name: "Omni-Dashboard",
    tagline: "High-performance systems telemetry and process classifier dashboard for Linux",
    description: "Omni-Dashboard is a low-latency systems telemetry daemon and visual interface built for Linux environments. It monitors real-time CPU cycles, memory pressure, scheduler latency, process memory maps, and kernel metrics by interfacing directly with procfs and Linux system tables.",
    category: "Systems",
    status: "Active",
    commits: 60,
    languages: ["Rust", "C++", "TypeScript", "CSS"],
    techStack: ["Linux Kernel API", "eBPF / procfs", "Rust", "C++", "Astro", "Tailwind CSS"],
    githubUrl: "https://github.com/KoundinyaG-7313/Omni-Dashboard",
    featured: true,
    highlights: [
      "Microsecond-level procfs & sysfs parser avoiding userspace overhead",
      "Dynamic process classification model grouping foreground vs background workloads",
      "Native Linux event streaming engine tailored for lightweight daemon usage",
      "Custom responsive HUD interface rendering real-time performance graphs"
    ],
    architectureNotes: [
      "Separated into a lightweight collector daemon (Rust/C++) and a decoupled presentation layer.",
      "Implements ring buffers for time-series memory samples to eliminate allocation spikes.",
      "Engineered specifically for Arch Linux and Wayland/Hyprland workstation monitoring."
    ],
    createdDate: "2026-08-10",
    lastUpdated: "2026-11-22"
  },
  {
    slug: "algorithmic-music-app",
    name: "AlgorithmicMusicApp",
    tagline: "Mathematical composition suite translating raga structures and automata into sound",
    description: "A generative music composition and exploration environment that bridges mathematical geometry, microtonal Indian classical tuning (the 22 Shruti system), and algorithmic synthesis. It models melodic progressions through state machines and generative graph traversal.",
    category: "Software",
    status: "Maintained",
    commits: 9,
    languages: ["TypeScript", "JavaScript", "HTML", "CSS"],
    techStack: ["Web Audio API", "Microtonal Math", "Canvas API", "TypeScript"],
    githubUrl: "https://github.com/KoundinyaG-7313/AlgorithmicMusicApp",
    featured: true,
    highlights: [
      "Mathematical matrix of the 22 Shrutis with precise cent and frequency ratios",
      "Generative melodic random walks constrained by classical Raga Arohana/Avarohana rules",
      "Real-time audio synthesis directly in-browser using Web Audio oscillators and envelope filters",
      "Interactive harmonic spectrum and frequency waterfall visualizer"
    ],
    architectureNotes: [
      "Pure client-side Web Audio synthesis graph with custom GainNode ADSR envelopes.",
      "Algorithmic raga grammar engine implemented as directed state transitions."
    ],
    createdDate: "2026-08-11",
    lastUpdated: "2026-11-22"
  },
  {
    slug: "labcoat",
    name: "labcoat (LH1 / Retroreflector)",
    tagline: "Atmospheric 3D physics simulation and environment sandbox in Godot Engine",
    description: "A 3D simulation testbed exploring atmospheric environmental physics, retroreflector optical shaders, and procedural character kinematics. Built in Godot with Git LFS pipeline for high-fidelity asset tracking.",
    category: "Experiments",
    status: "Prototype",
    commits: 21,
    languages: ["GDScript", "GLSL", "C#"],
    techStack: ["Godot Engine 4", "GLSL Shaders", "Procedural Generation", "Git LFS"],
    githubUrl: "https://github.com/KoundinyaG-7313/labcoat",
    featured: true,
    highlights: [
      "Custom GLSL retroreflector shader replicating optical corner-cube reflections",
      "Atmospheric fog, dynamic lighting, and environmental terrain shaders",
      "Procedural inverse kinematics test rig for multi-legged entity locomotion",
      "Git LFS asset pipeline configured for binary 3D meshes and textures"
    ],
    architectureNotes: [
      "Custom compute shader experiments in Godot 4 rendering volumetric lighting.",
      "Modular scene hierarchy separating physics controllers from visual skins."
    ],
    createdDate: "2026-08-12",
    lastUpdated: "2026-11-22"
  },
  {
    slug: "3d-prints",
    name: "Parametric CAD & 3D Engineering",
    tagline: "Precision CAD repository for mechanical brackets, enclosures, and optical mounts",
    description: "Engineering repository housing original parametric STEP models, 3D printable mechanical assemblies, telescope mounting adapters, and electronic housing enclosures designed for high-tolerance additive manufacturing.",
    category: "Electronics",
    status: "Active",
    commits: 1,
    languages: ["STEP", "STL", "CAD"],
    techStack: ["FreeCAD", "OpenSCAD", "Parametric Modeling", "Additive Manufacturing"],
    githubUrl: "https://github.com/KoundinyaG-7313/3D_prints",
    featured: true,
    highlights: [
      "Universal telescope eyepiece T-ring adapter with 0.15mm tolerance snap-fit",
      "Modular workbench sensor brackets and cable management clips",
      "Vibration-damped optical mounting plates for astrophotography sensors"
    ],
    architectureNotes: [
      "All designs maintained in vendor-neutral STEP format for maximum CAD interoperability.",
      "Optimized for PETG and PLA filament thermal characteristics."
    ],
    createdDate: "2026-08-13",
    lastUpdated: "2026-11-22"
  },
  {
    slug: "koundinyag-digital-world",
    name: "Digital World (Personal Site)",
    tagline: "Immersive multi-page digital laboratory and personal universe",
    description: "The complete personal digital world and portfolio of Koundinya Gajulapalli (Max). Built with Astro 5, React, Tailwind CSS, KaTeX mathematical rendering, and procedural interactive canvases.",
    category: "Web",
    status: "Production",
    commits: 12,
    languages: ["TypeScript", "Astro", "Tailwind CSS"],
    techStack: ["Astro 5", "React 19", "Tailwind CSS", "KaTeX", "Canvas API"],
    githubUrl: "https://github.com/KoundinyaG-7313/KoundinyaG_Site",
    featured: false,
    highlights: [
      "Zero tracking, local-first architecture with static JSON fallbacks",
      "Authentic terminal manifesto and CRT aesthetic controls",
      "Full KaTeX scientific rendering for theoretical physics derivations",
      "Procedural world biome explorer with interactive canvas maps"
    ],
    createdDate: "2026-11-22",
    lastUpdated: "2026-11-23"
  }
];

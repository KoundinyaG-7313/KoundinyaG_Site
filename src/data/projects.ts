export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: "Systems" | "Software" | "Experiments" | "Hardware" | "Web";
  status: "Active" | "Prototype" | "Complete";
  commits: number;
  languages: string[];
  techStack: string[];
  githubUrl: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "omni-dashboard",
    name: "Omni-Dashboard",
    tagline: "Systems telemetry and process classifier for Linux",
    description: "A lightweight Linux systems telemetry tool and process classifier that reads procfs directly with minimal overhead, tracking CPU cycles, memory usage, and process states.",
    category: "Systems",
    status: "Active",
    commits: 60,
    languages: ["Rust", "C++", "TypeScript"],
    techStack: ["Linux procfs", "Rust", "C++", "Astro", "Tailwind CSS"],
    githubUrl: "https://github.com/KoundinyaG-7313/Omni-Dashboard",
    highlights: [
      "Low-overhead procfs parser avoiding unnecessary userspace allocations",
      "Process classification separating foreground tasks from background services",
      "Multi-branch development across Linux telemetry and classification modules (60 commits)"
    ]
  },
  {
    slug: "algorithmic-music-app",
    name: "AlgorithmicMusicApp",
    tagline: "Algorithmic music generator and microtonal scale explorer",
    description: "An algorithmic music application that models melodic structures and explores the mathematical tuning intervals of Indian classical music (the 22 Shrutis) using the Web Audio API.",
    category: "Software",
    status: "Active",
    commits: 9,
    languages: ["TypeScript", "JavaScript"],
    techStack: ["Web Audio API", "Microtonal Tuning", "TypeScript"],
    githubUrl: "https://github.com/KoundinyaG-7313/AlgorithmicMusicApp",
    highlights: [
      "Mathematical modeling of the 22 Shrutis using exact frequency ratios (3:2 fifths, 5:4 thirds)",
      "In-browser sound synthesis using Web Audio oscillators and envelope filters",
      "Algorithmic melody generation based on classical Raga progression rules"
    ]
  },
  {
    slug: "labcoat",
    name: "labcoat (LH1 / Retroreflector)",
    tagline: "3D exploration and physics simulation in Godot Engine",
    description: "A 3D simulation and experimental environment built in Godot Engine, testing custom GLSL shaders (including retroreflector optics) and procedural character kinematics.",
    category: "Experiments",
    status: "Prototype",
    commits: 21,
    languages: ["GDScript", "GLSL Shaders"],
    techStack: ["Godot Engine 4", "GLSL", "Git LFS"],
    githubUrl: "https://github.com/KoundinyaG-7313/labcoat",
    highlights: [
      "Custom retroreflector shader replicating optical corner-cube reflections",
      "Procedural kinematics and environmental physics experiments",
      "Version controlled with Git LFS for binary 3D assets"
    ]
  },
  {
    slug: "3d-prints",
    name: "3D_prints",
    tagline: "Parametric CAD models and mechanical 3D prints",
    description: "A repository of parametric CAD designs (STEP format) for mechanical brackets, enclosures, and custom telescope optical adapters built for 3D printing.",
    category: "Hardware",
    status: "Active",
    commits: 1,
    languages: ["STEP", "CAD"],
    techStack: ["FreeCAD", "OpenSCAD", "3D Printing"],
    githubUrl: "https://github.com/KoundinyaG-7313/3D_prints",
    highlights: [
      "Parametric telescope eyepiece adapters and mounting plates",
      "Toleranced mechanical fixtures and electronic housings"
    ]
  },
  {
    slug: "koundinyag-digital-world",
    name: "KoundinyaG-7313.github.io",
    tagline: "Personal website and digital portfolio",
    description: "The source code for this personal website. Built with Astro 5, React, Tailwind CSS, and KaTeX, deployed automatically to GitHub Pages.",
    category: "Web",
    status: "Active",
    commits: 13,
    languages: ["TypeScript", "Astro", "Tailwind CSS"],
    techStack: ["Astro 5", "React 19", "Tailwind CSS", "KaTeX"],
    githubUrl: "https://github.com/KoundinyaG-7313/KoundinyaG-7313.github.io",
    highlights: [
      "Zero tracking, local-first static site generation",
      "KaTeX math typesetting for theoretical physics derivations",
      "Automated GitHub Actions deployment pipeline"
    ]
  }
];

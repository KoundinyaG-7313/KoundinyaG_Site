export interface UsesCategory {
  category: string;
  description: string;
  items: {
    name: string;
    description: string;
    link?: string;
  }[];
}

export const usesData: UsesCategory[] = [
  {
    category: "Operating System & Desktop",
    description: "Minimalist, keyboard-driven Linux workstation tuned for maximum control and zero telemetry.",
    items: [
      {
        name: "Arch Linux",
        description: "Rolling release, bleeding edge, zero bloated abstractions. Pure package control and custom kernel tuning.",
        link: "https://archlinux.org",
      },
      {
        name: "Hyprland (Wayland)",
        description: "Dynamic tiling Wayland compositor with fluid animations, smooth workspaces, and bespoke keybindings.",
        link: "https://hyprland.org",
      },
      {
        name: "Kitty Terminal (Arasaka Theme)",
        description: "GPU-accelerated terminal running custom Arasaka crimson palette (#ff1e3c foreground on #080002 void), JetBrains Mono with ligatures.",
      },
      {
        name: "Shell & Prompt",
        description: "Zsh with custom minimal prompt, instant startup, and fzf fuzzy history navigation.",
      },
    ],
  },
  {
    category: "Development & Systems Tools",
    description: "Languages and tools I reach for when building software that needs to be fast, reliable, and low-level.",
    items: [
      {
        name: "Neovim & VS Code",
        description: "Modal editing with Vim motions, LSP integration (rust-analyzer, clangd, tsserver), and dark cyberpunk color tuning.",
      },
      {
        name: "Rust & C / C++",
        description: "Primary languages for systems work, kernel telemetry (Omni-Dashboard), eBPF probes, and high-performance algorithms.",
      },
      {
        name: "TypeScript & Astro",
        description: "For web environments that require static generation, zero client bloat, and fast component hydration.",
      },
      {
        name: "FreeCAD & OpenSCAD",
        description: "Parametric CAD modeling for mechanical enclosures, optical adapters, and 3D printing.",
      },
      {
        name: "Git & git-filter-repo",
        description: "Low-level version control, object database inspection, and author metadata rewriting.",
      },
    ],
  },
  {
    category: "Science & Mathematical Computing",
    description: "Tools for deriving equations, numerical simulations, and tensor algebra.",
    items: [
      {
        name: "KaTeX & LaTeX",
        description: "Typesetting mathematical physics derivations, Riemannian geometry, and relational Hamiltonian constraints.",
      },
      {
        name: "Python (NumPy, SciPy, Matplotlib)",
        description: "Numerical integration of conformal time equations, galactic rotation curves, and data plotting.",
      },
      {
        name: "Siril & Astrophotography Tools",
        description: "Open-source astronomical image processing and raw FITS frame stacking on Linux.",
      },
    ],
  },
  {
    category: "Musical Instruments & Audio",
    description: "Acoustic instruments and sound synthesis gear.",
    items: [
      {
        name: "Handcrafted Indian Classical Sarod",
        description: "Fretless teak body with goat-skin soundboard and polished stainless-steel fingerboard for seamless microtonal meend.",
      },
      {
        name: "88-Key Weighted Piano",
        description: "Full acoustic hammer action for classical counterpoint (Bach, Chopin, Rachmaninoff) and harmonic improvisation.",
      },
      {
        name: "Web Audio API Synthesis Engine",
        description: "Browser-based algorithmic sound generation implementing the 22 Shrutis and cellular automata.",
      },
    ],
  },
  {
    category: "Athletics & Cycling Gear",
    description: "Equipment for high-altitude endurance and long-distance mountain rides.",
    items: [
      {
        name: "Endurance Road & Gravel Setup",
        description: "Lightweight frameset with hydraulic disc brakes, high-pressure tubeless tires, and compact climbing gearing.",
      },
      {
        name: "Cadence & Power Telemetry",
        description: "Crankset sensors tracking cadence, wattage estimates, and sustained climbing threshold.",
      },
      {
        name: "GPS Bike Computer",
        description: "Offline topo mapping and elevation gradient tracking for solo alpine routes.",
      },
    ],
  },
];

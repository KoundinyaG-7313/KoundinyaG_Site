export interface Achievement {
  title: string;
  category: "Academic & Science" | "Athletics & Endurance" | "Systems & Code" | "Music & Arts";
  date: string;
  significance: string;
  metric?: string;
  details: string;
}

export const achievements: Achievement[] = [
  {
    title: "Theoretical Cosmology Research Monograph",
    category: "Academic & Science",
    date: "2026",
    significance: "Original theoretical framework for cyclic cosmology in a 5D bulk",
    metric: "4 Numerical Models / 1 Paper",
    details: "Formulated relational time evolution resolving cosmological singularities through ultrahyperbolic 5D geometry and Machian constraint algebra."
  },
  {
    title: "Century Mountain Pass Solo Endurance Ride",
    category: "Athletics & Endurance",
    date: "2026",
    significance: "High-gradient road cycling milestone",
    metric: "120+ km / 1,400m+ Elev",
    details: "Sustained solo century ride through steep gradient mountain passes testing physical discipline and mental resilience."
  },
  {
    title: "Low-Latency Kernel Telemetry Suite (Omni-Dashboard)",
    category: "Systems & Code",
    date: "2026",
    significance: "Production Linux systems profiler and process classifier",
    metric: "60 Git Commits / Sub-millisecond latency",
    details: "Engineered zero-overhead procfs parsing and telemetry streaming in Rust and C++ for Arch Linux workstations."
  },
  {
    title: "Indian Classical Sarod & 22-Shruti Acoustic Mastery",
    category: "Music & Arts",
    date: "2024 - 2026",
    significance: "Microtonal classical string tradition & mathematical synthesis",
    metric: "Years of Practice / Raga Repertoire",
    details: "Deep exploration of Indian classical music, microtonal meend sliding dynamics on fretless steel, and Western classical piano counterpoint."
  },
  {
    title: "Arch Linux Workstation & Wayland Rice Optimization",
    category: "Systems & Code",
    date: "2025 - 2026",
    significance: "Bespoke minimal workstation environment",
    metric: "Near-zero idle footprint",
    details: "Built an uncompromising daily driver using Arch Linux, Hyprland Wayland compositor, and custom Kitty terminal with Arasaka color tuning."
  }
];

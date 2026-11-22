export interface TimelineEvent {
  date: string;
  year: string;
  category: "Research" | "Systems" | "Music" | "Athletics" | "Engineering";
  title: string;
  description: string;
  badge: string;
  link?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    date: "October 2026",
    year: "2026",
    category: "Research",
    title: "Completed Theoretical Cosmology Manuscript",
    description: "Finalized full monograph 'Relational Time and Cyclic Cosmology in a Five-Dimensional Ultrahyperbolic Bulk' featuring analytical bounce equations and numerical rotation curve comparisons.",
    badge: "Milestone",
    link: "/research/relational-time-5d-bulk"
  },
  {
    date: "November 2026",
    year: "2026",
    category: "Systems",
    title: "Omni-Dashboard Linux Telemetry & Process Classifier",
    description: "Expanded Omni-Dashboard into an ultra-low latency system profiler for Arch Linux with zero-overhead memory ring buffers and real-time process classification across 60 git commits.",
    badge: "Engineering",
    link: "/projects/omni-dashboard"
  },
  {
    date: "September 2026",
    year: "2026",
    category: "Athletics",
    title: "Solo 120km Mountain Endurance Ride",
    description: "Completed solo high-altitude century cycling climb through mountain passes with sustained 30+ km/h pace, tracking power output and cadence telemetry.",
    badge: "Endurance",
    link: "/timeline"
  },
  {
    date: "August 2026",
    year: "2026",
    category: "Music",
    title: "Algorithmic Music & 22-Shruti Mathematical Matrix",
    description: "Engineered AlgorithmicMusicApp, mapping the microtonal geometry of Indian classical Sarod ragas onto browser Web Audio oscillators and cellular automata.",
    badge: "Creative Tech",
    link: "/projects/algorithmic-music-app"
  },
  {
    date: "August 2026",
    year: "2026",
    category: "Engineering",
    title: "Telescope Optical Mount CAD & 3D Engineering",
    description: "Modeled and manufactured custom snap-fit T-ring adapters and vibration-damped optical mounting plates in FreeCAD for deep-sky astrophotography.",
    badge: "Hardware",
    link: "/projects/3d-prints"
  },
  {
    date: "July 2026",
    year: "2026",
    category: "Systems",
    title: "Godot 3D Simulation Engine & Shaders ('labcoat')",
    description: "Developed custom GLSL retroreflector corner-cube shaders, volumetric fog, and procedural kinematic locomotion in Godot Engine 4 with Git LFS pipeline.",
    badge: "Graphics / 3D",
    link: "/projects/labcoat"
  },
  {
    date: "Early 2026",
    year: "2026",
    category: "Research",
    title: "Self-Study of General Relativity & Differential Geometry",
    description: "Completed comprehensive self-directed derivations of Riemann curvature tensors, Bianchi identities, Einstein field equations, and canonical ADM Hamiltonian formalism.",
    badge: "Physics",
    link: "/about"
  }
];

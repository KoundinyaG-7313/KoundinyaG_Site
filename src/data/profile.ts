export interface Profile {
  name: string;
  alias: string;
  tagline: string;
  bio: string;
  manifestoPrompt: string;
  manifestoLines: string[];
  currentFocus: string[];
  contact: {
    email: string;
    github: string;
    githubUser: string;
    orcidId: string;
    gpgKeyFingerprint: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
}

export const profile: Profile = {
  name: "Koundinya Gajulapalli",
  alias: "Max",
  tagline: "Student, Researcher, Systems Builder & Aspiring Theoretical Physicist",
  bio: "Exploring fundamental theoretical physics, cosmology, quantum gravity, systems engineering, Arch Linux, classical music (Sarod & Piano), and high-cadence endurance cycling. I build things from scratch, question unnecessary abstractions, and examine whether mathematical formulations genuinely reflect physical reality.",
  manifestoPrompt: "root@anti-code:~# ./manifesto.sh",
  manifestoLines: [
    "Governments seek control. Corporations seek influence. Trust neither blindly.",
    "We rely on layers of abstractions we don't understand.",
    "It's time to build from the ground up.",
    "Welcome to the Digital World of Koundinya Gajulapalli.",
    "Status: ONLINE",
  ],
  currentFocus: [
    "Relational dynamics and Hamiltonian constraints in 5D ultrahyperbolic cosmological bulks",
    "Kernel-level Linux telemetry and process classification (Omni-Dashboard)",
    "Microtonal tuning geometry and algorithmic raga generation for Sarod",
    "Long-distance endurance road cycling and high-altitude climbs",
  ],
  contact: {
    email: "koundinyag@protonmail.com",
    github: "https://github.com/KoundinyaG-7313",
    githubUser: "KoundinyaG-7313",
    orcidId: "0009-0002-8419-7313",
    gpgKeyFingerprint: "4A9D 8E22 710F B341 9C02  88FB 3D90 E67A 2108 55AC",
  },
  skills: [
    {
      category: "Theoretical & Mathematical Physics",
      items: ["General Relativity", "Quantum Field Theory", "Cosmology", "Differential Geometry", "Tensor Calculus", "Relational Dynamics (Barbour-Bertotti)", "Higher-Dimensional Spacetimes"],
    },
    {
      category: "Systems & Low-Level Engineering",
      items: ["Linux Kernel (eBPF, procfs, sysfs)", "C / C++", "Rust", "Arch Linux", "Hyprland / Wayland internals", "Git internals & filter-repo"],
    },
    {
      category: "Software & Web Architecture",
      items: ["TypeScript", "React", "Astro", "Tailwind CSS", "Web Audio API", "WebGL / Canvas Shaders", "Godot / GDScript"],
    },
    {
      category: "Hardware & Physical Systems",
      items: ["Parametric CAD (FreeCAD / STEP)", "Additive Manufacturing (3D Printing)", "Telescope Optics & Astrophotography", "Embedded Microcontrollers"],
    },
    {
      category: "Acoustics & Classical Music",
      items: ["Sarod (Indian Classical)", "22 Shruti Microtonal Tuning", "Piano (Classical Repertoire)", "Algorithmic Composition Theory"],
    },
  ],
};

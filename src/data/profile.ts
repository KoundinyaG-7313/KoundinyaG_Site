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
  };
  skills: {
    category: string;
    items: string[];
  }[];
}

export const profile: Profile = {
  name: "Koundinya Gajulapalli",
  alias: "Max",
  tagline: "Student, Aspiring Theoretical Physicist & Systems Programmer",
  bio: "Interested in theoretical physics, cosmology, quantum gravity, low-level systems engineering, Arch Linux, classical music (Sarod and Piano), and endurance cycling. I build things from scratch and investigate the foundational structure of reality.",
  manifestoPrompt: "root@anti-code:~# ./manifesto.sh",
  manifestoLines: [
    "Governments seek control. Corporations seek influence. Trust neither blindly.",
    "We rely on layers of abstractions we don't understand.",
    "It's time to build from the ground up.",
    "Welcome to the Digital World of Koundinya Gajulapalli.",
    "Status: ONLINE",
  ],
  currentFocus: [
    "Theoretical cosmology and relational time in a 5D ultrahyperbolic bulk",
    "Systems programming and Linux telemetry in Rust and C++ (Omni-Dashboard)",
    "Sarod classical training and microtonal music synthesis",
    "Long-distance endurance cycling",
  ],
  contact: {
    email: "koundinyag@outlook.com",
    github: "https://github.com/KoundinyaG-7313",
    githubUser: "KoundinyaG-7313",
    orcidId: "0009-0002-8419-7313",
  },
  skills: [
    {
      category: "Theoretical Physics & Mathematics",
      items: ["General Relativity", "Quantum Field Theory", "Cosmology", "Differential Geometry", "Tensor Calculus", "Relational Dynamics (Barbour-Bertotti)"],
    },
    {
      category: "Systems & Software Engineering",
      items: ["Rust", "C / C++", "Linux Kernel (procfs, sysfs)", "Arch Linux", "Hyprland", "TypeScript", "Python"],
    },
    {
      category: "Hardware & Making",
      items: ["Parametric CAD (FreeCAD / STEP)", "3D Printing", "Telescope Optics & Astrophotography"],
    },
    {
      category: "Music & Acoustics",
      items: ["Sarod (Indian Classical)", "Piano (Classical)", "22 Shrutis & Microtonality", "Algorithmic Composition"],
    },
  ],
};

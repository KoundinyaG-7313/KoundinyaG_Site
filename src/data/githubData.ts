export interface GitHubRepo {
  name: string;
  fullName: string;
  description: string;
  htmlUrl: string;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  createdAt: string;
  topics: string[];
  defaultBranch: string;
  commitsEstimate: number;
  isFeatured: boolean;
}

export interface GitHubStats {
  user: string;
  profileUrl: string;
  totalRepos: number;
  totalCommits: number;
  languages: { name: string; percentage: number; color: string }[];
  repos: GitHubRepo[];
}

export const staticGitHubData: GitHubStats = {
  user: "KoundinyaG-7313",
  profileUrl: "https://github.com/KoundinyaG-7313",
  totalRepos: 5,
  totalCommits: 93,
  languages: [
    { name: "Rust", percentage: 32, color: "#dea584" },
    { name: "TypeScript", percentage: 28, color: "#3178c6" },
    { name: "C++", percentage: 18, color: "#f34b7d" },
    { name: "GDScript", percentage: 14, color: "#355570" },
    { name: "CAD / STEP", percentage: 8, color: "#8b5cf6" },
  ],
  repos: [
    {
      name: "Omni-Dashboard",
      fullName: "KoundinyaG-7313/Omni-Dashboard",
      description: "High-performance systems telemetry and process classifier dashboard built for Linux environments.",
      htmlUrl: "https://github.com/KoundinyaG-7313/Omni-Dashboard",
      language: "Rust",
      stars: 1,
      forks: 0,
      updatedAt: "2026-11-22T21:40:00Z",
      createdAt: "2026-08-10T14:20:00Z",
      topics: ["linux", "telemetry", "rust", "cpp", "ebpf", "monitoring"],
      defaultBranch: "main",
      commitsEstimate: 60,
      isFeatured: true,
    },
    {
      name: "AlgorithmicMusicApp",
      fullName: "KoundinyaG-7313/AlgorithmicMusicApp",
      description: "Algorithmic music composition suite translating microtonal raga structures and cellular automata into sound.",
      htmlUrl: "https://github.com/KoundinyaG-7313/AlgorithmicMusicApp",
      language: "TypeScript",
      stars: 1,
      forks: 0,
      updatedAt: "2026-11-22T21:15:00Z",
      createdAt: "2026-08-11T09:12:00Z",
      topics: ["audio", "microtonal", "raga", "web-audio-api", "algorithmic-composition"],
      defaultBranch: "main",
      commitsEstimate: 9,
      isFeatured: true,
    },
    {
      name: "labcoat",
      fullName: "KoundinyaG-7313/labcoat",
      description: "Atmospheric 3D physics sandbox, retroreflector shaders, and kinematic exploration in Godot Engine with Git LFS.",
      htmlUrl: "https://github.com/KoundinyaG-7313/labcoat",
      language: "GDScript",
      stars: 1,
      forks: 0,
      updatedAt: "2026-11-22T22:10:00Z",
      createdAt: "2026-08-12T16:05:00Z",
      topics: ["godot", "shaders", "physics", "simulation", "game-dev"],
      defaultBranch: "main",
      commitsEstimate: 21,
      isFeatured: true,
    },
    {
      name: "3D_prints",
      fullName: "KoundinyaG-7313/3D_prints",
      description: "Parametric CAD STEP models, mechanical brackets, and precision 3D printable designs.",
      htmlUrl: "https://github.com/KoundinyaG-7313/3D_prints",
      language: "CAD",
      stars: 0,
      forks: 0,
      updatedAt: "2026-11-22T22:45:00Z",
      createdAt: "2026-08-13T18:30:00Z",
      topics: ["cad", "step", "3d-printing", "freecad", "hardware"],
      defaultBranch: "main",
      commitsEstimate: 1,
      isFeatured: true,
    },
    {
      name: "KoundinyaG_Site",
      fullName: "KoundinyaG-7313/KoundinyaG_Site",
      description: "Max's personal digital world, theoretical physics laboratory, systems documentation, and portfolio.",
      htmlUrl: "https://github.com/KoundinyaG-7313/KoundinyaG_Site",
      language: "TypeScript",
      stars: 1,
      forks: 0,
      updatedAt: "2026-11-23T00:50:00Z",
      createdAt: "2026-11-22T23:50:00Z",
      topics: ["astro", "react", "tailwind", "katex", "portfolio", "cyberpunk"],
      defaultBranch: "main",
      commitsEstimate: 12,
      isFeatured: false,
    },
  ],
};

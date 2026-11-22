export interface Biome {
  id: string;
  name: string;
  coordinates: string;
  elevation: string;
  themeColor: string;
  accentHex: string;
  lore: string;
  features: string[];
  targetRoute: string;
  iconName: string;
  radarPos: { x: number; y: number }; // Percentage on map (0-100)
}

export const worldBiomes: Biome[] = [
  {
    id: "research-lab",
    name: "The Relational Laboratory",
    coordinates: "X: 1024, Y: 64, Z: -512",
    elevation: "64m // Sea Level Datum",
    themeColor: "emerald",
    accentHex: "#10b981",
    lore: "A subterranean physics research complex dedicated to solving the Problem of Time in quantum gravity. Chalkboards covered in differential forms, 5D metric tensors with ultrahyperbolic signatures, and Wheeler-DeWitt boundary constraints.",
    features: [
      "5D Ultrahyperbolic Bulk Simulator",
      "Machian Relational Clock Synthesizer",
      "Cosmic Cyclic Bounce Trajectory Visualizer",
      "Conformal Horizon Boundary Analyzer"
    ],
    targetRoute: "/research",
    iconName: "Atom",
    radarPos: { x: 68, y: 32 }
  },
  {
    id: "celestial-observatory",
    name: "The Celestial Observatory",
    coordinates: "X: 2048, Y: 128, Z: 1024",
    elevation: "2450m // High Alpine Ridge",
    themeColor: "cyan",
    accentHex: "#00e5ff",
    lore: "Perched above atmospheric light pollution where the cosmic horizon unfolds. Equatorial mount telescopes track deep-sky nebulae and stellar spectra while computers record long-exposure photon arrivals.",
    features: [
      "Custom Refractor & Optical T-Ring Astrophotography Rig",
      "Stellar Coordinates & Ephemeris Telemetry",
      "Dark Sky Photon Integration Logs",
      "Galaxy Rotation Curve Spectrograms"
    ],
    targetRoute: "/astronomy",
    iconName: "Telescope",
    radarPos: { x: 82, y: 75 }
  },
  {
    id: "systems-workshop",
    name: "The Systems Workshop",
    coordinates: "X: -512, Y: 32, Z: 256",
    elevation: "32m // Ground Workshop",
    themeColor: "arasaka",
    accentHex: "#ff1e3c",
    lore: "Low-level systems engineering bunker illuminated by Arasaka red CRT phosphor. Running pure Arch Linux, custom Hyprland configurations, kernel profilers, and bare-metal C/Rust code with zero bloat.",
    features: [
      "Arch Linux Minimal Void Kernel Hub",
      "Omni-Dashboard eBPF & procfs Telemetry Node",
      "Kitty Terminal (Arasaka Crimson #ff1e3c on #080002)",
      "Zero-Overhead Memory Ring Buffer Lab"
    ],
    targetRoute: "/projects/omni-dashboard",
    iconName: "Terminal",
    radarPos: { x: 28, y: 45 }
  },
  {
    id: "soundstage",
    name: "The Acoustic Soundstage",
    coordinates: "X: -1024, Y: 48, Z: -768",
    elevation: "48m // Resonance Chamber",
    themeColor: "amber",
    accentHex: "#f59e0b",
    lore: "An acoustic sanctuary exploring the intersection of centuries-old Indian classical Sarod traditions and mathematical algorithmic music. The 22 Shrutis meet geometric state machines and real-time audio oscillators.",
    features: [
      "Handcrafted Teak & Steel Sarod with Microtonal Meend",
      "Weighted 88-Key Classical Piano (Bach, Rachmaninoff)",
      "AlgorithmicMusicApp Generative Automaton Engine",
      "FFT Frequency Waterfall & Harmonic Spectrum"
    ],
    targetRoute: "/music",
    iconName: "Music",
    radarPos: { x: 22, y: 18 }
  },
  {
    id: "mountain-pass",
    name: "The Mountain Pass",
    coordinates: "X: 512, Y: 256, Z: 1536",
    elevation: "1850m // High Gradient Pass",
    themeColor: "green",
    accentHex: "#00ff88",
    lore: "Windswept high-gradient road climbs testing pure physical endurance and mental fortitude. Endurance road cycling, century rides, cadence telemetry, and relentless uphill momentum.",
    features: [
      "Long-Distance Endurance Cycling Telemetry",
      "High-Altitude Grade & Heart Rate Dynamics",
      "Triathlon Conditioning Test Course",
      "Solitary Mountain Ridge Traverse"
    ],
    targetRoute: "/timeline",
    iconName: "Bike",
    radarPos: { x: 55, y: 85 }
  },
  {
    id: "the-abyss",
    name: "The Subnautic Abyss",
    coordinates: "X: 0, Y: -128, Z: -2048",
    elevation: "-450m // Deep Oceanic Trench",
    themeColor: "purple",
    accentHex: "#8b5cf6",
    lore: "Inspired by Subnautica's abyssal depths and deep-dive cybersecurity research. Exploring unexplored voids, protocol fuzzing, binary reverse engineering, and finding truth beneath layers of darkness.",
    features: [
      "Low-Level Protocol Reverse-Engineering Deck",
      "Subnautica Deep Void Acoustic Sounder",
      "Nightmare-Eclipse Vulnerability Sandbox",
      "Uncharted Depths Environmental Sonar"
    ],
    targetRoute: "/projects/labcoat",
    iconName: "Compass",
    radarPos: { x: 42, y: 12 }
  }
];

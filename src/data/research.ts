export interface ResearchFigure {
  title: string;
  path: string;
  desc: string;
}

export interface KeyEquation {
  label: string;
  latex: string;
  description: string;
}

export interface ResearchProject {
  slug: string;
  title: string;
  authors: string[];
  date: string;
  status: string;
  category: string;
  topics: string[];
  abstract: string;
  detailedAnalysis: string[];
  pdfPath?: string;
  figures: ResearchFigure[];
  keyEquations: KeyEquation[];
  relatedProjects: string[];
  orcidUrl: string;
}

export const researchProjects: ResearchProject[] = [
  {
    slug: "relational-time-5d-bulk",
    title: "Relational Time and Cyclic Cosmology in a Five-Dimensional Ultrahyperbolic Bulk",
    authors: ["Koundinya Gajulapalli (Max)"],
    date: "October 2026",
    status: "Independent Research Monograph / Preprint",
    category: "Theoretical Physics & Cosmology",
    topics: [
      "Theoretical Physics",
      "Cosmology",
      "Relational Dynamics",
      "Higher-Dimensional Spacetime",
      "Cyclic Cosmology",
      "Barbour-Bertotti Framework"
    ],
    abstract: `We investigate the emergence of cosmic evolution and cyclic behavior within a five-dimensional spacetime possessing an ultrahyperbolic signature (2,3) or (3,2). By formulating relational dynamics through a Jacobi-Barbour-Bertotti framework, time arises not as an absolute background parameter, but as an emergent relational measure of field configurations. We investigate the Friedmann-like equations on a 4-dimensional induced boundary or brane, analyze the role of signature transitions on horizon singularities, and explore cosmic bounce scenarios without exotic matter.`,
    detailedAnalysis: [
      "The Problem of Time in canonical relativity stems from the diffeomorphism invariance of general relativity, manifesting as the vanishing Hamiltonian constraint H ≈ 0. Here, time is treated relationally via Machian principles, where duration is derived from intrinsic spatial metric transitions rather than an unobservable cosmic parameter.",
      "By embedding 4-dimensional spacetime as an induced hypersurface in a 5-dimensional ultrahyperbolic manifold, signature-altering phase boundaries naturally resolve classical cosmological curvature singularities. The transition surfaces allow a nonsingular cyclic bounce where the scale factor a(τ) smoothly transitions through a minimum without requiring violations of the null energy condition.",
      "Numerical simulations of the bulk field equations indicate conformal coupling that produces flat rotational curves on galactic scales without requiring ad-hoc dark matter tuning.",
      "The relational wavefunction obeys a modified Wheeler-DeWitt equation where state dependency across conformal boundaries selects initial conditions stable against cyclic entropy accumulation."
    ],
    pdfPath: "/research/Relational_Time_and_Cyclic_Cosmology_in_a_Five_Dimensional_Ultrahyperbolic_Bulk.pdf",
    figures: [
      {
        title: "Galactic Rotation Curve Correlation",
        path: "/research/GalaxyCurve.png",
        desc: "Comparison of 5D geometric bulk effects with observed baryonic rotation velocities, demonstrating flat rotation profiles as a natural consequence of induced bulk curvature."
      },
      {
        title: "Conformal Time Evolution in 5D Bulk",
        path: "/research/ConformalTime.png",
        desc: "Numerical integration of conformal time across signature transition surfaces showing smooth passage through the cyclic bounce regime."
      },
      {
        title: "Dark Matter & Curvature Coupling",
        path: "/research/DarkMatterCurve.png",
        desc: "Effective halo density profile derived from bulk projection vs empirical Navarro-Frenk-White (NFW) profiles."
      },
      {
        title: "Quantum State Dependency Profile",
        path: "/research/StateDependancy.png",
        desc: "Wavefunction amplitude distribution across successive cosmological cycles under Hamiltonian constraint H ≈ 0."
      }
    ],
    keyEquations: [
      {
        label: "5D Ultrahyperbolic Metric",
        latex: "ds^2 = - d\\tau^2 - d\\chi^2 + a^2(\\tau, \\chi) \\left[ \\frac{dr^2}{1 - k r^2} + r^2 (d\\theta^2 + \\sin^2\\theta d\\phi^2) \\right]",
        description: "Bulk metric with two timelike directions, inducing relational phase dynamics on the 4D hypersurface."
      },
      {
        label: "Relational Hamiltonian Constraint (Machian Time)",
        latex: "\\mathcal{H} = \\int d^3x \\left( \\frac{1}{2\\sqrt{q}} \\pi^{ij} \\mathcal{G}_{ijkl} \\pi^{kl} - \\sqrt{q} \\left( {}^{(3)}R - 2\\Lambda \\right) \\right) \\approx 0",
        description: "Zero-Hamiltonian constraint in canonical relativity from which ephemeris time is distilled via relational configuration-space metrics."
      },
      {
        label: "Induced Brane Scale Factor Evolution",
        latex: "H^2 = \\left( \\frac{\\dot{a}}{a} \\right)^2 = \\frac{8\\pi G}{3}\\rho \\left( 1 + \\frac{\\rho}{2\\lambda} \\right) + \\frac{\\mathcal{C}}{a^4} + \\frac{\\Lambda_4}{3}",
        description: "Modified Friedmann equation incorporating high-energy quadratic density corrections and dark radiation term from bulk geometry."
      }
    ],
    relatedProjects: ["omni-dashboard", "algorithmic-music-app"],
    orcidUrl: "https://orcid.org/0009-0002-8419-7313"
  }
];

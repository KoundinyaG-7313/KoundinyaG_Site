export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  date: string;
  status: "Pre-print" | "Under Review" | "Published" | "Working Paper";
  doi?: string;
  externalUrl?: string;
  pdfUrl?: string;
  abstract: string;
  topics: string[];
  orcid: string;
}

export const publications: Publication[] = [
  {
    id: "pub-relational-5d-2026",
    title: "Relational Time and Cyclic Cosmology in a Five-Dimensional Ultrahyperbolic Bulk",
    authors: ["Koundinya Gajulapalli (Max)"],
    venue: "Preprint Manuscript / Independent Research Monograph",
    date: "October 2026",
    status: "Pre-print",
    doi: "10.48550/arXiv.2610.XXXXX",
    externalUrl: "/research/relational-time-5d-bulk",
    pdfUrl: "/research/Relational_Time_and_Cyclic_Cosmology_in_a_Five_Dimensional_Ultrahyperbolic_Bulk.pdf",
    abstract: "We investigate the emergence of cosmic evolution and cyclic behavior within a five-dimensional spacetime possessing an ultrahyperbolic signature (2,3) or (3,2). By formulating relational dynamics through a Jacobi-Barbour-Bertotti framework, time arises not as an absolute background parameter, but as an emergent relational measure of field configurations.",
    topics: ["Theoretical Physics", "Cosmology", "Quantum Gravity", "Ultrahyperbolic Signatures"],
    orcid: "0009-0002-8419-7313",
  },
  {
    id: "pub-chrono-geometric-2026",
    title: "Signature Invariance and Chrono-Geometric Phase Transitions Across Degenerate Hypersurfaces",
    authors: ["Koundinya Gajulapalli (Max)"],
    venue: "Mathematical Physics Working Notes & Calculations",
    date: "August 2026",
    status: "Working Paper",
    externalUrl: "/research/chrono-geometric-phase-transitions",
    abstract: "Analytical computations of curvature invariants and test-particle geodesic completeness across signature-reversing manifold boundaries where metric determinants pass through zero.",
    topics: ["Mathematical Physics", "Differential Geometry", "Singularity Resolution"],
    orcid: "0009-0002-8419-7313",
  }
];

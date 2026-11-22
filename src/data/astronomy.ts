export interface ObservationLog {
  id: string;
  target: string;
  catalog: string;
  constellation: string;
  type: string;
  optics: string;
  exposure: string;
  iso: string;
  notes: string;
  coordinates: { ra: string; dec: string };
}

export const observationLogs: ObservationLog[] = [
  {
    id: "obs-m42",
    target: "Great Orion Nebula",
    catalog: "Messier 42 / NGC 1976",
    constellation: "Orion",
    type: "Diffuse Emission & Reflection Nebula",
    optics: "Reflector Telescope + Custom 3D T-Ring Mount",
    exposure: "30s x 40 subs (Stacked)",
    iso: "1600",
    notes: "Trapezium cluster clearly resolved at center; ionized hydrogen-alpha filaments extending into interstellar molecular clouds.",
    coordinates: { ra: "05h 35m 17s", dec: "-05° 23′ 28″" }
  },
  {
    id: "obs-m31",
    target: "Andromeda Galaxy",
    catalog: "Messier 31 / NGC 224",
    constellation: "Andromeda",
    type: "Barred Spiral Galaxy",
    optics: "Prime Focus Telescope Assembly",
    exposure: "45s x 30 subs",
    iso: "800",
    notes: "Bright galactic nucleus with distinct dust lanes; satellite companion galaxies M32 and M110 visible within the field of view.",
    coordinates: { ra: "00h 42m 44s", dec: "+41° 16′ 09″" }
  },
  {
    id: "obs-saturn",
    target: "Saturn & Ring System",
    catalog: "Solar System",
    constellation: "Aquarius",
    type: "Gas Giant Planet",
    optics: "High-Magnification Barlow + Planetary Sensor",
    exposure: "1/50s video frame stacking",
    iso: "400",
    notes: "Cassini Division distinctly separated; subtle atmospheric banding on northern hemisphere; Titan visible as point source.",
    coordinates: { ra: "22h 15m 02s", dec: "-12° 40′ 15″" }
  },
  {
    id: "obs-pleiades",
    target: "The Pleiades (Seven Sisters)",
    catalog: "Messier 45",
    constellation: "Taurus",
    type: "Open Star Cluster with Reflection Nebulosity",
    optics: "Wide-field Optical Configuration",
    exposure: "60s x 25 subs",
    iso: "1600",
    notes: "Luminous blue reflection nebulosity illuminated by young hot B-type stars (Maia, Alcyone, Merope).",
    coordinates: { ra: "03h 47m 24s", dec: "+24° 07′ 00″" }
  }
];

export const telescopeGear = [
  {
    category: "Optical Assembly",
    item: "Primary Reflector Telescope",
    specs: "Parabolic primary mirror, high light-gathering power for deep-sky objects."
  },
  {
    category: "Mount & Tracking",
    item: "Equatorial Mount with Precision Drive",
    specs: "Polar-aligned tracking counteracting Earth's sidereal rotation."
  },
  {
    category: "Imaging & Adapters",
    item: "Custom Parametric 3D-Printed T-Ring Adapter",
    specs: "Zero-backlash snap-fit ring linking camera sensor directly to telescope drawtube."
  },
  {
    category: "Sensors & Processing",
    item: "High-ISO Sensor & Linux Stacking Pipeline",
    specs: "Raw FITS image calibration (dark, flat, bias frames) via Siril and custom Python scripts."
  }
];

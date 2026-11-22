---
title: "Microtonal Geometry: Translating Indian Classical Sarod into Code"
date: "2026-09-12"
description: "Exploring the mathematical precision of the 22 Shrutis and building real-time Web Audio synthesis for microtonal meend."
tags: ["Music Theory", "Sarod", "Algorithmic Composition", "Web Audio API", "Mathematics"]
category: "Music & Mathematics"
featured: false
draft: false
relatedProjects: ["algorithmic-music-app"]
---

Western music theory largely standardized on 12-Tone Equal Temperament (12-TET), dividing the octave into twelve logarithmically equidistant semitones ($2^{n/12}$). While this facilitates polyphony and keyboard modulation, it sacrifices the pure harmonic consonance of small integer frequency ratios (just intonation) and eliminates microtonality.

In the Indian classical tradition—particularly on the **Sarod**, a fretless instrument with a polished steel fingerboard and goat-skin soundboard—pitch is continuous. The canonical tradition formalizes this into the **22 Shrutis**: microtonal intervals derived from cycles of pure fifths ($3:2$) and pure thirds ($5:4$).

### The Mathematical Ratios of the Shrutis

Each Shruti corresponds to an exact rational multiple of the tonic frequency $S$ (Sa). For example:

- **Shuddha Rishabh ($R_1$)**: Small tone = $10/9$ (approx 182.4 cents)
- **Tivra Rishabh ($R_2$)**: Major tone = $9/8$ (approx 203.9 cents)
- **Komal Gandhar ($g_1$)**: Minor third = $32/27$ (approx 294.1 cents)
- **Shuddha Gandhar ($G_2$)**: Harmonic major third = $5/4$ (approx 386.3 cents)

The difference between a major tone ($9/8$) and a minor tone ($10/9$) is the famous **Syntonic Comma**:

$$\Delta = \frac{9/8}{10/9} = \frac{81}{80} \approx 21.5 \text{ cents}$$

On the Sarod, navigating this 21.5-cent nuance through a continuous slide (*meend*) gives the music its emotional and meditative resonance.

### Translating to the Web Audio API

In building **AlgorithmicMusicApp**, I wanted to model these pure mathematical ratios directly in code:

```typescript
// Define exact frequency multipliers for the 22-Shruti system
export const SHRUTI_RATIOS: Record<string, number> = {
  Sa: 1.0,
  re_komal_1: 256 / 243, // Pyth. minor second
  re_komal_2: 16 / 15,   // Just minor second
  Re_shuddha_1: 10 / 9,  // Minor whole tone
  Re_shuddha_2: 9 / 8,   // Major whole tone
  ga_komal_1: 32 / 27,   // Pyth. minor third
  ga_komal_2: 6 / 5,     // Just minor third
  Ga_shuddha_1: 5 / 4,   // Just major third
  Ga_shuddha_2: 81 / 64, // Pyth. ditone
  Ma_shuddha_1: 4 / 3,   // Perfect fourth
  Ma_tivra_1: 45 / 32,   // Augmented fourth
  Pa: 3 / 2,             // Perfect fifth
};
```

By connecting an oscillator node to a gain node and modulating `frequency.exponentialRampToValueAtTime`, the engine replicates the continuous sliding meend of the Sarod while obeying the algorithmic grammar of classical Ragas (such as Darbari Kanada or Yaman).

Mathematics and music are not separate domains; they are two languages describing the same harmonic patterns of the universe.

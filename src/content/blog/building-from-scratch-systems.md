---
title: "Building from Scratch: The Fallacy of Modern Software Abstraction"
date: "2026-11-04"
description: "Why modern software stacks are suffocating under bloated abstractions and why systems programmers must understand bare metal."
tags: ["Linux", "Systems Programming", "Rust", "Arch Linux", "Philosophy"]
category: "Systems & Linux"
featured: false
draft: false
relatedProjects: ["omni-dashboard"]
---

Modern software engineering has become an exercise in gluing together multi-gigabyte layers of opaque dependencies. A modern web browser consumes gigabytes of RAM to render plain text; a simple message app wraps an entire Chromium instance; backend servers spin up nested containers just to execute basic arithmetic.

As the terminal manifesto states:

> *We rely on layers of abstractions we don't understand.*  
> *It's time to build from the ground up.*

### The Abstraction Debt

Abstractions are meant to hide complexity, but when abstractions leak—or when their overhead compounds across ten nested layers—they stop being tools of leverage and become black boxes of fragility.

When an engineer relies entirely on frameworks without knowing what the Linux kernel or the CPU cache is doing, performance problems are solved by throwing more cloud compute at the problem rather than fixing the algorithmic defect.

### Insights from Building Omni-Dashboard

When building **Omni-Dashboard**, my goal was to monitor Linux system telemetry with near-zero userspace overhead:

```rust
// Reading procfs directly via memory-mapped buffers
// avoiding allocations in the critical telemetry loop
pub struct CpuMetrics {
    pub user_cycles: u64,
    pub system_cycles: u64,
    pub idle_cycles: u64,
    pub iowait_cycles: u64,
}
```

By parsing `/proc/stat` and `/proc/[pid]/statm` directly into ring buffers with fixed memory bounds, CPU utilization dropped from the typical 5–10% seen in Electron-based monitoring tools down to less than **0.05%**. 

### The Arch Linux Discipline

Running Arch Linux with a minimal Wayland window manager like Hyprland isn't just an aesthetic choice (though custom Kitty palettes with Arasaka red make terminal work deeply satisfying). It is an educational discipline. 

When your audio system (PipeWire), graphics protocol (Wayland), and package manager (pacman) are explicitly configured by hand, you cease to be a passive consumer of software and become a systems architect who understands the entire machine stack.

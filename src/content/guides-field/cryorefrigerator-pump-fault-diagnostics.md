---
title: "Cryorefrigerator Pump Leak Hunting & Fault Diagnostics Protocol"
description: "Diagnostic decision trees for isolating cold head displacer leaks, Aeroquip poppet failures, and thermal transient anomalies on high-vacuum closed-loop cryopumps."
pubDate: 2022-03-22
environment: "Leybold COOLVAC / COOLPAK Helium Compression Systems"
difficulty: "Advanced"
featured: true
tags: ["Cryopumps", "High Vacuum", "Helium Compressors", "Fault Isolation", "Preventative Maintenance"]
keyTakeaways:
  - "Differentiate between internal thermal load overload and vacuum boundary leakage using second-stage cool-down transient slope analysis."
  - "If static helium pressure increase on compressor increases mass-4 background directly, internal displacer seal failure is confirmed."
  - "Always perform regeneration bake-out before conducting fine helium mass spectrometry to eliminate trapped hydrogen/neon outgassing."
---

## Document Metadata & Equipment Scope

- **Document ID**: `TS-CRYO-2022-012` (Rev 2.0)
- **Author**: Kadeem Manning (Tier II Facility Technician)
- **Target Systems**: Leybold COOLVAC 1500 / COOLPOWER Cold Heads & COOLPAK 2000i / 5000i Compressors
- **Official PDF**: [Download Official Diagnostic Protocol PDF](/docs/SOP%20-%20CRYOREFRIGERATOR%20PUMP%20LEAK%20HUNTING,%20VACUUM%20INTEGRITY%20&%20FAULT%20DIAGNOSTICS.pdf)

---

## 1. Diagnostic Decision Tree for Pressure & Thermal Stalls

```
[Cryopump Stalls Above 15K on 2nd Stage]
                 │
      ┌──────────┴──────────┐
      ▼                     ▼
[Cold Head Power Stalled] [Helium Mass 4 Signal High]
      │                     │
      ├─ Adsorber Saturated ├─ Check Aeroquip Coupling O-rings
      └─ Low He Gas Charge  └─ Displacer Dynamic Seal Leak
```

---

## 2. Root Cause & Fault Isolation Matrix

| Symptom / Observed Fault | Probable Root Cause | Diagnostic Verification Check | Corrective Action & Protocol |
| :--- | :--- | :--- | :--- |
| **High Helium Background (Mass 4 Signal)** | 1. Cold head displacer seal leak.<br/>2. Aeroquip coupling poppet leaking into vessel. | Mass 4 signal increases directly when static helium pressure is raised from 16 to 18 bar(g) on COOLPAK compressor. | Overhaul cold head displacer drive and dynamic seals. Replace leaking Aeroquip flexline couplings. |
| **Second Stage Fails to Reach $< 15\text{ K}$** | 1. Charcoal array saturated with hydrogen/neon.<br/>2. High radiative thermal load. | Perform pressure rise rate test ($dP/dt$) with gate valve closed. If rate $> 1.0 \times 10^{-3}\text{ mbar}\cdot\text{L/s}$, thermal load is excessive. | Execute full thermal regeneration with dry $N_2$ purge at $65^\circ\text{C}$ for 4 hours. |
| **Relief Valve Continuous Venting** | 1. Particulate debris on Viton seal seat.<br/>2. Weakened ISO 4126 relief spring. | Inspect exhaust line with acoustic ultrasonic probe and leak detector sniffer. | Vent cryopump safely to ambient atmospheric pressure; clean valve seat and replace spring assembly. |

---

## 3. Standard Cool-Down & Regeneration Verification

```
Temperature (Kelvin)
  300K ──┐
         │ (1st Stage Cool-down: ~65K in 45 min)
   80K ──┼───────────┐
         │           │ (2nd Stage Cool-down: <12K in 75 min)
   15K ──┼───────────┼───────────┐ (Operational Base: ~10K)
    0K ──┴───────────┴───────────┴────── Time (Minutes)
```

1. **Roughing Cross-Over**: Never open cryopump gate valve to chamber until roughing pressure is $< 5.0 \times 10^{-2}\text{ mbar}$ to avoid oil backstreaming and rapid cryo-array icing.
2. **Purge Regeneration**: Backfill with ultra-high purity dry Nitrogen ($99.999\%$) heated to $65^\circ\text{C}$ to release condensed water, hydrocarbons, and cryogenic gases.

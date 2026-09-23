---
title: "Helium Mass Spectrometry Leak Testing & High-Vacuum Integrity SOP"
description: "Quantitative leak detection protocols using systematic local spraying, hood enclosures, and sniffer probe methodologies per DIN EN 1779 and ISO 20485."
pubDate: 2021-12-28
environment: "High-Vacuum Processing Bays & Field Manifolds"
difficulty: "Advanced"
featured: true
tags: ["Helium Leak Detection", "DIN EN 1779", "ISO 20485", "Vacuum Systems", "Metrology"]
keyTakeaways:
  - "Calibrate against NIST-traceable calibrated helium leak reference before and after every testing sequence."
  - "Enforce bottom-to-top spraying sequence to prevent buoyant helium drift from causing false positive leak indications."
  - "Quantitative acceptance thresholds: High-vacuum processing bay < 1.0 × 10⁻⁷ mbar·L/s; Foreline piping < 1.0 × 10⁻⁵ mbar·L/s."
---

## Document Metadata & Authorization

- **Document ID**: `SOP-LEAK-2021-18` (Rev 2.0)
- **Lead Specialist**: Kadeem Manning (Tier II Vacuum Technician)
- **Compliance Standards**: DIN EN 1779 / ISO 20485 / ALCOA+ Data Integrity
- **Target Leak Detectors**: Leybold PHOENIX, Agilent HLD, Pfeiffer ASM 340
- **Official PDF**: [Download Official SOP PDF](/docs/SOP%20-%20MASS%20SPECTROMETER%20HELIUM%20LEAK%20TESTING%20&%20INTEGRITY%20-%20Systematic%20Local%20Spraying,%20Hood%20Enclosures,%20and%20Quantitative%20Sniffer%20Protocols%20per%20DIN%20EN%201779%20-%20ISO%2020485.pdf)

---

## 1. Operational Scope & Quantitative Thresholds

This standard operating procedure defines the quantitative helium leak detection protocols for high-vacuum chambers, cryogenic vessels, and gas delivery manifolds.

| Vacuum Boundary Section | Testing Method | Maximum Allowable Leak Rate ($Q_L$) | Required Corrective Action on Failure |
| :--- | :--- | :--- | :--- |
| **UHV Chamber Flanges (CF/ConFlat)** | Method A1 (Local Spray) | $< 1.0 \times 10^{-9}\text{ mbar}\cdot\text{L/s}$ | Replace OFHC copper gasket; re-torque in star pattern |
| **HV Processing Bay (KF Viton)** | Method A1 (Local Spray) | $< 1.0 \times 10^{-7}\text{ mbar}\cdot\text{L/s}$ | Clean Viton O-ring, inspect for micro-cracks, re-grease LVO 100 |
| **Foreline / Roughing Piping** | Method A1 Spray / B1 Sniff | $< 1.0 \times 10^{-5}\text{ mbar}\cdot\text{L/s}$ | Retighten KF clamps, inspect centered ring assembly |
| **Process Gas Manifolds** | Method B1 Sniffer (1.2 bar He) | $< 1.0 \times 10^{-6}\text{ mbar}\cdot\text{L/s}$ | Re-torque VCR fitting; replace silver-plated nickel gasket |

---

## 2. Systematic Local Spray Protocol (Method A1)

```
[Helium Probe Nozzle] ──(Bottom-to-Top Sequence)──> [Flange Joint Under Test]
                                                            │ (Helium Infiltration)
                                                            ▼
[Vacuum Chamber] ──> [Turbomolecular Pump] ──> [Mass Spectrometer Detector (Mass 4)]
```

### Step-by-Step Execution:
1. **Calibrated Baseline Verification**:
   - Connect internal/external calibrated leak reference standard ($Q_{ref} \approx 2.4 \times 10^{-7}\text{ mbar}\cdot\text{L/s}$).
   - Allow 15-minute filament stabilization time.
   - Record baseline zero signal: verify background noise $< 5.0 \times 10^{-10}\text{ mbar}\cdot\text{L/s}$.
2. **Sequential Spraying Sequence**:
   - Always commence spraying at the **lowest physical elevation** of the vacuum vessel and work upwards.
   - *Rationale*: Helium is lighter than air ($M = 4\text{ g/mol}$) and rises. Spraying top flanges first creates ambient clouds that trigger false leaks on lower joints.
3. **Dwell Time Calculation**:
   - Maintain probe dwell time equal to $3 \times \tau$ (system time constant) where:
   $$\tau = \frac{V_{chamber}}{S_{eff}}$$
   - Typical dwell: **5 to 8 seconds per flange circumference segment**.

---

## 3. Hood Enclosure Total Integral Test (Method A2)

When individual joint spraying passes but base pressure stalls above $1.0 \times 10^{-6}\text{ mbar}$:
1. Enclose entire vacuum vessel in an impermeable polyethylene shroud.
2. Evacuate shroud and backfill with $100\%$ helium gas at $1.0\text{ atm}$.
3. Record peak signal deflection over 10 minutes. If signal rises $> 5.0 \times 10^{-8}\text{ mbar}\cdot\text{L/s}$, a distributed through-wall porosity or virtual weld leak is present.

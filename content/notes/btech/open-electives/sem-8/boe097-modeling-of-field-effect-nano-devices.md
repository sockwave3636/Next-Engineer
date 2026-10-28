---
program: btech
branches: [all]
semester: 8
code: BOE097
name: Modeling of Field-Effect Nano Devices
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-IV, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf
units:
  - MOSFET Scaling, Short-Channel Effects and New Device Structures
  - MOS Electrostatics, Current-Voltage Models and Multigate MOSFETs
  - Nanowire, Carbon Nanotube, Graphene and Single-Electron Transistors
  - Radiation Effects in SOI MOSFETs
  - Digital, Analog, Mixed-Signal and RF Circuits with Nano MOSFETs
---

# BOE097 Modeling of Field-Effect Nano Devices: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: physics in plain words, device structures and comparison tables.
3. **Solved examples**: the numericals examiners set (scaling, oxide capacitance, EOT, natural length, subthreshold swing, drain current, quantum conductance, CNT chirality and diameter, charging energy, tunneling, critical charge, intrinsic gain, leakage).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (scaling rules, short-channel effects, channel and source/drain engineering, high-k, SOI, multigate, quantum effects) and Unit 2 (MOS electrostatics, I-V models, double-gate MOSFET, tunneling, mobility).
- **Afternoon (3 hours):** Unit 3 (nanowire MOSFETs, CNT and graphene band structure, CNTFETs, ballistic transport, single-electron transistors).
- **Evening (2 hours):** Unit 4 (TID and single-event effects in SOI) and Unit 5 (digital leakage, SRAM, analog gain and noise, RF), then the "Last-hour checklist".
- **In the exam:** draw the cross-sections of bulk, SOI, double-gate and FinFET devices, a band diagram, and the CNT rolling-up picture. Learn the five or six formulas in the checklist; each gives an easy numerical.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: MOSFET Scaling, Short-Channel Effects and New Device Structures

### 2-mark definitions

- **Scaling:** reducing MOSFET dimensions (and voltages and doping in a planned way) to increase density, speed and lower power per device.
- **Constant-field (Dennard) scaling:** all dimensions and voltages are reduced by the same factor κ and doping is increased by κ, so the electric field stays constant.
- **Short-channel effects (SCEs):** undesirable effects that appear when the channel length becomes comparable to the depletion widths of the source and drain junctions.
- **Threshold voltage roll-off:** the decrease of threshold voltage as channel length decreases, because the source and drain deplete part of the channel charge.
- **DIBL (drain-induced barrier lowering):** a high drain voltage lowers the source-channel potential barrier, so the threshold voltage drops and off-current rises.
- **Punch-through:** the source and drain depletion regions merge, so current flows under the gate without gate control.
- **Hot carriers:** carriers that gain high energy in the strong field near the drain and can be injected into the gate oxide, degrading the device.
- **High-k dielectric:** a gate insulator with higher permittivity than SiO₂ (HfO₂, k ≈ 25), allowing a physically thicker layer with the same capacitance, so less tunneling leakage.
- **SOI (silicon on insulator):** a thin silicon layer on a buried oxide (BOX), which isolates the device from the substrate.
- **Multigate MOSFET:** a MOSFET in which the gate controls the channel from two or more sides (double-gate, FinFET, tri-gate, gate-all-around).

### Core concepts

**Why scale:** Moore's law (transistor count doubling about every two years) is driven by scaling; smaller devices give higher density, lower capacitance and faster switching, and less energy per operation.

**Scaling rules (factor κ > 1)**

| Parameter | Constant-field scaling | Constant-voltage scaling |
|---|---|---|
| Dimensions (L, W, tox, xj) | 1/κ | 1/κ |
| Voltages (VDD, VT) | 1/κ | 1 |
| Doping | κ | κ² |
| Electric field | 1 | κ |
| Current per device | 1/κ | κ |
| Gate capacitance | 1/κ | 1/κ |
| Delay (CV/I) | 1/κ | 1/κ² |
| Power per device (VI) | 1/κ² | κ |
| Power density | 1 | κ³ |

In practice VDD and VT stopped scaling (around 2005, the end of Dennard scaling), because VT cannot fall below about 0.2–0.3 V without large leakage (subthreshold swing is limited to about 60 mV/decade at room temperature). Power density then rose, which led to multicore designs and new device structures.

**Short-channel effects:** VT roll-off, DIBL, punch-through, velocity saturation (carrier velocity saturates at about 10⁷ cm/s in high fields), mobility degradation (strong vertical field), hot-carrier injection, gate oxide tunneling leakage, and channel-length modulation.

**Channel engineering:**
- **Retrograde well:** low surface doping and higher doping below, which keeps mobility high and prevents punch-through.
- **Halo (pocket) implants:** extra doping near source and drain ends to reduce VT roll-off.
- **Strained silicon:** tensile strain for NMOS (SiN capping layer) and compressive strain for PMOS (SiGe in source/drain) to increase mobility.

**Source/drain engineering:**
- **LDD (lightly doped drain):** reduces peak field and hot carriers.
- **Shallow junctions** reduce SCEs.
- **Raised source/drain** and silicides reduce series resistance.

**High-k and metal gate:** SiO₂ below about 1.2 nm leaks too much by direct tunneling. HfO₂-based high-k (introduced commercially in 2007 at 45 nm) with a metal gate (removes poly depletion and Fermi-level pinning) keeps capacitance high with a thicker film. **EOT (equivalent oxide thickness)** = t_highk × (3.9 / k_highk).

**SOI MOSFETs:**
- **PD-SOI (partially depleted):** thick silicon film; shows floating-body (kink) effects.
- **FD-SOI (fully depleted):** silicon film thinner than the depletion width; better gate control, low junction capacitance, no latch-up, and back-gate biasing with ultra-thin BOX.
- **Drawbacks:** self-heating (the BOX conducts heat poorly), higher wafer cost.

**Multigate devices:**
- **Double-gate (DG):** gates on both sides of a thin body.
- **FinFET:** a vertical silicon fin wrapped by the gate on three sides; Intel began production at 22 nm in 2011 (tri-gate).
- **Gate-all-around (GAA) nanowire or nanosheet:** the gate surrounds the channel; used from about 3 nm and 2 nm nodes (Samsung 3 nm in 2022, TSMC N2).
- **Benefit:** better electrostatic control means a smaller natural length, so a shorter gate length is possible with less DIBL and a near-ideal subthreshold swing.

**Quantum effects:**
- **Quantization in the inversion layer:** the electron charge centroid moves away from the interface, adding about 0.3–0.5 nm to the effective oxide thickness and raising VT.
- **Direct tunneling** through thin oxides.
- **Source-to-drain tunneling** below about 5 nm gate length.
- **Volume inversion** in thin double-gate bodies.
- **Subband splitting** in thin bodies and nanowires.

### Solved examples

**Example 1 (constant-field scaling).** A MOSFET with L = 90 nm, VDD = 1.2 V and delay 10 ps is scaled with κ = 1.5. Find the new values.
- L = 90 / 1.5 = **60 nm**; VDD = 1.2 / 1.5 = **0.8 V**; delay = 10 / 1.5 = **6.7 ps**.
- Power per device falls by κ² = 2.25; power density stays the same.

**Example 2 (oxide capacitance).** Find Cox for SiO₂ of thickness 1 nm (εox = 3.9 ε₀).
- Cox = 3.9 × 8.854 × 10⁻¹² / 1 × 10⁻⁹ = **3.45 × 10⁻² F/m²** = 3.45 µF/cm².

**Example 3 (EOT).** A gate stack has 4 nm of HfO₂ (k = 25). Find the EOT.
- EOT = 4 × 3.9 / 25 = **0.62 nm**. The physical film is more than six times thicker than the equivalent SiO₂, so tunneling leakage is far lower.

### Key points to remember

- Constant-field scaling: dimensions and voltages /κ, doping ×κ, delay /κ, power /κ², power density constant.
- SCEs: VT roll-off, DIBL, punch-through, velocity saturation, hot carriers, tunneling.
- Fixes: halo, retrograde well, LDD, shallow junctions, strain, high-k metal gate, SOI, multigate.
- EOT = t × 3.9 / k.
- FinFET (22 nm, 2011) → GAA nanosheet (3 nm and below).

### Important questions

1. Explain constant-field and constant-voltage scaling with a table. Why did Dennard scaling end?
2. What are short-channel effects? Explain VT roll-off, DIBL, punch-through and hot carriers.
3. Explain channel engineering and source/drain engineering techniques used in nano MOSFETs.
4. Why are high-k dielectrics used? Define EOT and solve a numerical.
5. Compare bulk, SOI and multigate MOSFETs with cross-sections. What quantum effects appear in nano MOSFETs?

---

## Unit 2: MOS Electrostatics, Current-Voltage Models and Multigate MOSFETs

### 2-mark definitions

- **Flat-band voltage (VFB):** the gate voltage at which the bands in the semiconductor are flat (no charge in the substrate): VFB = φms − Qox/Cox.
- **Threshold voltage (VT):** the gate voltage at which strong inversion begins (surface potential = 2φF): VT = VFB + 2φF + √(2 εs q NA 2φF) / Cox.
- **Surface potential (ψs):** the potential at the semiconductor surface relative to the bulk.
- **Depletion width:** the depth of the region near the surface with no free carriers; maximum Wdmax = √(2 εs 2φF / (q NA)).
- **Subthreshold swing (SS):** the gate voltage needed to change drain current by ten times below threshold: SS = (kT/q) ln10 (1 + Cd/Cox), with an ideal limit of about 60 mV/decade at 300 K.
- **Natural (characteristic) length (λ):** a length that measures how far drain field penetrates into the channel; the gate length should be about 5 to 10 times λ to avoid SCEs.
- **Direct tunneling:** electrons pass straight through a thin oxide barrier by quantum mechanics.
- **Fowler-Nordheim tunneling:** tunneling through a triangular barrier at high oxide fields.
- **Mobility:** carrier drift velocity per unit field (µ = v/E).
- **Effective mobility:** the average mobility of inversion-layer carriers, which falls as the vertical field rises (surface roughness and phonon scattering).

### Core concepts

**1D MOS electrostatics:** solving Poisson's equation d²ψ/dx² = −ρ/εs gives the charge, field and potential vertically into the substrate. Regions: accumulation, depletion and inversion. Gate voltage is split between the oxide drop and the surface potential: VG = VFB + ψs + Qs/Cox.

**2D electrostatics:** in short channels, source and drain fields bend the potential along the channel. Solving the 2D Poisson equation (or Young's quasi-2D model) gives an exponential decay of drain influence along the channel with natural length λ:
- Bulk: λ ≈ √(εsi tox Wd / εox).
- Single-gate SOI: λ = √(εsi tsi tox / εox).
- Double-gate: λ = √(εsi tsi tox / (2 εox)).
- General form (Colinge): λ = √(εsi tsi tox / (n εox)), with n = 1 for single gate, 2 for double gate, about 3 for triple gate and about 4 for gate-all-around, so a GAA device has roughly half the single-gate λ.
- The more gates, the smaller λ, so the device scales further.

**I-V models:**
- **Long-channel square law:**
  - Linear region: ID = µ Cox (W/L) [(VGS − VT) VDS − VDS²/2].
  - Saturation: ID = (µ Cox W / 2L)(VGS − VT)² (1 + λ VDS).
- **Velocity saturation (short channel):** IDsat ≈ W Cox vsat (VGS − VT), which is linear, not quadratic, in overdrive. The alpha-power law (Sakurai) is ID ∝ (VGS − VT)^α with α between 1 and 2.
- **Subthreshold:** ID = I₀ exp(q(VGS − VT)/(n kT)) (1 − exp(−qVDS/kT)), where n = 1 + Cd/Cox.
- **Compact models:** BSIM (bulk, BSIM-CMG for multigate, BSIM-IMG for FD-SOI), PSP, EKV, and surface-potential-based models.

**Limits of CMOS scaling:**
- Leakage (subthreshold and gate tunneling).
- The 60 mV/decade SS limit.
- Variability: random dopant fluctuation, line-edge roughness, work-function variation.
- Power density and heat.
- Interconnect delay.
- Lithography cost.
- Atomic limits (a few silicon atoms across the channel).

**Double-gate MOSFET:**
- Two gates control a thin, usually undoped body.
- **Benefits:** reduced SCEs (small λ), near-ideal SS, no random dopant fluctuation (VT set by gate work function), volume inversion at very thin bodies (carriers in the middle of the film, which gives higher mobility), and higher current per footprint.
- **Symmetric DG:** both gates are tied together with the same work function.
- **Asymmetric DG:** different work functions or independent gates (enables VT tuning).

**Tunneling:**
- The WKB approximation gives transmission T ≈ exp(−2κ d), with κ = √(2 m* φB) / ħ.
- Gate leakage increases about ten times for every 0.2 nm reduction in SiO₂ thickness near 1–2 nm.
- **Band-to-band tunneling (GIDL)** near the drain adds off-state leakage.
- **Tunnel FETs (TFETs)** use band-to-band tunneling deliberately to get SS below 60 mV/decade.

**Mobility:**
- **Scattering mechanisms:** phonon (lattice vibrations, rises with temperature), Coulomb (ionized impurities and interface charges), and surface roughness (high vertical field).
- **Matthiessen's rule:** 1/µ = 1/µ_ph + 1/µ_C + 1/µ_sr.
- **Ways to improve mobility:** strain, (110) orientation for holes, undoped channels in multigate devices, and SiGe or Ge PMOS channels.

### Solved examples

**Example 4 (natural length).** A symmetric double-gate MOSFET has tsi = 10 nm and tox = 1 nm (εsi = 11.7, εox = 3.9). Find λ and the minimum gate length for good SCE control (Lg ≥ 5λ).
- λ = √(11.7 × 10 × 1 / (2 × 3.9)) = √15 = **3.87 nm**.
- Lg ≥ 5 × 3.87 ≈ **19 nm**.

**Example 5 (subthreshold swing).** Find SS at 300 K for Cd/Cox = 0.3, and the off-current increase if VT is lowered by 100 mV.
- (kT/q) ln10 = 0.02585 × 2.303 = 59.5 mV, so SS = 59.5 × 1.3 = **77.4 mV/decade**.
- Off-current rises by 10^(100/77.4) ≈ 10^1.29 ≈ **19.6 times**.

**Example 6 (square-law current).** An NMOS has µ = 300 cm²/V·s, tox = 2 nm, W/L = 10 and VGS − VT = 0.5 V. Find IDsat (ignore λ).
- Cox = 3.9 × 8.854 × 10⁻¹² / 2 × 10⁻⁹ = 1.73 × 10⁻² F/m²; µ = 0.03 m²/V·s.
- ID = 0.5 × 0.03 × 1.73 × 10⁻² × 10 × 0.25 = **0.65 mA**.

**Example 7 (tunneling).** Electrons (m* = 0.5 m₀) tunnel through an oxide barrier of 3.1 eV. Compare transmission for 1.0 nm and 1.5 nm.
- κ = √(2 × 0.5 × 9.11 × 10⁻³¹ × 3.1 × 1.6 × 10⁻¹⁹) / 1.055 × 10⁻³⁴ = 6.38 × 10⁹ m⁻¹.
- T(1.0 nm) = exp(−2 × 6.38) = **2.9 × 10⁻⁶**; T(1.5 nm) = exp(−19.1) = **4.9 × 10⁻⁹**.
- A 0.5 nm thinner oxide leaks about **590 times** more, which is why high-k dielectrics were needed.

### Key points to remember

- VT = VFB + 2φF + √(2εs q NA 2φF)/Cox; SS = 60 (1 + Cd/Cox) mV/dec at 300 K.
- λ (double-gate) = √(εsi tsi tox / 2εox); keep Lg ≥ 5–10 λ.
- Square law vs velocity-saturated current; subthreshold exponential; BSIM compact models.
- DG advantages: SCE control, ideal SS, undoped body, volume inversion.
- WKB: T ≈ exp(−2κd). Mobility: phonon, Coulomb, surface roughness; Matthiessen's rule.

### Important questions

1. Explain 1D MOS electrostatics and derive the threshold voltage expression.
2. Explain 2D electrostatics and the natural length concept. Why do multigate devices scale better? Solve a numerical.
3. Derive the drain current of a MOSFET in the linear and saturation regions, and explain velocity saturation and subthreshold conduction.
4. Describe the double-gate MOSFET: structure, advantages and volume inversion.
5. Write notes on gate tunneling and mobility degradation in nano MOSFETs. What limits CMOS scaling?

---

## Unit 3: Nanowire, Carbon Nanotube, Graphene and Single-Electron Transistors

### 2-mark definitions

- **Silicon nanowire MOSFET:** a MOSFET whose channel is a silicon wire a few nanometres across, usually with a gate-all-around structure.
- **Graphene:** a single layer of carbon atoms arranged in a hexagonal (honeycomb) lattice; a zero-bandgap semimetal with very high mobility.
- **Carbon nanotube (CNT):** a graphene sheet rolled into a seamless cylinder about 1 nm in diameter.
- **Chirality (n, m):** the pair of integers describing how the graphene sheet is rolled, which sets the CNT's diameter and whether it is metallic or semiconducting.
- **CNTFET:** a field-effect transistor that uses a semiconducting carbon nanotube as its channel.
- **Ballistic transport:** carrier movement through a channel shorter than the mean free path, with no scattering.
- **Quantum of conductance:** the maximum conductance of one ballistic channel with spin degeneracy, G₀ = 2q²/h ≈ 77.5 µS (resistance about 12.9 kΩ).
- **Single-electron transistor (SET):** a device with a tiny conducting island between two tunnel junctions, where current flows one electron at a time, controlled by a gate.
- **Coulomb blockade:** the blocking of electron tunneling onto a small island because adding one electron costs a charging energy larger than the available energy.
- **Graphene nanoribbon (GNR):** a narrow strip of graphene that has a bandgap due to lateral confinement.

### Core concepts

**Silicon nanowire MOSFETs:**
- **Structure:** a GAA gate around a wire of diameter 3–10 nm.
- **Advantages:** best electrostatic control (smallest λ), near-ideal SS, low DIBL.
- **Physics:**
  - 1D subbands form because of quantization in two directions.
  - The density of states has 1D peaks.
  - Quantum capacitance matters.
  - Mobility is affected by surface roughness.
  - Series resistance and fabrication variability are the main problems.
- **Industry form:** stacked nanosheets (wider ribbons) for higher current.

**Graphene band structure:**
- The conduction and valence bands touch at the K points (Dirac points), with a linear E-k relation (massless Dirac fermions); Fermi velocity is about 10⁶ m/s.
- **Zero bandgap** means a graphene FET cannot switch off well (on/off ratio only about 10), so it is poor for logic but useful for RF (high-frequency transistors), sensors and interconnects.
- **Ways to open a gap:** nanoribbons (gap is roughly inversely proportional to width), bilayer graphene with a vertical field, and strain or substrate effects.

**CNT band structure:**
- Rolling graphene quantizes the wave vector around the circumference.
- If the allowed lines pass through the K points, the tube is metallic; otherwise it is semiconducting.
- **Rule:** metallic if (n − m) is divisible by 3, otherwise semiconducting. So about one-third of random tubes are metallic, which is a manufacturing problem.
- **Diameter:** d = (a/π) √(n² + nm + m²), with a = 0.246 nm.
- **Bandgap** of a semiconducting tube: Eg ≈ 0.8 eV·nm / d.
- **Types by chirality:** zigzag (n, 0), armchair (n, n) (always metallic), and chiral.

**CNTFETs:**
- **Schottky-barrier CNTFET:** metal contacts form Schottky barriers; the gate modulates barrier thickness (ambipolar behaviour).
- **MOSFET-like CNTFET:** doped source and drain extensions; better on/off and unipolar behaviour.
- **Advantages:** near-ballistic transport (mean free path of hundreds of nanometres), high mobility, a 1D channel with excellent electrostatics in GAA form, and high current density.
- **Challenges:** chirality control, placement and alignment, contact resistance, and metallic tube removal.
- MIT built a 16-bit CNT microprocessor (RV16X-NANO, 2019) with about 14,000 CNTFETs.

**Ballistic transistor (top-of-barrier model, Natori and Lundstrom):** in the ballistic limit, current is set by injection over the source-channel barrier, not by mobility. ID = W Q_inv v_inj, where v_inj is the thermal injection velocity (about 1–2 × 10⁷ cm/s in Si). With some scattering, ID = W Q_inv v_inj (1 − r)/(1 + r), where r is the backscattering coefficient. Landauer formula: G = (2q²/h) M T, where M is the number of modes and T the transmission.

**Single-electron transistor (SET):**
- **Structure:** source and drain are joined by tunnel junctions to an island with a capacitive gate.
- **Conditions:** charging energy Ec = q²/2CΣ must be much larger than kT (about 10 times or more), and the tunnel resistance must exceed the resistance quantum h/q² ≈ 25.8 kΩ so the electron is localized on the island.
- **Behaviour:** current versus gate voltage shows periodic Coulomb oscillations with period q/Cg; the Coulomb diamonds appear in the VD-VG plot.
- **Applications:** ultra-sensitive electrometers, single-electron memory, and quantum metrology (current standards).
- **Problems:** room-temperature operation needs islands below about 2 nm, sensitivity to background charges, high output impedance, and low drive.

### Solved examples

**Example 8 (CNT chirality).** Classify (10, 0), (12, 0) and (8, 8) tubes, and find the diameter and bandgap of the (10, 0) tube.
- (10, 0): 10 − 0 = 10, not divisible by 3, so **semiconducting**.
- (12, 0): 12, divisible by 3, so **metallic**. (8, 8): armchair, so **metallic**.
- d(10, 0) = (0.246/π) × √100 = **0.78 nm**; Eg ≈ 0.8 / 0.78 ≈ **1.0 eV**.

**Example 9 (ballistic resistance).** Find the minimum resistance of one ballistic channel and of a metallic CNT (2 modes, each spin-degenerate).
- R₀ = h / (2q²) = **12.9 kΩ** for one mode.
- CNT with 2 modes: R = h / (4q²) = **6.45 kΩ**, which is the lowest possible contact-limited resistance, however short the tube.

**Example 10 (SET charging energy).** An SET island has total capacitance 1 aF. Find the charging energy and check room-temperature operation.
- Ec = q² / 2C = (1.6 × 10⁻¹⁹)² / (2 × 10⁻¹⁸) J = 1.28 × 10⁻²⁰ J = **0.08 eV**.
- kT at 300 K = 0.0259 eV, so Ec ≈ 3 kT. This is **not enough** (need about 10 kT); the island must be smaller (C ≈ 0.3 aF) or the device cooled.

### Key points to remember

- Nanowire GAA: best electrostatics, 1D subbands, nanosheets in industry.
- Graphene: zero gap, linear bands, high mobility; good for RF, poor for logic; GNRs open a gap.
- CNT: metallic if (n − m) mod 3 = 0; d = 0.0783 √(n² + nm + m²) nm; Eg ≈ 0.8/d eV.
- CNTFET types: Schottky-barrier and MOSFET-like; challenges: chirality, placement, contacts.
- Ballistic: G₀ = 2q²/h = 77.5 µS; ID = W Q v_inj (1 − r)/(1 + r).
- SET: Ec = q²/2C ≫ kT, R_T > 25.8 kΩ; Coulomb blockade and oscillations.

### Important questions

1. Explain the band structure of graphene and carbon nanotubes. How does chirality decide metallic or semiconducting behaviour? Solve a numerical.
2. Describe the structure, working and types of CNTFETs. Compare CNTFETs with silicon MOSFETs.
3. Explain silicon nanowire MOSFETs and their advantages and challenges.
4. What is ballistic transport? Explain the top-of-barrier model and the Landauer formula.
5. Explain the single-electron transistor and Coulomb blockade, with the conditions for operation.

---

## Unit 4: Radiation Effects in SOI MOSFETs

### 2-mark definitions

- **Ionizing radiation:** radiation (gamma rays, X-rays, protons, heavy ions, neutrons through secondary products) energetic enough to create electron-hole pairs in materials.
- **Total ionizing dose (TID):** the cumulative ionizing energy absorbed per unit mass, measured in rad(Si) or gray (1 Gy = 100 rad); it builds up trapped charge over time.
- **Displacement damage:** damage caused when particles knock atoms out of lattice sites, creating defects that reduce carrier lifetime and mobility.
- **Single-event effect (SEE):** an effect caused by one energetic particle striking a sensitive node.
- **Single-event upset (SEU):** a soft error in which a stored bit flips, without permanent damage.
- **Single-event latch-up (SEL):** a particle triggers the parasitic thyristor in bulk CMOS, causing a high-current state that can destroy the chip.
- **Single-event transient (SET):** a temporary voltage glitch in combinational logic caused by a particle strike.
- **LET (linear energy transfer):** the energy lost by a particle per unit path length, usually in MeV·cm²/mg.
- **Critical charge (Qcrit):** the minimum collected charge at a node that causes an upset.
- **Radiation hardening:** design and process techniques that make circuits tolerant to radiation (RHBD and RHBP).

### Core concepts

**Radiation environments:** space (trapped protons and electrons in Van Allen belts, galactic cosmic rays, solar flares), avionics (atmospheric neutrons), terrestrial (alpha particles from packaging, neutrons at sea level), nuclear reactors and particle accelerators, and medical equipment.

**TID effects in MOS devices:**
- Radiation creates electron-hole pairs in oxides.
- Electrons are mobile and leave quickly; holes move slowly and are trapped in the oxide near the interface, forming **positive oxide-trapped charge (Not)**.
- Radiation also creates **interface traps (Nit)**.
- **Results:**
  - Negative VT shift in NMOS (more leakage).
  - Increased subthreshold swing.
  - Mobility loss.
  - Leakage at the edges of the shallow trench isolation (STI) and field oxide.
- Thin gate oxides (below about 5 nm) are naturally hard because trapped charge tunnels out.

**TID in SOI:**
- SOI has a thick **buried oxide (BOX)**, which traps positive charge.
- In fully depleted SOI the front and back gates are coupled, so BOX charge turns on a **back channel** and shifts the front VT. This makes FD-SOI more sensitive to TID than thin-oxide bulk devices.
- **Remedies:** hardened BOX, back-gate bias to compensate the shift (with ultra-thin BOX), body ties, and edgeless (enclosed) layouts.

**Single-event effects in SOI:**
- **Advantage:** the BOX isolates the thin active silicon from the substrate, so only charge generated in the thin film is collected. Collection volume is much smaller than in bulk (no funnelling from the substrate), so SOI has lower SEU sensitivity.
- **SOI is immune to SEL** because there is no parasitic pnpn thyristor path through the substrate.
- **SOI concern:** the **parasitic bipolar effect.** Holes generated by the strike collect in the floating body and raise its potential, turning on the lateral bipolar transistor (source-body-drain). This amplifies the collected charge. Body ties reduce it.
- **Multigate and FinFET SEE:** very small volume, but also very small Qcrit; multiple-cell upsets possible.

**Scaling effects:**
- Qcrit drops as node capacitance and VDD fall (Qcrit ≈ C × VDD), so each cell gets more sensitive.
- But each cell is smaller, so it is hit less often. Per-bit soft error rate (SER) in SRAM has stayed roughly flat or fallen, while per-chip SER grows with the number of bits.
- Multiple-bit upsets increase because one strike can affect neighbouring cells.
- TID hardness improves with thinner gate oxides, but STI and BOX remain weak points.

**Hardening techniques:**
- **Process:** SOI, hardened oxides, epitaxial layers, guard rings.
- **Layout:** enclosed-layout transistors, guard rings, spacing.
- **Circuit:** DICE (dual interlocked cell) latches, triple modular redundancy (TMR) with voting, error-correcting codes (ECC) and memory scrubbing, temporal filtering for SETs.
- **System:** watchdogs, redundancy, shielding.

### Solved examples

**Example 11 (critical charge).** An SRAM node has capacitance 1 fF at VDD = 1 V. Find Qcrit. Will a particle with LET = 10 MeV·cm²/mg crossing 1 µm of silicon upset it? (In Si, LET 97 MeV·cm²/mg deposits about 1 pC/µm.)
- Qcrit ≈ C × V = 1 × 10⁻¹⁵ × 1 = **1 fC**.
- Charge deposited = 10/97 × 1 pC = **0.103 pC = 103 fC** per µm.
- 103 fC ≫ 1 fC, so even if only a small fraction is collected, an upset is likely. In thin-film SOI (say 10 nm film) the deposited charge is only 1.03 fC, which is near Qcrit, so SOI is far less sensitive.

**Example 12 (dose units).** A satellite part is rated 100 krad(Si). In gray this is 100,000 / 100 = **1,000 Gy (1 kGy)**. If the orbit gives 10 krad per year, the part lasts about **10 years** before reaching its TID limit (ignoring design margin).

### Key points to remember

- TID: positive oxide trapped charge plus interface traps → VT shift, leakage, SS increase.
- SOI: BOX charge creates back-channel leakage (TID weak point), but small collection volume (good for SEE) and no latch-up.
- SEE types: SEU, SEL, SET, multiple-bit upset; parasitic bipolar effect in floating-body SOI.
- Qcrit ≈ C VDD; LET 97 MeV·cm²/mg ≈ 1 pC/µm in Si.
- Hardening: process (SOI), layout (ELT, guard rings), circuit (DICE, TMR, ECC).

### Important questions

1. Explain total ionizing dose effects in MOS devices. Why is the buried oxide a concern in SOI?
2. What are single-event effects? Explain SEU, SEL and SET. Why are SOI devices less sensitive to SEE?
3. Explain the parasitic bipolar effect in SOI MOSFETs under heavy-ion strikes.
4. Discuss the effect of device scaling on TID and SEE sensitivity. Solve a critical-charge numerical.
5. Describe radiation hardening techniques for nano-scale circuits.

---

## Unit 5: Digital, Analog, Mixed-Signal and RF Circuits with Nano MOSFETs

### 2-mark definitions

- **Static (leakage) power:** power consumed when the circuit is not switching, from subthreshold, gate and junction (GIDL) leakage: P_static = VDD × I_leak.
- **Dynamic power:** switching power P_dyn = α C VDD² f, where α is the activity factor.
- **ION/IOFF ratio:** ratio of on-current to off-current; a measure of switching quality (typically 10⁴ to 10⁶ for logic).
- **SRAM cell (6T):** a static memory cell of two cross-coupled inverters and two access transistors.
- **Static noise margin (SNM):** the maximum DC noise voltage an SRAM cell can tolerate before flipping, found from the butterfly curve.
- **Transconductance (gm):** the change in drain current per change in gate voltage, gm = ∂ID/∂VGS.
- **Intrinsic gain:** the maximum voltage gain of a single transistor, Av = gm ro.
- **Flicker (1/f) noise:** low-frequency noise from carrier trapping at the oxide interface; it rises as device area shrinks.
- **Cut-off frequency (fT):** the frequency at which the current gain of a transistor falls to 1: fT ≈ gm / (2π Cgg).
- **Bandgap reference:** a circuit that produces a voltage almost independent of temperature and supply by adding PTAT and CTAT voltages (around 1.2 V).

### Core concepts

**Digital circuits: leakage and trade-offs:**
- **Leakage components:** subthreshold (main), gate tunneling (reduced by high-k), GIDL and band-to-band tunneling, and junction leakage.
- **Trade-off:** lowering VT increases speed (more ION) but leakage rises exponentially. Raising VT saves leakage but slows the circuit.
- **Techniques:**
  - Multi-VT libraries (low VT on critical paths, high VT elsewhere).
  - Power gating (sleep transistors).
  - Body biasing (reverse bias for standby, forward bias for speed; easy in FD-SOI).
  - Dynamic voltage and frequency scaling (DVFS).
  - Clock gating.
  - Stacking effect (two off transistors in series leak much less).
- **Energy-delay optimum:** near-threshold computing reduces energy per operation with lower speed.

**SRAM in nano technologies:**
- **6T design constraints:**
  - Read stability (cell ratio β = W_pull-down / W_access, about 1.5–2.5).
  - Write ability (pull-up ratio, PMOS weaker than access).
  - Hold SNM.
- **Problems with scaling:** variability (random dopant fluctuation, line-edge roughness) makes SNM spread, low VDD reduces margins, and leakage of millions of cells adds up.
- **Solutions:** 8T cells (separate read port), assist circuits (word-line underdrive, negative bit line), FinFET SRAM with quantized fin widths (1-1-1, 1-2-2 fin cells), and ECC.

**Analog design with nano MOSFETs:**
- **Low intrinsic gain:** short channels have low ro (channel-length modulation, DIBL), so gm ro drops to about 10–30. Fixes are cascode and gain-boosting, and longer L for analog devices.
- **Reduced headroom:** low VDD limits stacking and swing.
- **Noise:** thermal noise current spectral density is 4kTγ gm. Flicker noise ∝ 1/(W L Cox f), so it rises in small devices; use larger devices or chopper techniques.
- **Matching:** offset spread σ(ΔVT) = A_VT / √(WL) (Pelgrom's law), so mismatch rises as area shrinks.
- **gm/ID design methodology:** chooses inversion level (weak inversion gives high efficiency, strong inversion gives speed).

**Bandgap reference:**
- Adds VBE (falls about −2 mV/°C, CTAT) and a scaled ΔVBE = (kT/q) ln(N) (rises, PTAT) so that the sum is about 1.2 V with near-zero temperature coefficient.
- In nano CMOS, parasitic vertical bipolar transistors are used.
- Low VDD needs sub-1 V bandgaps (current-mode, Banba type).

**Op-amps in nano CMOS:**
- Two-stage Miller-compensated op-amp: the gain is about (gm1 ro1)(gm2 ro2), with compensation capacitor Cc. Unity-gain bandwidth GBW = gm1 / (2π Cc).
- Low intrinsic gain pushes toward multi-stage or gain-boosted designs, and toward digitally assisted analog (calibration).

**Mixed-signal circuits:**
- **ADC and DAC trends:** SAR ADCs (benefit from scaling: mostly switches and comparators), time-interleaving, and digital calibration.
- **Issues:** substrate noise coupling from digital to analog (SOI helps isolate), and supply noise.

**RF circuits:**
- **Scaling benefits:** scaling raises fT and fmax (hundreds of GHz in advanced nodes), enabling CMOS RF transceivers (Wi-Fi, 5G, mmWave).
- **Challenges:**
  - Gate resistance (use multi-finger layouts).
  - Parasitic capacitances in FinFETs (fins and gate fringing).
  - Low breakdown voltage, which limits power amplifier output.
  - Substrate losses (SOI and trap-rich RF-SOI help, which is why RF switches use SOI).
  - Noise figure of LNAs.
  - Passive (inductor) quality factor.

### Solved examples

**Example 13 (intrinsic gain).** A nano MOSFET carries ID = 0.1 mA with overdrive VGS − VT = 0.2 V and channel-length modulation λ = 0.2 V⁻¹. Find gm, ro and intrinsic gain.
- gm = 2 ID / Vov = 2 × 0.1 mA / 0.2 V = **1 mS**.
- ro = 1 / (λ ID) = 1 / (0.2 × 10⁻⁴) = **50 kΩ**.
- Av = gm ro = **50** (about 34 dB). A cascode raises this by roughly another gm ro factor.

**Example 14 (leakage vs VT).** In a chip with SS = 80 mV/decade, VT is reduced by 100 mV to gain speed. The leakage current increases by 10^(100/80) = **17.8 times**. If standby leakage was 10 mW, it becomes about **178 mW**, so power gating or higher VT on non-critical paths is needed.

**Example 15 (dynamic power).** A block has C = 1 nF switched capacitance, α = 0.1, VDD = 0.8 V and f = 2 GHz.
- P_dyn = 0.1 × 10⁻⁹ × 0.64 × 2 × 10⁹ = **0.128 W**.
- Lowering VDD to 0.7 V cuts this by (0.7/0.8)² = 0.766, to **98 mW**.

**Example 16 (fT).** A transistor has gm = 10 mS and Cgg = 10 fF. fT = gm / (2π Cgg) = 0.01 / (6.283 × 10⁻¹⁴) = **159 GHz**.

### Key points to remember

- Leakage: subthreshold, gate, GIDL, junction. Remedies: multi-VT, power gating, body bias, DVFS, stacking.
- P_dyn = α C VDD² f; P_static = VDD I_leak.
- SRAM: 6T, read stability (cell ratio), writability, SNM; 8T and assist circuits; variability.
- Analog: low gm ro, low headroom, flicker noise, Pelgrom mismatch; cascodes and calibration.
- Bandgap: CTAT VBE + PTAT ΔVBE ≈ 1.2 V. Op-amp GBW = gm1 / 2πCc.
- RF: fT = gm / 2πCgg; gate resistance, parasitics, low breakdown; RF-SOI.

### Important questions

1. Explain the leakage mechanisms in nano MOSFETs and the trade-off between speed and leakage. Describe leakage-reduction techniques.
2. Explain the design of a 6T SRAM cell and the problems of scaling SRAM to nano nodes.
3. Discuss the challenges of analog circuit design with nano MOSFETs: gain, noise and matching. Solve an intrinsic gain numerical.
4. Explain the bandgap reference circuit and the two-stage op-amp in nano CMOS.
5. Discuss mixed-signal and RF circuit design with nano MOSFETs (fT, substrate coupling, SOI).

---

## Last-hour checklist

- [ ] Scaling table (constant field vs constant voltage); end of Dennard scaling; SCEs (VT roll-off, DIBL, punch-through, hot carriers); channel and S/D engineering; high-k (EOT 0.62 nm); SOI (PD vs FD); FinFET and GAA; quantum effects; Cox = 3.45 µF/cm² at 1 nm.
- [ ] VFB, VT expression; 2D natural length (3.87 nm, Lg ≥ 19 nm); SS 77.4 mV/dec and 19.6× leakage; square-law 0.65 mA; velocity saturation; DG benefits; tunneling (2.9 × 10⁻⁶ vs 4.9 × 10⁻⁹); mobility and Matthiessen's rule.
- [ ] Nanowire GAA; graphene bands; CNT chirality rule and diameter (0.78 nm, 1.0 eV); CNTFET types; ballistic G₀ = 77.5 µS (12.9 kΩ, 6.45 kΩ); SET Ec = 0.08 eV ≈ 3 kT.
- [ ] TID in oxides and BOX; SEU, SEL, SET; parasitic bipolar; Qcrit 1 fC vs 103 fC/µm; scaling trends; hardening (DICE, TMR, ECC); 100 krad = 1 kGy.
- [ ] Leakage vs VT (17.8×); P_dyn 0.128 W; SRAM 6T and SNM; analog gain 50; noise and Pelgrom; bandgap; op-amp; fT 159 GHz; RF-SOI.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | FinFETs and Other Multi-Gate Transistors | J.-P. Colinge (ed.) | Springer (2008) | [WorldCat](https://search.worldcat.org/search?q=FinFETs+and+Other+Multi-Gate+Transistors+Colinge) |
| 2 | Nanoscale Transistors: Device Physics, Modeling and Simulation | Mark Lundstrom, Jing Guo | Springer (2006) | [WorldCat](https://search.worldcat.org/search?q=Nanoscale+Transistors+Device+Physics+Modeling+and+Simulation+Lundstrom) |
| 3 | Fundamentals of Carrier Transport (2nd edition) | Mark Lundstrom | Cambridge University Press (2000) | [WorldCat](https://search.worldcat.org/search?q=Fundamentals+of+Carrier+Transport+Lundstrom) |

**Syllabus source:** [AKTU Open Elective-III and IV syllabus for B.Tech 8th semester, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf)

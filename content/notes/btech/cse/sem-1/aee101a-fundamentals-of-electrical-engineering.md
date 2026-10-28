---
program: btech
branches: [cse, it, cse-aiml, cse-ds, aids, ece, ee]
semester: 1
code: AEE101A
name: Fundamentals of Electrical Engineering
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 1st year, 2026-27 onwards
syllabusSource: https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf
units:
  - Basic Electrical Quantities and DC Circuits
  - AC Circuits
  - Three-Phase Systems
  - Magnetic Circuits and Transformers
  - Electrical Machines and Emerging Electrical Systems
---

# AEE101A Fundamentals of Electrical Engineering: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. The same course is taught as AEE201A in semester 2 for the other group of students. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: laws, circuits described in words, phasor relations and comparison tables.
3. **Solved examples**: the numericals examiners set (series-parallel, mesh, Thevenin, RMS values, RL circuit power, power factor correction, star and delta, two-wattmeter, magnetic circuit, transformer EMF and efficiency, DC motor torque, slip, solar fill factor).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (Ohm's law, series and parallel, dividers, KVL and KCL, mesh and nodal, Thevenin) and Unit 2 (RMS and average values, phasors, R, L and C circuits, power and power factor). Practise the RL circuit numerical until it is quick.
- **Afternoon (3 hours):** Unit 3 (star and delta relations, three-phase power, two-wattmeter method) and Unit 4 (magnetic circuits, Faraday's law, transformer EMF equation, losses and efficiency).
- **Evening (2 hours):** Unit 5 (DC motor, BLDC, induction motor, solar PV, electrical safety), then the "Last-hour checklist".
- **In the exam:** draw the circuit with current directions, the phasor diagram for RL and RC circuits, the star and delta connections, the transformer equivalent circuit, and the I-V curve of a solar cell. Always write the unit with the answer.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit. Internal assessment carries another 30 marks.

---

## Unit 1: Basic Electrical Quantities and DC Circuits

### 2-mark definitions

- **Electric charge (Q):** a basic property of matter; measured in coulombs (C); an electron carries −1.6 × 10⁻¹⁹ C.
- **Current (I):** the rate of flow of charge, I = dQ/dt; unit ampere (A).
- **Voltage (potential difference, V):** work done per unit charge in moving it between two points, V = W/Q; unit volt (V).
- **EMF (electromotive force):** the energy supplied per unit charge by a source (battery, generator) to drive current round a complete circuit.
- **Resistance (R):** opposition to current; R = ρl/A, unit ohm (Ω). It increases with temperature for metals: R_t = R₀(1 + α t).
- **Ohm's law:** at constant temperature, current through a conductor is proportional to the voltage across it: V = IR.
- **Electrical power and energy:** P = VI = I²R = V²/R (watts); energy W = P t (joules; 1 kWh = 1 unit = 3.6 MJ).
- **KCL (Kirchhoff's current law):** the algebraic sum of currents meeting at a node is zero (charge is conserved).
- **KVL (Kirchhoff's voltage law):** the algebraic sum of all voltages around any closed loop is zero (energy is conserved).
- **Thevenin's theorem:** any linear two-terminal network can be replaced by a voltage source V_th in series with a resistance R_th.

### Core concepts

**Series and parallel resistors:**
- **Series:** R = R₁ + R₂ + …; same current; voltages add.
- **Parallel:** 1/R = 1/R₁ + 1/R₂ + …; same voltage; currents add. For two resistors, R = R₁R₂/(R₁ + R₂).

**Voltage and current dividers:**
- **Voltage divider** (series resistors): V₁ = V × R₁/(R₁ + R₂).
- **Current divider** (two parallel resistors): I₁ = I × R₂/(R₁ + R₂). The current takes the smaller resistance more.

**Mesh analysis (loop currents):**
1. Assign a clockwise current to each mesh.
2. Apply KVL to each mesh (a shared resistor carries the difference of mesh currents).
3. Solve the simultaneous equations.

**Nodal analysis:**
1. Choose a reference node (ground).
2. Write KCL at each other node with currents (V_node − V_neighbour)/R leaving.
3. Solve for node voltages.
- Mesh analysis suits circuits with voltage sources; nodal suits current sources and many parallel branches.

**Thevenin's theorem steps:**
1. Remove the load resistor.
2. **V_th:** find the open-circuit voltage across the load terminals.
3. **R_th:** replace independent voltage sources by short circuits and current sources by open circuits; find the resistance seen from the terminals.
4. Load current I_L = V_th/(R_th + R_L).
- **Maximum power transfer:** when R_L = R_th, P_max = V_th²/(4R_th).

**Ideal and practical sources:**
- An ideal voltage source has zero internal resistance; a practical one has a small series resistance.
- An ideal current source has infinite internal resistance; a practical one has a large parallel resistance.

### Solved examples

**Example 1 (series-parallel).** A 10 Ω resistor is in series with a parallel combination of 20 Ω and 30 Ω, across 110 V. Find the total current and the current in the 20 Ω branch.
- 20 ∥ 30 = 600/50 = 12 Ω; total R = 22 Ω; I = 110/22 = **5 A**.
- Current divider: I₂₀ = 5 × 30/50 = **3 A** (and 2 A in the 30 Ω).

**Example 2 (mesh analysis).** The mesh equations of a circuit are 6I₁ − 4I₂ = 10 and −4I₁ + 7I₂ = −5. Solve them.
- From the first: I₁ = (10 + 4I₂)/6. Substituting: −4(10 + 4I₂)/6 + 7I₂ = −5, so (−40 − 16I₂ + 42I₂)/6 = −5, giving 26I₂ = 10, **I₂ = 0.385 A**.
- I₁ = (10 + 1.538)/6 = **1.923 A**. The shared 4 Ω resistor carries I₁ − I₂ = 1.538 A.

**Example 3 (Thevenin).** A 12 V source with a 4 Ω series resistor feeds a 12 Ω resistor to ground. A 2 Ω resistor connects from the top of the 12 Ω to the load R_L = 5 Ω. Find the load current and the maximum power available.
- V_th = 12 × 12/(4 + 12) = **9 V** (no current flows in the 2 Ω when the load is open).
- R_th = (4 ∥ 12) + 2 = 3 + 2 = **5 Ω**.
- I_L = 9/(5 + 5) = **0.9 A**. Since R_L = R_th, this is maximum power: 9²/(4 × 5) = **4.05 W**.

**Example 4 (energy bill).** A 1.5 kW heater runs 4 hours a day for 30 days at ₹7 per unit. Energy = 1.5 × 4 × 30 = 180 kWh; cost = **₹1,260**.

### Key points to remember

- V = IR; P = VI = I²R = V²/R; 1 kWh = 3.6 MJ.
- Series adds R; parallel adds 1/R; voltage and current divider formulas.
- KCL (nodes), KVL (loops); mesh and nodal steps.
- Thevenin: V_th = open-circuit voltage; R_th with sources removed; P_max = V_th²/4R_th.

### Important questions

1. State Ohm's law and Kirchhoff's laws. Explain voltage and current divider rules with derivation.
2. Solve a network by mesh analysis (and nodal analysis).
3. State and explain Thevenin's theorem with steps; find the current in a load resistor.
4. State and prove the maximum power transfer theorem.
5. Find equivalent resistance and branch currents in a series-parallel network; calculate power and energy.

---

## Unit 2: AC Circuits

### 2-mark definitions

- **Alternating current (AC):** current that periodically reverses direction; the standard waveform is sinusoidal, v = V_m sin ωt.
- **Frequency (f) and time period (T):** f = 1/T; India uses 50 Hz, so ω = 2πf = 314 rad/s.
- **Peak value (V_m):** the maximum instantaneous value.
- **RMS (effective) value:** the DC value that produces the same heating in a resistor; for a sine wave V_rms = V_m/√2 = 0.707 V_m.
- **Average value:** for a sine wave over a half cycle, V_avg = 2V_m/π = 0.637 V_m.
- **Form factor:** RMS/average = 1.11 for a sine wave. **Peak factor (crest factor):** peak/RMS = 1.414.
- **Phasor:** a rotating vector whose length is the RMS (or peak) value and whose angle is the phase; used to add sinusoids of the same frequency.
- **Impedance (Z):** total opposition to AC, Z = R + jX, magnitude |Z| = √(R² + X²), in ohms.
- **Reactance:** inductive X_L = ωL = 2πfL; capacitive X_C = 1/(ωC) = 1/(2πfC).
- **Power factor (pf):** cos φ, the cosine of the angle between voltage and current, equal to P/S = R/Z.

### Core concepts

**Generation of AC:** a coil rotating at constant speed in a uniform magnetic field cuts flux at a varying rate. By Faraday's law, the induced EMF is e = E_m sin ωt, with E_m = N B A ω.

**AC through pure elements**

| Element | Relation | Phase | Impedance | Power |
|---|---|---|---|---|
| Pure R | V = IR | V and I in phase | R | P = VI (pf = 1) |
| Pure L | V = jX_L I | I lags V by 90° | jωL | Average P = 0 (pf = 0 lag) |
| Pure C | V = −jX_C I | I leads V by 90° | −j/(ωC) | Average P = 0 (pf = 0 lead) |

**Series RL circuit:**
- Z = R + jX_L, |Z| = √(R² + X_L²), φ = tan⁻¹(X_L/R).
- Current lags voltage by φ.
- **Phasor diagram:** V_R along I, V_L 90° ahead, V = √(V_R² + V_L²).

**Series RC circuit:**
- Z = R − jX_C, φ = tan⁻¹(X_C/R).
- Current leads voltage.

**Powers in AC circuits (power triangle):**
- **Active (real) power** P = V I cos φ (watts), the useful power.
- **Reactive power** Q = V I sin φ (VAR), exchanged back and forth by L and C.
- **Apparent power** S = V I (VA).
- S² = P² + Q²; pf = P/S.

**Power factor improvement:**
- **Why low pf is bad:** for the same power, a low power factor draws more current. This means larger cables and transformers, more I²R loss, poorer voltage regulation, and utility penalties.
- **Causes:** induction motors, transformers at light load, fluorescent chokes.
- **Fix:** connect capacitors in parallel (static capacitor banks), which supply leading VAR. Synchronous condensers and phase advancers are also used.
- **Capacitor rating:** Q_C = P (tan φ₁ − tan φ₂); C = Q_C/(V² ω).

**Single-phase power measurement:** a wattmeter has a **current coil** (low resistance, in series with the load) and a **pressure (voltage) coil** (high resistance, across the supply). The deflection is proportional to V I cos φ, so it reads true (active) power.

### Solved examples

**Example 5 (RMS and average).** v = 325 sin 314t. Find V_rms, V_avg, f and the form factor.
- V_rms = 325/√2 = **229.8 V** (the 230 V mains); V_avg = 2 × 325/π = **206.9 V**.
- f = 314/2π = **50 Hz**; form factor = 229.8/206.9 = **1.11**.

**Example 6 (series RL circuit).** A coil of R = 30 Ω and L = 0.1273 H is connected to 230 V, 50 Hz. Find X_L, Z, I, pf, P, Q and S.
- X_L = 2π × 50 × 0.1273 = **40 Ω**; Z = √(30² + 40²) = **50 Ω**.
- I = 230/50 = **4.6 A**; pf = R/Z = **0.6 lagging** (φ = 53.1°).
- P = 230 × 4.6 × 0.6 = **634.8 W**; Q = 230 × 4.6 × 0.8 = **846.4 VAR**; S = **1,058 VA**.

**Example 7 (power factor improvement).** A 10 kW load at 230 V, 50 Hz works at 0.7 pf lagging. Find the capacitor needed to raise the pf to 0.95.
- tan φ₁ = tan(cos⁻¹ 0.7) = 1.020; tan φ₂ = tan(cos⁻¹ 0.95) = 0.329.
- Q_C = 10 × (1.020 − 0.329) = **6.92 kVAR**.
- C = Q_C/(V²ω) = 6,915/(230² × 314.16) = **416 µF**.
- Line current falls from 10,000/(230 × 0.7) = 62.1 A to 10,000/(230 × 0.95) = 45.8 A.

### Key points to remember

- V_rms = 0.707 V_m; V_avg = 0.637 V_m; form factor 1.11; peak factor 1.414; ω = 314 rad/s at 50 Hz.
- R: in phase; L: I lags 90°; C: I leads 90°; X_L = 2πfL, X_C = 1/2πfC.
- Z = √(R² + X²); pf = cos φ = R/Z = P/S.
- P = VI cos φ, Q = VI sin φ, S = VI; S² = P² + Q².
- PF improvement by parallel capacitors: Q_C = P(tan φ₁ − tan φ₂).
- Wattmeter: current coil in series, pressure coil in parallel.

### Important questions

1. Explain the generation of a sinusoidal EMF. Define and derive RMS and average values, form factor and peak factor.
2. Explain the behaviour of AC through pure R, pure L and pure C with waveforms and phasor diagrams.
3. Analyse a series RL (or RC) circuit: impedance, current, phase angle and phasor diagram. Solve a numerical.
4. Explain active, reactive and apparent power and the power triangle. What is power factor?
5. Why is power factor improvement needed? Explain the capacitor method and calculate the capacitor rating. Explain single-phase power measurement with a wattmeter.

---

## Unit 3: Three-Phase Systems

### 2-mark definitions

- **Three-phase supply:** three alternating voltages of equal magnitude and frequency, displaced by 120° from each other.
- **Balanced system:** all three phase voltages (and load impedances) are equal in magnitude and 120° apart.
- **Phase sequence:** the order in which the phases reach their maximum (R-Y-B is the standard positive sequence).
- **Star (Y) connection:** one end of each phase winding is joined at a common point (neutral); the other ends are the line terminals.
- **Delta (Δ) connection:** the three windings are joined end to end in a closed loop, with lines taken from the junctions.
- **Phase voltage and line voltage:** phase voltage is across one phase winding; line voltage is between two lines.
- **Neutral wire:** the conductor connected to the star point; it carries the return current of an unbalanced load and fixes phase voltages.
- **Line current and phase current:** line current flows in the supply line; phase current flows in each phase winding or load.
- **Three-phase power:** P = √3 V_L I_L cos φ for a balanced load.
- **Two-wattmeter method:** a method of measuring total power in a three-phase, three-wire system using two wattmeters, P = W₁ + W₂.

### Core concepts

**Advantages of three-phase over single-phase:**
- More power for the same conductor material (about 25% less copper for the same power and losses).
- Constant total instantaneous power, so motors run smoothly with no pulsation.
- Three-phase motors are self-starting (rotating magnetic field).
- Smaller and cheaper machines for the same rating.
- Single-phase loads can be supplied from it.
- Better efficiency and voltage regulation in transmission.

**Generation:** three identical coils placed 120° apart on the same shaft rotate in a magnetic field, producing e_R = E_m sin ωt, e_Y = E_m sin(ωt − 120°), e_B = E_m sin(ωt − 240°). Their sum is zero at every instant (balanced).

**Star and delta relations (balanced)**

| Quantity | Star (Y) | Delta (Δ) |
|---|---|---|
| Voltage | V_L = √3 V_ph (V_L leads V_ph by 30°) | V_L = V_ph |
| Current | I_L = I_ph | I_L = √3 I_ph (I_L lags I_ph by 30°) |
| Neutral | Available (3-phase, 4-wire) | Not available (3-wire) |
| Use | Distribution (400 V line, 230 V phase), transmission | Motors, industrial loads |
| Power | P = √3 V_L I_L cos φ = 3 V_ph I_ph cos φ | Same formula |

**Power in three-phase circuits:**
- Active P = √3 V_L I_L cos φ.
- Reactive Q = √3 V_L I_L sin φ.
- Apparent S = √3 V_L I_L.
- φ is the angle between phase voltage and phase current.
- **Star vs delta with the same impedances:** delta takes three times the power of star (because each phase gets √3 times the voltage). This is the basis of star-delta starters for motors.

**Two-wattmeter method:**
- The current coils are in two lines; the pressure coils are between each of those lines and the third line.
- **Total power:** P = W₁ + W₂ (valid for balanced or unbalanced, three-wire loads).
- **Power factor for balanced loads:** tan φ = √3 (W₁ − W₂)/(W₁ + W₂).
- **Special cases:**
  - pf = 1: W₁ = W₂.
  - pf = 0.5: one wattmeter reads zero.
  - pf < 0.5: one wattmeter reads negative (reverse its pressure coil connections and subtract).

**Neutral wire:** in an unbalanced star load, the neutral carries the phasor sum of line currents and keeps each phase voltage at 230 V. If the neutral breaks, phase voltages become unequal and appliances can be damaged.

### Solved examples

**Example 8 (star load).** A balanced star load of (8 + j6) Ω per phase is connected to 400 V, 3-phase, 50 Hz. Find phase voltage, current, pf and power.
- V_ph = 400/√3 = **230.9 V**; |Z| = 10 Ω; I_ph = I_L = **23.09 A**; pf = 8/10 = **0.8 lagging**.
- P = √3 × 400 × 23.09 × 0.8 = **12.8 kW** (check: 3 × 23.09² × 8 = 12.8 kW).

**Example 9 (same load in delta).** V_ph = 400 V; I_ph = 400/10 = **40 A**; I_L = √3 × 40 = **69.3 A**.
- P = 3 × 40² × 8 = **38.4 kW**, three times the star value.

**Example 10 (two-wattmeter).** The two wattmeters read W₁ = 5 kW and W₂ = 2 kW on a balanced load. Find total power and power factor.
- P = 5 + 2 = **7 kW**.
- tan φ = √3 (5 − 2)/7 = 0.742; φ = 36.6°; **pf = 0.80 lagging**.

### Key points to remember

- 120° displacement; R-Y-B sequence; sum of balanced voltages = 0.
- Star: V_L = √3 V_ph, I_L = I_ph. Delta: V_L = V_ph, I_L = √3 I_ph.
- P = √3 V_L I_L cos φ; delta takes 3 × star power for the same Z.
- Two-wattmeter: P = W₁ + W₂; tan φ = √3(W₁ − W₂)/(W₁ + W₂); readings at pf 1, 0.5 and below.
- Neutral carries unbalance current.

### Important questions

1. State the advantages of three-phase systems over single-phase. Explain the generation of balanced three-phase voltages.
2. Derive the relation between line and phase voltages and currents in star and delta connections, with phasor diagrams.
3. Derive the expression for power in a balanced three-phase circuit. Solve a star or delta load numerical.
4. Explain the two-wattmeter method of measuring three-phase power and derive the expression for power factor.
5. What is the role of the neutral wire? Discuss the effect of power factor on wattmeter readings.

---

## Unit 4: Magnetic Circuits and Transformers

### 2-mark definitions

- **Magnetic flux (Φ):** the total number of magnetic lines of force through an area; unit weber (Wb).
- **Flux density (B):** flux per unit area, B = Φ/A; unit tesla (T = Wb/m²).
- **Magnetic field strength (H):** H = NI/l, in ampere-turns per metre; B = µ₀ µ_r H.
- **MMF (magnetomotive force):** the force that drives flux through a magnetic circuit, F = NI (ampere-turns).
- **Reluctance (S):** opposition of a magnetic circuit to flux, S = l/(µ₀ µ_r A) (AT/Wb); analogous to resistance.
- **Faraday's laws:** an EMF is induced when the flux linking a coil changes, and its magnitude is e = N dΦ/dt.
- **Lenz's law:** the induced EMF opposes the change of flux that produces it (the minus sign in e = −N dΦ/dt).
- **Self-inductance (L):** the property of a coil by which a changing current in it induces an EMF in itself; L = NΦ/I = N²/S (henry).
- **Mutual inductance (M):** the property by which a changing current in one coil induces an EMF in a nearby coil; M = k√(L₁L₂).
- **Transformer:** a static device that transfers AC power from one circuit to another by mutual induction, changing voltage and current levels at the same frequency.

### Core concepts

**Electric vs magnetic circuit analogy**

| Electric | Magnetic |
|---|---|
| EMF (V) | MMF (NI, AT) |
| Current I | Flux Φ |
| Resistance R = ρl/A | Reluctance S = l/(µA) |
| Conductivity | Permeability |
| I = V/R | Φ = MMF/S |

**Differences:** flux does not "flow" (no energy is spent maintaining it), there is no perfect magnetic insulator (leakage flux), and permeability changes with flux (saturation).

**Series magnetic circuit:** total reluctance is the sum of reluctances of the parts (iron and air gap); total AT = Σ H l. An air gap needs far more ampere-turns than the iron because µ_r = 1.

**Single-phase transformer:**
- **Construction:** laminated silicon-steel core (reduces eddy currents) with primary and secondary windings; core type or shell type.
- **Working principle:**
  1. AC in the primary produces an alternating flux in the core.
  2. This flux links the secondary and induces an EMF by mutual induction.
  3. The same flux induces a back EMF in the primary.
- A transformer does not work on DC (no change of flux).

**EMF equation:** with flux Φ = Φ_m sin ωt, the RMS EMF is **E = 4.44 f N Φ_m**. So E₁ = 4.44 f N₁ Φ_m and E₂ = 4.44 f N₂ Φ_m.

**Ideal transformer:** no losses, no leakage, infinite permeability.
- **Turns ratio:** K = N₂/N₁ = E₂/E₁ = V₂/V₁ = I₁/I₂.
- **Power:** V₁I₁ = V₂I₂ (input VA = output VA).
- **Step-up** if K > 1; **step-down** if K < 1.

**Equivalent circuit (approximate):**
- **Shunt branch:** R₀ (core loss) and X₀ (magnetizing) carry the no-load current I₀.
- **Series elements:** R₀₁ = R₁ + R₂/K² and X₀₁ = X₁ + X₂/K², referred to the primary.

**Losses:**
- **Core (iron) losses:** hysteresis (∝ f B_m^1.6) and eddy current (∝ f² B_m² t²). Constant at constant voltage and frequency; found by the open-circuit test.
- **Copper losses:** I²R in windings; vary with the square of load; found by the short-circuit test.

**Efficiency:**
- η = output/(output + core loss + copper loss).
- At a fraction x of full load: η = x S cos φ / (x S cos φ + P_i + x² P_cu).
- **Maximum efficiency** occurs when copper loss = core loss, at x = √(P_i/P_cu,FL).

### Solved examples

**Example 11 (magnetic circuit).** An iron ring has mean length 1 m, cross-section 10 cm² and µ_r = 1,000, with 500 turns carrying 2 A. Find MMF, reluctance, flux and B.
- MMF = 500 × 2 = **1,000 AT**.
- S = 1/(4π × 10⁻⁷ × 1,000 × 10 × 10⁻⁴) = **7.96 × 10⁵ AT/Wb**.
- Φ = 1,000/7.96 × 10⁵ = **1.257 mWb**; B = Φ/A = **1.257 T**.

**Example 12 (transformer EMF equation).** A 230/115 V, 50 Hz transformer has 500 primary turns. Find the maximum flux and the secondary turns.
- Φ_m = 230/(4.44 × 50 × 500) = **2.07 mWb**.
- N₂ = 500 × 115/230 = **250 turns**.

**Example 13 (efficiency).** A 10 kVA transformer has core loss 100 W and full-load copper loss 150 W. Find the efficiency at full load and half load at 0.8 pf, and the load for maximum efficiency.
- Full load: output 8,000 W; η = 8,000/(8,000 + 100 + 150) = **96.97%**.
- Half load: output 4,000 W; Cu loss = 0.25 × 150 = 37.5 W; η = 4,000/(4,000 + 100 + 37.5) = **96.68%**.
- Maximum efficiency at x = √(100/150) = **0.816**, about **8.16 kVA**.

### Key points to remember

- B = Φ/A; H = NI/l; B = µ₀µ_r H; S = l/µA; Φ = NI/S.
- Faraday e = N dΦ/dt; Lenz's minus sign; L = N²/S; M = k√(L₁L₂).
- E = 4.44 f N Φ_m; K = N₂/N₁ = V₂/V₁ = I₁/I₂.
- Core loss (constant: hysteresis, eddy) vs copper loss (∝ load²).
- η formula; maximum efficiency when Cu loss = core loss.

### Important questions

1. Compare electric and magnetic circuits. Solve a series magnetic circuit numerical (with or without air gap).
2. State Faraday's and Lenz's laws. Explain self and mutual inductance and the coefficient of coupling.
3. Explain the construction and working principle of a single-phase transformer and derive its EMF equation.
4. Explain the ideal transformer and draw the approximate equivalent circuit.
5. Explain transformer losses and efficiency; derive the condition for maximum efficiency and solve a numerical.

---

## Unit 5: Electrical Machines and Emerging Electrical Systems

### 2-mark definitions

- **DC motor:** a machine that converts DC electrical energy into mechanical energy using the force on a current-carrying conductor in a magnetic field (F = BIl).
- **Back EMF (E_b):** the EMF induced in a rotating motor armature that opposes the applied voltage: E_b = V − I_a R_a = PΦZN/(60A).
- **Torque of a DC motor:** T = 0.159 PΦZ I_a/A, so T ∝ Φ I_a; also T = E_b I_a/ω.
- **BLDC motor:** a brushless DC motor with permanent magnets on the rotor and electronically commutated stator windings, using Hall sensors or sensorless control.
- **Rotating magnetic field (RMF):** a magnetic field of constant magnitude rotating at synchronous speed, produced by three-phase currents in three windings 120° apart.
- **Synchronous speed:** N_s = 120 f/P (rpm).
- **Slip:** the relative speed of the rotor with respect to the rotating field: s = (N_s − N)/N_s.
- **Solar PV cell:** a p-n junction that converts sunlight directly into electricity by the photovoltaic effect.
- **Fill factor (FF):** FF = P_max/(V_oc × I_sc); a measure of how "square" the I-V curve is (0.7–0.85 for good cells).
- **Electrical safety:** practices and devices (earthing, fuses, MCBs, RCCBs, insulation) that protect people and equipment from shock, fire and damage.

### Core concepts

**DC motor:**
- **Principle:** a current-carrying conductor in a magnetic field experiences a force (Fleming's left-hand rule). The commutator reverses current in the conductors so the torque stays in one direction.
- **Voltage equation:** V = E_b + I_a R_a.
- **Speed:** N ∝ E_b/Φ = (V − I_a R_a)/Φ.
- **Significance of back EMF:** it makes the motor self-regulating. If the load increases, the speed falls, E_b falls, and I_a rises to give more torque. At starting E_b = 0, so a starter (series resistance) limits the large current.
- **Speed control concept:**
  - Flux (field) control: weakening the field raises speed above base.
  - Armature voltage or resistance control: below base speed.
  - Modern method: PWM drives.

**Types of DC motors and applications**

| Type | Field connection | Characteristic | Applications |
|---|---|---|---|
| Shunt | Field in parallel with armature | Nearly constant speed | Lathes, fans, blowers, conveyors |
| Series | Field in series with armature | High starting torque; speed rises dangerously at no load (never start without load) | Traction (trains), cranes, hoists |
| Compound | Both series and shunt fields | Combination: good starting torque with limited no-load speed | Rolling mills, presses, elevators |
| Permanent magnet | Magnets give the field | Small, efficient | Toys, wipers, small appliances |

**BLDC motor:**
- **Construction:** permanent-magnet rotor; stator windings switched by an electronic controller (inverter) using rotor position from Hall sensors.
- **Advantages:** no brushes (no sparking, little maintenance), high efficiency, high power density, quiet, good speed control, long life.
- **Applications:** ceiling fans (energy-efficient BLDC fans use about 28–35 W versus 75 W), computer cooling fans, hard disks, drones, e-bikes and EVs, washing machines.

**Three-phase induction motor:**
- **Construction:** stator with three-phase winding; rotor either squirrel-cage (bars shorted by end rings) or slip-ring (wound).
- **Working:**
  1. Three-phase currents create a rotating magnetic field at N_s.
  2. The field cuts the rotor conductors and induces currents.
  3. These currents produce torque (Lenz's law: the rotor tries to catch the field).
  4. The rotor never reaches N_s (no relative motion would mean no induced current), so slip is always present (typically 2–6% at full load).
- **Rotor frequency:** f_r = s f.
- **Torque:** depends on slip; maximum at a slip set by rotor resistance; nearly constant speed in the normal range.
- **Applications:** the workhorse of industry (pumps, compressors, fans, lifts, conveyors, machine tools); about 70% of industrial electrical load.

**Solar PV:**
- **Single-diode model:** a current source I_ph (proportional to sunlight) in parallel with a diode, plus series resistance R_s and shunt resistance R_sh. I = I_ph − I₀[e^((V + IR_s)/(nV_T)) − 1] − (V + IR_s)/R_sh.
- **I-V characteristic:** current is nearly constant (about I_sc) up to the knee, then falls to zero at V_oc.
- **P-V characteristic:** power rises with voltage, peaks at the maximum power point (V_mp, I_mp), then falls. MPPT controllers keep the panel at this point.
- **Effect of conditions:** more irradiance increases I_sc (current); higher temperature lowers V_oc (power falls about 0.4% per °C for Si).
- **Cell to module:** a cell gives about 0.5–0.6 V; 36, 60 or 72 cells are connected in series to make a module.
- **Efficiency:** η = P_max/(irradiance × area).

**Electrical safety in the laboratory:**
- Never work on live circuits; switch off and verify with a tester.
- Use insulated tools; keep hands and floor dry; wear rubber-soled shoes.
- Check correct ratings of wires, fuses and MCBs; do not overload sockets.
- Earth all metal bodies; use RCCBs (30 mA) for shock protection.
- Connect the circuit fully before switching on and get it checked by the instructor; switch off before changing connections.
- Discharge capacitors before touching.
- **In case of shock:** switch off the supply first or separate the person using a dry insulating object; do not touch them directly; give first aid (CPR) and call for medical help.
- **Electrical fire:** use a CO₂ or dry-powder extinguisher, never water.

### Solved examples

**Example 14 (DC motor).** A 220 V DC motor has R_a = 0.5 Ω and takes I_a = 20 A at 1,000 rpm. Find back EMF and torque.
- E_b = 220 − 20 × 0.5 = **210 V**.
- ω = 2π × 1,000/60 = 104.72 rad/s; T = E_b I_a/ω = 210 × 20/104.72 = **40.1 N·m**.

**Example 15 (induction motor slip).** A 4-pole, 50 Hz induction motor runs at 1,440 rpm. Find N_s, slip and rotor frequency.
- N_s = 120 × 50/4 = **1,500 rpm**; s = (1,500 − 1,440)/1,500 = **0.04 (4%)**; f_r = 0.04 × 50 = **2 Hz**.

**Example 16 (solar module).** A 36-cell module has V_oc = 21.6 V, I_sc = 6.1 A, V_mp = 17.5 V and I_mp = 5.7 A. Find P_max and fill factor; also find the efficiency if the module area is 0.65 m² at 1,000 W/m².
- P_max = 17.5 × 5.7 = **99.75 W**; FF = 99.75/(21.6 × 6.1) = **0.757**.
- η = 99.75/(1,000 × 0.65) = **15.3%**.

### Key points to remember

- DC motor: V = E_b + I_a R_a; N ∝ E_b/Φ; T ∝ Φ I_a; T = E_b I_a/ω; starter needed.
- Shunt (constant speed), series (high starting torque, never no-load), compound.
- BLDC: electronic commutation; fans, drones, EVs.
- Induction motor: RMF, N_s = 120f/P, s = (N_s − N)/N_s, f_r = sf; squirrel cage vs slip ring.
- Solar PV: single-diode model, I-V and P-V curves, MPP, FF, temperature and irradiance effects.
- Lab safety rules and shock first aid.

### Important questions

1. Explain the principle and working of a DC motor. What is the significance of back EMF? Derive the torque equation.
2. Classify DC motors and give their characteristics and applications. Explain the concept of speed control.
3. Explain the construction, working and applications of a BLDC motor.
4. Explain how a rotating magnetic field is produced and the working of a three-phase induction motor. Define slip and solve a numerical.
5. Explain the single-diode model and the I-V and P-V characteristics of a solar PV cell. List electrical safety rules in the laboratory.

---

## Last-hour checklist

- [ ] Ohm, power, energy (₹1,260); series-parallel (5 A, 3 A); dividers; KCL, KVL; mesh (1.923 A, 0.385 A); nodal; Thevenin (9 V, 5 Ω, 0.9 A, 4.05 W).
- [ ] RMS 229.8 V, average 206.9 V, form factor 1.11; R, L, C table; RL circuit (50 Ω, 4.6 A, 0.6, 634.8 W, 846.4 VAR, 1,058 VA); power triangle; pf correction (6.92 kVAR, 416 µF); wattmeter.
- [ ] Three-phase advantages; star and delta table; star load (23.09 A, 12.8 kW); delta (69.3 A, 38.4 kW); two-wattmeter (7 kW, 0.80); neutral.
- [ ] Magnetic analogy; ring (1.257 mWb, 1.257 T); Faraday, Lenz, L, M; transformer construction and working; E = 4.44fNΦ_m (2.07 mWb, 250 turns); losses; efficiency (96.97%, 96.68%, max at 0.816).
- [ ] DC motor (E_b 210 V, 40.1 N·m); types table; BLDC; induction motor (1,500 rpm, 4%, 2 Hz); solar PV (99.75 W, FF 0.757, 15.3%); lab safety.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Fundamentals of Electric Circuits | Charles K. Alexander, Matthew N. O. Sadiku | McGraw Hill | [WorldCat](https://search.worldcat.org/search?q=Fundamentals+of+Electric+Circuits+Alexander+Sadiku) |
| 2 | Electrical and Electronic Technology | Edward Hughes | Pearson | [WorldCat](https://search.worldcat.org/search?q=Hughes+Electrical+and+Electronic+Technology) |
| 3 | Basic Electrical Engineering | D. C. Kulshreshtha | McGraw Hill | [WorldCat](https://search.worldcat.org/search?q=Basic+Electrical+Engineering+Kulshreshtha) |
| 4 | Fundamentals of Electrical Engineering (2nd edition) | B. Dwivedi, A. Tripathi | Wiley India | [WorldCat](https://search.worldcat.org/search?q=Fundamentals+of+Electrical+Engineering+Dwivedi+Tripathi) |

**Syllabus source:** [AKTU B.Tech 1st year CSE stream course structure and syllabus, 2026-27 (official PDF)](https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf)

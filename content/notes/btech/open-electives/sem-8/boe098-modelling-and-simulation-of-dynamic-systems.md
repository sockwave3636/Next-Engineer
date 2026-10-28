---
program: btech
branches: [all]
semester: 8
code: BOE098
name: Modelling and Simulation of Dynamic Systems
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-IV, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf
units:
  - Modelling Concepts, MATLAB and Introduction to Bond Graphs
  - Bond Graph Models of Physical Systems
  - Combined Multi-Energy Systems and Nonlinearity
  - System Response, Transfer Functions, State Variables and Frequency Response
  - Simulink Simulation, Validation, Parameter Estimation and System Identification
---

# BOE098 Modelling and Simulation of Dynamic Systems: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: theory, bond graph rules, and comparison tables.
3. **Solved examples**: the numericals examiners set (bond graph to state equations, mass-spring-damper response, transfer functions, Bode plots, pendulum, Euler integration, least-squares fitting).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (what a model is, types, MATLAB basics, bond graph elements, power variables, causality) and Unit 2 (bond graphs of mechanical, electrical, thermal, hydraulic and pneumatic systems).
- **Afternoon (3 hours):** Unit 3 (transformers and gyrators linking energy domains, DC motor, rack and pinion, hydraulic actuator, nonlinear elements) and Unit 4 (first and second order responses, transfer function, block diagrams, state space, Bode plot).
- **Evening (2 hours):** Unit 5 (Simulink, pendulum and mechanisms, validation, parameter estimation, system identification, optimization), then the "Last-hour checklist".
- **In the exam:** draw the bond graph with causal strokes, number the bonds, and write state equations from the I and C elements. This is the signature question of this paper and often appears in two units.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Modelling Concepts, MATLAB and Introduction to Bond Graphs

### 2-mark definitions

- **System:** a set of interacting components with a boundary, inputs and outputs.
- **Dynamic system:** a system whose present output depends on past inputs (it has memory, described by differential equations).
- **Model:** a simplified representation of a real system used to understand or predict its behaviour.
- **Simulation:** running a model (usually on a computer) over time to see how the system behaves under given inputs.
- **Lumped-parameter model:** a model in which properties are concentrated at points (a mass, a spring), giving ordinary differential equations.
- **Distributed-parameter model:** properties spread over space (a long beam, a transmission line), giving partial differential equations.
- **Bond graph:** a graphical model that shows the flow of power between system elements using bonds, each carrying an effort and a flow, whose product is power.
- **Effort and flow:** the two power variables of a bond. Effort is force, voltage, pressure or temperature; flow is velocity, current, volume flow rate or entropy (heat) flow. Power = effort × flow.
- **Causality:** the cause-effect direction on a bond, telling which element sets the effort and which sets the flow; shown by a short stroke at one end of the bond.
- **Junction:** a power-conserving connection. In a 0-junction all efforts are equal and flows add to zero; in a 1-junction all flows are equal and efforts add to zero.

### Core concepts

**Why model and simulate:**
- Cheaper and safer than building prototypes.
- Lets you test "what if" cases.
- Supports controller design.
- Helps you understand the system.
- Used for training (simulators).
- Allows optimization before manufacturing.

**Types of models**

| Basis | Types |
|---|---|
| Form | Physical (scale model), mathematical, graphical (block diagram, bond graph), computer |
| Time | Static vs dynamic; continuous vs discrete |
| Parameters | Lumped vs distributed |
| Linearity | Linear vs nonlinear |
| Randomness | Deterministic vs stochastic |
| Variation | Time-invariant vs time-varying |

**Modelling steps:**
1. Define the purpose and the system boundary.
2. Make assumptions (lumping, linear spring, no friction).
3. Draw a schematic.
4. Write the physical laws (Newton, Kirchhoff, conservation).
5. Derive the equations (or a bond graph).
6. Solve or simulate.
7. Validate against experiments.
8. Refine.

**MATLAB basics for modelling:**
- Matrices and vectors (`A = [1 2; 3 4]`), arithmetic and plotting (`plot`, `subplot`).
- Control functions:
  - `tf` (transfer function), e.g. `G = tf(100, [1 10 0])`.
  - `ss` (state-space model).
  - `step`, `impulse`, `bode`, `rlocus`, `lsim`.
- ODE solvers: `ode45` (non-stiff), `ode15s` (stiff).
- Writing script and function files.

**Power variables and energy variables across domains**

| Domain | Effort e | Flow f | Momentum p = ∫e dt | Displacement q = ∫f dt |
|---|---|---|---|---|
| Mechanical (translation) | Force F | Velocity v | Momentum | Displacement x |
| Mechanical (rotation) | Torque τ | Angular velocity ω | Angular momentum | Angle θ |
| Electrical | Voltage V | Current i | Flux linkage λ | Charge q |
| Hydraulic | Pressure P | Volume flow Q | Pressure momentum | Volume V |
| Thermal (pseudo) | Temperature T | Heat flow rate Q̇ (or entropy flow) | n/a | Heat |

**Bond graph elements:**
- **Sources:** Se (effort source: force, battery, pressure supply); Sf (flow source: velocity input, current source, pump).
- **One-port passive elements:**
  - R (resistor, dissipates energy: damper, electrical resistor, orifice), e = R f.
  - C (capacitor, stores potential energy: spring, capacitor, tank), e = q / C.
  - I (inertia, stores kinetic energy: mass, inductor, fluid inertance), f = p / I.
- **Two-port elements:**
  - TF (transformer, e₁ = m e₂, f₂ = m f₁: lever, gear, rack and pinion, piston area).
  - GY (gyrator, e₁ = r f₂, e₂ = r f₁: DC motor, gyroscope).
- **Junctions:** 0 (common effort, parallel electrical, series mechanical spring) and 1 (common flow, series electrical, mass with forces acting on it).

**Causality rules:**
- **Se** always sets effort (stroke away from the source, at the far end).
- **Sf** sets flow (stroke at the source end).
- **I preferred (integral causality):** the stroke is at the end away from the I element (effort in, flow out). This means f = (1/I)∫e dt.
- **C preferred (integral causality):** the stroke is at the C end (flow in, effort out). This means e = (1/C)∫f dt.
- **R** is indifferent and takes whatever is left.
- **0-junction:** exactly one bond brings effort in (only one stroke at the junction).
- **1-junction:** exactly one bond brings flow in (only one bond without a stroke at the junction end).
- **TF:** one stroke at the TF. **GY:** strokes on both or neither end.
- Elements forced into derivative causality do not add independent state variables.

**Sequential causal assignment procedure (SCAP):** assign sources first and spread through junctions; then assign I and C in integral causality one by one and spread; then assign R; finally resolve leftover bonds. The number of independent states equals the number of I and C elements in integral causality.

### Solved examples

**Example 1 (series RLC bond graph).** A voltage source E drives a series circuit of R, L and C. Draw the bond graph and write the state equations.
- All elements carry the same current, so they hang from one **1-junction**: Se:E → 1, with bonds to R, I:L and C:C.
- Causality: Se sets effort into 1. I:L takes integral causality and sets the common flow i = p/L. Then R and C receive flow.
- States: p (flux linkage in L) and q (charge on C).
- ṗ = E − R (p/L) − q/C
- q̇ = p/L
- These are the familiar L di/dt + R i + q/C = E and i = dq/dt.

**Example 2 (mass-spring-damper bond graph).** A force F acts on a mass m attached to a spring k and damper b connected to a wall.
- The mass velocity v is shared by all three, so use a **1-junction**: Se:F, I:m, C:1/k, R:b.
- States: p (momentum of m) and x (spring deflection).
- ṗ = F − k x − b (p/m)
- ẋ = p/m
- This is m ẍ + b ẋ + k x = F.

### Key points to remember

- Power = effort × flow; know the domain table.
- Elements: Se, Sf, R, C, I, TF, GY, 0- and 1-junctions.
- 0-junction: common effort, flows sum to zero. 1-junction: common flow, efforts sum to zero.
- Integral causality: I gets effort in, C gets flow in. States = p on each I, q on each C.
- MATLAB: tf, ss, step, bode, ode45.

### Important questions

1. What is a model? Classify models and explain the steps in modelling a dynamic system.
2. Explain bond graph elements, power variables and junctions with a table of analogies across energy domains.
3. What is causality in bond graphs? State the causality rules and the sequential causal assignment procedure.
4. Draw the bond graph of a series RLC circuit (or a mass-spring-damper) and derive its state equations.
5. Explain the basic MATLAB commands used in modelling and simulation.

---

## Unit 2: Bond Graph Models of Physical Systems

### 2-mark definitions

- **Mechanical translational system:** masses, springs and dampers moving in a straight line; mass is I, spring is C (compliance 1/k), damper is R.
- **Mechanical rotational system:** rotating inertias J (I), torsional springs (C), rotary dampers (R).
- **Electrical system:** inductors (I), capacitors (C), resistors (R), voltage sources (Se), current sources (Sf).
- **Hydraulic resistance:** the pressure drop per unit flow through a pipe or orifice, R = ΔP / Q (linear for laminar flow).
- **Hydraulic capacitance:** the change in stored volume per unit pressure change; for an open tank C = A / (ρ g).
- **Hydraulic inertance:** the pressure needed per unit rate of change of flow in a pipe, I = ρ L / A.
- **Thermal resistance:** temperature difference per unit heat flow rate, R = ΔT / Q̇ (R = L/(kA) for conduction).
- **Thermal capacitance:** heat stored per degree of temperature rise, C = m c.
- **Pseudo bond graph:** a bond graph in which effort × flow is not power (temperature × heat flow), used for thermal systems for convenience.
- **Pneumatic capacitance:** C = V / (n R T) for a gas volume V at absolute temperature T (gas compressibility).

### Core concepts

**Method for mechanical systems:**
1. Mark a 1-junction for each distinct velocity (each mass, each free point).
2. Put a 0-junction between two 1-junctions wherever a spring or damper is connected between two velocities (because they see the relative velocity).
3. Attach I, C, R and sources.
4. Remove the ground (zero velocity) junction and simplify (a junction with only two bonds can be removed).
5. Assign causality and write the equations.

**Method for electrical circuits:**
1. Mark a 0-junction for each distinct node voltage.
2. Put a 1-junction for each element between two nodes (the element's current, with the voltage difference across it).
3. Attach elements.
4. Remove the ground node and simplify.

**Mechanical vs electrical analogy:**
- **Force-voltage analogy:** mass ↔ inductance, damper ↔ resistance, spring ↔ 1/capacitance.
- **Force-current analogy:** mass ↔ capacitance, damper ↔ 1/R, spring ↔ 1/L.
- Bond graphs follow the force-voltage (effort-effort) convention.

**Hydraulic systems:**
- **Elements:** pumps (Sf for a positive-displacement pump at fixed speed, Se for a pressure source), pipes (R and I), tanks and accumulators (C), valves (nonlinear R, Q = Cd A √(2ΔP/ρ)), and cylinders (TF with modulus area A between pressure-flow and force-velocity).
- **Tank level model:** inflow into a tank with outlet resistance. Bond graph is Sf → 0 (common pressure) with C (tank) and R (outlet). The state equation is V̇ = Q_in − (V/C)/R.

**Thermal systems:**
- **Thermal elements:** C (heat capacity), R (conduction, convection, radiation, which is nonlinear).
- No thermal inertance exists (heat does not have inertia), so thermal systems cannot oscillate on their own.
- **Example:** a room heated by a heater. Sf (heater) → 0 (room temperature) with C (room air and walls) and R to ambient (Se).

**Pneumatic systems:**
- Like hydraulics, but the gas is compressible, so capacitance is large and pressure-dependent.
- Restrictions are nonlinear (choked flow).
- Pseudo bond graphs often use pressure and mass flow rate.

**Comparison of element values across domains**

| Element | Mechanical | Electrical | Hydraulic | Thermal |
|---|---|---|---|---|
| R | Damper b (N·s/m) | Resistor R (Ω) | Pipe or orifice R = ΔP/Q | R = ΔT/Q̇ |
| C | Spring 1/k | Capacitor C | Tank A/(ρg) | m c |
| I | Mass m | Inductor L | Inertance ρL/A | none |

### Solved examples

**Example 3 (two-mass system).** Mass m₁ is connected to a wall by spring k₁, and to mass m₂ by spring k₂ and damper b. A force F acts on m₂. Build the bond graph and find the states.
- 1-junctions: 1(v₁) with I:m₁, and 1(v₂) with I:m₂ and Se:F.
- Between wall and m₁: spring k₁ sees v₁ only, so C:1/k₁ hangs directly on 1(v₁).
- Between m₁ and m₂: a 0-junction carrying (v₂ − v₁) with its own 1-junction for spring k₂ and damper b (both see the same relative velocity).
- States: p₁, p₂, x₁ (deflection of k₁), x₂ (deflection of k₂), so it is a **4th-order system**.
- ṗ₁ = −k₁x₁ + k₂x₂ + b(p₂/m₂ − p₁/m₁)
- ṗ₂ = F − k₂x₂ − b(p₂/m₂ − p₁/m₁)
- ẋ₁ = p₁/m₁
- ẋ₂ = p₂/m₂ − p₁/m₁

**Example 4 (tank capacitance).** An open water tank has area 2 m². Find its hydraulic capacitance.
- C = A / (ρ g) = 2 / (1,000 × 9.81) = **2.04 × 10⁻⁴ m³/Pa**. Each pascal of extra bottom pressure stores 0.204 litre more water.

**Example 5 (thermal time constant).** A 0.5 kg aluminium block (c = 900 J/kg·K) cools to air through a thermal resistance of 2 K/W. τ = R C = 2 × (0.5 × 900) = **900 s (15 min)**.

### Key points to remember

- Mechanical: 1-junction per velocity, 0-junction for relative velocity; electrical: 0-junction per node, 1-junction per branch element.
- Hydraulic R, C = A/(ρg), I = ρL/A; cylinder = TF (area); valve = nonlinear R.
- Thermal: R and C only, pseudo bond graph, no oscillation.
- Order of system = number of I and C in integral causality.

### Important questions

1. Explain the procedure for building bond graphs of mechanical systems. Draw the bond graph of a two-mass system and derive the state equations.
2. Explain the procedure for electrical circuits. Draw the bond graph for an RLC network with two loops.
3. Model a hydraulic system (tank with pipe, or pump with cylinder) using bond graphs.
4. Explain bond graph modelling of thermal systems. Why are they called pseudo bond graphs?
5. Compare the R, C and I elements across mechanical, electrical, hydraulic, thermal and pneumatic domains.

---

## Unit 3: Combined Multi-Energy Systems and Nonlinearity

### 2-mark definitions

- **Multi-energy (mechatronic) system:** a system in which power flows between different energy domains (electrical, mechanical, hydraulic, thermal).
- **Transformer (TF) element:** a power-conserving two-port with e₁ = m e₂ and f₂ = m f₁, linking effort to effort and flow to flow (gears, levers, pulleys, piston, rack and pinion).
- **Gyrator (GY) element:** a power-conserving two-port with e₁ = r f₂ and e₂ = r f₁, linking effort to flow (DC motor: torque = K i, back emf = K ω).
- **Modulated TF or GY (MTF, MGTF):** a TF or GY whose modulus changes with a state, as in a crank or a variable-displacement pump.
- **Rotary-translatory system:** a system converting rotation into translation (rack and pinion, lead screw, cable drum).
- **Electromechanical system:** a system linking electrical and mechanical energy (motor, generator, solenoid, loudspeaker).
- **Hydromechanical system:** a system linking hydraulic and mechanical energy (hydraulic cylinder, hydraulic motor, pump).
- **Linear system:** a system obeying superposition (additivity and homogeneity).
- **Nonlinear system:** a system that does not obey superposition (square-law damping, saturation, friction, backlash).
- **Linearization:** approximating a nonlinear function by its tangent at an operating point, using the first term of a Taylor series.

### Core concepts

**Rotary-translatory systems:**
- **Rack and pinion of radius r:** a TF with v = r ω and F = τ / r.
- **Lead screw of lead l:** v = (l / 2π) ω.
- **Cable drum:** like the rack and pinion.
- **Combined inertia reflected through a TF:** J_eq = J + m r².

**Electromechanical system (armature-controlled DC motor):**
- **Electrical side:** Se:V → 1(i) with R:Ra and I:La.
- **GY** with constant K, because torque τ = K i and back emf e_b = K ω.
- **Mechanical side:** 1(ω) with I:J and R:b, and the load.
- States: λ = La i and h = J ω.
  - λ̇ = V − Ra (λ/La) − K (h/J)
  - ḣ = K (λ/La) − b (h/J) − τ_L
- **Transfer function:** ω(s)/V(s) = K / [(La s + Ra)(J s + b) + K²].
- Other examples: loudspeaker (GY via B l), solenoid actuator (nonlinear, inductance depends on position).

**Hydromechanical systems:**
- **Hydraulic cylinder:** a TF of modulus A (F = P A, Q = A v).
- **Hydraulic motor:** a TF of displacement D (τ = D P, Q = D ω).
- **Pump driven by a motor:** a TF from shaft speed to flow.
- **Model of a hydraulic actuator system:** pump (Sf) → 0 (pressure, with C from oil compressibility V/β and R leakage) → TF:A → 1 (piston velocity, with I:m, R friction, C load spring).
- **Bulk modulus β:** oil capacitance C = V / β.

**Nonlinearities:**
- **Square-law damping (aerodynamic drag, orifice flow):** F = c v |v|.
- **Coulomb friction:** constant magnitude, opposes motion, with stiction.
- **Backlash and dead zone** in gears.
- **Saturation** (amplifier limits, magnetic saturation).
- **Hysteresis.**
- **Nonlinear springs** (hardening or softening).
- **Geometric nonlinearity** (pendulum sin θ, crank-slider).
- **Effects of nonlinearity:**
  - Superposition fails.
  - Response depends on amplitude.
  - Limit cycles may appear.
  - Multiple equilibria may exist.
  - Jump phenomena may occur.

**Handling nonlinearity:**
- Simulate it directly (numerical integration handles nonlinear equations easily).
- Or linearize about an operating point, valid for small deviations: f(x) ≈ f(x₀) + f′(x₀)(x − x₀).
- For example, an orifice Q = k√ΔP linearizes to ΔQ = (k / (2√ΔP₀)) ΔP, which is a linear resistance R = 2√ΔP₀ / k.

### Solved examples

**Example 6 (reflected inertia).** A motor with rotor inertia J = 0.01 kg·m² drives a 20 kg load through a rack and pinion of radius 0.05 m. Find the equivalent inertia at the motor shaft.
- J_eq = J + m r² = 0.01 + 20 × 0.0025 = 0.01 + 0.05 = **0.06 kg·m²**.

**Example 7 (DC motor steady state).** A DC motor has Ra = 2 Ω, K = 0.1 N·m/A (= V·s/rad), b = 0.001 N·m·s/rad, no load, V = 12 V. Find steady speed.
- At steady state: V = Ra i + K ω and K i = b ω, so i = b ω / K = 0.01 ω.
- 12 = 2 × 0.01 ω + 0.1 ω = 0.12 ω, so **ω = 100 rad/s** (955 rpm) and i = 1 A.

**Example 8 (linearizing an orifice).** An orifice passes Q = 0.002 √ΔP m³/s (ΔP in Pa) at an operating point ΔP₀ = 10,000 Pa.
- Q₀ = 0.002 × 100 = 0.2 m³/s.
- dQ/dΔP = 0.002 / (2 × 100) = 1 × 10⁻⁵, so linear resistance R = **1 × 10⁵ Pa·s/m³**.

### Key points to remember

- TF: e₁ = m e₂, f₂ = m f₁ (gears, levers, racks, pistons). GY: e = r f (DC motor, loudspeaker).
- DC motor: two states (λ, h); ω/V = K / [(Las + Ra)(Js + b) + K²].
- Reflected inertia J + m r².
- Hydraulic: cylinder TF (A), motor TF (D), oil compressibility C = V/β.
- Nonlinearities: friction, backlash, saturation, square-law damping, sin θ; linearize with the Taylor series.

### Important questions

1. Explain TF and GY elements with examples from different energy domains.
2. Draw the bond graph of an armature-controlled DC motor driving a load and derive its state equations and transfer function.
3. Model a rotary-translatory system (rack and pinion or lead screw drive) with bond graphs.
4. Develop a bond graph model of a hydraulic actuator (pump, cylinder, load).
5. Distinguish linear and nonlinear systems. Explain common nonlinearities and how a nonlinear model is linearized.

---

## Unit 4: System Response, Transfer Functions, State Variables and Frequency Response

### 2-mark definitions

- **Transfer function:** the ratio of the Laplace transform of the output to that of the input, with all initial conditions zero.
- **Order of a system:** the highest power of s in the denominator of the transfer function (or the number of state variables).
- **Time constant (τ):** for a first-order system, the time to reach 63.2% of the final value after a step.
- **Natural frequency (ωn):** the frequency of oscillation of an undamped second-order system.
- **Damping ratio (ζ):** the ratio of actual damping to critical damping; ζ < 1 underdamped, ζ = 1 critical, ζ > 1 overdamped.
- **Peak overshoot (Mp):** the maximum amount the step response exceeds its final value, as a percentage.
- **Settling time (ts):** the time for the response to stay within 2% (or 5%) of the final value.
- **State variables:** the smallest set of variables that, with the input, completely determines the future behaviour of the system.
- **Frequency response:** the steady-state output of a linear system to sinusoidal inputs of different frequencies, given by G(jω).
- **Bode plot:** two graphs of a frequency response, magnitude in dB and phase in degrees, against log frequency.

### Core concepts

**First-order system:**
- τ ẏ + y = K u, so G(s) = K / (τ s + 1).
- **Step response:** y = K (1 − e^(−t/τ)), with 63.2% at τ, 86.5% at 2τ, 95% at 3τ, 98.2% at 4τ.
- **Examples:** RC circuit (τ = RC), thermal body (τ = RC), tank (τ = AR).

**Second-order system:**
- ÿ + 2ζωn ẏ + ωn² y = ωn² u, so G(s) = ωn² / (s² + 2ζωn s + ωn²).
- **For a mass-spring-damper:** ωn = √(k/m), ζ = b / (2√(km)).
- **Underdamped step response formulas:**
  - Damped frequency ωd = ωn√(1 − ζ²).
  - Peak time tp = π/ωd.
  - Mp = exp(−πζ/√(1 − ζ²)).
  - ts (2%) ≈ 4/(ζωn).
  - Rise time tr = (π − cos⁻¹ζ)/ωd.

**Transfer function from a bond graph:** write the state equations, take Laplace transforms, and solve for output over input. Alternatively, Mason's gain rule can be applied on the signal-flow version of the bond graph.

**Block diagrams:**
- **Reduction rules:**
  - Series: G₁G₂.
  - Parallel: G₁ + G₂.
  - Negative feedback: G / (1 + GH).
  - Moving a summing point or a take-off point past a block (compensate with G or 1/G).
- **Mason's gain formula:** T = Σ Pk Δk / Δ.

**State-space representation:**
- ẋ = A x + B u, y = C x + D u.
- From a bond graph the states are p on I elements and q on C elements.
- **TF from state space:** G(s) = C (sI − A)⁻¹ B + D.
- **Characteristic equation:** |sI − A| = 0; the eigenvalues of A are the poles.
- **Advantages:** handles multi-input multi-output (MIMO) systems, nonlinear and time-varying systems, initial conditions, and suits computer simulation.

**Frequency response and Bode plots:**
- **Building blocks:**
  - Gain K: 20 log K dB, 0° phase.
  - Integrator 1/s: −20 dB/decade, −90°.
  - First-order pole 1/(1 + s/ωc): 0 dB until the corner, then −20 dB/decade; phase goes from 0 to −90°, with −45° at the corner (3 dB down there).
  - Second-order pole: −40 dB/decade after ωn, with a resonant peak if ζ < 0.707.
- **Stability margins:**
  - Gain margin: how much gain can increase before the phase −180° point reaches 0 dB.
  - Phase margin: 180° + phase at the gain crossover frequency.

### Solved examples

**Example 9 (second-order response).** A mass-spring-damper has m = 2 kg, k = 200 N/m and b = 8 N·s/m. Find ωn, ζ, ωd, Mp, tp and ts for a step force.
- ωn = √(200/2) = **10 rad/s**.
- ζ = 8 / (2√(200 × 2)) = 8/40 = **0.2** (underdamped).
- ωd = 10 √(1 − 0.04) = **9.80 rad/s**.
- Mp = exp(−π × 0.2 / 0.98) = e^(−0.641) = **52.7%**.
- tp = π / 9.80 = **0.321 s**; ts (2%) = 4 / (0.2 × 10) = **2.0 s**.

**Example 10 (state space to transfer function).** For Example 9 with x₁ = position and x₂ = velocity: A = [0 1; −100 −4], B = [0; 0.5], C = [1 0].
- |sI − A| = s² + 4s + 100 (poles at −2 ± j9.80).
- G(s) = 0.5 / (s² + 4s + 100). The DC gain is 0.005 m/N, which is 1/k as expected.

**Example 11 (Bode plot).** Sketch the Bode magnitude of G(s) = 100 / (s(s + 10)) and find the gain crossover and phase margin.
- Write it as 10 / (s (1 + s/10)): an integrator with gain 10 and a corner at 10 rad/s.
- At ω = 1: |G| ≈ 10, so **20 dB**, falling at −20 dB/decade up to 10 rad/s, then −40 dB/decade.
- Exact gain crossover where |G| = 1: ω √(ω² + 100) = 100, so **ω ≈ 7.86 rad/s**.
- Phase = −90° − tan⁻¹(7.86/10) = −90° − 38.2° = −128.2°, so **phase margin ≈ 51.8°** (stable, well damped).

### Key points to remember

- First order: G = K/(τs + 1), 63.2% at τ.
- Second order: ωn = √(k/m), ζ = b/(2√(km)); Mp = e^(−πζ/√(1−ζ²)); tp = π/ωd; ts = 4/(ζωn).
- Block diagram rules and Mason's formula.
- State space: ẋ = Ax + Bu; G(s) = C(sI − A)⁻¹B + D; poles = eigenvalues of A.
- Bode: −20 dB/decade per pole, +20 per zero; −45° at corner; gain and phase margins.

### Important questions

1. Derive the step response of first-order and second-order systems. Define the time-domain specifications.
2. Obtain the transfer function of a system from its bond graph (or differential equations) and reduce a block diagram.
3. What are state variables? Obtain the state-space model of a mechanical or electrical system and derive its transfer function.
4. Explain frequency response and Bode plots. Sketch the Bode plot of a given transfer function and find the margins.
5. Solve a mass-spring-damper response numerical (ωn, ζ, Mp, tp, ts).

---

## Unit 5: Simulink Simulation, Validation, Parameter Estimation and System Identification

### 2-mark definitions

- **Simulink:** a MATLAB graphical environment for modelling and simulating dynamic systems by connecting blocks.
- **Numerical integration:** approximating the solution of differential equations step by step (Euler, Runge-Kutta).
- **Fixed-step vs variable-step solver:** fixed-step uses a constant time step; variable-step changes the step to keep the error within a tolerance (ode45 default).
- **Stiff system:** a system with very fast and very slow dynamics together, needing an implicit solver (ode15s) for efficiency.
- **Model validation:** checking that a model represents the real system accurately enough for its purpose, by comparing it with measured data.
- **Verification:** checking that the model has been implemented correctly in software (the equations are coded right).
- **Parameter estimation:** finding unknown parameter values (mass, damping, stiffness) by fitting the model output to measured data.
- **System identification:** building a model (often black-box) directly from input-output data.
- **Least squares:** choosing parameters to minimize the sum of squared errors between model and data.
- **Optimization:** finding the design or parameters that minimize (or maximize) an objective function, subject to constraints.

### Core concepts

**Simulink basics:**
- **Libraries:**
  - Sources: Step, Sine Wave, Constant, From Workspace.
  - Sinks: Scope, To Workspace, Display.
  - Continuous: Integrator, Transfer Fcn, State-Space.
  - Math: Gain, Sum, Product, Trigonometric Function.
  - Discontinuities: Saturation, Dead Zone, Backlash, Coulomb Friction.
  - Simscape: physical modelling.
- **Building a model from equations:** isolate the highest derivative, then use integrator chains. For m ẍ = F − b ẋ − k x, feed (F − b ẋ − k x)/m into an integrator to get ẋ, then another integrator to get x, with feedback through gains b and k.
- **Solver settings:** stop time, solver type, step size and tolerance.

**Numerical integration methods:**
- **Euler (first order):** y(n+1) = y(n) + h f(tn, yn). Simple, but needs small h.
- **Runge-Kutta 4:** uses four slope evaluations per step and is much more accurate.
- **Trade-offs:** step size vs accuracy and stability; explicit vs implicit methods for stiff systems.

**Simple pendulum:**
- **Equation:** θ̈ + (b/(mL²)) θ̇ + (g/L) sin θ = 0.
- **Nonlinear** because of sin θ.
- **Linearized for small angles:** sin θ ≈ θ, giving ωn = √(g/L) and period T = 2π√(L/g).
- **Simulink model:** integrator chain with a Trig block for sin θ. Compare the nonlinear and linear responses at large angles: the nonlinear period is longer.

**Planar mechanisms (four-bar, slider-crank):**
- **Kinematics:** loop-closure equations (vector loops), for example r₂ e^(jθ₂) + r₃ e^(jθ₃) = r₁ + r₄ e^(jθ₄). Solve numerically (Newton-Raphson) at each step for position, then differentiate for velocity and acceleration.
- **Dynamics:** bond graphs with modulated transformers (MTF), or Simscape Multibody.

**Model validation:**
- **Methods:**
  - Compare simulated and measured responses (step, frequency).
  - Use different data from those used for fitting (cross-validation).
  - Residual analysis (errors should be small and random).
  - Check physical sense (energy conservation, steady-state values).
  - Sensitivity analysis.
  - Face validity (expert review).
- **Error measures:** RMS error, percentage fit.

**Parameter estimation:**
- Choose the model structure from physics.
- Collect experimental data (step test, sine sweep).
- Define the error function (sum of squared errors).
- Use an optimization algorithm (least squares, gradient descent, Nelder-Mead, genetic algorithm) to adjust parameters.
- Check the confidence of the estimates.
- Tool: MATLAB Simulink Design Optimization (Parameter Estimator).
- **Linear least squares:** for y = Φθ, θ̂ = (ΦᵀΦ)⁻¹ Φᵀ y.

**System identification:**
- **Steps:**
  1. Design the experiment: input signal rich in frequencies (PRBS, chirp), and the sampling rate.
  2. Collect and pre-process the data (remove means and trends, filter).
  3. Choose a model structure (ARX, ARMAX, output error, Box-Jenkins, state space, transfer function).
  4. Estimate the parameters.
  5. Validate the model.
- **Tools:** MATLAB System Identification Toolbox (`tfest`, `arx`, `ssest`).
- **Model types:** white-box (physics), grey-box (physics with unknown parameters), black-box (data only).

**Optimization in modelling:**
- Find design parameters (spring stiffness, damping, controller gains) that minimize a cost (overshoot, settling time, energy) subject to constraints.
- **Methods:** gradient-based (`fmincon`), direct search, genetic algorithms, particle swarm.
- Simulation inside the optimization loop gives "simulation-based optimization".

### Solved examples

**Example 12 (Euler integration).** Solve ẏ = −2y, y(0) = 1, with Euler's method, h = 0.1, up to t = 0.2. Compare with the exact value.
- y(0.1) = 1 + 0.1 × (−2 × 1) = **0.8**.
- y(0.2) = 0.8 + 0.1 × (−1.6) = **0.64**.
- Exact y(0.2) = e^(−0.4) = **0.6703**. The error is 0.030 (4.5%); halving h roughly halves the error (first-order method).

**Example 13 (pendulum).** Find the natural frequency and period of a 1 m pendulum for small swings.
- ωn = √(9.81/1) = **3.13 rad/s**; T = 2π / 3.13 = **2.01 s**.
- For a 60° amplitude the true period is about 7% longer, which the nonlinear Simulink model shows.

**Example 14 (least-squares parameter estimate).** A spring is loaded with forces x = 1, 2, 3 N and the measured deflections are y = 2.1, 3.9, 6.0 mm. Fit y = a x (compliance a).
- a = Σxy / Σx² = (2.1 + 7.8 + 18.0) / (1 + 4 + 9) = 27.9 / 14 = **1.993 mm/N**.
- So stiffness k ≈ 1 / 1.993 = **0.502 N/mm** (502 N/m).

### Key points to remember

- Simulink: integrator chains, Scope, Gain, Sum, Transfer Fcn, nonlinear blocks; solver choice (ode45, ode15s for stiff).
- Euler y(n+1) = yn + h f; RK4 is more accurate.
- Pendulum: ωn = √(g/L), nonlinear sin θ; mechanisms via loop closure.
- Validation vs verification; residuals, cross-validation.
- Parameter estimation: least squares θ̂ = (ΦᵀΦ)⁻¹Φᵀy. System ID: experiment → data → structure → estimate → validate.
- Optimization: objective, constraints, fmincon, GA.

### Important questions

1. Explain how a dynamic system is simulated in Simulink. Build a Simulink model for a mass-spring-damper or a pendulum.
2. Explain numerical integration methods (Euler, RK4) and solver selection. Solve an Euler numerical.
3. Model and simulate a simple pendulum (linear and nonlinear) and a planar mechanism.
4. What is model validation? Distinguish validation and verification and explain validation techniques.
5. Explain parameter estimation, system identification and optimization in modelling, with steps and an example.

---

## Last-hour checklist

- [ ] Model types; modelling steps; MATLAB commands; effort and flow table; bond graph elements; junction rules; causality rules and SCAP; RLC and mass-spring-damper state equations.
- [ ] Mechanical and electrical bond graph procedures; two-mass system (4 states); hydraulic R, C = A/ρg (2.04 × 10⁻⁴), I; thermal pseudo bond graph (τ = 900 s); domain comparison table.
- [ ] TF and GY; DC motor (ω = 100 rad/s, i = 1 A); reflected inertia 0.06 kg·m²; hydraulic actuator; nonlinearities; linearizing an orifice (R = 10⁵).
- [ ] First and second order responses; ωn 10, ζ 0.2, Mp 52.7%, tp 0.321 s, ts 2 s; block diagram rules; state space and G(s) = C(sI − A)⁻¹B; Bode (crossover 7.86 rad/s, PM 51.8°).
- [ ] Simulink blocks and solvers; Euler (0.64 vs 0.6703); pendulum (3.13 rad/s, 2.01 s); validation vs verification; least squares (1.993 mm/N); system ID steps; optimization.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Theory of Modeling and Simulation (2nd edition) | Bernard P. Zeigler, Herbert Praehofer, Tag Gon Kim | Academic Press (2000) | [WorldCat](https://search.worldcat.org/search?q=Theory+of+Modeling+and+Simulation+Zeigler+Praehofer+Kim) |
| 2 | Modeling and Simulation of Dynamic Systems | Robert L. Woods, Kent L. Lawrence | Prentice Hall / Pearson (1997) | [WorldCat](https://search.worldcat.org/search?q=Modeling+and+Simulation+of+Dynamic+Systems+Woods+Lawrence) |
| 3 | Engineering System Dynamics: A Unified Graph-Centered Approach | Forbes T. Brown | CRC Press (2001) | [WorldCat](https://search.worldcat.org/search?q=Engineering+System+Dynamics+Unified+Graph-Centered+Approach+Brown) |
| 4 | Getting Started with MATLAB | Rudra Pratap | Oxford University Press (2009) | [WorldCat](https://search.worldcat.org/search?q=Getting+Started+with+MATLAB+Rudra+Pratap) |

**Syllabus source:** [AKTU Open Elective-III and IV syllabus for B.Tech 8th semester, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf)

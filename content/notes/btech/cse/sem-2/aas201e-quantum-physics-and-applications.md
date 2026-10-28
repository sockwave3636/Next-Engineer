---
program: btech
branches: [cse, it, cse-aiml, cse-ds, aids]
semester: 2
code: AAS201E
name: Quantum Physics and Applications
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 1st year, CSE stream, 2026-27 onwards
syllabusSource: https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf
units:
  - Fundamentals of Quantum Mechanics
  - Quantum Theory of Solids
  - Quantum Computing and Communication
  - Photonics (Optical Fibres and Lasers)
  - Superconductors and Nanomaterials
---

# AAS201E Quantum Physics and Applications: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. The same course is taught as AAS101E in semester 1 for the other group of students. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: theory, derivations in short steps, and comparison tables.
3. **Solved examples**: the numericals examiners set (de Broglie wavelength, uncertainty, particle in a box, Fermi-Dirac probability, conductivity, numerical aperture, attenuation, photon energy, critical field and current, qubit probabilities).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (de Broglie waves, Davisson-Germer, wave packet, uncertainty, Schrödinger equations, particle in a box). Learn the two derivations (TISE and particle in a box) by writing them once.
- **Afternoon (3 hours):** Unit 2 (free electron theory, Fermi-Dirac, bands, semiconductors, Fermi level) and Unit 4 (optical fibres and lasers). Both are numerical-heavy and score well.
- **Evening (2 hours):** Unit 3 (qubits, superposition, entanglement, gates, QKD) and Unit 5 (superconductors and nanomaterials), then the "Last-hour checklist".
- **In the exam:** draw the Davisson-Germer set-up, particle-in-a-box wave functions, energy band diagrams, the fibre acceptance cone, the He-Ne energy levels, and the Meissner effect. Write units in every numerical.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit. Internal assessment carries another 30 marks.

**Constants to remember:** h = 6.626 × 10⁻³⁴ J·s; ħ = h/2π = 1.055 × 10⁻³⁴ J·s; electron mass m = 9.11 × 10⁻³¹ kg; e = 1.6 × 10⁻¹⁹ C; c = 3 × 10⁸ m/s; k_B = 1.38 × 10⁻²³ J/K; kT at 300 K = 0.0259 eV; 1 eV = 1.6 × 10⁻¹⁹ J.

---

## Unit 1: Fundamentals of Quantum Mechanics

### 2-mark definitions

- **Quantum mechanics:** the branch of physics that describes the behaviour of very small particles (electrons, atoms, photons), where energy is quantized and particles show wave nature.
- **Matter waves (de Broglie waves):** waves associated with every moving particle, with wavelength λ = h/p = h/(mv).
- **Wave-particle duality:** radiation and matter both show wave properties (interference, diffraction) and particle properties (photoelectric effect, collisions).
- **Wave packet:** a group of waves of slightly different wavelengths that combine to give a localized disturbance; it represents a moving particle.
- **Phase velocity:** the speed of a single wave of the packet, v_p = ω/k.
- **Group velocity:** the speed of the wave packet (envelope), v_g = dω/dk; it equals the particle velocity.
- **Heisenberg uncertainty principle:** position and momentum cannot both be known exactly at the same time: Δx · Δp ≥ ħ/2 (often written ≥ h/4π).
- **Wave function (ψ):** a mathematical function that describes the quantum state of a particle; |ψ|² gives the probability density of finding it.
- **Normalization:** the condition ∫|ψ|² dV = 1, meaning the particle is certainly somewhere in space.
- **Eigenvalue and eigenfunction:** when an operator acting on ψ gives a constant times ψ, the constant is the eigenvalue (an allowed value such as energy) and ψ is the eigenfunction.

### Core concepts

**Failures of classical mechanics:** classical physics could not explain:
- Black-body radiation (the ultraviolet catastrophe; Planck solved it with E = hν).
- The photoelectric effect (Einstein, photons).
- The Compton effect.
- Stability of atoms and discrete line spectra (Bohr).
- Specific heat of solids at low temperature.

These showed that energy is quantized and that light and matter have dual nature.

**de Broglie hypothesis (1924):** if light (a wave) behaves like particles, particles should behave like waves: λ = h/p.
- For a particle with kinetic energy E: λ = h / √(2mE).
- For an electron accelerated through V volts: λ = h / √(2meV) = **1.227/√V nm**.
- Matter waves are not electromagnetic, can travel faster than light (phase velocity), and are significant only for tiny masses.

**Davisson-Germer experiment (1927):** proof of matter waves.
- **Set-up:** an electron gun (heated filament plus accelerating voltage) sends a beam onto a nickel crystal; a movable detector measures the scattered intensity at different angles.
- **Observation:** at 54 V a sharp peak appears at a scattering angle of 50°.
- **Explanation:** this is Bragg diffraction from crystal planes (d = 0.91 Å, glancing angle θ = 65°), so 2d sin θ = λ gives λ = 1.65 Å.
- **Check:** de Broglie formula gives λ = 1.227/√54 nm = 1.67 Å. The match proves electrons behave as waves.

**Phase velocity and group velocity:**
- For a matter wave, v_p = E/p = c²/v (greater than c) and v_g = v (particle velocity).
- **Relation:** v_p · v_g = c².
- **In a dispersive medium:** v_g = v_p − λ (dv_p/dλ).

**Uncertainty principle:**
- **Forms:** Δx Δp ≥ ħ/2; ΔE Δt ≥ ħ/2; ΔL Δθ ≥ ħ/2.
- **Cause:** measuring position needs short-wavelength light, which disturbs the momentum (gamma-ray microscope thought experiment).
- **Application:** electrons cannot exist inside the nucleus (confinement to 10⁻¹⁴ m needs energy of tens of MeV, far more than observed beta energies).

**Schrödinger's time-independent equation (TISE), derivation outline:**
1. Write a wave: ψ = ψ₀ e^(−iωt).
2. The classical wave equation is ∇²ψ = (1/v²) ∂²ψ/∂t², which gives ∇²ψ + (ω²/v²) ψ = 0.
3. Use ω/v = 2π/λ and λ = h/p = h / √(2m(E − V)).
4. Result: **∇²ψ + (2m/ħ²)(E − V) ψ = 0**.

**Time-dependent equation (TDSE):** iħ ∂ψ/∂t = −(ħ²/2m) ∇²ψ + V ψ, or Ĥψ = Êψ, with energy operator Ê = iħ ∂/∂t and momentum operator p̂ = −iħ∇.

**Physical meaning of ψ (Born interpretation):** ψ itself has no direct physical meaning (it can be complex). |ψ|² = ψψ* is the probability density.

**Conditions on ψ:**
- Finite.
- Single-valued.
- Continuous (and dψ/dx continuous).
- Normalizable.

**Particle in a one-dimensional box (infinite potential well):**
- **Potential:** V = 0 for 0 < x < L and V = ∞ outside, so ψ = 0 outside the box.
- **Equation inside:** d²ψ/dx² + k²ψ = 0, with k² = 2mE/ħ².
- **General solution:** ψ = A sin kx + B cos kx.
  - ψ(0) = 0 gives B = 0.
  - ψ(L) = 0 gives kL = nπ.
- **Energy:** E_n = n²π²ħ²/(2mL²) = **n²h²/(8mL²)**, n = 1, 2, 3, …
- **Normalization:** gives A = √(2/L), so **ψ_n = √(2/L) sin(nπx/L)**.
- **Results:**
  - Energy is quantized.
  - Lowest energy (zero-point energy) is not zero.
  - Levels go as n².
  - Probability has n peaks and (n − 1) nodes inside the box, unlike the uniform classical probability.

### Solved examples

**Example 1 (de Broglie wavelength).** Find the wavelength of an electron accelerated through 100 V.
- λ = 1.227/√100 nm = **0.1227 nm (1.23 Å)**, comparable to atomic spacings, which is why electron diffraction by crystals is possible.
- For λ = 1 Å the voltage needed is V = (1.227/0.1)² = **150.5 V**.

**Example 2 (uncertainty).** An electron is confined within 1 Å. Find the minimum uncertainty in its momentum and velocity.
- Δp ≥ ħ/(2Δx) = 1.055 × 10⁻³⁴ / (2 × 10⁻¹⁰) = **5.27 × 10⁻²⁵ kg·m/s**.
- Δv = Δp/m = 5.27 × 10⁻²⁵ / 9.11 × 10⁻³¹ = **5.79 × 10⁵ m/s**.

**Example 3 (particle in a box).** An electron is in a box of width 1 nm. Find the first three energy levels and the wavelength of the photon emitted for n = 2 → 1.
- E₁ = h²/(8mL²) = (6.626 × 10⁻³⁴)² / (8 × 9.11 × 10⁻³¹ × 10⁻¹⁸) = 6.02 × 10⁻²⁰ J = **0.376 eV**.
- E₂ = 4E₁ = **1.50 eV**; E₃ = 9E₁ = **3.38 eV**.
- ΔE (2 → 1) = 3E₁ = 1.13 eV; λ = hc/ΔE ≈ **1,100 nm** (infrared).

### Key points to remember

- λ = h/p = h/√(2mE) = 1.227/√V nm (electron).
- Davisson-Germer: 54 V, 50° peak, λ ≈ 1.65 Å matches theory.
- v_g = particle velocity; v_p v_g = c².
- Δx Δp ≥ ħ/2; no electron inside the nucleus.
- TISE: ∇²ψ + (2m/ħ²)(E − V)ψ = 0; |ψ|² = probability density; ψ must be finite, single-valued, continuous.
- Box: E_n = n²h²/8mL², ψ_n = √(2/L) sin(nπx/L).

### Important questions

1. What are matter waves? Derive the de Broglie wavelength of an electron accelerated through V volts and describe the Davisson-Germer experiment.
2. Distinguish phase velocity and group velocity and show that group velocity equals particle velocity.
3. State and explain Heisenberg's uncertainty principle. Show that an electron cannot exist inside a nucleus.
4. Derive Schrödinger's time-independent wave equation and explain the physical meaning of the wave function.
5. Solve Schrödinger's equation for a particle in a 1D box; find energy eigenvalues and normalized eigenfunctions. Solve a numerical.

---

## Unit 2: Quantum Theory of Solids

### 2-mark definitions

- **Free electron theory:** a model in which valence electrons in a metal move freely like gas molecules within the metal, held only by the surface.
- **Classical (Drude-Lorentz) free electron theory:** treats electrons as classical particles obeying Maxwell-Boltzmann statistics; explains Ohm's law but fails on specific heat and the temperature dependence of resistivity.
- **Quantum (Sommerfeld) free electron theory:** applies quantum mechanics and Fermi-Dirac statistics to free electrons.
- **Fermi energy (E_F):** the highest occupied energy level of electrons in a metal at 0 K.
- **Fermi-Dirac distribution:** the probability that a state of energy E is occupied: f(E) = 1 / [1 + e^((E − E_F)/kT)].
- **Energy band:** a nearly continuous range of allowed electron energies formed when atomic levels of many atoms overlap in a solid.
- **Band gap (E_g):** the forbidden energy range between the top of the valence band and the bottom of the conduction band.
- **Effective mass (m*):** the apparent mass of an electron in a crystal, which accounts for the effect of the lattice: m* = ħ² / (d²E/dk²).
- **Density of states g(E):** the number of available electron states per unit energy per unit volume.
- **Intrinsic and extrinsic semiconductors:** intrinsic is pure (electrons = holes); extrinsic is doped with impurities (n-type with donors like P, p-type with acceptors like B).

### Core concepts

**Classical vs quantum free electron theory**

| Feature | Classical (Drude) | Quantum (Sommerfeld) |
|---|---|---|
| Statistics | Maxwell-Boltzmann | Fermi-Dirac |
| Electron energies | Continuous | Quantized, filled up to E_F |
| Electronic specific heat | Predicts large (3R/2), wrong | Small, proportional to T, correct |
| Explains | Ohm's law, Wiedemann-Franz | Specific heat, paramagnetism, temperature dependence |
| Fails to explain | Why some solids are insulators or semiconductors | Same (needs band theory) |

**Fermi-Dirac distribution:**
- At T = 0 K: f(E) = 1 for E < E_F and 0 for E > E_F (sharp step).
- At T > 0: the step is smoothed over a few kT near E_F.
- At E = E_F: f = 1/2 at any temperature.
- Only electrons within about kT of E_F can be excited, which explains the small electronic specific heat.

**Density of states (3D free electrons):** g(E) = (1/2π²)(2m/ħ²)^(3/2) √E per unit volume, so it rises as √E. The number of electrons is n = ∫ g(E) f(E) dE. At 0 K, E_F = (ħ²/2m)(3π²n)^(2/3).

**Formation of energy bands (Kronig-Penney idea):**
- In a crystal, electrons move in a periodic potential.
- Solving Schrödinger's equation gives allowed bands separated by forbidden gaps at k = nπ/a.
- Alternatively, when N atoms come close, each atomic level splits into N close levels, forming a band.

**Conductors, semiconductors and insulators**

| Type | Band picture | Band gap | Example |
|---|---|---|---|
| Conductor (metal) | Valence and conduction bands overlap or the band is partly filled | None | Cu, Al |
| Semiconductor | Small gap; some electrons cross at room temperature | About 0.1 to 3 eV | Si (1.12 eV), Ge (0.67 eV), GaAs (1.42 eV) |
| Insulator | Large gap; almost no conduction electrons | More than about 4 eV | Diamond (5.5 eV), SiO₂ (~9 eV) |

**Effective mass:**
- m* = ħ² / (d²E/dk²).
- **Near the bottom of a band:** curvature is positive, so m* is positive.
- **Near the top:** curvature is negative, so m* is negative. This is described as a hole with positive mass and positive charge.
- m* explains why electrons in different materials respond differently to fields; for example, m* ≈ 0.067 m₀ in GaAs, which gives high mobility.

**Semiconductors:**
- **Intrinsic:** n = p = n_i, where n_i = √(N_c N_v) e^(−E_g/2kT). The Fermi level lies near the middle of the gap: E_F = (E_c + E_v)/2 + (3/4)kT ln(m_h*/m_e*).
- **n-type (donor, group V):**
  - Donor levels sit just below E_c (about 0.05 eV).
  - Electrons are majority carriers.
  - E_F moves towards E_c.
- **p-type (acceptor, group III):**
  - Acceptor levels sit just above E_v.
  - Holes are majority carriers.
  - E_F moves towards E_v.
- **Temperature effect on extrinsic E_F:** as temperature rises, E_F moves back toward the middle (the material becomes intrinsic at high T).
- **Mass action law:** n p = n_i².

**Conductivity of a semiconductor:**
- σ = n e µ_e + p e µ_h.
- **Intrinsic:** σ_i = n_i e (µ_e + µ_h).
- **n-type:** σ ≈ N_D e µ_e.
- σ of a semiconductor rises with temperature (more carriers), unlike a metal.

### Solved examples

**Example 4 (Fermi-Dirac probability).** Find the probability that a level 0.1 eV above E_F is occupied at 300 K.
- (E − E_F)/kT = 0.1 / 0.0259 = 3.87.
- f = 1 / (1 + e^3.87) = 1 / (1 + 47.8) = **0.0205 (about 2%)**.

**Example 5 (intrinsic conductivity).** For pure Si at 300 K: n_i = 1.5 × 10¹⁶ m⁻³, µ_e = 0.135 m²/V·s, µ_h = 0.048 m²/V·s.
- σ = 1.5 × 10¹⁶ × 1.6 × 10⁻¹⁹ × (0.135 + 0.048) = **4.39 × 10⁻⁴ S/m** (resistivity about 2,300 Ω·m).

**Example 6 (extrinsic conductivity).** The Si is doped with 10²¹ donors per m³ (all ionized).
- σ ≈ N_D e µ_e = 10²¹ × 1.6 × 10⁻¹⁹ × 0.135 = **21.6 S/m**.
- Doping one atom in about 5 × 10⁷ raises conductivity about **49,000 times**.
- Holes: p = n_i²/N_D = (1.5 × 10¹⁶)² / 10²¹ = 2.25 × 10¹¹ m⁻³ (negligible).

### Key points to remember

- Drude fails on specific heat; Sommerfeld uses Fermi-Dirac.
- f(E) = 1/[1 + e^((E − E_F)/kT)]; f(E_F) = 1/2.
- g(E) ∝ √E; E_F = (ħ²/2m)(3π²n)^(2/3).
- Band gap: metal none, semiconductor 0.1–3 eV, insulator > 4 eV.
- m* = ħ²/(d²E/dk²); holes as negative-mass electrons.
- σ = n e µ_e + p e µ_h; n p = n_i²; E_F position in intrinsic, n-type, p-type.

### Important questions

1. Explain the classical and quantum free electron theories and compare them.
2. Explain the Fermi-Dirac distribution function and its variation with temperature. Solve a numerical.
3. How are energy bands formed in solids? Classify solids into conductors, semiconductors and insulators.
4. What is effective mass? Explain the concept of holes and the density of states.
5. Explain intrinsic and extrinsic semiconductors, the position of the Fermi level, and derive the expression for conductivity.

---

## Unit 3: Quantum Computing and Communication

### 2-mark definitions

- **Quantum state:** the complete description of a quantum system, written as a vector |ψ⟩ (Dirac's ket notation).
- **Qubit:** the basic unit of quantum information; a two-level system that can be in |0⟩, |1⟩ or any superposition α|0⟩ + β|1⟩ with |α|² + |β|² = 1.
- **Superposition:** a quantum system existing in a combination of several states at once until it is measured.
- **Measurement:** observing a qubit collapses it to |0⟩ with probability |α|² or |1⟩ with probability |β|².
- **Entanglement:** a correlation between qubits such that the state of the whole cannot be written as a product of individual states; measuring one instantly fixes the outcome of the other.
- **Bell state:** a maximally entangled two-qubit state, such as (|00⟩ + |11⟩)/√2.
- **Decoherence:** loss of quantum behaviour (superposition and entanglement) due to interaction with the environment.
- **Quantum gate:** a reversible (unitary) operation on qubits, the quantum version of a logic gate.
- **No-cloning theorem:** an unknown quantum state cannot be copied exactly; this makes quantum communication secure.
- **Quantum key distribution (QKD):** a method of sharing a secret key using quantum states so that any eavesdropping is detected.

### Core concepts

**Classical bit vs qubit**

| Classical bit | Qubit |
|---|---|
| 0 or 1 | α\|0⟩ + β\|1⟩ (both at once) |
| Can be copied | Cannot be cloned |
| Reading does not change it | Measurement collapses it |
| n bits store one of 2ⁿ values | n qubits hold 2ⁿ amplitudes together |
| Deterministic gates (AND, OR) | Reversible unitary gates |

**Bloch sphere:** a single qubit state |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ) sin(θ/2)|1⟩ is a point on a unit sphere. |0⟩ is the north pole, |1⟩ the south pole, and equal superpositions lie on the equator.

**Physical realizations of qubits:**
- **Solid-state:**
  - Superconducting circuits (transmon qubits using Josephson junctions; used by IBM and Google).
  - Semiconductor quantum dots (electron spin).
  - NV centres in diamond.
- **Photonic:** polarization (horizontal = |0⟩, vertical = |1⟩) or the path of single photons; work at room temperature and suit communication.
- **Others:** trapped ions (IonQ, Quantinuum) and neutral atoms.
- **Requirements (DiVincenzo criteria):** scalable well-defined qubits, initialization, long coherence time, a universal set of gates, and measurement.

**Single-qubit gates**

| Gate | Matrix | Action |
|---|---|---|
| X (NOT, Pauli-X) | [0 1; 1 0] | \|0⟩ ↔ \|1⟩ |
| Z (Pauli-Z) | [1 0; 0 −1] | Flips the sign of \|1⟩ |
| Y (Pauli-Y) | [0 −i; i 0] | Bit and phase flip |
| H (Hadamard) | (1/√2)[1 1; 1 −1] | \|0⟩ → (\|0⟩ + \|1⟩)/√2, \|1⟩ → (\|0⟩ − \|1⟩)/√2 (creates superposition) |
| S, T (phase) | [1 0; 0 i], [1 0; 0 e^(iπ/4)] | Add phase to \|1⟩ |

**Multi-qubit gates:**
- **CNOT (controlled-NOT):** flips the target qubit if the control is 1: |00⟩ → |00⟩, |01⟩ → |01⟩, |10⟩ → |11⟩, |11⟩ → |10⟩.
- **Others:** SWAP, Toffoli (CCNOT, a universal classical reversible gate), controlled-Z.
- **Creating a Bell state:** H on qubit 1, then CNOT, takes |00⟩ to (|00⟩ + |11⟩)/√2.
- **Universal set:** {H, T, CNOT}.

**Decoherence:**
- Caused by thermal noise, stray fields and vibrations.
- Qubits must be isolated (millikelvin cooling for superconducting qubits).
- **Coherence times:** T₁ (energy relaxation) and T₂ (dephasing).
- Quantum error correction encodes one logical qubit in many physical qubits.

**Applications of quantum computing:**
- Shor's algorithm (factoring, which threatens RSA).
- Grover's search (√N speed-up).
- Simulation of molecules and materials.
- Optimization.
- Machine learning.

**Quantum cryptography and QKD (BB84 protocol, Bennett and Brassard 1984):**
1. Alice sends single photons, each polarized in one of two randomly chosen bases: rectilinear (0°, 90°) or diagonal (45°, 135°).
2. Bob measures each photon in a randomly chosen basis.
3. Over a public channel they compare bases (not values) and keep only the bits where the bases matched (the sifted key, about half).
4. They compare a sample of the key. An eavesdropper (Eve) who measures photons disturbs them (no-cloning, measurement collapse), causing about 25% errors in the checked bits, which reveals her presence.
5. If the error rate is low, they apply error correction and privacy amplification to get a secret key, then use it with a one-time pad.

**Other protocols:** E91 (Ekert, uses entanglement). India's ISRO and DRDO have demonstrated QKD links, and the **National Quantum Mission (2023)** funds quantum technologies.

### Solved examples

**Example 7 (measurement probabilities).** A qubit is in |ψ⟩ = (1/2)|0⟩ + (√3/2)|1⟩. Check normalization and find the probabilities.
- |α|² + |β|² = 1/4 + 3/4 = 1, so it is normalized.
- P(0) = **0.25**, P(1) = **0.75**.

**Example 8 (Hadamard twice).** Apply H to |0⟩, then apply H again.
- H|0⟩ = (|0⟩ + |1⟩)/√2, so measuring now gives 0 or 1 with 50% each.
- H applied again gives (1/2)[(|0⟩ + |1⟩) + (|0⟩ − |1⟩)] = **|0⟩**. The amplitudes of |1⟩ cancel (interference), which is the key resource of quantum algorithms.

**Example 9 (state space).** A 10-qubit register holds 2¹⁰ = **1,024** amplitudes at once; a 50-qubit register holds 2⁵⁰ ≈ **1.13 × 10¹⁵**, which is why simulating about 50 or more qubits on classical computers becomes very hard.

### Key points to remember

- Qubit α|0⟩ + β|1⟩, |α|² + |β|² = 1; Bloch sphere.
- Superposition, entanglement (Bell state), measurement collapse, decoherence, no-cloning.
- Realizations: superconducting, quantum dots, photonic, trapped ions; DiVincenzo criteria.
- Gates: X, Y, Z, H, S, T; CNOT, Toffoli; H + CNOT gives a Bell state.
- BB84 steps; eavesdropping causes about 25% error; National Quantum Mission 2023.

### Important questions

1. What is a qubit? Compare classical bits and qubits. Explain superposition and the Bloch sphere.
2. Explain entanglement and decoherence. Why is decoherence a challenge for quantum computers?
3. Describe the physical realization of qubits (solid-state and photonic).
4. Explain single-qubit gates (X, Z, H) and the CNOT gate with matrices and truth tables. Show how a Bell state is created.
5. What is quantum key distribution? Explain the BB84 protocol and why it is secure.

---

## Unit 4: Photonics (Optical Fibres and Lasers)

### 2-mark definitions

- **Optical fibre:** a thin, flexible glass or plastic waveguide that carries light by total internal reflection, made of a core of higher refractive index surrounded by a cladding of lower index.
- **Total internal reflection (TIR):** complete reflection of light at the boundary when it travels from a denser to a rarer medium at an angle greater than the critical angle.
- **Acceptance angle (θ_a):** the maximum angle with the fibre axis at which light can enter the fibre and still be guided.
- **Acceptance cone:** the cone of half-angle θ_a within which all incoming rays are guided.
- **Numerical aperture (NA):** the light-gathering ability of a fibre: NA = sin θ_a = √(n₁² − n₂²).
- **Attenuation:** loss of optical power as light travels in the fibre, expressed in dB/km: α = (10/L) log₁₀(P_in/P_out).
- **LASER:** Light Amplification by Stimulated Emission of Radiation; a source of highly coherent, monochromatic, directional and intense light.
- **Stimulated emission:** an incoming photon causes an excited atom to drop to a lower level and emit an identical photon (same frequency, phase, direction, polarization).
- **Population inversion:** the condition in which more atoms are in the higher energy level than the lower one; necessary for laser action.
- **Metastable state:** an excited level with a long lifetime (about 10⁻³ s compared with 10⁻⁸ s), where atoms accumulate to give population inversion.

### Core concepts

**Optical fibre structure and propagation:**
- Core (n₁), cladding (n₂ < n₁), and a protective buffer and jacket.
- Light entering within the acceptance cone hits the core-cladding boundary above the critical angle (sin θ_c = n₂/n₁) and is guided by repeated TIR.

**Derivation of NA:**
1. At the entry face: n₀ sin θ_a = n₁ sin θ_r.
2. At the core-cladding boundary: θ = 90° − θ_r must be ≥ θ_c, so cos θ_r = n₂/n₁ at the limit.
3. Then sin θ_a = (n₁/n₀) √(1 − cos²θ_r) = √(n₁² − n₂²)/n₀.
- **With the fractional index difference Δ = (n₁ − n₂)/n₁:** NA ≈ n₁√(2Δ).

**Types of fibres:**
- **Single-mode:** core about 8–10 µm; very low dispersion; long-distance telecom.
- **Multimode step-index:** core 50–200 µm; modal dispersion.
- **Multimode graded-index:** core index decreases gradually from the axis, reducing modal dispersion.
- **Number of modes (step-index):** V = (2πa/λ) NA. Single-mode if V < 2.405; modes ≈ V²/2 for large V.

**Attenuation:**
- **Causes:**
  - Absorption (impurities such as OH⁻ ions, intrinsic).
  - Scattering (Rayleigh ∝ 1/λ⁴).
  - Bending losses (macro and micro bends).
- **Low-loss windows:** 850 nm, 1,310 nm and 1,550 nm (about 0.2 dB/km at 1,550 nm).
- **Applications:** telecom, internet backbone, endoscopy, sensors, LANs, defence.

**Einstein's coefficients:** for two levels with populations N₁ and N₂ in radiation of energy density ρ(ν):
- Absorption rate = B₁₂ N₁ ρ.
- Spontaneous emission rate = A₂₁ N₂.
- Stimulated emission rate = B₂₁ N₂ ρ.
- At equilibrium with Boltzmann populations (N₂/N₁ = e^(−hν/kT)) and comparing with Planck's law, we get **B₁₂ = B₂₁** and **A₂₁/B₂₁ = 8πhν³/c³**.
- Ratio of stimulated to spontaneous emission = 1/(e^(hν/kT) − 1), which is tiny for visible light at room temperature. So population inversion and an optical cavity are needed.

**Components of a laser:**
1. Active medium.
2. Pumping source (optical, electrical discharge, chemical).
3. Optical resonator (two mirrors, one partly transparent) that gives feedback and selects direction.

**Ruby laser (Maiman 1960):**
- **Active medium:** Cr³⁺ ions in Al₂O₃ (ruby rod).
- **Pumping:** optical, with a xenon flash lamp.
- **Three-level system:** ground level E₁ → pumped to the E₃ band (green and blue absorption) → fast non-radiative decay to metastable E₂ → laser transition E₂ → E₁ at **694.3 nm** (red).
- **Output:** pulsed.
- **Drawback:** needs strong pumping because the lower level is the ground state.

**He-Ne laser (Javan 1960):**
- **Active medium:** a gas mixture of about 10 parts helium to 1 part neon at low pressure.
- **Pumping:** electrical discharge.
- **Mechanism:**
  - Electrons excite He to metastable levels (20.61 and 19.81 eV).
  - He transfers energy to Ne levels of nearly equal energy (20.66 and 18.70 eV) by collisions (resonant energy transfer).
  - Ne gives the laser transition at **632.8 nm** (red), and also at 1.15 and 3.39 µm.
- **Type:** four-level system, continuous output.

**Applications of lasers:**
- Fibre communication.
- Barcode scanners.
- Laser printers.
- Medicine (LASIK eye surgery, kidney stone removal).
- Industry (cutting, welding, drilling).
- Holography.
- LIDAR.
- Defence (range finders).
- Research (cooling atoms).

### Solved examples

**Example 10 (NA and acceptance angle).** A fibre has n₁ = 1.50 and n₂ = 1.47. Find NA, acceptance angle and Δ.
- NA = √(1.50² − 1.47²) = √(2.25 − 2.1609) = √0.0891 = **0.2985**.
- θ_a = sin⁻¹(0.2985) = **17.4°** (acceptance cone full angle 34.7°).
- Δ = (1.50 − 1.47)/1.50 = **0.02**.

**Example 11 (attenuation).** Input power is 1 mW and output after 2 km is 0.5 mW.
- α = (10/2) log₁₀(1/0.5) = 5 × 0.301 = **1.5 dB/km**.

**Example 12 (He-Ne photon).** Find the photon energy at 632.8 nm and the ratio N₂/N₁ at 300 K in thermal equilibrium.
- E = hc/λ = 6.626 × 10⁻³⁴ × 3 × 10⁸ / 632.8 × 10⁻⁹ = 3.14 × 10⁻¹⁹ J = **1.96 eV**.
- N₂/N₁ = e^(−1.96/0.0259) = e^(−75.8) ≈ **1.2 × 10⁻³³**. Without pumping essentially no atoms are excited, which is why population inversion must be created.

### Key points to remember

- NA = √(n₁² − n₂²) = sin θ_a ≈ n₁√(2Δ); sin θ_c = n₂/n₁.
- Fibre types: single-mode, step-index multimode, graded-index; V = (2πa/λ)NA, single-mode if V < 2.405.
- α (dB/km) = (10/L) log(P_in/P_out); losses: absorption, scattering, bending.
- Einstein: B₁₂ = B₂₁, A₂₁/B₂₁ = 8πhν³/c³.
- Laser needs active medium, pumping, resonator, population inversion, metastable state.
- Ruby: Cr³⁺, three-level, 694.3 nm, pulsed. He-Ne: four-level, 632.8 nm, continuous, He → Ne energy transfer.

### Important questions

1. Explain the principle of an optical fibre. Derive the expression for numerical aperture and acceptance angle.
2. Classify optical fibres and explain attenuation and its causes. Solve a numerical on NA and attenuation.
3. Explain absorption, spontaneous emission and stimulated emission. Derive the relation between Einstein's coefficients.
4. Describe the construction and working of a ruby laser with an energy level diagram.
5. Describe the He-Ne laser and compare it with the ruby laser. List applications of lasers.

---

## Unit 5: Superconductors and Nanomaterials

### 2-mark definitions

- **Superconductivity:** the property of some materials of having exactly zero electrical resistance and expelling magnetic fields below a critical temperature.
- **Critical temperature (T_c):** the temperature below which a material becomes superconducting (Hg 4.2 K, discovered by Kamerlingh Onnes in 1911).
- **Critical magnetic field (H_c):** the magnetic field above which superconductivity is destroyed; H_c(T) = H₀[1 − (T/T_c)²].
- **Critical current:** the current whose own magnetic field equals H_c at the surface; for a wire of radius r, I_c = 2πr H_c (Silsbee rule).
- **Meissner effect:** the complete expulsion of magnetic flux from a superconductor when it is cooled below T_c in a field, making it a perfect diamagnet (B = 0, χ = −1).
- **Persistent current:** a current that flows in a superconducting ring for years without any decay, because there is no resistance.
- **High-temperature superconductor (HTS):** a superconductor with T_c above about 30 K, typically ceramic cuprates such as YBa₂Cu₃O₇ (T_c ≈ 92 K, above liquid nitrogen's 77 K).
- **Nanomaterial:** a material with at least one dimension between 1 and 100 nm.
- **Quantum dot:** a nanocrystal (0D) so small that electrons are confined in all three directions, giving discrete energy levels and size-dependent colour.
- **Quantum confinement:** the change in electronic and optical properties when a material's size becomes comparable to the de Broglie wavelength of its electrons.

### Core concepts

**Temperature dependence of resistivity:** in a normal metal, resistivity falls with temperature and levels off at a residual value. In a superconductor it suddenly drops to zero at T_c.

**Effect of magnetic field:** superconductivity disappears when H > H_c(T); H_c is maximum (H₀) at 0 K and zero at T_c. Superconductivity can also be destroyed by a large current (Silsbee rule).

**Meissner effect:**
- When a superconductor in a magnetic field is cooled below T_c, it expels all flux (B = µ₀(H + M) = 0, so M = −H).
- Its susceptibility is χ = −1 (perfect diamagnetism).
- This shows superconductivity is more than perfect conductivity (a perfect conductor would trap the flux).
- It also explains magnetic levitation.

**Type I vs Type II superconductors**

| Feature | Type I (soft) | Type II (hard) |
|---|---|---|
| Field behaviour | Complete Meissner effect up to H_c, then sudden loss | Complete expulsion only up to H_c1; mixed (vortex) state between H_c1 and H_c2; normal above H_c2 |
| Critical field | Low (below about 0.1 T) | H_c2 very high (tens of tesla) |
| Materials | Pure metals: Pb, Hg, Sn, Al | Alloys and compounds: Nb-Ti, Nb₃Sn, YBCO |
| Use | Mostly scientific interest | Magnets, MRI, power applications |

**BCS theory (Bardeen, Cooper, Schrieffer, 1957), basic idea:**
- Electrons form **Cooper pairs** through lattice vibrations (phonons).
- The pairs move through the lattice without scattering.
- An energy gap of about 3.5 k_B T_c separates the paired state.
- **Isotope effect:** T_c ∝ M^(−1/2) (supports the phonon mechanism).

**High-temperature superconductors:**
- **Discovery:** Bednorz and Müller (1986), La-Ba-Cu-O at about 35 K.
- **Examples:** YBCO (92 K), Bi-Sr-Ca-Cu-O (about 110 K), Hg-based (about 133 K at normal pressure).
- **Properties:** layered copper-oxide planes, brittle ceramics, Type II, and cheap cooling with liquid nitrogen.

**Applications of superconductors:**
- MRI magnets (Nb-Ti).
- Particle accelerators (LHC).
- Maglev trains (Japan's SCMaglev).
- SQUIDs (detect tiny magnetic fields, used in brain imaging).
- Lossless power cables.
- Fault-current limiters.
- Superconducting qubits (Josephson junctions).
- Energy storage (SMES).

**Nanomaterials:**
- **Why properties change at nanoscale:** very high surface-to-volume ratio (more surface atoms, so higher reactivity) and quantum confinement (discrete levels, band gap increases as size decreases).
- **Classification by confinement:**
  - **0D:** quantum dots, nanoparticles. Confined in 3 directions; discrete, delta-like density of states.
  - **1D:** quantum wires, nanotubes, nanowires. Confined in 2 directions.
  - **2D:** quantum wells, thin films, graphene. Confined in 1 direction; step-like density of states.
- **Quantum dots:** energy gap rises as size falls (E ∝ 1/L² from the particle-in-a-box model). CdSe dots glow blue when small and red when larger. Used in QLED TVs, solar cells, bio-imaging, single-photon sources.
- **Quantum wells:** a thin layer of a lower-gap semiconductor (GaAs) between higher-gap layers (AlGaAs). Used in laser diodes, LEDs, HEMTs.
- **Properties:** optical (size-dependent colour; gold nanoparticles look red), mechanical (CNTs are very strong), electrical (CNTs metallic or semiconducting), magnetic (superparamagnetism), chemical (catalysis).
- **Synthesis:**
  - **Top-down:** ball milling, lithography.
  - **Bottom-up:** sol-gel, chemical vapour deposition, self-assembly.
- **Applications:** electronics (transistors, memory), medicine (drug delivery, cancer therapy), energy (batteries, solar cells), sunscreens (ZnO, TiO₂), self-cleaning glass, sensors, water purification.

### Solved examples

**Example 13 (critical field).** Lead has T_c = 7.2 K and H₀ = 6.5 × 10⁴ A/m. Find H_c at 4.2 K.
- H_c = 6.5 × 10⁴ × [1 − (4.2/7.2)²] = 6.5 × 10⁴ × (1 − 0.340) = **4.29 × 10⁴ A/m**.

**Example 14 (critical current).** Find the critical current of a lead wire of radius 1 mm at 4.2 K.
- I_c = 2πr H_c = 2π × 10⁻³ × 4.29 × 10⁴ = **269 A**.

**Example 15 (quantum dot size effect).** Using the particle-in-a-box model, halving the size of a quantum dot multiplies the confinement energy by 2² = **4**, so the emitted light shifts towards blue. This is why smaller CdSe dots emit blue and larger ones red.

### Key points to remember

- Zero resistance below T_c; H_c(T) = H₀[1 − (T/T_c)²]; I_c = 2πrH_c.
- Meissner effect: B = 0, χ = −1, perfect diamagnet, levitation.
- Type I (pure metals, one H_c) vs Type II (alloys, H_c1 and H_c2, vortex state).
- BCS: Cooper pairs via phonons; isotope effect. HTS: cuprates, YBCO 92 K, liquid N₂ cooling.
- Applications: MRI, maglev, SQUID, cables, qubits.
- Nano: 1–100 nm; surface-to-volume and quantum confinement; 0D dots, 1D wires, 2D wells; applications.

### Important questions

1. What is superconductivity? Explain the effect of temperature and magnetic field, and the critical current. Solve a numerical.
2. Explain the Meissner effect and show that a superconductor is a perfect diamagnet.
3. Distinguish Type I and Type II superconductors with H-M graphs. Write a note on high-temperature superconductors.
4. Explain the applications of superconductors. Briefly explain BCS theory and persistent currents.
5. What are nanomaterials? Explain quantum confinement, quantum dots, quantum wires and quantum wells, with properties and applications.

---

## Last-hour checklist

- [ ] Classical failures; λ = 1.227/√V nm (0.1227 nm at 100 V); Davisson-Germer (54 V, 50°); v_p v_g = c²; uncertainty (5.79 × 10⁵ m/s); TISE derivation; ψ conditions; particle in a box (0.376, 1.50, 3.38 eV).
- [ ] Drude vs Sommerfeld table; Fermi-Dirac (f = 0.0205); DOS ∝ √E; bands and gaps; effective mass and holes; intrinsic and extrinsic E_F; σ (4.39 × 10⁻⁴ and 21.6 S/m); n p = n_i².
- [ ] Qubit, Bloch sphere; superposition, entanglement, decoherence, no-cloning; realizations; gate matrices; CNOT, Bell state; HH|0⟩ = |0⟩; BB84 steps.
- [ ] NA derivation (0.2985, 17.4°); fibre types and V number; attenuation (1.5 dB/km); Einstein coefficients; ruby (694.3 nm, three-level) and He-Ne (632.8 nm, four-level); applications.
- [ ] Superconductor basics; H_c (4.29 × 10⁴ A/m) and I_c (269 A); Meissner; Type I vs II; BCS; HTS; applications; nanomaterials, confinement, dots, wires, wells.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Engineering Physics: Theory and Practical | Katiyar, Pandey | Wiley India | [WorldCat](https://search.worldcat.org/search?q=Engineering+Physics+Theory+and+Practical+Katiyar+Pandey) |
| 2 | Introduction to Quantum Mechanics | David J. Griffiths | Prentice Hall | [WorldCat](https://search.worldcat.org/search?q=Introduction+to+Quantum+Mechanics+Griffiths) |
| 3 | Semiconductor Physics and Devices | Donald A. Neamen | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Semiconductor+Physics+and+Devices+Neamen) |
| 4 | Superconductivity | Charles P. Poole Jr. et al. | Elsevier | [WorldCat](https://search.worldcat.org/search?q=Superconductivity+Poole+Elsevier) |
| 5 | Engineering Physics: Theory and Experiments | Srivastava, Yadav | New Age International | [WorldCat](https://search.worldcat.org/search?q=Engineering+Physics+Theory+and+Experiments+Srivastava+Yadav) |
| 6 | Concepts of Modern Physics | Arthur Beiser | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Concepts+of+Modern+Physics+Beiser) |

**Syllabus source:** [AKTU B.Tech 1st year CSE stream course structure and syllabus, 2026-27 (official PDF)](https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf)

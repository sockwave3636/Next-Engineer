---
program: btech
branches: [all]
semester: 7
code: BOE071
name: Filter Design
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-II, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-Syllabus-BTech-Final-Year-Syllabus-2025-26.pdf
units:
  - Filter Fundamentals and Operational Amplifiers
  - First-Order Filters
  - Second-Order Low-Pass and Band-Pass Filters
  - Second-Order Filters with Zeros and Butterworth Filters
  - Chebyshev, Inverse Chebyshev and Cauer Filters
---

# BOE071 Filter Design: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: transfer functions, circuits and comparison tables.
3. **Solved examples**: the numericals that appear in the paper (scaling, slew rate, gain-bandwidth, first-order RC design, Bode plots, Sallen-Key and biquad design, Butterworth and Chebyshev order and poles).
4. **Formulas / key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (filter types and specifications, why analog filters, circuit elements, scaling, op-amp models, slew rate, inverting and non-inverting circuits) and Unit 2 (bilinear transfer functions, first-order passive and active filters, Bode plots, finite gain effect, cascade design).
- **Afternoon (3 hours):** Unit 3 (second-order low-pass and band-pass: ω₀ and Q, Sallen-Key, multiple feedback, integrators, Tow-Thomas and KHN biquads) and Unit 4 (transmission zeros: summing and feedforward; Butterworth response, poles, order).
- **Evening (2 hours):** Unit 5 (Chebyshev, inverse Chebyshev, elliptic/Cauer filters). Then the "Last-hour checklist".
- **In the exam:** always write the transfer function first, sketch the magnitude response with asymptotes, and show the specification diagram (passband, transition band, stopband with A_max and A_min).

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Filter Fundamentals and Operational Amplifiers

### 2-mark definitions

- **Filter:** a circuit that passes signals in some frequency range (passband) and attenuates signals in another (stopband).
- **Transfer function H(s):** the ratio of output to input in the Laplace domain, V_o(s)/V_i(s), a ratio of polynomials N(s)/D(s).
- **Poles and zeros:** roots of the denominator and numerator of H(s). Poles must lie in the left half of the s-plane for stability.
- **Passband edge ω_p and stopband edge ω_s:** the frequencies bounding the passband and the stopband; the region between is the transition band.
- **A_max:** the maximum attenuation (ripple) allowed in the passband, in dB.
- **A_min:** the minimum attenuation required in the stopband, in dB.
- **Active filter:** a filter using op-amps (or other active devices) with resistors and capacitors, avoiding inductors and able to provide gain.
- **Passive filter:** a filter made only of R, L and C.
- **Frequency scaling:** changing the frequency of a normalized filter by a factor k_f, dividing all L and C values by k_f.
- **Impedance (magnitude) scaling:** multiplying all impedances by k_m: R → k_m R, L → k_m L, C → C/k_m; the transfer function is unchanged.
- **Slew rate (SR):** the maximum rate of change of an op-amp's output voltage, in V/µs.
- **Gain-bandwidth product (GBW, f_t):** for a single-pole op-amp, the product of closed-loop gain and bandwidth is constant and equal to the unity-gain frequency.

### Core concepts

**Types of filters by response**

| Type | Passes | Example use |
|---|---|---|
| Low-pass (LP) | Below cutoff | Anti-aliasing before an ADC |
| High-pass (HP) | Above cutoff | Removing DC offset or hum |
| Band-pass (BP) | A band around ω₀ | Radio channel selection |
| Band-stop / notch (BS) | All except a band | Removing 50 Hz mains hum |
| All-pass (AP) | All frequencies, changes phase | Delay and phase equalization |

**Types by approximation:** Butterworth (maximally flat passband), Chebyshev (equal ripple in passband, sharper cutoff), inverse Chebyshev (flat passband, ripple in stopband), elliptic/Cauer (ripple in both, sharpest), Bessel (linear phase, constant delay).

**Why analog filters are needed:** signals in the real world are analog; anti-aliasing filters must come before an ADC and reconstruction filters after a DAC; very high frequencies (RF) are beyond digital processing; analog filters use less power and have no sampling delay in simple cases.

**Circuit elements:** resistors (thermal noise, tolerance), capacitors (prefer stable dielectrics such as C0G/NP0, polystyrene), inductors (bulky, lossy, not integrable at low frequency, hence active RC filters), op-amps.

**Normalization and scaling:** designs are tabulated for ω = 1 rad/s and 1 Ω; to get practical values, apply frequency scaling (ω₀ new = k_f × 1) and impedance scaling (k_m): R_new = k_m R, C_new = C / (k_m k_f), L_new = k_m L / k_f.

**Simulation and modelling:** circuits are checked with SPICE (LTspice, Multisim) using AC sweeps for magnitude and phase, transient analysis for step response, Monte Carlo for tolerance, and op-amp macro-models.

**Op-amp models**

| Model | Assumptions |
|---|---|
| Ideal | Infinite gain, infinite input impedance, zero output impedance, infinite bandwidth; virtual short between inputs |
| Finite DC gain | Gain A₀ (about 10⁵) |
| Single-pole (integrator) model | A(s) = A₀ω_a / (s + ω_a) ≈ ω_t / s, where ω_t = A₀ω_a is the unity-gain frequency |

**Slew rate:** limits large signals; full-power bandwidth f_max = SR / (2π V_p). Exceeding it distorts a sine into a triangle.

**Resistive feedback circuits**

| Circuit | Gain |
|---|---|
| Inverting amplifier | −R_f / R₁ |
| Non-inverting amplifier | 1 + R_f / R₁ |
| Voltage follower | 1 |
| Inverting summer | −R_f (V₁/R₁ + V₂/R₂ + …) |
| Difference amplifier | (R₂/R₁)(V₂ − V₁) with matched resistors |

With a finite-bandwidth op-amp, the closed-loop bandwidth ≈ ω_t / (1 + R_f/R₁) for both inverting and non-inverting circuits (noise gain).

**Applications of op-amps in filters:** integrators (inverting, −1/(sRC)), differentiators, summers, buffers, gain stages, generalized impedance converters (simulated inductors).

### Solved examples

**Example 1: Scaling.** A normalized low-pass prototype uses R = 1 Ω and C = 1 F (ω₀ = 1 rad/s). Required f₀ = 1 kHz with R = 10 kΩ.
- k_f = 2π × 1000 = 6283; k_m = 10⁴.
- C_new = 1 / (10⁴ × 6283) = **15.9 nF**. Check: f₀ = 1 / (2π × 10⁴ × 15.9 × 10⁻⁹) = 1.0 kHz.

**Example 2: Slew rate.** An op-amp with SR = 0.5 V/µs must output a 10 V peak sine. f_max = 0.5 × 10⁶ / (2π × 10) = **7.96 kHz**. Above that the output distorts.

**Example 3: Gain-bandwidth.** An op-amp with f_t = 1 MHz used as a non-inverting amplifier with gain 100 has bandwidth 1 MHz / 100 = **10 kHz**.

### Key points to remember

- Filter types: LP, HP, BP, BS, AP. Approximations: Butterworth, Chebyshev, inverse Chebyshev, elliptic, Bessel.
- Specifications: ω_p, ω_s, A_max, A_min.
- Scaling: R × k_m, C ÷ (k_m k_f), L × k_m ÷ k_f.
- Op-amp: ideal, finite gain, single-pole ω_t/s; SR and full-power bandwidth; GBW.

### Important questions

1. What is a filter? Classify filters and explain filter specifications. Why are analog filters needed?
2. Explain circuit elements and scaling (frequency and impedance) with an example.
3. Explain op-amp models, slew rate and gain-bandwidth product.
4. Explain resistive feedback op-amp circuits and their applications in filters.

---

## Unit 2: First-Order Filters

### 2-mark definitions

- **Bilinear transfer function:** a first-order transfer function H(s) = (a₁s + a₀) / (s + ω₀), ratio of two first-order polynomials.
- **First-order low-pass:** H(s) = K ω₀ / (s + ω₀); slope −20 dB/decade above ω₀.
- **First-order high-pass:** H(s) = K s / (s + ω₀); slope +20 dB/decade below ω₀.
- **First-order all-pass:** H(s) = (s − ω₀)/(s + ω₀) (or its negative): magnitude 1, phase changes from 0 to −180°.
- **Corner (cutoff, −3 dB) frequency:** the frequency where the magnitude is 1/√2 of its passband value.
- **Bode plot:** a plot of magnitude in dB and phase against log frequency, drawn with straight-line asymptotes.
- **Cascade design:** realizing a high-order filter by connecting first- and second-order sections in series, each buffered by an op-amp so they do not load each other.

### Core concepts

**Passive realizations:** RC low-pass (series R, shunt C): H = 1/(1 + sRC), ω₀ = 1/RC. RC high-pass (series C, shunt R): H = sRC/(1 + sRC). RL versions are similar. Passive filters have gain ≤ 1 and depend on the load.

**Active realizations**

| Circuit | Transfer function | Notes |
|---|---|---|
| Inverting low-pass (R₁ in, R₂ ∥ C feedback) | −(R₂/R₁) / (1 + sR₂C) | Gain −R₂/R₁, ω₀ = 1/R₂C |
| Inverting high-pass (R₁ + C in series at input, R₂ feedback) | −(R₂/R₁) s / (s + 1/R₁C) | ω₀ = 1/R₁C |
| Non-inverting low-pass (RC then follower/amplifier) | (1 + R_f/R₁) / (1 + sRC) | Buffered output |
| All-pass (op-amp with RC on non-inverting input, equal R feedback) | (1 − sRC)/(1 + sRC) | Phase shifter |

**Bode plot rules:** a pole at ω₀ gives −20 dB/decade after ω₀ and −45° at ω₀ (phase from 0° to −90° over two decades); a zero gives the opposite. Actual magnitude at the corner is 3 dB below the asymptote.

**Effect of finite op-amp gain:** with a single-pole op-amp A(s) = ω_t/s, an inverting low-pass picks up an extra pole near ω_t/(1 + R₂/R₁); the response departs from ideal near that frequency, the DC gain is slightly reduced (by the factor 1/(1 + (1 + R₂/R₁)/A₀)). Keep ω₀ much smaller than the closed-loop bandwidth.

**Cascade design:** H(s) = H₁(s) H₂(s) … H_k(s); odd-order filters use one first-order section plus second-order sections. Order sections with increasing Q, keep gain distribution to avoid clipping and noise, and use op-amp outputs (low impedance) to drive the next section.

### Solved examples

**Example 1: First-order active low-pass.** Design an inverting low-pass with DC gain −10 and f₀ = 1 kHz using C = 10 nF.
- R₂ = 1 / (2π × 1000 × 10 × 10⁻⁹) = **15.9 kΩ**.
- R₁ = R₂ / 10 = **1.59 kΩ**.
- H(s) = −10 × 6283 / (s + 6283).

**Example 2: Bode plot values.** For H(s) = 100 / (s + 100): DC gain = 1 (0 dB); at ω = 100 rad/s, |H| = 1/√2 (−3 dB), phase −45°; at ω = 1000, |H| ≈ 0.0995 (−20 dB), phase −84.3°; at ω = 10, phase −5.7°.

**Example 3: All-pass phase.** H = (1 − sRC)/(1 + sRC) has phase φ = −2 tan⁻¹(ωRC). With R = 10 kΩ, C = 15.9 nF (RC = 159 µs), at 1 kHz ωRC = 1, so φ = **−90°**.

**Example 4: Cascade of two identical first-order low-pass sections.** Each has ω₀ = 1000 rad/s. Overall H = (1000/(s + 1000))². At ω = 1000, each gives −3 dB, total −6 dB. The −3 dB frequency of the cascade is ω₀ √(√2 − 1) = 0.644 × 1000 = **644 rad/s**, showing that cascading identical sections narrows the bandwidth.

### Key points to remember

- Bilinear: (a₁s + a₀)/(s + ω₀); LP, HP, AP special cases.
- RC low-pass ω₀ = 1/RC; −20 dB/decade; −45° at ω₀.
- Active circuits: inverting LP gain −R₂/R₁ with ω₀ = 1/R₂C.
- Finite gain adds a parasitic pole near the closed-loop bandwidth.
- Cascade with buffered sections; n identical sections reduce the −3 dB frequency by √(2^(1/n) − 1).

### Important questions

1. Explain the bilinear transfer function and its low-pass, high-pass and all-pass forms.
2. Explain passive and active realizations of first-order filters with circuits.
3. Draw the Bode plot of a first-order filter.
4. Explain the effect of finite op-amp gain on first-order filters.
5. Explain cascade design of filters.

---

## Unit 3: Second-Order Low-Pass and Band-Pass Filters

### 2-mark definitions

- **Biquadratic (biquad) transfer function:** H(s) = (n₂s² + n₁s + n₀) / (s² + (ω₀/Q)s + ω₀²).
- **Pole frequency ω₀:** the magnitude of the pole pair, the natural frequency.
- **Pole quality factor Q:** a measure of how close the poles are to the jω-axis; Q = ω₀ / (2|Re(p)|). High Q gives a sharper peak.
- **Bandwidth of a band-pass filter:** BW = ω₀ / Q (between the −3 dB frequencies).
- **Second-order low-pass:** H(s) = K ω₀² / (s² + (ω₀/Q)s + ω₀²).
- **Second-order band-pass:** H(s) = K (ω₀/Q) s / (s² + (ω₀/Q)s + ω₀²).
- **Sallen-Key filter:** a single-op-amp second-order filter using positive feedback through a capacitor (VCVS topology).
- **Multiple feedback (MFB) filter:** a single-op-amp filter with two feedback paths to the inverting input.
- **Integrator:** an op-amp circuit whose output is the integral of the input: V_o = −(1/sRC) V_i.
- **Two-integrator-loop biquad:** a biquad built from two integrators in a loop (Tow-Thomas, KHN), giving independent tuning of ω₀ and Q and several outputs.

### Core concepts

**Design parameters:** ω₀ (centre or cutoff), Q (peaking or selectivity), K (gain). Pole positions p = −ω₀/(2Q) ± jω₀√(1 − 1/(4Q²)). Q = 0.5: real repeated poles; Q = 0.707: Butterworth (maximally flat); Q greater than 0.707: peaking in the low-pass magnitude near ω₀, peak value ≈ Q for large Q.

**Frequency response**

| Filter | At ω = 0 | At ω = ω₀ | At ω → ∞ |
|---|---|---|---|
| Low-pass | K | K Q (magnitude) | Falls at −40 dB/decade |
| Band-pass | 0 | K (peak) | 0, slopes ±20 dB/decade |
| High-pass | 0 | K Q | K |

**Sallen-Key low-pass (unity gain):** R₁, R₂ in series to the non-inverting input; C₁ from the junction to the output (feedback), C₂ from the input to ground.
- ω₀ = 1 / √(R₁R₂C₁C₂).
- Q = √(R₁R₂C₁C₂) / (C₂(R₁ + R₂)).
- With R₁ = R₂ = R: Q = ½ √(C₁/C₂).
- Low sensitivity for low Q; widely used.

**Equal-component Sallen-Key with gain K:** R₁ = R₂ = R, C₁ = C₂ = C: ω₀ = 1/RC, Q = 1/(3 − K); K must be less than 3 for stability, and Q is very sensitive to K near 3.

**MFB band-pass:** inverting, good for moderate Q (up to about 10–20); centre gain −R₃/(2R₁) for equal capacitors, Q = ½ √(R₃/(R₁∥R₂)).

**Integrators:** inverting (Miller) integrator −1/(sRC); lossy integrator (R across C) gives a first-order low-pass; non-inverting integrator; phase-lead and lag errors from finite ω_t cause Q enhancement in biquads.

**Two-integrator-loop biquads**

- **KHN (state variable):** summer + two integrators; gives simultaneous high-pass, band-pass and low-pass outputs; ω₀ = 1/RC; Q set by a resistor ratio.
- **Tow-Thomas:** a lossy integrator, an ideal integrator and an inverter in a loop; low-pass and band-pass outputs; ω₀ and Q set independently (Q by one resistor).
- Advantages: low sensitivity, easy tuning, high Q possible, multiple outputs; uses 3–4 op-amps.

### Solved examples

**Example 1: Sallen-Key Butterworth low-pass.** f₀ = 1 kHz, Q = 0.707, R₁ = R₂ = 10 kΩ, unity gain.
- Q = ½ √(C₁/C₂) = 0.707 → C₁/C₂ = 2.
- √(C₁C₂) = 1 / (2π × 1000 × 10⁴) = 15.92 nF.
- C₂ = 15.92/√2 = **11.25 nF**, C₁ = 15.92 × √2 = **22.5 nF**.

**Example 2: Pole positions.** ω₀ = 1000 rad/s, Q = 2: Re(p) = −1000/4 = −250; Im(p) = 1000 √(1 − 1/16) = 968. Poles at **−250 ± j968**. Low-pass peak ≈ Q × K = 2 (6 dB) near ω₀.

**Example 3: Band-pass.** A band-pass filter has f₀ = 10 kHz and BW = 500 Hz. Q = 10,000/500 = **20**. Lower and upper −3 dB frequencies ≈ 10,000 ∓ 250 = 9.75 kHz and 10.25 kHz (exactly f₀(√(1 + 1/4Q²) ∓ 1/2Q)).

**Example 4: Equal-component Sallen-Key.** For Q = 0.707: K = 3 − 1/Q = 3 − 1.414 = **1.586** (non-inverting gain 1 + R_f/R₁ with R_f/R₁ = 0.586).

### Key points to remember

- Biquad denominator s² + (ω₀/Q)s + ω₀².
- BP bandwidth = ω₀/Q; LP magnitude at ω₀ = KQ.
- Sallen-Key: ω₀ = 1/√(R₁R₂C₁C₂); equal R: Q = ½√(C₁/C₂); equal component: Q = 1/(3 − K).
- KHN gives HP, BP, LP; Tow-Thomas gives LP and BP with independent ω₀, Q.

### Important questions

1. Explain the design parameters ω₀ and Q of second-order filters and their pole locations.
2. Explain second-order low-pass and band-pass circuits (Sallen-Key and MFB) and their frequency response.
3. Design a Sallen-Key low-pass filter for given specifications.
4. Explain integrators and two-integrator-loop biquads (KHN and Tow-Thomas).

---

## Unit 4: Second-Order Filters with Zeros and Butterworth Filters

### 2-mark definitions

- **Transmission zero:** a frequency where the filter output is zero; finite jω-axis zeros give notches (H(jω_z) = 0).
- **Notch filter:** a band-stop filter with zeros on the jω-axis, H(s) = K(s² + ω_z²)/(s² + (ω₀/Q)s + ω₀²).
- **Low-pass notch / high-pass notch:** notch with ω_z > ω₀ (LPN) or ω_z < ω₀ (HPN), used in elliptic filters.
- **Summing method:** realizing zeros by adding (with weights) the HP, BP and LP outputs of a biquad in a summer.
- **Voltage feedforward:** realizing zeros by feeding a fraction of the input forward into the integrators of a biquad, saving an op-amp.
- **Butterworth (maximally flat) response:** |H(jω)|² = 1 / (1 + ε²(ω/ω_p)^(2n)); the first 2n − 1 derivatives of the magnitude are zero at ω = 0.

### Core concepts

**Summing method:** with KHN outputs V_HP, V_BP, V_LP, a summer forms V_o = a V_HP + b V_BP + c V_LP, giving numerator a s² + b (ω₀) s + c ω₀² (scaled) and so any biquad (notch with b = 0 and a, c chosen for ω_z² = c ω₀²/a; all-pass with b negative).

**Voltage feedforward (Tow-Thomas):** inject the input through capacitors and resistors into each integrator and the inverter; the numerator coefficients are set by these feedforward elements; fewer op-amps than summing.

**Butterworth low-pass**

- Magnitude |H(jω)| = 1 / √(1 + (ω/ω₀)^(2n)) with ω₀ the −3 dB frequency (ε = 1). For a general passband ripple A_max: ε = √(10^(A_max/10) − 1).
- Roll-off −20n dB/decade; no ripple; monotonic.
- **Poles:** lie on a circle of radius ω₀ (normalized 1) in the left half-plane, equally spaced by π/n: p_k = ω₀ e^(j(π/2 + (2k − 1)π/2n)), k = 1…n.
- Each complex pair gives a second-order section with Q_k = 1 / (2 sin((2k − 1)π/2n)).
- **Order:** n ≥ log[(10^(A_min/10) − 1)/(10^(A_max/10) − 1)] / (2 log(ω_s/ω_p)).
- Butterworth filters have no finite transmission zeros (all zeros at infinity); adding jω-axis zeros sharpens the cutoff but changes the type.

**Normalized Butterworth polynomials (ω₀ = 1)**

| n | Polynomial |
|---|---|
| 1 | s + 1 |
| 2 | s² + 1.414s + 1 |
| 3 | (s + 1)(s² + s + 1) |
| 4 | (s² + 0.765s + 1)(s² + 1.848s + 1) |
| 5 | (s + 1)(s² + 0.618s + 1)(s² + 1.618s + 1) |

### Solved examples

**Example 1: Butterworth order.** Specs: A_max = 1 dB up to 1 kHz, A_min = 40 dB at 5 kHz.
- (10⁴ − 1)/(10^0.1 − 1) = 9999 / 0.2589 = 38,622.
- n ≥ log(38,622) / (2 log 5) = 4.587 / 1.398 = 3.28, so **n = 4**.

**Example 2: Butterworth third-order poles and Q.** n = 3: poles at angles 120°, 180°, 240° on the unit circle: −1 and −0.5 ± j0.866. The quadratic section s² + s + 1 has Q = 1. Polynomial (s + 1)(s² + s + 1) = s³ + 2s² + 2s + 1.

**Example 3: Fourth-order Butterworth section Q values.** Q₁ = 1/(2 sin 22.5°) = 1/0.765 = **1.307**; Q₂ = 1/(2 sin 67.5°) = 1/1.848 = **0.541**. Realize as two cascaded Sallen-Key sections (low Q first is common for dynamic range).

**Example 4: Notch.** To remove 50 Hz hum with a notch of Q = 5: ω_z = ω₀ = 2π × 50 = 314 rad/s, H(s) = (s² + 314²)/(s² + 62.8 s + 314²). Rejection band (−3 dB) width = 50/5 = 10 Hz.

### Key points to remember

- Zeros by summing (extra op-amp) or feedforward (no extra op-amp).
- Notch numerator s² + ω_z²; LPN if ω_z > ω₀, HPN if ω_z < ω₀.
- Butterworth: maximally flat, poles on a circle, Q_k = 1/(2 sin((2k − 1)π/2n)).
- Order formula with log ratio.

### Important questions

1. Explain second-order filters with arbitrary transmission zeros: the summing method and voltage feedforward.
2. Explain notch filters (LPN, HPN).
3. Explain the Butterworth low-pass response, its pole locations and maximally flat property.
4. Find the order of a Butterworth filter from specifications and design it with cascaded sections.

---

## Unit 5: Chebyshev, Inverse Chebyshev and Cauer Filters

### 2-mark definitions

- **Chebyshev polynomial C_n(x):** C_n(x) = cos(n cos⁻¹ x) for |x| ≤ 1 and cosh(n cosh⁻¹ x) for |x| greater than 1; C₀ = 1, C₁ = x, C_(n+1) = 2x C_n − C_(n−1).
- **Chebyshev (type I) filter:** equal ripple in the passband, monotonic stopband: |H(jω)|² = 1 / (1 + ε² C_n²(ω/ω_p)).
- **Ripple factor ε:** ε = √(10^(A_max/10) − 1).
- **Inverse Chebyshev (type II) filter:** flat (monotonic) passband and equal ripple in the stopband, with finite jω-axis zeros.
- **Cauer (elliptic) filter:** equal ripple in both passband and stopband; the sharpest transition for a given order; uses Chebyshev rational (elliptic) functions.
- **Chebyshev rational function:** the rational function R_n(ω) used in elliptic filters, which equioscillates in both bands.

### Core concepts

**Chebyshev magnitude:** oscillates between 1 and 1/√(1 + ε²) in the passband (n/2 ripples), then falls as roughly 20 log(ε 2^(n−1) ω^n) dB in the stopband. At ω = 0 the magnitude is 1 for odd n and 1/√(1 + ε²) for even n.

**Pole locations (normalized ω_p = 1):** poles lie on an ellipse. With a = (1/n) sinh⁻¹(1/ε):
- σ_k = −sinh a × sin((2k − 1)π/2n), ω_k = cosh a × cos((2k − 1)π/2n), k = 1…n.

**Order:** n ≥ cosh⁻¹(√((10^(A_min/10) − 1)/(10^(A_max/10) − 1))) / cosh⁻¹(ω_s/ω_p).

**Butterworth vs Chebyshev**

| Feature | Butterworth | Chebyshev |
|---|---|---|
| Passband | Maximally flat | Equal ripple |
| Transition | Gradual | Sharper for same order |
| Order for given specs | Higher | Lower |
| Pole locus | Circle | Ellipse |
| Pole Q | Lower | Higher (more sensitive) |
| Phase / delay | Better | Worse (more overshoot) |

**Inverse Chebyshev:** |H|² = ε²C_n²(ω_s/ω) / (1 + ε²C_n²(ω_s/ω)). Poles are reciprocals of Chebyshev poles; zeros on the jω-axis at ω_s / cos((2k − 1)π/2n). Same order as Chebyshev for the same specs, but flat passband and better delay; realized with LPN sections.

**Cauer (elliptic) filters:** specified by n, A_max, A_min and ω_s/ω_p; poles and zeros come from tables or software (MATLAB `ellip`). Lowest order for given specs; poles and zeros realized as LPN/HPN biquads in cascade. Disadvantages: worst phase linearity, higher pole Q, more sensitivity.

**Design procedure (any approximation):** (1) normalize specs, (2) find order n, (3) find poles (and zeros) from formulas or tables, (4) group into second-order sections (pair each pole pair with the nearest zero pair for elliptic), (5) choose circuits (Sallen-Key, MFB, Tow-Thomas, KHN), (6) frequency and impedance scale, (7) simulate and tune.

### Solved examples

**Example 1: Chebyshev order.** Same specs as Unit 4 (A_max = 1 dB at 1 kHz, A_min = 40 dB at 5 kHz).
- √38,622 = 196.5; cosh⁻¹(196.5) = 5.97; cosh⁻¹(5) = 2.29.
- n ≥ 5.97/2.29 = 2.61, so **n = 3** (Butterworth needed 4).

**Example 2: Third-order Chebyshev poles (1 dB ripple).** ε = √(10^0.1 − 1) = 0.5088; a = (1/3) sinh⁻¹(1/0.5088) = 0.476; sinh a = 0.494, cosh a = 1.115.
- k = 1: σ = −0.494 × sin 30° = −0.247, ω = 1.115 × cos 30° = 0.966.
- k = 2: σ = −0.494, ω = 0.
- Poles: **−0.247 ± j0.966 and −0.494** (normalized to ω_p = 1).
- Quadratic section: ω₀ = √(0.247² + 0.966²) = 0.997, Q = 0.997 / (2 × 0.247) = **2.02**. First-order section at 0.494.

**Example 3: Stopband check.** At ω = 5ω_p, a third-order Chebyshev with ε = 0.5088 gives attenuation 10 log(1 + ε² cosh²(3 cosh⁻¹5)) = **47.8 dB**, meeting 40 dB. A third-order Butterworth (−3 dB at ω_p) gives only 10 log(1 + 5⁶) = 41.9 dB at 5ω_p, and with a 1 dB passband edge it falls short, which is why n = 4 was needed.

**Example 4: Chebyshev polynomial.** C₂(x) = 2x² − 1; C₃(x) = 4x³ − 3x. C₃(5) = 500 − 15 = 485 (= cosh(3 cosh⁻¹ 5)).

### Formulas

| Item | Formula |
|---|---|
| Ripple factor | ε = √(10^(A_max/10) − 1) |
| Butterworth order | n ≥ log[(10^(A_min/10) − 1)/(10^(A_max/10) − 1)] / (2 log(ω_s/ω_p)) |
| Chebyshev order | n ≥ cosh⁻¹√(…) / cosh⁻¹(ω_s/ω_p) |
| Chebyshev poles | σ_k = −sinh a sin θ_k, ω_k = cosh a cos θ_k, θ_k = (2k − 1)π/2n, a = sinh⁻¹(1/ε)/n |
| Butterworth Q | Q_k = 1/(2 sin θ_k) |
| Biquad Q from poles | Q = √(σ² + ω²)/(2\|σ\|) |

### Important questions

1. Explain Chebyshev polynomials and the equal-ripple magnitude response.
2. Find the pole locations of a Chebyshev filter and design it. Compare Butterworth and Chebyshev filters.
3. Explain inverse Chebyshev filters: specifications, pole and zero locations and design.
4. Explain Cauer (elliptic) filters and Chebyshev rational functions.

---

## Last-hour checklist

- [ ] Filter types and approximations; specs ω_p, ω_s, A_max, A_min; why analog filters.
- [ ] Scaling (15.9 nF example); op-amp models; slew rate (7.96 kHz); GBW (10 kHz); resistive feedback circuits.
- [ ] Bilinear functions; first-order active LP design (15.9 kΩ, 1.59 kΩ); Bode values; all-pass phase; cascade (644 rad/s).
- [ ] Biquad form; ω₀ and Q; pole positions; Sallen-Key design (11.25 nF, 22.5 nF); equal-component K = 1.586; MFB; KHN and Tow-Thomas.
- [ ] Zeros by summing and feedforward; notch (50 Hz).
- [ ] Butterworth magnitude, poles, polynomials table, order (n = 4), section Q (1.307, 0.541).
- [ ] Chebyshev polynomials, order (n = 3), poles (−0.247 ± j0.966, −0.494), Q 2.02; comparison table.
- [ ] Inverse Chebyshev and Cauer filters; design procedure.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Design of Analog Filters (2nd Indian ed.) | Rolf Schaumann, Haiqiao Xiao, Mac E. Van Valkenburg | Oxford University Press | [WorldCat](https://search.worldcat.org/search?q=Design+of+Analog+Filters+Schaumann+Van+Valkenburg) |
| 2 | Applications and Design with Analog Integrated Circuits (2nd ed.) | J. Michael Jacob | Pearson | [WorldCat](https://search.worldcat.org/search?q=Applications+and+Design+with+Analog+Integrated+Circuits+Jacob) |
| 3 | Continuous-Time Active Filter Design | T. Deliyannis, Yichuang Sun, J. K. Fidler | CRC Press | [WorldCat](https://search.worldcat.org/search?q=Continuous-Time+Active+Filter+Design+Deliyannis) |

**Syllabus source:** [AKTU Open Elective syllabus for B.Tech final year, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-Syllabus-BTech-Final-Year-Syllabus-2025-26.pdf)

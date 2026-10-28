---
program: btech
branches: [cse, it, cse-aiml, cse-ds, aids, ece, ee]
semester: 2
code: AEC201A
name: Fundamentals of Electronics Engineering
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 1st year, 2026-27 onwards
syllabusSource: https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf
units:
  - Diodes and Power Supplies
  - Transistors (BJT and MOSFET)
  - Operational Amplifiers
  - Digital Electronics
  - Electronic Systems and Interfacing
---

# AEC201A Fundamentals of Electronics Engineering: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. The same course is taught as AEC101A in semester 1 for the other group of students. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: circuits described in words, formulas and comparison tables.
3. **Solved examples**: the numericals examiners set (rectifier output, ripple, Zener regulator, LED resistor, BJT currents and bias point, transistor switch, MOSFET current, op-amp gains, number systems, K-map, ADC resolution, PWM, UART, LDO).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (pn junction, rectifiers, filter, Zener regulator, LED) and Unit 2 (BJT regions, CE amplifier, transistor switch, MOSFET). Practise the Zener and bias-point numericals.
- **Afternoon (3 hours):** Unit 3 (ideal op-amp, inverting, non-inverting, summing, comparator) and Unit 4 (number systems, Boolean algebra, K-map, adders, MUX, flip-flops).
- **Evening (2 hours):** Unit 5 (microcontroller, ADC, PWM, UART, SPI, I2C, wireless, power management, IoT examples), then the "Last-hour checklist".
- **In the exam:** draw the diode V-I curve, the bridge rectifier with its waveforms, the Zener regulator, the CE amplifier, the transistor switch with relay and flyback diode, each op-amp circuit, the K-map with groups circled, and a block diagram for every system question.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit. Internal assessment carries another 30 marks.

---

## Unit 1: Diodes and Power Supplies

### 2-mark definitions

- **pn junction:** the boundary formed when p-type and n-type regions are made in one crystal. Diffusion of carriers leaves a **depletion region** of fixed ions with a built-in barrier potential (about 0.7 V for silicon, 0.3 V for germanium).
- **Forward bias:** p side made positive with respect to n side. The barrier falls and a large current flows once the voltage passes the **cut-in (knee) voltage**.
- **Reverse bias:** p side negative. The depletion region widens and only a tiny reverse saturation current (nA to µA) flows until **breakdown**.
- **Ideal diode:** a perfect switch: zero resistance when forward biased, infinite resistance when reverse biased.
- **Rectifier:** a circuit that converts AC to pulsating DC using diodes.
- **Ripple factor (γ):** the ratio of the RMS value of the AC component to the DC value of the output. Smaller is better.
- **Peak inverse voltage (PIV):** the largest reverse voltage a diode must withstand in a circuit. The chosen diode's rating must exceed it.
- **Zener diode:** a heavily doped diode designed to work in reverse breakdown, where its voltage stays almost constant (V_Z) over a wide range of current. Used as a voltage regulator.
- **LED:** a pn junction that emits light when forward biased, as electrons recombine with holes (GaAs, GaAsP, GaN). Forward drop is about 1.8 V to 3.3 V depending on colour.
- **Line and load regulation:** how much the output voltage changes with a change in input voltage (line) or load current (load).

### Core concepts

**Diode models (approximations):**
1. **Ideal:** short when on, open when off.
2. **Constant-drop (practical):** a 0.7 V drop when on, open when off. Use this in numericals unless told otherwise.
3. **Piecewise-linear:** 0.7 V source in series with a small bulk resistance r_d.
- **V-I characteristic:** forward current rises exponentially after cut-in; reverse current stays tiny until breakdown (avalanche or Zener). The diode equation is I = I_S(e^(V/ηV_T) − 1), with V_T ≈ 26 mV at room temperature.
- **Diode as a switch:** on when forward biased, off when reverse biased. Used for reverse-polarity protection and as the flyback diode across a relay coil.

**Rectifiers (V_m = peak secondary voltage):**

| Quantity | Half-wave | Full-wave centre-tap | Full-wave bridge |
|---|---|---|---|
| Diodes | 1 | 2 | 4 |
| V_dc | V_m/π | 2V_m/π | 2V_m/π |
| V_rms | V_m/2 | V_m/√2 | V_m/√2 |
| Ripple factor | 1.21 | 0.482 | 0.482 |
| Efficiency (max) | 40.6% | 81.2% | 81.2% |
| Ripple frequency | f (50 Hz) | 2f (100 Hz) | 2f (100 Hz) |
| PIV per diode | V_m | 2V_m | V_m |
| Transformer | Ordinary | Centre-tapped needed | Ordinary |

- **Bridge working:** in the positive half cycle D1 and D2 conduct; in the negative half cycle D3 and D4 conduct. Current through the load is in the same direction in both halves.
- **Bridge advantages:** no centre-tap, PIV is only V_m, smaller transformer. Disadvantage: two diode drops (1.4 V) in the path.

**Capacitor filter:**
- A large capacitor across the load charges to the peak and discharges slowly through the load between peaks.
- **Peak-to-peak ripple:** V_r ≈ I_dc/(f_r C), where f_r is the ripple frequency (2f for full wave). So V_r = I/(2fC) for a full-wave rectifier.
- Bigger C or smaller load current gives less ripple.

**Zener voltage regulator:**
- A series resistor R_S from the unregulated supply, with the Zener and load R_L in parallel.
- I_S = (V_in − V_Z)/R_S; I_L = V_Z/R_L; I_Z = I_S − I_L.
- The Zener absorbs the extra current to keep V_Z constant. It must stay above I_Z(min) and below I_Z(max) = P_Z/V_Z.

**LED with series resistor:** R = (V_supply − V_F)/I_F. Without it, the current would rise until the LED burns out.

**Applications:**
- **5 V / 3.3 V DC supply chain:** transformer (step down) → bridge rectifier → capacitor filter → regulator IC (7805 for 5 V, an LDO such as AMS1117 for 3.3 V) → load.
- **USB charger:** a mains adapter that rectifies 230 V AC, uses a switching (flyback) converter with a high-frequency transformer for isolation, and gives a regulated 5 V DC on the USB port.

### Solved examples

**Example 1 (rectifier output).** A transformer gives a peak secondary voltage of 12 V. Find V_dc for a half-wave and a bridge rectifier (ideal diodes).
- Half-wave: V_dc = V_m/π = 12/π = **3.82 V**.
- Bridge: V_dc = 2V_m/π = 24/π = **7.64 V**. (With practical diodes the bridge peak falls to 12 − 1.4 = 10.6 V.)

**Example 2 (filter ripple).** A full-wave rectifier on 50 Hz mains feeds 100 mA into a load with a 1000 µF filter capacitor. Find the peak-to-peak ripple.
- V_r = I/(2fC) = 0.1/(2 × 50 × 1000 × 10⁻⁶) = **1 V**.

**Example 3 (Zener regulator).** V_in = 12 V, V_Z = 5.1 V, R_S = 220 Ω, R_L = 510 Ω. Find I_S, I_L, I_Z and the Zener power.
- I_S = (12 − 5.1)/220 = **31.4 mA**.
- I_L = 5.1/510 = **10 mA**.
- I_Z = 31.4 − 10 = **21.4 mA**.
- P_Z = 5.1 × 0.0214 = **0.109 W**, so a 0.5 W Zener is safe.

**Example 4 (LED resistor).** A red LED (V_F = 2 V) must carry 10 mA from a 5 V supply. R = (5 − 2)/0.01 = **300 Ω**; use the next standard value, 330 Ω.

### Key points to remember

- Silicon cut-in 0.7 V; V_T ≈ 26 mV; reverse current tiny until breakdown.
- Half-wave: V_m/π, γ = 1.21, η = 40.6%. Full-wave: 2V_m/π, γ = 0.482, η = 81.2%.
- PIV: half-wave V_m, centre-tap 2V_m, bridge V_m.
- Filter ripple V_r = I/(2fC); Zener: I_Z = I_S − I_L.
- LED resistor R = (V − V_F)/I.

### Important questions

1. Explain the pn junction under forward and reverse bias with the V-I characteristic. Compare the ideal and practical diode.
2. Explain the full-wave bridge rectifier with circuit and waveforms. Derive V_dc, ripple factor and efficiency.
3. Explain the capacitor filter and derive the ripple voltage.
4. Explain the Zener diode as a voltage regulator and solve a numerical.
5. Draw the block diagram of a regulated 5 V / 3.3 V power supply and explain each block. How does a USB charger work?

---

## Unit 2: Transistors (BJT and MOSFET)

### 2-mark definitions

- **BJT (bipolar junction transistor):** a three-layer device (emitter, base, collector) in NPN or PNP form, controlled by base current. Both electrons and holes carry current.
- **Emitter, base, collector:** the emitter is heavily doped (supplies carriers), the base is thin and lightly doped, and the collector is moderately doped and largest (collects carriers and dissipates heat).
- **Current relations:** I_E = I_B + I_C; β = I_C/I_B (typically 50 to 300); α = I_C/I_E = β/(β + 1), just under 1.
- **Regions of operation:** **cut-off** (both junctions reverse biased, transistor off), **active** (BE forward, BC reverse, used for amplification), **saturation** (both forward biased, transistor fully on, V_CE(sat) ≈ 0.2 V).
- **Q-point (operating point):** the DC values (I_C, V_CE) set by biasing, placed in the middle of the active region for an amplifier.
- **FET:** a unipolar, voltage-controlled transistor; the gate voltage controls current in a channel between source and drain. It has very high input resistance.
- **MOSFET:** a FET whose gate is insulated from the channel by a thin oxide layer. An **n-channel enhancement MOSFET** conducts only when V_GS exceeds the threshold voltage V_T.
- **PWM (pulse width modulation):** switching a load fully on and off quickly; the average power is controlled by the **duty cycle** D = t_on/T.

### Core concepts

**NPN working (active region):** the forward-biased BE junction injects electrons from the emitter into the thin base. Very few recombine (small I_B); most diffuse across into the reverse-biased collector, so I_C ≈ βI_B.

**CE (common-emitter) amplifier:**
- Input between base and emitter, output between collector and emitter.
- Voltage gain A_v ≈ −g_m R_C (or −βR_C/r_in); the output is **180° out of phase** with the input.
- High voltage and current gain, so CE is the most used configuration.
- **Fixed bias:** I_B = (V_CC − V_BE)/R_B; I_C = βI_B; V_CE = V_CC − I_C R_C.
- Voltage-divider bias with an emitter resistor gives a more stable Q-point, because it is not sensitive to β.

**Comparison of configurations:**

| Feature | CB | CE | CC (emitter follower) |
|---|---|---|---|
| Input resistance | Low | Medium | High |
| Output resistance | High | Medium | Low |
| Current gain | α (< 1) | β (high) | β + 1 |
| Voltage gain | High | High | ≈ 1 |
| Phase shift | 0° | 180° | 0° |
| Use | High-frequency | General amplifier | Buffer |

**Transistor as a switch:**
- **OFF:** input low, transistor in cut-off, I_C ≈ 0, V_CE ≈ V_CC.
- **ON:** input high, transistor in saturation, V_CE ≈ 0.2 V; load gets almost full V_CC.
- Design: I_B must exceed I_C/β (give 2 to 5 times overdrive); R_B = (V_in − 0.7)/I_B.
- **Relay driver:** a microcontroller pin drives the base of an NPN transistor through R_B; the relay coil is in the collector; a **flyback diode** across the coil absorbs the voltage spike when the coil switches off.

**MOSFET:**
- **n-MOSFET (enhancement):** for V_GS < V_T, no channel (off). For V_GS > V_T, an inversion layer forms under the gate and current flows.
- In saturation, I_D = k(V_GS − V_T)².
- **MOSFET as a switch:** the gate takes almost no current, so a logic-level MOSFET is driven straight from a microcontroller pin. Low R_DS(on) means little loss. Used for PWM motor and LED control.

**BJT vs MOSFET:**

| Feature | BJT | MOSFET |
|---|---|---|
| Control | Current (base) | Voltage (gate) |
| Input resistance | Low to medium | Very high |
| Carriers | Bipolar | Unipolar |
| Switching speed | Moderate | Fast |
| Typical use | Small amplifiers, drivers | Digital ICs (CMOS), power switching |

**Power amplifiers:** a **class A** amplifier conducts for the full 360° of the input, giving low distortion but a maximum efficiency of only 25% (resistive load) or 50% (transformer coupled). Classes B and AB conduct for about half the cycle and are more efficient.

### Solved examples

**Example 1 (BJT currents).** A transistor has β = 100 and I_B = 20 µA. Find I_C, I_E and α.
- I_C = 100 × 20 µA = **2 mA**; I_E = 2.02 mA; α = 100/101 = **0.990**.

**Example 2 (fixed bias Q-point).** V_CC = 12 V, R_B = 470 kΩ, R_C = 2.2 kΩ, β = 100, V_BE = 0.7 V.
- I_B = (12 − 0.7)/470 kΩ = **24.0 µA**.
- I_C = 100 × 24.0 µA = **2.40 mA**.
- V_CE = 12 − 2.40 × 2.2 = **6.71 V**. Since V_CE is well above 0.2 V and below V_CC, the transistor is in the active region.

**Example 3 (relay driver).** A 12 V relay coil draws 60 mA. The transistor has β(min) = 50 and is driven from a 5 V GPIO pin. Find R_B with 2 times overdrive.
- I_B(min) = 60/50 = 1.2 mA; with overdrive I_B = 2.4 mA.
- R_B = (5 − 0.7)/2.4 mA = 1.79 kΩ; use **1.8 kΩ** (gives 2.39 mA).

**Example 4 (MOSFET).** An n-MOSFET has k = 0.5 mA/V² and V_T = 2 V. At V_GS = 4 V, I_D = 0.5 × (4 − 2)² = **2 mA**.

**Example 5 (PWM).** A 5 V PWM signal with 25% duty cycle gives an average voltage of 0.25 × 5 = **1.25 V**.

### Key points to remember

- I_E = I_B + I_C; β = I_C/I_B; α = β/(β + 1).
- Active: BE forward, BC reverse. Saturation: both forward. Cut-off: both reverse.
- Fixed bias: I_B = (V_CC − 0.7)/R_B; V_CE = V_CC − I_C R_C.
- Switch: R_B = (V_in − 0.7)/I_B; always use a flyback diode with a relay.
- MOSFET: voltage controlled; I_D = k(V_GS − V_T)²; class A efficiency 25% max.

### Important questions

1. Explain the construction and working of an NPN transistor. Define α and β and derive the relation between them.
2. Explain the input and output characteristics of a CE configuration and mark the three regions.
3. Explain a CE amplifier and fixed bias with a numerical. Compare CB, CE and CC.
4. Explain the transistor as a switch. Design a relay driver circuit for a microcontroller.
5. Explain the construction and working of an n-channel enhancement MOSFET. Compare BJT and MOSFET. What is PWM?

---

## Unit 3: Operational Amplifiers

### 2-mark definitions

- **Operational amplifier (op-amp):** a high-gain DC-coupled differential amplifier IC with two inputs (inverting −, non-inverting +) and one output. V_o = A_OL(V₊ − V₋).
- **Ideal op-amp:** infinite open-loop gain, infinite input resistance, zero output resistance, infinite bandwidth, infinite CMRR, zero offset and infinite slew rate.
- **Virtual short (virtual ground):** with negative feedback, V₊ ≈ V₋ because the gain is so high. If V₊ is grounded, V₋ is at 0 V without being connected to ground.
- **CMRR (common-mode rejection ratio):** the ratio of differential gain to common-mode gain, A_d/A_cm, usually in dB. High CMRR means noise common to both inputs is rejected.
- **Slew rate:** the maximum rate of change of the output voltage, in V/µs (0.5 V/µs for the 741).
- **Input offset voltage:** the small DC voltage that must be applied between inputs to make the output zero.
- **Comparator:** an op-amp used without feedback; the output swings to +V_sat or −V_sat depending on which input is larger.

### Core concepts

**Practical 741 vs ideal:**

| Parameter | Ideal | 741 (typical) |
|---|---|---|
| Open-loop gain | ∞ | 2 × 10⁵ |
| Input resistance | ∞ | 2 MΩ |
| Output resistance | 0 | 75 Ω |
| Bandwidth | ∞ | 1 MHz (unity gain) |
| CMRR | ∞ | 90 dB |
| Slew rate | ∞ | 0.5 V/µs |

- Output cannot exceed the supply. With ±15 V supplies the saturation voltage is about ±13.5 V.

**Standard circuits (derive using virtual short and zero input current):**
1. **Inverting amplifier:** input through R₁ to the − input, R_f from output to − input, + input grounded. V_o = −(R_f/R₁)V_in.
2. **Non-inverting amplifier:** input to + input; R₁ from − input to ground and R_f from output to − input. V_o = (1 + R_f/R₁)V_in.
3. **Voltage follower (buffer):** output tied to − input, input on +. V_o = V_in, gain 1, very high input resistance. Used to stop a sensor being loaded.
4. **Summing amplifier (inverting):** V_o = −R_f(V₁/R₁ + V₂/R₂ + V₃/R₃). With equal resistors, V_o = −(V₁ + V₂ + V₃). Used as an audio mixer and a simple DAC.
5. **Difference amplifier:** with all resistors in ratio R_f/R₁, V_o = (R_f/R₁)(V₂ − V₁).
6. **Comparator:** V_o = +V_sat if V₊ > V₋, else −V_sat.

**Derivation of inverting gain (write this in the exam):**
- Because of the virtual ground, V₋ = 0.
- Current through R₁: I = V_in/R₁. No current enters the op-amp, so the same current flows through R_f.
- V_o = 0 − I R_f = −(R_f/R₁)V_in.

**Applications:**
- **Automatic night lamp:** an LDR and a fixed resistor form a voltage divider into a comparator. In darkness the LDR resistance rises, the divider voltage crosses the reference set by a potentiometer, the comparator output goes high and switches on the lamp through a transistor or relay.
- **ECG amplifier:** heart signals are about 1 mV with large common-mode mains interference. A **differential (instrumentation) amplifier** with high CMRR amplifies only the difference between two electrodes and rejects the common 50 Hz noise.

### Solved examples

**Example 1 (inverting).** R₁ = 10 kΩ, R_f = 100 kΩ, V_in = 0.5 V. Gain = −100/10 = **−10**; V_o = **−5 V**.

**Example 2 (non-inverting).** Same resistors: gain = 1 + 100/10 = **11**; for 0.5 V in, V_o = **5.5 V**.

**Example 3 (summing).** R_f = R₁ = R₂ = R₃ = 10 kΩ; inputs 1 V, 2 V, 3 V. V_o = −(1 + 2 + 3) = **−6 V**.

**Example 4 (saturation).** An inverting amplifier of gain −20 is fed 1 V from ±15 V supplies. The ideal output would be −20 V, but the op-amp saturates at about **−13.5 V**.

**Example 5 (difference amplifier).** R_f/R₁ = 10, V₂ = 2.1 V, V₁ = 2.0 V. V_o = 10 × 0.1 = **1 V**.

### Key points to remember

- Ideal: A = ∞, R_in = ∞, R_out = 0; virtual short V₊ = V₋.
- Inverting −R_f/R₁; non-inverting 1 + R_f/R₁; follower 1.
- Summing −R_f ΣV_i/R_i; difference (R_f/R₁)(V₂ − V₁).
- Comparator: no feedback, output ±V_sat.
- 741: gain 2 × 10⁵, R_in 2 MΩ, slew rate 0.5 V/µs, CMRR 90 dB.

### Important questions

1. List the characteristics of an ideal op-amp and compare with a practical 741.
2. Derive the gain of inverting and non-inverting amplifiers. What is a virtual ground?
3. Explain the summing amplifier and the voltage follower with applications.
4. Explain the op-amp comparator and design an automatic night lamp.
5. Explain a differential amplifier and CMRR. Why is it used in an ECG amplifier?

---

## Unit 4: Digital Electronics

### 2-mark definitions

- **Number system:** a way of writing numbers with a base (radix): binary (2), octal (8), decimal (10), hexadecimal (16).
- **Logic levels:** voltage ranges read as 0 (LOW) and 1 (HIGH). In 5 V TTL, LOW is below 0.8 V and HIGH is above 2 V at the input; 3.3 V CMOS logic uses lower thresholds.
- **Universal gates:** NAND and NOR, because any Boolean function can be built using only one of them.
- **De Morgan's theorems:** (A + B)' = A'·B' and (A·B)' = A' + B'.
- **K-map (Karnaugh map):** a grid of 2ⁿ cells in Gray-code order used to simplify a Boolean expression by grouping adjacent 1s in groups of 1, 2, 4, 8.
- **Combinational circuit:** output depends only on present inputs (adder, MUX). **Sequential circuit:** output depends on present inputs and past state (flip-flops, counters).
- **Multiplexer (MUX):** a data selector with 2ⁿ inputs, n select lines and one output.
- **Flip-flop:** a 1-bit memory element with two stable states.

### Core concepts

**Conversions:**
- **Decimal to binary:** divide the integer part by 2 and read remainders bottom up; multiply the fraction by 2 and read the integer parts top down.
- **Binary to hex/octal:** group bits in fours (hex) or threes (octal) from the binary point.
- **2's complement:** invert all bits and add 1. Used to represent negative numbers and to subtract by adding.

**Basic gates:**

| Gate | Expression | Output is 1 when |
|---|---|---|
| AND | A·B | All inputs are 1 |
| OR | A + B | Any input is 1 |
| NOT | A' | Input is 0 |
| NAND | (A·B)' | Any input is 0 |
| NOR | (A + B)' | All inputs are 0 |
| XOR | A ⊕ B = A'B + AB' | Inputs differ |
| XNOR | (A ⊕ B)' | Inputs are equal |

**Boolean laws:** identity (A + 0 = A, A·1 = A), null (A + 1 = 1, A·0 = 0), idempotent (A + A = A), complement (A + A' = 1, A·A' = 0), involution ((A')' = A), commutative, associative, distributive (A + BC = (A + B)(A + C)), absorption (A + AB = A, A(A + B) = A), and consensus.

**K-map rules:**
1. Draw the map with Gray-code labels (00, 01, 11, 10).
2. Put 1s for each minterm.
3. Make the largest possible groups of 1, 2, 4, 8 adjacent cells (edges wrap round; corners are adjacent in a 4-variable map).
4. Every 1 must be covered; overlap is allowed.
5. Each group gives a product term of the variables that do not change. Don't-care cells (X) may be used as 1s to make bigger groups.

**Adders:**
- **Half adder:** S = A ⊕ B; C = AB. (Two inputs, no carry in.)
- **Full adder:** S = A ⊕ B ⊕ C_in; C_out = AB + C_in(A ⊕ B). It can be built from two half adders and an OR gate.

**Multiplexer (4:1):** Y = S₁'S₀'I₀ + S₁'S₀I₁ + S₁S₀'I₂ + S₁S₀I₃.

**Flip-flops (concept):**
- **SR latch (NOR):** S = 1 sets Q = 1, R = 1 resets Q = 0, S = R = 0 holds, S = R = 1 is invalid.
- **D flip-flop:** on the clock edge, Q takes the value of D (Q⁺ = D). It removes the invalid state and is the basic storage cell of registers.

| S | R | Q⁺ (SR) |
|---|---|---|
| 0 | 0 | Q (hold) |
| 0 | 1 | 0 (reset) |
| 1 | 0 | 1 (set) |
| 1 | 1 | Invalid |

### Solved examples

**Example 1 (conversions).**
- (45.625)₁₀: 45 = 101101 and 0.625 → 1.25 (1), 0.5 (0), 1.0 (1), so **(101101.101)₂**.
- (1AF)₁₆ = 1 × 256 + 10 × 16 + 15 = **(431)₁₀**.
- −18 in 8-bit 2's complement: +18 = 00010010; invert 11101101; add 1 → **11101110**.

**Example 2 (K-map, 3 variables).** Simplify F(A, B, C) = Σm(1, 3, 5, 6, 7).
- The four cells with C = 1 (m1, m3, m5, m7) form a quad: **C**.
- m6 and m7 form a pair: **AB**.
- **F = C + AB**.

**Example 3 (K-map, 4 variables).** Simplify F(A, B, C, D) = Σm(0, 1, 2, 5, 8, 9, 10).
- Quad m0, m1, m8, m9 (B = 0, C = 0): **B'C'**.
- Quad of the four corners m0, m2, m8, m10 (B = 0, D = 0): **B'D'**.
- Pair m1, m5 (A = 0, C = 0, D = 1): **A'C'D**.
- **F = B'C' + B'D' + A'C'D**.

**Example 4 (Boolean simplification).** Simplify (AB + A'B)'. Inside the bracket, AB + A'B = B(A + A') = B, so the expression is **B'**. Also, by De Morgan, (A'B')' = A + B.

### Key points to remember

- Conversions both ways; 2's complement = invert + 1.
- NAND and NOR are universal; De Morgan: break the bar, change the sign.
- K-map: groups of powers of 2, largest first, edges wrap.
- Half adder S = A ⊕ B, C = AB; full adder S = A ⊕ B ⊕ C_in, C_out = AB + C_in(A ⊕ B).
- SR: S = R = 1 invalid; D flip-flop Q⁺ = D.

### Important questions

1. Convert numbers between decimal, binary, octal and hex; find the 2's complement and subtract.
2. State and prove De Morgan's theorems. Show NAND and NOR are universal gates.
3. Simplify a 4-variable function using a K-map (with don't cares) and draw the logic circuit.
4. Design a half adder and a full adder; implement a full adder using half adders.
5. Explain a 4:1 multiplexer. Explain the SR latch and D flip-flop with truth tables.

---

## Unit 5: Electronic Systems and Interfacing

### 2-mark definitions

- **Microcontroller:** a single chip with a CPU, RAM, flash memory and peripherals (GPIO, timers, ADC, UART, SPI, I2C). Examples: ATmega328 (Arduino Uno), ESP32, STM32.
- **Microprocessor vs microcontroller:** a microprocessor is only the CPU and needs external memory and I/O (used in PCs); a microcontroller has everything on one chip (used in embedded systems).
- **GPIO:** general-purpose input/output pins that software can set as input (read a switch) or output (drive an LED).
- **ADC (analog-to-digital converter):** converts an analog voltage into an n-bit number. **Resolution** = V_ref/2ⁿ.
- **Sensor:** a device that converts a physical quantity (temperature, light, pressure) into an electrical signal.
- **Baud rate:** the number of signal symbols per second on a serial line (for UART, bits per second).
- **LDO (low-dropout regulator):** a linear regulator that works with a very small difference between input and output (0.2 V to 1 V).
- **DC-DC (switching) converter:** converts one DC voltage to another by switching an inductor at high frequency. A **buck** steps down, a **boost** steps up. Efficiency is about 85% to 95%.

### Core concepts

**ADC types:**
- **Digital ramp (counter type):** a counter drives a DAC; when the DAC output exceeds V_in, a comparator stops the counter. Simple but slow: up to 2ⁿ clock cycles per conversion.
- **Flash (parallel):** 2ⁿ − 1 comparators compare V_in with reference levels at the same time, and an encoder gives the code. Fastest, but needs many comparators (255 for 8 bits).
- **Successive approximation (SAR):** tries bits from MSB to LSB, n clock cycles. Used in most microcontrollers.

**Serial communication:**

| Feature | UART | SPI | I2C |
|---|---|---|---|
| Wires | 2 (TX, RX) + ground | 4 (MOSI, MISO, SCK, CS) | 2 (SDA, SCL) |
| Clock | None (asynchronous, agreed baud) | Shared (synchronous) | Shared (synchronous) |
| Devices | Point to point | One master, many slaves (one CS each) | Many devices by 7-bit address |
| Duplex | Full | Full | Half |
| Speed | Up to about 1 Mbps | Tens of Mbps | 100 kbps, 400 kbps, 3.4 Mbps |
| Typical use | GPS, Bluetooth modules, PC debug | SD card, display, fast ADC | Sensors, RTC, EEPROM |

- **UART frame (8N1):** start bit, 8 data bits, no parity, 1 stop bit, so 10 bits per byte.

**Sensor signal chain:** sensor → signal conditioning (amplify with an op-amp, filter noise) → ADC → microcontroller (process) → output (display, actuator, wireless).

**Wireless options:**

| Technology | Range | Data rate | Power | Use |
|---|---|---|---|---|
| Bluetooth / BLE | About 10 m | 1 to 2 Mbps | Very low (BLE) | Wearables, phones |
| Wi-Fi | 50 m indoors | Tens to hundreds of Mbps | High | Home IoT, internet |
| Zigbee | 10 to 100 m (mesh) | 250 kbps | Very low | Smart home, sensor networks |

**Power management:**
- **LDO:** simple, no noise, but wastes (V_in − V_out) × I as heat; efficiency ≈ V_out/V_in.
- **Buck converter:** ideal duty cycle D = V_out/V_in; high efficiency; switching noise needs filtering.
- Battery life (hours) ≈ capacity (mAh)/average current (mA).

**System examples (draw a block diagram each time):**
1. **IoT weather station:** temperature and humidity sensor (DHT22 or BME280 on I2C), rain sensor and light sensor (ADC) → ESP32 → Wi-Fi to a cloud dashboard; powered by a solar panel, battery and buck or LDO regulator.
2. **Wearable fitness tracker:** accelerometer (steps), optical heart-rate sensor → low-power microcontroller → BLE to the phone; small Li-ion cell with a charger IC and LDO.
3. **EV battery management system (BMS):** measures the voltage of every cell, the pack current and temperatures; balances cells; protects against over-charge, over-discharge, over-current and over-temperature; estimates state of charge; reports on the vehicle's CAN bus.

### Solved examples

**Example 1 (ADC resolution).** A 10-bit ADC with V_ref = 3.3 V. Resolution = 3.3/1024 = **3.22 mV**. An input of 1.65 V gives the code 1.65/0.00322 = **512**.

**Example 2 (ADC types).** For 8 bits, a flash ADC needs 2⁸ − 1 = **255 comparators**. A digital ramp ADC with a 1 MHz clock can take up to 2⁸ = 256 cycles = **256 µs** in the worst case; a SAR ADC takes 8 cycles = **8 µs**.

**Example 3 (UART).** At 9600 baud with 8N1 framing, each byte takes 10 bits, so the data rate is 9600/10 = **960 bytes per second**.

**Example 4 (LDO vs buck).** 3.3 V at 200 mA is taken from 5 V.
- LDO: loss = (5 − 3.3) × 0.2 = **0.34 W**; efficiency = 3.3/5 = **66%**.
- Buck: ideal duty cycle D = 3.3/5 = **0.66**; real efficiency about 90%.

**Example 5 (battery life).** A 2000 mAh cell feeding an average of 50 mA lasts about 2000/50 = **40 hours**.

### Key points to remember

- Microcontroller = CPU + memory + peripherals on one chip.
- ADC resolution V_ref/2ⁿ; flash needs 2ⁿ − 1 comparators; ramp up to 2ⁿ clocks.
- UART 2 wires, asynchronous; SPI 4 wires, fastest; I2C 2 wires, addressed.
- PWM average = D × V; UART 8N1 = 10 bits per byte.
- LDO efficiency ≈ V_out/V_in; buck D = V_out/V_in.

### Important questions

1. Draw the block diagram of a microcontroller and explain GPIO, timers, ADC and PWM. Compare microprocessor and microcontroller.
2. Explain the digital ramp and flash ADCs. Find the resolution of an n-bit ADC.
3. Compare UART, SPI and I2C. Draw the UART frame.
4. Explain the sensor signal chain. Compare Bluetooth, Wi-Fi and Zigbee.
5. Design (block diagram) an IoT weather station, a wearable device or an EV BMS, including power management (LDO and DC-DC).

---

## Last-hour checklist

- [ ] pn junction bias and V-I; HWR 3.82 V, bridge 7.64 V; rectifier table (γ 1.21 vs 0.482; η 40.6% vs 81.2%; PIV); ripple 1 V; Zener (31.4, 10, 21.4 mA, 0.109 W); LED 300 Ω; 5 V supply chain.
- [ ] BJT α, β (2 mA, 0.990); regions; fixed bias (24 µA, 2.40 mA, 6.71 V); CB/CE/CC table; relay driver 1.8 kΩ with flyback diode; MOSFET 2 mA; PWM 1.25 V; class A 25%.
- [ ] Ideal op-amp and 741 table; virtual ground; inverting −10, non-inverting 11, summing −6 V, saturation 13.5 V, difference 1 V; night lamp; ECG and CMRR.
- [ ] 101101.101; 431; 11101110; gates table; De Morgan; K-maps (C + AB; B'C' + B'D' + A'C'D); adders; 4:1 MUX; SR and D flip-flop.
- [ ] Microcontroller blocks; ADC 3.22 mV, 512; 255 comparators, 256 µs; UART/SPI/I2C table; 960 bytes/s; LDO 0.34 W, 66%; buck 0.66; 40 h; three system block diagrams.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Electronic Devices and Circuit Theory | Robert L. Boylestad, Louis Nashelsky | Pearson | [WorldCat](https://search.worldcat.org/search?q=Electronic+Devices+and+Circuit+Theory+Boylestad) |
| 2 | Electronics Fundamentals and Applications | D. Chattopadhyay, P. C. Rakshit | New Age International | [WorldCat](https://search.worldcat.org/search?q=Electronics+Fundamentals+and+Applications+Chattopadhyay+Rakshit) |
| 3 | Digital Design | M. Morris Mano | Pearson | [WorldCat](https://search.worldcat.org/search?q=Digital+Design+Morris+Mano) |
| 4 | Op-Amps and Linear Integrated Circuits | Ramakant A. Gayakwad | Pearson | [WorldCat](https://search.worldcat.org/search?q=Op-Amps+and+Linear+Integrated+Circuits+Gayakwad) |

**Syllabus source:** [AKTU B.Tech 1st year CSE stream course structure and syllabus, 2026-27 (official PDF)](https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf)

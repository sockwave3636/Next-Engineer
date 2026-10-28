---
program: btech
branches: [all]
semester: 8
code: BOE092
name: Electric Vehicles
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-IV, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf
units:
  - Introduction to Electric Vehicles
  - Electric Motors, Converters and Drives
  - Batteries and Battery Management
  - EV Charging Systems
  - Charging Infrastructure Planning and Grid Integration
---

# BOE092 Electric Vehicles: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: theory, block diagrams in words, and comparison tables.
3. **Solved examples**: the numericals examiners set (road load and power, energy per km and range, gradient and acceleration force, motor speed and gearing, converter duty cycle, battery pack design, C-rate, SoC, charging time, running cost, station sizing, V2G).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (EV types, status, EV vs IC engine, architecture, autonomy and vehicle computing) and Unit 2 (BLDC, SRM, axial flux motors, converters, drive schemes).
- **Afternoon (3 hours):** Unit 3 (batteries, pack design, cell balancing, BMS, second life, cost) and Unit 4 (AC/DC charging, on/off-board, OCPP, billing, standards).
- **Evening (2 hours):** Unit 5 (charging station planning, grid impact, scheduling, storage, AI, V2G aggregator), then the "Last-hour checklist".
- **In the exam:** draw the EV block diagram, a motor drive circuit and a charger architecture. Do one road-load numerical and one battery pack numerical; they are easy marks.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Introduction to Electric Vehicles

### 2-mark definitions

- **Electric vehicle (EV):** a vehicle propelled wholly or partly by an electric motor using energy stored in a battery or produced on board (fuel cell).
- **BEV (battery electric vehicle):** propelled only by electric motors and a rechargeable battery charged from the grid (Tata Nexon EV, MG ZS EV).
- **HEV (hybrid electric vehicle):** combines an IC engine with an electric motor; the battery is charged by the engine and regenerative braking, not from the grid (Toyota Hyryder hybrid).
- **PHEV (plug-in hybrid):** a hybrid whose larger battery can also be charged from the grid.
- **FCEV (fuel cell electric vehicle):** generates electricity on board from hydrogen in a fuel cell (Toyota Mirai).
- **Regenerative braking:** using the motor as a generator during braking to convert kinetic energy back into electrical energy stored in the battery.
- **Drivetrain:** the system that delivers power to the wheels (motor, inverter, transmission/reduction gear, differential).
- **Range:** distance an EV can travel on one full charge.
- **Range anxiety:** a driver's fear that the battery will run out before reaching a charging point.
- **Software-defined vehicle (SDV):** a vehicle whose features are mainly controlled and updated by software (over-the-air updates) running on central computers.

### Core concepts

**History and status:** electric cars existed in the 1830s–1900s (more common than petrol cars around 1900), lost to cheap oil and the self-starter; revived from the 1990s (GM EV1, Toyota Prius hybrid 1997), and the modern era since Tesla Roadster (2008), Nissan Leaf (2010) and falling lithium battery costs (about 90% drop from 2010 to 2023). Global EV sales passed 17 million in 2024 (about one in five new cars). **India:** two- and three-wheelers lead (e-rickshaws, e-scooters such as Ola, Ather, TVS iQube); cars by Tata, MG, Mahindra, Hyundai; policies: FAME I (2015), FAME II (2019–2024), **PM E-DRIVE (2024)**, PLI for advanced chemistry cells (ACC), GST of 5% on EVs, and state EV policies (UP EV Manufacturing and Mobility Policy 2022).

**Trends:** falling battery cost, higher energy density (LFP and NMC), fast charging (≥ 150 kW), 800 V architectures, sodium-ion batteries, battery swapping for two- and three-wheelers, connected and autonomous features, vehicle-to-grid.

**EV vs IC engine vehicle**

| Feature | EV | IC engine vehicle |
|---|---|---|
| Energy source | Battery (electricity) | Petrol/diesel |
| Efficiency (tank/battery to wheel) | 80–90% | 20–30% |
| Torque | Maximum from zero speed, smooth | Rises with rpm, needs gearbox |
| Moving parts | Few; little maintenance | Many; oil changes, clutch, exhaust |
| Tailpipe emissions | Zero | CO₂, NOₓ, CO, HC, particulates |
| Noise | Very low | High |
| Running cost | ₹1–1.5/km (car) | ₹5–7/km (car) |
| Refuelling | 30 min–8 h charging | 5 min |
| Range | 200–500 km typical | 500–800 km |
| Purchase cost | Higher (battery) | Lower |
| Regenerative braking | Yes | No |

**EV architecture (block diagram):** battery pack + BMS → high-voltage DC bus → inverter (traction) → motor → single-speed reduction gear → differential → wheels; plus DC-DC converter (HV to 12 V auxiliaries), on-board charger (AC charging), charging port, thermal management system (coolant loops, heat pump), vehicle control unit (VCU), accelerator and brake pedal sensors, regenerative braking control.

**Configurations:** central motor with differential; dual motor (front and rear: all-wheel drive); in-wheel hub motors (no differential, more unsprung mass); series hybrid, parallel hybrid, series-parallel (power-split) hybrid.

**Autonomy levels (SAE J3016):** level 0 no automation; 1 driver assistance (adaptive cruise or lane keep); 2 partial automation (both together, driver supervises); 3 conditional automation (car drives in some conditions, driver takes over on request); 4 high automation (no driver needed in defined areas); 5 full automation everywhere.

**Vehicle computing:** sensors (cameras, radar, LiDAR, ultrasonic, GNSS, IMU) → perception (AI/deep learning) → localization and mapping → planning → control (steering, throttle, brakes); computers (domain controllers, NVIDIA DRIVE, Tesla FSD chip); in-vehicle networks (CAN, CAN-FD, LIN, FlexRay, automotive Ethernet); ADAS features (AEB, lane keeping, adaptive cruise); OTA updates; cybersecurity (ISO/SAE 21434) and functional safety (ISO 26262).

### Solved examples

**Example 1: Road load power.** Car mass 1,500 kg, rolling resistance coefficient 0.012, drag coefficient 0.3, frontal area 2.2 m², air density 1.2 kg/m³, speed 72 km/h (20 m/s), level road.
- Rolling force = 0.012 × 1,500 × 9.81 = 176.6 N.
- Aerodynamic force = ½ × 1.2 × 0.3 × 2.2 × 20² = 158.4 N.
- Total = 335 N; wheel power = 335 × 20 = **6.70 kW**.
- With drivetrain efficiency 85%, battery power = **7.88 kW**.

**Example 2: Energy per km and range.** At 72 km/h, energy per km = 7.88 kW / 72 km/h = **109 Wh/km**. With a 40 kWh battery (90% usable = 36 kWh), range = 36,000/109 ≈ **330 km** (real range is lower with AC, stop-go traffic and hills).

**Example 3: Gradient force.** On a 5% slope: F = mg sin θ ≈ 1,500 × 9.81 × 0.05 = **736 N**; extra power at 20 m/s = **14.7 kW**.

**Example 4: Acceleration force.** 0–100 km/h in 10 s: a = 27.8/10 = 2.78 m/s²; F = ma = 1,500 × 2.78 ≈ **4,167 N** (plus road load).

**Example 5: Running cost.** EV uses 15 kWh/100 km at ₹8/kWh → **₹1.20/km**. Petrol car gives 15 km/L at ₹95/L → **₹6.33/km**. For 15,000 km/year, saving ≈ ₹77,000.

### Key points to remember

- BEV, HEV, PHEV, FCEV; regenerative braking.
- EV efficiency 80–90% vs ICE 20–30%; full torque from zero speed.
- Road load: F = μmg + ½ρC_dAv² + mg sin θ + ma.
- India: FAME II, PM E-DRIVE (2024), PLI-ACC; two/three-wheelers lead.
- SAE levels 0–5; vehicle computing pipeline: sense → perceive → plan → act.

### Important questions

1. Explain the types of EVs and the history and present status of EVs in India and the world.
2. Compare EVs with IC engine vehicles.
3. Draw and explain the architecture of an EV.
4. Explain the levels of autonomy and the vehicle computing system.
5. Compute the road load, power and range of an EV for given data.

---

## Unit 2: Electric Motors, Converters and Drives

### 2-mark definitions

- **BLDC motor:** a brushless DC motor with permanent magnets on the rotor and electronically commutated stator windings, with trapezoidal back-EMF; uses Hall sensors for rotor position.
- **PMSM:** permanent magnet synchronous motor with sinusoidal back-EMF, controlled by field-oriented control (FOC); most common in modern EV cars.
- **SRM (switched reluctance motor):** a motor with salient poles on both stator and rotor and no magnets or windings on the rotor; torque from the rotor's tendency to align for minimum reluctance.
- **Axial flux motor:** a motor in which magnetic flux flows parallel to the shaft (disc-shaped, "pancake"), giving high torque density.
- **Induction motor:** an AC motor in which the rotor currents are induced by the rotating stator field (no magnets); used in early Tesla models.
- **Inverter:** a power electronic converter that changes DC from the battery into variable-frequency, variable-voltage AC for the motor.
- **DC-DC converter:** a converter that changes one DC voltage level to another (buck steps down, boost steps up, buck-boost both).
- **Duty cycle (D):** the fraction of a switching period during which the switch is ON.
- **Field-oriented (vector) control:** controlling the AC motor current as two components, torque-producing (i_q) and flux-producing (i_d), like a DC motor.
- **Field weakening:** reducing the effective flux above base speed so the motor can run faster within the voltage limit (constant power region).

### Core concepts

**Requirements of an EV motor:** high torque at low speed and high power at high speed (wide constant-power range), high efficiency over the drive cycle, high power density, low cost, robustness, low noise, good regenerative braking, fault tolerance.

**Motor comparison**

| Feature | BLDC | PMSM | SRM | Induction | Axial flux |
|---|---|---|---|---|---|
| Rotor | Permanent magnets | Permanent magnets | Laminated iron, no magnets | Cage, no magnets | Magnet discs |
| Back-EMF | Trapezoidal | Sinusoidal | — | — | Sinusoidal |
| Efficiency | High | Highest | Medium | Medium-high | Very high |
| Power density | High | High | Medium | Medium | Very high |
| Cost | Medium (rare-earth) | Medium-high | Low | Low | High |
| Torque ripple / noise | Some ripple | Low | High ripple, noisy | Low | Low |
| Ruggedness, temperature | Magnets can demagnetize | Same | Very rugged | Rugged | Good cooling needed |
| Typical use | E-scooters, e-rickshaws | Most EV cars | Research, low-cost, high-temp | Early Tesla, some AWD | Performance cars, hub motors |

**BLDC drive:** three-phase inverter (six switches: MOSFETs or IGBTs); Hall sensors detect rotor position every 60° electrical; six-step (trapezoidal) commutation energizes two phases at a time; speed control by PWM of the DC voltage; sensorless control by back-EMF zero-crossing at higher speeds.

**PMSM drive (FOC):** measure phase currents → Clarke (abc → αβ) and Park (αβ → dq) transforms → PI controllers on i_d (usually 0 below base speed; negative for field weakening) and i_q (torque) → inverse Park → space vector PWM → inverter. Torque T ∝ i_q (for surface PMSM).

**SRM drive:** asymmetric half-bridge converter per phase; phases energized in sequence based on rotor position; torque ∝ i² dL/dθ (independent of current direction); simple, magnet-free, but torque ripple and acoustic noise; needs precise control.

**Axial flux motors:** short axial length, large diameter, high torque per kg; single-stator/single-rotor, double-rotor (yokeless and segmented armature, YASA), used in high-performance cars and in-wheel motors.

**Power converters in an EV**
- **Traction inverter:** DC → 3-phase AC (IGBT or SiC MOSFET; SiC gives higher efficiency at 800 V).
- **Bidirectional DC-DC converter:** between battery and DC link (boost when motoring, buck when regenerating).
- **Auxiliary DC-DC converter:** HV battery → 12 V.
- **On-board charger:** AC → DC (PFC rectifier + isolated DC-DC).

**DC-DC converter formulas (ideal, continuous conduction):** buck V_out = D·V_in; boost V_out = V_in/(1 − D); buck-boost V_out = −D·V_in/(1 − D).

**DC motor drive schemes:** chopper control of DC series or separately excited motors (used in early EVs and e-rickshaws): one-quadrant (motoring), two-quadrant (motoring + regenerative braking), four-quadrant (forward and reverse) choppers. Speed of a DC motor N ∝ (V − I_aR_a)/φ.

**Torque-speed characteristic of an EV motor:** constant torque region up to base speed (current-limited), then constant power region (field weakening) up to maximum speed, where torque falls as 1/speed.

### Solved examples

**Example 1: Motor speed from vehicle speed.** Wheel radius 0.3 m, vehicle speed 20 m/s, reduction gear 9:1. Wheel speed = 20/0.3 = 66.7 rad/s = **637 rpm**; motor speed = 637 × 9 ≈ **5,730 rpm**.

**Example 2: Wheel torque.** Motor torque 200 N·m, gear ratio 9, transmission efficiency 95%, wheel radius 0.3 m. Wheel torque = 200 × 9 × 0.95 = 1,710 N·m; tractive force = 1,710/0.3 = **5,700 N**.

**Example 3: Buck converter.** Step 350 V down to 48 V: D = 48/350 = **0.137**.

**Example 4: Boost converter.** Step a 300 V battery up to a 600 V DC link: D = 1 − 300/600 = **0.5**.

**Example 5: Base speed and power.** A motor gives 250 N·m up to 4,000 rpm (base speed). Power at base speed = 250 × 2π × 4,000/60 ≈ **104.7 kW**. At 8,000 rpm in the constant-power region, torque ≈ 104.7 kW / (2π × 8,000/60) ≈ **125 N·m**.

### Key points to remember

- EV motor needs: wide constant-power range, efficiency, power density.
- BLDC: trapezoidal, Hall sensors, six-step; PMSM: sinusoidal, FOC (i_d, i_q).
- SRM: no magnets, rugged, noisy; axial flux: high torque density.
- Buck D = V_o/V_in; boost V_o = V_in/(1 − D).
- Constant torque up to base speed, constant power above (field weakening).

### Important questions

1. Explain the requirements of an EV motor and compare BLDC, PMSM, SRM, induction and axial flux motors.
2. Explain the BLDC motor drive with Hall-sensor-based six-step commutation.
3. Explain the SRM and its converter.
4. Explain the power converters used in an EV, including DC-DC converters, with formulas.
5. Explain DC and BLDC motor drive schemes and the torque-speed characteristic.

---

## Unit 3: Batteries and Battery Management

### 2-mark definitions

- **Cell:** the basic electrochemical unit (anode, cathode, electrolyte, separator); **module** = group of cells; **pack** = modules + BMS + thermal system + enclosure.
- **Capacity (Ah):** charge a battery can deliver; energy (Wh) = capacity × nominal voltage.
- **Specific energy (Wh/kg) / energy density (Wh/L):** energy per unit mass / volume.
- **C-rate:** charge or discharge current relative to capacity; 1C for a 100 Ah battery = 100 A.
- **State of charge (SoC):** remaining charge as a percentage of full capacity.
- **State of health (SoH):** present maximum capacity (or resistance) relative to a new battery.
- **Depth of discharge (DoD):** the percentage of capacity that has been discharged.
- **Cycle life:** number of charge-discharge cycles before capacity falls to a set level (usually 80%).
- **Cell balancing:** equalizing the SoC of series-connected cells so that the pack can use its full capacity safely.
- **BMS (battery management system):** the electronic system that monitors and protects a battery pack (voltage, current, temperature, SoC, SoH, balancing, communication, safety cut-off).
- **Thermal runaway:** an uncontrolled, self-heating chain reaction in a lithium cell leading to fire or explosion.

### Core concepts

**Battery chemistries**

| Chemistry | Cell voltage | Specific energy (Wh/kg) | Cycle life | Notes |
|---|---|---|---|---|
| Lead-acid | 2.0 V | 30–40 | 300–500 | Cheap, heavy; old e-rickshaws, 12 V auxiliaries |
| Ni-MH | 1.2 V | 60–80 | 500–1,000 | Used in older hybrids (Prius) |
| Li-ion NMC | 3.6–3.7 V | 150–250 | 1,000–2,000 | High energy; most EV cars |
| Li-ion NCA | 3.6 V | 200–260 | 1,000–1,500 | High energy (Tesla) |
| LFP (LiFePO₄) | 3.2 V | 90–160 | 2,000–5,000 | Safe, long life, no cobalt; Tata, BYD, two-wheelers |
| LTO | 2.4 V | 60–80 | 10,000+ | Very fast charging, low energy |
| Sodium-ion | ~3.0 V | 100–160 | 2,000+ | Emerging; no lithium |
| Solid-state | — | 300+ (target) | — | Future: safer, higher energy |

**Lithium-ion cell working:** during discharge, Li⁺ ions move from the graphite anode through the electrolyte to the cathode (metal oxide/phosphate) while electrons flow through the external circuit; charging reverses this. Formats: cylindrical (18650, 21700, 4680), prismatic, pouch.

**Battery selection criteria:** energy and power requirement, specific energy and density, cycle life, safety, cost per kWh, charging rate, operating temperature range, availability of materials, recyclability.

**Pack design:** series cells (S) set voltage, parallel cells (P) set capacity; choose cells and nSmP configuration; module design; busbars, fusing; cooling (air, liquid, immersion); insulation and enclosure (IP67); crash safety; BMS architecture (centralized, modular, distributed); compliance with AIS-156 (India battery safety standard).

**Cell balancing**

| Type | Method | Pros | Cons |
|---|---|---|---|
| Passive | Bleed extra energy of high cells through resistors | Simple, cheap | Wastes energy as heat; slow |
| Active | Transfer energy from high to low cells using capacitors, inductors or transformers | Efficient, faster | Complex, costly |

**BMS functions:** cell voltage and temperature monitoring, current measurement, SoC estimation (coulomb counting, OCV look-up, Kalman filter), SoH estimation, cell balancing, protection (over-voltage, under-voltage, over-current, short circuit, over-temperature), thermal management control, contactor control and pre-charge, communication (CAN) with VCU and charger, data logging, fault diagnosis.

**Second life of batteries:** EV batteries retired at about 70–80% SoH still have useful capacity for stationary storage (solar storage, telecom towers, peak shaving); then recycling (hydrometallurgy, pyrometallurgy) to recover Li, Ni, Co; India's Battery Waste Management Rules 2022 make producers responsible (EPR).

**Cost trends:** Li-ion pack prices fell from over $1,000/kWh (2010) to about $115/kWh (2024, BloombergNEF), with LFP packs even lower; batteries are 30–40% of an EV's cost; cost parity with ICE cars is expected in the coming years.

### Solved examples

**Example 1: Pack design.** Target ≈ 350 V, 40 kWh using 21700 cells (3.6 V, 5 Ah).
- Series cells = 350/3.6 ≈ 97 → choose **96S** (345.6 V).
- Required Ah = 40,000/345.6 = 115.7 Ah → parallel = 115.7/5 = 23.1 → **24P**.
- Cells = 96 × 24 = **2,304**; pack = 345.6 V × 120 Ah = **41.5 kWh**.

**Example 2: C-rate.** The 120 Ah pack delivers 240 A at peak → **2C**. At 60 A it is 0.5C; a full discharge would take 2 h.

**Example 3: SoC by coulomb counting.** Initial SoC 80% on a 100 Ah pack; discharged at 30 A for 1 h. Charge removed = 30 Ah = 30%. **SoC = 50%**.

**Example 4: Passive balancing loss.** A cell is 0.05 V higher and is bled through a 33 Ω resistor at about 4.1 V: current ≈ 4.1/33 = 0.124 A; power ≈ 0.51 W lost as heat per cell while balancing.

**Example 5: Pack cost.** 41.5 kWh × ₹10,000/kWh (≈ $115) ≈ **₹4.15 lakh**, a large share of a ₹12–15 lakh car.

### Key points to remember

- Cell → module → pack; Wh = Ah × V; C-rate; SoC, SoH, DoD.
- NMC (high energy), LFP (safe, long life), LTO (fast charge), Na-ion (emerging).
- Series sets voltage, parallel sets capacity (96S24P example).
- Balancing: passive (resistor) vs active (energy transfer).
- BMS: monitor, estimate, balance, protect, communicate.
- Second life at 70–80% SoH; recycling; cost ~$115/kWh (2024).

### Important questions

1. Explain the types of batteries used in EVs and compare them.
2. Explain the working of a lithium-ion cell and the criteria for battery selection.
3. Explain battery pack design with a numerical.
4. Explain cell balancing and the functions of a BMS.
5. Explain the second life of EV batteries and battery cost trends.

---

## Unit 4: EV Charging Systems

### 2-mark definitions

- **EVSE (electric vehicle supply equipment):** the charger, cable, connector and protection equipment that supply energy to an EV.
- **AC charging:** the vehicle receives AC and its on-board charger converts it to DC (slow/medium, 3.3–22 kW).
- **DC fast charging:** an off-board charger converts AC to DC and supplies the battery directly (25–350 kW).
- **On-board charger (OBC):** AC-DC converter inside the vehicle, limited in power by size and cost.
- **Off-board charger:** a charger outside the vehicle (DC fast charger) with higher power.
- **Charging modes (IEC 61851):** Mode 1 (household socket, no protection), Mode 2 (household socket with in-cable control box), Mode 3 (dedicated AC wallbox), Mode 4 (DC charging).
- **CCS (Combined Charging System):** a connector standard combining AC Type 2 and two DC pins (CCS2 in India and Europe).
- **OCPP (Open Charge Point Protocol):** an open communication protocol between chargers and a central management system (versions 1.6J, 2.0.1).
- **ISO 15118:** standard for vehicle-to-charger communication enabling Plug & Charge and bidirectional charging.
- **Battery swapping:** replacing a depleted battery with a charged one at a swap station, mainly for two- and three-wheelers.

### Core concepts

**Charging levels**

| Type | Power | Typical time (40 kWh car) | Use |
|---|---|---|---|
| Slow AC (15 A socket) | 2.3–3.3 kW | 12–16 h | Home overnight, two-wheelers |
| AC wallbox (single/three-phase) | 7.4–22 kW | 2–6 h | Home, office, parking |
| DC fast | 25–60 kW | 40–90 min (to 80%) | Highways, public stations |
| DC ultra-fast | 150–350 kW | 15–30 min | Highways (800 V vehicles) |

**AC vs DC charging**

| Feature | AC charging | DC charging |
|---|---|---|
| Converter location | On-board charger | Off-board, in the station |
| Power | Lower (≤ 22 kW) | Higher (25–350 kW) |
| Cost of charger | Low | High |
| Battery stress | Gentle | Higher (heat), managed by BMS |
| Communication | Control pilot (PWM) | CAN (CHAdeMO, GB/T) or PLC (CCS) |

**On-board charger architecture:** AC input → EMI filter → rectifier + power factor correction (boost PFC) → high-frequency isolated DC-DC (LLC or phase-shifted full bridge) → battery. **Off-board DC charger:** grid → transformer → AFE rectifier/PFC → isolated DC-DC modules in parallel → cable and connector; liquid-cooled cables at high power.

**Connector standards:** Type 2 (AC, IEC 62196-2), CCS2 (DC), CHAdeMO (Japan, CAN-based), GB/T (China), Type 1 (North America AC), NACS (Tesla, now SAE J3400); India's light EV connector (IS 17017-2-6/LECCS) and Bharat AC-001 and DC-001 (legacy low-power standards).

**Charging communication:** control pilot (PWM duty cycle tells the car the maximum current), proximity pilot (cable detection), high-level communication over power-line (ISO 15118/DIN 70121) for CCS; CAN for CHAdeMO. Charger-to-cloud: OCPP for start/stop, authorization (RFID, app), status, metering, smart charging profiles, firmware updates.

**Billing and payment:** energy-based (₹/kWh) or time-based tariffs, session fees, idle fees; payment via app, UPI, RFID cards, Plug & Charge (ISO 15118 certificates); roaming between networks (OCPI protocol); India's guidelines cap the tariff for public charging at a level linked to the average cost of supply until a set date, with ToD-based pricing (solar hours cheaper).

**Standards (IEC and others):** IEC 61851 (conductive charging system), IEC 62196 (plugs and sockets), IEC 61980 (wireless charging), ISO 15118, IEC 63110 (management of EV charging infrastructure), IS 17017 (Indian adoption), CEA safety regulations for charging stations, Ministry of Power "Guidelines for Installation and Operation of EV Charging Infrastructure" (2024 update).

**Battery swapping:** fast (2–3 min), separates battery ownership (battery-as-a-service lowers vehicle price), standardized packs needed; suited to e-rickshaws, delivery scooters (Sun Mobility, Battery Smart); challenges: standardization, inventory cost, safety.

**Wireless (inductive) charging:** resonant inductive coupling between ground pad and vehicle pad; static or dynamic (in-road); convenient but less efficient and costly; standard SAE J2954.

### Solved examples

**Example 1: AC charging time.** 40 kWh battery, 20% → 80% (24 kWh), 7.4 kW wallbox, efficiency 90%. Grid energy = 24/0.9 = 26.7 kWh; time = 26.7/7.4 ≈ **3.6 h**.

**Example 2: DC fast charging time.** Same energy with a 50 kW DC charger at 92% efficiency: 24/0.92/50 h ≈ **31 min** (real time is longer because power tapers above about 80% SoC).

**Example 3: Control pilot.** In IEC 61851 the maximum current (A) = duty cycle (%) × 0.6 for duty 10–85%. A 53% duty cycle signals 53 × 0.6 ≈ **32 A** (about 7.4 kW at 230 V single phase).

**Example 4: Charging bill.** A 30 kWh session at ₹18/kWh plus ₹50 session fee = **₹590**; equivalent cost per km at 15 kWh/100 km = ₹2.7/km, still cheaper than petrol.

### Key points to remember

- AC (on-board charger, ≤ 22 kW) vs DC (off-board, 25–350 kW).
- IEC 61851 modes 1–4; connectors Type 2, CCS2, CHAdeMO, GB/T.
- Communication: control pilot PWM, ISO 15118 PLC, OCPP to cloud.
- Billing: ₹/kWh, apps, UPI, RFID, Plug & Charge.
- Standards: IEC 61851, 62196, 61980, ISO 15118, IS 17017, MoP guidelines.

### Important questions

1. Explain AC and DC charging systems and compare them.
2. Explain the architecture of on-board and off-board chargers.
3. Explain charging communication (control pilot, ISO 15118) and OCPP.
4. Explain billing and payment in public charging and the relevant standards.
5. Write notes on battery swapping and wireless charging.

---

## Unit 5: Charging Infrastructure Planning and Grid Integration

### 2-mark definitions

- **Charging station planning:** deciding the location, number, type and power of chargers to meet EV demand at minimum cost and grid impact.
- **Grid impact:** effects of EV charging on the distribution network: peak load, transformer and cable overloading, voltage drop, harmonics, unbalance.
- **Smart charging (managed charging):** controlling when and how fast EVs charge, based on grid conditions, prices and user needs.
- **Charging scheduling:** the optimization of charging start times and rates for a fleet to minimize cost or peak load.
- **Diversity factor:** the ratio of the sum of individual maximum demands to the actual maximum demand of the group (accounts for not all chargers running at full power simultaneously).
- **Energy storage in microgrids:** batteries at charging stations or microgrids that buffer EV loads, store solar energy and reduce peak demand charges.
- **V2G (vehicle-to-grid):** using an EV battery to send power back to the grid for services such as peak shaving and frequency regulation.
- **Aggregator:** an entity that combines many EVs (or DERs) into a single controllable resource and bids it in electricity markets or to the grid operator.
- **Time-of-day (ToD) tariff:** different electricity prices at different times of day.
- **AI in EV charging:** use of machine learning for demand forecasting, location planning, dynamic pricing and optimal scheduling.

### Core concepts

**Planning a charging facility**
1. Estimate demand: number of EVs, daily km, energy/km, charging behaviour (home, work, public, highway).
2. Choose locations: traffic flow, parking availability, distance between highway stations (MoP guidelines: at least one station every 25 km on highways on both sides, and within a 3 km × 3 km grid in cities), land and grid availability.
3. Select charger mix (AC/DC, power ratings) and number of points.
4. Grid connection: required kVA, transformer, cable sizing, metering (separate EV tariff connection).
5. Add solar PV and battery storage if useful.
6. Software: OCPP back-end, payment, app integration.
7. Safety: earthing, protection, fire safety, accessibility, signage.
8. Business model: tariff, utilization, payback.

**Grid impact and mitigation**

| Impact | Mitigation |
|---|---|
| Evening peak rises (people charge after work) | ToD tariffs, smart charging, delayed charging |
| Transformer overload and ageing | Load management, transformer upgrade, storage |
| Voltage drop and unbalance | Three-phase distribution of chargers, voltage regulation |
| Harmonics from chargers | Active front ends, filters, standards limits |
| Demand charges for stations | Peak shaving with batteries, load management |

**Charging scheduling:** objective (minimize cost, peak load or emissions) subject to each EV's arrival time, departure time, required energy and charger limit; methods: rule-based (valley filling), optimization (LP/MILP), real-time (model predictive control), market-based (price signals). **Valley filling:** fill the night-time low-demand "valley" with EV load.

**Energy storage in microgrids:** a station with PV + battery: charge batteries from solar or off-peak grid, discharge during peaks; reduces required grid capacity; supports islanded operation; second-life batteries can lower cost.

**AI applications:** forecasting EV arrivals and energy demand; optimal siting from traffic and mobility data; dynamic pricing; anomaly and fault detection in chargers; battery health prediction; route planning with charging stops; reinforcement learning for real-time scheduling.

**V2G and aggregator design**
- **Services:** frequency regulation (fast response), spinning reserve, peak shaving, renewable firming, emergency backup (V2H/V2B).
- **Requirements:** bidirectional charger (ISO 15118-20), metering, communication, contracts and compensation for battery degradation, grid codes.
- **Aggregator architecture (draw it):** EVs and chargers → local controllers → aggregator platform (forecasting availability, optimizing dispatch, bidding) → grid operator/market (signals, settlement) → payments to EV owners.
- **Challenges:** battery degradation, user availability and range concerns, standards, market rules, cyber security.

### Solved examples

**Example 1: Charging station demand.** A station has 10 × 50 kW DC chargers. With a diversity (coincidence) factor of 0.6, maximum demand = 10 × 50 × 0.6 = **300 kW**. At power factor 0.95, required capacity ≈ 300/0.95 ≈ 316 kVA → choose a **400 kVA** transformer (allowing growth).

**Example 2: Peak shaving with storage.** Grid connection limited to 200 kW; peak demand 300 kW for 1.5 h. Battery must supply 100 kW × 1.5 h = **150 kWh** (plus margin for DoD and efficiency: about 150/(0.9 × 0.9) ≈ 185 kWh).

**Example 3: Fleet scheduling.** 20 e-buses each need 150 kWh overnight, available 10 pm–6 am (8 h). Total energy 3,000 kWh; if spread evenly, load = 3,000/8 = **375 kW** instead of 20 × 120 kW = 2,400 kW if all charged at once. Smart scheduling cuts the peak by about 84%.

**Example 4: V2G capacity and earnings.** An aggregator has 500 EVs, each offering 7 kW for 2 h. Capacity = **3.5 MW**, energy = 7 MWh. If paid ₹4/kWh for discharge, total = ₹28,000 per event, about ₹56 per EV.

**Example 5: Highway spacing.** A 300 km highway needs a station every 25 km on both sides: 300/25 = 12 per side → **24 stations**.

### Key points to remember

- Planning steps: demand → location → charger mix → grid connection → storage/solar → software → safety → business.
- Grid impacts: peak, overload, voltage, harmonics; mitigation: ToD, smart charging, storage.
- Scheduling: valley filling, optimization; station demand with diversity factor.
- Storage in microgrids: peak shaving (150 kWh example).
- V2G services and aggregator architecture; degradation and standards challenges.

### Important questions

1. Explain the planning of an EV charging station.
2. Explain the impact of EV charging on the distribution grid and its mitigation.
3. Explain charging scheduling and the role of energy storage in microgrids.
4. Explain applications of AI in EV charging infrastructure.
5. Explain V2G and the design of a V2G aggregator.

---

## Last-hour checklist

- [ ] EV types (BEV, HEV, PHEV, FCEV); history and Indian status (FAME II, PM E-DRIVE, PLI-ACC); EV vs ICE table; architecture; SAE levels; vehicle computing.
- [ ] Road load (335 N, 6.70 kW, 109 Wh/km, 330 km); gradient 736 N; acceleration 4,167 N; running cost ₹1.20 vs ₹6.33/km.
- [ ] Motor comparison table; BLDC six-step; PMSM FOC; SRM; axial flux; converters; buck 0.137, boost 0.5; motor 5,730 rpm; base speed 104.7 kW.
- [ ] Chemistries table; Li-ion working; pack 96S24P (41.5 kWh); C-rate; SoC 50%; balancing; BMS functions; second life; cost trend.
- [ ] Charging levels; AC vs DC; OBC/off-board; connectors; control pilot (32 A); ISO 15118, OCPP; billing; standards; swapping; wireless; charging times 3.6 h and 31 min.
- [ ] Station planning; grid impact; scheduling (375 kW); storage (150 kWh); AI; V2G aggregator (3.5 MW); station transformer 400 kVA.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Modern Electric Vehicle Technology | C. C. Chan, K. T. Chau | Oxford University Press (2001) | [WorldCat](https://search.worldcat.org/search?q=Modern+Electric+Vehicle+Technology+Chan+Chau) |
| 2 | Modern Electric, Hybrid Electric and Fuel Cell Vehicles | M. Ehsani, Y. Gao, S. E. Gay, A. Emadi | CRC Press (2004) | [WorldCat](https://search.worldcat.org/search?q=Modern+Electric+Hybrid+Electric+and+Fuel+Cell+Vehicles+Ehsani) |
| 3 | Electric Vehicle Technology Explained | James Larminie, John Lowry | Wiley (2012) | [WorldCat](https://search.worldcat.org/search?q=Electric+Vehicle+Technology+Explained+Larminie) |
| 4 | Electric Vehicles, Part 1 (NPTEL course) | Dr. Amit Jain, IIT Delhi | NPTEL (free) | [NPTEL](https://nptel.ac.in/courses/108102121) |
| 5 | Handbook on Battery Energy Storage System | Asian Development Bank | ADB (2018), free | [ADB](https://www.adb.org/publications/battery-energy-storage-system-handbook) |

**Syllabus source:** [AKTU Open Elective-III and IV syllabus for B.Tech 8th semester, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf)

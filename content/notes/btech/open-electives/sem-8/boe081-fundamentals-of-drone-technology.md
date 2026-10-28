---
program: btech
branches: [all]
semester: 8
code: BOE081
name: Fundamentals of Drone Technology
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-III, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf
units:
  - Introduction to Unmanned Aircraft Systems
  - Design and Selection of UAVs
  - Avionics Hardware
  - Payloads, Communication and Control
  - Navigation, Testing and Future of Drones
---

# BOE081 Fundamentals of Drone Technology: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: the theory, diagrams in words, and comparison tables.
3. **Solved examples**: the small calculations examiners like (hover power, flight time, stall speed, thrust-to-weight, radio horizon, link budget, ground sampling distance, PID).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (UAS, history, classification, system parts, applications) and Unit 2 (aerodynamics, airframes, Indian drone rules).
- **Afternoon (3 hours):** Unit 3 (autopilot, sensors, actuators, power) and Unit 4 (payloads, telemetry, PID, radio links).
- **Evening (2 hours):** Unit 5 (waypoints, ground control, testing, future), then the "Last-hour checklist".
- **In the exam:** draw a block diagram in every long answer (UAS elements, autopilot loop, telemetry link). Work any number with units.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Introduction to Unmanned Aircraft Systems

### 2-mark definitions

- **Unmanned aerial vehicle (UAV):** a powered aircraft that carries no human pilot on board and flies autonomously or under remote control; it may be recoverable and can carry a payload.
- **Unmanned aircraft system (UAS):** the complete system needed to operate a UAV: the air vehicle, ground control station, communication links, payload, launch and recovery equipment, support and the crew.
- **Remotely piloted aircraft system (RPAS):** ICAO's term for a UAS in which a remote pilot is in control; India's earlier rules used this term.
- **Drone:** the common name for any UAV, especially small multirotors.
- **Autonomy:** the ability of a UAV to carry out a mission without continuous human input (from manual RC to fully autonomous).
- **VLOS / BVLOS:** visual line of sight (the pilot can see the drone with the naked eye) / beyond visual line of sight.
- **Ground control station (GCS):** the land, sea or air-based station from which the UAV is planned, monitored and commanded.
- **Payload:** the equipment the UAV carries to do its mission (camera, sensor, sprayer, parcel), excluding what is needed to fly.
- **Endurance:** maximum time a UAV can stay airborne on one fuel load or battery charge.
- **Range:** maximum distance a UAV can fly (or operate from its GCS) on one fuel load or within its link.

### Core concepts

**History in brief**
- 1849: Austria attacks Venice with unmanned bomb-carrying balloons (earliest recorded unmanned air attack).
- 1916–1918: Ruston Proctor Aerial Target (UK) and the Kettering Bug (USA), early radio-controlled or pre-set "aerial torpedoes".
- 1930s: de Havilland DH.82B **Queen Bee**, a radio-controlled target; the word "drone" is said to come from it.
- 1950s–70s: Ryan Firebee reconnaissance drones (Vietnam war).
- 1980s: Israeli Scout and Pioneer show tactical value (Bekaa Valley, 1982).
- 1990s–2000s: General Atomics **Predator** and **Global Hawk**; GPS makes long-range autonomy possible.
- 2010 onwards: cheap MEMS sensors, LiPo batteries and open-source autopilots (ArduPilot, PX4) create the consumer and commercial multirotor boom (DJI).
- India: DRDO **Lakshya** (target drone), **Nishant**, **Rustom**, **TAPAS**; Drone Rules 2021 and the PLI scheme for drones; "Drone Shakti" and Kisan drones.

**Classification of UAVs**

| Basis | Classes |
|---|---|
| Wing type | Fixed wing; rotary wing (single rotor helicopter, multirotor: tri, quad, hexa, octa); hybrid VTOL (tilt-rotor, tail-sitter, quadplane); flapping wing (ornithopter); lighter than air (blimp) |
| Weight (India, Drone Rules 2021) | Nano ≤ 250 g; Micro > 250 g to 2 kg; Small > 2 kg to 25 kg; Medium > 25 kg to 150 kg; Large > 150 kg |
| Range and endurance (military) | Hand-launched/close range; short range; medium range; MALE (medium altitude long endurance, e.g. Predator, Heron); HALE (high altitude long endurance, e.g. Global Hawk) |
| Role | Target, reconnaissance (ISR), combat (UCAV), logistics/delivery, research, civil/commercial |
| Level of autonomy | Remotely piloted; semi-autonomous (assisted modes, return to home); fully autonomous |
| Power | IC engine, electric (battery), hybrid, fuel cell, solar |

**Fixed wing vs multirotor**

| Feature | Fixed wing | Multirotor |
|---|---|---|
| Lift from | Wing moving through air | Rotors (thrust) |
| Hover | Not possible | Yes |
| Endurance and range | High (efficient) | Low (15–40 min typical) |
| Take-off and landing | Runway, hand launch or catapult; belly or net landing | Vertical (VTOL), any small space |
| Payload capacity per energy | Higher | Lower |
| Mechanical simplicity | Control surfaces, servos | Very simple (fixed-pitch props, control by motor speed) |
| Uses | Mapping large areas, surveillance, long corridors | Photography, inspection, short-range delivery, spraying |

**System composition (elements of a UAS)** — draw a block diagram:
1. **Air vehicle:** airframe, propulsion (motors or engine, propellers), power (battery or fuel), flight controller (autopilot), sensors, actuators.
2. **Payload:** EO/IR camera, LiDAR, multispectral sensor, sprayer, delivery box.
3. **Ground control station:** computer with mission planning software, displays, RC transmitter, antennas.
4. **Data links:** command and control (C2) uplink, telemetry downlink, payload video/data downlink.
5. **Launch and recovery:** catapult, runway, hand launch, VTOL pad; parachute, net, belly landing.
6. **Support and personnel:** remote pilot, payload operator, maintenance, transport, spares, charging.
7. **Navigation:** GNSS (GPS, NavIC), inertial sensors, compass.

**Applications:** agriculture (spraying, crop health by NDVI), survey and mapping (SVAMITVA scheme for rural property maps), infrastructure inspection (power lines, bridges, wind turbines), disaster management and search and rescue, delivery (medicines to remote areas, e.g. ICMR's i-Drone), film and media, policing and border surveillance, mining stockpile volumes, environmental monitoring, defence (ISR, strike, loitering munitions).

**Advantages:** no risk to a pilot; cheaper to buy and operate; can do dull, dirty and dangerous jobs; access to difficult places; high-resolution data on demand. **Limitations:** limited endurance and payload; weather sensitive; link loss; privacy, safety and regulation issues; vulnerability to jamming and spoofing.

### Solved examples

**Example 1: Classify by weight.** A drone of 1.8 kg take-off mass is a **micro** drone in India (> 250 g up to 2 kg). If a 400 g camera is added, the take-off mass becomes 2.2 kg, so it becomes a **small** drone (> 2 kg to 25 kg). Classification goes by all-up weight including payload.

**Example 2: Endurance needed for a survey.** A fixed-wing UAV flies at 15 m/s and must fly 18 km of survey lines plus 3 km of transit. Time = 21,000 / 15 = 1,400 s ≈ 23.3 min. With a 20% reserve, required endurance ≈ **28 min**.

### Key points to remember

- UAV = aircraft; UAS = the whole system (vehicle + GCS + link + payload + launch/recovery + crew).
- India weight classes: nano ≤ 250 g, micro ≤ 2 kg, small ≤ 25 kg, medium ≤ 150 kg, large > 150 kg.
- MALE and HALE are endurance classes; Predator/Heron = MALE, Global Hawk = HALE.
- Fixed wing = range and endurance; multirotor = hover and VTOL; hybrid VTOL = both.

### Important questions

1. Define UAV and UAS. With a block diagram explain the elements of a UAS.
2. Trace the history of UAVs from early target drones to modern multirotors.
3. Classify UAVs on different bases. Compare fixed wing and multirotor drones.
4. Explain civil and military applications of drones, with Indian examples.
5. List the advantages and limitations of UAVs.

---

## Unit 2: Design and Selection of UAVs

### 2-mark definitions

- **Lift:** the aerodynamic force perpendicular to the relative airflow; L = ½ ρ V² S C_L.
- **Drag:** the aerodynamic force opposite to the motion; D = ½ ρ V² S C_D. Total drag = parasite drag (skin friction, form, interference) + induced drag (due to lift).
- **Angle of attack (α):** angle between the wing chord line and the relative wind.
- **Stall:** sudden loss of lift when α exceeds the critical angle and the flow separates from the upper surface.
- **Aspect ratio (AR):** b² / S (span squared over wing area); high AR means lower induced drag (gliders, HALE UAVs).
- **Wing loading:** weight / wing area (N/m²); high wing loading gives higher stall speed.
- **Thrust-to-weight ratio (T/W):** total maximum thrust / weight; a multirotor needs T/W ≥ 2 for good control.
- **Disc loading:** thrust / total rotor disc area; low disc loading means more efficient hover.
- **Centre of gravity (CG):** the point where the whole weight acts; it must be ahead of the neutral point (fixed wing) or at the geometric centre (multirotor) for stability.
- **Stealth:** reducing the chances of detection by radar, infrared, acoustic and visual means.

### Core concepts

**Basic aerodynamics**
- Four forces: lift, weight, thrust, drag. Steady level flight: L = W and T = D.
- **Bernoulli and Newton:** the cambered wing turns the airflow downward (Newton's third law gives lift) and the faster flow over the upper surface has lower pressure (Bernoulli).
- **Three axes:** roll (longitudinal axis, ailerons), pitch (lateral axis, elevator), yaw (vertical axis, rudder).
- **Reynolds number** Re = ρVc/μ is low for small UAVs, so airfoils designed for low Re (e.g. Selig, Eppler) are used.
- **Multirotor control:** a quadcopter has two clockwise and two counter-clockwise rotors so the reaction torques cancel.
  - **Throttle:** all motors speed up together → climb.
  - **Roll/pitch:** speed up the rotors on one side and slow those opposite → tilt and move.
  - **Yaw:** speed up the CW pair and slow the CCW pair (or the reverse) → the net reaction torque turns the body.
- **Rotor momentum theory (hover):** thrust T = 2ρA v_i², so ideal induced power P = T·v_i = T^1.5 / √(2ρA). Figure of merit (FM) = ideal power / actual power (0.5–0.7 for small props).

**Airframe configurations**

| Type | Configurations | Notes |
|---|---|---|
| Fixed wing | Conventional (wing + tail), flying wing, canard, twin boom, V-tail, delta | Flying wing has low drag and low radar cross-section |
| Multirotor | Tricopter (Y), quad (X or +), hexa, octa, coaxial (X8) | More rotors = redundancy and lift, but more weight and power |
| Single rotor | Helicopter with tail rotor | Efficient large rotor, complex mechanics |
| Hybrid VTOL | Tilt-rotor, tilt-wing, tail-sitter, quadplane (lift rotors + pusher) | Hover plus efficient cruise |
| Others | Blimps, flapping wing, parafoil | Long endurance or bio-inspired |

**Design process and selection**
1. **Mission requirements:** payload mass, endurance, range, altitude, speed, environment, VTOL need, budget, regulations.
2. **Configuration choice** (fixed wing / multirotor / hybrid).
3. **Weight estimation:** all-up weight = empty structure + propulsion + battery/fuel + avionics + payload.
4. **Sizing:** wing area from stall speed (fixed wing), rotor size and motor from thrust needed (T/W ≥ 2).
5. **Propulsion and power:** motor Kv, propeller diameter and pitch, battery cells (S) and capacity (mAh), ESC current rating.
6. **Materials:** carbon fibre, glass fibre, balsa, EPO foam, aluminium, 3D-printed plastics. Need high strength-to-weight and vibration damping.
7. **Stability and control checks:** CG location, tail volume, control authority.
8. **Prototype, test and iterate.**

**Types of aircraft for UAV duty:** target drones, reconnaissance, combat (UCAV), cargo/logistics, agricultural (spray), mapping, micro and nano air vehicles (MAV/NAV), loitering munitions.

**Design standards and Indian regulations**
- **Drone Rules, 2021** (Ministry of Civil Aviation, notified 25 Aug 2021) and the Drone (Amendment) Rules 2022:
  - Registration on the **Digital Sky** platform; each drone gets a **Unique Identification Number (UIN)**.
  - **Type certificate** from the Quality Council of India (QCI) or an authorised body (not needed for nano drones and for model drones used for R&D).
  - **Remote Pilot Certificate (RPC)** from a DGCA-authorised Remote Pilot Training Organisation; not needed for nano drones and non-commercial micro drones; minimum age 18.
  - **Airspace map:** **green zone** (no permission needed, up to 400 ft / 120 m), **yellow zone** (controlled airspace; permission from the air traffic control authority), **red zone** (no-fly; only with central government permission).
  - Safety features such as "No Permission No Take-off" (NPNT), real-time tracking and geofencing (being phased in).
  - Drone import is restricted (Feb 2022); India's PLI scheme supports domestic manufacture.
- **Standards:** DGCA type-certification scheme; ASTM F38 (UAS), ISO 21384 (UAS operations); RTCA DO-178C (airborne software, large UAVs); EASA open/specific/certified categories; FAA Part 107 (USA).

**Design for stealth (low observability)**
- **Radar:** shaping (flat faceted surfaces, aligned edges, no right angles — flying wings like the Northrop B-2 and DRDO Ghatak), radar-absorbing materials (RAM) and coatings, internal weapon and payload bays, buried engine inlets.
- **Infrared:** exhaust cooling and shielding, electric propulsion (low heat), low-emissivity paint.
- **Acoustic:** low-tip-speed and larger propellers, more blades, electric motors.
- **Visual:** camouflage paint, small size, counter-illumination.
- **Electronic:** low probability of intercept (LPI) links, emission control.

### Solved examples

**Example 1: Hover power and flight time of a quadcopter.** All-up mass 1.5 kg, four 10-inch (0.254 m) props, ρ = 1.225 kg/m³, FM = 0.6, motor and ESC efficiency 0.8, battery 4S 5,000 mAh (14.8 V), use 80% of capacity.
- Thrust per rotor T = 1.5 × 9.81 / 4 = 3.68 N.
- Disc area A = π × 0.127² = 0.0507 m².
- Ideal power per rotor = T^1.5 / √(2ρA) = 7.06 / √(2 × 1.225 × 0.0507) = 7.06 / 0.352 ≈ 20.0 W. Four rotors: 80 W.
- Electrical power = 80 / (0.6 × 0.8) ≈ **167 W**.
- Usable energy = 14.8 × 5 × 0.8 = 59.2 Wh.
- Hover time = 59.2 / 167 h = 0.354 h ≈ **21 min**.

**Example 2: Thrust-to-weight check.** Each motor-prop gives 800 g of maximum thrust and the drone weighs 1,500 g. T/W = 3,200 / 1,500 = **2.13**, which is above 2, so the drone has enough control margin.

**Example 3: Stall speed of a fixed-wing UAV.** m = 5 kg, wing area S = 0.6 m², C_L,max = 1.2, sea level.
- V_stall = √(2W / (ρ S C_L,max)) = √(2 × 49.05 / (1.225 × 0.6 × 1.2)) = √111.2 ≈ **10.5 m/s**.
- Take off and approach at about 1.2 × V_stall ≈ 12.7 m/s.

**Example 4: Wing loading and aspect ratio.** Span 2.0 m, wing area 0.5 m², weight 49 N. AR = 2² / 0.5 = **8**; wing loading = 49 / 0.5 = **98 N/m²**.

### Key points to remember

- L = ½ρV²SC_L; stall when α exceeds critical angle; V_stall = √(2W/ρSC_Lmax).
- Quad control: throttle, roll/pitch by differential speed, yaw by CW/CCW torque imbalance.
- Hover power P = T^1.5/√(2ρA); FM about 0.5–0.7; T/W ≥ 2.
- Drone Rules 2021: Digital Sky, UIN, type certificate, RPC, green/yellow/red zones, 400 ft limit in green zone.
- Stealth: shape, RAM, IR suppression, quiet props, LPI links.

### Important questions

1. Explain the forces on a UAV and how a quadcopter is controlled in roll, pitch, yaw and throttle.
2. Describe the airframe configurations of UAVs with their merits and demerits.
3. Explain the design process for selecting a UAV for a given mission. Work a hover-power or flight-time example.
4. Explain India's drone regulations (Drone Rules 2021): categories, registration, certification, pilot certificate and airspace zones.
5. What is stealth? Explain techniques used to design a low-observable UAV.

---

## Unit 3: Avionics Hardware

### 2-mark definitions

- **Avionics:** all the electronic systems on an aircraft: flight control, navigation, communication, sensors and power management.
- **Autopilot / flight controller (FC):** the on-board computer that reads sensors, estimates attitude and position, and drives actuators to keep the UAV stable and follow commands. Examples: Pixhawk (PX4/ArduPilot), Naza, KK2.
- **IMU (inertial measurement unit):** a package of 3-axis accelerometers and 3-axis gyroscopes (often with a magnetometer) that measures acceleration and angular rate.
- **Accelerometer:** measures specific force (acceleration minus gravity) along an axis; at rest it senses gravity, so it gives the tilt.
- **Gyroscope (rate gyro):** measures angular velocity about an axis; integrating it gives angle but it drifts.
- **AGL sensor:** measures height above ground level, e.g. sonar, laser rangefinder (LiDAR), radar altimeter.
- **Barometric (pressure) altimeter:** estimates altitude from static air pressure (pressure falls about 12 Pa per metre near sea level).
- **Servo:** a motor with built-in position feedback that moves to a commanded angle set by a PWM pulse (1–2 ms).
- **ESC (electronic speed controller):** converts battery DC into three-phase drive for a brushless motor and sets its speed from the FC signal (PWM, OneShot, DShot).
- **Sensor fusion:** combining several noisy sensors (gyro, accelerometer, magnetometer, GPS, baro) into one better estimate, using a complementary filter or a Kalman filter (EKF).

### Core concepts

**Autopilot architecture (block diagram):** sensors (IMU, magnetometer, barometer, GPS, airspeed, AGL) → state estimator (EKF) → control laws (inner attitude-rate loop, outer attitude loop, outermost position/velocity loop) → mixer → actuators (ESCs/motors, servos). Plus a telemetry radio, RC receiver, data logger, failsafe logic and power module.

**Flight modes:** manual/stabilize, altitude hold, position hold (loiter), auto (mission), return-to-launch (RTL), land, guided, follow-me.

**Sensors**

| Sensor | Measures | Working principle | Weakness |
|---|---|---|---|
| Accelerometer (MEMS) | Linear acceleration, tilt from gravity | Proof mass on springs; capacitance change | Noisy with vibration |
| Gyroscope (MEMS) | Angular rate | Vibrating mass, Coriolis force | Bias drift over time |
| Magnetometer | Heading from Earth's field | Hall effect / magnetoresistance | Disturbed by motors, wires, metal |
| Barometer | Altitude | Pressure sensor (piezoresistive) | Weather and prop-wash drift |
| GNSS (GPS, NavIC, GLONASS, Galileo) | Position, velocity, time | Trilateration from satellite signals | Needs sky view; jamming, spoofing |
| Pitot-static airspeed | Airspeed | Dynamic pressure q = ½ρV² | Fixed wing only; icing |
| Sonar | Height AGL (< 5–7 m) | Ultrasonic echo time | Soft surfaces, noise |
| LiDAR rangefinder | Height AGL, obstacle distance | Laser time-of-flight | Cost, sunlight, reflectivity |
| Optical flow | Velocity over ground | Camera tracks texture | Needs texture and light |

**Why fuse accelerometer and gyro:** the gyro is accurate over short times but drifts; the accelerometer is right on average but noisy. A **complementary filter**: θ = α(θ_prev + ω·Δt) + (1 − α)·θ_acc, with α ≈ 0.98, uses the gyro for fast changes and the accelerometer to remove drift. An **EKF** does this optimally with GPS and baro too.

**Actuators**
- **Brushless DC (BLDC) motors:** outrunner type for drones; rated by **Kv** (rpm per volt, no load), size (e.g. 2212), max current. Low Kv + large prop for efficiency; high Kv + small prop for speed.
- **Servos:** drive control surfaces (aileron, elevator, rudder), gimbals, landing gear, release mechanisms. Analog vs digital servos; torque in kg·cm.
- **ESCs:** rated current (e.g. 30 A) must exceed the motor's maximum current; BEC supplies 5 V to the electronics.
- **Propellers:** given as diameter × pitch (e.g. 10×4.5 inch); pitch = distance moved per revolution; CW and CCW versions.

**Power supply**
- **Lithium polymer (LiPo):** 3.7 V nominal per cell (4.2 V full, about 3.3–3.5 V safe minimum); packs named nS (cells in series) and mAh; C-rating gives max discharge current = C × capacity (Ah).
- **Li-ion:** higher energy density, lower discharge rate; good for long-endurance cruise.
- **Others:** IC engine (petrol, glow), hybrid generator, hydrogen fuel cell, solar cells on wings.
- **Power module / PDB:** distributes power and measures voltage and current for the FC.
- **Safety:** balance charging, storage at 3.8 V per cell, fireproof bag, never puncture or over-discharge.

**Processor:** microcontroller (STM32 ARM Cortex-M4/M7 on Pixhawk), runs a real-time OS (NuttX for PX4, ChibiOS for ArduPilot); companion computers (Raspberry Pi, NVIDIA Jetson) for vision and AI.

**Integration:** mount the FC at the CG on vibration dampers, align its arrow with the nose, keep the compass/GPS on a mast away from power wires, calibrate (accelerometer, compass, radio, ESC), check motor order and direction, set failsafes, and do a bench test without props.

### Solved examples

**Example 1: Battery maximum current.** A 4S 5,000 mAh 25C LiPo can give 25 × 5 = **125 A**. If four motors draw 20 A each at full throttle (80 A), the battery is adequate.

**Example 2: Motor speed from Kv.** A 920 Kv motor on a 3S pack (11.1 V) spins at no load ≈ 920 × 11.1 ≈ **10,212 rpm**; under load it is roughly 80–85% of this.

**Example 3: Barometric altitude.** The barometer reads 1,001.3 hPa on the ground and 989.3 hPa in flight. Δp = 12 hPa = 1,200 Pa. With about 12 Pa per metre near sea level, height ≈ 1,200 / 12 = **100 m**.

**Example 4: Complementary filter step.** Previous angle 10°, gyro rate 20°/s, Δt = 0.01 s, accelerometer angle 11°, α = 0.98. θ = 0.98 × (10 + 0.2) + 0.02 × 11 = 9.996 + 0.22 = **10.22°**.

### Key points to remember

- Autopilot loop: sensors → EKF → controllers (rate, attitude, position) → mixer → ESC/servo.
- Gyro drifts, accelerometer is noisy → fuse them.
- AGL sensors: sonar, LiDAR, radar altimeter; baro gives altitude relative to the take-off point.
- LiPo: 3.7 V/cell nominal, 4.2 V full; max current = C × Ah; Kv = rpm per volt.
- Integrate: FC at CG, damped, compass away from power, calibrate, failsafe.

### Important questions

1. Explain the architecture of a UAV autopilot with a block diagram and explain the flight modes.
2. Describe the sensors used on UAVs (accelerometer, gyroscope, magnetometer, barometer, GPS, AGL sensors) and their working principles.
3. What is sensor fusion? Explain the complementary filter.
4. Explain actuators used in UAVs: BLDC motors, ESCs, servos and propellers.
5. Discuss power supply options for UAVs and LiPo battery ratings and safety. Explain the steps of avionics integration.

---

## Unit 4: Payloads, Communication and Control

### 2-mark definitions

- **Payload:** mission equipment carried by the UAV: cameras (RGB, thermal), multispectral/hyperspectral sensors, LiDAR, SAR radar, sprayers, delivery mechanisms, communication relays, weapons.
- **Gimbal:** a 2- or 3-axis motorized mount that keeps a camera stable and pointed regardless of drone motion.
- **Telemetry:** automatic measurement and wireless transmission of flight data (position, altitude, speed, battery, attitude) from the UAV to the GCS.
- **MAVLink:** a lightweight message protocol used between autopilots, GCS and companion computers.
- **Tracking:** following the UAV's position (GPS telemetry, antenna trackers that point a directional antenna at it, radar, ADS-B, Remote ID).
- **PID controller:** a feedback controller with output u = K_p·e + K_i·∫e dt + K_d·de/dt.
- **Radio horizon:** the farthest distance to which a line-of-sight radio link reaches, limited by Earth's curvature.
- **Modem:** a device that modulates digital data onto a radio carrier and demodulates it at the receiver (e.g. SiK 433/915 MHz radios, LoRa, Wi-Fi, LTE modules).
- **Simulation (SITL/HITL):** software-in-the-loop runs the autopilot code with a simulated aircraft; hardware-in-the-loop runs the real flight controller connected to a simulator.
- **Failsafe:** an automatic action (RTL, land, loiter) when the RC link, telemetry, GPS or battery fails.

### Core concepts

**Payload types and uses**

| Payload | Use |
|---|---|
| RGB camera | Photography, photogrammetry, 3D models, orthomosaics |
| Thermal (IR) camera | Search and rescue, solar panel and power line inspection, firefighting |
| Multispectral camera | Crop health, NDVI = (NIR − Red) / (NIR + Red) |
| LiDAR | Accurate 3D point clouds, terrain under vegetation |
| Synthetic aperture radar | All-weather, day/night imaging (large UAVs) |
| Sprayer / spreader | Pesticide and fertiliser application |
| Delivery mechanism | Medicines, parcels (winch or drop) |
| Gas sensors, radiation detectors | Environmental monitoring, hazards |

Payload selection: mass and power budget, field of view and resolution, stabilization, data storage or link bandwidth, CG shift.

**Communication links**
- **C2 (command and control) uplink:** RC commands and mission updates; must be highly reliable.
- **Telemetry downlink:** flight data to GCS.
- **Payload downlink:** video/data (high bandwidth, e.g. analog 5.8 GHz FPV, digital HD systems).

**Radio frequency ranges used**

| Band | Typical use |
|---|---|
| 433 MHz, 865–867 MHz (India licence-free), 915 MHz (USA) | Long-range telemetry (SiK, LoRa) |
| 2.4 GHz ISM | RC control, Wi-Fi, telemetry |
| 5.8 GHz | FPV video, Wi-Fi |
| L/S/C bands, satellite (Ku/Ka) | Military and BVLOS links |
| LTE/5G cellular | BVLOS via mobile network |

Lower frequency travels farther and passes obstacles better but carries less data; higher frequency gives more bandwidth but shorter range.

**Link budget:** received power P_r (dBm) = P_t + G_t + G_r − FSPL − other losses. FSPL (dB) = 20 log₁₀(d in km) + 20 log₁₀(f in MHz) + 32.44. Link works if P_r is above receiver sensitivity with a fade margin (≥ 10 dB is good).

**Radio horizon:** d (km) ≈ 4.12 (√h₁ + √h₂), heights in metres (includes 4/3 Earth refraction).

**Memory and data:** on-board SD card logs flight data (dataflash, ULog) and payload images; geotagging links each image to GPS position; data security and encryption matter.

**PID control**
- **P term:** reacts to present error; higher K_p = faster response but overshoot and oscillation.
- **I term:** removes steady-state error (e.g. a heavy side or wind); too much causes slow oscillation and windup.
- **D term:** reacts to the rate of change of error, damps overshoot; amplifies noise.
- **Cascaded loops in a multirotor:** inner rate loop (fastest, PID on angular velocity), attitude loop (P on angle), velocity and position loops.
- **Tuning:** start with P (raise until oscillation, then back off), add D to damp, add a little I; or use auto-tune.
- **Discrete form:** u_k = K_p·e_k + K_i·Σe·Δt + K_d·(e_k − e_{k−1})/Δt.

**Simulation, ground testing and troubleshooting**
- Simulators: SITL with Gazebo, jMAVSim, AirSim, X-Plane, FlightGear.
- Ground tests: range test of radios, motor and ESC test, vibration analysis, compass interference test (motors on), failsafe tests, CG check, payload function test.
- Troubleshooting:

| Symptom | Likely cause | Fix |
|---|---|---|
| Drone flips at take-off | Wrong motor order/direction or prop on wrong motor | Check mixer and prop direction |
| Toilet-bowling (circling in loiter) | Compass interference or miscalibration | Move compass, recalibrate |
| Oscillation | PID gains too high, vibration | Lower gains, balance props, add dampers |
| Drifts in altitude hold | Baro affected by prop-wash or light | Foam cover over barometer |
| Short flight time | Old battery, overweight, wrong prop | Check internal resistance, reduce weight |
| Link loss | Antenna orientation, interference | Re-orient antennas, change channel |

### Solved examples

**Example 1: Radio horizon.** GCS antenna at 2 m, UAV at 120 m. d ≈ 4.12 (√2 + √120) = 4.12 (1.414 + 10.954) ≈ **51 km**. Beyond this the link is blocked by the Earth even with enough power.

**Example 2: Link budget.** Telemetry at 2.4 GHz, d = 5 km, P_t = 20 dBm (100 mW), G_t = G_r = 2 dBi, sensitivity −95 dBm.
- FSPL = 20 log 5 + 20 log 2400 + 32.44 = 13.98 + 67.60 + 32.44 ≈ 114.0 dB.
- P_r = 20 + 2 + 2 − 114 = **−90 dBm**.
- Margin = −90 − (−95) = **5 dB**, which is thin; use higher-gain antennas or a lower frequency.

**Example 3: Ground sampling distance (GSD).** Sensor width 13.2 mm, focal length 8.8 mm, image width 5,472 pixels, altitude 100 m.
- GSD = (sensor width × altitude) / (focal length × image width) = (13.2 × 100) / (8.8 × 5,472) m ≈ 0.0274 m = **2.74 cm/pixel**.
- To get 2 cm/pixel, fly at 100 × 2 / 2.74 ≈ 73 m.

**Example 4: PID output.** K_p = 2, K_i = 0.5, K_d = 0.1, current error 4°, integral of error 6°·s, error rate −10°/s. u = 2 × 4 + 0.5 × 6 + 0.1 × (−10) = 8 + 3 − 1 = **10** (units of actuator command).

### Key points to remember

- Three links: C2, telemetry, payload; MAVLink protocol.
- Lower frequency = longer range; higher frequency = more bandwidth.
- FSPL = 20 log d(km) + 20 log f(MHz) + 32.44; radio horizon 4.12(√h₁ + √h₂).
- PID: P = present, I = past (steady error), D = future (damping); cascaded loops.
- GSD = sensor width × H / (focal length × image width).

### Important questions

1. Explain different types of UAV payloads and the factors in selecting one.
2. Explain UAV telemetry and tracking. Describe the RF frequency bands used and their trade-offs.
3. Explain PID control and its tuning in a multirotor with cascaded loops.
4. What is a link budget? Calculate the received power for given data. Explain radio horizon.
5. Explain simulation (SITL/HITL), ground testing and troubleshooting of UAVs.

---

## Unit 5: Navigation, Testing and Future of Drones

### 2-mark definitions

- **Waypoint:** a geographic point (latitude, longitude, altitude) that the UAV flies to as part of a mission.
- **Waypoint navigation:** autonomous flight along a sequence of waypoints with commands (take off, loiter, take photo, land) stored in the autopilot.
- **Geofence:** a virtual boundary; if the UAV crosses it, the autopilot triggers RTL or land.
- **Return to launch (RTL):** automatic flight back to the home point at a safe altitude.
- **Ground control software:** PC or tablet software to plan missions, monitor telemetry and command the UAV (Mission Planner, QGroundControl, DJI Pilot, UgCS).
- **Line-of-sight guidance / L1 guidance:** steering laws that make a fixed wing UAV follow a path between waypoints.
- **Waypoint acceptance radius:** the distance at which a waypoint is treated as reached.
- **Pre-flight checklist:** a written list of checks (airframe, props, battery, GPS lock, compass, failsafes, weather, permissions) done before every flight.
- **Swarm:** many drones cooperating with distributed control (shows, search, military).
- **Urban air mobility (UAM):** future air taxis and cargo drones in cities (eVTOL).

### Core concepts

**Waypoint navigation**
1. Plan in the GCS: draw the route or survey polygon on a map, set altitude, speed, overlap (front 75–80%, side 65–70% for mapping), camera trigger.
2. Upload the mission to the autopilot over telemetry.
3. Arm, take off (auto or manual), switch to AUTO.
4. The autopilot uses GPS position and heading; the guidance law produces desired heading/velocity toward the next waypoint; inner loops track it.
5. Mission events: loiter, change speed, trigger camera, drop payload, DO_JUMP (repeat).
6. RTL/land at the end; download logs and images.

**Navigation sources:** GNSS (GPS, NavIC — India's regional system, GLONASS, Galileo), RTK/PPK GPS for cm-level accuracy (base station corrections), INS dead reckoning, visual odometry and SLAM in GPS-denied areas, optical flow indoors.

**Ground control software features:** map and mission planning, parameter setup and calibration, real-time HUD (attitude, altitude, speed, battery), video display, geofence setup, log analysis, firmware upload, multi-vehicle control.

**Ground testing:** structural and vibration tests, motor thrust stand tests, range check, RF interference check, failsafe tests (switch off the transmitter and confirm RTL), compass-motor interference test, HITL/SITL rehearsal of the mission.

**In-flight testing (progressive build-up):**
1. Hover in stabilize at low height, check stability and vibration.
2. Altitude hold, position hold, then manual manoeuvres.
3. PID tuning and auto-tune.
4. Short automatic mission, RTL test, failsafe test in air.
5. Payload test; full-length mission; endurance test.
6. Analyse logs after every flight (vibration, EKF innovations, battery sag, motor outputs).

**Safety during testing:** open field away from people, VLOS, a safety pilot with manual override, kill switch, fire extinguisher for LiPo, weather limits (wind, rain), check NOTAMs and the Digital Sky airspace map.

**Future prospects**
- Drone delivery (medical supplies, e-commerce), drone corridors.
- Agriculture: Kisan drones, precision spraying; Namo Drone Didi scheme (drones for women self-help groups).
- Urban air mobility and air taxis (eVTOL).
- AI and computer vision: autonomous inspection, obstacle avoidance, target tracking.
- Swarms for shows, search and defence; loitering munitions.
- Hydrogen fuel cell and solar long-endurance drones; HAPS (high-altitude pseudo-satellites).
- 5G-connected BVLOS operations; UTM (unmanned traffic management) and Remote ID.
- India's goal to be a global drone hub by 2030; drone PLI scheme; drone training schools.

**Challenges**
- Battery energy density limits endurance.
- Airspace integration and collision avoidance (detect and avoid), UTM.
- Regulation, BVLOS approvals, privacy concerns.
- Security: GPS jamming and spoofing, hacking of links, rogue drones (need counter-drone systems).
- Weather: wind, rain, icing.
- Public acceptance, noise, insurance and liability.
- Reliability and certification of large drones over people.

### Solved examples

**Example 1: Mapping mission photo count.** Survey a 500 m × 300 m field. Each photo covers 80 m (along track) × 120 m (across track) on the ground. Overlap: front 75%, side 70%.
- Spacing between photos = 80 × (1 − 0.75) = 20 m; between lines = 120 × (1 − 0.70) = 36 m.
- Number of lines = 300 / 36 ≈ 8.3 → **9 lines** (plus one to cover edges is common).
- Photos per line = 500 / 20 + 1 = 26.
- Total ≈ 9 × 26 = **234 photos**.

**Example 2: Distance between two waypoints (flat-earth approximation).** Δlatitude = 0.0010°, Δlongitude = 0.0010°, latitude 26.8° (Lucknow). North distance = 0.0010 × 111,320 ≈ 111.3 m. East distance = 0.0010 × 111,320 × cos 26.8° ≈ 99.4 m. Distance ≈ √(111.3² + 99.4²) ≈ **149 m**.

**Example 3: RTL battery reserve.** The UAV is 2 km from home, RTL speed 10 m/s, power draw 200 W. Time = 200 s; energy = 200 × 200 / 3600 ≈ 11.1 Wh. Add landing and a 30% margin: about 15 Wh must remain when RTL starts.

### Key points to remember

- Waypoint mission: plan → upload → arm → AUTO → events → RTL → logs.
- Geofence, RTL and failsafes are core safety features.
- GCS software: Mission Planner, QGroundControl.
- Testing is progressive: bench → hover → modes → tuning → auto → payload → endurance.
- Future: delivery, agriculture, UAM, swarms, AI, UTM; challenges: battery, airspace, security, regulation.

### Important questions

1. Explain waypoint navigation and the role of ground control software, with a mission planning example.
2. Describe ground testing and in-flight testing procedures for a UAV.
3. Explain GNSS, RTK and GPS-denied navigation methods for UAVs.
4. Discuss the future prospects of drone technology in India.
5. What are the major challenges in drone technology and how can they be addressed?

---

## Last-hour checklist

- [ ] UAV vs UAS; elements of UAS (block diagram); history milestones (Queen Bee, Predator, DJI).
- [ ] Classification: wing type, weight (India: nano/micro/small/medium/large), MALE/HALE, role, autonomy.
- [ ] Fixed wing vs multirotor table; hybrid VTOL.
- [ ] Lift, drag, stall, AR, wing loading; quad control (throttle, roll, pitch, yaw).
- [ ] Hover power (167 W, 21 min); T/W (2.13); stall speed (10.5 m/s).
- [ ] Drone Rules 2021: Digital Sky, UIN, type certificate, RPC, green/yellow/red zones, 400 ft.
- [ ] Stealth: shape, RAM, IR, acoustic, visual, electronic.
- [ ] Autopilot block diagram, flight modes; sensor table; complementary filter (10.22°).
- [ ] BLDC/Kv, ESC, servo, props; LiPo 3.7 V, C-rating (125 A).
- [ ] Payload types; three links; RF bands; link budget (−90 dBm, 5 dB margin); radio horizon (51 km); GSD (2.74 cm).
- [ ] PID terms and tuning; cascaded loops; SITL/HITL; troubleshooting table.
- [ ] Waypoint mission steps; GCS software; testing build-up; future and challenges.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Unmanned Aircraft Systems: UAV Design, Development and Deployment | Reg Austin | Wiley (2010) | [WorldCat](https://search.worldcat.org/search?q=Unmanned+Aircraft+Systems+UAV+Design+Development+and+Deployment+Austin) |
| 2 | Flight Stability and Automatic Control | Robert C. Nelson | McGraw-Hill (1998) | [WorldCat](https://search.worldcat.org/search?q=Flight+Stability+and+Automatic+Control+Nelson) |
| 3 | Advances in Unmanned Aerial Vehicles | Kimon P. Valavanis (ed.) | Springer (2007) | [WorldCat](https://search.worldcat.org/search?q=Advances+in+Unmanned+Aerial+Vehicles+Valavanis) |
| 4 | Introduction to UAV Systems | Paul G. Fahlstrom, Thomas J. Gleason | UAV Systems Inc. (1998); later editions Wiley | [WorldCat](https://search.worldcat.org/search?q=Introduction+to+UAV+Systems+Fahlstrom+Gleason) |
| 5 | Design of Unmanned Air Vehicle Systems | Armand J. Chaput | Lockheed Martin Aeronautics (course notes) | [WorldCat](https://search.worldcat.org/search?q=Design+of+Unmanned+Air+Vehicle+Systems+Chaput) |

**Syllabus source:** [AKTU Open Elective-III and IV syllabus for B.Tech 8th semester, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf)

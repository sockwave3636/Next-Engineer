---
program: btech
branches: [cse, it, cse-aiml, cse-ds, aids, ece, ee]
semester: 2
code: AME201A
name: Fundamentals of Mechanical Engineering
credits: 2
ltp: 2-0-0
scheme: AKTU B.Tech 1st year, 2026-27 onwards
syllabusSource: https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf
units:
  - Engineering Mechanics and Strength of Materials Basics
  - Thermodynamics and Heat Transfer Basics
  - Machine Elements and Power Transmission
  - Manufacturing Processes
  - Mechatronics and Robotics
---

# AME201A Fundamentals of Mechanical Engineering: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. This version (A) is for the CSE stream, ECE and EE. The same course is taught as AME101A in semester 1 for the other group of students. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: laws, processes described in words and comparison tables.
3. **Solved examples**: the numericals examiners set (resultant force, stress and elongation, beam reactions and bending moment, first law, Carnot efficiency, conduction, convection and radiation, belt drive, shaft power, cutting speed, stepper motor, hydraulic press).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (2 hours):** Unit 1 (forces, resultant, equilibrium, stress and strain, Hooke's law, beams, materials) and Unit 2 (system, laws of thermodynamics, conduction, convection and radiation, electronics cooling).
- **Afternoon (2 hours):** Unit 3 (fasteners, keys, shafts, couplings, bearings, belts, chains, gears) and Unit 4 (casting, forming, machining, joining, 3D printing, CNC).
- **Evening (1 to 2 hours):** Unit 5 (actuators, robot types, drones, Industry 4.0), then the "Last-hour checklist".
- **In the exam:** draw a free-body diagram for every mechanics problem, the stress-strain curve, the three modes of heat transfer, a belt drive, the lathe and the robot configurations. Always write units.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit. Internal assessment carries another 30 marks.

---

## Unit 1: Engineering Mechanics and Strength of Materials Basics

### 2-mark definitions

- **Force:** a push or pull that changes or tends to change the state of rest or motion of a body. It is a vector, with magnitude, direction and point of application; unit newton (N).
- **Resultant:** the single force that has the same effect as a system of forces.
- **Equilibrium:** a body is in equilibrium when the resultant force and resultant moment on it are zero: ΣFx = 0, ΣFy = 0, ΣM = 0.
- **Moment of a force:** the turning effect of a force about a point, M = F × perpendicular distance; unit N·m.
- **Free-body diagram (FBD):** a sketch of a body isolated from its surroundings, showing all forces and reactions acting on it.
- **Stress (σ):** internal resistance per unit area, σ = P/A; unit pascal (N/m²) or MPa (N/mm²).
- **Strain (ε):** change in length per original length, ε = δL/L; no unit.
- **Hooke's law:** within the elastic limit, stress is proportional to strain: σ = Eε, where E is Young's modulus (steel about 200 GPa).
- **Factor of safety (FOS):** ultimate (or yield) stress divided by working stress.
- **Beam:** a structural member that carries loads perpendicular to its axis and resists them by bending.

### Core concepts

**Laws of forces:**
- **Parallelogram law:** R = √(P² + Q² + 2PQ cos θ); direction tan α = Q sin θ/(P + Q cos θ).
- **Triangle law and Lami's theorem:** for three forces in equilibrium, each force is proportional to the sine of the angle between the other two: P/sin α = Q/sin β = R/sin γ.
- **Newton's laws:** inertia; F = ma; action and reaction.

**Stress-strain curve of mild steel (tension test):**
1. **Proportional limit:** straight line, Hooke's law holds.
2. **Elastic limit:** the material returns to its original length when unloaded.
3. **Yield point:** large strain with little increase in load (upper and lower yield points).
4. **Ultimate stress:** the maximum stress.
5. **Breaking point:** fracture after necking.
- **Ductile** materials (mild steel, copper) stretch a lot before breaking; **brittle** materials (cast iron, glass) break with little strain.

**Types of loads and stresses:** tensile (pulling), compressive (pushing), shear (sliding), bending and torsion (twisting).

**Beams and loads:**
- **Types of beams:** cantilever (fixed at one end), simply supported (supports at both ends), overhanging, fixed, continuous.
- **Types of loads:** point load, uniformly distributed load (UDL), uniformly varying load.
- **Shear force (SF):** the algebraic sum of vertical forces on one side of a section. **Bending moment (BM):** the algebraic sum of moments on one side. Maximum BM occurs where SF changes sign (is zero).

| Beam and load | Reactions | Maximum BM |
|---|---|---|
| Simply supported, point load W at centre | W/2 each | WL/4 at centre |
| Simply supported, UDL w over span L | wL/2 each | wL²/8 at centre |
| Cantilever, point load W at free end | W at fixed end | WL at fixed end |
| Cantilever, UDL w over length L | wL at fixed end | wL²/2 at fixed end |

**Engineering materials:**

| Class | Examples | Properties and uses |
|---|---|---|
| Ferrous metals | Mild steel, stainless steel, cast iron | Strong, cheap; frames, shafts, machine beds |
| Non-ferrous metals | Aluminium, copper, titanium | Light (Al), conductive (Cu), corrosion resistant; heat sinks, wires, aircraft |
| Polymers | ABS, nylon, PVC, PLA | Light, insulating, mouldable; casings, 3D printing |
| Ceramics | Alumina, silicon carbide, glass | Hard, heat resistant, brittle; insulators, substrates |
| Composites | CFRP, GFRP, FR-4 (PCB board) | High strength-to-weight; drones, sports goods, circuit boards |

### Solved examples

**Example 1 (resultant).** Forces of 30 N and 40 N act at a point at 90° to each other.
- R = √(30² + 40²) = **50 N**, at tan⁻¹(40/30) = **53.13°** to the 30 N force.
- If the angle were 60°: R = √(900 + 1,600 + 2 × 30 × 40 × 0.5) = **60.83 N**.

**Example 2 (stress and elongation).** A steel rod of 20 mm diameter and 2 m length carries a tensile load of 50 kN; E = 200 GPa.
- A = π × 20²/4 = 314.16 mm².
- σ = 50,000/314.16 = **159.2 MPa**.
- ε = 159.2/200,000 = **7.96 × 10⁻⁴**.
- δL = εL = 7.96 × 10⁻⁴ × 2,000 = **1.59 mm**.

**Example 3 (beam).** A simply supported beam of span 6 m carries a 12 kN point load at the centre.
- Reactions = **6 kN** each; maximum BM = WL/4 = 12 × 6/4 = **18 kN·m**.
- With a UDL of 4 kN/m over a 5 m span instead: reactions = 10 kN each; maximum BM = wL²/8 = 4 × 25/8 = **12.5 kN·m**.

**Example 4 (FOS).** Ultimate stress 400 MPa, working stress 100 MPa: FOS = **4**.

### Key points to remember

- R = √(P² + Q² + 2PQ cos θ); equilibrium ΣF = 0, ΣM = 0; Lami's theorem.
- σ = P/A; ε = δL/L; E = σ/ε; δL = PL/(AE).
- Stress-strain curve: proportional, elastic, yield, ultimate, breaking.
- SS beam: WL/4 (point) and wL²/8 (UDL); cantilever: WL and wL²/2.
- Ductile vs brittle; five classes of materials.

### Important questions

1. State and explain the parallelogram law, triangle law and Lami's theorem; find the resultant of forces.
2. Draw and explain the stress-strain curve for mild steel. Define the elastic constants.
3. Solve a numerical on stress, strain and elongation of a bar.
4. Explain types of beams and loads; find the reactions and maximum bending moment.
5. Classify engineering materials with properties and applications in electronic and computing devices.

---

## Unit 2: Thermodynamics and Heat Transfer Basics

### 2-mark definitions

- **Thermodynamic system:** the quantity of matter or region chosen for study. **Surroundings:** everything outside it. **Boundary:** the surface separating them.
- **Closed system:** energy crosses the boundary but mass does not (gas in a piston-cylinder). **Open system:** both mass and energy cross (compressor, turbine, CPU fan). **Isolated system:** neither crosses (an ideal thermos flask).
- **Property:** a measurable characteristic of a system (pressure, temperature, volume). **Intensive** properties do not depend on mass (T, p); **extensive** ones do (V, energy).
- **Zeroth law:** if two bodies are each in thermal equilibrium with a third, they are in thermal equilibrium with each other. It is the basis of temperature measurement.
- **First law:** energy is conserved: for a process, Q = ΔU + W.
- **Second law (Kelvin-Planck):** no heat engine working in a cycle can convert all the heat it receives into work; some heat must be rejected. **Clausius statement:** heat cannot flow from a colder to a hotter body without external work.
- **Heat transfer:** the flow of thermal energy because of a temperature difference, by conduction, convection or radiation.
- **Thermal conductivity (k):** a material's ability to conduct heat; unit W/(m·K). Copper about 400, aluminium about 205, air about 0.026.

### Core concepts

**Heat engine, refrigerator and heat pump:**
- **Heat engine efficiency:** η = W/Q₁ = 1 − Q₂/Q₁.
- **Carnot efficiency (maximum possible):** η = 1 − T₂/T₁ (temperatures in kelvin).
- **Refrigerator:** COP = Q₂/W (heat removed from the cold space per unit work). **Heat pump:** COP = Q₁/W.

**Three modes of heat transfer:**

| Mode | Mechanism | Law | Example |
|---|---|---|---|
| Conduction | Molecule-to-molecule through a solid or still fluid | Fourier: Q = kAΔT/L | Heat through a CPU heat spreader |
| Convection | Bulk motion of a fluid | Newton: Q = hAΔT | Fan blowing air over a heat sink |
| Radiation | Electromagnetic waves, no medium | Stefan-Boltzmann: Q = εσA(T₁⁴ − T₂⁴) | Heat from the Sun, hot components |

- σ = 5.67 × 10⁻⁸ W/(m²·K⁴); ε is the emissivity (0 to 1).
- **Natural (free) convection** is driven by density differences; **forced convection** uses a fan or pump and gives a much larger h.

**Applications in computing and electronics:**
- **CPU cooling:** heat flows by conduction from the die through thermal paste (fills air gaps) and a copper or aluminium heat sink with fins (more area); a fan provides forced convection. **Heat pipes** carry heat quickly using evaporation and condensation of a fluid inside a sealed tube.
- **Data centre cooling:** hot-aisle and cold-aisle layout, computer-room air conditioning, liquid cooling of racks; efficiency is measured by **PUE** (power usage effectiveness) = total facility power/IT equipment power (ideal 1.0).
- **EV battery thermal management:** lithium-ion cells work best at about 20 °C to 40 °C. Air cooling, liquid cooling plates or phase-change materials remove heat during fast charging and driving, and heaters warm the pack in cold weather. Overheating can lead to thermal runaway.

### Solved examples

**Example 1 (first law).** A system receives 500 kJ of heat and does 200 kJ of work. ΔU = Q − W = **300 kJ** (internal energy increases).

**Example 2 (Carnot).** An engine works between 600 K and 300 K. Maximum efficiency = 1 − 300/600 = **50%**.

**Example 3 (conduction through thermal paste).** A CPU puts 65 W through a 40 mm × 40 mm layer of thermal paste 0.1 mm thick, k = 5 W/(m·K).
- A = 1.6 × 10⁻³ m²; ΔT = QL/(kA) = 65 × 10⁻⁴/(5 × 1.6 × 10⁻³) = **0.81 °C**. A thin, high-k layer gives a very small temperature drop.

**Example 4 (convection).** A surface of 0.5 m² at 40 °C above the air with h = 25 W/(m²·K) loses Q = 25 × 0.5 × 40 = **500 W**.

**Example 5 (radiation).** A plate of area 0.2 m² with ε = 0.9 at 400 K radiates to surroundings at 300 K.
- Q = 0.9 × 5.67 × 10⁻⁸ × 0.2 × (400⁴ − 300⁴) = **178.6 W**.

### Key points to remember

- Closed, open, isolated systems; intensive vs extensive.
- Zeroth (temperature), first (Q = ΔU + W), second (Kelvin-Planck, Clausius) laws.
- Carnot η = 1 − T₂/T₁ (kelvin); COP_ref = Q₂/W.
- Conduction kAΔT/L; convection hAΔT; radiation εσA(T₁⁴ − T₂⁴).
- CPU: paste, heat sink, fan, heat pipe; data centre PUE; EV pack 20 °C to 40 °C.

### Important questions

1. Define system, surroundings and boundary; explain closed, open and isolated systems with examples.
2. State the zeroth, first and second laws of thermodynamics with applications.
3. Explain heat engine, refrigerator and heat pump; find Carnot efficiency and COP.
4. Explain the three modes of heat transfer with their laws and solve numericals.
5. Explain thermal management in CPUs, data centres and EV batteries.

---

## Unit 3: Machine Elements and Power Transmission

### 2-mark definitions

- **Machine element:** a basic mechanical part used in machines, such as a fastener, key, shaft, coupling, bearing, belt, chain or gear.
- **Fastener:** a part that joins components. **Temporary** (removable): bolts, nuts, screws, pins. **Permanent:** rivets, welds.
- **Key:** a piece inserted between a shaft and a hub (pulley, gear) to stop relative rotation and transmit torque. Types: sunk (rectangular, square), saddle, Woodruff, feather.
- **Shaft:** a rotating member that transmits power; it carries torsion and bending. An **axle** is non-rotating or carries only bending.
- **Coupling:** a device that joins two shafts. **Rigid** couplings need exact alignment; **flexible** couplings allow small misalignment and absorb shock.
- **Bearing:** supports a rotating shaft and reduces friction. **Sliding (journal) bearings** have surface contact with a lubricant film; **rolling-contact bearings** use balls or rollers.
- **Velocity ratio:** the ratio of speeds of driver and driven members in a drive.

### Core concepts

**Power and torque:** P = 2πNT/60 (P in W, N in rpm, T in N·m).

**Comparison of drives:**

| Drive | Slip | Distance between shafts | Features | Uses |
|---|---|---|---|---|
| Flat or V-belt | Yes (small) | Large | Quiet, cheap, absorbs shock, no lubrication | Fans, pumps, lathes |
| Timing (toothed) belt | No | Medium | Positive drive, quiet | 3D printers, car engines |
| Chain | No | Medium | Positive drive, high load, needs lubrication | Bicycles, motorcycles, conveyors |
| Gear | No | Small | Exact ratio, high power, compact | Gearboxes, clocks, robots |

**Belt drive formulas:**
- Velocity ratio N₂/N₁ = D₁/D₂ (ignoring slip).
- Belt speed v = πDN/60.
- Power transmitted P = (T₁ − T₂)v, where T₁ and T₂ are the tight-side and slack-side tensions.

**Gears:**
- **Spur:** straight teeth, parallel shafts. **Helical:** inclined teeth, smoother and quieter. **Bevel:** intersecting shafts (usually at 90°). **Worm and worm wheel:** high reduction, non-intersecting perpendicular shafts. **Rack and pinion:** turns rotation into straight-line motion.
- Gear ratio = N₁/N₂ = T₂/T₁ (T = number of teeth).

**Bearings:**

| Feature | Sliding (journal) | Rolling (ball, roller) |
|---|---|---|
| Friction | Higher at start | Low |
| Noise | Quiet | Some noise |
| Load capacity | High, good for shock | Moderate |
| Space | Small radial size | Larger radial size |
| Use | Engine crankshafts, turbines | Fans, motors, hard-disk spindles (often fluid bearings now) |

### Solved examples

**Example 1 (belt drive).** A 200 mm pulley on a motor at 1,440 rpm drives a 400 mm pulley.
- Driven speed = 1,440 × 200/400 = **720 rpm**.
- Belt speed = π × 0.2 × 1,440/60 = **15.08 m/s**.
- With T₁ = 1,200 N and T₂ = 500 N, P = 700 × 15.08 = **10.56 kW**.

**Example 2 (shaft power).** A shaft runs at 1,500 rpm with a torque of 100 N·m. P = 2π × 1,500 × 100/60 = **15.71 kW**.

**Example 3 (gears).** A 20-tooth pinion drives a 60-tooth gear. Gear ratio = 60/20 = **3**; the output turns 3 times slower with about 3 times the torque.

### Key points to remember

- Temporary (bolts, screws) vs permanent (rivets, welds) fasteners.
- Key types: sunk, saddle, Woodruff, feather.
- P = 2πNT/60; belt N₂/N₁ = D₁/D₂; P = (T₁ − T₂)v.
- Belts slip; chains, timing belts and gears are positive drives.
- Spur, helical, bevel, worm, rack and pinion; journal vs rolling bearings.

### Important questions

1. Classify fasteners and keys with sketches and uses.
2. Explain shafts and couplings (rigid and flexible).
3. Compare sliding and rolling-contact bearings.
4. Compare belt, chain and gear drives; solve a belt drive numerical.
5. Explain types of gears with applications in robots and printers.

---

## Unit 4: Manufacturing Processes

### 2-mark definitions

- **Manufacturing:** converting raw materials into finished products using processes, machines and labour.
- **Casting:** pouring molten metal into a mould cavity, where it solidifies into the required shape. **Sand casting** is the most common.
- **Pattern:** a model of the part used to make the mould cavity. It is made slightly larger to allow for shrinkage (shrinkage allowance) and machining.
- **Forming:** shaping metal by plastic deformation without removing material: forging, rolling, extrusion, drawing, sheet-metal work.
- **Machining:** removing material as chips with a cutting tool: turning (lathe), drilling, milling, grinding.
- **Soldering:** joining with a filler metal of low melting point (below 450 °C), such as tin-based solder, without melting the base metals. Used for electronics.
- **Brazing:** joining with a filler above 450 °C (brass, silver alloys) but below the base metal's melting point.
- **Welding:** joining by melting the base metals, with or without filler (arc, gas, resistance welding).
- **Additive manufacturing (3D printing):** building a part layer by layer directly from a CAD model.
- **CNC (computer numerical control):** a machine tool controlled by a program (G-code) that sets tool paths, speeds and feeds automatically.

### Core concepts

**Sand casting steps:** make the pattern → prepare the mould in sand (with core for holes) → make gates and risers → melt and pour the metal → cool and solidify → break the mould (shake-out) → clean and inspect (fettling).

**Forming processes:**
- **Forging:** shaping by hammering or pressing (crankshafts, spanners). Improves grain flow and strength.
- **Rolling:** passing metal between rollers to reduce thickness (sheets, plates, rails).
- **Extrusion:** pushing metal through a die to make a constant cross-section (aluminium heat-sink profiles, window frames).
- **Drawing:** pulling through a die (wires, tubes).
- **Sheet-metal work:** shearing, bending, punching and deep drawing (computer cabinets, enclosures).

**Machining on a lathe:** the workpiece rotates and a single-point tool moves along or across it. Operations: turning, facing, taper turning, threading, drilling, parting.
- **Cutting speed:** V = πDN/1000 (m/min, D in mm, N in rpm).
- **Machining time:** t = L/(fN) (L = length in mm, f = feed in mm/rev).

**Joining comparison:**

| Process | Filler melting point | Base metal melts? | Strength | Use |
|---|---|---|---|---|
| Soldering | Below 450 °C | No | Low | PCB components, wires |
| Brazing | Above 450 °C | No | Medium | Pipes, carbide tool tips |
| Welding | High | Yes | High | Structures, frames, vehicles |

- Lead-free solders (tin-silver-copper) are now used because of RoHS rules.

**3D printing processes:**
- **FDM (fused deposition modelling):** a heated nozzle extrudes plastic filament (PLA, ABS) layer by layer. Cheap; used for prototypes, enclosures, drone parts.
- **SLA (stereolithography):** a laser or light source cures liquid resin; fine detail.
- **SLS (selective laser sintering):** a laser fuses powder (nylon, metal in SLM); strong functional parts.
- **Advantages:** complex shapes, no tooling, rapid prototyping, customisation. **Limits:** slow for mass production, surface finish, size.

**CNC machines:**
- Parts: machine control unit, drive motors (servo or stepper), feedback (encoders), tool changer.
- Program in **G-code** (G00 rapid move, G01 linear cut, G02 and G03 arcs) and **M-code** (M03 spindle on, M05 spindle off).
- **Advantages:** high accuracy and repeatability, complex shapes, less human error, easy design changes (CAD to CAM).

**Conventional vs CNC vs additive:**

| Feature | Conventional machining | CNC machining | 3D printing |
|---|---|---|---|
| Principle | Subtractive, manual | Subtractive, programmed | Additive |
| Accuracy | Depends on operator | High | Medium to high |
| Waste | High | High | Low |
| Best for | Simple, one-off parts | Precise batches | Complex prototypes |

### Solved examples

**Example 1 (cutting speed).** A 50 mm bar is turned at 600 rpm. V = π × 50 × 600/1000 = **94.25 m/min**.

**Example 2 (machining time).** Turning a 150 mm length with feed 0.2 mm/rev at 600 rpm: t = 150/(0.2 × 600) = **1.25 min** per pass.

### Key points to remember

- Casting: pattern, mould, pour, solidify, fettle; shrinkage allowance.
- Forming: forging, rolling, extrusion (heat-sink profiles), drawing, sheet metal.
- V = πDN/1000; t = L/(fN).
- Soldering below 450 °C, brazing above 450 °C, welding melts the base.
- 3D printing: FDM, SLA, SLS. CNC: G-code (G00, G01, G02/G03), M03 and M05.

### Important questions

1. Explain the steps of sand casting with a sketch; what are pattern allowances?
2. Explain forging, rolling, extrusion and drawing with applications.
3. Explain the lathe and its operations; solve cutting speed and machining time.
4. Compare soldering, brazing and welding; explain their use in electronics.
5. Explain 3D printing (FDM, SLA, SLS) and CNC machines with advantages; compare with conventional machining.

---

## Unit 5: Mechatronics and Robotics

### 2-mark definitions

- **Mechatronics:** the integration of mechanical engineering, electronics, control and computing to design smart products (washing machines, cameras, cars, robots).
- **Sensor:** measures a physical quantity (position, speed, force, temperature). **Actuator:** converts energy (electrical, hydraulic, pneumatic) into motion.
- **Stepper motor:** a DC motor that moves in fixed angular steps for each pulse, giving open-loop position control (step angle often 1.8°, or 200 steps per revolution).
- **Servo motor:** a motor with feedback (encoder or potentiometer) and a controller that drives it to a commanded position or speed accurately (closed loop).
- **Hydraulic actuator:** uses pressurised oil (Pascal's law) to give very large forces (excavators, presses).
- **Pneumatic actuator:** uses compressed air; fast, clean and cheap, but less precise (grippers, door openers).
- **Robot:** a programmable, multi-functional manipulator that moves materials, parts or tools through programmed motions to do tasks.
- **Degree of freedom (DOF):** the number of independent motions a robot can make. A general industrial arm has 6 DOF.
- **End effector:** the tool at the end of a robot arm (gripper, welding torch, suction cup, spray gun).
- **Work envelope:** the space a robot's end effector can reach.

### Core concepts

**Actuators compared:**

| Actuator | Control | Strength | Precision | Use |
|---|---|---|---|---|
| DC motor | Speed by voltage or PWM | Medium | Low (without feedback) | Fans, toy cars, drones (brushless) |
| Stepper motor | Pulses (open loop) | Medium | High at low speed | 3D printers, CNC routers |
| Servo motor | Closed loop | Medium to high | Very high | Robot joints, CNC axes |
| Hydraulic | Valves | Very high | Medium | Excavators, presses |
| Pneumatic | Valves | Low to medium | Low | Grippers, packaging |

**Robot configurations:**

| Type | Joints | Work envelope | Use |
|---|---|---|---|
| Cartesian (gantry) | 3 prismatic (X, Y, Z) | Rectangular box | 3D printers, CNC, pick and place |
| Cylindrical | 1 rotary + 2 prismatic | Cylinder | Assembly, handling |
| Spherical (polar) | 2 rotary + 1 prismatic | Part of a sphere | Older welding robots |
| SCARA | 2 parallel rotary + 1 vertical prismatic | Cylinder-like | Fast PCB assembly, pick and place |
| Articulated | All rotary (usually 6) | Irregular sphere | Welding, painting, car assembly |

**Parts of a robot:** manipulator (arm), end effector, actuators, sensors (vision, force, proximity), controller and power supply.

**Drones (UAVs):**
- A quadcopter has four brushless DC motors with propellers (two clockwise, two anticlockwise).
- A flight controller uses an **IMU** (accelerometer and gyroscope), barometer and GPS to keep it stable by changing each motor's speed.
- Uses: aerial survey, agriculture spraying, delivery, inspection of bridges and power lines, disaster response.

**Industry 4.0 (the fourth industrial revolution):**
- Smart factories that connect machines, sensors and people.
- Technologies: **IoT** (connected sensors), **cyber-physical systems**, cloud computing, big data and AI, **digital twins**, additive manufacturing, collaborative robots (**cobots**) that work safely next to people, and augmented reality for maintenance.
- Benefits: predictive maintenance, less downtime, mass customisation, better quality and energy efficiency.

### Solved examples

**Example 1 (stepper and lead screw).** A stepper motor has a step angle of 1.8° and drives a lead screw of 5 mm pitch.
- Steps per revolution = 360/1.8 = **200**.
- Linear movement per step = 5/200 = **0.025 mm**.

**Example 2 (hydraulic press, Pascal's law).** A force of 100 N acts on a 20 mm diameter piston connected to a 100 mm diameter ram.
- F₂ = F₁ × A₂/A₁ = 100 × (100/20)² = **2,500 N**.

### Key points to remember

- Mechatronics = mechanical + electronics + control + computing.
- Stepper (open loop, 1.8°, 200 steps), servo (closed loop), hydraulic (high force), pneumatic (fast, clean).
- Cartesian, cylindrical, spherical, SCARA, articulated (6 DOF).
- Quadcopter: 4 BLDC motors, IMU flight controller.
- Industry 4.0: IoT, CPS, AI, digital twin, cobots, additive manufacturing.

### Important questions

1. What is mechatronics? Explain its elements with an example system.
2. Compare DC, stepper and servo motors, and hydraulic and pneumatic actuators.
3. Explain robot configurations (Cartesian, SCARA, articulated) with work envelopes and applications.
4. Explain the components and working of a drone (quadcopter).
5. What is Industry 4.0? Explain its key technologies and benefits.

---

## Last-hour checklist

- [ ] Force laws; resultant 50 N at 53.13° (60.83 N at 60°); stress 159.2 MPa, strain 7.96 × 10⁻⁴, δ 1.59 mm; stress-strain curve; beam table (18 kN·m, 12.5 kN·m); FOS 4; materials table.
- [ ] Systems; laws of thermodynamics; ΔU 300 kJ; Carnot 50%; COP; heat transfer table; paste 0.81 °C; convection 500 W; radiation 178.6 W; CPU, data centre (PUE), EV battery cooling.
- [ ] Fasteners, keys, shafts, couplings, bearings table; drives table; belt 720 rpm, 15.08 m/s, 10.56 kW; shaft 15.71 kW; gear ratio 3; gear types.
- [ ] Casting steps; forming; lathe V 94.25 m/min, t 1.25 min; soldering, brazing, welding table; FDM, SLA, SLS; CNC G-codes and M-codes.
- [ ] Actuator table; stepper 200 steps, 0.025 mm; hydraulic 2,500 N; robot configuration table; drone parts; Industry 4.0 technologies.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Engineering Mechanics: Statics and Dynamics | R. C. Hibbeler | Pearson | [WorldCat](https://search.worldcat.org/search?q=Hibbeler+Engineering+Mechanics+Statics+and+Dynamics) |
| 2 | A Textbook of Mechanical Engineering | R. K. Rajput | Laxmi Publications | [WorldCat](https://search.worldcat.org/search?q=A+Textbook+of+Mechanical+Engineering+Rajput) |
| 3 | Manufacturing Technology | P. N. Rao | McGraw Hill | [WorldCat](https://search.worldcat.org/search?q=Manufacturing+Technology+P+N+Rao) |
| 4 | Materials Science and Engineering: An Introduction | William D. Callister, David G. Rethwisch | Wiley | [WorldCat](https://search.worldcat.org/search?q=Callister+Rethwisch+Materials+Science+and+Engineering) |
| 5 | Fundamentals of Modern Manufacturing | Mikell P. Groover | Wiley | [WorldCat](https://search.worldcat.org/search?q=Groover+Fundamentals+of+Modern+Manufacturing) |

**Syllabus source:** [AKTU B.Tech 1st year CSE stream course structure and syllabus, 2026-27 (official PDF)](https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf)

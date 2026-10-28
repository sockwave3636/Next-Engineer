---
program: btech
branches: [all]
semester: 8
code: BOE093
name: Automation and Robotics
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-IV, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf
units:
  - Fundamentals of Automation and Fluid Power
  - Automated Flow Lines, CNC and Programmable Robots
  - Robot Anatomy, Coordinate Systems and Kinematics
  - Robot Drives, Transmissions and End Effectors
  - Robot Programming and Industrial Applications
---

# BOE093 Automation and Robotics: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: theory, diagrams described in words, and comparison tables.
3. **Solved examples**: the numericals examiners set (cylinder force, flow line efficiency, line balancing, resolution and accuracy, forward and inverse kinematics, homogeneous transforms, stepper speed, gripper force).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (types of automation, elements, pneumatic vs hydraulic) and Unit 2 (transfer machines, part feeders, flow line analysis, CNC).
- **Afternoon (3 hours):** Unit 3 (robot configurations, coordinate frames, forward and inverse kinematics, D-H convention). Practise the two-link arm numerical until it is automatic.
- **Evening (2 hours):** Unit 4 (drives, transmissions, grippers) and Unit 5 (programming methods, offline simulation, applications, cell layout), then the "Last-hour checklist".
- **In the exam:** sketch the four basic robot configurations with their work envelopes, a pneumatic circuit, and a two-link arm with its angles. Diagrams earn marks quickly.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Fundamentals of Automation and Fluid Power

### 2-mark definitions

- **Automation:** a technology in which a process or procedure is carried out with minimum human help, using mechanical, electrical, electronic and computer systems.
- **Fixed (hard) automation:** the sequence of operations is fixed by the equipment design; very high production rate but inflexible (transfer lines, bottling plants).
- **Programmable automation:** the sequence can be changed by a program; suited to batch production (CNC machines, industrial robots).
- **Flexible automation:** an extension of programmable automation that changes over between products with almost no lost time (flexible manufacturing systems).
- **Mechanization:** using machines to do work, but a human still controls the process. Automation also replaces the human control function.
- **Fluid power:** using a pressurized fluid (oil in hydraulics, air in pneumatics) to transmit and control power.
- **Actuator:** a device that converts energy (fluid, electrical) into motion, such as a cylinder or a motor.
- **Directional control valve (DCV):** a valve that directs the flow of fluid to different ports; named by ports and positions (5/2 valve = 5 ports, 2 positions).
- **Robot (RIA definition):** a reprogrammable, multifunctional manipulator designed to move material, parts, tools or specialized devices through variable programmed motions to perform a variety of tasks.
- **Laws of robotics (Asimov):** (1) a robot may not injure a human or allow a human to come to harm; (2) it must obey humans except where this conflicts with the first law; (3) it must protect its own existence unless this conflicts with the first two laws.

### Core concepts

**Why automate (reasons):** higher productivity, lower labour cost, removal of dangerous or monotonous work, better and consistent quality, shorter lead time, less work in process, and doing tasks that cannot be done manually (micro-assembly, high temperature). **Arguments against:** high initial cost, job displacement fears, maintenance skills needed, less flexibility for fixed automation.

**Types of automation**

| Feature | Fixed | Programmable | Flexible |
|---|---|---|---|
| Product variety | Very low (one product) | Medium (batches) | Medium to high |
| Production volume | Very high | Low to medium | Medium |
| Changeover | Long, needs retooling | Reprogram and set up per batch | Almost none |
| Investment | Very high, custom | High, general purpose | Very high |
| Example | Engine block transfer line | CNC machine, robot | FMS |

**Basic elements of an automated system:** (1) **power** to run the process and the controls (mostly electrical); (2) a **program of instructions** that defines the work cycle (steps, process parameters, decisions); (3) a **control system** that executes the program, either **open loop** (no feedback, such as a stepper motor run by pulses) or **closed loop** (a sensor measures the output, a controller compares it with the set point and corrects the actuator).

**Advanced automation functions:** safety monitoring (emergency stop, interlocks, light curtains), maintenance and repair diagnostics (status monitoring, failure diagnosis, recommendation of repair), and error detection and recovery.

**Levels of automation:** device level (sensors, actuators), machine level (CNC, robot), cell or system level (a manufacturing cell), plant level (MES, production planning), enterprise level (ERP, order processing).

**Fluid power system:** pump or compressor (energy source), reservoir or receiver, valves (directional, pressure, flow control), actuators (cylinders, motors), conductors (pipes, hoses) and the fluid.

**Pneumatics vs hydraulics**

| Feature | Pneumatic | Hydraulic |
|---|---|---|
| Medium | Compressed air (compressible) | Oil (nearly incompressible) |
| Working pressure | 5 to 10 bar | 70 to 350 bar |
| Force | Low to medium | Very high |
| Speed | Fast | Slower |
| Accuracy of position | Poor (air compresses), good only at end stops | Good |
| Cleanliness | Clean; air exhausts to atmosphere | Leaks are messy; oil needs return line |
| Cost | Low | High |
| Fire risk | None | Oil may be flammable |
| Typical robot use | Grippers, pick and place, end-stop motion | Heavy payload robots, presses |

**Simple pneumatic circuit (single-acting cylinder):** compressor → FRL unit (filter, regulator, lubricator) → 3/2 push-button valve → single-acting cylinder with spring return. Pressing the button lets air in and the piston extends; releasing it exhausts the air and the spring returns the piston. A double-acting cylinder uses a 5/2 valve so both strokes are powered.

**Role of robotics in automation:** robots provide programmable automation for handling, welding, painting and assembly; they bridge fixed automation and manual work, work in hazardous places, work three shifts with steady quality, and are the main tool of flexible automation and Industry 4.0 cells.

### Solved examples

**Example 1 (hydraulic cylinder force).** A hydraulic cylinder has a bore of 50 mm and works at 10 MPa. Find the push force.
- A = π d²/4 = π × 50²/4 = 1,963.5 mm².
- F = p × A = 10 N/mm² × 1,963.5 mm² = **19,635 N ≈ 19.6 kN**.

**Example 2 (pneumatic cylinder force).** A pneumatic cylinder of 40 mm bore works at 6 bar (0.6 MPa). Find the extend force, ignoring friction.
- A = π × 40²/4 = 1,256.6 mm².
- F = 0.6 × 1,256.6 = **754 N**. The same cylinder size in hydraulics at 10 MPa would give about 12.6 kN, which shows why heavy robots use hydraulics.

**Example 3 (return stroke).** For Example 2 the piston rod diameter is 16 mm. Find the return force.
- Annulus area = π (40² − 16²)/4 = π × 1,344/4 = 1,055.6 mm².
- F = 0.6 × 1,055.6 = **633 N**. The return force is smaller because the rod takes up part of the piston area.

### Key points to remember

- Three types of automation: fixed (high volume, low variety), programmable (batches), flexible (variety without changeover loss).
- Three basic elements: power, program of instructions, control system (open or closed loop).
- Pneumatics: fast, clean, cheap, low force, poor mid-stroke positioning. Hydraulics: high force, accurate, costly, leaks.
- Force = pressure × area. Use the annulus area for the return stroke.
- Know the RIA definition of a robot and Asimov's three laws.

### Important questions

1. Define automation. Explain the types of automation with examples and compare them. (Table, examples, volume-variety reasoning.)
2. Explain the basic elements of an automated system and the advanced automation functions. (Power, program, control; open vs closed loop; safety, diagnostics, error recovery.)
3. Compare pneumatic and hydraulic systems. Draw a circuit to operate a double-acting cylinder. (Table, 5/2 valve circuit with FRL.)
4. What are the reasons for and against automation? Discuss the role of robotics in modern manufacturing.
5. Explain the levels of automation in a manufacturing enterprise.

---

## Unit 2: Automated Flow Lines, CNC and Programmable Robots

### 2-mark definitions

- **Automated flow line (transfer line):** a series of automatic workstations linked by a work transfer system, with each station doing one operation; parts move from station to station automatically.
- **Transfer mechanism:** the device that moves parts between stations; it can be continuous, synchronous (intermittent) or asynchronous (power-and-free).
- **Rotary indexing table:** a circular table that indexes parts between stations around its edge; used for small parts and few operations.
- **Geneva mechanism:** a mechanism that converts continuous rotation into intermittent indexing (a 4-slot Geneva gives four index steps per table revolution).
- **Part feeder:** a device that delivers parts one at a time in the correct orientation (vibratory bowl feeder, hopper, escapement).
- **Storage buffer:** a place between stages where parts accumulate so that a breakdown at one stage does not stop the whole line.
- **Line efficiency:** the proportion of time the line is producing, E = Tc / Tp.
- **Line balancing:** dividing the total work among stations so that station times are as equal as possible.
- **CNC (computer numerical control):** control of a machine tool by a dedicated computer that reads a part program of coded instructions (G and M codes).
- **Programmable robot:** a robot whose motion sequence is stored in memory and can be changed by reprogramming, unlike a fixed-sequence (pick-and-place) robot.

### Core concepts

**Transfer machines and their types:** (1) **in-line** (stations in a straight line, for large parts like engine blocks); (2) **segmented in-line** (L, U or rectangular shapes to save floor space); (3) **rotary** (dial indexing for small parts). Transfer systems: **continuous** (parts move all the time, as in bottling), **synchronous** (all parts move together at fixed intervals) and **asynchronous** (each part moves when its station is ready, allowing small queues).

**Transfer mechanisms:** linear (walking beam, powered roller conveyor, chain drive conveyor) and rotary (rack and pinion, ratchet and pawl, Geneva mechanism, cam drive).

**Automatic part feeding:** the feeding system has a **hopper** (bulk store), **parts feeder** (removes parts one at a time), **selector and orientor** (rejects or reorients wrongly oriented parts using wiper blades, slots, pressure breaks), **feed track** (gravity or powered), and an **escapement and placement** device (releases one part to the workhead). The **vibratory bowl feeder** is the most common: an electromagnet vibrates the bowl so parts climb a spiral track, and tooling on the track rejects parts in the wrong orientation.

**Flow line analysis (no buffer):**
- Ideal cycle time Tc = longest station processing time + transfer time.
- Breakdowns occur with frequency F per cycle (F = Σ pᵢ over all stations), each with average downtime Td.
- Average production time Tp = Tc + F × Td.
- Actual production rate Rp = 1 / Tp. Line efficiency E = Tc / Tp = Tc / (Tc + F Td).
- **Buffers** improve E because when one stage stops, the other stage can keep working from or into the buffer. With an infinite buffer, the line efficiency is the efficiency of its worst stage.

**Line design and balancing:** total work content Twc = sum of all element times. Minimum number of stations w* = ⌈Twc / Tc⌉. Balance efficiency Eb = Twc / (w × Ts), where Ts is the maximum station time. Methods: **largest candidate rule** (assign elements in decreasing time order if precedence allows and the station limit is not exceeded), **Kilbridge and Wester column method**, **ranked positional weight method**. Balance delay d = 1 − Eb.

**CNC basics:** components are the **part program**, the **machine control unit** (data processing unit plus control loops), and the **machine tool** (slides, spindle, servo drives with feedback from encoders or linear scales). Advantages of CNC over manual: repeatability, complex contours, shorter setups, unattended running, program storage and editing. **DNC** (distributed numerical control) links many CNC machines to a central computer. Typical codes: G00 rapid move, G01 linear interpolation, G02/G03 circular interpolation, M03 spindle on clockwise, M06 tool change, M30 program end.

**Programmable robots vs fixed automation:** a programmable robot can be retaught for a new part, so it suits batch and mixed-model production; a fixed pick-and-place unit with mechanical stops is cheaper but must be rebuilt for a new part. Robots are linked to CNC machines in cells for machine loading and unloading.

### Solved examples

**Example 4 (flow line efficiency).** A 20-station transfer line has an ideal cycle time of 1.0 min. Breakdowns occur at a frequency of F = 0.05 per cycle, and the average downtime is 8 min. Find the average production time, production rate and line efficiency.
- Tp = Tc + F Td = 1.0 + 0.05 × 8 = **1.4 min**.
- Rp = 60 / 1.4 = **42.9 parts per hour** (ideal would be 60).
- E = Tc / Tp = 1.0 / 1.4 = **71.4%**.

**Example 5 (effect of reducing breakdowns).** In Example 4, better maintenance cuts F to 0.025. New Tp = 1.0 + 0.025 × 8 = 1.2 min, Rp = 50 parts per hour, E = 83.3%. Halving breakdowns gives 7 extra parts every hour.

**Example 6 (line balancing).** Total work content of an assembly is 4.0 min and the required cycle time is 1.0 min. Find the minimum number of stations. If the line actually uses 5 stations with the slowest station taking 0.95 min, find the balance efficiency and balance delay.
- w* = ⌈4.0 / 1.0⌉ = **4 stations**.
- Eb = Twc / (w × Ts) = 4.0 / (5 × 0.95) = 4.0 / 4.75 = **84.2%**.
- Balance delay = 1 − 0.842 = **15.8%**.

**Example 7 (Geneva indexing).** A 6-slot Geneva drives a dial table and the driver turns at 10 rpm. Each driver revolution gives one index of 360°/6 = 60°. The table makes one full turn every 6 driver revolutions = 0.6 min, and there are **10 index cycles per minute**, so the cycle time is **6 s**.

### Key points to remember

- Transfer types: continuous, synchronous, asynchronous. Layouts: in-line, segmented in-line, rotary.
- Tp = Tc + F Td, E = Tc / Tp, Rp = 1/Tp. Buffers improve efficiency.
- w* = ⌈Twc / Tc⌉, Eb = Twc / (w Ts).
- Part feeding chain: hopper → feeder → selector or orientor → feed track → escapement and placement.
- CNC = part program + MCU + machine tool with feedback; know common G and M codes.

### Important questions

1. Explain the types of automated flow lines and the work transfer mechanisms used. (Layouts, Geneva, walking beam, chain conveyor.)
2. Derive the expressions for production rate and line efficiency of a flow line without buffer. Solve a numerical. (Tp, F, Td, E.)
3. Explain an automatic part feeding system with a neat sketch of a vibratory bowl feeder. (Hopper, orientor, escapement.)
4. What is line balancing? Explain the largest candidate rule with an example. (Twc, w*, Eb.)
5. Explain the working of a CNC system and compare it with conventional NC. Where are programmable robots used with CNC?

---

## Unit 3: Robot Anatomy, Coordinate Systems and Kinematics

### 2-mark definitions

- **Manipulator:** the arm and wrist of the robot, made of links connected by joints.
- **Joint types:** linear (L), orthogonal (O), rotational (R), twisting (T), revolving (V); in kinematics they are grouped as **prismatic** (sliding) and **revolute** (rotating).
- **Degree of freedom (DOF):** an independent motion of the robot; six DOF (three for position, three for orientation) are needed to place a tool at any position and orientation.
- **Work envelope (work volume):** the space within which the robot can place the end of its wrist.
- **Payload:** the maximum load a robot can carry at its wrist while keeping its rated performance.
- **Spatial resolution:** the smallest increment of motion into which the robot can divide its work volume.
- **Accuracy:** the ability to move the wrist end to a commanded target point; roughly half the control resolution plus mechanical inaccuracies.
- **Repeatability:** the ability to return to a previously taught point; usually better than accuracy.
- **Forward kinematics:** finding the position and orientation of the end effector from known joint values.
- **Inverse kinematics:** finding the joint values that place the end effector at a desired position and orientation.

### Core concepts

**Robot components:** manipulator (base, arm, wrist), end effector (gripper or tool), actuators (drives), sensors (internal: encoders, tachometers; external: vision, force, proximity), controller (computer, memory, interface) and power supply.

**Robot classification by configuration (body and arm)**

| Configuration | Joints (first three) | Work envelope | Example and use |
|---|---|---|---|
| Cartesian (rectangular) | P P P | Rectangular box | Gantry robots, CNC loading, 3D printers |
| Cylindrical | R P P | Hollow cylinder | Machine loading, GMF M-100 |
| Polar (spherical) | R R P | Partial sphere | Unimate 2000, spot welding |
| Jointed arm (articulated) | R R R | Irregular sphere | Most industrial robots (welding, painting) |
| SCARA | R R P (two vertical-axis revolute joints) | Cylinder-like | Fast assembly, pick and place |

Other classifications: by **control** (limited sequence or bang-bang, playback with point-to-point, playback with continuous path, intelligent); by **drive** (hydraulic, electric, pneumatic); by **generation** (first: fixed program; second: with sensors; third: with AI and learning); and **collaborative robots (cobots)** that work safely beside people using force limits.

**Wrist motions:** roll (rotation about the arm axis), pitch (up-down rotation) and yaw (left-right rotation).

**Coordinate systems:** the **world (base) frame** fixed to the floor or base; the **joint coordinates** (each joint value); the **tool frame** fixed at the tool centre point (TCP); and the **user or work-object frame** fixed to a fixture. Teach pendants allow jogging in any of these.

**Homogeneous transformation:** a 4 × 4 matrix T = [R d; 0 0 0 1] combines a 3 × 3 rotation R and a 3 × 1 translation d. A point in a moving frame maps to the base frame as p₀ = R p₁ + d. Basic rotation about z by θ: R = [cosθ −sinθ 0; sinθ cosθ 0; 0 0 1]. Transforms multiply in sequence: ⁰T₂ = ⁰T₁ × ¹T₂.

**Denavit-Hartenberg (D-H) convention:** each link i is described by four parameters:
- θᵢ (joint angle): rotation about zᵢ₋₁ from xᵢ₋₁ to xᵢ (variable for a revolute joint).
- dᵢ (link offset): distance along zᵢ₋₁ (variable for a prismatic joint).
- aᵢ (link length): distance along xᵢ between zᵢ₋₁ and zᵢ.
- αᵢ (link twist): rotation about xᵢ from zᵢ₋₁ to zᵢ.
- The link transform is Aᵢ = Rot(z, θᵢ) Trans(z, dᵢ) Trans(x, aᵢ) Rot(x, αᵢ), and the full arm is T = A₁ A₂ … Aₙ.

**D-H table for a two-link planar arm**

| Link | θ | d | a | α |
|---|---|---|---|---|
| 1 | θ₁ (variable) | 0 | L₁ | 0 |
| 2 | θ₂ (variable) | 0 | L₂ | 0 |

**Two-link arm kinematics:**
- Forward: x = L₁ cos θ₁ + L₂ cos(θ₁ + θ₂), y = L₁ sin θ₁ + L₂ sin(θ₁ + θ₂).
- Inverse: cos θ₂ = (x² + y² − L₁² − L₂²) / (2 L₁ L₂); θ₁ = atan2(y, x) − atan2(L₂ sin θ₂, L₁ + L₂ cos θ₂). There are two solutions (elbow up and elbow down).

**Introduction to arm dynamics:** dynamics relates joint torques to motion. The **Lagrange-Euler** method uses L = kinetic energy − potential energy and τᵢ = d/dt(∂L/∂q̇ᵢ) − ∂L/∂qᵢ. The **Newton-Euler** method applies force and moment balances link by link (faster for computation). The result has the form τ = M(q) q̈ + C(q, q̇) q̇ + G(q): inertia, Coriolis and centrifugal, and gravity terms.

**Mobility (Grübler's formula for planar mechanisms):** M = 3(n − 1) − 2j₁ − j₂, where n is the number of links including the frame, j₁ lower pairs and j₂ higher pairs. A four-bar linkage: M = 3(4 − 1) − 2 × 4 = 1.

### Solved examples

**Example 8 (forward kinematics).** A two-link planar arm has L₁ = 0.5 m and L₂ = 0.3 m, with θ₁ = 30° and θ₂ = 45°. Find the end point.
- x = 0.5 cos 30° + 0.3 cos 75° = 0.4330 + 0.0776 = **0.511 m**.
- y = 0.5 sin 30° + 0.3 sin 75° = 0.2500 + 0.2898 = **0.540 m**.

**Example 9 (inverse kinematics).** For the same arm, find the joint angles to reach (0.6, 0.3) m.
- cos θ₂ = (0.36 + 0.09 − 0.25 − 0.09) / (2 × 0.5 × 0.3) = 0.11 / 0.3 = 0.367, so **θ₂ = 68.5°** (elbow down; −68.5° is the elbow-up solution).
- θ₁ = atan2(0.3, 0.6) − atan2(0.3 sin 68.5°, 0.5 + 0.3 cos 68.5°) = 26.57° − atan2(0.279, 0.610) = 26.57° − 24.59° = **2.0°**.
- Check: x = 0.5 cos 2° + 0.3 cos 70.5° = 0.4997 + 0.1002 = 0.600. Correct.

**Example 10 (resolution and accuracy).** A sliding joint has a range of 1.0 m and its controller uses a 12-bit encoder. The mechanical inaccuracy is ±0.05 mm. Find the control resolution and the accuracy.
- Number of increments = 2¹² = 4,096. Control resolution = 1,000 mm / 4,096 = **0.244 mm**.
- Accuracy = resolution / 2 + mechanical error = 0.122 + 0.05 = **±0.172 mm**.

**Example 11 (homogeneous transform).** Frame {1} is rotated 90° about z₀ and its origin is at (5, 0, 0) in frame {0}. A point is at p₁ = (2, 3, 4) in frame {1}. Find it in frame {0}.
- Rz(90°) maps (x, y, z) to (−y, x, z), so R p₁ = (−3, 2, 4).
- p₀ = R p₁ + d = (−3 + 5, 2 + 0, 4 + 0) = **(2, 2, 4)**.

### Key points to remember

- Four basic configurations (Cartesian PPP, cylindrical RPP, polar RRP, articulated RRR) plus SCARA. Draw their work envelopes.
- Six DOF are needed for full position and orientation; wrist gives roll, pitch, yaw.
- Resolution = range / 2ⁿ; accuracy = resolution/2 + mechanical error; repeatability is usually better than accuracy.
- D-H: θ, d, a, α; Aᵢ = Rot z · Trans z · Trans x · Rot x.
- Two-link formulas for forward and inverse kinematics; two inverse solutions.
- Dynamics: τ = M q̈ + C q̇ + G (Lagrange-Euler or Newton-Euler).

### Important questions

1. Classify robots by configuration with sketches of their work envelopes and give one application of each.
2. Define resolution, accuracy, repeatability and payload. Solve a numerical on control resolution.
3. Explain the D-H convention and write the D-H table for a two-link (or three-link) planar manipulator.
4. Derive forward and inverse kinematics of a two-link planar arm. Solve a numerical. (Both elbow solutions.)
5. What are homogeneous transformations? Explain rotation and translation matrices with an example. Briefly introduce robot arm dynamics.

---

## Unit 4: Robot Drives, Transmissions and End Effectors

### 2-mark definitions

- **Robot drive (actuator):** the power source that moves the robot joints; hydraulic, pneumatic or electric.
- **Servo motor:** a motor used in closed-loop control with position and speed feedback (encoder or resolver).
- **Stepper motor:** a motor that rotates in fixed angular steps for each input pulse; usually run open loop.
- **Step angle:** the angle turned per pulse, β = 360° / (steps per revolution).
- **Harmonic drive:** a compact gear with a wave generator, flexible flexspline and rigid circular spline; gives ratios of 50 to 320:1 with almost zero backlash.
- **Backlash:** lost motion in a gear train when the direction reverses.
- **End effector:** the device attached to the robot wrist to do the task; either a gripper or a tool.
- **Gripper:** an end effector that grasps and holds objects (mechanical, vacuum, magnetic, adhesive).
- **Tool (as end effector):** a process device such as a welding gun, spray gun, spindle or deburring tool.
- **Remote centre compliance (RCC) device:** a passive wrist device that lets a part shift and tilt slightly to correct small misalignments during peg-in-hole insertion.

### Core concepts

**Comparison of drives**

| Feature | Hydraulic | Pneumatic | Electric (DC/AC servo, stepper) |
|---|---|---|---|
| Power-to-weight | Highest | Low | Good |
| Payload | Heavy | Light | Light to heavy |
| Accuracy and control | Good | Poor (end stops) | Excellent |
| Speed | Medium | High | High |
| Cleanliness, noise | Leaks, pump noise | Clean, exhaust noise | Clean, quiet |
| Cost and maintenance | High | Low | Medium |
| Typical use | Heavy material handling, spray painting (no sparks) | Pick and place, grippers | Most modern robots, assembly, welding |

**Electric drives:**
- **DC servo motor:** speed proportional to voltage, torque proportional to current, easy control; brushes wear.
- **Brushless (AC) servo motor:** electronic commutation, no brush wear, high torque density; the standard drive in modern robots, with an encoder or resolver for feedback.
- **Stepper motor:** variable reluctance, permanent magnet or hybrid types; precise open-loop positioning with no encoder, but can lose steps under overload and has low torque at high speed.
- **Servo control loop:** position command → controller (PID) → amplifier → motor → load; encoder feeds back position, tachometer or encoder derivative feeds back speed.

**Mechanical transmissions:** convert motor speed and torque to joint motion.
- Rotary to rotary: spur and helical gears, **harmonic drives**, **cycloidal (RV) reducers**, timing belts and pulleys.
- Rotary to linear: **ball screws** (low friction, high efficiency, precise), lead screws, rack and pinion.
- Others: chain and sprocket, cables, linkages.
- Requirements: low backlash, high stiffness, low inertia, compactness.

**Types of grippers**

| Type | Holding principle | Used for |
|---|---|---|
| Mechanical (two- or three-finger) | Friction or physical constraint via linkage, gear, cam or screw actuation | Machined parts, general handling |
| Vacuum (suction cups) | Pressure difference from a vacuum pump or venturi | Flat, smooth parts: glass, sheet metal, cartons |
| Magnetic (electromagnet or permanent magnet) | Magnetic attraction | Ferrous sheets and parts |
| Adhesive | Sticky surface | Light fabrics, small parts |
| Hooks, scoops, inflatable | Shape or bladder expansion | Containers, fluids, fragile or odd shapes |
| Soft or compliant | Flexible fingers that conform to shape | Food, fruit, delicate items |

**Gripper design considerations:** part weight, shape, size and material; surface finish and fragility; required gripping force (including acceleration); number of fingers and finger shape (friction grip vs physical constraint); actuation method; part tolerance; changeover (quick-change tool plates); and the gripper's own weight, which reduces the useful payload.

**Gripping force:** for a friction grip with nf contact surfaces, μ nf F = m g × (safety or acceleration factor). Vacuum force F = ΔP × A × n (number of cups), divided by a safety factor.

**Sensors in grippers:** limit switches, proximity sensors, tactile pads, force and torque sensors at the wrist, vision for part location.

### Solved examples

**Example 12 (stepper motor).** A stepper motor has a step angle of 1.8° and receives pulses at 1,000 Hz. Find the steps per revolution and the speed.
- Steps per revolution = 360 / 1.8 = **200**.
- Speed = 1,000 pulses/s ÷ 200 steps/rev = 5 rev/s = **300 rpm**.

**Example 13 (stepper drives a lead screw).** The motor in Example 12 drives a lead screw of 5 mm pitch directly. Linear resolution = 5 mm / 200 = **0.025 mm per step**. To move 30 mm the controller must send 30 / 0.025 = **1,200 pulses**, taking 1.2 s at 1,000 Hz.

**Example 14 (gripper force).** A two-finger gripper holds a 5 kg part by friction (μ = 0.3). Find the finger force needed (a) when held still and (b) when moved upward with an acceleration of 0.5 g.
- (a) μ nf F = m g → F = 5 × 9.81 / (0.3 × 2) = **81.75 N**.
- (b) F = m (g + a) / (μ nf) = 5 × (9.81 + 4.905) / 0.6 = **122.6 N**.
- In practice multiply by a safety factor (often 2), giving about 245 N.

**Example 15 (vacuum gripper).** A vacuum gripper uses 2 cups of 50 mm diameter at a pressure difference of 60 kPa. Find the holding force.
- Area per cup = π × 0.05²/4 = 1.963 × 10⁻³ m².
- F = 60,000 × 1.963 × 10⁻³ × 2 = **235.6 N**. With a safety factor of 2 it can lift about 117.8 N, which is about 12 kg.

**Example 16 (gear reduction).** A servo motor turns at 3,000 rpm and drives a joint through a 50:1 harmonic drive. Joint speed = 3,000 / 50 = 60 rpm = **360°/s**, and joint torque is 50 times the motor torque (less the gear losses).

### Key points to remember

- Drives: hydraulic (heavy, spark-free), pneumatic (cheap, fast, imprecise), electric (precise; brushless servo is standard).
- Stepper: steps/rev = 360/β; speed (rps) = pulse rate / steps per rev.
- Transmissions: harmonic drive (high ratio, no backlash), RV reducer, ball screw, belts.
- Grippers: mechanical, vacuum, magnetic, adhesive, soft. Tools: welding gun, spray gun, spindle.
- Gripper force F = m (g + a) / (μ nf) × safety factor. Vacuum F = ΔP × A × n.

### Important questions

1. Compare hydraulic, pneumatic and electric drives for robots. Which would you choose for spray painting and why? (Table; hydraulic or pneumatic avoids sparks.)
2. Explain stepper motors and servo motors used in robots. Solve a numerical on step angle and speed.
3. What are robot transmissions? Explain the harmonic drive and the ball screw with sketches.
4. Classify end effectors. Explain mechanical, vacuum and magnetic grippers with sketches. (Plus tools as end effectors.)
5. What are the considerations in gripper design? Derive and solve for gripping force with friction.

---

## Unit 5: Robot Programming and Industrial Applications

### 2-mark definitions

- **Lead-through (teach) programming:** teaching the robot by moving it through the required motions and recording them.
- **Powered lead-through:** the operator drives the robot with a **teach pendant** and records points.
- **Manual (walk-through) lead-through:** the operator physically guides the robot arm (common for spray painting and cobots).
- **Textual (offline) programming:** writing the program in a robot language on a computer away from the robot.
- **Offline simulation:** testing a robot program in a 3D virtual model of the cell before downloading it, to check reach, collisions and cycle time.
- **Robot language:** a programming language for robots, such as VAL (Unimation), RAPID (ABB), KRL (KUKA), KAREL (Fanuc).
- **Point-to-point (PTP) motion:** the robot moves between taught points without controlling the path in between.
- **Continuous path (CP) motion:** the robot follows a controlled path, such as a straight line or arc, needed for welding and painting.
- **Interlock:** a signal that makes one device wait for another, for example the robot waits until the machine door is open.
- **Robot cell:** a group of one or more robots with machines, conveyors and fixtures arranged to do a task.

### Core concepts

**Methods of robot programming**

| Method | How | Pros | Cons |
|---|---|---|---|
| Powered lead-through (teach pendant) | Jog with buttons, record points | Simple, no coding | Robot out of production while teaching |
| Manual lead-through | Guide the arm by hand | Natural for complex paths (painting) | Heavy robots need special handles; accuracy limited |
| Textual / offline | Code in VAL, RAPID, KRL | Logic, sensors, reuse, no downtime | Needs skilled programmer and calibration |
| Offline simulation (RobotStudio, RoboDK, ROBOGUIDE) | Program in a 3D model | Checks reach, collisions, cycle time | Model must match the real cell |

**Typical robot language commands (VAL style):** `MOVE P1` (joint move to point P1), `MOVES P2` (straight-line move), `APPRO P1, 50` (approach to 50 mm above P1), `DEPART 50` (move back 50 mm), `OPENI` / `CLOSEI` (open or close gripper), `SPEED 50` (set speed), `WAIT SIG(1)` (wait for an input signal), `SIGNAL 3` (set output 3), `DEFINE` / `HERE` (define or record a point).

**Example pick-and-place program (VAL-like):**

```
SPEED 50
APPRO PICK, 50
MOVES PICK
CLOSEI
DEPART 50
APPRO PLACE, 50
MOVES PLACE
OPENI
DEPART 50
```

**Offline simulation steps:** build or import CAD models of robot, tooling and fixtures → place them in the virtual cell → define tool frame and work frames → create paths → check reach, singularities and collisions → estimate cycle time → calibrate the real cell → post-process into the robot's language → download and touch up.

**Industrial applications**

| Application | Robot features needed | Notes |
|---|---|---|
| Material handling, machine loading and unloading, palletizing | Payload, reach, PTP motion | Robot serves CNC machines, presses; common in cells |
| Spot welding | Heavy payload (weld gun), PTP, accuracy | Car body lines; dozens of robots per line |
| Arc welding | Continuous path, seam tracking sensors | Consistent bead; positioners rotate the part |
| Spray painting and coating | Continuous path, manual lead-through teaching, explosion-proof (often hydraulic or purged electric) | Removes humans from toxic fumes |
| Assembly | High repeatability, compliance (RCC), vision; SCARA robots | Electronics, small parts |
| Inspection | Vision, sensors, accurate positioning | Dimensional checks, defect detection |
| Processing (deburring, grinding, drilling, cutting) | Force control, rigidity | Uses tools as end effectors |

**Robot cell layouts:**
- **Robot-centred cell:** the robot is in the centre and machines are arranged around it within its work envelope. Common for machine loading with one robot serving several machines.
- **In-line cell:** robots stand along a conveyor (moving or intermittent), as in car body welding lines.
- **Mobile robot cell:** the robot moves on a rail or on an AGV to serve machines spread over a larger area.
- **Design points:** work envelope coverage, cycle time (robot often waits for machines), safety fencing, light curtains and interlocks, part presentation (fixtures, feeders), and maintenance access.

**Safety:** physical guarding, light curtains and safety mats, emergency stops, reduced speed in teach mode, enabling (dead-man) switch on the pendant, and standards ISO 10218 (industrial robots) and ISO/TS 15066 (collaborative robots).

**Justifying robots:** payback period = investment / annual net savings. Robots are justified for hazardous, repetitive or high-precision tasks, multi-shift operation and consistent quality.

### Solved examples

**Example 17 (robot-centred cell cycle).** A robot serves two machines. Each machine has a machining time of 50 s. The robot takes 10 s to unload and reload one machine and 5 s to move between machines. Find the cell cycle time and production rate.
- In one cycle the robot services both machines: 2 × (10 + 5) = 30 s of robot work.
- Each machine must also finish its machining: machine cycle = 50 + 10 = 60 s (machining plus its own service).
- The robot (30 s) is faster than the machines (60 s), so the cell cycle is **60 s**, producing 2 parts per cycle = **120 parts per hour**.
- Robot utilization = 30 / 60 = **50%**, so it could serve a third or fourth machine.

**Example 18 (payback period).** A robot cell costs ₹30 lakh and replaces 2 operators per shift on 2 shifts at ₹3.6 lakh per operator per year, with ₹2.4 lakh per year extra maintenance.
- Labour saving = 2 × 2 × 3.6 = ₹14.4 lakh per year.
- Net saving = 14.4 − 2.4 = ₹12 lakh per year.
- Payback = 30 / 12 = **2.5 years**.

### Key points to remember

- Programming methods: powered lead-through, manual lead-through, textual offline, offline simulation.
- VAL commands: MOVE, MOVES, APPRO, DEPART, OPENI, CLOSEI, SPEED, WAIT, SIGNAL.
- PTP for handling and spot welding; continuous path for arc welding and painting.
- Applications: handling, spot and arc welding, painting, assembly, inspection, processing.
- Cell layouts: robot-centred, in-line, mobile. Cycle time is set by the slower of robot and machines.
- Safety: guarding, light curtains, interlocks, ISO 10218.

### Important questions

1. Explain the methods of robot programming with their advantages and limitations. (Table, teach pendant.)
2. What is offline programming and simulation? List its steps and benefits.
3. Write a robot program (VAL or any language) for a pick-and-place task and explain each command.
4. Discuss the industrial applications of robots in material handling, welding, spray painting, assembly and inspection, giving the robot features each needs.
5. Explain robot cell layouts and cell design considerations, including safety. Solve a cell cycle-time numerical.

---

## Last-hour checklist

- [ ] Automation types table; three basic elements; open vs closed loop; pneumatic vs hydraulic table; F = pA (19.6 kN, 754 N, 633 N).
- [ ] Transfer line layouts and mechanisms (Geneva); part feeder chain; Tp = Tc + F Td (1.4 min, 71.4%); line balancing (4 stations, 84.2%); CNC elements and G/M codes.
- [ ] Robot configurations and envelopes; DOF; resolution and accuracy (0.244 mm, ±0.172 mm); D-H parameters; forward (0.511, 0.540) and inverse (θ₂ 68.5°, θ₁ 2.0°) kinematics; homogeneous transform (2, 2, 4); τ = Mq̈ + Cq̇ + G.
- [ ] Drives table; stepper (200 steps, 300 rpm, 0.025 mm/step); harmonic drive; ball screw; gripper types; gripper force (81.75 N, 122.6 N); vacuum (235.6 N).
- [ ] Programming methods; VAL commands and pick-and-place program; offline simulation steps; applications table; cell layouts; cell cycle (60 s, 120 parts/h); payback 2.5 years; safety.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | An Introduction to Robot Technology | Philippe Coiffet, Michel Chirouze | Kogan Page | [WorldCat](https://search.worldcat.org/search?q=An+Introduction+to+Robot+Technology+Coiffet+Chirouze) |
| 2 | Robotics for Engineers | Yoram Koren | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Robotics+for+Engineers+Koren) |
| 3 | Robotics: Control, Sensing, Vision and Intelligence | K. S. Fu, R. C. Gonzalez, C. S. G. Lee | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Robotics+Control+Sensing+Vision+and+Intelligence+Fu+Gonzalez+Lee) |
| 4 | Introduction to Industrial Robotics | R. K. Nagrajan | Pearson | [WorldCat](https://search.worldcat.org/search?q=Introduction+to+Industrial+Robotics+Nagrajan) |
| 5 | Introduction to Robotics: Mechanics and Control | John J. Craig | Addison-Wesley | [WorldCat](https://search.worldcat.org/search?q=Introduction+to+Robotics+Mechanics+and+Control+Craig) |
| 6 | Industrial Robotics: Technology, Programming and Applications | M. P. Groover, M. Weiss, R. N. Nagel, N. G. Odrey | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Industrial+Robotics+Technology+Programming+and+Applications+Groover) |
| 7 | Robotic Engineering: An Integrated Approach | R. D. Klafter, T. A. Chmielewski, M. Negin | Prentice Hall | [WorldCat](https://search.worldcat.org/search?q=Robotic+Engineering+An+Integrated+Approach+Klafter) |
| 8 | Robots and Manufacturing Automation | C. Ray Asfahl | Wiley | [WorldCat](https://search.worldcat.org/search?q=Robots+and+Manufacturing+Automation+Asfahl) |

**Syllabus source:** [AKTU Open Elective-III and IV syllabus for B.Tech 8th semester, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf)

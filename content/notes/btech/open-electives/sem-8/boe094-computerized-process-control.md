---
program: btech
branches: [all]
semester: 8
code: BOE094
name: Computerized Process Control
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-IV, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf
units:
  - Computers in Process Control and Control System Architectures
  - Industrial Communication, Control Software and Real-Time Systems
  - Process Modelling
  - Advanced Process Control Strategies
  - Case Studies of Computer Process Control
---

# BOE094 Computerized Process Control: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: theory, block diagrams described in words, and comparison tables.
3. **Solved examples**: the numericals examiners set (ADC resolution, payback, data transfer time, digital PID, first-order models, control limits, gaugemeter equation, air-fuel ratio).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (role of the computer, elements, centralized vs distributed vs hierarchical, process interfaces) and Unit 2 (fieldbuses, data transfer, control software, RTOS).
- **Afternoon (3 hours):** Unit 3 (process modelling steps, physical and control models, first-order systems) and Unit 4 (cascade, feedforward, predictive, adaptive, inferential, intelligent, statistical control).
- **Evening (2 hours):** Unit 5 (electric oven, reheat furnace, rolling mill, power plant), then the "Last-hour checklist".
- **In the exam:** draw the general block diagram of computer control, a DCS architecture, a cascade loop, and the case-study loop asked. Diagrams carry many marks in this paper.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Computers in Process Control and Control System Architectures

### 2-mark definitions

- **Process control:** keeping process variables (temperature, pressure, flow, level, composition) at desired values despite disturbances.
- **Computerized process control:** using a digital computer to measure process variables, compute control actions and drive actuators.
- **Direct digital control (DDC):** the computer itself calculates the control law and sends signals straight to the final control elements, replacing analog controllers.
- **Supervisory control (SPC or set-point control):** the computer calculates the best set points and sends them to local controllers, which do the actual control.
- **Distributed control system (DCS):** control is spread over many local controllers linked by a communication network to operator stations.
- **SCADA (supervisory control and data acquisition):** a system that gathers data from remote sites (RTUs or PLCs) over long distances and allows supervisory control.
- **Process interface:** hardware that connects the computer to the plant: analog and digital inputs and outputs, signal conditioning, ADC, DAC and multiplexers.
- **ADC (analog-to-digital converter):** converts a measured voltage or current into a number the computer can use.
- **Sampling time:** the interval at which the computer reads measurements and updates outputs.
- **4–20 mA signal:** the standard analog current loop for transmitters; 4 mA is 0% and 20 mA is 100% (the live zero detects a broken wire).

### Core concepts

**Role of computers in process control:** data acquisition and logging, monitoring and alarms, direct control (DDC), supervisory optimization, sequence and batch control, operator display (HMI), reporting, maintenance diagnostics, and plant-wide coordination with production planning.

**Elements of a computer control system (general block diagram):**
1. **Process** with sensors and transmitters.
2. **Signal conditioning** (amplify, filter, isolate, linearize).
3. **Multiplexer** and **ADC** (analog inputs), digital inputs (switch states).
4. **Computer** (CPU, memory, real-time clock, control software).
5. **DAC** with hold circuit (analog outputs), digital outputs (relays).
6. **Final control elements** (control valves, motor drives, heaters).
7. **Operator interface** (displays, keyboards, alarms) and storage.

**Evolution:** analog pneumatic and electronic controllers → centralized DDC in the 1960s (one big computer) → supervisory control → DCS from the mid-1970s (Honeywell TDC 2000, 1975) → PLC-based and PC-based control → fieldbus and Ethernet-based systems → Industry 4.0 with IIoT and cloud analytics.

**Architectures**

| Architecture | Description | Advantages | Disadvantages |
|---|---|---|---|
| Centralized | One computer does all measurement, control and display for the plant | Simple, all data in one place, cheap for small plants | Single point of failure (needs backup computer), heavy wiring, hard to expand |
| Distributed (DCS) | Many local controllers near the process, linked by a network to operator and engineering stations | Fault tolerant, less wiring, modular expansion, local autonomy | Higher cost, network design and security needed |
| Hierarchical | Levels: field (sensors), control (PLC/DCS), supervisory (SCADA/optimization), plant management (MES), enterprise (ERP) | Each level has its own job and time scale, integrates business and plant | Complex integration, data consistency across levels |

**Hierarchical levels (ISA-95 or Purdue model):** Level 0 process and field devices; Level 1 basic control (PLCs, DCS controllers, milliseconds to seconds); Level 2 supervisory control and HMI (seconds to minutes); Level 3 manufacturing operations (MES, scheduling, hours); Level 4 business planning (ERP, days to months).

**Economics of computer control:**
- **Costs:** hardware, software, engineering, installation, training, maintenance.
- **Benefits:** higher throughput, better quality and less off-spec product, energy saving, lower labour, less downtime, better safety, and data for management decisions.
- **Measures:** payback period = investment / annual savings; return on investment (ROI).
- Even a 1 to 2% gain in yield or energy in a large plant usually pays for the system quickly.

**Process interfaces in detail:**
- **Analog input:** a transmitter sends 4–20 mA; a precision resistor (250 Ω) gives 1–5 V; a multiplexer selects the channel; sample-and-hold freezes it; the ADC converts it.
- **Analog output:** DAC → hold → current driver → valve positioner.
- **Digital input and output:** contacts, limit switches, relays, with opto-isolation.
- **Pulse inputs:** counters for flow meters and encoders.
- **Interrupts:** used for urgent events.
- **Resolution** of an n-bit ADC = full scale / 2ⁿ.

### Solved examples

**Example 1 (ADC resolution).** A 12-bit ADC with a 0–10 V range reads a temperature transmitter scaled 0–500 °C over 0–10 V. Find the voltage and temperature resolution.
- Counts = 2¹² = 4,096. Voltage resolution = 10 / 4,096 = **2.44 mV**.
- Temperature resolution = 500 / 4,096 = **0.122 °C per count**.

**Example 2 (4–20 mA scaling).** A pressure transmitter has a range of 0–10 bar on 4–20 mA. It reads 14 mA. Find the pressure.
- Fraction = (14 − 4) / (20 − 4) = 10 / 16 = 0.625.
- Pressure = 0.625 × 10 = **6.25 bar**.

**Example 3 (payback).** A DCS costs ₹1.2 crore. It saves 2% of the fuel bill of ₹15 crore per year and ₹30 lakh in reduced rejects, while annual maintenance is ₹10 lakh. Find the payback period.
- Fuel saving = 0.02 × 15 crore = ₹30 lakh.
- Net annual saving = 30 + 30 − 10 = ₹50 lakh.
- Payback = 120 / 50 = **2.4 years**.

### Key points to remember

- DDC (computer controls directly) vs supervisory (computer sets set points of local controllers).
- Elements: sensor → conditioning → MUX/ADC → computer → DAC/hold → actuator, plus HMI.
- Centralized vs distributed vs hierarchical: know the table and the five Purdue levels.
- ADC resolution = range / 2ⁿ; 4–20 mA live zero.
- Economics: costs vs benefits, payback.

### Important questions

1. Explain the role of computers in process control. Draw and explain the general block diagram of a computer control system.
2. Compare centralized, distributed and hierarchical control architectures with sketches.
3. Differentiate DDC and supervisory control. When is each used?
4. Discuss the economics of computer process control. Solve a payback numerical.
5. Explain the process interface for analog and digital signals, including ADC and DAC.

---

## Unit 2: Industrial Communication, Control Software and Real-Time Systems

### 2-mark definitions

- **Industrial communication network:** a network that connects sensors, controllers and computers in a plant reliably and in real time.
- **Fieldbus:** a digital, two-way, multidrop network linking field devices to controllers (Foundation Fieldbus, PROFIBUS).
- **HART protocol:** a digital signal superimposed on a 4–20 mA loop, so the analog value and digital data share the same wires.
- **Modbus:** a simple master-slave (client-server) protocol used over serial lines (RTU) or Ethernet (Modbus TCP).
- **Baud rate:** number of signal symbols per second; for simple serial lines it equals bits per second.
- **Determinism:** the guarantee that a message is delivered within a known maximum time.
- **Real-time system:** a system whose correctness depends on both the result and the time at which it is produced.
- **Hard real-time:** missing a deadline is a failure (airbag, reactor trip). **Soft real-time:** occasional misses only reduce quality (video, trend display).
- **RTOS (real-time operating system):** an operating system that schedules tasks to meet deadlines with predictable timing (VxWorks, QNX, FreeRTOS).
- **Task priority and pre-emption:** a higher-priority task can interrupt a lower-priority task as soon as it is ready.

### Core concepts

**Need for industrial networks:** less wiring than point-to-point, more data per device (diagnostics), remote configuration, easy expansion, and integration with business systems.

**Network topologies:** bus (one cable, low cost), star (central switch, easy fault finding), ring (redundant path, used in DCS), tree, and mesh (wireless).

**OSI model use:** industrial fieldbuses usually implement only layers 1 (physical), 2 (data link) and 7 (application) to keep timing fast and simple.

**Common protocols**

| Protocol | Level | Medium and speed | Notes |
|---|---|---|---|
| HART | Field device | 4–20 mA plus 1,200 bps FSK | Configures smart transmitters; keeps analog loop |
| Modbus RTU / TCP | Device to controller | RS-485 / Ethernet | Simple, open, master-slave |
| PROFIBUS DP / PA | Field and device | RS-485 up to 12 Mbps / MBP 31.25 kbps | Siemens; PA for hazardous areas |
| Foundation Fieldbus H1 / HSE | Field | 31.25 kbps / 100 Mbps Ethernet | Control can run in the field devices |
| CAN / DeviceNet | Device | Up to 1 Mbps | Priority-based arbitration |
| Industrial Ethernet (PROFINET, EtherNet/IP, EtherCAT) | Control and plant | 100 Mbps to 1 Gbps | Real-time extensions |
| OPC UA | Supervisory and enterprise | Ethernet | Vendor-independent data exchange and information models |

**Data transfer techniques:**
- **Serial vs parallel** transmission.
- **Synchronous vs asynchronous** (start and stop bits).
- **Medium access:** master-slave polling, token passing (deterministic), CSMA/CD (Ethernet, non-deterministic unless switched), time-division scheduling.
- **Error detection:** parity, checksum, CRC.
- **Data transfer from the process:** polled (the computer asks each device in turn), interrupt-driven (the device signals when it has data), and DMA (direct memory access for fast bulk transfer).

**Control software:**
- **Functions:** data acquisition and scaling, filtering, alarm checking, control algorithms (PID), sequence logic, logging and trending, HMI displays, reports.
- **Organization:** tasks run on a scan cycle or on events; there is a database of process points (tags).
- **PLC languages (IEC 61131-3):** ladder diagram, function block diagram, structured text, instruction list, sequential function chart.
- **DCS configuration:** engineers link standard function blocks (AI, PID, AO) graphically instead of writing code.

**Real-time operating systems:** features include priority-based pre-emptive scheduling, fast and bounded interrupt latency, fast context switch, inter-task communication (semaphores, message queues, mailboxes), real-time clocks and timers, and small memory footprint. Scheduling policies: **rate monotonic** (shorter period = higher priority) and **earliest deadline first**. Problems to avoid: **priority inversion** (a low-priority task holds a resource a high-priority task needs; fixed by priority inheritance), deadlock and race conditions.

**Rate-monotonic schedulability (Liu and Layland):** n tasks are schedulable if the total utilization U = Σ Cᵢ / Tᵢ ≤ n (2^(1/n) − 1). For 3 tasks this bound is about 0.78.

### Solved examples

**Example 4 (data transfer time).** A Modbus RTU link runs at 9,600 baud with 11 bits per character (start, 8 data, parity, stop). How long does a 100-byte message take?
- Bits = 100 × 11 = 1,100.
- Time = 1,100 / 9,600 = **0.115 s (115 ms)**. At 115,200 baud it would take about 9.5 ms.

**Example 5 (RTOS schedulability).** Three periodic tasks have (execution time, period) of (10 ms, 50 ms), (15 ms, 100 ms) and (20 ms, 200 ms). Check rate-monotonic schedulability.
- U = 10/50 + 15/100 + 20/200 = 0.20 + 0.15 + 0.10 = **0.45**.
- Bound for n = 3: 3 (2^(1/3) − 1) = 3 × 0.26 = **0.78**.
- Since 0.45 ≤ 0.78, the task set is **schedulable** under rate-monotonic priorities (the 50 ms task gets top priority).

**Example 6 (polling time).** A computer polls 64 analog channels; each conversion and read takes 0.5 ms. One full scan takes 64 × 0.5 = **32 ms**, so the fastest possible sampling period per channel is 32 ms (about 31 samples per second).

### Key points to remember

- Fieldbus advantages: less wiring, diagnostics, two-way digital data.
- HART, Modbus, PROFIBUS, Foundation Fieldbus, CAN, industrial Ethernet, OPC UA: one line each.
- Data transfer: polling, interrupt, DMA. Medium access: master-slave, token, CSMA/CD.
- Control software functions and IEC 61131-3 languages.
- RTOS: pre-emptive priority scheduling, bounded latency, semaphores; rate monotonic, EDF; priority inversion.

### Important questions

1. What are industrial communication networks? Explain fieldbus and compare it with conventional 4–20 mA wiring.
2. Compare HART, Modbus, PROFIBUS and Foundation Fieldbus.
3. Explain the data transfer techniques between the process and the computer (polling, interrupts, DMA) and error detection.
4. What are the functions of process control software? Explain the IEC 61131-3 languages.
5. What is an RTOS? Explain its features, scheduling and priority inversion. Check a task set for rate-monotonic schedulability.

---

## Unit 3: Process Modelling

### 2-mark definitions

- **Process model:** a mathematical description that relates the process inputs to its outputs.
- **Physical (first-principles) model:** a model built from conservation laws (mass, energy, momentum) and physical relations.
- **Empirical (black-box) model:** a model fitted to measured input-output data without detailed physics (step-response or regression model).
- **Control model:** a simplified model, usually a transfer function, used to design and tune the controller (first order plus dead time).
- **State variable:** a variable that describes the condition (stored mass or energy) of a system, such as level or temperature.
- **Time constant (τ):** the time a first-order system takes to reach 63.2% of its final change after a step input.
- **Process gain (K):** the steady-state change in output divided by the change in input.
- **Dead time (θ):** the delay before the output begins to respond to an input change (transport delay).
- **Model validation:** checking the model's predictions against plant data not used to build it.
- **Linearization:** approximating a nonlinear model by a linear one around an operating point (using a Taylor series).

### Core concepts

**Why model:** to design and tune controllers, to simulate and train operators, to optimize operating conditions, to predict (model predictive control), and to infer unmeasured variables.

**Physical model vs control model**

| Physical model | Control model |
|---|---|
| Derived from conservation laws, often nonlinear differential equations | Simplified linear model (transfer function, state space) |
| Many parameters, detailed | Few parameters (K, τ, θ) |
| Valid over a wide range | Valid near one operating point |
| Used for design, simulation, optimization | Used for controller design and tuning |

**Steps in process modelling (goal to validation):**
1. **Define the goal:** what the model is for (control, optimization, training) and the accuracy needed.
2. **Prepare information:** draw a sketch, identify the system boundary, inputs, outputs, disturbances, and list assumptions (well mixed, constant density, negligible heat loss).
3. **Formulate the model:** write conservation balances: accumulation = in − out + generation − consumption, plus constitutive relations (valve equations, heat transfer, reaction rates).
4. **Check degrees of freedom:** number of unknowns − number of independent equations must be zero (after specifying inputs).
5. **Determine the solution:** analytical (Laplace transform) or numerical (simulation in MATLAB or Simulink).
6. **Analyze the results:** check signs, steady states and limiting cases.
7. **Validate the model:** compare with plant data, estimate parameters, refine.

**First-order system (liquid level tank):** mass balance A dh/dt = q_in − q_out, with q_out = h / R (linear resistance). So A R dh/dt + h = R q_in, giving G(s) = H(s)/Q(s) = R / (A R s + 1). Gain K = R, time constant τ = A R.

**Thermal system (electric oven):** C dT/dt = P − k (T − T_amb), where C is the heat capacity and k the heat loss coefficient. Gain K = 1/k (°C per W), τ = C/k.

**Step response of a first-order system:** y(t) = K Δu (1 − e^(−t/τ)). At t = τ, 63.2%; at 2τ, 86.5%; at 4τ, 98.2%.

**First order plus dead time (FOPDT):** G(s) = K e^(−θs) / (τ s + 1). It is found from a step test: K from the final change, θ from the delay, τ from the 63.2% point (or the 28.3% and 63.2% points method: τ = 1.5 (t₆₃ − t₂₈), θ = t₆₃ − τ).

**Second-order and higher systems:** two tanks in series without interaction give G = K / ((τ₁s + 1)(τ₂s + 1)). Interacting tanks give a slower response.

**Discrete-time models:** the computer works with samples, so a model is written as a difference equation, for example y(k) = a y(k−1) + b u(k−1) with a = e^(−T/τ), b = K(1 − a). The z-transform is used for analysis.

### Solved examples

**Example 7 (tank model).** A tank of cross-section 2 m² has an outlet resistance R = 50 s/m². Find the transfer function, gain and time constant.
- τ = A R = 2 × 50 = **100 s**; K = R = **50 s/m²** (metres of level per m³/s of inflow).
- G(s) = 50 / (100 s + 1). A step increase in inflow of 0.01 m³/s raises the level by 50 × 0.01 = **0.5 m** at steady state.

**Example 8 (oven model).** An electric oven has heat capacity C = 10 kJ/°C and loss coefficient k = 20 W/°C. A 2 kW heater is switched on. Find the steady temperature rise, the time constant and the rise after 500 s and 1,000 s.
- Steady rise = P / k = 2,000 / 20 = **100 °C**.
- τ = C / k = 10,000 / 20 = **500 s**.
- After 500 s: 100 (1 − e⁻¹) = **63.2 °C**; after 1,000 s: 100 (1 − e⁻²) = **86.5 °C**.

**Example 9 (discrete model).** For the oven with sample time T = 50 s: a = e^(−50/500) = e^(−0.1) = 0.905; with K = 0.05 °C/W, b = 0.05 × (1 − 0.905) = 0.00476. The difference equation is ΔT(k) = 0.905 ΔT(k−1) + 0.00476 P(k−1).

### Key points to remember

- Modelling steps: goal → information and assumptions → balances → degrees of freedom → solve → analyze → validate.
- Physical (first-principles) vs empirical vs control models.
- Tank: τ = AR, K = R. Oven: τ = C/k, K = 1/k.
- First-order step: 63.2% at τ, 86.5% at 2τ, 98.2% at 4τ.
- FOPDT from a step test: K, τ, θ.
- Discrete model: a = e^(−T/τ).

### Important questions

1. Distinguish between physical models and control models. Why are models needed in computer process control?
2. Explain the steps in developing a process model, from the goal to validation.
3. Derive the transfer function of a liquid level system (or a thermal system). Solve a numerical.
4. Explain the FOPDT model and how its parameters are found from a step test.
5. What is linearization? Explain with an example why linear models are used for control design.

---

## Unit 4: Advanced Process Control Strategies

### 2-mark definitions

- **Feedback control:** measures the controlled variable and corrects the manipulated variable based on the error.
- **PID control:** control action = proportional + integral + derivative of the error: u = Kp [e + (1/Ti) ∫e dt + Td de/dt].
- **Cascade control:** a primary (outer) controller sets the set point of a secondary (inner) controller, so disturbances in the inner loop are removed before they affect the main variable.
- **Feedforward control:** measures a disturbance and corrects the manipulated variable before the controlled variable changes.
- **Ratio control:** keeps the ratio of two flows constant (fuel to air, reagent to feed).
- **Model predictive control (MPC):** uses a process model to predict future outputs over a horizon and computes the best sequence of moves at each sample, applying only the first move (receding horizon).
- **Adaptive control:** a controller that adjusts its own parameters as the process changes (gain scheduling, self-tuning, model reference).
- **Inferential control:** controlling a variable that cannot be measured quickly (composition) by estimating it from easily measured variables (temperature, pressure) using a model (soft sensor).
- **Intelligent control:** control using AI techniques such as fuzzy logic, neural networks, expert systems and genetic algorithms.
- **Statistical process control (SPC):** using statistical tools, mainly control charts, to monitor a process and detect special-cause variation.

### Core concepts

**Digital PID:** the computer uses a discrete form.
- **Position form:** u(k) = Kp e(k) + Ki T Σ e(j) + (Kd/T)[e(k) − e(k−1)].
- **Velocity (incremental) form:** Δu(k) = Kp[e(k) − e(k−1)] + Ki T e(k) + (Kd/T)[e(k) − 2e(k−1) + e(k−2)], and u(k) = u(k−1) + Δu(k). It avoids integral wind-up and gives bumpless transfer between manual and auto.
- **Sample time:** choose about τ/10 or smaller.
- **Tuning:** Ziegler-Nichols, Cohen-Coon, or autotuning.

**Cascade control:** example of a jacketed reactor. The primary loop controls reactor temperature; its output is the set point for the secondary loop, which controls jacket coolant temperature (or flow). Rules: the inner loop must be 3 to 5 times faster than the outer loop; tune the inner loop first. Benefit: disturbances in coolant supply are corrected before reactor temperature moves.

**Feedforward plus feedback:** feedforward handles measured disturbances (feed flow change in a heat exchanger) quickly, and feedback trims errors from model mismatch and unmeasured disturbances. Ideal feedforward controller: Gff = −Gd / Gp.

**Predictive control:**
- **Smith predictor:** for long dead time; an internal model removes the delay from the feedback loop.
- **MPC:** steps are prediction with a model (step-response, as in DMC), an optimization with constraints, and the receding horizon.
- **MPC strengths:** multivariable, handles constraints and dead time; widely used in refineries and petrochemicals.

**Adaptive control:**
- **Gain scheduling:** controller gains change with a measured operating variable (load, flow).
- **Model reference adaptive control (MRAC):** adjusts gains so that the plant follows a reference model.
- **Self-tuning regulator (STR):** estimates model parameters online (recursive least squares) and redesigns the controller each sample.

**Inferential control:** example of a distillation column, where top product composition is inferred from tray temperature and pressure because online analyzers are slow and costly. A soft sensor (regression or neural network) estimates the variable; analyzer results update (bias-correct) it.

**Intelligent control:**
- **Fuzzy logic control:** linguistic rules such as "if error is positive large and change in error is small then increase valve a lot"; steps are fuzzification, rule base and inference, defuzzification (centroid). Good for nonlinear processes like cement kilns.
- **Neural network control:** learns the process model or inverse model from data.
- **Expert systems:** knowledge-based advisory and alarm handling.
- **Genetic algorithms:** optimization of tuning parameters.

**Statistical process control:** distinguishes **common-cause** variation (inherent noise) from **special-cause** variation (a fault). Tools: X̄ and R charts, X̄ and s charts, p and c charts, CUSUM and EWMA charts for small shifts, and multivariate SPC (PCA, Hotelling T²). Control limits for X̄: X̿ ± A₂ R̄. Process capability Cp = (USL − LSL) / 6σ. SPC monitors; it does not adjust the process automatically the way feedback control does.

**Comparison of strategies**

| Strategy | Purpose | Example |
|---|---|---|
| Cascade | Reject inner-loop disturbances early | Reactor temperature to jacket temperature |
| Feedforward | Act on measured disturbance before error | Heat exchanger feed flow |
| Ratio | Fixed proportion of two flows | Air/fuel in furnace |
| Predictive (MPC, Smith) | Dead time, constraints, multivariable | Distillation, refinery units |
| Adaptive | Changing process dynamics | pH control, varying-load boiler |
| Inferential | Unmeasurable variable | Column composition from temperature |
| Intelligent | Nonlinear, poorly modelled | Cement kiln fuzzy control |
| Statistical | Monitoring and fault detection | Quality monitoring of product properties |

### Solved examples

**Example 10 (velocity-form PID).** A digital PID has Kp = 2, Ki = 0.5 s⁻¹, Kd = 1 s and sample time T = 1 s. The errors are e(k−2) = 4, e(k−1) = 3, e(k) = 2, and the previous output was u(k−1) = 50%. Find u(k).
- P term: 2 × (2 − 3) = −2.
- I term: 0.5 × 1 × 2 = +1.
- D term: (1 / 1) × (2 − 6 + 4) = 0.
- Δu = −1, so u(k) = 50 − 1 = **49%**.

**Example 11 (control chart limits).** Samples of size n = 5 give a grand mean X̿ = 50.0 mm and average range R̄ = 2.0 mm. For n = 5, A₂ = 0.577. Find the X̄ chart limits.
- UCL = 50 + 0.577 × 2 = **51.154 mm**; LCL = 50 − 1.154 = **48.846 mm**.
- A sample mean of 51.3 mm is outside the limits, which signals a special cause to investigate.

**Example 12 (cascade loop speeds).** The outer temperature loop of a reactor has a time constant of 20 minutes. The inner coolant-flow loop should be 3 to 5 times faster, so its closed-loop time constant should be **4 to 7 minutes or less**. A flow loop (seconds) easily meets this.

### Key points to remember

- Velocity-form PID: Δu = Kp Δe + Ki T e + (Kd/T) Δ²e; avoids wind-up.
- Cascade: inner loop faster, tune inner first. Feedforward: Gff = −Gd/Gp, combined with feedback.
- MPC: model, prediction horizon, optimization with constraints, receding horizon.
- Adaptive: gain scheduling, MRAC, self-tuning. Inferential: soft sensors.
- Intelligent: fuzzy (fuzzify, rules, defuzzify), neural, expert, GA.
- SPC: common vs special cause; X̄ chart X̿ ± A₂R̄.

### Important questions

1. Explain cascade control with a block diagram and an industrial example. When is it useful?
2. What is model predictive control? Explain its elements and advantages over PID.
3. Explain adaptive control. Describe gain scheduling, MRAC and self-tuning regulators.
4. What is inferential control? Explain with the example of a distillation column. What is intelligent control?
5. Explain statistical process control and its use in computer control. Calculate X̄ chart limits. Derive the digital (velocity) PID algorithm.

---

## Unit 5: Case Studies of Computer Process Control

### 2-mark definitions

- **Electric oven temperature control:** computer control of heater power to keep oven temperature at a set point, usually using SCR or SSR power control and a thermocouple or RTD.
- **SCR power control:** varying heater power by phase-angle firing or burst (zero-crossing, time-proportional) firing of thyristors.
- **Reheat furnace:** a furnace that heats steel slabs, blooms or billets to rolling temperature (about 1,100 to 1,250 °C) before hot rolling.
- **Walking beam furnace:** a reheat furnace in which beams lift and move the stock step by step through the zones.
- **Cross-limiting control:** an air-fuel ratio scheme where air leads fuel on a load increase and fuel leads air on a load decrease, so the flame never becomes fuel-rich.
- **Automatic gauge control (AGC):** control of strip thickness in a rolling mill by adjusting the roll gap.
- **Gaugemeter (BISRA) principle:** exit thickness h = S₀ + F/M, where S₀ is the unloaded roll gap, F the rolling force and M the mill modulus (stretch).
- **Flatness (shape) control:** controlling the distribution of strip elongation across its width using roll bending, work-roll shifting and zone cooling.
- **Three-element drum level control:** boiler drum level control using drum level, steam flow and feedwater flow.
- **Coordinated boiler-turbine control:** coordinates boiler firing and turbine valves to meet load demand while keeping steam pressure stable.

### Core concepts

**1. Electric oven temperature control:**
- **Elements:** thermocouple or RTD → transmitter → ADC → computer PID → output to SCR or SSR → heater; with an over-temperature trip.
- **Control approach:** ramp-and-soak programs (heat-treatment profiles), PID with anti-windup, feedforward of supply voltage, and multi-zone control with interaction compensation.
- **Model:** first order plus dead time (τ in minutes).
- **Benefits:** accurate profiles, logging for quality records, energy saving.

**2. Reheat furnace:**
- **Objectives:** heat each piece to the target discharge temperature with uniform temperature (small skid marks), minimum fuel and minimum scale loss, matched to the mill pace.
- **Levels of control:**
  - Level 1: zone temperature control and combustion (air-fuel ratio with cross-limiting, oxygen trim), furnace pressure control.
  - Level 2: a slab temperature model tracks each piece (heat transfer model computing temperature profile) and calculates optimal zone set points.
  - Mill pacing: discharge rate synchronized with the rolling mill.
- **Zones:** preheating (recuperation), heating, soaking.

**3. Rolling mill: thickness and flatness control:**
- **Thickness (AGC):** exit gauge depends on roll gap and rolling force. Gaugemeter AGC uses force measurement to compute thickness and adjust the screw-down (hydraulic gap control). Monitor AGC uses an X-ray gauge after the stand to correct slow errors. Feedforward AGC uses entry thickness measurement. Tension control between stands (loopers) also matters.
- **Flatness (shape):** a shapemeter roll measures tension across the width; the computer adjusts work-roll bending, roll shifting, skew and spray cooling zones.
- **Computer levels:** Level 1 fast loops (milliseconds), Level 2 setup model (pass schedule, roll gaps, speeds), Level 3 production scheduling.

**4. Power plant (thermal):**
- **Main loops:**
  - Combustion control: steam pressure → fuel firing rate with air-fuel ratio and O₂ trim.
  - Drum level control: three-element control, because of shrink and swell.
  - Superheated steam temperature control: attemperator spray, often cascade.
  - Furnace draft control (ID and FD fans).
  - Turbine speed and load control.
  - Coordinated boiler-turbine control.
- **DCS functions:** sequence start-up and shutdown, burner management system (safety), alarms, performance calculations (heat rate, efficiency), and data logging.
- **Shrink and swell:** a sudden rise in steam demand lowers drum pressure, so bubbles grow and the level rises falsely before it falls. Single-element control would wrongly cut feedwater. Three-element control uses steam flow as feedforward to avoid this.

### Solved examples

**Example 13 (gaugemeter equation).** A rolling stand has an unloaded roll gap of 3.0 mm and a mill modulus of 5 MN/mm. The rolling force is 10 MN. Find the exit thickness. If the force rises to 12 MN because a harder piece enters, how much must the gap be reduced to hold thickness?
- h = S₀ + F/M = 3.0 + 10/5 = **5.0 mm**.
- At 12 MN, stretch = 12/5 = 2.4 mm, so to keep h = 5.0 mm, S₀ = 5.0 − 2.4 = 2.6 mm. The gap must be reduced by **0.4 mm**.

**Example 14 (air-fuel ratio).** Natural gas needs about 10 m³ of air per m³ of fuel for complete combustion. With 10% excess air and a fuel flow of 500 m³/h, find the air flow set point.
- Air = 500 × 10 × 1.10 = **5,500 m³/h**. Cross-limiting makes air rise before fuel when the load increases.

**Example 15 (oven ramp).** A heat-treatment program needs a ramp from 30 °C to 630 °C at 5 °C/min, then a 60 min soak. Ramp time = 600 / 5 = 120 min; total program = **180 min**. The computer changes the PID set point every sample (for example every 10 s, by 0.83 °C).

### Key points to remember

- Oven: thermocouple, PID, SCR/SSR, ramp and soak.
- Reheat furnace: zones, combustion with cross-limiting and O₂ trim, slab temperature model, mill pacing.
- Rolling: gaugemeter h = S₀ + F/M, monitor AGC with X-ray gauge, flatness by bending, shifting and cooling.
- Power plant: combustion, three-element drum level (shrink and swell), steam temperature cascade, draft, coordinated control, burner management.

### Important questions

1. Explain computer control of an electric oven temperature with a block diagram.
2. Describe the computer control of a reheat furnace, including combustion and slab temperature models.
3. Explain thickness (AGC) and flatness control in a rolling mill. Solve a gaugemeter numerical.
4. Explain the computer control of a thermal power plant. Why is three-element drum level control used?
5. Write a short note on hierarchical computer control in a steel plant (Level 1 to Level 3).

---

## Last-hour checklist

- [ ] Role of computers; general block diagram; DDC vs supervisory; centralized vs DCS vs hierarchical; Purdue levels; economics (payback 2.4 years); ADC resolution (2.44 mV, 0.122 °C); 4–20 mA (6.25 bar).
- [ ] Fieldbus benefits; HART, Modbus, PROFIBUS, FF, OPC UA; polling, interrupt, DMA; control software; IEC 61131-3; RTOS features, rate monotonic (U = 0.45 ≤ 0.78), priority inversion; Modbus time 115 ms.
- [ ] Modelling steps; physical vs control model; tank (τ = 100 s); oven (100 °C, 500 s, 63.2 °C); FOPDT; discrete model.
- [ ] Digital PID velocity form (49%); cascade; feedforward; ratio; MPC; adaptive; inferential; fuzzy; SPC limits (51.154, 48.846).
- [ ] Oven ramp and soak; reheat furnace; cross-limiting (5,500 m³/h); AGC gaugemeter (5.0 mm, 0.4 mm); flatness; power plant loops and three-element control.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Computer Aided Process Control | S. K. Singh | PHI Learning | [WorldCat](https://search.worldcat.org/search?q=Computer+Aided+Process+Control+S.K.+Singh) |
| 2 | Digital Computer Process Control | Cecil L. Smith | Intext Educational Publishers | [WorldCat](https://search.worldcat.org/search?q=Digital+Computer+Process+Control+Cecil+Smith) |
| 3 | Process Control Instrumentation Technology | Curtis D. Johnson | PHI / Pearson | [WorldCat](https://search.worldcat.org/search?q=Process+Control+Instrumentation+Technology+Curtis+Johnson) |
| 4 | Computer-Based Industrial Control | Krishna Kant | PHI Learning | [WorldCat](https://search.worldcat.org/search?q=Computer-Based+Industrial+Control+Krishna+Kant) |
| 5 | Elements of Computer Process Control with Advanced Control Applications | P. B. Deshpande, R. H. Ash | Instrument Society of America (1981) | [WorldCat](https://search.worldcat.org/search?q=Elements+of+Computer+Process+Control+Deshpande+Ash) |
| 6 | Digital Control Systems: Theory, Hardware, Software | C. H. Houpis, G. B. Lamont | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Digital+Control+Systems+Theory+Hardware+Software+Houpis+Lamont) |

**Syllabus source:** [AKTU Open Elective-III and IV syllabus for B.Tech 8th semester, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf)

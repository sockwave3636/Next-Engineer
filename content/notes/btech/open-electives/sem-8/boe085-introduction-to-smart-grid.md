---
program: btech
branches: [all]
semester: 8
code: BOE085
name: Introduction to Smart Grid
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-III, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf
units:
  - Introduction to Smart Grid
  - Smart Grid Technologies (Part 1)
  - Smart Grid Technologies (Part 2)
  - Microgrids and Distributed Energy Resources
  - Power Quality Management in Smart Grid
---

# BOE085 Introduction to Smart Grid: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: the theory, block diagrams in words, and comparison tables.
3. **Solved examples**: short calculations (tariff bills, PMU error, storage energy, PV fill factor and efficiency, wind power, battery sizing, THD).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (evolution, concept, need, conventional vs smart grid, barriers, self-healing, policies, CDM) and Unit 2 (smart meters, AMR/AMI, pricing, outage management, PHEV/V2G, home automation).
- **Afternoon (3 hours):** Unit 3 (substation and feeder automation, GIS, IEDs, storage, WAMS, PMU) and Unit 4 (microgrids, solar, wind, fuel cells, microturbines, integration).
- **Evening (2 hours):** Unit 5 (power quality, EMC, PQ conditioners, web-based monitoring), then the "Last-hour checklist".
- **In the exam:** draw the smart grid architecture, AMI block diagram, PMU/WAMS structure and microgrid layout. Use comparison tables.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Introduction to Smart Grid

### 2-mark definitions

- **Smart grid:** an electricity network that uses digital communication, sensing and control to monitor and manage the generation, transmission, distribution and use of electricity efficiently, reliably, securely and sustainably, with two-way flow of power and information.
- **Conventional grid:** a one-way, centralized system in which large power stations send power through transmission and distribution networks to passive consumers with little real-time monitoring.
- **Prosumer:** a consumer who also produces electricity (e.g. rooftop solar) and can sell surplus to the grid.
- **Self-healing grid:** a grid that automatically detects, isolates and restores faults with minimal human intervention (FLISR: fault location, isolation and service restoration).
- **Resilient grid:** a grid that can withstand, adapt to and quickly recover from extreme events (storms, cyber attacks).
- **Demand response (DR):** changes in consumers' electricity use in response to price signals or incentives, to reduce peak load.
- **Distributed energy resources (DER):** small generation and storage connected near the load (rooftop PV, small wind, batteries, EVs).
- **Clean Development Mechanism (CDM):** a Kyoto Protocol mechanism that let projects in developing countries earn certified emission reduction (CER) credits for reducing greenhouse gases, which industrialized countries could buy.
- **Interoperability:** the ability of different devices and systems to exchange and use information correctly (standards like IEC 61850, IEC 61968/61970 CIM).
- **Smart Grid Mission (India):** the National Smart Grid Mission (NSGM, 2015) under the Ministry of Power to plan and monitor smart grid programmes.

### Core concepts

**Evolution of the electric grid:** isolated local DC systems (Edison, 1882) → AC systems and interconnected regional grids → national grids (India: "One Nation One Grid One Frequency", synchronised 31 Dec 2013) → SCADA/EMS automation → deregulation and markets → renewable integration, smart meters and digital control → smart grid.

**Need for smart grid:** rising demand and peak loads; ageing infrastructure; high AT&C losses (India historically 20%+); integration of variable renewables (India's target of 500 GW non-fossil capacity by 2030); reliability and outage reduction; consumer participation; electric vehicles; climate goals; cyber security; efficient asset use.

**Conventional grid vs smart grid**

| Feature | Conventional grid | Smart grid |
|---|---|---|
| Communication | One-way or none | Two-way, real time |
| Generation | Centralized | Centralized + distributed (DER) |
| Topology | Radial | Network / meshed |
| Sensors | Few | Pervasive (smart meters, PMUs) |
| Monitoring | Manual, blind in distribution | Self-monitoring |
| Restoration | Manual | Self-healing (FLISR) |
| Consumer | Passive | Active, prosumer, demand response |
| Control | Limited | Pervasive, automated |
| Metering | Electromechanical | Smart meters (AMI) |
| Renewables | Hard to integrate | Designed to integrate |

**Smart grid architecture (layers):** power system layer (generation, transmission, distribution, consumers) + communication layer (HAN, NAN/FAN, WAN) + control and applications layer (EMS, DMS, OMS, MDMS, DR, market). NIST conceptual model has seven domains: bulk generation, transmission, distribution, customers, markets, operations, service providers.

**Functions/characteristics of a smart grid (DOE):** enables active consumer participation; accommodates all generation and storage options; enables new products, services and markets; provides power quality for the digital economy; optimizes assets and operates efficiently; anticipates and responds to disturbances (self-heals); resists attack and natural disaster.

**Opportunities:** reduced losses and theft, lower peak demand, better reliability, renewable integration, EV integration, new business models (aggregators, energy services), consumer savings, jobs, lower emissions.

**Barriers:** high capital cost; uncertain business case; lack of standards and interoperability; cyber security and privacy; regulatory and policy gaps; consumer awareness and acceptance; skilled workforce shortage; legacy systems; communication infrastructure in rural areas.

**Resilient and self-healing grid:** sense (sensors, PMUs, fault indicators) → detect and locate fault → isolate using automated switches/reclosers → restore power to healthy sections via alternate feeders → repair. Benefits: fewer customer minutes lost (better SAIDI/SAIFI).

**International policies and initiatives:** USA Energy Independence and Security Act 2007 (Title XIII) and Smart Grid Investment Grants; EU SET Plan and Smart Grids European Technology Platform, 20-20-20 targets; South Korea Jeju test bed; China's Strong Smart Grid; India: NSGM, Restructured APDRP, IPDS, RDSS (Revamped Distribution Sector Scheme, 2021) with 25 crore smart prepaid meters, Smart Meter National Programme (EESL); Paris Agreement and India's net zero 2070.

**Clean Development Mechanism:** Article 12 of the Kyoto Protocol (1997); project registered with the UNFCCC; emission reduction verified; CERs (1 CER = 1 tonne CO₂-equivalent) issued; additionality required (the project would not happen without CDM). Relevance to smart grid: renewable, efficiency and loss-reduction projects could earn carbon credits. Under the Paris Agreement, Article 6.4 mechanism replaces CDM; India's Carbon Credit Trading Scheme (2023) is the domestic market.

### Solved examples

**Example 1: Loss reduction benefit.** A discom buys 1,000 MU a year with 20% AT&C loss. Smart meters and analytics cut loss to 15%. Energy saved = 50 MU. At ₹5/kWh, saving = 50 × 10⁶ × 5 = **₹250 crore per year**.

**Example 2: CERs from a solar plant.** A 10 MW solar plant has 20% capacity factor; grid emission factor 0.7 t CO₂/MWh. Energy = 10 × 8,760 × 0.2 = 17,520 MWh. Emission reduction = 17,520 × 0.7 ≈ **12,264 t CO₂ = 12,264 CERs** per year.

### Key points to remember

- Smart grid = power + two-way communication + control; prosumers; self-healing.
- Conventional vs smart table (one-way vs two-way, radial vs meshed, manual vs self-healing).
- NIST 7 domains; DOE 7 characteristics.
- Barriers: cost, standards, cyber security, regulation, awareness.
- India: NSGM 2015, RDSS 2021; CDM: CERs, 1 CER = 1 t CO₂e.

### Important questions

1. Define smart grid. Explain its evolution and the need for it.
2. Compare a conventional grid and a smart grid.
3. Explain the opportunities and barriers of smart grid.
4. Explain the concept of a resilient and self-healing grid.
5. Explain international policies on smart grid and the Clean Development Mechanism.

---

## Unit 2: Smart Grid Technologies (Part 1)

### 2-mark definitions

- **Smart meter:** an electronic meter that records consumption at short intervals (15–30 min), communicates two-way with the utility, and supports remote reading, connect/disconnect, prepaid and time-based tariffs.
- **AMR (automatic meter reading):** one-way automatic collection of meter data (by walk-by, drive-by or fixed network) for billing.
- **AMI (advanced metering infrastructure):** a two-way system of smart meters, communication networks, head-end system and meter data management system (MDMS) that enables remote reading, control and demand response.
- **Real-time pricing (RTP):** a tariff where the price changes hourly or more often to reflect the actual cost of supply.
- **Time of use (ToU) tariff:** fixed different prices for peak, normal and off-peak periods of the day.
- **Critical peak pricing (CPP):** a very high price on a few announced peak days/hours.
- **Outage management system (OMS):** software that detects, locates and manages outages and restoration using meter alarms, customer calls and network models.
- **PHEV (plug-in hybrid electric vehicle):** a vehicle with an engine and a battery that can be charged from the grid.
- **V2G (vehicle-to-grid):** using EV batteries to send power back to the grid or provide services (frequency regulation, peak shaving).
- **Home energy management system (HEMS):** a system that monitors and controls home appliances to save energy and respond to prices.

### Core concepts

**Smart meter functions:** interval energy recording (kWh, kVArh, kVA demand); remote reading; remote connect/disconnect; prepaid mode; tamper and theft detection (magnet, cover open, neutral missing); outage and voltage alerts; ToU/RTP support; net metering for rooftop PV; load limiting; firmware upgrade over the air.

**AMI architecture** (draw it): smart meters → HAN (home area network: Zigbee, Wi-Fi) for in-home displays → NAN/FAN (RF mesh, PLC, cellular) → data concentrator unit (DCU) → WAN (fibre, 4G) → head-end system (HES) → MDMS → billing, OMS, CIS, analytics. India's smart meter standard IS 16444; prepaid smart meters under RDSS with a TOTEX (pay-as-you-go service) model.

**AMR vs AMI**

| Feature | AMR | AMI |
|---|---|---|
| Communication | One-way | Two-way |
| Data | Monthly reads | Interval data, events |
| Control | None | Connect/disconnect, load limits |
| Pricing support | Flat | ToU, RTP, CPP |
| Demand response | No | Yes |
| Outage detection | No | Last-gasp alarms |

**Pricing schemes and demand response:** ToU, CPP, RTP, peak-time rebate, inclining block tariff. DR programmes: price-based (consumers react to prices) and incentive-based (direct load control of ACs/water heaters, interruptible tariffs). Benefits: lower peak, deferred investment, lower prices, reliability. India: ToU tariffs mandatory for C&I consumers above 10 kW from April 2024 and for most other consumers (except agriculture) from April 2025 after smart meter installation, with solar hours cheaper.

**Outage management:** inputs: customer calls, smart meter last-gasp messages, SCADA, fault indicators; OMS uses the network model (GIS) to infer the fault location (prediction engine), dispatches crews, tracks restoration, computes SAIDI/SAIFI. With FLISR, healthy sections are restored automatically.

**PHEV and V2G**
- EV types: BEV (battery only), HEV (hybrid, not grid-charged), PHEV (grid-chargeable hybrid), FCEV.
- Grid impacts: uncoordinated charging raises evening peaks, transformer overload, voltage drop, harmonics from chargers.
- Smart charging: delay or modulate charging to off-peak hours (G2V).
- V2G services: frequency regulation, spinning reserve, peak shaving, renewable firming; needs bidirectional chargers, aggregators, battery-degradation compensation, standards (ISO 15118, CHAdeMO bidirectional).
- V2H/V2B: powering homes/buildings.

**Smart sensors:** digital, networked sensors that measure current, voltage, temperature, sag, partial discharge, transformer oil gas etc., with local processing and communication; e.g. line sensors, fault passage indicators, transformer monitoring units, dynamic line rating sensors.

**Home and building automation:** HAN connecting smart meter, in-home display, smart thermostat, smart plugs, appliances, rooftop PV, battery and EV charger; protocols Zigbee, Z-Wave, Wi-Fi, Bluetooth LE, KNX, BACnet (buildings); HEMS schedules loads (washing machine, water heater) to cheap hours and responds to DR signals; building management systems (BMS) do the same for HVAC and lighting.

### Solved examples

**Example 1: ToU bill.** Daily use: 4 kWh in peak (₹9/kWh), 6 kWh normal (₹6/kWh), 10 kWh off-peak (₹4/kWh). Bill = 36 + 36 + 40 = **₹112/day**. Shifting 2 kWh from peak to off-peak: 18 + 36 + 48 = **₹102/day** (₹10/day saving, about ₹3,650 a year).

**Example 2: EV charging energy.** A 40 kWh EV battery is charged from 20% to 80% with a 7.2 kW charger, efficiency 90%. Energy into battery = 24 kWh; from grid = 24/0.9 = 26.7 kWh; time = 26.7/7.2 ≈ **3.7 h**.

**Example 3: V2G capacity.** 1,000 EVs each offer 5 kW for 2 hours. Aggregated capacity = **5 MW for 2 h = 10 MWh**.

### Key points to remember

- Smart meter functions; AMI = meters + HAN/NAN/WAN + DCU + HES + MDMS.
- AMR one-way vs AMI two-way.
- Pricing: ToU, CPP, RTP; DR price-based vs incentive-based.
- OMS + FLISR; SAIDI/SAIFI.
- G2V smart charging; V2G services need bidirectional chargers and aggregators.

### Important questions

1. Explain smart meters and their functions. Draw and explain AMI architecture.
2. Compare AMR and AMI.
3. Explain real-time pricing and demand response.
4. Explain outage management systems in a smart grid.
5. Explain the impact of PHEVs on the grid and the concept of V2G. Explain smart sensors and home automation.

---

## Unit 3: Smart Grid Technologies (Part 2)

### 2-mark definitions

- **Smart substation:** a substation with digital protection, control and monitoring using IEDs, process bus and station bus communication per IEC 61850.
- **Substation automation (SA):** automatic monitoring, protection, control and data acquisition in substations.
- **Feeder automation (FA) / distribution automation (DA):** automatic monitoring and control of distribution feeders using reclosers, sectionalizers, remote switches and fault indicators.
- **IED (intelligent electronic device):** a microprocessor-based device (protection relay, bay controller, meter) that measures, protects, controls and communicates.
- **GIS (geographic information system):** a system that stores and displays network assets on maps with their attributes for planning, operation and outage management. (Also: gas-insulated switchgear, a compact SF₆-insulated substation.)
- **WAMS (wide-area monitoring system):** a system of PMUs, communication and phasor data concentrators that gives a synchronized, real-time view of a large grid.
- **PMU (phasor measurement unit):** a device that measures voltage and current phasors (magnitude and angle), frequency and ROCOF, time-stamped by GPS (synchrophasors), typically 25–50 frames per second.
- **PDC (phasor data concentrator):** collects and time-aligns PMU data and sends it to applications.
- **SMES (superconducting magnetic energy storage):** stores energy in the magnetic field of a superconducting coil, E = ½LI²; very fast response.
- **CAES (compressed air energy storage):** stores energy by compressing air into caverns and releasing it through a turbine.

### Core concepts

**Smart substation (IEC 61850)**
- Three levels: process level (CTs/VTs, merging units, breakers), bay level (IEDs: protection, control), station level (HMI, gateway, SCADA).
- Process bus (sampled values) and station bus (GOOSE messages for fast tripping/interlocking, MMS for SCADA).
- Benefits: less copper wiring, interoperability, self-monitoring, faster protection, condition monitoring, remote operation.

**Feeder automation:** reclosers (clear temporary faults by reclosing), sectionalizers (isolate permanent fault sections), remote-controlled switches, fault passage indicators, Volt/VAR control with capacitor banks and voltage regulators. FLISR example: fault on a section → upstream recloser trips → fault located between two switches → those switches open → recloser closes for upstream customers → tie switch closes to feed downstream customers from another feeder.

**GIS in smart grid:** asset inventory, network connectivity model, outage mapping, crew dispatch, planning new connections, vegetation and right-of-way management, integration with OMS/DMS.

**IED functions:** protection (overcurrent, distance, differential), control, metering, event recording, disturbance recording, self-diagnostics, communication (IEC 61850, DNP3, Modbus).

**Smart energy storage**

| Technology | Principle | Response | Typical use |
|---|---|---|---|
| Batteries (Li-ion, lead-acid, flow, sodium-sulphur) | Electrochemical | Milliseconds | Frequency regulation, peak shaving, RE firming |
| SMES | Magnetic field in superconducting coil (E = ½LI²) | Milliseconds | Power quality, short bursts |
| Pumped hydro | Lift water to upper reservoir; E = ρgHVη | Minutes | Bulk storage, load levelling (largest share worldwide) |
| CAES | Compress air into caverns; expand through turbine | Minutes | Bulk storage |
| Flywheel | Kinetic energy E = ½Jω² | Milliseconds | Frequency regulation, UPS |
| Supercapacitor | Electric double layer | Milliseconds | Power smoothing |
| Hydrogen | Electrolysis, store, fuel cell | Minutes | Seasonal storage |

**Wide-area measurement (WAMS)**
- Architecture: PMUs at substations → PDCs (local/regional) → super PDC → applications (state estimation, oscillation monitoring, islanding detection, wide-area protection and control).
- India: URTDSM (Unified Real Time Dynamic State Measurement) project installed about 1,700 PMUs across the grid.
- Benefits over SCADA: SCADA polls every 2–10 s without time sync and no angles; WAMS gives synchronized angles at 25–50 samples/s, capturing dynamics.

**PMU block diagram:** CT/VT inputs → anti-aliasing filter → ADC (sampling locked to GPS 1 PPS) → phasor estimator (DFT) → frequency/ROCOF → time-tagging → output (IEEE C37.118 frames) to PDC. Accuracy measured by **TVE (total vector error)** = |X_measured − X_true| / |X_true|; limit 1% in steady state.

### Solved examples

**Example 1: PMU accuracy.** True phasor 1.0∠0°; measured 1.005∠0.5°. TVE = |1.005∠0.5° − 1∠0°| / 1 ≈ **1.008%** > 1%, so the PMU fails the steady-state limit (0.5° alone gives about 0.87%).

**Example 2: Pumped hydro energy.** Upper reservoir 10⁶ m³, head 300 m, round-trip efficiency 80%. E = ρgHVη = 1000 × 9.81 × 300 × 10⁶ × 0.8 J = 2.35 × 10¹² J = **654 MWh**.

**Example 3: SMES.** L = 10 H, I = 1,000 A. E = ½ × 10 × 1,000² = 5 MJ = **1.39 kWh** (small energy but delivered within milliseconds).

**Example 4: Phase angle and power flow.** Two buses at 400 kV with a line reactance of 100 Ω show PMU angles 20° and 5°. P = V₁V₂ sin δ / X = (400 × 400 / 100) × sin 15° = 1,600 × 0.2588 ≈ **414 MW**.

### Key points to remember

- IEC 61850: process, bay, station levels; GOOSE, sampled values, MMS.
- FLISR with reclosers, sectionalizers, tie switches.
- Storage: battery, SMES (½LI²), pumped hydro (ρgHVη), CAES, flywheel (½Jω²).
- WAMS = PMUs + PDCs + applications; GPS-synchronized; TVE ≤ 1%.

### Important questions

1. Explain smart substations and IEC 61850 architecture.
2. Explain feeder automation and FLISR with an example.
3. Explain the role of GIS and IEDs in a smart grid.
4. Explain smart storage technologies: battery, SMES, pumped hydro and CAES.
5. Explain WAMS and the PMU with a block diagram. Compare WAMS with SCADA.

---

## Unit 4: Microgrids and Distributed Energy Resources

### 2-mark definitions

- **Microgrid:** a group of interconnected loads and distributed energy resources within clear electrical boundaries that acts as a single controllable entity and can operate connected to the grid or in island mode.
- **Islanding:** a microgrid or DER section running independently when disconnected from the main grid; planned islanding is desirable, unintentional islanding is a safety hazard.
- **Point of common coupling (PCC):** the point where the microgrid connects to the utility grid, usually through a static switch.
- **Solar cell:** a semiconductor p-n junction device that converts sunlight directly into electricity by the photovoltaic effect.
- **Fill factor (FF):** FF = (V_mp × I_mp) / (V_oc × I_sc); a measure of how "square" the I–V curve is.
- **MPPT (maximum power point tracking):** control that keeps a PV or wind system at its maximum power point (perturb and observe, incremental conductance).
- **Variable speed wind turbine:** a turbine whose rotor speed varies with wind to capture maximum power, using DFIG or full-converter PMSG generators.
- **Fuel cell:** an electrochemical device that converts fuel (hydrogen) and oxygen directly into DC electricity, heat and water.
- **Microturbine:** a small gas turbine (25–500 kW) running on natural gas or biogas, often used for combined heat and power.
- **Droop control:** a decentralized control in which each source changes its frequency (and voltage) with its active (and reactive) power output to share load without communication.

### Core concepts

**Microgrid formation and structure:** DERs (PV, wind, microturbines, fuel cells, diesel), storage, loads (critical and non-critical), power electronic interfaces, static switch at PCC, microgrid central controller (MGCC) and local controllers. Types: AC, DC, hybrid AC/DC microgrids; campus, community, military, remote/village microgrids.

**Modes of operation:** grid-connected (grid sets voltage and frequency; DERs supply power, can export), islanded (DERs/storage must form the grid and balance load), transition (seamless islanding and resynchronization).

**Interconnection issues:** IEEE 1547 requirements: voltage and frequency ride-through and trip limits, anti-islanding detection within 2 s, synchronization limits, harmonics, DC injection, power factor. India: CEA (Technical Standards for Connectivity of Distributed Generation Resources) Regulations.

**Protection of microgrids:** problems: fault current differs greatly between grid-connected (high) and islanded (low, inverter-limited) modes; bidirectional power flow; blinding of protection; false tripping; unintentional islanding. Solutions: adaptive protection (settings change with mode), differential protection, directional relays, voltage-based and admittance-based protection, communication-assisted schemes.

**Control of microgrids:** hierarchical control:
- **Primary:** local droop control (P–f and Q–V droop), inner voltage and current loops.
- **Secondary:** restore frequency and voltage to nominal, by MGCC.
- **Tertiary:** economic dispatch, power exchange with grid, optimization.
- Centralized vs decentralized (agent-based) control.

**Solar cells:** types: monocrystalline Si (18–23% efficient), polycrystalline Si (15–18%), thin film (CdTe, CIGS, a-Si: 10–18%), PERC and heterojunction, perovskite (emerging), multi-junction (space, 30%+). Parameters: V_oc, I_sc, V_mp, I_mp, FF, efficiency η = P_max/(G × A). Effect of temperature (V_oc falls about 0.3–0.4%/°C) and irradiance (I_sc ∝ G). Grid-tied PV: array → DC-DC (MPPT) → inverter → grid; anti-islanding.

**Variable speed wind generation:** power P = ½ρAV³C_p (Betz limit C_p ≤ 0.593). Fixed speed (squirrel-cage induction generator) vs variable speed: DFIG (rotor-side converter ~30% rating) and PMSG with full converter. Advantages of variable speed: more energy capture (optimal tip speed ratio), less mechanical stress, reactive power control, fault ride-through.

**Fuel cells:** types: PEMFC (80 °C, vehicles, backup), SOFC (800–1000 °C, CHP), PAFC (200 °C), MCFC (650 °C), AFC (space). Single cell ~0.7 V under load; stacks in series; DC-DC + inverter for grid. Advantages: high efficiency, quiet, low emissions; disadvantages: cost, hydrogen supply.

**Microturbines:** high-speed (up to 100,000 rpm) single-shaft gas turbine with recuperator; permanent magnet generator → rectifier → inverter; electrical efficiency 25–30%, CHP efficiency 70–80%; low emissions, low maintenance, fuel flexible.

**Integration of renewables:** issues: variability and uncertainty, low inertia (converter-based), voltage rise and reverse power flow in distribution, harmonics, protection, curtailment. Solutions: forecasting, storage, flexible generation, demand response, smart inverters (Volt/VAR, frequency-watt), grid-forming inverters, synthetic inertia, stronger transmission (Green Energy Corridors in India), microgrids.

### Solved examples

**Example 1: Solar cell.** V_oc = 0.64 V, I_sc = 9.0 A, V_mp = 0.53 V, I_mp = 8.5 A, cell 156 mm × 156 mm, G = 1,000 W/m².
- P_max = 0.53 × 8.5 = 4.505 W.
- **FF = 4.505 / (0.64 × 9.0) = 4.505 / 5.76 ≈ 0.78**.
- Area = 0.156² = 0.0243 m²; P_in = 24.3 W.
- **η = 4.505 / 24.3 ≈ 18.5%**.

**Example 2: Wind turbine power.** Rotor diameter 80 m, V = 10 m/s, ρ = 1.225 kg/m³, C_p = 0.4. A = π × 40² = 5,027 m². P = ½ × 1.225 × 5,027 × 10³ × 0.4 ≈ **1.23 MW**. At 12 m/s, power rises by (1.2)³ = 1.728 times → about 2.13 MW (before rated limit).

**Example 3: Microgrid battery sizing.** Critical load 50 kW for 4 hours of islanding; depth of discharge 80%; efficiency 90%. Capacity = 50 × 4 / (0.8 × 0.9) ≈ **278 kWh**.

**Example 4: Droop sharing.** Two DERs with droops of 1% (DER-1, 100 kW) and 1% (DER-2, 50 kW) on their own ratings share load in proportion to rating: a 90 kW load gives **60 kW and 30 kW**.

### Key points to remember

- Microgrid: DER + storage + loads + PCC switch + controller; grid-connected and islanded modes.
- Protection issues: fault level changes, bidirectional flow → adaptive protection.
- Control: primary (droop), secondary (restore f, V), tertiary (economics).
- FF = V_mp I_mp / V_oc I_sc; η = P_max/GA; P_wind = ½ρAV³C_p; Betz 0.593.
- Fuel cell types (PEM, SOFC, PAFC, MCFC, AFC); microturbine with recuperator, CHP.

### Important questions

1. What is a microgrid? Explain its formation, modes of operation and interconnection.
2. Explain protection and control issues in microgrids.
3. Explain types of solar cells and grid integration of PV.
4. Explain variable speed wind energy systems (DFIG and PMSG).
5. Explain fuel cells and microturbines. Discuss issues in integrating renewable energy sources.

---

## Unit 5: Power Quality Management in Smart Grid

### 2-mark definitions

- **Power quality (PQ):** the degree to which voltage, current and frequency remain within limits so that equipment works properly: correct magnitude, frequency, sinusoidal waveform and balance.
- **Voltage sag (dip):** a decrease of RMS voltage to 0.1–0.9 pu for 0.5 cycle to 1 minute (IEEE 1159).
- **Voltage swell:** an increase of RMS voltage to 1.1–1.8 pu for 0.5 cycle to 1 minute.
- **Interruption:** voltage below 0.1 pu (momentary, temporary or sustained).
- **Harmonics:** sinusoidal components at integer multiples of the fundamental frequency, caused by non-linear loads.
- **THD (total harmonic distortion):** THD = √(Σ V_h²) / V₁ (h ≥ 2).
- **Flicker:** visible fluctuation of light due to rapid voltage fluctuations (arc furnaces, wind turbines).
- **Transient:** a sudden, short-lived disturbance (impulsive from lightning, oscillatory from capacitor switching).
- **EMC (electromagnetic compatibility):** the ability of equipment to work properly in its electromagnetic environment without causing intolerable disturbances to other equipment (emission and immunity).
- **Custom power devices:** power electronic devices for PQ improvement in distribution: DSTATCOM, DVR, UPQC.

### Core concepts

**PQ problems, causes and effects**

| Problem | Causes | Effects |
|---|---|---|
| Sag | Faults, starting large motors | Tripping of drives, PCs, contactors |
| Swell | Single line-to-ground faults, load switching off | Insulation stress, equipment damage |
| Interruption | Faults, breaker operation | Downtime, data loss |
| Harmonics | Rectifiers, VFDs, LED drivers, SMPS, inverters | Heating, neutral overload, transformer derating, resonance, meter errors |
| Flicker | Arc furnaces, welders, wind variability | Human annoyance |
| Transients | Lightning, capacitor switching | Insulation failure, electronics damage |
| Unbalance | Unequal single-phase loads | Motor heating, negative sequence currents |
| Frequency deviation | Generation-load mismatch | Equipment speed change, tripping |
| DC offset, notching | Converters | Transformer saturation, interference |

**PQ standards:** IEEE 519 (harmonic limits: voltage THD 8% at ≤ 1 kV bus, 5% at 1–69 kV), IEEE 1159 (monitoring and definitions), IEC 61000 series (EMC: limits, testing, immunity), EN 50160 (supply voltage characteristics), CEA regulations in India (harmonics per IEEE 519 for consumers).

**Electromagnetic compatibility:** emission (conducted and radiated) and immunity; coupling paths (conductive, capacitive, inductive, radiative); smart grid relevance: power electronics, communication equipment (PLC), smart meters must not interfere and must withstand surges (IEC 61000-4-x tests: ESD, EFT, surge).

**PQ issues of grid-connected renewables**
- Harmonics and interharmonics from inverters.
- Voltage rise and fluctuations from variable output (PV clouds, wind gusts); flicker from wind.
- Reverse power flow upsetting voltage regulation and protection.
- DC injection from transformerless inverters.
- Frequency stability with low inertia.
- Unbalance from single-phase rooftop PV.
- Islanding and reconnection transients.
- Resonance between inverter filters and grid.

**Power quality conditioners**

| Device | Connection | Mitigates |
|---|---|---|
| Passive filters (tuned LC) | Shunt | Specific harmonics; also supply VARs |
| Active power filter (shunt) / DSTATCOM | Shunt (VSC injects current) | Current harmonics, reactive power, load unbalance, flicker |
| DVR (dynamic voltage restorer) | Series (VSC injects voltage via transformer) | Voltage sags/swells, unbalance |
| UPQC (unified power quality conditioner) | Series + shunt back-to-back | Both voltage and current problems |
| SVC / STATCOM | Shunt (transmission) | Voltage regulation, reactive power |
| UPS, static transfer switch | Series/standby | Interruptions |
| Surge arresters, isolation transformers | Shunt/series | Transients, noise |
| Smart inverters | DER interface | Volt/VAR support, ride-through, harmonic control |

**Web-based power quality monitoring:** PQ analyzers/meters (IEC 61000-4-30 Class A) at substations and customer sites → communication (Ethernet, 4G, fibre) → central server/cloud → database → web dashboard showing sags, swells, THD, flicker, unbalance, alarms, reports, event waveforms → analytics (root cause, compliance with standards, benchmarking). Benefits: remote access from anywhere, real-time alerts, fewer site visits, data for planning, transparency with consumers; issues: data volume, cyber security, communication cost.

### Solved examples

**Example 1: THD.** Fundamental current 10 A, 5th harmonic 1.5 A, 7th harmonic 1.0 A. THD = √(1.5² + 1²)/10 = √3.25/10 = **18.0%**. RMS current = √(10² + 1.5² + 1²) = √103.25 ≈ 10.16 A.

**Example 2: Classify an event.** A 230 V supply falls to 160 V for 200 ms. 160/230 = 0.70 pu, duration between 0.5 cycle and 1 min → **voltage sag** (to 70%). If it rose to 270 V (1.17 pu) for 2 s → **swell**.

**Example 3: Passive filter tuning.** A 5th harmonic filter on a 50 Hz system with C = 100 µF: tuning frequency 250 Hz needs L = 1/((2π × 250)² × 100 × 10⁻⁶) = 1/(2.467 × 10⁶ × 10⁻⁴) ≈ **4.05 mH**.

**Example 4: DVR injection.** Load needs 230 V; supply sags to 0.7 pu (161 V) in phase. The DVR must inject **69 V** in series (in phase) to restore 230 V.

### Key points to remember

- Sag 0.1–0.9 pu, swell 1.1–1.8 pu (0.5 cycle–1 min); interruption < 0.1 pu.
- THD = √(ΣI_h²)/I₁; IEEE 519, IEEE 1159, IEC 61000, EN 50160.
- RE PQ issues: harmonics, voltage rise, flicker, reverse flow, DC injection, low inertia.
- DSTATCOM/APF shunt (current), DVR series (voltage), UPQC both.
- Web-based PQ monitoring: meters → comms → server → dashboard → analytics.

### Important questions

1. Define power quality. Explain PQ problems, their causes and effects.
2. Explain EMC and its importance in smart grids.
3. Explain power quality issues of grid-connected renewable energy sources.
4. Explain power quality conditioners: active filters, DSTATCOM, DVR and UPQC.
5. Explain web-based power quality monitoring with a block diagram.

---

## Last-hour checklist

- [ ] Smart grid definition; evolution; need; conventional vs smart table; NIST domains; opportunities and barriers.
- [ ] Self-healing (FLISR); international policies; NSGM, RDSS; CDM and CERs (12,264 CERs).
- [ ] Smart meter functions; AMI architecture; AMR vs AMI; ToU bill (₹112 → ₹102); DR; OMS.
- [ ] PHEV/V2G (5 MW × 2 h); smart sensors; HEMS and building automation.
- [ ] Smart substation (IEC 61850, GOOSE); feeder automation; GIS; IEDs.
- [ ] Storage table; pumped hydro (654 MWh); SMES (1.39 kWh); WAMS, PMU block diagram, TVE (1.008%); power flow (414 MW).
- [ ] Microgrid structure, modes, protection, hierarchical control; FF 0.78, η 18.5%; wind 1.23 MW; battery 278 kWh; fuel cells; microturbines; RE integration.
- [ ] PQ definitions and table; standards; EMC; RE PQ issues; THD 18%; filter 4.05 mH; DVR 69 V; conditioners; web-based monitoring.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Integration of Green and Renewable Energy in Electric Power Systems | Ali Keyhani, Mohammad N. Marwali, Min Dai | Wiley | [WorldCat](https://search.worldcat.org/search?q=Integration+of+Green+and+Renewable+Energy+in+Electric+Power+Systems+Keyhani) |
| 2 | The Smart Grid: Enabling Energy Efficiency and Demand Response | Clark W. Gellings | CRC Press | [WorldCat](https://search.worldcat.org/search?q=The+Smart+Grid+Enabling+Energy+Efficiency+and+Demand+Response+Gellings) |
| 3 | Smart Grid: Technology and Applications | Janaka Ekanayake, Nick Jenkins, Kithsiri Liyanage, Jianzhong Wu, Akihiko Yokoyama | Wiley | [WorldCat](https://search.worldcat.org/search?q=Smart+Grid+Technology+and+Applications+Ekanayake) |
| 4 | Smart Grids | Jean-Claude Sabonnadière, Nouredine Hadjsaïd | Wiley-Blackwell | [WorldCat](https://search.worldcat.org/search?q=Smart+Grids+Sabonnadiere+Hadjsaid) |
| 5 | Smart Grids: Infrastructure, Technology, and Solutions | Stuart Borlase | CRC Press | [WorldCat](https://search.worldcat.org/search?q=Smart+Grids+Infrastructure+Technology+and+Solutions+Borlase) |
| 6 | The Advanced Smart Grid (reference) | Andres Carvallo, John Cooper | Artech House (2011) | [WorldCat](https://search.worldcat.org/search?q=The+Advanced+Smart+Grid+Carvallo+Cooper) |
| 7 | Control and Automation of Electric Power Distribution Systems (reference) | James Northcote-Green, Robert G. Wilson | CRC Press | [WorldCat](https://search.worldcat.org/search?q=Control+and+Automation+of+Electric+Power+Distribution+Systems+Northcote-Green) |
| 8 | Substation Automation (reference) | Mladen Kezunovic and others | Springer | [WorldCat](https://search.worldcat.org/search?q=Substation+Automation+Kezunovic) |
| 9 | Electrical Power Systems Quality, 2nd ed. (reference) | R. C. Dugan, M. F. McGranaghan, S. Santoso, H. W. Beaty | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Electrical+Power+Systems+Quality+Dugan) |

**Syllabus source:** [AKTU Open Elective-III and IV syllabus for B.Tech 8th semester, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf)

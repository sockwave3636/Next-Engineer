---
program: btech
branches: [all]
semester: 8
code: BOE102
name: Building Services Installation, Safety and Practices
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-IV, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf
units:
  - Building Services and MEPF Coordination
  - Water Supply, Plumbing and Drainage
  - Electrical Services and Electrical Safety
  - Fire Safety and Protection Systems
  - Inspection, Testing, Commissioning, Handover and Maintenance
---

# BOE102 Building Services Installation, Safety and Practices: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: systems, components, codes and comparison tables.
3. **Solved examples**: the numericals examiners set (water demand and tank sizing, pump power, pipe size, electrical load and MCB rating, voltage drop, earth electrode resistance, exit width and occupant load).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (what MEPF services are, the civil engineer's coordination role, service drawings, shafts and ducts, coordination failures, BIM) and Unit 2 (water supply system from sump to tap, pipe materials, sanitary fittings, drainage, testing and defects).
- **Afternoon (3 hours):** Unit 3 (loads, wiring, distribution boards, MCB/RCCB, earthing, lightning protection, electrical audit) and Unit 4 (fire hazards, active and passive protection, extinguishers, detection and alarm, exits, NBC Part 4).
- **Evening (2 hours):** Unit 5 (inspection checklists, testing and commissioning, handover documents, operation and maintenance, defect liability), then the "Last-hour checklist".
- **In the exam:** draw a water supply line diagram (UGT → pump → OHT → down-takes), a single-line electrical diagram (meter → main switch → DB → circuits), an earthing pit, and a fire-exit layout. Quote the relevant code (NBC 2016, IS 732, IS 3043, IS 2190) once in each answer.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Building Services and MEPF Coordination

### 2-mark definitions

- **Building services:** the systems that make a building safe, comfortable and usable, such as water supply, drainage, electricity, lighting, HVAC, lifts, fire protection and communication.
- **MEPF:** Mechanical (HVAC, lifts, ventilation), Electrical (power, lighting, earthing), Plumbing (water supply, drainage, sanitation) and Fire-fighting services.
- **Service drawing:** a drawing that shows the routes, sizes and positions of services (pipes, ducts, cables) in a building.
- **Shaft:** a vertical opening running through floors that carries pipes, cables or ducts (plumbing shaft, electrical riser, HVAC shaft).
- **Duct:** an enclosed passage for air (HVAC duct) or for services (cable duct, service trench).
- **Sleeve:** a pipe piece cast into a slab or wall so that a service can pass through later without breaking the structure.
- **Clash:** a conflict where two building elements or services occupy the same space (a pipe passing through a beam).
- **Coordinated services drawing (combined services drawing):** a single drawing that overlays all services with the structure to resolve clashes before construction.
- **BIM (Building Information Modelling):** a process of creating and managing a shared 3D digital model of a building with information about every component, used for design coordination, clash detection, quantities and facility management.
- **As-built drawings:** drawings that show the services exactly as they were finally installed, given to the owner at handover.

### Core concepts

**Classification of building services**

| Category | Services |
|---|---|
| Mechanical | HVAC (heating, ventilation, air conditioning), lifts and escalators, mechanical ventilation, pumps |
| Electrical | Power supply, distribution, lighting, earthing, lightning protection, standby generator (DG), UPS, low-voltage systems (CCTV, data, access control) |
| Plumbing | Water supply (cold and hot), drainage (soil, waste, rainwater), sewage treatment, gas piping |
| Fire | Hydrants, sprinklers, extinguishers, detection and alarm, pressurization, fire doors |
| Others | Solid waste handling, building management system (BMS), security, acoustics, solar systems |

**Why services matter:** they form 25–40% of building cost (more in hospitals and offices), decide comfort and safety, and need regular maintenance; poor services cause most complaints in occupied buildings.

**Role of the civil engineer in coordination:**
- Provide structural openings, shafts, sleeves, inserts and pockets at the right places before concreting.
- Coordinate beam depths and false ceiling heights so that ducts and pipes fit.
- Provide plinth-level trenches, sumps, tanks, pump rooms, transformer and DG rooms with the right sizes, loads and access.
- Check that services do not cut structural members.
- Sequence work (first fix before plaster, second fix after), check waterproofing at penetrations, and supervise quality and safety.
- Hold coordination meetings with MEPF consultants and contractors.

**Service drawings:** plumbing layout, drainage layout, electrical conduit and point layout, single-line diagrams, HVAC duct layout, fire-fighting layout, and the combined services (coordination) drawing, followed by shop drawings by contractors and as-built drawings at the end.

**Shafts and ducts: planning points:**
- Locate them centrally and stack them vertically through all floors.
- Size them for present and future services, with access doors on each floor.
- Separate wet services (plumbing) from electrical risers.
- Seal penetrations with fire-stopping at every floor (fire separation).
- Provide ventilation and safe access for maintenance.

**Common coordination failures and their results**

| Failure | Result |
|---|---|
| No sleeves or openings left in slab or beam | Core-cutting later, weakening structure, cutting rebars, leaks |
| Duct and beam at same level | False ceiling must be lowered, reducing headroom |
| Drain pipe without enough slope space | Back-flow, blockages |
| Electrical conduit near water pipes | Shock hazard, short circuits |
| Shafts too small or without access | Maintenance impossible without breaking walls |
| No coordination of sequence | Rework, damage to finished work, delays and cost overrun |

**BIM for services coordination:**
- **Approach:** each discipline builds its own model (architectural, structural, MEP), and the models are federated into one combined model.
- **Clash detection:** software (Navisworks, Revit) finds hard clashes (physical overlap), soft clashes (clearance or access violations) and workflow clashes (sequence).
- **Other uses:**
  - Automatic quantities.
  - 4D (time) scheduling.
  - 5D (cost).
  - Prefabrication of MEP modules.
  - Facility management (6D/7D) with asset data.
- **Benefits:** fewer site clashes, less rework, better visualization for stakeholders, and accurate as-built information.

### Solved examples

**Example 1 (clash cost).** In a 10-floor building, 30 pipe-beam clashes are found on site. Each core cut and repair costs ₹8,000 and delays work by half a day. Total cost = 30 × 8,000 = **₹2.4 lakh** and **15 working days** of delay. Clash detection in BIM before construction would have avoided most of this.

**Example 2 (ceiling height check).** Floor-to-floor height is 3.3 m, slab is 150 mm and the beam depth is 450 mm. The HVAC duct (300 mm) plus hangers and clearance (100 mm) runs below the beam. False ceiling level = 3.3 − 0.15 − 0.45 − 0.30 − 0.10 = **2.30 m** clear height, which is low for an office (about 2.6–2.7 m is usually wanted). Routing the duct through a beam opening (designed by the structural engineer) or beside the beam would fix this.

### Key points to remember

- MEPF = mechanical, electrical, plumbing, fire; services are 25–40% of cost.
- Civil engineer's role: openings, sleeves, shafts, tanks, plant rooms, levels, sequence, coordination.
- Shafts: central, stacked, accessible, fire-stopped, separate wet and electrical.
- Coordination failures cause core cutting, low ceilings, leaks, rework.
- BIM: federated model, clash detection (hard, soft, workflow), 4D/5D, as-built data.

### Important questions

1. Classify building services and explain their importance in modern buildings.
2. Explain the role of a civil engineer in coordinating MEPF services.
3. What are service drawings? Explain shafts and ducts and the points to consider while planning them.
4. Discuss common failures in services coordination and their consequences.
5. Explain the use of BIM in services coordination and clash detection.

---

## Unit 2: Water Supply, Plumbing and Drainage

### 2-mark definitions

- **Underground tank (UGT, sump):** a storage tank below ground that receives water from the municipal main or borewell.
- **Overhead tank (OHT):** a tank on the roof from which water flows by gravity to the fixtures.
- **Down-take:** a vertical pipe that carries water from the OHT down to each floor.
- **Hydro-pneumatic system:** a pressurized water supply using pumps and a pressure vessel instead of an OHT.
- **Sanitary fitting (fixture):** an appliance for sanitation such as a water closet, wash basin, urinal, sink or bath.
- **Trap:** a bent pipe fitting that holds water (water seal) to stop sewer gases entering the building.
- **Soil pipe and waste pipe:** a soil pipe carries human excreta from WCs and urinals; a waste pipe carries water from basins, sinks and baths.
- **Vent pipe:** a pipe that lets air into the drainage system to protect trap seals from siphonage and to let gases out above the roof.
- **Inspection chamber (manhole):** an access chamber on a drain line for inspection and cleaning, provided at junctions and changes of direction.
- **Hydraulic pressure test:** filling a pipeline with water at a pressure above working pressure to check for leaks.

### Core concepts

**Water supply system of a building:**
1. Source: municipal main or borewell → water meter.
2. Underground tank (sump).
3. Pumps (duty and standby), with float switches or level controllers.
4. Rising main to the overhead tank.
5. Distribution by gravity through down-takes and branches to fixtures, with valves for isolation.
- High-rise buildings use pressure zones (pressure-reducing valves or intermediate tanks) so pressure at lower floors does not exceed fixture limits.
- **Hydro-pneumatic system:** used where no OHT is possible.
- **Water demand:** per IS 1172 / NBC Part 9, about 135 litres per head per day for residences with full flushing.

**Pumps:** centrifugal (most common), submersible (for borewells and sumps), jet pumps. Choose by discharge (L/s) and total head (static lift + friction losses + residual pressure). Power P = ρ g Q H / η. Always provide a standby pump, non-return valve and isolation valves.

**Pipe materials**

| Material | Use | Advantages | Limitations |
|---|---|---|---|
| GI (galvanized iron) | Older cold water lines, fire lines | Strong, impact resistant | Corrodes and scales inside, heavy, threaded joints leak |
| CPVC | Hot and cold water inside buildings | Handles hot water (up to about 93 °C), smooth, no corrosion, solvent-cement joints | Brittle in cold, UV sensitive outdoors |
| UPVC | Cold water supply, rainwater, soil and waste pipes | Light, cheap, corrosion free, smooth | Not for hot water, UV degradation if unprotected |
| HDPE | External water mains, underground lines, sewage | Flexible, tough, fusion-welded leak-free joints | Not for hot water, needs special welding |
| PPR | Hot and cold water | Fusion-welded joints, long life | Higher cost |
| Copper | Hot water, gas, medical gas | Durable, hygienic | Expensive |
| Cast iron / ductile iron | Soil pipes (old), water mains | Strong, quiet | Heavy, corrodes |

**Sanitary fittings:** Indian and European WCs, wash basins, urinals, sinks, showers, flushing cisterns and flush valves, floor traps (Nahani traps), gully traps. Use water-saving fittings (dual-flush cisterns of 6/3 litres, aerators, sensor taps).

**Drainage systems:**
- **Two-pipe system:** separate soil and waste stacks, each with its own vent pipe; safest but costly.
- **One-pipe system:** soil and waste in one stack, with all traps vented.
- **Single-stack system:** one stack without separate vent pipes; needs careful design; common in Indian apartments.
- **Rainwater:** separate rainwater pipes leading to harvesting pits or drains.
- **Design points:** proper slope (self-cleansing velocity about 0.6–0.75 m/s; a 100 mm house drain is commonly laid at about 1 in 40 to 1 in 60), traps on every fixture, vent pipes above the roof, inspection chambers at junctions and bends, and no sharp bends.

**Testing:**
- **Water supply lines:** hydraulic test at 1.5 times the working pressure (commonly), held for a fixed period with no pressure drop, before concealing in walls.
- **Drainage:** water test (fill the line and check for drop), smoke test (smoke under pressure shows leaks), ball test (checks bore and alignment).
- **Fixtures:** flow and leak checks.
- **Tanks:** water-tightness test before waterproofing is covered.

**Common defects and causes:**
- Leakage at joints (poor workmanship, untested lines).
- Low pressure (undersized pipes, air locks, low OHT height).
- Dampness and seepage in walls (concealed pipe leaks, no sleeves).
- Foul smell (dry or broken traps, missing vents).
- Back-flow and blockages (inadequate slope, wrong fall direction).
- Water hammer (fast-closing valves).
- Cross-connection between drinking water and wastewater (contamination risk).

### Solved examples

**Example 3 (water demand and storage).** A residential building has 40 flats with 5 persons each. Find the daily demand at 135 L/head/day.
- Population = 200. Demand = 200 × 135 = **27,000 L/day (27 m³)**.
- Tanks are then sized from this daily demand as the local bye-laws and NBC require, with the fire reserve added for the building's height.

**Example 4 (pump power).** The daily demand of 27,000 L is to be pumped to the OHT in 2 hours against a total head of 40 m with a pump efficiency of 60%.
- Q = 27,000 / 7,200 = **3.75 L/s** = 0.00375 m³/s.
- P = ρgQH / η = 1,000 × 9.81 × 0.00375 × 40 / 0.6 = **2.45 kW**. Choose a 3 kW (about 4 HP) motor, with a standby pump.

**Example 5 (pipe size).** Find the rising main diameter for Q = 3.75 L/s at a velocity of 1.5 m/s.
- A = Q / v = 0.00375 / 1.5 = 0.0025 m².
- d = √(4A/π) = **56.4 mm**, so use the next standard size, **65 mm**.

### Key points to remember

- Supply chain: source → meter → UGT → pumps → OHT → down-takes → fixtures; pressure zoning in tall buildings.
- 135 L/head/day for residences; P = ρgQH/η; d = √(4Q/πv).
- Pipe materials table: GI, CPVC (hot), UPVC (cold, drainage), HDPE (external), PPR.
- Drainage: two-pipe, one-pipe, single-stack; traps, vents, slopes, inspection chambers.
- Tests: hydraulic (1.5 × working pressure), water, smoke and ball tests. Defects and their causes.

### Important questions

1. Explain the water supply system of a multi-storey building with a line diagram (UGT, pumps, OHT, down-takes).
2. Compare GI, CPVC, UPVC and HDPE pipes with their uses.
3. Explain the systems of plumbing (two-pipe, one-pipe, single-stack) with sketches. What are traps and vents?
4. Describe the testing of water supply and drainage lines. List common plumbing defects and their causes.
5. Calculate the daily water demand and the pump power for a given building.

---

## Unit 3: Electrical Services and Electrical Safety

### 2-mark definitions

- **Connected load:** the sum of the ratings of all electrical equipment connected in a building.
- **Maximum demand:** the highest load actually drawn at any time, always less than the connected load.
- **Demand factor:** maximum demand divided by connected load (less than 1).
- **Distribution board (DB):** an enclosure that divides the incoming supply into circuits, with protective devices for each circuit.
- **MCB (miniature circuit breaker):** an automatic switch that trips on overload and short circuit.
- **RCCB / RCD (residual current device):** a device that trips when leakage current to earth exceeds its rating (30 mA for personal protection), preventing electric shock.
- **ELCB:** earth leakage circuit breaker; older term for a leakage protection device, now replaced by RCCBs.
- **Earthing:** connecting the non-current-carrying metal parts of equipment to the general mass of earth so that fault current flows safely and protective devices operate.
- **Lightning protection system (LPS):** air terminals, down conductors and earth terminations that intercept lightning and carry it safely to ground.
- **Electrical audit:** a systematic inspection and test of an electrical installation to check safety, code compliance and energy efficiency.

### Core concepts

**Electrical loads in buildings:**
- Lighting.
- Fans and small power (sockets).
- Power sockets (geysers, kitchen appliances).
- HVAC.
- Lifts and pumps.
- Fire pumps and emergency loads.
- IT and UPS.
- EV chargers.

Loads are estimated from points and ratings, a demand factor is applied, and the result sizes the supply, transformer, cables and DG set.

**Electrical safety principles:**
- Protection against direct contact (insulation, enclosures, barriers).
- Protection against indirect contact (earthing and automatic disconnection by MCB or RCD).
- Overcurrent protection (MCBs, fuses, MCCBs).
- Correct cable sizing for current and voltage drop.
- Good workmanship and proper termination.
- Separation from water and gas services.
- Using ISI-marked materials.
- Testing before energizing.
- Lock-out and tag-out during maintenance.
- Only licensed electricians work on installations.
- **Rules:** Central Electricity Authority (Measures relating to Safety and Electric Supply) Regulations, 2023, and the National Electrical Code (NEC 2023, SP 30).

**Wiring systems:**
- **Concealed conduit wiring (PVC or metal conduit in walls and slabs):** the most common in modern buildings; neat and protected.
- **Surface conduit and casing-capping:** cheaper; used in renovations.
- **Cable trays and trunking:** commercial and industrial buildings.
- **Cable types:** FR (flame retardant), FRLS (flame retardant low smoke), and LSZH (low smoke zero halogen) for escape routes and public buildings.
- **Typical circuit cable sizes (copper):** 1.5 mm² lighting, 2.5 mm² 6/16 A sockets, 4 mm² for AC and geyser circuits.
- **Colour codes (IS 732):** phases red, yellow, blue; neutral black; earth green or green-yellow.

**Distribution boards and protection:**
- **Supply chain:** service cable → energy meter → main switch or MCCB → (RCCB) → DB with MCBs for each circuit → final circuits.
- **Single-line diagram (SLD):** shows this hierarchy, with ratings.
- **MCB curves:** B (lighting, trips at 3–5 × In), C (motors and inductive loads, 5–10 × In), D (high inrush, 10–20 × In).
- **RCCB 30 mA** for socket and bathroom circuits; 100 or 300 mA for fire protection at the main.
- **Phase balancing:** distribute loads equally over the three phases.

**Earthing (IS 3043):**
- **Types of electrode:** pipe earthing (GI pipe in a pit with charcoal and salt, traditional), plate earthing (copper or GI plate), rod earthing, chemical or maintenance-free earthing (copper-bonded rod with backfill compound).
- **Earth resistance:** depends on soil resistivity, electrode size and moisture. For a rod or pipe, R = (ρ / 2πL) ln(4L/d).
- **Lowering resistance:** use multiple electrodes in parallel, deeper electrodes and backfill.
- **Required:**
  - Separate earth pits for lightning and for electrical systems (bonded together as required).
  - Equipotential bonding of metal pipes and structural steel.
  - Periodic testing with an earth tester (fall-of-potential method).

**Lightning protection (IS/IEC 62305):**
- **Risk assessment:** decides the protection level.
- **Air termination:** rods or mesh on the roof.
- **Down conductors:** spaced around the perimeter, by the shortest straight path.
- **Earth termination:** separate pits, bonded to the main earth.
- **Surge protection devices (SPDs):** at the incoming panel to protect equipment.
- **Checks:** continuity and earth resistance, regularly.

**Electrical audit:**
- **Safety audit:** visual inspection (damaged cables, overloaded sockets, missing covers, improper joints), checking protection devices and ratings, testing earth resistance and insulation resistance (megger test), RCD trip test, thermography (hot spots in panels), checking documentation and SLDs, and compliance with codes.
- **Energy audit:** load profile, power factor (capacitor banks), efficient lighting (LED), motors and pumps, and billing analysis.
- **Report:** observations, risk ranking and corrective actions.

### Solved examples

**Example 6 (load and MCB rating).** A flat has connected loads: lighting 2 kW, fans 1 kW, AC 3 kW, sockets 2 kW. Take a demand factor of 0.6, single-phase 230 V and power factor 0.9. Find the maximum demand, current and main MCB rating.
- Connected load = 8 kW. Maximum demand = 0.6 × 8 = **4.8 kW**.
- I = P / (V × pf) = 4,800 / (230 × 0.9) = **23.2 A**.
- Choose the next standard MCB size, **32 A** (C-curve, double pole), with a 40 A, 30 mA RCCB (an RCCB rating must be at least the MCB rating).

**Example 7 (voltage drop).** A 4 mm² copper cable (resistance about 4.61 Ω/km) feeds a 20 A AC load 30 m away on 230 V.
- Vd = 2 × L × I × R = 2 × 0.030 km × 20 × 4.61 = **5.53 V**.
- Percentage = 5.53 / 230 = **2.4%**, within the usual limit of about 3% for final circuits, so the cable is acceptable.

**Example 8 (earth electrode resistance).** A 3 m long, 40 mm diameter pipe electrode is driven in soil of resistivity 100 Ω·m.
- R = (100 / 2π × 3) × ln(4 × 3 / 0.04) = 5.31 × ln 300 = 5.31 × 5.70 = **30.3 Ω**.
- This is too high for good fault clearing, so use several electrodes in parallel (spaced at least twice their length apart), longer electrodes or chemical backfill.

### Key points to remember

- Connected load × demand factor = maximum demand; I = P/(V pf); pick the next standard MCB.
- MCB curves B, C, D; RCCB 30 mA for shock protection.
- Wiring: concealed conduit, FRLS cables, IS 732 colour codes, cable sizes.
- Earthing: pipe, plate, rod, chemical; R = (ρ/2πL) ln(4L/d); equipotential bonding; test regularly.
- LPS: air terminal, down conductor, earth; SPDs; IS/IEC 62305.
- Audit: visual, IR test, earth test, RCD test, thermography; energy audit.

### Important questions

1. Explain the electrical distribution system of a building with a single-line diagram (meter, main switch, RCCB, DB, MCBs).
2. Explain the types of wiring systems and the precautions for safe wiring.
3. What is earthing? Explain pipe and plate earthing with sketches and the factors affecting earth resistance.
4. Explain a lightning protection system for a building.
5. What is an electrical audit? Explain the checks carried out. Solve a load and MCB sizing numerical.

---

## Unit 4: Fire Safety and Protection Systems

### 2-mark definitions

- **Fire triangle:** the three things needed for fire: fuel, heat and oxygen; removing any one puts the fire out (a fourth element, the chain reaction, makes the fire tetrahedron).
- **Classes of fire (IS 15683 / IS 2190):** A (ordinary solids: wood, paper, cloth), B (flammable liquids), C (flammable gases), D (combustible metals), and electrical fires (involving live equipment), with class K/F used for cooking oils.
- **Active fire protection:** systems that act to detect or fight fire (alarms, sprinklers, hydrants, extinguishers).
- **Passive fire protection:** built-in features that contain fire and smoke without any action (fire-rated walls and doors, compartmentation, fire stopping, protected staircases).
- **Fire compartment:** a part of a building enclosed by fire-resisting construction to limit the spread of fire.
- **Fire resistance rating:** the time (in hours) for which a building element can resist fire while keeping its stability, integrity and insulation.
- **Sprinkler system:** an automatic system of pipes and heads that open at a set temperature (often 68 °C, red glass bulb) and spray water on the fire.
- **Wet riser:** a vertical pipe permanently charged with water and pressurized by fire pumps, with landing valves on each floor for firefighters' hoses.
- **Means of escape:** the continuous, protected route by which occupants can leave a building safely in a fire (exits, corridors, staircases, refuge areas).
- **Travel distance:** the distance an occupant must walk from any point in a floor to the nearest exit.

### Core concepts

**Fire hazards in buildings:**
- Electrical faults (overloading, loose connections, short circuits); the biggest cause in India.
- Cooking and gas leaks.
- Smoking and open flames.
- Flammable materials (furniture, foam, false ceilings, cladding).
- Storage of chemicals.
- Hot work (welding) during construction or maintenance.
- Blocked exits.
- Poor housekeeping.
- **Smoke** causes most deaths, more than flames.

**Active fire protection systems:**
- **Portable fire extinguishers:** first-aid fire-fighting; placed in visible, accessible places near exits.
- **Hose reels:** first-aid hoses connected to the wet riser, used by occupants.
- **Hydrant system:** wet riser or downcomer with landing valves; external yard hydrants; fire service inlet for the fire brigade to pump water in.
- **Automatic sprinkler system:** wet pipe (most common), dry pipe (in cold areas), pre-action, deluge; heads open individually by heat.
- **Fire pumps:** main electric pump, diesel standby pump and jockey pump (keeps pressure); dedicated fire water tank.
- **Gas suppression:** clean agent systems (FM-200, Novec, CO₂) for server rooms and electrical panels.
- **Smoke control:** staircase and lift-lobby pressurization, smoke extraction fans.

**Fire extinguishers**

| Type | Suitable fire classes | Not for | Use |
|---|---|---|---|
| Water (stored pressure) | A | Electrical, oils (B) | Paper, wood, cloth |
| Mechanical foam (AFFF) | A, B | Live electrical | Petrol and oil fires |
| ABC dry powder (MAP) | A, B, C, electrical | Sensitive electronics (residue) | Most general areas |
| CO₂ | B, electrical | Open outdoor A fires (no cooling) | Electrical panels, labs |
| Clean agent | A, B, electrical | n/a | Server and control rooms |
| Wet chemical | K/F (cooking oil) | n/a | Commercial kitchens |

**How to use an extinguisher (PASS):** Pull the pin, Aim at the base of the fire, Squeeze the handle, Sweep side to side.

**Detection and alarm:**
- **Detectors:** smoke detectors (optical or photoelectric, ionization), heat detectors (fixed temperature or rate of rise; kitchens), flame detectors (UV/IR), multi-sensor detectors.
- **Manual call points** (break glass) near exits.
- **Panels:** conventional or addressable fire alarm panels.
- **Alerts:** hooters and strobes; public address system for voice evacuation.
- **Integration:** with lifts (homing to ground), HVAC (shut down) and access control (release doors).

**Passive fire protection:**
- Fire-resisting construction (RCC and masonry walls have good fire rating).
- Fire doors (self-closing, rated 1–2 hours).
- Compartmentation.
- Fire stopping at shaft and cable penetrations.
- Fire-rated shafts.
- Protected escape staircases.
- Intumescent coatings on steel.
- Non-combustible cladding.
- Fire dampers in ducts.
- Refuge areas in high-rise buildings.

**Means of escape and exits (NBC 2016 Part 4):**
- At least two separate exits for most buildings, as remote from each other as possible.
- Travel distance limits by occupancy (for example about 30 m in residential buildings, increased when sprinklered).
- Exit width based on occupant load. Occupant load = floor area / area per person (about 12.5 m² per person for residential).
- Capacity per 50 cm unit of exit width depends on the exit type and occupancy (for residential, about 25 persons per unit on stairs, 75 through doors).
- Exits must be clearly marked, illuminated (emergency lighting), unobstructed, and open in the direction of escape.
- Lifts must not be used in a fire, except fire lifts for firefighters.

**National Building Code (NBC 2016, Part 4: Fire and Life Safety):**
- Classifies buildings by occupancy: A residential, B educational, C institutional, D assembly, E business, F mercantile, G industrial, H storage, J hazardous.
- Specifies fire zones, construction types and fire resistance, means of escape, fire-fighting installations by height and occupancy, and requirements for high-rise buildings (15 m and above).
- A fire NOC from the fire service is needed for most buildings above a size or height.

### Solved examples

**Example 9 (occupant load and stair width).** A residential floor has an area of 500 m². Taking 12.5 m² per person and 25 persons per 50 cm unit of stair width, find the occupant load and the stair width needed.
- Occupants = 500 / 12.5 = **40 persons**.
- Units = 40 / 25 = 1.6, so round up to **2 units = 100 cm**.
- The code's minimum stair width for the building type (often larger than this) governs if it is greater; with two staircases the load is shared.

**Example 10 (choosing extinguishers).** For a computer lab: CO₂ or clean agent (no residue, safe on electrical equipment). For a canteen kitchen: wet chemical (cooking oil) plus ABC powder. For a corridor in a hostel: water or ABC. For a DG room: foam and CO₂ (diesel fuel and electrical).

### Key points to remember

- Fire triangle and tetrahedron; classes A, B, C, D, electrical, K.
- Active (extinguishers, hose reels, hydrants, sprinklers, pumps, detection, smoke control) vs passive (compartments, fire doors, fire stopping, protected stairs).
- Extinguisher table; PASS method.
- Detectors: smoke, heat, flame, MCP; addressable panels; integration with lifts and HVAC.
- NBC Part 4: occupancy groups A–J, two exits, travel distance, exit width from occupant load, high-rise from 15 m.

### Important questions

1. Explain the causes of fire in buildings and the classification of fires.
2. Differentiate active and passive fire protection with examples.
3. Explain the types of fire extinguishers and their suitability for different classes of fire.
4. Describe automatic fire detection and alarm systems and sprinkler systems.
5. Explain the requirements for means of escape as per NBC 2016. Calculate exit width for a given floor.

---

## Unit 5: Inspection, Testing, Commissioning, Handover and Maintenance

### 2-mark definitions

- **Inspection:** checking work against drawings, specifications and codes at each stage of construction.
- **Inspection checklist:** a structured list of items to be verified for an activity (such as concealed plumbing before plastering).
- **Testing:** measuring the performance of an installation (pressure test, insulation resistance test) to prove it meets requirements.
- **Commissioning:** the process of starting up systems and verifying that they work together as designed under real operating conditions.
- **T&C (testing and commissioning):** the combined stage at the end of installation, before handover.
- **Snag list (punch list):** a list of defects and incomplete items found during inspection that the contractor must fix before handover.
- **Handover:** formal transfer of the completed building and its services from the contractor to the owner, with documents.
- **O&M manual:** operation and maintenance manual giving the procedures, schedules, spares and contacts for each system.
- **Defect liability period (DLP):** the period after completion (commonly 12 months in Indian contracts) during which the contractor must repair defects at its own cost.
- **Post-occupancy evaluation (POE):** a study of how a building performs after people start using it, including service failures and user satisfaction.

### Core concepts

**Stage-wise inspection checklists (examples):**
- **Before concreting:**
  - Sleeves, inserts, conduits and junction boxes placed as per drawing and fixed firmly.
  - Openings and shafts at the correct location and size.
  - Earthing strips placed.
- **Concealed plumbing (before plaster):**
  - Pipe material and size as specified, correct slope for drains.
  - Joints done correctly; clamps provided.
  - Hydraulic test passed and recorded.
  - Sleeves through walls; no pipe in structural members.
- **Electrical first fix:**
  - Conduit size and route, number of wires per conduit, draw wires.
  - Box heights as per drawing.
  - Separation from water lines; earthing continuity.
- **Second fix:**
  - Fixture installation, alignment and sealing; correct switch and socket ratings.
  - Labelling of DB circuits.
- **Fire:**
  - Pipe supports and pressure test of hydrant and sprinkler lines.
  - Sprinkler head spacing and clearance below ceilings.
  - Detector locations, signage and emergency lights.

**Testing and commissioning (T&C) steps:**
1. Pre-commissioning checks (installation complete, cleaning and flushing of pipes, alignment of pumps, insulation resistance of cables and motors).
2. Individual equipment tests (pump flow and head, DG load test, transformer tests, lift tests).
3. System tests (water pressure at farthest fixture, electrical protection coordination and RCD trip tests, fire alarm cause-and-effect test, sprinkler flow test, pump auto-start on pressure drop).
4. Integrated (interface) testing (fire alarm triggers lift homing, HVAC shutdown, door release, pressurization fans).
5. Performance verification under load and seasonal conditions.
6. Records, certificates and sign-offs by consultants, the client and authorities (fire NOC, lift licence, electrical inspector approval).

**Handover documents:**
- As-built drawings.
- O&M manuals.
- Test and commissioning certificates.
- Warranties and guarantees.
- Approved make lists and data sheets.
- Spare parts and tools.
- Statutory approvals (occupancy certificate, fire NOC, lift and DG approvals).
- Training records for the client's maintenance staff.
- Asset register (often from the BIM model).

**Operation and maintenance:**
- **Types:**
  - **Preventive maintenance:** scheduled cleaning, lubrication, checks; for example monthly pump checks, half-yearly tank cleaning, yearly earth resistance test.
  - **Predictive maintenance:** based on condition monitoring such as thermography and vibration.
  - **Corrective (breakdown) maintenance:** repair after failure.
- **Tools:** computerized maintenance management system (CMMS), building management system (BMS) for monitoring.
- **Safety in maintenance:** permit-to-work, lock-out tag-out, PPE, and confined space procedures for tanks and manholes.

**Post-occupancy failures (common):**
- Leaking concealed pipes and dampness.
- Choked drains (wrong slope, construction debris).
- Low water pressure on top floors.
- Tripping and overheating of circuits (underestimated loads).
- Poor earthing.
- Fire systems not working (pumps on manual, dry risers, expired extinguishers, blocked exits).
- Noisy pumps and ducts.
- Inaccessible shafts.
- **Root causes:** poor coordination, skipped tests, cheap materials, missing documentation and lack of maintenance.

**Defect liability:**
- During the DLP the contractor must rectify defects notified by the owner.
- A part of the payment (retention money, often 5%) or a bank guarantee is held until the DLP ends.
- **Latent defects** (hidden defects found later) may still be claimed under law.
- Under the **Real Estate (Regulation and Development) Act, 2016 (RERA)**, a promoter must fix structural defects and workmanship, quality or service defects reported within **five years** of possession, free of charge (Section 14(3)).

### Solved examples

**Example 11 (retention money).** A plumbing and fire contract is worth ₹80 lakh with 5% retention held until the end of a 12-month DLP. Retention = 0.05 × 80 = **₹4 lakh**. If the contractor does not fix a reported pump defect costing ₹60,000, the owner may get it fixed and deduct the cost, releasing ₹3.4 lakh at the end of the DLP (as per the contract terms).

**Example 12 (preventive maintenance schedule for a pump set).** Daily: check running, leakage and noise. Weekly: run the standby pump. Monthly: check gland packing, coupling, panel indicators and float switches. Half-yearly: check insulation resistance and tighten terminals. Yearly: overhaul or check impeller and bearings, and calibrate pressure gauges.

### Key points to remember

- Inspection checklists at each stage (pre-concreting, concealed plumbing, electrical first fix, second fix, fire).
- T&C: pre-commissioning → equipment → system → integrated → performance → certificates.
- Handover: as-built drawings, O&M manuals, certificates, warranties, approvals, training.
- Maintenance: preventive, predictive, corrective; CMMS, BMS; permit-to-work.
- Post-occupancy failures and root causes; DLP (12 months typical), retention, RERA 5-year liability.

### Important questions

1. Prepare an inspection checklist for concealed plumbing and electrical work before plastering.
2. Explain the testing and commissioning process for building services.
3. What documents are handed over at the completion of a building? Explain their importance.
4. Explain the types of maintenance of building services and the role of O&M manuals.
5. Discuss common post-occupancy service failures, their causes and the defect liability period.

---

## Last-hour checklist

- [ ] MEPF classification; civil engineer's coordination role; service drawings; shafts and ducts; coordination failures table; BIM clash detection; ceiling height check (2.30 m).
- [ ] Water supply line diagram; 135 L/head/day (27,000 L/day); pump power 2.45 kW; pipe 56.4 mm → 65 mm; pipe material table; drainage systems, traps, vents; tests; defects.
- [ ] Loads, demand factor (4.8 kW, 23.2 A, 32 A MCB); MCB curves; RCCB 30 mA; wiring and colour codes; voltage drop 2.4%; earthing types and R = 30.3 Ω; LPS; electrical audit.
- [ ] Fire triangle and classes; active vs passive; extinguisher table and PASS; detection and alarm; sprinklers and hydrants; NBC Part 4 exits (40 persons, 100 cm).
- [ ] Inspection checklists; T&C steps; handover documents; maintenance types; post-occupancy failures; DLP and retention (₹4 lakh); RERA 5 years.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Water Supply and Sanitary Engineering | B. C. Punmia, Ashok K. Jain | Laxmi Publications | [WorldCat](https://search.worldcat.org/search?q=Water+Supply+and+Sanitary+Engineering+Punmia+Jain) |
| 2 | Water Supply and Sanitary Engineering | G. S. Birdie, J. S. Birdie | Dhanpat Rai Publishing | [WorldCat](https://search.worldcat.org/search?q=Water+Supply+and+Sanitary+Engineering+Birdie) |
| 3 | Electrical Installation Work | S. L. Uppal | Khanna Publishers | [WorldCat](https://search.worldcat.org/search?q=Electrical+Installation+Work+Uppal) |
| 4 | Building Services | S. C. Rangwala | Charotar Publishing | [WorldCat](https://search.worldcat.org/search?q=Building+Services+Rangwala) |
| 5 | Construction Safety Management | P. N. Mukherjee | (see library catalogue) | [WorldCat](https://search.worldcat.org/search?q=Construction+Safety+Management+Mukherjee) |
| 6 | National Building Code of India 2016 | Bureau of Indian Standards | BIS | [BIS](https://bis.gov.in/others/national-building-code/) |
| 7 | IS 16700: Criteria for Structural Safety of Tall Concrete Buildings | Bureau of Indian Standards | BIS (2017) | [WorldCat](https://search.worldcat.org/search?q=IS+16700+Criteria+for+Structural+Safety+of+Tall+Concrete+Buildings) |

**Syllabus source:** [AKTU Open Elective-III and IV syllabus for B.Tech 8th semester, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf)

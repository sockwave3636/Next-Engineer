---
program: btech
branches: [all]
semester: 8
code: BOE091
name: BIM for Sustainable Building Planning
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-III, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf
units:
  - Building Information Modelling (BIM) Concepts
  - Sustainable and Climate-Responsive Building Planning
  - Rainwater Harvesting and Water Management
  - Solar Energy and Net-Zero Buildings
  - Vastu in Building Planning and Engineering Ethics
---

# BOE091 BIM for Sustainable Building Planning: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: theory, planning rules and comparison tables.
3. **Solved examples**: short calculations (rainwater harvesting potential, tank size, greywater, heat gain through walls, daylight factor, natural ventilation, rooftop solar sizing, net-zero balance, BIM clash and quantity examples).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (2D drafting to BIM, BIM vs CAD, LOD, nD BIM, MEP coordination, limits and ethics) and Unit 2 (climate zones, orientation, daylighting, ventilation, passive cooling, life-cycle thinking).
- **Afternoon (3 hours):** Unit 3 (rainwater harvesting, recharge structures, greywater, resilience) and Unit 4 (solar PV and thermal, rooftop planning, envelope design, net-zero).
- **Evening (2 hours):** Unit 5 (Vastu: origin, zoning, scientific vs non-scientific, client communication, ethics), then the "Last-hour checklist".
- **In the exam:** draw a simple site plan with north arrow, sun path and wind direction; sketch a rooftop RWH system; show calculations with units.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Building Information Modelling (BIM) Concepts

### 2-mark definitions

- **BIM (Building Information Modelling):** a process of creating and managing a digital, object-based 3D model of a building that holds geometric and non-geometric information (materials, cost, schedule, performance) for use across its whole life cycle.
- **CAD (computer-aided drafting):** using software to make 2D (or 3D) drawings made of lines, arcs and text without intelligent building objects.
- **Parametric object:** a model element (wall, door, beam) defined by parameters and rules, so changing one value updates the element and all related views automatically.
- **LOD (Level of Development):** the degree to which a model element's geometry and information are developed and can be relied upon: LOD 100, 200, 300, 350, 400, 500.
- **Clash detection:** automatic checking of a federated model for physical (hard) clashes, clearance (soft) clashes and workflow (4D) clashes between disciplines.
- **MEP:** mechanical, electrical and plumbing services of a building (HVAC, power, lighting, water supply, drainage, fire fighting).
- **Federated model:** a combined model made by linking separate discipline models (architecture, structure, MEP) for coordination.
- **IFC (Industry Foundation Classes):** an open, neutral data format (ISO 16739) for exchanging BIM data between different software (OpenBIM).
- **CDE (Common Data Environment):** a single shared online source of project information for all stakeholders (ISO 19650).
- **Digital twin:** a live digital replica of a built asset linked to real-time sensor data for operation and maintenance.

### Core concepts

**Evolution from 2D drafting to BIM**

| Stage | Tools | Features |
|---|---|---|
| Manual drafting | Drawing board, T-square | Separate plan, elevation, section drawn by hand |
| 2D CAD (1980s) | AutoCAD | Faster, editable lines, but drawings not linked |
| 3D CAD / modelling | SketchUp, 3ds Max | 3D geometry for visualization, little data |
| BIM (2000s onwards) | Revit, ArchiCAD, Tekla, Bentley AECOsim/OpenBuildings | Intelligent objects + data, all views from one model, coordination |
| BIM + cloud, digital twins | BIM 360/ACC, CDE, IoT | Collaboration, life-cycle management |

**BIM vs CAD**

| Feature | CAD | BIM |
|---|---|---|
| Elements | Lines, arcs, text | Intelligent objects (walls, slabs, ducts) with properties |
| Views | Drawn separately; changes made in each | Generated from one model; change once, updates everywhere |
| Information | Geometry only | Geometry + materials, cost, time, performance |
| Coordination | Manual overlay | Automatic clash detection |
| Quantities | Measured manually | Automatic quantity take-off |
| Collaboration | File exchange | Shared model, CDE, IFC |
| Life cycle | Design/drawing stage | Design, construction, operation (FM) |

**BIM dimensions (nD)**

| Dimension | Adds |
|---|---|
| 3D | Geometry, visualization, coordination |
| 4D | Time: construction sequencing and scheduling |
| 5D | Cost: quantity take-off and estimates |
| 6D | Sustainability/energy analysis (some sources call this facility management) |
| 7D | Facility management and operation (some sources swap 6D and 7D) |

**LOD levels:** 100 (conceptual massing), 200 (approximate geometry), 300 (precise geometry for construction documents), 350 (with interfaces to other systems), 400 (fabrication details), 500 (as-built, verified in the field).

**BIM in conceptual planning:** massing studies, site analysis and orientation, area and FAR checks, early energy and daylight analysis (Insight, Ladybug), design options compared quickly, visualization for clients.

**MEP coordination using BIM:** each discipline models its services; models are federated (Navisworks, Solibri, BIMcollab); clash tests (e.g. ducts vs beams, pipes vs cable trays, clearance for maintenance); clashes are assigned, resolved and re-tested in coordination meetings; outputs: combined services drawings (CSD), builder's work openings, prefabrication.

**Benefits of BIM:** fewer errors and rework, better coordination, accurate quantities and estimates, faster approvals, visualization for clients, sustainability analysis, construction planning (4D), facility management (asset data), better collaboration.

**Limitations of BIM:** high software, hardware and training cost; steep learning curve; interoperability issues between software; legal questions (model ownership, liability); needs process change and standards; small firms may find it costly; model quality depends on input.

**Ethics in BIM use:** accuracy and honesty of model data; respecting intellectual property and licences; data security and privacy of client and building data; not hiding design problems found by clash detection; clear responsibility for model content; competence (do not certify what you cannot verify).

**Standards:** ISO 19650 (information management with BIM), ISO 16739 (IFC), BS EN ISO 19650; India: BIS draft standards, NBC 2016 references; government agencies (CPWD, metro rail, airports) increasingly require BIM.

### Solved examples

**Example 1: Change propagation.** In CAD, moving a door requires editing the plan, two elevations, a section and the door schedule (5 edits). In BIM, moving the door object once updates all views and the schedule automatically: **1 edit, no inconsistency**.

**Example 2: Quantity take-off.** A BIM wall of 230 mm brick, length 12 m, height 3 m, with one 1.0 × 2.1 m door. Volume = 0.23 × (12 × 3 − 1 × 2.1) = 0.23 × 33.9 = **7.80 m³**. BIM schedules compute this automatically for every wall.

**Example 3: Clash report.** A clash test between HVAC ducts and beams reports 120 hard clashes; 40 are duplicates of the same duct run and 20 are tolerance-level (< 10 mm). Real clashes to resolve = **60**. Each resolved clash avoids site rework (e.g. ₹15,000 average) → about ₹9 lakh saved.

### Key points to remember

- BIM = objects + information + one model; CAD = lines.
- nD: 3D geometry, 4D time, 5D cost, 6D/7D sustainability and FM.
- LOD 100–500; clash detection (hard, soft, workflow); federated model; IFC, CDE, ISO 19650.
- Benefits vs limitations; ethics of data, responsibility and honesty.

### Important questions

1. Explain the evolution from 2D drafting to BIM. Compare BIM and CAD.
2. Explain BIM concepts: parametric objects, LOD and BIM dimensions.
3. Explain the use of BIM in conceptual planning and MEP coordination (clash detection).
4. Discuss the benefits, limitations and ethical issues of BIM.
5. Write notes on IFC, CDE and ISO 19650.

---

## Unit 2: Sustainable and Climate-Responsive Building Planning

### 2-mark definitions

- **Sustainable building (green building):** a building planned, built and operated to use less energy, water and materials, reduce waste and pollution, and give healthy indoor conditions over its life cycle.
- **Climate-responsive design:** planning a building to suit the local climate (sun, wind, temperature, humidity) so that comfort is achieved mostly by passive means.
- **Passive design:** design strategies that use orientation, form, shading, natural light and ventilation instead of mechanical systems.
- **Orientation:** the placement of a building and its openings relative to the sun's path and wind directions.
- **Daylighting:** use of natural light to illuminate interiors, reducing artificial lighting.
- **Daylight factor (DF):** the ratio of indoor illuminance to outdoor illuminance under an overcast sky, expressed in %.
- **Stack effect:** natural ventilation driven by warm air rising and leaving through high openings while cooler air enters low openings.
- **Thermal mass:** the ability of heavy materials (brick, stone, concrete) to store heat and delay its transfer (time lag).
- **U-value (thermal transmittance):** heat flow per unit area per degree temperature difference (W/m²·K); lower U means better insulation.
- **Life-cycle thinking (LCA):** considering environmental impacts of a building from raw material extraction, construction and use to demolition and recycling.

### Core concepts

**Principles of sustainable planning:** site selection and protection, compact planning, climate-responsive design, energy efficiency, water efficiency, sustainable materials (local, recycled, low embodied energy), waste management, indoor environmental quality, renewable energy. Rating systems in India: **GRIHA** (TERI and MNRE), **IGBC** (CII), LEED; codes: **ECBC 2017** (commercial), **Eco-Niwas Samhita** (residential energy code), NBC 2016 Part 11 (approach to sustainability).

**Climate zones of India (NBC/ECBC: five zones)**

| Zone | Example cities | Design strategy |
|---|---|---|
| Hot and dry | Jodhpur, Jaisalmer | Compact plans, courtyards, thick walls (thermal mass), small openings, shading, evaporative cooling, light-coloured surfaces |
| Warm and humid | Chennai, Mumbai, Kolkata | Maximum cross ventilation, elongated plans (E–W axis), wide overhangs, raised floors, light materials |
| Composite | Delhi, Lucknow, Kanpur | Mix: shading and thermal mass for summer, sun for winter, ventilation in monsoon; courtyards, adjustable shading |
| Temperate | Bengaluru, Pune | Moderate: ventilation and shading, reasonable openings |
| Cold (cloudy and sunny) | Shimla, Leh, Srinagar | Compact form, insulation, south-facing glazing (direct gain), Trombe walls, airtight construction |

**Orientation (northern hemisphere, India)**
- Longer axis east–west so that the long faces face north and south.
- South face: sun is high in summer (easy to shade with overhangs) and low in winter (welcome solar gain).
- East and west faces get low-angle sun that is hard to shade → minimize openings, use vertical fins, buffer spaces (stairs, toilets, stores) on the west.
- North light is diffuse and glare-free → studios, classrooms, offices.
- Place openings to catch prevailing winds (e.g. south-west monsoon winds in north India).

**Daylighting:** window-to-wall ratio (WWR) about 20–40% depending on climate; light shelves, clerestory windows, skylights with diffusers, light-coloured interiors; avoid glare; target DF 2–5% for classrooms/offices; ECBC daylight requirements.

**Natural ventilation:** cross ventilation (inlet on windward side, outlet on leeward, outlet ≥ inlet area), stack ventilation (high outlets, atria, solar chimneys), wind towers (badgir), courtyards, jaalis; room depth ≤ 5 × ceiling height for cross ventilation.

**Passive cooling techniques:** shading (overhangs, chajjas, fins, louvres, vegetation), insulation and reflective "cool roofs", thermal mass with night ventilation, earth-air tunnels, evaporative cooling (desert coolers, water bodies), courtyards, cavity walls, rat-trap bond brickwork, green roofs, double roofs, landscaping and trees on the west and south.

**Life-cycle thinking:** embodied energy of materials (aluminium very high, cement and steel high, brick moderate, timber/bamboo low); use local, recycled (fly-ash bricks, AAC blocks, recycled aggregates), durable materials; design for disassembly; operational energy usually dominates over 50 years, so efficient design matters most; LCA stages: product → construction → use → end of life.

### Solved examples

**Example 1: Heat gain through a wall.** West wall 50 m², 230 mm brick with U = 2.0 W/m²K, outdoor–indoor ΔT = 10 K. Q = U A ΔT = 2.0 × 50 × 10 = **1,000 W**. With insulation reducing U to 0.5: Q = **250 W**, a 75% cut in cooling load from this wall.

**Example 2: Daylight factor.** Indoor illuminance 300 lux when outdoor overcast illuminance is 10,000 lux. DF = 300/10,000 × 100 = **3%** (good for classrooms).

**Example 3: Wind-driven ventilation.** Opening area 2 m², wind speed 3 m/s, effectiveness 0.5. Q = 0.5 × 2 × 3 = **3 m³/s**. For a 300 m³ hall: air changes per hour = 3 × 3,600/300 = **36 ACH**.

**Example 4: Overhang depth.** To shade a 1.5 m high south window at noon in summer when the sun's altitude is 80°, the overhang depth = height/tan 80° = 1.5/5.67 ≈ **0.26 m**. In winter (altitude 40°), the same overhang shades only 0.26 × tan 40° ≈ 0.22 m of the window, letting the sun in.

### Key points to remember

- India: five climate zones; Lucknow is composite.
- Orient long axis E–W; shade south with overhangs; minimize east/west openings.
- DF 2–5%; WWR 20–40%; cross ventilation needs inlet + larger outlet.
- Passive cooling: shading, cool roofs, thermal mass, earth-air tunnels, courtyards, rat-trap bond.
- Q = U A ΔT; life-cycle thinking and embodied energy; GRIHA, IGBC, ECBC, Eco-Niwas Samhita.

### Important questions

1. What is sustainable building planning? Explain its principles and rating systems.
2. Explain the climate zones of India and design strategies for each.
3. Explain orientation, daylighting and natural ventilation in building planning.
4. Explain passive cooling techniques with sketches.
5. Explain life-cycle thinking and embodied energy in building materials.

---

## Unit 3: Rainwater Harvesting and Water Management

### 2-mark definitions

- **Rainwater harvesting (RWH):** collecting and storing rainwater from roofs and surfaces for direct use or to recharge groundwater.
- **Catchment area:** the surface (roof, paved area) from which rainwater is collected.
- **Runoff coefficient (C):** the fraction of rainfall that actually runs off a surface (RCC roof ≈ 0.8–0.9, paved ≈ 0.6–0.8, lawn ≈ 0.1–0.2).
- **First flush device:** a device that diverts the first few millimetres of rain (which carries dust and dirt) away from the storage.
- **Recharge pit / trench / well:** a structure filled with filter media that lets harvested water percolate into the ground to recharge the aquifer.
- **Greywater:** wastewater from baths, wash basins, washing machines and kitchen sinks (not toilets).
- **Blackwater:** wastewater from toilets containing faecal matter.
- **Rain garden / bioswale:** a planted depression or channel that slows, filters and infiltrates stormwater.
- **Water-resilient building:** a building designed to keep functioning during droughts and floods (storage, recharge, reuse, flood-proof services).
- **Dual plumbing:** separate pipe systems for potable water and recycled (non-potable) water for flushing and gardening.

### Core concepts

**Need:** falling groundwater tables (many Indian cities in critical blocks), urban flooding from paved surfaces, water scarcity; many states and municipal by-laws (including UP) make rooftop RWH mandatory for plots above a size (often 300 m² or more); Jal Shakti Abhiyan "Catch the Rain".

**Components of a rooftop RWH system (draw it):** catchment (roof) → gutters and down-take pipes → mesh/leaf filter → first flush device → filter (sand, gravel, charcoal) → storage tank (sump or overhead) and/or recharge structure → overflow to drain.

**Planning steps:**
1. Collect rainfall data (annual and design storm intensity).
2. Measure catchment areas and runoff coefficients.
3. Compute harvesting potential = A × R × C.
4. Decide use: storage for use (non-potable/potable after treatment) or recharge.
5. Size gutters and pipes, storage tank and recharge structures.
6. Check soil permeability and depth to groundwater (for recharge).
7. Plan maintenance (cleaning before monsoon).

**Recharge structures**

| Structure | When used |
|---|---|
| Recharge pit (1–2 m wide, 2–3 m deep, filled with boulders, gravel, sand) | Small plots, shallow permeable soil |
| Recharge trench | Long narrow areas, larger roofs |
| Recharge shaft/bore | Where top soil is impermeable (clay), aquifer deeper |
| Recharge through existing wells | Abandoned dug wells or tube wells |
| Percolation tanks, check dams | Campus or village scale |

**Site integration:** use slope of the site, collect paved-area runoff in swales, permeable paving, rain gardens, keep recharge pits ≥ 3–5 m from foundations and away from septic tanks, link overflow to municipal drains, protect from contamination.

**Greywater reuse (planning level):** collect greywater separately → screening, settling, filtration (sand/gravel, reed bed/constructed wetland) → disinfection → reuse for toilet flushing, gardening, car washing; dual plumbing; avoid kitchen grease without a grease trap. Can save 30–50% of fresh water demand.

**Water-resilient design:** water-efficient fixtures (low-flow taps 6 L/min, dual-flush toilets 3/6 L), metering, leak detection, storage for dry periods, recharge for groundwater, flood-proofing (raised plinths, non-return valves), STP and reuse, landscaping with native plants.

### Solved examples

**Example 1: Harvesting potential.** Roof 200 m², annual rainfall 900 mm, C = 0.85. Annual harvest = 200 × 0.9 × 0.85 = **153 m³ = 1,53,000 litres**.

**Example 2: Tank sizing for a storm.** Design rainfall 50 mm in a day on the same roof: volume = 200 × 0.05 × 0.85 = **8.5 m³** → provide about 9–10 m³ of storage plus recharge for the overflow.

**Example 3: Days of supply.** A family of 5 uses harvested water only for flushing and gardening: 5 × 45 L = 225 L/day. A 10 m³ tank lasts 10,000/225 ≈ **44 days** without rain.

**Example 4: Greywater.** A family of 5 uses 135 L per person per day (urban norm). Greywater ≈ 60% = 5 × 135 × 0.6 = **405 L/day**; toilet flushing needs about 5 × 30 = 150 L/day, so greywater can fully meet flushing and part of gardening.

**Example 5: Recharge pit.** To absorb 8.5 m³ in one day with soil infiltration 1 m/day, pit base area needed ≈ 8.5/1 ≈ **8.5 m²** (or two pits of 2 m × 2.2 m), with storage in the voids (about 40% void ratio).

### Key points to remember

- Harvest = A × R × C; runoff coefficients: roof 0.8–0.9.
- Components: catchment, gutters, first flush, filter, tank/recharge, overflow.
- Recharge pit, trench, shaft, well; keep away from foundations and septic tanks.
- Greywater ≠ blackwater; dual plumbing; 30–50% savings.
- Resilience: efficient fixtures, storage, recharge, flood-proofing.

### Important questions

1. Explain the need for rainwater harvesting and the components of a rooftop RWH system with a sketch.
2. Explain the planning steps and compute the harvesting potential of a roof.
3. Describe recharge structures and site integration of RWH.
4. Explain greywater reuse at the planning level.
5. How can a building be made water-resilient?

---

## Unit 4: Solar Energy and Net-Zero Buildings

### 2-mark definitions

- **Solar PV:** photovoltaic modules that convert sunlight directly into electricity.
- **Solar thermal:** systems that convert sunlight into heat (solar water heaters, solar cookers, solar air heaters).
- **kWp (kilowatt-peak):** rated power of a PV system under standard test conditions (1,000 W/m², 25 °C).
- **On-grid (grid-tied) system:** PV connected to the utility grid with net metering; no battery; shuts down when the grid fails.
- **Off-grid system:** PV with batteries, independent of the grid.
- **Hybrid system:** PV with batteries and grid connection; supplies backup during outages.
- **Net metering:** billing in which exported solar energy is credited against imported grid energy.
- **Building envelope:** the walls, roof, windows and floor separating the indoor space from outside.
- **SHGC (solar heat gain coefficient):** the fraction of incident solar radiation admitted through a window (lower is better in hot climates).
- **Net-zero energy building (NZEB):** a building that, over a year, produces from on-site renewable sources as much energy as it consumes.

### Core concepts

**Solar PV basics:** module types (mono-PERC 20–22%, polycrystalline 16–18%, bifacial, thin film); system parts: modules, mounting structure, inverter, DC/AC cables, protection (SPD, fuses), earthing, net meter; output in India ≈ **4 kWh per kWp per day** (about 1,400–1,600 kWh per kWp per year); shading reduces output sharply; tilt ≈ latitude facing south.

**Solar thermal basics:** flat-plate collectors (FPC) and evacuated tube collectors (ETC) for water heating (about 100 L/day for a family of 4); thermosiphon circulation; solar air heaters; solar cookers; concentrating collectors for industry.

**On-grid vs off-grid vs hybrid**

| Feature | On-grid | Off-grid | Hybrid |
|---|---|---|---|
| Battery | No | Yes | Yes |
| Grid | Yes (net metering) | No | Yes |
| Backup in outage | No (anti-islanding) | Yes | Yes |
| Cost | Lowest | High (batteries) | Highest |
| Suitable for | Cities with reliable grid | Remote areas | Frequent outages, critical loads |

**Rooftop solar planning:** assess load (units from bills), shade-free roof area (about 10 m² per kWp for crystalline modules), orientation and tilt, structure loads (wind), walkways for cleaning, inverter location, net metering approval from the discom; PM Surya Ghar Muft Bijli Yojana (2024) subsidy for residential rooftops (up to 3 kW); integrate with BIM for shading analysis.

**Building envelope design:** insulate roofs first (largest heat gain in single-storey buildings), cool roofs (high SRI white coatings), walls with low U (AAC blocks, cavity walls, insulation), windows with low SHGC glass, shading devices, airtightness, light colours; ECBC and Eco-Niwas Samhita limits for RETV (residential envelope transmittance value).

**Net-zero energy building approach (in order):**
1. Reduce demand by passive design (orientation, shading, daylight, ventilation).
2. Efficient envelope (insulation, glazing, cool roof).
3. Efficient systems (LED, BEE 5-star appliances, inverter ACs, efficient pumps, BMS).
4. On-site renewables (rooftop PV, solar thermal) to cover the remaining demand.
5. Monitor and verify (energy meters, BIM/digital twin).
- Performance metric: **EPI (energy performance index)** = annual energy/built-up area (kWh/m²·year).
- Examples: Indira Paryavaran Bhawan, New Delhi (net-zero government building); many GRIHA/IGBC net-zero rated buildings.

### Solved examples

**Example 1: Rooftop PV size.** A home uses 300 kWh/month = 10 kWh/day. PV yield 4 kWh/kWp/day → size = 10/4 = 2.5 kWp → choose **3 kWp**. Roof area ≈ 3 × 10 = **30 m²**. Annual generation ≈ 3 × 4 × 365 = **4,380 kWh**.

**Example 2: Payback.** 3 kWp costs about ₹1,80,000, with a central subsidy of ₹78,000 (for 3 kW) → net ₹1,02,000. Savings at ₹7/kWh × 4,380 kWh = ₹30,660/year. Simple payback ≈ **3.3 years**.

**Example 3: Number of modules.** For 3 kWp with 540 Wp modules: 3,000/540 = 5.6 → **6 modules** (3.24 kWp).

**Example 4: Net-zero check.** An office of 2,000 m² has EPI 90 kWh/m²·year → demand 1,80,000 kWh/year. Available roof 800 m² → about 80 kWp → generation ≈ 80 × 1,500 = 1,20,000 kWh. Shortfall 60,000 kWh. To reach net-zero, cut EPI to 60 kWh/m²·year (demand 1,20,000 kWh) through efficiency, or add solar carports.

**Example 5: Solar water heater.** Heating 100 L from 20 °C to 60 °C needs Q = m c ΔT = 100 × 4.186 × 40 = 16,744 kJ ≈ **4.65 kWh/day**, saving about 4.65 kWh of electricity daily (≈ 1,700 kWh/year).

### Key points to remember

- PV yield ≈ 4 kWh/kWp/day in India; area ≈ 10 m²/kWp; tilt ≈ latitude, facing south.
- On-grid (net metering, no backup), off-grid (battery), hybrid (both).
- Envelope: roof insulation, cool roof, low U walls, low SHGC glass, shading.
- NZEB: reduce demand → efficient envelope → efficient systems → renewables → monitor; EPI.

### Important questions

1. Explain solar PV and solar thermal systems used in buildings.
2. Compare on-grid, off-grid and hybrid solar systems.
3. Explain rooftop solar planning with a sizing calculation.
4. Explain building envelope design for energy efficiency.
5. What is a net-zero energy building? Explain the steps to achieve it with an example.

---

## Unit 5: Vastu in Building Planning and Engineering Ethics

### 2-mark definitions

- **Vastu Shastra:** the traditional Indian knowledge of architecture and building planning, dealing with site selection, orientation, layout and proportions.
- **Vastu Purusha Mandala:** a square grid (8 × 8 = 64 or 9 × 9 = 81 squares) representing the site, with deities assigned to zones, used to plan layouts.
- **Brahmasthan:** the central zone of the mandala, traditionally kept open (courtyard).
- **Ishanya (north-east), Agneya (south-east), Nairutya (south-west), Vayavya (north-west):** the four corner directions in Vastu.
- **Zoning:** allocating functions (kitchen, bedrooms, toilets, prayer, storage) to parts of the plan.
- **Scientific principle:** a rule supported by physical reasoning (sunlight, wind, thermal comfort) that can be tested.
- **Non-scientific claim:** a claim (e.g. that a direction brings wealth or luck) that cannot be tested or verified.
- **Engineering ethics:** moral principles guiding engineers: safety, honesty, competence, public welfare, and fairness to clients and society.
- **Informed consent (in design):** explaining options, risks and costs to clients so they can make their own decisions.
- **Professional code of conduct:** rules of bodies such as the Institution of Engineers (India) and the Council of Architecture that engineers and architects must follow.

### Core concepts

**Origin and context of Vastu:** roots in the Vedic period (Sthapatya Veda, part of Atharvaveda tradition), Matsya Purana; texts such as **Mayamata**, **Manasara**, **Samarangana Sutradhara** (King Bhoja) and **Vishwakarma Prakash**; used for temples, towns and houses; developed for the climate and lifestyle of the Indian subcontinent.

**Typical Vastu zoning (house)**

| Zone | Traditional use | Possible climatic reasoning |
|---|---|---|
| North-east (Ishanya) | Prayer, water source, open space, entrance | Morning sun (healthy, mild) enters; light, open NE lets breezes and diffuse light in |
| South-east (Agneya) | Kitchen | Morning sun dries and disinfects the kitchen; prevailing winds (in many regions) carry smoke away from living areas |
| South-west (Nairutya) | Master bedroom, heavy storage, thick walls | Shields the house from harsh afternoon sun in summer; heavy mass on SW reduces heat gain |
| North-west (Vayavya) | Guest room, storage, toilets | Winds from NW in some seasons; less critical zone |
| Centre (Brahmasthan) | Open courtyard | Stack ventilation, daylight, social space |
| North | Living, study | Glare-free north light |

**Scientific vs non-scientific practices**
- **Scientific (testable, climate-based):** orientation to the sun path; openings for cross ventilation; courtyards; heavy walls on the west/south-west in hot climates; kitchen placement for light and ventilation; sloping site drainage away from the house; open spaces around the building.
- **Non-scientific (not verifiable):** claims that a door direction brings wealth or illness; "cosmic energy" claims; rules that ignore the actual site climate (e.g. applying northern-hemisphere rules everywhere); demolishing or altering structures to "correct Vastu dosha".
- **Approach for engineers:** respect cultural preferences, explain the climatic logic where it exists, and never compromise structural safety, building codes (NBC, local by-laws), fire safety, accessibility or sustainability for Vastu.

**Client communication:** listen to the client's beliefs and needs; present options with their effects on light, ventilation, cost, safety and code compliance; use BIM visualizations and sun-path/daylight simulations to show impacts; document decisions in writing; be honest about what is evidence-based.

**Engineering ethics in building planning**
- **Safety first:** structural safety, fire safety (NBC Part 4), earthquake codes (IS 1893, IS 13920); never approve unsafe designs.
- **Honesty and transparency:** no false claims (including about Vastu or "green" features — avoid greenwashing); disclose conflicts of interest.
- **Competence:** work only within your expertise; keep learning (BIM, sustainability codes).
- **Responsibility to society and environment:** sustainable materials, water and energy conservation, accessibility (Harmonised Guidelines for universal accessibility).
- **Confidentiality and data ethics:** protect client and BIM data.
- **Fair dealing:** fair fees, no bribes, follow procurement rules.
- Codes: Institution of Engineers (India) Code of Ethics; Council of Architecture (Professional Conduct) Regulations.

### Solved examples

**Example 1: Reconciling Vastu with climate.** A client in Lucknow (composite climate) wants the kitchen in the south-east. Check: SE kitchen gets morning sun, which is fine; provide an exhaust on the leeward side and a chajja to shade afternoon sun. **Accept** (consistent with climate). The client also wants a large glazed window on the west for the living room to "balance energy" — explain that it would add heavy afternoon heat gain; propose a smaller window with vertical fins or a north-facing window instead.

**Example 2: Ethics case.** A client asks to shift a column to "correct Vastu", which would make a beam span exceed safe limits. The engineer must **refuse the unsafe change**, explain why with calculations, and offer safe alternatives (e.g. architectural changes in room use).

**Example 3: Courtyard benefit.** A 6 m × 6 m central courtyard in a 15 m × 15 m house allows daylight into all rooms and stack ventilation; this supports both the Brahmasthan tradition and passive design. Daylight factor in rooms facing the courtyard can rise to 2–3%.

### Key points to remember

- Vastu texts: Mayamata, Manasara, Samarangana Sutradhara, Vishwakarma Prakash; Vastu Purusha Mandala (64/81 grid).
- Zones: NE (open, water, prayer), SE (kitchen), SW (master bedroom, heavy), NW (guests, storage), centre open.
- Many rules have climatic logic; claims of luck/wealth are not verifiable.
- Ethics: safety, honesty, competence, sustainability, confidentiality, fair dealing; never compromise codes.

### Important questions

1. Explain the origin and context of Vastu Shastra and the Vastu Purusha Mandala.
2. Explain Vastu zoning of a house and the possible climatic reasons behind it.
3. Distinguish between scientific and non-scientific practices in Vastu with examples.
4. How should an engineer communicate with clients who want Vastu-based planning?
5. Explain engineering ethics in building planning.

---

## Last-hour checklist

- [ ] 2D → CAD → BIM table; BIM vs CAD; nD (3D–7D); LOD 100–500; conceptual planning; MEP coordination and clash detection (60 real clashes); benefits, limits, ethics; IFC, CDE, ISO 19650; wall volume 7.80 m³.
- [ ] Sustainability principles; GRIHA, IGBC, ECBC, Eco-Niwas Samhita; five climate zones and strategies; orientation; daylight (DF 3%); ventilation (36 ACH); passive cooling list; Q = UAΔT (1,000 W → 250 W); overhang 0.26 m; life-cycle thinking.
- [ ] RWH components (sketch); A × R × C (153 m³); storm tank 8.5 m³; recharge structures; greywater 405 L/day; resilience.
- [ ] PV vs thermal; on/off/hybrid; rooftop sizing (3 kWp, 30 m², 4,380 kWh, payback 3.3 yr); envelope; NZEB steps and EPI; solar water heater 4.65 kWh/day.
- [ ] Vastu origin and texts; mandala; zoning table; scientific vs non-scientific; client communication; ethics cases.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | BIM Handbook: A Guide to Building Information Modeling | C. M. Eastman and others | Wiley | [WorldCat](https://search.worldcat.org/search?q=BIM+Handbook+Eastman) |
| 2 | BIM Fundamentals and Methods | S. Garde | (as listed in syllabus) | [WorldCat](https://search.worldcat.org/search?q=BIM+Fundamentals+and+Methods+Garde) |
| 3 | BIM: Digital Transformation for the AEC Industry | B. S. Dhillon | (as listed in syllabus) | [WorldCat](https://search.worldcat.org/search?q=BIM+Digital+Transformation+AEC+Industry) |
| 4 | Building Information Modeling: A Practical Approach | H. S. Shera, S. S. Rathore | (as listed in syllabus) | [WorldCat](https://search.worldcat.org/search?q=Building+Information+Modeling+A+Practical+Approach) |
| 5 | Sustainable Construction: Green Building Design and Delivery | Charles J. Kibert | Wiley | [WorldCat](https://search.worldcat.org/search?q=Sustainable+Construction+Green+Building+Design+and+Delivery+Kibert) |
| 6 | Green Building Illustrated | Francis D. K. Ching, Ian M. Shapiro | Wiley | [WorldCat](https://search.worldcat.org/search?q=Green+Building+Illustrated+Ching) |
| 7 | Sustainable Construction: Principles and Practice | S. Singla | (as listed in syllabus) | [WorldCat](https://search.worldcat.org/search?q=Sustainable+Construction+Principles+and+Practice+Singla) |
| 8 | Green Building and Sustainable Engineering | R. Kumar | (as listed in syllabus) | [WorldCat](https://search.worldcat.org/search?q=Green+Building+and+Sustainable+Engineering) |
| 9 | Climate Responsive Architecture: A Design Handbook for Energy Efficient Buildings | Arvind Krishan and others | Tata McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Climate+Responsive+Architecture+Krishan) |
| 10 | Passive Solar Design and Construction | C. Day | (as listed in syllabus) | [WorldCat](https://search.worldcat.org/search?q=Passive+Solar+Design+and+Construction) |
| 11 | Renewable Energy: Power for a Sustainable Future | S. Peake (ed.) | Oxford University Press | [WorldCat](https://search.worldcat.org/search?q=Renewable+Energy+Power+for+a+Sustainable+Future) |
| 12 | Solar Energy: Principles of Thermal Collection and Storage | S. P. Sukhatme, J. K. Nayak | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Solar+Energy+Principles+of+Thermal+Collection+and+Storage+Sukhatme) |
| 13 | Rainwater Harvesting and Management | R. G. Manickam | (as listed in syllabus) | [WorldCat](https://search.worldcat.org/search?q=Rainwater+Harvesting+and+Management) |
| 14 | Vastu Shastra for Everyone | B. Niranjan Babu | (as listed in syllabus) | [WorldCat](https://search.worldcat.org/search?q=Vastu+Shastra+Niranjan+Babu) |

Where the syllabus did not name a publisher, the table says "as listed in syllabus"; check the edition with your library.

**Syllabus source:** [AKTU Open Elective-III and IV syllabus for B.Tech 8th semester, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf)

---
program: btech
branches: [cse, it, cse-aiml, cse-ds, aids]
semester: 1
code: AAS102D
name: Applied Chemistry for Smart Systems
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 1st year, CSE stream, 2026-27 onwards
syllabusSource: https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf
units:
  - Chemistry of Hardware Materials for Computing and Electronic Devices
  - Energy Storage and Power Chemistry
  - Sensors and Chemical Detection
  - Nanomaterials and Functional Materials for Smart Systems
  - Green Chemistry and E-waste Management
---

# AAS102D Applied Chemistry for Smart Systems: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. The same course is taught as AAS202D in semester 2 for the other group of students. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: theory, reactions, diagrams described in words, and comparison tables.
3. **Solved examples**: the numericals examiners set (Nernst equation, electroplating by Faraday's law, corrosion rate, battery pack and C-rate, theoretical capacity, fuel cell energy, supercapacitor energy, sensor response, atom economy).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (silicon, doping, PCB and solder materials, dielectrics, corrosion of electronic parts) and Unit 2 (electrochemistry, batteries, Li-ion, supercapacitors, fuel cells, energy harvesting).
- **Afternoon (3 hours):** Unit 3 (chemical sensors, gas sensors, biosensors, e-nose) and Unit 4 (CNTs, graphene, quantum dots, smart coatings, chromic materials, shape-memory polymers, flexible electronics).
- **Evening (2 hours):** Unit 5 (twelve principles of green chemistry, e-waste, recycling, RoHS and WEEE, circular economy), then the "Last-hour checklist".
- **In the exam:** write the electrode reactions for every cell (Li-ion, fuel cell, lead-acid), draw a labelled Li-ion cell, a biosensor block diagram and a lotus-effect water drop. Each electrochemistry numerical is an easy 7 marks.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit. Internal assessment carries another 30 marks.

**Constants:** Faraday constant F = 96,485 C/mol; R = 8.314 J/mol·K; at 25 °C, 2.303RT/F = 0.0591 V.

---

## Unit 1: Chemistry of Hardware Materials for Computing and Electronic Devices

### 2-mark definitions

- **Semiconductor:** a material whose conductivity lies between conductors and insulators and rises with temperature; for example silicon (band gap 1.12 eV) and germanium (0.67 eV).
- **Doping:** adding a tiny, controlled amount of impurity to a pure semiconductor to change its conductivity.
- **n-type and p-type silicon:** n-type is doped with group 15 atoms (P, As), giving extra electrons; p-type is doped with group 13 atoms (B, Ga), giving holes.
- **Electronic-grade silicon:** silicon of about 99.9999999% purity ("nine nines") used to make chips.
- **PCB (printed circuit board):** an insulating board (substrate) with copper tracks that connect electronic components.
- **FR-4:** the most common PCB substrate: woven glass fibre in a flame-retardant epoxy resin.
- **Solder:** a low-melting alloy used to join components to a PCB; lead-free SAC alloy (Sn-Ag-Cu) is now standard.
- **Dielectric:** an electrical insulator that can be polarized by an electric field; used in capacitors and as gate insulators (SiO₂, HfO₂, polyimide).
- **Dielectric constant (k):** the ratio of a material's permittivity to that of vacuum; high-k materials store more charge.
- **Corrosion:** the gradual destruction of a metal by chemical or electrochemical reaction with its environment.

### Core concepts

**Materials inside a computer or phone**

| Part | Materials |
|---|---|
| Chips (processors, memory) | Silicon, dopants (B, P, As), SiO₂ and HfO₂ dielectrics, copper interconnects, tungsten plugs |
| PCB | FR-4 epoxy-glass, copper foil, solder mask (epoxy), gold or nickel-gold plated pads |
| Joints | Solder (SAC305: 96.5% Sn, 3% Ag, 0.5% Cu) |
| Display | Indium tin oxide (ITO) transparent conductor, liquid crystals or OLED organic layers, glass |
| Battery | Li-ion (LiCoO₂ or LFP cathode, graphite anode) |
| Casing | Aluminium alloys, polycarbonate and ABS plastics |
| Magnets and speakers | Neodymium-iron-boron (rare earth) |

**Silicon from sand to wafer:**
1. Quartz (SiO₂) is reduced with carbon in an arc furnace: SiO₂ + 2C → Si + 2CO (metallurgical-grade, about 98%).
2. Purification by the **Siemens process**: Si + 3HCl → SiHCl₃ + H₂. Trichlorosilane is distilled, then decomposed on hot rods: SiHCl₃ + H₂ → Si + 3HCl (polysilicon).
3. Single crystal grown by the **Czochralski method** (a seed crystal pulled slowly from molten Si).
4. The crystal is sliced into wafers and polished.

**Doping chemistry:**
- **Diffusion:** wafers heated with dopant gases (POCl₃, B₂H₆).
- **Ion implantation:** accelerated dopant ions fired into Si, followed by annealing.
- Typical doping is 1 atom in 10⁶ to 10⁸ silicon atoms, yet it changes conductivity by many orders of magnitude.

**Conductors:**
- **Copper:** low resistivity; replaced aluminium in chip wiring in the late 1990s (damascene process with barrier layers of Ta/TaN to stop Cu diffusing into Si).
- **Aluminium:** older chip wiring.
- **Gold:** bond wires and contacts; does not corrode.
- **Silver:** conductive inks for printed electronics.

**PCB materials:**
- **Substrates:** FR-4 (common, cheap), polyimide (flexible PCBs), PTFE/Teflon (high-frequency RF boards), ceramic (high heat).
- **Copper:** foil laminated on the board, patterned by photolithography and etching (FeCl₃ or ammonia-based etchants).
- **Solder mask:** green epoxy layer.
- **Surface finishes:** HASL, ENIG (electroless nickel immersion gold), OSP.

**Soldering materials:**
- **Tin-lead (63Sn-37Pb):** melts at 183 °C (eutectic); banned in most consumer electronics by RoHS because lead is toxic.
- **Lead-free SAC alloys:** melt at about 217–220 °C.
- **Flux:** removes oxides and helps wetting (rosin, water-soluble, no-clean).
- **Problems:** tin whiskers (thin tin growths that can short circuits), cold joints, voids.

**Insulating and dielectric materials:**
- **Inorganic:** SiO₂ (k = 3.9), Si₃N₄, HfO₂ (high-k, about 25, used in modern transistor gates), Al₂O₃, and low-k dielectrics (porous SiO₂, SiCOH) between interconnects to reduce delay.
- **Polymers:** epoxy, polyimide, PTFE, PVC (cable insulation).
- **Ceramics:** barium titanate in multilayer ceramic capacitors (very high k).
- **Desired properties:** high dielectric strength, low loss, thermal stability, low moisture absorption.

**Reliability and corrosion of electronic components:**
- **Corrosion types:**
  - **Galvanic:** two different metals in contact with moisture (for example gold on copper).
  - **Electrochemical migration (dendrite growth):** metal ions migrate between closely spaced conductors under bias and humidity, causing shorts.
  - **Creep corrosion:** sulphur-rich environments.
  - **Pitting:** at defects.
  - **Fretting:** at connectors.
- **Causes:** humidity, ionic contamination (flux residues, chlorides), sulphur and pollutants, temperature cycling.
- **Prevention:**
  - Conformal coatings (acrylic, silicone, parylene).
  - Cleaning flux residues.
  - Noble-metal plating (gold).
  - Hermetic sealing.
  - Controlled humidity.
  - Corrosion inhibitors.
  - Design spacing.
- **Electrochemical theory of corrosion:**
  - Anode: M → Mⁿ⁺ + ne⁻ (oxidation).
  - Cathode: O₂ + 2H₂O + 4e⁻ → 4OH⁻ (neutral or basic) or 2H⁺ + 2e⁻ → H₂ (acidic).
  - For iron, Fe²⁺ + 2OH⁻ → Fe(OH)₂, which oxidizes to rust (Fe₂O₃·xH₂O).

### Solved examples

**Example 1 (corrosion rate).** An iron coupon of area 10 cm² loses 100 mg in 720 hours (density 7.87 g/cm³). Find the corrosion rate in mm/year using CR = 87.6 W / (D A t), with W in mg, D in g/cm³, A in cm² and t in hours.
- CR = 87.6 × 100 / (7.87 × 10 × 720) = **0.155 mm/year**.

**Example 2 (electroplating copper on a PCB).** How much copper is deposited by 2 A for 1 hour (Cu²⁺ + 2e⁻ → Cu, M = 63.55 g/mol)?
- m = I t M / (n F) = 2 × 3,600 × 63.55 / (2 × 96,485) = **2.37 g**.

**Example 3 (silicon in sand).** Find the mass percentage of Si in SiO₂ (Si = 28.09, O = 16.00).
- 28.09 / (28.09 + 32.00) = **46.7%**. So about 2.1 kg of pure SiO₂ is needed per kg of Si, before purification losses.

### Key points to remember

- Device materials table; silicon: carbon reduction → Siemens process → Czochralski.
- Doping: n-type (P, As), p-type (B); diffusion and ion implantation.
- PCB: FR-4, polyimide, PTFE; copper etching; ENIG finish. Solder: SAC lead-free (217 °C) vs Sn-Pb (183 °C).
- Dielectrics: SiO₂ (3.9), HfO₂ (high-k), low-k between wires, BaTiO₃ in capacitors.
- Corrosion in electronics: galvanic, electrochemical migration, creep, fretting; prevention by coatings, cleaning, gold, sealing.
- m = ItM/nF; CR = 87.6W/DAt.

### Important questions

1. Discuss the materials used in computers and electronic devices and their chemical properties.
2. Explain the production of electronic-grade silicon and the doping of semiconductors.
3. Describe PCB materials and soldering materials. Why is lead-free solder used?
4. What are dielectric materials? Explain their properties and uses in electronics.
5. Explain the corrosion of electronic components, its mechanism and methods of prevention.

---

## Unit 2: Energy Storage and Power Chemistry

### 2-mark definitions

- **Electrochemical cell:** a device that converts chemical energy into electrical energy (galvanic cell) or uses electrical energy to drive a chemical reaction (electrolytic cell).
- **Electrode potential:** the potential developed when a metal is in contact with its ion solution; the standard value E° is measured against the standard hydrogen electrode (SHE, 0 V).
- **Nernst equation:** E = E° − (0.0591/n) log Q at 25 °C, relating cell potential to concentrations.
- **Primary battery:** a non-rechargeable cell (alkaline Zn-MnO₂, lithium coin cell).
- **Secondary battery:** a rechargeable cell (lead-acid, Ni-MH, Li-ion).
- **Lithium-ion battery:** a rechargeable battery in which Li⁺ ions move between a graphite anode and a lithium metal oxide cathode through an electrolyte ("rocking-chair" battery).
- **Capacity:** the charge a battery can deliver, in ampere-hours (Ah) or mAh.
- **C-rate:** the charge or discharge current relative to capacity; 1C empties a full battery in 1 hour.
- **Supercapacitor:** an electrochemical capacitor that stores energy in an electric double layer (or by fast surface redox), giving very high power and long cycle life.
- **Fuel cell:** a device that continuously converts the chemical energy of a fuel (H₂) and an oxidant (O₂) directly into electricity, as long as fuel is supplied.

### Core concepts

**Electrochemistry basics:**
- **Galvanic cell (Daniell cell):** Zn | Zn²⁺ || Cu²⁺ | Cu.
  - Anode (oxidation): Zn → Zn²⁺ + 2e⁻.
  - Cathode (reduction): Cu²⁺ + 2e⁻ → Cu.
  - E°cell = E°cathode − E°anode = 0.34 − (−0.76) = 1.10 V.
- **Gibbs energy:** ΔG = −nFE, so a positive E means a spontaneous reaction.

**Primary vs secondary batteries**

| Battery | Type | Anode / cathode | Voltage | Uses |
|---|---|---|---|---|
| Alkaline | Primary | Zn / MnO₂ (KOH electrolyte) | 1.5 V | Remotes, clocks |
| Lithium coin (Li-MnO₂) | Primary | Li / MnO₂ | 3 V | Motherboard CMOS battery, watches |
| Lead-acid | Secondary | Pb / PbO₂ (H₂SO₄) | 2 V per cell | UPS, vehicles (starter) |
| Ni-MH | Secondary | Metal hydride / NiOOH | 1.2 V | Older rechargeable AA cells |
| Li-ion | Secondary | Graphite / LiCoO₂, NMC or LiFePO₄ | 3.6–3.7 V (LFP 3.2 V) | Phones, laptops, EVs |

**Lead-acid reactions (discharge):**
- Anode: Pb + SO₄²⁻ → PbSO₄ + 2e⁻.
- Cathode: PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O.
- On charging, these reverse; sulphuric acid density falls on discharge.

**Lithium-ion battery:**
- **Construction:**
  - Anode: graphite on copper foil.
  - Cathode: LiCoO₂, NMC (LiNiMnCoO₂) or LFP (LiFePO₄) on aluminium foil.
  - Electrolyte: LiPF₆ in organic carbonates.
  - Separator: porous polyethylene or polypropylene.
- **Discharge reactions:**
  - Anode: LiC₆ → C₆ + Li⁺ + e⁻.
  - Cathode: CoO₂ + Li⁺ + e⁻ → LiCoO₂.
  - Overall: LiC₆ + CoO₂ → C₆ + LiCoO₂ (about 3.7 V).
- **On charging:** Li⁺ intercalates back into graphite.
- **SEI (solid electrolyte interphase):** a protective layer formed on the anode in the first cycles.
- **Advantages:** high energy density (150–270 Wh/kg), no memory effect, low self-discharge, long cycle life.
- **Limitations:** cost, thermal runaway risk, use of cobalt.

**Battery safety and charging:**
- **Charging method:** constant current (CC) up to 4.2 V, then constant voltage (CV) until the current tapers off.
- **Battery management system (BMS):** protects against over-charge, over-discharge, over-current and over-temperature, and balances cells.
- **Thermal runaway:** an internal short or overheating starts exothermic reactions that heat the cell further, causing fire.
- **Prevention:** BMS, shutdown separators, flame-retardant electrolytes, safer chemistries (LFP), and avoiding physical damage and extreme temperatures.
- **Next-generation:** solid-state batteries and sodium-ion batteries.

**Supercapacitors:**
- **Types:**
  - **EDLC (electric double-layer capacitor):** high-surface-area activated carbon electrodes store charge physically in the double layer.
  - **Pseudocapacitors:** RuO₂ or MnO₂ with fast surface redox.
  - **Hybrid:** one battery-type and one capacitor-type electrode.
- **Energy:** E = ½CV².
- **Comparison with batteries:** much higher power and cycle life (over 100,000 cycles), but lower energy density (about 5–10 Wh/kg).
- **Uses:** regenerative braking, memory backup, camera flashes, smoothing power in IoT devices.

**Fuel cells:**
- **H₂-O₂ fuel cell (PEMFC with acid electrolyte):**
  - Anode: H₂ → 2H⁺ + 2e⁻.
  - Cathode: ½O₂ + 2H⁺ + 2e⁻ → H₂O.
  - Overall: H₂ + ½O₂ → H₂O, E° = 1.23 V.
- **Types:** PEMFC (Nafion membrane, about 80 °C, vehicles), alkaline (space missions), phosphoric acid, molten carbonate, solid oxide (high temperature).
- **Advantages:** high efficiency, only water as product, silent, continuous supply.
- **Limitations:** hydrogen storage and cost, platinum catalyst.

**Energy harvesting materials:** devices that collect small amounts of ambient energy for sensors and wearables.
- **Photovoltaic:** Si solar cells, perovskites, organic PV.
- **Thermoelectric:** Bi₂Te₃, using the Seebeck effect from temperature differences.
- **Piezoelectric:** PZT, ZnO, PVDF, which produce voltage from pressure or vibration.
- **Triboelectric nanogenerators:** friction between different materials.
- **RF harvesting:** using antennas.

**Wireless charging:**
- **Inductive charging (Qi standard):** a coil in the pad creates an alternating magnetic field, which induces current in a receiver coil in the phone (Faraday's law). This is rectified and fed to the battery charger.
- **Materials:** copper (Litz) coils, ferrite shielding sheets to guide flux.
- **Issues:** alignment, heat, efficiency (about 70–80%).
- **Resonant charging** allows larger distances.

### Solved examples

**Example 4 (Nernst equation).** For the Daniell cell (E° = 1.10 V) with [Zn²⁺] = 0.1 M and [Cu²⁺] = 1 M at 25 °C, find E.
- E = 1.10 − (0.0591/2) log ([Zn²⁺]/[Cu²⁺]) = 1.10 − 0.02955 × log 0.1 = 1.10 + 0.0296 = **1.13 V**.

**Example 5 (battery pack).** A laptop pack uses 3.7 V, 3,000 mAh cells arranged 4S2P (4 in series, 2 parallel strings). Find the pack voltage, capacity and energy, and the time to discharge at 1.5 A per cell.
- One cell: 3.7 × 3 = 11.1 Wh.
- Pack voltage = 4 × 3.7 = **14.8 V**; capacity = 2 × 3 = **6 Ah**; energy = 14.8 × 6 = **88.8 Wh**.
- 1.5 A on a 3 Ah cell is 0.5C, so discharge takes about **2 hours**.

**Example 6 (theoretical capacity).** Find the theoretical specific capacity of LiCoO₂ (M = 97.87 g/mol, one electron) and graphite LiC₆ (per 72.06 g of C₆).
- Q = nF / (3.6 M) mAh/g = 96,485 / (3.6 × 97.87) = **274 mAh/g** for LiCoO₂ (only about half is usable in practice).
- Graphite: 96,485 / (3.6 × 72.06) = **372 mAh/g**.

**Example 7 (fuel cell energy).** Find ΔG for an H₂-O₂ fuel cell with E° = 1.23 V, and its maximum efficiency if ΔH = −285.8 kJ/mol.
- ΔG = −nFE = −2 × 96,485 × 1.23 = **−237.4 kJ/mol**.
- Maximum efficiency = ΔG/ΔH = 237.4 / 285.8 ≈ **83%** (much higher than a heat engine's Carnot limit).

**Example 8 (supercapacitor).** A 100 F, 2.7 V supercapacitor stores E = ½ × 100 × 2.7² = **364.5 J ≈ 0.10 Wh**.

### Key points to remember

- ΔG = −nFE; Nernst E = E° − (0.0591/n) log Q.
- Battery table: alkaline, Li coin, lead-acid, Ni-MH, Li-ion.
- Li-ion reactions (LiC₆ + CoO₂ → C₆ + LiCoO₂), parts, SEI; CC-CV charging; BMS; thermal runaway.
- Supercapacitors: EDLC, pseudo, hybrid; E = ½CV²; high power, low energy.
- Fuel cell reactions (1.23 V), types, advantages.
- Energy harvesting: PV, thermoelectric, piezoelectric, triboelectric, RF; Qi inductive charging.

### Important questions

1. Explain electrochemical cells, electrode potential and the Nernst equation. Solve a numerical.
2. Distinguish primary and secondary batteries with examples. Explain the lead-acid battery with reactions.
3. Explain the construction, working and reactions of a lithium-ion battery. Discuss battery safety and charging.
4. What are supercapacitors? Compare them with batteries and capacitors.
5. Explain the working of an H₂-O₂ fuel cell. Write notes on energy harvesting materials and wireless charging.

---

## Unit 3: Sensors and Chemical Detection

### 2-mark definitions

- **Chemical sensor:** a device that converts chemical information (concentration of a substance) into a measurable signal; it has a receptor (recognition layer) and a transducer.
- **Receptor and transducer:** the receptor selectively interacts with the analyte; the transducer converts that interaction into an electrical or optical signal.
- **Sensitivity:** the change in sensor output per unit change in analyte concentration.
- **Selectivity:** the ability of a sensor to respond only to the target analyte in the presence of others.
- **Limit of detection (LOD):** the lowest concentration a sensor can reliably detect.
- **Potentiometric sensor:** measures the potential (voltage) of an electrode at almost zero current, which depends on ion concentration (pH electrode, ion-selective electrode).
- **Amperometric sensor:** measures current at a fixed potential, proportional to the concentration of an electroactive species (glucose sensor, oxygen sensor).
- **Biosensor:** a sensor that uses a biological recognition element (enzyme, antibody, DNA) with a transducer.
- **Electronic nose (e-nose):** an array of partly selective gas sensors with pattern recognition that identifies odours or gas mixtures.
- **RFID:** radio frequency identification; tags with an antenna and chip that communicate by radio waves; chemically functionalized tags can act as wireless sensors.

### Core concepts

**General structure of a chemical sensor:** analyte → receptor or recognition layer (selective chemistry) → transducer (electrochemical, optical, mass, thermal) → signal processing → output.

**Electrochemical sensors:**
- **Potentiometric:**
  - Nernst-type response: E = constant + (0.0591/n) log a at 25 °C, so about **59 mV per decade** of concentration for a single-charge ion.
  - **pH glass electrode:** a thin glass membrane develops a potential depending on H⁺ activity.
  - **Ion-selective electrodes:** for F⁻, Na⁺, K⁺, NO₃⁻.
  - **ISFET:** ion-sensitive field-effect transistor, a chip-based pH sensor.
- **Amperometric:**
  - A fixed potential drives oxidation or reduction of the analyte; current ∝ concentration.
  - **Clark oxygen electrode:** O₂ reduced at a Pt cathode behind a membrane.
  - Glucose sensors; CO and H₂S electrochemical gas sensors (used in safety detectors).
- **Conductometric:** measures change in conductance.

**Gas sensors**

| Type | Principle | Examples |
|---|---|---|
| Metal oxide semiconductor (MOX) | Gas adsorbs on a heated oxide (SnO₂, ZnO, WO₃) and changes its resistance; reducing gases lower the resistance of n-type SnO₂ by reacting with adsorbed O⁻ | LPG, CO, alcohol, smoke detectors (MQ-series modules) |
| Optical (NDIR) | Gas absorbs specific infrared wavelengths (CO₂ at 4.26 µm) | CO₂ monitors, HVAC |
| MEMS-based | Micro-heaters and tiny sensing films on silicon; low power, small | Phone and wearable air-quality sensors |
| Electrochemical | Redox current (amperometric) | CO, O₂, NO₂ safety sensors |
| Catalytic (pellistor) | Combustion of gas on a hot catalyst bead raises its temperature and resistance | Methane in mines |

**MOX mechanism (SnO₂):**
1. In air, O₂ adsorbs and captures electrons: O₂ + e⁻ → O₂⁻; at 300–400 °C it forms O⁻. This creates a depletion layer, so resistance is high.
2. A reducing gas such as CO reacts with the adsorbed oxygen: CO + O⁻ → CO₂ + e⁻.
3. The electrons return to the conduction band, so resistance falls.
4. **Response:** S = R_air/R_gas.

**Biosensors:**
- **Components:** bio-recognition element, transducer, electronics and display.
- **Enzyme biosensor (glucose):**
  - Glucose oxidase catalyses glucose + O₂ → gluconic acid + H₂O₂.
  - H₂O₂ is oxidized at the electrode (H₂O₂ → O₂ + 2H⁺ + 2e⁻), giving a current proportional to glucose.
  - Modern strips use mediators (ferrocene).
  - Used in glucometers and continuous glucose monitors.
- **Immunosensor:** an antibody binds a specific antigen (as in rapid COVID-19 antigen tests and pregnancy tests using gold nanoparticle labels).
- **DNA sensor (genosensor):** a single-strand DNA probe hybridizes with the complementary target sequence, which is detected electrochemically or optically.
- **Generations:** first (O₂ or H₂O₂ detection), second (mediators), third (direct electron transfer).

**RFID tag chemistry:**
- Tags have an antenna (copper, aluminium, or printed silver ink on PET or paper), a silicon chip, and a substrate.
- Passive tags get power from the reader's field.
- **Chemical sensing RFID:** a sensing layer (humidity-absorbing polymer, gas-sensitive film) changes the antenna's resonance, so the reader detects the change. Used for food freshness, cold-chain monitoring and smart packaging.

**Environmental chemical detection:**
- Air quality: PM2.5, NO₂, SO₂, O₃, CO, VOCs (India's National Air Quality Index uses eight pollutants).
- Water quality: pH, dissolved oxygen, heavy metals by electrochemical stripping, nitrate, fluoride, turbidity.
- Soil: moisture, NPK.
- IoT sensor networks send data to the cloud for real-time monitoring.

**Electronic nose:**
- An array of cross-sensitive sensors (MOX, conducting polymers, QCM) produces a "fingerprint" pattern.
- Pattern recognition (PCA, neural networks) identifies the odour, like the mammalian nose.
- **Applications:** food quality and spoilage, disease diagnosis from breath, explosive detection, environmental monitoring, perfume industry.

### Solved examples

**Example 9 (pH electrode).** A pH electrode with ideal Nernst slope (59.16 mV per pH at 25 °C) moves from a buffer of pH 4 to pH 7. Change in potential = 3 × 59.16 = **177.5 mV**.

**Example 10 (MOX response).** A SnO₂ sensor has R_air = 100 kΩ and R_gas = 20 kΩ in 500 ppm CO. Response S = R_air/R_gas = **5**. If it falls to 40 kΩ in another sample, S = 2.5, indicating lower CO concentration (response is roughly proportional to a power of concentration).

**Example 11 (amperometric calibration).** A glucose sensor gives 2.0 µA at 5 mM and 4.0 µA at 10 mM (linear, zero intercept). Sensitivity = 0.4 µA/mM. A blood sample giving 2.8 µA has glucose = 2.8/0.4 = **7 mM** (about 126 mg/dL).

### Key points to remember

- Sensor = receptor + transducer; sensitivity, selectivity, LOD, response time, stability.
- Potentiometric (voltage, about 59 mV/decade) vs amperometric (current ∝ concentration).
- Gas sensors table; SnO₂ mechanism with adsorbed O⁻; S = R_air/R_gas.
- Biosensors: enzyme (glucose oxidase), immunosensor, DNA; generations.
- RFID chemical sensing; environmental detection; e-nose = sensor array + pattern recognition.

### Important questions

1. Explain the principles of chemical sensing. Distinguish potentiometric and amperometric sensors with examples.
2. Describe gas sensors (metal oxide, optical and MEMS) and the working of a SnO₂ gas sensor.
3. What is a biosensor? Explain enzyme biosensors, immunosensors and DNA sensors.
4. Explain the chemistry of RFID tags and their use as sensors.
5. Write notes on environmental chemical detection and the electronic nose.

---

## Unit 4: Nanomaterials and Functional Materials for Smart Systems

### 2-mark definitions

- **Nanotechnology:** the design, production and use of structures and devices with at least one dimension between 1 and 100 nm.
- **Carbon nanotube (CNT):** a cylinder of rolled graphene sheet(s); single-walled (SWCNT) or multi-walled (MWCNT).
- **Graphene:** a one-atom-thick sheet of sp²-bonded carbon atoms in a hexagonal lattice; isolated in 2004 by Geim and Novoselov (Nobel Prize 2010).
- **Quantum dot:** a semiconductor nanocrystal (2–10 nm) whose emission colour depends on its size.
- **Smart coating:** a coating that responds to an external stimulus (light, temperature, damage) with a useful change, such as self-healing or self-cleaning.
- **Lotus effect:** superhydrophobic self-cleaning behaviour caused by micro and nano roughness plus waxy surfaces, giving water contact angles above 150°.
- **Photochromic material:** a material that changes colour reversibly on exposure to light (UV), such as photochromic spectacle lenses.
- **Thermochromic material:** a material that changes colour with temperature (mood rings, battery charge indicators, VO₂ smart windows).
- **Shape-memory polymer (SMP):** a polymer that can be fixed in a temporary shape and returns to its original shape when heated or stimulated.
- **Flexible electronics:** electronic circuits built on bendable substrates (polyimide, PET) using thin or organic materials.

### Core concepts

**Why nanomaterials are special:**
- Very large surface area per unit volume (more reactive, better catalysts and sensors).
- Quantum confinement (size-dependent band gap and colour).
- Different mechanical, electrical, magnetic and optical behaviour from the bulk material.

**Synthesis:**
- **Top-down** (break bulk material down): ball milling, lithography, etching.
- **Bottom-up** (build from atoms): sol-gel, chemical vapour deposition (CVD), hydrothermal, self-assembly.

**Carbon nanotubes:**
- **Structure:** graphene rolled up; metallic or semiconducting depending on how it is rolled (chirality).
- **Properties:** very high tensile strength (about 100 times steel at a fraction of the weight), high electrical and thermal conductivity, high aspect ratio.
- **Synthesis:** arc discharge, laser ablation, CVD (most common, scalable).
- **Applications:** CNT transistors, interconnects, conductive composites, battery electrodes, field-emission displays, sensors, sports equipment.

**Graphene:**
- **Properties:**
  - Strongest material measured.
  - Very high electron mobility.
  - About 97.7% transparent.
  - Excellent thermal conductor.
  - Impermeable to gases.
  - Flexible.
  - Zero band gap.
- **Production:** mechanical exfoliation (scotch tape), CVD on copper, chemical reduction of graphene oxide.
- **Applications:** transparent electrodes for touch screens, flexible displays, supercapacitors, batteries, sensors, heat spreaders in phones, water filtration membranes.

**Quantum dots:**
- **Materials:** CdSe, CdTe, InP (cadmium-free), perovskite, carbon dots.
- Smaller dot means larger band gap, so bluer light (red for larger dots).
- **Applications:** QLED TV displays (colour conversion), solar cells, bio-imaging, LEDs, quantum computing.

**Smart coatings:**
- **Self-healing coatings:** microcapsules of healing agent burst when cracked and polymerize to seal the crack.
- **Anti-corrosion smart coatings:** release inhibitor when pH changes.
- **Anti-fingerprint and anti-reflective coatings:** for screens.
- **Anti-microbial coatings:** silver nanoparticles.

**Self-cleaning and hydrophobic surfaces:**
- **Contact angle:**
  - Hydrophilic: below 90°.
  - Hydrophobic: above 90°.
  - Superhydrophobic: above 150° with low sliding angle.
- **Lotus effect:** water beads up and rolls off, collecting dirt.
- **Photocatalytic self-cleaning (TiO₂):** under UV, TiO₂ generates reactive species that decompose organic dirt and becomes superhydrophilic, so water spreads into a sheet and washes dirt away (used in self-cleaning glass).
- **Applications:** water-repellent phone coatings, solar panels, windows, textiles.

**Chromic materials:**
- **Photochromic:** spiropyrans and silver halide in glass change structure under UV. Used in transition lenses, smart windows, security inks.
- **Thermochromic:** leuco dyes, liquid crystals, VO₂ (metal-insulator transition at about 68 °C). Used in temperature indicators, smart windows, packaging.
- **Electrochromic:** WO₃ changes colour with voltage. Used in smart glass, as in some aircraft windows.

**Shape-memory polymers:**
- Contain hard segments (remember the permanent shape) and soft switching segments.
- Heated above the transition temperature, deformed, and cooled to fix a temporary shape; reheating recovers the original shape.
- **Examples:** polyurethane-based SMPs.
- **Uses:** self-deploying structures, medical stents and sutures, smart textiles, soft robotics, 4D printing.
- **Metal counterpart:** shape-memory alloys (Nitinol, Ni-Ti).

**Use in flexible electronics:**
- **Materials:** graphene, CNTs, silver nanowires (transparent conductors replacing brittle ITO), organic semiconductors (OLEDs, OFETs), polyimide and PET substrates, printable inks, stretchable conductors.
- **Applications:** foldable phones, e-paper, wearable health patches, electronic skin, flexible solar cells, smart textiles.

### Solved examples

**Example 12 (surface-to-volume ratio).** For a sphere, surface/volume = 3/r. A 1 cm particle has a ratio of 3 cm⁻¹. A 10 nm particle (r = 5 × 10⁻⁷ cm) has 3 / 5 × 10⁻⁷ = **6 × 10⁶ cm⁻¹**, about 2 million times higher. This is why nanoparticles are such good catalysts and sensors.

**Example 13 (quantum dot colour).** CdSe dots of about 2 nm emit blue (about 480 nm) and dots of about 6 nm emit red (about 620 nm). Photon energy E = 1,240/λ(nm) eV gives 2.58 eV and 2.00 eV, which shows that the gap shrinks as the dot grows.

### Key points to remember

- Nano: 1–100 nm; high surface area, quantum confinement; top-down vs bottom-up.
- CNT (SWCNT, MWCNT; arc, laser, CVD), graphene (strong, conductive, transparent, zero gap), quantum dots (size-dependent colour).
- Smart coatings: self-healing, anti-corrosion, anti-microbial.
- Lotus effect (> 150°), TiO₂ photocatalytic self-cleaning.
- Photochromic, thermochromic (VO₂), electrochromic (WO₃); SMPs and Nitinol.
- Flexible electronics: graphene, CNT, Ag nanowires, OLED, polyimide.

### Important questions

1. What are nanomaterials? Explain their special properties and methods of synthesis.
2. Describe the structure, properties and applications of carbon nanotubes and graphene.
3. Explain smart coatings and self-cleaning (hydrophobic and photocatalytic) surfaces.
4. Write notes on photochromic, thermochromic materials and shape-memory polymers.
5. Discuss the role of nanomaterials and functional materials in flexible electronics and smart systems.

---

## Unit 5: Green Chemistry and E-waste Management

### 2-mark definitions

- **Green chemistry:** the design of chemical products and processes that reduce or eliminate the use and generation of hazardous substances (Anastas and Warner, 1998).
- **Atom economy:** the percentage of the mass of reactants that ends up in the desired product: (molar mass of desired product / total molar mass of reactants) × 100.
- **E-factor:** the mass of waste produced per unit mass of product (lower is greener).
- **E-waste:** discarded electrical and electronic equipment and its parts (phones, computers, TVs, batteries, cables).
- **RoHS:** the EU Restriction of Hazardous Substances directive, which limits ten substances in electronics (lead, mercury, cadmium, hexavalent chromium, PBB, PBDE and four phthalates).
- **WEEE:** the EU Waste Electrical and Electronic Equipment directive, which sets collection, recycling and recovery targets and makes producers responsible.
- **Extended producer responsibility (EPR):** the policy that producers are responsible for collecting and recycling their products at end of life; central to India's E-Waste (Management) Rules, 2022.
- **Urban mining:** recovering valuable metals (gold, silver, copper, palladium, rare earths) from e-waste.
- **Biodegradable (transient) electronics:** electronic devices made from materials that dissolve or degrade safely after use (silk, cellulose, magnesium, PLA).
- **Circular economy:** an economic model that keeps materials in use for as long as possible through reduce, reuse, repair, refurbish and recycle, instead of "take, make, dispose".

### Core concepts

**Twelve principles of green chemistry (Anastas and Warner):**
1. Prevent waste rather than treat it.
2. Maximize atom economy.
3. Use less hazardous chemical syntheses.
4. Design safer chemicals.
5. Use safer solvents and auxiliaries (water, supercritical CO₂, ionic liquids).
6. Design for energy efficiency (ambient temperature and pressure).
7. Use renewable feedstocks.
8. Reduce derivatives (avoid unnecessary protection steps).
9. Use catalysis rather than stoichiometric reagents.
10. Design for degradation.
11. Use real-time analysis for pollution prevention.
12. Use inherently safer chemistry for accident prevention.

**Eco-friendly electronic materials:**
- Lead-free solders.
- Halogen-free flame retardants in PCBs.
- Bio-based plastics for casings.
- Water-based inks and cleaning (no CFCs).
- Cobalt-free batteries (LFP, sodium-ion).
- Organic and paper electronics.
- Recycled aluminium and plastics.
- Energy-efficient manufacturing.

**Biodegradable electronics:** substrates (silk fibroin, cellulose paper, PLA, PLGA), conductors (Mg, Zn, Mo, Fe), semiconductors (Si nanomembranes that dissolve in water), dielectrics (MgO, SiO₂). Applications: temporary medical implants that dissolve after healing, environmental sensors, and green consumer electronics.

**E-waste: composition and hazards**

| Component | Hazardous substance | Health and environmental effect |
|---|---|---|
| Solder, CRT glass, batteries | Lead | Damages nervous system and kidneys; affects children's brain development |
| Batteries, PVC stabilizers | Cadmium | Kidney damage, carcinogen |
| Switches, older LCD backlights (CCFL) | Mercury | Brain and nerve damage; bio-accumulates in fish |
| Metal coatings | Hexavalent chromium | Carcinogen, skin and lung damage |
| Plastic casings and cables | Brominated flame retardants (PBDE), PVC | Hormone disruption; dioxins when burned |
| Circuit boards | Beryllium, antimony | Lung disease |

India generated about 1.75 million tonnes of e-waste in 2023-24 (CPCB). Much is handled by the informal sector (open burning, acid baths), causing serious pollution and health problems (for example Seelampur in Delhi).

**E-waste recycling process:**
1. **Collection** (EPR take-back, collection centres).
2. **Sorting and dismantling** (manual removal of batteries, capacitors, CRTs, mercury lamps).
3. **Mechanical processing** (shredding, magnetic separation of iron, eddy-current separation of aluminium and copper, density separation of plastics).
4. **Metal recovery.**
5. **Safe disposal** of the residue.

**Metal recovery methods:**
- **Pyrometallurgy:** smelting at high temperatures. Copper acts as a collector for precious metals, and further refining follows (Umicore, Boliden). High throughput, but emissions and energy use.
- **Hydrometallurgy:** leaching with acids (H₂SO₄, HCl, aqua regia) or less toxic agents (thiosulphate, cyanide-free) followed by precipitation, solvent extraction, ion exchange or electrowinning. More selective and lower energy.
- **Biohydrometallurgy (bioleaching):** bacteria (Acidithiobacillus) or fungi dissolve metals; eco-friendly but slow.
- **Electrorefining:** pure copper recovered at the cathode.
- **Value:** a tonne of mobile phone PCBs can contain far more gold than a tonne of gold ore.

**RoHS and WEEE directives:**
- **RoHS (EU 2002/95/EC, recast 2011/65/EU, and 2015/863):** bans or limits Pb, Hg, Cr(VI), PBB, PBDE at 0.1% by weight; Cd at 0.01%; and four phthalates (DEHP, BBP, DBP, DIBP) at 0.1% in homogeneous materials.
- **WEEE (2002/96/EC, recast 2012/19/EU):** separate collection, producer responsibility, recycling targets, the crossed-out wheelie bin symbol.
- **India:**
  - E-Waste (Management) Rules 2011, revised 2016 and 2022.
  - EPR targets for producers, registration on the CPCB portal.
  - RoHS-like limits on hazardous substances.
  - Authorized dismantlers and recyclers.

**Sustainable manufacturing and the circular economy:**
- **Design for environment:** modular, repairable designs (right to repair), fewer materials, standard chargers (USB-C mandate in EU and India).
- **Reduce, reuse, refurbish, remanufacture, recycle.**
- **Life-cycle assessment (LCA):** measures the environmental impact from raw material to disposal.
- **Clean energy in factories.**
- **Business models:** product-as-a-service, buy-back programmes.
- **Goal:** keep materials in a closed loop and reduce mining.

### Solved examples

**Example 14 (atom economy).** Compare the atom economy of (a) hydrogenation of ethene, C₂H₄ + H₂ → C₂H₆, and (b) chlorination of methane, CH₄ + Cl₂ → CH₃Cl + HCl (CH₃Cl is the desired product).
- (a) All atoms end up in the product: **100%** (an addition reaction is ideal).
- (b) Molar masses: CH₄ = 16.04, Cl₂ = 70.90, CH₃Cl = 50.49. Atom economy = 50.49 / 86.94 × 100 = **58.1%**; the rest is HCl by-product.

**Example 15 (E-factor).** A process makes 100 kg of product and generates 500 kg of waste. E-factor = 500/100 = **5** (typical of fine chemicals; bulk chemicals are below 1, pharmaceuticals 25–100).

**Example 16 (metal recovery estimate).** A recycler processes 2 tonnes of phone PCBs containing about 250 g of gold per tonne at 90% recovery. Gold recovered = 2 × 250 × 0.9 = **450 g**.

### Key points to remember

- Twelve principles (memorize keywords: prevention, atom economy, less hazardous, safer chemicals, safer solvents, energy, renewables, fewer derivatives, catalysis, degradation, real-time analysis, accident prevention).
- Atom economy = desired product mass / reactants mass × 100; E-factor = waste/product.
- E-waste hazards table (Pb, Cd, Hg, Cr(VI), BFRs, PVC).
- Recycling: collect → dismantle → shred and separate → recover (pyro, hydro, bio) → dispose.
- RoHS (10 substances, 0.1% and Cd 0.01%), WEEE, India's E-Waste Rules 2022 with EPR.
- Biodegradable electronics; circular economy; LCA.

### Important questions

1. State and explain the twelve principles of green chemistry with examples.
2. What is atom economy? Calculate it for given reactions and explain its importance.
3. What is e-waste? Discuss its composition, hazards and the problem in India.
4. Explain the methods of e-waste recycling and metal recovery (pyrometallurgy, hydrometallurgy, bioleaching).
5. Explain RoHS and WEEE directives and India's E-Waste Rules. Discuss sustainable manufacturing and the circular economy.

---

## Last-hour checklist

- [ ] Device materials table; silicon purification and Czochralski; doping; PCB (FR-4, ENIG); SAC solder; dielectrics (SiO₂, HfO₂, low-k); corrosion types and prevention; corrosion 0.155 mm/yr; Cu plating 2.37 g.
- [ ] ΔG = −nFE; Nernst (1.13 V); battery table; lead-acid and Li-ion reactions; 4S2P pack (14.8 V, 6 Ah, 88.8 Wh); capacities (274, 372 mAh/g); BMS and thermal runaway; supercapacitor (364.5 J); fuel cell (1.23 V, −237.4 kJ, 83%); energy harvesting; Qi charging.
- [ ] Sensor parts; potentiometric (177.5 mV) vs amperometric (7 mM); gas sensors table and SnO₂ mechanism (S = 5); biosensors; RFID sensing; e-nose.
- [ ] Nano properties and synthesis; CNT, graphene, QDs; smart and self-cleaning coatings; chromic materials; SMPs; flexible electronics; surface-to-volume (6 × 10⁶ cm⁻¹).
- [ ] Twelve principles; atom economy (100% vs 58.1%); E-factor; e-waste hazards; recycling and recovery; RoHS, WEEE, India E-Waste Rules 2022; circular economy.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Engineering Chemistry | P. C. Jain, Monika Jain | Dhanpat Rai Publishing | [WorldCat](https://search.worldcat.org/search?q=Engineering+Chemistry+Jain+and+Jain) |
| 2 | Green Chemistry: Theory and Practice | Paul T. Anastas, John C. Warner | Oxford University Press | [WorldCat](https://search.worldcat.org/search?q=Green+Chemistry+Theory+and+Practice+Anastas+Warner) |
| 3 | Nanomaterials: An Introduction to Synthesis, Properties and Applications | Dieter Vollath | Wiley-VCH | [WorldCat](https://search.worldcat.org/search?q=Nanomaterials+Introduction+to+Synthesis+Properties+Applications+Vollath) |
| 4 | Electronic Sensor Technology | Sinclair | (see library catalogue) | [WorldCat](https://search.worldcat.org/search?q=Electronic+Sensor+Technology+Sinclair) |
| 5 | Chemistry of Advanced Materials | C. N. R. Rao (ed.) | (see library catalogue) | [WorldCat](https://search.worldcat.org/search?q=Chemistry+of+Advanced+Materials+C.N.R.+Rao) |

**Syllabus source:** [AKTU B.Tech 1st year CSE stream course structure and syllabus, 2026-27 (official PDF)](https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf)

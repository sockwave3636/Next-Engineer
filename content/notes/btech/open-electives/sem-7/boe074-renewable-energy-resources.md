---
program: btech
branches: [all]
semester: 7
code: BOE074
name: Renewable Energy Resources
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-II, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-Syllabus-BTech-Final-Year-Syllabus-2025-26.pdf
units:
  - Introduction and Solar Photovoltaics
  - Solar Thermal Energy
  - Geothermal, MHD and Fuel Cells
  - Thermoelectric, Thermionic and Wind Energy
  - Biomass, Ocean Thermal, Wave and Tidal Energy
---

# BOE074 Renewable Energy Resources: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: working principles, diagrams to draw and comparison tables.
3. **Solved examples**: the numericals that appear in the paper (solar cell fill factor and efficiency, solar declination, collector efficiency, fuel cell voltage and efficiency, geothermal and OTEC Carnot limits, wind power and Betz limit, tidal energy, wave power).
4. **Formulas / key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (energy resources, classification, solar cell theory, materials, arrays, PV power plants) and Unit 2 (solar radiation, flat plate and focusing collectors, solar thermal power plants, thermal storage).
- **Afternoon (3 hours):** Unit 3 (geothermal, MHD, fuel cells) and Unit 4 (thermoelectric, thermionic, wind energy).
- **Evening (2 hours):** Unit 5 (biomass, OTEC, wave, tidal, waste recycling). Then the "Last-hour checklist".
- **In the exam:** every "explain the working" answer needs a labelled diagram (p-n junction cell, flat plate collector, parabolic trough, geothermal plant, MHD generator, fuel cell, wind turbine, biogas plant, OTEC cycle, tidal barrage) plus merits and limitations.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Introduction and Solar Photovoltaics

### 2-mark definitions

- **Conventional energy sources:** sources used widely for a long time, mostly finite: coal, oil, natural gas, large hydro, nuclear.
- **Non-conventional (renewable) energy sources:** sources that are naturally replenished and mostly clean: solar, wind, biomass, geothermal, tidal, wave, ocean thermal, small hydro, hydrogen and fuel cells.
- **Solar cell (photovoltaic cell):** a p-n junction semiconductor device that converts sunlight directly into electricity by the photovoltaic effect.
- **Photovoltaic effect:** generation of a voltage and current in a material when exposed to light, because absorbed photons create electron-hole pairs that are separated by the junction's electric field.
- **Band gap (E_g):** the energy difference between the valence and conduction bands; silicon 1.12 eV. Photons with energy ≥ E_g can create electron-hole pairs.
- **Open-circuit voltage (V_oc):** the voltage across the cell when no current flows (about 0.6 V for silicon).
- **Short-circuit current (I_sc):** the current when the terminals are shorted, proportional to the light intensity.
- **Fill factor (FF):** the ratio of maximum power to V_oc × I_sc: FF = V_m I_m / (V_oc I_sc); a measure of the I-V curve's squareness.
- **Cell efficiency:** η = P_max / (irradiance × area).
- **Module and array:** cells connected in series and parallel form a module (panel); modules connected together form an array.
- **Maximum power point tracking (MPPT):** electronics that keep the array operating at the voltage that gives maximum power.

### Core concepts

**Classification of energy resources**

| Basis | Types |
|---|---|
| Renewability | Renewable (solar, wind) and non-renewable (coal, oil) |
| Usage | Conventional and non-conventional |
| Origin | Primary (found in nature) and secondary (derived, e.g. electricity) |
| Commercial status | Commercial (coal, electricity) and non-commercial (firewood, dung) |

**Merits of renewable energy:** inexhaustible, low or no emissions, low running cost, local availability (energy security), suitable for remote areas, creates jobs. **Demerits:** intermittent and variable (sun, wind), low energy density so large area needed, high initial cost, storage needed, site-specific.

**Availability in India:** high solar irradiance (4–7 kWh/m²/day, about 300 sunny days), wind along Gujarat and Tamil Nadu coasts, large biomass, small hydro in hills, tidal potential in the Gulf of Khambhat and Kutch, geothermal sites like Puga valley (Ladakh).

**Theory of the solar cell**

1. Photons with energy hν ≥ E_g are absorbed and create electron-hole pairs.
2. The built-in electric field of the p-n junction (depletion region) separates them: electrons go to the n-side, holes to the p-side.
3. This builds a voltage; connecting a load lets current flow.
4. Equivalent circuit: current source I_L in parallel with a diode, plus series resistance R_s and shunt resistance R_sh. I = I_L − I_0 (e^(qV/kT) − 1).
5. I-V curve: from (0, I_sc) to (V_oc, 0); maximum power point at (V_m, I_m).

**Losses in solar cells:** photons below band gap not absorbed, excess photon energy lost as heat, reflection (reduced by anti-reflective coating and texturing), recombination, resistive losses, shading by front contacts. Theoretical limit for a single junction silicon cell is about 33% (Shockley-Queisser).

**Effect of temperature and irradiance:** I_sc rises in proportion to irradiance; V_oc falls about 2 mV/°C per cell as temperature rises, so efficiency falls in hot conditions.

**Solar cell materials**

| Type | Efficiency (commercial) | Notes |
|---|---|---|
| Monocrystalline silicon | 20–23% | Highest efficiency, costly, uniform dark look |
| Polycrystalline silicon | 15–18% | Cheaper, slightly lower efficiency |
| Amorphous silicon (thin film) | 6–9% | Flexible, cheap, degrades initially |
| Cadmium telluride (CdTe) | 16–19% | Thin film, low cost, cadmium toxicity |
| CIGS | 15–20% | Thin film, flexible |
| Gallium arsenide (multi-junction) | 30%+ | Very costly, used in space |
| Perovskite, organic | Emerging | Cheap, stability problems |

**Solar arrays:** cells in series increase voltage, in parallel increase current. Bypass diodes across groups of cells prevent hot spots when shaded; blocking diodes stop reverse current at night. Mounting: fixed tilt (tilt ≈ latitude), seasonal tilt, single-axis or dual-axis tracking (15–35% more energy).

**Solar PV power plants**

| Type | Components | Use |
|---|---|---|
| Stand-alone (off-grid) | Array, charge controller, battery, inverter, loads | Remote homes, street lights, pumps |
| Grid-connected | Array, grid-tie inverter with MPPT, net meter | Rooftops, utility plants |
| Hybrid | PV with diesel or wind and storage | Islands, telecom towers |

**Limitations of PV:** output only in daylight and depends on weather, needs storage or grid, large land area (about 4–5 acres per MW), high initial cost (falling fast), dust reduces output, end-of-life panel waste.

### Solved examples

**Example 1: Fill factor and efficiency.** A cell of area 100 cm² has V_oc = 0.6 V, I_sc = 3 A, V_m = 0.5 V, I_m = 2.8 A under 1000 W/m².
- P_max = 0.5 × 2.8 = 1.4 W.
- FF = 1.4 / (0.6 × 3) = 1.4 / 1.8 = **0.78**.
- Input = 1000 × 0.01 = 10 W, so η = 1.4 / 10 = **14%**.

**Example 2: Module design.** Each cell gives 0.5 V and 2.8 A at maximum power. To get about 18 V and 5.6 A: series cells = 18 / 0.5 = 36; parallel strings = 5.6 / 2.8 = 2. Total 72 cells, module power ≈ 18 × 5.6 = 100.8 W.

**Example 3: Array sizing.** A home uses 3 kWh/day; the site gets 5 peak sun hours; system losses 25%. Array size = 3 / (5 × 0.75) = **0.8 kW**, for example three 270 W panels.

### Key points to remember

- Solar cell = p-n junction; photon energy ≥ band gap (Si 1.12 eV).
- FF = V_m I_m / (V_oc I_sc); η = P_max / (G × A).
- Series raises voltage; parallel raises current; bypass diodes against shading.
- Mono > poly > thin film in efficiency.
- Stand-alone, grid-connected, hybrid plants.

### Important questions

1. Classify energy resources. Discuss the merits and demerits of non-conventional energy sources and their availability in India.
2. Explain the theory and working of a solar cell with its I-V characteristics and equivalent circuit.
3. Explain solar cell materials and compare them.
4. Explain solar cell arrays and solar PV power plants with block diagrams. What are their limitations?

---

## Unit 2: Solar Thermal Energy

### 2-mark definitions

- **Solar constant:** the solar radiation received per unit area at the mean Sun-Earth distance outside the atmosphere, normal to the rays: about 1367 W/m².
- **Beam (direct) radiation:** solar radiation received directly from the Sun without scattering.
- **Diffuse radiation:** radiation scattered by the atmosphere and clouds, arriving from all directions.
- **Global radiation:** beam + diffuse radiation on a horizontal surface.
- **Pyranometer:** an instrument to measure global (or diffuse with a shading ring) radiation; **pyrheliometer** measures beam radiation.
- **Air mass:** the ratio of the path length of sunlight through the atmosphere to the path length when the Sun is overhead (AM 1.5 is the standard test condition).
- **Declination (δ):** the angle between the Sun's rays and the equatorial plane, from −23.45° to +23.45°.
- **Flat plate collector:** a non-concentrating collector with a blackened absorber plate under glazing that heats a fluid to below about 100 °C.
- **Concentrating (focusing) collector:** a collector that uses mirrors or lenses to focus beam radiation onto a smaller receiver, reaching high temperatures.
- **Concentration ratio:** aperture area / receiver area.
- **Thermal energy storage:** storing heat for use when the Sun is not available: sensible heat (water, rock, molten salt), latent heat (phase change materials), thermochemical.

### Core concepts

**Solar radiation geometry:** angles: latitude φ, declination δ, hour angle ω (15° per hour, zero at solar noon), slope β, surface azimuth γ, zenith angle θ_z, angle of incidence θ. For a horizontal surface: cos θ_z = cos φ cos δ cos ω + sin φ sin δ. Day length = (2/15) cos⁻¹(−tan φ tan δ) hours.

**Flat plate collector:** components: transparent cover (glass, one or two sheets, reduces convection and radiation losses: greenhouse effect), absorber plate (copper or aluminium, black or selective coating with high absorptance and low emittance), tubes or channels for the fluid, insulation at back and sides, casing.
- Energy balance: useful heat Q_u = A [S − U_L (T_p − T_a)], where S is absorbed radiation and U_L the loss coefficient.
- Efficiency η = Q_u / (A × I) = ṁ c_p (T_out − T_in) / (A I).
- Performance factors: glazing, selective coating, tilt angle (≈ latitude), dust, wind, inlet temperature.
- Applications: domestic and industrial water heating, space heating, solar drying, low-temperature process heat.

**Focusing collectors**

| Type | Concentration | Temperature | Notes |
|---|---|---|---|
| Parabolic trough | 30–100 | 150–400 °C | Line focus, one-axis tracking, most used in power plants |
| Linear Fresnel | 10–40 | 150–300 °C | Flat mirror strips, cheaper |
| Parabolic dish | 500–2000 | Up to 1500 °C | Point focus, two-axis tracking, Stirling engine |
| Central receiver (power tower) | 300–1500 | 500–1000 °C | Field of heliostats focus on a tower receiver |
| Compound parabolic (CPC) | 1–10 | Up to 150 °C | Non-imaging, little tracking |

Materials: reflectors (silvered glass, polished aluminium), receivers (steel tubes with selective coating inside an evacuated glass tube), heat transfer fluids (thermal oil, molten salt, water/steam). Focusing collectors use only beam radiation, need tracking and cleaning, but reach higher temperatures and efficiencies for power generation.

**Solar thermal power plants:** collectors heat a fluid → heat exchanger produces steam → Rankine cycle turbine → generator; storage (molten salt) allows night operation. Types: low-temperature (solar pond with organic Rankine cycle), medium (parabolic trough), high (tower, dish). Example: tower plants with molten salt storage giving 15 hours of storage.

**Solar ponds:** a salt-gradient pond (upper convective zone, non-convective gradient zone, lower storage zone at 70–90 °C) traps heat because the salt gradient stops convection.

**Thermal storage for solar heating and cooling:** sensible (water tanks, rock beds: Q = m c ΔT), latent (paraffin, salt hydrates: Q = m L), thermochemical. Solar cooling: vapour absorption refrigeration (LiBr-water or ammonia-water) driven by solar heat, desiccant cooling.

**Limitations:** intermittency, need for tracking and storage, large land and water use (for cleaning and cooling), high capital cost, low efficiency at low radiation.

### Solved examples

**Example 1: Declination.** Using Cooper's equation δ = 23.45 sin(360 (284 + n) / 365). On 21 June (n = 172): δ = 23.45 sin(360 × 456 / 365) = 23.45 sin(449.75°) = 23.45 × 1.0 = **23.45°**. On 21 March (n = 80), δ ≈ 0.

**Example 2: Collector efficiency.** A 2 m² flat plate collector receives 800 W/m². Water flows at 0.02 kg/s and rises 10 °C (c_p = 4186 J/kg K).
- Useful heat = 0.02 × 4186 × 10 = 837 W.
- Incident = 800 × 2 = 1600 W.
- η = 837 / 1600 = **52%**.

**Example 3: Day length at Lucknow (φ ≈ 26.8°) on 21 June (δ = 23.45°).** cos ω_s = −tan 26.8° × tan 23.45° = −0.505 × 0.434 = −0.219, ω_s = 102.7°. Day length = 2 × 102.7 / 15 = **13.7 hours**.

**Example 4: Sensible storage.** A 200 litre tank of water heated from 30 °C to 70 °C stores Q = 200 × 4.186 × 40 = 33,488 kJ ≈ **9.3 kWh**.

### Key points to remember

- Solar constant ≈ 1367 W/m²; beam + diffuse = global.
- Pyranometer (global), pyrheliometer (beam).
- Flat plate: glazing, black absorber, tubes, insulation; η = ṁ c_p ΔT / (A I).
- Focusing: trough (line), dish and tower (point); need tracking; use beam radiation only.
- Storage: sensible m c ΔT, latent m L.

### Important questions

1. Explain solar radiation, its components and measurement. Define solar angles.
2. Explain the construction, working and performance of a flat plate collector. What materials are used?
3. Explain focusing collectors: types, materials, applications and performance. Compare them with flat plate collectors.
4. Explain solar thermal power plants with a diagram.
5. Explain thermal energy storage for solar heating and cooling. What are the limitations of solar thermal systems?

---

## Unit 3: Geothermal, MHD and Fuel Cells

### 2-mark definitions

- **Geothermal energy:** heat from the Earth's interior, coming from radioactive decay and original heat, available as hot water, steam or hot dry rock.
- **Geothermal gradient:** the rate at which temperature increases with depth, about 25–30 °C per km on average.
- **Hydrothermal resource:** underground reservoirs of hot water or steam in permeable rock.
- **Hot dry rock (enhanced geothermal system):** hot rock without water; water is pumped down through fractures to extract heat.
- **MHD (magnetohydrodynamic) generator:** a device that produces electricity directly when a hot, electrically conducting gas (plasma) flows through a magnetic field, with no moving mechanical parts.
- **Seeding:** adding easily ionized materials (potassium or cesium compounds) to the hot gas in an MHD generator to raise its conductivity.
- **Fuel cell:** an electrochemical device that converts the chemical energy of a fuel (usually hydrogen) and an oxidant (oxygen) directly into electricity, heat and water, without combustion.
- **Electrolyte:** the medium in a fuel cell that conducts ions between anode and cathode but not electrons.

### Core concepts

**Geothermal resources:** hydrothermal convective (vapour-dominated dry steam, liquid-dominated hot water), geopressured (hot brine under high pressure with methane), hot dry rock, magma. India: Puga (Ladakh), Manikaran (Himachal), Tatapani (Chhattisgarh), Cambay basin.

**Thermodynamics of geothermal conversion:** low source temperatures (150–300 °C) give low Carnot efficiency η = 1 − T_c/T_h; actual plant efficiency 10–20%.

**Electrical conversion systems**

| Plant | Resource | Working |
|---|---|---|
| Dry steam | Vapour-dominated | Steam from the well goes directly to the turbine |
| Single/double flash | Hot water above 180 °C | Pressure drop flashes part of the water to steam for the turbine |
| Binary cycle | Moderate temperature 100–180 °C | Geothermal water heats a low-boiling working fluid (isobutane) in a heat exchanger; that vapour drives the turbine (organic Rankine cycle) |
| Total flow | Mixed | Whole fluid expands through a special machine |

**Non-electrical uses:** space and district heating, greenhouses, aquaculture, drying, bathing and spas, industrial process heat, geothermal heat pumps.

**Environmental considerations:** release of H₂S, CO₂ and other gases, brine with dissolved salts and toxic metals, land subsidence, induced seismicity, noise, thermal pollution, water use. Remedies: reinjection of brine, gas scrubbing.

**MHD principle:** Faraday's law: a conductor moving with velocity u through a magnetic field B has an induced electric field E = u × B; current flows to electrodes on the walls. Power density P = σ u² B² k(1 − k), maximum at load factor k = 0.5.

**MHD power plant:** combustion chamber (fuel + preheated air or oxygen at 2500–3000 °C, seeded with potassium) → nozzle (accelerates gas) → MHD duct with superconducting magnet and electrodes → DC output → inverter. Exhaust (about 2000 °C) goes to a steam plant (combined cycle) and seed recovery.
- Types: open cycle (combustion gases, once through), closed cycle (inert gas like argon or helium seeded with cesium, or liquid metal, recirculated).
- Performance: MHD-steam combined cycle could reach 50–60% efficiency.
- Limitations: very high temperatures and electrode and wall erosion, need for large superconducting magnets, seed recovery, corrosion, high cost; still experimental.

**Fuel cell working (hydrogen-oxygen, acid electrolyte):**
- Anode: H₂ → 2H⁺ + 2e⁻.
- Cathode: ½O₂ + 2H⁺ + 2e⁻ → H₂O.
- Overall: H₂ + ½O₂ → H₂O + electricity + heat. Electrons flow through the external circuit.

**Types of fuel cells**

| Type | Electrolyte | Temperature | Use |
|---|---|---|---|
| Alkaline (AFC) | KOH solution | 60–90 °C | Space missions (Apollo) |
| Proton exchange membrane (PEMFC) | Polymer membrane (Nafion) | 60–80 °C | Vehicles, portable |
| Phosphoric acid (PAFC) | Phosphoric acid | 150–200 °C | Stationary power |
| Molten carbonate (MCFC) | Molten Li/K carbonate | 600–700 °C | Large power plants |
| Solid oxide (SOFC) | Ceramic (yttria-stabilized zirconia) | 700–1000 °C | Power plants, CHP |
| Direct methanol (DMFC) | Polymer membrane | 60–120 °C | Portable devices |

**Fuel cell performance:** ideal efficiency η = ΔG / ΔH; ideal voltage E = −ΔG / (nF). Real voltage is lower due to activation, ohmic and concentration losses (polarization curve); practical efficiency 40–60%, higher with heat recovery. **Limitations:** high cost (platinum catalyst), hydrogen production, storage and distribution, catalyst poisoning by CO, durability.

### Solved examples

**Example 1: Fuel cell.** For H₂ + ½O₂ → H₂O(l), ΔG = −237.1 kJ/mol, ΔH = −285.8 kJ/mol, n = 2, F = 96,485 C/mol.
- Ideal voltage E = 237,100 / (2 × 96,485) = **1.23 V**.
- Maximum efficiency = 237.1 / 285.8 = **83%**.
- A practical cell runs at about 0.7 V under load. For a 48 V, 1 kW stack you need 48 / 0.7 ≈ 69 cells in series, carrying 1000 / 48 ≈ 21 A. Efficiency at 0.7 V ≈ 0.7 / 1.48 = 47% (1.48 V is the voltage equivalent of ΔH).

**Example 2: Geothermal Carnot limit.** Reservoir at 200 °C (473 K), condenser at 40 °C (313 K). η_Carnot = 1 − 313/473 = **33.8%**; actual plants achieve about a third to half of this.

**Example 3: MHD power density.** σ = 50 S/m, u = 800 m/s, B = 5 T, k = 0.5: P = 50 × 800² × 25 × 0.25 = 2 × 10⁸ W/m³ = **200 MW/m³**, which shows why MHD ducts can be compact.

### Key points to remember

- Geothermal plants: dry steam, flash, binary; Carnot limit is low.
- Environmental issues: H₂S, brine, subsidence, seismicity; reinjection.
- MHD: E = u × B; seeding; open and closed cycles; P = σu²B²k(1 − k).
- Fuel cell reactions; ΔG/ΔH = 83%; 1.23 V; six types table.

### Important questions

1. Explain geothermal energy resources and the thermodynamics of geothermal conversion.
2. Explain electrical conversion systems (dry steam, flash, binary) and non-electrical uses of geothermal energy. Discuss environmental considerations.
3. Explain the principle and working of an MHD power plant. Explain its performance and limitations.
4. Explain the working of a fuel cell. Explain the types of fuel cells, their performance and limitations.

---

## Unit 4: Thermoelectric, Thermionic and Wind Energy

### 2-mark definitions

- **Seebeck effect:** an EMF develops in a circuit of two dissimilar conductors when their junctions are at different temperatures; basis of thermoelectric generators.
- **Peltier effect:** heat is absorbed or released at a junction when current passes through it; basis of thermoelectric coolers.
- **Thomson effect:** heat is absorbed or released when current flows along a conductor with a temperature gradient.
- **Figure of merit Z:** Z = α² σ / k (α Seebeck coefficient, σ electrical conductivity, k thermal conductivity); ZT around 1 is good.
- **Thermionic emission:** emission of electrons from a hot metal surface when their thermal energy exceeds the work function.
- **Thermionic converter:** a device in which electrons emitted from a hot cathode (emitter) cross a gap to a cooler anode (collector), producing current directly.
- **Wind energy:** the kinetic energy of moving air converted to mechanical or electrical energy by wind turbines.
- **Betz limit:** the maximum fraction of the wind's kinetic energy that a turbine can extract: 16/27 = 59.3%.
- **Power coefficient C_p:** the ratio of power extracted by the rotor to the power in the wind.
- **Tip speed ratio (TSR):** blade tip speed / wind speed = ωR / V.
- **Cut-in, rated and cut-out speeds:** wind speeds at which the turbine starts producing power, reaches rated power, and shuts down for safety.

### Core concepts

**Thermoelectric generator:** n-type and p-type semiconductor legs (bismuth telluride, lead telluride, silicon-germanium) joined at a hot plate and connected electrically in series, thermally in parallel; heat from a source (radioisotope, waste heat, flame) creates voltage V = α ΔT per couple. Efficiency is low (5–8%), but no moving parts, silent and reliable. Uses: space probes (RTGs), remote sensors, waste heat recovery, cooling (Peltier).

**Thermionic converter:** emitter (tungsten, molybdenum at 1500–2000 K), collector (cooler, low work function), gap filled with cesium vapour to neutralize the space charge. Output voltage ≈ (φ_e − φ_c)/e minus losses. Efficiency 10–20%. Limitations: very high temperatures, material problems, space charge, low voltage. Uses: space, topping cycles.

**Wind power and its sources:** winds are caused by uneven solar heating of the Earth (global circulation, sea and land breezes, mountain-valley winds). Power available P = ½ ρ A V³; doubling wind speed gives 8 times the power, so site selection is critical.

**Site selection criteria:** high annual mean wind speed (at least 5–6 m/s at hub height), smooth terrain with few obstructions, low turbulence, hills and ridges, coasts and open plains, access roads and grid nearby, firm ground, away from airports and bird routes, low noise impact, land cost.

**Momentum theory (Betz):** the turbine is treated as an actuator disc; wind speed falls from V₁ upstream to V₂ downstream, with V at the disc = (V₁ + V₂)/2. Power extracted P = ½ ρ A V₁³ × 4a(1 − a)², where a is the axial induction factor; maximum at a = 1/3, giving C_p,max = 16/27 = 0.593. Practical C_p 0.35–0.45.

**Classification of rotors**

| Type | Examples | Features |
|---|---|---|
| Horizontal axis (HAWT) | Two- or three-blade propeller, multi-blade (American farm) | High efficiency, needs yaw mechanism, tall tower; most commercial turbines |
| Vertical axis (VAWT) | Darrieus (lift, eggbeater), Savonius (drag, S-rotor) | Accepts wind from any direction, generator at ground; lower efficiency, Darrieus not self-starting |
| Drag type | Savonius, cup anemometer | High torque, low speed, low C_p |
| Lift type | Propeller, Darrieus | High speed, high C_p |

**Concentrators and augmenters:** devices that increase the wind speed or mass flow through the rotor: diffuser-augmented turbines (shroud), vortex augmenters, tip vanes, venturi ducts. They can raise power above the open-rotor Betz value referred to rotor area, at extra structural cost.

**Wind characteristics:** wind speed varies with height (power law V₂/V₁ = (h₂/h₁)^α, α ≈ 1/7 in open terrain), time (daily, seasonal), and is statistically described by the Weibull (or Rayleigh) distribution; turbulence; gusts; direction (wind rose).

**Performance:** power curve shows output vs wind speed (zero below cut-in about 3 m/s, rising as V³ up to rated speed about 12 m/s, constant to cut-out about 25 m/s). Capacity factor of wind farms 20–40%.

**Limitations:** variable output, noise, visual impact, bird strikes, large land area, high tower and transport cost, low capacity factor, grid integration issues.

### Solved examples

**Example 1: Wind power.** Rotor diameter 40 m, wind speed 10 m/s, air density 1.225 kg/m³.
- A = π × 20² = 1256.6 m².
- Power in the wind P = ½ × 1.225 × 1256.6 × 10³ = **769.7 kW**.
- Maximum extractable (Betz) = 0.593 × 769.7 = **456 kW**. With C_p = 0.4, output = 308 kW.
- At 5 m/s the wind power is 769.7/8 = 96.2 kW.

**Example 2: Wind shear.** Speed at 10 m is 5 m/s. At 80 m hub height with α = 1/7: V = 5 × (80/10)^(1/7) = 5 × 1.346 = **6.73 m/s**; power rises by (1.346)³ = 2.44 times.

**Example 3: Tip speed ratio.** Rotor radius 20 m turning at 30 rpm in 10 m/s wind: ω = 2π × 30/60 = 3.14 rad/s; tip speed = 62.8 m/s; TSR = **6.3**.

**Example 4: Thermoelectric couple.** Seebeck coefficient 200 µV/K per couple, ΔT = 100 K: V = 20 mV per couple; 250 couples in series give 5 V.

### Key points to remember

- Seebeck (generator), Peltier (cooler), Thomson; Z = α²σ/k.
- Thermionic: hot emitter, cool collector, cesium vapour.
- P = ½ρAV³; Betz 59.3%; a = 1/3.
- HAWT vs VAWT (Darrieus lift, Savonius drag).
- Wind shear power law; Weibull distribution; cut-in, rated, cut-out.

### Important questions

1. Explain thermoelectric conversion: principle, performance and limitations.
2. Explain thermionic conversion: principle, performance and limitations.
3. Explain the sources of wind and the criteria for site selection.
4. Derive the Betz limit using momentum theory.
5. Classify wind turbine rotors. Explain concentrators and augmenters, wind characteristics and the performance and limitations of wind energy systems.

---

## Unit 5: Biomass, Ocean Thermal, Wave and Tidal Energy

### 2-mark definitions

- **Biomass:** organic matter from plants and animals (wood, crop residue, animal dung, municipal waste) used as an energy source.
- **Biogas:** a gas mixture of about 55–65% methane and 35–45% CO₂ produced by anaerobic digestion of organic matter.
- **Anaerobic digestion:** decomposition of organic matter by bacteria without oxygen, in three stages: hydrolysis, acid formation, methane formation.
- **Gasification:** partial combustion of biomass with limited air to produce producer gas (CO, H₂, CH₄, N₂).
- **Pyrolysis:** heating biomass without oxygen to produce charcoal, bio-oil and gas.
- **OTEC (Ocean Thermal Energy Conversion):** generating power from the temperature difference (about 20 °C or more) between warm surface sea water and cold deep water.
- **Wave energy:** energy carried by ocean surface waves, created by wind blowing over the sea.
- **Tidal energy:** energy from the rise and fall of sea levels due to the gravitational pull of the Moon and Sun.
- **Tidal range:** the difference in height between high and low tide.
- **Spring and neap tides:** spring tides (largest range) occur at new and full moon; neap tides (smallest range) at quarter moons.

### Core concepts

**Biomass availability and conversion routes**

| Route | Process | Product |
|---|---|---|
| Direct combustion | Burning | Heat, steam for power |
| Thermochemical | Gasification, pyrolysis, liquefaction | Producer gas, charcoal, bio-oil |
| Biochemical | Anaerobic digestion, fermentation | Biogas, ethanol |
| Chemical | Transesterification of oils | Biodiesel |

**Biogas plants:** floating drum type (KVIC: gas holder drum rises and falls, constant pressure) and fixed dome type (Janata, Deenbandhu: cheaper, variable pressure). Factors affecting yield: temperature (mesophilic 30–40 °C), pH 6.8–7.5, C/N ratio 25–30, solid concentration 8–10%, retention time 30–50 days, mixing. Uses: cooking, lighting, engines; slurry is good manure.

**OTEC**

- **Closed cycle (Anderson):** warm surface water evaporates a low-boiling working fluid (ammonia) in an evaporator; the vapour drives a turbine; cold deep water (from about 1000 m) condenses it; pumped back.
- **Open cycle (Claude):** warm sea water is flash-evaporated in a vacuum chamber; the low-pressure steam drives a turbine and is condensed by cold water, producing fresh water as a by-product.
- **Hybrid:** combines both.
- Availability: tropical seas with ΔT ≥ 20 °C (India has potential around Lakshadweep and Andaman).
- Performance: Carnot efficiency only 6–8%; net efficiency 2–3% because large pumping power is needed.
- Limitations: low efficiency, huge cold water pipe, biofouling, corrosion, high cost, storms.

**Wave energy:** power per metre of wave front P = ρ g² H² T / (64π), where H is significant wave height and T the period. Devices: oscillating water column (air pushed through a Wells turbine, e.g. Vizhinjam, Kerala), point absorbers (buoys), attenuators (Pelamis), overtopping devices, oscillating wave surge converters. Limitations: irregular waves, storms, corrosion, mooring, high cost, transmission to shore.

**Tidal energy:** energy from a basin filled and emptied through turbines.
- Single basin, single effect (generation on ebb only), single basin double effect (both flood and ebb), double basin (continuous output).
- Energy per tide from a basin of area A and range R: E = ½ ρ g A R² (generation in one direction).
- Tidal stream (current) turbines work like underwater wind turbines: P = ½ ρ A V³ (water is 800 times denser than air).
- Sites: La Rance (France, 240 MW), Sihwa (South Korea, 254 MW); India: Gulf of Kutch, Gulf of Khambhat, Sundarbans.
- Limitations: few sites with large range (more than 5 m needed), intermittent (twice daily), high capital cost, effect on estuary ecology, silting.

**Waste recycling plants (waste to energy):** municipal solid waste is segregated; organic waste goes to biomethanation or composting; dry combustible waste to incineration or refuse-derived fuel (RDF) for boilers; landfill gas is collected; plastic to pyrolysis oil. Benefits: reduces landfill, recovers energy and materials. Issues: mixed wet Indian waste has low calorific value, emissions (dioxins) need control.

### Solved examples

**Example 1: Tidal energy.** Basin area 1 km² (10⁶ m²), tidal range 5 m, sea water density 1025 kg/m³.
- E per tide = ½ × 1025 × 9.81 × 10⁶ × 5² = 1.257 × 10¹¹ J = **34.9 MWh**.
- Average power over one tidal cycle (12.42 h) = 1.257 × 10¹¹ / (12.42 × 3600) = **2.81 MW**.

**Example 2: OTEC Carnot efficiency.** Surface water 27 °C (300 K), deep water 5 °C (278 K). η_Carnot = (300 − 278)/300 = **7.3%**; real net efficiency only 2–3%.

**Example 3: Wave power.** H = 2 m, T = 8 s: P = 1025 × 9.81² × 2² × 8 / (64π) ≈ **15.7 kW per metre** of wave front; a 100 m wide device could intercept about 1.57 MW of wave power.

**Example 4: Biogas from dung.** 1 kg of fresh cattle dung yields about 0.036–0.04 m³ of biogas. A family needing 2 m³ of gas per day needs about 2 / 0.04 = 50 kg of dung daily (about 5 cattle).

### Key points to remember

- Biomass routes: combustion, thermochemical, biochemical, chemical.
- Biogas 55–65% CH₄; floating drum vs fixed dome; pH, temperature, C/N.
- OTEC: closed (ammonia) and open (flash, fresh water); ΔT ≥ 20 °C; low efficiency.
- Wave P = ρg²H²T/(64π); OWC with Wells turbine.
- Tidal E = ½ρgAR²; single and double basin; La Rance.

### Important questions

1. Explain biomass availability and conversion theory. Explain the working of a biogas plant.
2. Explain OTEC: availability, theory, working (open and closed cycles), performance and limitations.
3. Explain wave energy conversion devices with their limitations.
4. Explain tidal power plants: working principle, types, performance and limitations.
5. Explain waste recycling plants (waste to energy).

---

## Last-hour checklist

- [ ] Energy classification; merits and demerits of renewables; India's potential.
- [ ] Solar cell theory, I-V curve, equivalent circuit; FF 0.78 and η 14% example; materials table; arrays; PV plant types.
- [ ] Solar radiation terms; declination 23.45°; day length 13.7 h; flat plate collector and η 52%.
- [ ] Focusing collectors table; solar thermal power plant; solar pond; storage (9.3 kWh tank).
- [ ] Geothermal resources and plants (dry steam, flash, binary); Carnot 33.8%; environment.
- [ ] MHD principle, plant, open and closed cycle, P = σu²B²k(1 − k).
- [ ] Fuel cell reactions; 1.23 V and 83%; types table; limitations.
- [ ] Seebeck, Peltier, Thomson; thermoelectric and thermionic converters.
- [ ] Wind: P = ½ρAV³ (770 kW example), Betz 59.3%, site selection, HAWT vs VAWT, augmenters, power curve.
- [ ] Biomass routes; biogas plants; OTEC (7.3%); wave (15.7 kW/m); tidal (34.9 MWh per tide); waste to energy.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Introduction to Non-Conventional Energy Resources | Raja and others | SciTech Publications | [WorldCat](https://search.worldcat.org/search?q=Introduction+to+Non-Conventional+Energy+Resources+Raja) |
| 2 | Renewable Energy Resources | John Twidell, Tony Weir | BSP Publications (2006) / Routledge | [WorldCat](https://search.worldcat.org/search?q=Renewable+Energy+Resources+Twidell+Weir) |
| 3 | Energy Resources: Conventional and Non-Conventional | M. V. R. Koteswara Rao | BSP Publications (2006) | [WorldCat](https://search.worldcat.org/search?q=Energy+Resources+Conventional+Non-Conventional+Koteswara+Rao) |
| 4 | Non-Conventional Energy Resources | D. S. Chauhan, S. K. Srivastava | New Age International | [WorldCat](https://search.worldcat.org/search?q=Non-Conventional+Energy+Resources+Chauhan+Srivastava) |
| 5 | Renewable Energy Technologies: A Practical Guide for Beginners | Chetan Singh Solanki | PHI Learning | [WorldCat](https://search.worldcat.org/search?q=Renewable+Energy+Technologies+Practical+Guide+Beginners+Solanki) |
| 6 | Advances in Energy Systems and Technology (Vol. I and II) | Peter Auer (ed.) | Academic Press | [WorldCat](https://search.worldcat.org/search?q=Advances+in+Energy+Systems+and+Technology+Auer) |
| 7 | Renewable Energy: Power for a Sustainable Future | Godfrey Boyle (ed.) | Oxford University Press | [WorldCat](https://search.worldcat.org/search?q=Renewable+Energy+Power+for+a+Sustainable+Future+Boyle) |

**Syllabus source:** [AKTU Open Elective syllabus for B.Tech final year, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-Syllabus-BTech-Final-Year-Syllabus-2025-26.pdf)

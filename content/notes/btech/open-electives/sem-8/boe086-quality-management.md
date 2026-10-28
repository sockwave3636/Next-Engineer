---
program: btech
branches: [all]
semester: 8
code: BOE086
name: Quality Management
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-III, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf
units:
  - Quality Concepts and Total Quality Control
  - Quality Organization, Cost and Human Factors
  - Statistical Process Control
  - Defects, Reliability and Quality Circles
  - ISO 9000, Taguchi Method and JIT
---

# BOE086 Quality Management: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: theory, tools and comparison tables.
3. **Solved examples**: the numericals examiners set (cost of quality, X̄–R chart, process capability, p chart with fixed and variable sample size, c chart, reliability, availability, Taguchi loss).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (evolution of quality, TQM, quality in design, procurement, manufacturing and service, claims) and Unit 2 (quality organization, cost of quality, human factors).
- **Afternoon (3 hours):** Unit 3 (control charts and process capability): practise every chart once.
- **Evening (2 hours):** Unit 4 (defect prevention, reliability, zero defects, quality circles) and Unit 5 (ISO 9000, Taguchi, JIT), then the "Last-hour checklist".
- **In the exam:** for charts, write the formula, the constants used, the limits, then the conclusion ("process in control" or "point k out of control"). Draw a neat sketch of the chart.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Quality Concepts and Total Quality Control

### 2-mark definitions

- **Quality:** fitness for use (Juran); conformance to requirements (Crosby); the totality of features and characteristics of a product or service that bear on its ability to satisfy stated or implied needs (ISO 8402); degree to which a set of inherent characteristics fulfils requirements (ISO 9000:2015).
- **Quality control (QC):** the operational techniques and activities (inspection, testing, SPC) used to fulfil requirements for quality.
- **Quality assurance (QA):** all planned and systematic activities that give confidence that a product or service will satisfy quality requirements (prevention-oriented).
- **Total quality control (TQC):** Feigenbaum's concept that quality is the job of every department, from marketing and design to production and service.
- **Total quality management (TQM):** a management philosophy in which the whole organization continuously improves processes, products and services to satisfy customers, with involvement of all employees.
- **Quality of design:** how well the design (specifications) meets customer needs; grade.
- **Quality of conformance:** how well the product matches its design specifications.
- **Inspection:** examining, measuring or testing a product and comparing it with specifications to accept or reject it.
- **Vendor (supplier) quality rating:** a numerical score of a supplier based on quality, delivery, price and service, used in procurement decisions.
- **Claims (warranty) analysis:** studying customer complaints and warranty returns to find causes of field failures and improve design and manufacture.

### Core concepts

**Evolution of quality control**

| Stage | Period | Focus |
|---|---|---|
| Operator quality control | Before 1900 | Craftsman checks own work |
| Foreman quality control | 1900–1918 | Supervisor responsible (Taylor's scientific management) |
| Inspection quality control | 1918–1937 | Separate inspectors, sorting good from bad |
| Statistical quality control | 1937–1960 | Shewhart's control charts (1924), sampling plans (Dodge–Romig), wartime standards |
| Total quality control | 1960s | Feigenbaum: all departments; Japanese companywide QC |
| Total quality management | 1980s onwards | Deming, Juran, Crosby, Ishikawa; customer focus, continuous improvement, ISO 9000, Six Sigma |

**Quality gurus (short)**
- **Deming:** 14 points; PDCA (plan-do-check-act) cycle; reduce variation; system causes 85% of problems; "drive out fear".
- **Juran:** fitness for use; quality trilogy (planning, control, improvement); Pareto principle (vital few, trivial many).
- **Crosby:** zero defects; "quality is free"; cost of quality; four absolutes.
- **Ishikawa:** cause-and-effect (fishbone) diagram; quality circles; seven QC tools.
- **Feigenbaum:** total quality control; hidden plant (rework capacity).
- **Taguchi:** loss function; robust design.

**Dimensions of quality (Garvin):** performance, features, reliability, conformance, durability, serviceability, aesthetics, perceived quality. **Service quality (SERVQUAL):** tangibles, reliability, responsiveness, assurance, empathy.

**TQM principles:** customer focus, top management commitment and leadership, employee involvement and empowerment, continuous improvement (kaizen), process approach, fact-based decisions (data, SPC), supplier partnership, training, teamwork. **Benefits:** fewer defects, lower cost, customer loyalty, employee morale, market share.

**Seven QC tools:** check sheet, histogram, Pareto chart, cause-and-effect (fishbone) diagram, scatter diagram, control chart, stratification (or flowchart).

**Quality in design:** understand customer needs (market research, QFD — house of quality), set specifications and tolerances, design reviews, design for manufacturability and reliability, prototype testing, FMEA, value engineering, robust (Taguchi) design.

**Control on purchased product (procurement):** vendor selection and evaluation; vendor rating (quality, delivery, price); clear specifications in purchase orders; incoming inspection and acceptance sampling; vendor audits and certification ("ship-to-stock" for certified suppliers); supplier development and long-term partnerships.

**Manufacturing quality:** process planning and capability studies; first-piece inspection; in-process inspection and SPC; final inspection; calibration of gauges; work instructions; mistake-proofing (poka-yoke); handling and storage; nonconformance control and corrective action.

**Service quality:** intangible, produced and consumed together, variable, perishable; measure with SERVQUAL gaps (expectation vs perception); standards for response time, courtesy; complaint handling; training of front-line staff.

**Claims and complaints analysis:** collect field failure data (warranty claims, complaints, returns); classify by product, defect type, plant, period; Pareto analysis; root-cause analysis; corrective actions in design/manufacturing/supplier; track claims per 1,000 units sold; feed back to design.

### Solved examples

**Example 1: Vendor rating.** Weights: quality 50, delivery 30, price 20.
- Vendor A: 960 of 1,000 accepted; 18 of 20 lots on time; price ₹100 (lowest).
- Quality = 50 × 0.96 = 48; delivery = 30 × 0.9 = 27; price = 20 × (100/100) = 20. **Rating = 95**.
- Vendor B: 990 accepted; 20 of 20 on time; price ₹110. Quality = 49.5; delivery = 30; price = 20 × 100/110 = 18.2. **Rating = 97.7** → B is better overall.

**Example 2: Pareto of warranty claims.** Claims: wiring 120, switch 60, paint 30, packing 20, others 10 (total 240). Wiring + switch = 180/240 = **75%** of claims from two causes → fix those first.

### Key points to remember

- Evolution: operator → foreman → inspection → SQC → TQC → TQM.
- QC (detection, operational) vs QA (prevention, systematic).
- Gurus: Deming PDCA/14 points, Juran trilogy/Pareto, Crosby zero defects, Ishikawa fishbone/circles, Feigenbaum TQC, Taguchi loss.
- Quality of design vs conformance; vendor rating; claims analysis with Pareto.

### Important questions

1. Trace the evolution of quality control. Define quality, QC, QA and TQM.
2. Explain the principles of TQM and the contributions of Deming, Juran and Crosby.
3. Explain quality in design and control on purchased product (vendor rating).
4. Explain quality in manufacturing and service quality.
5. Explain analysis of claims for quality improvement.

---

## Unit 2: Quality Organization, Cost and Human Factors

### 2-mark definitions

- **Quality organization:** the structure of responsibilities, authorities and relationships through which quality functions (planning, inspection, QA, testing) are carried out.
- **Quality cost (cost of quality, COQ):** the total cost of ensuring quality plus the cost of failing to achieve it: prevention + appraisal + internal failure + external failure.
- **Prevention cost:** cost to prevent defects: quality planning, training, process control, design reviews, supplier development.
- **Appraisal cost:** cost of measuring and checking quality: inspection, testing, calibration, audits.
- **Internal failure cost:** cost of defects found before delivery: scrap, rework, re-inspection, downtime.
- **External failure cost:** cost of defects found after delivery: warranty, returns, complaints, recalls, lost goodwill.
- **Cost of poor quality (COPQ):** internal + external failure costs.
- **Optimum quality cost:** the quality level at which total quality cost is minimum (classical model); modern view: total cost keeps falling towards zero defects.
- **Operator controllability:** the condition in which an operator can be held responsible for quality: knows what to do (specifications), knows what they are doing (feedback), and can regulate the process (Juran).
- **Quality attitude:** the mindset and commitment of people towards doing work right the first time.

### Core concepts

**Quality organization:** quality department headed by a quality manager reporting to top management (independence from production); functions: quality planning, QA/audits, inspection and testing, metrology lab, supplier quality, customer quality/complaints, quality engineering and SPC, training. Forms: functional, line-and-staff, matrix, team-based (cross-functional). Principle: everyone is responsible for quality; the quality department coordinates and guides.

**Cost of quality**

| Category | Examples |
|---|---|
| Prevention | Quality planning, training, design reviews, process capability studies, preventive maintenance, supplier evaluation, quality circles |
| Appraisal | Incoming, in-process and final inspection; testing; calibration; quality audits; test equipment |
| Internal failure | Scrap, rework, re-test, downgrading, downtime, failure analysis |
| External failure | Warranty, field repair, returns, complaint handling, product liability, recall, lost sales and goodwill |

**Optimization of quality cost:** classical curve: as conformance rises, prevention + appraisal costs rise and failure costs fall; total cost has a minimum short of 100% conformance. Modern view (Crosby, TQM): prevention is cheap relative to failure; with better technology total cost keeps falling as defects approach zero ("quality is free"). Strategy: invest in prevention, reduce appraisal by process control, drive failure costs down. Report COQ as % of sales (often 15–25% in poor firms, < 5% in excellent firms).

**Human factors in quality**
- Causes of operator errors: inadvertent (lapses), technique (lack of skill/knowledge), wilful (conscious).
- Remedies: mistake-proofing (poka-yoke) and automation for inadvertent errors; training and better methods for technique errors; motivation, communication and management action for wilful errors.
- Motivation: recognition, participation (quality circles, suggestion schemes), fair rewards, good working conditions, clear goals, feedback.

**Attitude of top management:** quality must be led from the top: quality policy and objectives, resources, visible commitment, review of quality results, refusing to ship defective goods, building a quality culture. Deming: management is responsible for 85% of problems.

**Operator responsibility (self-control):** give the operator clear specifications, measuring instruments and feedback, and a capable process; then the operator can be responsible ("operator controllable defects"). Otherwise defects are "management controllable".

**Employee and supervisor roles:** supervisors plan, train, verify process settings, ensure discipline; employees follow methods, self-inspect, report problems, suggest improvements.

### Solved examples

**Example 1: Cost of quality.** Annual figures (₹ lakh): training 4, design review 3, inspection 10, calibration 2, scrap 12, rework 8, warranty 15, customer returns 6.
- Prevention = 7; appraisal = 12; internal failure = 20; external failure = 21.
- **Total COQ = ₹60 lakh**; COPQ = 41 lakh (68%).
- If sales are ₹600 lakh, COQ = **10% of sales**. Investing more in prevention should lower the failure costs.

**Example 2: Effect of prevention.** Prevention is raised from ₹7 lakh to ₹15 lakh; failures fall by 40% (from 41 to 24.6) and appraisal by 2. New COQ = 15 + 10 + 24.6 = **₹49.6 lakh** → saving ₹10.4 lakh a year.

### Key points to remember

- COQ = prevention + appraisal + internal failure + external failure.
- Classical optimum vs modern "zero defects is cheapest" view.
- Operator errors: inadvertent, technique, wilful → poka-yoke, training, motivation.
- Operator controllability: know what to do, know what they are doing, can regulate.
- Top management commitment is the first requirement of TQM.

### Important questions

1. Explain the organization for quality and the functions of a quality department.
2. What is quality cost? Explain its categories with examples.
3. Explain the optimization of quality cost with a diagram (classical and modern view).
4. Explain human factors in quality and the types of operator errors with remedies.
5. Explain the role of top management attitude and operator responsibility in quality.

---

## Unit 3: Statistical Process Control

### 2-mark definitions

- **Statistical process control (SPC):** using statistical methods, especially control charts, to monitor and control a process.
- **Chance (common) causes:** many small, random causes always present in a process; they produce natural variation.
- **Assignable (special) causes:** identifiable causes (tool wear, wrong setting, bad material) that produce unusual variation and must be found and removed.
- **Control chart:** a time-ordered plot of a sample statistic with a centre line and upper and lower control limits (usually ±3σ) to distinguish chance from assignable causes.
- **Process in statistical control:** a process with only chance causes; all points within limits and no non-random patterns.
- **Variables chart:** a chart for measurable characteristics (X̄, R, s charts).
- **Attributes chart:** a chart for countable characteristics (p, np, c, u charts).
- **Process capability:** the natural spread of a process (6σ) compared with the specification width.
- **Cp:** Cp = (USL − LSL)/6σ, potential capability (ignores centring).
- **Cpk:** Cpk = min[(USL − μ)/3σ, (μ − LSL)/3σ], actual capability including centring.

### Core concepts

**Theory of control charts (Shewhart):** if only chance causes act, sample statistics follow a stable distribution; 99.73% of points fall within ±3σ. A point outside the limits, or a non-random pattern, signals an assignable cause. Type I error (false alarm) = 0.27% with 3σ limits.

**Signs of out-of-control (run rules):** a point outside 3σ limits; 7 or more consecutive points on one side of the centre line (run); 7 consecutive points rising or falling (trend); 2 of 3 points beyond 2σ; cycles; hugging the centre line or the limits.

**X̄ and R charts (n = 2 to 10)**
- Centre lines: X̿ (grand mean), R̄ (average range).
- X̄ chart: UCL = X̿ + A₂R̄, LCL = X̿ − A₂R̄.
- R chart: UCL = D₄R̄, LCL = D₃R̄.
- Estimate σ = R̄/d₂.

| n | A₂ | D₃ | D₄ | d₂ |
|---|---|---|---|---|
| 2 | 1.880 | 0 | 3.267 | 1.128 |
| 3 | 1.023 | 0 | 2.574 | 1.693 |
| 4 | 0.729 | 0 | 2.282 | 2.059 |
| 5 | 0.577 | 0 | 2.114 | 2.326 |
| 6 | 0.483 | 0 | 2.004 | 2.534 |

Steps: collect 20–25 subgroups → compute X̄ and R of each → limits → plot R chart first (spread must be in control) → then X̄ chart → remove out-of-control points with known causes and revise limits.

**Process capability:** compare 6σ with tolerance. Cp < 1: not capable; 1–1.33: barely capable; ≥ 1.33: capable; Six Sigma aims at Cp = 2, Cpk = 1.5. Cpk = Cp only when the process is centred.

**Attribute charts**

| Chart | Plots | Centre line | Limits |
|---|---|---|---|
| p chart | Fraction defective | p̄ = total defectives / total inspected | p̄ ± 3√(p̄(1 − p̄)/n) |
| np chart | Number defective (constant n) | np̄ | np̄ ± 3√(np̄(1 − p̄)) |
| c chart | Defects per unit (constant unit size) | c̄ | c̄ ± 3√c̄ |
| u chart | Defects per unit (variable size) | ū | ū ± 3√(ū/n) |

LCL below 0 is taken as 0.

**Variable sample size (p chart):** methods: (1) individual limits for each sample using its own nᵢ; (2) average sample size n̄ if nᵢ vary less than ±25%; (3) standardized chart z = (pᵢ − p̄)/√(p̄(1 − p̄)/nᵢ) with limits ±3.

**Variables vs attributes charts**

| Feature | Variables (X̄, R) | Attributes (p, c) |
|---|---|---|
| Data | Measured (mm, kg) | Counted (defective or not, number of defects) |
| Information | More, shows trends early | Less |
| Sample size | Small (4–5) | Large (50–200) |
| Cost per check | Higher | Lower |
| Characteristics covered | One per chart | Many together |

### Solved examples

**Example 1: X̄ and R chart.** 20 subgroups of n = 5; X̿ = 50.0 mm, R̄ = 4.0 mm.
- X̄ chart: UCL = 50 + 0.577 × 4 = **52.31**, LCL = **47.69**, CL = 50.
- R chart: UCL = 2.114 × 4 = **8.46**, LCL = 0, CL = 4.
- A subgroup with X̄ = 52.8 is **out of control** → look for an assignable cause.

**Example 2: Process capability.** From Example 1, σ = R̄/d₂ = 4/2.326 = 1.72 mm. Specification 50 ± 6 mm (USL 56, LSL 44).
- **Cp = 12/(6 × 1.72) = 1.16** → barely capable.
- If the mean shifts to 51 mm: (56 − 51)/(3 × 1.72) = 0.97; (51 − 44)/5.16 = 1.36. **Cpk = 0.97** → not capable on the upper side; re-centre the process.

**Example 3: p chart.** 20 samples of 100; total defectives 160.
- p̄ = 160/2,000 = **0.08**.
- σ_p = √(0.08 × 0.92/100) = 0.0271.
- **UCL = 0.08 + 3 × 0.0271 = 0.161**; LCL = 0.08 − 0.081 < 0 → **0**.
- A sample with 18 defectives (p = 0.18) is out of control.

**Example 4: Variable sample size.** Same p̄ = 0.08. For a sample of n = 150: UCL = 0.08 + 3√(0.08 × 0.92/150) = **0.146**. For n = 50: UCL = **0.195**. Larger samples get tighter limits.

**Example 5: c chart.** Defects on 25 cloth rolls total 100 → c̄ = **4**. UCL = 4 + 3 × 2 = **10**; LCL = 4 − 6 < 0 → **0**. A roll with 12 defects is out of control.

### Key points to remember

- Chance vs assignable causes; ±3σ; run rules.
- X̄: X̿ ± A₂R̄; R: D₃R̄, D₄R̄; n = 5 → A₂ 0.577, D₄ 2.114, d₂ 2.326.
- Cp = tolerance/6σ; Cpk uses nearest limit; ≥ 1.33 is capable.
- p: p̄ ± 3√(p̄q̄/n); c: c̄ ± 3√c̄; LCL < 0 → 0.
- Variable n: individual limits, average n, or standardized chart.

### Important questions

1. Explain the theory of control charts: chance and assignable causes, and the run rules.
2. Construct X̄ and R charts for given data and interpret them.
3. Explain process capability and the indices Cp and Cpk with a numerical.
4. Construct a p chart (fixed and variable sample size) and an np chart.
5. Construct a c chart. Compare variables and attributes control charts.

---

## Unit 4: Defects, Reliability and Quality Circles

### 2-mark definitions

- **Defect:** a departure of a quality characteristic from its intended level that makes the product fail to meet a requirement; classified as critical, major and minor.
- **Defect diagnosis:** finding the root cause of defects using data and tools (Pareto, fishbone, 5 whys, experiments).
- **Reliability:** the probability that a product performs its intended function without failure for a stated time under stated conditions.
- **Failure rate (λ):** number of failures per unit time; for a constant rate, R(t) = e^{−λt}.
- **MTTF (mean time to failure):** average time to failure of non-repairable items; MTTF = 1/λ for constant λ.
- **MTBF (mean time between failures):** average time between failures of repairable items.
- **Maintainability:** the probability that a failed item is restored to working condition within a given time; measured by MTTR (mean time to repair).
- **Availability:** the fraction of time a system is ready for use: A = MTBF/(MTBF + MTTR).
- **Zero defects (ZD):** Crosby's performance standard and programme aimed at doing things right the first time, so that no defect is acceptable.
- **Quality circle (QC):** a small group (6–10) of employees from the same work area who meet voluntarily and regularly to identify, analyse and solve work-related problems.

### Core concepts

**Defect diagnosis and prevention**
- Classify defects (critical, major, minor) and collect data (check sheets).
- Pareto analysis to find the vital few defects.
- Cause-and-effect diagram (6M: man, machine, method, material, measurement, mother nature/environment).
- 5 Whys; stratification; scatter diagram; design of experiments.
- Corrective action (remove the cause) and preventive action (stop it occurring elsewhere): poka-yoke, FMEA, SPC, training, standard work, supplier action.
- Verify effectiveness and standardize.

**Bathtub curve:** infant mortality (decreasing failure rate, early defects → burn-in, screening), useful life (constant failure rate, random failures → exponential model), wear-out (increasing failure rate → preventive replacement).

**Reliability evaluation**
- Constant λ: R(t) = e^{−λt}, MTTF = 1/λ.
- Series system: R_s = R₁ × R₂ × … × Rₙ; λ_s = Σλᵢ.
- Parallel (redundant) system: R_p = 1 − Π(1 − Rᵢ).
- Failure rate from test data: λ = number of failures / total operating hours.

**Reliability control / improvement:** design with margins (derating), simplicity, redundancy, high-reliability components, environmental protection, FMEA and fault-tree analysis, reliability testing (accelerated life tests, burn-in), field data feedback, preventive maintenance, supplier control.

**Maintainability:** design for easy access, modular replacement, standard parts, diagnostics and fault indicators, clear manuals, trained staff, spares availability. Reduce MTTR to raise availability.

**Zero defects programme (Crosby):** management commitment; quality improvement team; measurement; cost of quality; quality awareness; corrective action; ZD planning; employee education; ZD day (commitment); goal setting; error-cause removal; recognition; quality councils; do it over again (14 steps). Criticism: slogans without system improvements do not work (Deming).

**Quality circles**
- Origin: Japan, Ishikawa (1962); India: BHEL (1980) was among the first.
- Structure: steering committee → facilitator → circle leader → members (6–10).
- Process: identify problems → select a problem → analyse (7 QC tools) → generate solutions → present to management → implement → review.
- Benefits: problem solving at the source, employee participation and morale, skill development, teamwork, better communication, quality and productivity gains.
- Reasons for failure: lack of management support, no follow-up, poor training, using circles for grievances, impatience for results.

### Solved examples

**Example 1: Exponential reliability.** λ = 0.0002 failures/h. **MTTF = 1/λ = 5,000 h**. R(1,000 h) = e^{−0.2} = **0.819**.

**Example 2: Series and parallel.** Three components in series with R = 0.90, 0.95, 0.98 → R_s = **0.838**. Two identical units of R = 0.9 in parallel → R_p = 1 − 0.1² = **0.99**.

**Example 3: Mixed system.** A 0.95-reliable pump in series with two parallel valves (0.9 each): R = 0.95 × 0.99 = **0.9405**.

**Example 4: Failure rate from test.** 20 items tested for 500 h; 4 failed at 100, 200, 300 and 400 h. Total operating time = 100 + 200 + 300 + 400 + 16 × 500 = 9,000 h. λ = 4/9,000 = **4.44 × 10⁻⁴ per hour**; MTTF ≈ **2,250 h**.

**Example 5: Availability.** MTBF = 500 h, MTTR = 20 h. **A = 500/520 = 96.2%**. Halving MTTR to 10 h gives 98.0%.

### Key points to remember

- Bathtub curve: infant mortality, useful life (constant λ), wear-out.
- R = e^{−λt}; MTTF = 1/λ; series multiply R; parallel 1 − Π(1 − R).
- Availability = MTBF/(MTBF + MTTR).
- Zero defects: Crosby, 14 steps, "do it right the first time".
- Quality circle: 6–10 volunteers, same area, 7 QC tools, management support.

### Important questions

1. Explain defect diagnosis and prevention techniques.
2. Define reliability. Explain the bathtub curve and reliability of series and parallel systems with numericals.
3. Explain MTTF, MTBF, maintainability and availability.
4. Explain the zero defects programme.
5. What is a quality circle? Explain its structure, working, benefits and reasons for failure.

---

## Unit 5: ISO 9000, Taguchi Method and JIT

### 2-mark definitions

- **ISO 9000 series:** international standards for quality management systems (QMS) published by the International Organization for Standardization: ISO 9000 (fundamentals and vocabulary), ISO 9001 (requirements, the only certifiable one), ISO 9004 (sustained success).
- **QMS (quality management system):** the organizational structure, processes, procedures and resources for implementing quality management.
- **Certification (registration):** independent audit by an accredited certification body confirming that a QMS meets ISO 9001.
- **Taguchi method:** a quality engineering approach that uses the loss function, robust design and orthogonal-array experiments to make products insensitive to variation.
- **Quality loss function:** L(y) = k(y − m)², the loss to society from any deviation of a characteristic y from its target m.
- **Robust design:** designing products and processes whose performance is insensitive to noise factors (variation in materials, environment, use).
- **Signal-to-noise (S/N) ratio:** Taguchi's measure of robustness; larger S/N means less sensitivity to noise.
- **Orthogonal array:** a balanced experimental design (L4, L8, L9, L18) that studies many factors with few trials.
- **Just-in-time (JIT):** a production philosophy of producing and delivering exactly what is needed, when it is needed, in the quantity needed, eliminating waste.
- **Kanban:** a card/signal system used in JIT pull production to authorize production or movement of parts.

### Core concepts

**ISO 9001:2015 structure (high-level structure):** clauses 1–3 (scope, references, terms), **4 context of the organization**, **5 leadership**, **6 planning** (risks and opportunities, objectives), **7 support** (resources, competence, awareness, communication, documented information), **8 operation**, **9 performance evaluation** (monitoring, internal audit, management review), **10 improvement** (nonconformity, corrective action, continual improvement). Based on PDCA and risk-based thinking.

**Seven quality management principles (ISO 9000:2015):** customer focus, leadership, engagement of people, process approach, improvement, evidence-based decision making, relationship management.

**Related standards:** ISO 14001 (environment), ISO 45001 (occupational health and safety), IATF 16949 (automotive), AS9100 (aerospace), ISO 13485 (medical devices), ISO/IEC 17025 (labs), ISO 22000 (food), ISO/IEC 27001 (information security).

**Steps to ISO 9001 certification:** management decision and quality policy → appoint management representative/team → training and awareness → gap analysis → document QMS (quality manual optional in 2015 version, procedures, records) → implement → internal audits → management review → choose certification body → stage 1 (documentation) and stage 2 (implementation) audits → certificate (3 years) → annual surveillance audits.

**Benefits of ISO 9000:** consistent processes, customer confidence, market access (exports, government tenders), fewer defects, clear responsibilities, continual improvement. **Limitations:** paperwork, cost, may become a certificate-only exercise.

**Taguchi's philosophy**
1. Quality loss occurs whenever a characteristic deviates from target, not only outside specifications ("goal-post" view is wrong).
2. Loss is approximately quadratic: L = k(y − m)², k = A₀/Δ₀² (A₀ = loss at tolerance limit Δ₀).
3. Reduce variation by robust design rather than by tighter inspection.
4. Three stages of design: **system design** (concept), **parameter design** (choose levels of control factors to minimize sensitivity to noise), **tolerance design** (tighten tolerances only where needed).
5. Use orthogonal arrays and S/N ratios.

**S/N ratios:** smaller-the-better: −10 log(Σy²/n); larger-the-better: −10 log(Σ(1/y²)/n); nominal-the-best: 10 log(ȳ²/s²).

**Just-in-time**
- Seven wastes (Ohno, TIMWOOD): overproduction, waiting, transportation, over-processing, inventory, motion, defects.
- Elements: pull system with kanban, small lot sizes, quick set-up (SMED), level (heijunka) scheduling, cellular layout, preventive maintenance (TPM), multi-skilled workers, jidoka (stop on defect), poka-yoke, few reliable suppliers close by with frequent deliveries, quality at the source, continuous improvement.
- **Link with quality:** low inventory exposes problems ("lowering the water reveals the rocks"); defects stop the line, so quality must be built in.
- Benefits: low inventory and space, short lead times, better quality, flexibility, lower cost. Limitations: vulnerable to supply disruptions, needs stable demand and reliable suppliers.

### Solved examples

**Example 1: Taguchi loss.** Specification 20 ± 0.5 mm; a part at the limit costs ₹200 to scrap/repair. k = 200/0.5² = **800**. A part at 20.2 mm: L = 800 × 0.2² = **₹32**. A process with mean on target and σ = 0.1 mm: average loss = k σ² = 800 × 0.01 = **₹8 per part**.

**Example 2: Average loss with offset.** Mean 20.1, σ = 0.1: average loss = k[σ² + (μ − m)²] = 800 × (0.01 + 0.01) = **₹16** → centring the process halves the loss.

**Example 3: S/N ratio (smaller-the-better).** Surface roughness readings 2, 3, 3 µm: Σy²/n = (4 + 9 + 9)/3 = 7.33. S/N = −10 log 7.33 = **−8.65 dB**. A setting giving −6 dB is better (higher).

**Example 4: Number of kanbans.** Demand 500 parts/day (8 h), lead time 2 h, container 25 parts, safety factor 10%. Demand during lead time = 500 × 2/8 = 125. N = 125 × 1.1/25 = 5.5 → **6 kanbans**.

### Key points to remember

- ISO 9001 = requirements (certifiable); clauses 4–10; 7 QM principles; PDCA, risk-based thinking.
- Taguchi: L = k(y − m)²; k = A₀/Δ₀²; average loss k[σ² + (μ − m)²]; system, parameter, tolerance design; S/N ratios; orthogonal arrays.
- JIT: pull, kanban, small lots, SMED, TPM, poka-yoke, 7 wastes; kanbans = D × L × (1 + α)/C.

### Important questions

1. Explain the ISO 9000 series. Describe the clauses of ISO 9001:2015 and the steps to certification.
2. Explain the quality management principles and the benefits of ISO 9000.
3. Explain Taguchi's quality loss function and robust design with a numerical.
4. Explain parameter design, orthogonal arrays and S/N ratios.
5. What is JIT? Explain its elements and its relation with quality. Compute kanbans.

---

## Last-hour checklist

- [ ] Quality definitions; QC vs QA; evolution table; gurus; Garvin and SERVQUAL dimensions; TQM principles; 7 QC tools.
- [ ] Quality in design, procurement (vendor rating 95 vs 97.7), manufacturing, service; claims (Pareto 75%).
- [ ] Quality organization; COQ four categories (₹60 lakh, 10% of sales); optimization curve; human factors (three error types); top management; operator controllability.
- [ ] Chance vs assignable; run rules; X̄–R (52.31/47.69, 8.46); constants table; Cp 1.16, Cpk 0.97.
- [ ] p chart (UCL 0.161), variable n (0.146, 0.195), c chart (UCL 10); variables vs attributes.
- [ ] Defect diagnosis; bathtub; R = e^{−λt} (0.819); series 0.838, parallel 0.99; λ from test (2,250 h); availability 96.2%; zero defects; quality circles.
- [ ] ISO 9001 clauses and principles; certification steps; Taguchi loss (₹32, ₹8, ₹16); S/N; JIT elements; kanbans (6).

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Total Quality Management | Lt. Gen. H. Lal | Eastern Limited (New Age) | [WorldCat](https://search.worldcat.org/search?q=Total+Quality+Management+H.+Lal) |
| 2 | Beyond Total Quality Management | Greg Bounds and others | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Beyond+Total+Quality+Management+Bounds) |
| 3 | TQM in New Product Manufacturing | H. G. Menon | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=TQM+in+New+Product+Manufacturing+Menon) |

**Syllabus source:** [AKTU Open Elective-III and IV syllabus for B.Tech 8th semester, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf)

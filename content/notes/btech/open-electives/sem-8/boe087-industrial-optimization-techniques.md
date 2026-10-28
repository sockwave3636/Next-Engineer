---
program: btech
branches: [all]
semester: 8
code: BOE087
name: Industrial Optimization Techniques
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-III, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf
units:
  - Optimization, Linear Programming, Transportation and Assignment
  - Sequencing and Network Analysis
  - Game Theory and Queuing Models
  - Dynamic Programming and Simulation
  - Inventory and Replacement Models
---

# BOE087 Industrial Optimization Techniques: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: methods and step-by-step procedures.
3. **Solved examples**: the numericals that decide your marks (graphical LP, simplex, dual, VAM and MODI, Hungarian, travelling salesman, Johnson's rule for 2 and 3 machines, CPM/PERT, saddle point, mixed strategy, M/M/1 queue, dynamic programming, Monte Carlo simulation, EOQ, quantity discount, newsvendor, safety stock, individual and group replacement).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (formulation, graphical, simplex, dual simplex, transportation, assignment, TSP) and Unit 2 (sequencing, CPM, PERT). Work every example with a pen.
- **Afternoon (3 hours):** Unit 3 (games and queues) and Unit 4 (dynamic programming and simulation).
- **Evening (2 hours):** Unit 5 (inventory and replacement), then the "Last-hour checklist".
- **In the exam:** this is a numerical paper. Write the model (variables, objective, constraints) first, then each table or stage, and box the final answer with units.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Optimization, Linear Programming, Transportation and Assignment

### 2-mark definitions

- **Optimization:** finding the best value (maximum or minimum) of an objective function subject to constraints.
- **Engineering optimization problem:** choose design variables X to minimize or maximize f(X) subject to gᵢ(X) ≤ 0 and hⱼ(X) = 0.
- **Objective function:** the quantity to be optimized (cost, profit, weight, time).
- **Operations research (OR):** the application of scientific methods, especially mathematical models, to decision problems in the management of systems, to find the best (optimal) solution under constraints.
- **Model:** a simplified representation of a real system; types: iconic (physical), analogue, mathematical (symbolic).
- **Linear programming (LP):** optimizing a linear objective function subject to linear equality and inequality constraints and non-negativity.
- **Decision variables:** the unknowns whose values the decision maker controls.
- **Feasible region:** the set of all points satisfying every constraint.
- **Optimal solution:** a feasible solution that gives the best value of the objective.
- **Slack variable:** added to a ≤ constraint to make it an equation (unused resource).
- **Surplus variable:** subtracted from a ≥ constraint to make it an equation.
- **Artificial variable:** added to ≥ or = constraints to get an initial basic feasible solution (Big-M or two-phase method).
- **Basic feasible solution (BFS):** a solution with at most m non-zero variables (m = number of constraints) that satisfies all constraints; corresponds to a corner point.
- **Duality:** every LP (primal) has a related LP (dual) whose optimal value is equal; dual variables are shadow prices of resources.
- **Shadow price:** the increase in the optimal objective per unit increase in a resource.
- **Sensitivity analysis:** studying how the optimal solution changes when coefficients or resources change.
- **Transportation problem:** finding how much to ship from each source to each destination to meet demand at minimum total cost.
- **Balanced transportation problem:** total supply equals total demand; otherwise add a dummy row or column with zero cost.
- **Initial basic feasible solution:** a starting allocation with m + n − 1 occupied cells (North-West corner, least cost, Vogel's approximation).
- **Degeneracy in transportation:** fewer than m + n − 1 occupied cells; fix by putting a tiny ε in an independent empty cell.
- **MODI (u-v) method:** the optimality test that uses u_i + v_j = c_ij for occupied cells and checks Δ_ij = c_ij − u_i − v_j for empty cells.
- **Assignment problem:** assigning n jobs to n workers (one to one) to minimize total cost or time.
- **Hungarian method:** the algorithm for assignment problems using row and column reductions and covering zeros with the minimum number of lines.
- **Travelling salesman problem (TSP):** finding the shortest route that visits each of n cities exactly once and returns to the start; an assignment problem with the extra condition of no sub-tours.

### Core concepts

**History of optimization:** calculus methods (Newton, Lagrange multipliers, 18th century); calculus of variations (Bernoulli, Euler); operations research in World War II (radar deployment, convoys); **Dantzig's simplex method (1947)**; Kuhn–Tucker conditions (1951) for nonlinear programming; Bellman's dynamic programming (1950s); integer programming (Gomory); modern heuristics: genetic algorithms (Holland, 1975), simulated annealing, particle swarm.

**Engineering applications:** design of structures for minimum weight, production planning and product mix, blending, scheduling and sequencing, transportation and logistics, inventory, project management, optimal machining conditions, power dispatch, network design, chemical process optimization, facility layout and location.

**Classification of optimization problems:** constrained vs unconstrained; linear vs nonlinear; integer vs continuous; static vs dynamic; deterministic vs stochastic; single vs multi-objective.

**Formulation steps:** (1) identify decision variables, (2) write the objective function, (3) write all constraints (resources, demand, technology), (4) add non-negativity.

**Phases of OR:** (1) formulate the problem, (2) construct a model, (3) derive a solution, (4) test the model and solution, (5) establish controls, (6) implement.

**Assumptions of LP:** proportionality, additivity, divisibility (continuous variables), certainty (known coefficients), non-negativity, finiteness.

**Graphical method (two variables):** plot each constraint as a line, shade the feasible region, find its corner points, evaluate Z at each (or slide the iso-profit line); the best corner is optimal.

**Simplex method steps (maximization)**

1. Convert to standard form with slack variables; set up the initial table with slacks as the basis.
2. Compute the Z row (Z_j − C_j). If all ≥ 0, optimal.
3. **Entering variable:** most negative Z_j − C_j.
4. **Leaving variable:** minimum positive ratio of RHS / pivot column entry (minimum ratio test).
5. Pivot: make the pivot element 1 and other entries in its column 0.
6. Repeat from step 2.

**Special cases**

| Case | Sign in simplex |
|---|---|
| Alternative optima | A non-basic variable has Z_j − C_j = 0 in the optimal table |
| Unbounded solution | Entering column has no positive entries for the ratio test |
| Infeasible solution | An artificial variable remains positive in the optimal table |
| Degeneracy | A tie in the minimum ratio, or a basic variable equal to 0 (risk of cycling) |

**Dual simplex method:** used when the starting table is optimal (all Z_j − C_j ≥ 0) but infeasible (some RHS negative), typical after converting ≥ constraints by multiplying by −1. Leaving variable: most negative RHS. Entering variable: minimum |(Z_j − C_j) / a_rj| over negative a_rj in the pivot row.

**Primal-dual rules:** max ↔ min; objective coefficients ↔ RHS; constraint matrix transposed; ≤ constraints in a max problem give non-negative dual variables; an equality constraint gives an unrestricted dual variable. **Duality theorems:** weak duality (any feasible max value ≤ any feasible min value), strong duality (optimal values equal), complementary slackness.

**Sensitivity analysis:** ranges of objective coefficients over which the current basis stays optimal; ranges of RHS over which shadow prices stay valid; effect of adding a variable or a constraint.

**Methods for the initial solution**

| Method | Rule | Quality |
|---|---|---|
| North-West Corner (NWCR) | Start at top-left, allocate maximum, move right or down | Simple, ignores cost, usually poor |
| Least Cost Method (LCM) | Allocate to the cheapest cell first | Better |
| Vogel's Approximation (VAM) | Penalty = difference of two lowest costs in each row and column; allocate in the lowest-cost cell of the row/column with the largest penalty | Usually near optimal |

**MODI method:** set u₁ = 0, solve u_i + v_j = c_ij for occupied cells, compute Δ_ij = c_ij − (u_i + v_j) for empty cells. If all Δ ≥ 0, optimal. Otherwise the most negative Δ cell enters; form a closed loop (+ − + −) through occupied cells; θ = minimum allocation in − cells; adjust and repeat.

**Variants:** unbalanced (dummy), maximization (subtract all from the largest value), prohibited routes (cost = M), degeneracy (ε).

**Hungarian method steps**

1. Balance the matrix (dummy row or column with zeros).
2. Subtract the row minimum from each row, then the column minimum from each column.
3. Cover all zeros with the minimum number of lines.
4. If lines = n, make the assignment (one zero per row and column). Otherwise subtract the smallest uncovered value from all uncovered cells, add it at line intersections, and repeat step 3.

Maximization: subtract every element from the largest element first. Restricted assignment: put M in forbidden cells.

**Travelling salesman problem:** formulate as an assignment problem with c_ii = ∞ (M). Solve by the Hungarian method; if the result contains sub-tours, try the next best zero assignments (or branch and bound) until a single tour is obtained. For small problems, enumerate all (n − 1)! tours.

### Solved examples

**Example 1: Graphical method.** Max Z = 3x₁ + 5x₂ subject to x₁ ≤ 4, 2x₂ ≤ 12, 3x₁ + 2x₂ ≤ 18, x₁, x₂ ≥ 0.
- Corner points: (0, 0) Z = 0; (4, 0) Z = 12; (4, 3) Z = 27; (2, 6) Z = 36; (0, 6) Z = 30.
- **Optimum x₁ = 2, x₂ = 6, Z = 36**.

**Example 2: Simplex for the same problem.** Add slacks s₁, s₂, s₃.

Initial table:

| Basis | x₁ | x₂ | s₁ | s₂ | s₃ | RHS | Ratio |
|---|---|---|---|---|---|---|---|
| s₁ | 1 | 0 | 1 | 0 | 0 | 4 | – |
| s₂ | 0 | 2 | 0 | 1 | 0 | 12 | 6 |
| s₃ | 3 | 2 | 0 | 0 | 1 | 18 | 9 |
| Z | −3 | −5 | 0 | 0 | 0 | 0 | |

x₂ enters (−5), s₂ leaves (ratio 6). After pivoting:

| Basis | x₁ | x₂ | s₁ | s₂ | s₃ | RHS | Ratio |
|---|---|---|---|---|---|---|---|
| s₁ | 1 | 0 | 1 | 0 | 0 | 4 | 4 |
| x₂ | 0 | 1 | 0 | 0.5 | 0 | 6 | – |
| s₃ | 3 | 0 | 0 | −1 | 1 | 6 | 2 |
| Z | −3 | 0 | 0 | 2.5 | 0 | 30 | |

x₁ enters (−3), s₃ leaves (ratio 2). Final table:

| Basis | x₁ | x₂ | s₁ | s₂ | s₃ | RHS |
|---|---|---|---|---|---|---|
| s₁ | 0 | 0 | 1 | 1/3 | −1/3 | 2 |
| x₂ | 0 | 1 | 0 | 1/2 | 0 | 6 |
| x₁ | 1 | 0 | 0 | −1/3 | 1/3 | 2 |
| Z | 0 | 0 | 0 | 3/2 | 1 | 36 |

All Z-row entries ≥ 0, so optimal: **x₁ = 2, x₂ = 6, Z = 36**. Shadow prices: resource 1 = 0 (2 units unused), resource 2 = 1.5, resource 3 = 1.

**Example 3: Dual.** Dual of Example 1: Min W = 4y₁ + 12y₂ + 18y₃ subject to y₁ + 3y₃ ≥ 3, 2y₂ + 2y₃ ≥ 5, y ≥ 0. From the final table, y₁ = 0, y₂ = 1.5, y₃ = 1, so W = 0 + 18 + 18 = **36 = Z** (strong duality).


**Example 4: Transportation problem.** Costs (₹ per unit):

| From / To | D1 | D2 | D3 | D4 | Supply |
|---|---|---|---|---|---|
| F1 | 19 | 30 | 50 | 10 | 7 |
| F2 | 70 | 30 | 40 | 60 | 9 |
| F3 | 40 | 8 | 70 | 20 | 18 |
| Demand | 5 | 8 | 7 | 14 | 34 |

Supply = demand = 34, so the problem is balanced.

**(a) North-West Corner.** F1D1 = 5, F1D2 = 2, F2D2 = 6, F2D3 = 3, F3D3 = 4, F3D4 = 14. Cost = 5×19 + 2×30 + 6×30 + 3×40 + 4×70 + 14×20 = 95 + 60 + 180 + 120 + 280 + 280 = **₹1,015**.

**(b) Vogel's Approximation.**
- Step 1 penalties: rows 9, 10, 12; columns 21, 22, 10, 10. Largest is 22 (D2): allocate F3D2 = 8.
- Step 2: column D1 penalty 21 is largest: F1D1 = 5.
- Step 3: row F3 penalty 50 (costs 70 and 20): F3D4 = 10 (F3 exhausted).
- Step 4: column D4 penalty 50: F1D4 = 2 (F1 exhausted).
- Step 5: remaining F2: F2D3 = 7, F2D4 = 2.
- Cost = 8×8 + 5×19 + 10×20 + 2×10 + 7×40 + 2×60 = 64 + 95 + 200 + 20 + 280 + 120 = **₹779**.

**(c) MODI test on the VAM solution.** Occupied cells give u₁ = 0, v₁ = 19, v₄ = 10, u₂ = 50, u₃ = 10, v₂ = −2, v₃ = −10. Δ(F2D2) = 30 − 50 − (−2) = **−18**, negative, so not optimal. Loop F2D2(+) → F3D2(−) → F3D4(+) → F2D4(−): θ = min(8, 2) = 2. New allocation: F1D1 5, F1D4 2, F2D2 2, F2D3 7, F3D2 6, F3D4 12. Cost falls by 18 × 2 = 36 to **₹743**.
- Check: u₁ = 0, v₁ = 19, v₄ = 10, u₃ = 10, v₂ = −2, u₂ = 32, v₃ = 8. Empty-cell Δ values: 32, 42, 19, 18, 11, 52, all positive, so **₹743 is optimal**.

**Example 5: Hungarian method.** Cost of 4 jobs on 4 machines:

| Job | M1 | M2 | M3 | M4 |
|---|---|---|---|---|
| J1 | 9 | 11 | 14 | 11 |
| J2 | 6 | 15 | 13 | 13 |
| J3 | 12 | 13 | 6 | 8 |
| J4 | 11 | 9 | 10 | 9 |

- Row reduction (subtract 9, 6, 6, 9): J1 [0, 2, 5, 2], J2 [0, 9, 7, 7], J3 [6, 7, 0, 2], J4 [2, 0, 1, 0].
- Column reduction (column minima 0, 0, 0, 0): no change.
- Zeros can be covered by 3 lines (column M1, row J3, row J4), fewer than 4. Smallest uncovered value = 2 (J1M2, J1M4). Subtract 2 from uncovered cells, add 2 at intersections: J1 [0, 0, 3, 0], J2 [0, 7, 5, 5], J3 [8, 7, 0, 2], J4 [4, 0, 1, 0].
- Now 4 lines are needed. Assign: J2 → M1 (only zero in row), J3 → M3, J1 → M2, J4 → M4.
- Cost = 11 + 6 + 6 + 9 = **32**.


**Example 6: Travelling salesman.** Distances (row = from, column = to):

| From | A | B | C | D |
|---|---|---|---|---|
| A | – | 20 | 30 | 10 |
| B | 15 | – | 16 | 4 |
| C | 3 | 5 | – | 2 |
| D | 19 | 6 | 18 | – |

- There are (4 − 1)! = 6 tours from A. A-B-C-D-A = 20 + 16 + 2 + 19 = 57; A-B-D-C-A = 20 + 4 + 18 + 3 = 45; A-C-B-D-A = 30 + 5 + 4 + 19 = 58; A-C-D-B-A = 30 + 2 + 6 + 15 = 53; A-D-B-C-A = 10 + 6 + 16 + 3 = 35; A-D-C-B-A = 10 + 18 + 5 + 15 = 48.
- **Optimal tour A → D → B → C → A, distance 35**.

### Key points to remember

- Formulation: variables, objective, constraints, non-negativity.
- Simplex: most negative enters, minimum ratio leaves; dual simplex: most negative RHS leaves.
- Special cases: alternative, unbounded, infeasible, degenerate.
- Transportation: m + n − 1 cells; NWCR ₹1,015, VAM ₹779, MODI optimum ₹743.
- Hungarian: reduce, cover, adjust (cost 32); TSP = assignment + no sub-tours (35).

### Important questions

1. Explain the history, classification and engineering applications of optimization. Formulate an LP.
2. Solve an LP by the graphical and simplex methods. Explain the dual simplex method.
3. Find the optimal solution of a transportation problem (VAM + MODI).
4. Solve an assignment problem by the Hungarian method.
5. Solve a travelling salesman problem.

---

## Unit 2: Sequencing and Network Analysis

### 2-mark definitions

- **Sequencing problem:** finding the order in which jobs should be processed on machines to minimize total elapsed time (makespan).
- **Johnson's rule:** an optimal sequencing method for n jobs on 2 machines.
- **Total elapsed time (makespan):** time from the start of the first job to the end of the last job.
- **Idle time:** time a machine waits with no job.
- **No passing rule:** each job is processed on the machines in the same order, and jobs do not overtake each other.
- **Network (arrow) diagram:** a graphical representation of a project's activities (arrows) and events (nodes) showing their precedence.
- **Dummy activity:** an activity of zero time used only to show a logical dependence.
- **CPM:** deterministic project network method that finds the critical path and floats.
- **PERT:** probabilistic project network method with three time estimates.
- **Critical path:** the longest path through the project network; zero total float.
- **Total float:** the time an activity can be delayed without delaying the project; TF = LS − ES.
- **Crashing:** reducing the duration of a project by spending extra resources on critical activities at least cost.

### Core concepts

**Assumptions in sequencing:** no machine processes more than one job at a time; processing times are known and independent of order; each job once started is completed; no passing; transfer time negligible.

**Sequencing: Johnson's rule (n jobs, 2 machines, same order on both)**

1. Find the smallest processing time among all jobs on both machines.
2. If it is on machine 1, place that job as early as possible; if on machine 2, as late as possible.
3. Remove the job and repeat (ties broken arbitrarily).
4. Draw the timing chart to compute total elapsed time and idle times.

**n jobs on 3 machines:** convert to 2 machines G = M1 + M2, H = M2 + M3 if min M1 ≥ max M2 or min M3 ≥ max M2, then apply Johnson's rule.

**n jobs on m machines:** the problem reduces to two machines when min M1 ≥ max of M2…M(m−1), or min Mm ≥ max of M2…M(m−1). Then G = M1 + M2 + … + M(m−1) and H = M2 + M3 + … + Mm, and Johnson's rule is applied to G and H.

**Two jobs on m machines (graphical method):** draw job 1 times on the x-axis and job 2 on the y-axis, with each machine's block marked on both axes; shade the regions where both jobs would need the same machine; draw a path from origin to the end point using horizontal, vertical and 45° lines, avoiding shaded blocks. The 45° segments mean both jobs are worked simultaneously; total time = job's own time + idle time (sum of horizontal or vertical moves).

**Phases of project management:** planning (activities, WBS), scheduling (network, times, critical path), controlling (monitoring, updating, crashing).

**Network construction guidelines:** each activity is one arrow; tail event number less than head; no loops; no dangling arrows; use dummy activities (zero time) for logic or to avoid two activities sharing both end events.

**CPM and PERT formulas:** ES = max EF of predecessors; LF = min LS of successors; total float = LS − ES; PERT t_e = (a + 4m + b)/6, σ² = ((b − a)/6)², Z = (T_s − T_e)/σ.

**Forward and backward pass:** forward: ES of start = 0; EF = ES + t; ES of an activity = max EF of predecessors. Backward: LF of end = project time; LS = LF − t; LF of an activity = min LS of successors. Activities with zero total float form the critical path. **Free float** = ES of successor − EF of the activity.

**CPM vs PERT**

| Feature | CPM | PERT |
|---|---|---|
| Time estimates | One (deterministic) | Three: optimistic a, most likely m, pessimistic b |
| Orientation | Activity | Event |
| Used for | Repetitive projects (construction) | R&D, new projects |
| Cost-time trade-off (crashing) | Yes | Not primary |
| Output | Critical path, floats | Expected time, probability of completion |

**Crashing steps:** find the critical path; compute cost slope = (crash cost − normal cost)/(normal time − crash time) for each activity; crash the critical activity with the least cost slope by one unit; recompute paths (new critical paths may appear); stop when total cost (direct + indirect) is minimum or no further crashing is possible.

### Solved examples

**Example 1: Johnson's rule.** Times (hours) on M1 and M2: J1 (5, 2), J2 (1, 6), J3 (9, 7), J4 (3, 8), J5 (10, 4).
- Smallest is 1 (J2 on M1): first. Next 2 (J1 on M2): last. Next 3 (J4 on M1): second. Next 4 (J5 on M2): fourth. J3 goes in the middle.
- **Sequence J2 → J4 → J3 → J5 → J1**.

| Job | M1 in | M1 out | M2 in | M2 out |
|---|---|---|---|---|
| J2 | 0 | 1 | 1 | 7 |
| J4 | 1 | 4 | 7 | 15 |
| J3 | 4 | 13 | 15 | 22 |
| J5 | 13 | 23 | 23 | 27 |
| J1 | 23 | 28 | 28 | 30 |

- **Total elapsed time = 30 hours**. Idle time on M2 = 30 − 27 (total M2 work) = 3 hours (0–1, 22–23 and 27–28); M1 is idle from 28 to 30.


**Example 2: n jobs on 3 machines.** Times (hours) on M1, M2, M3: A (8, 5, 4), B (10, 6, 9), C (6, 2, 8), D (7, 3, 6), E (11, 4, 5).
- Check: min M1 = 6 ≥ max M2 = 6 ✓, so the rule applies.
- G = M1 + M2: A 13, B 16, C 8, D 10, E 15. H = M2 + M3: A 9, B 15, C 10, D 9, E 9.
- Johnson on (G, H): smallest 8 is C on G → first. Then the 9s on H (A, D, E) go last (in any order among themselves), B in the remaining slot.
- **Sequence C → B → E → D → A**.

| Job | M1 out | M2 out | M3 out |
|---|---|---|---|
| C | 6 | 8 | 16 |
| B | 16 | 22 | 31 |
| E | 27 | 31 | 36 |
| D | 34 | 37 | 43 |
| A | 42 | 47 | 51 |

- **Total elapsed time = 51 hours** (checked: no order of the five jobs does better).

**Example 3: CPM.** Activities (days): A 3 (start), B 4 (start), C 2 (after A), D 5 (after A), E 3 (after B, C), F 2 (after D, E).
- Paths: A-D-F = 10, A-C-E-F = 10, B-E-F = 9.
- **Critical paths A-D-F and A-C-E-F, duration 10 days**; B has total float 1.

**Example 4: PERT probability.** Critical path activities (a, m, b): (2, 4, 6), (5, 7, 9), (1, 2, 3). t_e = 4, 7, 2, so T_e = 13. Variances 0.444, 0.444, 0.111, total 1, σ = 1. P(T ≤ 14) = P(Z ≤ 1) = **0.8413**.

**Example 5: Crashing.** Two parallel paths: P1 = A (6 days) and P2 = B (4) then C (3) = 7 days, so the project takes 7 days. Cost slopes: A ₹400/day, B ₹200/day, C ₹500/day. Indirect cost ₹600/day. To finish in 6 days crash B by 1 day (cheapest on the critical path P2): cost ₹200, saves ₹600 indirect → net saving ₹400. Now both paths are 6 days; to go to 5 days crash A (400) and B (200) together = ₹600, which equals the indirect saving, so **6 days is the optimal duration** (5 days costs the same).

### Key points to remember

- Johnson: smallest on M1 → front; on M2 → back (30 hours example).
- 3 machines: check min M1 ≥ max M2 or min M3 ≥ max M2; G = M1 + M2, H = M2 + M3 (51 hours).
- m machines: G = M1 + … + M(m−1), H = M2 + … + Mm if the condition holds.
- CPM floats; PERT t_e = (a + 4m + b)/6; σ² = ((b − a)/6)²; Z = (T − T_e)/σ.
- Crashing: least cost slope on the critical path first.

### Important questions

1. State the assumptions of sequencing. Solve n jobs on 2 machines by Johnson's rule.
2. Solve n jobs on 3 machines and explain the extension to m machines.
3. Explain the graphical method for 2 jobs on m machines.
4. Draw a network and find the critical path and floats (CPM). Find the probability of completion (PERT).
5. Explain crashing of a project with an example.

---

## Unit 3: Game Theory and Queuing Models

### 2-mark definitions

- **Game:** a competitive situation between two or more players with conflicting interests, each choosing strategies.
- **Two-person zero-sum game:** the gain of one player equals the loss of the other.
- **Pure strategy:** a player always chooses the same course of action.
- **Mixed strategy:** a player chooses among courses of action with fixed probabilities.
- **Saddle point:** a payoff that is the minimum of its row and the maximum of its column; then maximin = minimax = value of the game.
- **Value of the game:** the expected payoff when both players use optimal strategies.
- **Dominance:** a strategy that is always worse (for that player) than another can be deleted.
- **Queue:** a line of customers waiting for service.
- **Arrival rate λ:** average number of arrivals per unit time.
- **Service rate μ:** average number of customers served per unit time by one server.
- **Traffic intensity ρ:** λ / μ (for one server); must be less than 1 for a steady state.
- **Kendall's notation:** (a/b/c):(d/e/f): arrival distribution / service distribution / number of servers : (capacity / population / discipline), for example (M/M/1):(∞/∞/FCFS).

### Core concepts

**Solving games**

1. Look for a saddle point (row minima → maximin; column maxima → minimax).
2. If none, reduce by dominance.
3. 2×2 without saddle point: formula.
4. 2×n or m×2: graphical method (plot lines for the opponent's strategies and find the lowest point of the upper envelope or highest point of the lower envelope).
5. Larger games: convert to LP.

**2×2 formula** for payoff [[a, b], [c, d]] with no saddle point: p (prob. of row 1) = (d − c) / ((a + d) − (b + c)); q (prob. of column 1) = (d − b) / ((a + d) − (b + c)); value V = (ad − bc) / ((a + d) − (b + c)).

**Minimax theorem:** for every finite two-person zero-sum game there is a value V and optimal mixed strategies such that player A can guarantee at least V and B can hold A to at most V.

**Game as LP:** for player A, maximize V subject to Σ a_ij x_i ≥ V for every column j, Σ x_i = 1; substitute X_i = x_i / V to get min Σ X_i s.t. Σ a_ij X_i ≥ 1.

**Elements of a queuing system:** input (arrival pattern, population size), queue discipline (FCFS, LCFS, priority, SIRO), service mechanism (number of servers, service time distribution), capacity, customer behaviour (balking, reneging, jockeying).

**Generalized Poisson queuing model:** in steady state, with state-dependent rates λ_n and μ_n, p_n = (λ₀ λ₁ … λ_(n−1)) / (μ₁ μ₂ … μ_n) × p₀, with Σ p_n = 1. Specialized models follow from this.

**M/M/1 (∞/∞/FCFS) formulas**

| Measure | Formula |
|---|---|
| Utilization | ρ = λ/μ |
| P(system empty) | P₀ = 1 − ρ |
| P(n in system) | P_n = (1 − ρ) ρⁿ |
| Avg number in system | L_s = λ / (μ − λ) |
| Avg number in queue | L_q = λ² / (μ(μ − λ)) |
| Avg time in system | W_s = 1 / (μ − λ) |
| Avg time in queue | W_q = λ / (μ(μ − λ)) |
| Little's law | L = λW |

**M/M/1 with finite capacity N:** P₀ = (1 − ρ) / (1 − ρ^(N+1)); effective arrival rate λ_eff = λ(1 − P_N).

### Solved examples

**Example 1: Saddle point.**

| A \ B | B1 | B2 | B3 | B4 | B5 | Row min |
|---|---|---|---|---|---|---|
| A1 | 9 | 3 | 1 | 8 | 0 | 0 |
| A2 | 6 | 5 | 4 | 6 | 7 | 4 |
| A3 | 2 | 4 | 3 | 3 | 8 | 2 |
| A4 | 5 | 6 | 2 | 2 | 1 | 1 |
| Col max | 9 | 6 | 4 | 8 | 8 | |

Maximin = 4, minimax = 4, so the saddle point is (A2, B3). **A plays A2, B plays B3, value = 4**.

**Example 2: Mixed strategy 2×2.** Payoff [[3, −1], [−2, 4]] (no saddle point: maximin −1, minimax 3).
- Denominator = (3 + 4) − (−1 − 2) = 10.
- p = (4 − (−2)) / 10 = 0.6 for A1, 0.4 for A2.
- q = (4 − (−1)) / 10 = 0.5 for B1, 0.5 for B2.
- V = (3×4 − (−1)(−2)) / 10 = (12 − 2)/10 = **1**.

**Example 3: M/M/1.** Customers arrive at a ticket counter at λ = 4 per hour; service rate μ = 6 per hour.
- ρ = 4/6 = 0.667 (counter busy 66.7% of the time); P₀ = 0.333.
- L_s = 4 / (6 − 4) = **2 customers**; L_q = 16 / (6 × 2) = **1.33 customers**.
- W_s = 1 / 2 h = **30 minutes**; W_q = 4 / 12 h = **20 minutes**.
- P(more than 2 in system) = ρ³ = 0.296.

### Key points to remember

- Saddle point: maximin = minimax.
- 2×2 formula; graphical method for 2×n and m×2; dominance; LP for larger games.
- Kendall notation; ρ = λ/μ less than 1.
- M/M/1: L_s = λ/(μ − λ), W_s = 1/(μ − λ), L_q = λ²/(μ(μ − λ)), L = λW.

### Important questions

1. Explain two-person zero-sum games, the minimax theorem and saddle points with an example.
2. Solve a game without a saddle point by the 2×2 formula, by dominance and by the graphical method.
3. Explain how a game can be reduced to an LP problem.
4. Explain the elements of a queuing system and Kendall's notation.
5. Explain the generalized Poisson queuing model and derive the M/M/1 results. Solve a numerical.

---

## Unit 4: Dynamic Programming and Simulation

### 2-mark definitions

- **Dynamic programming (DP):** a method (Bellman, 1950s) for solving multi-stage decision problems by breaking them into stages and solving one stage at a time using a recursive relation.
- **Stage:** a part of the problem at which a decision is made.
- **State:** the information describing the system at a stage (e.g. resources left).
- **Decision (policy):** the choice made at a stage; a sequence of decisions is a policy.
- **Bellman's principle of optimality:** an optimal policy has the property that whatever the initial state and decision, the remaining decisions must form an optimal policy for the state resulting from the first decision.
- **Recursive equation:** fₙ(s) = optimum over xₙ of [rₙ(xₙ) + fₙ₋₁(s − xₙ)], linking the stages.
- **Forward recursion:** solving from the first stage to the last; **backward recursion:** from the last stage to the first.
- **Simulation:** imitating the behaviour of a real system with a model over time, usually on a computer, to study its performance.
- **Monte Carlo simulation:** simulation that uses random numbers to sample from probability distributions of uncertain inputs.
- **Random number:** a number drawn so that every value in a range is equally likely (from a table or a generator).

### Core concepts

**Characteristics of DP problems:** divisible into stages; each stage has states; a decision transforms a state into a state of the next stage; given the current state, the optimal remaining decisions do not depend on past decisions (Markov property); a recursive relation exists.

**Steps in DP:** (1) identify stages, states and decisions; (2) write the return at each stage; (3) write the recursive equation; (4) solve stage by stage (tabulate); (5) trace back the optimal decisions.

**Applications:** capital budgeting (allocating money among plants), cargo loading (knapsack), shortest route (stagecoach), production and inventory scheduling, equipment replacement, reliability improvement, LP by DP.

**Forward recursion for capital budgeting:** f₁(x) = r₁(x); fₖ(x) = max over xₖ of [rₖ(xₖ) + fₖ₋₁(x − xₖ)].

**Cargo loading (knapsack):** maximize Σ vᵢ nᵢ subject to Σ wᵢ nᵢ ≤ W, nᵢ integers ≥ 0; stage = item type, state = remaining capacity.

**Simulation: when and why:** when the system is too complex for analytical models, experiments on the real system are costly or impossible, or to study "what if" policies. **Advantages:** flexible, handles randomness and complexity, safe experimentation, time compression. **Limitations:** gives estimates not optima, can be costly to build, results depend on assumptions and random numbers, needs many runs.

**Types of simulation:** deterministic vs stochastic; static (Monte Carlo) vs dynamic; discrete-event vs continuous; physical (iconic) vs mathematical.

**Simulation procedure (Monte Carlo):**
1. Define the problem and objectives.
2. Identify the random variables and their probability distributions.
3. Compute cumulative probabilities and assign random-number ranges (00–99) proportional to probabilities.
4. Generate random numbers and read off the variable values.
5. Simulate the system for many trials and record results.
6. Analyse results (averages, costs) and compare alternative policies.

### Solved examples

**Example 1: Capital budgeting by DP.** ₹5 crore (in units of 1) to allocate among three plants; returns (₹ crore):

| Units | Plant 1 | Plant 2 | Plant 3 |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 1 | 4 | 5 | 3 |
| 2 | 7 | 9 | 7 |
| 3 | 9 | 11 | 10 |
| 4 | 10 | 12 | 12 |
| 5 | 11 | 12 | 13 |

- Stage 1 (plant 3 alone): f₁(x) = 0, 3, 7, 10, 12, 13.
- Stage 2 (plants 2 + 3): f₂(x) = max[r₂(b) + f₁(x − b)] = 0, 5, 9, 12, 16, 19 for x = 0…5 (e.g. f₂(4) = 9 + 7 with b = 2; f₂(5) = 9 + 10 with b = 2).
- Stage 3 (plant 1 + rest), x = 5: a = 0 → 0 + 19 = 19; a = 1 → 4 + 16 = **20**; a = 2 → 7 + 12 = 19; a = 3 → 9 + 9 = 18; a = 4 → 10 + 5 = 15; a = 5 → 11.
- **Optimal: plant 1 gets 1, plant 2 gets 2, plant 3 gets 2; total return ₹20 crore**.

**Example 2: Cargo loading.** Capacity 10 t. Item 1: 4 t, value 11; item 2: 3 t, value 7; item 3: 5 t, value 12 (any number of each).
- Feasible combinations near capacity: (1, 2, 0) → 10 t, value 11 + 14 = **25**; (0, 0, 2) → 10 t, 24; (1, 0, 1) → 9 t, 23; (0, 3, 0) → 9 t, 21; (2, 0, 0) → 8 t, 22.
- **Load one item 1 and two item 2: value 25**.

**Example 3: Stagecoach (shortest route, forward recursion).** From A to stage-2 cities B (2), C (4); from B to D (7), E (4); from C to D (3), E (2); from D to F (1), from E to F (5).
- f(B) = 2, f(C) = 4.
- f(D) = min(2 + 7, 4 + 3) = 7 (via C); f(E) = min(2 + 4, 4 + 2) = 6 (via B or C).
- f(F) = min(7 + 1, 6 + 5) = 8 via D.
- **Shortest route A → C → D → F, length 8**.

**Example 4: Monte Carlo simulation of demand.** Daily demand: 0 (0.10), 1 (0.20), 2 (0.40), 3 (0.20), 4 (0.10).

| Demand | Probability | Cumulative | Random numbers |
|---|---|---|---|
| 0 | 0.10 | 0.10 | 00–09 |
| 1 | 0.20 | 0.30 | 10–29 |
| 2 | 0.40 | 0.70 | 30–69 |
| 3 | 0.20 | 0.90 | 70–89 |
| 4 | 0.10 | 1.00 | 90–99 |

- Random numbers: 48, 78, 19, 51, 56, 77, 15, 14, 68, 09 → demands 2, 3, 1, 2, 2, 3, 1, 1, 2, 0.
- Simulated 10-day demand = 17, **average 1.7 units/day** (expected value 2.0; more trials bring the average closer).

**Example 5: Simulating a queue.** Inter-arrival times (min) from random numbers: 2, 4, 1, 3; service times: 3, 2, 4, 2. Arrivals at 2, 6, 7, 10. Service: C1 2–5; C2 6–8; C3 8–12 (waits 1); C4 12–14 (waits 2). **Average wait = 3/4 = 0.75 min**; server idle 0–2 and 5–6 = 3 min.

### Key points to remember

- DP: stages, states, decisions, recursive equation, principle of optimality.
- Forward recursion fₖ(x) = max[rₖ(xₖ) + fₖ₋₁(x − xₖ)]; capital budgeting (₹20 crore), cargo (25), stagecoach (8).
- Simulation steps: distributions → cumulative → random-number ranges → trials → analysis.
- Simulation gives estimates, not guaranteed optima.

### Important questions

1. Explain dynamic programming, Bellman's principle of optimality and the forward recursion method.
2. Solve a capital budgeting problem by DP.
3. Solve a cargo loading (knapsack) problem by DP.
4. What is simulation? Explain its types, advantages, limitations and procedure.
5. Explain Monte Carlo simulation with a numerical (demand or queue).

---

## Unit 5: Inventory and Replacement Models

### 2-mark definitions

- **Inventory:** stock of goods (raw materials, work in progress, finished goods, spares) held for future use.
- **Ordering (set-up) cost:** cost of placing an order or setting up production, independent of quantity.
- **Holding (carrying) cost:** cost of keeping one unit in stock for one period (interest, storage, insurance, obsolescence).
- **Shortage (stock-out) cost:** cost of not having stock when demand occurs.
- **EOQ (Economic Order Quantity):** the order size that minimizes total ordering and holding cost.
- **Lead time:** the time between placing an order and receiving it.
- **Reorder level (ROL):** the stock level at which a new order is placed = demand during lead time (+ safety stock).
- **Safety (buffer) stock:** extra stock kept to protect against variation in demand or lead time.
- **Quantity discount:** a lower unit price offered for buying in larger quantities.
- **Replacement problem:** deciding when to replace items that deteriorate with age or fail suddenly.
- **Group replacement:** replacing all items (like street bulbs) at fixed intervals, plus individual replacement of failures in between.
- **Deterministic inventory model:** demand and lead time are known with certainty (EOQ models).
- **Probabilistic inventory model:** demand or lead time is random; safety stock and service level are used.
- **Newsvendor (single-period) model:** ordering a perishable item once for one period; order the quantity whose cumulative probability first reaches the critical ratio Cu/(Cu + Co).
- **Service level:** probability of not running out of stock during the lead time.

### Core concepts

**Operation of an inventory system:** demand depletes stock; when it reaches the reorder level an order of size Q is placed; it arrives after the lead time. Questions: how much to order (Q) and when (ROL). **Selective control:** ABC analysis (by value: A ≈ 10% items, 70% value), VED (vital, essential, desirable), FSN (fast, slow, non-moving).

**Basic EOQ model (Wilson)** assumptions: constant known demand, instantaneous replenishment, no shortages, constant costs.
- Total annual cost TC = (D/Q) S + (Q/2) H (+ D × C for purchase cost).
- EOQ Q* = √(2DS / H); number of orders = D/Q*; cycle time = Q*/D; minimum TC = √(2DSH).

**Other models:** EOQ with gradual replenishment (production model): Q* = √(2DS / (H(1 − d/p))); EOQ with planned shortages: Q* = √(2DS/H) × √((H + B)/B).

**Quantity discounts:** for each price break, compute EOQ with that price's holding cost; if it is below the break quantity, use the break quantity; compute total cost (purchase + ordering + holding) for each candidate and choose the least.


**Probabilistic inventory models**
- **Single-period (newsvendor):** Cu = cost of under-stocking (lost profit per unit), Co = cost of over-stocking (loss per unsold unit). Optimal Q is the smallest quantity with cumulative probability P(D ≤ Q) ≥ Cu/(Cu + Co).
- **Reorder level with uncertain demand:** ROL = mean lead-time demand + safety stock; safety stock = z × σ_L, where σ_L = σ_d √L for daily standard deviation σ_d and lead time L days, and z from the normal table for the desired service level (90% → 1.28, 95% → 1.645, 99% → 2.33).
- **Periodic review (P system):** review every T periods, order up to a target level; **continuous review (Q system):** order fixed Q when stock reaches ROL.

**Replacement of items that deteriorate with time (no money value):** average annual cost A(n) = (C − S + Σ maintenance up to n) / n; replace at the n that minimizes A(n), i.e. when the next year's maintenance exceeds the current average. With money value, use discounted costs and the weighted average.

**Replacement of items that fail suddenly:** compute failure probabilities from mortality tables, the expected number of failures each period, and compare individual replacement cost with group replacement cost per period; group replacement is best at the end of the period whose average cost is minimum and less than individual replacement cost.

**Equipment renewal and group replacement policy:** for items that fail suddenly, compute the expected number of failures in each period: N₀ = N, N₁ = Np₁, N₂ = Np₂ + N₁p₁, N₃ = Np₃ + N₁p₂ + N₂p₁, … Individual replacement cost per period = (N / mean life) × individual cost. Group replacement at the end of period k: cost = N × group cost + (failures in periods 1…k) × individual cost; average per period = cost/k. Choose the k with the least average cost if it is below the individual-replacement cost. **Rule:** replace all at the end of period k if the cost of individual replacements in period k + 1 exceeds the average cost per period up to k.

### Solved examples

**Example 1: EOQ.** Annual demand D = 12,000 units; ordering cost S = ₹100; unit price ₹12; holding cost 20% per year, so H = ₹2.40.
- Q* = √(2 × 12,000 × 100 / 2.4) = √10,00,000 = **1,000 units**.
- Orders per year = 12; cycle = 1 month.
- Ordering cost = 12 × 100 = ₹1,200; holding cost = 500 × 2.4 = ₹1,200; total variable cost = ₹2,400 (= √(2 × 12,000 × 100 × 2.4)).
- If lead time is 5 days (365 days per year), ROL = 12,000 × 5/365 ≈ 164 units.

**Example 2: Quantity discount.** Same data, but price drops to ₹11.50 for orders of 2,000 or more.
- At ₹12: Q = 1,000, TC = 12,000 × 12 + 1,200 + 1,200 = **₹1,46,400**.
- At ₹11.50: H = 2.30, EOQ = √(2 × 12,000 × 100 / 2.3) = 1,021, below 2,000, so use Q = 2,000. TC = 12,000 × 11.5 + (12,000/2,000) × 100 + (2,000/2) × 2.3 = 1,38,000 + 600 + 2,300 = **₹1,40,900**.
- **Order 2,000 units** to take the discount.

**Example 3: Replacement (no money value).** Machine cost ₹12,200, scrap value ₹200 (net ₹12,000). Maintenance costs: 200, 500, 800, 1,200, 1,800, 2,500, 3,200, 4,000.

| Year | Maintenance | Cumulative | Total (12,000 + cum.) | Average |
|---|---|---|---|---|
| 1 | 200 | 200 | 12,200 | 12,200 |
| 2 | 500 | 700 | 12,700 | 6,350 |
| 3 | 800 | 1,500 | 13,500 | 4,500 |
| 4 | 1,200 | 2,700 | 14,700 | 3,675 |
| 5 | 1,800 | 4,500 | 16,500 | 3,300 |
| 6 | 2,500 | 7,000 | 19,000 | 3,166.7 |
| 7 | 3,200 | 10,200 | 22,200 | 3,171.4 |
| 8 | 4,000 | 14,200 | 26,200 | 3,275 |

Minimum average ₹3,166.7 at year 6, so **replace after 6 years**. Check: the 7th-year maintenance (3,200) exceeds the average 3,166.7, confirming the rule.


**Example 4: Newsvendor.** A shop buys a magazine at ₹30, sells at ₹50, and returns unsold copies for ₹10. Cu = 50 − 30 = 20; Co = 30 − 10 = 20; critical ratio = 20/40 = 0.5. Demand: 10 (0.10), 11 (0.20), 12 (0.30), 13 (0.25), 14 (0.15). Cumulative: 0.10, 0.30, **0.60**, 0.85, 1.00. **Order 12 copies** (first cumulative ≥ 0.5).

**Example 5: Safety stock.** Daily demand mean 40, standard deviation 8; lead time 4 days; service level 95%. σ_L = 8 × √4 = 16; safety stock = 1.645 × 16 ≈ **27 units**; **ROL = 160 + 27 = 187 units**.

**Example 6: Group replacement.** 1,000 bulbs; failure probability by month of life: 0.10, 0.15, 0.25, 0.30, 0.20. Individual replacement ₹10 per bulb; group replacement ₹2 per bulb.
- Expected failures: N₁ = 100; N₂ = 150 + 10 = 160; N₃ = 250 + 15 + 16 = 281; N₄ = 300 + 25 + 24 + 28.1 = 377.1; N₅ = 349.9.
- Mean life = 1(0.1) + 2(0.15) + 3(0.25) + 4(0.3) + 5(0.2) = 3.35 months. Individual policy cost = (1,000/3.35) × 10 ≈ **₹2,985 per month**.

| Group every k months | Cumulative failures | Total cost (2,000 + 10 × failures) | Average per month |
|---|---|---|---|
| 1 | 100 | 3,000 | 3,000 |
| 2 | 260 | 4,600 | **2,300** |
| 3 | 541 | 7,410 | 2,470 |
| 4 | 918.1 | 11,181 | 2,795 |

- **Replace all bulbs every 2 months** (₹2,300 < ₹2,985), replacing failures individually in between.

### Formulas

| Item | Formula |
|---|---|
| EOQ | √(2DS/H) |
| Total variable cost at EOQ | √(2DSH) |
| Production EOQ | √(2DS / (H(1 − d/p))) |
| Reorder level | Demand per day × lead time + safety stock |
| Replacement | Minimize (C − S + Σ M_i)/n |
| Newsvendor | Smallest Q with P(D ≤ Q) ≥ Cu/(Cu + Co) |
| Safety stock | z σ_d √L |

### Important questions

1. Explain inventory costs and derive the EOQ. Solve a numerical with quantity discounts.
2. Explain probabilistic inventory models: newsvendor and reorder level with safety stock.
3. Explain replacement of items that deteriorate with time. Solve a numerical.
4. Explain individual and group replacement of items that fail suddenly, with a numerical.
5. Explain equipment renewal and group replacement policies.

---

## Last-hour checklist

- [ ] History, classification and applications of optimization; LP formulation and assumptions.
- [ ] Graphical (2, 6, Z = 36); simplex tables; dual simplex; dual (W = 36); special cases.
- [ ] NWCR ₹1,015, VAM ₹779, MODI ₹743; Hungarian (32); TSP (A-D-B-C-A, 35).
- [ ] Johnson 2 machines (30 h); 3 machines (C-B-E-D-A, 51 h); m machines condition; 2 jobs graphical.
- [ ] CPM (10 days), PERT (0.8413), crashing (6 days optimal).
- [ ] Saddle point (4); 2×2 formula (V = 1); dominance; graphical; LP form.
- [ ] Queue elements; Kendall; M/M/1 (L_s 2, W_s 30 min, L_q 1.33, W_q 20 min).
- [ ] DP: principle of optimality; capital budgeting (1, 2, 2 → ₹20 crore); cargo (25); stagecoach (8).
- [ ] Simulation steps; Monte Carlo demand (1.7/day); queue simulation (0.75 min wait).
- [ ] EOQ (1,000), discount (order 2,000), newsvendor (12), safety stock (27, ROL 187).
- [ ] Replacement (6 years); group replacement (every 2 months, ₹2,300 vs ₹2,985).

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Engineering Optimization: Theory and Practice | Singiresu S. Rao | New Age International | [WorldCat](https://search.worldcat.org/search?q=Engineering+Optimization+Theory+and+Practice+Rao) |
| 2 | Operations Research | R. Panneerselvam | PHI Learning | [WorldCat](https://search.worldcat.org/search?q=Operations+Research+Panneerselvam) |
| 3 | Inventory Systems | Eliezer Naddor | Wiley | [WorldCat](https://search.worldcat.org/search?q=Inventory+Systems+Naddor) |
| 4 | Operations Research: An Introduction (reference) | Hamdy A. Taha | Macmillan / Pearson | [WorldCat](https://search.worldcat.org/search?q=Operations+Research+An+Introduction+Taha) |
| 5 | Operations Research (reference) | Kanti Swarup, P. K. Gupta, Man Mohan | Sultan Chand | [WorldCat](https://search.worldcat.org/search?q=Operations+Research+Kanti+Swarup) |
| 6 | Operations Research: An Introduction (reference) | P. K. Gupta, D. S. Hira | S. Chand | [WorldCat](https://search.worldcat.org/search?q=Operations+Research+Gupta+Hira) |
| 7 | Optimization: Theory and Applications (reference) | S. S. Rao | Wiley Eastern | [WorldCat](https://search.worldcat.org/search?q=Optimization+Theory+and+Applications+S.+S.+Rao) |
| 8 | Operations Research: Theory and Applications (reference) | J. K. Sharma | Macmillan India | [WorldCat](https://search.worldcat.org/search?q=Operations+Research+Theory+and+Applications+J.+K.+Sharma) |

**Syllabus source:** [AKTU Open Elective-III and IV syllabus for B.Tech 8th semester, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf)

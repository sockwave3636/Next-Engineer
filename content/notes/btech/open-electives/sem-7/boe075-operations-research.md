---
program: btech
branches: [all]
semester: 7
code: BOE075
name: Operations Research
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-II, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-Syllabus-BTech-Final-Year-Syllabus-2025-26.pdf
units:
  - Introduction and Linear Programming
  - Transportation, Assignment and Sequencing
  - Network Models and Project Management
  - Game Theory and Queuing Models
  - Inventory and Replacement Models
---

# BOE075 Operations Research: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: methods and step-by-step procedures.
3. **Solved examples**: the numericals that decide your marks (graphical LP, simplex, duality, North-West corner, VAM, MODI, Hungarian method, Johnson's rule, Dijkstra, Kruskal, max flow, CPM/PERT, saddle point, mixed strategy, M/M/1 queue, EOQ, quantity discount, replacement).
4. **Formulas / key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (OR, modelling, graphical method, simplex, dual simplex, special cases, duality, sensitivity) and Unit 2 (transportation, assignment, sequencing). Work every example with a pen.
- **Afternoon (3 hours):** Unit 3 (shortest path, minimum spanning tree, max flow, min cost flow, CPM, PERT) and Unit 4 (game theory and queuing).
- **Evening (2 hours):** Unit 5 (inventory and replacement). Then the "Last-hour checklist".
- **In the exam:** OR is a numerical paper. Write the model (variables, objective, constraints) first, then each table or iteration, and box the final answer with units.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Introduction and Linear Programming

### 2-mark definitions

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

### Core concepts

**Scope of OR:** production planning, inventory, transportation and logistics, finance and investment, marketing (media selection), personnel (assignment), project scheduling, queuing in banks and hospitals, defence.

**Phases of OR:** (1) formulate the problem, (2) construct a model, (3) derive a solution, (4) test the model and solution, (5) establish controls, (6) implement.

**Art of modelling:** identify variables, objective and constraints; make simplifying assumptions; keep the model tractable but realistic; validate with past data.

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

### Key points to remember

- Phases of OR; LP assumptions.
- Simplex: most negative enters, minimum ratio leaves.
- Special cases: alternative, unbounded, infeasible, degenerate.
- Dual simplex: most negative RHS leaves.
- Dual of max with ≤ is min with ≥; shadow prices from the optimal Z row under slacks.

### Important questions

1. Define OR. Explain its scope, phases and the art of modelling.
2. Solve an LP by the graphical method.
3. Solve an LP by the simplex method. Explain the special cases.
4. Explain the dual simplex method with an example.
5. Write the dual of an LP and state the duality theorems. Explain sensitivity analysis.

---

## Unit 2: Transportation, Assignment and Sequencing

### 2-mark definitions

- **Transportation problem:** finding how much to ship from each source to each destination to meet demand at minimum total cost.
- **Balanced transportation problem:** total supply equals total demand; otherwise add a dummy row or column with zero cost.
- **Initial basic feasible solution:** a starting allocation with m + n − 1 occupied cells (North-West corner, least cost, Vogel's approximation).
- **Degeneracy in transportation:** fewer than m + n − 1 occupied cells; fix by putting a tiny ε in an independent empty cell.
- **MODI (u-v) method:** the optimality test that uses u_i + v_j = c_ij for occupied cells and checks Δ_ij = c_ij − u_i − v_j for empty cells.
- **Assignment problem:** assigning n jobs to n workers (one to one) to minimize total cost or time.
- **Hungarian method:** the algorithm for assignment problems using row and column reductions and covering zeros with the minimum number of lines.
- **Sequencing problem:** finding the order in which jobs should be processed on machines to minimize total elapsed time (makespan).
- **Johnson's rule:** an optimal sequencing method for n jobs on 2 machines.

### Core concepts

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

**Sequencing: Johnson's rule (n jobs, 2 machines, same order on both)**

1. Find the smallest processing time among all jobs on both machines.
2. If it is on machine 1, place that job as early as possible; if on machine 2, as late as possible.
3. Remove the job and repeat (ties broken arbitrarily).
4. Draw the timing chart to compute total elapsed time and idle times.

**n jobs on 3 machines:** convert to 2 machines G = M1 + M2, H = M2 + M3 if min M1 ≥ max M2 or min M3 ≥ max M2, then apply Johnson's rule.

### Solved examples

**Example 1: Transportation problem.** Costs (₹ per unit):

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

**Example 2: Hungarian method.** Cost of 4 jobs on 4 machines:

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

**Example 3: Johnson's rule.** Times (hours) on M1 and M2: J1 (5, 2), J2 (1, 6), J3 (9, 7), J4 (3, 8), J5 (10, 4).
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

### Key points to remember

- Occupied cells must be m + n − 1.
- NWCR (₹1,015) > VAM (₹779) > optimum (₹743) in this example.
- MODI: u_i + v_j = c_ij; Δ = c_ij − u_i − v_j; all Δ ≥ 0 means optimal.
- Hungarian: row and column reduce, cover zeros, adjust.
- Johnson: smallest time on M1 goes first, on M2 goes last.

### Important questions

1. Find the initial solution of a transportation problem by NWCR, LCM and VAM, and test optimality by MODI.
2. Explain unbalanced, maximization and degenerate transportation problems.
3. Solve an assignment problem by the Hungarian method. Explain variants.
4. Solve a sequencing problem of n jobs on 2 machines (and 3 machines) by Johnson's rule.

---

## Unit 3: Network Models and Project Management

### 2-mark definitions

- **Network:** a set of nodes connected by arcs (edges), which may carry distances, costs or capacities.
- **Shortest path problem:** finding the minimum-distance route between two nodes.
- **Minimum spanning tree (MST):** a tree connecting all nodes with minimum total edge weight.
- **Maximal flow problem:** finding the largest amount that can flow from a source to a sink through arcs with capacities.
- **Max-flow min-cut theorem:** the maximum flow equals the capacity of the minimum cut separating source and sink.
- **Minimum cost flow problem:** sending a required flow through a network at minimum cost, with capacities; transportation and assignment are special cases.
- **CPM:** deterministic project network method that finds the critical path and floats.
- **PERT:** probabilistic project network method with three time estimates.
- **Critical path:** the longest path through the project network; zero total float.

### Core concepts

**Dijkstra's algorithm (non-negative weights):** give the source label 0 (permanent), others ∞; repeatedly update temporary labels of neighbours of the newest permanent node (label = min(old, permanent + edge)), and make the smallest temporary label permanent.

**Kruskal's algorithm (MST):** sort edges by weight; add the smallest edge that does not form a cycle; stop when n − 1 edges are chosen. **Prim's algorithm:** grow the tree from any node by adding the cheapest edge to a new node.

**Ford-Fulkerson (max flow):** find an augmenting path from source to sink with positive residual capacity; push the bottleneck flow; update residual capacities (including reverse arcs); repeat until no path exists.

**Phases of project management:** planning (activities, WBS), scheduling (network, times, critical path), controlling (monitoring, updating, crashing).

**Network construction guidelines:** each activity is one arrow; tail event number less than head; no loops; no dangling arrows; use dummy activities (zero time) for logic or to avoid two activities sharing both end events.

**CPM and PERT formulas:** ES = max EF of predecessors; LF = min LS of successors; total float = LS − ES; PERT t_e = (a + 4m + b)/6, σ² = ((b − a)/6)², Z = (T_s − T_e)/σ.

### Solved examples

**Example 1: Dijkstra.** Edges: 1–2 (7), 1–3 (9), 1–6 (14), 2–3 (10), 2–4 (15), 3–4 (11), 3–6 (2), 4–5 (6), 5–6 (9). Shortest path 1 → 5.
- Permanent 1 (0). Temporary: 2 = 7, 3 = 9, 6 = 14.
- Permanent 2 (7). Update 3 = min(9, 17) = 9, 4 = 22.
- Permanent 3 (9). Update 4 = min(22, 20) = 20, 6 = min(14, 11) = 11.
- Permanent 6 (11). Update 5 = 11 + 9 = 20.
- Permanent 4 (20) and 5 (20).
- **Shortest path 1 → 3 → 6 → 5, length 20**.

**Example 2: Kruskal on the same graph.** Sorted: 3–6 (2), 4–5 (6), 1–2 (7), 1–3 (9), 5–6 (9), 2–3 (10), 3–4 (11), … Take 3–6, 4–5, 1–2, 1–3, 5–6 (5 edges for 6 nodes, no cycles). **MST weight = 2 + 6 + 7 + 9 + 9 = 33**.

**Example 3: Max flow.** Capacities: S→A 10, S→B 5, A→B 15, A→T 5, B→T 10.
- Path S-A-T: push 5 (A→T full).
- Path S-B-T: push 5 (S→B full).
- Path S-A-B-T: push 5 (B→T full).
- No more augmenting paths. **Max flow = 15**. Min cut {A→T, B→T} = 5 + 10 = 15, confirming the theorem.

**Example 4: CPM.** Activities (days): A 3 (start), B 4 (start), C 2 (after A), D 5 (after A), E 3 (after B, C), F 2 (after D, E).
- Paths: A-D-F = 10, A-C-E-F = 10, B-E-F = 9.
- **Critical paths A-D-F and A-C-E-F, duration 10 days**; B has total float 1.

**Example 5: PERT probability.** Critical path activities (a, m, b): (2, 4, 6), (5, 7, 9), (1, 2, 3). t_e = 4, 7, 2, so T_e = 13. Variances 0.444, 0.444, 0.111, total 1, σ = 1. P(T ≤ 14) = P(Z ≤ 1) = **0.8413**.

### Key points to remember

- Dijkstra: permanent and temporary labels; Kruskal: smallest edge without cycle.
- Max flow = min cut.
- CPM: forward pass, backward pass, floats; PERT: t_e, σ², Z.

### Important questions

1. Find the shortest path using Dijkstra's algorithm.
2. Find the minimum spanning tree using Kruskal's or Prim's algorithm.
3. Solve a maximal flow problem and state the max-flow min-cut theorem. Explain the minimum cost flow problem.
4. Explain the phases of project management and the rules for network construction.
5. Draw a network, find the critical path (CPM) and the probability of completion (PERT).

---

## Unit 4: Game Theory and Queuing Models

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

### Core concepts

**Operation of an inventory system:** demand depletes stock; when it reaches the reorder level an order of size Q is placed; it arrives after the lead time. Questions: how much to order (Q) and when (ROL). **Selective control:** ABC analysis (by value: A ≈ 10% items, 70% value), VED (vital, essential, desirable), FSN (fast, slow, non-moving).

**Basic EOQ model (Wilson)** assumptions: constant known demand, instantaneous replenishment, no shortages, constant costs.
- Total annual cost TC = (D/Q) S + (Q/2) H (+ D × C for purchase cost).
- EOQ Q* = √(2DS / H); number of orders = D/Q*; cycle time = Q*/D; minimum TC = √(2DSH).

**Other models:** EOQ with gradual replenishment (production model): Q* = √(2DS / (H(1 − d/p))); EOQ with planned shortages: Q* = √(2DS/H) × √((H + B)/B).

**Quantity discounts:** for each price break, compute EOQ with that price's holding cost; if it is below the break quantity, use the break quantity; compute total cost (purchase + ordering + holding) for each candidate and choose the least.

**Replacement of items that deteriorate with time (no money value):** average annual cost A(n) = (C − S + Σ maintenance up to n) / n; replace at the n that minimizes A(n), i.e. when the next year's maintenance exceeds the current average. With money value, use discounted costs and the weighted average.

**Replacement of items that fail suddenly:** compute failure probabilities from mortality tables, the expected number of failures each period, and compare individual replacement cost with group replacement cost per period; group replacement is best at the end of the period whose average cost is minimum and less than individual replacement cost.

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

### Formulas

| Item | Formula |
|---|---|
| EOQ | √(2DS/H) |
| Total variable cost at EOQ | √(2DSH) |
| Production EOQ | √(2DS / (H(1 − d/p))) |
| Reorder level | Demand per day × lead time + safety stock |
| Replacement | Minimize (C − S + Σ M_i)/n |

### Important questions

1. Explain inventory, its costs and the operation of an inventory system. Explain ABC analysis.
2. Derive the EOQ formula and solve a numerical.
3. Solve an inventory problem with quantity discounts.
4. Explain replacement of items that deteriorate with time. Solve a numerical.
5. Explain replacement of items that fail suddenly, individual and group replacement.

---

## Last-hour checklist

- [ ] OR definition, scope, phases, modelling; LP assumptions.
- [ ] Graphical method (2, 6, Z = 36); simplex tables; special cases; dual simplex; dual (W = 36); sensitivity.
- [ ] NWCR (₹1,015), VAM (₹779), MODI to optimum (₹743); unbalanced and degenerate cases.
- [ ] Hungarian method (cost 32); Johnson's rule (J2-J4-J3-J5-J1, 30 hours).
- [ ] Dijkstra (1-3-6-5, 20); Kruskal (33); max flow (15) and min cut; min cost flow.
- [ ] Network rules; CPM floats; PERT (0.8413).
- [ ] Saddle point (value 4); 2×2 formula (V = 1); dominance; graphical; LP form.
- [ ] Queue elements; Kendall; M/M/1 (L_s 2, W_s 30 min, L_q 1.33, W_q 20 min); generalized Poisson.
- [ ] EOQ (1,000), quantity discount (order 2,000); ROL; ABC.
- [ ] Replacement (6 years); group replacement idea.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Operations Research: Applications and Algorithms | Wayne L. Winston | Thomson Learning / Cengage | [WorldCat](https://search.worldcat.org/search?q=Operations+Research+Applications+and+Algorithms+Winston) |
| 2 | Operations Research: An Introduction | Hamdy A. Taha | Pearson Education | [WorldCat](https://search.worldcat.org/search?q=Operations+Research+An+Introduction+Taha) |
| 3 | Operations Research | R. Panneerselvam | PHI Learning (2008) | [WorldCat](https://search.worldcat.org/search?q=Operations+Research+Panneerselvam) |
| 4 | Total Quality Management | V. K. Khanna and others | New Age International (2008) | [WorldCat](https://search.worldcat.org/search?q=Total+Quality+Management+Khanna+New+Age) |

**Syllabus source:** [AKTU Open Elective syllabus for B.Tech final year, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-Syllabus-BTech-Final-Year-Syllabus-2025-26.pdf)

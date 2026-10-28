---
program: btech
branches: [cse, it, cse-aiml, cse-ds, aids]
semester: 3
code: BCS303
name: Discrete Structures & Theory of Logic
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 2nd year, 2023-24 onwards
syllabusSource: https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2324/B.Tech_2nd_Yr_CSE_v3.pdf
units:
  - Sets, Relations and Lattices
  - Functions and Boolean Algebra
  - Theory of Logic
  - Algebraic Structures
  - Graphs and Combinatorics
---

# BCS303 Discrete Structures & Theory of Logic: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: the results, formulas and tables you need.
3. **Solved examples**: the proofs and problems that keep appearing (Hasse diagrams, K-maps, inference, cosets, planarity).
4. **Results to remember**: the theorems and formulas to write from memory.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Units 1 and 2. Draw Hasse diagrams for D12, D30 and similar sets, and solve two K-maps (3 and 4 variables).
- **Afternoon (3 hours):** Units 3 and 4. Practise one inference proof in propositional logic and one in predicate logic; learn group definitions and Lagrange's theorem with proof.
- **Evening (2 hours):** Unit 5 (Euler/Hamiltonian, planarity, colouring, pigeonhole), then the "Last-hour checklist".
- **In the exam:** state the definition before every proof. Write the rule name (Modus Ponens, Hypothetical Syllogism…) next to each inference step. Draw every graph and Hasse diagram neatly.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Sets, Relations and Lattices

### 2-mark definitions
- **Set:** a well-defined collection of distinct objects. **Power set P(A):** the set of all subsets of A; if |A| = n then |P(A)| = 2ⁿ.
- **Cartesian product:** A × B = {(a, b) : a ∈ A, b ∈ B}; |A × B| = |A|·|B|.
- **Relation:** a subset R of A × B. A relation on A is a subset of A × A.
- **Reflexive:** (a, a) ∈ R for every a ∈ A. **Irreflexive:** (a, a) ∉ R for every a.
- **Symmetric:** (a, b) ∈ R ⇒ (b, a) ∈ R. **Antisymmetric:** (a, b) ∈ R and (b, a) ∈ R ⇒ a = b. **Asymmetric:** (a, b) ∈ R ⇒ (b, a) ∉ R.
- **Transitive:** (a, b), (b, c) ∈ R ⇒ (a, c) ∈ R.
- **Equivalence relation:** reflexive, symmetric and transitive. It splits the set into disjoint **equivalence classes** (a partition).
- **Partial order (POSET):** a relation that is reflexive, antisymmetric and transitive, written (A, ≤).
- **Total (linear) order / chain:** a partial order in which every two elements are comparable.
- **Hasse diagram:** a drawing of a POSET with loops and transitive edges removed, smaller elements placed lower.
- **Composite relation:** R∘S = {(a, c) : (a, b) ∈ R and (b, c) ∈ S for some b}.
- **Lattice:** a POSET in which every pair of elements has a least upper bound (join, a ∨ b) and a greatest lower bound (meet, a ∧ b).

### Core concepts

**Set identities:** De Morgan (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′; distributive A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C); inclusion–exclusion |A ∪ B| = |A| + |B| − |A ∩ B| and |A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |B∩C| − |A∩C| + |A∩B∩C|.

**Counting relations on a set with n elements**
| Kind | Number |
|---|---|
| All relations | 2^(n²) |
| Reflexive | 2^(n² − n) |
| Symmetric | 2^(n(n+1)/2) |
| Reflexive and symmetric | 2^(n(n−1)/2) |
| Antisymmetric | 2ⁿ · 3^(n(n−1)/2) |

**Matrix test for properties** (M = relation matrix): reflexive if every diagonal entry is 1; symmetric if M = Mᵀ; antisymmetric if no i ≠ j has Mᵢⱼ = Mⱼᵢ = 1; transitive if M ⊙ M (Boolean product) ≤ M.

**Closures:** reflexive closure R ∪ Δ; symmetric closure R ∪ R⁻¹; transitive closure R⁺ = R ∪ R² ∪ … ∪ Rⁿ (computed with Warshall's algorithm). **Recursive definition of a relation:** give a base case and a rule that builds new pairs from old ones (e.g. transitive closure).

**POSET terms:** maximal / minimal element (nothing above / below it); greatest / least element (above / below everything); upper bound, lower bound; **lub (supremum)**, **glb (infimum)**.

**Types of lattices**
| Lattice | Condition |
|---|---|
| Bounded | Has a least element 0 and a greatest element 1 |
| Complemented | Bounded, and every a has a′ with a ∨ a′ = 1, a ∧ a′ = 0 |
| Distributive | a ∧ (b ∨ c) = (a ∧ b) ∨ (a ∧ c) for all a, b, c |
| Modular | a ≤ c ⇒ a ∨ (b ∧ c) = (a ∨ b) ∧ c |
| Complete | Every subset has a lub and a glb (every finite lattice is complete) |
- In a **distributive** lattice, complements are unique when they exist.
- The **diamond M₃** (five elements, three in the middle) is modular but not distributive. The **pentagon N₅** is neither modular nor distributive. A lattice is distributive exactly when it contains neither as a sublattice.
- A complemented distributive lattice is a **Boolean algebra**.

### Solved examples

**Example 1 (equivalence relation).** On A = {1, 2, 3}, R = {(1,1), (2,2), (3,3), (1,2), (2,1)}.
- Reflexive: all (a, a) present ✔. Symmetric: (1,2) and (2,1) ✔. Transitive: (1,2),(2,1) ⇒ (1,1) ✔ and (2,1),(1,2) ⇒ (2,2) ✔.
- So R is an equivalence relation, with classes **{1, 2}** and **{3}**.

**Example 2 (Hasse diagram of D₁₂ under divisibility).** D₁₂ = {1, 2, 3, 4, 6, 12}.
```
          12
         /  \
        4    6
         \  / \
          2    3
           \  /
            1
```
Edges: 1–2, 1–3, 2–4, 2–6, 3–6, 4–12, 6–12. Join = lcm, meet = gcd, so it is a lattice with 0 = 1 and 1 = 12.
- **Distributive:** yes (gcd and lcm distribute).
- **Complemented: no.** A complement of 2 would need gcd(2, x) = 1 and lcm(2, x) = 12; no x in D₁₂ works. (D₃₀ = {1, 2, 3, 5, 6, 10, 15, 30} *is* complemented, e.g. 2′ = 15, so D₃₀ is a Boolean algebra.)

**Example 3 (composite relation).** R = {(1,2), (2,3)} and S = {(2,4), (3,1)}. R∘S: (1,2) with (2,4) gives (1,4); (2,3) with (3,1) gives (2,1). **R∘S = {(1,4), (2,1)}**.

### Results to remember
```
|P(A)| = 2^n          |A × B| = |A|·|B|
Equivalence = reflexive + symmetric + transitive        → partition into classes
Partial order = reflexive + antisymmetric + transitive  → Hasse diagram
Lattice: every pair has lub (join ∨) and glb (meet ∧)
Divisibility lattice Dn: join = lcm, meet = gcd
Dn is a Boolean algebra exactly when n is square-free (e.g. D30, not D12)
```

### Important questions
1. Define equivalence relation and show a given relation is one; find its equivalence classes. *Check all three properties explicitly.*
2. Draw the Hasse diagram of a POSET (e.g. divisors of n) and find maximal, minimal, greatest, least elements, upper and lower bounds.
3. Define lattice and its types (bounded, complemented, distributive, modular). Check whether a given lattice is distributive/complemented. *Use M₃/N₅ as counter-examples.*
4. Prove that in a distributive lattice the complement of an element, if it exists, is unique.
5. Find the transitive closure of a relation using Warshall's algorithm.

---

## Unit 2: Functions and Boolean Algebra

### 2-mark definitions
- **Function f: A → B:** a relation that gives every element of A exactly one image in B. A is the domain, B the codomain, f(A) the range.
- **One-one (injective):** f(a₁) = f(a₂) ⇒ a₁ = a₂. **Onto (surjective):** every b ∈ B has a pre-image. **Bijective:** both one-one and onto; only bijections have inverses.
- **Composition:** (g∘f)(x) = g(f(x)). It is associative but not commutative in general.
- **Inverse function f⁻¹:** f⁻¹(b) = a exactly when f(a) = b.
- **Identity, constant, floor/ceiling functions:** I(x) = x; f(x) = c; ⌊x⌋ greatest integer ≤ x, ⌈x⌉ smallest integer ≥ x.
- **Growth of functions:** comparing how fast functions grow using O, Ω and Θ notation.
- **Boolean algebra:** a set B with operations +, · and ′, and elements 0 and 1, satisfying the Huntington axioms (closure, identity, commutative, distributive, complement).
- **Minterm / maxterm:** a product (sum) term that contains every variable exactly once, complemented or not.
- **SOP / POS:** sum of products / product of sums forms of a Boolean function.
- **Karnaugh map:** a grid of minterms arranged in Gray-code order so adjacent cells differ in one variable, used to simplify Boolean functions.

### Core concepts

**Counting functions from A (|A| = m) to B (|B| = n)**
| Kind | Number |
|---|---|
| All functions | nᵐ |
| One-one (m ≤ n) | n! / (n − m)! |
| Onto (m ≥ n) | Σₖ₌₀ⁿ (−1)ᵏ C(n, k) (n − k)ᵐ |
| Bijections (m = n) | n! |

**Growth of functions:** f(n) = O(g(n)) if f(n) ≤ c·g(n) for n ≥ n₀; Ω for ≥; Θ when both hold. Order: 1 < log n < n < n log n < n² < 2ⁿ < n!.

**Boolean algebra laws**
| Law | Form |
|---|---|
| Identity | A + 0 = A, A · 1 = A |
| Null (domination) | A + 1 = 1, A · 0 = 0 |
| Idempotent | A + A = A, A · A = A |
| Complement | A + A′ = 1, A · A′ = 0 |
| Involution | (A′)′ = A |
| Absorption | A + AB = A, A(A + B) = A |
| Useful | A + A′B = A + B, (A + B)(A + C) = A + BC |
| De Morgan | (A + B)′ = A′B′, (AB)′ = A′ + B′ |
| Consensus | AB + A′C + BC = AB + A′C |
**Duality principle:** swapping + with · and 0 with 1 in any valid identity gives another valid identity.

**K-map rules:** group 1s in rectangles of size 1, 2, 4, 8 (powers of 2); make groups as large as possible; groups may overlap and wrap around edges; every 1 must be covered; use the fewest groups. **Don't-care** cells (X) may be used if they help make bigger groups.

### Solved examples

**Example 1 (composition and inverse).** f(x) = 2x + 1 and g(x) = x² on ℝ.
- (g∘f)(x) = g(2x + 1) = **(2x + 1)²**. (f∘g)(x) = f(x²) = **2x² + 1**. They differ, so composition is not commutative.
- f is a bijection: y = 2x + 1 ⇒ **f⁻¹(y) = (y − 1)/2**.

**Example 2 (one-one and onto proof).** f: ℝ → ℝ, f(x) = 3x − 5.
- One-one: 3a − 5 = 3b − 5 ⇒ a = b ✔.
- Onto: for any y, x = (y + 5)/3 gives f(x) = y ✔. So f is bijective.

**Example 3 (3-variable K-map).** F(A, B, C) = Σm(0, 2, 4, 5, 6).
```
          B'C'  B'C   BC   BC'
   A'      1     0     0    1        (m0, m1, m3, m2)
   A       1     1     0    1        (m4, m5, m7, m6)
```
- Group {0, 2, 4, 6} (all cells with C = 0) → **C′**.
- Group {4, 5} → **AB′**.
- **F = C′ + AB′**.

**Example 4 (4-variable K-map).** F(A, B, C, D) = Σm(0, 1, 2, 5, 8, 9, 10).
- Quad {0, 1, 8, 9} → **B′C′**. Quad {0, 2, 8, 10} (the four corners) → **B′D′**. Pair {1, 5} → **A′C′D**.
- **F = B′C′ + B′D′ + A′C′D**.

**Example 5 (algebraic simplification).** Simplify AB + A′C + BC.
- BC = BC(A + A′) = ABC + A′BC. Then AB + ABC = AB and A′C + A′BC = A′C.
- **Result: AB + A′C** (consensus theorem).

### Results to remember
```
Functions A→B, |A| = m, |B| = n:   all = n^m;   one-one = n!/(n−m)!;   bijections = n!
Only bijections have inverses;   (g∘f)⁻¹ = f⁻¹ ∘ g⁻¹
A + A'B = A + B          (A + B)(A + C) = A + BC
De Morgan: (A + B)' = A'B',  (AB)' = A' + B'
K-map groups: 1, 2, 4, 8 cells; bigger is better; wrap around edges
```

### Important questions
1. Define one-one, onto and bijective functions; check a given function and find its inverse. *Prove both properties step by step.*
2. Find the number of one-one/onto functions between two finite sets.
3. State and prove De Morgan's laws and other theorems of Boolean algebra (absorption, consensus).
4. Simplify a Boolean function using a K-map (3 or 4 variables, maybe with don't-cares). *Draw the map, circle the groups, write the term for each.*
5. Express a function in canonical SOP and POS forms.

---

## Unit 3: Theory of Logic

### 2-mark definitions
- **Proposition:** a declarative sentence that is either true or false, but not both.
- **Connectives:** negation ¬, conjunction ∧, disjunction ∨, conditional →, biconditional ↔.
- **Tautology:** a compound proposition that is true for every assignment of truth values. **Contradiction:** false for every assignment. **Contingency:** neither.
- **Satisfiable:** true for at least one assignment.
- **Logical equivalence (p ≡ q):** p ↔ q is a tautology.
- **Converse, inverse, contrapositive of p → q:** q → p; ¬p → ¬q; ¬q → ¬p. Only the contrapositive is equivalent to p → q.
- **Argument / valid argument:** premises leading to a conclusion; valid if the conclusion is true whenever all premises are true.
- **Predicate:** a statement containing variables, which becomes a proposition when values are given, e.g. P(x): "x > 3".
- **Quantifiers:** universal ∀x ("for all x") and existential ∃x ("there exists x").
- **Well-formed formula (WFF):** an expression built correctly from predicates, connectives and quantifiers according to the formation rules.
- **Free vs bound variable:** a variable is bound if it lies in the scope of a quantifier on it; otherwise it is free.

### Core concepts

**Truth table of connectives**
| p | q | ¬p | p ∧ q | p ∨ q | p → q | p ↔ q |
|---|---|---|---|---|---|---|
| T | T | F | T | T | T | T |
| T | F | F | F | T | F | F |
| F | T | T | F | T | T | F |
| F | F | T | F | F | T | T |

**Key equivalences (algebra of propositions)**
- p → q ≡ ¬p ∨ q ≡ ¬q → ¬p
- p ↔ q ≡ (p → q) ∧ (q → p)
- De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q
- Distributive, absorption, idempotent, double negation, as in Boolean algebra.
- **Normal forms:** DNF (sum of products) and CNF (product of sums); PDNF/PCNF use full minterms/maxterms.

**Rules of inference**
| Rule | Form |
|---|---|
| Modus Ponens | p, p → q ⊢ q |
| Modus Tollens | ¬q, p → q ⊢ ¬p |
| Hypothetical Syllogism | p → q, q → r ⊢ p → r |
| Disjunctive Syllogism | p ∨ q, ¬p ⊢ q |
| Addition | p ⊢ p ∨ q |
| Simplification | p ∧ q ⊢ p |
| Conjunction | p, q ⊢ p ∧ q |
| Resolution | p ∨ q, ¬p ∨ r ⊢ q ∨ r |
| Constructive dilemma | (p → q) ∧ (r → s), p ∨ r ⊢ q ∨ s |
Rules **P** (introduce a premise) and **T** (use a tautology/earlier lines) and **CP** (conditional proof: to prove p → q, assume p and derive q) are used in formal proofs.

**Predicate logic**
- Negation: ¬∀x P(x) ≡ ∃x ¬P(x); ¬∃x P(x) ≡ ∀x ¬P(x).
- ∀ distributes over ∧: ∀x (P(x) ∧ Q(x)) ≡ ∀x P(x) ∧ ∀x Q(x). ∃ distributes over ∨.
- **Inference rules:** Universal Instantiation (US): ∀x P(x) ⊢ P(c); Universal Generalization (UG): P(c) for arbitrary c ⊢ ∀x P(x); Existential Instantiation (ES): ∃x P(x) ⊢ P(c) for some new c; Existential Generalization (EG): P(c) ⊢ ∃x P(x).
- Translating English: "All students are clever" → ∀x (S(x) → C(x)). "Some students are clever" → ∃x (S(x) ∧ C(x)). (Use → with ∀ and ∧ with ∃.)

### Solved examples

**Example 1 (tautology by truth table).** Show [(p → q) ∧ p] → q is a tautology.
| p | q | p → q | (p → q) ∧ p | [(p → q) ∧ p] → q |
|---|---|---|---|---|
| T | T | T | T | **T** |
| T | F | F | F | **T** |
| F | T | T | F | **T** |
| F | F | T | F | **T** |
The last column is all T, so it is a **tautology** (this is Modus Ponens).

**Example 2 (equivalence without truth table).** Show ¬(p ∨ (¬p ∧ q)) ≡ ¬p ∧ ¬q.
- ¬(p ∨ (¬p ∧ q)) ≡ ¬p ∧ ¬(¬p ∧ q) (De Morgan)
- ≡ ¬p ∧ (p ∨ ¬q) (De Morgan, double negation)
- ≡ (¬p ∧ p) ∨ (¬p ∧ ¬q) (distributive)
- ≡ F ∨ (¬p ∧ ¬q) ≡ **¬p ∧ ¬q** ✔

**Example 3 (validity using inference rules).** Premises: p → q, q → r, ¬r. Prove ¬p.
| Step | Statement | Reason |
|---|---|---|
| 1 | p → q | Premise |
| 2 | q → r | Premise |
| 3 | p → r | Hypothetical Syllogism (1, 2) |
| 4 | ¬r | Premise |
| 5 | **¬p** | Modus Tollens (3, 4) |

**Example 4 (English argument).** "If it rains, the match is cancelled. If the match is cancelled, we go home. It is raining. So we go home." Let r = rains, c = match cancelled, h = go home. Premises r → c, c → h, r. Then r → h (Hypothetical Syllogism) and with r, **h** follows by Modus Ponens. The argument is valid.

**Example 5 (predicate inference).** "All men are mortal. Socrates is a man. Therefore Socrates is mortal."
| Step | Statement | Reason |
|---|---|---|
| 1 | ∀x (M(x) → D(x)) | Premise |
| 2 | M(s) → D(s) | Universal Instantiation (1) |
| 3 | M(s) | Premise |
| 4 | **D(s)** | Modus Ponens (2, 3) |

### Results to remember
```
p → q ≡ ¬p ∨ q ≡ ¬q → ¬p (contrapositive)
Only p → q is false: T → F
¬∀x P(x) ≡ ∃x ¬P(x)        ¬∃x P(x) ≡ ∀x ¬P(x)
∀ goes with →,  ∃ goes with ∧
MP: p, p→q ⊢ q      MT: ¬q, p→q ⊢ ¬p      HS: p→q, q→r ⊢ p→r      DS: p∨q, ¬p ⊢ q
```

### Important questions
1. Construct a truth table and decide whether a compound proposition is a tautology, contradiction or contingency.
2. Prove a logical equivalence using laws (without a truth table). *Name the law at each step.*
3. Test the validity of an argument using rules of inference (including English arguments). *Table with step, statement, reason.*
4. Explain quantifiers with examples; translate English sentences into predicate logic and negate them.
5. Prove a conclusion using predicate inference rules (US, UG, ES, EG).
6. Obtain the PDNF and PCNF of a given formula.

---

## Unit 4: Algebraic Structures

### 2-mark definitions
- **Binary operation:** a rule * that combines two elements of a set S into an element of S (closure).
- **Algebraic structure:** a set with one or more binary operations, written (S, *).
- **Semigroup:** closed and associative. **Monoid:** semigroup with an identity element.
- **Group:** a set G with * that is **closed, associative, has an identity, and every element has an inverse**. **Abelian group:** a group that is also commutative.
- **Order of a group |G|:** number of elements. **Order of an element a:** the smallest positive n with aⁿ = e.
- **Subgroup:** a subset H of G that is itself a group under the same operation. Test: H non-empty and a, b ∈ H ⇒ a·b⁻¹ ∈ H.
- **Cyclic group:** a group generated by one element a: G = ⟨a⟩ = {aⁿ}. Every cyclic group is abelian.
- **Coset:** for a subgroup H and a ∈ G, the left coset aH = {ah : h ∈ H} and right coset Ha.
- **Normal subgroup:** H with aH = Ha for every a ∈ G (equivalently aHa⁻¹ = H).
- **Permutation group:** a group of bijections of a set onto itself under composition. **Symmetric group Sₙ:** all n! permutations of n objects.
- **Homomorphism:** a map f: G → G′ with f(ab) = f(a)f(b). **Isomorphism:** a bijective homomorphism. **Kernel:** {a : f(a) = e′}, always a normal subgroup.
- **Ring:** (R, +, ·) where (R, +) is an abelian group, · is associative, and · distributes over +.
- **Field:** a commutative ring with unity where every non-zero element has a multiplicative inverse.

### Core concepts

**Hierarchy:** groupoid (closure) → semigroup (+ associativity) → monoid (+ identity) → group (+ inverses) → abelian group (+ commutativity).

**Examples to quote**
| Structure | Example |
|---|---|
| Semigroup, not monoid | (ℕ without 0, +) |
| Monoid, not group | (ℕ, +) with 0 or (ℤ, ×) |
| Abelian group | (ℤ, +), (ℚ∖{0}, ×), (ℤₙ, +ₙ) |
| Non-abelian group | S₃ (6 permutations), invertible n×n matrices |
| Cyclic group | {1, −1, i, −i} under ×, generated by i |
| Ring, not field | (ℤ, +, ×) |
| Field | ℚ, ℝ, ℂ, and ℤₚ for prime p |

**Basic group properties:** identity is unique; each element has a unique inverse; (ab)⁻¹ = b⁻¹a⁻¹; cancellation laws hold.

**Lagrange's theorem:** if H is a subgroup of a finite group G, then **|H| divides |G|**.
- Proof idea: the left cosets of H partition G; each coset has exactly |H| elements; so |G| = k·|H| where k is the number of cosets (the index [G : H]).
- Consequences: the order of every element divides |G|; a group of prime order is cyclic; a^|G| = e.

**Cyclic group facts:** a cyclic group of order n has exactly one subgroup for each divisor of n, and φ(n) generators. In ℤₙ, k is a generator exactly when gcd(k, n) = 1.

**Permutations:** written in two-line or cycle notation. A permutation is **even** or **odd** by the number of transpositions in it; the even permutations form the alternating group Aₙ (order n!/2), a normal subgroup of Sₙ.

**Ring properties:** a ring may have zero divisors (a·b = 0 with a, b ≠ 0, e.g. 2·3 = 0 in ℤ₆). An **integral domain** is a commutative ring with unity and no zero divisors. Every field is an integral domain; every finite integral domain is a field.

### Solved examples

**Example 1 (show a group).** Show G = {1, −1, i, −i} is a group under multiplication.
- Closure: every product is in G (check the table below). Associativity: inherited from complex multiplication. Identity: 1. Inverses: 1⁻¹ = 1, (−1)⁻¹ = −1, i⁻¹ = −i, (−i)⁻¹ = i.
- It is **abelian** and **cyclic**: i¹ = i, i² = −1, i³ = −i, i⁴ = 1, so G = ⟨i⟩ (also ⟨−i⟩).
| × | 1 | −1 | i | −i |
|---|---|---|---|---|
| 1 | 1 | −1 | i | −i |
| −1 | −1 | 1 | −i | i |
| i | i | −i | −1 | 1 |
| −i | −i | i | 1 | −1 |

**Example 2 (subgroups and cosets in ℤ₆).** G = (ℤ₆, +₆), |G| = 6.
- Subgroups (orders divide 6): {0}, **{0, 3}**, **{0, 2, 4}**, ℤ₆.
- Cosets of H = {0, 3}: 0 + H = {0, 3}, 1 + H = {1, 4}, 2 + H = {2, 5}. Three cosets, each of size 2: 3 × 2 = 6 ✔ (Lagrange). Index [G : H] = 3.
- Generators of ℤ₆: 1 and 5 (gcd with 6 is 1).

**Example 3 (permutation product).** σ = (1 2 3) and τ = (1 2) in S₃. Compute στ, applying τ first.
- 1 → τ → 2 → σ → 3, so 1 → 3. 2 → 1 → 2, so 2 → 2. 3 → 3 → 1, so 3 → 1.
- **στ = (1 3)**. Doing τσ instead gives (2 3), so S₃ is **not abelian**.

**Example 4 (homomorphism).** f: (ℤ, +) → (ℤₙ, +ₙ), f(x) = x mod n. f(a + b) = (a + b) mod n = f(a) +ₙ f(b), so f is a homomorphism. Kernel = {multiples of n} = nℤ.

### Results to remember
```
Group = closure + associative + identity + inverse   (abelian: + commutative)
Subgroup test: H ≠ ∅ and a, b ∈ H ⇒ ab⁻¹ ∈ H
Lagrange: |H| divides |G|;  order of any element divides |G|;  prime order ⇒ cyclic
Generators of Zn: k with gcd(k, n) = 1;  number = φ(n)
|Sn| = n!,  |An| = n!/2
Zp is a field ⇔ p is prime
```

### Important questions
1. Define group, abelian group, cyclic group; show a given set and operation forms a group. *Check all four axioms; draw the composition table.*
2. State and prove Lagrange's theorem. Give its corollaries.
3. Find all subgroups and the cosets of a subgroup of a given group (e.g. ℤₙ). *List cosets and verify Lagrange.*
4. Define normal subgroup and homomorphism; prove the kernel of a homomorphism is a normal subgroup.
5. Prove that every cyclic group is abelian; find generators of a cyclic group.
6. Define ring, integral domain and field, with examples; show ℤₚ is a field when p is prime.

---

## Unit 5: Graphs and Combinatorics

### 2-mark definitions
- **Graph G = (V, E):** a set of vertices and a set of edges joining pairs of vertices.
- **Simple graph:** no loops and no parallel edges. **Multigraph:** parallel edges allowed. **Pseudograph:** loops allowed too.
- **Degree:** number of edges at a vertex (a loop counts twice).
- **Complete graph Kₙ:** every pair of vertices is adjacent; it has n(n − 1)/2 edges.
- **Bipartite graph:** vertices split into two sets with every edge going between them. **Kₘ,ₙ:** complete bipartite graph with mn edges.
- **Regular graph:** all vertices have the same degree.
- **Isomorphic graphs:** there is a bijection between vertex sets that preserves adjacency.
- **Homeomorphic graphs:** graphs that can be obtained from the same graph by subdividing edges (inserting degree-2 vertices).
- **Planar graph:** a graph that can be drawn in the plane with no edges crossing.
- **Euler path / circuit:** a path / closed path using every edge exactly once.
- **Hamiltonian path / cycle:** a path / cycle visiting every vertex exactly once.
- **Chromatic number χ(G):** the least number of colours needed so adjacent vertices get different colours.
- **Pigeonhole principle:** if more than n objects are put into n boxes, some box gets at least two.

### Core concepts

**Handshaking theorem:** Σ deg(v) = 2|E|. So the number of odd-degree vertices is always **even**.

**Representations:** adjacency matrix, incidence matrix, adjacency list.

**Euler and Hamilton**
| | Euler | Hamiltonian |
|---|---|---|
| Visits | Every edge once | Every vertex once |
| Circuit exists when | Connected and **every vertex has even degree** | No simple test; sufficient: **Dirac** (every degree ≥ n/2) or **Ore** (deg u + deg v ≥ n for non-adjacent u, v) |
| Path exists when | Connected and **exactly 0 or 2 odd-degree vertices** | |

**Planar graphs**
- **Euler's formula:** for a connected planar graph, **V − E + F = 2** (F = faces, including the outer one).
- For a simple connected planar graph with V ≥ 3: **E ≤ 3V − 6**. If it has no triangles: **E ≤ 2V − 4**.
- **Kuratowski's theorem:** a graph is planar exactly when it has no subgraph homeomorphic to **K₅** or **K₃,₃**.

**Bipartite test:** a graph is bipartite exactly when it has **no odd cycle**, i.e. it is 2-colourable.

**Graph colouring facts:** χ(Kₙ) = n; χ(bipartite with an edge) = 2; χ(cycle Cₙ) = 2 if n even, 3 if n odd; χ(any planar graph) ≤ 4 (four colour theorem). Applications: exam timetabling, register allocation, map colouring.

**Isomorphism checks:** isomorphic graphs must have the same number of vertices, edges, degree sequence, cycles of each length, and connectivity. If any of these differs they are **not** isomorphic; if all match, find an explicit mapping.

**Counting techniques**
| Rule | Formula |
|---|---|
| Sum rule | Tasks done in m or n disjoint ways: m + n |
| Product rule | Task in steps of m and n ways: m × n |
| Permutations | P(n, r) = n! / (n − r)! |
| Combinations | C(n, r) = n! / (r!(n − r)!) |
| With repetition | Arrangements nʳ; selections C(n + r − 1, r) |
| Identical objects | n! / (n₁! n₂! … nₖ!) |
| Inclusion–exclusion | \|A ∪ B\| = \|A\| + \|B\| − \|A ∩ B\| |
**Generalized pigeonhole:** if N objects go into k boxes, some box has at least ⌈N/k⌉ objects.

### Solved examples

**Example 1 (K₅ and K₃,₃ are not planar).**
- K₅: V = 5, E = 10. Planar would need E ≤ 3V − 6 = 9. Since 10 > 9, **K₅ is non-planar**.
- K₃,₃: V = 6, E = 9, and it has no triangles (bipartite). Planar would need E ≤ 2V − 4 = 8. Since 9 > 8, **K₃,₃ is non-planar**.

**Example 2 (Euler's formula).** A connected planar graph has 10 vertices, each of degree 3. Edges = (10 × 3)/2 = 15 (handshaking). Faces F = 2 − V + E = 2 − 10 + 15 = **7**.

**Example 3 (Euler path).** A graph has degrees 2, 3, 3, 4, 2. Exactly two vertices have odd degree, so it has an **Euler path** (starting at one odd vertex and ending at the other) but **no Euler circuit**.

**Example 4 (pigeonhole).**
- Among any 13 people, at least two share a birth month (13 people, 12 months).
- How many students guarantee that at least 6 get the same grade out of 5 grades? Need ⌈N/5⌉ ≥ 6 ⇒ N ≥ 26. **26 students.**

**Example 5 (inclusion–exclusion).** How many integers from 1 to 100 are divisible by 2 or 3? ⌊100/2⌋ + ⌊100/3⌋ − ⌊100/6⌋ = 50 + 33 − 16 = **67**.

**Example 6 (counting).** Arrangements of the letters of "BANANA" = 6! / (3! · 2! · 1!) = 720 / 12 = **60**. Committees of 3 from 8 people = C(8, 3) = **56**.

### Results to remember
```
Σ deg(v) = 2|E|;  number of odd-degree vertices is even
Kn has n(n−1)/2 edges;  Km,n has mn edges
Euler circuit: all degrees even;  Euler path: 0 or 2 odd-degree vertices
Dirac: deg(v) ≥ n/2 for all v ⇒ Hamiltonian
Planar: V − E + F = 2;  E ≤ 3V − 6;  no triangles: E ≤ 2V − 4
K5 and K3,3 are non-planar (Kuratowski)
Bipartite ⇔ no odd cycle ⇔ 2-colourable;  planar ⇒ χ ≤ 4
Pigeonhole: N objects, k boxes ⇒ some box has ⌈N/k⌉
```

### Important questions
1. State and prove the handshaking theorem; show the number of odd-degree vertices is even.
2. Define Euler and Hamiltonian paths/circuits with examples, and the conditions for their existence. *Draw one graph that is Eulerian but not Hamiltonian and one the other way round.*
3. Define planar graphs; prove Euler's formula and show K₅ and K₃,₃ are non-planar.
4. Check whether two given graphs are isomorphic. *Compare invariants in a table, then give the mapping or the mismatch.*
5. Define graph colouring and chromatic number; find χ for given graphs and mention applications.
6. State the pigeonhole principle (and generalized form) and solve problems on it; solve counting problems with permutations, combinations and inclusion–exclusion.

---

## Last-hour checklist

Read only this in the last hour before the paper.
- [ ] Reflexive, symmetric, antisymmetric, transitive definitions.
- [ ] Equivalence relation → partition; partial order → Hasse diagram.
- [ ] Lattice types; M₃ and N₅; Dₙ join = lcm, meet = gcd.
- [ ] One-one, onto, bijection; counting functions.
- [ ] Boolean laws, De Morgan, consensus; K-map grouping rules.
- [ ] Truth table of →; contrapositive.
- [ ] Inference rules MP, MT, HS, DS with names.
- [ ] Quantifier negation; ∀ with →, ∃ with ∧.
- [ ] Group axioms; subgroup test; Lagrange's theorem and proof.
- [ ] Cyclic groups; generators of ℤₙ; cosets.
- [ ] Ring, integral domain, field.
- [ ] Handshaking; Euler vs Hamiltonian conditions.
- [ ] V − E + F = 2; E ≤ 3V − 6; K₅, K₃,₃.
- [ ] Chromatic numbers; pigeonhole ⌈N/k⌉.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Discrete Structures | Thomas Koshy | Elsevier | [WorldCat](https://search.worldcat.org/search?q=Discrete+Mathematics+with+Applications+Koshy) |
| 2 | Discrete Mathematics and Its Applications (6th ed.) | Kenneth H. Rosen | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Discrete+Mathematics+and+Its+Applications+Rosen) |
| 3 | Discrete Mathematical Structures (5th ed.) | B. Kolman, R. C. Busby, S. C. Ross | Prentice Hall | [WorldCat](https://search.worldcat.org/search?q=Discrete+Mathematical+Structures+Kolman+Busby+Ross) |
| 4 | Mathematics: A Discrete Introduction | E. R. Scheinerman | Brooks/Cole | [WorldCat](https://search.worldcat.org/search?q=Mathematics+A+Discrete+Introduction+Scheinerman) |
| 5 | Discrete and Combinatorial Mathematics (5th ed.) | R. P. Grimaldi | Addison-Wesley | [WorldCat](https://search.worldcat.org/search?q=Discrete+and+Combinatorial+Mathematics+Grimaldi) |
| 6 | Discrete Mathematics (Schaum's Outline) | Seymour Lipschutz | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Discrete+Mathematics+Lipschutz+Schaum) |
| 7 | Discrete Mathematical Structures with Applications to Computer Science | J. P. Tremblay, R. Manohar | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Discrete+Mathematical+Structures+with+Applications+to+Computer+Science+Tremblay+Manohar) |
| 8 | Graph Theory with Applications to Engineering and Computer Science | Narsingh Deo | PHI | [WorldCat](https://search.worldcat.org/search?q=Graph+Theory+with+Applications+to+Engineering+and+Computer+Science+Narsingh+Deo) |
| 9 | Combinatorics: Theory and Applications | V. Krishnamurthy | East-West Press | [WorldCat](https://search.worldcat.org/search?q=Combinatorics+Theory+and+Applications+Krishnamurthy) |

**Official syllabus:** [AKTU B.Tech 2nd year CSE syllabus, 2023-24 scheme (PDF)](https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2324/B.Tech_2nd_Yr_CSE_v3.pdf)

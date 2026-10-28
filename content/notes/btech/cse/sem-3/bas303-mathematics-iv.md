---
program: btech
branches: [cse, it, cse-aiml, cse-ds, aids, ece, ee, me, che]
semester: 3
code: BAS303
name: Mathematics-IV (PDE, Probability and Statistics)
credits: 4
ltp: 3-1-0
scheme: AKTU B.Tech 2nd year, 2023-24 onwards (BAS403 in semester 4 for some branches)
syllabusSource: https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2324/Mathematics-III_Mathematics_IV_Mathematics_V.pdf
units:
  - Partial Differential Equations
  - Applications of PDE and Fourier Transform
  - Statistical Techniques I
  - Statistical Techniques II (Probability)
  - Statistical Techniques III (Sampling and SQC)
---

# BAS303 Mathematics-IV: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Maths is about methods, so every unit has:
1. **2-mark definitions and formulas**: what to write in Section A.
2. **Core methods**: step-by-step recipes for each type of question.
3. **Solved examples**: fully worked problems of the kinds asked in AKTU papers.
4. **Formula sheet**: everything to remember for the unit, in one block.
5. **Important questions**: the question types to practise.

## How to use these notes the day before the paper

- **Morning (3 hours):** Units 1 and 2. Practise Lagrange's method, one Charpit problem, finding CF and PI, and one heat/wave equation problem.
- **Afternoon (3 hours):** Units 3 and 4: moments, curve fitting, regression, and the binomial/Poisson/normal problems. These are quick, reliable marks.
- **Evening (2 hours):** Unit 5 (t-test, chi-square, control charts), then the formula sheets once more.
- **In the exam:** write the formula first, then substitute. State the hypothesis and the conclusion in words for every test. Keep a table for statistics data.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit. (This matches the 2023-24 BAS303 paper.)

---

## Unit 1: Partial Differential Equations

### 2-mark definitions and formulas
- **PDE:** an equation involving a function of two or more independent variables and its partial derivatives. Notation: p = ∂z/∂x, q = ∂z/∂y, r = ∂²z/∂x², s = ∂²z/∂x∂y, t = ∂²z/∂y².
- **Order:** the highest derivative present. **Degree:** the power of the highest-order derivative (after removing radicals and fractions).
- **Linear PDE:** z and its derivatives appear only to the first power and are not multiplied together.
- **Formation of PDE:** eliminate arbitrary constants (differentiate and eliminate) or arbitrary functions.
- **Complete integral:** solution with as many arbitrary constants as independent variables. **General integral:** solution containing an arbitrary function. **Singular integral:** obtained by eliminating constants from the complete integral and its partial derivatives with respect to the constants.
- **Lagrange's linear equation:** Pp + Qq = R, where P, Q, R are functions of x, y, z.
- **Classification of A u_xx + B u_xy + C u_yy + … = 0:** B² − 4AC < 0 **elliptic**, = 0 **parabolic**, > 0 **hyperbolic**.

### Core methods

**Lagrange's method (Pp + Qq = R)**
1. Write the auxiliary equations **dx/P = dy/Q = dz/R**.
2. Find two independent solutions u(x, y, z) = c₁ and v(x, y, z) = c₂, using grouping or **multipliers** (choose l, m, n with lP + mQ + nR = 0, so l dx + m dy + n dz = 0).
3. General solution: **φ(u, v) = 0**.

**Charpit's method (non-linear f(x, y, z, p, q) = 0)**
1. Auxiliary equations: **dp/(f_x + p f_z) = dq/(f_y + q f_z) = dz/(−p f_p − q f_q) = dx/(−f_p) = dy/(−f_q)**.
2. Use the simplest pair to get one extra relation between p and q (with a constant a).
3. Solve it with f = 0 for p and q, then integrate **dz = p dx + q dy**.

**Standard forms (shortcuts)**
| Form | Complete integral |
|---|---|
| I: f(p, q) = 0 | z = ax + by + c, where f(a, b) = 0 |
| II (Clairaut): z = px + qy + f(p, q) | z = ax + by + f(a, b) |
| III: f(z, p, q) = 0 | Put q = ap, u = x + ay; solve the ODE in z(u) |
| IV: f₁(x, p) = f₂(y, q) | Set both = a; p = g₁(x, a), q = g₂(y, a); z = ∫p dx + ∫q dy + b |

**Higher-order linear PDE with constant coefficients: F(D, D′)z = f(x, y)**, D = ∂/∂x, D′ = ∂/∂y.
- **Complementary function (CF):** put D = m, D′ = 1 to get the auxiliary equation.
  - Distinct roots m₁, m₂, …: CF = φ₁(y + m₁x) + φ₂(y + m₂x) + …
  - Repeated root m (twice): CF = φ₁(y + mx) + x φ₂(y + mx).
- **Particular integral (PI) = f(x, y) / F(D, D′):**
  - f = e^(ax+by): PI = e^(ax+by) / F(a, b), if F(a, b) ≠ 0.
  - f = sin(ax + by) or cos(ax + by): replace D² → −a², DD′ → −ab, D′² → −b².
  - f = xᵐyⁿ: expand 1/F(D, D′) as a power series and operate.
  - General case: 1/(D − mD′) f(x, y) = ∫ f(x, c − mx) dx, then put c = y + mx.
- **Complete solution z = CF + PI.**

**Equations reducible to constant coefficients (Euler–Cauchy type):** for terms like x²r, xy s, y²t, put x = e^X, y = e^Y; then xD = θ, yD′ = θ′, x²D² = θ(θ − 1), xyDD′ = θθ′, y²D′² = θ′(θ′ − 1).

### Solved examples

**Example 1 (formation).** Eliminate the arbitrary function from z = f(2x − y).
p = 2f′(2x − y), q = −f′(2x − y). Divide: p/q = −2, so **p + 2q = 0**.

**Example 2 (Lagrange).** Solve (y − z)p + (z − x)q = x − y.
- Multipliers 1, 1, 1: P + Q + R = 0 ⇒ dx + dy + dz = 0 ⇒ **x + y + z = c₁**.
- Multipliers x, y, z: xP + yQ + zR = 0 ⇒ x dx + y dy + z dz = 0 ⇒ **x² + y² + z² = c₂**.
- Solution: **φ(x + y + z, x² + y² + z²) = 0**.

**Example 3 (Charpit).** Solve px + qy = pq.
- f = px + qy − pq; f_x = p, f_y = q, f_z = 0, f_p = x − q, f_q = y − p.
- From dp/p = dq/q: **p = aq**.
- Put in f = 0: aqx + qy − aq² = 0 ⇒ q = (ax + y)/a, p = ax + y.
- dz = (ax + y) dx + ((ax + y)/a) dy = (1/a)(ax + y)(a dx + dy).
- Integrate: **z = (ax + y)²/(2a) + b**.

**Example 4 (CF and PI).** Solve (D² + 3DD′ + 2D′²)z = x + y.
- Auxiliary: m² + 3m + 2 = 0 ⇒ m = −1, −2. **CF = φ₁(y − x) + φ₂(y − 2x)**.
- PI = (1/D²)[1 + 3D′/D + 2D′²/D²]⁻¹(x + y) = (1/D²)[(x + y) − 3(1/D)(1)] = x³/6 + x²y/2 − x³/2.
- **PI = x²y/2 − x³/3**. (Check: D²(PI) = y − 2x, DD′(PI) = x, D′²(PI) = 0; sum = y − 2x + 3x = x + y ✔.)
- **z = φ₁(y − x) + φ₂(y − 2x) + x²y/2 − x³/3**.

**Example 5 (classification).** u_xx + 4u_xy + 4u_yy = 0: B² − 4AC = 16 − 16 = 0 ⇒ **parabolic**. u_xx + u_yy = 0: 0 − 4 < 0 ⇒ **elliptic**. u_tt − c²u_xx = 0: 0 + 4c² > 0 ⇒ **hyperbolic**.

### Formula sheet
```
p = ∂z/∂x, q = ∂z/∂y, r = ∂²z/∂x², s = ∂²z/∂x∂y, t = ∂²z/∂y²
Lagrange:  dx/P = dy/Q = dz/R   →  φ(u, v) = 0
Charpit:   dp/(fx + p fz) = dq/(fy + q fz) = dz/(−p fp − q fq) = dx/(−fp) = dy/(−fq)
CF: distinct m → φ(y + m x);  repeated m → φ1(y + m x) + x φ2(y + m x)
PI: e^(ax+by)/F(a,b);  sin/cos: D² → −a², DD' → −ab, D'² → −b²
Class: B² − 4AC  <0 elliptic, =0 parabolic, >0 hyperbolic
```

### Important questions
1. Form PDEs by eliminating arbitrary constants / functions.
2. Solve Lagrange's linear equations using grouping and multipliers.
3. Solve non-linear PDEs using Charpit's method or standard forms.
4. Solve higher-order linear PDEs with constant coefficients (CF + PI, including exponential, trigonometric and polynomial right-hand sides).
5. Classify second-order PDEs.

---

## Unit 2: Applications of PDE and Fourier Transform

### 2-mark definitions and formulas
- **Method of separation of variables:** assume u(x, t) = X(x)T(t), substitute, and split the PDE into ODEs in each variable equal to a separation constant (−λ²).
- **One-dimensional heat equation:** ∂u/∂t = c² ∂²u/∂x² (parabolic), c² = thermal diffusivity.
- **One-dimensional wave equation:** ∂²y/∂t² = c² ∂²y/∂x² (hyperbolic), c² = T/m (tension / mass per unit length).
- **Two-dimensional Laplace equation:** ∂²u/∂x² + ∂²u/∂y² = 0 (steady-state 2D heat flow, elliptic).
- **Fourier transform:** F{f(x)} = F(s) = ∫₋∞^∞ f(x) e^(isx) dx; inverse f(x) = (1/2π) ∫₋∞^∞ F(s) e^(−isx) ds.
- **Fourier sine transform:** F_s(s) = ∫₀^∞ f(x) sin sx dx; inverse f(x) = (2/π) ∫₀^∞ F_s(s) sin sx ds.
- **Fourier cosine transform:** F_c(s) = ∫₀^∞ f(x) cos sx dx; inverse f(x) = (2/π) ∫₀^∞ F_c(s) cos sx ds.
- **Convolution:** (f * g)(x) = ∫₋∞^∞ f(u) g(x − u) du. **Convolution theorem:** F{f * g} = F(s)·G(s).

### Core methods

**Choosing the right solution (bounded, physically sensible)**
| Equation | Solution form to use |
|---|---|
| Heat (u → 0 as t → ∞) | u = (A cos px + B sin px) e^(−c²p²t) |
| Wave (periodic in t) | y = (A cos px + B sin px)(C cos cpt + D sin cpt) |
| Laplace | u = (A cos px + B sin px)(C e^(py) + D e^(−py)) or with sinh/cosh |

**Standard results (rod/string of length L, ends kept at zero)**
- **Heat:** u(x, t) = Σ bₙ sin(nπx/L) e^(−c²n²π²t/L²), with **bₙ = (2/L) ∫₀ᴸ f(x) sin(nπx/L) dx**, where f(x) = u(x, 0).
- **Wave:** y(x, t) = Σ [aₙ cos(nπct/L) + bₙ sin(nπct/L)] sin(nπx/L), with **aₙ = (2/L) ∫₀ᴸ f(x) sin(nπx/L) dx** (initial displacement) and **bₙ = (2/(nπc)) ∫₀ᴸ g(x) sin(nπx/L) dx** (initial velocity). Released from rest ⇒ all bₙ = 0.
- **Laplace on a rectangle 0 ≤ x ≤ a, 0 ≤ y ≤ b**, with u = 0 on x = 0, x = a, y = 0 and u(x, b) = f(x): u = Σ Bₙ sin(nπx/a) sinh(nπy/a), **Bₙ = [2 / (a sinh(nπb/a))] ∫₀ᵃ f(x) sin(nπx/a) dx**.

**Useful transforms**
| f(x) | Transform |
|---|---|
| e^(−a\|x\|) | F(s) = 2a/(a² + s²) |
| e^(−ax), x > 0 | F_s = s/(a² + s²), F_c = a/(a² + s²) |
| 1 for \|x\| < a, 0 otherwise | F(s) = 2 sin(as)/s |
| e^(−x²/2) | F(s) = √(2π) e^(−s²/2) |

**Transform of derivatives (for solving PDEs):** F{∂²u/∂x²} = −s²U; F_s{u_xx} = s u(0) − s²U_s; F_c{u_xx} = −u_x(0) − s²U_c. Pick sine transform when u(0, t) is given, cosine transform when u_x(0, t) is given.

### Solved examples

**Example 1 (wave equation).** A string fixed at x = 0 and x = 2 is released from rest from y(x, 0) = a sin(πx/2). Find y(x, t).
- L = 2; at rest ⇒ bₙ = 0. The initial shape is already a single term with n = 1, so a₁ = a and all other aₙ = 0.
- **y(x, t) = a sin(πx/2) cos(πct/2)**.

**Example 2 (heat equation).** u_t = c²u_xx, 0 < x < π, u(0, t) = u(π, t) = 0, u(x, 0) = 3 sin x + 5 sin 4x.
- L = π, so u = Σ bₙ sin nx e^(−c²n²t). Matching the initial condition directly: b₁ = 3, b₄ = 5.
- **u(x, t) = 3 sin x e^(−c²t) + 5 sin 4x e^(−16c²t)**.

**Example 3 (separation of variables on a first-order PDE).** Solve u_x = 2u_t + u, u(x, 0) = 6e^(−3x).
- u = X(x)T(t): X′T = 2XT′ + XT ⇒ X′/X = (2T′ + T)/T = k.
- X = Ae^(kx); 2T′ = (k − 1)T ⇒ T = Be^((k−1)t/2). u = C e^(kx) e^((k−1)t/2).
- At t = 0: Ce^(kx) = 6e^(−3x) ⇒ C = 6, k = −3. **u = 6e^(−3x − 2t)**.

**Example 4 (Fourier transform).** Find F{e^(−a|x|)}, a > 0.
F(s) = ∫₋∞⁰ e^(ax) e^(isx) dx + ∫₀^∞ e^(−ax) e^(isx) dx = 1/(a + is) + 1/(a − is) = **2a/(a² + s²)**.

### Formula sheet
```
Heat:    u = Σ bn sin(nπx/L) e^(−c²n²π²t/L²),       bn = (2/L)∫ f sin(nπx/L) dx
Wave:    y = Σ [an cos(nπct/L) + bn sin(nπct/L)] sin(nπx/L)
         an = (2/L)∫ f sin(nπx/L) dx,   bn = (2/(nπc))∫ g sin(nπx/L) dx
Laplace: u = Σ Bn sin(nπx/a) sinh(nπy/a)
FT:  F(s) = ∫ f e^(isx) dx;  inverse (1/2π)∫ F e^(−isx) ds
FST/FCT inverse factor 2/π;   F{f*g} = F·G;   F{u_xx} = −s²U
```

### Important questions
1. Solve PDEs by the method of separation of variables.
2. Solve the one-dimensional heat equation with given boundary and initial conditions.
3. Solve the one-dimensional wave equation for a vibrating string (released from rest / given initial velocity).
4. Solve Laplace's equation in a rectangle.
5. Find Fourier, sine and cosine transforms of given functions; state and prove the convolution theorem; solve a PDE using Fourier transforms.

---

## Unit 3: Statistical Techniques I

### 2-mark definitions and formulas
- **Measures of central tendency:** mean x̄ = Σfx/N, median (middle value), mode (most frequent). Empirical relation: **Mode = 3 Median − 2 Mean**.
- **Moments about the mean:** μᵣ = Σf(x − x̄)ʳ/N. **Moments about A:** μᵣ′ = Σf(x − A)ʳ/N.
- **Skewness:** lack of symmetry. Karl Pearson's coefficient Sₖ = (Mean − Mode)/σ. Moment measure **β₁ = μ₃²/μ₂³**; sign of μ₃ gives the direction.
- **Kurtosis:** peakedness. **β₂ = μ₄/μ₂²**: = 3 mesokurtic (normal), > 3 leptokurtic, < 3 platykurtic.
- **Curve fitting (least squares):** choose constants so that the sum of squares of errors Σ(y − ŷ)² is minimum.
- **Correlation coefficient (Karl Pearson):** r = Cov(x, y)/(σₓσᵧ), −1 ≤ r ≤ 1.
- **Rank correlation (Spearman):** ρ = 1 − 6Σd²/(n(n² − 1)).
- **Regression line:** the best-fit line to predict one variable from the other. Regression coefficients bᵧₓ = r σᵧ/σₓ and bₓᵧ = r σₓ/σᵧ; **r = ±√(bᵧₓ bₓᵧ)**.

### Core methods

**Moments about the mean from moments about A**
- μ₁ = 0
- μ₂ = μ₂′ − μ₁′²
- μ₃ = μ₃′ − 3μ₂′μ₁′ + 2μ₁′³
- μ₄ = μ₄′ − 4μ₃′μ₁′ + 6μ₂′μ₁′² − 3μ₁′⁴
- Mean = A + μ₁′; variance = μ₂.

**Normal equations (least squares)**
| Curve | Normal equations |
|---|---|
| Line y = a + bx | Σy = na + bΣx; Σxy = aΣx + bΣx² |
| Parabola y = a + bx + cx² | Σy = na + bΣx + cΣx²; Σxy = aΣx + bΣx² + cΣx³; Σx²y = aΣx² + bΣx³ + cΣx⁴ |
| y = aeᵇˣ | Take Y = ln y: Y = A + bx with A = ln a, then fit a line |
| y = axᵇ | Take logs: log y = log a + b log x, fit a line |

**Regression lines:** y on x: y − ȳ = bᵧₓ(x − x̄); x on y: x − x̄ = bₓᵧ(y − ȳ). Both pass through (x̄, ȳ), so the **means are the intersection point**. The angle between them shrinks as |r| → 1.

### Solved examples

**Example 1 (moments, skewness, kurtosis).** The first four moments about 5 are 2, 20, 40 and 50.
- μ₂ = 20 − 2² = **16**.
- μ₃ = 40 − 3(20)(2) + 2(2)³ = 40 − 120 + 16 = **−64**.
- μ₄ = 50 − 4(40)(2) + 6(20)(4) − 3(16) = 50 − 320 + 480 − 48 = **162**.
- Mean = 5 + 2 = 7. β₁ = (−64)²/16³ = 4096/4096 = **1**; β₂ = 162/256 = **0.63**.
- μ₃ < 0 ⇒ **negatively skewed**; β₂ < 3 ⇒ **platykurtic**.

**Example 2 (fit a straight line).** x: 1, 2, 3, 4, 5; y: 2, 4, 5, 4, 5.
- n = 5, Σx = 15, Σy = 20, Σx² = 55, Σxy = 66.
- 20 = 5a + 15b and 66 = 15a + 55b ⇒ b = 0.6, a = 2.2.
- **y = 2.2 + 0.6x**.

**Example 3 (regression lines).** The lines are 8x − 10y + 66 = 0 and 40x − 18y = 214, and Var(x) = 9. Find x̄, ȳ, r and σᵧ.
- Solving together: **x̄ = 13, ȳ = 17**.
- Take the first as y on x: y = 0.8x + 6.6 ⇒ bᵧₓ = 0.8. Second as x on y: x = 0.45y + 5.35 ⇒ bₓᵧ = 0.45.
- r² = 0.8 × 0.45 = 0.36 ⇒ **r = 0.6** (positive, since both coefficients are positive; and r² ≤ 1 confirms the choice).
- σᵧ = bᵧₓ σₓ / r = 0.8 × 3 / 0.6 = **4**.

**Example 4 (rank correlation).** For 5 pairs with Σd² = 8: ρ = 1 − 6(8)/(5 × 24) = 1 − 0.4 = **0.6**.

### Formula sheet
```
μ2 = μ2' − μ1'²;  μ3 = μ3' − 3μ2'μ1' + 2μ1'³;  μ4 = μ4' − 4μ3'μ1' + 6μ2'μ1'² − 3μ1'⁴
β1 = μ3²/μ2³;  β2 = μ4/μ2²  (3 = normal)
r = Σ(dx·dy)/√(Σdx²·Σdy²);   ρ = 1 − 6Σd²/(n(n²−1))
byx = r σy/σx;  bxy = r σx/σy;  r = ±√(byx·bxy)
Line normal eqns: Σy = na + bΣx;  Σxy = aΣx + bΣx²
```

### Important questions
1. Calculate moments, skewness and kurtosis from given data or from moments about a point.
2. Fit a straight line / second-degree parabola / exponential curve by least squares.
3. Find Karl Pearson's correlation coefficient and Spearman's rank correlation.
4. Find regression lines; or from given regression lines find means, r and standard deviations.

---

## Unit 4: Statistical Techniques II (Probability and Distributions)

### 2-mark definitions and formulas
- **Probability:** P(A) = favourable outcomes / total equally likely outcomes; 0 ≤ P(A) ≤ 1. Addition: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Conditional: P(A|B) = P(A ∩ B)/P(B).
- **Random variable:** a function that assigns a number to each outcome. **Discrete** (countable values) or **continuous** (any value in an interval).
- **Probability mass function (PMF):** p(x) ≥ 0 and Σp(x) = 1.
- **Probability density function (PDF):** f(x) ≥ 0 and ∫ f(x) dx = 1; P(a < X < b) = ∫ₐᵇ f(x) dx.
- **Expectation:** E(X) = Σx p(x) or ∫ x f(x) dx. **Variance:** Var(X) = E(X²) − [E(X)]².
- **Binomial distribution:** P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ, mean np, variance npq.
- **Poisson distribution:** P(X = r) = e^(−λ) λʳ / r!, mean = variance = λ. Limit of binomial when n is large and p small (λ = np).
- **Normal distribution:** bell-shaped, symmetric about μ; standard variate **z = (x − μ)/σ**; mean = median = mode.

### Core methods

**Choosing the distribution**
| Situation | Use |
|---|---|
| Fixed number n of independent trials, two outcomes | Binomial |
| Rare events in a large number of trials / per unit time | Poisson |
| Continuous measurements (heights, wages, marks) | Normal |

**Normal-distribution procedure:** convert to z, read the area from 0 to z in the table, then add or subtract from 0.5. Key areas: z = 1 → 0.3413, z = 1.96 → 0.4750, z = 2 → 0.4772, z = 3 → 0.49865.

**Fitting distributions:** binomial: find p from mean = np, then expected frequencies N·P(X = r). Poisson: λ = mean, then N·e^(−λ)λʳ/r!.

### Solved examples

**Example 1 (PDF constant).** f(x) = kx for 0 ≤ x ≤ 4. ∫₀⁴ kx dx = 8k = 1 ⇒ **k = 1/8**. Mean = ∫₀⁴ x·(x/8) dx = 64/24 = **8/3**.

**Example 2 (binomial).** 320 families have 5 children each; boys and girls are equally likely.
- P(2 boys, 3 girls) = ⁵C₂ (1/2)⁵ = 10/32 ⇒ expected families = 320 × 10/32 = **100**.
- P(at least one boy) = 1 − (1/2)⁵ = 31/32 ⇒ 320 × 31/32 = **310**.

**Example 3 (Poisson).** If P(X = 2) = 9P(X = 4) + 90P(X = 6), find the standard deviation.
- e^(−m)m²/2 = 9e^(−m)m⁴/24 + 90e^(−m)m⁶/720 ⇒ 1/2 = 3m²/8 + m⁴/8.
- m⁴ + 3m² − 4 = 0 ⇒ (m² + 4)(m² − 1) = 0 ⇒ m = 1.
- Variance = m = 1, so **SD = 1**.

**Example 4 (normal).** Wages of 1000 workers are normal with mean ₹140 and SD ₹10.
- 140 < x < 144: z from 0 to 0.4 → area 0.1554 → **≈ 155 workers**.
- x < 126: z = −1.4 → area 0.5 − 0.4192 = 0.0808 → **≈ 81 workers**.
- x > 160: z = 2 → area 0.5 − 0.4772 = 0.0228 → **≈ 23 workers**.

**Example 5 (discrete expectation).** X takes 8, 12, 16, 20, 24 with probabilities 1/8, 1/6, 3/8, 1/4, 1/12.
E(X) = 1 + 2 + 6 + 5 + 2 = **16**.

### Formula sheet
```
Binomial: P(r) = nCr p^r q^(n−r);  mean np;  var npq
Poisson:  P(r) = e^(−λ) λ^r / r!;  mean = var = λ;  recurrence P(r+1) = λ/(r+1)·P(r)
Normal:   z = (x − μ)/σ;  areas: 1→0.3413, 1.96→0.475, 2→0.4772, 3→0.49865
E(X) = Σx p(x);  Var(X) = E(X²) − [E(X)]²
```

### Important questions
1. Find the constant, mean and variance for a given PMF/PDF.
2. Solve problems and fit data using the binomial distribution.
3. Solve problems and fit data using the Poisson distribution.
4. Solve problems on the normal distribution using the area table.

---

## Unit 5: Statistical Techniques III (Sampling, Tests and SQC)

### 2-mark definitions and formulas
- **Population / sample:** the whole group / a part of it chosen for study. **Parameter:** a value for the population (μ, σ); **statistic:** a value from the sample (x̄, s).
- **Sampling distribution / standard error (SE):** the distribution of a statistic over all samples; its SD is the standard error, e.g. SE(x̄) = σ/√n.
- **Null hypothesis H₀:** a statement of "no difference" that we test. **Alternative hypothesis H₁:** what we accept if H₀ is rejected.
- **Type I error:** rejecting a true H₀ (probability α, the **level of significance**). **Type II error:** accepting a false H₀ (probability β).
- **Critical region:** values of the test statistic for which H₀ is rejected. **One-tailed / two-tailed test** depending on H₁.
- **Confidence limits:** x̄ ± z·SE; 95% limits use z = 1.96, 99% use 2.58.
- **Degrees of freedom:** number of values free to vary (n − 1 for one-sample t).
- **Statistical quality control (SQC):** using statistics to monitor a process. **Control chart:** a chart with a central line (CL), upper control limit (UCL) and lower control limit (LCL). Points outside the limits mean the process is **out of control** (assignable causes).

### Core methods

**Steps for any test**
1. State H₀ and H₁. 2. Choose α (usually 5%). 3. Compute the test statistic. 4. Compare with the table (critical) value. 5. **If |calculated| < table value, accept H₀; otherwise reject.** State the conclusion in words.

**Critical z values**
| α | Two-tailed | One-tailed |
|---|---|---|
| 5% | 1.96 | 1.645 |
| 1% | 2.58 | 2.33 |

**Test statistics**
| Test | Statistic |
|---|---|
| Large sample, single mean | z = (x̄ − μ)/(σ/√n) |
| Large sample, two means | z = (x̄₁ − x̄₂)/√(σ₁²/n₁ + σ₂²/n₂) |
| Single proportion | z = (p − P)/√(PQ/n) |
| Small sample, single mean | t = (x̄ − μ)/(s/√n), s² = Σ(x − x̄)²/(n − 1), df = n − 1 |
| Small sample, two means | t = (x̄₁ − x̄₂)/(S√(1/n₁ + 1/n₂)), S² = [Σ(x₁ − x̄₁)² + Σ(x₂ − x̄₂)²]/(n₁ + n₂ − 2), df = n₁ + n₂ − 2 |
| Chi-square (goodness of fit / independence) | χ² = Σ(O − E)²/E; for an r × c table df = (r − 1)(c − 1), E = (row total × column total)/N |
| 2 × 2 table shortcut | χ² = N(ad − bc)² / [(a + b)(c + d)(a + c)(b + d)] |
Critical χ² at 5%: 1 df → 3.841, 2 df → 5.991, 3 df → 7.815.

**Control charts**
| Chart | For | CL | Limits |
|---|---|---|---|
| X̄ chart | Mean of a variable | X̿ | X̿ ± A₂R̄ |
| R chart | Range of a variable | R̄ | UCL = D₄R̄, LCL = D₃R̄ |
| p chart | Fraction defective | p̄ | p̄ ± 3√(p̄(1 − p̄)/n) |
| np chart | Number defective | np̄ | np̄ ± 3√(np̄(1 − p̄)) |
| c chart | Defects per unit | c̄ | c̄ ± 3√c̄ |
For sample size n = 5: A₂ = 0.577, D₃ = 0, D₄ = 2.114. A negative LCL is taken as 0.

### Solved examples

**Example 1 (t-test, single mean).** A sample of 10 has mean 48 and s = 3. Test whether the population mean could be 50 (5% level, t₀.₀₅ for 9 df = 2.262).
- H₀: μ = 50. t = (48 − 50)/(3/√10) = −2/0.949 = **−2.11**.
- |t| = 2.11 < 2.262 ⇒ **accept H₀**: the difference is not significant.

**Example 2 (chi-square, independence).** 50 workers: men doing skilled work 20, unskilled 10; women skilled 5, unskilled 15. Is the nature of work independent of gender?
- a = 20, b = 10, c = 5, d = 15, N = 50; ad − bc = 300 − 50 = 250.
- χ² = 50 × 250² / (30 × 20 × 25 × 25) = 3,125,000 / 375,000 = **8.33**.
- df = 1, table value 3.841. 8.33 > 3.841 ⇒ **reject H₀**: work type depends on gender.

**Example 3 (np chart).** 10 samples of 100 items each contain 80 defectives in total.
- p̄ = 80/1000 = 0.08, np̄ = 8, √(np̄(1 − p̄)) = √7.36 = 2.71.
- **CL = 8, UCL = 8 + 3(2.71) = 16.14, LCL = 8 − 8.14 < 0 → 0.** Any sample with more than 16 defectives signals the process is out of control.

**Example 4 (X̄ and R charts).** Samples of size 5 give X̿ = 20 and R̄ = 4.
- X̄ chart: CL = 20, **UCL = 20 + 0.577 × 4 = 22.31, LCL = 17.69**.
- R chart: CL = 4, **UCL = 2.114 × 4 = 8.46, LCL = 0**.

### Formula sheet
```
z (mean) = (x̄ − μ)/(σ/√n);   z (two means) = (x̄1 − x̄2)/√(σ1²/n1 + σ2²/n2)
t = (x̄ − μ)/(s/√n), df n−1;  pooled t, df n1+n2−2
χ² = Σ(O−E)²/E;  2×2: N(ad−bc)²/[(a+b)(c+d)(a+c)(b+d)];  df (r−1)(c−1)
z critical: 1.96 (5%), 2.58 (1%) two-tailed
X̄: X̿ ± A2 R̄;  R: D3 R̄, D4 R̄;  p: p̄ ± 3√(p̄q̄/n);  np: np̄ ± 3√(np̄q̄);  c: c̄ ± 3√c̄
```

### Important questions
1. Explain null hypothesis, level of significance, Type I/II errors and critical region.
2. Test the significance of a mean or difference of means using z-test (large samples) or t-test (small samples).
3. Apply the chi-square test for goodness of fit or independence of attributes.
4. Construct X̄ and R charts, or p / np / c charts, and comment on whether the process is in control.

---

## Last-hour checklist

Read only this in the last hour before the paper.
- [ ] p, q, r, s, t notation; formation by elimination.
- [ ] Lagrange: dx/P = dy/Q = dz/R; multipliers; φ(u, v) = 0.
- [ ] Charpit auxiliary equations; standard forms I–IV.
- [ ] CF rules (distinct/repeated m); PI for e^(ax+by), sin/cos, polynomials.
- [ ] B² − 4AC classification.
- [ ] Heat, wave and Laplace solution formulas with bₙ.
- [ ] Fourier, sine, cosine transforms and inverses; convolution theorem.
- [ ] Moment conversion formulas; β₁, β₂.
- [ ] Normal equations for line and parabola.
- [ ] r, ρ, regression coefficients, means from intersection.
- [ ] Binomial, Poisson, normal formulas and table values.
- [ ] Test procedure; z, t, χ² formulas; 1.96 / 2.58 / 3.841.
- [ ] Control chart limits; A₂ = 0.577, D₄ = 2.114 for n = 5.

---

## Books prescribed by AKTU

These are the books named in the AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Higher Engineering Mathematics (text book) | B. S. Grewal | Khanna Publishers | [WorldCat](https://search.worldcat.org/search?q=Higher+Engineering+Mathematics+Grewal) |
| 2 | Advanced Engineering Mathematics | Peter V. O'Neil | Cengage Learning | [WorldCat](https://search.worldcat.org/search?q=Advanced+Engineering+Mathematics+Peter+O%27Neil) |
| 3 | Higher Engineering Mathematics | B. V. Ramana | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Higher+Engineering+Mathematics+B.V.+Ramana) |
| 4 | Introductory Methods of Numerical Analysis | S. S. Sastry | PHI Learning | [WorldCat](https://search.worldcat.org/search?q=Introductory+Methods+of+Numerical+Analysis+Sastry) |
| 5 | Advanced Engineering Mathematics | Erwin Kreyszig | John Wiley & Sons | [WorldCat](https://search.worldcat.org/search?q=Advanced+Engineering+Mathematics+Kreyszig) |
| 6 | Numerical Methods for Scientific and Engineering Computation | M. K. Jain, S. R. K. Iyengar, R. K. Jain | New Age International | [WorldCat](https://search.worldcat.org/search?q=Numerical+Methods+for+Scientific+and+Engineering+Computation+Jain+Iyengar) |
| 7 | An Introduction to Numerical Methods and Analysis | James F. Epperson | Wiley | [WorldCat](https://search.worldcat.org/search?q=An+Introduction+to+Numerical+Methods+and+Analysis+Epperson) |

**Official syllabus:** [AKTU Mathematics-III, IV and V syllabus, 2023-24 scheme (PDF)](https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2324/Mathematics-III_Mathematics_IV_Mathematics_V.pdf)

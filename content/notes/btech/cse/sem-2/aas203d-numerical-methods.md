---
program: btech
branches: [cse, it, cse-aiml, cse-ds, aids]
semester: 2
code: AAS203D
name: Numerical Methods
credits: 4
ltp: 3-1-0
scheme: AKTU B.Tech 1st year, CSE stream, 2026-27 onwards
syllabusSource: https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf
units:
  - Ordinary Differential Equations
  - Complex Analysis
  - Laplace Transform
  - Fourier Series and Fourier Transform
  - Applied Linear Algebra
---

# AAS203D Numerical Methods: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. In spite of its name, this second-semester maths paper for the CSE stream covers differential equations, complex analysis, Laplace and Fourier methods and applied linear algebra. Every unit has the same parts:
1. **2-mark definitions and formulas**: short answers and formulas you can write directly in Section A.
2. **Core concepts**: methods and step-by-step procedures.
3. **Solved examples**: worked problems of the type examiners set, with every step.
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (linear ODEs with constant coefficients, particular integrals, Cauchy-Euler, variation of parameters) and Unit 3 (Laplace transform, inverse, convolution, solving ODEs). These two units together give many sure marks.
- **Afternoon (3 hours):** Unit 2 (analytic functions, Cauchy-Riemann, Milne-Thomson, Cauchy's integral formula, residues, real integrals).
- **Evening (2 hours):** Unit 4 (Fourier series, half-range series, Parseval, Fourier transform) and Unit 5 (EVD, SVD, LU, QR, linear maps, kernel and range, norms), then the "Last-hour checklist".
- **In the exam:** write the rule for each step (for example "PI = e^(ax)/f(a) when f(a) ≠ 0"), draw the contour and mark the poles for residue problems, and sketch the function before a Fourier series.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit. Internal assessment carries another 30 marks.

---

## Unit 1: Ordinary Differential Equations

### 2-mark definitions and formulas

- **Linear ODE of order n with constant coefficients:** (Dⁿ + a₁Dⁿ⁻¹ + … + aₙ) y = X(x), where D = d/dx; written f(D) y = X.
- **Complete solution:** y = CF + PI, where CF (complementary function) solves f(D)y = 0 and PI (particular integral) is any one solution of f(D)y = X.
- **Auxiliary equation (AE):** f(m) = 0, obtained by replacing D with m.
- **CF rules:**
  - Distinct real roots m₁, m₂: c₁e^(m₁x) + c₂e^(m₂x).
  - Repeated root m: (c₁ + c₂x)e^(mx).
  - Complex roots α ± iβ: e^(αx)(c₁ cos βx + c₂ sin βx).
- **PI for X = e^(ax):** e^(ax)/f(a) if f(a) ≠ 0; if f(a) = 0, x e^(ax)/f′(a).
- **PI for X = sin ax or cos ax:** replace D² by −a² in f(D) (if non-zero).
- **PI for X = xᵐ:** expand [f(D)]⁻¹ in ascending powers of D.
- **PI for X = e^(ax) V:** e^(ax) · [1/f(D + a)] V (shifting rule).
- **Cauchy-Euler equation:** xⁿ yⁿ + a₁ xⁿ⁻¹ yⁿ⁻¹ + … + aₙ y = X; reduced to constant coefficients by x = e^t (x D = θ, x²D² = θ(θ − 1)).
- **Wronskian:** W = y₁y₂′ − y₂y₁′; non-zero for independent solutions.

### Core concepts

**Variation of parameters (second order y″ + P y′ + Q y = R):**
1. Find the CF: y = c₁y₁ + c₂y₂.
2. Compute W = y₁y₂′ − y₂y₁′.
3. PI = −y₁ ∫ (y₂R/W) dx + y₂ ∫ (y₁R/W) dx.

It works for any R (sec x, tan x, cosec x), where the short-cut rules fail.

**Second-order equations with variable coefficients:**
- **Change of independent variable:** for y″ + P y′ + Q y = R, put z = z(x) chosen so that (dz/dx)² = Q/a² (a constant). The equation becomes d²y/dz² + P₁ dy/dz + Q₁ y = R₁, with:
  - P₁ = (z″ + P z′)/z′².
  - Q₁ = Q/z′².
  - R₁ = R/z′².
  - It is useful if P₁ comes out constant.
- **Normal form (removal of first derivative):** put y = u v with v = e^(−½∫P dx). The equation becomes u″ + I u = S, with:
  - I = Q − P²/4 − P′/2.
  - S = R/v.
  - Useful if I is constant or simple.

**Cauchy-Euler steps:**
1. Put x = e^t, so x d/dx = θ = d/dt.
2. Rewrite and solve the constant-coefficient equation in t.
3. Replace t by log x.

### Solved examples

**Example 1 (constant coefficients).** Solve y″ − 3y′ + 2y = e^(3x).
- AE: m² − 3m + 2 = 0, m = 1, 2. CF = c₁eˣ + c₂e^(2x).
- PI = e^(3x)/f(3) = e^(3x)/(9 − 9 + 2) = e^(3x)/2.
- **y = c₁eˣ + c₂e^(2x) + e^(3x)/2**.

**Example 2 (variation of parameters).** Solve y″ + y = sec x.
- CF = c₁ cos x + c₂ sin x; y₁ = cos x, y₂ = sin x; W = cos²x + sin²x = 1.
- PI = −cos x ∫ sin x sec x dx + sin x ∫ cos x sec x dx = −cos x (−log cos x) + sin x (x).
- **y = c₁ cos x + c₂ sin x + x sin x + cos x · log cos x**.

**Example 3 (Cauchy-Euler).** Solve x²y″ − xy′ + y = log x.
- x = e^t: [θ(θ − 1) − θ + 1] y = t, that is (θ − 1)² y = t.
- CF = (c₁ + c₂t)eᵗ. PI = (1 − θ)⁻² t = (1 + 2θ + …) t = t + 2.
- **y = (c₁ + c₂ log x) x + log x + 2**.

**Example 4 (PI with sin).** Find the PI of (D² + 4)y = sin 3x.
- Replace D² by −9: PI = sin 3x/(−9 + 4) = **−(1/5) sin 3x**.

### Key points to remember

- CF from AE roots (distinct, repeated, complex).
- PI rules: e^(ax), sin/cos (D² → −a²), xᵐ (expand), e^(ax)V (shift), failure case (multiply by x, differentiate f).
- Variation of parameters: W and the two integrals.
- Cauchy-Euler: x = e^t, θ(θ − 1).
- Change of independent variable; normal form I = Q − P²/4 − P′/2.

### Important questions

1. Solve linear ODEs with constant coefficients for exponential, trigonometric and polynomial right-hand sides.
2. Solve a Cauchy-Euler (homogeneous) linear equation.
3. Solve by the method of variation of parameters (sec x, tan x, cosec x type).
4. Solve a second-order equation by changing the independent variable.
5. Reduce an equation to normal form and solve it.

---

## Unit 2: Complex Analysis

### 2-mark definitions and formulas

- **Complex function:** w = f(z) = u(x, y) + i v(x, y), with z = x + iy.
- **Limit and continuity:** as for real functions, but the limit must be the same along every path in the plane.
- **Differentiable:** f′(z) = lim (f(z + Δz) − f(z))/Δz exists independent of the direction of Δz.
- **Analytic (holomorphic) function:** differentiable at every point of a region.
- **Cauchy-Riemann (CR) equations, Cartesian:** u_x = v_y and u_y = −v_x.
- **CR equations, polar:** u_r = (1/r) v_θ and v_r = −(1/r) u_θ.
- **Harmonic function:** satisfies Laplace's equation u_xx + u_yy = 0; the real and imaginary parts of an analytic function are harmonic (and called harmonic conjugates).
- **Singularity:** a point where f is not analytic. It may be isolated, removable, a pole of order m, or essential.
- **Residue:** the coefficient of 1/(z − a) in the Laurent expansion about a. For a simple pole, Res = lim (z − a) f(z); for a pole of order m, Res = [1/(m − 1)!] lim d^(m−1)/dz^(m−1) [(z − a)^m f(z)].
- **Cauchy's integral theorem:** if f is analytic inside and on a closed curve C, then ∮_C f(z) dz = 0.

### Core concepts

**Necessary and sufficient conditions for analyticity:** the CR equations hold and the partial derivatives are continuous. Then f′(z) = u_x + i v_x.

**Milne-Thomson method (find f(z) from u or v):**
1. Given u: find u_x = φ₁(x, y), u_y = φ₂(x, y).
2. f′(z) = φ₁(z, 0) − i φ₂(z, 0) (put x = z, y = 0).
3. Integrate: f(z) = ∫ [φ₁(z, 0) − iφ₂(z, 0)] dz + C.

If v is given instead, use f′(z) = ψ₁(z, 0) + i ψ₂(z, 0), with ψ₁ = v_y and ψ₂ = v_x.

**Complex integration:** ∫_C f(z) dz = ∫ (u dx − v dy) + i ∫ (v dx + u dy).

**Cauchy's integral formula:** for f analytic inside and on C and a inside C:
- f(a) = (1/2πi) ∮ f(z)/(z − a) dz.
- f⁽ⁿ⁾(a) = (n!/2πi) ∮ f(z)/(z − a)^(n+1) dz.

**Taylor and Laurent series:**
- **Taylor (f analytic in |z − a| < R):** f(z) = Σ f⁽ⁿ⁾(a)(z − a)ⁿ/n!.
- **Laurent (in an annulus r < |z − a| < R):** f(z) = Σ aₙ(z − a)ⁿ + Σ bₙ(z − a)⁻ⁿ (the principal part).
- **Method:** use partial fractions and geometric series, choosing the expansion that converges in the given region.

**Residue theorem:** ∮_C f(z) dz = 2πi × (sum of residues at poles inside C).

**Evaluating real integrals:**
- **Type 1, ∫₀^(2π) F(cos θ, sin θ) dθ:**
  - Put z = e^(iθ): cos θ = (z + 1/z)/2, sin θ = (z − 1/z)/(2i), dθ = dz/(iz).
  - Integrate over |z| = 1.
- **Type 2, ∫_(−∞)^(∞) P(x)/Q(x) dx** (degree of Q at least 2 more than P, no real poles): take a large semicircle in the upper half-plane; the integral equals 2πi × (sum of residues in the upper half-plane).

### Solved examples

**Example 5 (analytic check).** Show that f(z) = z² is analytic and f(z) = z̄ is not.
- z² = (x² − y²) + i(2xy): u_x = 2x = v_y, u_y = −2y = −v_x. CR holds everywhere and the partials are continuous, so z² is **analytic**, with f′ = 2x + i2y = 2z.
- z̄ = x − iy: u_x = 1, v_y = −1, so u_x ≠ v_y; z̄ is **nowhere analytic**.

**Example 6 (Milne-Thomson).** Find the analytic function with u = eˣ cos y.
- u_x = eˣ cos y, u_y = −eˣ sin y. At x = z, y = 0: φ₁ = e^z, φ₂ = 0.
- f′(z) = e^z, so **f(z) = e^z + C** (v = eˣ sin y).

**Example 7 (residue theorem).** Evaluate ∮_C dz/(z² + 1), where C is |z − i| = 1.
- Poles at z = ±i; only z = i lies inside C.
- Res at i = 1/(2i). Integral = 2πi × 1/(2i) = **π**.

**Example 8 (real integral, type 1).** Evaluate ∫₀^(2π) dθ/(2 + cos θ).
- With z = e^(iθ): integral = ∮ dz/(iz(2 + (z + 1/z)/2)) = (2/i) ∮ dz/(z² + 4z + 1).
- Poles at z = −2 ± √3; only −2 + √3 is inside |z| = 1. Residue = 1/(2√3).
- Integral = (2/i)(2πi)(1/(2√3)) = **2π/√3**.

**Example 9 (real integral, type 2).** ∫_(−∞)^(∞) dx/(x² + 1): pole at i in the upper half-plane, residue 1/(2i), integral = 2πi/(2i) = **π**.

### Key points to remember

- CR: u_x = v_y, u_y = −v_x; polar u_r = v_θ/r, v_r = −u_θ/r.
- Analytic → u, v harmonic; Milne-Thomson: f′(z) = u_x(z, 0) − i u_y(z, 0).
- Cauchy theorem (∮ = 0) and integral formula (f(a), f⁽ⁿ⁾(a)).
- Taylor vs Laurent; types of singularities.
- Residue formulas; ∮ = 2πi Σ Res; real integrals by z = e^(iθ) and semicircle.

### Important questions

1. Derive the Cauchy-Riemann equations (Cartesian and polar) and test analyticity.
2. Show that a given function is harmonic and find its harmonic conjugate and f(z) by Milne-Thomson.
3. State and use Cauchy's integral formula to evaluate integrals.
4. Expand a function in Taylor and Laurent series in given regions; classify singularities.
5. State the residue theorem and evaluate real definite integrals using contour integration.

---

## Unit 3: Laplace Transform

### 2-mark definitions and formulas

- **Laplace transform:** L{f(t)} = F(s) = ∫₀^∞ e^(−st) f(t) dt.
- **Existence conditions:** f is piecewise continuous on every finite interval and of exponential order (|f(t)| ≤ M e^(at) for large t).
- **Linearity:** L{a f + b g} = a F + b G.
- **Standard transforms:**
  - L{1} = 1/s.
  - L{tⁿ} = n!/s^(n+1).
  - L{e^(at)} = 1/(s − a).
  - L{sin at} = a/(s² + a²).
  - L{cos at} = s/(s² + a²).
  - L{sinh at} = a/(s² − a²).
  - L{cosh at} = s/(s² − a²).
- **First shifting theorem:** L{e^(at) f(t)} = F(s − a).
- **Second shifting theorem:** L{f(t − a) u(t − a)} = e^(−as) F(s).
- **Change of scale:** L{f(at)} = (1/a) F(s/a).
- **Multiplication by t:** L{t f(t)} = −F′(s); generally L{tⁿ f(t)} = (−1)ⁿ F⁽ⁿ⁾(s).
- **Division by t:** L{f(t)/t} = ∫_s^∞ F(s) ds.

### Core concepts

**Transforms of derivatives and integrals:**
- L{f′(t)} = sF(s) − f(0).
- L{f″(t)} = s²F(s) − s f(0) − f′(0).
- L{∫₀ᵗ f(u) du} = F(s)/s.

**Periodic functions:** for f with period T, L{f} = [1/(1 − e^(−sT))] ∫₀ᵀ e^(−st) f(t) dt.

**Unit step function:** u(t − a) = 0 for t < a and 1 for t ≥ a; L{u(t − a)} = e^(−as)/s. Piecewise functions are written using unit steps.

**Inverse Laplace transform:** methods:
- Standard table.
- Shifting theorems.
- **Partial fractions** (most common).
- Inverse of derivatives (multiplication by t).
- **Convolution theorem:** L⁻¹{F(s)G(s)} = (f * g)(t) = ∫₀ᵗ f(u) g(t − u) du.

**Solving ODEs with Laplace transform:**
1. Take L of both sides using the derivative formulas and the initial conditions.
2. Solve algebraically for Y(s).
3. Use partial fractions and inverse transform to get y(t).

The initial conditions are built in, so no constants need to be found.

### Solved examples

**Example 10 (shifting).** L{e^(−2t) cos 3t} = (s + 2)/((s + 2)² + 9).

**Example 11 (multiplication by t).** L{t sin at} = −d/ds [a/(s² + a²)] = **2as/(s² + a²)²**.

**Example 12 (convolution).** Find L⁻¹{1/(s²(s + 1))}.
- With F = 1/s² (f = t) and G = 1/(s + 1) (g = e^(−t)): ∫₀ᵗ u e^(−(t − u)) du = **t − 1 + e^(−t)**. (Partial fractions give the same.)

**Example 13 (solving an ODE).** Solve y″ + 3y′ + 2y = e^(−3t), y(0) = 0, y′(0) = 0.
- (s² + 3s + 2) Y = 1/(s + 3), so Y = 1/((s + 1)(s + 2)(s + 3)).
- Partial fractions: Y = (1/2)/(s + 1) − 1/(s + 2) + (1/2)/(s + 3).
- **y(t) = ½e^(−t) − e^(−2t) + ½e^(−3t)**. Check y(0) = ½ − 1 + ½ = 0.

**Example 14 (periodic function).** A square wave f(t) = 1 for 0 < t < a and −1 for a < t < 2a (period 2a).
- L{f} = [1/(1 − e^(−2as))] [∫₀ᵃ e^(−st) dt − ∫ₐ^(2a) e^(−st) dt] = (1 − e^(−as))² / (s(1 − e^(−2as))) = **(1/s) tanh(as/2)**.

### Key points to remember

- Table of standard transforms; existence conditions.
- First shift F(s − a); second shift e^(−as)F(s); scale (1/a)F(s/a).
- t f(t) → −F′(s); f(t)/t → ∫_s^∞ F.
- L{f′} = sF − f(0); L{f″} = s²F − s f(0) − f′(0); integral → F/s.
- Periodic formula; unit step e^(−as)/s.
- Inverse: partial fractions, convolution; ODE solving steps.

### Important questions

1. Define the Laplace transform and state existence conditions. Find transforms using shifting, scale and multiplication-by-t theorems.
2. Find the Laplace transform of a periodic function and of a function expressed with unit steps.
3. Find inverse Laplace transforms by partial fractions.
4. State the convolution theorem and use it to find an inverse transform.
5. Solve a linear ODE (or a system) with initial conditions by the Laplace transform.

---

## Unit 4: Fourier Series and Fourier Transform

### 2-mark definitions and formulas

- **Periodic function:** f(x + T) = f(x) for all x; the smallest such T is the period.
- **Even and odd functions:** even if f(−x) = f(x) (cos x, x²); odd if f(−x) = −f(x) (sin x, x).
- **Fourier series on (−π, π):** f(x) = a₀/2 + Σ (aₙ cos nx + bₙ sin nx), with:
  - a₀ = (1/π)∫ f dx.
  - aₙ = (1/π)∫ f cos nx dx.
  - bₙ = (1/π)∫ f sin nx dx.
- **Even function on (−π, π):** bₙ = 0 (cosine series only). **Odd function:** a₀ = aₙ = 0 (sine series only).
- **Dirichlet's conditions:** f is single-valued, periodic, has finitely many maxima, minima and discontinuities in a period, and is absolutely integrable. Then the series converges to f(x), and at a jump to the average [f(x⁺) + f(x⁻)]/2.
- **General interval (−l, l):** replace nx by nπx/l; aₙ = (1/l)∫₋ₗˡ f cos(nπx/l) dx, and so on.
- **Half-range series on (0, l):** sine series bₙ = (2/l)∫₀ˡ f sin(nπx/l) dx (odd extension); cosine series aₙ = (2/l)∫₀ˡ f cos(nπx/l) dx (even extension).
- **Parseval's identity (−π, π):** (1/π)∫ f² dx = a₀²/2 + Σ (aₙ² + bₙ²).
- **Fourier transform:** F(ω) = ∫_(−∞)^(∞) f(x) e^(−iωx) dx; inverse f(x) = (1/2π)∫ F(ω) e^(iωx) dω.
- **Finite Fourier sine and cosine transforms on (0, l):** F_s(n) = ∫₀ˡ f sin(nπx/l) dx; F_c(n) = ∫₀ˡ f cos(nπx/l) dx.

### Core concepts

**Useful integrals:** for integer n:
- sin nπ = 0.
- cos nπ = (−1)ⁿ.
- ∫ x sin nx dx and ∫ x² cos nx dx are done by parts (Bernoulli's rule: ∫uv = u v₁ − u′v₂ + u″v₃ − …).

**Change of interval:** a function on (0, 2l) or (a, b) is handled with the substitution that maps it to the standard interval; the formulas use limits a to a + 2l.

**Fourier integral theorem:** f(x) = (1/π)∫₀^∞ ∫_(−∞)^(∞) f(t) cos ω(t − x) dt dω, under Dirichlet conditions and absolute integrability. This leads to the Fourier sine and cosine integrals and transforms.

**Properties of the Fourier transform:**
- Linearity.
- Shifting: f(x − a) → e^(−iωa) F(ω).
- Scaling: f(ax) → (1/|a|) F(ω/a).
- Modulation.
- Convolution: transform of f * g = F · G.
- Parseval: ∫|f|² dx = (1/2π)∫|F|² dω.

**Application:** solving PDEs (heat, wave), signal analysis (frequency spectrum).

### Solved examples

**Example 15 (Fourier series of x).** Find the Fourier series of f(x) = x on (−π, π).
- f is odd, so a₀ = aₙ = 0.
- bₙ = (2/π)∫₀^π x sin nx dx = 2(−1)^(n+1)/n.
- **x = 2[sin x − (sin 2x)/2 + (sin 3x)/3 − …]**.
- At x = π/2 this gives the Leibniz series π/4 = 1 − 1/3 + 1/5 − …

**Example 16 (Fourier series of x² and a series sum).** f(x) = x² on (−π, π) is even.
- a₀ = (2/π)∫₀^π x² dx = 2π²/3; aₙ = 4(−1)ⁿ/n².
- **x² = π²/3 + 4 Σ (−1)ⁿ cos nx / n²**.
- At x = 0: 0 = π²/3 + 4Σ(−1)ⁿ/n², so 1 − 1/4 + 1/9 − … = **π²/12**.
- At x = π: π² = π²/3 + 4Σ 1/n², so Σ 1/n² = **π²/6**.

**Example 17 (Parseval).** Using Example 15: (1/π)∫ x² dx = 2π²/3 = Σ bₙ² = Σ 4/n², so again Σ 1/n² = **π²/6**.

**Example 18 (Fourier transform).** Find the Fourier transform of f(x) = e^(−a|x|), a > 0.
- F(ω) = ∫_(−∞)^0 e^(ax) e^(−iωx) dx + ∫₀^∞ e^(−ax) e^(−iωx) dx = 1/(a − iω) + 1/(a + iω) = **2a/(a² + ω²)**.

### Key points to remember

- Euler formulas a₀, aₙ, bₙ; even → cosine only; odd → sine only.
- Dirichlet conditions; average value at jumps.
- General interval (nπx/l); half-range sine and cosine series.
- Parseval; standard series sums (π²/6, π²/12, π/4).
- Fourier transform pair; e^(−a|x|) → 2a/(a² + ω²); finite sine and cosine transforms.

### Important questions

1. Find the Fourier series of a function on (−π, π) and deduce the sum of a numerical series.
2. Find the Fourier series of a function on a general interval (−l, l) or (0, 2l).
3. Obtain half-range sine and cosine series of a function on (0, l).
4. State Parseval's identity and use it to find a series sum.
5. State the Fourier integral theorem; find the Fourier transform (or finite sine/cosine transform) of a function.

---

## Unit 5: Applied Linear Algebra

### 2-mark definitions and formulas

- **Eigenvalue decomposition (EVD):** A = P D P⁻¹, where D holds eigenvalues and P the eigenvectors; for a symmetric A, A = Q D Qᵀ with orthogonal Q.
- **Singular value decomposition (SVD):** any m × n matrix A = U Σ Vᵀ, where U (m × m) and V (n × n) are orthogonal and Σ holds the singular values σᵢ = √(eigenvalues of AᵀA) in decreasing order.
- **LU decomposition (Doolittle):** A = LU with L lower triangular with 1s on the diagonal and U upper triangular.
- **QR decomposition:** A = QR with Q having orthonormal columns and R upper triangular; obtained by the Gram-Schmidt process.
- **Linear transformation:** a map T: V → W with T(au + bv) = aT(u) + bT(v).
- **Matrix of a linear transformation:** the matrix whose columns are the images of the basis vectors, so that T(x) = Ax.
- **Kernel (null space):** ker T = {v : T(v) = 0}.
- **Range (image):** {T(v) : v ∈ V}.
- **Rank-nullity theorem:** dim(ker T) + dim(range T) = dim V.
- **Inner product space:** a vector space with an inner product ⟨u, v⟩ that is linear, symmetric (conjugate-symmetric for complex) and positive definite; gives length ‖v‖ = √⟨v, v⟩ and angle cos θ = ⟨u, v⟩/(‖u‖‖v‖).

### Core concepts

**Vector norms:**
- ‖x‖₁ = Σ|xᵢ| (Manhattan).
- ‖x‖₂ = √(Σxᵢ²) (Euclidean).
- ‖x‖∞ = max |xᵢ|.
- **Properties:** ‖x‖ ≥ 0 (zero only for 0), ‖αx‖ = |α|‖x‖, and the triangle inequality ‖x + y‖ ≤ ‖x‖ + ‖y‖.
- **Cauchy-Schwarz:** |⟨u, v⟩| ≤ ‖u‖‖v‖.

**Doolittle LU method:**
1. Write A = LU with unknown entries; solve row by row for U and column by column for L.
2. To solve AX = B: first LY = B by forward substitution, then UX = Y by back substitution.
- **Benefit:** factorize once, then solve quickly for many right-hand sides.

**Gram-Schmidt process (QR):**
1. q₁ = a₁/‖a₁‖.
2. u₂ = a₂ − (q₁ · a₂) q₁; q₂ = u₂/‖u₂‖; and so on.
3. R has entries rᵢⱼ = qᵢ · aⱼ.
- **Uses:** least squares, the QR algorithm for eigenvalues.

**SVD steps:**
1. Find the eigenvalues of AᵀA; σᵢ = √λᵢ.
2. The eigenvectors of AᵀA give V.
3. uᵢ = A vᵢ / σᵢ give U.
- **Uses:** data compression (keep the largest σ), principal component analysis, recommendation systems, image compression, pseudo-inverse, and the rank of A (number of non-zero σ).

**Applications of EVD:** powers of matrices, PCA (eigenvectors of the covariance matrix), Google PageRank, vibration modes.

### Solved examples

**Example 19 (LU decomposition).** Factorize A = [2 3; 4 7] by Doolittle's method.
- U row 1 = [2 3]; l₂₁ = 4/2 = 2; u₂₂ = 7 − 2 × 3 = 1.
- **L = [1 0; 2 1], U = [2 3; 0 1]**. Check: LU = [2 3; 4 7].

**Example 20 (QR decomposition).** Find the QR decomposition of A = [1 1; 1 0].
- a₁ = (1, 1): q₁ = (1, 1)/√2; r₁₁ = √2.
- r₁₂ = q₁ · a₂ = 1/√2; u₂ = (1, 0) − (1/2)(1, 1) = (1/2, −1/2); r₂₂ = ‖u₂‖ = 1/√2; q₂ = (1, −1)/√2.
- **Q = (1/√2)[1 1; 1 −1], R = [√2 1/√2; 0 1/√2]**.

**Example 21 (singular values).** Find the singular values of A = [3 0; 4 5].
- AᵀA = [25 20; 20 25], with eigenvalues 45 and 5.
- **σ₁ = √45 = 3√5 ≈ 6.71, σ₂ = √5 ≈ 2.24**. Both non-zero, so rank 2; |det A| = 15 = σ₁σ₂.

**Example 22 (kernel and range).** T: ℝ³ → ℝ², T(x, y, z) = (x + y, y + z).
- Matrix A = [1 1 0; 0 1 1], rank 2, so the range is all of ℝ² (dim 2).
- Kernel: x + y = 0, y + z = 0 gives (t, −t, t), so ker T = span{(1, −1, 1)}, **nullity 1**.
- Rank-nullity: 2 + 1 = 3 = dim ℝ³.

**Example 23 (norms).** For v = (3, −4, 0): ‖v‖₁ = **7**, ‖v‖₂ = **5**, ‖v‖∞ = **4**.

### Key points to remember

- EVD: A = PDP⁻¹ (QDQᵀ if symmetric). SVD: A = UΣVᵀ, σ = √eig(AᵀA).
- Doolittle LU (L with unit diagonal); forward then back substitution.
- QR by Gram-Schmidt; rᵢⱼ = qᵢ · aⱼ.
- Linear map matrix; kernel, range; rank + nullity = n.
- Inner product, norms (1, 2, ∞), Cauchy-Schwarz.

### Important questions

1. Find the eigenvalue decomposition of a matrix and use it to compute a power of the matrix.
2. Find the singular value decomposition of a given matrix and explain its applications.
3. Factorize a matrix by Doolittle's LU method and use it to solve a system.
4. Find the QR decomposition using the Gram-Schmidt process.
5. Find the matrix, kernel and range of a linear transformation and verify rank-nullity. Define an inner product space and vector norms.

---

## Last-hour checklist

- [ ] CF and PI rules; Example 1 (e^(3x)/2); variation of parameters (x sin x + cos x log cos x); Cauchy-Euler (log x + 2); change of independent variable; normal form.
- [ ] CR (Cartesian and polar); harmonic; Milne-Thomson (e^z); Cauchy integral formula; Taylor and Laurent; residues; ∮ = π; ∫ dθ/(2 + cos θ) = 2π/√3; ∫ dx/(x² + 1) = π.
- [ ] Laplace table and theorems; 2as/(s² + a²)²; convolution (t − 1 + e^(−t)); ODE solution (½e^(−t) − e^(−2t) + ½e^(−3t)); periodic square wave (1/s) tanh(as/2); unit step.
- [ ] Fourier coefficients; x series; x² series; π²/6 and π²/12; half-range; Parseval; Fourier transform 2a/(a² + ω²).
- [ ] EVD; SVD (3√5, √5); LU ([1 0; 2 1], [2 3; 0 1]); QR (Gram-Schmidt); kernel (1, −1, 1); rank-nullity; norms (7, 5, 4).

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Advanced Engineering Mathematics | Erwin Kreyszig | John Wiley & Sons | [WorldCat](https://search.worldcat.org/search?q=Advanced+Engineering+Mathematics+Kreyszig) |
| 2 | Higher Engineering Mathematics | B. V. Ramana | Tata McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Higher+Engineering+Mathematics+B.V.+Ramana) |
| 3 | Higher Engineering Mathematics | B. S. Grewal | Khanna Publishers | [WorldCat](https://search.worldcat.org/search?q=Higher+Engineering+Mathematics+Grewal) |
| 4 | Advanced Engineering Mathematics | R. K. Jain, S. R. K. Iyengar | Narosa Publishing House | [WorldCat](https://search.worldcat.org/search?q=Advanced+Engineering+Mathematics+Jain+Iyengar) |
| 5 | Complex Variables and Applications (reference) | James Ward Brown, Ruel V. Churchill | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Complex+Variables+and+Applications+Brown+Churchill) |
| 6 | Fourier Series and Boundary Value Problems (reference) | James Ward Brown, Ruel V. Churchill | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Fourier+Series+and+Boundary+Value+Problems+Brown+Churchill) |
| 7 | Laplace Transforms, Schaum's Outline (reference) | Murray R. Spiegel | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Schaum+Laplace+Transforms+Spiegel) |
| 8 | Linear Algebra: A Modern Introduction (reference) | David Poole | Brooks/Cole | [WorldCat](https://search.worldcat.org/search?q=Linear+Algebra+A+Modern+Introduction+Poole) |

**Syllabus source:** [AKTU B.Tech 1st year CSE stream course structure and syllabus, 2026-27 (official PDF)](https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf)

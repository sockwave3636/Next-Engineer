---
program: btech
branches: [cse, it, cse-aiml, cse-ds, aids]
semester: 1
code: AAS103D
name: Calculus and Linear Algebra
credits: 4
ltp: 3-1-0
scheme: AKTU B.Tech 1st year, CSE stream, 2026-27 onwards
syllabusSource: https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf
units:
  - Differential Calculus of Several Variables
  - Multiple Integrals
  - Vector Calculus
  - Matrices
  - Introduction to Vector Spaces
---

# AAS103D Calculus and Linear Algebra: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions and formulas**: short answers and formulas you can write directly in Section A.
2. **Core concepts**: methods, theorems and step-by-step procedures.
3. **Solved examples**: worked problems of the type examiners set, with every step.
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (partial derivatives, Euler's theorem, total derivative, Jacobians, maxima and minima, Lagrange multipliers, errors) and Unit 2 (double and triple integrals, change of order, polar change, Beta and Gamma, Dirichlet, area and volume).
- **Afternoon (3 hours):** Unit 3 (gradient, directional derivative, divergence, curl, line integrals, Stokes and Gauss). Work one problem of each kind.
- **Evening (2 hours):** Unit 4 (rank, linear systems, Gauss-Seidel, eigenvalues, diagonalization) and Unit 5 (vector spaces, subspaces, independence, basis, dimension), then the "Last-hour checklist".
- **In the exam:** write the formula first, then substitute, then box the answer. For change of order and Gauss/Stokes problems, sketch the region. Maths marks are earned step by step, so never skip steps.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit. Internal assessment carries another 30 marks.

---

## Unit 1: Differential Calculus of Several Variables

### 2-mark definitions and formulas

- **Limit of f(x, y):** f(x, y) → L as (x, y) → (a, b) if the value approaches L along every path. If two paths give different limits, the limit does not exist (for example xy/(x² + y²) at (0, 0) gives m/(1 + m²) along y = mx).
- **Continuity:** f is continuous at (a, b) if the limit exists and equals f(a, b).
- **Partial derivative:** ∂f/∂x is the derivative of f with respect to x keeping y constant.
- **Homogeneous function of degree n:** f(tx, ty) = tⁿ f(x, y).
- **Euler's theorem:** if u is homogeneous of degree n, then x u_x + y u_y = n u, and x² u_xx + 2xy u_xy + y² u_yy = n(n − 1) u.
- **Total derivative:** if u = f(x, y) with x = x(t), y = y(t), then du/dt = u_x dx/dt + u_y dy/dt.
- **Chain rule (composite function):** if u = f(x, y), x = x(r, s), y = y(r, s), then u_r = u_x x_r + u_y y_r.
- **Jacobian:** J = ∂(u, v)/∂(x, y) = det [u_x u_y; v_x v_y].
- **Properties of Jacobians:** J · J′ = 1 (where J′ = ∂(x, y)/∂(u, v)); chain rule ∂(u, v)/∂(x, y) = ∂(u, v)/∂(r, s) · ∂(r, s)/∂(x, y); u and v are functionally dependent if and only if J = 0.
- **Stationary point:** a point where f_x = 0 and f_y = 0.

### Core concepts

**Euler's theorem, extended form:** if f(u) = z is homogeneous of degree n (u itself not homogeneous), then x u_x + y u_y = n f(u)/f′(u) = g(u). Second order: x² u_xx + 2xy u_xy + y² u_yy = g(u)[g′(u) − 1].

**Taylor's expansion of f(x, y) about (a, b):**
- f(a + h, b + k) = f(a, b) + (h f_x + k f_y) + (1/2!)(h² f_xx + 2hk f_xy + k² f_yy) + …
- Used for approximations and for deriving the maxima/minima test.

**Maxima and minima of f(x, y):**
1. Solve f_x = 0 and f_y = 0 for stationary points.
2. Find r = f_xx, s = f_xy, t = f_yy at each point.
3. Decide:
   - rt − s² > 0 and r < 0: **maximum**.
   - rt − s² > 0 and r > 0: **minimum**.
   - rt − s² < 0: **saddle point** (neither).
   - rt − s² = 0: doubtful; needs further study.

**Lagrange's method of undetermined multipliers:** to find extreme values of f(x, y, z) subject to φ(x, y, z) = 0:
1. Form F = f + λφ.
2. Solve F_x = 0, F_y = 0, F_z = 0 and φ = 0 together.
3. The solutions give the extreme points (decide max or min from the physical problem).

**Approximation of errors:** if u = f(x, y), small errors give δu ≈ u_x δx + u_y δy.
- **Relative error** = δu/u.
- **Percentage error** = 100 δu/u.
- **For u = xᵃ yᵇ:** taking logs gives 100 δu/u = a (100 δx/x) + b (100 δy/y).

**Polar Jacobian:** for x = r cos θ, y = r sin θ, ∂(x, y)/∂(r, θ) = r. For spherical coordinates, the Jacobian is r² sin θ.

### Solved examples

**Example 1 (Euler's theorem).** If u = sin⁻¹[(x² + y²)/(x + y)], show that x u_x + y u_y = tan u.
- sin u = (x² + y²)/(x + y) is homogeneous of degree 2 − 1 = 1.
- By the extended form, x u_x + y u_y = n sin u / cos u = 1 · tan u = **tan u**.

**Example 2 (total derivative).** u = x² y, x = t², y = t³. Find du/dt.
- du/dt = (2xy)(2t) + (x²)(3t²) = 2t⁵ · 2t + t⁴ · 3t² = 4t⁶ + 3t⁶ = **7t⁶**. (Check: u = t⁷.)

**Example 3 (maxima and minima).** Find the extreme values of f = x³ + y³ − 3xy.
- f_x = 3x² − 3y = 0 and f_y = 3y² − 3x = 0 give y = x², x = y², so (0, 0) and (1, 1).
- r = 6x, s = −3, t = 6y.
- At (0, 0): rt − s² = 0 − 9 < 0, a **saddle point**.
- At (1, 1): rt − s² = 36 − 9 = 27 > 0 and r = 6 > 0, a **minimum**; f_min = 1 + 1 − 3 = **−1**.

**Example 4 (Lagrange multipliers).** Find the maximum of xyz subject to x + y + z = 12.
- F = xyz + λ(x + y + z − 12).
- F_x: yz + λ = 0; F_y: xz + λ = 0; F_z: xy + λ = 0. So yz = xz = xy, giving x = y = z.
- With x + y + z = 12: x = y = z = 4, and the maximum is **64**.

**Example 5 (errors).** The period of a pendulum is T = 2π√(l/g). If l has an error of +1% and g of −0.5%, find the percentage error in T.
- 100 δT/T = (1/2)(100 δl/l) − (1/2)(100 δg/g) = 0.5 × 1 − 0.5 × (−0.5) = **0.75%**.

### Key points to remember

- Limit fails if two paths differ; continuity needs limit = value.
- Euler: x u_x + y u_y = n u; extended form with g(u) = n f/f′.
- Total derivative and chain rule.
- Jacobian; J J′ = 1; J = 0 means dependent; polar Jacobian r.
- Max/min test: rt − s² and sign of r. Lagrange: F = f + λφ.
- Errors: δu = u_x δx + u_y δy; log method for products and powers.

### Important questions

1. State and prove Euler's theorem for homogeneous functions. Apply it to a given function, including the second-order form.
2. Find the total derivative or partial derivatives of a composite function using the chain rule.
3. Define the Jacobian and prove J J′ = 1. Find the Jacobian for a change of variables and test functional dependence.
4. Find the maxima and minima of a function of two variables.
5. Use Lagrange's method to find extreme values under a constraint. Solve a problem on approximation of errors.

---

## Unit 2: Multiple Integrals

### 2-mark definitions and formulas

- **Double integral:** ∬_R f(x, y) dA, the limit of sums of f over small areas of a region R; it gives volume under a surface when f ≥ 0.
- **Iterated integral:** a double integral evaluated as two single integrals, inner first.
- **Triple integral:** ∭_V f(x, y, z) dV over a solid region.
- **Area of a region:** A = ∬_R dx dy.
- **Volume of a solid:** V = ∭_V dx dy dz (or ∬ z dx dy under a surface).
- **Gamma function:** Γ(n) = ∫₀^∞ e^(−x) x^(n−1) dx, n > 0.
- **Properties of Gamma:** Γ(n + 1) = n Γ(n); Γ(n + 1) = n! for positive integers; Γ(1) = 1; Γ(1/2) = √π.
- **Beta function:** B(m, n) = ∫₀¹ x^(m−1) (1 − x)^(n−1) dx, m, n > 0.
- **Beta-Gamma relation:** B(m, n) = Γ(m) Γ(n) / Γ(m + n); B(m, n) = B(n, m).
- **Useful trigonometric form:** ∫₀^(π/2) sin^p θ cos^q θ dθ = (1/2) B((p + 1)/2, (q + 1)/2).

### Core concepts

**Evaluating double integrals:**
- **Constant limits:** the order does not matter.
- **Variable limits:** integrate first with respect to the variable whose limits are functions.
- **Change of order of integration:** when the inner integral is hard (e^(y²), sin x / x), redraw the region and describe it the other way. Steps:
  1. Sketch the region from the given limits.
  2. Draw strips in the other direction.
  3. Write the new limits.

**Change of variables:**
- ∬ f(x, y) dx dy = ∬ f(x(u, v), y(u, v)) |J| du dv.
- **Polar form:** dx dy = r dr dθ, useful when the region is circular or the integrand contains x² + y².

**Triple integrals:** integrate innermost first. Cylindrical coordinates: dV = r dr dθ dz. Spherical coordinates: dV = r² sin θ dr dθ dφ.

**Dirichlet's integral:**
- ∭ x^(l−1) y^(m−1) z^(n−1) dx dy dz over x, y, z ≥ 0, x + y + z ≤ 1 equals Γ(l)Γ(m)Γ(n) / Γ(l + m + n + 1).
- **Liouville's extension (h₁ ≤ x + y + z ≤ h₂):** ∭ f(x + y + z) x^(l−1) y^(m−1) z^(n−1) dx dy dz = [Γ(l)Γ(m)Γ(n)/Γ(l + m + n)] ∫_{h₁}^{h₂} f(h) h^(l+m+n−1) dh.
- **Application:** volume of the tetrahedron x + y + z ≤ 1 is Γ(1)³ / Γ(4) = 1/6.

**Applications:**
- **Area:** ∬ dx dy, or ∬ r dr dθ in polar.
- **Volume:** ∭ dV.
- **Mass, centre of gravity, moment of inertia:** with density ρ.

### Solved examples

**Example 6 (double integral).** Evaluate ∫₀¹ ∫₀^x (x + y) dy dx.
- Inner: ∫₀^x (x + y) dy = x² + x²/2 = (3/2) x².
- Outer: ∫₀¹ (3/2) x² dx = **1/2**.

**Example 7 (change of order).** Evaluate ∫₀¹ ∫ₓ¹ e^(y²) dy dx.
- The region is 0 ≤ x ≤ y ≤ 1 (triangle below y = 1, above y = x). Reversed: 0 ≤ y ≤ 1, 0 ≤ x ≤ y.
- ∫₀¹ ∫₀^y e^(y²) dx dy = ∫₀¹ y e^(y²) dy = [e^(y²)/2]₀¹ = **(e − 1)/2**.

**Example 8 (polar, Gaussian integral).** Show that ∫₀^∞ e^(−x²) dx = √π/2.
- Let I = ∫₀^∞ e^(−x²) dx. Then I² = ∫₀^∞ ∫₀^∞ e^(−(x² + y²)) dx dy (first quadrant).
- In polar: I² = ∫₀^(π/2) ∫₀^∞ e^(−r²) r dr dθ = (π/2)(1/2) = π/4.
- So **I = √π/2**.

**Example 9 (Beta and Gamma).** Evaluate (a) ∫₀^∞ x⁴ e^(−x) dx and (b) ∫₀^(π/2) sin⁴θ cos²θ dθ.
- (a) = Γ(5) = 4! = **24**.
- (b) = (1/2) B(5/2, 3/2) = Γ(5/2) Γ(3/2) / (2 Γ(4)).
  - Γ(5/2) = (3/2)(1/2)√π = 3√π/4; Γ(3/2) = √π/2; Γ(4) = 6.
  - Result = (3√π/4)(√π/2)/12 = (3π/8)/12 = **π/32**.

**Example 10 (volume by triple integral).** Find the volume of the sphere x² + y² + z² ≤ a².
- In spherical coordinates: V = ∫₀^(2π) ∫₀^π ∫₀^a r² sin θ dr dθ dφ = (a³/3)(2)(2π) = **(4/3)πa³**.

### Key points to remember

- Variable limits: integrate the variable with function limits first.
- Change of order: sketch, then re-describe the region.
- Polar dx dy = r dr dθ; spherical dV = r² sin θ dr dθ dφ.
- Γ(n + 1) = nΓ(n) = n!; Γ(1/2) = √π; B(m, n) = Γ(m)Γ(n)/Γ(m + n); trig form with (1/2)B.
- Dirichlet: Γ(l)Γ(m)Γ(n)/Γ(l + m + n + 1); tetrahedron volume 1/6.

### Important questions

1. Evaluate a double integral with variable limits, and find an area using a double integral.
2. Change the order of integration and evaluate (with a sketch of the region).
3. Evaluate using change of variables (polar), including ∫₀^∞ e^(−x²) dx.
4. Define Beta and Gamma functions, prove B(m, n) = Γ(m)Γ(n)/Γ(m + n), and evaluate integrals using them.
5. State Dirichlet's integral and use it to find a volume or mass. Evaluate a triple integral.

---

## Unit 3: Vector Calculus

### 2-mark definitions and formulas

- **Scalar point function:** assigns a scalar to each point (temperature φ(x, y, z)).
- **Vector point function:** assigns a vector to each point (velocity field F(x, y, z)).
- **Del operator:** ∇ = i ∂/∂x + j ∂/∂y + k ∂/∂z.
- **Gradient:** ∇φ = φ_x i + φ_y j + φ_z k; it is normal to the surface φ = c and points in the direction of fastest increase.
- **Directional derivative:** the rate of change of φ in the direction of a unit vector â: D = ∇φ · â; its maximum value is |∇φ|.
- **Divergence:** ∇ · F = ∂F₁/∂x + ∂F₂/∂y + ∂F₃/∂z (net outflow per unit volume, a scalar).
- **Curl:** ∇ × F = det [i j k; ∂/∂x ∂/∂y ∂/∂z; F₁ F₂ F₃] (rotation, a vector).
- **Solenoidal vector:** ∇ · F = 0 (no sources or sinks, as for magnetic fields).
- **Irrotational vector:** ∇ × F = 0; then F = ∇φ for a scalar potential φ.
- **Line integral:** ∫_C F · dr, the work done by F along a curve C.

### Core concepts

**Important identities:**
- ∇ · (∇ × F) = 0.
- ∇ × (∇φ) = 0.
- ∇ · (φF) = φ ∇ · F + F · ∇φ.
- ∇²φ = ∇ · ∇φ (Laplacian).
- ∇ × (∇ × F) = ∇(∇ · F) − ∇²F.
- For r = xi + yj + zk: ∇ · r = 3, ∇ × r = 0, ∇rⁿ = n r^(n−2) r.

**Angle between surfaces:** at a common point, the angle between normals: cos θ = (∇φ₁ · ∇φ₂) / (|∇φ₁||∇φ₂|).

**Integration of vectors:**
- **Line integral:** ∫ F · dr = ∫ (F₁ dx + F₂ dy + F₃ dz). If F is irrotational (F = ∇φ), the integral depends only on the end points: = φ(B) − φ(A), and is zero around any closed curve.
- **Surface integral (flux):** ∬_S F · n̂ dS.
- **Volume integral:** ∭_V φ dV.

**Green's theorem in the plane:** ∮_C (M dx + N dy) = ∬_R (∂N/∂x − ∂M/∂y) dx dy.

**Stokes' theorem:** ∮_C F · dr = ∬_S (∇ × F) · n̂ dS. The circulation around a closed curve equals the flux of the curl through any surface bounded by it.

**Gauss divergence theorem:** ∯_S F · n̂ dS = ∭_V (∇ · F) dV. The outward flux through a closed surface equals the volume integral of the divergence. It turns a hard surface integral (six faces of a cube) into an easy volume integral.

### Solved examples

**Example 11 (directional derivative).** Find the directional derivative of φ = x²yz + 4xz² at (1, −2, −1) in the direction 2i − j − 2k.
- ∇φ = (2xyz + 4z²) i + (x²z) j + (x²y + 8xz) k.
- At (1, −2, −1): ∇φ = (4 + 4) i + (−1) j + (−2 − 8) k = 8i − j − 10k.
- â = (2i − j − 2k)/3.
- D = (16 + 1 + 20)/3 = **37/3**. The maximum directional derivative there is |∇φ| = √(64 + 1 + 100) = √165.

**Example 12 (div and curl).** For F = x²y i + y²z j + z²x k:
- ∇ · F = 2xy + 2yz + 2zx.
- ∇ × F = (∂(z²x)/∂y − ∂(y²z)/∂z) i − (∂(z²x)/∂x − ∂(x²y)/∂z) j + (∂(y²z)/∂x − ∂(x²y)/∂y) k = **−y² i − z² j − x² k**.

**Example 13 (solenoidal).** Find a so that F = (x + 3y) i + (y − 2z) j + (x + az) k is solenoidal.
- ∇ · F = 1 + 1 + a = 0, so **a = −2**.

**Example 14 (irrotational field and work).** Show that F = (2xy + z³) i + x² j + 3xz² k is irrotational, find φ, and the work done from (0, 0, 0) to (1, 1, 1).
- ∇ × F: i (0 − 0) − j (3z² − 3z²) + k (2x − 2x) = 0, so it is irrotational.
- φ = x²y + xz³ (check: φ_x = 2xy + z³, φ_y = x², φ_z = 3xz²).
- Work = φ(1, 1, 1) − φ(0, 0, 0) = **2**.

**Example 15 (Gauss theorem).** Find the outward flux of F = x i + y j + z k through the sphere of radius a.
- ∇ · F = 3, so flux = ∭ 3 dV = 3 × (4/3)πa³ = **4πa³**.

**Example 16 (Stokes theorem check).** F = −y i + x j over the disc of radius a in the xy-plane.
- ∇ × F = 2k, so ∬ (∇ × F) · k dS = 2πa².
- Line integral on x = a cos t, y = a sin t: ∮ (−y dx + x dy) = ∫₀^(2π) a² dt = **2πa²**. Both sides agree.

### Key points to remember

- ∇φ normal to surface; directional derivative ∇φ · â; maximum |∇φ|.
- div (scalar), curl (vector); solenoidal ∇ · F = 0; irrotational ∇ × F = 0 → F = ∇φ.
- Identities: div curl = 0, curl grad = 0; ∇ · r = 3.
- Work = ∫ F · dr; for conservative F, φ(B) − φ(A).
- Green, Stokes (∮ F · dr = ∬ curl F · n dS), Gauss (∯ F · n dS = ∭ div F dV).

### Important questions

1. Find the gradient and directional derivative of a scalar field; find the angle between two surfaces.
2. Find divergence and curl; prove vector identities such as div curl F = 0 and curl grad φ = 0.
3. Show that a vector field is irrotational, find its scalar potential and the work done.
4. State Stokes' theorem and verify it for a given field and surface.
5. State Gauss's divergence theorem and use it (or verify it) for a cube or sphere.

---

## Unit 4: Matrices

### 2-mark definitions and formulas

- **Hermitian matrix:** A^θ = A, where A^θ is the conjugate transpose; diagonal elements are real.
- **Skew-Hermitian matrix:** A^θ = −A; diagonal elements are zero or purely imaginary.
- **Unitary matrix:** A^θ A = I; it preserves lengths (the complex version of an orthogonal matrix).
- **Elementary transformations:** interchanging two rows, multiplying a row by a non-zero constant, and adding a multiple of one row to another (similarly for columns).
- **Rank of a matrix:** the order of the largest non-zero minor; equal to the number of non-zero rows in echelon form.
- **Echelon form:** a form where each non-zero row's leading entry is to the right of the row above, with zero rows at the bottom.
- **Consistency (Rouché's theorem):** AX = B is consistent if and only if rank A = rank [A | B]; a unique solution if this equals n (unknowns); infinitely many if less than n.
- **Eigenvalue and eigenvector:** λ and X ≠ 0 with AX = λX; λ found from |A − λI| = 0 (characteristic equation).
- **Similar matrices:** B = P⁻¹AP; similar matrices have the same eigenvalues.
- **Diagonalization:** writing D = P⁻¹AP, where D is diagonal (eigenvalues) and P has eigenvectors as columns; possible when A has n independent eigenvectors.

### Core concepts

**Inverse by elementary row operations (Gauss-Jordan):** write [A | I], reduce A to I by row operations, and the right side becomes A⁻¹.

**Solving linear systems:**
- **Gauss elimination:** reduce the augmented matrix to upper triangular form, then back-substitute.
- **Gauss-Seidel iteration:** for a diagonally dominant system, start with a guess (often zero) and update each variable in turn using the latest values:
  - x = (b₁ − a₁₂y − a₁₃z)/a₁₁.
  - Similarly for y and z.
  - Repeat until values settle.
  - Converges faster than Jacobi's method.
  - **Diagonal dominance** (|aᵢᵢ| > sum of the other entries in the row) guarantees convergence.

**Properties of eigenvalues:**
- Sum of eigenvalues = trace of A; product = |A|.
- Eigenvalues of a triangular matrix are its diagonal entries.
- If λ is an eigenvalue of A: λⁿ is one of Aⁿ, 1/λ of A⁻¹, and kλ of kA.
- A and Aᵀ have the same eigenvalues.
- Hermitian (real symmetric) matrices have real eigenvalues; skew-Hermitian have purely imaginary or zero eigenvalues; unitary have |λ| = 1.
- Eigenvectors for distinct eigenvalues are linearly independent (orthogonal for symmetric matrices).

**Diagonalization steps:**
1. Solve |A − λI| = 0 for eigenvalues.
2. For each λ, solve (A − λI)X = 0 for eigenvectors.
3. Form the modal matrix P = [X₁ X₂ X₃].
4. D = P⁻¹AP = diag(λ₁, λ₂, λ₃).
- **Use:** Aⁿ = P Dⁿ P⁻¹ (easy powers). For symmetric A, use normalized eigenvectors so P is orthogonal and P⁻¹ = Pᵀ.

**Stability interpretation:**
- For a linear system dX/dt = AX, the solution contains e^(λt) terms.
- **Stable:** all eigenvalues have negative real parts (the solution decays to zero).
- **Unstable:** any eigenvalue has a positive real part.
- **Imaginary parts** give oscillation.
- **Discrete systems (X_{k+1} = AX_k):** stable if all |λ| < 1.
- **Uses:** stability of control systems, structures, Markov chains, and PageRank (eigenvector of the web link matrix).

### Solved examples

**Example 17 (rank).** Find the rank of A = [1 2 3; 2 4 6; 1 1 1].
- R₂ → R₂ − 2R₁ gives [0 0 0]; R₃ → R₃ − R₁ gives [0 −1 −2].
- Swap to get echelon form [1 2 3; 0 −1 −2; 0 0 0], which has two non-zero rows, so **rank = 2**.

**Example 18 (Gauss elimination).** Solve x + y + z = 6, 2x − y + z = 3, x + 2y − z = 2.
- R₂ → R₂ − 2R₁: −3y − z = −9. R₃ → R₃ − R₁: y − 2z = −4.
- From these: y = 2z − 4, so −3(2z − 4) − z = −9, giving −7z = −21, **z = 3**, y = 2, x = 1.
- Solution **(1, 2, 3)**.

**Example 19 (Gauss-Seidel).** Solve 10x + y + z = 12, x + 10y + z = 12, x + y + 10z = 12, starting from (0, 0, 0).

| Iteration | x = (12 − y − z)/10 | y = (12 − x − z)/10 | z = (12 − x − y)/10 |
|---|---|---|---|
| 1 | 1.2 | 1.08 | 0.972 |
| 2 | 0.9948 | 1.0033 | 1.0002 |
| 3 | 0.9997 | 1.0000 | 1.0000 |

The solution converges to **x = y = z = 1**.

**Example 20 (eigenvalues and eigenvectors).** Find the eigenvalues and eigenvectors of A = [1 1 3; 1 5 1; 3 1 1].
- Characteristic equation: λ³ − 7λ² + 36 = 0 (trace 7; sum of 2 × 2 principal minors = 4 − 8 + 4 = 0; |A| = −36).
- Roots: **λ = −2, 3, 6** (check: sum 7 = trace, product −36 = |A|).
- Eigenvectors: λ = −2: (−1, 0, 1); λ = 3: (1, −1, 1); λ = 6: (1, 2, 1). They are mutually orthogonal (A is symmetric), so A is diagonalizable with D = diag(−2, 3, 6).

### Key points to remember

- Hermitian A^θ = A (real eigenvalues), skew-Hermitian A^θ = −A, unitary A^θA = I (|λ| = 1).
- Rank = non-zero rows in echelon form; consistency: rank A = rank [A|B].
- Gauss elimination; Gauss-Seidel needs diagonal dominance.
- Σλ = trace, Πλ = |A|; eigenvalues of Aⁿ, A⁻¹, kA.
- D = P⁻¹AP; Aⁿ = PDⁿP⁻¹; stability: Re λ < 0.

### Important questions

1. Define Hermitian, skew-Hermitian and unitary matrices and prove properties of their eigenvalues.
2. Find the rank of a matrix by reducing it to echelon (or normal) form; find the inverse by elementary operations.
3. Test the consistency of a system and solve it by Gauss elimination.
4. Solve a system by the Gauss-Seidel method (three iterations or more).
5. Find eigenvalues and eigenvectors and diagonalize a matrix. Explain the stability interpretation.

---

## Unit 5: Introduction to Vector Spaces

### 2-mark definitions and formulas

- **Field:** a set F with addition and multiplication satisfying closure, associativity, commutativity, identities (0 and 1), inverses (additive for all, multiplicative for non-zero) and distributivity; for example ℝ, ℚ, ℂ (not ℤ, since 2 has no multiplicative inverse in ℤ).
- **Vector space V over a field F:** a set with vector addition and scalar multiplication satisfying ten axioms (closure under both, commutativity and associativity of addition, zero vector, additive inverse, and the distributive, associative and identity laws for scalars).
- **Subspace:** a non-empty subset W of V that is itself a vector space under the same operations.
- **Subspace test:** W is a subspace if and only if 0 ∈ W and αu + βv ∈ W for all u, v ∈ W and scalars α, β.
- **Linear combination:** a vector of the form a₁v₁ + a₂v₂ + … + aₙvₙ.
- **Span:** the set of all linear combinations of a set of vectors.
- **Linearly independent:** a₁v₁ + … + aₙvₙ = 0 only when all aᵢ = 0.
- **Linearly dependent:** some non-trivial combination equals zero (one vector is a combination of the others).
- **Basis:** a linearly independent set that spans V.
- **Dimension:** the number of vectors in any basis of V (dim ℝⁿ = n; dim of 2 × 2 matrices = 4; dim of polynomials of degree ≤ n = n + 1).

### Core concepts

**Examples of vector spaces:**
- ℝⁿ (n-tuples).
- The set of m × n matrices.
- Polynomials of degree ≤ n (Pₙ).
- Continuous functions on [a, b].
- Solutions of a homogeneous linear system AX = 0 (the null space).
- Solutions of a homogeneous linear differential equation.

**Basic properties:**
- The zero vector is unique.
- The additive inverse of each vector is unique.
- 0 · v = 0.
- α · 0 = 0.
- (−1)v = −v.
- αv = 0 implies α = 0 or v = 0.

**Subspaces:**
- The intersection of two subspaces is a subspace; the union usually is not (unless one contains the other).
- **Examples of subspaces:** lines and planes through the origin in ℝ³, the null space of A, symmetric matrices.
- **Not subspaces:** a plane not through the origin (x + y + z = 1), the first quadrant {(x, y): x, y ≥ 0} (not closed under negative scalars).

**Testing linear dependence in ℝⁿ:**
- Put the vectors as rows or columns of a matrix.
- If rank = number of vectors, they are independent; otherwise dependent.
- For n vectors in ℝⁿ: independent if and only if the determinant is not zero.

**Basis and dimension facts:**
- In an n-dimensional space, any n independent vectors form a basis, and any n + 1 vectors are dependent.
- Every vector has a unique representation in a given basis (its coordinates).
- **Standard basis of ℝ³:** e₁ = (1, 0, 0), e₂ = (0, 1, 0), e₃ = (0, 0, 1).
- **Rank-nullity (preview):** for an m × n matrix, rank + nullity = n.

### Solved examples

**Example 21 (subspace).** Show that W = {(x, y, z) : x + y + z = 0} is a subspace of ℝ³ and find a basis and its dimension.
- 0 = (0, 0, 0) satisfies the equation. If u, v ∈ W, then αu + βv has coordinate sum α·0 + β·0 = 0, so it is in W. Hence W is a subspace.
- Write z = −x − y: (x, y, −x − y) = x(1, 0, −1) + y(0, 1, −1). The vectors (1, 0, −1) and (0, 1, −1) are independent and span W.
- **Basis {(1, 0, −1), (0, 1, −1)}, dim W = 2** (a plane through the origin).

**Example 22 (not a subspace).** W = {(x, y, z) : x = 1} is **not** a subspace because (0, 0, 0) ∉ W (also, (1, 0, 0) + (1, 0, 0) = (2, 0, 0) ∉ W).

**Example 23 (linear dependence).** Are v₁ = (1, 2, 3), v₂ = (2, 3, 4), v₃ = (3, 4, 5) independent?
- det [1 2 3; 2 3 4; 3 4 5] = 1(15 − 16) − 2(10 − 12) + 3(8 − 9) = −1 + 4 − 3 = **0**, so they are **dependent**.
- Relation: v₁ − 2v₂ + v₃ = (1 − 4 + 3, 2 − 6 + 4, 3 − 8 + 5) = 0.

**Example 24 (dimension).** The space of 2 × 2 real symmetric matrices [a b; b c] = a[1 0; 0 0] + b[0 1; 1 0] + c[0 0; 0 1] has **dimension 3**.

### Key points to remember

- Field axioms (ℝ, ℚ, ℂ are fields; ℤ is not).
- Vector space axioms; examples (ℝⁿ, matrices, polynomials, functions, null space).
- Subspace test: contains 0, closed under αu + βv.
- Independence: only trivial combination is zero; test by rank or determinant.
- Basis = independent + spanning; dimension = size of basis; dim Pₙ = n + 1, dim M₂ₓ₂ = 4.

### Important questions

1. Define a field and a vector space. Give examples and prove basic properties.
2. Define a subspace and state the subspace test. Check whether given subsets are subspaces.
3. Define linear dependence and independence. Test given vectors and find a relation if dependent.
4. Define basis and dimension. Find a basis and the dimension of a given subspace.
5. Prove that the intersection of two subspaces is a subspace, and show by example that the union need not be.

---

## Last-hour checklist

- [ ] Limits and continuity (path test); Euler's theorem (tan u example); total derivative (7t⁶); Jacobians and J J′ = 1; max/min (f_min = −1 at (1, 1), saddle at (0, 0)); Lagrange (64); errors (0.75%).
- [ ] Double integral (1/2); change of order ((e − 1)/2); polar (√π/2); Beta-Gamma (24, π/32); Dirichlet (1/6); sphere volume (4/3)πa³.
- [ ] Gradient and directional derivative (37/3); div and curl; solenoidal (a = −2); irrotational and potential (work = 2); Green, Stokes (2πa²), Gauss (4πa³); identities.
- [ ] Hermitian, skew-Hermitian, unitary; rank (2); consistency; Gauss elimination (1, 2, 3); Gauss-Seidel (1, 1, 1); eigenvalues (−2, 3, 6) and eigenvectors; diagonalization; stability.
- [ ] Field; vector space axioms; subspace test (x + y + z = 0, dim 2); dependence (det = 0, v₁ − 2v₂ + v₃ = 0); basis and dimension.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Advanced Engineering Mathematics | Erwin Kreyszig | John Wiley & Sons | [WorldCat](https://search.worldcat.org/search?q=Advanced+Engineering+Mathematics+Kreyszig) |
| 2 | Higher Engineering Mathematics | B. V. Ramana | Tata McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Higher+Engineering+Mathematics+B.V.+Ramana) |
| 3 | Higher Engineering Mathematics | B. S. Grewal | Khanna Publishers | [WorldCat](https://search.worldcat.org/search?q=Higher+Engineering+Mathematics+Grewal) |
| 4 | Advanced Engineering Mathematics | R. K. Jain, S. R. K. Iyengar | Narosa Publishing House | [WorldCat](https://search.worldcat.org/search?q=Advanced+Engineering+Mathematics+Jain+Iyengar) |
| 5 | Advanced Engineering Mathematics (reference) | Peter V. O'Neil | Cengage Learning | [WorldCat](https://search.worldcat.org/search?q=Advanced+Engineering+Mathematics+O%27Neil) |
| 6 | Thomas' Calculus (reference) | Weir, Hass, Giordano | Pearson | [WorldCat](https://search.worldcat.org/search?q=Thomas+Calculus+Weir+Hass) |
| 7 | Linear Algebra: A Modern Introduction (reference) | David Poole | Brooks/Cole | [WorldCat](https://search.worldcat.org/search?q=Linear+Algebra+A+Modern+Introduction+Poole) |
| 8 | Engineering Mathematics for First Year (reference) | T. Veerarajan | McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Engineering+Mathematics+for+First+Year+Veerarajan) |

**Syllabus source:** [AKTU B.Tech 1st year CSE stream course structure and syllabus, 2026-27 (official PDF)](https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf)

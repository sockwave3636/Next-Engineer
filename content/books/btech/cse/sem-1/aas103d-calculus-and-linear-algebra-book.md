---
program: btech
branches: [cse, it, cse-aiml, cse-ds, aids]
semester: 1
code: AAS103D
name: Calculus and Linear Algebra
credits: 4
ltp: 3-1-0
scheme: AKTU B.Tech 1st year, CSE stream, 2026-27 onwards
kind: book
edition: Second edition (detailed), 2026
subtitle: "The complete course from the basics: every concept explained step by step, proofs, 219 fully solved long questions, 86 two-mark answers, previous year questions marked by year, and practice problems with answers"
units:
  - Differential Calculus of Several Variables
  - Multiple Integrals
  - Vector Calculus
  - Matrices
  - Introduction to Vector Spaces
---

# AAS103D Calculus and Linear Algebra: Complete Textbook

## How to Use This Book

This book teaches the whole of Engineering Mathematics I (Calculus and Linear Algebra) from the beginning. You do not need any other book to follow it. Every topic starts with the idea in plain words, then the definitions and formulas, then the proofs that are asked in the examination, and then many solved problems that go from easy to exam level. It is written in original words for Next Engineer.

**How each unit is organised**

- A **unit overview** tells you what the unit is about, what you should already know, and which question types come most often.
- The unit is divided into **Parts**. Each Part opens with a **Concept** section that explains the idea before any question is asked. Read this section slowly; it is the part that makes the problems easy.
- Then come the **long-answer questions** (*Que 1.1*, *Que 1.2*, ...). Theory answers give the definition, the result and its proof. Problem answers show every step, the way you should write it in the exam.
- A question with a tag like [PYQ 2023-24] was asked in the university paper of that year (the same question or the same type with small changes). Give these questions first priority.
- **Remember** boxes collect the formulas of a Part. **Common mistake** boxes show where students lose marks.
- Each unit ends with **2-mark questions** with answers, **practice problems** with answers, and a **list of previous year questions** from the unit with the place in this book where each one is solved.

**Previous year papers used**

The question types in this book were collected from the university papers of Engineering Mathematics I for the sessions 2021-22 (KAS103), 2022-23, 2023-24, 2024-25 and 2025-26 (BAS103). AAS103D is the new code from 2026-27. Its syllabus keeps all the partial differentiation, multiple integrals, vector calculus and matrices of BAS103, and adds vector spaces. Successive differentiation, Leibnitz's theorem, curve tracing and the mean value theorems were in BAS103 but are **not** in AAS103D, so they are left out. Taylor's series for two variables is kept as a short extra Part in Unit 1, because it was asked in every recent paper and it is the tool behind maxima and minima.

**The exam pattern (theory, 70 marks, 3 hours)**

| Section | What is asked | Marks |
|---|---|---|
| A | 7 short questions, all compulsory, 2 marks each | 14 |
| B | Attempt any 3 out of 5 questions, 7 marks each | 21 |
| C | One question per unit, each with two parts; attempt one part of each, 7 marks each | 35 |

Internal assessment carries another 30 marks.

**How the marks are spread over the units (last five papers)**

| Unit | Typical Section A | Typical Section B and C | Weight |
|---|---|---|---|
| 1. Partial differentiation | Euler, Jacobian, errors | Euler second order, chain rule, Jacobian, Lagrange, maxima/minima | Very high |
| 2. Multiple integrals | Beta/Gamma value, simple double integral | change of order, area, volume, Dirichlet, Beta-Gamma relation | High |
| 3. Vector calculus | curl $\vec r$, irrotational, unit normal | directional derivative, $\nabla^2 r^n$, Green, Stokes, Gauss | High |
| 4. Matrices | eigenvalue facts, Hermitian, rank | eigenvectors, Cayley-Hamilton, consistency with parameters, normal form | Very high |
| 5. Vector spaces | LD/LI test | LD/LI with relation, subspace, basis | Medium (new) |

**How to score in mathematics**

1. Write the **formula or theorem first**, then substitute. Marks are given for the method even if the arithmetic slips.
2. Never skip steps in a 7-mark answer. Examiners mark step by step.
3. For multiple integrals, change of order, Green's, Stokes' and Gauss's theorems, **draw the region**.
4. **Box the final answer** and write units where they apply.
5. Check your answer: substitute back into equations, check that a matrix times its inverse gives $I$, check that the sum of eigenvalues equals the trace.
6. In "verify" questions (Stokes, Gauss, Green, Cayley-Hamilton), compute **both sides separately** and then say that they are equal. Computing only one side gets half marks.

**A study plan for one month**

| Week | Study | Practise |
|---|---|---|
| 1 | Unit 1 Parts 1 to 6 | All Que of Unit 1 up to Jacobians, 2-mark questions |
| 2 | Unit 1 Parts 7 to 10, Unit 2 | Lagrange and errors; change of order, Beta-Gamma |
| 3 | Unit 3, Unit 4 | Directional derivative, the three theorems; eigenvectors, Cayley-Hamilton, consistency |
| 4 | Unit 5, revision | Two model papers in 3 hours each, then the Last-Day Revision Checklist |

**Prescribed books (for further reading)**

- Erwin Kreyszig, *Advanced Engineering Mathematics*, John Wiley & Sons.
- B. V. Ramana, *Higher Engineering Mathematics*, Tata McGraw Hill.
- B. S. Grewal, *Higher Engineering Mathematics*, Khanna Publishers.
- R. K. Jain and S. R. K. Iyengar, *Advanced Engineering Mathematics*, Narosa Publishing House.
- Peter V. O'Neil, *Advanced Engineering Mathematics*, Thomson Learning.
- G. B. Thomas and R. L. Finney, *Calculus and Analytic Geometry*, Pearson.
- D. Poole, *Linear Algebra: A Modern Introduction*, Brooks/Cole.
- T. Veerarajan, *Engineering Mathematics for First Year*, Tata McGraw Hill.

## Chapter 0: Tools from School You Will Need

This short chapter collects the school results used again and again in this course. If any line here looks unfamiliar, revise it before you start Unit 1; most mistakes in this subject are school-level slips, not new-topic slips.

### Part 1: Differentiation

**Standard derivatives**

| $f(x)$ | $f'(x)$ | $f(x)$ | $f'(x)$ |
|---|---|---|---|
| $x^n$ | $nx^{n-1}$ | $\sin^{-1}x$ | $\dfrac{1}{\sqrt{1-x^2}}$ |
| $e^x$ | $e^x$ | $\cos^{-1}x$ | $-\dfrac{1}{\sqrt{1-x^2}}$ |
| $a^x$ | $a^x\log a$ | $\tan^{-1}x$ | $\dfrac{1}{1+x^2}$ |
| $\log x$ | $\dfrac1x$ | $\cot^{-1}x$ | $-\dfrac{1}{1+x^2}$ |
| $\sin x$ | $\cos x$ | $\sec^{-1}x$ | $\dfrac{1}{x\sqrt{x^2-1}}$ |
| $\cos x$ | $-\sin x$ | $\sinh x$ | $\cosh x$ |
| $\tan x$ | $\sec^2x$ | $\cosh x$ | $\sinh x$ |
| $\sec x$ | $\sec x\tan x$ | $\cot x$ | $-\csc^2 x$ |

**Rules.** Product $(uv)' = u'v + uv'$; quotient $\left(\dfrac uv\right)' = \dfrac{u'v - uv'}{v^2}$; chain rule $\dfrac{d}{dx}f(g(x)) = f'(g(x))\,g'(x)$.

In this book $\log x$ always means the natural logarithm $\ln x$.

### Part 2: Integration

| $f(x)$ | $\int f(x)\,dx$ | $f(x)$ | $\int f(x)\,dx$ |
|---|---|---|---|
| $x^n\ (n\ne-1)$ | $\dfrac{x^{n+1}}{n+1}$ | $\dfrac{1}{x^2+a^2}$ | $\dfrac1a\tan^{-1}\dfrac xa$ |
| $\dfrac1x$ | $\log x$ | $\dfrac{1}{\sqrt{a^2-x^2}}$ | $\sin^{-1}\dfrac xa$ |
| $e^{ax}$ | $\dfrac{e^{ax}}{a}$ | $\dfrac{1}{\sqrt{x^2+a^2}}$ | $\log\left(x+\sqrt{x^2+a^2}\right)$ |
| $\sin ax$ | $-\dfrac{\cos ax}{a}$ | $\sqrt{a^2-x^2}$ | $\dfrac{x\sqrt{a^2-x^2}}{2} + \dfrac{a^2}{2}\sin^{-1}\dfrac xa$ |
| $\cos ax$ | $\dfrac{\sin ax}{a}$ | $\dfrac{1}{x^2-a^2}$ | $\dfrac{1}{2a}\log\dfrac{x-a}{x+a}$ |

**Integration by parts:** $\displaystyle\int uv\,dx = u\int v\,dx - \int\left(u'\int v\,dx\right)dx$. Choose $u$ in the order ILATE (inverse trig, log, algebraic, trig, exponential).

**Two definite-integral properties used constantly**

$$\int_0^a f(x)\,dx = \int_0^a f(a-x)\,dx, \qquad \int_{-a}^{a} f(x)\,dx = \begin{cases} 2\displaystyle\int_0^a f(x)\,dx & f \text{ even} \\ 0 & f \text{ odd.}\end{cases}$$

**Wallis's formula.** For $n$ a positive integer,

$$\int_0^{\pi/2}\sin^n x\,dx = \int_0^{\pi/2}\cos^n x\,dx = \frac{(n-1)(n-3)\cdots}{n(n-2)\cdots}\times k,$$

where the products stop at 1 or 2, and $k = \dfrac{\pi}{2}$ if $n$ is even, $k = 1$ if $n$ is odd. For example $\displaystyle\int_0^{\pi/2}\sin^4x\,dx = \frac{3\cdot1}{4\cdot2}\cdot\frac\pi2 = \frac{3\pi}{16}$ and $\displaystyle\int_0^{\pi/2}\cos^5x\,dx = \frac{4\cdot2}{5\cdot3\cdot1} = \frac{8}{15}$.

### Part 3: Trigonometry and coordinates

- $\sin^2\theta + \cos^2\theta = 1$, $1 + \tan^2\theta = \sec^2\theta$, $\sin2\theta = 2\sin\theta\cos\theta$, $\cos2\theta = \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta$.
- $\tan^{-1}x + \tan^{-1}y = \tan^{-1}\dfrac{x+y}{1-xy}$.
- **Polar coordinates:** $x = r\cos\theta$, $y = r\sin\theta$, $r^2 = x^2 + y^2$, $\theta = \tan^{-1}(y/x)$.
- **Cylindrical coordinates:** $x = r\cos\theta$, $y = r\sin\theta$, $z = z$.
- **Spherical coordinates:** $x = r\sin\theta\cos\phi$, $y = r\sin\theta\sin\phi$, $z = r\cos\theta$, with $0 \le \theta \le \pi$, $0 \le \phi \le 2\pi$.

**Standard curves you must be able to sketch**

| Equation | Curve |
|---|---|
| $x^2 + y^2 = a^2$ | circle, centre origin, radius $a$ |
| $x^2 + y^2 = 2ax$, i.e. $r = 2a\cos\theta$ | circle through origin, centre $(a,0)$ |
| $x^2 + y^2 = 2ay$, i.e. $r = 2a\sin\theta$ | circle through origin, centre $(0,a)$ |
| $y^2 = 4ax$ | parabola opening right, vertex origin |
| $x^2 = 4ay$ | parabola opening up |
| $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ | ellipse |
| $xy = c^2$ | rectangular hyperbola |
| $x^{2/3} + y^{2/3} = a^{2/3}$ | astroid |
| $r = a(1 + \cos\theta)$ | cardioid |

### Part 4: Determinants and vectors

- A $3 \times 3$ determinant is expanded along any row or column with signs $\begin{smallmatrix}+&-&+\\-&+&-\\+&-&+\end{smallmatrix}$.
- Adding a multiple of one row to another does not change a determinant; swapping two rows changes its sign; a common factor of a row can be taken out.
- For $\vec a = a_1\hat i + a_2\hat j + a_3\hat k$ and $\vec b = b_1\hat i + b_2\hat j + b_3\hat k$:

$$\vec a\cdot\vec b = a_1b_1 + a_2b_2 + a_3b_3 = |\vec a||\vec b|\cos\theta, \qquad \vec a\times\vec b = \begin{vmatrix}\hat i & \hat j & \hat k\\ a_1 & a_2 & a_3\\ b_1 & b_2 & b_3\end{vmatrix}.$$

- The unit vector along $\vec a$ is $\hat a = \vec a/|\vec a|$.
- $\vec a \perp \vec b \iff \vec a\cdot\vec b = 0$; $\vec a \parallel \vec b \iff \vec a\times\vec b = \vec 0$.

## Unit 1: Differential Calculus of Several Variables

### Unit overview

In school calculus a quantity depends on one variable: the position of a car depends on time, the area of a circle on its radius. In engineering a quantity almost always depends on several variables at once. The temperature of a metal plate depends on the position $(x, y)$ on the plate; the volume of a gas depends on its pressure and its temperature; the cost of a box depends on its length, breadth and height. This unit extends differentiation to such functions.

The central idea is simple: **to see how a function of several variables changes with one of them, freeze all the others and differentiate as usual.** That is a partial derivative. Everything else in the unit is built on it:

- Euler's theorem gives a short cut for a special class of functions (homogeneous functions).
- The chain rule and total derivative handle variables that themselves depend on other variables.
- Jacobians measure how a change of variables stretches areas and volumes; they are needed again in Unit 2.
- Maxima, minima and Lagrange's multipliers find the best design under given conditions, the most practical topic of the unit.
- Errors and approximations estimate how a small mistake in measurement affects a computed result.

**What you should already know:** ordinary differentiation (Chapter 0, Part 1), the product, quotient and chain rules, and how to expand a $3\times3$ determinant.

**Most asked in the last five papers:** Euler's theorem (first and second order, with the corollaries for $\sin^{-1}$, $\tan^{-1}$, $\cos^{-1}$ of a homogeneous function), chain rule proofs with given substitutions, Jacobians (including the roots-of-a-cubic type and functional dependence), maxima and minima using $rt - s^2$, Lagrange's method (open box, largest parallelepiped, nearest point), Taylor's series in two variables, and percentage error.

### Part 1: Functions of Several Variables, Limits and Continuity

**Concept**

A **function of two variables** $z = f(x, y)$ is a rule that gives one value $z$ for each point $(x, y)$ of a region $D$ of the plane, called the domain. For example $f(x,y) = \sqrt{9 - x^2 - y^2}$ is defined only where $x^2 + y^2 \le 9$, so its domain is the disc of radius 3. Its graph $z = \sqrt{9 - x^2 - y^2}$ is the upper half of the sphere of radius 3.

There are two ways to picture such a function:

1. **As a surface.** Plot $z = f(x,y)$ above each point of the domain. A function of two variables is a surface, just as a function of one variable is a curve.
2. **By level curves.** Draw the curves $f(x,y) = c$ for several values of $c$, like the contour lines on a map. For $f = x^2 + y^2$ the level curves are circles.

A function of three variables $u = f(x, y, z)$ cannot be drawn as a graph (it would need four dimensions), but its **level surfaces** $f(x,y,z) = c$ can be pictured. These level surfaces become very important in Unit 3.

**Why limits need care in two variables.** On a line, $x$ can approach $a$ only from the left or from the right. In the plane, the point $(x, y)$ can approach $(a, b)$ along infinitely many paths: along straight lines of every slope, along parabolas, along spirals. A limit exists only if every path gives the same value. That is the whole difference from school calculus.

**Que 1.1.** Define the limit of a function of two variables. Explain the method of testing a limit along different paths, and the difference between a simultaneous limit and repeated limits.

**Answer:**

**Limit.** The function $f(x,y)$ tends to the limit $L$ as $(x,y) \to (a,b)$, written $\displaystyle\lim_{(x,y)\to(a,b)} f(x,y) = L$, if for every $\varepsilon > 0$ there is a $\delta > 0$ such that

$$|f(x,y) - L| < \varepsilon \quad \text{whenever} \quad 0 < \sqrt{(x-a)^2 + (y-b)^2} < \delta.$$

In words: $f(x,y)$ can be made as close to $L$ as we like by taking $(x,y)$ close enough to $(a,b)$, from any direction.

**Path test (to show that a limit does not exist).** If $f$ approaches different values along two different paths to $(a,b)$, the limit does not exist. For limits at the origin, the usual paths are

- the axes: $y = 0$ and $x = 0$,
- straight lines $y = mx$,
- parabolas $y = mx^2$ (or $x = my^2$).

If the value along $y = mx$ depends on $m$, the limit does not exist.

**Important.** Getting the same value along many paths does **not** prove that the limit exists. To prove existence we must use the $\varepsilon$-$\delta$ definition, an inequality, or polar coordinates ($x = r\cos\theta$, $y = r\sin\theta$, $r \to 0$ with the bound independent of $\theta$).

**Simultaneous and repeated limits.** The limit defined above, with $x$ and $y$ approaching together, is the **simultaneous** (double) limit. The **repeated** (iterated) limits are

$$\lim_{x\to a}\left[\lim_{y\to b} f(x,y)\right] \quad \text{and} \quad \lim_{y\to b}\left[\lim_{x\to a} f(x,y)\right],$$

where we let one variable go to its limit first, then the other.

- If the simultaneous limit exists and the inner limits exist, then both repeated limits exist and are equal to it.
- If the two repeated limits are **different**, the simultaneous limit does **not** exist.
- The repeated limits may be equal while the simultaneous limit does not exist (see Que 1.2).

**Que 1.2.** Show that $\displaystyle\lim_{(x,y)\to(0,0)} \frac{xy}{x^2+y^2}$ does not exist, although both repeated limits are equal.

**Answer:**

**Repeated limits.** For fixed $x \ne 0$, $\displaystyle\lim_{y\to0}\frac{xy}{x^2+y^2} = \frac{0}{x^2} = 0$, so $\displaystyle\lim_{x\to0}\left[\lim_{y\to0} f\right] = 0$. By symmetry the other repeated limit is also 0.

**Along the line $y = mx$:**

$$\frac{xy}{x^2+y^2} = \frac{x\cdot mx}{x^2 + m^2x^2} = \frac{m}{1+m^2}.$$

This value depends on $m$. Along $y = x$ ($m = 1$) it is $\tfrac12$; along $y = 0$ ($m = 0$) it is 0. Two paths give different values, so **the simultaneous limit does not exist**, even though the repeated limits agree. $\blacksquare$

**Que 1.3.** Define continuity of $f(x,y)$ at a point. Show that

$$f(x,y) = \begin{cases} \dfrac{x^2y}{x^2+y^2}, & (x,y) \ne (0,0) \\ 0, & (x,y) = (0,0)\end{cases}$$

is continuous at the origin.

**Answer:**

**Continuity.** $f$ is continuous at $(a,b)$ if

1. $f(a,b)$ is defined,
2. $\displaystyle\lim_{(x,y)\to(a,b)} f(x,y)$ exists, and
3. this limit equals $f(a,b)$.

A function that is continuous at every point of a region is continuous in that region. Sums, products and quotients (with non-zero denominator) of continuous functions are continuous, so polynomials in $x$ and $y$ are continuous everywhere.

**Proof for the given $f$.** For $(x,y) \ne (0,0)$, since $x^2 \le x^2 + y^2$,

$$|f(x,y) - 0| = \frac{x^2 |y|}{x^2+y^2} \le |y| \le \sqrt{x^2+y^2}.$$

Given $\varepsilon > 0$, choose $\delta = \varepsilon$. Whenever $0 < \sqrt{x^2+y^2} < \delta$, we get $|f(x,y) - 0| < \varepsilon$. So

$$\lim_{(x,y)\to(0,0)} f(x,y) = 0 = f(0,0),$$

and **$f$ is continuous at the origin**. $\blacksquare$

**Same result by polar coordinates.** Put $x = r\cos\theta$, $y = r\sin\theta$: $f = \dfrac{r^3\cos^2\theta\sin\theta}{r^2} = r\cos^2\theta\sin\theta$, and $|f| \le r \to 0$ whatever $\theta$ is.

**Que 1.4.** Show that $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2y}{x^4+y^2}$ does not exist, although the limit along every straight line through the origin is 0.

**Answer:**

**Along $y = mx$:** $\dfrac{x^2\cdot mx}{x^4 + m^2x^2} = \dfrac{mx}{x^2 + m^2} \to 0$ as $x \to 0$ (for every $m$). Along $x = 0$ the function is 0. So every straight line gives 0.

**Along the parabola $y = mx^2$:**

$$\frac{x^2\cdot mx^2}{x^4 + m^2x^4} = \frac{m}{1+m^2},$$

which depends on $m$. So the limit **does not exist**. $\blacksquare$

This example shows why testing straight lines alone can never prove that a limit exists.

**Que 1.5.** Evaluate (i) $\displaystyle\lim_{(x,y)\to(1,2)}\frac{x^2 + 2y}{x + y^2}$, (ii) $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^3 + y^3}{x^2 + y^2}$, (iii) $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2 - y^2}{x^2 + y^2}$.

**Answer:**

**(i)** The function is a quotient of polynomials and the denominator is $1 + 4 = 5 \ne 0$ at $(1,2)$, so it is continuous there and we substitute directly:

$$\lim = \frac{1 + 4}{1 + 4} = 1.$$

**(ii)** In polar coordinates, $\dfrac{x^3+y^3}{x^2+y^2} = \dfrac{r^3(\cos^3\theta + \sin^3\theta)}{r^2} = r(\cos^3\theta + \sin^3\theta)$. Since $|\cos^3\theta + \sin^3\theta| \le 2$, the absolute value is at most $2r \to 0$. So the limit is $\mathbf{0}$.

**(iii)** Along $y = mx$: $\dfrac{x^2 - m^2x^2}{x^2 + m^2x^2} = \dfrac{1 - m^2}{1 + m^2}$, which depends on $m$. The limit **does not exist**. The repeated limits are $\displaystyle\lim_{x\to0}\lim_{y\to0} = \lim_{x\to0}\frac{x^2}{x^2} = 1$ and $\displaystyle\lim_{y\to0}\lim_{x\to0} = \lim_{y\to0}\frac{-y^2}{y^2} = -1$. They are different, which confirms the result.

**Remember:** to prove a limit does **not** exist, find two paths with different values (or two different repeated limits). To prove it **does** exist, bound $|f - L|$ by something that goes to 0, for example using polar coordinates.

### Part 2: Partial Derivatives

**Concept**

Stand on the surface $z = f(x,y)$ at the point above $(x_0, y_0)$. If you walk in the $x$-direction (keeping $y = y_0$ fixed), you climb or descend at some rate; that rate is the partial derivative $f_x$. If you walk in the $y$-direction instead, the rate is $f_y$. So a function of two variables has two first derivatives, one for each direction along the axes. (Unit 3 gives the rate in any direction: the directional derivative.)

To compute $\dfrac{\partial f}{\partial x}$, treat $y$ (and every other variable except $x$) as a constant and differentiate with respect to $x$ using the school rules. For example, for $f = x^3y^2 + \sin(xy)$:

$$f_x = 3x^2y^2 + y\cos(xy), \qquad f_y = 2x^3y + x\cos(xy).$$

**Que 1.6.** Define partial derivatives of first and higher orders. Explain their geometric meaning and state the condition for the equality of mixed partial derivatives.

**Answer:**

Let $z = f(x,y)$. The **partial derivative of $f$ with respect to $x$** at $(x,y)$ is

$$\frac{\partial f}{\partial x} = f_x = \lim_{h \to 0} \frac{f(x+h, y) - f(x,y)}{h},$$

provided the limit exists. Similarly

$$\frac{\partial f}{\partial y} = f_y = \lim_{k \to 0} \frac{f(x, y+k) - f(x,y)}{k}.$$

**Geometric meaning.** The plane $y = y_0$ cuts the surface $z = f(x,y)$ in a curve. $f_x(x_0,y_0)$ is the slope of the tangent to that curve at the point $(x_0, y_0, f(x_0,y_0))$. Likewise $f_y(x_0,y_0)$ is the slope of the curve cut by the plane $x = x_0$.

**Higher-order partial derivatives.** Differentiating again gives four second-order derivatives:

$$\frac{\partial^2 f}{\partial x^2} = f_{xx}, \qquad \frac{\partial^2 f}{\partial y^2} = f_{yy}, \qquad \frac{\partial^2 f}{\partial x\, \partial y} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right), \qquad \frac{\partial^2 f}{\partial y\, \partial x} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right).$$

The last two are the **mixed** partial derivatives.

**Schwarz's (Clairaut's) theorem.** If $f_x$, $f_y$ and $f_{xy}$ exist near $(a,b)$ and $f_{xy}$ is continuous at $(a,b)$, then $f_{yx}$ exists there and $f_{xy} = f_{yx}$. For all functions met in this course (polynomials, exponentials, logarithms, trigonometric functions and their combinations, away from points where they are undefined) the mixed derivatives are equal.

**Standard notation (Monge's notation)** used in maxima and minima:

$$p = \frac{\partial z}{\partial x},\quad q = \frac{\partial z}{\partial y},\quad r = \frac{\partial^2 z}{\partial x^2},\quad s = \frac{\partial^2 z}{\partial x \partial y},\quad t = \frac{\partial^2 z}{\partial y^2}.$$

**Que 1.7.** Find all first and second order partial derivatives of $z = x^3 + y^3 - 3axy$ and of $z = e^{x}\sin y$, and verify $z_{xy} = z_{yx}$ in each case.

**Answer:**

**(a)** $z = x^3 + y^3 - 3axy$:

$$z_x = 3x^2 - 3ay, \qquad z_y = 3y^2 - 3ax,$$

$$z_{xx} = 6x, \qquad z_{yy} = 6y, \qquad z_{yx} = \frac{\partial}{\partial y}(3x^2 - 3ay) = -3a, \qquad z_{xy} = \frac{\partial}{\partial x}(3y^2 - 3ax) = -3a.$$

So $z_{xy} = z_{yx} = -3a$.

**(b)** $z = e^x\sin y$:

$$z_x = e^x\sin y, \quad z_y = e^x\cos y, \quad z_{xx} = e^x\sin y, \quad z_{yy} = -e^x\sin y, \quad z_{xy} = z_{yx} = e^x\cos y.$$

Note also that $z_{xx} + z_{yy} = 0$: the function satisfies **Laplace's equation**.

**Que 1.8.** If $u = \log(x^2 + y^2)$, verify that $u_{xy} = u_{yx}$ and show that $u_{xx} + u_{yy} = 0$.

**Answer:**

$$u_x = \frac{2x}{x^2+y^2}, \qquad u_y = \frac{2y}{x^2+y^2}.$$

**Mixed derivatives.**

$$u_{yx} = \frac{\partial}{\partial y}\left(\frac{2x}{x^2+y^2}\right) = -\frac{4xy}{(x^2+y^2)^2}, \qquad u_{xy} = \frac{\partial}{\partial x}\left(\frac{2y}{x^2+y^2}\right) = -\frac{4xy}{(x^2+y^2)^2}.$$

They are equal. $\checkmark$

**Laplace's equation.** By the quotient rule,

$$u_{xx} = \frac{2(x^2+y^2) - 2x\cdot2x}{(x^2+y^2)^2} = \frac{2(y^2 - x^2)}{(x^2+y^2)^2}, \qquad u_{yy} = \frac{2(x^2 - y^2)}{(x^2+y^2)^2}$$

(the second by symmetry, swapping $x$ and $y$). Adding, $u_{xx} + u_{yy} = 0$. $\blacksquare$

**Que 1.9.** If $u = (x^2 + y^2 + z^2)^{-1/2}$, show that $\dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} + \dfrac{\partial^2 u}{\partial z^2} = 0$.

**Answer:**

Let $r^2 = x^2 + y^2 + z^2$, so $u = r^{-1}$. Then

$$u_x = -\tfrac{1}{2}(x^2+y^2+z^2)^{-3/2}\cdot 2x = -x r^{-3}.$$

$$u_{xx} = -r^{-3} + 3x r^{-4}\cdot\frac{\partial r}{\partial x} = -r^{-3} + 3x^2 r^{-5},$$

using $\dfrac{\partial r}{\partial x} = \dfrac{x}{r}$. By symmetry,

$$u_{yy} = -r^{-3} + 3y^2 r^{-5}, \qquad u_{zz} = -r^{-3} + 3z^2 r^{-5}.$$

Adding,

$$u_{xx} + u_{yy} + u_{zz} = -3r^{-3} + 3(x^2+y^2+z^2)r^{-5} = -3r^{-3} + 3r^{-3} = 0. \;\blacksquare$$

**Exam tip:** whenever the function is symmetric in $x, y, z$, work out the $x$-derivative fully and write "similarly" for $y$ and $z$. It saves time and the examiner accepts it.

**Que 1.10.** If $u = \log(x^3 + y^3 + z^3 - 3xyz)$, show that (i) $u_x + u_y + u_z = \dfrac{3}{x+y+z}$, and (ii) $\left(\dfrac{\partial}{\partial x} + \dfrac{\partial}{\partial y} + \dfrac{\partial}{\partial z}\right)^2 u = -\dfrac{9}{(x+y+z)^2}$.

**Answer:**

**(i)** $u_x = \dfrac{3x^2 - 3yz}{x^3+y^3+z^3-3xyz}$, and similarly for $u_y$, $u_z$. Adding,

$$u_x + u_y + u_z = \frac{3(x^2+y^2+z^2 - xy - yz - zx)}{x^3+y^3+z^3-3xyz}.$$

Using the identity $x^3 + y^3 + z^3 - 3xyz = (x+y+z)(x^2+y^2+z^2-xy-yz-zx)$,

$$u_x + u_y + u_z = \frac{3}{x+y+z}.$$

**(ii)** Write $D = \dfrac{\partial}{\partial x} + \dfrac{\partial}{\partial y} + \dfrac{\partial}{\partial z}$. Then $D^2u = D(Du) = D\left(\dfrac{3}{x+y+z}\right)$:

$$D\left(\frac{3}{x+y+z}\right) = -\frac{3}{(x+y+z)^2} - \frac{3}{(x+y+z)^2} - \frac{3}{(x+y+z)^2} = -\frac{9}{(x+y+z)^2}. \;\blacksquare$$

**Que 1.11.** If $u = e^{xyz}$, show that $\dfrac{\partial^3 u}{\partial x\,\partial y\,\partial z} = (1 + 3xyz + x^2y^2z^2)\,e^{xyz}$.

**Answer:**

$$\frac{\partial u}{\partial z} = xy\,e^{xyz}.$$

$$\frac{\partial^2 u}{\partial y\,\partial z} = \frac{\partial}{\partial y}\left(xy\,e^{xyz}\right) = x\,e^{xyz} + xy\cdot xz\,e^{xyz} = (x + x^2yz)\,e^{xyz}.$$

$$\frac{\partial^3 u}{\partial x\,\partial y\,\partial z} = (1 + 2xyz)\,e^{xyz} + (x + x^2yz)\,yz\,e^{xyz} = (1 + 2xyz + xyz + x^2y^2z^2)\,e^{xyz}$$

$$= (1 + 3xyz + x^2y^2z^2)\,e^{xyz}. \;\blacksquare$$

**Que 1.12.** If $z = f(x + ct) + \phi(x - ct)$, where $f$ and $\phi$ are any twice differentiable functions, show that $\dfrac{\partial^2 z}{\partial t^2} = c^2\dfrac{\partial^2 z}{\partial x^2}$.

**Answer:**

By the chain rule (with $f'$ meaning the derivative of $f$ with respect to its own argument),

$$\frac{\partial z}{\partial x} = f'(x+ct) + \phi'(x-ct), \qquad \frac{\partial^2 z}{\partial x^2} = f''(x+ct) + \phi''(x-ct).$$

$$\frac{\partial z}{\partial t} = c\,f'(x+ct) - c\,\phi'(x-ct), \qquad \frac{\partial^2 z}{\partial t^2} = c^2 f''(x+ct) + c^2\phi''(x-ct).$$

Comparing, $\dfrac{\partial^2 z}{\partial t^2} = c^2\dfrac{\partial^2 z}{\partial x^2}$. $\blacksquare$

This is the **one-dimensional wave equation**; the result says that any wave travelling right or left with speed $c$ satisfies it.

**Que 1.13.** If $x^x y^y z^z = c$, show that at $x = y = z$, $\dfrac{\partial^2 z}{\partial x\,\partial y} = -\left(x\log(ex)\right)^{-1}$.

**Answer:**

Here $z$ is a function of $x$ and $y$ defined implicitly. Take logarithms:

$$x\log x + y\log y + z\log z = \log c.$$

Differentiate partially with respect to $x$ (with $y$ constant):

$$(1 + \log x) + (1 + \log z)\frac{\partial z}{\partial x} = 0 \quad\Rightarrow\quad \frac{\partial z}{\partial x} = -\frac{1 + \log x}{1 + \log z}.$$

Similarly $\dfrac{\partial z}{\partial y} = -\dfrac{1 + \log y}{1 + \log z}$.

Now differentiate $\dfrac{\partial z}{\partial y}$ with respect to $x$. The numerator $1 + \log y$ does not contain $x$:

$$\frac{\partial^2 z}{\partial x\,\partial y} = -(1 + \log y)\cdot\frac{\partial}{\partial x}(1 + \log z)^{-1} = (1 + \log y)(1 + \log z)^{-2}\cdot\frac1z\frac{\partial z}{\partial x}$$

$$= -\frac{(1 + \log y)(1 + \log x)}{z(1 + \log z)^3}.$$

At $x = y = z$:

$$\frac{\partial^2 z}{\partial x\,\partial y} = -\frac{(1 + \log x)^2}{x(1 + \log x)^3} = -\frac{1}{x(1 + \log x)} = -\frac{1}{x\log(ex)},$$

since $1 + \log x = \log e + \log x = \log(ex)$. $\blacksquare$

**Common mistake:** in $\dfrac{\partial}{\partial x}(1+\log z)^{-1}$ students forget that $z$ depends on $x$. Every time $z$ appears, its $x$-derivative brings a factor $\dfrac{\partial z}{\partial x}$.

### Part 3: Homogeneous Functions and Euler's Theorem

**Concept**

A polynomial in which every term has the same total degree is called homogeneous. For example, in $x^3 + 5x^2y - y^3$ each term has degree 3. If we double both $x$ and $y$, every term is multiplied by $2^3$, so the whole function is multiplied by $2^3$. This "scaling" property defines homogeneity in general, and it holds for many functions that are not polynomials, such as $\dfrac{x^3 + y^3}{x - y}$ (degree 2) or $\sqrt{x^2+y^2}\,\tan^{-1}\dfrac yx$ (degree 1).

Euler's theorem says that for such a function the combination $xf_x + yf_y$ is simply $n f$. This is a short cut: instead of computing two derivatives, we write down the answer from the degree. Exam questions use it in a disguised form: the given $u$ is **not** homogeneous, but some function of $u$ (like $\sin u$ or $\tan u$ or $e^u$) is. The two corollaries in Que 1.16 deal with that case.

**Que 1.14.** Define a homogeneous function of degree $n$. Give the test for homogeneity and find the degree of each of the following:
(i) $\dfrac{x^3 + y^3}{x + y}$, (ii) $\dfrac{\sqrt x + \sqrt y}{x + y}$, (iii) $x^2\sin^{-1}\dfrac yx + y^2\tan^{-1}\dfrac xy$, (iv) $\sin^{-1}\dfrac{x+y}{\sqrt x+\sqrt y}$, (v) $(x^5 + y^5)^{1/5}$. [PYQ 2025-26]

**Answer:**

**Definition.** A function $f(x,y)$ is **homogeneous of degree $n$** if, for every $t > 0$,

$$f(tx, ty) = t^n f(x,y).$$

**Equivalent form.** $f$ is homogeneous of degree $n$ if and only if it can be written as

$$f(x,y) = x^n\,\phi\!\left(\frac yx\right) \quad\text{or}\quad f(x,y) = y^n\,\psi\!\left(\frac xy\right).$$

The same definition works for any number of variables: $f(tx,ty,tz) = t^nf(x,y,z)$.

**Test.** Replace $x$ by $tx$ and $y$ by $ty$. If $t^n$ comes out as a factor, $f$ is homogeneous of degree $n$.

**(i)** $f(tx,ty) = \dfrac{t^3(x^3+y^3)}{t(x+y)} = t^2 f$: degree **2**.

**(ii)** $f(tx,ty) = \dfrac{t^{1/2}(\sqrt x+\sqrt y)}{t(x+y)} = t^{-1/2}f$: degree $\mathbf{-\tfrac12}$.

**(iii)** $\sin^{-1}\dfrac yx$ and $\tan^{-1}\dfrac xy$ are unchanged when $x, y$ become $tx, ty$ (degree 0). So $f(tx,ty) = t^2f$: degree **2**.

**(iv)** $\sin^{-1}\dfrac{tx + ty}{\sqrt t(\sqrt x + \sqrt y)} = \sin^{-1}\left(\sqrt t\cdot\dfrac{x+y}{\sqrt x+\sqrt y}\right)$. The $\sqrt t$ cannot be taken outside $\sin^{-1}$, so $u$ is **not homogeneous**. However $\sin u = \dfrac{x+y}{\sqrt x+\sqrt y}$ is homogeneous of degree $\tfrac12$. This is the situation of the corollaries of Euler's theorem.

**(v)** $(t^5x^5 + t^5y^5)^{1/5} = t(x^5+y^5)^{1/5}$: degree **1**.

**Que 1.15.** State and prove Euler's theorem on homogeneous functions of two variables. Also state it for three variables.

**Answer:**

**Statement.** If $u = f(x,y)$ is a homogeneous function of degree $n$ with continuous partial derivatives, then

$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = nu.$$

**Proof.** Since $u$ is homogeneous of degree $n$, we can write

$$u = x^n\phi(v), \qquad \text{where } v = \frac yx.$$

Now $\dfrac{\partial v}{\partial x} = -\dfrac{y}{x^2}$ and $\dfrac{\partial v}{\partial y} = \dfrac1x$. Differentiating $u$ partially,

$$\frac{\partial u}{\partial x} = nx^{n-1}\phi(v) + x^n\phi'(v)\left(-\frac{y}{x^2}\right) = nx^{n-1}\phi(v) - x^{n-2}y\,\phi'(v),$$

$$\frac{\partial u}{\partial y} = x^n\phi'(v)\cdot\frac1x = x^{n-1}\phi'(v).$$

Therefore

$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = nx^n\phi(v) - x^{n-1}y\,\phi'(v) + x^{n-1}y\,\phi'(v) = nx^n\phi(v) = nu. \;\blacksquare$$

**Alternative proof (works for any number of variables).** Differentiate the identity $f(tx,ty) = t^nf(x,y)$ with respect to $t$. Writing $X = tx$, $Y = ty$, the chain rule gives

$$x\,f_X(tx,ty) + y\,f_Y(tx,ty) = nt^{n-1}f(x,y).$$

Put $t = 1$: $xf_x + yf_y = nf$.

**Three variables.** If $u = f(x,y,z)$ is homogeneous of degree $n$, then

$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} + z\frac{\partial u}{\partial z} = nu.$$

**Que 1.16.** If $u$ is a homogeneous function of degree $n$ in $x$ and $y$, prove that

$$x^2 \frac{\partial^2 u}{\partial x^2} + 2xy\frac{\partial^2 u}{\partial x\,\partial y} + y^2\frac{\partial^2 u}{\partial y^2} = n(n-1)u.$$

Further, if $z = f(u)$ is homogeneous of degree $n$ (while $u$ itself need not be), prove the two corollaries

$$\text{(I)}\quad xu_x + yu_y = n\frac{f(u)}{f'(u)} = g(u), \qquad \text{(II)}\quad x^2u_{xx} + 2xyu_{xy} + y^2u_{yy} = g(u)\left[g'(u) - 1\right].$$

**Answer:**

**Second-order Euler.** By Euler's theorem,

$$xu_x + yu_y = nu. \qquad (1)$$

Differentiate (1) partially with respect to $x$:

$$u_x + xu_{xx} + yu_{yx} = nu_x \quad\Rightarrow\quad xu_{xx} + yu_{xy} = (n-1)u_x. \qquad (2)$$

Differentiate (1) partially with respect to $y$:

$$xu_{xy} + u_y + yu_{yy} = nu_y \quad\Rightarrow\quad xu_{xy} + yu_{yy} = (n-1)u_y. \qquad (3)$$

Multiply (2) by $x$, (3) by $y$ and add:

$$x^2u_{xx} + 2xyu_{xy} + y^2u_{yy} = (n-1)(xu_x + yu_y) = (n-1)nu. \;\blacksquare$$

(We used $u_{xy} = u_{yx}$.)

**Corollary I.** $z = f(u)$ is homogeneous of degree $n$ in $x, y$, so by Euler's theorem $xz_x + yz_y = nz$. But $z_x = f'(u)u_x$ and $z_y = f'(u)u_y$, so

$$f'(u)\,(xu_x + yu_y) = nf(u) \quad\Rightarrow\quad xu_x + yu_y = n\frac{f(u)}{f'(u)} = g(u). \qquad (4)$$

**Corollary II.** Differentiate (4) with respect to $x$ and $y$ in turn:

$$xu_{xx} + yu_{xy} = g'(u)u_x - u_x, \qquad xu_{xy} + yu_{yy} = g'(u)u_y - u_y.$$

Multiply by $x$ and $y$ and add:

$$x^2u_{xx} + 2xyu_{xy} + y^2u_{yy} = \left[g'(u) - 1\right](xu_x + yu_y) = g(u)\left[g'(u) - 1\right]. \;\blacksquare$$

**Remember:** the three results of this Part, used in almost every paper:

- $xu_x + yu_y = nu$ and $x^2u_{xx} + 2xyu_{xy} + y^2u_{yy} = n(n-1)u$ when $u$ is homogeneous of degree $n$.
- If $f(u)$ is homogeneous of degree $n$: $g(u) = n\dfrac{f(u)}{f'(u)}$, then $xu_x + yu_y = g(u)$ and the second-order combination is $g(u)\left[g'(u) - 1\right]$.

**Que 1.17.** If $u = \dfrac{x^2 + y^2}{x + y}$, find $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y}$ and verify Euler's theorem by direct differentiation. [PYQ 2024-25]

**Answer:**

$u(tx,ty) = \dfrac{t^2(x^2+y^2)}{t(x+y)} = t\,u$, so $u$ is homogeneous of degree 1. By Euler's theorem,

$$xu_x + yu_y = 1\cdot u = \frac{x^2+y^2}{x+y}.$$

**Direct verification.** By the quotient rule,

$$u_x = \frac{2x(x+y) - (x^2+y^2)}{(x+y)^2} = \frac{x^2 + 2xy - y^2}{(x+y)^2}, \qquad u_y = \frac{y^2 + 2xy - x^2}{(x+y)^2}.$$

$$xu_x + yu_y = \frac{x^3 + 2x^2y - xy^2 + y^3 + 2xy^2 - x^2y}{(x+y)^2} = \frac{x^3 + x^2y + xy^2 + y^3}{(x+y)^2} = \frac{(x+y)(x^2+y^2)}{(x+y)^2} = u. \;\checkmark$$

**Que 1.18.** If $u = y^2e^{y/x} + x^2\tan^{-1}\left(\dfrac xy\right)$, show that (i) $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y} = 2u$, and (ii) $x^2\dfrac{\partial^2 u}{\partial x^2} + 2xy\dfrac{\partial^2 u}{\partial x\,\partial y} + y^2\dfrac{\partial^2 u}{\partial y^2} = 2u$. [PYQ 2023-24]

**Answer:**

Replace $x, y$ by $tx, ty$: $e^{ty/tx} = e^{y/x}$ and $\tan^{-1}\dfrac{tx}{ty} = \tan^{-1}\dfrac xy$ do not change, while $y^2$ and $x^2$ give $t^2$. So

$$u(tx,ty) = t^2u(x,y),$$

and $u$ is homogeneous of degree $n = 2$.

**(i)** By Euler's theorem, $xu_x + yu_y = 2u$.

**(ii)** By the second-order result, $x^2u_{xx} + 2xyu_{xy} + y^2u_{yy} = n(n-1)u = 2\cdot1\cdot u = 2u$. $\blacksquare$

**Exam tip:** write the homogeneity check $u(tx,ty) = t^2u$ in one clear line. That line carries marks, and once it is written the rest is two lines.

**Que 1.19.** If $u = \sin^{-1}\left(\dfrac{x^3+y^3}{x+y}\right)$, show that $xu_x + yu_y = 2\tan u$. [PYQ 2022-23]

**Answer:**

$u$ is not homogeneous, but

$$z = \sin u = \frac{x^3 + y^3}{x + y}$$

is homogeneous of degree $3 - 1 = 2$. By Corollary I with $f(u) = \sin u$, $f'(u) = \cos u$ and $n = 2$:

$$xu_x + yu_y = 2\,\frac{\sin u}{\cos u} = 2\tan u. \;\blacksquare$$

**Que 1.20.** If $u = \sin^{-1}\left(\dfrac{x+y}{\sqrt{x} + \sqrt{y}}\right)$, prove that

(i) $xu_x + yu_y = \tfrac{1}{2}\tan u$, and (ii) $x^2 u_{xx} + 2xy\,u_{xy} + y^2 u_{yy} = -\dfrac{\sin u \cos 2u}{4\cos^3 u}$.

**Answer:**

$z = \sin u = \dfrac{x + y}{\sqrt{x} + \sqrt{y}}$ is homogeneous of degree $1 - \tfrac{1}{2} = \tfrac{1}{2}$.

**(i)** By Corollary I with $f(u) = \sin u$, $n = \tfrac{1}{2}$:

$$xu_x + yu_y = \frac{1}{2}\cdot\frac{\sin u}{\cos u} = \frac{1}{2}\tan u.$$

**(ii)** Here $g(u) = \tfrac{1}{2}\tan u$, so $g'(u) = \tfrac{1}{2}\sec^2 u$. By Corollary II,

$$x^2 u_{xx} + 2xy\,u_{xy} + y^2 u_{yy} = \frac{1}{2}\tan u\left(\frac{1}{2}\sec^2 u - 1\right) = \frac{\tan u}{4}\cdot\frac{1 - 2\cos^2 u}{\cos^2 u}.$$

Since $1 - 2\cos^2 u = -\cos 2u$,

$$= -\frac{\sin u \cos 2u}{4 \cos^3 u}. \;\blacksquare$$

**Que 1.21.** If $u = \cos^{-1}\left(\dfrac{x + y}{\sqrt x + \sqrt y}\right)$, prove that $xu_x + yu_y + \tfrac12\cot u = 0$, and hence find $x^2u_{xx} + 2xyu_{xy} + y^2u_{yy}$. [PYQ 2022-23]

**Answer:**

$z = \cos u = \dfrac{x+y}{\sqrt x + \sqrt y}$ is homogeneous of degree $\tfrac12$. With $f(u) = \cos u$, $f'(u) = -\sin u$:

$$xu_x + yu_y = \frac12\cdot\frac{\cos u}{-\sin u} = -\frac12\cot u,$$

that is, $xu_x + yu_y + \tfrac12\cot u = 0$.

**Second order.** $g(u) = -\tfrac12\cot u$, $g'(u) = \tfrac12\csc^2u$. By Corollary II,

$$x^2u_{xx} + 2xyu_{xy} + y^2u_{yy} = -\frac12\cot u\left(\frac12\csc^2 u - 1\right) = -\frac{\cot u}{4}\cdot\frac{1 - 2\sin^2u}{\sin^2u} = -\frac{\cos u\cos2u}{4\sin^3u}.$$

**Que 1.22.** If $u = \tan^{-1}\left(\dfrac{x^3 + y^3}{x - y}\right)$, show that $xu_x + yu_y = \sin 2u$ and $x^2 u_{xx} + 2xy\,u_{xy} + y^2 u_{yy} = \sin 4u - \sin 2u$.

**Answer:**

$z = \tan u = \dfrac{x^3 + y^3}{x - y}$ is homogeneous of degree $3 - 1 = 2$.

By Corollary I with $f(u) = \tan u$, $f'(u) = \sec^2 u$, $n = 2$:

$$xu_x + yu_y = 2\,\frac{\tan u}{\sec^2 u} = 2 \sin u \cos u = \sin 2u.$$

Now $g(u) = \sin 2u$ and $g'(u) = 2\cos 2u$. By Corollary II,

$$x^2 u_{xx} + 2xy\,u_{xy} + y^2 u_{yy} = \sin 2u\,(2\cos 2u - 1) = 2\sin 2u\cos 2u - \sin 2u = \sin 4u - \sin 2u. \;\blacksquare$$

**Que 1.23.** If $u = \log\left(\dfrac{x^4 + y^4}{x + y}\right)$, show that $xu_x + yu_y = 3$. Also, if $e^u = \dfrac{x^3 + y^3}{3x + 4y}$, show that $xu_x + yu_y = 2$.

**Answer:**

**First part.** $e^u = \dfrac{x^4 + y^4}{x+y}$ is homogeneous of degree $4 - 1 = 3$. With $f(u) = e^u$, $f'(u) = e^u$:

$$xu_x + yu_y = 3\cdot\frac{e^u}{e^u} = 3.$$

**Second part.** $e^u = \dfrac{x^3+y^3}{3x+4y}$ is homogeneous of degree $3 - 1 = 2$, so $xu_x + yu_y = 2\cdot\dfrac{e^u}{e^u} = 2$. $\blacksquare$

**Que 1.24.** If $u = x^n\phi\!\left(\dfrac yx\right) + x^{-n}\psi\!\left(\dfrac yx\right)$, show that $x^2u_{xx} + 2xyu_{xy} + y^2u_{yy} + xu_x + yu_y = n^2u$.

**Answer:**

Let $v = x^n\phi(y/x)$ (homogeneous of degree $n$) and $w = x^{-n}\psi(y/x)$ (homogeneous of degree $-n$). Then $u = v + w$.

Write $E_1(u) = xu_x + yu_y$ and $E_2(u) = x^2u_{xx} + 2xyu_{xy} + y^2u_{yy}$. Both are linear, so $E_1(u) = E_1(v) + E_1(w)$ and similarly for $E_2$.

By Euler's theorem and its second-order form:

$$E_1(v) = nv, \quad E_2(v) = n(n-1)v, \qquad E_1(w) = -nw, \quad E_2(w) = (-n)(-n-1)w = n(n+1)w.$$

Therefore

$$E_2(u) + E_1(u) = n(n-1)v + nv + n(n+1)w - nw = n^2v + n^2w = n^2u. \;\blacksquare$$

**Que 1.25.** If $u = \dfrac{x^2y^2}{x^2 + y^2} + \cos\left(\dfrac{xy}{x^2+y^2}\right)$, find $xu_x + yu_y$.

**Answer:**

$u$ is the sum of two homogeneous functions of **different** degrees, so Euler's theorem must be applied to each part separately.

$v = \dfrac{x^2y^2}{x^2+y^2}$ has degree $4 - 2 = 2$, so $xv_x + yv_y = 2v$.

$w = \cos\left(\dfrac{xy}{x^2+y^2}\right)$: the argument has degree 0, so $w$ has degree 0 and $xw_x + yw_y = 0$.

Hence

$$xu_x + yu_y = 2v = \frac{2x^2y^2}{x^2+y^2}.$$

**Common mistake:** writing "$u$ is homogeneous" when it is a sum of terms of different degrees. Always check each term's degree first.

### Part 4: Total Derivative, Chain Rule and Implicit Functions

**Concept**

Suppose $u = f(x,y)$, and $x$ and $y$ are not free but both depend on a third variable $t$ (for example, $x$ and $y$ are the coordinates of a moving particle at time $t$). Then $u$ is really a function of $t$ alone, and we may ask for $\dfrac{du}{dt}$. The change in $u$ comes from two sources: the change in $x$ and the change in $y$. The chain rule simply adds the two contributions:

$$\frac{du}{dt} = \underbrace{\frac{\partial u}{\partial x}\frac{dx}{dt}}_{\text{through } x} + \underbrace{\frac{\partial u}{\partial y}\frac{dy}{dt}}_{\text{through } y}.$$

This is called the **total derivative** of $u$ with respect to $t$, to distinguish it from the partial derivatives. The same idea, with partial derivatives on both sides, handles the case where $x$ and $y$ depend on two new variables $(r, \theta)$ or $(u, v)$: this is a **change of variables**.

A good way to remember the chain rule is a tree diagram: draw $u$ at the top, branches to $x$ and $y$, and from each of those branches to $t$. Multiply the derivatives along each path from $u$ to $t$, and add over the paths.

```text
            u
          /   \
     u_x /     \ u_y
        x       y
        |       |
  dx/dt |       | dy/dt
        t       t

  du/dt = u_x * dx/dt  +  u_y * dy/dt
```

**Que 1.26.** Define the total differential of $u = f(x,y)$. Derive the formula for the total derivative $\dfrac{du}{dt}$ when $x = \phi(t)$, $y = \psi(t)$. Explain the difference between the total and partial derivatives. [PYQ 2024-25]

**Answer:**

**Total differential.** If $u = f(x,y)$ and $x, y$ receive small increments $dx, dy$, the corresponding principal change in $u$ is

$$du = \frac{\partial u}{\partial x}dx + \frac{\partial u}{\partial y}dy.$$

For three variables, $du = u_x\,dx + u_y\,dy + u_z\,dz$.

**Derivation of the total derivative.** Let $t$ increase by $\delta t$, and let the corresponding increments be $\delta x$, $\delta y$, $\delta u$. Then

$$\delta u = f(x + \delta x, y + \delta y) - f(x,y)$$

$$= \underbrace{\left[f(x+\delta x, y+\delta y) - f(x, y + \delta y)\right]}_{\text{change in } x \text{ only}} + \underbrace{\left[f(x, y + \delta y) - f(x,y)\right]}_{\text{change in } y \text{ only}}.$$

By the mean value theorem of one variable, the first bracket equals $\delta x\,f_x(x + \theta_1\delta x, y + \delta y)$ and the second equals $\delta y\,f_y(x, y + \theta_2\delta y)$ for some $\theta_1, \theta_2 \in (0,1)$. Divide by $\delta t$:

$$\frac{\delta u}{\delta t} = f_x(x + \theta_1\delta x, y + \delta y)\frac{\delta x}{\delta t} + f_y(x, y + \theta_2\delta y)\frac{\delta y}{\delta t}.$$

As $\delta t \to 0$, $\delta x, \delta y \to 0$, and by continuity of $f_x, f_y$:

$$\frac{du}{dt} = \frac{\partial u}{\partial x}\frac{dx}{dt} + \frac{\partial u}{\partial y}\frac{dy}{dt}. \;\blacksquare$$

**Partial versus total derivative.**

| Partial derivative $\dfrac{\partial u}{\partial x}$ | Total derivative $\dfrac{du}{dt}$ |
|---|---|
| Rate of change of $u$ with $x$ when all other variables are **held constant** | Rate of change of $u$ with $t$ when **all** the variables of $u$ change with $t$ |
| Used when the variables are independent | Used when the variables depend on one common variable |
| Measures change in one direction only | Adds up the effect through every variable |

Special case: if $y$ is a function of $x$, then $u = f(x, y(x))$ and

$$\frac{du}{dx} = \frac{\partial u}{\partial x} + \frac{\partial u}{\partial y}\frac{dy}{dx}.$$

Here $\dfrac{du}{dx}$ (total) and $\dfrac{\partial u}{\partial x}$ (partial) are different quantities.

**Que 1.27.** If $u = x^2 + y^2$ with $x = at^2$, $y = 2at$, find $\dfrac{du}{dt}$ by the chain rule and verify the result by direct substitution.

**Answer:**

**By the chain rule.** $u_x = 2x$, $u_y = 2y$, $\dfrac{dx}{dt} = 2at$, $\dfrac{dy}{dt} = 2a$.

$$\frac{du}{dt} = 2x\cdot2at + 2y\cdot2a = 2at^2\cdot2at + 4at\cdot2a = 4a^2t^3 + 8a^2t.$$

**Directly.** $u = a^2t^4 + 4a^2t^2$, so $\dfrac{du}{dt} = 4a^2t^3 + 8a^2t$. $\checkmark$

**Que 1.28.** If $u = \tan^{-1}\dfrac yx$, where $x = e^t - e^{-t}$ and $y = e^t + e^{-t}$, find $\dfrac{du}{dt}$.

**Answer:**

$$u_x = \frac{1}{1 + y^2/x^2}\cdot\left(-\frac{y}{x^2}\right) = -\frac{y}{x^2+y^2}, \qquad u_y = \frac{1}{1 + y^2/x^2}\cdot\frac1x = \frac{x}{x^2+y^2}.$$

$\dfrac{dx}{dt} = e^t + e^{-t} = y$ and $\dfrac{dy}{dt} = e^t - e^{-t} = x$. So

$$\frac{du}{dt} = -\frac{y}{x^2+y^2}\cdot y + \frac{x}{x^2+y^2}\cdot x = \frac{x^2 - y^2}{x^2 + y^2}.$$

Now $x^2 - y^2 = (e^t - e^{-t})^2 - (e^t + e^{-t})^2 = -4$ and $x^2 + y^2 = 2(e^{2t} + e^{-2t})$. Hence

$$\frac{du}{dt} = -\frac{2}{e^{2t} + e^{-2t}}.$$

**Que 1.29.** If $u = x\log(xy)$, where $x^3 + y^3 + 3xy = 1$, find $\dfrac{du}{dx}$.

**Answer:**

Here $y$ is a function of $x$ through the given relation, so we need the total derivative

$$\frac{du}{dx} = \frac{\partial u}{\partial x} + \frac{\partial u}{\partial y}\frac{dy}{dx}.$$

$u = x\log x + x\log y$, so $\dfrac{\partial u}{\partial x} = \log x + 1 + \log y = 1 + \log(xy)$ and $\dfrac{\partial u}{\partial y} = \dfrac xy$.

Differentiating $x^3 + y^3 + 3xy = 1$ with respect to $x$:

$$3x^2 + 3y^2\frac{dy}{dx} + 3y + 3x\frac{dy}{dx} = 0 \quad\Rightarrow\quad \frac{dy}{dx} = -\frac{x^2 + y}{y^2 + x}.$$

Therefore

$$\frac{du}{dx} = 1 + \log(xy) - \frac{x(x^2 + y)}{y(y^2 + x)}.$$

**Que 1.30.** Explain the differentiation of implicit functions using partial derivatives. Prove that if $f(x,y) = 0$ then

$$\frac{dy}{dx} = -\frac{f_x}{f_y}, \qquad \frac{d^2y}{dx^2} = -\frac{f_{xx}f_y^2 - 2f_{xy}f_xf_y + f_{yy}f_x^2}{f_y^3}.$$

Use it to find $\dfrac{dy}{dx}$ for $x^3 + y^3 = 3axy$ and for $x^y + y^x = c$.

**Answer:**

**First derivative.** Let $u = f(x,y)$ where $y$ is a function of $x$ defined by $f(x,y) = 0$. By the total derivative,

$$\frac{du}{dx} = f_x + f_y\frac{dy}{dx}.$$

But $u = 0$ for all $x$, so $\dfrac{du}{dx} = 0$, giving $\dfrac{dy}{dx} = -\dfrac{f_x}{f_y}$ (when $f_y \ne 0$).

**Second derivative.** Write $p = \dfrac{dy}{dx} = -\dfrac{f_x}{f_y}$. Differentiate with respect to $x$, remembering that $f_x$ and $f_y$ are functions of $x$ and $y$, and $y$ depends on $x$:

$$\frac{d}{dx}f_x = f_{xx} + f_{xy}p, \qquad \frac{d}{dx}f_y = f_{xy} + f_{yy}p.$$

$$\frac{d^2y}{dx^2} = -\frac{f_y(f_{xx} + f_{xy}p) - f_x(f_{xy} + f_{yy}p)}{f_y^2}.$$

Substituting $p = -f_x/f_y$ and multiplying numerator and denominator by $f_y$:

$$\frac{d^2y}{dx^2} = -\frac{f_{xx}f_y^2 - 2f_{xy}f_xf_y + f_{yy}f_x^2}{f_y^3}. \;\blacksquare$$

**Example 1.** $f = x^3 + y^3 - 3axy$: $f_x = 3x^2 - 3ay$, $f_y = 3y^2 - 3ax$.

$$\frac{dy}{dx} = -\frac{x^2 - ay}{y^2 - ax} = \frac{ay - x^2}{y^2 - ax}.$$

**Example 2.** $f = x^y + y^x - c$: $f_x = yx^{y-1} + y^x\log y$, $f_y = x^y\log x + xy^{x-1}$.

$$\frac{dy}{dx} = -\frac{yx^{y-1} + y^x\log y}{x^y\log x + xy^{x-1}}.$$

**Que 1.31.** If $z = f(x,y)$, where $x = e^u + e^{-v}$ and $y = e^{-u} - e^{v}$, prove that $\dfrac{\partial z}{\partial u} - \dfrac{\partial z}{\partial v} = x\dfrac{\partial z}{\partial x} - y\dfrac{\partial z}{\partial y}$. [PYQ 2023-24]

**Answer:**

$z$ depends on $u, v$ through $x$ and $y$. By the chain rule,

$$\frac{\partial z}{\partial u} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial u} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial u} = e^u\frac{\partial z}{\partial x} - e^{-u}\frac{\partial z}{\partial y},$$

$$\frac{\partial z}{\partial v} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial v} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial v} = -e^{-v}\frac{\partial z}{\partial x} - e^{v}\frac{\partial z}{\partial y}.$$

Subtracting,

$$\frac{\partial z}{\partial u} - \frac{\partial z}{\partial v} = (e^u + e^{-v})\frac{\partial z}{\partial x} - (e^{-u} - e^v)\frac{\partial z}{\partial y} = x\frac{\partial z}{\partial x} - y\frac{\partial z}{\partial y}. \;\blacksquare$$

**Que 1.32.** If $u = f(x - y,\, y - z,\, z - x)$, show that $\dfrac{\partial u}{\partial x} + \dfrac{\partial u}{\partial y} + \dfrac{\partial u}{\partial z} = 0$.

**Answer:**

Let $X = x - y$, $Y = y - z$, $Z = z - x$, so $u = f(X,Y,Z)$. By the chain rule,

$$u_x = f_X\cdot1 + f_Y\cdot0 + f_Z\cdot(-1) = f_X - f_Z,$$

$$u_y = f_X\cdot(-1) + f_Y\cdot1 + f_Z\cdot0 = -f_X + f_Y,$$

$$u_z = f_X\cdot0 + f_Y\cdot(-1) + f_Z\cdot1 = -f_Y + f_Z.$$

Adding, $u_x + u_y + u_z = 0$. $\blacksquare$

**Que 1.33.** If $u = f\left(\dfrac yx, \dfrac zx\right)$, show that $xu_x + yu_y + zu_z = 0$.

**Answer:**

Let $X = y/x$, $Y = z/x$. Then

$$u_x = f_X\left(-\frac{y}{x^2}\right) + f_Y\left(-\frac{z}{x^2}\right), \qquad u_y = f_X\cdot\frac1x, \qquad u_z = f_Y\cdot\frac1x.$$

$$xu_x + yu_y + zu_z = -\frac yx f_X - \frac zx f_Y + \frac yx f_X + \frac zx f_Y = 0. \;\blacksquare$$

(This also follows from Euler's theorem, since $u$ is homogeneous of degree 0.)

### Part 5: Change of Variables

**Concept**

Many problems are easier in another coordinate system. A circle $x^2 + y^2 = a^2$ is just $r = a$ in polar coordinates; a quantity that depends only on the distance from the origin is a function of $r$ alone. When we change variables, partial derivatives must be converted, and the chain rule does the conversion. The key point is to be clear about **which variables are held constant** in each partial derivative.

For example, with $x = r\cos\theta$, $y = r\sin\theta$:

- $\dfrac{\partial x}{\partial r} = \cos\theta$ (with $\theta$ constant), but
- $\dfrac{\partial r}{\partial x} = \dfrac{x}{r} = \cos\theta$ (with $y$ constant) only by coincidence; and $\dfrac{\partial \theta}{\partial x} = -\dfrac{y}{r^2} = -\dfrac{\sin\theta}{r}$, which is **not** $1\big/\dfrac{\partial x}{\partial\theta}$.

Never invert a partial derivative as if it were a fraction.

**Que 1.34.** If $z = f(x,y)$ and $x = r\cos\theta$, $y = r\sin\theta$, prove that

$$\left(\frac{\partial z}{\partial x}\right)^2 + \left(\frac{\partial z}{\partial y}\right)^2 = \left(\frac{\partial z}{\partial r}\right)^2 + \frac{1}{r^2}\left(\frac{\partial z}{\partial\theta}\right)^2.$$

**Answer:**

By the chain rule,

$$z_r = z_x\cos\theta + z_y\sin\theta, \qquad z_\theta = -z_x\,r\sin\theta + z_y\,r\cos\theta.$$

So $\dfrac{1}{r}z_\theta = -z_x\sin\theta + z_y\cos\theta$. Squaring and adding,

$$z_r^2 + \frac{1}{r^2}z_\theta^2 = z_x^2(\cos^2\theta + \sin^2\theta) + z_y^2(\sin^2\theta + \cos^2\theta) + 2z_xz_y(\cos\theta\sin\theta - \sin\theta\cos\theta) = z_x^2 + z_y^2. \;\blacksquare$$

**Que 1.35.** If $u = f(r)$, where $r^2 = x^2 + y^2$, prove that $\dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} = f''(r) + \dfrac{1}{r}f'(r)$. [PYQ 2024-25]

**Answer:**

From $r^2 = x^2 + y^2$: $2r\dfrac{\partial r}{\partial x} = 2x$, so $\dfrac{\partial r}{\partial x} = \dfrac xr$; similarly $\dfrac{\partial r}{\partial y} = \dfrac yr$.

$$\frac{\partial u}{\partial x} = f'(r)\frac{x}{r}.$$

Differentiate again with respect to $x$ (product of three factors $f'(r)$, $x$ and $\tfrac1r$):

$$\frac{\partial^2 u}{\partial x^2} = f''(r)\frac{x}{r}\cdot\frac{x}{r} + f'(r)\cdot\frac{1}{r} + f'(r)\,x\left(-\frac{1}{r^2}\right)\frac{x}{r} = f''(r)\frac{x^2}{r^2} + f'(r)\left(\frac1r - \frac{x^2}{r^3}\right).$$

Similarly

$$\frac{\partial^2 u}{\partial y^2} = f''(r)\frac{y^2}{r^2} + f'(r)\left(\frac1r - \frac{y^2}{r^3}\right).$$

Adding, and using $x^2 + y^2 = r^2$:

$$u_{xx} + u_{yy} = f''(r)\cdot\frac{r^2}{r^2} + f'(r)\left(\frac2r - \frac{r^2}{r^3}\right) = f''(r) + \frac1r f'(r). \;\blacksquare$$

**Extension (three variables).** If $u = f(r)$ with $r^2 = x^2 + y^2 + z^2$, the same steps give $u_{xx} + u_{yy} + u_{zz} = f''(r) + \dfrac2r f'(r)$.

**Que 1.36.** If $x = u + v$ and $y = uv$, and $z$ is a function of $x$ and $y$, show that $u\dfrac{\partial z}{\partial u} + v\dfrac{\partial z}{\partial v} = x\dfrac{\partial z}{\partial x} + 2y\dfrac{\partial z}{\partial y}$.

**Answer:**

$\dfrac{\partial x}{\partial u} = 1$, $\dfrac{\partial y}{\partial u} = v$, $\dfrac{\partial x}{\partial v} = 1$, $\dfrac{\partial y}{\partial v} = u$. By the chain rule,

$$z_u = z_x + vz_y, \qquad z_v = z_x + uz_y.$$

$$uz_u + vz_v = (u + v)z_x + 2uv\,z_y = xz_x + 2yz_y. \;\blacksquare$$

**Que 1.37.** If $u = f(2x - 3y,\, 3y - 4z,\, 4z - 2x)$, prove that $\dfrac{1}{2}u_x + \dfrac13u_y + \dfrac14u_z = 0$.

**Answer:**

Let $X = 2x - 3y$, $Y = 3y - 4z$, $Z = 4z - 2x$.

$$u_x = 2f_X - 2f_Z, \qquad u_y = -3f_X + 3f_Y, \qquad u_z = -4f_Y + 4f_Z.$$

$$\frac12u_x + \frac13u_y + \frac14u_z = (f_X - f_Z) + (-f_X + f_Y) + (-f_Y + f_Z) = 0. \;\blacksquare$$

### Part 6: Jacobians

**Concept**

When we change from variables $(x, y)$ to new variables $(u, v)$, a small rectangle in the $uv$-plane becomes a small curved parallelogram in the $xy$-plane. The Jacobian is the factor by which areas are multiplied in this change:

$$dx\,dy = \left|\frac{\partial(x,y)}{\partial(u,v)}\right|du\,dv.$$

For polar coordinates the Jacobian is $r$, which is why $dx\,dy = r\,dr\,d\theta$ in Unit 2. The Jacobian also answers two other questions:

- **Can the change be reversed?** If the Jacobian is not zero, the new variables can be solved back for the old ones (locally).
- **Are the functions independent?** If the Jacobian of $u, v$ with respect to $x, y$ is identically zero, then $u$ and $v$ are tied by a relation $F(u,v) = 0$; they are functionally dependent.

**Que 1.38.** Define the Jacobian of two and of three functions. State its important properties and its applications. [PYQ 2024-25]

**Answer:**

**Definition.** If $u$ and $v$ are functions of $x$ and $y$, the **Jacobian** of $u, v$ with respect to $x, y$ is the determinant

$$J = \frac{\partial(u,v)}{\partial(x,y)} = \begin{vmatrix} u_x & u_y \\ v_x & v_y \end{vmatrix}.$$

For three functions $u, v, w$ of $x, y, z$:

$$\frac{\partial(u,v,w)}{\partial(x,y,z)} = \begin{vmatrix} u_x & u_y & u_z \\ v_x & v_y & v_z \\ w_x & w_y & w_z \end{vmatrix}.$$

It is also written $J\left(\dfrac{u,v}{x,y}\right)$.

**Properties**

1. **Inverse property.** If $J = \dfrac{\partial(u,v)}{\partial(x,y)}$ and $J' = \dfrac{\partial(x,y)}{\partial(u,v)}$, then $JJ' = 1$.
2. **Chain rule.** If $u, v$ are functions of $r, s$ and $r, s$ are functions of $x, y$, then $\dfrac{\partial(u,v)}{\partial(x,y)} = \dfrac{\partial(u,v)}{\partial(r,s)}\cdot\dfrac{\partial(r,s)}{\partial(x,y)}$.
3. **Functional dependence.** $u$ and $v$ are functionally dependent (related by some $F(u,v) = 0$) if and only if $\dfrac{\partial(u,v)}{\partial(x,y)} = 0$ identically.
4. **Implicit functions.** If $u, v$ are given implicitly by $f_1(u,v,x,y) = 0$, $f_2(u,v,x,y) = 0$, then
$$\frac{\partial(u,v)}{\partial(x,y)} = (-1)^2\,\frac{\partial(f_1,f_2)/\partial(x,y)}{\partial(f_1,f_2)/\partial(u,v)},$$
and for three functions the factor is $(-1)^3$.

**Applications**

- Change of variables in double and triple integrals: $dx\,dy = |J|\,du\,dv$.
- Testing functional dependence of functions.
- Testing whether a transformation can be inverted (it can, locally, when $J \ne 0$).
- Partial derivatives of implicitly defined functions.
- In mechanics and fluid flow, the Jacobian measures how a deformation changes area or volume.

**Que 1.39.** Prove that $JJ' = 1$ for two variables.

**Answer:**

Let $u = u(x,y)$, $v = v(x,y)$, and suppose they can be solved as $x = x(u,v)$, $y = y(u,v)$. Since $u$ is a function of $x, y$, which are functions of $u, v$, the chain rule gives

$$\frac{\partial u}{\partial u} = 1 = u_x x_u + u_y y_u, \qquad \frac{\partial u}{\partial v} = 0 = u_x x_v + u_y y_v,$$

$$\frac{\partial v}{\partial u} = 0 = v_x x_u + v_y y_u, \qquad \frac{\partial v}{\partial v} = 1 = v_x x_v + v_y y_v.$$

Multiplying determinants row by column,

$$JJ' = \begin{vmatrix} u_x & u_y \\ v_x & v_y \end{vmatrix}\begin{vmatrix} x_u & x_v \\ y_u & y_v \end{vmatrix} = \begin{vmatrix} u_xx_u + u_yy_u & u_xx_v + u_yy_v \\ v_xx_u + v_yy_u & v_xx_v + v_yy_v \end{vmatrix} = \begin{vmatrix} 1 & 0 \\ 0 & 1\end{vmatrix} = 1. \;\blacksquare$$

**Que 1.40.** Find the Jacobian for (i) polar coordinates $x = r\cos\theta$, $y = r\sin\theta$, (ii) cylindrical coordinates, (iii) spherical coordinates $x = r\sin\theta\cos\phi$, $y = r\sin\theta\sin\phi$, $z = r\cos\theta$. Hence write $\dfrac{\partial(r,\theta)}{\partial(x,y)}$. [PYQ 2021-22, 2025-26]

**Answer:**

**(i) Polar.**

$$\frac{\partial(x,y)}{\partial(r,\theta)} = \begin{vmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta\end{vmatrix} = r\cos^2\theta + r\sin^2\theta = r.$$

By $JJ' = 1$, $\dfrac{\partial(r,\theta)}{\partial(x,y)} = \dfrac1r$.

**(ii) Cylindrical** ($x = r\cos\theta$, $y = r\sin\theta$, $z = z$):

$$\frac{\partial(x,y,z)}{\partial(r,\theta,z)} = \begin{vmatrix} \cos\theta & -r\sin\theta & 0 \\ \sin\theta & r\cos\theta & 0 \\ 0 & 0 & 1\end{vmatrix} = r.$$

**(iii) Spherical.**

$$\frac{\partial(x,y,z)}{\partial(r,\theta,\phi)} = \begin{vmatrix} \sin\theta\cos\phi & r\cos\theta\cos\phi & -r\sin\theta\sin\phi \\ \sin\theta\sin\phi & r\cos\theta\sin\phi & r\sin\theta\cos\phi \\ \cos\theta & -r\sin\theta & 0\end{vmatrix}.$$

Expand along the third row:

$$= \cos\theta\left(r^2\sin\theta\cos\theta\cos^2\phi + r^2\sin\theta\cos\theta\sin^2\phi\right) + r\sin\theta\left(r\sin^2\theta\cos^2\phi + r\sin^2\theta\sin^2\phi\right)$$

$$= r^2\sin\theta\cos^2\theta + r^2\sin^3\theta = r^2\sin\theta.$$

So $dx\,dy\,dz = r^2\sin\theta\,dr\,d\theta\,d\phi$.

**Que 1.41.** If $x = u(1 - v)$ and $y = uv$, find $J = \dfrac{\partial(x,y)}{\partial(u,v)}$ and $J' = \dfrac{\partial(u,v)}{\partial(x,y)}$, and verify that $JJ' = 1$.

**Answer:**

$$J = \begin{vmatrix} 1 - v & -u \\ v & u\end{vmatrix} = u(1 - v) + uv = u.$$

**Solving for $u, v$:** adding, $x + y = u$, and $v = \dfrac{y}{u} = \dfrac{y}{x+y}$.

$$u_x = 1,\quad u_y = 1, \quad v_x = -\frac{y}{(x+y)^2}, \quad v_y = \frac{x}{(x+y)^2}.$$

$$J' = \begin{vmatrix} 1 & 1 \\ -\dfrac{y}{(x+y)^2} & \dfrac{x}{(x+y)^2}\end{vmatrix} = \frac{x + y}{(x+y)^2} = \frac{1}{x+y} = \frac1u.$$

So $JJ' = u\cdot\dfrac1u = 1$. $\checkmark$

**Que 1.42.** If $u = xyz$, $v = x^2 + y^2 + z^2$ and $w = x + y + z$, find $\dfrac{\partial(u,v,w)}{\partial(x,y,z)}$. [PYQ 2024-25]

**Answer:**

$$J = \begin{vmatrix} yz & xz & xy \\ 2x & 2y & 2z \\ 1 & 1 & 1\end{vmatrix} = 2\begin{vmatrix} yz & xz & xy \\ x & y & z \\ 1 & 1 & 1\end{vmatrix}.$$

Apply $C_1 \to C_1 - C_2$ and $C_2 \to C_2 - C_3$:

$$= 2\begin{vmatrix} z(y - x) & x(z - y) & xy \\ x - y & y - z & z \\ 0 & 0 & 1\end{vmatrix}.$$

Take $(x - y)$ out of column 1 and $(y - z)$ out of column 2:

$$= 2(x - y)(y - z)\begin{vmatrix} -z & -x & xy \\ 1 & 1 & z \\ 0 & 0 & 1\end{vmatrix} = 2(x-y)(y-z)(-z + x) = 2(x-y)(y-z)(x-z).$$

So

$$\frac{\partial(u,v,w)}{\partial(x,y,z)} = -2(x - y)(y - z)(z - x).$$

**Que 1.43.** If $u = x + y + z$, $uv = y + z$, $uvw = z$, show that $\dfrac{\partial(x,y,z)}{\partial(u,v,w)} = u^2v$.

**Answer:**

Solve for $x, y, z$: $z = uvw$; $y = uv - z = uv(1 - w)$; $x = u - (y + z) = u - uv = u(1 - v)$.

$$\frac{\partial(x,y,z)}{\partial(u,v,w)} = \begin{vmatrix} 1 - v & -u & 0 \\ v(1-w) & u(1-w) & -uv \\ vw & uw & uv\end{vmatrix}.$$

Add row 3 to row 2: $R_2 \to R_2 + R_3$ gives the row $(v, u, 0)$. Then

$$= \begin{vmatrix} 1 - v & -u & 0 \\ v & u & 0 \\ vw & uw & uv\end{vmatrix} = uv\begin{vmatrix} 1 - v & -u \\ v & u\end{vmatrix} = uv\left[u(1 - v) + uv\right] = u^2v. \;\blacksquare$$

**Que 1.44.** If $u^3 + v^3 = x + y$ and $u^2 + v^2 = x^3 + y^3$, show that $\dfrac{\partial(u,v)}{\partial(x,y)} = \dfrac{y^2 - x^2}{2uv(u - v)}$. [PYQ 2023-24]

**Answer:**

Here $u, v$ are given **implicitly**. Write

$$f_1 = u^3 + v^3 - x - y = 0, \qquad f_2 = u^2 + v^2 - x^3 - y^3 = 0.$$

By Property 4,

$$\frac{\partial(u,v)}{\partial(x,y)} = (-1)^2\frac{\partial(f_1,f_2)/\partial(x,y)}{\partial(f_1,f_2)/\partial(u,v)}.$$

$$\frac{\partial(f_1,f_2)}{\partial(x,y)} = \begin{vmatrix} -1 & -1 \\ -3x^2 & -3y^2\end{vmatrix} = 3y^2 - 3x^2, \qquad \frac{\partial(f_1,f_2)}{\partial(u,v)} = \begin{vmatrix} 3u^2 & 3v^2 \\ 2u & 2v\end{vmatrix} = 6uv(u - v).$$

$$\therefore\ \frac{\partial(u,v)}{\partial(x,y)} = \frac{3(y^2 - x^2)}{6uv(u - v)} = \frac{y^2 - x^2}{2uv(u - v)}. \;\blacksquare$$

**Que 1.45.** If $u, v, w$ are the roots of the equation $(\lambda - x)^3 + (\lambda - y)^3 + (\lambda - z)^3 = 0$ in $\lambda$, find $\dfrac{\partial(u,v,w)}{\partial(x,y,z)}$. [PYQ 2021-22]

**Answer:**

**Step 1: the cubic.** Expanding,

$$3\lambda^3 - 3(x + y + z)\lambda^2 + 3(x^2 + y^2 + z^2)\lambda - (x^3 + y^3 + z^3) = 0.$$

Its roots are $u, v, w$, so by the relations between roots and coefficients,

$$u + v + w = x + y + z, \quad uv + vw + wu = x^2 + y^2 + z^2, \quad uvw = \tfrac13(x^3 + y^3 + z^3).$$

**Step 2: implicit functions.** Write

$$f_1 = u + v + w - (x + y + z), \quad f_2 = uv + vw + wu - (x^2+y^2+z^2), \quad f_3 = uvw - \tfrac13(x^3+y^3+z^3).$$

Then

$$\frac{\partial(u,v,w)}{\partial(x,y,z)} = (-1)^3\,\frac{\partial(f_1,f_2,f_3)/\partial(x,y,z)}{\partial(f_1,f_2,f_3)/\partial(u,v,w)}.$$

**Step 3: numerator.**

$$\frac{\partial(f_1,f_2,f_3)}{\partial(x,y,z)} = \begin{vmatrix} -1 & -1 & -1 \\ -2x & -2y & -2z \\ -x^2 & -y^2 & -z^2\end{vmatrix} = -2\begin{vmatrix} 1 & 1 & 1 \\ x & y & z \\ x^2 & y^2 & z^2\end{vmatrix} = -2(x - y)(y - z)(z - x).$$

(The last determinant is the Vandermonde determinant: $\begin{vmatrix} 1 & 1 & 1 \\ x & y & z \\ x^2 & y^2 & z^2\end{vmatrix} = (y - x)(z - x)(z - y) = (x-y)(y-z)(z-x)$.)

**Step 4: denominator.**

$$\frac{\partial(f_1,f_2,f_3)}{\partial(u,v,w)} = \begin{vmatrix} 1 & 1 & 1 \\ v + w & w + u & u + v \\ vw & wu & uv\end{vmatrix} = -(u - v)(v - w)(w - u).$$

(Use $C_1 \to C_1 - C_2$, $C_2 \to C_2 - C_3$ and take out the factors $(u - v)$ and $(v - w)$, exactly as in Que 1.42.)

**Step 5: result.**

$$\frac{\partial(u,v,w)}{\partial(x,y,z)} = -\frac{-2(x - y)(y - z)(z - x)}{-(u - v)(v - w)(w - u)} = -\frac{2(x - y)(y - z)(z - x)}{(u - v)(v - w)(w - u)}.$$

**Que 1.46.** State the condition for functional dependence. Show that $u = \dfrac{x + y}{1 - xy}$ and $v = \tan^{-1}x + \tan^{-1}y$ are functionally dependent, and find the relation between them.

**Answer:**

**Condition.** Functions $u(x,y)$, $v(x,y)$ are functionally dependent if and only if $\dfrac{\partial(u,v)}{\partial(x,y)} = 0$ identically. (For three functions, the $3\times3$ Jacobian must vanish.)

$$u_x = \frac{(1 - xy) + y(x + y)}{(1 - xy)^2} = \frac{1 + y^2}{(1 - xy)^2}, \qquad u_y = \frac{1 + x^2}{(1 - xy)^2}, \qquad v_x = \frac{1}{1 + x^2}, \qquad v_y = \frac{1}{1 + y^2}.$$

$$J = \frac{1 + y^2}{(1 - xy)^2}\cdot\frac{1}{1 + y^2} - \frac{1 + x^2}{(1 - xy)^2}\cdot\frac{1}{1 + x^2} = \frac{1}{(1-xy)^2} - \frac{1}{(1-xy)^2} = 0.$$

So $u$ and $v$ are functionally dependent. **Relation:** $v = \tan^{-1}x + \tan^{-1}y = \tan^{-1}\dfrac{x + y}{1 - xy} = \tan^{-1}u$, that is, $u = \tan v$.

**Que 1.47.** Show that $u = x + y - z$, $v = x - y + z$, $w = x^2 + y^2 + z^2 - 2yz$ are functionally dependent, and find the relation between them. [PYQ 2022-23 type]

**Answer:**

$$J = \begin{vmatrix} 1 & 1 & -1 \\ 1 & -1 & 1 \\ 2x & 2y - 2z & 2z - 2y\end{vmatrix}.$$

Add column 3 to column 2 ($C_2 \to C_2 + C_3$): the second column becomes $(0, 0, 0)$. So $J = 0$ and the functions are dependent.

**Relation.** $u + v = 2x$ and $u - v = 2(y - z)$. Then

$$u^2 + v^2 = \frac{(u + v)^2 + (u - v)^2}{2} = \frac{4x^2 + 4(y - z)^2}{2} = 2\left[x^2 + y^2 + z^2 - 2yz\right] = 2w.$$

The relation is $u^2 + v^2 = 2w$.

**Que 1.48.** If $y_1 = \dfrac{x_2x_3}{x_1}$, $y_2 = \dfrac{x_3x_1}{x_2}$, $y_3 = \dfrac{x_1x_2}{x_3}$, show that $\dfrac{\partial(y_1,y_2,y_3)}{\partial(x_1,x_2,x_3)} = 4$. Are $y_1, y_2, y_3$ functionally dependent?

**Answer:**

$$J = \begin{vmatrix} -\dfrac{x_2x_3}{x_1^2} & \dfrac{x_3}{x_1} & \dfrac{x_2}{x_1} \\[2mm] \dfrac{x_3}{x_2} & -\dfrac{x_3x_1}{x_2^2} & \dfrac{x_1}{x_2} \\[2mm] \dfrac{x_2}{x_3} & \dfrac{x_1}{x_3} & -\dfrac{x_1x_2}{x_3^2}\end{vmatrix}.$$

Multiply row 1 by $x_1$, row 2 by $x_2$ and row 3 by $x_3$; to keep the value unchanged, divide by $x_1x_2x_3$ outside:

$$J = \frac{1}{x_1x_2x_3}\begin{vmatrix} -\dfrac{x_2x_3}{x_1} & x_3 & x_2 \\[2mm] x_3 & -\dfrac{x_3x_1}{x_2} & x_1 \\[2mm] x_2 & x_1 & -\dfrac{x_1x_2}{x_3}\end{vmatrix}.$$

Now multiply column 1 by $x_1$, column 2 by $x_2$, column 3 by $x_3$ (dividing by $x_1x_2x_3$ again):

$$J = \frac{1}{(x_1x_2x_3)^2}\begin{vmatrix} -x_2x_3 & x_2x_3 & x_2x_3 \\ x_3x_1 & -x_3x_1 & x_3x_1 \\ x_1x_2 & x_1x_2 & -x_1x_2\end{vmatrix} = \frac{(x_2x_3)(x_3x_1)(x_1x_2)}{(x_1x_2x_3)^2}\begin{vmatrix} -1 & 1 & 1 \\ 1 & -1 & 1 \\ 1 & 1 & -1\end{vmatrix}.$$

The numerical determinant is $-1(1 - 1) - 1(-1 - 1) + 1(1 + 1) = 0 + 2 + 2 = 4$. Hence $J = 4$.

Since $J = 4 \ne 0$, the functions $y_1, y_2, y_3$ are **not** functionally dependent.

**Remember:**

- Polar $J = r$; cylindrical $J = r$; spherical $J = r^2\sin\theta$.
- $JJ' = 1$; Jacobian $= 0$ identically means functional dependence.
- Implicit: $\dfrac{\partial(u,v)}{\partial(x,y)} = (-1)^n\dfrac{\partial(f)/\partial(x,y)}{\partial(f)/\partial(u,v)}$ with $n$ the number of functions.

### Part 7: Taylor's Series for Functions of Two Variables

**Concept**

In one variable, Taylor's series writes a function near a point $a$ as a polynomial in $h = x - a$:

$$f(a + h) = f(a) + hf'(a) + \frac{h^2}{2!}f''(a) + \cdots$$

The polynomial matches the value, the slope, the bending and so on of $f$ at $a$. For a function of two variables we do the same near a point $(a,b)$, with two small steps $h = x - a$ and $k = y - b$. The first-degree terms describe the tangent plane; the second-degree terms describe how the surface curves away from it. This is exactly why Taylor's series is the tool behind the test for maxima and minima in Part 8, and why it gives good numerical approximations.

This topic is not named separately in the AAS103D syllabus, but it was asked in every BAS103 paper from 2021-22 to 2025-26 and it is needed to understand Part 8, so it is included here.

**Que 1.49.** State Taylor's theorem for a function of two variables, and write the series in powers of $(x - a)$ and $(y - b)$. Write Maclaurin's series as a special case.

**Answer:**

**Statement.** If $f(x,y)$ and all its partial derivatives up to order $n$ are continuous near $(a,b)$, then

$$f(a + h, b + k) = f(a,b) + \left(h\frac{\partial}{\partial x} + k\frac{\partial}{\partial y}\right)f + \frac{1}{2!}\left(h\frac{\partial}{\partial x} + k\frac{\partial}{\partial y}\right)^2f + \cdots + \frac{1}{(n-1)!}\left(h\frac{\partial}{\partial x} + k\frac{\partial}{\partial y}\right)^{n-1}f + R_n,$$

where all derivatives are evaluated at $(a,b)$ and $R_n$ is the remainder.

**Written out**, with $h = x - a$, $k = y - b$ and every derivative at $(a,b)$:

$$f(x,y) = f + \left[hf_x + kf_y\right] + \frac{1}{2!}\left[h^2f_{xx} + 2hkf_{xy} + k^2f_{yy}\right] + \frac{1}{3!}\left[h^3f_{xxx} + 3h^2kf_{xxy} + 3hk^2f_{xyy} + k^3f_{yyy}\right] + \cdots$$

The coefficients $1, 2, 1$ and $1, 3, 3, 1$ are the binomial coefficients, because $\left(h\partial_x + k\partial_y\right)^n$ is expanded like $(a + b)^n$.

**Proof idea.** Fix $(a,b)$, $(h,k)$ and put $F(t) = f(a + ht, b + kt)$, a function of one variable. By the chain rule, $F'(t) = (h\partial_x + k\partial_y)f$, $F''(t) = (h\partial_x + k\partial_y)^2 f$, and so on. Maclaurin's series of $F(t)$ evaluated at $t = 1$ gives the result.

**Maclaurin's series** is the case $(a,b) = (0,0)$, $h = x$, $k = y$:

$$f(x,y) = f(0,0) + \left[xf_x + yf_y\right] + \frac{1}{2!}\left[x^2f_{xx} + 2xyf_{xy} + y^2f_{yy}\right] + \cdots$$

**Que 1.50.** Expand $e^x\cos y$ in powers of $(x - 1)$ and $\left(y - \dfrac\pi4\right)$ up to second-degree terms. [PYQ 2023-24]

**Answer:**

Let $h = x - 1$, $k = y - \tfrac\pi4$. At $\left(1, \tfrac\pi4\right)$, $\cos y = \sin y = \tfrac{1}{\sqrt2}$, so:

| Derivative | Expression | Value at $(1, \pi/4)$ |
|---|---|---|
| $f$ | $e^x\cos y$ | $\dfrac{e}{\sqrt2}$ |
| $f_x$ | $e^x\cos y$ | $\dfrac{e}{\sqrt2}$ |
| $f_y$ | $-e^x\sin y$ | $-\dfrac{e}{\sqrt2}$ |
| $f_{xx}$ | $e^x\cos y$ | $\dfrac{e}{\sqrt2}$ |
| $f_{xy}$ | $-e^x\sin y$ | $-\dfrac{e}{\sqrt2}$ |
| $f_{yy}$ | $-e^x\cos y$ | $-\dfrac{e}{\sqrt2}$ |

By Taylor's series,

$$e^x\cos y = \frac{e}{\sqrt2}\left[1 + h - k + \frac{1}{2}\left(h^2 - 2hk - k^2\right)\right] + \cdots$$

$$= \frac{e}{\sqrt2}\left[1 + (x - 1) - \left(y - \frac\pi4\right) + \frac12(x - 1)^2 - (x - 1)\left(y - \frac\pi4\right) - \frac12\left(y - \frac\pi4\right)^2\right] + \cdots$$

**Que 1.51.** Expand $f(x,y) = x^y$ about $(1,1)$ up to second-degree terms, and hence evaluate $(1.03)^{1.02}$. [PYQ 2022-23]

**Answer:**

Write $f = x^y = e^{y\log x}$. Then

$$f_x = yx^{y-1}, \quad f_y = x^y\log x, \quad f_{xx} = y(y - 1)x^{y-2}, \quad f_{xy} = x^{y-1} + yx^{y-1}\log x, \quad f_{yy} = x^y(\log x)^2.$$

At $(1,1)$ (where $\log 1 = 0$): $f = 1$, $f_x = 1$, $f_y = 0$, $f_{xx} = 0$, $f_{xy} = 1$, $f_{yy} = 0$.

With $h = x - 1$, $k = y - 1$:

$$x^y = 1 + h + \frac{1}{2!}\left(2hk\right) + \cdots = 1 + (x - 1) + (x - 1)(y - 1) + \cdots$$

**Approximation.** For $(1.03)^{1.02}$: $h = 0.03$, $k = 0.02$.

$$(1.03)^{1.02} \approx 1 + 0.03 + 0.03\times0.02 = 1.0306.$$

(The calculator value is $1.03061$, so the approximation is very good.)

**Que 1.52.** Expand $e^x\log(1 + y)$ in powers of $x$ and $y$ up to terms of the third degree. [PYQ 2021-22]

**Answer:**

**Short method (product of known series).** Using $e^x = 1 + x + \dfrac{x^2}{2} + \cdots$ and $\log(1 + y) = y - \dfrac{y^2}{2} + \dfrac{y^3}{3} - \cdots$, multiply and keep terms of total degree at most 3:

$$e^x\log(1 + y) = \left(1 + x + \frac{x^2}{2}\right)\left(y - \frac{y^2}{2} + \frac{y^3}{3}\right) + \cdots = y + xy - \frac{y^2}{2} + \frac{x^2y}{2} - \frac{xy^2}{2} + \frac{y^3}{3} + \cdots$$

**Check by Maclaurin's formula.** $f(0,0) = 0$; $f_x = e^x\log(1+y) = 0$; $f_y = \dfrac{e^x}{1+y} = 1$; $f_{xx} = 0$; $f_{xy} = 1$; $f_{yy} = -1$; $f_{xxx} = 0$; $f_{xxy} = 1$; $f_{xyy} = -1$; $f_{yyy} = 2$ (all at the origin). So

$$f = y + \frac{1}{2}(2xy - y^2) + \frac16\left(3x^2y - 3xy^2 + 2y^3\right) + \cdots,$$

which is the same. These are the first six terms.

**Que 1.53.** Expand $x^2y + 3y - 2$ in powers of $(x - 1)$ and $(y + 2)$ using Taylor's theorem. [PYQ 2025-26 type]

**Answer:**

Expand about $(1, -2)$ with $h = x - 1$, $k = y + 2$. Since $f$ is a polynomial of degree 3, the series ends after the third-degree terms.

| Derivative | Expression | Value at $(1,-2)$ |
|---|---|---|
| $f$ | $x^2y + 3y - 2$ | $-2 - 6 - 2 = -10$ |
| $f_x$ | $2xy$ | $-4$ |
| $f_y$ | $x^2 + 3$ | $4$ |
| $f_{xx}$ | $2y$ | $-4$ |
| $f_{xy}$ | $2x$ | $2$ |
| $f_{yy}$ | $0$ | $0$ |
| $f_{xxy}$ | $2$ | $2$ |
| $f_{xxx}, f_{xyy}, f_{yyy}$ | $0$ | $0$ |

$$f = -10 + (-4h + 4k) + \frac{1}{2}\left(-4h^2 + 2\cdot2hk\right) + \frac16\left(3h^2k\cdot2\right)$$

$$= -10 - 4(x - 1) + 4(y + 2) - 2(x - 1)^2 + 2(x - 1)(y + 2) + (x - 1)^2(y + 2).$$

**Check:** put $x = 2, y = 0$: left side $0 + 0 - 2 = -2$; right side $-10 - 4 + 8 - 2 + 4 + 2 = -2$. $\checkmark$

**Que 1.54.** Expand $\tan^{-1}\dfrac yx$ about $(1,1)$ up to second-degree terms.

**Answer:**

$$f_x = -\frac{y}{x^2+y^2}, \quad f_y = \frac{x}{x^2+y^2}, \quad f_{xx} = \frac{2xy}{(x^2+y^2)^2}, \quad f_{xy} = \frac{y^2 - x^2}{(x^2+y^2)^2}, \quad f_{yy} = -\frac{2xy}{(x^2+y^2)^2}.$$

At $(1,1)$: $f = \tfrac\pi4$, $f_x = -\tfrac12$, $f_y = \tfrac12$, $f_{xx} = \tfrac12$, $f_{xy} = 0$, $f_{yy} = -\tfrac12$. So

$$\tan^{-1}\frac yx = \frac\pi4 - \frac12(x - 1) + \frac12(y - 1) + \frac14(x - 1)^2 - \frac14(y - 1)^2 + \cdots$$

### Part 8: Maxima and Minima of Functions of Two Variables

**Concept**

Think of the surface $z = f(x,y)$ as a landscape. A **maximum** is a hilltop, a **minimum** is the bottom of a valley, and a **saddle point** is a mountain pass: going one way you climb, going the other way you descend. At all three the surface is flat (horizontal tangent plane), so $f_x = f_y = 0$ there. These are called **stationary points**. To decide which kind a stationary point is, we look at how the surface bends, which is measured by the second derivatives $r = f_{xx}$, $s = f_{xy}$, $t = f_{yy}$.

**Que 1.55.** Define maximum, minimum, stationary point and saddle point of $f(x,y)$. Derive the conditions for $f(x,y)$ to have a maximum or a minimum, and write Lagrange's working rule.

**Answer:**

**Definitions.** $f$ has a **(local) maximum** at $(a,b)$ if $f(a + h, b + k) < f(a,b)$ for all small $h, k$ not both zero, and a **(local) minimum** if $f(a+h, b+k) > f(a,b)$. The value is then called an **extreme value**. A point where $f_x = f_y = 0$ is a **stationary (critical) point**. A stationary point that is neither a maximum nor a minimum is a **saddle point**.

**Necessary condition.** If $f$ has an extreme value at $(a,b)$ then $f_x(a,b) = 0$ and $f_y(a,b) = 0$. (Along the line $y = b$, $f(x,b)$ is a function of $x$ with an extreme value at $a$, so its derivative $f_x$ is zero there; similarly for $f_y$.)

**Sufficient condition (derivation).** At a stationary point the first-degree terms of Taylor's series vanish, so

$$f(a+h, b+k) - f(a,b) \approx \frac{1}{2}\left(rh^2 + 2shk + tk^2\right),$$

with $r, s, t$ evaluated at $(a,b)$. The sign of the change is the sign of the quadratic $Q = rh^2 + 2shk + tk^2$. If $r \ne 0$, complete the square:

$$Q = \frac{1}{r}\left[(rh + sk)^2 + (rt - s^2)k^2\right].$$

- If $rt - s^2 > 0$, the bracket is positive for all $(h,k) \ne (0,0)$, so $Q$ has the sign of $r$ always: a **minimum** if $r > 0$, a **maximum** if $r < 0$.
- If $rt - s^2 < 0$, the bracket is positive for some $(h,k)$ and negative for others, so $f$ increases in some directions and decreases in others: a **saddle point**.
- If $rt - s^2 = 0$, the second-degree terms do not decide; **further investigation** is needed.

**Working rule**

1. Solve $f_x = 0$, $f_y = 0$ together to get all stationary points.
2. Find $r = f_{xx}$, $s = f_{xy}$, $t = f_{yy}$ at each point.
3. Decide:

| Condition at the point | Nature |
|---|---|
| $rt - s^2 > 0$ and $r < 0$ | maximum |
| $rt - s^2 > 0$ and $r > 0$ | minimum |
| $rt - s^2 < 0$ | saddle point (no extreme value) |
| $rt - s^2 = 0$ | doubtful, investigate further |

**Exam tip:** present the stationary points in a table with columns $(x,y)$, $r$, $s$, $t$, $rt - s^2$, nature, value. It is quick to write and examiners can award marks at a glance.

**Que 1.56.** Find the maximum and minimum values of $f(x,y) = x^3 + 3xy^2 - 15x^2 - 15y^2 + 72x$.

**Answer:**

$$f_x = 3x^2 + 3y^2 - 30x + 72, \qquad f_y = 6xy - 30y.$$

**Stationary points.** $f_y = 6y(x - 5) = 0$ gives $y = 0$ or $x = 5$.

- $y = 0$: $3x^2 - 30x + 72 = 0 \Rightarrow x^2 - 10x + 24 = 0 \Rightarrow x = 4$ or $6$.
- $x = 5$: $75 + 3y^2 - 150 + 72 = 0 \Rightarrow 3y^2 = 3 \Rightarrow y = \pm1$.

Points: $(4,0)$, $(6,0)$, $(5,1)$, $(5,-1)$.

**Second derivatives.** $r = 6x - 30$, $s = 6y$, $t = 6x - 30$.

| Point | $r$ | $s$ | $t$ | $rt - s^2$ | Nature | Value |
|---|---|---|---|---|---|---|
| $(4,0)$ | $-6$ | $0$ | $-6$ | $36 > 0$ | maximum ($r < 0$) | $112$ |
| $(6,0)$ | $6$ | $0$ | $6$ | $36 > 0$ | minimum ($r > 0$) | $108$ |
| $(5,1)$ | $0$ | $6$ | $0$ | $-36 < 0$ | saddle | |
| $(5,-1)$ | $0$ | $-6$ | $0$ | $-36 < 0$ | saddle | |

Values: $f(4,0) = 64 - 240 + 288 = 112$ and $f(6,0) = 216 - 540 + 432 = 108$.

**Maximum value 112 at $(4,0)$; minimum value 108 at $(6,0)$.**

**Que 1.57.** Find the stationary points of $f(x,y) = x^3 + y^3 - 3axy$ ($a > 0$) and classify them.

**Answer:**

$f_x = 3x^2 - 3ay = 0 \Rightarrow y = \dfrac{x^2}{a}$; $f_y = 3y^2 - 3ax = 0$. Substituting, $\dfrac{x^4}{a^2} = ax \Rightarrow x(x^3 - a^3) = 0 \Rightarrow x = 0$ or $x = a$.

Points: $(0,0)$ and $(a,a)$. Second derivatives: $r = 6x$, $s = -3a$, $t = 6y$.

| Point | $r$ | $s$ | $t$ | $rt - s^2$ | Nature |
|---|---|---|---|---|---|
| $(0,0)$ | $0$ | $-3a$ | $0$ | $-9a^2 < 0$ | saddle |
| $(a,a)$ | $6a$ | $-3a$ | $6a$ | $27a^2 > 0$ | minimum ($r > 0$) |

Minimum value $f(a,a) = a^3 + a^3 - 3a^3 = -a^3$.

**Que 1.58.** Find the maxima and minima of $f(x,y) = \sin x + \sin y + \sin(x + y)$. [PYQ 2024-25]

**Answer:**

We look for extreme values with $0 < x, y < \pi$ (the function is periodic, so this covers the typical case; the minimum is found similarly in the next period).

$$f_x = \cos x + \cos(x + y) = 0, \qquad f_y = \cos y + \cos(x + y) = 0.$$

Subtracting, $\cos x = \cos y$, so $y = x$ in this range. Then

$$\cos x + \cos 2x = 0 \Rightarrow 2\cos^2x + \cos x - 1 = 0 \Rightarrow (2\cos x - 1)(\cos x + 1) = 0.$$

So $\cos x = \tfrac12$ ($x = \tfrac\pi3$) or $\cos x = -1$ ($x = \pi$, on the boundary). The stationary point inside is $\left(\tfrac\pi3, \tfrac\pi3\right)$.

$$r = -\sin x - \sin(x + y), \quad s = -\sin(x + y), \quad t = -\sin y - \sin(x + y).$$

At $\left(\tfrac\pi3, \tfrac\pi3\right)$, $\sin\tfrac\pi3 = \sin\tfrac{2\pi}3 = \tfrac{\sqrt3}{2}$:

$$r = -\sqrt3, \quad s = -\frac{\sqrt3}{2}, \quad t = -\sqrt3, \quad rt - s^2 = 3 - \frac34 = \frac94 > 0, \quad r < 0.$$

So $f$ has a **maximum** at $\left(\tfrac\pi3, \tfrac\pi3\right)$, and

$$f_{\max} = \frac{\sqrt3}{2} + \frac{\sqrt3}{2} + \frac{\sqrt3}{2} = \frac{3\sqrt3}{2}.$$

Similarly, at $\left(\tfrac{5\pi}{3}, \tfrac{5\pi}{3}\right)$ (in $0 < x, y < 2\pi$) we get $r = \sqrt3 > 0$, $rt - s^2 = \tfrac94 > 0$: a **minimum**, with value $-\dfrac{3\sqrt3}{2}$.

**Que 1.59.** Find the extreme values of $f(x,y) = x^4 + y^4 - 2x^2 + 4xy - 2y^2$.

**Answer:**

$$f_x = 4x^3 - 4x + 4y = 0, \qquad f_y = 4y^3 + 4x - 4y = 0.$$

Adding: $4(x^3 + y^3) = 0 \Rightarrow y = -x$. Substituting in $f_x$: $x^3 - 2x = 0 \Rightarrow x = 0, \pm\sqrt2$.

Points: $(0,0)$, $(\sqrt2, -\sqrt2)$, $(-\sqrt2, \sqrt2)$. Here $r = 12x^2 - 4$, $s = 4$, $t = 12y^2 - 4$.

At $(\pm\sqrt2, \mp\sqrt2)$: $r = t = 20$, $rt - s^2 = 400 - 16 > 0$, $r > 0$: **minimum**, value $4 + 4 - 4 - 8 - 4 = -8$.

At $(0,0)$: $r = t = -4$, $s = 4$, $rt - s^2 = 0$: doubtful. Investigate: along $y = 0$, $f = x^4 - 2x^2 < 0$ for small $x \ne 0$; along $y = x$, $f = 2x^4 > 0$. So $f$ takes both signs near the origin, while $f(0,0) = 0$: **no extreme value** at the origin.

**Que 1.60.** Find the minimum distance from the point $(1, 2, 0)$ to the cone $z^2 = x^2 + y^2$ (without Lagrange's method). [PYQ 2025-26]

**Answer:**

The square of the distance from $(1,2,0)$ to a point $(x,y,z)$ of the cone is

$$D = (x - 1)^2 + (y - 2)^2 + z^2 = (x - 1)^2 + (y - 2)^2 + x^2 + y^2,$$

using $z^2 = x^2 + y^2$. Now $D$ is a function of $x, y$ only.

$$D_x = 2(x - 1) + 2x = 0 \Rightarrow x = \tfrac12, \qquad D_y = 2(y - 2) + 2y = 0 \Rightarrow y = 1.$$

$r = D_{xx} = 4$, $s = 0$, $t = 4$: $rt - s^2 = 16 > 0$ and $r > 0$, so a minimum.

$$D_{\min} = \frac14 + 1 + \frac14 + 1 = \frac52, \qquad \text{minimum distance} = \sqrt{\frac52} = \frac{\sqrt{10}}{2} \approx 1.58.$$

The nearest points are $\left(\tfrac12, 1, \pm\tfrac{\sqrt5}{2}\right)$. (Que 1.66 solves the same problem by Lagrange's method.)

### Part 9: Lagrange's Method of Undetermined Multipliers

**Concept**

Often we want the best value of a function when the variables are **not free** but must satisfy a condition: the least material for a box that must hold 32 litres, the largest box that fits inside an ellipsoid, the nearest point on a given surface. The condition is called a **constraint**. One way is to use the constraint to eliminate a variable (as in Que 1.60). Lagrange's method avoids that elimination, keeps the symmetry of the problem, and works even when elimination is hard.

The geometric idea: at the best point, the level surface of $f$ just touches the constraint surface $\phi = 0$. Touching surfaces have parallel normals, and the normals are the gradients, so $\nabla f = -\lambda\nabla\phi$ for some number $\lambda$. Written in components, these are Lagrange's equations.

**Que 1.61.** Explain Lagrange's method of undetermined multipliers for finding the extreme values of $u = f(x,y,z)$ subject to $\phi(x,y,z) = 0$.

**Answer:**

For an extreme value, the total differential of $u$ must vanish:

$$du = f_x\,dx + f_y\,dy + f_z\,dz = 0. \qquad (1)$$

The variables are tied by $\phi = 0$, so their changes are tied by

$$d\phi = \phi_x\,dx + \phi_y\,dy + \phi_z\,dz = 0. \qquad (2)$$

Multiply (2) by an undetermined constant $\lambda$ and add to (1):

$$(f_x + \lambda\phi_x)\,dx + (f_y + \lambda\phi_y)\,dy + (f_z + \lambda\phi_z)\,dz = 0.$$

Choose $\lambda$ so that the coefficient of $dz$ is zero. Then $dx$ and $dy$ can be treated as independent, so their coefficients must also be zero. Hence

$$f_x + \lambda\phi_x = 0, \qquad f_y + \lambda\phi_y = 0, \qquad f_z + \lambda\phi_z = 0, \qquad \phi(x,y,z) = 0.$$

These four equations in the four unknowns $x, y, z, \lambda$ give the stationary points.

**Working rule.** Form $F = f + \lambda\phi$ (the **Lagrangian function**), set $F_x = F_y = F_z = 0$, and solve these with $\phi = 0$. The nature of the point (maximum or minimum) is usually clear from the physical problem.

**Limitation.** The method finds stationary points but does not by itself say whether they give a maximum or a minimum.

**Que 1.62.** A rectangular box open at the top is to have a volume of 32 cubic units. Find the dimensions of the box requiring the least material for its construction. [PYQ 2021-22, 2022-23]

**Answer:**

Let the length, breadth and height be $x, y, z$. The box has a base and four sides but no top, so the material is the surface area

$$S = xy + 2xz + 2yz, \qquad \text{subject to } \phi = xyz - 32 = 0.$$

$$F = xy + 2xz + 2yz + \lambda(xyz - 32).$$

$$F_x = y + 2z + \lambda yz = 0, \qquad (1)$$
$$F_y = x + 2z + \lambda xz = 0, \qquad (2)$$
$$F_z = 2x + 2y + \lambda xy = 0. \qquad (3)$$

Multiply (1) by $x$, (2) by $y$, (3) by $z$:

$$xy + 2xz = -\lambda xyz, \qquad xy + 2yz = -\lambda xyz, \qquad 2xz + 2yz = -\lambda xyz.$$

From the first two, $xz = yz \Rightarrow x = y$. From the second and third, $xy = 2xz \Rightarrow y = 2z$. So $x = y = 2z$.

Using $xyz = 32$: $2z\cdot2z\cdot z = 32 \Rightarrow z^3 = 8 \Rightarrow z = 2$.

**Dimensions: length 4, breadth 4, height 2.** The least surface area is $16 + 16 + 16 = 48$ square units.

**Que 1.63.** The temperature (or pressure) at a point $(x,y,z)$ of space is $P = 400xyz^2$. Find the highest value on the surface of the unit sphere $x^2 + y^2 + z^2 = 1$. [PYQ 2023-24]

**Answer:**

$$F = 400xyz^2 + \lambda(x^2 + y^2 + z^2 - 1).$$

$$F_x = 400yz^2 + 2\lambda x = 0, \qquad F_y = 400xz^2 + 2\lambda y = 0, \qquad F_z = 800xyz + 2\lambda z = 0.$$

Multiply by $x$, $y$, $z$ respectively:

$$400xyz^2 = -2\lambda x^2, \qquad 400xyz^2 = -2\lambda y^2, \qquad 800xyz^2 = -2\lambda z^2.$$

So $x^2 = y^2$ and $z^2 = 2x^2$. With $x^2 + y^2 + z^2 = 1$: $x^2 + x^2 + 2x^2 = 1 \Rightarrow x^2 = \tfrac14$, $y^2 = \tfrac14$, $z^2 = \tfrac12$.

$P$ is largest when $xy > 0$, that is $x = y = \pm\tfrac12$:

$$P_{\max} = 400\cdot\frac14\cdot\frac12 = 50.$$

**Que 1.64.** Find the volume of the largest rectangular parallelepiped that can be inscribed in the ellipsoid $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} + \dfrac{z^2}{c^2} = 1$. [PYQ 2024-25]

**Answer:**

By symmetry, the largest box has its centre at the centre of the ellipsoid and its edges parallel to the axes. If $(x,y,z)$ is the corner in the first octant, its edges are $2x, 2y, 2z$, so

$$V = 8xyz, \qquad \phi = \frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} - 1 = 0.$$

$$F = 8xyz + \lambda\left(\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} - 1\right).$$

$$F_x = 8yz + \frac{2\lambda x}{a^2} = 0, \quad F_y = 8xz + \frac{2\lambda y}{b^2} = 0, \quad F_z = 8xy + \frac{2\lambda z}{c^2} = 0.$$

Multiply by $x, y, z$ and compare:

$$8xyz = -\frac{2\lambda x^2}{a^2} = -\frac{2\lambda y^2}{b^2} = -\frac{2\lambda z^2}{c^2} \quad\Rightarrow\quad \frac{x^2}{a^2} = \frac{y^2}{b^2} = \frac{z^2}{c^2}.$$

Each of these equals $\tfrac13$ (their sum is 1). So $x = \dfrac{a}{\sqrt3}$, $y = \dfrac{b}{\sqrt3}$, $z = \dfrac{c}{\sqrt3}$, and

$$V_{\max} = 8\cdot\frac{abc}{3\sqrt3} = \frac{8abc}{3\sqrt3}.$$

**Que 1.65.** Find the point on the plane $2x + 3y + z = 14$ nearest to the origin, and the least distance.

**Answer:**

Minimise $f = x^2 + y^2 + z^2$ (the square of the distance) subject to $2x + 3y + z - 14 = 0$.

$$F = x^2 + y^2 + z^2 + \lambda(2x + 3y + z - 14).$$

$$2x + 2\lambda = 0, \quad 2y + 3\lambda = 0, \quad 2z + \lambda = 0 \quad\Rightarrow\quad x = -\lambda,\ y = -\tfrac32\lambda,\ z = -\tfrac12\lambda.$$

Substituting in the plane: $-2\lambda - \tfrac92\lambda - \tfrac12\lambda = 14 \Rightarrow -7\lambda = 14 \Rightarrow \lambda = -2$.

**Nearest point $(2, 3, 1)$; least distance $\sqrt{4 + 9 + 1} = \sqrt{14}$.**

(The answer agrees with the formula for the distance of the origin from a plane: $\dfrac{14}{\sqrt{4 + 9 + 1}} = \sqrt{14}$.)

**Que 1.66.** Using Lagrange's method, find the shortest distance from $(1, 2, 0)$ to the cone $z^2 = x^2 + y^2$. [PYQ 2025-26]

**Answer:**

Minimise $D = (x - 1)^2 + (y - 2)^2 + z^2$ subject to $\phi = x^2 + y^2 - z^2 = 0$.

$$F = (x - 1)^2 + (y - 2)^2 + z^2 + \lambda(x^2 + y^2 - z^2).$$

$$F_x = 2(x - 1) + 2\lambda x = 0 \Rightarrow x = \frac{1}{1 + \lambda}, \qquad F_y = 2(y - 2) + 2\lambda y = 0 \Rightarrow y = \frac{2}{1 + \lambda},$$

$$F_z = 2z - 2\lambda z = 0 \Rightarrow z = 0 \text{ or } \lambda = 1.$$

If $z = 0$, the cone gives $x = y = 0$, which is impossible since $x = \dfrac1{1+\lambda} \ne 0$. So $\lambda = 1$: $x = \tfrac12$, $y = 1$, $z^2 = x^2 + y^2 = \tfrac54$.

$$D = \frac14 + 1 + \frac54 = \frac52, \qquad \text{shortest distance} = \sqrt{\frac52} = \frac{\sqrt{10}}{2}.$$

This agrees with Que 1.60.

**Que 1.67.** Find the maximum value of $x^2y^3z^4$ subject to $x + y + z = 9$ ($x, y, z > 0$).

**Answer:**

It is easier to maximise $\log f = 2\log x + 3\log y + 4\log z$ (same maximum point).

$$F = 2\log x + 3\log y + 4\log z + \lambda(x + y + z - 9).$$

$$\frac2x + \lambda = 0, \quad \frac3y + \lambda = 0, \quad \frac4z + \lambda = 0 \quad\Rightarrow\quad x = -\frac2\lambda,\ y = -\frac3\lambda,\ z = -\frac4\lambda.$$

So $x : y : z = 2 : 3 : 4$, and $x + y + z = 9$ gives $x = 2$, $y = 3$, $z = 4$.

$$\text{Maximum value} = 2^2\cdot3^3\cdot4^4 = 4\cdot27\cdot256 = 27648.$$

**Que 1.68.** Find the minimum value of $x^2 + y^2 + z^2$ subject to $ax + by + cz = p$.

**Answer:**

$$F = x^2 + y^2 + z^2 + \lambda(ax + by + cz - p).$$

$$2x + \lambda a = 0,\ 2y + \lambda b = 0,\ 2z + \lambda c = 0 \Rightarrow x = -\frac{\lambda a}{2},\ y = -\frac{\lambda b}{2},\ z = -\frac{\lambda c}{2}.$$

Substituting: $-\dfrac\lambda2(a^2 + b^2 + c^2) = p \Rightarrow \lambda = -\dfrac{2p}{a^2+b^2+c^2}$. Then

$$x^2 + y^2 + z^2 = \frac{\lambda^2}{4}(a^2 + b^2 + c^2) = \frac{p^2}{a^2 + b^2 + c^2}.$$

**Common mistake:** forgetting to use the constraint at the end. Lagrange's equations give only ratios like $x : y : z$; the constraint fixes the actual values.

### Part 10: Errors and Approximations

**Concept**

Every measurement has a small error. If we measure the radius of a cylinder as 5 cm when it is really 5.05 cm, how wrong is the volume we compute? The total differential answers this: when the errors $\delta x, \delta y$ are small, the error in $u = f(x,y)$ is approximately

$$\delta u \approx \frac{\partial u}{\partial x}\delta x + \frac{\partial u}{\partial y}\delta y.$$

The same formula gives quick approximate values of awkward expressions like $(3.98)^2(2.01)^3$: start from a nearby "nice" point and add the differential.

**Que 1.69.** Define absolute, relative and percentage errors. Show how the total differential is used to find the error in a computed quantity, and prove that for $u = kx^ay^bz^c$ the percentage error is $a$ times that in $x$, plus $b$ times that in $y$, plus $c$ times that in $z$.

**Answer:**

If $\delta x$ is the error in a measured quantity $x$:

- **absolute error** $= \delta x$,
- **relative error** $= \dfrac{\delta x}{x}$,
- **percentage error** $= \dfrac{\delta x}{x}\times100$.

**Error in a computed quantity.** If $u = f(x,y,z)$ and the measurements have small errors $\delta x, \delta y, \delta z$, then, approximately,

$$\delta u = \frac{\partial u}{\partial x}\delta x + \frac{\partial u}{\partial y}\delta y + \frac{\partial u}{\partial z}\delta z.$$

**Product of powers.** For $u = kx^ay^bz^c$, take logarithms: $\log u = \log k + a\log x + b\log y + c\log z$. Differentiating,

$$\frac{\delta u}{u} = a\frac{\delta x}{x} + b\frac{\delta y}{y} + c\frac{\delta z}{z}.$$

Multiply by 100:

$$(\%\text{ error in } u) = a(\%\text{ in } x) + b(\%\text{ in } y) + c(\%\text{ in } z).$$

The **maximum** error is obtained by taking every term with the same sign (adding the absolute values), because errors in measurement may be positive or negative.

**Que 1.70.** (a) Find the percentage error in the volume of a rectangular box when each side is measured with an error of 1%. (b) A 2% error is made in measuring the length and breadth of a rectangle. Find the percentage error in its area. [PYQ 2022-23, 2021-22]

**Answer:**

**(a)** $V = xyz$, so $\dfrac{\delta V}{V}\times100 = 1\% + 1\% + 1\% = 3\%$.

**(b)** $A = xy$, so the percentage error in the area is $2\% + 2\% = 4\%$.

**Que 1.71.** In the relation $E = RI$ (Ohm's law), the voltage $E$ is measured with a possible error of 2% and the current $I$ with a possible error of 1.5%. Find the maximum possible percentage error in the computed resistance $R$. [PYQ 2023-24 type]

**Answer:**

$R = \dfrac{E}{I}$, so $\log R = \log E - \log I$ and

$$\frac{\delta R}{R}\times100 = \frac{\delta E}{E}\times100 - \frac{\delta I}{I}\times100.$$

The errors may have either sign, so the maximum error occurs when they act in opposite directions:

$$\text{maximum \% error in } R = 2\% + 1.5\% = 3.5\%.$$

**Que 1.72.** (a) The volume of a cylinder is $V = \pi r^2h$. If the radius is measured with an error of 1% and the height with an error of 2%, find the maximum percentage error in $V$. (b) The period of a pendulum is $T = 2\pi\sqrt{l/g}$. Find the percentage error in $T$ when $l$ is measured 2% too large and $g$ is taken 0.5% too small.

**Answer:**

**(a)** $V = \pi r^2h$: percentage error $= 2(1\%) + 1(2\%) = 4\%$.

**(b)** $\log T = \log 2\pi + \tfrac12\log l - \tfrac12\log g$, so

$$\frac{\delta T}{T}\times100 = \frac12(\%\text{ error in } l) - \frac12(\%\text{ error in } g) = \frac12(2) - \frac12(-0.5) = 1 + 0.25 = 1.25\%.$$

($g$ taken too small means its error is $-0.5\%$.) So $T$ is computed 1.25% too large.

**Que 1.73.** Find approximate values of (i) $(3.98)^2(2.01)^3$, (ii) $\sqrt{(0.98)^2 + (2.01)^2 + (1.94)^2}$. [PYQ 2025-26]

**Answer:**

**(i)** Let $f(x,y) = x^2y^3$ with $x = 4$, $\delta x = -0.02$, $y = 2$, $\delta y = 0.01$. Then $f(4,2) = 16\cdot8 = 128$ and

$$\delta f = 2xy^3\,\delta x + 3x^2y^2\,\delta y = 2\cdot4\cdot8(-0.02) + 3\cdot16\cdot4(0.01) = -1.28 + 1.92 = 0.64.$$

So $(3.98)^2(2.01)^3 \approx 128 + 0.64 = 128.64$. (Exact value $128.63$.)

**(ii)** Let $f = \sqrt{x^2 + y^2 + z^2}$ at $(1,2,2)$ with $\delta x = -0.02$, $\delta y = 0.01$, $\delta z = -0.06$. Here $f(1,2,2) = 3$ and

$$\delta f = \frac{x\,\delta x + y\,\delta y + z\,\delta z}{\sqrt{x^2 + y^2 + z^2}} = \frac{1(-0.02) + 2(0.01) + 2(-0.06)}{3} = \frac{-0.12}{3} = -0.04.$$

So the value is approximately $3 - 0.04 = 2.96$. (Exact $2.9604$.)

**Que 1.74.** The area of a triangle is computed from $\Delta = \tfrac12bc\sin A$. If an error $\delta A$ is made in the angle $A$ while $b$ and $c$ are exact, show that the relative error in the area is $\cot A\,\delta A$. Find the percentage error when $A = 60^\circ$ and the error in $A$ is $1'$ (one minute).

**Answer:**

$\log\Delta = \log\tfrac12 + \log b + \log c + \log\sin A$. With $b, c$ exact,

$$\frac{\delta\Delta}{\Delta} = \frac{\cos A}{\sin A}\,\delta A = \cot A\,\delta A.$$

For $A = 60^\circ$ and $\delta A = 1' = \dfrac{1}{60}\cdot\dfrac{\pi}{180}$ radian $\approx 0.000291$:

$$\frac{\delta\Delta}{\Delta}\times100 = \frac{1}{\sqrt3}\times0.000291\times100 \approx 0.0168\%.$$

**Common mistake:** the error in an angle must be in **radians** before it is put into the formula.

### Short-Answer Questions (2 marks)

**Q1. Define a homogeneous function with an example.**
$f(x,y)$ is homogeneous of degree $n$ if $f(tx,ty) = t^nf(x,y)$. Example: $x^2 + xy + y^2$ has degree 2.

**Q2. State Euler's theorem.**
If $u$ is homogeneous of degree $n$ in $x, y$, then $xu_x + yu_y = nu$.

**Q3. If $u = \dfrac{x^2 + y^2}{x + y}$, find $xu_x + yu_y$.** [PYQ 2024-25]
$u$ is homogeneous of degree 1, so $xu_x + yu_y = u$.

**Q4. If $u = \sin^{-1}(x/y) + \tan^{-1}(y/x)$, find $xu_x + yu_y$.**
$u$ is homogeneous of degree 0, so $xu_x + yu_y = 0$.

**Q5. If $u = \log\dfrac{x^2 + y^2}{x + y}$, find $xu_x + yu_y$.**
$e^u$ has degree 1, so $xu_x + yu_y = 1\cdot\dfrac{e^u}{e^u} = 1$.

**Q6. Find the degree of $(x^5 + y^5)^{1/5}$.** [PYQ 2025-26 type]
$f(tx,ty) = t(x^5+y^5)^{1/5}$, so the degree is 1.

**Q7. Differentiate between total and partial derivatives.** [PYQ 2024-25]
A partial derivative is the rate of change with one variable when all others are fixed; a total derivative is the rate of change with a variable on which all the variables of the function depend, $\dfrac{du}{dt} = u_x\dfrac{dx}{dt} + u_y\dfrac{dy}{dt}$.

**Q8. Find $\dfrac{dy}{dx}$ if $x^3 + y^3 = 3axy$.**
$\dfrac{dy}{dx} = -\dfrac{f_x}{f_y} = \dfrac{ay - x^2}{y^2 - ax}$.

**Q9. If $x = r\cos\theta$, $y = r\sin\theta$, find $\dfrac{\partial(x,y)}{\partial(r,\theta)}$ and $\dfrac{\partial(r,\theta)}{\partial(x,y)}$.** [PYQ 2021-22, 2025-26]
$\dfrac{\partial(x,y)}{\partial(r,\theta)} = r$; by $JJ' = 1$, $\dfrac{\partial(r,\theta)}{\partial(x,y)} = \dfrac1r$.

**Q10. State two applications of Jacobians.** [PYQ 2024-25]
Change of variables in multiple integrals ($dx\,dy = |J|\,du\,dv$) and testing functional dependence ($J = 0$).

**Q11. If $x = u(1 + v)$, $y = v(1 + u)$, find $\dfrac{\partial(x,y)}{\partial(u,v)}$.**
$\begin{vmatrix} 1 + v & u \\ v & 1 + u\end{vmatrix} = (1 + u)(1 + v) - uv = 1 + u + v$.

**Q12. When are two functions functionally dependent?**
When their Jacobian with respect to the independent variables is identically zero.

**Q13. Write the conditions for a maximum of $f(x,y)$.**
$f_x = f_y = 0$, $rt - s^2 > 0$ and $r < 0$.

**Q14. What is a saddle point? Give an example.**
A stationary point where $rt - s^2 < 0$, so $f$ is neither a maximum nor a minimum. Example: $(0,0)$ for $f = x^2 - y^2$.

**Q15. Find the stationary points of $f = x^2 + y^2 - 2x + 4y$.**
$f_x = 2x - 2 = 0$, $f_y = 2y + 4 = 0$: the point $(1, -2)$ (a minimum, value $-5$).

**Q16. Write the Lagrange equations for extremising $f(x,y,z)$ subject to $\phi(x,y,z) = 0$.**
$f_x + \lambda\phi_x = 0$, $f_y + \lambda\phi_y = 0$, $f_z + \lambda\phi_z = 0$, $\phi = 0$.

**Q17. If the radius of a sphere is measured with an error of 1%, what is the percentage error in its volume?**
$V = \tfrac43\pi r^3$, so the error is $3\times1\% = 3\%$.

**Q18. Find the percentage error in the volume of a box when each side has an error of 1%.** [PYQ 2022-23]
$V = xyz$: $1 + 1 + 1 = 3\%$.

**Q19. In $E = RI$, $E$ and $I$ have errors of $a\%$ and $b\%$. Find the maximum percentage error in $R$.** [PYQ 2023-24]
$R = E/I$, so the maximum error is $(a + b)\%$.

**Q20. Write Taylor's expansion of $f(x,y)$ about $(a,b)$ up to second degree.**
$f(a,b) + [hf_x + kf_y] + \tfrac12[h^2f_{xx} + 2hkf_{xy} + k^2f_{yy}]$, with $h = x - a$, $k = y - b$, derivatives at $(a,b)$.

**Q21. Show that $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2 - y^2}{x^2 + y^2}$ does not exist.**
Along $y = mx$ the value is $\dfrac{1 - m^2}{1 + m^2}$, which depends on $m$.

**Q22. If $u = e^x\sin y$, show that $u_{xx} + u_{yy} = 0$.**
$u_{xx} = e^x\sin y$, $u_{yy} = -e^x\sin y$; the sum is 0.

### Practice Questions

1. Show that $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^3y}{x^6 + y^2}$ does not exist. (Hint: try $y = mx^3$.)
2. If $u = e^{xyz}$, find $\dfrac{\partial^3u}{\partial x\,\partial y\,\partial z}$. (Answer: $(1 + 3xyz + x^2y^2z^2)e^{xyz}$.)
3. If $u = x^3 - 3xy^2$, verify that $u_{xx} + u_{yy} = 0$.
4. If $u = \tan^{-1}\dfrac{2xy}{x^2 - y^2}$, show that $u_{xx} + u_{yy} = 0$.
5. If $u = \log\dfrac{x^4 + y^4}{x + y}$, show that $xu_x + yu_y = 3$.
6. If $u = \sin^{-1}\dfrac{x^2 + y^2}{x + y}$, show that $xu_x + yu_y = \tan u$.
7. If $u = \tan^{-1}\dfrac{x^3 + y^3}{x + y}$, prove that $x^2u_{xx} + 2xyu_{xy} + y^2u_{yy} = (1 - 4\sin^2u)\sin2u$.
8. If $u = x^2\tan^{-1}\dfrac yx - y^2\tan^{-1}\dfrac xy$, find $xu_x + yu_y$ and $x^2u_{xx} + 2xyu_{xy} + y^2u_{yy}$. (Answer: $2u$, $2u$.)
9. If $u = x^2 - y^2$, $x = 2r - 3s + 4$, $y = -r + 8s - 5$, find $\dfrac{\partial u}{\partial r}$. (Answer: $4x + 2y$.)
10. If $z = f(x,y)$, $x = r\cos\theta$, $y = r\sin\theta$, show that $z_{xx} + z_{yy} = z_{rr} + \dfrac1rz_r + \dfrac{1}{r^2}z_{\theta\theta}$.
11. If $u = x^2 - y^2$, $v = 2xy$ and $x = r\cos\theta$, $y = r\sin\theta$, find $\dfrac{\partial(u,v)}{\partial(r,\theta)}$. (Answer: $4r^3$.)
12. If $u = \dfrac{yz}{x}$, $v = \dfrac{zx}{y}$, $w = \dfrac{xy}{z}$, show that $\dfrac{\partial(u,v,w)}{\partial(x,y,z)} = 4$.
13. Show that $u = x + y + z$, $v = xy + yz + zx$, $w = x^2 + y^2 + z^2$ are functionally dependent, and find the relation. (Answer: $u^2 = w + 2v$.)
14. Show that $u = \dfrac{x}{y - z}$, $v = \dfrac{y}{z - x}$, $w = \dfrac{z}{x - y}$ are functionally dependent, and find the relation. (Answer: $uv + vw + wu = -1$.)
15. Expand $e^x\sin y$ in powers of $x$ and $y$ up to third degree. (Answer: $y + xy + \tfrac12x^2y - \tfrac16y^3$.)
16. Expand $x^2y + \sin y + e^x$ about $(1,\pi)$ up to second-degree terms.
17. Find the extreme values of $x^3 + y^3 - 63(x + y) + 12xy$. (Answer: maximum 784 at $(-7,-7)$, minimum $-216$ at $(3,3)$.)
18. Find the extreme values of $xy(a - x - y)$. (Answer: maximum $\tfrac{a^3}{27}$ at $\left(\tfrac a3, \tfrac a3\right)$ for $a > 0$.)
19. Divide 24 into three parts such that the product of the first, the square of the second and the cube of the third is maximum. (Answer: $4, 8, 12$.)
20. Find the dimensions of the rectangular box, open at the top, of maximum capacity whose surface area is 108 square cm. (Answer: $6, 6, 3$.)
21. Find the maximum and minimum distances of the point $(3,4,12)$ from the sphere $x^2 + y^2 + z^2 = 1$. (Answer: 14 and 12.)
22. A rectangular box of maximum volume is inscribed in a sphere of radius $a$. Show that it is a cube of edge $\dfrac{2a}{\sqrt3}$.
23. The sides of a rectangle are measured as 5 cm and 12 cm, each with a possible error of 0.01 cm. Find the maximum error in the computed diagonal. (Answer: about 0.013 cm.)
24. Find the approximate value of $\sqrt{(2.98)^2 + (4.01)^2}$. (Answer: $4.996$.)
25. In estimating the cost of a pile of bricks measured as $2\text{ m}\times15\text{ m}\times1.2\text{ m}$, the tape is stretched 1% beyond the standard length. If the count is 450 bricks per cubic metre and bricks cost Rs 530 per thousand, find the approximate error in the cost. (Answer: about Rs 257.)

### Previous Year Questions from Unit 1

| Year | Question (short form) | Solved in |
|---|---|---|
| 2025-26 | Degree of a homogeneous function | Que 1.14 (v), Q6 |
| 2025-26 | $\partial(x,y)/\partial(r,\theta)$ | Que 1.40 |
| 2025-26 | Taylor expansion in powers of $(x-1)$, $(y+2)$ | Que 1.53 |
| 2025-26 | Minimum distance from $(1,2,0)$ to the cone $z^2 = x^2 + y^2$ | Que 1.60, 1.66 |
| 2025-26 | Approximate $\sqrt{(0.98)^2 + (2.01)^2 + (1.94)^2}$ | Que 1.73 |
| 2024-25 | $xu_x + yu_y$ for $u = \dfrac{x^2+y^2}{x+y}$ | Que 1.17 |
| 2024-25 | Total versus partial derivative; applications of Jacobians | Que 1.26, 1.38 |
| 2024-25 | $u = f(r)$: $u_{xx} + u_{yy} = f'' + \tfrac1rf'$ | Que 1.35 |
| 2024-25 | Jacobian of $xyz$, $x^2+y^2+z^2$, $x+y+z$ | Que 1.42 |
| 2024-25 | Extrema of $\sin x + \sin y + \sin(x+y)$ | Que 1.58 |
| 2024-25 | Largest parallelepiped in an ellipsoid | Que 1.64 |
| 2023-24 | Euler for $y^2e^{y/x} + x^2\tan^{-1}(x/y)$ | Que 1.18 |
| 2023-24 | $z = f(x,y)$, $x = e^u + e^{-v}$, $y = e^{-u} - e^v$ | Que 1.31 |
| 2023-24 | Jacobian of implicit functions | Que 1.44 |
| 2023-24 | Taylor series of $e^x\cos y$ about $(1, \pi/4)$ | Que 1.50 |
| 2023-24 | $P = 400xyz^2$ on the unit sphere | Que 1.63 |
| 2023-24 | Error in $R$ from $E = RI$ | Que 1.71 |
| 2022-23 | $\sin^{-1}$ of a homogeneous function, first and second order | Que 1.19, 1.21 |
| 2022-23 | Functional dependence and the relation | Que 1.47 |
| 2022-23 | $x^y$ about $(1,1)$; $(1.03)^{1.02}$ | Que 1.51 |
| 2022-23 | Open box of volume 32 | Que 1.62 |
| 2022-23 | Percentage error in volume of a box | Que 1.70 |
| 2021-22 | Roots of a cubic: $\partial(u,v,w)/\partial(x,y,z)$ | Que 1.45 |
| 2021-22 | Taylor series of $e^x\log(1+y)$ | Que 1.52 |
| 2021-22 | Open box of capacity 32 c.c. | Que 1.62 |
| 2021-22 | Percentage error in area of a rectangle | Que 1.70 |

## Unit 2: Multiple Integrals

### Unit overview

A single integral $\int_a^b f(x)\,dx$ adds up $f(x)\,dx$ along an interval; geometrically it is the area under a curve. A **double integral** $\iint_R f(x,y)\,dx\,dy$ adds up $f(x,y)\,dx\,dy$ over a region $R$ of the plane; it gives the volume under a surface, the mass of a plate of variable density, or simply the area of $R$ when $f = 1$. A **triple integral** does the same over a solid region of space.

The good news is that we never need a new technique of integration. A double integral is computed as **two ordinary integrals, one inside the other**, and a triple integral as three. The real skill in this unit is **reading the region**: drawing it, and writing correct limits. Once the limits are right, the rest is school integration.

The unit has four threads:

1. Evaluating double and triple integrals, including **change of order** of integration.
2. **Change of variables**, especially to polar coordinates, using the Jacobian from Unit 1.
3. **Applications**: areas and volumes.
4. **Beta and Gamma functions** and **Dirichlet's integral**, which turn many hard definite integrals into a formula.

**What you should already know:** standard integrals and Wallis's formula (Chapter 0, Part 2), sketching standard curves (Chapter 0, Part 3), and Jacobians (Unit 1, Part 6).

**Most asked in the last five papers:** change of order (almost every year), area between curves and in polar form, change of variables to new $u, v$, volume using triple integrals, $\Gamma(\tfrac14)\Gamma(\tfrac34)$ type values, the Beta-Gamma relation (proof), and Dirichlet's integral for $\iiint xyz$.

### Part 1: Double Integrals and their Evaluation

**Concept**

Divide the region $R$ into many small rectangles of area $\delta A_i = \delta x_i\,\delta y_i$. Pick a point $(x_i, y_i)$ in each, and form the sum $\sum f(x_i,y_i)\,\delta A_i$. As the rectangles shrink, the sum tends to a limit; this limit is the **double integral**

$$\iint_R f(x,y)\,dA = \lim_{\delta A_i\to0}\sum_i f(x_i, y_i)\,\delta A_i.$$

If $f \ge 0$, each term $f\,\delta A$ is the volume of a thin column of height $f$ standing on $\delta A$, so the double integral is the **volume under the surface** $z = f(x,y)$ above $R$. If $f = 1$, it is the **area** of $R$.

**How to evaluate (Fubini's idea).** Slice the volume by planes $x = $ constant. Each slice has area $\int f(x,y)\,dy$ (an ordinary integral in $y$, with $x$ fixed). Adding up the slices gives

$$\iint_R f\,dA = \int_{x=a}^{b}\left[\int_{y=\phi_1(x)}^{\phi_2(x)} f(x,y)\,dy\right]dx.$$

The inner integral is done first, treating the outer variable as a constant.

```text
   y                       y = phi2(x)  (upper curve)
   |              .-------.
   |          .--'  ||||   '--.
   |        /       ||||       \        vertical strip at x:
   |       |        ||||        |       y runs from phi1(x) to phi2(x)
   |        \       ||||       /
   |         '--.   ||||  .---'
   |             '--------'             y = phi1(x)  (lower curve)
   +-------a----------x----------b-------> x
          strips slide from x = a to x = b
```

**Que 2.1.** Define the double integral. Explain how it is evaluated as a repeated integral over (i) a rectangle, (ii) a region bounded by curves, and state its basic properties.

**Answer:**

**Definition.** As above, $\iint_R f(x,y)\,dA$ is the limit of $\sum f(x_i,y_i)\,\delta A_i$ as the largest $\delta A_i \to 0$. It exists for every continuous $f$ on a closed bounded region.

**(i) Rectangle $a \le x \le b$, $c \le y \le d$.** The limits are constants and the order does not matter:

$$\iint_R f\,dA = \int_a^b\int_c^d f(x,y)\,dy\,dx = \int_c^d\int_a^b f(x,y)\,dx\,dy.$$

If moreover $f(x,y) = g(x)h(y)$, the integral splits: $\displaystyle\iint_R f\,dA = \left(\int_a^b g\,dx\right)\left(\int_c^d h\,dy\right)$.

**(ii) Region between curves.**

- If $R$ is bounded by $x = a$, $x = b$, $y = \phi_1(x)$, $y = \phi_2(x)$ (vertical strips):
$$\iint_R f\,dA = \int_a^b\int_{\phi_1(x)}^{\phi_2(x)} f(x,y)\,dy\,dx.$$
- If $R$ is bounded by $y = c$, $y = d$, $x = \psi_1(y)$, $x = \psi_2(y)$ (horizontal strips):
$$\iint_R f\,dA = \int_c^d\int_{\psi_1(y)}^{\psi_2(y)} f(x,y)\,dx\,dy.$$

**Rule for reading the notation.** The **inner** integral's limits may contain the outer variable; the **outer** limits are always constants. In $\int_a^b\int_{\phi_1(x)}^{\phi_2(x)} f\,dy\,dx$ the inner $dy$ goes with the inner limits.

**Properties**

1. $\iint_R (f \pm g)\,dA = \iint_R f\,dA \pm \iint_R g\,dA$ and $\iint_R kf\,dA = k\iint_R f\,dA$.
2. If $R = R_1 \cup R_2$ with no overlap, $\iint_R f = \iint_{R_1} f + \iint_{R_2} f$.
3. $\iint_R 1\,dA$ = area of $R$.
4. If $f \le g$ on $R$, then $\iint_R f \le \iint_R g$.

**Que 2.2.** Evaluate (i) $\displaystyle\int_1^2\int_1^3 x^2y^2\,dx\,dy$, (ii) $\displaystyle\int_0^1\int_0^{x^2} e^{y/x}\,dy\,dx$, (iii) $\displaystyle\int_0^1\int_0^{\sqrt{1+x^2}}\frac{dy\,dx}{1 + x^2 + y^2}$. [PYQ 2024-25, 2021-22]

**Answer:**

**(i)** The limits are constants and the integrand is a product, so

$$\int_1^2\int_1^3 x^2y^2\,dx\,dy = \left[\frac{x^3}{3}\right]_1^3\left[\frac{y^3}{3}\right]_1^2 = \frac{26}{3}\cdot\frac{7}{3} = \frac{182}{9}.$$

**(ii)** Inner integral in $y$ ($x$ constant):

$$\int_0^{x^2} e^{y/x}\,dy = \left[x\,e^{y/x}\right]_0^{x^2} = x\,e^{x} - x.$$

Outer integral (by parts, $\int xe^x\,dx = xe^x - e^x$):

$$\int_0^1 (xe^x - x)\,dx = \left[xe^x - e^x\right]_0^1 - \left[\frac{x^2}{2}\right]_0^1 = (e - e) - (0 - 1) - \frac12 = \frac12.$$

**(iii)** Let $p^2 = 1 + x^2$ (constant in the inner integral). Then

$$\int_0^{p}\frac{dy}{p^2 + y^2} = \frac1p\left[\tan^{-1}\frac yp\right]_0^p = \frac1p\cdot\frac\pi4 = \frac{\pi}{4\sqrt{1 + x^2}}.$$

$$\int_0^1\frac{\pi}{4\sqrt{1 + x^2}}\,dx = \frac\pi4\left[\log\left(x + \sqrt{1 + x^2}\right)\right]_0^1 = \frac\pi4\log\left(1 + \sqrt2\right).$$

**Que 2.3.** Evaluate $\displaystyle\iint_R y\,dx\,dy$, where $R$ is the region bounded by the line $y = x$ and the curve $y^2 = 4x - x^2$ (above the line). [PYQ 2022-23]

**Answer:**

**Region.** $y^2 = 4x - x^2$ is $(x - 2)^2 + y^2 = 4$, a circle with centre $(2,0)$ and radius 2. It meets $y = x$ where $x^2 = 4x - x^2$, i.e. $2x(x - 2) = 0$: at $(0,0)$ and $(2,2)$. Between $x = 0$ and $x = 2$ the upper half of the circle, $y = \sqrt{4x - x^2}$, lies above the line (at $x = 1$: $\sqrt3 > 1$).

Using vertical strips from $y = x$ up to $y = \sqrt{4x - x^2}$:

$$\iint_R y\,dA = \int_0^2\int_x^{\sqrt{4x - x^2}} y\,dy\,dx = \int_0^2\frac12\left[(4x - x^2) - x^2\right]dx = \frac12\int_0^2(4x - 2x^2)\,dx$$

$$= \frac12\left[2x^2 - \frac{2x^3}{3}\right]_0^2 = \frac12\left(8 - \frac{16}{3}\right) = \frac43.$$

**Que 2.4.** Evaluate $\displaystyle\iint_R xy\,dx\,dy$, where $R$ is the quadrant of the circle $x^2 + y^2 = a^2$ with $x \ge 0$, $y \ge 0$.

**Answer:**

Vertical strips: $x$ from 0 to $a$, $y$ from 0 to $\sqrt{a^2 - x^2}$.

$$\int_0^a\int_0^{\sqrt{a^2-x^2}} xy\,dy\,dx = \int_0^a x\cdot\frac{a^2 - x^2}{2}\,dx = \frac12\left[\frac{a^2x^2}{2} - \frac{x^4}{4}\right]_0^a = \frac12\cdot\frac{a^4}{4} = \frac{a^4}{8}.$$

**Que 2.5.** Evaluate $\displaystyle\iint_R (x^2 + y^2)\,dx\,dy$ over the triangle with vertices $(0,0)$, $(1,0)$, $(1,1)$.

**Answer:**

The triangle is bounded by $y = 0$, $x = 1$ and $y = x$. Vertical strips: $x$ from 0 to 1, $y$ from 0 to $x$.

$$\int_0^1\int_0^x (x^2 + y^2)\,dy\,dx = \int_0^1\left(x^3 + \frac{x^3}{3}\right)dx = \frac43\cdot\frac14 = \frac13.$$

**Exam tip:** before writing any limits, **draw the region** and mark one strip on it. Write next to the strip "$y$ from ... to ...". Most wrong answers in this unit come from limits read off without a figure.

### Part 2: Change of Order of Integration

**Concept**

Sometimes the inner integral cannot be done in the given order (for example $\int e^{-y}/y\,dy$ or $\int e^{x^2}dx$ has no elementary antiderivative), or the given order makes the work long. Then we describe the **same region** with strips in the other direction. The value does not change, only the description of the region does.

**Method**

1. From the given limits, write the four boundary curves and **sketch the region**.
2. Find the points where the curves meet.
3. Draw a strip in the **other direction** (horizontal instead of vertical, or vice versa). Read its two ends from the figure.
4. If one strip formula does not cover the whole region (the strip's ends change from one curve to another), **split** the region into parts.
5. Write the new limits and evaluate.

**Que 2.6.** Change the order of integration in $\displaystyle\int_0^1\int_{x^2}^{2-x} xy\,dy\,dx$ and hence evaluate it. [PYQ 2021-22]

**Answer:**

**Region.** $x$ from 0 to 1; for each $x$, $y$ runs from the parabola $y = x^2$ up to the line $y = 2 - x$. The curves meet where $x^2 = 2 - x$, i.e. at $x = 1$, the point $(1,1)$. The region has vertices $(0,0)$, $(1,1)$, $(0,2)$.

```text
  y
  2 *
    |\         line x + y = 2
    | \
    |  \       horizontal strip for 1 <= y <= 2:
    |---\        x from 0 to 2 - y
  1 |    * (1,1)
    |---/      horizontal strip for 0 <= y <= 1:
    |  /         x from 0 to sqrt(y)
    | /  parabola y = x^2
    |/
    +--------- x
    0     1
```

**New order.** A horizontal strip at height $y$ starts at $x = 0$. Its right end is on the parabola ($x = \sqrt y$) when $0 \le y \le 1$, but on the line ($x = 2 - y$) when $1 \le y \le 2$. So the region splits:

$$I = \int_0^1\int_0^{\sqrt y} xy\,dx\,dy + \int_1^2\int_0^{2-y} xy\,dx\,dy.$$

$$\int_0^1 y\cdot\frac{y}{2}\,dy = \frac16, \qquad \int_1^2 y\cdot\frac{(2 - y)^2}{2}\,dy = \frac12\int_1^2(4y - 4y^2 + y^3)\,dy = \frac12\left[2y^2 - \frac{4y^3}{3} + \frac{y^4}{4}\right]_1^2 = \frac12\cdot\frac{5}{12} = \frac{5}{24}.$$

$$I = \frac16 + \frac5{24} = \frac{9}{24} = \frac38.$$

**Check in the given order:** $\displaystyle\int_0^1 x\cdot\frac{(2 - x)^2 - x^4}{2}\,dx = \frac38$. $\checkmark$

**Que 2.7.** Change the order of integration in $\displaystyle\int_0^{2a}\int_{x^2/4a}^{3a - x}(x^2 + y^2)\,dy\,dx$ and evaluate it. [PYQ 2024-25]

**Answer:**

**Region.** $x$ from 0 to $2a$; $y$ from the parabola $x^2 = 4ay$ up to the line $x + y = 3a$. They meet where $x^2 = 4a(3a - x)$, i.e. $x^2 + 4ax - 12a^2 = 0$, $(x + 6a)(x - 2a) = 0$, so $x = 2a$, $y = a$. The region has vertices $(0,0)$, $(2a, a)$, $(0, 3a)$.

**New order (horizontal strips).** Each strip starts at $x = 0$. Its right end is on the parabola, $x = 2\sqrt{ay}$, for $0 \le y \le a$, and on the line, $x = 3a - y$, for $a \le y \le 3a$. So

$$I = \int_0^a\int_0^{2\sqrt{ay}}(x^2 + y^2)\,dx\,dy + \int_a^{3a}\int_0^{3a - y}(x^2 + y^2)\,dx\,dy = I_1 + I_2.$$

**$I_1$:** the inner integral is $\left[\dfrac{x^3}{3} + y^2x\right]_0^{2\sqrt{ay}} = \dfrac{8a^{3/2}y^{3/2}}{3} + 2a^{1/2}y^{5/2}$.

$$I_1 = \frac{8a^{3/2}}{3}\cdot\frac{2a^{5/2}}{5} + 2a^{1/2}\cdot\frac{2a^{7/2}}{7} = \frac{16a^4}{15} + \frac{4a^4}{7} = \frac{172a^4}{105}.$$

**$I_2$:** the inner integral is $\dfrac{(3a - y)^3}{3} + y^2(3a - y)$.

$$I_2 = \left[-\frac{(3a - y)^4}{12} + ay^3 - \frac{y^4}{4}\right]_a^{3a} = \left(0 + 27a^4 - \frac{81a^4}{4}\right) - \left(-\frac{16a^4}{12} + a^4 - \frac{a^4}{4}\right) = \frac{27a^4}{4} + \frac{7a^4}{12} = \frac{22a^4}{3}.$$

$$I = \frac{172a^4}{105} + \frac{22a^4}{3} = \frac{172a^4 + 770a^4}{105} = \frac{942a^4}{105} = \frac{314a^4}{35}.$$

**Que 2.8.** By changing the order of integration, evaluate $\displaystyle\int_0^\infty\int_x^\infty\frac{e^{-y}}{y}\,dy\,dx$.

**Answer:**

In the given order the inner integral $\int\dfrac{e^{-y}}{y}dy$ cannot be found in elementary terms, so we change the order.

**Region.** $x$ from 0 to $\infty$, $y$ from $x$ to $\infty$: the part of the first quadrant above the line $y = x$. Horizontal strip at height $y$: $x$ from 0 to $y$, and $y$ from 0 to $\infty$.

$$I = \int_0^\infty\int_0^y\frac{e^{-y}}{y}\,dx\,dy = \int_0^\infty\frac{e^{-y}}{y}\cdot y\,dy = \int_0^\infty e^{-y}\,dy = 1.$$

**Que 2.9.** Change the order of integration and evaluate $\displaystyle\int_0^a\int_y^a\frac{x}{x^2 + y^2}\,dx\,dy$.

**Answer:**

**Region.** $y$ from 0 to $a$, $x$ from $y$ to $a$: the triangle with vertices $(0,0)$, $(a,0)$, $(a,a)$, below the line $y = x$. Vertical strips: $x$ from 0 to $a$, $y$ from 0 to $x$.

$$I = \int_0^a\int_0^x\frac{x}{x^2 + y^2}\,dy\,dx = \int_0^a x\cdot\frac1x\left[\tan^{-1}\frac yx\right]_0^x dx = \int_0^a\frac\pi4\,dx = \frac{\pi a}{4}.$$

**Que 2.10.** Change the order of integration in $\displaystyle\int_0^{a}\int_{\sqrt{a^2 - x^2}}^{x + 2a} f(x,y)\,dy\,dx$ (write the new limits only).

**Answer:**

**Region.** $x$ from 0 to $a$; $y$ from the circle $x^2 + y^2 = a^2$ (upper half) up to the line $y = x + 2a$. At $x = 0$ the strip runs from $y = a$ to $y = 2a$; at $x = a$ from $y = 0$ to $y = 3a$. The region is bounded by the arc of the circle from $(0,a)$ to $(a,0)$, the line $x = a$, the line $y = x + 2a$ and the $y$-axis.

Horizontal strips: the left end changes from the circle to the $y$-axis to the line, so three parts are needed:

- $0 \le y \le a$: $x$ from $\sqrt{a^2 - y^2}$ (circle) to $a$,
- $a \le y \le 2a$: $x$ from 0 to $a$,
- $2a \le y \le 3a$: $x$ from $y - 2a$ (line) to $a$.

$$\int_0^a\int_{\sqrt{a^2-y^2}}^{a} f\,dx\,dy + \int_a^{2a}\int_0^{a} f\,dx\,dy + \int_{2a}^{3a}\int_{y - 2a}^{a} f\,dx\,dy.$$

**Common mistake:** keeping one formula for the strip when its end jumps from one curve to another. Whenever the strip's end changes curve, split the integral at that height.

### Part 3: Double Integrals in Polar Coordinates

**Concept**

Regions bounded by circles, cardioids and other curves given in polar form are awkward in $x, y$ but simple in $r, \theta$. In polar coordinates the small element of area is not $dr\,d\theta$ but $r\,dr\,d\theta$: the small region between radii $r$ and $r + dr$ and angles $\theta$ and $\theta + d\theta$ is almost a rectangle with sides $dr$ and $r\,d\theta$. This factor $r$ is exactly the Jacobian $\dfrac{\partial(x,y)}{\partial(r,\theta)} = r$ of Unit 1.

$$\iint_R f(x,y)\,dx\,dy = \iint_{R'} f(r\cos\theta, r\sin\theta)\,r\,dr\,d\theta.$$

Usually $r$ is integrated first (from the origin or an inner curve out to an outer curve), and then $\theta$.

**Que 2.11.** Evaluate $\displaystyle\int_0^\infty\int_0^\infty e^{-(x^2 + y^2)}\,dx\,dy$ by changing to polar coordinates, and deduce that $\displaystyle\int_0^\infty e^{-x^2}\,dx = \frac{\sqrt\pi}{2}$.

**Answer:**

The region is the whole first quadrant: $0 \le r < \infty$, $0 \le \theta \le \tfrac\pi2$. With $x^2 + y^2 = r^2$ and $dx\,dy = r\,dr\,d\theta$:

$$I = \int_0^{\pi/2}\int_0^\infty e^{-r^2}r\,dr\,d\theta = \int_0^{\pi/2}\left[-\frac12e^{-r^2}\right]_0^\infty d\theta = \int_0^{\pi/2}\frac12\,d\theta = \frac\pi4.$$

**Deduction.** Since the limits are constants and $e^{-(x^2+y^2)} = e^{-x^2}e^{-y^2}$,

$$I = \left(\int_0^\infty e^{-x^2}dx\right)\left(\int_0^\infty e^{-y^2}dy\right) = \left(\int_0^\infty e^{-x^2}dx\right)^2.$$

So $\left(\displaystyle\int_0^\infty e^{-x^2}dx\right)^2 = \dfrac\pi4$, and $\displaystyle\int_0^\infty e^{-x^2}dx = \frac{\sqrt\pi}{2}$. $\blacksquare$

**Que 2.12.** Evaluate $\displaystyle\iint_R \frac{x^2y^2}{x^2 + y^2}\,dx\,dy$ over the annulus between the circles $x^2 + y^2 = a^2$ and $x^2 + y^2 = b^2$ ($b > a$).

**Answer:**

In polar form, $\dfrac{x^2y^2}{x^2+y^2} = \dfrac{r^4\cos^2\theta\sin^2\theta}{r^2} = r^2\cos^2\theta\sin^2\theta$, with $a \le r \le b$, $0 \le \theta \le 2\pi$.

$$I = \int_0^{2\pi}\int_a^b r^2\cos^2\theta\sin^2\theta\cdot r\,dr\,d\theta = \frac{b^4 - a^4}{4}\int_0^{2\pi}\cos^2\theta\sin^2\theta\,d\theta.$$

$\cos^2\theta\sin^2\theta = \tfrac14\sin^22\theta = \tfrac18(1 - \cos4\theta)$, whose integral over $[0, 2\pi]$ is $\tfrac{2\pi}{8} = \tfrac\pi4$. So

$$I = \frac{\pi(b^4 - a^4)}{16}.$$

**Que 2.13.** Transform to polar coordinates and evaluate $\displaystyle\int_0^a\int_y^a\frac{x\,dx\,dy}{x^2 + y^2}$.

**Answer:**

The region (Que 2.9) is the triangle with vertices $(0,0)$, $(a,0)$, $(a,a)$. In polar form it is bounded by $\theta = 0$, $\theta = \tfrac\pi4$ and the line $x = a$, i.e. $r = a\sec\theta$. So $r$ goes from 0 to $a\sec\theta$, and $\theta$ from 0 to $\tfrac\pi4$.

$$I = \int_0^{\pi/4}\int_0^{a\sec\theta}\frac{r\cos\theta}{r^2}\,r\,dr\,d\theta = \int_0^{\pi/4}\cos\theta\cdot a\sec\theta\,d\theta = \frac{\pi a}{4}.$$

This agrees with Que 2.9.

**Que 2.14.** Evaluate $\displaystyle\iint r\sin\theta\,dr\,d\theta$ over the cardioid $r = a(1 - \cos\theta)$ above the initial line.

**Answer:**

Above the initial line, $\theta$ goes from 0 to $\pi$ and $r$ from 0 to $a(1 - \cos\theta)$.

$$I = \int_0^\pi\sin\theta\left[\frac{r^2}{2}\right]_0^{a(1-\cos\theta)}d\theta = \frac{a^2}{2}\int_0^\pi(1 - \cos\theta)^2\sin\theta\,d\theta.$$

Put $t = 1 - \cos\theta$, $dt = \sin\theta\,d\theta$, $t$ from 0 to 2:

$$I = \frac{a^2}{2}\int_0^2 t^2\,dt = \frac{a^2}{2}\cdot\frac83 = \frac{4a^2}{3}.$$

### Part 4: Change of Variables in Double Integrals

**Concept**

Polar coordinates are one particular change of variables. In general, if $x = x(u,v)$, $y = y(u,v)$ maps a region $R'$ of the $uv$-plane onto the region $R$ of the $xy$-plane, then

$$\iint_R f(x,y)\,dx\,dy = \iint_{R'} f\big(x(u,v), y(u,v)\big)\,|J|\,du\,dv, \qquad J = \frac{\partial(x,y)}{\partial(u,v)}.$$

The art is to choose $u, v$ so that the **boundaries of $R$ become $u = $ constant and $v = $ constant**. Then $R'$ is a rectangle and the limits are constants. For example, a parallelogram bounded by $x + y = 0$, $x + y = 2$, $3x - 2y = 0$, $3x - 2y = 3$ becomes the rectangle $0 \le u \le 2$, $0 \le v \le 3$ with $u = x + y$, $v = 3x - 2y$.

It is often easier to compute $J' = \dfrac{\partial(u,v)}{\partial(x,y)}$ and use $J = \dfrac{1}{J'}$.

**Que 2.15.** Using the transformation $u = x + y$, $v = 3x - 2y$, evaluate $\displaystyle\iint_R (x + y)^2\,dx\,dy$, where $R$ is the parallelogram bounded by $x + y = 0$, $x + y = 2$, $3x - 2y = 0$ and $3x - 2y = 3$. [PYQ 2023-24 type]

**Answer:**

**Jacobian.**

$$J' = \frac{\partial(u,v)}{\partial(x,y)} = \begin{vmatrix} 1 & 1 \\ 3 & -2\end{vmatrix} = -5, \qquad |J| = \left|\frac{\partial(x,y)}{\partial(u,v)}\right| = \frac15.$$

**New region.** The four lines become $u = 0$, $u = 2$, $v = 0$, $v = 3$: a rectangle.

$$I = \int_0^3\int_0^2 u^2\cdot\frac15\,du\,dv = \frac15\cdot\frac83\cdot3 = \frac85.$$

**Que 2.16.** Show that the area in the positive quadrant bounded by the curves $y^2 = 4ax$, $y^2 = 4bx$, $xy = c$, $xy = d$ (with $0 < a < b$, $0 < c < d$) is $\dfrac13(d - c)\log\dfrac ba$. [PYQ 2025-26]

**Answer:**

Choose new variables that make the boundaries constant:

$$u = \frac{y^2}{x}, \qquad v = xy.$$

Then the curves become $u = 4a$, $u = 4b$, $v = c$, $v = d$.

**Jacobian.**

$$J' = \frac{\partial(u,v)}{\partial(x,y)} = \begin{vmatrix} -\dfrac{y^2}{x^2} & \dfrac{2y}{x} \\[2mm] y & x\end{vmatrix} = -\frac{y^2}{x} - \frac{2y^2}{x} = -\frac{3y^2}{x} = -3u.$$

So $|J| = \dfrac{1}{3u}$ and $dx\,dy = \dfrac{du\,dv}{3u}$.

**Area.**

$$A = \int_c^d\int_{4a}^{4b}\frac{1}{3u}\,du\,dv = \frac13(d - c)\left[\log u\right]_{4a}^{4b} = \frac13(d - c)\log\frac{b}{a}. \;\blacksquare$$

**Que 2.17.** Evaluate $\displaystyle\iint_R e^{(y - x)/(y + x)}\,dx\,dy$ over the triangle with vertices $(0,0)$, $(2,0)$, $(0,2)$, using $u = y - x$, $v = y + x$.

**Answer:**

$x = \dfrac{v - u}{2}$, $y = \dfrac{u + v}{2}$, so

$$J = \frac{\partial(x,y)}{\partial(u,v)} = \begin{vmatrix} -\tfrac12 & \tfrac12 \\ \tfrac12 & \tfrac12\end{vmatrix} = -\frac12, \qquad |J| = \frac12.$$

**New region.** The sides $x = 0$, $y = 0$, $x + y = 2$ become $u = v$, $u = -v$, $v = 2$. So $v$ goes from 0 to 2 and, for each $v$, $u$ from $-v$ to $v$.

$$I = \int_0^2\int_{-v}^{v} e^{u/v}\cdot\frac12\,du\,dv = \frac12\int_0^2 v\left(e - e^{-1}\right)dv = \frac12\left(e - \frac1e\right)\cdot2 = e - \frac1e.$$

### Part 5: Area by Double Integration

**Concept**

The area of a region is the double integral of 1:

$$A = \iint_R dx\,dy \quad\text{(Cartesian)}, \qquad A = \iint_R r\,dr\,d\theta \quad\text{(polar)}.$$

The double integral approach is the same as the school "area between curves", but it handles polar curves and complicated regions in one uniform way.

**Que 2.18.** Using double integration, find the area enclosed by the curves $y = 2 - x$ and $y^2 = 2(2 - x)$. [PYQ 2021-22]

**Answer:**

**Intersection.** Put $2 - x = y$ in $y^2 = 2(2 - x)$: $y^2 = 2y$, so $y = 0$ or $y = 2$. The points are $(2,0)$ and $(0,2)$.

For $0 \le y \le 2$, the parabola $x = 2 - \dfrac{y^2}{2}$ lies to the right of the line $x = 2 - y$ (at $y = 1$: $1.5 > 1$). Horizontal strips run from the line to the parabola:

$$A = \int_0^2\int_{2 - y}^{2 - y^2/2} dx\,dy = \int_0^2\left(y - \frac{y^2}{2}\right)dy = 2 - \frac{8}{6} = \frac23.$$

**Que 2.19.** Find the area inside the circle $r = 2a\cos\theta$ and outside the circle $r = a$. [PYQ 2024-25]

**Answer:**

**Intersection.** $2a\cos\theta = a \Rightarrow \cos\theta = \tfrac12 \Rightarrow \theta = \pm\tfrac\pi3$.

For $-\tfrac\pi3 \le \theta \le \tfrac\pi3$, a radial strip runs from $r = a$ out to $r = 2a\cos\theta$. By symmetry about the initial line,

$$A = 2\int_0^{\pi/3}\int_a^{2a\cos\theta} r\,dr\,d\theta = 2\int_0^{\pi/3}\frac{4a^2\cos^2\theta - a^2}{2}\,d\theta = a^2\int_0^{\pi/3}(2 + 2\cos2\theta - 1)\,d\theta$$

$$= a^2\left[\theta + \sin2\theta\right]_0^{\pi/3} = a^2\left(\frac\pi3 + \frac{\sqrt3}{2}\right).$$

**Que 2.20.** Find the area of the cardioid $r = a(1 + \cos\theta)$ by double integration.

**Answer:**

The cardioid is symmetric about the initial line; $\theta$ runs from 0 to $\pi$ for the upper half.

$$A = 2\int_0^\pi\int_0^{a(1+\cos\theta)} r\,dr\,d\theta = \int_0^\pi a^2(1 + \cos\theta)^2\,d\theta.$$

Using $1 + \cos\theta = 2\cos^2\tfrac\theta2$ and $\theta = 2\phi$:

$$A = a^2\int_0^\pi 4\cos^4\frac\theta2\,d\theta = 8a^2\int_0^{\pi/2}\cos^4\phi\,d\phi = 8a^2\cdot\frac{3\cdot1}{4\cdot2}\cdot\frac\pi2 = \frac{3\pi a^2}{2}.$$

**Que 2.21.** Find the area between the parabolas $y^2 = 4ax$ and $x^2 = 4ay$.

**Answer:**

They meet where $\left(\dfrac{x^2}{4a}\right)^2 = 4ax$, i.e. $x^4 = 64a^3x$, $x = 0$ or $x = 4a$. Between them, $\dfrac{x^2}{4a} \le y \le 2\sqrt{ax}$.

$$A = \int_0^{4a}\left(2\sqrt a\,x^{1/2} - \frac{x^2}{4a}\right)dx = 2\sqrt a\cdot\frac23(4a)^{3/2} - \frac{(4a)^3}{12a} = \frac{32a^2}{3} - \frac{16a^2}{3} = \frac{16a^2}{3}.$$

### Part 6: Triple Integrals

**Concept**

A triple integral $\iiint_V f(x,y,z)\,dV$ adds up $f\,dV$ over a solid $V$. If $f = 1$ it gives the **volume** of $V$; if $f$ is a density, it gives the **mass**. It is evaluated as three repeated integrals. The innermost variable usually runs between two **surfaces**, the middle one between two **curves**, and the outer one between two **numbers**:

$$\iiint_V f\,dV = \int_{x=a}^{b}\int_{y=\phi_1(x)}^{\phi_2(x)}\int_{z=\psi_1(x,y)}^{\psi_2(x,y)} f(x,y,z)\,dz\,dy\,dx.$$

To find the limits, look at the solid from above: $z$ runs from the bottom surface to the top surface; then $(x,y)$ runs over the **shadow** (projection) of the solid on the $xy$-plane, which is handled exactly like a double integral.

For solids with circular symmetry use **cylindrical** coordinates ($dV = r\,dr\,d\theta\,dz$) or **spherical** coordinates ($dV = r^2\sin\theta\,dr\,d\theta\,d\phi$); these factors are the Jacobians of Unit 1, Que 1.40.

**Que 2.22.** Evaluate $\displaystyle\int_0^1\int_0^x\int_0^{x+y}(x + y + z)\,dz\,dy\,dx$. [PYQ 2022-23 type]

**Answer:**

**Innermost ($z$).** $\displaystyle\int_0^{x+y}(x + y + z)\,dz = (x + y)^2 + \frac{(x+y)^2}{2} = \frac32(x + y)^2.$

**Middle ($y$).** $\displaystyle\int_0^x\frac32(x + y)^2\,dy = \frac32\cdot\frac{(2x)^3 - x^3}{3} = \frac{7x^3}{2}.$

**Outer ($x$).** $\displaystyle\int_0^1\frac{7x^3}{2}\,dx = \frac78.$

**Que 2.23.** Evaluate $\displaystyle\int_0^a\int_0^x\int_0^{x+y} e^{x+y+z}\,dz\,dy\,dx$.

**Answer:**

$$\int_0^{x+y}e^{x+y+z}\,dz = e^{x+y}\left(e^{x+y} - 1\right) = e^{2(x+y)} - e^{x+y}.$$

$$\int_0^x\left(e^{2x+2y} - e^{x+y}\right)dy = \frac{e^{4x} - e^{2x}}{2} - (e^{2x} - e^x) = \frac12e^{4x} - \frac32e^{2x} + e^x.$$

$$\int_0^a\left(\frac12e^{4x} - \frac32e^{2x} + e^x\right)dx = \frac{e^{4a} - 1}{8} - \frac{3(e^{2a} - 1)}{4} + (e^a - 1) = \frac18e^{4a} - \frac34e^{2a} + e^a - \frac38.$$

**Que 2.24.** Evaluate $\displaystyle\iiint xyz\,dx\,dy\,dz$ over the positive octant of the sphere $x^2 + y^2 + z^2 = a^2$, using spherical coordinates.

**Answer:**

In spherical coordinates the octant is $0 \le r \le a$, $0 \le \theta \le \tfrac\pi2$, $0 \le \phi \le \tfrac\pi2$, and

$$xyz = r^3\sin^2\theta\cos\theta\sin\phi\cos\phi, \qquad dV = r^2\sin\theta\,dr\,d\theta\,d\phi.$$

$$I = \int_0^a r^5\,dr\int_0^{\pi/2}\sin^3\theta\cos\theta\,d\theta\int_0^{\pi/2}\sin\phi\cos\phi\,d\phi = \frac{a^6}{6}\cdot\frac14\cdot\frac12 = \frac{a^6}{48}.$$

**Que 2.25.** Evaluate $\displaystyle\iiint\frac{dx\,dy\,dz}{(x^2 + y^2 + z^2)^{3/2}}$ over the region between the spheres $x^2 + y^2 + z^2 = a^2$ and $x^2 + y^2 + z^2 = b^2$ ($b > a$).

**Answer:**

In spherical coordinates the integrand is $\dfrac{1}{r^3}$, and the region is $a \le r \le b$, $0 \le \theta \le \pi$, $0 \le \phi \le 2\pi$:

$$I = \int_0^{2\pi}\int_0^\pi\int_a^b\frac{1}{r^3}r^2\sin\theta\,dr\,d\theta\,d\phi = 2\pi\cdot2\cdot\log\frac ba = 4\pi\log\frac ba.$$

### Part 7: Volume by Multiple Integration

**Concept**

The volume of a solid can be found in two equivalent ways:

- as a **triple integral** $V = \iiint dx\,dy\,dz$, or
- as a **double integral** of the height: if the solid lies between $z = z_1(x,y)$ and $z = z_2(x,y)$ above a region $R$ of the $xy$-plane, $V = \iint_R (z_2 - z_1)\,dx\,dy$.

The second is just the first with the $z$-integration already done.

**Que 2.26.** Find the volume of the tetrahedron bounded by the coordinate planes and the plane $\dfrac xa + \dfrac yb + \dfrac zc = 1$.

**Answer:**

The top surface is $z = c\left(1 - \dfrac xa - \dfrac yb\right)$; the shadow is the triangle $x, y \ge 0$, $\dfrac xa + \dfrac yb \le 1$.

$$V = \int_0^a\int_0^{b(1 - x/a)} c\left(1 - \frac xa - \frac yb\right)dy\,dx.$$

Let $p = 1 - \dfrac xa$. The inner integral is $c\displaystyle\int_0^{bp}\left(p - \frac yb\right)dy = c\left(bp^2 - \frac{bp^2}{2}\right) = \frac{bc\,p^2}{2}$.

$$V = \frac{bc}{2}\int_0^a\left(1 - \frac xa\right)^2dx = \frac{bc}{2}\cdot\frac a3 = \frac{abc}{6}.$$

**Que 2.27.** Find the volume common to the cylinders $x^2 + y^2 = a^2$ and $x^2 + z^2 = a^2$. [PYQ 2021-22]

**Answer:**

By symmetry the solid has 8 equal parts, one in each octant. In the first octant: $z$ goes from 0 to $\sqrt{a^2 - x^2}$ (second cylinder), $y$ from 0 to $\sqrt{a^2 - x^2}$ (first cylinder), $x$ from 0 to $a$.

$$V = 8\int_0^a\int_0^{\sqrt{a^2-x^2}}\int_0^{\sqrt{a^2-x^2}}dz\,dy\,dx = 8\int_0^a\left(a^2 - x^2\right)dx = 8\left(a^3 - \frac{a^3}{3}\right) = \frac{16a^3}{3}.$$

**Que 2.28.** Find the volume of the sphere $x^2 + y^2 + z^2 = a^2$ using (i) spherical coordinates, (ii) a double integral in polar coordinates.

**Answer:**

**(i)**

$$V = \int_0^{2\pi}\int_0^\pi\int_0^a r^2\sin\theta\,dr\,d\theta\,d\phi = \frac{a^3}{3}\cdot2\cdot2\pi = \frac43\pi a^3.$$

**(ii)** The upper hemisphere is $z = \sqrt{a^2 - x^2 - y^2}$ over the disc $x^2 + y^2 \le a^2$. In polar form,

$$V = 2\int_0^{2\pi}\int_0^a\sqrt{a^2 - r^2}\,r\,dr\,d\theta = 2\cdot2\pi\left[-\frac13(a^2 - r^2)^{3/2}\right]_0^a = 4\pi\cdot\frac{a^3}{3} = \frac43\pi a^3.$$

**Que 2.29.** Find the volume bounded by the cylinder $x^2 + y^2 = 4$ and the planes $z = 0$ and $y + z = 4$.

**Answer:**

The height is $z = 4 - y$ above the disc $x^2 + y^2 \le 4$. In polar coordinates,

$$V = \int_0^{2\pi}\int_0^2(4 - r\sin\theta)\,r\,dr\,d\theta = \int_0^{2\pi}\left(8 - \frac83\sin\theta\right)d\theta = 16\pi.$$

(The $\sin\theta$ term integrates to zero over a full turn.)

**Que 2.30.** Find the volume of the solid in the first octant bounded by the ellipsoid $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} + \dfrac{z^2}{c^2} = 1$ and the coordinate planes. [PYQ 2025-26]

**Answer:**

Put $x = au$, $y = bv$, $z = cw$. Then $dx\,dy\,dz = abc\,du\,dv\,dw$, and the region becomes the first octant of the unit sphere $u^2 + v^2 + w^2 \le 1$, whose volume is $\tfrac18\cdot\tfrac43\pi = \tfrac\pi6$. So

$$V = abc\cdot\frac\pi6 = \frac{\pi abc}{6}.$$

(The volume of the whole ellipsoid is $8\times\dfrac{\pi abc}{6} = \dfrac43\pi abc$. Que 2.43 obtains the same result from Dirichlet's integral.)

### Part 8: Beta and Gamma Functions

**Concept**

Many definite integrals that appear in engineering, such as $\int_0^\infty x^4e^{-x}dx$, $\int_0^1 x^3(1 - x)^5dx$ or $\int_0^{\pi/2}\sin^6\theta\cos^3\theta\,d\theta$, can be done by repeated integration by parts, but that is long. The **Gamma** and **Beta** functions package these integrals once and for all. Once you know their properties, such integrals are evaluated in two or three lines. The Gamma function also extends the factorial to non-integers: $\Gamma(n + 1) = n!$, and it makes sense to speak of $\Gamma(\tfrac12) = \sqrt\pi$.

**Que 2.31.** Define the Gamma function. Prove that (i) $\Gamma(1) = 1$, (ii) $\Gamma(n + 1) = n\Gamma(n)$, (iii) $\Gamma(n + 1) = n!$ for positive integers $n$, (iv) $\Gamma\left(\tfrac12\right) = \sqrt\pi$. Also write the other standard forms of $\Gamma(n)$.

**Answer:**

**Definition.** For $n > 0$,

$$\Gamma(n) = \int_0^\infty e^{-x}x^{n-1}\,dx.$$

The integral converges for every $n > 0$.

**(i)** $\Gamma(1) = \displaystyle\int_0^\infty e^{-x}dx = 1$.

**(ii) Recurrence.** Integrate by parts with $u = x^n$, $dv = e^{-x}dx$:

$$\Gamma(n + 1) = \int_0^\infty x^ne^{-x}dx = \left[-x^ne^{-x}\right]_0^\infty + n\int_0^\infty x^{n-1}e^{-x}dx = 0 + n\Gamma(n).$$

(The boundary term is zero because $x^ne^{-x} \to 0$ as $x \to \infty$, and it is 0 at $x = 0$.)

**(iii)** Applying (ii) repeatedly: $\Gamma(n + 1) = n(n - 1)\cdots1\cdot\Gamma(1) = n!$. In particular $0! = \Gamma(1) = 1$.

**(iv)** In $\Gamma(\tfrac12) = \displaystyle\int_0^\infty e^{-x}x^{-1/2}dx$ put $x = t^2$, $dx = 2t\,dt$:

$$\Gamma\left(\tfrac12\right) = \int_0^\infty e^{-t^2}t^{-1}\cdot2t\,dt = 2\int_0^\infty e^{-t^2}dt = 2\cdot\frac{\sqrt\pi}{2} = \sqrt\pi,$$

using Que 2.11.

**Other forms** (by the substitutions $x = t^2$ and $x = kt$):

$$\Gamma(n) = 2\int_0^\infty e^{-t^2}t^{2n-1}dt, \qquad \int_0^\infty e^{-kx}x^{n-1}dx = \frac{\Gamma(n)}{k^n}\ (k > 0).$$

**Useful values:** $\Gamma(\tfrac32) = \tfrac12\sqrt\pi$, $\Gamma(\tfrac52) = \tfrac34\sqrt\pi$, $\Gamma(\tfrac72) = \tfrac{15}{8}\sqrt\pi$.

**Negative non-integers.** The recurrence written as $\Gamma(n) = \dfrac{\Gamma(n + 1)}{n}$ defines $\Gamma$ for negative non-integers, e.g. $\Gamma(-\tfrac12) = \dfrac{\Gamma(\tfrac12)}{-1/2} = -2\sqrt\pi$. $\Gamma$ is not defined at $0, -1, -2, \ldots$

**Que 2.32.** Define the Beta function. Prove that (i) $B(m,n) = B(n,m)$, (ii) $B(m,n) = 2\displaystyle\int_0^{\pi/2}\sin^{2m-1}\theta\cos^{2n-1}\theta\,d\theta$, (iii) $B(m,n) = \displaystyle\int_0^\infty\frac{x^{m-1}}{(1 + x)^{m+n}}\,dx$.

**Answer:**

**Definition.** For $m, n > 0$,

$$B(m,n) = \int_0^1 x^{m-1}(1 - x)^{n-1}\,dx.$$

**(i) Symmetry.** Put $x = 1 - t$: $B(m,n) = \displaystyle\int_1^0(1 - t)^{m-1}t^{n-1}(-dt) = \int_0^1 t^{n-1}(1 - t)^{m-1}dt = B(n,m)$.

**(ii) Trigonometric form.** Put $x = \sin^2\theta$, $dx = 2\sin\theta\cos\theta\,d\theta$; $x$ from 0 to 1 means $\theta$ from 0 to $\tfrac\pi2$:

$$B(m,n) = \int_0^{\pi/2}\sin^{2m-2}\theta\cos^{2n-2}\theta\cdot2\sin\theta\cos\theta\,d\theta = 2\int_0^{\pi/2}\sin^{2m-1}\theta\cos^{2n-1}\theta\,d\theta.$$

Equivalently, writing $p = 2m - 1$, $q = 2n - 1$:

$$\int_0^{\pi/2}\sin^p\theta\cos^q\theta\,d\theta = \frac12B\left(\frac{p+1}{2}, \frac{q+1}{2}\right) = \frac{\Gamma\left(\frac{p+1}{2}\right)\Gamma\left(\frac{q+1}{2}\right)}{2\,\Gamma\left(\frac{p+q+2}{2}\right)}.$$

**(iii) Infinite form.** Put $x = \dfrac{t}{1 + t}$, so $1 - x = \dfrac{1}{1 + t}$, $dx = \dfrac{dt}{(1 + t)^2}$, and $t$ goes from 0 to $\infty$:

$$B(m,n) = \int_0^\infty\frac{t^{m-1}}{(1 + t)^{m-1}}\cdot\frac{1}{(1 + t)^{n-1}}\cdot\frac{dt}{(1 + t)^2} = \int_0^\infty\frac{t^{m-1}}{(1 + t)^{m+n}}\,dt. \;\blacksquare$$

**Que 2.33.** Prove the relation between the Beta and Gamma functions: $B(m,n) = \dfrac{\Gamma(m)\Gamma(n)}{\Gamma(m + n)}$. [PYQ 2023-24]

**Answer:**

From Que 2.31, $\Gamma(m) = 2\displaystyle\int_0^\infty e^{-x^2}x^{2m-1}dx$ and $\Gamma(n) = 2\displaystyle\int_0^\infty e^{-y^2}y^{2n-1}dy$. Multiplying,

$$\Gamma(m)\Gamma(n) = 4\int_0^\infty\int_0^\infty e^{-(x^2 + y^2)}x^{2m-1}y^{2n-1}\,dx\,dy.$$

The region is the first quadrant. Change to polar coordinates $x = r\cos\theta$, $y = r\sin\theta$, $dx\,dy = r\,dr\,d\theta$, with $0 \le r < \infty$, $0 \le \theta \le \tfrac\pi2$:

$$\Gamma(m)\Gamma(n) = 4\int_0^{\pi/2}\int_0^\infty e^{-r^2}r^{2m+2n-1}\cos^{2m-1}\theta\sin^{2n-1}\theta\,dr\,d\theta$$

$$= \left[2\int_0^\infty e^{-r^2}r^{2(m+n)-1}dr\right]\left[2\int_0^{\pi/2}\cos^{2m-1}\theta\sin^{2n-1}\theta\,d\theta\right].$$

The first bracket is $\Gamma(m + n)$ (Que 2.31) and the second is $B(n, m) = B(m,n)$ (Que 2.32). Hence

$$\Gamma(m)\Gamma(n) = \Gamma(m + n)\,B(m,n), \qquad B(m,n) = \frac{\Gamma(m)\Gamma(n)}{\Gamma(m + n)}. \;\blacksquare$$

**Que 2.34.** Prove the recurrence relations for the Beta function: (i) $B(m, n + 1) = \dfrac{n}{m + n}B(m,n)$, (ii) $B(m,n) = B(m + 1, n) + B(m, n + 1)$. [PYQ 2023-24]

**Answer:**

**(i)** Using the Beta-Gamma relation and $\Gamma(n + 1) = n\Gamma(n)$:

$$B(m, n + 1) = \frac{\Gamma(m)\Gamma(n + 1)}{\Gamma(m + n + 1)} = \frac{\Gamma(m)\cdot n\Gamma(n)}{(m + n)\Gamma(m + n)} = \frac{n}{m + n}B(m,n).$$

Similarly $B(m + 1, n) = \dfrac{m}{m + n}B(m,n)$.

**(ii)** Adding the two results,

$$B(m + 1, n) + B(m, n + 1) = \frac{m + n}{m + n}B(m,n) = B(m,n).$$

**Direct proof of (ii).** $B(m + 1, n) + B(m, n + 1) = \displaystyle\int_0^1\left[x^m(1 - x)^{n-1} + x^{m-1}(1 - x)^n\right]dx = \int_0^1 x^{m-1}(1 - x)^{n-1}\left[x + (1 - x)\right]dx = B(m,n).$ $\blacksquare$

**Que 2.35.** State the reflection formula $\Gamma(n)\Gamma(1 - n) = \dfrac{\pi}{\sin n\pi}$ ($0 < n < 1$) and the duplication formula. Use them to find (i) $\Gamma\left(\tfrac14\right)\Gamma\left(\tfrac34\right)$, (ii) $\Gamma\left(\tfrac13\right)\Gamma\left(\tfrac23\right)$. [PYQ 2023-24]

**Answer:**

**Reflection formula.** For $0 < n < 1$, $\Gamma(n)\Gamma(1 - n) = \dfrac{\pi}{\sin n\pi}$. (It follows from Que 2.32 (iii) with $m + n = 1$ and the standard integral $\displaystyle\int_0^\infty\frac{x^{n-1}}{1 + x}dx = \frac{\pi}{\sin n\pi}$.) With $n = \tfrac12$ it gives $\Gamma(\tfrac12)^2 = \pi$ again.

**Duplication formula (Legendre).** $\Gamma(m)\Gamma\left(m + \tfrac12\right) = \dfrac{\sqrt\pi}{2^{2m-1}}\Gamma(2m)$.

**(i)** $n = \tfrac14$: $\Gamma\left(\tfrac14\right)\Gamma\left(\tfrac34\right) = \dfrac{\pi}{\sin(\pi/4)} = \pi\sqrt2$.

**(ii)** $n = \tfrac13$: $\Gamma\left(\tfrac13\right)\Gamma\left(\tfrac23\right) = \dfrac{\pi}{\sin(\pi/3)} = \dfrac{2\pi}{\sqrt3}$.

**Que 2.36.** Evaluate using Beta and Gamma functions: (i) $\displaystyle\int_0^\infty x^6e^{-2x}dx$, (ii) $\displaystyle\int_0^1 x^4(1 - x)^3dx$, (iii) $\displaystyle\int_0^{\pi/2}\sin^4\theta\cos^5\theta\,d\theta$, (iv) $\displaystyle\int_0^\infty\sqrt[4]{x}\,e^{-\sqrt x}dx$.

**Answer:**

**(i)** With $k = 2$, $n = 7$: $\dfrac{\Gamma(7)}{2^7} = \dfrac{720}{128} = \dfrac{45}{8}$.

**(ii)** $B(5, 4) = \dfrac{\Gamma(5)\Gamma(4)}{\Gamma(9)} = \dfrac{4!\,3!}{8!} = \dfrac{144}{40320} = \dfrac{1}{280}$.

**(iii)** $p = 4$, $q = 5$: $\dfrac{\Gamma\left(\frac52\right)\Gamma(3)}{2\Gamma\left(\frac{11}{2}\right)}$. Now $\Gamma\left(\tfrac{11}{2}\right) = \tfrac92\cdot\tfrac72\cdot\tfrac52\Gamma\left(\tfrac52\right)$, so

$$\int_0^{\pi/2}\sin^4\theta\cos^5\theta\,d\theta = \frac{2}{2\cdot\frac{315}{8}} = \frac{8}{315}.$$

**(iv)** Put $x = t^2$, $dx = 2t\,dt$: $\displaystyle\int_0^\infty t^{1/2}e^{-t}\cdot2t\,dt = 2\Gamma\left(\tfrac52\right) = 2\cdot\frac34\sqrt\pi = \frac{3\sqrt\pi}{2}$.

**Que 2.37.** Evaluate $\displaystyle\int_0^2 x^3\left(8 - x^3\right)^{1/3}dx$ using Beta and Gamma functions. [PYQ 2025-26]

**Answer:**

Put $x^3 = 8t$, i.e. $x = 2t^{1/3}$, $dx = \dfrac23t^{-2/3}dt$; $t$ from 0 to 1.

$$I = \int_0^1 8t\cdot2(1 - t)^{1/3}\cdot\frac23t^{-2/3}dt = \frac{32}{3}\int_0^1 t^{1/3}(1 - t)^{1/3}dt = \frac{32}{3}B\left(\frac43, \frac43\right).$$

Now $\Gamma\left(\tfrac43\right) = \tfrac13\Gamma\left(\tfrac13\right)$ and $\Gamma\left(\tfrac83\right) = \tfrac53\cdot\tfrac23\Gamma\left(\tfrac23\right) = \tfrac{10}{9}\Gamma\left(\tfrac23\right)$, so

$$B\left(\frac43,\frac43\right) = \frac{\frac19\Gamma\left(\frac13\right)^2}{\frac{10}{9}\Gamma\left(\frac23\right)} = \frac{\Gamma\left(\frac13\right)^2}{10\,\Gamma\left(\frac23\right)}.$$

$$I = \frac{32}{3}\cdot\frac{\Gamma\left(\frac13\right)^2}{10\,\Gamma\left(\frac23\right)} = \frac{16}{15}\cdot\frac{\Gamma\left(\frac13\right)^2}{\Gamma\left(\frac23\right)} \approx 5.653.$$

**Que 2.38.** Show that $\displaystyle\int_0^{\pi/2}\sqrt{\tan\theta}\,d\theta = \frac{\pi}{\sqrt2}$, and $\displaystyle\int_0^1\frac{dx}{\sqrt{1 - x^4}} = \frac{1}{4}B\left(\frac14, \frac12\right)$.

**Answer:**

**(a)** $\sqrt{\tan\theta} = \sin^{1/2}\theta\cos^{-1/2}\theta$, so with $p = \tfrac12$, $q = -\tfrac12$:

$$\int_0^{\pi/2}\sin^{1/2}\theta\cos^{-1/2}\theta\,d\theta = \frac{\Gamma\left(\frac34\right)\Gamma\left(\frac14\right)}{2\Gamma(1)} = \frac{\pi\sqrt2}{2} = \frac{\pi}{\sqrt2},$$

using Que 2.35 (i).

**(b)** Put $x^4 = t$, $x = t^{1/4}$, $dx = \tfrac14t^{-3/4}dt$:

$$\int_0^1\frac{dx}{\sqrt{1 - x^4}} = \frac14\int_0^1 t^{-3/4}(1 - t)^{-1/2}dt = \frac14B\left(\frac14, \frac12\right).$$

**Que 2.39.** Prove that $\displaystyle\int_0^\infty\frac{x^2}{1 + x^4}\,dx = \frac{\pi}{2\sqrt2}$.

**Answer:**

Put $x^4 = t$, so $x = t^{1/4}$, $dx = \tfrac14t^{-3/4}dt$, and $t$ goes from 0 to $\infty$:

$$I = \int_0^\infty\frac{t^{1/2}}{1 + t}\cdot\frac14t^{-3/4}\,dt = \frac14\int_0^\infty\frac{t^{-1/4}}{1 + t}\,dt.$$

Compare with the infinite form of the Beta function (Que 2.32 (iii)), $\displaystyle\int_0^\infty\frac{t^{m-1}}{(1+t)^{m+n}}dt = B(m,n)$: here $m - 1 = -\tfrac14$, so $m = \tfrac34$, and $m + n = 1$, so $n = \tfrac14$. Hence

$$I = \frac14B\left(\frac34, \frac14\right) = \frac14\cdot\frac{\Gamma\left(\frac34\right)\Gamma\left(\frac14\right)}{\Gamma(1)} = \frac14\cdot\pi\sqrt2 = \frac{\pi}{2\sqrt2}. \;\blacksquare$$

### Part 9: Dirichlet's Integral and Liouville's Extension

**Concept**

Many volume and mass problems reduce to integrating a product of powers $x^{l-1}y^{m-1}z^{n-1}$ over the region $x, y, z \ge 0$, $x + y + z \le 1$ (or over an octant of an ellipsoid, which becomes that region after a substitution). Dirichlet's theorem gives the answer at once in terms of Gamma functions, without doing three integrations.

**Que 2.40.** State Dirichlet's theorem for three variables and its generalised form. State Liouville's extension of Dirichlet's theorem. [PYQ 2024-25]

**Answer:**

**Dirichlet's theorem.** If $V$ is the region $x \ge 0$, $y \ge 0$, $z \ge 0$, $x + y + z \le 1$, then

$$\iiint_V x^{l-1}y^{m-1}z^{n-1}\,dx\,dy\,dz = \frac{\Gamma(l)\Gamma(m)\Gamma(n)}{\Gamma(l + m + n + 1)}.$$

For two variables over $x, y \ge 0$, $x + y \le 1$: $\displaystyle\iint x^{l-1}y^{m-1}dx\,dy = \frac{\Gamma(l)\Gamma(m)}{\Gamma(l + m + 1)}$.

**Generalised form.** If $V$ is the region $x, y, z \ge 0$, $\left(\dfrac xa\right)^p + \left(\dfrac yb\right)^q + \left(\dfrac zc\right)^r \le 1$, then

$$\iiint_V x^{l-1}y^{m-1}z^{n-1}\,dx\,dy\,dz = \frac{a^lb^mc^n}{pqr}\cdot\frac{\Gamma\left(\frac lp\right)\Gamma\left(\frac mq\right)\Gamma\left(\frac nr\right)}{\Gamma\left(\frac lp + \frac mq + \frac nr + 1\right)}.$$

(This follows from the first form by putting $\left(\tfrac xa\right)^p = u$, $\left(\tfrac yb\right)^q = v$, $\left(\tfrac zc\right)^r = w$.)

**Liouville's extension.** If $x, y, z \ge 0$ and $h_1 \le x + y + z \le h_2$, then

$$\iiint f(x + y + z)\,x^{l-1}y^{m-1}z^{n-1}\,dx\,dy\,dz = \frac{\Gamma(l)\Gamma(m)\Gamma(n)}{\Gamma(l + m + n)}\int_{h_1}^{h_2}f(h)\,h^{l+m+n-1}\,dh.$$

It allows an extra factor that depends on $x + y + z$.

**Que 2.41.** Using Dirichlet's integral, evaluate $\displaystyle\iiint xyz\,dx\,dy\,dz$ over the region $x, y, z \ge 0$, $x + y + z \le 1$. [PYQ 2022-23]

**Answer:**

Here $l - 1 = m - 1 = n - 1 = 1$, so $l = m = n = 2$:

$$\iiint xyz\,dV = \frac{\Gamma(2)\Gamma(2)\Gamma(2)}{\Gamma(7)} = \frac{1\cdot1\cdot1}{720} = \frac{1}{720}.$$

**Que 2.42.** Use Dirichlet's theorem to evaluate $\displaystyle\iiint xyz\,dx\,dy\,dz$ over the part of the ellipsoid $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} + \dfrac{z^2}{c^2} \le 1$ in the first octant. [PYQ 2024-25]

**Answer:**

(Over the whole ellipsoid the answer would be 0, because $xyz$ is odd in each variable; the question means the positive octant.)

Use the generalised form with $p = q = r = 2$ and $l = m = n = 2$:

$$I = \frac{a^2b^2c^2}{8}\cdot\frac{\Gamma(1)\Gamma(1)\Gamma(1)}{\Gamma(1 + 1 + 1 + 1)} = \frac{a^2b^2c^2}{8}\cdot\frac{1}{3!} = \frac{a^2b^2c^2}{48}.$$

**By substitution (same thing, step by step).** Put $\dfrac{x^2}{a^2} = u$, $\dfrac{y^2}{b^2} = v$, $\dfrac{z^2}{c^2} = w$. Then $x\,dx = \tfrac{a^2}{2}du$, etc., and the region becomes $u + v + w \le 1$:

$$I = \frac{a^2b^2c^2}{8}\iiint du\,dv\,dw = \frac{a^2b^2c^2}{8}\cdot\frac{\Gamma(1)^3}{\Gamma(4)} = \frac{a^2b^2c^2}{48}.$$

**Que 2.43.** Find the volume of the ellipsoid $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} + \dfrac{z^2}{c^2} = 1$ using Dirichlet's integral.

**Answer:**

Volume $= 8\times$ (volume in the first octant) $= 8\iiint dx\,dy\,dz$. With $l = m = n = 1$ and $p = q = r = 2$:

$$V = 8\cdot\frac{abc}{8}\cdot\frac{\Gamma\left(\frac12\right)^3}{\Gamma\left(\frac32 + 1\right)} = abc\cdot\frac{\pi^{3/2}}{\frac34\sqrt\pi} = \frac43\pi abc.$$

**Que 2.44.** Find the volume of the solid bounded by the coordinate planes and the surface $\left(\dfrac xa\right)^{1/2} + \left(\dfrac yb\right)^{1/2} + \left(\dfrac zc\right)^{1/2} = 1$. [PYQ 2023-24]

**Answer:**

Use the generalised Dirichlet form with $p = q = r = \tfrac12$ and $l = m = n = 1$:

$$V = \frac{abc}{\left(\frac12\right)^3}\cdot\frac{\Gamma(2)\Gamma(2)\Gamma(2)}{\Gamma(2 + 2 + 2 + 1)} = 8abc\cdot\frac{1}{\Gamma(7)} = \frac{8abc}{720} = \frac{abc}{90}.$$

**Step by step.** Put $\left(\tfrac xa\right)^{1/2} = u$, i.e. $x = au^2$, $dx = 2au\,du$, and similarly for $y, z$. The region becomes $u + v + w \le 1$ and

$$V = 8abc\iiint uvw\,du\,dv\,dw = 8abc\cdot\frac{1}{720} = \frac{abc}{90},$$

using Que 2.41.

**Que 2.45.** Find the mass of the octant of the ellipsoid $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} + \dfrac{z^2}{c^2} = 1$ when the density at any point is $\rho = kxyz$.

**Answer:**

$M = \iiint kxyz\,dV$ over the first octant $= k\cdot\dfrac{a^2b^2c^2}{48}$ by Que 2.42.

**Que 2.46.** Using Liouville's extension, evaluate $\displaystyle\iiint\frac{dx\,dy\,dz}{(x + y + z + 1)^3}$ over the region $x, y, z \ge 0$, $x + y + z \le 1$.

**Answer:**

Here $l = m = n = 1$ and $f(h) = \dfrac{1}{(h + 1)^3}$, with $h$ from 0 to 1:

$$I = \frac{\Gamma(1)^3}{\Gamma(3)}\int_0^1\frac{h^2}{(1 + h)^3}dh = \frac12\int_0^1\frac{h^2}{(1 + h)^3}dh.$$

Put $1 + h = t$: $\displaystyle\int_1^2\frac{(t - 1)^2}{t^3}dt = \int_1^2\left(\frac1t - \frac{2}{t^2} + \frac{1}{t^3}\right)dt = \log2 - 1 + \frac38 = \log2 - \frac58.$

$$I = \frac12\left(\log2 - \frac58\right).$$

**Remember:**

- $\Gamma(n + 1) = n\Gamma(n) = n!$; $\Gamma(\tfrac12) = \sqrt\pi$; $\displaystyle\int_0^\infty e^{-kx}x^{n-1}dx = \frac{\Gamma(n)}{k^n}$.
- $B(m,n) = \dfrac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$; $\displaystyle\int_0^{\pi/2}\sin^p\theta\cos^q\theta\,d\theta = \frac{\Gamma\left(\frac{p+1}2\right)\Gamma\left(\frac{q+1}2\right)}{2\Gamma\left(\frac{p+q+2}2\right)}$.
- $\Gamma(n)\Gamma(1 - n) = \dfrac{\pi}{\sin n\pi}$.
- Dirichlet: $\displaystyle\iiint x^{l-1}y^{m-1}z^{n-1} = \frac{\Gamma(l)\Gamma(m)\Gamma(n)}{\Gamma(l + m + n + 1)}$ over $x + y + z \le 1$.

### Short-Answer Questions (2 marks)

**Q1. Evaluate $\displaystyle\int_1^2\int_1^3 x^2y^2\,dx\,dy$.** [PYQ 2024-25]
$\dfrac{26}{3}\cdot\dfrac73 = \dfrac{182}{9}$.

**Q2. Evaluate $\displaystyle\int_0^1\int_0^x e^{x}\,dy\,dx$.**
$\displaystyle\int_0^1 xe^x\,dx = 1$.

**Q3. Write the element of area in polar coordinates and the element of volume in spherical coordinates.**
$dx\,dy = r\,dr\,d\theta$; $dx\,dy\,dz = r^2\sin\theta\,dr\,d\theta\,d\phi$.

**Q4. Evaluate $\displaystyle\int_0^{\pi}\int_0^{a\sin\theta} r\,dr\,d\theta$.**
$\displaystyle\int_0^\pi\frac{a^2\sin^2\theta}{2}d\theta = \frac{\pi a^2}{4}$.

**Q5. Evaluate $\displaystyle\int_0^1\int_0^1\int_0^1 (x + y + z)\,dx\,dy\,dz$.**
Each term gives $\tfrac12$, so the answer is $\tfrac32$.

**Q6. Find $\Gamma\left(\tfrac72\right)$.**
$\tfrac52\cdot\tfrac32\cdot\tfrac12\sqrt\pi = \dfrac{15\sqrt\pi}{8}$.

**Q7. Find $\Gamma\left(\tfrac14\right)\Gamma\left(\tfrac34\right)$.** [PYQ 2023-24]
$\dfrac{\pi}{\sin(\pi/4)} = \pi\sqrt2$.

**Q8. Find $\Gamma\left(-\tfrac32\right)$.**
$\Gamma\left(-\tfrac32\right) = \dfrac{\Gamma\left(-\frac12\right)}{-3/2} = \dfrac{-2\sqrt\pi}{-3/2} = \dfrac{4\sqrt\pi}{3}$.

**Q9. Write the relation between Beta and Gamma functions.**
$B(m,n) = \dfrac{\Gamma(m)\Gamma(n)}{\Gamma(m + n)}$.

**Q10. Show that $B(m,n) = B(m + 1, n) + B(m, n + 1)$.** [PYQ 2023-24]
See Que 2.34 (ii): $\int_0^1 x^{m-1}(1-x)^{n-1}[x + (1 - x)]dx$.

**Q11. Evaluate $\displaystyle\int_0^\infty e^{-x^2}dx$.**
$\dfrac{\sqrt\pi}{2}$.

**Q12. Evaluate $\displaystyle\int_0^1 x^5(1 - x)^3dx$.**
$B(6,4) = \dfrac{5!\,3!}{9!} = \dfrac{1}{504}$.

**Q13. Evaluate $\displaystyle\int_0^{\pi/2}\sin^6\theta\,d\theta$.**
$\dfrac{5\cdot3\cdot1}{6\cdot4\cdot2}\cdot\dfrac\pi2 = \dfrac{5\pi}{32}$.

**Q14. State Dirichlet's theorem.**
Over $x, y, z \ge 0$, $x + y + z \le 1$: $\iiint x^{l-1}y^{m-1}z^{n-1}dV = \dfrac{\Gamma(l)\Gamma(m)\Gamma(n)}{\Gamma(l + m + n + 1)}$.

**Q15. State Liouville's extension of Dirichlet's theorem.** [PYQ 2024-25]
See Que 2.40.

**Q16. Write the formula for area in polar coordinates.**
$A = \iint r\,dr\,d\theta = \dfrac12\int_\alpha^\beta(r_2^2 - r_1^2)\,d\theta$.

**Q17. Why is the order of integration changed?**
To make the inner integral possible or simpler, e.g. $\int\dfrac{e^{-y}}{y}dy$ cannot be done but $\int dx$ can.

**Q18. Evaluate $\displaystyle\int_0^2\int_0^{x}(x + y)\,dy\,dx$.**
$\displaystyle\int_0^2\frac32x^2dx = 4$.

### Practice Questions

1. Evaluate $\displaystyle\int_0^1\int_x^{\sqrt x}(x^2 + y^2)\,dy\,dx$. (Answer: $\tfrac{3}{35}$.)
2. Evaluate $\displaystyle\iint xy(x + y)\,dx\,dy$ over the region between $y = x^2$ and $y = x$. (Answer: $\tfrac{3}{56}$.)
3. Change the order and evaluate $\displaystyle\int_0^1\int_{y}^{1}e^{x^2}dx\,dy$. (Answer: $\tfrac{e - 1}{2}$.)
4. Change the order and evaluate $\displaystyle\int_0^a\int_{x^2/a}^{2a - x}xy\,dy\,dx$. (Answer: $\tfrac{3a^4}{8}$.)
5. Change the order in $\displaystyle\int_0^{4a}\int_{x^2/4a}^{2\sqrt{ax}}dy\,dx$ and evaluate. (Answer: $\tfrac{16a^2}{3}$.)
6. Evaluate $\displaystyle\int_0^a\int_0^{\sqrt{a^2-x^2}}\sqrt{a^2 - x^2 - y^2}\,dy\,dx$ by changing to polar coordinates. (Answer: $\tfrac{\pi a^3}{6}$.)
7. Evaluate $\displaystyle\iint\frac{dx\,dy}{\sqrt{1 - x^2 - y^2}}$ over the positive quadrant of the unit circle. (Answer: $\tfrac\pi2$.)
8. Find the area of one loop of $r = a\sin2\theta$. (Answer: $\tfrac{\pi a^2}{8}$.)
9. Find the area lying inside the cardioid $r = a(1 + \cos\theta)$ and outside the circle $r = a$. (Answer: $\tfrac{a^2}{4}(\pi + 8)$.)
10. Using $x + y = u$, $y = uv$, show that $\displaystyle\int_0^1\int_0^{1-x}e^{y/(x+y)}dy\,dx = \frac{e - 1}{2}$.
11. Evaluate $\displaystyle\int_{-1}^1\int_0^z\int_{x-z}^{x+z}(x + y + z)\,dy\,dx\,dz$. (Answer: 0.)
12. Find the volume of the cylinder $x^2 + y^2 = a^2$ cut off by the planes $z = 0$ and $z = mx$ on the side $x \ge 0$. (Answer: $\tfrac{2ma^3}{3}$.)
13. Find the volume bounded by the paraboloid $z = x^2 + y^2$ and the plane $z = 4$. (Answer: $8\pi$.)
14. Show that $\displaystyle\int_0^\infty\frac{x^8(1 - x^6)}{(1 + x)^{24}}dx = 0$.
15. Evaluate $\displaystyle\int_0^1 x^3\sqrt{1 - x^2}\,dx$ in terms of Beta functions. (Answer: $\tfrac12B(2,\tfrac32) = \tfrac{2}{15}$.)
16. Evaluate $\displaystyle\int_0^\infty x^4e^{-x^2}dx$. (Answer: $\tfrac{3\sqrt\pi}{8}$.)
17. Evaluate $\displaystyle\iiint x^{1/2}y^{1/2}z^{1/2}\,dx\,dy\,dz$ over $x + y + z \le 1$, $x, y, z \ge 0$. (Answer: $\dfrac{\Gamma(3/2)^3}{\Gamma(11/2)} = \dfrac{4\pi}{945}$.)
18. Find the mass of a plate in the form of the quadrant of the ellipse $\tfrac{x^2}{a^2} + \tfrac{y^2}{b^2} = 1$ with density $kxy$. (Answer: $\tfrac{ka^2b^2}{8}$.)

### Previous Year Questions from Unit 2

| Year | Question (short form) | Solved in |
|---|---|---|
| 2025-26 | $\int_0^2 x^3(8 - x^3)^{1/3}dx$ by Beta-Gamma | Que 2.37 |
| 2025-26 | Area bounded by $y^2 = 4ax$, $y^2 = 4bx$, $xy = c$, $xy = d$ | Que 2.16 |
| 2025-26 | Volume of ellipsoid in the first octant | Que 2.30 |
| 2025-26 | Change of order between parabola-type curves | Que 2.6, 2.7 |
| 2024-25 | $\int_1^2\int_1^3 x^2y^2\,dx\,dy$ | Que 2.2 |
| 2024-25 | Change the order: $\int_0^{2a}\int_{x^2/4a}^{3a-x}(x^2 + y^2)$ | Que 2.7 |
| 2024-25 | Area inside $r = 2a\cos\theta$, outside $r = a$ | Que 2.19 |
| 2024-25 | Dirichlet: $\iiint xyz$ over an ellipsoid; Liouville's theorem | Que 2.42, 2.40 |
| 2023-24 | $\Gamma(\tfrac14)\Gamma(\tfrac34)$; Beta recurrence | Que 2.35, 2.34 |
| 2023-24 | Change of variables over a region bounded by four lines | Que 2.15 |
| 2023-24 | Volume under $(x/a)^{1/2} + (y/b)^{1/2} + (z/c)^{1/2} = 1$ | Que 2.44 |
| 2023-24 | Prove $B(m,n) = \Gamma(m)\Gamma(n)/\Gamma(m+n)$ | Que 2.33 |
| 2022-23 | $\iint y$ over the region between $y = x$ and $y^2 = 4x - x^2$ | Que 2.3 |
| 2022-23 | Triple integral with variable limits | Que 2.22 |
| 2022-23 | Dirichlet: $\iiint xyz$ over $x + y + z \le 1$ | Que 2.41 |
| 2021-22 | $\int_0^1\int_0^{x^2}e^{y/x}dy\,dx$ | Que 2.2 |
| 2021-22 | Volume common to two cylinders | Que 2.27 |
| 2021-22 | Change the order: $\int_0^1\int_{x^2}^{2-x}$ | Que 2.6 |
| 2021-22 | Area between $y = 2 - x$ and $y^2 = 2(2 - x)$ | Que 2.18 |

## Unit 3: Vector Calculus

### Unit overview

Many physical quantities are **fields**: they have a value at every point of space. Temperature in a room is a **scalar field** $\phi(x,y,z)$ (one number at each point). The velocity of air in the room, or the electric field around a charge, is a **vector field** $\vec F(x,y,z)$ (an arrow at each point). Vector calculus studies how such fields change from point to point and how they add up along curves, over surfaces and through volumes.

The whole unit is built from one operator, **del** (or nabla):

$$\nabla = \hat i\frac{\partial}{\partial x} + \hat j\frac{\partial}{\partial y} + \hat k\frac{\partial}{\partial z}.$$

Applied in three ways it gives the three key quantities:

| Operation | Acts on | Gives | Physical meaning |
|---|---|---|---|
| gradient $\nabla\phi$ | scalar field | vector | direction and rate of fastest increase of $\phi$ |
| divergence $\nabla\cdot\vec F$ | vector field | scalar | net outflow per unit volume (source strength) |
| curl $\nabla\times\vec F$ | vector field | vector | rotation (circulation per unit area) |

The second half of the unit integrates fields. Three great theorems connect the integrals: **Green's theorem** (plane), **Stokes' theorem** (surface and its boundary curve) and **Gauss's divergence theorem** (solid and its boundary surface). Each one says that adding up a derivative over a region equals adding up the field over the boundary of that region.

**What you should already know:** dot and cross products (Chapter 0, Part 4), partial derivatives (Unit 1), double and triple integrals (Unit 2).

**Most asked in the last five papers:** unit normal to a surface, directional derivative (along a given vector, along a normal, along a tangent to a curve), proving a field irrotational or solenoidal and finding constants, $\nabla\cdot(\nabla r^n) = n(n+1)r^{n-2}$, $\nabla\times\vec r = 0$, and one verification or evaluation by Green's, Stokes' or Gauss's theorem every year.

### Part 1: Vector Functions and their Derivatives

**Concept**

A vector function $\vec r(t) = x(t)\hat i + y(t)\hat j + z(t)\hat k$ describes a moving point or a curve in space. It is differentiated component by component:

$$\frac{d\vec r}{dt} = \frac{dx}{dt}\hat i + \frac{dy}{dt}\hat j + \frac{dz}{dt}\hat k.$$

If $t$ is time, $\dfrac{d\vec r}{dt}$ is the **velocity** and $\dfrac{d^2\vec r}{dt^2}$ the **acceleration**. Geometrically, $\dfrac{d\vec r}{dt}$ is a vector along the **tangent** to the curve. The usual product rules hold, with the order kept in cross products:

$$\frac{d}{dt}(\vec a\cdot\vec b) = \frac{d\vec a}{dt}\cdot\vec b + \vec a\cdot\frac{d\vec b}{dt}, \qquad \frac{d}{dt}(\vec a\times\vec b) = \frac{d\vec a}{dt}\times\vec b + \vec a\times\frac{d\vec b}{dt}.$$

**Que 3.1.** A particle moves along the curve $x = e^{-t}$, $y = 2\cos3t$, $z = 2\sin3t$. Find its velocity and acceleration at $t = 0$, and their magnitudes.

**Answer:**

$$\vec r = e^{-t}\hat i + 2\cos3t\,\hat j + 2\sin3t\,\hat k.$$

$$\vec v = \frac{d\vec r}{dt} = -e^{-t}\hat i - 6\sin3t\,\hat j + 6\cos3t\,\hat k, \qquad \vec a = \frac{d^2\vec r}{dt^2} = e^{-t}\hat i - 18\cos3t\,\hat j - 18\sin3t\,\hat k.$$

At $t = 0$: $\vec v = -\hat i + 6\hat k$, $|\vec v| = \sqrt{37}$; $\vec a = \hat i - 18\hat j$, $|\vec a| = \sqrt{325} = 5\sqrt{13}$.

**Que 3.2.** Find the unit tangent vector to the helix $\vec r = a\cos t\,\hat i + a\sin t\,\hat j + at\,\hat k$ at $t = \tfrac\pi4$.

**Answer:**

$$\frac{d\vec r}{dt} = -a\sin t\,\hat i + a\cos t\,\hat j + a\hat k, \qquad \left|\frac{d\vec r}{dt}\right| = a\sqrt{\sin^2t + \cos^2t + 1} = a\sqrt2.$$

At $t = \tfrac\pi4$: $\dfrac{d\vec r}{dt} = a\left(-\tfrac{1}{\sqrt2}\hat i + \tfrac{1}{\sqrt2}\hat j + \hat k\right)$, so the unit tangent is

$$\hat T = \frac{1}{\sqrt2}\left(-\frac{1}{\sqrt2}\hat i + \frac{1}{\sqrt2}\hat j + \hat k\right) = -\frac12\hat i + \frac12\hat j + \frac{1}{\sqrt2}\hat k.$$

### Part 2: Gradient, Normal and Directional Derivative

**Concept**

Stand at a point in a room where the temperature is $\phi(x,y,z)$. If you take a small step, the temperature changes; how much depends on the **direction** of the step. There is one direction in which it rises fastest. The **gradient** $\nabla\phi$ is the vector pointing in that direction, with length equal to that fastest rate. Two facts follow:

1. The rate of change in any other direction $\hat a$ is the component of $\nabla\phi$ along $\hat a$: this is the **directional derivative** $\nabla\phi\cdot\hat a$.
2. Along a level surface $\phi = c$ the temperature does not change, so the rate in any direction along the surface is 0. Therefore $\nabla\phi$ is **perpendicular (normal) to the level surface**.

**Que 3.3.** Define the gradient of a scalar field. Prove that $\nabla\phi$ is normal to the level surface $\phi(x,y,z) = c$. Define the directional derivative and show that it is maximum along $\nabla\phi$.

**Answer:**

**Gradient.** For a differentiable scalar field $\phi(x,y,z)$,

$$\operatorname{grad}\phi = \nabla\phi = \frac{\partial\phi}{\partial x}\hat i + \frac{\partial\phi}{\partial y}\hat j + \frac{\partial\phi}{\partial z}\hat k.$$

**Normal property.** Let $\vec r(t) = x(t)\hat i + y(t)\hat j + z(t)\hat k$ be any curve lying on the surface $\phi = c$. Then $\phi(x(t), y(t), z(t)) = c$ for all $t$. Differentiating by the chain rule,

$$\frac{\partial\phi}{\partial x}\frac{dx}{dt} + \frac{\partial\phi}{\partial y}\frac{dy}{dt} + \frac{\partial\phi}{\partial z}\frac{dz}{dt} = 0, \quad\text{i.e.}\quad \nabla\phi\cdot\frac{d\vec r}{dt} = 0.$$

$\dfrac{d\vec r}{dt}$ is tangent to the curve, hence tangent to the surface. Since this holds for every curve on the surface through the point, $\nabla\phi$ is perpendicular to every tangent direction: **$\nabla\phi$ is along the normal**. The unit normal is

$$\hat n = \frac{\nabla\phi}{|\nabla\phi|}.$$

**Directional derivative.** The rate of change of $\phi$ at a point $P$ in the direction of a unit vector $\hat a$ is

$$D_{\hat a}\phi = \lim_{s\to0}\frac{\phi(P + s\hat a) - \phi(P)}{s} = \frac{\partial\phi}{\partial x}a_1 + \frac{\partial\phi}{\partial y}a_2 + \frac{\partial\phi}{\partial z}a_3 = \nabla\phi\cdot\hat a.$$

If the direction is given by a vector $\vec a$ that is not a unit vector, first divide by its length: $D\phi = \nabla\phi\cdot\dfrac{\vec a}{|\vec a|}$.

**Maximum.** $\nabla\phi\cdot\hat a = |\nabla\phi|\cos\theta$, where $\theta$ is the angle between $\nabla\phi$ and $\hat a$. It is largest when $\theta = 0$, i.e. along $\nabla\phi$, and the maximum value is $|\nabla\phi|$. It is zero along the surface ($\theta = 90^\circ$) and most negative opposite to $\nabla\phi$.

**Properties of the gradient.** $\nabla(\phi \pm \psi) = \nabla\phi \pm \nabla\psi$, $\nabla(\phi\psi) = \phi\nabla\psi + \psi\nabla\phi$, $\nabla f(\phi) = f'(\phi)\nabla\phi$, and $\nabla\phi = \vec0$ everywhere if and only if $\phi$ is constant.

**Que 3.4.** If $\vec r = x\hat i + y\hat j + z\hat k$ and $r = |\vec r|$, prove that (i) $\nabla r = \dfrac{\vec r}{r}$, (ii) $\nabla r^n = nr^{n-2}\vec r$, (iii) $\nabla\left(\dfrac1r\right) = -\dfrac{\vec r}{r^3}$, (iv) $\nabla f(r) = f'(r)\dfrac{\vec r}{r}$.

**Answer:**

$r^2 = x^2 + y^2 + z^2$ gives $\dfrac{\partial r}{\partial x} = \dfrac xr$, $\dfrac{\partial r}{\partial y} = \dfrac yr$, $\dfrac{\partial r}{\partial z} = \dfrac zr$.

**(i)** $\nabla r = \dfrac xr\hat i + \dfrac yr\hat j + \dfrac zr\hat k = \dfrac{\vec r}{r}$ (the unit vector $\hat r$).

**(iv)** $\nabla f(r) = \sum\hat i\,f'(r)\dfrac{\partial r}{\partial x} = f'(r)\nabla r = f'(r)\dfrac{\vec r}{r}$.

**(ii)** With $f = r^n$: $\nabla r^n = nr^{n-1}\dfrac{\vec r}{r} = nr^{n-2}\vec r$.

**(iii)** With $n = -1$: $\nabla r^{-1} = -r^{-3}\vec r = -\dfrac{\vec r}{r^3}$. $\blacksquare$

**Que 3.5.** Find the unit normal to the surface $xy^3z^2 = 4$ at the point $(-1, -1, 2)$. [PYQ 2023-24]

**Answer:**

Let $\phi = xy^3z^2$. Then

$$\nabla\phi = y^3z^2\,\hat i + 3xy^2z^2\,\hat j + 2xy^3z\,\hat k.$$

At $(-1,-1,2)$: $y^3z^2 = (-1)(4) = -4$; $3xy^2z^2 = 3(-1)(1)(4) = -12$; $2xy^3z = 2(-1)(-1)(2) = 4$.

$$\nabla\phi = -4\hat i - 12\hat j + 4\hat k, \qquad |\nabla\phi| = \sqrt{16 + 144 + 16} = \sqrt{176} = 4\sqrt{11}.$$

$$\hat n = \frac{-4\hat i - 12\hat j + 4\hat k}{4\sqrt{11}} = \frac{-\hat i - 3\hat j + \hat k}{\sqrt{11}}.$$

**Que 3.6.** Find the directional derivative of $\phi = x^2yz + 4xz^2$ at $(1, -2, -1)$ in the direction of $2\hat i - \hat j - 2\hat k$. Also find the greatest rate of increase of $\phi$ at that point and its direction.

**Answer:**

$$\nabla\phi = (2xyz + 4z^2)\hat i + x^2z\,\hat j + (x^2y + 8xz)\hat k.$$

At $(1,-2,-1)$: $\nabla\phi = (4 + 4)\hat i + (-1)\hat j + (-2 - 8)\hat k = 8\hat i - \hat j - 10\hat k$.

Unit vector: $\hat a = \dfrac{2\hat i - \hat j - 2\hat k}{3}$.

$$D\phi = \nabla\phi\cdot\hat a = \frac{16 + 1 + 20}{3} = \frac{37}{3}.$$

**Greatest rate** $= |\nabla\phi| = \sqrt{64 + 1 + 100} = \sqrt{165}$, in the direction of $8\hat i - \hat j - 10\hat k$.

**Que 3.7.** Find the directional derivative of $f = xyz$ at $P(1,1,3)$ in the direction of the outward normal to the sphere $x^2 + y^2 + z^2 = 11$ at $P$. [PYQ 2022-23]

**Answer:**

$\nabla f = yz\,\hat i + xz\,\hat j + xy\,\hat k = 3\hat i + 3\hat j + \hat k$ at $P$.

Normal to the sphere: $\nabla(x^2 + y^2 + z^2) = 2x\hat i + 2y\hat j + 2z\hat k = 2\hat i + 2\hat j + 6\hat k$ at $P$. The outward unit normal is

$$\hat n = \frac{\hat i + \hat j + 3\hat k}{\sqrt{11}}.$$

$$D f = \nabla f\cdot\hat n = \frac{3 + 3 + 3}{\sqrt{11}} = \frac{9}{\sqrt{11}}.$$

**Que 3.8.** Find the directional derivative of $f = xyz$ at $P(1,-1,2)$ in the direction of $2\hat i - 2\hat j + 2\hat k$. [PYQ 2021-22]

**Answer:**

$\nabla f = yz\,\hat i + xz\,\hat j + xy\,\hat k = -2\hat i + 2\hat j - \hat k$ at $P$. The unit vector is $\hat a = \dfrac{\hat i - \hat j + \hat k}{\sqrt3}$.

$$D f = \frac{-2 - 2 - 1}{\sqrt3} = -\frac{5}{\sqrt3}.$$

(The negative sign means $f$ decreases in this direction.)

**Que 3.9.** Find the directional derivative of $f(x,y,z) = e^{2x}\cos(yz)$ at the origin in the direction of the tangent to the curve $x = a\sin t$, $y = a\cos t$, $z = at$ at $t = \tfrac\pi4$. [PYQ 2023-24]

**Answer:**

**Gradient at the origin.**

$$\nabla f = 2e^{2x}\cos(yz)\,\hat i - ze^{2x}\sin(yz)\,\hat j - ye^{2x}\sin(yz)\,\hat k = 2\hat i \text{ at } (0,0,0).$$

**Tangent.** $\dfrac{d\vec r}{dt} = a\cos t\,\hat i - a\sin t\,\hat j + a\hat k = a\left(\tfrac{1}{\sqrt2}\hat i - \tfrac1{\sqrt2}\hat j + \hat k\right)$ at $t = \tfrac\pi4$. Its length is $a\sqrt2$, so

$$\hat T = \frac12\hat i - \frac12\hat j + \frac{1}{\sqrt2}\hat k.$$

$$D f = \nabla f\cdot\hat T = 2\cdot\frac12 = 1.$$

**Que 3.10.** Find the angle between the surfaces $x^2 + y^2 + z^2 = 9$ and $z = x^2 + y^2 - 3$ at the point $(2, -1, 2)$.

**Answer:**

The angle between two surfaces at a common point is the angle between their normals.

$\phi_1 = x^2 + y^2 + z^2$: $\nabla\phi_1 = 2x\hat i + 2y\hat j + 2z\hat k = 4\hat i - 2\hat j + 4\hat k$, length 6.

$\phi_2 = x^2 + y^2 - z$: $\nabla\phi_2 = 2x\hat i + 2y\hat j - \hat k = 4\hat i - 2\hat j - \hat k$, length $\sqrt{21}$.

$$\cos\theta = \frac{16 + 4 - 4}{6\sqrt{21}} = \frac{8}{3\sqrt{21}}, \qquad \theta = \cos^{-1}\frac{8}{3\sqrt{21}} \approx 54.4^\circ.$$

**Que 3.11.** Find the directional derivative of $\nabla\cdot\vec F$, where $\vec F = x^2y\,\hat i + xy^2\,\hat j + z^2\,\hat k$, at the point $(2,1,2)$ in the direction of the outward normal to the sphere $x^2 + y^2 + z^2 = 9$. [PYQ 2025-26 type]

**Answer:**

$\nabla\cdot\vec F = 2xy + 2xy + 2z = 4xy + 2z$. Call it $\phi$.

$\nabla\phi = 4y\,\hat i + 4x\,\hat j + 2\hat k = 4\hat i + 8\hat j + 2\hat k$ at $(2,1,2)$.

Outward normal to the sphere at $(2,1,2)$: $\nabla(x^2 + y^2 + z^2) = 4\hat i + 2\hat j + 4\hat k$, unit vector $\dfrac{2\hat i + \hat j + 2\hat k}{3}$.

$$D\phi = \frac{8 + 8 + 4}{3} = \frac{20}{3}.$$

**Que 3.12.** Find the values of $a$ and $b$ so that the surfaces $ax^2 - byz = (a + 2)x$ and $4x^2y + z^3 = 4$ cut orthogonally at $(1, -1, 2)$.

**Answer:**

**Point on both surfaces.** The second: $4(1)(-1) + 8 = 4$. $\checkmark$ The first: $a + 2b = a + 2 \Rightarrow b = 1$.

**Normals.** $\phi_1 = ax^2 - byz - (a + 2)x$: $\nabla\phi_1 = (2ax - a - 2)\hat i - bz\,\hat j - by\,\hat k = (a - 2)\hat i - 2\hat j + \hat k$ (with $b = 1$).

$\phi_2 = 4x^2y + z^3$: $\nabla\phi_2 = 8xy\,\hat i + 4x^2\hat j + 3z^2\hat k = -8\hat i + 4\hat j + 12\hat k$.

**Orthogonal** means the normals are perpendicular: $-8(a - 2) - 8 + 12 = 0 \Rightarrow -8a + 20 = 0 \Rightarrow a = \tfrac52$.

So $a = \tfrac52$, $b = 1$.

**Common mistake:** using the direction vector without making it a unit vector. The directional derivative is $\nabla\phi\cdot\hat a$, not $\nabla\phi\cdot\vec a$.

### Part 3: Divergence and Curl

**Concept**

Imagine $\vec F$ as the velocity of a flowing fluid.

- Put a tiny box at a point and measure how much fluid flows **out** minus how much flows **in**, per unit volume. That is the **divergence**. Positive divergence means a **source** (fluid is being created or the fluid expands there); negative means a **sink**. A field with zero divergence everywhere is **solenoidal** (incompressible): whatever flows in flows out.
- Put a tiny paddle wheel at the point. If the flow makes it spin, the field has **curl**; the curl vector points along the axis of spin, with length twice the angular speed. A field with zero curl everywhere is **irrotational**. Irrotational fields are exactly the gradient fields $\vec F = \nabla\phi$, and $\phi$ is called the **scalar potential**.

**Que 3.13.** Define divergence and curl of a vector field and explain their physical meaning. Define solenoidal and irrotational fields.

**Answer:**

Let $\vec F = F_1\hat i + F_2\hat j + F_3\hat k$.

**Divergence** (a scalar):

$$\operatorname{div}\vec F = \nabla\cdot\vec F = \frac{\partial F_1}{\partial x} + \frac{\partial F_2}{\partial y} + \frac{\partial F_3}{\partial z}.$$

**Curl** (a vector):

$$\operatorname{curl}\vec F = \nabla\times\vec F = \begin{vmatrix}\hat i & \hat j & \hat k \\ \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\ F_1 & F_2 & F_3\end{vmatrix} = \left(\frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z}\right)\hat i + \left(\frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x}\right)\hat j + \left(\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y}\right)\hat k.$$

**Physical meaning.** If $\vec F$ is the velocity of a fluid, $\nabla\cdot\vec F$ is the rate of outflow of fluid per unit volume at a point (expansion or source strength), and $\nabla\times\vec F$ is twice the angular velocity of the fluid particles there (rotation).

**Solenoidal field:** $\nabla\cdot\vec F = 0$ everywhere (no sources or sinks; e.g. the magnetic field, the flow of an incompressible fluid).

**Irrotational field:** $\nabla\times\vec F = \vec0$ everywhere. Then $\vec F = \nabla\phi$ for some scalar potential $\phi$, and the field is **conservative** (Part 4).

**Que 3.14.** If $\vec r = x\hat i + y\hat j + z\hat k$, prove that $\nabla\cdot\vec r = 3$ and $\nabla\times\vec r = \vec0$. Show further that $f(r)\,\vec r$ is irrotational for any differentiable $f$. [PYQ 2024-25]

**Answer:**

$$\nabla\cdot\vec r = \frac{\partial x}{\partial x} + \frac{\partial y}{\partial y} + \frac{\partial z}{\partial z} = 3.$$

$$\nabla\times\vec r = \begin{vmatrix}\hat i & \hat j & \hat k \\ \partial_x & \partial_y & \partial_z \\ x & y & z\end{vmatrix} = (0 - 0)\hat i + (0 - 0)\hat j + (0 - 0)\hat k = \vec0.$$

**$f(r)\vec r$.** Its components are $xf$, $yf$, $zf$. The $\hat i$ component of the curl is

$$\frac{\partial}{\partial y}(zf) - \frac{\partial}{\partial z}(yf) = zf'(r)\frac yr - yf'(r)\frac zr = 0.$$

The other two components vanish in the same way. So $\nabla\times\left(f(r)\vec r\right) = \vec0$: the field is irrotational. $\blacksquare$

(Shorter: by the identity $\nabla\times(\phi\vec A) = \nabla\phi\times\vec A + \phi\nabla\times\vec A$, we get $\nabla\times(f\vec r) = f'(r)\dfrac{\vec r}{r}\times\vec r + f\cdot\vec0 = \vec0$, since $\vec r\times\vec r = \vec0$.)

**Que 3.15.** Prove that $\nabla^2 r^n = \nabla\cdot(\nabla r^n) = n(n + 1)r^{n-2}$, and hence show that $\nabla^2\left(\dfrac1r\right) = 0$. [PYQ 2023-24, 2024-25]

**Answer:**

By Que 3.4, $\nabla r^n = nr^{n-2}\vec r = nr^{n-2}(x\hat i + y\hat j + z\hat k)$. So

$$\nabla\cdot(\nabla r^n) = \frac{\partial}{\partial x}\left(nr^{n-2}x\right) + \frac{\partial}{\partial y}\left(nr^{n-2}y\right) + \frac{\partial}{\partial z}\left(nr^{n-2}z\right).$$

$$\frac{\partial}{\partial x}\left(nr^{n-2}x\right) = n\left[r^{n-2} + x(n-2)r^{n-3}\frac xr\right] = n\left[r^{n-2} + (n - 2)x^2r^{n-4}\right].$$

Adding the three similar terms:

$$\nabla^2r^n = n\left[3r^{n-2} + (n - 2)(x^2 + y^2 + z^2)r^{n-4}\right] = n\left[3r^{n-2} + (n - 2)r^{n-2}\right] = n(n + 1)r^{n-2}. \;\blacksquare$$

**Deduction.** For $n = -1$: $\nabla^2r^{-1} = (-1)(0)r^{-3} = 0$. So $\dfrac1r$ satisfies **Laplace's equation** (it is a harmonic function).

**Que 3.16.** Prove that (i) $\operatorname{curl}(\operatorname{grad}\phi) = \vec0$, (ii) $\operatorname{div}(\operatorname{curl}\vec F) = 0$. Deduce that a gradient field is irrotational and a curl field is solenoidal. [PYQ 2025-26]

**Answer:**

**(i)**

$$\nabla\times\nabla\phi = \begin{vmatrix}\hat i & \hat j & \hat k \\ \partial_x & \partial_y & \partial_z \\ \phi_x & \phi_y & \phi_z\end{vmatrix} = (\phi_{zy} - \phi_{yz})\hat i + (\phi_{xz} - \phi_{zx})\hat j + (\phi_{yx} - \phi_{xy})\hat k = \vec0,$$

since mixed partial derivatives are equal.

**(ii)**

$$\nabla\cdot(\nabla\times\vec F) = \frac{\partial}{\partial x}\left(\frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z}\right) + \frac{\partial}{\partial y}\left(\frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x}\right) + \frac{\partial}{\partial z}\left(\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y}\right) = 0,$$

because the six terms cancel in pairs ($F_{3,yx} = F_{3,xy}$ and so on).

**Deduction.** If $\vec F = \nabla\phi$ then $\nabla\times\vec F = \vec0$: every gradient field (in particular the velocity field of a motion with a velocity potential) is irrotational. If $\vec F = \nabla\times\vec A$ then $\nabla\cdot\vec F = 0$: every curl field is solenoidal.

**Que 3.17.** Prove the identities (i) $\nabla\cdot(\phi\vec A) = \nabla\phi\cdot\vec A + \phi\,\nabla\cdot\vec A$, (ii) $\nabla\times(\phi\vec A) = \nabla\phi\times\vec A + \phi\,\nabla\times\vec A$.

**Answer:**

Write $\vec A = A_1\hat i + A_2\hat j + A_3\hat k$.

**(i)**

$$\nabla\cdot(\phi\vec A) = \sum\frac{\partial}{\partial x}(\phi A_1) = \sum\left(\frac{\partial\phi}{\partial x}A_1 + \phi\frac{\partial A_1}{\partial x}\right) = \nabla\phi\cdot\vec A + \phi\,\nabla\cdot\vec A.$$

**(ii)** The $\hat i$ component of $\nabla\times(\phi\vec A)$ is

$$\frac{\partial}{\partial y}(\phi A_3) - \frac{\partial}{\partial z}(\phi A_2) = \left(\phi_yA_3 - \phi_zA_2\right) + \phi\left(\frac{\partial A_3}{\partial y} - \frac{\partial A_2}{\partial z}\right),$$

which is the $\hat i$ component of $\nabla\phi\times\vec A$ plus that of $\phi\nabla\times\vec A$. The other components are similar. $\blacksquare$

**Que 3.18.** Find the constant $p$ such that $\vec A = (px + 4y^2z)\hat i + (x^3\sin z - 3y)\hat j - (e^x + 4\cos x^2y)\hat k$ is solenoidal. [PYQ 2021-22]

**Answer:**

$$\nabla\cdot\vec A = \frac{\partial}{\partial x}(px + 4y^2z) + \frac{\partial}{\partial y}(x^3\sin z - 3y) + \frac{\partial}{\partial z}\left[-(e^x + 4\cos x^2y)\right] = p - 3 + 0.$$

For a solenoidal field $p - 3 = 0$, so $p = 3$.

**Que 3.19.** Find the constants $a, b, c$ so that $\vec F = (x + 2y + az)\hat i + (bx - 3y - z)\hat j + (4x + cy + 2z)\hat k$ is irrotational, and find its scalar potential.

**Answer:**

$$\nabla\times\vec F = \left(c - (-1)\right)\hat i + (a - 4)\hat j + (b - 2)\hat k = (c + 1)\hat i + (a - 4)\hat j + (b - 2)\hat k.$$

For an irrotational field all components vanish: $a = 4$, $b = 2$, $c = -1$.

**Scalar potential.** Now $\vec F = (x + 2y + 4z)\hat i + (2x - 3y - z)\hat j + (4x - y + 2z)\hat k = \nabla\phi$. So

$$\phi_x = x + 2y + 4z, \quad \phi_y = 2x - 3y - z, \quad \phi_z = 4x - y + 2z.$$

Integrate the first in $x$: $\phi = \dfrac{x^2}{2} + 2xy + 4xz + g(y,z)$. Then $\phi_y = 2x + g_y = 2x - 3y - z$ gives $g_y = -3y - z$, so $g = -\dfrac{3y^2}{2} - yz + h(z)$. Finally $\phi_z = 4x - y + h'(z) = 4x - y + 2z$ gives $h = z^2$. Hence

$$\phi = \frac{x^2}{2} - \frac{3y^2}{2} + z^2 + 2xy + 4xz - yz + C.$$

**Que 3.20.** Is $\vec F = (x^2 - y^2 + x)\hat i - (2xy + y)\hat j$ irrotational? If so, find its scalar potential. [PYQ 2021-22]

**Answer:**

$$\nabla\times\vec F = \hat k\left[\frac{\partial}{\partial x}(-2xy - y) - \frac{\partial}{\partial y}(x^2 - y^2 + x)\right] = \hat k\left[-2y + 2y\right] = \vec0$$

(the $\hat i$, $\hat j$ components are 0 since nothing depends on $z$ and $F_3 = 0$). So $\vec F$ is irrotational.

$\phi_x = x^2 - y^2 + x \Rightarrow \phi = \dfrac{x^3}{3} - xy^2 + \dfrac{x^2}{2} + g(y)$. Then $\phi_y = -2xy + g'(y) = -2xy - y$, so $g = -\dfrac{y^2}{2}$:

$$\phi = \frac{x^3}{3} + \frac{x^2}{2} - xy^2 - \frac{y^2}{2} + C.$$

**Que 3.21.** Show that $\vec F = (y^2 - z^2 + 3yz - 2x)\hat i + (3xz + 2xy)\hat j + (3xy - 2xz + 2z)\hat k$ is both solenoidal and irrotational.

**Answer:**

**Divergence:** $-2 + 2x + (-2x + 2) = 0$. So $\vec F$ is solenoidal.

**Curl:**

- $\hat i$: $\dfrac{\partial}{\partial y}(3xy - 2xz + 2z) - \dfrac{\partial}{\partial z}(3xz + 2xy) = 3x - 3x = 0$,
- $\hat j$: $\dfrac{\partial}{\partial z}(y^2 - z^2 + 3yz - 2x) - \dfrac{\partial}{\partial x}(3xy - 2xz + 2z) = (-2z + 3y) - (3y - 2z) = 0$,
- $\hat k$: $\dfrac{\partial}{\partial x}(3xz + 2xy) - \dfrac{\partial}{\partial y}(y^2 - z^2 + 3yz - 2x) = (3z + 2y) - (2y + 3z) = 0$.

So $\vec F$ is also irrotational. $\blacksquare$

**Remember:**

- $\nabla\cdot\vec r = 3$, $\nabla\times\vec r = \vec0$, $\nabla r^n = nr^{n-2}\vec r$, $\nabla^2r^n = n(n+1)r^{n-2}$.
- $\nabla\times\nabla\phi = \vec0$ and $\nabla\cdot(\nabla\times\vec F) = 0$.
- Solenoidal: $\nabla\cdot\vec F = 0$. Irrotational: $\nabla\times\vec F = \vec0$, then $\vec F = \nabla\phi$.

### Part 4: Line, Surface and Volume Integrals

**Concept**

- A **line integral** $\int_C\vec F\cdot d\vec r$ adds up the component of $\vec F$ along a curve $C$. If $\vec F$ is a force, it is the **work done** in moving a particle along $C$. If $C$ is closed, it is written $\oint_C$ and called the **circulation** of $\vec F$ around $C$.
- A **surface integral** $\iint_S\vec F\cdot\hat n\,dS$ adds up the normal component of $\vec F$ over a surface $S$. If $\vec F$ is a velocity, it is the volume of fluid crossing $S$ per unit time: the **flux**.
- A **volume integral** $\iiint_V\phi\,dV$ is the triple integral of Unit 2.

**Que 3.22.** Define the line integral of a vector field. Explain how it is evaluated, and define a conservative field. Prove that if $\vec F = \nabla\phi$ then $\int_A^B\vec F\cdot d\vec r = \phi(B) - \phi(A)$, independent of the path.

**Answer:**

**Definition.** With $d\vec r = dx\,\hat i + dy\,\hat j + dz\,\hat k$,

$$\int_C\vec F\cdot d\vec r = \int_C(F_1\,dx + F_2\,dy + F_3\,dz).$$

**Evaluation.** Write the curve in parametric form $x = x(t)$, $y = y(t)$, $z = z(t)$, $t$ from $t_1$ to $t_2$. Substitute, so that everything becomes a function of $t$:

$$\int_C\vec F\cdot d\vec r = \int_{t_1}^{t_2}\left(F_1\frac{dx}{dt} + F_2\frac{dy}{dt} + F_3\frac{dz}{dt}\right)dt.$$

**Conservative field.** $\vec F$ is **conservative** if $\int_A^B\vec F\cdot d\vec r$ depends only on the end points $A$ and $B$, not on the path. Equivalently, $\oint_C\vec F\cdot d\vec r = 0$ for every closed curve. In a simply connected region, $\vec F$ is conservative $\iff \vec F = \nabla\phi \iff \nabla\times\vec F = \vec0$.

**Proof of path independence.** If $\vec F = \nabla\phi$,

$$\vec F\cdot d\vec r = \phi_x\,dx + \phi_y\,dy + \phi_z\,dz = d\phi.$$

So $\displaystyle\int_A^B\vec F\cdot d\vec r = \int_A^B d\phi = \phi(B) - \phi(A)$, which depends only on $A$ and $B$. $\blacksquare$

**Que 3.23.** If $\vec F = (3x^2 + 6y)\hat i - 14yz\,\hat j + 20xz^2\hat k$, evaluate $\int_C\vec F\cdot d\vec r$ from $(0,0,0)$ to $(1,1,1)$ along the curve $x = t$, $y = t^2$, $z = t^3$.

**Answer:**

On the curve $dx = dt$, $dy = 2t\,dt$, $dz = 3t^2\,dt$, and $t$ runs from 0 to 1.

$$F_1 = 3t^2 + 6t^2 = 9t^2, \qquad F_2 = -14t^2\cdot t^3 = -14t^5, \qquad F_3 = 20t\cdot t^6 = 20t^7.$$

$$\int_C\vec F\cdot d\vec r = \int_0^1\left(9t^2 - 28t^6 + 60t^9\right)dt = 3 - 4 + 6 = 5.$$

**Que 3.24.** Show that $\vec F = (2xy + z^3)\hat i + x^2\hat j + 3xz^2\hat k$ is conservative. Find its scalar potential and the work done in moving a particle from $(1,-2,1)$ to $(3,1,4)$.

**Answer:**

$$\nabla\times\vec F = (0 - 0)\hat i + (3z^2 - 3z^2)\hat j + (2x - 2x)\hat k = \vec0,$$

so $\vec F$ is conservative.

**Potential.** $\phi_x = 2xy + z^3 \Rightarrow \phi = x^2y + xz^3 + g(y,z)$. Then $\phi_y = x^2 + g_y = x^2 \Rightarrow g_y = 0$, and $\phi_z = 3xz^2 + g_z = 3xz^2 \Rightarrow g_z = 0$. So

$$\phi = x^2y + xz^3 + C.$$

**Work** $= \phi(3,1,4) - \phi(1,-2,1) = (9 + 192) - (-2 + 1) = 201 + 1 = 202$.

**Que 3.25.** Evaluate $\displaystyle\iint_S\vec F\cdot\hat n\,dS$, where $\vec F = 18z\,\hat i - 12\hat j + 3y\,\hat k$ and $S$ is the part of the plane $2x + 3y + 6z = 12$ in the first octant.

**Answer:**

**Normal.** $\nabla(2x + 3y + 6z) = 2\hat i + 3\hat j + 6\hat k$, so $\hat n = \dfrac{2\hat i + 3\hat j + 6\hat k}{7}$.

**Projection on the $xy$-plane.** $dS = \dfrac{dx\,dy}{|\hat n\cdot\hat k|} = \dfrac{7}{6}dx\,dy$, and the projection is the triangle $x, y \ge 0$, $2x + 3y \le 12$.

$$\vec F\cdot\hat n = \frac{36z - 36 + 18y}{7}.$$

On the plane $6z = 12 - 2x - 3y$, so $36z = 72 - 12x - 18y$ and $\vec F\cdot\hat n = \dfrac{36 - 12x}{7}$. Hence

$$\iint_S\vec F\cdot\hat n\,dS = \iint\frac{36 - 12x}{7}\cdot\frac76\,dx\,dy = \int_0^6\int_0^{(12-2x)/3}(6 - 2x)\,dy\,dx = \int_0^6(6 - 2x)\frac{12 - 2x}{3}dx.$$

$$= \frac13\int_0^6(72 - 36x + 4x^2)\,dx = \frac13\left(432 - 648 + 288\right) = 24.$$

**Exam tip:** for a surface integral, always project onto the coordinate plane on which the surface has a one-to-one shadow, and use $dS = \dfrac{dx\,dy}{|\hat n\cdot\hat k|}$ (or the similar formula with $\hat i$ or $\hat j$).

### Part 5: Green's Theorem in the Plane

**Concept**

Green's theorem says that the circulation of a plane field around a closed curve equals the total "spin" inside:

$$\oint_C (M\,dx + N\,dy) = \iint_R\left(\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}\right)dx\,dy.$$

The integrand on the right is the $\hat k$ component of $\nabla\times(M\hat i + N\hat j)$. Inside the region, the little circulations of neighbouring cells cancel along shared edges, and only the outer boundary survives. Green's theorem is the plane case of Stokes' theorem.

**Que 3.26.** State Green's theorem in the plane and give an outline of its proof. Deduce a formula for the area of a region. [PYQ 2021-22]

**Answer:**

**Statement.** Let $R$ be a closed region in the $xy$-plane bounded by a simple closed curve $C$, and let $M(x,y)$, $N(x,y)$ and their first partial derivatives be continuous on $R$. Then

$$\oint_C (M\,dx + N\,dy) = \iint_R\left(\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}\right)dx\,dy,$$

where $C$ is traversed in the **positive (anticlockwise)** direction, keeping the region on the left.

**Outline of proof.** Suppose $R$ is described both as $a \le x \le b$, $y_1(x) \le y \le y_2(x)$ and as $c \le y \le d$, $x_1(y) \le x \le x_2(y)$. Then

$$\iint_R\frac{\partial M}{\partial y}dx\,dy = \int_a^b\left[M(x, y_2(x)) - M(x, y_1(x))\right]dx = -\oint_C M\,dx,$$

because the lower curve $y_1$ is traversed from $a$ to $b$ and the upper curve $y_2$ from $b$ to $a$. Similarly $\iint_R\dfrac{\partial N}{\partial x}dx\,dy = \oint_C N\,dy$. Subtracting gives the theorem.

**Area.** Taking $M = -\tfrac12y$, $N = \tfrac12x$ gives $\dfrac{\partial N}{\partial x} - \dfrac{\partial M}{\partial y} = 1$, so

$$\text{Area of } R = \frac12\oint_C(x\,dy - y\,dx).$$

**Que 3.27.** Verify Green's theorem for $\oint_C\left[(xy + y^2)\,dx + x^2\,dy\right]$, where $C$ is the closed curve bounded by $y = x$ and $y = x^2$.

**Answer:**

The curves meet at $(0,0)$ and $(1,1)$. Here $M = xy + y^2$, $N = x^2$.

**Right side.** $\dfrac{\partial N}{\partial x} - \dfrac{\partial M}{\partial y} = 2x - (x + 2y) = x - 2y$.

$$\iint_R(x - 2y)\,dy\,dx = \int_0^1\left[xy - y^2\right]_{x^2}^{x}dx = \int_0^1\left(x^2 - x^2 - x^3 + x^4\right)dx = -\frac14 + \frac15 = -\frac{1}{20}.$$

**Left side.** Anticlockwise: along the parabola $y = x^2$ from $(0,0)$ to $(1,1)$, then back along the line $y = x$ from $(1,1)$ to $(0,0)$.

*Along $y = x^2$*, $dy = 2x\,dx$:

$$\int_0^1\left[(x^3 + x^4) + x^2\cdot2x\right]dx = \int_0^1(3x^3 + x^4)\,dx = \frac34 + \frac15 = \frac{19}{20}.$$

*Along $y = x$*, $dy = dx$, $x$ from 1 to 0:

$$\int_1^0(x^2 + x^2 + x^2)\,dx = \int_1^0 3x^2\,dx = -1.$$

Total: $\dfrac{19}{20} - 1 = -\dfrac{1}{20}$.

Both sides equal $-\tfrac{1}{20}$, so Green's theorem is verified. $\blacksquare$

**Que 3.28.** Using Green's theorem, evaluate $\displaystyle\oint_C\left[(y - \sin x)\,dx + \cos x\,dy\right]$, where $C$ is the triangle bounded by $y = 0$, $x = \tfrac\pi2$ and $y = \tfrac{2x}{\pi}$. [PYQ 2025-26]

**Answer:**

$M = y - \sin x$, $N = \cos x$: $\dfrac{\partial N}{\partial x} - \dfrac{\partial M}{\partial y} = -\sin x - 1$.

The triangle has vertices $(0,0)$, $\left(\tfrac\pi2, 0\right)$, $\left(\tfrac\pi2, 1\right)$; vertical strips run from $y = 0$ to $y = \tfrac{2x}{\pi}$.

$$\oint_C = \int_0^{\pi/2}\int_0^{2x/\pi}(-\sin x - 1)\,dy\,dx = -\frac2\pi\int_0^{\pi/2}x(\sin x + 1)\,dx.$$

$\displaystyle\int_0^{\pi/2}x\sin x\,dx = \left[-x\cos x + \sin x\right]_0^{\pi/2} = 1$ and $\displaystyle\int_0^{\pi/2}x\,dx = \frac{\pi^2}{8}$. So

$$\oint_C = -\frac2\pi\left(1 + \frac{\pi^2}{8}\right) = -\left(\frac2\pi + \frac\pi4\right).$$

**Que 3.29.** Using Green's theorem, find the area of the ellipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$.

**Answer:**

Parametrise: $x = a\cos t$, $y = b\sin t$, $0 \le t \le 2\pi$.

$$A = \frac12\oint(x\,dy - y\,dx) = \frac12\int_0^{2\pi}\left(a\cos t\cdot b\cos t + b\sin t\cdot a\sin t\right)dt = \frac12\int_0^{2\pi}ab\,dt = \pi ab.$$

### Part 6: Stokes' Theorem

**Concept**

Stokes' theorem lifts Green's theorem into space: for any surface $S$ (it need not be flat) with boundary curve $C$, the circulation of $\vec F$ around $C$ equals the flux of $\nabla\times\vec F$ through $S$. A remarkable consequence: all surfaces with the same boundary give the same value of $\iint(\nabla\times\vec F)\cdot\hat n\,dS$. So we may replace a hemisphere by the flat disc with the same rim, which often makes the work much shorter.

**Que 3.30.** State Stokes' theorem. Explain the orientation rule, and show that Green's theorem is a special case.

**Answer:**

**Statement.** Let $S$ be an open, two-sided surface bounded by a simple closed curve $C$, and let $\vec F$ have continuous first partial derivatives on $S$. Then

$$\oint_C\vec F\cdot d\vec r = \iint_S(\nabla\times\vec F)\cdot\hat n\,dS.$$

**Orientation (right-hand rule).** If the fingers of the right hand curl in the direction in which $C$ is traversed, the thumb points along $\hat n$. Equivalently, walking along $C$ with your head along $\hat n$, the surface is on your left.

**Green's theorem as a special case.** Let $S$ be a region $R$ of the $xy$-plane, so $\hat n = \hat k$ and $dS = dx\,dy$, and let $\vec F = M\hat i + N\hat j$. Then $\vec F\cdot d\vec r = M\,dx + N\,dy$ and $(\nabla\times\vec F)\cdot\hat k = \dfrac{\partial N}{\partial x} - \dfrac{\partial M}{\partial y}$. Stokes' theorem becomes Green's theorem.

**Que 3.31.** Verify Stokes' theorem for $\vec F = (x^2 + y^2)\hat i - 2xy\,\hat j$ taken round the rectangle bounded by $x = 0$, $x = a$, $y = 0$, $y = b$. [PYQ 2024-25]

**Answer:**

**Surface integral.** The rectangle lies in the $xy$-plane, so $\hat n = \hat k$.

$$\nabla\times\vec F = \hat k\left[\frac{\partial}{\partial x}(-2xy) - \frac{\partial}{\partial y}(x^2 + y^2)\right] = (-2y - 2y)\hat k = -4y\,\hat k.$$

$$\iint_S(\nabla\times\vec F)\cdot\hat k\,dS = \int_0^a\int_0^b(-4y)\,dy\,dx = -4\cdot a\cdot\frac{b^2}{2} = -2ab^2.$$

**Line integral.** $\vec F\cdot d\vec r = (x^2 + y^2)\,dx - 2xy\,dy$. Go anticlockwise $O(0,0) \to A(a,0) \to B(a,b) \to D(0,b) \to O$.

| Side | Equation | $\vec F\cdot d\vec r$ | Integral |
|---|---|---|---|
| $OA$ | $y = 0$, $dy = 0$, $x: 0 \to a$ | $x^2\,dx$ | $\dfrac{a^3}{3}$ |
| $AB$ | $x = a$, $dx = 0$, $y: 0 \to b$ | $-2ay\,dy$ | $-ab^2$ |
| $BD$ | $y = b$, $dy = 0$, $x: a \to 0$ | $(x^2 + b^2)\,dx$ | $-\dfrac{a^3}{3} - ab^2$ |
| $DO$ | $x = 0$, $dx = 0$, $y: b \to 0$ | $0$ | $0$ |

Total: $\dfrac{a^3}{3} - ab^2 - \dfrac{a^3}{3} - ab^2 = -2ab^2$.

Both sides equal $-2ab^2$, so Stokes' theorem is verified. $\blacksquare$

**Que 3.32.** Using Stokes' theorem, evaluate $\oint_C\vec F\cdot d\vec r$ for $\vec F = y^2\hat i + x^2\hat j + xz\,\hat k$, where $C$ is the boundary of the triangle with vertices $(0,0,0)$, $(1,0,0)$, $(1,1,0)$. [PYQ 2022-23 type]

**Answer:**

$$\nabla\times\vec F = \begin{vmatrix}\hat i & \hat j & \hat k \\ \partial_x & \partial_y & \partial_z \\ y^2 & x^2 & xz\end{vmatrix} = (0 - 0)\hat i + (0 - z)\hat j + (2x - 2y)\hat k.$$

The triangle is in the plane $z = 0$, with $\hat n = \hat k$. So

$$\oint_C\vec F\cdot d\vec r = \iint(2x - 2y)\,dx\,dy = \int_0^1\int_0^x(2x - 2y)\,dy\,dx = \int_0^1(2x^2 - x^2)\,dx = \frac13.$$

**Que 3.33.** Verify Stokes' theorem for $\vec F = (2x - y)\hat i - yz^2\,\hat j - y^2z\,\hat k$ over the upper half of the sphere $x^2 + y^2 + z^2 = 1$, bounded by its projection on the $xy$-plane.

**Answer:**

**Line integral.** The boundary $C$ is the circle $x^2 + y^2 = 1$, $z = 0$: $x = \cos t$, $y = \sin t$, $0 \le t \le 2\pi$. On $C$, $z = 0$, so $\vec F\cdot d\vec r = (2x - y)\,dx$.

$$\oint_C = \int_0^{2\pi}(2\cos t - \sin t)(-\sin t)\,dt = \int_0^{2\pi}\left(-\sin2t + \sin^2t\right)dt = 0 + \pi = \pi.$$

**Surface integral.**

$$\nabla\times\vec F = \begin{vmatrix}\hat i & \hat j & \hat k \\ \partial_x & \partial_y & \partial_z \\ 2x - y & -yz^2 & -y^2z\end{vmatrix} = (-2yz + 2yz)\hat i + (0 - 0)\hat j + (0 + 1)\hat k = \hat k.$$

On the hemisphere $\hat n = x\hat i + y\hat j + z\hat k$, so $(\nabla\times\vec F)\cdot\hat n = z$, and $dS = \dfrac{dx\,dy}{|\hat n\cdot\hat k|} = \dfrac{dx\,dy}{z}$. Hence

$$\iint_S(\nabla\times\vec F)\cdot\hat n\,dS = \iint_{x^2+y^2\le1} z\cdot\frac{dx\,dy}{z} = \iint dx\,dy = \pi.$$

Both sides equal $\pi$. $\blacksquare$

**Que 3.34.** Verify Stokes' theorem for $\vec F = (y - z + 2)\hat i + (yz + 4)\hat j - xz\,\hat k$ over the surface of the cube $x = 0, 2$; $y = 0, 2$; $z = 0, 2$ above the $xy$-plane (the bottom face is open). [PYQ 2021-22]

**Answer:**

**Curl.**

$$\nabla\times\vec F = \left(\frac{\partial(-xz)}{\partial y} - \frac{\partial(yz + 4)}{\partial z}\right)\hat i + \left(\frac{\partial(y - z + 2)}{\partial z} - \frac{\partial(-xz)}{\partial x}\right)\hat j + \left(\frac{\partial(yz+4)}{\partial x} - \frac{\partial(y - z + 2)}{\partial y}\right)\hat k$$

$$= -y\,\hat i + (z - 1)\hat j - \hat k.$$

**Surface integral over the five faces** (outward normals):

| Face | $\hat n$ | $(\nabla\times\vec F)\cdot\hat n$ | Integral over the face |
|---|---|---|---|
| $x = 2$ | $\hat i$ | $-y$ | $\int_0^2\int_0^2(-y)\,dy\,dz = -4$ |
| $x = 0$ | $-\hat i$ | $y$ | $+4$ |
| $y = 2$ | $\hat j$ | $z - 1$ | $\int_0^2\int_0^2(z - 1)\,dz\,dx = 0$ |
| $y = 0$ | $-\hat j$ | $1 - z$ | $0$ |
| $z = 2$ | $\hat k$ | $-1$ | $-4$ |

Total: $-4 + 4 + 0 + 0 - 4 = -4$.

**Line integral.** The boundary is the square $0 \le x, y \le 2$ in $z = 0$, traversed anticlockwise (seen from above). On $z = 0$: $\vec F\cdot d\vec r = (y + 2)\,dx + 4\,dy$.

| Side | $\vec F\cdot d\vec r$ | Integral |
|---|---|---|
| $y = 0$, $x: 0 \to 2$ | $2\,dx$ | $4$ |
| $x = 2$, $y: 0 \to 2$ | $4\,dy$ | $8$ |
| $y = 2$, $x: 2 \to 0$ | $4\,dx$ | $-8$ |
| $x = 0$, $y: 2 \to 0$ | $4\,dy$ | $-8$ |

Total: $4 + 8 - 8 - 8 = -4$.

Both sides equal $-4$. $\blacksquare$

### Part 7: Gauss's Divergence Theorem

**Concept**

Gauss's theorem says that the total outflow through a closed surface equals the total of the sources inside:

$$\iint_S\vec F\cdot\hat n\,dS = \iiint_V\nabla\cdot\vec F\,dV.$$

It converts a surface integral (often over several faces) into a single volume integral, which is usually much easier. In physics it gives Gauss's law of electrostatics and the equation of continuity of fluid flow.

**Que 3.35.** State Gauss's divergence theorem. Use it to show that $\iint_S\vec r\cdot\hat n\,dS = 3V$, where $V$ is the volume enclosed by the closed surface $S$.

**Answer:**

**Statement.** Let $V$ be a closed and bounded region in space whose boundary is a closed piecewise smooth surface $S$ with outward unit normal $\hat n$. If $\vec F$ has continuous first partial derivatives in $V$, then

$$\iint_S\vec F\cdot\hat n\,dS = \iiint_V\nabla\cdot\vec F\,dV.$$

**Application.** With $\vec F = \vec r$, $\nabla\cdot\vec r = 3$, so $\iint_S\vec r\cdot\hat n\,dS = \iiint_V 3\,dV = 3V$.

**Que 3.36.** Verify Gauss's divergence theorem for $\vec F = (x^2 - yz)\hat i + (y^2 - zx)\hat j + (z^2 - xy)\hat k$ taken over the rectangular parallelepiped $0 \le x \le a$, $0 \le y \le b$, $0 \le z \le c$.

**Answer:**

**Volume integral.** $\nabla\cdot\vec F = 2x + 2y + 2z$.

$$\iiint_V 2(x + y + z)\,dV = 2\left[\frac{a^2}{2}bc + \frac{b^2}{2}ac + \frac{c^2}{2}ab\right] = abc(a + b + c).$$

**Surface integral** over the six faces:

| Face | $\hat n$ | $\vec F\cdot\hat n$ on the face | Integral |
|---|---|---|---|
| $x = a$ | $\hat i$ | $a^2 - yz$ | $a^2bc - \dfrac{b^2c^2}{4}$ |
| $x = 0$ | $-\hat i$ | $yz$ | $\dfrac{b^2c^2}{4}$ |
| $y = b$ | $\hat j$ | $b^2 - zx$ | $b^2ac - \dfrac{a^2c^2}{4}$ |
| $y = 0$ | $-\hat j$ | $zx$ | $\dfrac{a^2c^2}{4}$ |
| $z = c$ | $\hat k$ | $c^2 - xy$ | $c^2ab - \dfrac{a^2b^2}{4}$ |
| $z = 0$ | $-\hat k$ | $xy$ | $\dfrac{a^2b^2}{4}$ |

(For example, on $x = a$: $\int_0^c\int_0^b(a^2 - yz)\,dy\,dz = a^2bc - \dfrac{b^2}{2}\cdot\dfrac{c^2}{2}$.)

Adding, the quarter terms cancel and the total is $a^2bc + ab^2c + abc^2 = abc(a + b + c)$.

Both sides are equal, so the theorem is verified. $\blacksquare$

**Que 3.37.** Using the divergence theorem, evaluate $\iint_S\vec F\cdot\hat n\,dS$, where $\vec F = 4x\,\hat i - 2y^2\,\hat j + z^2\,\hat k$ and $S$ is the surface bounding the region $x^2 + y^2 \le 4$, $0 \le z \le 3$. [PYQ 2022-23, 2023-24 type]

**Answer:**

$\nabla\cdot\vec F = 4 - 4y + 2z$. Use cylindrical coordinates ($dV = r\,dr\,d\theta\,dz$, $y = r\sin\theta$):

$$\iiint_V(4 - 4y + 2z)\,dV = \int_0^{2\pi}\int_0^2\int_0^3(4 - 4r\sin\theta + 2z)\,dz\,r\,dr\,d\theta.$$

The $\sin\theta$ term integrates to 0 over $0 \le \theta \le 2\pi$. The rest:

$$\int_0^3(4 + 2z)\,dz = 12 + 9 = 21, \qquad \iint r\,dr\,d\theta = \pi\cdot2^2 = 4\pi.$$

$$\iint_S\vec F\cdot\hat n\,dS = 21\times4\pi = 84\pi.$$

**Que 3.38.** Using the divergence theorem, evaluate $\iint_S\vec F\cdot\hat n\,dS$ for $\vec F = xy\,\hat i + yz\,\hat j + zx\,\hat k$, where $S$ is the surface of the region bounded by $x = 0$, $y = 0$, $z = 0$ and $2x + 2y + z = 4$. [PYQ 2025-26 type]

**Answer:**

$\nabla\cdot\vec F = y + z + x$. The region is the tetrahedron with $z$ from 0 to $4 - 2x - 2y$, over the triangle $x, y \ge 0$, $x + y \le 2$.

**Inner integral.** Let $s = x + y$; then $z$ runs from 0 to $4 - 2s$:

$$\int_0^{4 - 2s}(s + z)\,dz = s(4 - 2s) + \frac{(4 - 2s)^2}{2} = 4s - 2s^2 + 8 - 8s + 2s^2 = 8 - 4s.$$

**Outer integral** over the triangle (area 2):

$$\iint(8 - 4x - 4y)\,dx\,dy = 8\cdot2 - 4\int_0^2\int_0^{2-x}(x + y)\,dy\,dx = 16 - 4\cdot\frac83 = \frac{16}{3}.$$

(Here $\int_0^2\int_0^{2-x}(x + y)\,dy\,dx = \int_0^2\left[x(2 - x) + \tfrac{(2-x)^2}{2}\right]dx = \int_0^2\left(2 - \tfrac{x^2}{2}\right)dx = 4 - \tfrac43 = \tfrac83$.)

So $\iint_S\vec F\cdot\hat n\,dS = \dfrac{16}{3}$.

**Que 3.39.** Evaluate $\iint_S\vec F\cdot\hat n\,dS$ for $\vec F = 4xz\,\hat i - y^2\,\hat j + yz\,\hat k$ over the surface of the unit cube $0 \le x, y, z \le 1$.

**Answer:**

$\nabla\cdot\vec F = 4z - 2y + y = 4z - y$.

$$\iiint_V(4z - y)\,dV = 4\cdot\frac12 - \frac12 = \frac32.$$

**Remember:** the three theorems in one table.

| Theorem | Statement | Use it when |
|---|---|---|
| Green | $\oint_C(M\,dx + N\,dy) = \iint_R(N_x - M_y)\,dA$ | closed curve in a plane |
| Stokes | $\oint_C\vec F\cdot d\vec r = \iint_S(\nabla\times\vec F)\cdot\hat n\,dS$ | curve in space, or a surface with a rim |
| Gauss | $\iint_S\vec F\cdot\hat n\,dS = \iiint_V\nabla\cdot\vec F\,dV$ | closed surface (cube, cylinder, sphere, tetrahedron) |

### Short-Answer Questions (2 marks)

**Q1. Prove that $\nabla\times\vec r = \vec0$.** [PYQ 2024-25]
$\nabla\times(x\hat i + y\hat j + z\hat k)$: every component is a difference of zeros, e.g. $\partial_y z - \partial_z y = 0$.

**Q2. Find $\nabla\cdot\vec r$ and $\nabla r$.**
$\nabla\cdot\vec r = 3$; $\nabla r = \dfrac{\vec r}{r}$.

**Q3. Find the unit normal to $x^2 + y^2 - z = 1$ at $(1,1,1)$.**
$\nabla\phi = 2\hat i + 2\hat j - \hat k$; $\hat n = \dfrac{2\hat i + 2\hat j - \hat k}{3}$.

**Q4. Find the directional derivative of $\phi = xyz$ at $(1,1,1)$ along $\hat i$.**
$\nabla\phi\cdot\hat i = yz = 1$.

**Q5. Find the divergence of $\vec F = xy\,\hat i + yz\,\hat j + zx\,\hat k$.**
$y + z + x$.

**Q6. Find the curl of $\vec F = (x^2 + xy)\hat i + (x^2 + y^2)\hat j$.** [PYQ 2022-23]
$\hat k\left[2x - x\right] = x\,\hat k$.

**Q7. Show that $\vec F = yz\,\hat i + zx\,\hat j + xy\,\hat k$ is irrotational.** [PYQ 2023-24 type]
$\nabla\times\vec F = (x - x)\hat i + (y - y)\hat j + (z - z)\hat k = \vec0$. Its potential is $\phi = xyz$.

**Q8. Define a solenoidal field and give an example.**
$\nabla\cdot\vec F = 0$; example $\vec F = y\,\hat i + z\,\hat j + x\,\hat k$.

**Q9. Show that $\nabla\times(\nabla\phi) = \vec0$.** [PYQ 2025-26]
See Que 3.16: each component is a difference of equal mixed partial derivatives.

**Q10. Find $\nabla^2\left(\dfrac1r\right)$.**
$n(n + 1)r^{n-2}$ with $n = -1$ gives 0.

**Q11. What is the maximum value of the directional derivative of $\phi$?**
$|\nabla\phi|$, along $\nabla\phi$.

**Q12. State Green's theorem.** [PYQ 2021-22]
$\oint_C(M\,dx + N\,dy) = \iint_R\left(\dfrac{\partial N}{\partial x} - \dfrac{\partial M}{\partial y}\right)dx\,dy$, $C$ anticlockwise.

**Q13. State Stokes' theorem.**
$\oint_C\vec F\cdot d\vec r = \iint_S(\nabla\times\vec F)\cdot\hat n\,dS$.

**Q14. State Gauss's divergence theorem.**
$\iint_S\vec F\cdot\hat n\,dS = \iiint_V\nabla\cdot\vec F\,dV$.

**Q15. If $\vec F$ is conservative, what is $\oint_C\vec F\cdot d\vec r$?**
Zero, for every closed curve $C$.

**Q16. Evaluate $\iint_S\vec r\cdot\hat n\,dS$ over the sphere of radius $a$.**
$3V = 3\cdot\tfrac43\pi a^3 = 4\pi a^3$.

**Q17. Find the work done by $\vec F = \nabla(x^2y)$ from $(0,0,0)$ to $(1,2,0)$.**
$\phi(1,2,0) - \phi(0,0,0) = 2$.

### Practice Questions

1. Find the directional derivative of $\phi = 4xz^3 - 3x^2y^2z$ at $(2,-1,2)$ along $2\hat i - 3\hat j + 6\hat k$. (Answer: $\tfrac{376}{7}$.)
2. Find the directional derivative of $\phi = x^2 - y^2 + 2z^2$ at $P(1,2,3)$ in the direction of the line $PQ$, where $Q = (5,0,4)$. (Answer: $\tfrac{28}{\sqrt{21}}$.)
3. In what direction from $(3,1,-2)$ is the directional derivative of $\phi = x^2y^2z^4$ maximum? Find its magnitude. (Answer: along $96\hat i + 288\hat j - 288\hat k$; magnitude $96\sqrt{19}$.)
4. Find the angle between the normals to $xy = z^2$ at $(4,1,2)$ and $(3,3,-3)$. (Answer: $\cos^{-1}\tfrac{1}{\sqrt{22}}$.)
5. Show that $\nabla\cdot\left(\dfrac{\vec r}{r^3}\right) = 0$.
6. Prove that $\nabla\cdot(r^n\vec r) = (n + 3)r^n$, and find $n$ for which $r^n\vec r$ is solenoidal. (Answer: $n = -3$.)
7. Show that $\vec F = (6xy + z^3)\hat i + (3x^2 - z)\hat j + (3xz^2 - y)\hat k$ is irrotational and find its potential. (Answer: $3x^2y + xz^3 - yz$.)
8. Evaluate $\int_C\vec F\cdot d\vec r$ for $\vec F = x^2\hat i + xy\,\hat j$ from $(0,0)$ to $(1,1)$ along (i) $y = x$, (ii) $y = x^2$. (Answer: $\tfrac23$, $\tfrac{11}{15}$.)
9. Find the work done by $\vec F = (2x - y + z)\hat i + (x + y - z^2)\hat j + (3x - 2y + 4z)\hat k$ in moving a particle once round the circle $x^2 + y^2 = 9$, $z = 0$. (Answer: $18\pi$.)
10. Verify Green's theorem for $\oint[(3x^2 - 8y^2)\,dx + (4y - 6xy)\,dy]$ over the region bounded by $y = \sqrt x$ and $y = x^2$. (Answer: both sides $\tfrac32$.)
11. Using Green's theorem, evaluate $\oint[(x^2 - y)\,dx + (y^2 + x)\,dy]$ around the circle $x^2 + y^2 = 1$. (Answer: $2\pi$.)
12. Verify Stokes' theorem for $\vec F = y\,\hat i + z\,\hat j + x\,\hat k$ over the upper half of the unit sphere. (Answer: both sides $-\pi$.)
13. Use the divergence theorem to evaluate $\iint_S(x\,dy\,dz + y\,dz\,dx + z\,dx\,dy)$ over the sphere $x^2 + y^2 + z^2 = a^2$. (Answer: $4\pi a^3$.)
14. Verify the divergence theorem for $\vec F = x^2\hat i + y^2\hat j + z^2\hat k$ over the unit cube $0 \le x, y, z \le 1$. (Answer: both sides 3.)

### Previous Year Questions from Unit 3

| Year | Question (short form) | Solved in |
|---|---|---|
| 2025-26 | Gradient field is irrotational ($\nabla\times\nabla\phi = 0$) | Que 3.16 |
| 2025-26 | Directional derivative of $\nabla\cdot\vec F$ along the normal to a sphere | Que 3.11 |
| 2025-26 | Green's theorem for $(y - \sin x)dx + \cos x\,dy$ on a triangle | Que 3.28 |
| 2025-26 | Divergence theorem over the tetrahedron cut by $2x + 2y + z = 4$ | Que 3.38 |
| 2024-25 | Prove $\nabla\times\vec r = \vec0$; $f(r)\vec r$ irrotational | Que 3.14 |
| 2024-25 | $\nabla\cdot(\nabla r^n) = n(n+1)r^{n-2}$ | Que 3.15 |
| 2024-25 | Stokes for $(x^2 + y^2)\hat i - 2xy\hat j$ on a rectangle | Que 3.31 |
| 2023-24 | Irrotational field; unit normal to $xy^3z^2 = 4$ | Que 3.19, 3.5 |
| 2023-24 | Directional derivative of $e^{2x}\cos yz$ along a helix tangent | Que 3.9 |
| 2023-24 | Gauss's theorem over a cylinder | Que 3.37 |
| 2023-24 | $\nabla^2r^n = n(n+1)r^{n-2}$, $\nabla^2(1/r) = 0$ | Que 3.15 |
| 2022-23 | Curl of a plane field | Q6 |
| 2022-23 | Directional derivative of $xyz$ along the normal to a sphere | Que 3.7 |
| 2022-23 | Gauss over a cylinder; Stokes over a triangle | Que 3.37, 3.32 |
| 2021-22 | Constant $p$ for a solenoidal field | Que 3.18 |
| 2021-22 | Irrotational field and scalar potential | Que 3.20 |
| 2021-22 | Directional derivative of $xyz$ at $(1,-1,2)$ | Que 3.8 |
| 2021-22 | Stokes over an open cube; statement of Green's theorem | Que 3.34, 3.26 |

## Unit 4: Matrices

### Unit overview

A matrix is a rectangular table of numbers. It is the natural way to store and handle a system of linear equations, a transformation of space (rotation, stretching, projection), or a large data table. Almost every engineering computation, from circuit analysis to machine learning, ends up as a matrix problem.

This unit answers four practical questions:

1. **What kinds of matrices are there?** Symmetric, skew-symmetric, orthogonal, and their complex cousins Hermitian, skew-Hermitian and unitary.
2. **How much information does a matrix carry?** This is its **rank**, found by elementary transformations.
3. **When does a system $AX = B$ have a solution, and how do we find it?** Consistency tests, Gauss elimination, and the iterative Gauss-Seidel method.
4. **Which directions does a matrix simply stretch?** These are the **eigenvectors**, and the stretch factors are the **eigenvalues**. They lead to the Cayley-Hamilton theorem and to diagonalization, which turns a matrix into its simplest form.

**What you should already know:** matrix addition and multiplication, transpose, determinants and the adjoint formula for the inverse (Chapter 0, Part 4).

**Most asked in the last five papers:** eigenvalues and eigenvectors of a $3\times3$ matrix (every year), Cayley-Hamilton verification and inverse, consistency of a system with parameters $\lambda$, $\mu$ or $k$, normal form $PAQ$ and rank, Hermitian matrix facts, and eigenvalue properties in Section A.

### Part 1: Types of Matrices

**Concept**

Many matrices that occur in practice have special symmetry, and that symmetry forces useful properties. For example, the matrix of a symmetric quantity (like the stiffness matrix of a structure or a covariance matrix in statistics) always has real eigenvalues. For complex matrices the role of the transpose is played by the **conjugate transpose** $A^\theta = \overline{A}^T$ (also written $A^*$ or $A^H$): take the complex conjugate of every entry and then transpose.

**Que 4.1.** Define symmetric, skew-symmetric, orthogonal, Hermitian, skew-Hermitian and unitary matrices, with an example of each. Show that the diagonal elements of a Hermitian matrix are real and those of a skew-Hermitian matrix are zero or purely imaginary.

**Answer:**

| Type | Condition | Example |
|---|---|---|
| Symmetric | $A^T = A$ ($a_{ij} = a_{ji}$) | $\begin{bmatrix}1 & 2 \\ 2 & 5\end{bmatrix}$ |
| Skew-symmetric | $A^T = -A$ ($a_{ij} = -a_{ji}$, so $a_{ii} = 0$) | $\begin{bmatrix}0 & 3 \\ -3 & 0\end{bmatrix}$ |
| Orthogonal | $AA^T = A^TA = I$, i.e. $A^{-1} = A^T$ | $\begin{bmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{bmatrix}$ |
| Hermitian | $A^\theta = A$ ($a_{ij} = \overline{a_{ji}}$) | $\begin{bmatrix}2 & 3 + i \\ 3 - i & 5\end{bmatrix}$ |
| Skew-Hermitian | $A^\theta = -A$ ($a_{ij} = -\overline{a_{ji}}$) | $\begin{bmatrix}i & 1 + i \\ -1 + i & 0\end{bmatrix}$ |
| Unitary | $AA^\theta = A^\theta A = I$, i.e. $A^{-1} = A^\theta$ | $\dfrac12\begin{bmatrix}1 + i & -1 + i \\ 1 + i & 1 - i\end{bmatrix}$ |

A real Hermitian matrix is symmetric, a real skew-Hermitian matrix is skew-symmetric, and a real unitary matrix is orthogonal.

**Diagonal elements.** For a Hermitian matrix, $a_{ii} = \overline{a_{ii}}$, so each $a_{ii}$ is equal to its own conjugate, hence **real**. For a skew-Hermitian matrix, $a_{ii} = -\overline{a_{ii}}$. Writing $a_{ii} = p + iq$: $p + iq = -p + iq$, so $p = 0$; each diagonal element is **zero or purely imaginary**.

**Que 4.2.** Prove that (i) every square matrix can be written uniquely as the sum of a symmetric and a skew-symmetric matrix, (ii) every square matrix can be written uniquely as $P + iQ$ with $P$ and $Q$ Hermitian. Express $A = \begin{bmatrix}1 & 2 & 4 \\ -2 & 5 & 3 \\ -1 & 6 & 3\end{bmatrix}$ as the sum of a symmetric and a skew-symmetric matrix.

**Answer:**

**(i)** Write

$$A = \underbrace{\tfrac12(A + A^T)}_{P} + \underbrace{\tfrac12(A - A^T)}_{Q}.$$

$P^T = \tfrac12(A^T + A) = P$, so $P$ is symmetric; $Q^T = \tfrac12(A^T - A) = -Q$, so $Q$ is skew-symmetric.

*Uniqueness.* If $A = R + S$ with $R$ symmetric, $S$ skew-symmetric, then $A^T = R - S$. Adding and subtracting, $R = \tfrac12(A + A^T) = P$ and $S = \tfrac12(A - A^T) = Q$.

**(ii)** Take $P = \tfrac12(A + A^\theta)$ and $Q = \tfrac{1}{2i}(A - A^\theta)$. Then $P^\theta = P$, and $Q^\theta = -\tfrac{1}{2i}(A^\theta - A) = Q$, so both are Hermitian, and $P + iQ = A$. Uniqueness follows as in (i).

**Example.** $A^T = \begin{bmatrix}1 & -2 & -1 \\ 2 & 5 & 6 \\ 4 & 3 & 3\end{bmatrix}$.

$$P = \frac12(A + A^T) = \begin{bmatrix}1 & 0 & \tfrac32 \\ 0 & 5 & \tfrac92 \\ \tfrac32 & \tfrac92 & 3\end{bmatrix}, \qquad Q = \frac12(A - A^T) = \begin{bmatrix}0 & 2 & \tfrac52 \\ -2 & 0 & -\tfrac32 \\ -\tfrac52 & \tfrac32 & 0\end{bmatrix}.$$

$P + Q = A$. $\checkmark$

**Que 4.3.** If $A$ is Hermitian, show that $iA$ is skew-Hermitian. Also show that if $A$ is skew-Hermitian then $iA$ is Hermitian. [PYQ 2022-23]

**Answer:**

Recall $(kA)^\theta = \overline{k}A^\theta$ for a complex number $k$, and $\overline{i} = -i$.

If $A^\theta = A$: $(iA)^\theta = \overline{i}\,A^\theta = -iA$. So $iA$ is **skew-Hermitian**.

If $A^\theta = -A$: $(iA)^\theta = -i\,A^\theta = -i(-A) = iA$. So $iA$ is **Hermitian**. $\blacksquare$

**Que 4.4.** Show that $A = \dfrac12\begin{bmatrix}1 + i & -1 + i \\ 1 + i & 1 - i\end{bmatrix}$ is unitary. Also show that $\dfrac13\begin{bmatrix}1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1\end{bmatrix}$ is orthogonal.

**Answer:**

**Unitary.** $A^\theta = \dfrac12\begin{bmatrix}1 - i & 1 - i \\ -1 - i & 1 + i\end{bmatrix}$.

$$AA^\theta = \frac14\begin{bmatrix}(1+i)(1-i) + (-1+i)(-1-i) & (1+i)(1-i) + (-1+i)(1+i) \\ (1+i)(1-i) + (1-i)(-1-i) & (1+i)(1-i) + (1-i)(1+i)\end{bmatrix} = \frac14\begin{bmatrix}2 + 2 & 2 - 2 \\ 2 - 2 & 2 + 2\end{bmatrix} = I.$$

So $A$ is unitary.

**Orthogonal.** Call the matrix $B$. Each row has length $\tfrac13\sqrt{1 + 4 + 4} = 1$, and the rows are mutually perpendicular: $(1)(2) + (2)(1) + (2)(-2) = 0$, $(1)(2) + (2)(-2) + (2)(1) = 0$, $(2)(2) + (1)(-2) + (-2)(1) = 0$. Hence $BB^T = I$ and $B$ is orthogonal.

**Que 4.5.** Prove that (i) the eigenvalues of a Hermitian matrix are real, (ii) the eigenvalues of a skew-Hermitian matrix are zero or purely imaginary, (iii) the eigenvalues of a unitary (or orthogonal) matrix have absolute value 1.

**Answer:**

Let $AX = \lambda X$ with $X \ne 0$. Note that $X^\theta X = |x_1|^2 + \cdots + |x_n|^2 > 0$.

**(i)** Multiply $AX = \lambda X$ on the left by $X^\theta$: $X^\theta AX = \lambda X^\theta X$. Take the conjugate transpose of both sides (a $1\times1$ matrix): $X^\theta A^\theta X = \overline\lambda X^\theta X$. Since $A^\theta = A$, the left sides are equal, so $\lambda X^\theta X = \overline\lambda X^\theta X$, and $\lambda = \overline\lambda$: **$\lambda$ is real**.

**(ii)** The same steps with $A^\theta = -A$ give $\lambda = -\overline\lambda$. Writing $\lambda = p + iq$: $p = 0$. So $\lambda$ is zero or purely imaginary.

**(iii)** From $AX = \lambda X$, taking conjugate transposes: $X^\theta A^\theta = \overline\lambda X^\theta$. Multiply: $X^\theta A^\theta AX = \overline\lambda\lambda X^\theta X$. Since $A^\theta A = I$: $X^\theta X = |\lambda|^2X^\theta X$, so $|\lambda| = 1$. $\blacksquare$

Real symmetric matrices are Hermitian, so their eigenvalues are real as well.

### Part 2: Elementary Transformations, Inverse and Rank

**Concept**

The three **elementary row operations** are the moves you already make when solving equations by elimination:

1. interchange two rows ($R_i \leftrightarrow R_j$),
2. multiply a row by a non-zero number ($R_i \to kR_i$),
3. add a multiple of one row to another ($R_i \to R_i + kR_j$).

They do not change the solutions of the corresponding equations, and they do not change the rank. The same three operations on columns are elementary column operations. Each operation equals multiplication by an **elementary matrix** (the identity matrix with the same operation done to it): a row operation multiplies on the left, a column operation on the right.

**Rank** measures the number of "really different" rows. For example, in $\begin{bmatrix}1 & 2 & 3 \\ 2 & 4 & 6 \\ 1 & 1 & 1\end{bmatrix}$ the second row is twice the first, so there are only two independent rows: the rank is 2.

**Que 4.6.** Define the rank of a matrix. Define the echelon form and the normal form, and explain how the rank is found from them.

**Answer:**

**Rank.** The rank $\rho(A)$ of a matrix $A$ is the order of its largest non-zero minor. Equivalently, it is the maximum number of linearly independent rows (or columns). Thus $\rho(A) = r$ means: at least one $r\times r$ minor is non-zero, and every minor of order $r + 1$ (if any) is zero. The rank of the zero matrix is 0, and $\rho(A) \le \min(m, n)$ for an $m\times n$ matrix.

**Echelon form.** A matrix is in (row) echelon form if

1. all zero rows are at the bottom,
2. the first non-zero entry of each row (the pivot) is to the right of the pivot in the row above.

**Rank from echelon form:** reduce $A$ to echelon form by row operations; the rank is the **number of non-zero rows**.

**Normal form.** Every $m\times n$ matrix of rank $r$ can be reduced by row and column operations to one of

$$\begin{bmatrix}I_r & 0 \\ 0 & 0\end{bmatrix}, \quad \begin{bmatrix}I_r & 0\end{bmatrix}, \quad \begin{bmatrix}I_r \\ 0\end{bmatrix}, \quad I_r,$$

called the **normal (canonical) form**. The rank is the order $r$ of the identity block. Since row operations are left multiplications and column operations are right multiplications, there are non-singular matrices $P$ ($m\times m$) and $Q$ ($n\times n$) with $PAQ$ = normal form.

**Que 4.7.** Find the rank of $A = \begin{bmatrix}1 & 2 & 3 & 0 \\ 2 & 4 & 3 & 2 \\ 3 & 2 & 1 & 3 \\ 6 & 8 & 7 & 5\end{bmatrix}$ by reducing it to echelon form.

**Answer:**

$R_2 \to R_2 - 2R_1$, $R_3 \to R_3 - 3R_1$, $R_4 \to R_4 - 6R_1$:

$$\begin{bmatrix}1 & 2 & 3 & 0 \\ 0 & 0 & -3 & 2 \\ 0 & -4 & -8 & 3 \\ 0 & -4 & -11 & 5\end{bmatrix}.$$

$R_2 \leftrightarrow R_3$, then $R_4 \to R_4 - R_2$ (the new $R_2$):

$$\begin{bmatrix}1 & 2 & 3 & 0 \\ 0 & -4 & -8 & 3 \\ 0 & 0 & -3 & 2 \\ 0 & 0 & -3 & 2\end{bmatrix}.$$

$R_4 \to R_4 - R_3$:

$$\begin{bmatrix}1 & 2 & 3 & 0 \\ 0 & -4 & -8 & 3 \\ 0 & 0 & -3 & 2 \\ 0 & 0 & 0 & 0\end{bmatrix}.$$

Three non-zero rows, so $\rho(A) = 3$.

**Que 4.8.** Find non-singular matrices $P$ and $Q$ such that $PAQ$ is in normal form, where $A = \begin{bmatrix}1 & 3 & 6 & -1 \\ 1 & 4 & 5 & 1 \\ 1 & 5 & 4 & 3\end{bmatrix}$. Hence find the rank of $A$. [PYQ 2024-25]

**Answer:**

**Method.** Write $A = I_3\,A\,I_4$. Apply each **row** operation to $A$ and to the **left** factor $I_3$; apply each **column** operation to $A$ and to the **right** factor $I_4$. When $A$ reaches normal form, the left factor is $P$ and the right factor is $Q$.

**Row operations.** $R_2 \to R_2 - R_1$, $R_3 \to R_3 - R_1$, then $R_3 \to R_3 - 2R_2$:

$$\begin{bmatrix}1 & 3 & 6 & -1 \\ 0 & 1 & -1 & 2 \\ 0 & 0 & 0 & 0\end{bmatrix} = \begin{bmatrix}1 & 0 & 0 \\ -1 & 1 & 0 \\ 1 & -2 & 1\end{bmatrix}A\,I_4.$$

(For the left factor: $R_2 - R_1$ gives the row $(-1, 1, 0)$; $R_3 - R_1$ gives $(-1, 0, 1)$; then $R_3 - 2R_2$ gives $(-1 + 2, -2, 1) = (1, -2, 1)$.)

**Column operations.** $C_2 \to C_2 - 3C_1$, $C_3 \to C_3 - 6C_1$, $C_4 \to C_4 + C_1$, then $C_3 \to C_3 + C_2$, $C_4 \to C_4 - 2C_2$:

$$\begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0\end{bmatrix} = \begin{bmatrix}1 & 0 & 0 \\ -1 & 1 & 0 \\ 1 & -2 & 1\end{bmatrix}A\begin{bmatrix}1 & -3 & -9 & 7 \\ 0 & 1 & 1 & -2 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1\end{bmatrix}.$$

(For the right factor: after the first three column operations the columns of $I_4$ become $(1,0,0,0)$, $(-3,1,0,0)$, $(-6,0,1,0)$, $(1,0,0,1)$; then $C_3 + C_2$ gives $(-9,1,1,0)$ and $C_4 - 2C_2$ gives $(7,-2,0,1)$.)

So

$$P = \begin{bmatrix}1 & 0 & 0 \\ -1 & 1 & 0 \\ 1 & -2 & 1\end{bmatrix}, \qquad Q = \begin{bmatrix}1 & -3 & -9 & 7 \\ 0 & 1 & 1 & -2 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1\end{bmatrix}, \qquad PAQ = \begin{bmatrix}I_2 & 0 \\ 0 & 0\end{bmatrix}.$$

The rank of $A$ is **2**.

**Exam tip:** you can check $P$ quickly: $PA$ must be the echelon form you obtained by row operations.

**Que 4.9.** Find the inverse of $A = \begin{bmatrix}1 & 1 & 3 \\ 1 & 3 & -3 \\ -2 & -4 & -4\end{bmatrix}$ by the Gauss-Jordan method (elementary row operations).

**Answer:**

**Method.** Write the augmented matrix $[A \mid I]$ and use row operations only, until the left half becomes $I$. The right half is then $A^{-1}$.

$$\left[\begin{array}{ccc|ccc}1 & 1 & 3 & 1 & 0 & 0 \\ 1 & 3 & -3 & 0 & 1 & 0 \\ -2 & -4 & -4 & 0 & 0 & 1\end{array}\right]$$

$R_2 \to R_2 - R_1$, $R_3 \to R_3 + 2R_1$:

$$\left[\begin{array}{ccc|ccc}1 & 1 & 3 & 1 & 0 & 0 \\ 0 & 2 & -6 & -1 & 1 & 0 \\ 0 & -2 & 2 & 2 & 0 & 1\end{array}\right]$$

$R_3 \to R_3 + R_2$, then $R_2 \to \tfrac12R_2$:

$$\left[\begin{array}{ccc|ccc}1 & 1 & 3 & 1 & 0 & 0 \\ 0 & 1 & -3 & -\tfrac12 & \tfrac12 & 0 \\ 0 & 0 & -4 & 1 & 1 & 1\end{array}\right]$$

$R_3 \to -\tfrac14R_3$:

$$\left[\begin{array}{ccc|ccc}1 & 1 & 3 & 1 & 0 & 0 \\ 0 & 1 & -3 & -\tfrac12 & \tfrac12 & 0 \\ 0 & 0 & 1 & -\tfrac14 & -\tfrac14 & -\tfrac14\end{array}\right]$$

$R_1 \to R_1 - 3R_3$, $R_2 \to R_2 + 3R_3$:

$$\left[\begin{array}{ccc|ccc}1 & 1 & 0 & \tfrac74 & \tfrac34 & \tfrac34 \\ 0 & 1 & 0 & -\tfrac54 & -\tfrac14 & -\tfrac34 \\ 0 & 0 & 1 & -\tfrac14 & -\tfrac14 & -\tfrac14\end{array}\right]$$

$R_1 \to R_1 - R_2$:

$$\left[\begin{array}{ccc|ccc}1 & 0 & 0 & 3 & 1 & \tfrac32 \\ 0 & 1 & 0 & -\tfrac54 & -\tfrac14 & -\tfrac34 \\ 0 & 0 & 1 & -\tfrac14 & -\tfrac14 & -\tfrac14\end{array}\right]$$

$$A^{-1} = \begin{bmatrix}3 & 1 & \tfrac32 \\ -\tfrac54 & -\tfrac14 & -\tfrac34 \\ -\tfrac14 & -\tfrac14 & -\tfrac14\end{bmatrix} = \frac14\begin{bmatrix}12 & 4 & 6 \\ -5 & -1 & -3 \\ -1 & -1 & -1\end{bmatrix}.$$

**Check:** first row of $A$ times first column of $A^{-1}$: $3 - \tfrac54 - \tfrac34 = 1$. $\checkmark$

### Part 3: Systems of Linear Equations

**Concept**

A system of $m$ equations in $n$ unknowns is written $AX = B$. Reduce the **augmented matrix** $[A \mid B]$ to echelon form. Then exactly one of three things happens:

- an equation like $0 = 5$ appears: **no solution** (inconsistent);
- every unknown is fixed: **one solution**;
- some unknowns are free: **infinitely many solutions**.

The ranks of $A$ and $[A \mid B]$ tell which case occurs, without solving.

**Que 4.10.** State the conditions for consistency of a system $AX = B$ of $m$ equations in $n$ unknowns (Rouché-Capelli theorem). State the result for a homogeneous system $AX = 0$.

**Answer:**

Let $r = \rho(A)$ and $r' = \rho([A \mid B])$.

| Condition | Nature of the system |
|---|---|
| $r \ne r'$ | inconsistent: **no solution** |
| $r = r' = n$ | consistent: **unique solution** |
| $r = r' < n$ | consistent: **infinitely many solutions**, with $n - r$ free parameters |

For a square system ($m = n$): if $|A| \ne 0$ there is a unique solution $X = A^{-1}B$.

**Homogeneous system $AX = 0$.** It is always consistent ($X = 0$ is a solution, the **trivial** solution).

- If $\rho(A) = n$ (for a square system, $|A| \ne 0$): only the trivial solution.
- If $\rho(A) < n$ (for a square system, $|A| = 0$): infinitely many non-trivial solutions, with $n - \rho(A)$ free parameters.

**Que 4.11.** Test the consistency of the system $x + y + z = 6$, $x + 2y + 3z = 14$, $x + 4y + 7z = 30$, and solve it if it is consistent. [PYQ 2022-23]

**Answer:**

$$[A \mid B] = \left[\begin{array}{ccc|c}1 & 1 & 1 & 6 \\ 1 & 2 & 3 & 14 \\ 1 & 4 & 7 & 30\end{array}\right].$$

$R_2 \to R_2 - R_1$, $R_3 \to R_3 - R_1$: rows $(0, 1, 2 \mid 8)$ and $(0, 3, 6 \mid 24)$. Then $R_3 \to R_3 - 3R_2$:

$$\left[\begin{array}{ccc|c}1 & 1 & 1 & 6 \\ 0 & 1 & 2 & 8 \\ 0 & 0 & 0 & 0\end{array}\right].$$

$\rho(A) = \rho([A \mid B]) = 2 < 3$: the system is **consistent with infinitely many solutions** (one free parameter).

Let $z = k$. Then $y = 8 - 2k$ and $x = 6 - y - z = 6 - 8 + 2k - k = k - 2$.

$$x = k - 2, \quad y = 8 - 2k, \quad z = k \qquad (k \text{ any number}).$$

For example $k = 2$ gives $(0, 4, 2)$: $0 + 4 + 2 = 6$, $0 + 8 + 6 = 14$, $0 + 16 + 14 = 30$. $\checkmark$

**Que 4.12.** For what values of $\lambda$ and $\mu$ does the system $x + y + z = 6$, $x + 2y + 5z = 10$, $2x + 3y + \lambda z = \mu$ have (i) no solution, (ii) a unique solution, (iii) infinitely many solutions? Also solve it for $\lambda = 2$, $\mu = 8$. [PYQ 2021-22, 2025-26]

**Answer:**

$$[A \mid B] = \left[\begin{array}{ccc|c}1 & 1 & 1 & 6 \\ 1 & 2 & 5 & 10 \\ 2 & 3 & \lambda & \mu\end{array}\right].$$

$R_2 \to R_2 - R_1$, $R_3 \to R_3 - 2R_1$: rows $(0, 1, 4 \mid 4)$ and $(0, 1, \lambda - 2 \mid \mu - 12)$. Then $R_3 \to R_3 - R_2$:

$$\left[\begin{array}{ccc|c}1 & 1 & 1 & 6 \\ 0 & 1 & 4 & 4 \\ 0 & 0 & \lambda - 6 & \mu - 16\end{array}\right].$$

- **(i) No solution:** $\lambda = 6$ and $\mu \ne 16$ (then $\rho(A) = 2$, $\rho([A \mid B]) = 3$).
- **(ii) Unique solution:** $\lambda \ne 6$, $\mu$ any value ($\rho(A) = \rho([A\mid B]) = 3$).
- **(iii) Infinitely many solutions:** $\lambda = 6$ and $\mu = 16$ ($\rho(A) = \rho([A\mid B]) = 2 < 3$).

**For $\lambda = 2$, $\mu = 8$:** the last row is $-4z = -8$, so $z = 2$. Then $y = 4 - 4z = -4$ and $x = 6 - y - z = 8$.

$$x = 8, \quad y = -4, \quad z = 2.$$

**Check:** $2(8) + 3(-4) + 2(2) = 16 - 12 + 4 = 8$. $\checkmark$

**Que 4.13.** For all values of $k$, discuss the existence and nature of the solutions of $x + y + 4z = 6$, $x + 2y - 2z = 6$, $kx + y + z = 6$. [PYQ 2024-25]

**Answer:**

$$|A| = \begin{vmatrix}1 & 1 & 4 \\ 1 & 2 & -2 \\ k & 1 & 1\end{vmatrix} = 1(2 + 2) - 1(1 + 2k) + 4(1 - 2k) = 7 - 10k.$$

**Case $k \ne \tfrac{7}{10}$:** $|A| \ne 0$, so the system has a **unique solution**.

**Case $k = \tfrac{7}{10}$:** reduce the augmented matrix.

$$\left[\begin{array}{ccc|c}1 & 1 & 4 & 6 \\ 1 & 2 & -2 & 6 \\ \tfrac{7}{10} & 1 & 1 & 6\end{array}\right] \xrightarrow{R_2 - R_1,\ R_3 - \frac{7}{10}R_1} \left[\begin{array}{ccc|c}1 & 1 & 4 & 6 \\ 0 & 1 & -6 & 0 \\ 0 & \tfrac{3}{10} & -\tfrac{9}{5} & \tfrac{9}{5}\end{array}\right] \xrightarrow{R_3 - \frac{3}{10}R_2} \left[\begin{array}{ccc|c}1 & 1 & 4 & 6 \\ 0 & 1 & -6 & 0 \\ 0 & 0 & 0 & \tfrac95\end{array}\right].$$

The last row says $0 = \tfrac95$: $\rho(A) = 2 \ne \rho([A\mid B]) = 3$. The system is **inconsistent (no solution)**.

So there is never an infinite family of solutions: a unique solution for $k \ne \tfrac{7}{10}$ and none for $k = \tfrac{7}{10}$.

**Que 4.14.** Solve the homogeneous system $x + y + z + w = 0$, $x + 3y + 2z + 4w = 0$, $2x + z - w = 0$. [PYQ 2023-24 type]

**Answer:**

$$A = \begin{bmatrix}1 & 1 & 1 & 1 \\ 1 & 3 & 2 & 4 \\ 2 & 0 & 1 & -1\end{bmatrix} \xrightarrow{R_2 - R_1,\ R_3 - 2R_1} \begin{bmatrix}1 & 1 & 1 & 1 \\ 0 & 2 & 1 & 3 \\ 0 & -2 & -1 & -3\end{bmatrix} \xrightarrow{R_3 + R_2} \begin{bmatrix}1 & 1 & 1 & 1 \\ 0 & 2 & 1 & 3 \\ 0 & 0 & 0 & 0\end{bmatrix}.$$

$\rho(A) = 2 < 4$, so there are infinitely many solutions with $4 - 2 = 2$ free parameters. Let $z = 2a$ and $w = 2b$. From the second row, $2y = -z - 3w$, so $y = -a - 3b$. From the first, $x = -y - z - w = a + 3b - 2a - 2b = -a + b$.

$$x = -a + b, \quad y = -a - 3b, \quad z = 2a, \quad w = 2b.$$

**Check** in the third equation: $2(-a + b) + 2a - 2b = 0$. $\checkmark$

**Que 4.15.** Explain the Gauss elimination method, and use it to solve $2x + y + z = 10$, $3x + 2y + 3z = 18$, $x + 4y + 9z = 16$.

**Answer:**

**Method.** Reduce the augmented matrix to upper triangular (echelon) form by row operations (forward elimination). Then find the unknowns from the last equation upwards (**back substitution**). To reduce rounding errors, it is good practice to bring the largest available pivot to the top (partial pivoting); with small integers it is easier to put a row with leading coefficient 1 on top.

Interchange $R_1$ and $R_3$:

$$\left[\begin{array}{ccc|c}1 & 4 & 9 & 16 \\ 3 & 2 & 3 & 18 \\ 2 & 1 & 1 & 10\end{array}\right] \xrightarrow{R_2 - 3R_1,\ R_3 - 2R_1} \left[\begin{array}{ccc|c}1 & 4 & 9 & 16 \\ 0 & -10 & -24 & -30 \\ 0 & -7 & -17 & -22\end{array}\right].$$

$R_2 \to -\tfrac12R_2$ gives $(0, 5, 12 \mid 15)$. Then $R_3 \to 5R_3 + 7R_2$:

$$\left[\begin{array}{ccc|c}1 & 4 & 9 & 16 \\ 0 & 5 & 12 & 15 \\ 0 & 0 & -1 & -5\end{array}\right].$$

**Back substitution:** $-z = -5 \Rightarrow z = 5$; $5y + 60 = 15 \Rightarrow y = -9$; $x + 4(-9) + 9(5) = 16 \Rightarrow x = 7$.

$$x = 7, \quad y = -9, \quad z = 5.$$

**Que 4.16.** Explain the Gauss-Seidel iteration method and the condition for its convergence. Solve $20x + y - 2z = 17$, $3x + 20y - z = -18$, $2x - 3y + 20z = 25$ by this method.

**Answer:**

**Method.** Write each equation solved for its "own" unknown (the one with the largest coefficient):

$$x = \frac{1}{a_1}(d_1 - b_1y - c_1z), \quad y = \frac{1}{b_2}(d_2 - a_2x - c_2z), \quad z = \frac{1}{c_3}(d_3 - a_3x - b_3y).$$

Start with a guess (usually $x = y = z = 0$). In each round, compute $x$, then $y$ **using the new $x$**, then $z$ **using the new $x$ and $y$**. Repeat until two successive rounds agree to the required accuracy. Using the latest values at once is what distinguishes Gauss-Seidel from the slower Jacobi method.

**Convergence.** The method surely converges if the coefficient matrix is **diagonally dominant**: in each row, the absolute value of the diagonal coefficient is larger than the sum of the absolute values of the other coefficients. If it is not, rearrange the equations first.

Here $|20| > 1 + 2$, $|20| > 3 + 1$, $|20| > 2 + 3$: diagonally dominant.

$$x = \frac{17 - y + 2z}{20}, \qquad y = \frac{-18 - 3x + z}{20}, \qquad z = \frac{25 - 2x + 3y}{20}.$$

| Round | $x$ | $y$ | $z$ |
|---|---|---|---|
| start | 0 | 0 | 0 |
| 1 | $0.8500$ | $-1.0275$ | $1.0109$ |
| 2 | $1.0025$ | $-0.9998$ | $0.9998$ |
| 3 | $1.0000$ | $-1.0000$ | $1.0000$ |
| 4 | $1.0000$ | $-1.0000$ | $1.0000$ |

(Round 1: $x = \tfrac{17}{20} = 0.85$; $y = \tfrac{-18 - 2.55 + 0}{20} = -1.0275$; $z = \tfrac{25 - 1.7 - 3.0825}{20} = 1.0109$.)

The solution is $x = 1$, $y = -1$, $z = 1$.

**Common mistake:** in Gauss-Seidel, using the old $x$ while computing $y$ in the same round. That is the Jacobi method, and it converges more slowly.

### Part 4: Eigenvalues and Eigenvectors

**Concept**

When a matrix $A$ multiplies a vector $X$, the result $AX$ usually points in a new direction. But for special vectors, $AX$ lies along $X$ itself: $A$ only stretches (or shrinks, or reverses) them. Such a vector is an **eigenvector**, and the stretch factor $\lambda$ is the **eigenvalue**:

$$AX = \lambda X, \qquad X \ne 0.$$

For example, for $A = \begin{bmatrix}2 & 4 \\ 4 & 2\end{bmatrix}$ and $X = \begin{bmatrix}1 \\ 1\end{bmatrix}$: $AX = \begin{bmatrix}6 \\ 6\end{bmatrix} = 6X$. So $X$ is an eigenvector with eigenvalue 6.

Eigenvalues appear wherever a system has natural modes: natural frequencies of a vibrating structure, principal stresses in a beam, stable states of a Markov chain, principal components in data analysis.

**Que 4.17.** Define eigenvalues and eigenvectors of a square matrix. Explain how to find them, and define the characteristic equation.

**Answer:**

**Definition.** A number $\lambda$ is an **eigenvalue** (characteristic root, latent root) of the $n\times n$ matrix $A$ if there is a non-zero column vector $X$ with $AX = \lambda X$. Such an $X$ is an **eigenvector** belonging to $\lambda$.

**Finding them.** $AX = \lambda X$ means $(A - \lambda I)X = 0$, a homogeneous system. It has a non-zero solution only if

$$|A - \lambda I| = 0.$$

This polynomial equation of degree $n$ in $\lambda$ is the **characteristic equation**; its roots are the eigenvalues. For each eigenvalue, solve $(A - \lambda I)X = 0$ for the eigenvectors.

**Short form of the characteristic equation.**

- $2\times2$: $\lambda^2 - (\operatorname{tr}A)\lambda + |A| = 0$.
- $3\times3$: $\lambda^3 - S_1\lambda^2 + S_2\lambda - |A| = 0$, where $S_1 = a_{11} + a_{22} + a_{33}$ (trace) and $S_2$ = sum of the minors of the diagonal elements.

**Solving $(A - \lambda I)X = 0$ for a $3\times3$ matrix.** The system has rank 2 (for a simple eigenvalue), so take any two independent rows $(a_1, b_1, c_1)$ and $(a_2, b_2, c_2)$ and use the **cross-multiplication rule**:

$$\frac{x}{b_1c_2 - b_2c_1} = \frac{y}{c_1a_2 - c_2a_1} = \frac{z}{a_1b_2 - a_2b_1}.$$

Any non-zero multiple of an eigenvector is also an eigenvector, so we usually give the simplest one.

**Que 4.18.** Find the product and sum of the eigenvalues of $A = \begin{bmatrix}5 & 4 \\ 1 & 2\end{bmatrix}$, the eigenvalues themselves, and the eigenvalues of $A^3$ and $A^{-1}$. [PYQ 2021-22, 2023-24]

**Answer:**

**Sum** = trace = $5 + 2 = 7$. **Product** = $|A| = 10 - 4 = 6$.

Characteristic equation: $\lambda^2 - 7\lambda + 6 = 0 \Rightarrow (\lambda - 1)(\lambda - 6) = 0$, so $\lambda = 1, 6$.

If $AX = \lambda X$ then $A^3X = \lambda^3X$ and $A^{-1}X = \lambda^{-1}X$. Hence:

- eigenvalues of $A^3$: $1^3 = 1$ and $6^3 = 216$;
- eigenvalues of $A^{-1}$: $1$ and $\tfrac16$.

**Que 4.19.** (i) Find the eigenvalue of $A = \begin{bmatrix}2 & 4 \\ 4 & 2\end{bmatrix}$ corresponding to the eigenvector $\begin{bmatrix}5 \\ 5\end{bmatrix}$. (ii) Find the eigenvalues of $\begin{bmatrix}\cos\theta & -\sin\theta \\ -\sin\theta & -\cos\theta\end{bmatrix}$. [PYQ 2022-23, 2024-25]

**Answer:**

**(i)** $AX = \begin{bmatrix}10 + 20 \\ 20 + 10\end{bmatrix} = \begin{bmatrix}30 \\ 30\end{bmatrix} = 6\begin{bmatrix}5 \\ 5\end{bmatrix}$. The eigenvalue is **6**.

**(ii)** Trace $= \cos\theta - \cos\theta = 0$, determinant $= -\cos^2\theta - \sin^2\theta = -1$. The characteristic equation is $\lambda^2 - 0\cdot\lambda - 1 = 0$, so $\lambda = \pm1$.

**Que 4.20.** State and prove the important properties of eigenvalues.

**Answer:**

Let $\lambda_1, \ldots, \lambda_n$ be the eigenvalues of the $n\times n$ matrix $A$.

1. **Sum and product.** $\lambda_1 + \cdots + \lambda_n = \operatorname{tr}A$ and $\lambda_1\lambda_2\cdots\lambda_n = |A|$.
*Proof.* $|A - \lambda I| = (-1)^n(\lambda - \lambda_1)\cdots(\lambda - \lambda_n)$. Comparing the coefficient of $\lambda^{n-1}$ gives the sum, and putting $\lambda = 0$ gives $|A| = \lambda_1\cdots\lambda_n$.
2. **Singular matrix.** $A$ is singular if and only if 0 is an eigenvalue (since $|A|$ is the product).
3. **Transpose.** $A$ and $A^T$ have the same eigenvalues, because $|A^T - \lambda I| = |(A - \lambda I)^T| = |A - \lambda I|$.
4. **Powers and inverse.** If $AX = \lambda X$, then $A^kX = \lambda^kX$ and (if $A$ is non-singular) $A^{-1}X = \tfrac1\lambda X$. So $A^k$ has eigenvalues $\lambda_i^k$ and $A^{-1}$ has $\tfrac1{\lambda_i}$, with the same eigenvectors.
5. **Scalar multiple and shift.** $kA$ has eigenvalues $k\lambda_i$; $A - kI$ has $\lambda_i - k$. More generally, a polynomial $p(A)$ has eigenvalues $p(\lambda_i)$.
6. **Triangular and diagonal matrices.** The eigenvalues are the diagonal entries.
7. **Adjoint.** $\operatorname{adj}A = |A|A^{-1}$ has eigenvalues $\dfrac{|A|}{\lambda_i}$.
8. **Distinct eigenvalues.** Eigenvectors belonging to distinct eigenvalues are linearly independent.
9. **Special matrices.** Real symmetric and Hermitian matrices have real eigenvalues; skew-Hermitian have zero or purely imaginary ones; orthogonal and unitary have $|\lambda| = 1$ (Que 4.5).

**Que 4.21.** Find the eigenvalues and eigenvectors of $A = \begin{bmatrix}1 & 1 & 2 \\ 1 & 2 & 1 \\ 2 & 1 & 1\end{bmatrix}$.

**Answer:**

**Characteristic equation.** $S_1 = 1 + 2 + 1 = 4$.

$S_2 = \begin{vmatrix}2 & 1 \\ 1 & 1\end{vmatrix} + \begin{vmatrix}1 & 2 \\ 2 & 1\end{vmatrix} + \begin{vmatrix}1 & 1 \\ 1 & 2\end{vmatrix} = 1 - 3 + 1 = -1$.

$|A| = 1(2 - 1) - 1(1 - 2) + 2(1 - 4) = 1 + 1 - 6 = -4$.

$$\lambda^3 - 4\lambda^2 - \lambda + 4 = 0 \Rightarrow \lambda^2(\lambda - 4) - (\lambda - 4) = 0 \Rightarrow (\lambda - 4)(\lambda - 1)(\lambda + 1) = 0.$$

Eigenvalues: $4, 1, -1$. (Check: sum $= 4 = $ trace; product $= -4 = |A|$.)

**$\lambda = 4$.** $A - 4I = \begin{bmatrix}-3 & 1 & 2 \\ 1 & -2 & 1 \\ 2 & 1 & -3\end{bmatrix}$. Cross-multiplying rows 1 and 2:

$$\frac{x}{1\cdot1 - (-2)\cdot2} = \frac{y}{2\cdot1 - 1\cdot(-3)} = \frac{z}{(-3)(-2) - 1\cdot1} \Rightarrow \frac x5 = \frac y5 = \frac z5.$$

$X_1 = (1, 1, 1)^T$.

**$\lambda = 1$.** $A - I = \begin{bmatrix}0 & 1 & 2 \\ 1 & 1 & 1 \\ 2 & 1 & 0\end{bmatrix}$. Rows 1 and 2: $\dfrac{x}{1 - 2} = \dfrac{y}{2 - 0} = \dfrac{z}{0 - 1}$, so $X_2 = (-1, 2, -1)^T$, or $(1, -2, 1)^T$.

**$\lambda = -1$.** $A + I = \begin{bmatrix}2 & 1 & 2 \\ 1 & 3 & 1 \\ 2 & 1 & 2\end{bmatrix}$. Rows 1 and 2: $\dfrac{x}{1 - 6} = \dfrac{y}{2 - 2} = \dfrac{z}{6 - 1}$, so $X_3 = (-1, 0, 1)^T$.

**Que 4.22.** Find the eigenvalues and eigenvectors of $A = \begin{bmatrix}-2 & 2 & -3 \\ 2 & 1 & -6 \\ -1 & -2 & 0\end{bmatrix}$. [PYQ 2021-22]

**Answer:**

$S_1 = -2 + 1 + 0 = -1$.

$S_2 = \begin{vmatrix}1 & -6 \\ -2 & 0\end{vmatrix} + \begin{vmatrix}-2 & -3 \\ -1 & 0\end{vmatrix} + \begin{vmatrix}-2 & 2 \\ 2 & 1\end{vmatrix} = -12 - 3 - 6 = -21$.

$|A| = -2(0 - 12) - 2(0 - 6) - 3(-4 + 1) = 24 + 12 + 9 = 45$.

$$\lambda^3 + \lambda^2 - 21\lambda - 45 = 0.$$

$\lambda = -3$ is a root: $-27 + 9 + 63 - 45 = 0$. Dividing, $(\lambda + 3)(\lambda^2 - 2\lambda - 15) = (\lambda + 3)(\lambda + 3)(\lambda - 5)$.

Eigenvalues: $5, -3, -3$.

**$\lambda = 5$.** $A - 5I = \begin{bmatrix}-7 & 2 & -3 \\ 2 & -4 & -6 \\ -1 & -2 & -5\end{bmatrix}$. Rows 1 and 2:

$$\frac{x}{2(-6) - (-4)(-3)} = \frac{y}{(-3)(2) - (-6)(-7)} = \frac{z}{(-7)(-4) - 2\cdot2} \Rightarrow \frac{x}{-24} = \frac{y}{-48} = \frac{z}{24}.$$

$X_1 = (1, 2, -1)^T$.

**$\lambda = -3$ (repeated).** $A + 3I = \begin{bmatrix}1 & 2 & -3 \\ 2 & 4 & -6 \\ -1 & -2 & 3\end{bmatrix}$. All rows are multiples of $(1, 2, -3)$, so the rank is 1 and there is **one equation**:

$$x + 2y - 3z = 0.$$

Two unknowns are free. Taking $y = 1, z = 0$: $X_2 = (-2, 1, 0)^T$. Taking $y = 0, z = 1$: $X_3 = (3, 0, 1)^T$.

So the repeated eigenvalue $-3$ has **two** independent eigenvectors, and every combination $k_2X_2 + k_3X_3$ (not both $k$ zero) is an eigenvector for $-3$.

**Que 4.23.** Find the eigenvalues and eigenvectors of $A = \begin{bmatrix}2 & -1 & 1 \\ -1 & 2 & -1 \\ 1 & -1 & 2\end{bmatrix}$. [PYQ 2024-25]

**Answer:**

$S_1 = 6$. $S_2 = (4 - 1) + (4 - 1) + (4 - 1) = 9$. $|A| = 2(4 - 1) + 1(-2 + 1) + 1(1 - 2) = 6 - 1 - 1 = 4$.

$$\lambda^3 - 6\lambda^2 + 9\lambda - 4 = 0.$$

$\lambda = 1$ is a root ($1 - 6 + 9 - 4 = 0$). Dividing: $(\lambda - 1)(\lambda^2 - 5\lambda + 4) = (\lambda - 1)^2(\lambda - 4)$.

Eigenvalues: $4, 1, 1$.

**$\lambda = 4$.** $A - 4I = \begin{bmatrix}-2 & -1 & 1 \\ -1 & -2 & -1 \\ 1 & -1 & -2\end{bmatrix}$. Rows 1 and 2:

$$\frac{x}{1 + 2} = \frac{y}{-1 - 2} = \frac{z}{4 - 1} \Rightarrow X_1 = (1, -1, 1)^T.$$

**$\lambda = 1$ (repeated).** $A - I = \begin{bmatrix}1 & -1 & 1 \\ -1 & 1 & -1 \\ 1 & -1 & 1\end{bmatrix}$: rank 1, one equation $x - y + z = 0$.

$y = 1, z = 0$: $X_2 = (1, 1, 0)^T$; $y = 0, z = 1$: $X_3 = (-1, 0, 1)^T$.

(Because $A$ is symmetric, $X_1$ is perpendicular to both $X_2$ and $X_3$: $1 - 1 + 0 = 0$, $-1 + 0 + 1 = 0$.)

### Part 5: The Cayley-Hamilton Theorem

**Concept**

The characteristic equation of $A$ is a polynomial equation in the number $\lambda$. The Cayley-Hamilton theorem says something surprising: if you put the **matrix** $A$ itself in place of $\lambda$ (and $I$ in place of the constant term), you get the zero matrix. This gives a cheap way to find $A^{-1}$ and high powers of $A$ without row operations.

**Que 4.24.** State and prove the Cayley-Hamilton theorem. Explain how it is used to find $A^{-1}$ and higher powers of $A$.

**Answer:**

**Statement.** Every square matrix satisfies its own characteristic equation. That is, if

$$|A - \lambda I| = (-1)^n\left(\lambda^n + a_1\lambda^{n-1} + \cdots + a_n\right),$$

then $A^n + a_1A^{n-1} + \cdots + a_{n-1}A + a_nI = O$.

**Proof.** The entries of $\operatorname{adj}(A - \lambda I)$ are cofactors of $A - \lambda I$, which are polynomials in $\lambda$ of degree at most $n - 1$. So we can write

$$\operatorname{adj}(A - \lambda I) = B_0\lambda^{n-1} + B_1\lambda^{n-2} + \cdots + B_{n-1},$$

where $B_0, \ldots, B_{n-1}$ are $n\times n$ matrices not containing $\lambda$. Since $M\cdot\operatorname{adj}M = |M|\,I$ for any square $M$,

$$(A - \lambda I)\left(B_0\lambda^{n-1} + B_1\lambda^{n-2} + \cdots + B_{n-1}\right) = (-1)^n\left(\lambda^n + a_1\lambda^{n-1} + \cdots + a_n\right)I.$$

Compare the coefficients of the powers of $\lambda$:

$$\begin{aligned}
\lambda^n:&\quad -B_0 = (-1)^nI \\
\lambda^{n-1}:&\quad AB_0 - B_1 = (-1)^na_1I \\
\lambda^{n-2}:&\quad AB_1 - B_2 = (-1)^na_2I \\
&\quad\vdots \\
\lambda^0:&\quad AB_{n-1} = (-1)^na_nI
\end{aligned}$$

Multiply these equations on the left by $A^n, A^{n-1}, \ldots, A, I$ respectively and add. The left side telescopes to $O$ (each $A^kB_j$ term appears once with $+$ and once with $-$), and the right side is $(-1)^n\left(A^n + a_1A^{n-1} + \cdots + a_nI\right)$. Hence

$$A^n + a_1A^{n-1} + \cdots + a_nI = O. \;\blacksquare$$

**Inverse.** If $a_n \ne 0$ ($A$ non-singular), multiply by $A^{-1}$:

$$A^{-1} = -\frac{1}{a_n}\left(A^{n-1} + a_1A^{n-2} + \cdots + a_{n-1}I\right).$$

**Powers.** The theorem expresses $A^n$ in terms of lower powers; multiplying by $A$ repeatedly expresses every higher power (and every polynomial in $A$) in terms of $I, A, \ldots, A^{n-1}$.

**Que 4.25.** Verify the Cayley-Hamilton theorem for $A = \begin{bmatrix}1 & 1 & 2 \\ 1 & 2 & 1 \\ 2 & 1 & 1\end{bmatrix}$ and hence find $A^{-1}$. [PYQ 2022-23]

**Answer:**

From Que 4.21 the characteristic equation is $\lambda^3 - 4\lambda^2 - \lambda + 4 = 0$. We must show $A^3 - 4A^2 - A + 4I = O$.

$$A^2 = \begin{bmatrix}1 & 1 & 2 \\ 1 & 2 & 1 \\ 2 & 1 & 1\end{bmatrix}\begin{bmatrix}1 & 1 & 2 \\ 1 & 2 & 1 \\ 2 & 1 & 1\end{bmatrix} = \begin{bmatrix}6 & 5 & 5 \\ 5 & 6 & 5 \\ 5 & 5 & 6\end{bmatrix}, \qquad A^3 = A^2A = \begin{bmatrix}21 & 21 & 22 \\ 21 & 22 & 21 \\ 22 & 21 & 21\end{bmatrix}.$$

$$A^3 - 4A^2 - A + 4I = \begin{bmatrix}21 - 24 - 1 + 4 & 21 - 20 - 1 & 22 - 20 - 2 \\ 21 - 20 - 1 & 22 - 24 - 2 + 4 & 21 - 20 - 1 \\ 22 - 20 - 2 & 21 - 20 - 1 & 21 - 24 - 1 + 4\end{bmatrix} = O.$$

The theorem is verified.

**Inverse.** Multiply $A^3 - 4A^2 - A + 4I = O$ by $A^{-1}$: $A^2 - 4A - I + 4A^{-1} = O$, so

$$A^{-1} = \frac14\left(-A^2 + 4A + I\right) = \frac14\begin{bmatrix}-6 + 4 + 1 & -5 + 4 & -5 + 8 \\ -5 + 4 & -6 + 8 + 1 & -5 + 4 \\ -5 + 8 & -5 + 4 & -6 + 4 + 1\end{bmatrix} = \frac14\begin{bmatrix}-1 & -1 & 3 \\ -1 & 3 & -1 \\ 3 & -1 & -1\end{bmatrix}.$$

**Check:** first row of $A$ times first column of $A^{-1}$: $\tfrac14(-1 - 1 + 6) = 1$. $\checkmark$

**Que 4.26.** Using the Cayley-Hamilton theorem, find $A^{-1}$, $A^{-2}$ and $A^{-3}$ for $A = \begin{bmatrix}1 & 0 & -1 \\ 1 & 2 & 1 \\ 2 & 2 & 3\end{bmatrix}$. [PYQ 2023-24]

**Answer:**

**Characteristic equation.** $S_1 = 6$; $S_2 = (6 - 2) + (3 + 2) + (2 - 0) = 11$; $|A| = 1(6 - 2) - 0 + (-1)(2 - 4) = 6$.

$$\lambda^3 - 6\lambda^2 + 11\lambda - 6 = 0 \qquad (\text{roots } 1, 2, 3).$$

By the theorem, $A^3 - 6A^2 + 11A - 6I = O$. Multiplying by $A^{-1}$:

$$A^{-1} = \frac16\left(A^2 - 6A + 11I\right).$$

$$A^2 = \begin{bmatrix}-1 & -2 & -4 \\ 5 & 6 & 4 \\ 10 & 10 & 9\end{bmatrix}, \qquad A^2 - 6A + 11I = \begin{bmatrix}4 & -2 & 2 \\ -1 & 5 & -2 \\ -2 & -2 & 2\end{bmatrix}.$$

$$A^{-1} = \frac16\begin{bmatrix}4 & -2 & 2 \\ -1 & 5 & -2 \\ -2 & -2 & 2\end{bmatrix}.$$

**$A^{-2}$.** Multiply $A^{-1} = \tfrac16(A^2 - 6A + 11I)$ by $A^{-1}$ again: $A^{-2} = \tfrac16\left(A - 6I + 11A^{-1}\right)$.

$$A - 6I + 11A^{-1} = \begin{bmatrix}-5 & 0 & -1 \\ 1 & -4 & 1 \\ 2 & 2 & -3\end{bmatrix} + \frac{11}{6}\begin{bmatrix}4 & -2 & 2 \\ -1 & 5 & -2 \\ -2 & -2 & 2\end{bmatrix} = \frac16\begin{bmatrix}14 & -22 & 16 \\ -5 & 31 & -16 \\ -10 & -10 & 4\end{bmatrix}.$$

$$A^{-2} = \frac{1}{36}\begin{bmatrix}14 & -22 & 16 \\ -5 & 31 & -16 \\ -10 & -10 & 4\end{bmatrix}.$$

**$A^{-3}$.** Similarly $A^{-3} = \tfrac16\left(I - 6A^{-1} + 11A^{-2}\right)$:

$$I - 6A^{-1} + 11A^{-2} = \begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix} - \begin{bmatrix}4 & -2 & 2 \\ -1 & 5 & -2 \\ -2 & -2 & 2\end{bmatrix} + \frac{11}{36}\begin{bmatrix}14 & -22 & 16 \\ -5 & 31 & -16 \\ -10 & -10 & 4\end{bmatrix} = \frac{1}{36}\begin{bmatrix}46 & -170 & 104 \\ -19 & 197 & -104 \\ -38 & -38 & 8\end{bmatrix}.$$

$$A^{-3} = \frac{1}{216}\begin{bmatrix}46 & -170 & 104 \\ -19 & 197 & -104 \\ -38 & -38 & 8\end{bmatrix}.$$

(Check with eigenvalues: the trace of $A^{-3}$ should be $1 + \tfrac18 + \tfrac1{27} = \tfrac{251}{216}$, and indeed $\tfrac{46 + 197 + 8}{216} = \tfrac{251}{216}$. $\checkmark$)

**Que 4.27.** If $A = \begin{bmatrix}1 & 2 \\ 2 & -1\end{bmatrix}$, use the Cayley-Hamilton theorem to find $A^8$.

**Answer:**

Characteristic equation: $\lambda^2 - 0\cdot\lambda + (-1 - 4) = 0$, i.e. $\lambda^2 - 5 = 0$. By the theorem $A^2 = 5I$. Then

$$A^8 = (A^2)^4 = 625I = \begin{bmatrix}625 & 0 \\ 0 & 625\end{bmatrix}.$$

### Part 6: Similarity and Diagonalization

**Concept**

Two matrices $A$ and $B$ are **similar** if $B = P^{-1}AP$ for some non-singular $P$. Similar matrices represent the same linear transformation in different coordinate systems, so they share everything that does not depend on coordinates: the eigenvalues, the determinant, the trace and the rank.

The simplest possible matrix is a diagonal matrix. If the columns of $P$ are eigenvectors of $A$, then $AP = PD$ where $D$ is the diagonal matrix of eigenvalues. So, in the coordinate system of the eigenvectors, $A$ is simply a diagonal matrix: it stretches each eigen-direction by its eigenvalue. Computing $A^n$ then becomes easy: $A^n = PD^nP^{-1}$.

**Que 4.28.** Define similar matrices and prove that similar matrices have the same eigenvalues. Define diagonalization and state when a matrix is diagonalizable.

**Answer:**

**Similar matrices.** $B$ is similar to $A$ if there is a non-singular $P$ with $B = P^{-1}AP$.

**Same eigenvalues.**

$$|B - \lambda I| = |P^{-1}AP - \lambda P^{-1}P| = |P^{-1}(A - \lambda I)P| = |P^{-1}|\,|A - \lambda I|\,|P| = |A - \lambda I|,$$

since $|P^{-1}||P| = 1$. The characteristic polynomials are equal, so the eigenvalues are equal. (If $AX = \lambda X$, then $B(P^{-1}X) = \lambda(P^{-1}X)$, so the eigenvectors of $B$ are $P^{-1}X$.)

**Diagonalization.** $A$ is **diagonalizable** if it is similar to a diagonal matrix: $P^{-1}AP = D$.

**Theorem.** An $n\times n$ matrix is diagonalizable if and only if it has $n$ linearly independent eigenvectors. Then $P$ is the matrix whose columns are these eigenvectors (the **modal matrix**), and $D = \operatorname{diag}(\lambda_1, \ldots, \lambda_n)$ (the **spectral matrix**), in the same order.

*Reason.* If $AX_i = \lambda_iX_i$, then $A[X_1 \cdots X_n] = [\lambda_1X_1 \cdots \lambda_nX_n] = [X_1 \cdots X_n]D$, i.e. $AP = PD$, and $P$ is invertible because its columns are independent.

**Sufficient conditions.**

- If $A$ has $n$ **distinct** eigenvalues, it is diagonalizable.
- Every **real symmetric** matrix is diagonalizable, and $P$ can be chosen **orthogonal** (normalised eigenvectors), so that $P^{-1} = P^T$ and $P^TAP = D$ (**orthogonal reduction**).
- A matrix with a repeated eigenvalue may fail: $\begin{bmatrix}2 & 1 \\ 0 & 2\end{bmatrix}$ has the double eigenvalue 2 but only the eigenvectors $k(1,0)^T$, so it is not diagonalizable.

**Que 4.29.** Diagonalize $A = \begin{bmatrix}1 & 0 & -1 \\ 1 & 2 & 1 \\ 2 & 2 & 3\end{bmatrix}$, giving the modal matrix $P$ and verifying $P^{-1}AP = D$.

**Answer:**

From Que 4.26 the eigenvalues are $1, 2, 3$ (distinct, so $A$ is diagonalizable).

**$\lambda = 1$.** $A - I = \begin{bmatrix}0 & 0 & -1 \\ 1 & 1 & 1 \\ 2 & 2 & 2\end{bmatrix}$: $z = 0$, $x + y = 0$. $X_1 = (-1, 1, 0)^T$.

**$\lambda = 2$.** $A - 2I = \begin{bmatrix}-1 & 0 & -1 \\ 1 & 0 & 1 \\ 2 & 2 & 1\end{bmatrix}$: $x = -z$ and $2x + 2y + z = 0 \Rightarrow 2y = z$. Taking $z = 2$: $X_2 = (-2, 1, 2)^T$.

**$\lambda = 3$.** $A - 3I = \begin{bmatrix}-2 & 0 & -1 \\ 1 & -1 & 1 \\ 2 & 2 & 0\end{bmatrix}$: from row 3, $y = -x$; from row 1, $z = -2x$. Taking $x = -1$: $X_3 = (-1, 1, 2)^T$.

$$P = \begin{bmatrix}-1 & -2 & -1 \\ 1 & 1 & 1 \\ 0 & 2 & 2\end{bmatrix}, \qquad |P| = -1(2 - 2) + 2(2 - 0) - 1(2 - 0) = 2.$$

$$P^{-1} = \frac{1}{2}\begin{bmatrix}0 & 2 & -1 \\ -2 & -2 & 0 \\ 2 & 2 & 1\end{bmatrix}.$$

**Verification.**

$$AP = \begin{bmatrix}-1 & -4 & -3 \\ 1 & 2 & 3 \\ 0 & 4 & 6\end{bmatrix} = P\begin{bmatrix}1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3\end{bmatrix},$$

because the columns of $AP$ are $1\cdot X_1$, $2X_2$, $3X_3$. Hence $P^{-1}AP = D = \operatorname{diag}(1, 2, 3)$. $\blacksquare$

**Que 4.30.** Diagonalize $A = \begin{bmatrix}4 & 1 \\ 2 & 3\end{bmatrix}$ and hence find $A^n$.

**Answer:**

Characteristic equation: $\lambda^2 - 7\lambda + 10 = 0$, so $\lambda = 2, 5$.

$\lambda = 2$: $2x + y = 0$, $X_1 = (1, -2)^T$. $\lambda = 5$: $-x + y = 0$, $X_2 = (1, 1)^T$.

$$P = \begin{bmatrix}1 & 1 \\ -2 & 1\end{bmatrix}, \quad P^{-1} = \frac13\begin{bmatrix}1 & -1 \\ 2 & 1\end{bmatrix}, \quad D = \begin{bmatrix}2 & 0 \\ 0 & 5\end{bmatrix}.$$

$$A^n = PD^nP^{-1} = \frac13\begin{bmatrix}2^n & 5^n \\ -2\cdot2^n & 5^n\end{bmatrix}\begin{bmatrix}1 & -1 \\ 2 & 1\end{bmatrix} = \frac13\begin{bmatrix}2^n + 2\cdot5^n & 5^n - 2^n \\ 2\cdot5^n - 2^{n+1} & 5^n + 2^{n+1}\end{bmatrix}.$$

**Check $n = 1$:** $\tfrac13\begin{bmatrix}12 & 3 \\ 6 & 9\end{bmatrix} = A$. $\checkmark$

**Que 4.31.** Reduce the symmetric matrix $A = \begin{bmatrix}2 & -1 & 1 \\ -1 & 2 & -1 \\ 1 & -1 & 2\end{bmatrix}$ to diagonal form by an orthogonal transformation.

**Answer:**

From Que 4.23 the eigenvalues are $4, 1, 1$, with eigenvectors $X_1 = (1, -1, 1)^T$ for 4, and for the repeated eigenvalue 1 any two independent solutions of $x - y + z = 0$.

For an orthogonal $P$ we need the two eigenvectors for $\lambda = 1$ to be perpendicular to each other. Take $X_2 = (1, 1, 0)^T$. Then choose $X_3 = (a, b, c)$ with $a - b + c = 0$ and $a + b = 0$: $b = -a$, $c = -2a$; take $X_3 = (1, -1, -2)^T$.

Normalise: $|X_1| = \sqrt3$, $|X_2| = \sqrt2$, $|X_3| = \sqrt6$.

$$P = \begin{bmatrix}\tfrac{1}{\sqrt3} & \tfrac{1}{\sqrt2} & \tfrac{1}{\sqrt6} \\ -\tfrac{1}{\sqrt3} & \tfrac{1}{\sqrt2} & -\tfrac{1}{\sqrt6} \\ \tfrac{1}{\sqrt3} & 0 & -\tfrac{2}{\sqrt6}\end{bmatrix}, \qquad P^TAP = \begin{bmatrix}4 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}.$$

**Remember:**

- Characteristic equation: $\lambda^2 - (\operatorname{tr}A)\lambda + |A| = 0$; $\lambda^3 - S_1\lambda^2 + S_2\lambda - |A| = 0$.
- Sum of eigenvalues = trace; product = determinant; $A^{-1}$ has $\tfrac1\lambda$; $A^k$ has $\lambda^k$.
- Cayley-Hamilton: $A$ satisfies its characteristic equation; $A^{-1}$ from it by multiplying by $A^{-1}$.
- $P^{-1}AP = D$ with eigenvectors as the columns of $P$; $A^n = PD^nP^{-1}$.

### Short-Answer Questions (2 marks)

**Q1. Find the sum and product of the eigenvalues of $\begin{bmatrix}3 & 1 \\ 2 & 4\end{bmatrix}$.** [PYQ 2023-24 type]
Sum $= 7$, product $= 10$.

**Q2. If $A$ is Hermitian, show that $iA$ is skew-Hermitian.** [PYQ 2022-23]
$(iA)^\theta = \overline{i}A^\theta = -iA$.

**Q3. Find the eigenvalues of $\begin{bmatrix}\cos\theta & -\sin\theta \\ -\sin\theta & -\cos\theta\end{bmatrix}$.** [PYQ 2024-25]
$\lambda^2 - 1 = 0$, so $\lambda = \pm1$.

**Q4. If the eigenvalues of $A$ are $2, 3, 4$, find those of $A^{-1}$ and $A^2 + I$.**
$\tfrac12, \tfrac13, \tfrac14$; and $5, 10, 17$.

**Q5. Find the rank of $\begin{bmatrix}3 & 6 & 9 \\ 1 & 2 & 3 \\ 2 & 4 & 6\end{bmatrix}$.** [PYQ 2025-26]
All rows are multiples of $(1, 2, 3)$, so the rank is 1.

**Q6. Solve $\begin{bmatrix}3 & -1 \\ 2 & 5\end{bmatrix}\begin{bmatrix}x \\ y\end{bmatrix} = \begin{bmatrix}5 \\ 9\end{bmatrix}$.** [PYQ 2025-26 type]
$|A| = 17$; $x = \dfrac{25 + 9}{17} = 2$, $y = \dfrac{27 - 10}{17} = 1$.

**Q7. State the Cayley-Hamilton theorem.**
Every square matrix satisfies its own characteristic equation.

**Q8. When does $AX = B$ have no solution?**
When $\rho(A) \ne \rho([A \mid B])$.

**Q9. When does $AX = 0$ have a non-trivial solution (square $A$)?**
When $|A| = 0$.

**Q10. Show that the eigenvalues of a triangular matrix are its diagonal entries.**
$|A - \lambda I|$ is the product of $(a_{ii} - \lambda)$, since the determinant of a triangular matrix is the product of the diagonal.

**Q11. Show that $A = \begin{bmatrix}0 & 2 \\ -2 & 0\end{bmatrix}$ is skew-symmetric and find its eigenvalues.**
$A^T = -A$; $\lambda^2 + 4 = 0$, $\lambda = \pm2i$ (purely imaginary).

**Q12. Define a unitary matrix.**
$A^\theta A = I$, i.e. $A^{-1} = A^\theta$.

**Q13. Write the condition for convergence of the Gauss-Seidel method.**
The coefficient matrix should be diagonally dominant.

**Q14. Define similar matrices.**
$B = P^{-1}AP$ for some non-singular $P$; they have the same eigenvalues.

**Q15. If $A^2 = A$, show that the eigenvalues of $A$ are 0 or 1.**
$AX = \lambda X \Rightarrow A^2X = \lambda^2X$; but $A^2X = AX = \lambda X$, so $\lambda^2 = \lambda$.

### Practice Questions

1. Find the rank of $\begin{bmatrix}1 & 2 & -1 & 3 \\ 4 & 1 & 2 & 1 \\ 3 & -1 & 1 & 2 \\ 1 & 2 & 0 & 1\end{bmatrix}$. (Answer: 3.)
2. Reduce $\begin{bmatrix}2 & 3 & -1 & -1 \\ 1 & -1 & -2 & -4 \\ 3 & 1 & 3 & -2 \\ 6 & 3 & 0 & -7\end{bmatrix}$ to normal form and find its rank. (Answer: 3.)
3. Find the inverse of $\begin{bmatrix}0 & 1 & 2 \\ 1 & 2 & 3 \\ 3 & 1 & 1\end{bmatrix}$ by elementary operations. (Answer: $\tfrac12\begin{bmatrix}1 & -1 & 1 \\ -8 & 6 & -2 \\ 5 & -3 & 1\end{bmatrix}$.)
4. Test for consistency and solve: $5x + 3y + 7z = 4$, $3x + 26y + 2z = 9$, $7x + 2y + 10z = 5$. (Answer: consistent, infinitely many: $x = \tfrac{7 - 16k}{11}$, $y = \tfrac{3 + k}{11}$, $z = k$.)
5. Find $\lambda$ for which $3x - y + 4z = 3$, $x + 2y - 3z = -2$, $6x + 5y + \lambda z = -3$ has a unique solution. (Answer: $\lambda \ne -5$.)
6. Solve by Gauss-Seidel: $10x + y + z = 12$, $2x + 10y + z = 13$, $2x + 2y + 10z = 14$. (Answer: $x = y = z = 1$.)
7. Find the eigenvalues and eigenvectors of $\begin{bmatrix}8 & -6 & 2 \\ -6 & 7 & -4 \\ 2 & -4 & 3\end{bmatrix}$. (Answer: $0, 3, 15$; $(1,2,2)$, $(2,1,-2)$, $(2,-2,1)$.)
8. Verify Cayley-Hamilton for $\begin{bmatrix}2 & -1 & 1 \\ -1 & 2 & -1 \\ 1 & -1 & 2\end{bmatrix}$ and find $A^{-1}$. (Answer: $A^{-1} = \tfrac14\begin{bmatrix}3 & 1 & -1 \\ 1 & 3 & 1 \\ -1 & 1 & 3\end{bmatrix}$.)
9. If $A = \begin{bmatrix}1 & 2 \\ 2 & 1\end{bmatrix}$, use Cayley-Hamilton to express $A^4$ as $aA + bI$. (Answer: $A^4 = 20A + 21I$.)
10. Show that $\begin{bmatrix}1 & 1 \\ 0 & 1\end{bmatrix}$ is not diagonalizable.

### Previous Year Questions from Unit 4

| Year | Question (short form) | Solved in |
|---|---|---|
| 2025-26 | Solve a $2\times2$ system; rank of a matrix with proportional rows | Q6, Q5 |
| 2025-26 | Consistency with parameters $\lambda$, $\mu$ | Que 4.12 |
| 2025-26 | Eigenvalues and eigenvectors of a $3\times3$ matrix | Que 4.21 to 4.23 |
| 2024-25 | Eigenvalues of the $\cos\theta$, $\sin\theta$ matrix | Que 4.19 |
| 2024-25 | $P$ and $Q$ with $PAQ$ in normal form | Que 4.8 |
| 2024-25 | Eigenvalues and eigenvectors of $\begin{bmatrix}2 & -1 & 1 \\ -1 & 2 & -1 \\ 1 & -1 & 2\end{bmatrix}$ | Que 4.23 |
| 2024-25 | Nature of solutions for all $k$ | Que 4.13 |
| 2023-24 | Sum and product of eigenvalues | Que 4.18 |
| 2023-24 | Homogeneous system in four unknowns | Que 4.14 |
| 2023-24 | $A^{-1}$, $A^{-2}$, $A^{-3}$ by Cayley-Hamilton | Que 4.26 |
| 2022-23 | $iA$ is skew-Hermitian | Que 4.3 |
| 2022-23 | Eigenvalue for a given eigenvector | Que 4.19 |
| 2022-23 | Cayley-Hamilton for $\begin{bmatrix}1 & 1 & 2 \\ 1 & 2 & 1 \\ 2 & 1 & 1\end{bmatrix}$ and $A^{-1}$ | Que 4.25 |
| 2022-23 | Consistency of $x + y + z = 6$, ... | Que 4.11 |
| 2021-22 | Eigenvalues of $A^3$ | Que 4.18 |
| 2021-22 | Eigenvectors of $\begin{bmatrix}-2 & 2 & -3 \\ 2 & 1 & -6 \\ -1 & -2 & 0\end{bmatrix}$ | Que 4.22 |
| 2021-22 | $\lambda$, $\mu$ system and its solution for $\lambda = 2$, $\mu = 8$ | Que 4.12 |

## Unit 5: Introduction to Vector Spaces

### Unit overview

In school a vector is an arrow with $x$, $y$, $z$ components. But many other objects behave exactly like arrows: you can add two of them and multiply them by numbers, and the usual rules hold. Polynomials of degree at most 2 can be added and scaled; so can $2\times2$ matrices; so can the solutions of a homogeneous system of equations; so can signals in electronics. **Linear algebra** studies all of these at once by listing the rules they share. Any collection that obeys the rules is called a **vector space**, and every result proved for vector spaces applies to all of them.

This unit introduces the basic language:

- **field** (the numbers we multiply by) and **vector space** (the objects);
- **subspace** (a smaller vector space inside a bigger one);
- **linear combination** and **span** (everything you can build from given vectors);
- **linear dependence and independence** (whether some vector is redundant);
- **basis and dimension** (a smallest building set, and its size).

These ideas are the foundation for the applied linear algebra of the second semester (eigen-decomposition, SVD, linear transformations) and for machine learning, signal processing and computer graphics.

**What you should already know:** vectors in $\mathbb R^2$ and $\mathbb R^3$, determinants and rank (Unit 4).

**What is asked:** this unit is new in AAS103D, but linear dependence of vectors was already asked in BAS103 papers (2021-22 and 2025-26). Expect definitions with examples in Section A, testing LD/LI with the relation, the subspace test, and finding a basis and dimension in Sections B and C.

### Part 1: Fields and Vector Spaces

**Concept**

To define a vector space we need two kinds of objects: the **vectors** themselves and the **scalars** (numbers) we multiply them by. The scalars must form a **field**: a number system in which we can add, subtract, multiply and divide (except by zero) with the familiar rules. The real numbers $\mathbb R$ and the complex numbers $\mathbb C$ are the fields used in engineering; the rational numbers $\mathbb Q$ also form a field. The integers $\mathbb Z$ do **not**, because $2$ has no inverse in $\mathbb Z$ ($\tfrac12$ is not an integer).

**Que 5.1.** Define a field. Give examples of fields and of number systems that are not fields.

**Answer:**

**Definition.** A **field** is a set $F$ with two operations, addition $+$ and multiplication $\cdot$, such that for all $a, b, c \in F$:

| | Addition | Multiplication |
|---|---|---|
| Closure | $a + b \in F$ | $ab \in F$ |
| Associative | $(a + b) + c = a + (b + c)$ | $(ab)c = a(bc)$ |
| Commutative | $a + b = b + a$ | $ab = ba$ |
| Identity | there is $0$ with $a + 0 = a$ | there is $1 \ne 0$ with $a\cdot1 = a$ |
| Inverse | there is $-a$ with $a + (-a) = 0$ | for $a \ne 0$ there is $a^{-1}$ with $aa^{-1} = 1$ |

and multiplication distributes over addition: $a(b + c) = ab + ac$.

**Examples of fields:** $\mathbb Q$ (rationals), $\mathbb R$ (reals), $\mathbb C$ (complex numbers), and $\mathbb Z_p = \{0, 1, \ldots, p - 1\}$ with arithmetic modulo a prime $p$ (used in coding theory and cryptography). For instance, in $\mathbb Z_5$, $3\cdot2 = 6 \equiv 1$, so $3^{-1} = 2$.

**Not fields:**

- $\mathbb N$ (natural numbers): no additive inverses.
- $\mathbb Z$ (integers): no multiplicative inverse of 2.
- The set of $2\times2$ real matrices: multiplication is not commutative and non-zero singular matrices have no inverse.
- $\mathbb Z_6$: $2\cdot3 = 0$, and 2 has no inverse modulo 6.

**Que 5.2.** Define a vector space over a field $F$. Give the list of axioms.

**Answer:**

A non-empty set $V$ is a **vector space over the field $F$** if two operations are defined:

- **vector addition**: for $u, v \in V$, a vector $u + v \in V$;
- **scalar multiplication**: for $\alpha \in F$ and $v \in V$, a vector $\alpha v \in V$;

such that for all $u, v, w \in V$ and $\alpha, \beta \in F$:

1. $u + v = v + u$ (commutative)
2. $(u + v) + w = u + (v + w)$ (associative)
3. there is a **zero vector** $0 \in V$ with $v + 0 = v$
4. for each $v$ there is $-v \in V$ with $v + (-v) = 0$
5. $\alpha(u + v) = \alpha u + \alpha v$
6. $(\alpha + \beta)v = \alpha v + \beta v$
7. $(\alpha\beta)v = \alpha(\beta v)$
8. $1\cdot v = v$

Together with the two **closure** properties ($u + v \in V$ and $\alpha v \in V$), these ten conditions define a vector space. Elements of $V$ are called vectors and elements of $F$ scalars. When $F = \mathbb R$ we speak of a **real vector space**; when $F = \mathbb C$, a **complex vector space**.

**Que 5.3.** Show that the following are vector spaces over $\mathbb R$: (i) $\mathbb R^n$, (ii) the set $M_{m\times n}$ of all real $m\times n$ matrices, (iii) the set $P_n$ of real polynomials of degree at most $n$, (iv) the set of all real functions on an interval.

**Answer:**

**(i) $\mathbb R^n$** $= \{(x_1, \ldots, x_n) : x_i \in \mathbb R\}$, with

$$(x_1, \ldots, x_n) + (y_1, \ldots, y_n) = (x_1 + y_1, \ldots, x_n + y_n), \qquad \alpha(x_1, \ldots, x_n) = (\alpha x_1, \ldots, \alpha x_n).$$

Each axiom reduces to the same property of real numbers in each component. For example, $\alpha(u + v) = (\alpha(x_1 + y_1), \ldots) = (\alpha x_1 + \alpha y_1, \ldots) = \alpha u + \alpha v$. The zero vector is $(0, \ldots, 0)$ and $-u = (-x_1, \ldots, -x_n)$.

**(ii) $M_{m\times n}$** with the usual matrix addition and scalar multiplication. The zero vector is the zero matrix. The axioms are the familiar rules of matrix algebra.

**(iii) $P_n$** $= \{a_0 + a_1x + \cdots + a_nx^n\}$. The sum of two polynomials of degree at most $n$ has degree at most $n$, and so does a scalar multiple, so both closures hold. The zero vector is the zero polynomial. The axioms follow from those of the coefficients.

**(iv) Functions** $f : [a,b] \to \mathbb R$, with $(f + g)(x) = f(x) + g(x)$ and $(\alpha f)(x) = \alpha f(x)$. The zero vector is the function that is 0 everywhere.

**Que 5.4.** Show that (i) the set of all polynomials of degree **exactly** 2, (ii) the set $\{(x, y) : y = x + 1\}$, (iii) the set $\mathbb R^2$ with the usual addition but with $\alpha(x, y) = (\alpha x, 0)$, are not vector spaces.

**Answer:**

**(i)** $(x^2 + x) + (-x^2 + 1) = x + 1$, which has degree 1. Closure under addition fails. (Also the zero polynomial is missing.)

**(ii)** $(0,1)$ and $(1,2)$ are in the set, but their sum $(1,3)$ has $3 \ne 1 + 1$. Closure fails; also $(0,0)$ is not in the set.

**(iii)** Axiom 8 fails: $1\cdot(x, y) = (x, 0) \ne (x, y)$ when $y \ne 0$.

**Que 5.5.** In any vector space $V$ over $F$, prove that (i) $0v = 0$, (ii) $\alpha0 = 0$, (iii) $(-1)v = -v$, (iv) if $\alpha v = 0$ then $\alpha = 0$ or $v = 0$.

**Answer:**

**(i)** $0v = (0 + 0)v = 0v + 0v$. Adding $-(0v)$ to both sides gives $0 = 0v$.

**(ii)** $\alpha0 = \alpha(0 + 0) = \alpha0 + \alpha0$; adding $-(\alpha0)$ gives $0 = \alpha0$.

**(iii)** $v + (-1)v = 1v + (-1)v = (1 + (-1))v = 0v = 0$. So $(-1)v$ is the additive inverse of $v$: $(-1)v = -v$.

**(iv)** Suppose $\alpha v = 0$ and $\alpha \ne 0$. Then $v = 1v = (\alpha^{-1}\alpha)v = \alpha^{-1}(\alpha v) = \alpha^{-1}0 = 0$ by (ii). $\blacksquare$

### Part 2: Subspaces

**Concept**

A **subspace** is a vector space sitting inside a bigger one, using the same operations. In $\mathbb R^3$, the subspaces are exactly: the origin alone, lines through the origin, planes through the origin, and $\mathbb R^3$ itself. A line or plane that does **not** pass through the origin is not a subspace, because it does not contain the zero vector.

Checking all ten axioms is not necessary: the axioms like commutativity are inherited from the big space. Only **closure** needs checking.

**Que 5.6.** Define a subspace. State and prove the subspace test (necessary and sufficient condition for a non-empty subset $W$ of $V$ to be a subspace).

**Answer:**

**Definition.** A non-empty subset $W$ of a vector space $V$ over $F$ is a **subspace** if $W$ is itself a vector space over $F$ with the operations of $V$.

**Theorem (subspace test).** A non-empty subset $W$ of $V$ is a subspace if and only if

$$\alpha u + \beta v \in W \quad\text{for all } u, v \in W \text{ and } \alpha, \beta \in F.$$

(Equivalently: $u + v \in W$ and $\alpha u \in W$ for all $u, v \in W$, $\alpha \in F$.)

**Proof.**

*Necessary.* If $W$ is a subspace it is closed under both operations, so $\alpha u \in W$, $\beta v \in W$ and $\alpha u + \beta v \in W$.

*Sufficient.* Suppose the condition holds.

- Taking $\alpha = \beta = 1$: $u + v \in W$ (closure under addition).
- Taking $\beta = 0$: $\alpha u + 0v = \alpha u \in W$ (closure under scalar multiplication).
- Taking $\alpha = \beta = 0$: $0 \in W$ (zero vector).
- Taking $\alpha = -1$, $\beta = 0$: $-u \in W$ (inverses).
- Axioms 1, 2 and 5 to 8 hold in $W$ because they hold for all vectors of $V$.

So $W$ is a vector space, i.e. a subspace. $\blacksquare$

**Quick test.** If $0 \notin W$, then $W$ is **not** a subspace. (The converse is false: containing 0 is necessary but not sufficient.)

**Que 5.7.** Determine which of the following are subspaces of $\mathbb R^3$:
(i) $W_1 = \{(x, y, z) : x + y + z = 0\}$, (ii) $W_2 = \{(x, y, z) : x + y + z = 1\}$, (iii) $W_3 = \{(x, y, z) : x \ge 0\}$, (iv) $W_4 = \{(x, y, z) : x = 2y\}$, (v) $W_5 = \{(x, y, z) : x^2 + y^2 = z^2\}$.

**Answer:**

**(i)** Let $u = (x_1, y_1, z_1)$ and $v = (x_2, y_2, z_2)$ be in $W_1$. Then for $\alpha u + \beta v$:

$$(\alpha x_1 + \beta x_2) + (\alpha y_1 + \beta y_2) + (\alpha z_1 + \beta z_2) = \alpha(x_1 + y_1 + z_1) + \beta(x_2 + y_2 + z_2) = 0 + 0 = 0.$$

So $\alpha u + \beta v \in W_1$: **subspace** (a plane through the origin).

**(ii)** $(0,0,0) \notin W_2$ since $0 \ne 1$: **not a subspace**.

**(iii)** $u = (1, 0, 0) \in W_3$ but $(-1)u = (-1, 0, 0) \notin W_3$: **not a subspace** (fails scalar closure).

**(iv)** If $x_1 = 2y_1$ and $x_2 = 2y_2$ then $\alpha x_1 + \beta x_2 = 2(\alpha y_1 + \beta y_2)$: **subspace** (a plane through the origin).

**(v)** $(3, 4, 5)$ and $(3, -4, 5)$ are in $W_5$ but their sum $(6, 0, 10)$ has $36 + 0 \ne 100$: **not a subspace** (a cone is not closed under addition).

**Que 5.8.** Show that the solution set of a homogeneous system $AX = 0$ ($A$ an $m\times n$ real matrix) is a subspace of $\mathbb R^n$. Is the solution set of $AX = B$ ($B \ne 0$) a subspace?

**Answer:**

Let $W = \{X \in \mathbb R^n : AX = 0\}$. $W$ is non-empty since $A0 = 0$. If $X_1, X_2 \in W$ and $\alpha, \beta \in \mathbb R$, then

$$A(\alpha X_1 + \beta X_2) = \alpha AX_1 + \beta AX_2 = 0 + 0 = 0,$$

so $\alpha X_1 + \beta X_2 \in W$. Hence $W$ is a subspace, called the **solution space** (or **null space**) of $A$.

For $AX = B$ with $B \ne 0$, $X = 0$ is not a solution ($A0 = 0 \ne B$), so the solution set is **not** a subspace.

**Que 5.9.** Prove that the intersection of two subspaces is a subspace. Show by an example that the union of two subspaces need not be a subspace. When is the union a subspace?

**Answer:**

**Intersection.** Let $W_1, W_2$ be subspaces of $V$. $0 \in W_1 \cap W_2$, so it is non-empty. If $u, v \in W_1 \cap W_2$, then $\alpha u + \beta v \in W_1$ (since $W_1$ is a subspace) and $\alpha u + \beta v \in W_2$ (since $W_2$ is). So $\alpha u + \beta v \in W_1 \cap W_2$. $\blacksquare$

**Union, counter-example.** In $\mathbb R^2$ take $W_1 = \{(x, 0)\}$ (the $x$-axis) and $W_2 = \{(0, y)\}$ (the $y$-axis). Both are subspaces. Now $(1, 0) \in W_1$ and $(0, 1) \in W_2$, but $(1, 0) + (0, 1) = (1, 1)$ is in neither axis. So $W_1 \cup W_2$ is not closed under addition and is **not** a subspace.

**When the union is a subspace.** $W_1 \cup W_2$ is a subspace if and only if one of them contains the other ($W_1 \subseteq W_2$ or $W_2 \subseteq W_1$).

*Proof of "only if".* Suppose neither contains the other: pick $u \in W_1\setminus W_2$ and $v \in W_2\setminus W_1$. If the union were a subspace, $u + v$ would lie in $W_1$ or $W_2$. If $u + v \in W_1$ then $v = (u + v) - u \in W_1$, a contradiction; similarly $u + v \in W_2$ gives $u \in W_2$. So the union is not a subspace.

**Que 5.10.** Which of the following are subspaces of $M_{2\times2}$ (real $2\times2$ matrices)? (i) symmetric matrices, (ii) matrices with determinant 0, (iii) upper triangular matrices, (iv) matrices with trace 0.

**Answer:**

**(i)** If $A^T = A$ and $B^T = B$, then $(\alpha A + \beta B)^T = \alpha A + \beta B$: **subspace**.

**(ii)** $\begin{bmatrix}1 & 0 \\ 0 & 0\end{bmatrix}$ and $\begin{bmatrix}0 & 0 \\ 0 & 1\end{bmatrix}$ both have determinant 0, but their sum $I$ has determinant 1: **not a subspace**.

**(iii)** A combination of upper triangular matrices is upper triangular (the entry below the diagonal stays 0): **subspace**.

**(iv)** $\operatorname{tr}(\alpha A + \beta B) = \alpha\operatorname{tr}A + \beta\operatorname{tr}B = 0$: **subspace**.

### Part 3: Linear Combinations and Span

**Concept**

Given a few vectors, the vectors we can **build** from them by scaling and adding are their linear combinations. All such combinations together form the **span**. In $\mathbb R^3$, the span of one non-zero vector is a line through the origin; the span of two non-parallel vectors is a plane through the origin; the span of three vectors not in one plane is all of $\mathbb R^3$.

**Que 5.11.** Define a linear combination and the linear span $L(S)$ of a set $S$. Prove that $L(S)$ is a subspace, and that it is the smallest subspace containing $S$.

**Answer:**

**Linear combination.** A vector $v$ is a linear combination of $v_1, \ldots, v_k$ if $v = \alpha_1v_1 + \cdots + \alpha_kv_k$ for some scalars $\alpha_i$.

**Span.** The set of all linear combinations of vectors of $S$ is the **linear span** of $S$, written $L(S)$ or $\operatorname{span}(S)$. We say $S$ **spans** (generates) $V$ if $L(S) = V$.

**$L(S)$ is a subspace.** If $u = \sum\alpha_iv_i$ and $w = \sum\beta_iv_i$ (combining the vectors used in both, with zero coefficients where needed), then

$$au + bw = \sum(a\alpha_i + b\beta_i)v_i,$$

again a linear combination. So $L(S)$ is closed and is a subspace.

**Smallest.** Any subspace $W$ containing $S$ is closed under linear combinations, so it contains every element of $L(S)$: $L(S) \subseteq W$. $\blacksquare$

**Que 5.12.** (i) Is $v = (1, 2, 3)$ a linear combination of $v_1 = (1, 0, 1)$ and $v_2 = (0, 1, 1)$? (ii) Is $w = (1, 1, 1)$? (iii) Express $(2, 3, 4)$ as a linear combination of $(1, 1, 0)$, $(1, 0, 1)$, $(0, 1, 1)$.

**Answer:**

**(i)** $av_1 + bv_2 = (a, b, a + b)$. For $(1, 2, 3)$: $a = 1$, $b = 2$, and then $a + b = 3$. $\checkmark$ So **yes**: $v = v_1 + 2v_2$.

**(ii)** $(a, b, a + b) = (1, 1, 1)$ needs $a = b = 1$ but then $a + b = 2 \ne 1$. **No.**

**(iii)** $a(1,1,0) + b(1,0,1) + c(0,1,1) = (a + b, a + c, b + c) = (2, 3, 4)$. Adding all three: $2(a + b + c) = 9$, so $a + b + c = 4.5$. Then $c = 4.5 - 2 = 2.5$, $b = 4.5 - 3 = 1.5$, $a = 4.5 - 4 = 0.5$.

$$(2, 3, 4) = \tfrac12(1,1,0) + \tfrac32(1,0,1) + \tfrac52(0,1,1).$$

**Que 5.13.** Show that the vectors $(1, 1, 1)$, $(1, 2, 3)$, $(2, 3, 5)$ span $\mathbb R^3$.

**Answer:**

We need: for every $(a, b, c)$ there are scalars $x, y, z$ with $x(1,1,1) + y(1,2,3) + z(2,3,5) = (a, b, c)$. This is the system with coefficient matrix

$$A = \begin{bmatrix}1 & 1 & 2 \\ 1 & 2 & 3 \\ 1 & 3 & 5\end{bmatrix}, \qquad |A| = 1(10 - 9) - 1(5 - 3) + 2(3 - 2) = 1 - 2 + 2 = 1 \ne 0.$$

Since $|A| \ne 0$, the system has a (unique) solution for every $(a, b, c)$. So the vectors span $\mathbb R^3$.

### Part 4: Linear Dependence and Independence

**Concept**

A set of vectors is **dependent** if one of them is redundant: it can be built from the others, so leaving it out does not reduce the span. For example $(1, 2)$, $(2, 4)$ are dependent ($(2,4)$ is twice $(1,2)$). A set is **independent** if none is redundant: each vector adds a new direction. Independence is tested by asking whether the only way to combine the vectors to get zero is with all coefficients zero.

**Que 5.14.** Define linearly dependent and linearly independent sets. Prove that a set of non-zero vectors is linearly dependent if and only if one of them is a linear combination of the others. State the standard facts about LD/LI sets.

**Answer:**

**Definitions.** Vectors $v_1, \ldots, v_k$ are **linearly dependent (LD)** if there are scalars $\alpha_1, \ldots, \alpha_k$, **not all zero**, with

$$\alpha_1v_1 + \alpha_2v_2 + \cdots + \alpha_kv_k = 0.$$

They are **linearly independent (LI)** if this equation holds **only** for $\alpha_1 = \cdots = \alpha_k = 0$.

**Theorem.** $v_1, \ldots, v_k$ ($k \ge 2$) are LD if and only if some $v_j$ is a linear combination of the others.

*Proof.* If $\alpha_1v_1 + \cdots + \alpha_kv_k = 0$ with, say, $\alpha_j \ne 0$, then

$$v_j = -\frac{1}{\alpha_j}\sum_{i\ne j}\alpha_iv_i,$$

a linear combination of the others. Conversely, if $v_j = \sum_{i\ne j}\beta_iv_i$, then $\sum_{i\ne j}\beta_iv_i - 1\cdot v_j = 0$ is a relation with the coefficient $-1 \ne 0$, so the set is LD. $\blacksquare$

**Standard facts**

1. Any set containing the zero vector is LD ($1\cdot0 = 0$).
2. A single non-zero vector is LI.
3. Two vectors are LD if and only if one is a scalar multiple of the other.
4. Any superset of an LD set is LD; any subset of an LI set is LI.
5. In $\mathbb R^n$, more than $n$ vectors are always LD.
6. **Determinant test:** $n$ vectors in $\mathbb R^n$ are LI if and only if the determinant of the matrix with these vectors as rows (or columns) is non-zero.
7. **Rank test:** $k$ vectors in $\mathbb R^n$ are LI if and only if the matrix with these vectors as rows has rank $k$.

**Que 5.15.** Determine whether $X_1 = (1, -1, 1)$, $X_2 = (2, 1, 1)$, $X_3 = (3, 0, 2)$ are linearly dependent or independent. If dependent, find the relation. [PYQ 2021-22]

**Answer:**

$$\begin{vmatrix}1 & -1 & 1 \\ 2 & 1 & 1 \\ 3 & 0 & 2\end{vmatrix} = 1(2 - 0) + 1(4 - 3) + 1(0 - 3) = 2 + 1 - 3 = 0.$$

The determinant is zero, so the vectors are **linearly dependent**.

**Relation.** Find $a, b$ with $aX_1 + bX_2 = X_3$: $a + 2b = 3$, $-a + b = 0$, $a + b = 2$. From the second, $a = b$; then $3b = 3$, $b = 1$, $a = 1$ (and the third equation holds). So

$$X_3 = X_1 + X_2, \quad\text{i.e.}\quad X_1 + X_2 - X_3 = 0.$$

**Que 5.16.** Show that the vectors $X_1 = (1, 2, 4)$, $X_2 = (2, -1, 3)$, $X_3 = (0, 1, 2)$, $X_4 = (-3, 7, 2)$ are linearly dependent and find the relation between them. [PYQ 2025-26 type]

**Answer:**

Four vectors in $\mathbb R^3$ are always dependent (fact 5). To find the relation, solve $aX_1 + bX_2 + cX_3 + dX_4 = 0$:

$$a + 2b - 3d = 0, \qquad 2a - b + c + 7d = 0, \qquad 4a + 3b + 2c + 2d = 0.$$

Row reduce the coefficient matrix:

$$\begin{bmatrix}1 & 2 & 0 & -3 \\ 2 & -1 & 1 & 7 \\ 4 & 3 & 2 & 2\end{bmatrix} \xrightarrow{R_2 - 2R_1,\ R_3 - 4R_1} \begin{bmatrix}1 & 2 & 0 & -3 \\ 0 & -5 & 1 & 13 \\ 0 & -5 & 2 & 14\end{bmatrix} \xrightarrow{R_3 - R_2} \begin{bmatrix}1 & 2 & 0 & -3 \\ 0 & -5 & 1 & 13 \\ 0 & 0 & 1 & 1\end{bmatrix}.$$

Let $d = k$. Then $c = -k$; $-5b + c + 13d = 0 \Rightarrow -5b + 12k = 0 \Rightarrow b = \tfrac{12k}{5}$; $a = -2b + 3d = -\tfrac{24k}{5} + 3k = -\tfrac{9k}{5}$.

Taking $k = -5$: $a = 9$, $b = -12$, $c = 5$, $d = -5$.

$$9X_1 - 12X_2 + 5X_3 - 5X_4 = 0.$$

**Check (first components):** $9 - 24 + 0 + 15 = 0$. $\checkmark$

**Que 5.17.** Show that $(1, 2, 1)$, $(2, 1, 0)$, $(1, -1, 2)$ are linearly independent.

**Answer:**

$$\begin{vmatrix}1 & 2 & 1 \\ 2 & 1 & 0 \\ 1 & -1 & 2\end{vmatrix} = 1(2 - 0) - 2(4 - 0) + 1(-2 - 1) = 2 - 8 - 3 = -9 \ne 0.$$

So the vectors are linearly independent.

**Que 5.18.** Find the value of $k$ for which the vectors $(1, 2, 1)$, $(k, 1, 1)$, $(0, 1, k)$ are linearly dependent.

**Answer:**

$$\begin{vmatrix}1 & 2 & 1 \\ k & 1 & 1 \\ 0 & 1 & k\end{vmatrix} = 1(k - 1) - 2(k^2 - 0) + 1(k - 0) = -2k^2 + 2k - 1.$$

For dependence this must be 0: $2k^2 - 2k + 1 = 0$, with discriminant $4 - 8 < 0$. There is **no real $k$**: the vectors are independent for every real $k$.

**Que 5.19.** In the vector space $P_2$ of polynomials, test for linear dependence: (i) $p_1 = 1 + x$, $p_2 = x + x^2$, $p_3 = 1 + 2x + x^2$; (ii) $1$, $x - 1$, $(x - 1)^2$.

**Answer:**

**(i)** $p_1 + p_2 = 1 + 2x + x^2 = p_3$, so $p_1 + p_2 - p_3 = 0$: **dependent**.

(Systematically: $a(1 + x) + b(x + x^2) + c(1 + 2x + x^2) = 0$ gives $a + c = 0$, $a + b + 2c = 0$, $b + c = 0$; the coefficient determinant is $\begin{vmatrix}1 & 0 & 1 \\ 1 & 1 & 2 \\ 0 & 1 & 1\end{vmatrix} = 1(1 - 2) + 1(1 - 0) = 0$, confirming dependence.)

**(ii)** $a + b(x - 1) + c(x - 1)^2 = 0$ for all $x$. Comparing the coefficient of $x^2$: $c = 0$; then of $x$: $b = 0$; then the constant: $a = 0$. Only the zero solution: **independent**.

**Que 5.20.** Show that in the space of real functions, (i) $\{1, \sin^2x, \cos^2x\}$ is linearly dependent, (ii) $\{e^x, e^{2x}\}$ is linearly independent.

**Answer:**

**(i)** $1\cdot1 - 1\cdot\sin^2x - 1\cdot\cos^2x = 0$ for all $x$: a non-trivial relation, so **dependent**.

**(ii)** Suppose $ae^x + be^{2x} = 0$ for all $x$. Put $x = 0$: $a + b = 0$. Differentiate and put $x = 0$: $a + 2b = 0$. Hence $b = 0$ and $a = 0$: **independent**.

**Common mistake:** concluding independence because the vectors "look different". Always set up $\sum\alpha_iv_i = 0$ (or a determinant) and show that all $\alpha_i$ must be 0.

### Part 5: Basis and Dimension

**Concept**

A **basis** is a set of building blocks that is just right: big enough to build every vector (it spans) and with no redundant member (it is independent). The number of vectors in a basis is the same for every basis of the space; this number is the **dimension**. It measures the number of independent directions, or "degrees of freedom": a line has dimension 1, a plane 2, space 3.

**Que 5.21.** Define a basis and the dimension of a vector space. Prove that if $\{v_1, \ldots, v_n\}$ is a basis of $V$, then every vector of $V$ can be written **uniquely** as a linear combination of $v_1, \ldots, v_n$.

**Answer:**

**Basis.** A set $B = \{v_1, \ldots, v_n\}$ of vectors of $V$ is a **basis** of $V$ if

1. $B$ is linearly independent, and
2. $B$ spans $V$.

**Dimension.** Every basis of $V$ has the same number of vectors (a standard theorem). This number is the **dimension** of $V$, written $\dim V$. The zero space $\{0\}$ has dimension 0. If no finite set spans $V$, $V$ is infinite-dimensional (e.g. the space of all polynomials).

**Uniqueness of representation.** Since $B$ spans $V$, every $v$ can be written as $v = \sum\alpha_iv_i$. Suppose also $v = \sum\beta_iv_i$. Subtracting,

$$\sum(\alpha_i - \beta_i)v_i = 0.$$

Since $B$ is independent, $\alpha_i - \beta_i = 0$ for every $i$. So the coefficients are unique. $\blacksquare$

These unique coefficients $(\alpha_1, \ldots, \alpha_n)$ are the **coordinates** of $v$ relative to $B$.

**Useful theorems** (for a space of dimension $n$)

- Any $n$ linearly independent vectors form a basis.
- Any $n$ vectors that span $V$ form a basis.
- Any independent set can be **extended** to a basis; any spanning set can be **reduced** to a basis.
- More than $n$ vectors are always dependent; fewer than $n$ cannot span.

**Que 5.22.** Write the standard bases and dimensions of $\mathbb R^n$, $P_n$ and $M_{2\times2}$.

**Answer:**

| Space | Standard basis | Dimension |
|---|---|---|
| $\mathbb R^3$ | $e_1 = (1,0,0)$, $e_2 = (0,1,0)$, $e_3 = (0,0,1)$ | 3 |
| $\mathbb R^n$ | $e_1, \ldots, e_n$ ($e_i$ has 1 in place $i$, 0 elsewhere) | $n$ |
| $P_n$ | $1, x, x^2, \ldots, x^n$ | $n + 1$ |
| $M_{2\times2}$ | $\begin{bmatrix}1&0\\0&0\end{bmatrix}, \begin{bmatrix}0&1\\0&0\end{bmatrix}, \begin{bmatrix}0&0\\1&0\end{bmatrix}, \begin{bmatrix}0&0\\0&1\end{bmatrix}$ | 4 |
| $M_{m\times n}$ | the $mn$ matrices with a single entry 1 | $mn$ |

**Que 5.23.** Show that $\{(1,1,0), (1,0,1), (0,1,1)\}$ is a basis of $\mathbb R^3$, and find the coordinates of $(2,3,4)$ relative to it.

**Answer:**

$$\begin{vmatrix}1 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1\end{vmatrix} = 1(0 - 1) - 1(1 - 0) + 0 = -2 \ne 0.$$

So the three vectors are independent. Since $\dim\mathbb R^3 = 3$, three independent vectors form a basis.

**Coordinates.** From Que 5.12 (iii), $(2, 3, 4) = \tfrac12(1,1,0) + \tfrac32(1,0,1) + \tfrac52(0,1,1)$. The coordinates are $\left(\tfrac12, \tfrac32, \tfrac52\right)$.

**Que 5.24.** Find a basis and the dimension of the subspace $W = \{(x, y, z) : x + y + z = 0\}$ of $\mathbb R^3$.

**Answer:**

From $x + y + z = 0$: $z = -x - y$, with $x$ and $y$ free. So every vector of $W$ is

$$(x, y, -x - y) = x(1, 0, -1) + y(0, 1, -1).$$

Hence $W$ is spanned by $u_1 = (1, 0, -1)$ and $u_2 = (0, 1, -1)$. They are independent (neither is a multiple of the other). So $\{u_1, u_2\}$ is a **basis** and $\dim W = 2$.

**Que 5.25.** Find a basis and the dimension of the solution space of $x + 2y - z + w = 0$, $2x + 4y - z + 3w = 0$.

**Answer:**

$$\begin{bmatrix}1 & 2 & -1 & 1 \\ 2 & 4 & -1 & 3\end{bmatrix} \xrightarrow{R_2 - 2R_1} \begin{bmatrix}1 & 2 & -1 & 1 \\ 0 & 0 & 1 & 1\end{bmatrix}.$$

Rank 2, four unknowns, so $\dim = 4 - 2 = 2$. Free variables $y = s$, $w = t$. Then $z = -t$, and $x = -2y + z - w = -2s - 2t$.

$$(x, y, z, w) = s(-2, 1, 0, 0) + t(-2, 0, -1, 1).$$

Basis: $\{(-2, 1, 0, 0), (-2, 0, -1, 1)\}$; dimension 2.

**General rule.** The solution space of $AX = 0$ with $n$ unknowns has dimension $n - \rho(A)$ (the **nullity** of $A$). This is the **rank-nullity theorem**: rank + nullity = number of columns.

**Que 5.26.** Extend $\{(1, 1, 1), (1, 2, 3)\}$ to a basis of $\mathbb R^3$.

**Answer:**

The two vectors are independent. Try adding a standard vector, say $e_1 = (1, 0, 0)$:

$$\begin{vmatrix}1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 0 & 0\end{vmatrix} = 1\cdot(3 - 2) = 1 \ne 0$$

(expanding along the third row). So $\{(1,1,1), (1,2,3), (1,0,0)\}$ is independent and hence a basis of $\mathbb R^3$.

**Que 5.27.** Find a basis and the dimension of the subspace of $\mathbb R^4$ spanned by $(1, 2, 3, 4)$, $(2, 4, 6, 8)$, $(1, 0, 1, 0)$, $(0, 2, 2, 4)$.

**Answer:**

Put the vectors as rows and reduce; the non-zero rows of the echelon form are a basis of the row space, which is the span.

$$\begin{bmatrix}1 & 2 & 3 & 4 \\ 2 & 4 & 6 & 8 \\ 1 & 0 & 1 & 0 \\ 0 & 2 & 2 & 4\end{bmatrix} \xrightarrow{R_2 - 2R_1,\ R_3 - R_1} \begin{bmatrix}1 & 2 & 3 & 4 \\ 0 & 0 & 0 & 0 \\ 0 & -2 & -2 & -4 \\ 0 & 2 & 2 & 4\end{bmatrix} \xrightarrow{R_4 + R_3} \begin{bmatrix}1 & 2 & 3 & 4 \\ 0 & 0 & 0 & 0 \\ 0 & -2 & -2 & -4 \\ 0 & 0 & 0 & 0\end{bmatrix}.$$

Two non-zero rows: basis $\{(1, 2, 3, 4), (0, 1, 1, 2)\}$ (dividing the second by $-2$), and the dimension is **2**.

### Part 6: Sum and Direct Sum of Subspaces

**Concept**

Two subspaces can be combined by taking all sums of a vector from each. If the two subspaces have only the zero vector in common, every vector of the combination splits in exactly one way, and we call it a **direct sum**. For example, $\mathbb R^3$ is the direct sum of the $xy$-plane and the $z$-axis: each $(x, y, z)$ splits uniquely as $(x, y, 0) + (0, 0, z)$.

**Que 5.28.** Define the sum $W_1 + W_2$ and the direct sum $W_1 \oplus W_2$ of two subspaces. State the dimension formula and illustrate it.

**Answer:**

**Sum.** $W_1 + W_2 = \{w_1 + w_2 : w_1 \in W_1, w_2 \in W_2\}$. It is a subspace (the smallest one containing $W_1 \cup W_2$).

**Direct sum.** $V = W_1 \oplus W_2$ if $V = W_1 + W_2$ and $W_1 \cap W_2 = \{0\}$. Equivalently, every $v \in V$ can be written **uniquely** as $w_1 + w_2$.

**Dimension formula.** For finite-dimensional subspaces,

$$\dim(W_1 + W_2) = \dim W_1 + \dim W_2 - \dim(W_1 \cap W_2).$$

For a direct sum, $\dim(W_1 \oplus W_2) = \dim W_1 + \dim W_2$.

**Illustration.** In $\mathbb R^3$, let $W_1 = \{(x, y, 0)\}$ ($xy$-plane, dimension 2) and $W_2 = \{(0, y, z)\}$ ($yz$-plane, dimension 2). Their intersection is the $y$-axis $\{(0, y, 0)\}$, dimension 1. So

$$\dim(W_1 + W_2) = 2 + 2 - 1 = 3,$$

and $W_1 + W_2 = \mathbb R^3$. But the sum is **not** direct (the intersection is not $\{0\}$); for instance $(1, 1, 1) = (1, 1, 0) + (0, 0, 1) = (1, 0, 0) + (0, 1, 1)$ in two ways.

With $W_2' = \{(0, 0, z)\}$ instead, $W_1 \cap W_2' = \{0\}$ and $\mathbb R^3 = W_1 \oplus W_2'$, with $3 = 2 + 1$.

**Que 5.29.** Show that $M_{2\times2}$ is the direct sum of the subspace $S$ of symmetric matrices and the subspace $K$ of skew-symmetric matrices.

**Answer:**

**Sum.** Every $A$ can be written $A = \tfrac12(A + A^T) + \tfrac12(A - A^T)$ with the first part symmetric and the second skew-symmetric (Que 4.2). So $M_{2\times2} = S + K$.

**Intersection.** If $A \in S \cap K$, then $A^T = A$ and $A^T = -A$, so $A = -A$ and $A = O$. So $S \cap K = \{O\}$.

Hence $M_{2\times2} = S \oplus K$. (Dimensions: $\dim S = 3$, $\dim K = 1$, total $4 = \dim M_{2\times2}$.)

**Remember:**

- Subspace test: $\alpha u + \beta v \in W$; first check $0 \in W$.
- LD/LI: set $\sum\alpha_iv_i = 0$; for $n$ vectors in $\mathbb R^n$ use the determinant.
- Basis = independent + spanning; dimension = number of basis vectors.
- Solution space of $AX = 0$: dimension $n - \rho(A)$.
- $\dim(W_1 + W_2) = \dim W_1 + \dim W_2 - \dim(W_1\cap W_2)$.

### Short-Answer Questions (2 marks)

**Q1. Define a field. Is $\mathbb Z$ a field?**
A set with $+$ and $\times$ satisfying the field axioms (Que 5.1). $\mathbb Z$ is not a field, since 2 has no multiplicative inverse in $\mathbb Z$.

**Q2. Define a vector space.**
A set closed under addition and scalar multiplication satisfying the eight axioms of Que 5.2.

**Q3. Define a subspace and state the subspace test.**
A subset that is a vector space under the same operations; test: $\alpha u + \beta v \in W$ for all $u, v \in W$ and scalars $\alpha, \beta$.

**Q4. Is $\{(x, y) : y = 2x + 1\}$ a subspace of $\mathbb R^2$?**
No: it does not contain $(0, 0)$.

**Q5. Is the union of two subspaces a subspace?**
Not in general (the $x$-axis $\cup$ the $y$-axis); it is if one contains the other.

**Q6. Determine whether $(1, -1, 1)$, $(2, 1, 1)$, $(3, 0, 2)$ are LD or LI.** [PYQ 2021-22]
The determinant is 0, so they are LD; $X_3 = X_1 + X_2$.

**Q7. Are $(1, 2)$ and $(3, 6)$ linearly independent?**
No: $(3, 6) = 3(1, 2)$.

**Q8. Why is any set containing the zero vector dependent?**
$1\cdot0 + 0\cdot v_2 + \cdots = 0$ is a relation with a non-zero coefficient.

**Q9. Define basis of a vector space.**
A linearly independent subset that spans the space.

**Q10. Write the dimension of $P_3$ and of $M_{2\times3}$.**
$4$ and $6$.

**Q11. Find the dimension of $\{(x, y, z) : x = y = z\}$.**
It is the line spanned by $(1, 1, 1)$: dimension 1.

**Q12. State the dimension formula for the sum of two subspaces.**
$\dim(W_1 + W_2) = \dim W_1 + \dim W_2 - \dim(W_1\cap W_2)$.

**Q13. When is $V = W_1 \oplus W_2$?**
When $V = W_1 + W_2$ and $W_1 \cap W_2 = \{0\}$.

**Q14. What is the dimension of the solution space of $AX = 0$ if $A$ is $3\times5$ of rank 2?**
$5 - 2 = 3$.

### Practice Questions

1. Show that the set of all $2\times2$ real matrices with $a_{11} + a_{22} = 0$ is a subspace of $M_{2\times2}$ and find its dimension. (Answer: 3.)
2. Is $W = \{(x, y, z) : xy = 0\}$ a subspace of $\mathbb R^3$? (Answer: no.)
3. Show that the set of solutions of $y'' + y = 0$ is a vector space, and that $\{\sin x, \cos x\}$ is a basis of it.
4. Test for dependence: $(1, 2, 3)$, $(3, -2, 1)$, $(1, -6, -5)$. (Answer: dependent; $2(1,2,3) - (3,-2,1) + (1,-6,-5) = 0$.)
5. For what value of $k$ are $(1, 1, 0)$, $(1, 3, 2)$, $(4, 9, k)$ dependent? (Answer: $k = 5$.)
6. Show that $\{1 + x, x + x^2, 1 + x^2\}$ is a basis of $P_2$.
7. Find a basis and the dimension of $\{(x, y, z, w) : x - y = 0, z + w = 0\}$. (Answer: $\{(1,1,0,0), (0,0,1,-1)\}$, dimension 2.)
8. Find the coordinates of $(1, 0, 0)$ relative to the basis $\{(1,1,1), (1,1,0), (1,0,0)\}$. (Answer: $(0, 0, 1)$.)
9. Let $W_1 = \operatorname{span}\{(1, 0, 0), (0, 1, 0)\}$ and $W_2 = \operatorname{span}\{(1, 1, 1)\}$. Show that $\mathbb R^3 = W_1 \oplus W_2$.
10. Prove that if $\{u, v, w\}$ is LI, then $\{u + v, v + w, w + u\}$ is also LI (over $\mathbb R$).

### Previous Year Questions from Unit 5

| Year | Question (short form) | Solved in |
|---|---|---|
| 2025-26 | Show that given column vectors are linearly dependent | Que 5.16 |
| 2021-22 | LD or LI: $(1,-1,1)$, $(2,1,1)$, $(3,0,2)$ | Que 5.15 |
| New in AAS103D | Field, vector space, subspace test, basis, dimension | Que 5.1 to 5.2, 5.6, 5.21 |

## Model Question Papers with Answer Guide

The two papers below follow the university pattern (70 marks, 3 hours) and are built from the question types of the last five papers. Attempt each one in 3 hours with the book closed, then check your answers against the place given in the last column.

### Model Paper 1

**Section A: attempt all questions (7 × 2 = 14 marks)**

| No. | Question | Answer in |
|---|---|---|
| a | If $u = \dfrac{x^3 + y^3}{x + y}$, find $xu_x + yu_y$. | Que 1.14, 1.17 (answer $2u$) |
| b | If $x = r\cos\theta$, $y = r\sin\theta$, find $\dfrac{\partial(r,\theta)}{\partial(x,y)}$. | Que 1.40 |
| c | Find $\Gamma\left(\tfrac14\right)\Gamma\left(\tfrac34\right)$. | Que 2.35 |
| d | Prove that $\nabla\times\vec r = \vec0$. | Que 3.14 |
| e | Find the unit normal to $xy^3z^2 = 4$ at $(-1,-1,2)$. | Que 3.5 |
| f | If $A$ is Hermitian, show that $iA$ is skew-Hermitian. | Que 4.3 |
| g | Are $(1,-1,1)$, $(2,1,1)$, $(3,0,2)$ linearly independent? | Que 5.15 |

**Section B: attempt any three (3 × 7 = 21 marks)**

| No. | Question | Answer in |
|---|---|---|
| a | If $u = \sin^{-1}\dfrac{x + y}{\sqrt x + \sqrt y}$, prove $x^2u_{xx} + 2xyu_{xy} + y^2u_{yy} = -\dfrac{\sin u\cos2u}{4\cos^3u}$. | Que 1.20 |
| b | Change the order of integration in $\displaystyle\int_0^1\int_{x^2}^{2-x}xy\,dy\,dx$ and evaluate. | Que 2.6 |
| c | Find the directional derivative of $xyz$ at $(1,1,3)$ along the outward normal to $x^2 + y^2 + z^2 = 11$. | Que 3.7 |
| d | Verify the Cayley-Hamilton theorem for $\begin{bmatrix}1 & 1 & 2 \\ 1 & 2 & 1 \\ 2 & 1 & 1\end{bmatrix}$ and find $A^{-1}$. | Que 4.25 |
| e | Find a basis and the dimension of $\{(x,y,z) : x + y + z = 0\}$. | Que 5.24 |

**Section C: attempt one part of each question (5 × 7 = 35 marks)**

| No. | Question | Answer in |
|---|---|---|
| 3 (a) | Find the largest rectangular parallelepiped inscribed in an ellipsoid. | Que 1.64 |
| 3 (b) | If $u, v, w$ are the roots of $(\lambda - x)^3 + (\lambda - y)^3 + (\lambda - z)^3 = 0$, find $\dfrac{\partial(u,v,w)}{\partial(x,y,z)}$. | Que 1.45 |
| 4 (a) | Find the area inside $r = 2a\cos\theta$ and outside $r = a$. | Que 2.19 |
| 4 (b) | Prove $B(m,n) = \dfrac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$. | Que 2.33 |
| 5 (a) | Prove $\nabla^2r^n = n(n+1)r^{n-2}$; deduce $\nabla^2(1/r) = 0$. | Que 3.15 |
| 5 (b) | Verify Stokes' theorem for $(x^2 + y^2)\hat i - 2xy\hat j$ round a rectangle. | Que 3.31 |
| 6 (a) | Discuss the system $x + y + z = 6$, $x + 2y + 5z = 10$, $2x + 3y + \lambda z = \mu$. | Que 4.12 |
| 6 (b) | Find the eigenvalues and eigenvectors of $\begin{bmatrix}-2 & 2 & -3 \\ 2 & 1 & -6 \\ -1 & -2 & 0\end{bmatrix}$. | Que 4.22 |
| 7 (a) | State and prove the subspace test; show that a union of subspaces need not be a subspace. | Que 5.6, 5.9 |
| 7 (b) | Show that four given vectors of $\mathbb R^3$ are dependent and find the relation. | Que 5.16 |

### Model Paper 2

**Section A: attempt all questions (7 × 2 = 14 marks)**

| No. | Question | Answer in |
|---|---|---|
| a | Differentiate between total and partial derivatives. | Que 1.26 |
| b | Each side of a box is measured with an error of 1%. Find the percentage error in its volume. | Que 1.70 |
| c | Evaluate $\displaystyle\int_1^2\int_1^3 x^2y^2\,dx\,dy$. | Que 2.2 |
| d | State Liouville's extension of Dirichlet's theorem. | Que 2.40 |
| e | Find $p$ so that $(px + 4y^2z)\hat i + (x^3\sin z - 3y)\hat j - (e^x + 4\cos x^2y)\hat k$ is solenoidal. | Que 3.18 |
| f | Find the eigenvalues of $\begin{bmatrix}\cos\theta & -\sin\theta \\ -\sin\theta & -\cos\theta\end{bmatrix}$. | Que 4.19 |
| g | Define basis and dimension of a vector space. | Que 5.21 |

**Section B: attempt any three (3 × 7 = 21 marks)**

| No. | Question | Answer in |
|---|---|---|
| a | Expand $e^x\cos y$ about $(1, \pi/4)$ up to second-degree terms. | Que 1.50 |
| b | Show that the area bounded by $y^2 = 4ax$, $y^2 = 4bx$, $xy = c$, $xy = d$ is $\tfrac13(d - c)\log\tfrac ba$. | Que 2.16 |
| c | Using Green's theorem, evaluate $\oint(y - \sin x)\,dx + \cos x\,dy$ over the triangle $y = 0$, $x = \pi/2$, $y = 2x/\pi$. | Que 3.28 |
| d | Find $P$ and $Q$ such that $PAQ$ is in normal form for $\begin{bmatrix}1 & 3 & 6 & -1 \\ 1 & 4 & 5 & 1 \\ 1 & 5 & 4 & 3\end{bmatrix}$. | Que 4.8 |
| e | Show that the solution set of $AX = 0$ is a subspace and find a basis of the solution space of a given system. | Que 5.8, 5.25 |

**Section C: attempt one part of each question (5 × 7 = 35 marks)**

| No. | Question | Answer in |
|---|---|---|
| 3 (a) | Find the shortest distance from $(1,2,0)$ to the cone $z^2 = x^2 + y^2$. | Que 1.66 |
| 3 (b) | Find the maximum of $P = 400xyz^2$ on the unit sphere. | Que 1.63 |
| 4 (a) | Change the order and evaluate $\displaystyle\int_0^{2a}\int_{x^2/4a}^{3a - x}(x^2 + y^2)\,dy\,dx$. | Que 2.7 |
| 4 (b) | Find the volume under $\sqrt{x/a} + \sqrt{y/b} + \sqrt{z/c} = 1$ in the first octant. | Que 2.44 |
| 5 (a) | Verify Gauss's theorem for $(x^2 - yz)\hat i + (y^2 - zx)\hat j + (z^2 - xy)\hat k$ over a rectangular box. | Que 3.36 |
| 5 (b) | Find the directional derivative of $e^{2x}\cos yz$ at the origin along the tangent to a helix. | Que 3.9 |
| 6 (a) | Find $A^{-1}$, $A^{-2}$, $A^{-3}$ by the Cayley-Hamilton theorem. | Que 4.26 |
| 6 (b) | Solve by Gauss-Seidel: $20x + y - 2z = 17$, $3x + 20y - z = -18$, $2x - 3y + 20z = 25$. | Que 4.16 |
| 7 (a) | Prove that a set of non-zero vectors is LD iff one is a combination of the others; test given polynomials. | Que 5.14, 5.19 |
| 7 (b) | Define sum and direct sum of subspaces; state and illustrate the dimension formula. | Que 5.28 |

## Last-Day Revision Checklist

**Unit 1**

- Limit test: different values along two paths means no limit.
- Euler: $xu_x + yu_y = nu$; second order $n(n-1)u$.
- If $f(u)$ is homogeneous of degree $n$: $g(u) = n\dfrac{f(u)}{f'(u)}$; second order $g(u)[g'(u) - 1]$.
- Total derivative $\dfrac{du}{dt} = u_x\dfrac{dx}{dt} + u_y\dfrac{dy}{dt}$; implicit $\dfrac{dy}{dx} = -\dfrac{f_x}{f_y}$.
- Jacobians: polar $r$, cylindrical $r$, spherical $r^2\sin\theta$; $JJ' = 1$; $J = 0$ means dependence; implicit $(-1)^n$ rule.
- Taylor: $f + (hf_x + kf_y) + \tfrac12(h^2f_{xx} + 2hkf_{xy} + k^2f_{yy})$.
- Extremum table with $rt - s^2$ and the sign of $r$.
- Lagrange: $F = f + \lambda\phi$, $F_x = F_y = F_z = 0$, then use the constraint.
- Errors: powers multiply the percentage errors, which add for the maximum.

**Unit 2**

- Draw the region; inner limits may contain the outer variable.
- Change of order: split the region whenever the strip's end changes curve.
- $dx\,dy = r\,dr\,d\theta$; $dV = r^2\sin\theta\,dr\,d\theta\,d\phi$; general $dx\,dy = |J|\,du\,dv$.
- $\Gamma(n+1) = n\Gamma(n)$, $\Gamma(\tfrac12) = \sqrt\pi$, $\int_0^\infty e^{-kx}x^{n-1}dx = \Gamma(n)/k^n$.
- $B(m,n) = \Gamma(m)\Gamma(n)/\Gamma(m+n)$; the $\sin^p\cos^q$ formula; $\Gamma(n)\Gamma(1-n) = \pi/\sin n\pi$.
- Dirichlet: $\dfrac{\Gamma(l)\Gamma(m)\Gamma(n)}{\Gamma(l + m + n + 1)}$; generalised form with $a^lb^mc^n/(pqr)$.

**Unit 3**

- $\nabla\phi$ is normal to $\phi = c$; directional derivative $\nabla\phi\cdot\hat a$; maximum $|\nabla\phi|$.
- $\nabla r^n = nr^{n-2}\vec r$; $\nabla\cdot\vec r = 3$; $\nabla\times\vec r = 0$; $\nabla^2r^n = n(n+1)r^{n-2}$.
- curl grad $= 0$; div curl $= 0$; solenoidal and irrotational; finding the scalar potential.
- Work $= \int\vec F\cdot d\vec r$; conservative means $\phi(B) - \phi(A)$.
- Green, Stokes, Gauss: statements and one verification each, face-by-face tables for cubes.

**Unit 4**

- Hermitian: real diagonal, real eigenvalues; skew-Hermitian: imaginary; unitary: $|\lambda| = 1$.
- Rank by echelon form; normal form $PAQ$; Gauss-Jordan inverse.
- Consistency: compare $\rho(A)$ and $\rho([A\mid B])$ with $n$.
- Gauss elimination with back substitution; Gauss-Seidel uses the newest values; needs diagonal dominance.
- $\lambda^3 - S_1\lambda^2 + S_2\lambda - |A| = 0$; eigenvectors by cross-multiplication; repeated roots give one equation.
- Cayley-Hamilton for $A^{-1}$, $A^{-2}$, powers; diagonalization $P^{-1}AP = D$, $A^n = PD^nP^{-1}$.

**Unit 5**

- Field axioms; $\mathbb Z$ is not a field.
- Subspace test $\alpha u + \beta v \in W$; check $0 \in W$ first.
- Intersection of subspaces is a subspace; union usually is not.
- LD/LI by $\sum\alpha_iv_i = 0$ or by determinant/rank; find the relation by solving.
- Basis = independent + spanning; $\dim\mathbb R^n = n$, $\dim P_n = n + 1$, $\dim M_{m\times n} = mn$.
- $\dim(W_1 + W_2) = \dim W_1 + \dim W_2 - \dim(W_1\cap W_2)$; direct sum when the intersection is $\{0\}$.

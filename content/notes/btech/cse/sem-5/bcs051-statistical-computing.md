---
program: btech
branches: [cse, it]
semester: 5
code: BCS051
name: Statistical Computing
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 3rd year, Departmental Elective, 2024-25 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/B-TECH-CSIT-IT-3rd-YR-2024-25-AKTU-26112024.pdf
units:
  - Descriptive Statistics and Probability
  - Inferential Statistics and Linear Methods
  - Random Numbers, Monte Carlo and MCMC
  - Resampling, Density Estimation and Numerical Methods
  - Statistical Computing with R
---

# BCS051 Statistical Computing: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: formulas, methods and comparison tables.
3. **Solved examples**: the numericals that appear (mean and SD, correlation and regression, distributions, confidence intervals, t, chi-square and ANOVA tests, Monte Carlo, Newton-Raphson, Simpson's rule).
4. **Formulas / code to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (central tendency, dispersion, skewness, correlation, regression, Bayes, distributions, Markov and Chebyshev, CLT) and Unit 2 (confidence intervals, hypothesis tests, ANOVA, chi-square, regression by QR and SVD, PCA).
- **Afternoon (3 hours):** Unit 3 (inverse transform, acceptance-rejection, Monte Carlo integration and variance reduction, Metropolis-Hastings and Gibbs) and Unit 4 (bootstrap, jackknife, cross-validation, kernel density, Newton-Raphson, numerical integration, EM, simplex).
- **Evening (2 hours):** Unit 5: R objects, functions, loops, import/export, plots and the built-in tests. Then the "Last-hour checklist".
- **In the exam:** state the hypotheses, the test statistic, its value, the critical value and the decision. For algorithms, write numbered steps and a short R snippet.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Descriptive Statistics and Probability

### 2-mark definitions

- **Descriptive statistics:** methods for summarizing and presenting data (tables, charts, averages, spread).
- **Diagrammatic representation:** bar charts, pie charts, histograms, frequency polygons, ogives, box plots and stem-and-leaf plots.
- **Measures of central tendency:** mean (sum/count), median (middle value when sorted), mode (most frequent value).
- **Measures of dispersion:** range, quartile deviation, mean deviation, variance, standard deviation, coefficient of variation (CV = σ/μ × 100).
- **Skewness:** lack of symmetry. Positive skew: long right tail, mean > median > mode. Karl Pearson's coefficient Sk = (mean − mode)/σ ≈ 3(mean − median)/σ.
- **Kurtosis:** peakedness of a distribution compared with the normal: β2 = μ4/μ2²; β2 = 3 mesokurtic, > 3 leptokurtic, < 3 platykurtic.
- **Correlation coefficient (r):** a measure of linear association between −1 and +1.
- **Regression:** fitting an equation to predict one variable from others; simple linear regression y = a + bx.
- **Multiple correlation:** correlation between one variable and the best linear combination of several others.
- **Probability:** a measure P on events with 0 ≤ P(A) ≤ 1, P(S) = 1 and additivity for disjoint events (Kolmogorov axioms).
- **Conditional probability:** P(A | B) = P(A ∩ B)/P(B).
- **Independent events:** P(A ∩ B) = P(A)P(B).
- **Random variable:** a function that assigns a number to each outcome; discrete (pmf) or continuous (pdf).
- **Expectation and variance:** E[X] = Σ x p(x) or ∫ x f(x) dx; Var(X) = E[X²] − (E[X])².
- **Central limit theorem (CLT):** the mean of n independent, identically distributed variables with finite variance is approximately normal for large n, with mean μ and variance σ²/n.

### Core concepts

**Important distributions**

| Distribution | P(X = x) or f(x) | Mean | Variance |
|---|---|---|---|
| Bernoulli(p) | pˣ(1 − p)^(1 − x) | p | p(1 − p) |
| Binomial(n, p) | C(n, x) pˣ (1 − p)^(n − x) | np | np(1 − p) |
| Poisson(λ) | e^(−λ) λˣ/x! | λ | λ |
| Geometric(p) | (1 − p)^(x − 1) p | 1/p | (1 − p)/p² |
| Uniform(a, b) | 1/(b − a) | (a + b)/2 | (b − a)²/12 |
| Exponential(λ) | λe^(−λx) | 1/λ | 1/λ² |
| Normal(μ, σ²) | (1/σ√(2π)) e^(−(x − μ)²/2σ²) | μ | σ² |

**Bayes theorem:** P(Aᵢ | B) = P(B | Aᵢ)P(Aᵢ)/Σⱼ P(B | Aⱼ)P(Aⱼ).

**Inequalities**
- Markov: for X ≥ 0, P(X ≥ a) ≤ E[X]/a.
- Chebyshev: P(|X − μ| ≥ kσ) ≤ 1/k².

**Correlation and regression**
- r = Σ(x − x̄)(y − ȳ)/√[Σ(x − x̄)² Σ(y − ȳ)²].
- Regression of y on x: y − ȳ = b_yx (x − x̄), b_yx = r σy/σx. Regression of x on y uses b_xy = r σx/σy. Also r² = b_yx · b_xy.
- Spearman's rank correlation: ρ = 1 − 6Σd²/[n(n² − 1)].
- Inference for correlation: t = r√(n − 2)/√(1 − r²) with n − 2 degrees of freedom.
- Multiple regression: y = b0 + b1x1 + … + bkxk; least squares estimate b = (XᵀX)⁻¹Xᵀy.

### Solved examples

**Example 1 (central tendency and spread).** Data 2, 4, 4, 4, 5, 5, 7, 9.
- Mean = 40/8 = **5**; median = (4 + 5)/2 = **4.5**; mode = **4**.
- Population variance = Σ(x − 5)²/8 = 32/8 = 4, so σ = **2**. Sample SD = √(32/7) ≈ 2.14.
- CV = 2/5 × 100 = 40%. Mean > median > mode suggests slight positive skew.

**Example 2 (correlation and regression).** x = 1, 2, 3, 4, 5; y = 2, 4, 5, 4, 5.
- Σ(x − x̄)(y − ȳ) = 6, Σ(x − x̄)² = 10, Σ(y − ȳ)² = 6.
- r = 6/√60 ≈ **0.775** (fairly strong positive).
- Regression: b = 0.6, a = 2.2, so **y = 2.2 + 0.6x**.

**Example 3 (distributions).**
- Binomial n = 10, p = 0.5: P(X = 3) = 120/1024 ≈ **0.117**.
- Poisson λ = 2: P(X = 0) = e^(−2) ≈ **0.135**.
- Normal μ = 60, σ = 10: P(X > 80) = P(Z > 2) ≈ **0.0228**.

**Example 4 (Chebyshev).** With μ = 50 and σ = 5, at least 1 − 1/2² = 75% of values lie between 40 and 60, whatever the distribution.

**Example 5 (Bayes).** Machines A, B, C make 50%, 30%, 20% of items with defect rates 1%, 2%, 3%. P(defective) = 0.005 + 0.006 + 0.006 = 0.017. P(A | defective) = 0.005/0.017 ≈ **0.294**.

### Formulas to remember

- σ² = Σ(x − x̄)²/n (population), s² = Σ(x − x̄)²/(n − 1) (sample).
- Sk = (mean − mode)/σ; β2 = μ4/μ2².
- r, b_yx, Spearman ρ as above.
- Var(X̄) = σ²/n (used in CLT).

### Important questions

1. Explain measures of central tendency and dispersion; compute them for given data.
2. Explain skewness and kurtosis with formulas and diagrams.
3. Explain correlation (simple, multiple, rank) and regression; fit a regression line and test r.
4. State Bayes theorem and solve a problem; explain random variables, expectation and variance.
5. Explain binomial, Poisson and normal distributions; state Markov and Chebyshev inequalities and the CLT.

---

## Unit 2: Inferential Statistics and Linear Methods

### 2-mark definitions

- **Population and sample:** the population is the whole group of interest; a sample is a subset used to draw conclusions.
- **Parameter and statistic:** a parameter describes a population (μ, σ); a statistic is computed from a sample (x̄, s).
- **Sampling distribution:** the distribution of a statistic over all possible samples; the standard error of x̄ is σ/√n.
- **Point estimate vs interval estimate:** a single value (x̄) vs a range that likely contains the parameter (confidence interval).
- **Confidence interval (CI):** an interval computed so that, in repeated sampling, a stated percentage (e.g. 95%) of such intervals contain the parameter.
- **Null hypothesis (H0) and alternative (H1):** H0 is the default claim (no effect); H1 is what we test for.
- **Type I and Type II errors:** rejecting a true H0 (probability α, significance level) and accepting a false H0 (probability β). Power = 1 − β.
- **p-value:** the probability, assuming H0, of a result at least as extreme as the one observed; reject H0 if p < α.
- **Degrees of freedom:** the number of independent values free to vary when computing a statistic.
- **Goodness-of-fit test:** checks whether observed frequencies match a hypothesized distribution (chi-square).
- **Test of independence:** checks whether two categorical variables are related, using a contingency table (chi-square).
- **ANOVA:** analysis of variance; tests whether three or more group means are equal by comparing between-group and within-group variance.
- **Permutation (randomization) test:** a non-parametric test that builds the null distribution by reshuffling group labels.
- **Principal component analysis (PCA):** a linear transformation to new uncorrelated variables (principal components) ordered by variance, used for dimension reduction.
- **Singular value decomposition (SVD):** factorization A = UΣVᵀ with orthogonal U, V and non-negative singular values in Σ.

### Core concepts

**Choosing a test**

| Situation | Test | Statistic |
|---|---|---|
| Mean, σ known or n large | z-test | z = (x̄ − μ0)/(σ/√n) |
| Mean, σ unknown, small n | one-sample t-test | t = (x̄ − μ0)/(s/√n), df n − 1 |
| Two independent means | two-sample t-test | t = (x̄1 − x̄2)/(sp √(1/n1 + 1/n2)) |
| Before and after on same subjects | paired t-test | t = d̄/(s_d/√n) |
| Three or more means | one-way ANOVA | F = MSB/MSW |
| Observed vs expected counts | chi-square goodness of fit | χ² = Σ(O − E)²/E, df k − 1 |
| Two categorical variables | chi-square independence | df (r − 1)(c − 1) |

**Steps of hypothesis testing:** state H0 and H1 → choose α → compute the test statistic → find the critical value or p-value → decide (reject or fail to reject H0) → state the conclusion in words.

**Confidence intervals:** mean with σ known: x̄ ± z(α/2) σ/√n (z = 1.96 for 95%, 2.576 for 99%); σ unknown: x̄ ± t(α/2, n − 1) s/√n; proportion: p̂ ± z √(p̂(1 − p̂)/n).

**Linear regression computation**
- Normal equations XᵀXb = Xᵀy can be ill-conditioned; numerically stable methods are preferred.
- **QR decomposition (Householder orthogonalization):** X = QR with Q orthogonal and R upper triangular, built with Householder reflections H = I − 2vvᵀ/(vᵀv). Then solve Rb = Qᵀy by back substitution.
- **SVD:** X = UΣVᵀ gives b = VΣ⁺Uᵀy; it also handles rank-deficient X and shows multicollinearity through small singular values.
- **PCA:** centre the data, compute the covariance matrix (or SVD of the data matrix), take eigenvectors with the largest eigenvalues; the share of variance explained by component k is λk/Σλ.

### Solved examples

**Example 1 (95% CI).** n = 100, x̄ = 50, σ = 10: SE = 1, CI = 50 ± 1.96 = **(48.04, 51.96)**.

**Example 2 (one-sample t-test).** n = 16, x̄ = 52, s = 8, H0: μ = 50, α = 0.05 (two-tailed). t = 2/(8/4) = **1.0**; critical t(0.025, 15) = 2.131. Since 1.0 < 2.131, **do not reject H0**.

**Example 3 (chi-square goodness of fit).** A die is rolled 60 times: observed 8, 9, 12, 11, 6, 14; expected 10 each. χ² = (4 + 1 + 4 + 1 + 16 + 16)/10 = **4.2**; df = 5; critical value 11.07 at 5%. 4.2 < 11.07, so the die is **consistent with fair**.

**Example 4 (one-way ANOVA).** Groups A: 2, 3, 4 (mean 3); B: 4, 5, 6 (mean 5); C: 6, 7, 8 (mean 7). Grand mean 5.
- SSB = 3[(3 − 5)² + 0 + (7 − 5)²] = 24, df 2, MSB = 12.
- SSW = 2 + 2 + 2 = 6, df 6, MSW = 1.
- F = 12; critical F(2, 6) at 5% = 5.14. **Reject H0**: the group means differ.

**Example 5 (PCA variance).** Eigenvalues 4.0, 0.8, 0.2: the first component explains 4/5 = **80%** of the variance, the first two 96%.

### Formulas to remember

- SE = σ/√n; CI = x̄ ± z SE.
- z, t, F, χ² formulas in the table.
- Pooled variance sp² = [(n1 − 1)s1² + (n2 − 1)s2²]/(n1 + n2 − 2).
- Least squares b = (XᵀX)⁻¹Xᵀy = R⁻¹Qᵀy.

### Important questions

1. Explain sampling distributions, point and interval estimation; build confidence intervals.
2. Explain hypothesis testing, type I and II errors and p-values; perform z and t tests (one-sample, independent, paired).
3. Explain chi-square tests for goodness of fit and independence, with examples.
4. Explain one-way ANOVA with an example; explain permutation and randomization tests.
5. Explain multiple regression and its computation by Householder QR and SVD; explain PCA for dimension reduction.

---

## Unit 3: Random Numbers, Monte Carlo and MCMC

### 2-mark definitions

- **Pseudo-random numbers:** numbers generated by a deterministic algorithm that look random; the sequence repeats after a period and depends on a seed.
- **Linear congruential generator (LCG):** xₙ₊₁ = (a xₙ + c) mod m, uₙ = xₙ/m.
- **Inverse transform method:** if U ~ Uniform(0, 1), then X = F⁻¹(U) has CDF F.
- **Acceptance-rejection method:** generate Y from an easy density g, and accept it with probability f(Y)/(c g(Y)), where f(x) ≤ c g(x) for all x.
- **Monte Carlo method:** estimating quantities (integrals, probabilities) by averaging over random samples.
- **Monte Carlo integration:** ∫ₐᵇ h(x) dx ≈ (b − a) × (1/n) Σ h(Uᵢ), Uᵢ uniform on [a, b].
- **Variance reduction:** techniques that make Monte Carlo estimates more precise for the same n: antithetic variables, control variates, importance sampling, stratified sampling.
- **Markov chain:** a sequence of random states where the next state depends only on the current one (Markov property).
- **Stationary distribution:** a distribution π with π = πP; a well-behaved chain converges to it.
- **MCMC (Markov chain Monte Carlo):** sampling from a complex distribution by building a Markov chain whose stationary distribution is the target.
- **Metropolis-Hastings:** an MCMC algorithm that proposes a move and accepts it with a probability based on the target density ratio.
- **Gibbs sampling:** an MCMC algorithm that updates one variable at a time from its full conditional distribution.
- **Burn-in:** the initial samples of a chain discarded before it reaches the stationary distribution.

### Core concepts

**Variance reduction techniques**

| Technique | Idea |
|---|---|
| Antithetic variables | use U and 1 − U together; negative correlation lowers variance |
| Control variates | use a correlated variable C with known mean: θ̂ = mean(h) − c(mean(C) − E[C]) |
| Importance sampling | sample from g concentrated where h·f is large; weight by f/g |
| Stratified sampling | split the domain into strata and sample each separately |

**Metropolis-Hastings algorithm**
1. Start at x0.
2. Propose y from q(y | xt).
3. Compute α = min(1, [π(y) q(xt | y)]/[π(xt) q(y | xt)]); for a symmetric q, α = min(1, π(y)/π(xt)).
4. Draw U; if U ≤ α accept xt+1 = y, else xt+1 = xt.
5. Repeat; discard burn-in; use the rest as samples.

**Gibbs sampler (two variables):** repeat: draw x from f(x | y), then y from f(y | x). It is a special case of Metropolis-Hastings with acceptance probability 1.

**Convergence diagnostics:** trace plots, autocorrelation plots, running means, multiple chains from different starts (Gelman-Rubin statistic close to 1).

**Monte Carlo hypothesis testing:** simulate the test statistic many times under H0 and estimate the p-value as the proportion of simulated values at least as extreme as the observed one.

### Solved examples

**Example 1 (LCG).** a = 5, c = 3, m = 16, x0 = 7: x1 = 38 mod 16 = 6; x2 = 33 mod 16 = 1; x3 = 8; x4 = 43 mod 16 = 11. Uniforms: 0.375, 0.0625, 0.5, 0.6875.

**Example 2 (inverse transform for exponential).** F(x) = 1 − e^(−λx), so X = −ln(1 − U)/λ (or −ln(U)/λ). With λ = 2 and U = 0.5: X = ln 2/2 ≈ **0.347**.

**Example 3 (Monte Carlo integration).** Estimate ∫₀¹ x² dx = 1/3. With U = 0.1, 0.4, 0.7, 0.9: mean of U² = (0.01 + 0.16 + 0.49 + 0.81)/4 = 0.3675 (close to 0.333; more samples give a better estimate, error ∝ 1/√n).

**Example 4 (estimating π).** Generate n points in the unit square; count those with x² + y² ≤ 1. π ≈ 4 × (count/n). If 785 of 1000 points fall inside, π ≈ 3.14.

**Example 5 (Metropolis step).** Target π(x) ∝ e^(−x²/2). Current x = 0, proposal y = 1: α = min(1, e^(−0.5)/1) ≈ 0.607. If U = 0.4 ≤ 0.607, accept y = 1.

### Code to remember (R)

```r
set.seed(42)
# Inverse transform: exponential(rate = 2)
u <- runif(10000); x <- -log(u) / 2; mean(x)            # about 0.5

# Acceptance-rejection: Beta(2, 2) from Uniform, f(x) = 6x(1 - x) <= 1.5
ar <- function(n) { out <- c()
  while (length(out) < n) { y <- runif(1); if (runif(1) <= 6*y*(1-y)/1.5) out <- c(out, y) }
  out }

# Monte Carlo integral of exp(-x^2) on [0, 1] with antithetic variables
u <- runif(5000); est <- mean((exp(-u^2) + exp(-(1-u)^2)) / 2)

# Metropolis-Hastings for standard normal
mh <- function(n, sd = 1) { x <- numeric(n)
  for (t in 2:n) { y <- rnorm(1, x[t-1], sd)
    if (runif(1) < dnorm(y) / dnorm(x[t-1])) x[t] <- y else x[t] <- x[t-1] }
  x }
s <- mh(10000)[-(1:1000)]   # drop burn-in
```

### Important questions

1. Explain pseudo-random number generation (LCG) and its properties.
2. Explain the inverse transform and acceptance-rejection methods with examples.
3. Explain Monte Carlo integration and Monte Carlo hypothesis testing.
4. Explain variance reduction: antithetic variables, control variates, importance and stratified sampling.
5. Explain Markov chains, the Metropolis-Hastings algorithm, Gibbs sampling and convergence checks.

---

## Unit 4: Resampling, Density Estimation and Numerical Methods

### 2-mark definitions

- **Resampling:** repeatedly drawing samples from the observed data to assess the variability of a statistic.
- **Bootstrap:** drawing B samples of size n **with replacement** from the data and recomputing the statistic each time; gives standard errors and confidence intervals.
- **Percentile bootstrap CI:** the interval between the α/2 and 1 − α/2 percentiles of the bootstrap statistics.
- **Jackknife:** recomputing the statistic n times, each time leaving out one observation; estimates bias and standard error.
- **Cross-validation:** splitting data into training and validation parts to estimate prediction error; k-fold uses k parts in turn; leave-one-out uses k = n.
- **Permutation test:** reshuffling labels to obtain the null distribution of a statistic.
- **Density estimation:** estimating the probability density function from data without assuming a parametric form.
- **Histogram estimator:** counts in bins divided by n × bin width.
- **Kernel density estimator (KDE):** f̂(x) = (1/nh) Σ K((x − xᵢ)/h), a smooth sum of kernels centred at each point; h is the bandwidth.
- **Root finding:** finding x with f(x) = 0 (bisection, Newton-Raphson, secant).
- **Numerical integration:** approximating ∫ f(x) dx (trapezoidal, Simpson's rule, Gaussian quadrature).
- **EM algorithm:** an iterative method for maximum likelihood with missing or latent data, alternating an E-step and an M-step.
- **Simplex method:** an algorithm for linear programming that moves along the vertices of the feasible region to the optimum. (Nelder-Mead "simplex" is a different, derivative-free method for unconstrained optimization.)

### Core concepts

**Bootstrap vs jackknife**

| Point | Bootstrap | Jackknife |
|---|---|---|
| Samples | B (e.g. 1000) random resamples with replacement | n leave-one-out samples |
| Randomness | yes | no (deterministic) |
| Gives | SE, bias, CIs, distribution | mainly bias and SE |
| Works for median | yes | poorly (non-smooth statistics) |

Jackknife formulas: θ̄(·) = mean of the leave-one-out estimates; bias = (n − 1)(θ̄(·) − θ̂); SE = √[((n − 1)/n) Σ(θ̂(i) − θ̄(·))²].

**Kernel choice and bandwidth:** Gaussian, Epanechnikov and uniform kernels; the bandwidth matters far more than the kernel. Silverman's rule of thumb: h = 1.06 σ n^(−1/5). Small h → wiggly (high variance); large h → over-smoothed (high bias).

**Root finding methods**

| Method | Update | Convergence |
|---|---|---|
| Bisection | halve the interval where the sign changes | linear, always converges |
| Newton-Raphson | x₁ = x₀ − f(x₀)/f′(x₀) | quadratic, needs derivative and good start |
| Secant | uses two previous points instead of f′ | superlinear |

**Numerical integration**
- Trapezoidal: ∫ ≈ (h/2)[f0 + 2(f1 + … + fn−1) + fn].
- Simpson's 1/3 (n even): ∫ ≈ (h/3)[f0 + 4(f1 + f3 + …) + 2(f2 + f4 + …) + fn].

**Optimization:** maximization or minimization by Newton's method (uses the Hessian), gradient descent, Nelder-Mead; constrained problems use Lagrange multipliers, penalty methods or linear programming (simplex). In R: optimize() (1-D), optim(), nlm(), and constrOptim().

**EM algorithm (mixture of two normals):** E-step: compute each point's responsibility (probability of belonging to each component) using current parameters. M-step: update the means, variances and mixing proportions as responsibility-weighted averages. Repeat until the log-likelihood stops increasing; the likelihood never decreases.

### Solved examples

**Example 1 (jackknife mean).** Data 2, 4, 6: θ̂ = 4. Leave-one-out means: 5, 4, 3; θ̄(·) = 4; bias = 0 (the mean is unbiased). SE = √[(2/3)(1 + 0 + 1)] = √(4/3) ≈ **1.155**, which equals s/√n.

**Example 2 (Newton-Raphson for √2).** f(x) = x² − 2, x0 = 1: x1 = 1 − (−1)/2 = 1.5; x2 = 1.5 − 0.25/3 ≈ 1.41667; x3 ≈ **1.41422**.

**Example 3 (numerical integration of ∫₀¹ x² dx = 1/3, h = 0.5).**
- Trapezoidal: (0.5/2)(0 + 2 × 0.25 + 1) = **0.375**.
- Simpson's: (0.5/3)(0 + 4 × 0.25 + 1) = **0.3333** (exact for polynomials up to degree 3).

**Example 4 (k-fold CV).** With 100 observations and k = 5, each fold has 20 points; the model is trained 5 times on 80 and tested on 20, and the 5 errors are averaged.

**Example 5 (bisection).** f(x) = x³ − x − 2 on [1, 2]: f(1) = −2, f(2) = 4 → midpoint 1.5: f = −0.125 → root in [1.5, 2] → 1.75: f = 1.609 → [1.5, 1.75] → 1.625 … converging to 1.5214.

### Code to remember (R)

```r
x <- c(12, 15, 9, 20, 17, 11, 14)
# Bootstrap SE and percentile CI of the median
B <- 2000; meds <- replicate(B, median(sample(x, replace = TRUE)))
sd(meds); quantile(meds, c(0.025, 0.975))

# Jackknife SE of the mean
n <- length(x); th <- sapply(1:n, function(i) mean(x[-i]))
sqrt((n - 1) / n * sum((th - mean(th))^2))

# Kernel density estimate and root finding
d <- density(x, bw = "nrd0"); plot(d)
uniroot(function(z) z^3 - z - 2, c(1, 2))$root      # 1.5214
integrate(function(z) z^2, 0, 1)                    # 0.3333
optim(c(1, 1), function(p) (p[1] - 3)^2 + (p[2] + 1)^2)$par   # about (3, -1)
```

### Important questions

1. Explain the bootstrap and percentile confidence intervals; explain the jackknife with formulas.
2. Explain cross-validation and permutation tests.
3. Explain histogram and kernel density estimation; discuss bandwidth selection and multivariate density estimation.
4. Explain root finding (bisection, Newton-Raphson) and numerical integration (trapezoidal, Simpson) with examples.
5. Explain constrained and unconstrained optimization, the EM algorithm and the simplex method.

---

## Unit 5: Statistical Computing with R

### 2-mark definitions

- **R:** a free, open-source language and environment for statistical computing and graphics, created by Ross Ihaka and Robert Gentleman (University of Auckland, 1993) as an implementation of the S language.
- **CRAN:** the Comprehensive R Archive Network, which hosts R and thousands of packages.
- **Package:** a bundle of R functions, data and documentation; installed with install.packages("name") and loaded with library(name).
- **Workspace:** the current R environment holding user objects; ls() lists them, rm() removes them, save.image() saves them.
- **Vector:** the basic R object; an ordered collection of values of one type, created with c(), seq() or rep().
- **Matrix and array:** 2-D and n-D collections of one type, created with matrix() and array().
- **List:** an ordered collection of objects of possibly different types.
- **Data frame:** a table where columns may have different types but equal length; the standard structure for datasets.
- **Factor:** a categorical variable with a fixed set of levels.
- **Function:** a reusable block of code: f <- function(args) { body }.
- **Vectorization:** applying an operation to a whole vector at once, which is faster than loops in R.
- **apply family:** apply (rows/columns of a matrix), lapply (list, returns list), sapply (simplifies), tapply (by groups), mapply (multiple inputs).

### Core concepts

**Data types:** numeric (double), integer (5L), character, logical (TRUE/FALSE), complex, and raw. Check with class(), typeof(), is.numeric(); convert with as.numeric(), as.character(), as.factor().

**Operators:** arithmetic (+ − \* / ^ %% %/%), relational (< > == != <= >=), logical (& | ! && ||), assignment (<- = ->), and %in% for membership; matrix multiply %\*%.

**Flow control:** if / else, ifelse(test, yes, no) (vectorized), for, while, repeat with break, next, and switch().

**Dates and times:** as.Date("2024-01-15"), format(d, "%d/%m/%Y"), Sys.Date(), difftime(), seq(d, by = "month", length.out = 6); POSIXct for date-times.

**Import and export:** read.csv(), read.table(), readLines(), readRDS(); write.csv(), write.table(), saveRDS(), sink() for output to a file.

**Graphics:** plot(), hist(), boxplot(), barplot(), pie(), lines(), points(), abline(), legend(), text(); par(mfrow = c(2, 2)) for multiple plots; export with png("f.png"), pdf("f.pdf") and dev.off(); interactive annotation with locator() and identify().

**Descriptive statistics and aggregation:** summary(), mean(), median(), var(), sd(), quantile(), range(), table(), cor(); aggregate(y ~ g, data, FUN = mean), tapply(), by(), and multivariate views with pairs() and cor() matrices.

**Code optimization:** vectorize, pre-allocate vectors (numeric(n)) instead of growing them, use apply functions, profile with system.time() and Rprof(), and move repeated code into functions (code factorization).

**Statistical functions:** t.test(), chisq.test(), aov(), lm(), glm(), cor.test(), wilcox.test(), prcomp() (PCA), and distribution functions d/p/q/r + name (dnorm, pnorm, qnorm, rnorm).

### Solved examples

**Example 1 (vectors and indexing).**

```r
v <- c(4, 8, 15, 16, 23, 42)
v[2]            # 8
v[-1]           # 8 15 16 23 42
v[v > 15]       # 16 23 42
sum(v); mean(v) # 108  18
seq(1, 10, by = 3)   # 1 4 7 10
rep(c("a", "b"), times = 2)   # "a" "b" "a" "b"
```

**Example 2 (matrix).**

```r
m <- matrix(1:6, nrow = 2)   # filled by column: [1 3 5; 2 4 6]
dim(m); t(m)                  # 2 3, transpose
m %*% t(m)                    # [35 44; 44 56]
apply(m, 1, sum)              # row sums 9 12
```

**Example 3 (data frame and factor).**

```r
df <- data.frame(name = c("Asha", "Ravi", "Neha"), marks = c(82, 67, 91),
                 branch = factor(c("CSE", "IT", "CSE")))
df[df$marks > 70, ]              # Asha and Neha
levels(df$branch)                # "CSE" "IT"
aggregate(marks ~ branch, df, mean)   # CSE 86.5, IT 67
```

**Example 4 (user-defined function and loop).**

```r
grade <- function(m) if (m >= 90) "A" else if (m >= 75) "B" else "C"
for (m in c(95, 80, 60)) print(grade(m))   # "A" "B" "C"
sapply(c(95, 80, 60), grade)              # vectorized form
```

### Code to remember (R)

```r
# Read, summarize, test, model and plot
data <- read.csv("students.csv")          # columns: hours, score, group
str(data); summary(data)
t.test(score ~ group, data = data)         # two-sample t-test
chisq.test(table(data$group, data$score > 60))
fit <- lm(score ~ hours, data = data); summary(fit); coef(fit)
png("scatter.png"); plot(data$hours, data$score, main = "Hours vs Score")
abline(fit, col = "red"); dev.off()
write.csv(aggregate(score ~ group, data, mean), "group_means.csv", row.names = FALSE)
```

### Important questions

1. Explain the history and features of R; explain packages, the workspace and basic operators.
2. Explain R data objects: vectors, matrices, arrays, lists, data frames and factors, with examples.
3. Explain functions, flow control and loops in R; write a user-defined function.
4. Explain importing and exporting data, graphics and exporting graphs in R.
5. Explain descriptive statistics, aggregation and statistical tests in R; explain code factorization and optimization.

---

## Last-hour checklist

Read only this in the last hour before the paper.
- [ ] Mean, median, mode; σ vs s; CV; skewness and kurtosis formulas.
- [ ] r = 0.775 example; regression lines; Spearman; t for r.
- [ ] Bayes (machine defect example); distribution table (mean and variance).
- [ ] Markov and Chebyshev; CLT statement.
- [ ] CI formula; hypothesis testing steps; type I and II errors; p-value.
- [ ] t-test (t = 1.0 example), chi-square (4.2), ANOVA (F = 12).
- [ ] QR (Householder), SVD, PCA variance explained.
- [ ] LCG; inverse transform; acceptance-rejection; Monte Carlo integration and π.
- [ ] Variance reduction table; Metropolis-Hastings acceptance; Gibbs; burn-in.
- [ ] Bootstrap vs jackknife; cross-validation; KDE and bandwidth.
- [ ] Newton-Raphson (√2), bisection, trapezoidal 0.375 vs Simpson 0.3333; EM; simplex.
- [ ] R objects, apply family, import/export, plots, t.test, chisq.test, lm.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Fundamentals of Mathematical Statistics | S. C. Gupta, V. K. Kapoor | Sultan Chand & Sons | [WorldCat](https://search.worldcat.org/search?q=Fundamentals+of+Mathematical+Statistics+Gupta+Kapoor) |
| 2 | Introduction to Probability and Statistics for Engineers and Scientists | Sheldon M. Ross | Academic Press | [WorldCat](https://search.worldcat.org/search?q=Introduction+to+Probability+and+Statistics+for+Engineers+and+Scientists+Ross) |
| 3 | Modern Mathematical Statistics | E. J. Dudewicz, S. N. Mishra | Wiley | [WorldCat](https://search.worldcat.org/search?q=Modern+Mathematical+Statistics+Dudewicz+Mishra) |
| 4 | Statistics Using R | S. G. Purohit, S. D. Gore, S. R. Deshmukh | Narosa | [WorldCat](https://search.worldcat.org/search?q=Statistics+Using+R+Purohit+Gore+Deshmukh) |
| 5 | Statistical Computing with R | Maria L. Rizzo | Chapman & Hall/CRC | [WorldCat](https://search.worldcat.org/search?q=Statistical+Computing+with+R+Rizzo) |
| 6 | The Art of R Programming | Norman Matloff | No Starch Press | [WorldCat](https://search.worldcat.org/search?q=The+Art+of+R+Programming+Matloff) |
| 7 | Introductory Statistics with R | Peter Dalgaard | Springer | [WorldCat](https://search.worldcat.org/search?q=Introductory+Statistics+with+R+Dalgaard) |
| 8 | Probability and Statistics with R | M. D. Ugarte, A. F. Militino, A. T. Arnholt | CRC Press | [WorldCat](https://search.worldcat.org/search?q=Probability+and+Statistics+with+R+Ugarte) |
| 9 | Statistical Computing: Existing Methods and Recent Developments | D. Kundu, A. Basu | Narosa | [WorldCat](https://search.worldcat.org/search?q=Statistical+Computing+Existing+Methods+Recent+Developments+Kundu+Basu) |
| 10 | Handbook of Computational Statistics | J. E. Gentle, W. K. Härdle, Y. Mori | Springer | [WorldCat](https://search.worldcat.org/search?q=Handbook+of+Computational+Statistics+Gentle+Hardle+Mori) |
| 11 | Computational Statistics | G. H. Givens, J. A. Hoeting | Wiley | [WorldCat](https://search.worldcat.org/search?q=Computational+Statistics+Givens+Hoeting) |
| 12 | The R Book | Michael J. Crawley | John Wiley & Sons | [WorldCat](https://search.worldcat.org/search?q=The+R+Book+Crawley) |
| 13 | Learning R | Richard Cotton | O'Reilly | [WorldCat](https://search.worldcat.org/search?q=Learning+R+Richard+Cotton) |
| 14 | A Handbook of Statistical Analyses Using R (2nd ed.) | Brian S. Everitt, Torsten Hothorn | Chapman & Hall/CRC | [WorldCat](https://search.worldcat.org/search?q=A+Handbook+of+Statistical+Analyses+Using+R+Everitt) |
| 15 | Learning Statistics Using R | Randall E. Schumacker | Sage | [WorldCat](https://search.worldcat.org/search?q=Learning+Statistics+Using+R+Schumacker) |
| 16 | R for Everyone | Jared P. Lander | Addison Wesley | [WorldCat](https://search.worldcat.org/search?q=R+for+Everyone+Lander) |
| 17 | Numerical Methods of Statistics | John F. Monahan | Cambridge University Press | [WorldCat](https://search.worldcat.org/search?q=Numerical+Methods+of+Statistics+Monahan) |
| 18 | Introducing Monte Carlo Methods with R | Christian Robert, George Casella | Springer | [WorldCat](https://search.worldcat.org/search?q=Introducing+Monte+Carlo+Methods+with+R+Robert+Casella) |

The R Project website (r-project.org) and CRAN manuals are free, legal companions for Unit 5.

**Syllabus source:** [AKTU B.Tech 3rd year CS/IT syllabus, 2024-25 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/B-TECH-CSIT-IT-3rd-YR-2024-25-AKTU-26112024.pdf)

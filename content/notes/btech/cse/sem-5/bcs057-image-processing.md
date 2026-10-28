---
program: btech
branches: [cse, it, cse-aiml, cse-ds, aids]
semester: 5
code: BCS057
name: Image Processing
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 3rd year, Departmental Elective, 2024-25 onwards
syllabusSource: https://dvsiet.dewaninstitutes.com/assets/images/about/AI-DS3.pdf
units:
  - Digital Image Fundamentals
  - Image Enhancement
  - Image Restoration
  - Image Segmentation and Morphology
  - Image Compression, Representation and Recognition
---

# BCS057 Image Processing: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: transforms, filters and comparison tables.
3. **Solved examples**: the numericals that appear (storage, distances, histogram equalization, mean and median filters, gradient masks, Hough, Huffman coding, compression ratio).
4. **Formulas to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (sampling, quantization, pixel relationships, distance measures, RGB and HSI, DFT and DCT) and Unit 2 (point operations, histogram equalization numerical, spatial filters, frequency domain filters).
- **Afternoon (3 hours):** Unit 3 (noise models, mean and order-statistic filters, inverse and Wiener filtering) and Unit 4 (edge detection masks, Hough transform, thresholding, region methods, morphology, watershed).
- **Evening (2 hours):** Unit 5: redundancies, Huffman, RLE, arithmetic coding, JPEG and MPEG steps, boundary and region descriptors, basic pattern recognition. Then the "Last-hour checklist".
- **In the exam:** write the formula, show the mask or table, then the result. For histogram equalization always make the full table (rk, nk, pr, cumulative, sk, rounded).

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Digital Image Fundamentals

### 2-mark definitions

- **Digital image:** a 2-D function f(x, y) where x, y are discrete spatial coordinates and f is a discrete intensity (grey level) value.
- **Digital image processing:** processing digital images by a computer to improve them for humans or extract information for machines.
- **Pixel:** an element of a digital image at a location (x, y) with a value.
- **Sampling:** digitizing the spatial coordinates (deciding the number of pixels).
- **Quantization:** digitizing the amplitude (deciding the number of grey levels, L = 2ᵏ for k bits).
- **Spatial resolution:** the smallest discernible detail (pixels per unit distance). **Intensity resolution:** the smallest discernible change in grey level.
- **4-neighbours N4(p):** the pixels above, below, left and right of p. **Diagonal neighbours ND(p):** the four diagonal pixels. **8-neighbours N8(p) = N4 ∪ ND.**
- **Adjacency:** 4-, 8- and m-adjacency (mixed adjacency, which removes the ambiguity of 8-adjacency).
- **Connectivity and region:** pixels are connected if a path of adjacent pixels joins them; a region is a connected set.
- **Image acquisition:** capturing an image using a sensor (single sensor, line sensor, array sensor such as CCD/CMOS) and digitizing it.
- **RGB model:** colours as combinations of red, green and blue on a unit cube; used in displays.
- **HSI model:** hue (colour type), saturation (purity) and intensity (brightness); close to human description of colour.
- **DFT:** the discrete Fourier transform converts an image to the frequency domain.
- **DCT:** the discrete cosine transform uses only real cosine functions; it packs energy into few coefficients and is used in JPEG.

### Core concepts

**Fundamental steps in digital image processing:** image acquisition → enhancement → restoration → colour image processing → wavelets and multiresolution → compression → morphological processing → segmentation → representation and description → object recognition, all supported by a knowledge base.

**Components of an image processing system:** image sensors, specialized hardware (digitizer, ALU), computer, software, mass storage, displays, hard-copy devices and network.

**Distance measures between p(x, y) and q(s, t)**
- Euclidean: De = √((x − s)² + (y − t)²).
- City-block (D4): |x − s| + |y − t|.
- Chessboard (D8): max(|x − s|, |y − t|).

**RGB to HSI**
- I = (R + G + B)/3.
- S = 1 − 3 min(R, G, B)/(R + G + B).
- H = θ if B ≤ G, else 360° − θ, where θ = cos⁻¹{½[(R − G) + (R − B)]/√[(R − G)² + (R − B)(G − B)]}.

**2-D DFT (M × N image):** F(u, v) = Σx Σy f(x, y) e^(−j2π(ux/M + vy/N)). Properties: separability (compute as 1-D row then column transforms), translation, periodicity, conjugate symmetry, rotation, convolution theorem (convolution in space = multiplication in frequency). The FFT computes it in O(MN log MN).

**DFT vs DCT**

| Point | DFT | DCT |
|---|---|---|
| Basis | complex exponentials | real cosines |
| Output | complex | real |
| Energy compaction | good | better |
| Boundary artefacts | more (assumes periodic) | fewer (assumes symmetric extension) |
| Main use | filtering, analysis | compression (JPEG, MPEG) |

### Solved examples

**Example 1 (storage).** A 1024 × 1024 image with 256 grey levels (8 bits): 1024 × 1024 × 8 = 8,388,608 bits = **1 MB**. With 16 levels (4 bits): 512 KB.

**Example 2 (distances).** p = (2, 3), q = (5, 7): De = √(9 + 16) = **5**; D4 = 3 + 4 = **7**; D8 = max(3, 4) = **4**.

**Example 3 (RGB to I and S).** (R, G, B) = (0.6, 0.4, 0.2): I = 1.2/3 = **0.4**; S = 1 − 3(0.2)/1.2 = **0.5**.

### Formulas to remember

- Bits to store an M × N image with k bits: b = M × N × k.
- L = 2ᵏ grey levels.
- De, D4, D8 as above.

### Important questions

1. Explain the fundamental steps and components of a digital image processing system.
2. Explain image sampling and quantization; effect of reducing spatial and intensity resolution.
3. Explain neighbours, adjacency, connectivity and distance measures with an example.
4. Explain the RGB and HSI colour models and conversion between them.
5. Explain the 2-D DFT with its properties; compare DFT and DCT.

---

## Unit 2: Image Enhancement

### 2-mark definitions

- **Image enhancement:** processing an image so the result is more suitable than the original for a specific application.
- **Spatial domain:** methods that operate directly on pixels: g(x, y) = T[f(x, y)].
- **Frequency domain:** methods that modify the Fourier transform of the image and then take the inverse.
- **Point processing (intensity transformation):** T uses only the pixel's own value, s = T(r).
- **Image negative:** s = L − 1 − r.
- **Log transformation:** s = c log(1 + r); expands dark values and compresses bright ones.
- **Power-law (gamma) transformation:** s = c r^γ; γ < 1 brightens, γ > 1 darkens (gamma correction).
- **Contrast stretching:** a piecewise linear transform that expands the range of grey levels.
- **Histogram:** h(rk) = nk, the number of pixels with grey level rk; normalized p(rk) = nk/MN.
- **Histogram equalization:** a transformation that spreads grey levels to give an approximately uniform histogram and improve contrast.
- **Spatial filter (mask, kernel):** a small matrix moved over the image; each output pixel is a function of its neighbourhood.
- **Smoothing filter:** reduces noise and blurs (averaging, Gaussian, median).
- **Sharpening filter:** highlights edges and fine detail (Laplacian, gradient, unsharp masking).
- **Homomorphic filtering:** a frequency domain method that separates illumination and reflectance (via logarithm) to compress dynamic range and enhance contrast together.

### Core concepts

**Histogram equalization:** sk = (L − 1) Σ (j = 0 to k) p(rj), rounded to the nearest integer.

**Smoothing vs sharpening**

| Point | Smoothing (low-pass) | Sharpening (high-pass) |
|---|---|---|
| Purpose | remove noise, blur | enhance edges |
| Mask sum | 1 (e.g. all 1/9) | 0 (e.g. Laplacian) |
| Spatial examples | mean, weighted mean, median | Laplacian, Sobel, unsharp mask |
| Frequency filters | ideal, Butterworth, Gaussian LPF | ideal, Butterworth, Gaussian HPF |

**Common masks**
- Averaging: (1/9)[1 1 1; 1 1 1; 1 1 1].
- Weighted average: (1/16)[1 2 1; 2 4 2; 1 2 1].
- Laplacian: [0 1 0; 1 −4 1; 0 1 0] (or with −8 centre for diagonals). Sharpened image: g = f − ∇²f (centre negative).

**Frequency domain filters (D(u, v) = distance from centre, D0 = cutoff)**

| Filter | Low-pass H(u, v) | Notes |
|---|---|---|
| Ideal | 1 if D ≤ D0, else 0 | sharp cutoff; causes ringing |
| Butterworth (order n) | 1/[1 + (D/D0)^(2n)] | smooth; little ringing at low n |
| Gaussian | e^(−D²/2D0²) | no ringing |

High-pass versions: H_HP = 1 − H_LP.

**Steps for frequency domain filtering:** multiply f(x, y) by (−1)^(x+y) to centre, compute DFT F(u, v), multiply by H(u, v), take inverse DFT, take the real part, multiply by (−1)^(x+y).

**Homomorphic filtering:** f = i · r → ln f = ln i + ln r → DFT → H(u, v) with γL < 1 for low frequencies (illumination) and γH > 1 for high frequencies (reflectance) → inverse DFT → exp.

### Solved examples

**Example 1 (histogram equalization, 3-bit image of 64 × 64 = 4096 pixels).**

| rk | nk | p(rk) | Cumulative | sk = 7 × cumulative | Rounded |
|---|---|---|---|---|---|
| 0 | 790 | 0.19 | 0.19 | 1.33 | 1 |
| 1 | 1023 | 0.25 | 0.44 | 3.08 | 3 |
| 2 | 850 | 0.21 | 0.65 | 4.55 | 5 |
| 3 | 656 | 0.16 | 0.81 | 5.67 | 6 |
| 4 | 329 | 0.08 | 0.89 | 6.23 | 6 |
| 5 | 245 | 0.06 | 0.95 | 6.65 | 7 |
| 6 | 122 | 0.03 | 0.98 | 6.86 | 7 |
| 7 | 81 | 0.02 | 1.00 | 7.00 | 7 |

New histogram: level 1 → 790, 3 → 1023, 5 → 850, 6 → 985, 7 → 448. The levels are now spread over the full range.

**Example 2 (mean vs median filter).** 3 × 3 neighbourhood [10 20 20; 20 15 20; 20 25 100].
- Mean = 250/9 ≈ **27.8** (pulled up by the outlier 100).
- Sorted values: 10, 15, 20, 20, 20, 20, 20, 25, 100; median = **20** (outlier ignored). This is why median filters remove salt-and-pepper noise well.

**Example 3 (negative and gamma).** 8-bit pixel r = 100: negative = 255 − 100 = **155**. Gamma with c = 1, γ = 0.5 on normalized r = 0.25: s = 0.5 (brighter).

**Example 4 (Butterworth).** D0 = 30, n = 2, at D = 30: H = 1/(1 + 1) = **0.5** (always 0.5 at the cutoff). At D = 60: H = 1/(1 + 2⁴) = 1/17 ≈ 0.059.

### Formulas to remember

- s = L − 1 − r; s = c log(1 + r); s = c r^γ.
- sk = (L − 1) Σ nj/MN.
- Butterworth LPF 1/(1 + (D/D0)^(2n)); Gaussian e^(−D²/2D0²).

### Important questions

1. Explain point processing: negative, log, power-law and piecewise linear transformations.
2. Explain histogram processing and perform histogram equalization for given data.
3. Explain smoothing and sharpening spatial filters with masks; compare mean and median filters.
4. Explain ideal, Butterworth and Gaussian low-pass and high-pass filters.
5. Explain homomorphic filtering with a block diagram.

---

## Unit 3: Image Restoration

### 2-mark definitions

- **Image restoration:** recovering an image that has been degraded, using knowledge of the degradation (objective), unlike enhancement (subjective).
- **Degradation model:** g(x, y) = h(x, y) ∗ f(x, y) + η(x, y); in frequency: G = HF + N.
- **Noise:** unwanted random variation in intensity, usually from acquisition or transmission.
- **Gaussian noise:** noise whose values follow a normal distribution; common from electronic circuits and sensors.
- **Salt-and-pepper (impulse) noise:** random white and black pixels caused by faulty switching or transmission errors.
- **Periodic noise:** noise from electrical or electromechanical interference; appears as bright spots (spikes) in the Fourier spectrum.
- **Order-statistic filter:** a filter whose output depends on ranking the neighbourhood values (median, max, min, midpoint, alpha-trimmed mean).
- **Notch filter:** rejects (or passes) frequencies in small neighbourhoods around specific points in the spectrum; used to remove periodic noise.
- **Inverse filtering:** estimate F̂(u, v) = G(u, v)/H(u, v).
- **Wiener filter (minimum mean square error filter):** a restoration filter that balances inverse filtering and noise smoothing to minimize the mean square error.

### Core concepts

**Noise models**

| Noise | PDF / key feature | Typical cause |
|---|---|---|
| Gaussian | bell-shaped, mean μ, variance σ² | sensor and circuit noise |
| Rayleigh | skewed to the right | range imaging |
| Erlang (gamma) | skewed | laser imaging |
| Exponential | special case of Erlang | laser imaging |
| Uniform | constant over [a, b] | quantization |
| Impulse (salt and pepper) | spikes at two values | faulty switching, transmission |

**Mean filters (m × n window Sxy)**
- Arithmetic mean: (1/mn) Σ g. Smooths, blurs.
- Geometric mean: [Π g]^(1/mn). Smooths with less detail loss.
- Harmonic mean: mn/Σ(1/g). Good for salt noise and Gaussian noise; fails on pepper noise.
- Contraharmonic mean of order Q: Σ g^(Q+1)/Σ g^Q. Q > 0 removes pepper noise; Q < 0 removes salt noise.

**Order-statistic filters**
- Median: best for impulse noise with little blurring.
- Max: finds bright points, removes pepper noise.
- Min: finds dark points, removes salt noise.
- Midpoint: (max + min)/2, good for Gaussian or uniform noise.
- Alpha-trimmed mean: delete d/2 lowest and d/2 highest, average the rest; good for mixed noise.

**Periodic noise removal:** band-reject filters (a ring around the origin), band-pass, and notch filters at the noise spikes.

**Inverse vs Wiener filtering**

| Point | Inverse | Wiener |
|---|---|---|
| Formula | F̂ = G/H | F̂ = [H\*/(‖H‖² + Sη/Sf)] G |
| Noise | ignored | considered |
| When H ≈ 0 | noise is hugely amplified | stays stable |
| Needs | H only | H and noise-to-signal power ratio (or a constant K) |

### Solved examples

**Example 1 (min and max filter).** Neighbourhood [12 255 14; 13 0 15; 11 16 13] with salt (255) and pepper (0).
- Median: sorted 0, 11, 12, 13, 13, 14, 15, 16, 255 → **13**, both spikes removed.
- Max: 255 (keeps the salt); Min: 0 (keeps the pepper).

**Example 2 (contraharmonic choice).** An image has pepper (black) noise only: use the contraharmonic mean with Q = 1.5 (positive Q). For salt noise use Q = −1.5.

**Example 3 (inverse filter problem).** If H(u, v) = 0.01 at some frequency and the noise there is N = 1, the inverse filter adds N/H = 100 to F̂, swamping the image. Limiting the filter to frequencies near the origin, or using Wiener filtering, avoids this.

### Formulas to remember

- g = h ∗ f + η; G = HF + N.
- Contraharmonic: Σ g^(Q+1)/Σ g^Q.
- Wiener: F̂ = [(1/H)(‖H‖²/(‖H‖² + K))] G.

### Important questions

1. Explain the image degradation and restoration model.
2. Explain noise models with their PDFs and causes.
3. Explain mean filters and order-statistic filters for noise removal.
4. Explain periodic noise reduction using band-reject and notch filters.
5. Explain inverse filtering and Wiener filtering; compare them.

---

## Unit 4: Image Segmentation and Morphology

### 2-mark definitions

- **Segmentation:** dividing an image into regions or objects, based on discontinuity (edges) or similarity (regions).
- **Point detection:** finding isolated points using a mask such as [−1 −1 −1; −1 8 −1; −1 −1 −1] and a threshold.
- **Line detection:** masks that respond to lines in horizontal, vertical, +45° and −45° directions.
- **Edge:** a set of connected pixels on the boundary between two regions where intensity changes sharply.
- **Gradient:** a vector (gx, gy) of first derivatives; magnitude √(gx² + gy²) ≈ |gx| + |gy|, direction tan⁻¹(gy/gx).
- **Laplacian:** a second-derivative operator; edges are at zero crossings. LoG (Laplacian of Gaussian) smooths first.
- **Canny edge detector:** smooths with a Gaussian, finds gradient magnitude and direction, applies non-maximum suppression, then double thresholding and edge tracking by hysteresis.
- **Hough transform:** detects lines (and other shapes) by voting in parameter space; a line is ρ = x cos θ + y sin θ.
- **Thresholding:** separating objects from background by g = 1 if f > T else 0. Otsu's method chooses T to maximize between-class variance.
- **Region growing:** starting from seed points and adding neighbouring pixels similar to the region.
- **Region splitting and merging:** splitting the image into quadrants (quadtree) until each is uniform, then merging similar neighbours.
- **Morphology:** processing shapes using a structuring element: dilation, erosion, opening and closing.
- **Watershed segmentation:** treats the gradient image as a topographic surface and floods it from minima; dams built where floods meet form region boundaries.

### Core concepts

**Edge detection masks**

| Operator | gx | gy |
|---|---|---|
| Roberts (2 × 2) | [−1 0; 0 1] | [0 −1; 1 0] |
| Prewitt | [−1 −1 −1; 0 0 0; 1 1 1] | [−1 0 1; −1 0 1; −1 0 1] |
| Sobel | [−1 −2 −1; 0 0 0; 1 2 1] | [−1 0 1; −2 0 2; −1 0 1] |

Sobel gives more weight to the centre row/column, so it smooths noise better than Prewitt.

**Morphological operations (A = image, B = structuring element)**
- Dilation A ⊕ B: grows objects, fills small holes and gaps.
- Erosion A ⊖ B: shrinks objects, removes small objects and thin lines.
- Opening A ∘ B = (A ⊖ B) ⊕ B: smooths contours, breaks narrow joins, removes small protrusions.
- Closing A • B = (A ⊕ B) ⊖ B: fills small holes and gaps, fuses narrow breaks.
- Boundary extraction: β(A) = A − (A ⊖ B). Also hit-or-miss, region filling, thinning, thickening, skeletons.

**Thresholding types:** global (one T), adaptive or local (T varies with position), multilevel; basic iterative global method: choose T, split into G1 and G2, compute means m1 and m2, set T = (m1 + m2)/2, repeat until stable.

**Edge-based vs region-based segmentation**

| Point | Edge-based | Region-based |
|---|---|---|
| Uses | discontinuity | similarity |
| Methods | gradient, Laplacian, Canny, Hough | thresholding, region growing, split and merge, watershed |
| Output | boundaries (may be broken) | closed regions |
| Noise | sensitive | more robust |

### Solved examples

**Example 1 (Sobel at one pixel).** Neighbourhood [10 10 10; 10 10 10; 50 50 50] (bright row at the bottom).
- gx (row difference) = (50 + 2 × 50 + 50) − (10 + 2 × 10 + 10) = 200 − 40 = 160.
- gy (column difference) = (10 + 20 + 50) − (10 + 20 + 50) = 0.
- Magnitude ≈ |160| + 0 = **160**, a strong horizontal edge.

**Example 2 (Hough transform).** Points (1, 1) and (2, 2) lie on the line y = x. In ρ = x cos θ + y sin θ, at θ = 135° (cos = −0.707, sin = 0.707): ρ = 0 for both points, so both vote for the cell (ρ = 0, θ = 135°). The cell with the most votes gives the line.

**Example 3 (iterative threshold).** Pixels 10, 12, 15, 80, 85, 90. Start T = 50: G1 mean = 12.33, G2 mean = 85. New T = 48.7; the groups do not change, so **T ≈ 48.7**.

**Example 4 (dilation, 1-D).** A = 0 0 1 1 0 0, B = [1 1 1] centred: dilation gives 0 1 1 1 1 0; erosion of the result gives 0 0 1 1 0 0 (closing returns the original since there were no gaps).

### Formulas to remember

- |∇f| ≈ |gx| + |gy|; α = tan⁻¹(gy/gx).
- ∇²f = f(x + 1, y) + f(x − 1, y) + f(x, y + 1) + f(x, y − 1) − 4f(x, y).
- Hough: ρ = x cos θ + y sin θ.
- Opening = erosion then dilation; closing = dilation then erosion.

### Important questions

1. Explain detection of points, lines and edges; give Roberts, Prewitt and Sobel masks.
2. Explain the Laplacian, LoG and Canny edge detectors.
3. Explain edge linking with the Hough transform.
4. Explain thresholding (global, Otsu), region growing and split-and-merge segmentation.
5. Explain morphological operations (dilation, erosion, opening, closing) and watershed segmentation.

---

## Unit 5: Image Compression, Representation and Recognition

### 2-mark definitions

- **Image compression:** reducing the amount of data needed to represent an image.
- **Compression ratio:** CR = n1/n2 (original bits / compressed bits). **Relative redundancy:** RD = 1 − 1/CR.
- **Coding redundancy:** using more bits than necessary for grey levels (removed by variable-length coding).
- **Interpixel (spatial) redundancy:** neighbouring pixels are correlated (removed by run-length, predictive or transform coding).
- **Psychovisual redundancy:** information the eye cannot notice (removed by quantization; lossy).
- **Lossless vs lossy compression:** lossless reconstructs the image exactly (Huffman, RLE, LZW, arithmetic); lossy loses some data for higher compression (JPEG, transform coding).
- **Huffman coding:** a variable-length, prefix-free code where frequent symbols get shorter codes; built by repeatedly merging the two least probable symbols.
- **Run-length encoding (RLE):** stores runs of identical values as (value, count) pairs.
- **Arithmetic coding:** encodes a whole message as a single number in [0, 1) by narrowing an interval according to symbol probabilities.
- **JPEG:** a standard lossy compression method for still images based on the 8 × 8 DCT, quantization and entropy coding.
- **MPEG:** a family of standards for compressing video using motion-compensated prediction and DCT.
- **Boundary descriptor:** describes the shape of a region's boundary (length, diameter, curvature, chain code, shape number, Fourier descriptors).
- **Regional descriptor:** describes the region's interior (area, perimeter, compactness, Euler number, texture, moments).
- **Pattern recognition:** assigning objects to classes based on their feature vectors.

### Core concepts

**JPEG baseline steps:** convert RGB to YCbCr (and subsample chroma) → divide into 8 × 8 blocks → shift levels by −128 → 2-D DCT → quantize with a quantization table (main loss) → zig-zag scan → DC coefficients coded by DPCM, AC by run-length → Huffman coding.

**MPEG:** frames are I (intra-coded, like JPEG), P (predicted from previous I/P using motion vectors) and B (bidirectionally predicted from past and future frames). Motion estimation finds matching macroblocks; only the motion vector and residual are coded.

**Chain code:** encodes a boundary by direction numbers (4-directional 0 to 3 or 8-directional 0 to 7). The first difference makes it rotation-invariant; the shape number is the smallest circular first difference.

**Region descriptors:** area, perimeter, compactness = perimeter²/area (minimum for a circle), circularity ratio, Euler number E = C − H (connected components minus holes), texture (statistical moments, co-occurrence matrices), and moment invariants.

**Pattern recognition approaches:** decision-theoretic (minimum distance classifier, correlation matching, Bayes classifier, neural networks) and structural (strings, trees).

**Minimum distance classifier:** compute the mean vector mⱼ of each class; assign x to the class with the smallest Euclidean distance ‖x − mⱼ‖.

### Solved examples

**Example 1 (Huffman code).** Symbols with probabilities A 0.4, B 0.3, C 0.1, D 0.1, E 0.06, F 0.04.
- Merge E + F = 0.1; merge D + (EF) = 0.2; merge C + (DEF) = 0.3; merge B + (CDEF)... continuing by always merging the two smallest gives codes: A = 1, B = 00, C = 011, D = 0100, E = 01010, F = 01011.
- Average length = 0.4(1) + 0.3(2) + 0.1(3) + 0.1(4) + 0.06(5) + 0.04(5) = **2.2 bits/symbol**.
- Fixed-length coding needs 3 bits, so CR = 3/2.2 ≈ 1.36. Entropy ≈ 2.14 bits, so the code is very close to optimal.

**Example 2 (compression ratio).** A 256 × 256, 8-bit image (524,288 bits) compressed to 65,536 bits: CR = **8**, RD = 1 − 1/8 = **0.875** (87.5% of the data was redundant).

**Example 3 (RLE).** Row 1111000011 → (1, 4), (0, 4), (1, 2).

**Example 4 (arithmetic coding).** Symbols a (0.5, range 0 to 0.5), b (0.3, 0.5 to 0.8), c (0.2, 0.8 to 1). Message "ab": after a, interval [0, 0.5); after b, [0.25, 0.4). Any number in this interval, e.g. 0.3, codes "ab".

**Example 5 (chain code).** A unit square traced clockwise from the top-left corner using 4-directional code (0 right, 1 up, 2 left, 3 down): 0 3 2 1. First difference (counter-clockwise steps between consecutive codes, circular): 3 3 3 3.

**Example 6 (minimum distance classifier).** Class means m1 = (2, 2), m2 = (8, 8). Point x = (4, 3): distance to m1 = √5 ≈ 2.24, to m2 = √41 ≈ 6.40, so x belongs to **class 1**.

### Formulas to remember

- CR = n1/n2; RD = 1 − 1/CR.
- Average code length L = Σ l(rk) p(rk); entropy H = −Σ p log₂ p.
- Compactness = P²/A; Euler number = C − H.

### Important questions

1. Explain the types of redundancy in images and the general compression model.
2. Explain Huffman coding with an example; compute average code length and compression ratio.
3. Explain run-length and arithmetic coding.
4. Explain JPEG (block diagram) and MPEG compression standards.
5. Explain boundary and regional descriptors; explain pattern recognition with a minimum distance classifier.

---

## Last-hour checklist

Read only this in the last hour before the paper.
- [ ] Fundamental steps; sampling vs quantization; storage formula M × N × k.
- [ ] N4, ND, N8; m-adjacency; De, D4, D8 (5, 7, 4 example).
- [ ] RGB to HSI formulas; DFT properties; DFT vs DCT.
- [ ] Negative, log, gamma; histogram equalization table (1, 3, 5, 6, 6, 7, 7, 7).
- [ ] Mean vs median (27.8 vs 20); Laplacian mask; ideal, Butterworth, Gaussian filters.
- [ ] Homomorphic filtering steps.
- [ ] Degradation model; noise types; mean filters (contraharmonic Q sign); order-statistic filters.
- [ ] Notch filters; inverse vs Wiener.
- [ ] Roberts, Prewitt, Sobel masks; Canny steps; Hough ρ = x cos θ + y sin θ.
- [ ] Thresholding, Otsu, region growing, split and merge, watershed; dilation, erosion, opening, closing.
- [ ] Three redundancies; CR and RD; Huffman 2.2 bits; RLE; arithmetic coding.
- [ ] JPEG steps; MPEG I/P/B frames; chain code; descriptors; minimum distance classifier.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Digital Image Processing (3rd ed.) | Rafael C. Gonzalez, Richard E. Woods | Pearson | [WorldCat](https://search.worldcat.org/search?q=Digital+Image+Processing+Gonzalez+Woods) |
| 2 | Fundamentals of Digital Image Processing | Anil K. Jain | Pearson | [WorldCat](https://search.worldcat.org/search?q=Fundamentals+of+Digital+Image+Processing+Anil+Jain) |
| 3 | Digital Image Processing | Kenneth R. Castleman | Pearson | [WorldCat](https://search.worldcat.org/search?q=Digital+Image+Processing+Castleman) |
| 4 | Digital Image Processing Using MATLAB | Rafael C. Gonzalez, Richard E. Woods, Steven L. Eddins | Pearson Education | [WorldCat](https://search.worldcat.org/search?q=Digital+Image+Processing+Using+MATLAB+Gonzalez+Eddins) |
| 5 | Multidimensional Digital Signal Processing | D. E. Dudgeon, R. M. Mersereau | Prentice Hall | [WorldCat](https://search.worldcat.org/search?q=Multidimensional+Digital+Signal+Processing+Dudgeon+Mersereau) |
| 6 | Digital Image Processing | William K. Pratt | John Wiley | [WorldCat](https://search.worldcat.org/search?q=Digital+Image+Processing+Pratt) |
| 7 | Image Processing, Analysis and Machine Vision (2nd ed.) | Milan Sonka, Vaclav Hlavac, Roger Boyle | Brooks/Cole, Vikas Publishing House | [WorldCat](https://search.worldcat.org/search?q=Image+Processing+Analysis+and+Machine+Vision+Sonka) |

**Syllabus source:** [AKTU B.Tech 3rd year syllabus, 2024-25 (copy hosted by an affiliated college, PDF)](https://dvsiet.dewaninstitutes.com/assets/images/about/AI-DS3.pdf)

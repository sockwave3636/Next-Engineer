---
program: btech
branches: [cse, cse-aiml]
semester: 5
code: BCS052
name: Data Analytics
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 3rd year, Departmental Elective, 2024-25 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/B-TECH-CSIT-IT-3rd-YR-2024-25-AKTU-26112024.pdf
units:
  - Introduction to Data Analytics
  - Data Analysis Techniques
  - Mining Data Streams
  - Frequent Itemsets and Clustering
  - Frameworks, Visualization and R
---

# BCS052 Data Analytics: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus (the same Data Analytics syllabus AKTU uses across CSE and IT). Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: lifecycle, methods, algorithms and comparison tables.
3. **Solved examples**: the numericals that appear (regression, moving average, Bloom filter, Flajolet-Martin, AMS moments, DGIM, Apriori and PCY, k-means, MapReduce word count).
4. **Formulas / code to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (types of data, analytics types, analysis vs reporting, tools, the six-phase data analytics lifecycle and key roles) and Unit 2 (regression, multivariate analysis, Bayesian networks, SVM, time series, rule induction, neural networks, fuzzy logic, stochastic search).
- **Afternoon (3 hours):** Unit 3, the most numerical unit: stream model, sampling, Bloom filter, Flajolet-Martin, AMS, DGIM, decaying windows, RTAP case studies. Then Unit 4: Apriori, PCY, SON, Toivonen, k-means, hierarchical, CLIQUE, PROCLUS.
- **Evening (2 hours):** Unit 5: MapReduce, Hadoop, HDFS, Pig, Hive, HBase, NoSQL, sharding, S3; visualization techniques; R basics. Then the "Last-hour checklist".
- **In the exam:** for stream algorithms, write the idea, the formula, and a small worked example. For lifecycle questions, draw the circular six-phase diagram.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Introduction to Data Analytics

### 2-mark definitions

- **Data analytics:** the process of inspecting, cleaning, transforming and modelling data to discover useful information, draw conclusions and support decisions.
- **Structured data:** data in a fixed schema such as rows and columns (relational tables, spreadsheets).
- **Semi-structured data:** data with tags or markers but no rigid schema (XML, JSON, e-mail headers, logs).
- **Unstructured data:** data without a predefined model (text, images, audio, video, social media posts); most data today is unstructured.
- **Characteristics of data:** accuracy, completeness, consistency, timeliness, validity, uniqueness, and relevance.
- **Big data:** data sets so large, fast or varied that traditional tools cannot handle them; described by the Vs: volume, velocity, variety, veracity and value.
- **Big data platform:** an integrated set of tools (storage, processing, analytics) for big data, e.g. the Hadoop ecosystem or Spark.
- **Analytic scalability:** the ability of analytics to handle growing data by moving processing to the data (in-database, MPP, cloud, grid, MapReduce).
- **Reporting vs analysis:** reporting organizes data into summaries ("what happened"); analysis interprets data to explain "why" and recommend actions.
- **Descriptive, diagnostic, predictive and prescriptive analytics:** what happened, why it happened, what will happen, and what should be done.
- **Data analytics lifecycle:** a six-phase process for analytics projects: discovery, data preparation, model planning, model building, communicating results, operationalization.

### Core concepts

**Sources and nature of data:** transactional systems, sensors and IoT, logs and clickstreams, social media, mobile devices, public and open data, and third-party data. Data can be numeric or categorical, static or streaming, internal or external.

**Evolution of analytic scalability**
1. Traditional: data moved from the database to an analytic server (slow for big data).
2. In-database analytics with MPP (massively parallel processing) databases: processing moved to the data.
3. Cloud computing: elastic, pay-as-you-go storage and compute.
4. Grid computing: many machines share work.
5. MapReduce and Hadoop: distributed processing on commodity clusters.

**Analytic process and tools:** define the question → collect data → clean and prepare → explore → model → evaluate → deploy and monitor. Modern tools: R, Python (pandas, scikit-learn), SQL, Hadoop, Spark, Tableau and Power BI, SAS, KNIME, RapidMiner, Excel.

**Analysis vs reporting**

| Point | Reporting | Analysis |
|---|---|---|
| Question answered | what happened | why, and what next |
| Output | dashboards, standard reports | insights and recommendations |
| Approach | push information | pull and investigate |
| Context | little | rich |
| Value | monitoring | decision making |

**Applications:** fraud detection, recommendation systems, healthcare diagnosis, supply chain optimization, customer churn prediction, credit scoring, smart cities, sports analytics.

**Data analytics lifecycle (EMC)**

| Phase | Main activities |
|---|---|
| 1. Discovery | understand the business domain, frame the problem, identify stakeholders, form initial hypotheses, check resources |
| 2. Data preparation | create an analytic sandbox, ETL/ELT, explore and condition (clean) data, visualize |
| 3. Model planning | choose variables and techniques, explore relationships, select tools |
| 4. Model building | build training and test sets, run models, tune, assess |
| 5. Communicate results | compare outcomes with success criteria, present findings to stakeholders |
| 6. Operationalize | deliver final reports, code and documentation, run a pilot, deploy and monitor |

Movement between phases is iterative: the team can go back to an earlier phase when new information appears.

**Key roles in an analytics project:** business user, project sponsor, project manager, business intelligence analyst, database administrator (DBA), data engineer, and data scientist.

### Solved examples

**Example 1 (classify data).** A customer table in MySQL is structured; an order confirmation in JSON is semi-structured; product review text and photos are unstructured.

**Example 2 (types of analytics for a retailer).** Last month's sales by region: descriptive. Why sales fell in one region: diagnostic. Next month's sales forecast: predictive. Which discount to offer to maximize profit: prescriptive.

### Key points to remember

- 5 Vs: volume, velocity, variety, veracity, value.
- Lifecycle phases in order: Discovery, Data preparation, Model planning, Model building, Communicate results, Operationalize.
- The analytic sandbox keeps experiments away from production systems.

### Important questions

1. Explain sources, classification and characteristics of data.
2. What is big data? Explain the big data platform and the need for data analytics.
3. Explain the evolution of analytic scalability; compare analysis and reporting; list modern tools and applications.
4. Explain the data analytics lifecycle with all six phases and a diagram.
5. Explain the key roles for a successful analytics project.

---

## Unit 2: Data Analysis Techniques

### 2-mark definitions

- **Regression modelling:** modelling the relationship between a dependent variable and one or more independent variables to predict values.
- **Multivariate analysis:** analysing several variables together, e.g. multiple regression, PCA, factor analysis, cluster analysis, MANOVA.
- **Bayesian modelling:** using Bayes theorem to update the probability of a hypothesis as evidence arrives: posterior ∝ likelihood × prior.
- **Bayesian network:** a directed acyclic graph of variables with conditional probability tables, used for reasoning under uncertainty.
- **Support vector machine (SVM):** a classifier that finds the maximum-margin hyperplane; kernels let it handle non-linear data.
- **Time series:** a sequence of observations ordered in time, e.g. daily stock prices.
- **Components of a time series:** trend (long-term direction), seasonality (regular periodic pattern), cyclic variation (long irregular waves), irregular (random noise).
- **Stationarity:** a time series whose mean, variance and autocorrelation do not change over time.
- **Rule induction:** learning IF-THEN rules from data (e.g. decision trees converted to rules, sequential covering).
- **Competitive learning:** neurons compete to respond to an input; only the winner updates its weights (e.g. Kohonen SOM).
- **Fuzzy decision tree:** a decision tree whose tests use fuzzy membership, so an example can follow several branches with partial degrees.
- **Stochastic search:** optimization using randomness, e.g. genetic algorithms, simulated annealing, random restart hill climbing.

### Core concepts

**Regression types:** simple linear (one predictor), multiple linear (several predictors), polynomial, logistic (binary outcome), and regularized (ridge, lasso). Key outputs: coefficients, R² (fraction of variance explained), p-values, residuals.

**Time series analysis**
- **Linear systems analysis:** models such as AR (autoregressive: yt = c + φ1 yt−1 + … + εt), MA (moving average of errors), ARMA and ARIMA (with differencing for non-stationary data).
- **Non-linear dynamics:** systems where small changes can have large effects (chaos); analysed with state-space reconstruction (delay embedding), Lyapunov exponents and non-linear predictors.
- Smoothing: simple moving average, exponential smoothing St = α yt + (1 − α) St−1.

**Neural networks in analytics:** learning (adjusting weights from data) and generalization (performing well on unseen data, helped by validation sets, early stopping and regularization). PCA can be performed by a linear neural network (Oja's rule), and autoencoders give a non-linear version.

**Extracting fuzzy models from data:** cluster the data (e.g. fuzzy c-means), turn each cluster into a fuzzy rule with membership functions, and tune with data (as in ANFIS).

**Comparison of techniques**

| Technique | Task | Strength | Weakness |
|---|---|---|---|
| Linear regression | prediction | simple, interpretable | only linear relations |
| Bayesian network | probabilistic reasoning | handles uncertainty, interpretable | needs structure and CPTs |
| SVM | classification | good in high dimensions | kernel and parameter choice |
| Neural network | prediction, classification | learns complex patterns | black box, needs much data |
| Rule induction | classification | readable rules | can overfit |
| Fuzzy logic | reasoning with vagueness | human-like rules | rule design effort |

### Solved examples

**Example 1 (simple linear regression).** x = 1, 2, 3, 4, 5 and y = 2, 4, 5, 4, 5: b = Σ(x − x̄)(y − ȳ)/Σ(x − x̄)² = 6/10 = 0.6, a = 4 − 0.6 × 3 = 2.2. **ŷ = 2.2 + 0.6x**; forecast at x = 6 is 5.8.

**Example 2 (moving average).** Sales 10, 12, 14, 13, 15: 3-period moving averages = (10 + 12 + 14)/3 = 12, (12 + 14 + 13)/3 = 13, (14 + 13 + 15)/3 = 14. The trend is rising by about 1 per period.

**Example 3 (exponential smoothing).** α = 0.5, S1 = 10, next value 12: S2 = 0.5 × 12 + 0.5 × 10 = 11; then 14: S3 = 12.5.

**Example 4 (Bayes in analytics).** 2% of transactions are fraudulent. A model flags 95% of frauds and 4% of genuine ones. P(fraud | flagged) = 0.019/(0.019 + 0.0392) ≈ **0.33**, so most flags are false alarms; this explains why thresholds must be tuned.

### Formulas to remember

- b = Σ(x − x̄)(y − ȳ)/Σ(x − x̄)²; a = ȳ − b x̄; R² = 1 − SSres/SStot.
- Posterior = likelihood × prior / evidence.
- Exponential smoothing: St = α yt + (1 − α) St−1.

### Important questions

1. Explain regression modelling and multivariate analysis with examples.
2. Explain Bayesian modelling, inference and Bayesian networks.
3. Explain support vector and kernel methods.
4. Explain time series analysis: components, linear systems analysis and non-linear dynamics.
5. Explain rule induction, neural networks (learning, generalization, competitive learning, PCA), fuzzy logic (fuzzy models, fuzzy decision trees) and stochastic search methods.

---

## Unit 3: Mining Data Streams

### 2-mark definitions

- **Data stream:** a continuous, fast, potentially unbounded sequence of data items (sensor readings, clicks, tweets, transactions) that can be read only once.
- **Stream data model:** streams arrive at a stream processor, which keeps limited working storage, answers standing queries continuously and ad-hoc queries on demand, and may archive data.
- **Standing query:** a query that is evaluated continuously as data arrives (e.g. alert if temperature > 50).
- **Ad-hoc query:** a one-time question asked about the current state of the stream.
- **Sliding window:** only the most recent N elements (or last t seconds) are considered.
- **Stream computing:** processing data in motion as it arrives, rather than storing it first (e.g. Apache Storm, Flink, Spark Streaming, Kafka Streams).
- **Reservoir sampling:** keeping a uniform random sample of fixed size s from a stream of unknown length.
- **Bloom filter:** a bit array with k hash functions that tests set membership with no false negatives but some false positives.
- **Flajolet-Martin (FM) algorithm:** estimates the number of distinct elements using the maximum number of trailing zeros in hashed values.
- **Moments of a stream:** the k-th moment is Σ mᵢᵏ over distinct elements i with count mᵢ (0th = distinct count, 1st = length, 2nd = surprise number).
- **AMS (Alon-Matias-Szegedy) algorithm:** estimates the second (and higher) moments using a few random positions in the stream.
- **DGIM algorithm:** estimates the number of 1s in the last N bits of a binary stream using O(log² N) bits of memory.
- **Decaying window:** gives each element a weight that decreases exponentially with age, (1 − c)ᵗ, instead of a hard window.
- **RTAP (Real-Time Analytics Platform):** a system that ingests, processes and analyses data as it arrives to give immediate insights and actions.

### Core concepts

**Sampling a stream**
- To sample a fixed fraction of users (not tuples), hash each user key into B buckets and keep tuples whose hash < a·B; this keeps all of a chosen user's tuples.
- **Reservoir sampling:** keep the first s items; for item n > s, keep it with probability s/n, replacing a random item in the sample.

**Bloom filter**
- Setup: bit array of m bits, all 0; k hash functions.
- Insert x: set bits h1(x), …, hk(x) to 1.
- Query y: if all k bits are 1, say "possibly present"; if any is 0, "definitely not present".
- False positive rate ≈ (1 − e^(−kn/m))ᵏ for n inserted items; best k = (m/n) ln 2.

**Flajolet-Martin:** hash each element to a bit string; let r(a) be the number of trailing zeros of h(a); keep R = max r(a). Estimate distinct count = 2^R. Use many hash functions, group them, take the median of group averages to reduce error.

**AMS second moment:** pick random positions; for each, let X.el be the element there and X.value the count of that element from that position to the end. Estimate = n(2·X.value − 1); average several estimates.

**DGIM rules:** divide the window into buckets, each holding a number of 1s that is a power of 2 and the timestamp of its most recent 1. Rules: the rightmost bit of a bucket is 1; at most two (at least one) buckets of each size; sizes do not decrease going back in time; drop buckets older than N. Estimate = sum of all bucket sizes except half the oldest bucket. Error ≤ 50% (less with more buckets per size).

**Decaying window:** the aggregate for each item is updated as S ← S(1 − c) + aₜ (where aₜ = 1 if the current element is that item). Used to find currently popular items.

**Case studies**
- **Real-time sentiment analysis:** stream tweets (e.g. via Kafka) → clean and tokenize → classify sentiment (lexicon or ML model) → aggregate in sliding windows → dashboard alerts on sudden negative spikes for a brand.
- **Stock market prediction:** stream prices and news → compute moving averages, volatility and news sentiment in windows → update a prediction model (e.g. regression or LSTM) → trigger buy/sell signals with risk limits.

### Solved examples

**Example 1 (Bloom filter).** m = 1000 bits, n = 100 items, k = 3: FP ≈ (1 − e^(−0.3))³ = (0.259)³ ≈ **0.017** (1.7%). Best k = 10 × 0.693 ≈ 7.

**Example 2 (Bloom filter operation).** m = 10, h1(x) = x mod 10, h2(x) = (2x + 3) mod 10. Insert 15: bits 5 and 3. Insert 22: bits 2 and 7. Query 25: h1 = 5 (set), h2 = 53 mod 10 = 3 (set): "possibly present" even though 25 was never inserted, a **false positive**.

**Example 3 (Flajolet-Martin).** h(x) = (3x + 1) mod 32 on stream 1, 3, 2, 1, 2, 3, 4: hashes 4 (00100), 10 (01010), 7 (00111), 4, 7, 10, 13 (01101). Trailing zeros: 2, 1, 0, 2, 0, 1, 0. R = 2, estimate = 2² = **4** distinct (the true value is 4).

**Example 4 (AMS second moment).** Stream of length 15: a b c b d a c d a b d c a a b. Counts a 5, b 4, c 3, d 3, so the true second moment = 25 + 16 + 9 + 9 = **59**. Using positions 3, 8 and 13:
- Position 3 is c; c occurs at 3, 7, 12 → value 3 → estimate 15(2 × 3 − 1) = 75.
- Position 8 is d; d occurs at 8, 11 → value 2 → 15 × 3 = 45.
- Position 13 is a; a occurs at 13, 14 → value 2 → 45.
- Average = (75 + 45 + 45)/3 = **55**, close to 59.

**Example 5 (DGIM estimate).** Buckets in a window (newest to oldest): sizes 1, 1, 2, 4, 4, 8. Estimate = 1 + 1 + 2 + 4 + 4 + 8/2 = **16**.

**Example 6 (reservoir).** s = 2. Items A, B are kept. C arrives (n = 3): kept with probability 2/3, replacing A or B at random. D arrives (n = 4): kept with probability 2/4. Every item ends up in the sample with probability 2/n.

### Formulas to remember

- Bloom FP ≈ (1 − e^(−kn/m))ᵏ; k_opt = (m/n) ln 2.
- FM: distinct ≈ 2^R.
- AMS: estimate = n(2v − 1).
- DGIM: sum of sizes minus half the last bucket.
- Decaying window: S ← S(1 − c) + aₜ.

### Important questions

1. Explain the stream data model and architecture; explain stream computing and standing vs ad-hoc queries.
2. Explain sampling in streams and reservoir sampling; explain filtering with Bloom filters (with false-positive analysis).
3. Explain counting distinct elements with Flajolet-Martin and estimating moments with AMS, with examples.
4. Explain the DGIM algorithm for counting ones in a window, and the decaying window.
5. Explain RTAP and its applications; case studies on real-time sentiment analysis and stock market prediction.

---

## Unit 4: Frequent Itemsets and Clustering

### 2-mark definitions

- **Market basket model:** a model with many items and many baskets (transactions); the goal is to find items that frequently appear together.
- **Support:** the number (or fraction) of baskets containing an itemset. **Frequent itemset:** support ≥ threshold s.
- **Association rule I ⇒ j:** if a basket contains I, it likely contains j. Confidence = support(I ∪ {j})/support(I). Interest = confidence − fraction of baskets containing j.
- **Monotonicity (Apriori property):** if an itemset is frequent, all its subsets are frequent.
- **PCY algorithm:** improves Apriori's first pass by hashing pairs into buckets; only pairs that hash to frequent buckets are counted in pass 2.
- **Limited-pass algorithms:** algorithms that find frequent itemsets in two or fewer passes: simple random sampling, SON (Savasere, Omiecinski, Navathe) and Toivonen's algorithm.
- **Clustering:** grouping points so that points in the same cluster are close and points in different clusters are far apart.
- **Curse of dimensionality:** in high-dimensional spaces, almost all pairs of points are at similar distances, so distance-based clustering becomes hard.
- **CLIQUE:** a grid- and density-based subspace clustering algorithm that finds dense units in subspaces, bottom-up using the Apriori idea.
- **PROCLUS:** a projected clustering algorithm (k-medoid based) that finds, for each cluster, the subset of dimensions in which it is tight.
- **Non-Euclidean space:** a space where only a distance (like Jaccard or edit distance) exists, with no notion of averages; clusters use clustroids instead of centroids (e.g. GRGPF algorithm).
- **Frequent pattern-based clustering:** clustering objects by shared frequent patterns of attributes (e.g. pCluster for gene expression, document clustering with frequent term sets).

### Core concepts

**Apriori:** pass 1 counts items; pass k counts candidate k-itemsets built from frequent (k − 1)-itemsets whose every subset is frequent.

**Handling larger data sets in main memory**
- **PCY:** during pass 1, also hash each pair into a bucket counter. Between passes, turn buckets into a bitmap (1 if the bucket is frequent). In pass 2, count pair {i, j} only if both items are frequent and the pair hashes to a frequent bucket.
- **Multistage:** uses extra passes with different hash functions to filter more pairs.
- **Multihash:** uses several hash tables in the same first pass.

**Limited-pass algorithms**
- **Random sampling:** run Apriori on a sample in memory with a proportionally lowered threshold; may miss or wrongly include itemsets.
- **SON:** split data into chunks; find itemsets frequent in any chunk (candidates); in a second pass count candidates over the whole data. No false negatives; fits MapReduce naturally.
- **Toivonen:** sample with a lowered threshold; compute the negative border (itemsets not frequent in the sample but all of whose immediate subsets are); one full pass; if no negative-border itemset is frequent in the full data, the result is exact, otherwise repeat with a new sample.

**Counting frequent items in a stream:** periodically run a limited-pass algorithm on recent batches, or use a decaying window and keep counts only for items or itemsets whose score exceeds a threshold.

**Clustering approaches**

| Approach | Method | Notes |
|---|---|---|
| Hierarchical (agglomerative) | start with each point alone; repeatedly merge the closest clusters | O(n² log n); dendrogram; single, complete, average link |
| Point assignment | k-means | fast; needs k; spherical clusters |
| Large data k-means | BFR | keeps summaries (N, SUM, SUMSQ) of discard, compressed and retained sets |
| Arbitrary shapes | CURE | representative points shrunk toward the centroid |
| Non-Euclidean | GRGPF | clustroids and cluster features in a tree |
| High-dimensional | CLIQUE, PROCLUS | subspace and projected clustering |

**Clustering for streams and parallelism:** keep buckets of cluster summaries for the stream (like DGIM, with sizes in powers of 2) and merge them when answering a query; in MapReduce, mappers cluster chunks and a reducer merges the results.

### Solved examples

**Example 1 (support and confidence).** 8 baskets; {milk, bread} appears in 4, {milk} in 6, {bread} in 5. Support(milk ⇒ bread) = 4/8 = 50%; confidence = 4/6 ≈ 67%; interest = 0.67 − 5/8 = 0.04 (weak).

**Example 2 (PCY).** Items 1 to 5 all frequent; hash h(i, j) = (i × j) mod 7 and threshold 3. If bucket 3 gets a count of 1 (from pair {1, 3}), then pair {1, 3} is not counted in pass 2, even though both items are frequent. This saves memory for pairs.

**Example 3 (k-means).** Points 2, 3, 4, 10, 11, 12, 20, 25, 30 with initial centres 2 and 4 converge (after 4 iterations) to clusters {2, 3, 4, 10, 11, 12} with mean 7 and {20, 25, 30} with mean 25.

**Example 4 (agglomerative clustering, single link).** Points on a line: 1, 2, 6, 7, 15. Merge {1, 2} (distance 1), {6, 7} (1), then {1, 2} with {6, 7} (distance 4), then with 15 (distance 8).

**Example 5 (CLIQUE idea).** Age (20 to 60) and salary (10k to 90k) are each split into 4 intervals; a unit is dense if it holds more than 5% of points. Dense 1-D units in age and in salary are joined (Apriori-style) into candidate 2-D units; adjacent dense 2-D units form a cluster such as "age 30 to 40 and salary 50k to 70k".

### Formulas to remember

- Support, confidence, interest as above.
- Number of pairs from n items: n(n − 1)/2 (why counting pairs is the memory bottleneck).
- SON: chunk threshold = s × (chunk size / total size).

### Important questions

1. Explain the market basket model and the Apriori algorithm with an example.
2. Explain how large data sets are handled in main memory: PCY, multistage and multihash.
3. Explain limited-pass algorithms (sampling, SON, Toivonen) and counting frequent itemsets in a stream.
4. Explain hierarchical and k-means clustering; solve an example.
5. Explain clustering high-dimensional data (CLIQUE, PROCLUS), frequent pattern-based clustering, clustering in non-Euclidean spaces, and clustering for streams and parallelism.

---

## Unit 5: Frameworks, Visualization and R

### 2-mark definitions

- **MapReduce:** a programming model for processing large data in parallel: map turns input records into key-value pairs, the framework groups by key (shuffle and sort), and reduce combines the values for each key.
- **Hadoop:** an open-source framework for distributed storage (HDFS) and processing (MapReduce, YARN) on clusters of commodity machines.
- **HDFS:** Hadoop Distributed File System; stores large files in blocks (128 MB by default) replicated (default 3) across DataNodes, with metadata on the NameNode.
- **Pig:** a high-level data flow platform on Hadoop with the scripting language Pig Latin.
- **Hive:** a data warehouse system on Hadoop with HiveQL, an SQL-like query language.
- **HBase:** a distributed, column-oriented NoSQL database on HDFS for random, real-time read/write access to big tables.
- **MapR:** a commercial Hadoop distribution with its own file system (MapR-FS) offering better performance and high availability.
- **Sharding:** splitting a database horizontally across several servers, each holding a subset (shard) of the rows.
- **NoSQL database:** a non-relational database for flexible schemas and horizontal scaling: key-value (Redis), document (MongoDB), column-family (HBase, Cassandra), graph (Neo4j).
- **Amazon S3:** Simple Storage Service, a cloud object store with buckets and objects, highly durable and scalable.
- **Visual data analysis:** using visual representations and interaction to explore data and find patterns.
- **R:** a free language and environment for statistical computing and graphics.

### Core concepts

**MapReduce flow:** input split → map → combiner (optional local reduce) → partition → shuffle and sort → reduce → output written to HDFS. Fault tolerance: failed tasks are re-run on other nodes.

**Hadoop ecosystem summary**

| Tool | Role |
|---|---|
| HDFS | distributed storage |
| YARN | resource management and scheduling |
| MapReduce | batch processing |
| Pig | data flow scripting (Pig Latin) |
| Hive | SQL-like querying (HiveQL) |
| HBase | NoSQL column store, random access |
| Sqoop, Flume | import from RDBMS; collect log data |
| ZooKeeper | coordination service |
| Spark | fast in-memory processing |

**SQL vs NoSQL**

| Point | SQL (RDBMS) | NoSQL |
|---|---|---|
| Schema | fixed | flexible |
| Scaling | vertical (bigger server) | horizontal (more servers) |
| Consistency | ACID | often BASE (eventual consistency) |
| Data model | tables | key-value, document, column, graph |
| Best for | complex joins, transactions | huge, varied, fast-changing data |

**Visualization techniques (Keim's classification)**
- Geometric projection: scatter plot matrices, parallel coordinates.
- Icon-based: Chernoff faces, star icons, stick figures.
- Pixel-oriented: each value is a coloured pixel (recursive patterns, circle segments).
- Hierarchical: treemaps, dimensional stacking, cone trees.
- Graph-based: node-link diagrams for networks.

**Interaction techniques:** dynamic projection, interactive filtering, zooming, distortion (fisheye), and linking and brushing (selecting in one view highlights in others). Systems: Tableau, Power BI, Spotfire, D3.js, ggplot2/Shiny. Applications: business dashboards, fraud detection, genomics, social network analysis.

**R for analytics:** GUIs (RStudio, R Commander, Rattle); data import/export (read.csv, write.csv, readxl, DBI connections); attribute and data types (numeric, integer, character, logical, factor; vectors, matrices, lists, data frames); descriptive statistics (summary, mean, sd, table); exploratory data analysis (str, head, hist, boxplot, pairs, cor); visualization before analysis to spot outliers, skew and relationships; analytics for unstructured data (text mining with the tm package: corpus, cleaning, document-term matrix, word clouds).

### Solved examples

**Example 1 (MapReduce word count).** Input lines: "deer bear river", "car car river", "deer car bear".
- Map emits (deer, 1), (bear, 1), (river, 1), (car, 1), (car, 1), (river, 1), (deer, 1), (car, 1), (bear, 1).
- Shuffle groups: bear [1, 1], car [1, 1, 1], deer [1, 1], river [1, 1].
- Reduce outputs: **bear 2, car 3, deer 2, river 2**.

**Example 2 (HDFS storage).** A 500 MB file with 128 MB blocks needs 4 blocks (128, 128, 128, 116). With replication factor 3, it uses 1500 MB of raw disk across 12 block copies.

**Example 3 (Hive and Pig for the same job: average salary per department).**

```sql
-- HiveQL
SELECT dept, AVG(salary) FROM employees GROUP BY dept;
```

```text
-- Pig Latin
emp  = LOAD 'employees' USING PigStorage(',') AS (name:chararray, dept:chararray, salary:double);
grp  = GROUP emp BY dept;
avgs = FOREACH grp GENERATE group AS dept, AVG(emp.salary);
DUMP avgs;
```

### Code to remember (R)

```r
df <- read.csv("sales.csv")             # import
str(df); summary(df)                     # types and descriptive statistics
hist(df$amount); boxplot(amount ~ region, data = df)   # visualize before analysis
cor(df$ads, df$amount)                   # relationship
fit <- lm(amount ~ ads, data = df); summary(fit)
write.csv(aggregate(amount ~ region, df, sum), "region_totals.csv", row.names = FALSE)

# Simple text analytics on unstructured data
library(tm)
docs <- VCorpus(VectorSource(c("Great product, fast delivery", "Poor quality, slow delivery")))
docs <- tm_map(docs, content_transformer(tolower)); docs <- tm_map(docs, removePunctuation)
dtm  <- DocumentTermMatrix(docs); inspect(dtm)
```

### Important questions

1. Explain MapReduce with a word count example; explain the Hadoop architecture and HDFS.
2. Explain Pig, Hive, HBase and MapR; compare Pig and Hive.
3. Explain NoSQL databases, sharding and S3; compare SQL and NoSQL.
4. Explain visual data analysis techniques and interaction techniques with systems and applications.
5. Explain R for analytics: GUIs, data import/export, data types, descriptive statistics, EDA, and analytics for unstructured data.

---

## Last-hour checklist

Read only this in the last hour before the paper.
- [ ] Structured vs semi-structured vs unstructured; 5 Vs; four types of analytics.
- [ ] Evolution of analytic scalability; analysis vs reporting table.
- [ ] Lifecycle six phases with activities; seven key roles.
- [ ] Regression ŷ = 2.2 + 0.6x; time series components; AR/MA/ARIMA; exponential smoothing.
- [ ] Bayesian networks; SVM kernels; rule induction; competitive learning; fuzzy decision trees.
- [ ] Stream model; standing vs ad-hoc queries; reservoir sampling.
- [ ] Bloom filter FP formula (1.7% example); FM 2^R; AMS n(2v − 1) (55 vs 59).
- [ ] DGIM bucket rules and estimate; decaying window.
- [ ] Support, confidence, interest; Apriori; PCY; SON; Toivonen negative border.
- [ ] k-means, hierarchical, BFR, CURE, GRGPF; CLIQUE vs PROCLUS.
- [ ] MapReduce word count; HDFS blocks and replication; Pig vs Hive; HBase; NoSQL types; sharding; S3.
- [ ] Visualization technique classes; linking and brushing; R import, summary, plots, lm, tm.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Intelligent Data Analysis | Michael Berthold, David J. Hand | Springer | [WorldCat](https://search.worldcat.org/search?q=Intelligent+Data+Analysis+Berthold+Hand) |
| 2 | Mining of Massive Datasets | Anand Rajaraman, Jeffrey D. Ullman | Cambridge University Press | [WorldCat](https://search.worldcat.org/search?q=Mining+of+Massive+Datasets+Rajaraman+Ullman) |
| 3 | Data Analytics for IT Networks: Developing Innovative Use Cases | John Garrett | Pearson Education | [WorldCat](https://search.worldcat.org/search?q=Data+Analytics+for+IT+Networks+Garrett) |
| 4 | Taming the Big Data Tidal Wave | Bill Franks | John Wiley & Sons | [WorldCat](https://search.worldcat.org/search?q=Taming+the+Big+Data+Tidal+Wave+Franks) |
| 5 | Big Data, Big Analytics | Michael Minelli, Michele Chambers, Ambiga Dhiraj | Wiley | [WorldCat](https://search.worldcat.org/search?q=Big+Data+Big+Analytics+Minelli+Chambers+Dhiraj) |
| 6 | Data Science and Big Data Analytics | David Dietrich, Barry Heller, Beibei Yang (EMC Education Services) | John Wiley | [WorldCat](https://search.worldcat.org/search?q=Data+Science+and+Big+Data+Analytics+EMC+Education+Services) |
| 7 | Big Data Analytics: Turning Big Data into Big Money | Frank J. Ohlhorst | Wiley and SAS Business Series | [WorldCat](https://search.worldcat.org/search?q=Big+Data+Analytics+Turning+Big+Data+into+Big+Money+Ohlhorst) |
| 8 | Data Mining and Predictive Analysis | Colleen McCue | Elsevier | [WorldCat](https://search.worldcat.org/search?q=Data+Mining+and+Predictive+Analysis+McCue) |
| 9 | Understanding Big Data | Paul Zikopoulos, Chris Eaton | McGraw Hill | [WorldCat](https://search.worldcat.org/search?q=Understanding+Big+Data+Zikopoulos+Eaton) |
| 10 | The Elements of Statistical Learning | Trevor Hastie, Robert Tibshirani, Jerome Friedman | Springer | [WorldCat](https://search.worldcat.org/search?q=The+Elements+of+Statistical+Learning+Hastie) |
| 11 | Beginning R: The Statistical Programming Language | Mark Gardener | Wrox | [WorldCat](https://search.worldcat.org/search?q=Beginning+R+Statistical+Programming+Language+Gardener) |
| 12 | Big Data Glossary | Pete Warden | O'Reilly | [WorldCat](https://search.worldcat.org/search?q=Big+Data+Glossary+Pete+Warden) |
| 13 | Making Sense of Data | Glenn J. Myatt | John Wiley & Sons | [WorldCat](https://search.worldcat.org/search?q=Making+Sense+of+Data+Myatt) |
| 14 | Handbook of Big Data | Peter Bühlmann, Petros Drineas, Michael Kane, Mark van der Laan | CRC Press | [WorldCat](https://search.worldcat.org/search?q=Handbook+of+Big+Data+Buhlmann) |
| 15 | Data Mining: Concepts and Techniques (2nd ed.) | Jiawei Han, Micheline Kamber | Elsevier | [WorldCat](https://search.worldcat.org/search?q=Data+Mining+Concepts+and+Techniques+Han+Kamber) |

*Mining of Massive Datasets* is also offered free by its authors at mmds.org, a legal companion for Units 3 and 4.

**Syllabus source:** [AKTU B.Tech 3rd year CS/IT syllabus, 2024-25 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/B-TECH-CSIT-IT-3rd-YR-2024-25-AKTU-26112024.pdf)

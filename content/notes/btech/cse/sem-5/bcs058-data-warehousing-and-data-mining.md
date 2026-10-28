---
program: btech
branches: [cse, it, aids]
semester: 5
code: BCS058
name: Data Warehousing & Data Mining
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 3rd year, Departmental Elective, 2024-25 onwards
syllabusSource: https://dvsiet.dewaninstitutes.com/assets/images/about/AI-DS3.pdf
units:
  - Data Warehousing Basics and Multidimensional Model
  - Building a Data Warehouse
  - Data Mining and Data Preprocessing
  - Classification, Clustering and Association Rules
  - OLAP, Data Warehouse Operations and Mining Applications
---

# BCS058 Data Warehousing & Data Mining: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: architectures, schemas and comparison tables.
3. **Solved examples**: the numericals that appear (normalization, binning, information gain, Apriori, k-means, OLAP operations).
4. **Key points to remember**: formulas and quick facts.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Units 1 and 2. Inmon's definition, OLTP vs OLAP, three-tier architecture, star, snowflake and fact constellation schemas with diagrams, data marts and metadata, warehouse building steps.
- **Afternoon (3 hours):** Units 3 and 4. KDD steps, preprocessing (cleaning, integration, transformation, reduction, discretization) with min-max and z-score numericals; decision tree, Apriori and k-means worked once each.
- **Evening (2 hours):** Unit 5. OLAP operations, ROLAP vs MOLAP vs HOLAP, warehouse tuning, testing, security and backup, web, spatial and temporal mining. Then the "Last-hour checklist".
- **In the exam:** schema questions need a labelled diagram (fact table in the middle, dimension tables around it). Apriori needs every candidate table (C1, L1, C2, L2, …) and then the rules with confidence.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Data Warehousing Basics and Multidimensional Model

### 2-mark definitions

- **Data warehouse (Inmon):** a subject-oriented, integrated, time-variant and non-volatile collection of data that supports management's decision making.
- **Subject-oriented:** organized around major subjects such as customer, product and sales, not around daily operations.
- **Integrated:** data from different sources is made consistent (names, codes, units, formats).
- **Time-variant:** stores historical data (5 to 10 years), and every record has a time element.
- **Non-volatile:** data is loaded and read, but not updated or deleted in normal operation.
- **Data mart:** a smaller, subject-specific warehouse for one department (e.g. sales mart). It may be dependent (fed from the warehouse) or independent (fed from sources).
- **Metadata:** data about data: the structure, sources, transformation rules, and summary definitions of the warehouse.
- **Fact table:** the central table of a schema that stores numeric measures (e.g. units sold, amount) and foreign keys to dimensions.
- **Dimension table:** a table describing a perspective of analysis (time, item, location, customer) with descriptive attributes.
- **Data cube:** a multidimensional view of data where each cell holds an aggregated measure for a combination of dimension values.
- **Cuboid:** one level of aggregation in a data cube lattice; an n-dimensional cube has 2ⁿ cuboids (without hierarchies), from the base cuboid to the apex cuboid.
- **Concept hierarchy:** a sequence of levels from detailed to general, e.g. city < state < country.
- **ETL:** Extract, Transform, Load: getting data from sources, cleaning and converting it, and loading it into the warehouse.

### Core concepts

**OLTP vs OLAP**

| Point | OLTP (operational DB) | OLAP (data warehouse) |
|---|---|---|
| Users | clerks, customers | analysts, managers |
| Function | day-to-day operations | decision support |
| Data | current, detailed | historical, summarized |
| Design | ER, normalized | star / snowflake, denormalized |
| Access | read and write, short transactions | mostly read, complex queries |
| Records per query | tens | millions |
| Size | MB to GB | GB to TB and more |

**Components of a data warehouse:** source systems, ETL tools (extraction, cleaning, transformation, loading), the warehouse database, metadata repository, data marts, and access tools (query and reporting, OLAP, data mining).

**Three-tier architecture**
- **Bottom tier:** the warehouse database server (usually relational), fed by ETL from operational and external sources, with a metadata repository.
- **Middle tier:** the OLAP server (ROLAP or MOLAP) that presents multidimensional data.
- **Top tier:** front-end tools for querying, reporting, analysis and mining.

**Warehouse models:** enterprise warehouse (whole organization), data mart (one department), virtual warehouse (views over operational databases).

**Schemas**

| Point | Star | Snowflake | Fact constellation (galaxy) |
|---|---|---|---|
| Structure | one fact table, denormalized dimension tables | dimension tables normalized into sub-tables | several fact tables sharing dimensions |
| Joins | fewer | more | depends |
| Redundancy | more | less | moderate |
| Query speed | faster | slower | depends |
| Example | Sales fact with time, item, branch, location | location split into location and city tables | Sales and Shipping facts sharing time and item |

### Solved examples

**Example 1 (star schema for sales).**
- Fact table Sales(time_key, item_key, branch_key, location_key, dollars_sold, units_sold).
- Dimension tables: Time(time_key, day, month, quarter, year), Item(item_key, item_name, brand, type, supplier_type), Branch(branch_key, branch_name, branch_type), Location(location_key, street, city, state, country).
- In a snowflake schema, Item is split into Item(item_key, item_name, brand, type, supplier_key) and Supplier(supplier_key, supplier_type); Location is split into Location(location_key, street, city_key) and City(city_key, city, state, country).

**Example 2 (number of cuboids).** A cube with dimensions time, item, location (no hierarchies) has 2³ = **8 cuboids**: (), (time), (item), (location), (time, item), (time, location), (item, location), (time, item, location). With hierarchies of Lᵢ levels each, the total is Π(Lᵢ + 1).

### Key points to remember

- Inmon: top-down (enterprise warehouse first); Kimball: bottom-up (data marts first, combined by conformed dimensions).
- Apex cuboid = grand total (0-D); base cuboid = least summarized (n-D).
- Measures can be distributive (sum, count), algebraic (average), or holistic (median, mode).

### Important questions

1. Define a data warehouse and explain its four characteristics; compare OLTP and OLAP.
2. Explain the components and three-tier architecture of a data warehouse with a diagram.
3. Explain the multidimensional data model, data cube and concept hierarchies.
4. Explain star, snowflake and fact constellation schemas with diagrams.
5. Explain data marts and metadata.

---

## Unit 2: Building a Data Warehouse

### 2-mark definitions

- **Data warehouse strategy:** the overall plan for building a warehouse, including business goals, scope, budget, top-down or bottom-up approach and incremental delivery.
- **Business requirements:** the questions and reports users need, which decide the subjects, dimensions and granularity.
- **Granularity:** the level of detail of data in the fact table (e.g. each sale vs daily totals).
- **Parallel processing:** using several processors to speed up loading and querying.
- **Shared memory (SMP), shared disk and shared nothing (MPP):** the three parallel hardware architectures used for warehouses.
- **Client-server architecture:** front-end tools (clients) send queries to warehouse and OLAP servers.
- **Distributed DBMS:** data stored at several sites but managed as one database; used for large or geographically spread warehouses.
- **Data staging area:** the intermediate storage where data is cleaned and transformed before loading.
- **Slowly changing dimension:** a dimension whose attribute values change over time (e.g. a customer's city); handled by overwrite (type 1), new row (type 2) or new column (type 3).

### Core concepts

**Steps in building a warehouse**
1. Understand business requirements and define the strategy and scope.
2. Plan: choose the approach (top-down, bottom-up or hybrid), budget, team and timeline.
3. Design: identify facts, dimensions, granularity and the schema.
4. Choose hardware, operating system, DBMS and tools.
5. Build ETL: extraction, cleaning, transformation, loading and refresh.
6. Build the presentation layer: OLAP cubes, reports, dashboards.
7. Test, deploy, train users, and maintain.

**Hardware and operating systems.** Warehouses need scalability, high availability, large storage and parallel processing. Options: SMP (shared memory, easy but limited scale), clusters (shared disk), and MPP (shared nothing, best scalability). The OS must support large memory, parallel I/O and reliable multi-user operation.

**Parallel DBMS features:** inter-query parallelism (different queries in parallel) and intra-query parallelism (one query split across processors: partitioned and pipelined parallelism). Data partitioning: round-robin, hash and range.

**Warehouse schema design considerations:** choose the business process, declare the grain, choose dimensions, identify facts; denormalize for speed; use surrogate keys; plan aggregates (summary tables) and indexes (bitmap and join indexes).

**Top-down vs bottom-up**

| Point | Top-down (Inmon) | Bottom-up (Kimball) |
|---|---|---|
| Start | enterprise warehouse | data marts |
| Time to first result | long | short |
| Cost at start | high | low |
| Integration | built in | through conformed dimensions |
| Risk | high | lower |

### Solved examples

**Example 1 (choosing grain).** A retail chain wants sales per product per store per day. The grain is "one row per product per store per day". Facts: units_sold, revenue, discount. Dimensions: date, product, store, promotion.

**Example 2 (bitmap index).** Column Gender for 5 rows: M, F, F, M, F. Bitmap for M = 10010, for F = 01101. A query "Gender = F AND Region = North" is answered by ANDing two bitmaps, which is very fast for low-cardinality columns.

### Key points to remember

- Bitmap indexes suit low-cardinality columns; join indexes link fact rows to dimension values.
- Shared-nothing (MPP) scales best for very large warehouses.
- ETL takes most of the effort (often 60 to 80%) of a warehouse project.

### Important questions

1. Explain the strategy and planning steps for building a data warehouse.
2. Explain hardware and operating system requirements for a data warehouse.
3. Explain client-server, parallel and distributed systems for data warehousing.
4. Explain warehouse schema design and the issues involved (grain, surrogate keys, slowly changing dimensions).
5. Compare top-down and bottom-up approaches.

---

## Unit 3: Data Mining and Data Preprocessing

### 2-mark definitions

- **Data mining:** extracting interesting (non-trivial, previously unknown, useful) patterns or knowledge from large amounts of data.
- **KDD (Knowledge Discovery in Databases):** the whole process: data cleaning, integration, selection, transformation, data mining, pattern evaluation and knowledge presentation.
- **Data cleaning:** filling missing values, smoothing noisy data, finding outliers and fixing inconsistencies.
- **Data integration:** combining data from several sources into one store, handling schema conflicts and redundancy.
- **Data transformation:** converting data into suitable forms: smoothing, aggregation, generalization, normalization, attribute construction.
- **Data reduction:** obtaining a smaller representation that gives almost the same results: dimensionality reduction, numerosity reduction, data compression, data cube aggregation.
- **Discretization:** dividing the range of a continuous attribute into intervals (binning, histogram, entropy-based, clustering).
- **Noise:** random error or variance in measured data.
- **Outlier:** a data object very different from the rest of the data.
- **Binning:** sorting data, splitting it into bins, and smoothing by bin means, medians or boundaries.
- **Correlation analysis:** detecting redundant attributes, using the chi-square test (nominal data) or the correlation coefficient (numeric data).
- **Decision tree:** a flowchart-like tree used for classification, where each internal node tests an attribute and each leaf gives a class.

### Core concepts

**KDD process steps:** cleaning → integration → selection → transformation → data mining → pattern evaluation → knowledge presentation.

**Data mining functionalities:** characterization and discrimination, frequent pattern and association mining, classification and prediction, cluster analysis, outlier analysis, and trend and evolution analysis.

**Types of data that can be mined:** relational databases, data warehouses, transactional data, time-series, spatial, text, multimedia, web and stream data.

**Handling missing values:** ignore the tuple, fill manually, use a global constant, use the attribute mean (or the class-wise mean), or use the most probable value (regression, Bayesian, decision tree).

**Smoothing noisy data:** binning, regression, clustering (remove outliers), and combined human-computer inspection.

**Normalization methods**
- Min-max: v′ = (v − min)/(max − min) × (new_max − new_min) + new_min.
- Z-score: v′ = (v − mean)/σ.
- Decimal scaling: v′ = v/10ʲ, where j is the smallest integer such that max |v′| < 1.

**Data reduction techniques:** dimensionality reduction (PCA, attribute subset selection, wavelets), numerosity reduction (regression, histograms, clustering, sampling), and compression.

### Solved examples

**Example 1 (min-max normalization).** Income min 12,000, max 98,000, value 73,600, new range 0 to 1: v′ = (73,600 − 12,000)/(98,000 − 12,000) = 61,600/86,000 = **0.716**.

**Example 2 (z-score).** Mean 54,000, standard deviation 16,000, value 73,600: v′ = 19,600/16,000 = **1.225**.

**Example 3 (decimal scaling).** Values range from −986 to 917. The maximum absolute value is 986, so j = 3: −986 → −0.986, 917 → 0.917.

**Example 4 (binning).** Sorted prices: 4, 8, 15, 21, 21, 24, 25, 28, 34. Equal-frequency bins of 3:
- Bin 1: 4, 8, 15; Bin 2: 21, 21, 24; Bin 3: 25, 28, 34.
- Smoothing by bin means: 9, 9, 9; 22, 22, 22; 29, 29, 29.
- Smoothing by bin boundaries: 4, 4, 15; 21, 21, 24; 25, 25, 34.

**Example 5 (decision tree root).** With 9 "yes" and 5 "no" examples, Entropy = 0.940. If attribute Outlook splits them as sunny (2 yes, 3 no), overcast (4 yes, 0 no), rain (3 yes, 2 no), the information gain is 0.940 − (5/14)(0.971) − 0 − (5/14)(0.971) = **0.246**, higher than Humidity (0.151) or Wind (0.048), so Outlook becomes the root.

### Key points to remember

- Entropy(S) = −Σ pᵢ log₂ pᵢ; Gain(A) = Entropy(S) − Σ (|Sv|/|S|) Entropy(Sv).
- Min-max keeps relationships among values but is sensitive to outliers; z-score is better when min and max are unknown.
- Data mining is one step of KDD; the terms are often used loosely as synonyms.

### Important questions

1. Define data mining; explain the KDD process with a diagram and data mining functionalities.
2. Why preprocess data? Explain data cleaning (missing values, noisy data) with binning.
3. Explain data integration and transformation; solve normalization problems.
4. Explain data reduction and discretization techniques.
5. Explain decision tree induction using information gain with an example.

---

## Unit 4: Classification, Clustering and Association Rules

### 2-mark definitions

- **Classification:** building a model from labelled training data to assign class labels to new data.
- **Prediction:** estimating a continuous value (regression) for new data.
- **Bayesian classification:** classifying by the class with the highest posterior probability using Bayes theorem; Naive Bayes assumes attribute independence.
- **Neural network approach:** classification using a network of weighted neurons trained by backpropagation.
- **Clustering:** grouping objects so that objects in the same cluster are similar and those in different clusters are dissimilar (unsupervised).
- **Partitioning method:** divides n objects into k clusters, e.g. k-means, k-medoids (PAM).
- **Hierarchical method:** builds a tree of clusters (dendrogram) by merging (agglomerative, bottom-up) or splitting (divisive, top-down).
- **Density-based method:** grows clusters in dense regions and treats low-density points as noise, e.g. DBSCAN.
- **Grid-based method:** quantizes space into a grid of cells and clusters the cells, e.g. STING, CLIQUE.
- **Model-based method:** assumes a model for each cluster and finds the best fit, e.g. EM with Gaussian mixtures, SOM.
- **Association rule:** an implication X ⇒ Y between itemsets, measured by support and confidence.
- **Support:** fraction of transactions containing X ∪ Y. **Confidence:** support(X ∪ Y)/support(X).
- **Frequent itemset:** an itemset whose support is at least the minimum support.
- **Apriori property:** every subset of a frequent itemset must be frequent (if an itemset is infrequent, so are all its supersets).

### Core concepts

**Classification vs clustering**

| Point | Classification | Clustering |
|---|---|---|
| Learning | supervised | unsupervised |
| Labels | known classes | no labels |
| Goal | assign to predefined classes | discover groups |
| Example | spam detection | customer segmentation |

**k-means algorithm**
1. Choose k initial centres.
2. Assign each object to the nearest centre.
3. Recompute each centre as the mean of its cluster.
4. Repeat steps 2 and 3 until assignments stop changing.

Strengths: simple and fast O(nkt). Weaknesses: k must be given, sensitive to outliers and initial centres, finds only spherical clusters. k-medoids uses actual objects as centres and is more robust to outliers.

**Clustering methods comparison**

| Method | Example | Shape of clusters | Handles noise |
|---|---|---|---|
| Partitioning | k-means, PAM | spherical | poorly (k-means) |
| Hierarchical | AGNES, DIANA, BIRCH | any (via dendrogram) | moderately |
| Density-based | DBSCAN, OPTICS | arbitrary | yes |
| Grid-based | STING, CLIQUE | depends on grid | yes; fast |
| Model-based | EM, COBWEB, SOM | fits the model | depends |

**Apriori algorithm**
1. Scan the database to count 1-itemsets (C1); keep those meeting min support (L1).
2. Join Lk−1 with itself to create candidates Ck; prune candidates with an infrequent subset.
3. Scan the database to count Ck; keep frequent ones as Lk.
4. Repeat until no new frequent itemsets.
5. For each frequent itemset l and each non-empty subset s, output s ⇒ (l − s) if confidence ≥ min confidence.

Improvements: hash-based counting, transaction reduction, partitioning, sampling, and FP-growth (no candidate generation, uses an FP-tree).

### Solved examples

**Example 1 (Apriori).** Min support count 2.

| TID | Items |
|---|---|
| T100 | I1, I2, I5 |
| T200 | I2, I4 |
| T300 | I2, I3 |
| T400 | I1, I2, I4 |
| T500 | I1, I3 |
| T600 | I2, I3 |
| T700 | I1, I3 |
| T800 | I1, I2, I3, I5 |
| T900 | I1, I2, I3 |

- L1: I1 6, I2 7, I3 6, I4 2, I5 2 (all frequent).
- C2 counts: {I1, I2} 4, {I1, I3} 4, {I1, I4} 1, {I1, I5} 2, {I2, I3} 4, {I2, I4} 2, {I2, I5} 2, {I3, I4} 0, {I3, I5} 1, {I4, I5} 0.
- L2: {I1, I2}, {I1, I3}, {I1, I5}, {I2, I3}, {I2, I4}, {I2, I5}.
- C3 after pruning: {I1, I2, I3} (count 2), {I1, I2, I5} (count 2). Both frequent, so L3 = {I1, I2, I3}, {I1, I2, I5}.
- C4 = {I1, I2, I3, I5} is pruned because {I1, I3, I5} is not frequent. Stop.
- Rules from {I1, I2, I5}: I1 ∧ I5 ⇒ I2 (confidence 2/2 = 100%), I2 ∧ I5 ⇒ I1 (100%), I5 ⇒ I1 ∧ I2 (100%), I1 ∧ I2 ⇒ I5 (2/4 = 50%), I1 ⇒ I2 ∧ I5 (2/6 = 33%), I2 ⇒ I1 ∧ I5 (2/7 = 29%). With min confidence 70%, the first three are strong rules.

**Example 2 (k-means, k = 2).** Data: 2, 4, 10, 12, 3, 20, 30, 11, 25; initial means 2 and 4 (ties go to the first cluster).

| Iteration | Cluster 1 | Cluster 2 | New means |
|---|---|---|---|
| 1 | 2, 3 | 4, 10, 11, 12, 20, 25, 30 | 2.5, 16 |
| 2 | 2, 3, 4 | 10, 11, 12, 20, 25, 30 | 3, 18 |
| 3 | 2, 3, 4, 10 | 11, 12, 20, 25, 30 | 4.75, 19.6 |
| 4 | 2, 3, 4, 10, 11, 12 | 20, 25, 30 | 7, 25 |
| 5 | same | same | 7, 25 (stop) |

Final clusters: **{2, 3, 4, 10, 11, 12}** and **{20, 25, 30}**.

**Example 3 (single-linkage hierarchical clustering).** Points on a line: A 1, B 2, C 6, D 7, E 15. Merge A–B (distance 1), C–D (1), then {A, B}–{C, D} (single link 6 − 2 = 4), then with E (15 − 7 = 8). The dendrogram shows E joining last.

### Key points to remember

- Support(X ⇒ Y) = count(X ∪ Y)/N; confidence = count(X ∪ Y)/count(X); lift = confidence/support(Y) (lift > 1 means positive correlation).
- k-means minimizes the sum of squared distances to cluster centres.
- DBSCAN parameters: Eps (radius) and MinPts; core, border and noise points.

### Important questions

1. Explain classification; describe Bayesian classification and the neural network approach.
2. Explain clustering and its methods (partitioning, hierarchical, density, grid, model based).
3. Apply k-means (or hierarchical clustering) to given data.
4. Explain association rule mining and the Apriori algorithm; find frequent itemsets and strong rules for given transactions.
5. Explain FP-growth and ways to improve Apriori.

---

## Unit 5: OLAP, Data Warehouse Operations and Mining Applications

### 2-mark definitions

- **OLAP (Online Analytical Processing):** technology for fast, interactive, multidimensional analysis of warehouse data.
- **ROLAP:** Relational OLAP; stores data in relational tables and uses SQL for multidimensional queries.
- **MOLAP:** Multidimensional OLAP; stores pre-computed data in multidimensional arrays (cubes).
- **HOLAP:** Hybrid OLAP; detailed data in relational tables and aggregates in cubes.
- **Roll-up (drill-up):** aggregating data by climbing a concept hierarchy or removing a dimension (city → country).
- **Drill-down:** going from summary to detail (quarter → month), or adding a dimension.
- **Slice:** selecting one value of one dimension, giving a sub-cube (time = Q1).
- **Dice:** selecting values on two or more dimensions (time in Q1 or Q2, location in Delhi or Mumbai).
- **Pivot (rotate):** rotating the axes of the view to see data from a different perspective.
- **Data visualization:** presenting data or mining results graphically (charts, cubes, scatter plots, heat maps) to help understanding.
- **Web mining:** mining the web: content mining (page text), structure mining (hyperlinks, e.g. PageRank) and usage mining (web logs).
- **Spatial mining:** finding patterns in data with location (maps, GIS, satellite images).
- **Temporal mining:** finding patterns in time-related data (trends, periodic patterns, sequences).

### Core concepts

**ROLAP vs MOLAP vs HOLAP**

| Point | ROLAP | MOLAP | HOLAP |
|---|---|---|---|
| Storage | relational tables | multidimensional arrays | both |
| Query speed | slower | fastest | fast for summaries |
| Scalability | very large data | limited by cube size | good |
| Pre-computation | little | much | aggregates only |
| Example | Oracle with star schema | Essbase | Microsoft SSAS (HOLAP mode) |

**OLAP guidelines (Codd's rules, key ones):** multidimensional view, transparency, accessibility, consistent reporting performance, client-server architecture, generic dimensionality, dynamic sparse matrix handling, multi-user support, unrestricted cross-dimensional operations, intuitive data manipulation, flexible reporting, and unlimited dimensions and aggregation levels.

**Data warehouse operations**
- **Security:** user authentication, role-based access, views to restrict data, encryption, and audit trails.
- **Backup and recovery:** full, incremental and cold or hot backups; recovery plans and testing.
- **Tuning:** improve load time and query time using indexes (bitmap, join), aggregates and materialized views, partitioning and parallelism; monitor workloads.
- **Testing:** unit testing of ETL, integration testing, system testing, performance and load testing, and user acceptance testing; check data counts and totals against sources.

**Mining applications**
- **Web mining:** content (classify pages, extract information), structure (PageRank, HITS hubs and authorities), usage (session analysis, recommendations).
- **Spatial mining:** spatial association rules (e.g. "houses near a lake are expensive"), spatial clustering, using spatial data cubes.
- **Temporal mining:** trend analysis, similarity search in time series, sequential pattern mining (GSP, PrefixSpan), periodicity analysis.

### Solved examples

**Example 1 (OLAP operations on a sales cube with dimensions time, item, location).**
- Roll-up on location from city to country: total sales per country.
- Drill-down on time from quarter to month: monthly sales.
- Slice for time = "Q1": a 2-D view of item × location for Q1 only.
- Dice for time in (Q1, Q2), location in (Delhi, Mumbai), item in (TV, phone): a smaller 3-D sub-cube.
- Pivot: swap item and location axes of the 2-D slice.

**Example 2 (OLAP query as SQL roll-up).**

```sql
SELECT country, year, SUM(amount) AS total
FROM Sales s JOIN Location l ON s.location_key = l.location_key
             JOIN Time t ON s.time_key = t.time_key
GROUP BY ROLLUP (country, year);
```

ROLLUP gives totals per (country, year), per country, and the grand total. CUBE(country, year) would give all 4 combinations.

### Key points to remember

- Slice uses one dimension; dice uses two or more.
- MOLAP suffers from sparsity in large cubes; ROLAP scales but is slower.
- Materialized views trade storage and refresh time for query speed.

### Important questions

1. What is OLAP? Explain OLAP operations (roll-up, drill-down, slice, dice, pivot) with examples.
2. Compare ROLAP, MOLAP and HOLAP; state OLAP guidelines.
3. Explain data visualization and multidimensional analysis.
4. Explain data warehouse security, backup and recovery, tuning and testing.
5. Explain web mining, spatial mining and temporal mining with applications.

---

## Last-hour checklist

Read only this in the last hour before the paper.
- [ ] Inmon definition: subject-oriented, integrated, time-variant, non-volatile.
- [ ] OLTP vs OLAP table; three-tier architecture; data mart types; metadata.
- [ ] Star, snowflake, fact constellation diagrams; 2ⁿ cuboids.
- [ ] Warehouse building steps; SMP vs shared disk vs MPP; top-down vs bottom-up.
- [ ] KDD steps; data mining functionalities.
- [ ] Missing values; binning example; min-max 0.716, z-score 1.225, decimal scaling.
- [ ] Entropy and information gain; decision tree root example.
- [ ] Classification vs clustering; Naive Bayes; neural approach.
- [ ] k-means steps and example; clustering method types; DBSCAN terms.
- [ ] Apriori property; L1, L2, L3 example; support and confidence; FP-growth idea.
- [ ] OLAP operations; ROLAP vs MOLAP vs HOLAP; ROLLUP and CUBE.
- [ ] Security, backup, tuning, testing; web, spatial, temporal mining.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Data Warehousing, Data Mining & OLAP | Alex Berson, Stephen J. Smith | Tata McGraw-Hill | [WorldCat](https://search.worldcat.org/search?q=Data+Warehousing+Data+Mining+OLAP+Berson+Smith) |
| 2 | Data Warehousing: Architecture and Implementation | Mark Humphries, Michael W. Hawkins, Michelle C. Dy | Pearson | [WorldCat](https://search.worldcat.org/search?q=Data+Warehousing+Architecture+and+Implementation+Humphries) |
| 3 | Data Mining: Introductory and Advanced Topics | Margaret H. Dunham, S. Sridhar | Pearson Education | [WorldCat](https://search.worldcat.org/search?q=Data+Mining+Introductory+and+Advanced+Topics+Dunham) |
| 4 | Data Mining Techniques | Arun K. Pujari | Universities Press | [WorldCat](https://search.worldcat.org/search?q=Data+Mining+Techniques+Arun+Pujari) |
| 5 | Data Mining | Pieter Adriaans, Dolf Zantinge | Pearson Education | [WorldCat](https://search.worldcat.org/search?q=Data+Mining+Adriaans+Zantinge) |

**Syllabus source:** [AKTU B.Tech 3rd year syllabus, 2024-25 (copy hosted by an affiliated college, PDF)](https://dvsiet.dewaninstitutes.com/assets/images/about/AI-DS3.pdf)

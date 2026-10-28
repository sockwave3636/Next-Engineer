---
program: btech
branches: [all]
semester: 8
code: BOE089
name: Natural Language Processing
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-III, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf
units:
  - Introduction to Natural Language Understanding
  - Semantics, Knowledge Representation and Applications
  - Grammars and Parsing
  - Grammars for Natural Language
  - Ambiguity Resolution and Statistical Methods
---

# BOE089 Natural Language Processing: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: theory, algorithms and comparison tables.
3. **Solved examples**: derivations, parse traces, chart parsing, bigram probability, Viterbi POS tagging, PCFG tree probability, evaluation metrics, word sense disambiguation.
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (language study, applications, evaluation, levels of analysis, English syntax) and Unit 2 (semantics, knowledge representation, MT, database interfaces).
- **Afternoon (3 hours):** Unit 3 (CFGs, top-down, bottom-up and chart parsing, morphology, ATNs) and Unit 4 (auxiliaries, movement, questions, deterministic parsing).
- **Evening (2 hours):** Unit 5 (ambiguity, n-grams, POS tagging, PCFG, best-first parsing, logical form, word senses), then the "Last-hour checklist".
- **In the exam:** always draw a parse tree when a grammar is asked, show each step of a parse trace in a table, and write probabilities as products before multiplying.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Introduction to Natural Language Understanding

### 2-mark definitions

- **Natural language processing (NLP):** the field of computer science and AI concerned with enabling computers to analyse, understand and generate human (natural) languages.
- **Natural language understanding (NLU):** mapping natural language input into a useful internal representation of its meaning.
- **Natural language generation (NLG):** producing natural language text from an internal representation.
- **Computational linguistics:** the scientific study of language from a computational perspective, building models of linguistic phenomena.
- **Morphology:** the study of the internal structure of words (morphemes: root + affixes).
- **Syntax:** the study of how words combine into phrases and sentences (grammar, structure).
- **Semantics:** the study of literal meaning of words and sentences.
- **Pragmatics:** the study of meaning in context: how sentences are used to achieve goals (speech acts, implicature).
- **Discourse:** the study of how sentences connect to form coherent texts (anaphora, coherence).
- **Ambiguity:** a property of language where an expression has more than one possible interpretation (lexical, syntactic, semantic, pragmatic).

### Core concepts

**Why study language computationally:** to build useful applications and to test theories of human language. Disciplines involved: linguistics, psycholinguistics, philosophy, computer science/AI. Language is hard because it is ambiguous, context-dependent, creative (infinite sentences), and depends on world knowledge.

**Applications of NLP**

| Application | Description |
|---|---|
| Machine translation | Translating between languages (Google Translate; Bhashini/Anuvadini in India) |
| Information retrieval and search | Finding relevant documents for a query |
| Question answering | Answering questions from text or a knowledge base |
| Dialogue systems / chatbots | Conversational agents, virtual assistants |
| Text summarization | Producing short summaries of documents |
| Sentiment analysis | Detecting opinions and emotions |
| Information extraction | Named entities, relations, events from text |
| Speech recognition and synthesis | Speech ↔ text |
| Spelling and grammar checking | Error detection and correction |
| Natural language database interfaces | Querying databases in English |
| Text classification | Spam detection, topic labelling |

**Evaluating language understanding systems**
- **Black-box evaluation:** judge the system only by its input/output on a task (e.g. accuracy of answers, translation quality).
- **Glass-box evaluation:** evaluate each component (parser, lexicon, semantic interpreter) separately.
- Problems: a system can seem to understand by tricks (ELIZA used keyword patterns without understanding); need representative test sets.
- Metrics: accuracy, precision, recall, F-measure (IR, extraction), BLEU (translation), perplexity (language models), word error rate (speech), human judgement (fluency, adequacy).

**Levels of language analysis:** phonetic and phonological (sounds) → morphological (word structure) → lexical (word meaning, POS) → syntactic (structure) → semantic (literal meaning) → pragmatic (meaning in context) → discourse (across sentences) → world knowledge.

**Organization of an NLU system** (draw it): words → parser (uses grammar and lexicon) → syntactic structure + logical form → contextual interpretation (uses discourse and world knowledge) → final meaning representation → application reasoning → response generation (realization).

**Outline of English syntax**
- **Word classes:** open (nouns, verbs, adjectives, adverbs) and closed (determiners, pronouns, prepositions, conjunctions, auxiliaries).
- **Phrases:** noun phrase (NP: det + adj + noun + PP), verb phrase (VP: verb + complements), prepositional phrase (PP: prep + NP), adjective phrase (ADJP), adverbial phrase (ADVP).
- **Sentence types:** declarative (The dog barked), yes/no question (Did the dog bark?), wh-question (What did the dog chase?), imperative (Close the door).
- **Verb subcategorization:** intransitive (sleep), transitive (chase NP), ditransitive (give NP NP), sentential complement (believe that S).
- **Agreement:** subject-verb number and person (The dogs bark / The dog barks).
- **Tense and aspect:** simple, progressive (be + -ing), perfect (have + -en), passive (be + -en).

### Solved examples

**Example 1: Identify ambiguity type.**
- "I saw a bat." → **lexical** (animal or cricket bat).
- "I saw the man with the telescope." → **syntactic / structural** (PP attaches to "saw" or to "the man").
- "Every student read a book." → **semantic / scope** (one book for all, or each a different book).
- "Can you pass the salt?" → **pragmatic** (a request, not a question about ability).

**Example 2: Levels of analysis for "The cats chased mice."** Morphological: cat + s (plural), chase + ed (past). Lexical: The/Det, cats/N, chased/V, mice/N (irregular plural of mouse). Syntactic: [S [NP The cats] [VP chased [NP mice]]]. Semantic: chase(cats, mice), past tense. Pragmatic: a statement of a past event.

**Example 3: Precision, recall, F1.** A question-answering system returns 8 answers, 6 correct; there are 10 correct answers in total. Precision = 6/8 = **0.75**; recall = 6/10 = **0.60**; F1 = 2PR/(P + R) = 0.9/1.35 = **0.667**.

### Key points to remember

- Levels: phonology, morphology, lexical, syntax, semantics, pragmatics, discourse, world knowledge.
- Ambiguity types: lexical, syntactic, semantic, pragmatic.
- Evaluation: black-box vs glass-box; precision, recall, F1, BLEU, perplexity.
- English syntax: word classes, phrases (NP, VP, PP), sentence types, subcategorization, agreement.

### Important questions

1. What is NLP? Explain its applications and why language is hard to process.
2. Explain the different levels of language analysis with an example.
3. How are natural language understanding systems evaluated?
4. Draw and explain the organization of a natural language understanding system.
5. Give an outline of English syntax: word classes, phrases and sentence types.

---

## Unit 2: Semantics, Knowledge Representation and Applications

### 2-mark definitions

- **Lexical semantics:** the meaning of individual words and the relations among them (synonymy, antonymy, hyponymy, meronymy).
- **Compositional semantics:** the principle that the meaning of a sentence is built from the meanings of its parts and the way they are combined (Frege's principle).
- **Logical form (LF):** a context-independent representation of the literal meaning of a sentence, usually in a logic-like language.
- **Knowledge representation (KR):** a formal way of storing facts about the world so a program can reason with them.
- **First-order predicate logic (FOPL):** a KR language with constants, variables, predicates, functions, connectives and quantifiers (∀, ∃).
- **Semantic network:** a graph whose nodes are concepts and labelled arcs are relations (is-a, has-part).
- **Frame:** a structured representation of a stereotyped object or situation with slots and fillers (default values).
- **Thematic (case) roles:** semantic roles of NPs relative to a verb: agent, theme/patient, instrument, beneficiary, location, source, goal.
- **Machine translation (MT):** automatic translation of text from a source language to a target language.
- **Natural language interface to databases (NLIDB):** a system that converts English questions into database queries (SQL) and returns answers.

### Core concepts

**Semantic relations between words:** synonymy (big/large), antonymy (hot/cold), hyponymy (rose is a kind of flower), hypernymy (flower is a hypernym of rose), meronymy (wheel is part of car), homonymy (bank: river / money; unrelated), polysemy (head: body part / leader; related senses). WordNet organizes English words into synsets linked by these relations; IndoWordNet does the same for Indian languages.

**Thematic roles**

| Role | Meaning | Example ("John broke the window with a hammer for Mary in the hall") |
|---|---|---|
| Agent | Intentional doer | John |
| Theme/Patient | Thing affected | the window |
| Instrument | Means used | a hammer |
| Beneficiary | For whom | Mary |
| Location | Where | the hall |

Selectional restrictions: verbs constrain their arguments (eat needs an animate agent and edible theme), used to reject wrong readings.

**Knowledge representation schemes**

| Scheme | Strengths | Weaknesses |
|---|---|---|
| First-order logic | Precise, well-defined inference | Hard to express defaults and uncertainty |
| Semantic networks | Intuitive, inheritance via is-a | Unclear semantics of links |
| Frames / scripts | Structured, defaults, stereotypes (restaurant script) | Rigid |
| Conceptual dependency (Schank) | Language-independent primitives (PTRANS, ATRANS, MTRANS) | Limited primitives |
| Description logics / ontologies (OWL) | Formal, decidable reasoning | Expressiveness limits |

**Sentence to logical form:** "Every student reads a book" → ∀x (student(x) → ∃y (book(y) ∧ reads(x, y))) or ∃y (book(y) ∧ ∀x (student(x) → reads(x, y))) (scope ambiguity). "John gave Mary a book" → ∃b (book(b) ∧ give(e) ∧ agent(e, John) ∧ recipient(e, Mary) ∧ theme(e, b)) (event semantics).

**Machine translation**
- **Approaches:** direct (word-by-word with local reordering), **transfer-based** (analyse source → transfer syntactic/semantic structure → generate target), **interlingua** (analyse to a language-independent meaning → generate any target), **example-based**, **statistical** (P(target|source) ∝ P(source|target)·P(target)), **neural MT** (encoder-decoder with attention, Transformers) — the modern standard.
- **Vauquois triangle:** depth of analysis increases from direct to transfer to interlingua; interlingua needs n analysers + n generators for n languages instead of n(n − 1) transfer modules.
- **Problems:** lexical gaps, word order (English SVO vs Hindi SOV), morphology, idioms, ambiguity, gender and honorifics.
- **Indian efforts:** Anusaaraka (Paninian), Anuvadaksh, Sampark, Bhashini (National Language Translation Mission), IndicTrans.

**Natural language database interfaces**
- Pipeline: English question → parsing → semantic interpretation (map words to tables, columns, values) → logical query → SQL → execute → answer (possibly in English).
- Early systems: LUNAR (moon rocks, Woods 1972), LADDER, CHAT-80; modern: text-to-SQL with neural models.
- Issues: ambiguity of words vs schema names, ellipsis and anaphora in follow-up questions ("And in Delhi?"), quantifiers and aggregation ("How many…"), portability to new databases, user mismatch between expectation and capability.

### Solved examples

**Example 1: Thematic roles.** "Ravi opened the door with a key." Agent = Ravi; Theme = the door; Instrument = a key. "The key opened the door." Instrument = the key (subject but not agent), showing that grammatical subject ≠ agent.

**Example 2: Logical form.** "All engineers like coffee." → ∀x (engineer(x) → like(x, coffee)). "Some engineer likes tea." → ∃x (engineer(x) ∧ like(x, tea)).

**Example 3: English to SQL.** "Which students of CSE scored more than 80 in AI?" with table marks(name, branch, subject, score) →

```sql
SELECT name FROM marks
WHERE branch = 'CSE' AND subject = 'AI' AND score > 80;
```

**Example 4: Transfer MT (English → Hindi).** "Ram eats an apple." Parse: [S [NP Ram] [VP eats [NP an apple]]]. Transfer rule: SVO → SOV and verb agreement. Generate: "राम एक सेब खाता है" (Ram ek seb khaata hai).

### Key points to remember

- Word relations: synonymy, antonymy, hyponymy, meronymy, homonymy, polysemy; WordNet.
- Thematic roles: agent, theme, instrument, beneficiary, location; selectional restrictions.
- KR: FOPL, semantic nets, frames, CD, ontologies.
- MT: direct, transfer, interlingua, statistical, neural; Vauquois triangle.
- NLIDB: question → LF → SQL; LUNAR; problems: ambiguity, ellipsis, portability.

### Important questions

1. Explain lexical and compositional semantics with semantic relations between words.
2. Explain thematic roles and selectional restrictions with examples.
3. Compare knowledge representation schemes used in NLP. Convert sentences to logical form.
4. Explain approaches to machine translation with the Vauquois triangle.
5. Explain natural language interfaces to databases.

---

## Unit 3: Grammars and Parsing

### 2-mark definitions

- **Grammar:** a formal specification of the allowable structures of a language, usually by rewrite rules.
- **Context-free grammar (CFG):** a 4-tuple G = (N, Σ, P, S) where rules have one non-terminal on the left (A → α).
- **Derivation:** a sequence of rule applications from the start symbol S to a sentence.
- **Parse tree:** a tree showing how a sentence is derived from S using grammar rules.
- **Parsing:** finding the structure (parse tree) of a sentence according to a grammar.
- **Top-down parsing:** parsing that starts from S and expands rules until the words are matched (goal-driven).
- **Bottom-up parsing:** parsing that starts from the words and combines them into constituents up to S (data-driven).
- **Chart parser:** a parser that stores partial results (constituents and active arcs) in a chart to avoid repeating work (dynamic programming).
- **Lexicon:** a dictionary of words with their categories and features (number, tense, subcategorization).
- **Augmented transition network (ATN):** a recursive transition network whose arcs carry tests and actions on registers, used to parse natural language (Woods, 1970).

### Core concepts

**What makes a good grammar:** generality (covers many sentences), selectivity (rejects ungrammatical ones), understandability (linguistically sensible).

**Sample grammar (G1)**

```text
S   → NP VP
NP  → Det N | Det Adj N | Name | NP PP
VP  → V | V NP | V NP PP
PP  → P NP
Det → the | a        N → dog | cat | park | man | telescope
V   → chased | saw | barks   P → in | with   Name → Ram
```

**Top-down parsing (recursive descent):** state = (list of symbols to expand, position). Start with (S, 1); replace the first symbol by a rule's right side; when the first symbol is a terminal/lexical category that matches the next word, move on; on failure backtrack. Problems: left recursion (NP → NP PP causes infinite loop), repeated work, wasted effort on rules that cannot match the words.

**Bottom-up parsing (shift-reduce):** shift words onto a stack; reduce when the top of the stack matches the right side of a rule; continue until only S covers the whole input. Problems: builds constituents that cannot fit into S; reduce-reduce and shift-reduce choices.

**Top-down vs bottom-up**

| Feature | Top-down | Bottom-up |
|---|---|---|
| Starts from | S (goal) | Words (data) |
| Wastes effort on | Trees inconsistent with input | Constituents that never lead to S |
| Left recursion | Loops | No problem |
| Empty rules (ε) | No problem | Problematic |

**Chart parsing (bottom-up chart / Earley)**
- Chart entries: **constituents** (complete: NP from 1 to 3) and **active arcs** (dotted rules: NP → Det • N from 1 to 2).
- Algorithm: for each word, add its lexical categories to the agenda; when a constituent C from i to j is added, (1) start new arcs for rules beginning with C (X → C • …), (2) extend arcs that need C next (X → … • C … ending at i), and when an arc completes, add the new constituent. Store each result once → no duplicated work; complexity O(n³).
- **Earley parser:** a top-down chart parser with predictor, scanner and completer steps.
- **CKY:** bottom-up dynamic programming for grammars in Chomsky normal form.

**Morphology and the lexicon**
- **Inflectional morphology:** changes form without changing category (cat → cats, walk → walked).
- **Derivational morphology:** creates new words, often a new category (happy → happiness, teach → teacher).
- **Morphological analysis:** stripping affixes to find root + features ("walked" → walk + V + past); done with finite-state transducers (two-level morphology) or rule lists; stemming (Porter) vs lemmatization.
- **Lexicon entries with features:** dog: N, agr = 3s; dogs: N, agr = 3p; barks: V, vform = pres, agr = 3s, subcat = none; chases: V, subcat = NP. Features allow agreement checks in augmented grammars (S → NP[agr=?a] VP[agr=?a]).

**Transition networks and ATNs**
- **Finite state network:** nodes = states, arcs labelled by word categories; cannot handle nested structures.
- **Recursive transition network (RTN):** arcs can call other networks (NP, PP) → equivalent to CFG.
- **ATN:** RTN + **registers** (store subject, verb, object, number) + **tests** on arcs (agreement) + **actions** (set registers, build structure). Can handle agreement, passive sentences and questions by register manipulation; drawback: procedural, hard to maintain.

### Solved examples

**Example 1: Derivation and parse tree.** Sentence: "the dog chased a cat" with G1.
- S ⇒ NP VP ⇒ Det N VP ⇒ the N VP ⇒ the dog VP ⇒ the dog V NP ⇒ the dog chased NP ⇒ the dog chased Det N ⇒ the dog chased a N ⇒ **the dog chased a cat**.
- Tree: [S [NP [Det the] [N dog]] [VP [V chased] [NP [Det a] [N cat]]]].

**Example 2: Top-down parse trace** of "the dog barks".

| Step | Symbols to expand | Next word | Action |
|---|---|---|---|
| 1 | S | the | S → NP VP |
| 2 | NP VP | the | NP → Det N |
| 3 | Det N VP | the | Det matches "the" |
| 4 | N VP | dog | N matches "dog" |
| 5 | VP | barks | VP → V (try first) |
| 6 | V | barks | V matches "barks" |
| 7 | (empty) | (end) | Success |

**Example 3: Shift-reduce parse** of "Ram saw the man".

| Stack | Input | Action |
|---|---|---|
| (empty) | Ram saw the man | shift |
| Name | saw the man | reduce NP → Name |
| NP | saw the man | shift |
| NP V | the man | shift |
| NP V Det | man | shift |
| NP V Det N | (empty) | reduce NP → Det N |
| NP V NP | (empty) | reduce VP → V NP |
| NP VP | (empty) | reduce S → NP VP |
| S | (empty) | accept |

**Example 4: Chart for "the dog barks"** (positions 1 the 2 dog 3 barks 4).
- Add Det(1–2) → arc NP → Det • N (1–2).
- Add N(2–3) → arc completes → NP(1–3) → arc S → NP • VP (1–3).
- Add V(3–4) → VP → V (3–4) complete; also arc VP → V • NP (3–4) stays incomplete.
- VP(3–4) extends S → NP • VP → **S(1–4)**: parse found. Every constituent is built only once.

**Example 5: Morphological analysis.** "unhappiness" → un- (prefix, negation) + happy (root, Adj) + -ness (suffix, Adj → N). "studies" → study + -s (N plural or V 3rd person singular present; y → ie rule).

### Key points to remember

- CFG = (N, Σ, P, S); good grammar: general, selective, understandable.
- Top-down: goal-driven, left recursion problem; bottom-up: data-driven, useless constituents.
- Chart: constituents + active (dotted) arcs; no repeated work; O(n³); Earley, CKY.
- Morphology: inflectional vs derivational; lexicon features for agreement.
- ATN = RTN + registers + tests + actions.

### Important questions

1. What is a CFG? Write a grammar for simple English sentences and draw parse trees.
2. Explain top-down and bottom-up parsing with traces. Compare them.
3. Explain the chart parsing algorithm with an example.
4. Explain morphological analysis and the role of the lexicon with features.
5. Explain transition networks, RTNs and augmented transition networks.

---

## Unit 4: Grammars for Natural Language

### 2-mark definitions

- **Auxiliary verb:** a helping verb (be, have, do, modals can/will/must) that combines with a main verb to express tense, aspect, mood or voice.
- **Verb phrase complement:** the structure required after a verb (NP, PP, VP[inf], S).
- **Movement phenomenon:** a constituent appearing away from its normal position (e.g. wh-word at the front of a question), linked to an empty "gap" in the normal position.
- **Gap (trace):** the empty position from which a constituent has moved.
- **Wh-question:** a question that begins with a wh-word (who, what, which, where, when, why, how).
- **Yes/no question:** a question formed by subject-auxiliary inversion (Is he coming?).
- **Feature (augmented) grammar:** a grammar whose categories carry features (number, person, tense, VFORM, GAP) that are checked by unification.
- **Garden-path sentence:** a sentence whose early words lead the reader to a wrong parse that must be revised ("The horse raced past the barn fell").
- **Deterministic parser:** a parser that never backtracks and never keeps multiple alternatives; each decision is final (Marcus's PARSIFAL).
- **Lookahead:** examining upcoming words before making a parsing decision.

### Core concepts

**Auxiliaries and verb phrases**
- Order of auxiliaries in English: (Modal) (have + -en) (be + -ing) (be + -en, passive) main verb: e.g. "may have been being watched".
- Each auxiliary dictates the VFORM of the next verb: modal → base form; have → past participle (-en); be (progressive) → present participle (-ing); be (passive) → past participle.
- Grammar with features: VP → AUX[compform ?c] VP[vform ?c]; e.g. AUX "has" has compform = pastprt, so the next VP must be "eaten", not "eat".
- "do"-support in questions and negatives: Did he go? He did not go.

**Movement phenomena**
- **Wh-movement:** "What did John buy __?" (object moved to the front, gap after "buy").
- **Subject-auxiliary inversion:** "Has he left?"
- **Topicalization:** "This book, I like __."
- **Relative clauses:** "the book that John bought __".
- **Passive:** "The window was broken __ by John" (object becomes subject).
- Handling: (1) transformational grammar (move constituents), (2) feature grammar with a **GAP feature** passed down the tree until an empty constituent fills it, (3) ATN **hold list** (store the wh-phrase; retrieve it at the gap position), (4) slash categories in GPSG (VP/NP = VP missing an NP).

**Handling questions in a CFG (with GAP feature)**

```text
S[+inv]   → AUX NP VP              (yes/no:  Did John buy a book?)
S         → WH-NP S[+inv, GAP NP]  (wh-question: What did John buy ?)
VP[GAP NP] → V NP[GAP NP]
NP[GAP NP] → ε                     (empty NP fills the gap)
```

**Human preferences in parsing (psycholinguistics)**
- **Minimal attachment:** prefer the parse with the fewest nodes ("John bought the book for Mary": attach PP to the VP).
- **Right association (late closure):** attach new words to the most recent (lowest) constituent ("I said that he left yesterday": yesterday modifies "left").
- **Lexical preferences:** some verbs prefer certain complements ("put" needs NP PP).
- These explain **garden-path** effects ("The old man the boats": "man" is a verb).

**Deterministic parsing (Marcus parser, PARSIFAL)**
- Data structures: a **stack** of incomplete constituents and a **buffer** of 3 lookahead cells.
- Rules (grouped in packets) match the stack top and the buffer to decide one action: attach, create a node, drop, switch, insert a trace.
- Never backtracks; fails on garden-path sentences, which matches human behaviour (determinism hypothesis).
- Modern deterministic parsing: shift-reduce dependency parsers with classifiers (MaltParser), transition-based parsing.

### Solved examples

**Example 1: Auxiliary sequence.** "The song might have been sung." Modal might → base "have"; have → past participle "been"; passive be → past participle "sung". Structure: [VP [AUX might] [VP [AUX have] [VP [AUX been] [VP [V sung]]]]].

**Example 2: Wh-question with a gap.** "Which book did Sita read?"
- WH-NP "which book" moved from the object position of "read".
- [S [WH-NP Which book] [S[+inv] [AUX did] [NP Sita] [VP [V read] [NP[GAP] ε]]]].
- Semantic: the gap NP is linked to "which book" → read(Sita, x), ask x where book(x).

**Example 3: Yes/no question.** "Is Ravi coming?" → subject-auxiliary inversion of "Ravi is coming": S[+inv] → AUX(Is) NP(Ravi) VP(coming[vform ing]).

**Example 4: Attachment preference.** "She saw the boy with the binoculars." Minimal attachment prefers attaching "with the binoculars" to the VP (instrument of seeing: fewer nodes than creating NP → NP PP). Context may override (if several boys, one has binoculars).

**Example 5: Garden path.** "The horse raced past the barn fell." The parser first treats "raced" as the main verb; "fell" then cannot attach. Correct parse: "The horse [that was] raced past the barn" (reduced relative clause) fell. A deterministic parser with 3-word lookahead also fails here, as humans do.

### Key points to remember

- Auxiliary order: modal, perfect have, progressive be, passive be, main verb; each fixes the next VFORM.
- Movement: wh-movement, inversion, topicalization, relatives, passive; GAP feature / hold list / slash categories.
- Human preferences: minimal attachment, right association, lexical preferences; garden paths.
- Marcus parser: stack + 3-cell buffer, no backtracking.

### Important questions

1. Explain the handling of auxiliary verbs and verb phrases in a grammar with features.
2. What are movement phenomena? Explain how they are handled in grammars.
3. How are yes/no and wh-questions handled in a CFG? Explain the GAP feature.
4. Explain human preferences in parsing with examples of garden-path sentences.
5. Explain deterministic parsing (Marcus parser).

---

## Unit 5: Ambiguity Resolution and Statistical Methods

### 2-mark definitions

- **Ambiguity resolution:** choosing the correct interpretation of an ambiguous word or structure using constraints, preferences or probabilities.
- **Language model:** a probability distribution over word sequences, P(w₁ … wₙ).
- **N-gram model:** approximates P(wᵢ | w₁…wᵢ₋₁) by P(wᵢ | wᵢ₋ₙ₊₁…wᵢ₋₁) (bigram n = 2, trigram n = 3).
- **Smoothing:** adjusting probabilities so that unseen n-grams get a small non-zero probability (Laplace add-one, Good–Turing, Kneser–Ney, backoff, interpolation).
- **Part-of-speech (POS) tagging:** assigning a grammatical category (noun, verb, adjective…) to each word in a sentence.
- **Hidden Markov model (HMM) tagger:** a model with hidden states (tags), transition probabilities P(tᵢ | tᵢ₋₁) and emission probabilities P(wᵢ | tᵢ); the best tag sequence is found by the Viterbi algorithm.
- **Probabilistic CFG (PCFG):** a CFG with a probability on each rule such that probabilities of rules with the same left side sum to 1.
- **Best-first parsing:** a chart parser that expands the most probable constituents first, using an agenda ordered by probability.
- **Word sense disambiguation (WSD):** choosing the correct meaning of a polysemous or homonymous word in context.
- **Logical form (with quantifiers):** an unscoped representation of meaning in which quantifier scope is left undecided until context resolves it.

### Core concepts

**Sources of ambiguity:** lexical category (book: noun/verb), word sense (bank), structural (PP attachment, coordination: "old men and women"), quantifier scope, anaphora ("he"), ellipsis.

**Probabilistic methods: basics**
- Chain rule: P(w₁…wₙ) = Π P(wᵢ | w₁…wᵢ₋₁).
- Bigram estimate (MLE): P(wᵢ | wᵢ₋₁) = C(wᵢ₋₁ wᵢ)/C(wᵢ₋₁).
- Add-one (Laplace): P = (C(wᵢ₋₁ wᵢ) + 1)/(C(wᵢ₋₁) + V).
- Perplexity: PP = P(w₁…w_N)^(−1/N); lower is better.

**POS tagging approaches**

| Approach | Idea |
|---|---|
| Rule-based | Dictionary of possible tags + hand-written constraint rules (ENGTWOL) |
| Transformation-based (Brill) | Start with most frequent tag; learn ordered correction rules |
| Stochastic (HMM) | argmax over tag sequences of Π P(wᵢ \| tᵢ) P(tᵢ \| tᵢ₋₁), Viterbi |
| Discriminative (MaxEnt, CRF) | Rich features of context |
| Neural (BiLSTM-CRF, Transformers) | State of the art (~97–98% accuracy for English) |

Tag sets: Penn Treebank (45 tags: NN, NNS, VB, VBD, JJ, DT, IN…); BIS tagset for Indian languages.

**Viterbi algorithm:** v₁(t) = P(t | start) P(w₁ | t); vᵢ(t) = maxₛ [vᵢ₋₁(s) P(t | s)] × P(wᵢ | t); keep back-pointers; trace back from the best final state. Complexity O(N T²).

**PCFG**
- P(tree) = product of the probabilities of all rules used; P(sentence) = sum over its trees.
- Choose the most probable tree for disambiguation (probabilistic CKY / Viterbi parsing).
- Rule probabilities estimated from a treebank: P(A → β) = C(A → β)/C(A).
- Limitations: independence assumptions; no lexical sensitivity (fixed by lexicalized PCFGs that add head words).

**Best-first parsing:** agenda holds constituents ordered by probability (or a figure of merit); always extend the best one first; the first complete S found is usually the best parse; much faster than exhaustive parsing.

**Semantics and logical form:** logical form uses predicates, terms and unscoped quantifiers, e.g. "Every boy loves a dog" → (LOVES1 ⟨EVERY b1 BOY1⟩ ⟨A d1 DOG1⟩); scoping is done later using context and preferences. Word senses are represented as distinct predicates (BANK1 = financial institution, BANK2 = river side).

**Word sense disambiguation**
- **Selectional restrictions:** "The bank approved the loan" → approve needs an agent organization → BANK1.
- **Dictionary-based (Lesk):** choose the sense whose dictionary gloss overlaps most with the context words.
- **Supervised:** classifiers trained on sense-tagged corpora (SemCor) with features (neighbouring words, POS, collocations).
- **Unsupervised / semi-supervised:** clustering, Yarowsky's bootstrapping (one sense per discourse, one sense per collocation).
- **Modern:** contextual embeddings (BERT) give different vectors for different senses.

### Solved examples

**Example 1: Bigram probability.** Corpus: "⟨s⟩ I am Sam ⟨/s⟩", "⟨s⟩ Sam I am ⟨/s⟩", "⟨s⟩ I do not like green eggs ⟨/s⟩".
- P(I | ⟨s⟩) = 2/3; P(am | I) = 2/3; P(Sam | am) = 1/2; P(⟨/s⟩ | Sam) = 1/2.
- P(⟨s⟩ I am Sam ⟨/s⟩) = 2/3 × 2/3 × 1/2 × 1/2 = **1/9 ≈ 0.111**.
- P(do | I) = 1/3; P(green | do) = 0 (unseen) → use smoothing.

**Example 2: Viterbi POS tagging.** Tags N, V. Start: P(N) = 0.6, P(V) = 0.4. Transitions: P(N|N) = 0.3, P(V|N) = 0.7, P(N|V) = 0.6, P(V|V) = 0.4. Emissions: P(fish|N) = 0.5, P(fish|V) = 0.2, P(swim|N) = 0.1, P(swim|V) = 0.6. Sentence "fish swim".

| Word | N | V |
|---|---|---|
| fish | 0.6 × 0.5 = 0.30 | 0.4 × 0.2 = 0.08 |
| swim | max(0.30 × 0.3, 0.08 × 0.6) × 0.1 = 0.09 × 0.1 = 0.009 | max(0.30 × 0.7, 0.08 × 0.4) × 0.6 = 0.21 × 0.6 = **0.126** |

Best final state V (0.126) with back-pointer to N → **fish/N swim/V**.

**Example 3: PCFG tree probability.** Rules: S → NP VP (1.0); NP → Det N (0.6); NP → N (0.4); VP → V NP (0.7); VP → V (0.3); Det → the (1.0); N → dog (0.5); N → cat (0.5); V → chased (1.0). Sentence "the dog chased the cat".
- NP(the dog) = 0.6 × 1.0 × 0.5 = 0.3; NP(the cat) = 0.3.
- VP = 0.7 × 1.0 × 0.3 = 0.21.
- P(tree) = 1.0 × 0.3 × 0.21 = **0.063**.

**Example 4: PP-attachment by probability.** "saw the man with the telescope": if P(VP → V NP PP) × … = 0.0012 for VP-attachment and P(NP → NP PP) path gives 0.0008, choose **VP-attachment** (instrument reading).

**Example 5: Simplified Lesk.** Word "bank" in "I deposited money in the bank". Gloss of BANK1: "a financial institution that accepts deposits and lends money" (overlap: deposit, money = 2). Gloss of BANK2: "sloping land beside a river" (overlap 0). **Choose BANK1**.

### Code

**Bigram probabilities in Python**

```python
from collections import Counter
corpus = ["<s> I am Sam </s>", "<s> Sam I am </s>",
          "<s> I do not like green eggs </s>"]
tokens = [s.split() for s in corpus]
uni = Counter(w for t in tokens for w in t)
bi = Counter((t[i], t[i+1]) for t in tokens for i in range(len(t) - 1))
p = lambda a, b: bi[(a, b)] / uni[a]
print(p("<s>", "I"), p("I", "am"))   # 0.666..., 0.666...
```

### Key points to remember

- Ambiguity: lexical, structural, scope, anaphora.
- Bigram MLE = C(w₁w₂)/C(w₁); smoothing for unseen; perplexity.
- HMM tagging: transition × emission, Viterbi (fish/N swim/V, 0.126).
- PCFG: tree probability = product of rule probabilities (0.063); best-first parsing uses an agenda by probability.
- Logical form with unscoped quantifiers; word senses as separate predicates.
- WSD: selectional restrictions, Lesk, supervised, Yarowsky.

### Important questions

1. Explain the types of ambiguity and methods of ambiguity resolution.
2. Explain n-gram language models with smoothing. Compute a sentence probability.
3. Explain POS tagging approaches. Tag a sentence using an HMM and the Viterbi algorithm.
4. Explain probabilistic context-free grammars and best-first parsing with an example.
5. Explain logical form and word sense disambiguation (Lesk algorithm).

---

## Last-hour checklist

- [ ] NLP vs NLU vs NLG; applications table; levels of analysis; ambiguity types; evaluation (P 0.75, R 0.6, F1 0.667).
- [ ] NLU system organization; English syntax outline (word classes, phrases, sentence types, subcategorization).
- [ ] Word relations; thematic roles; KR schemes; logical form; MT approaches and Vauquois triangle; NLIDB and SQL example.
- [ ] CFG and parse tree; top-down trace; shift-reduce trace; chart parsing; morphology; lexicon features; ATN.
- [ ] Auxiliary order; movement and GAP feature; yes/no and wh-questions; minimal attachment, right association; garden path; Marcus parser.
- [ ] Bigram (1/9); smoothing; Viterbi (fish/N swim/V); PCFG (0.063); best-first parsing; logical form; Lesk (BANK1).

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Natural Language Processing: A Paninian Perspective | Akshar Bharati, Vineet Chaitanya, Rajeev Sangal | PHI Learning | [WorldCat](https://search.worldcat.org/search?q=Natural+Language+Processing+A+Paninian+Perspective) |
| 2 | Natural Language Understanding | James Allen | Pearson Education | [WorldCat](https://search.worldcat.org/search?q=Natural+Language+Understanding+James+Allen) |
| 3 | Speech and Language Processing | Daniel Jurafsky, James H. Martin | Pearson Education | [WorldCat](https://search.worldcat.org/search?q=Speech+and+Language+Processing+Jurafsky+Martin) |
| 4 | Natural Language Processing and Knowledge Representation: Language for Knowledge and Knowledge for Language | Łucja M. Iwańska, Stuart C. Shapiro (eds.) | AAAI Press / MIT Press (2000) | [WorldCat](https://search.worldcat.org/search?q=Natural+Language+Processing+and+Knowledge+Representation+Iwanska+Shapiro) |
| 5 | Language as a Cognitive Process, Vol. 1: Syntax | Terry Winograd | Addison-Wesley | [WorldCat](https://search.worldcat.org/search?q=Language+as+a+Cognitive+Process+Winograd) |

**Syllabus source:** [AKTU Open Elective-III and IV syllabus for B.Tech 8th semester, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf)

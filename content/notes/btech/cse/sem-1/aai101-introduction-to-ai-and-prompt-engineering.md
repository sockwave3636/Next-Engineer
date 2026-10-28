---
program: btech
branches: [all]
semester: 1
code: AAI101
name: Introduction to AI and Prompt Engineering
credits: 2
ltp: 2-0-0
scheme: AKTU B.Tech 1st year, 2026-27 onwards
syllabusSource: https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf
units:
  - Introduction to Artificial Intelligence
  - Core Machine Learning and Deep Learning Concepts
  - Generative AI and Large Language Models
  - AI Across Engineering Domains and Ethics
  - Prompt Engineering
---

# AAI101 Introduction to AI and Prompt Engineering: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. This is a first-year course common to all branches. The same course is taught as AAI201 in semester 2 for the other group of students. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: ideas explained simply, with comparison tables.
3. **Solved examples**: the small numericals and worked prompts examiners can set (confusion matrix, MAE, KNN, Naive Bayes, K-means, a neuron, CNN output size, prompt rewrites).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (2 hours):** Unit 1 (definition, history, types of AI, AI vs ML vs DL, learning types, data and preprocessing) and Unit 2 (KNN, Naive Bayes, K-means, metrics, neural networks, CNN, NLP). Practise the confusion matrix numerical.
- **Afternoon (2 hours):** Unit 3 (how LLMs work, tokens, context window, temperature, hallucination, bias, academic integrity) and Unit 4 (AI in each engineering branch, ethics).
- **Evening (2 hours):** Unit 5 (prompt principles, zero-shot, few-shot, chain-of-thought, role prompts, domain prompts), then the "Last-hour checklist".
- **In the exam:** give a definition, a diagram or table, and one real example for every answer. For prompt questions, write the weak prompt and the improved prompt side by side.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit. Internal assessment carries another 30 marks.

---

## Unit 1: Introduction to Artificial Intelligence

### 2-mark definitions

- **Artificial intelligence (AI):** the field of building computer systems that do tasks that normally need human intelligence, such as understanding language, recognising images, reasoning, planning and learning.
- **Turing test:** proposed by Alan Turing (1950). A machine passes if a human judge, chatting by text, cannot reliably tell it from a human.
- **Machine learning (ML):** a branch of AI in which systems learn patterns from data instead of being given explicit rules.
- **Deep learning (DL):** a branch of ML that uses neural networks with many layers to learn features directly from raw data (images, audio, text).
- **Narrow AI (weak AI):** AI built for one task, such as a chess engine, spam filter or face unlock. All AI in use today is narrow.
- **General AI (AGI):** hypothetical AI with human-level ability across any intellectual task.
- **Super AI (ASI):** hypothetical AI that is far smarter than humans in every field.
- **Dataset:** a collection of examples. **Features** are the input variables; the **label** (target) is the answer to be predicted.
- **Data preprocessing:** cleaning and preparing data before training: handling missing values, removing duplicates, encoding categories, scaling, and splitting into training and test sets.

### Core concepts

**History (milestones):**
- **1950:** Turing's paper "Computing Machinery and Intelligence" and the Turing test.
- **1956:** the Dartmouth workshop; John McCarthy coins the term "artificial intelligence".
- **1960s to 1980s:** rule-based expert systems (MYCIN for medical diagnosis); AI "winters" when funding fell after promises were not met.
- **1997:** IBM Deep Blue beats world chess champion Garry Kasparov.
- **2012:** AlexNet, a deep CNN trained on GPUs, wins the ImageNet image-recognition contest; the deep learning boom begins.
- **2016:** DeepMind's AlphaGo beats Lee Sedol at Go.
- **2017:** the Transformer architecture ("Attention Is All You Need") is published.
- **2022 onwards:** ChatGPT brings large language models to the public, followed by Gemini, Claude, Llama and others.

**AI vs ML vs DL:**

| Feature | AI | ML | DL |
|---|---|---|---|
| Scope | Widest: any intelligent behaviour | Subset of AI: learning from data | Subset of ML: deep neural networks |
| Rules | Can be hand-written | Learned from data | Learned from data |
| Features | Designed by people | Often designed by people | Learned automatically |
| Data needed | Little to large | Moderate | Very large |
| Hardware | CPU | CPU | GPU or TPU |
| Example | Chess program, expert system | Spam filter, house price prediction | Face recognition, ChatGPT |

**Types of learning:**

| Type | Data | Goal | Examples |
|---|---|---|---|
| Supervised | Labelled (input with correct answer) | Predict labels: **classification** (categories) or **regression** (numbers) | Spam detection, price prediction |
| Unsupervised | Unlabelled | Find structure: **clustering**, dimensionality reduction | Customer segments, topic grouping |
| Reinforcement | Rewards from an environment | Learn actions that maximise total reward | Game playing, robot walking, self-driving |

**Role of data:** "garbage in, garbage out". More, cleaner and more representative data gives a better model. Data is usually split into a **training set** (to learn, about 70% to 80%) and a **test set** (to check, about 20% to 30%).

**Data visualisation:** charts reveal patterns and problems before training: histograms (distribution), scatter plots (relationship between two features), bar charts (category counts), box plots (outliers), heat maps (correlation).

**Preprocessing steps:**
1. Collect data.
2. Clean: fill or remove missing values, remove duplicates, fix errors.
3. Encode categories as numbers (label or one-hot encoding).
4. Scale features (min-max normalisation to 0 to 1, or standardisation to mean 0 and standard deviation 1).
5. Split into training and test sets.

### Key points to remember

- Turing test 1950; the term "AI" 1956 (McCarthy, Dartmouth).
- AI ⊃ ML ⊃ DL.
- Narrow AI exists today; AGI and ASI are hypothetical.
- Supervised (labels), unsupervised (no labels), reinforcement (rewards).
- Preprocess: clean, encode, scale, split.

### Important questions

1. Define AI. Trace the history of AI from the Turing test to ChatGPT.
2. Differentiate narrow, general and super AI with examples.
3. Compare AI, ML and DL with a diagram and examples.
4. Explain supervised, unsupervised and reinforcement learning with examples.
5. Explain the role of data, data visualisation and preprocessing in AI.

---

## Unit 2: Core Machine Learning and Deep Learning Concepts

### 2-mark definitions

- **KNN (k-nearest neighbours):** a supervised method that classifies a new point by the majority label of its k closest training points (usually by Euclidean distance). It has no training phase ("lazy learner").
- **Naive Bayes:** a classifier based on Bayes' theorem, P(class | data) = P(data | class) × P(class)/P(data), which "naively" assumes features are independent. Fast and good for text (spam filtering).
- **K-means:** an unsupervised method that groups data into k clusters by repeatedly assigning points to the nearest centroid and moving each centroid to the mean of its points.
- **Confusion matrix:** a table of true positives (TP), false positives (FP), false negatives (FN) and true negatives (TN) for a classifier.
- **Accuracy:** (TP + TN)/total. **Precision:** TP/(TP + FP), how many predicted positives are right. **Recall:** TP/(TP + FN), how many actual positives were found. **F1 score:** 2PR/(P + R).
- **MAE (mean absolute error):** the average of |actual − predicted| for a regression model.
- **Overfitting:** the model learns the training data, noise included, too well and does badly on new data. **Underfitting:** the model is too simple to learn the pattern.
- **Artificial neuron (perceptron):** computes a weighted sum of inputs plus a bias, z = Σwᵢxᵢ + b, then applies an **activation function** (step, sigmoid, ReLU).
- **CNN (convolutional neural network):** a deep network for images that uses convolution filters to detect local features (edges, shapes) and pooling to reduce size.
- **NLP (natural language processing):** AI that understands and generates human language (translation, chatbots, sentiment analysis).

### Core concepts

**Neural network:**
- Layers: **input layer** (features), **hidden layers** (learn intermediate features), **output layer** (prediction).
- **Training:** forward pass gives a prediction; a **loss function** measures the error; **backpropagation** computes how each weight affects the loss; **gradient descent** adjusts the weights to reduce it. Repeated over many **epochs**.
- **Activation functions:** sigmoid (0 to 1), tanh (−1 to 1), ReLU (max(0, z), most used in hidden layers), softmax (probabilities over classes at the output).

**Why deep learning needs GPUs:** training is mostly huge matrix multiplications, which can run in parallel. A GPU has thousands of small cores and does these far faster than a CPU.

**CNN layers:**
1. **Convolution:** small filters (for example 3 × 3) slide over the image and produce feature maps.
2. **Activation (ReLU).**
3. **Pooling:** max pooling (2 × 2) keeps the largest value in each block, halving width and height.
4. **Fully connected layer** and **softmax** for the final class.
- Output size (no padding) = (input − filter)/stride + 1.

**Computer vision (CV) tasks:** image classification, object detection (bounding boxes, as in YOLO), segmentation, face recognition, OCR.

**NLP tasks:** tokenisation, sentiment analysis, named-entity recognition, machine translation, summarisation, question answering, chatbots.

**Classification metrics, when to use which:**
- Accuracy can mislead when classes are unbalanced (99% of emails are not spam).
- **Precision matters** when false alarms are costly (spam filter marking real mail as spam).
- **Recall matters** when missing a positive is costly (disease screening, fraud).

### Solved examples

**Example 1 (confusion matrix).** TP = 40, FP = 10, FN = 20, TN = 30.
- Accuracy = 70/100 = **0.70**.
- Precision = 40/50 = **0.80**.
- Recall = 40/60 = **0.667**.
- F1 = 2 × 0.8 × 0.667/(0.8 + 0.667) = **0.727**.

**Example 2 (MAE).** Actual [3, 5, 2, 7], predicted [2.5, 5, 4, 8]. Errors 0.5, 0, 2, 1; MAE = 3.5/4 = **0.875**.

**Example 3 (KNN, k = 3).** Training points: A at (1, 1) and (2, 1); B at (4, 4), (5, 4) and (4, 5). Classify (2, 2).
- Distances: (2, 1) = 1.00, (1, 1) = 1.41, (4, 4) = 2.83, (5, 4) = 3.61, (4, 5) = 3.61.
- Three nearest: A, A, B, so the class is **A**.

**Example 4 (Naive Bayes).** 40% of emails are spam. The word "offer" appears in 60% of spam and 10% of normal mail. Find P(spam | "offer").
- P(spam | offer) = 0.4 × 0.6/(0.4 × 0.6 + 0.6 × 0.1) = 0.24/0.30 = **0.8**.

**Example 5 (K-means, k = 2).** Points 1, 2, 3, 8, 9, 10; starting centroids 1 and 10.
- Assign: {1, 2, 3} to 1; {8, 9, 10} to 10.
- New centroids: **2** and **9**. Assigning again gives the same clusters, so it has converged.

**Example 6 (neuron).** x = [1, 0.5], w = [0.4, 0.6], b = −0.5.
- z = 0.4 + 0.3 − 0.5 = **0.2**. Step output = **1**; sigmoid output = 1/(1 + e^(−0.2)) = **0.55**.

**Example 7 (CNN size).** A 32 × 32 image with a 3 × 3 filter, stride 1, no padding gives (32 − 3)/1 + 1 = **30 × 30**; 2 × 2 max pooling then gives **15 × 15**.

### Key points to remember

- KNN: majority of k nearest; Naive Bayes: Bayes' theorem with independence; K-means: assign and update centroids.
- Accuracy, precision TP/(TP + FP), recall TP/(TP + FN), F1 = 2PR/(P + R); MAE for regression.
- Neuron z = Σwx + b, then activation; training = forward pass, loss, backpropagation, gradient descent.
- CNN = convolution + ReLU + pooling + fully connected; output (n − f)/s + 1.
- GPUs run the matrix maths in parallel.

### Important questions

1. Explain KNN with an example. How is k chosen?
2. Explain the Naive Bayes classifier and K-means clustering with examples.
3. Explain the confusion matrix and accuracy, precision, recall, F1 and MAE with a numerical.
4. Explain the structure and training of a neural network. Why does deep learning need GPUs?
5. Explain CNN layers and their role in computer vision. List NLP applications.

---

## Unit 3: Generative AI and Large Language Models

### 2-mark definitions

- **Generative AI (GenAI):** AI that creates new content (text, images, audio, video, code) similar to the data it learned from.
- **Large language model (LLM):** a very large neural network (usually a Transformer) trained on huge amounts of text to predict the next token. Examples: GPT (OpenAI, used in ChatGPT), Gemini (Google), Claude (Anthropic), Llama (Meta, open weights).
- **Token:** the unit of text an LLM reads and writes: a word, part of a word or a symbol. In English, 1,000 tokens are roughly 750 words.
- **Context window:** the maximum number of tokens (prompt plus reply) the model can consider at once. Text beyond it is not seen.
- **Temperature:** a setting that controls randomness. Low (0 to 0.3) gives focused, repeatable answers (facts, code); high (0.8 to 1) gives varied, creative answers (stories, brainstorming).
- **Multimodal model:** a model that handles more than one type of input or output, such as text and images together.
- **Hallucination:** a confident but false or made-up answer from an AI model, such as a fake reference or wrong fact.
- **Knowledge cutoff:** the date after which the model's training data stops, so it does not know later events unless given tools such as web search.
- **Bias:** unfair or skewed output caused by imbalances in the training data or design.

### Core concepts

**How an LLM is built (concept):**
1. **Pre-training:** the model reads a huge amount of text and learns to predict the next token. This teaches grammar, facts and reasoning patterns.
2. **Fine-tuning:** further training on examples of good instructions and answers.
3. **Alignment (for example RLHF, reinforcement learning from human feedback):** people rate answers and the model is trained to prefer helpful, honest and safe ones.
4. **Inference:** at use time, the model generates a reply one token at a time, each chosen from a probability distribution (shaped by temperature).
- The **Transformer** uses **self-attention**, which lets each token weigh how relevant every other token is.

**Image generation:** diffusion models (such as Stable Diffusion and DALL-E) start from random noise and remove it step by step, guided by the text prompt, until an image forms.

**Limitations and risks:**

| Problem | Cause | What to do |
|---|---|---|
| Hallucination | Model predicts plausible text, not checked facts | Verify with reliable sources; ask for sources and check them |
| Knowledge cutoff | Training data ends at a date | Give current information in the prompt or use search tools |
| Bias | Imbalanced or prejudiced training data | Review outputs critically; use diverse data and testing |
| Privacy | Prompts may be stored | Never paste passwords, personal or confidential data |
| Context limit | Finite context window | Summarise or split long documents |

**Academic integrity:**
- Use AI to understand, brainstorm, debug and practise, not to submit its work as your own.
- Follow your college and teacher's rules; say when and how you used AI.
- Check every fact, number and reference; you are responsible for what you submit.
- Do not use AI in exams or assessments where it is not allowed.

### Solved examples

**Example 1 (tokens).** A 1,500-word report is about 1,500/0.75 = **2,000 tokens**. If the model's context window is 8,000 tokens, the report, the instructions and the reply must together fit within 8,000.

**Example 2 (temperature choice).**
- "Write a Python function to compute GCD": low temperature (about 0.2), because you want one correct answer.
- "Suggest ten names for a college tech fest": higher temperature (about 0.9), because you want variety.

**Example 3 (spotting hallucination).** A chatbot cites "Sharma, R. (2019), Journal of Quantum Bridges, vol. 12". Before using it, search the journal and article; if neither exists, it is a hallucinated reference.

### Key points to remember

- LLM = Transformer trained to predict the next token; pre-training, fine-tuning, alignment.
- 1,000 tokens ≈ 750 words; context window = prompt + reply.
- Low temperature for facts and code; high for creativity.
- Hallucination, cutoff, bias and privacy are the main risks; always verify.
- Diffusion models generate images from noise.

### Important questions

1. What is generative AI? Explain how an LLM is trained (pre-training, fine-tuning, RLHF).
2. Explain tokens, context window and temperature with examples.
3. Compare popular LLMs (ChatGPT, Gemini, Claude, Llama). What is a multimodal model?
4. What is hallucination? Discuss knowledge cutoff and bias, and how to handle them.
5. Discuss the responsible use of AI tools by students and academic integrity.

---

## Unit 4: AI Across Engineering Domains and Ethics

### 2-mark definitions

- **Predictive maintenance:** using sensor data and ML to predict when a machine will fail so it can be serviced before breakdown.
- **Digital twin:** a live virtual model of a physical system (machine, plant, city) kept in step with sensor data, used for monitoring and "what-if" tests.
- **Computer vision inspection:** cameras with AI that detect defects (cracks, scratches, missing parts) on production lines.
- **Smart grid:** an electricity network that uses sensors, communication and AI to balance supply and demand and integrate renewable energy.
- **Explainable AI (XAI):** methods that show why a model made a decision, so people can trust and check it.
- **AI ethics:** principles for building and using AI responsibly: fairness, transparency, accountability, privacy, safety and human oversight.

### Core concepts

**AI in each branch:**

| Branch | Applications |
|---|---|
| Computer science and IT | Code assistants, cybersecurity threat detection, recommendation systems, search |
| Electronics and communication | Signal and image processing, smart sensors, edge AI chips, 5G network optimisation |
| Electrical | Load forecasting, smart grids, fault detection, solar and wind power prediction, EV battery management |
| Mechanical | Predictive maintenance, generative design, robotics, quality inspection, digital twins |
| Civil | Structural health monitoring, crack detection with drones, traffic prediction, smart cities, construction scheduling |
| Chemical | Process optimisation, materials and drug discovery, safety monitoring |
| Biotechnology | Protein structure prediction (AlphaFold), genomics, medical imaging diagnosis |

**Ethical principles:**
1. **Fairness:** no unjust discrimination by gender, caste, religion or region.
2. **Transparency and explainability:** people should know when AI is used and why it decided something.
3. **Accountability:** a human or organisation stays responsible for the outcome.
4. **Privacy:** collect only needed data, with consent, and protect it (India's Digital Personal Data Protection Act, 2023).
5. **Safety and reliability:** test thoroughly, especially in medicine, vehicles and infrastructure.
6. **Human oversight:** keep a human in the loop for high-stakes decisions.

**Societal concerns:** job changes (automation of routine tasks, new AI jobs), deepfakes and misinformation, surveillance, energy use of large models, and the digital divide.

### Key points to remember

- Every branch uses AI: one example per branch is enough for a short answer.
- Predictive maintenance, digital twin, CV inspection and smart grid are the common engineering uses.
- Ethics: fairness, transparency, accountability, privacy, safety, human oversight.
- DPDP Act 2023 governs personal data in India.

### Important questions

1. Discuss applications of AI in your branch of engineering with examples.
2. Explain predictive maintenance and digital twins.
3. Explain AI in smart grids and in civil engineering (structural health monitoring).
4. What are the ethical principles of AI? Discuss bias and fairness with an example.
5. Discuss the impact of AI on jobs and society, including deepfakes and privacy.

---

## Unit 5: Prompt Engineering

### 2-mark definitions

- **Prompt:** the input text (instructions, context, examples, questions) given to a generative AI model.
- **Prompt engineering:** the skill of writing and refining prompts to get accurate, useful and well-formatted outputs.
- **Zero-shot prompting:** asking the model to do a task with no examples.
- **Few-shot prompting:** giving a few input-output examples in the prompt so the model follows the pattern.
- **Chain-of-thought (CoT) prompting:** asking the model to reason step by step before the final answer, which helps in maths and logic problems.
- **Role prompting:** telling the model to act as a particular expert or persona ("You are a structural engineer…").
- **Iterative refinement:** improving the prompt in rounds based on the output.

### Core concepts

**Principles of a good prompt (remember "CRAFT": context, role, action, format, tone):**
1. **Be clear and specific:** say exactly what you want.
2. **Give context:** audience, purpose, background, data.
3. **Set the role:** an expert view improves focus.
4. **Specify the format:** table, bullet points, word limit, code language.
5. **Give examples** (few-shot) when the pattern matters.
6. **Add constraints:** what to avoid, level of detail, units.
7. **Ask for reasoning or checks:** "show steps", "list assumptions".
8. **Iterate:** refine based on the output.

**Prompt types:**

| Technique | When to use | Example |
|---|---|---|
| Zero-shot | Simple, common tasks | "Translate 'good morning' into Hindi." |
| Few-shot | Specific pattern or format | Two labelled reviews, then a new one to label |
| Chain-of-thought | Maths, logic, multi-step | "Solve step by step, then give the final answer." |
| Role | Expert tone or depth | "You are a senior Python developer. Review this code." |
| Task-specific | Summaries, emails, code, quizzes | "Summarise in 5 bullets for a first-year student." |

**Domain prompts (examples):**
- **Coding:** "You are a C tutor. Explain this segmentation fault in simple words and show the corrected code with comments."
- **Electrical:** "Explain power factor correction to a first-year student with one solved numerical; use SI units."
- **Civil:** "List the checks for a reinforced concrete beam design as a numbered checklist with IS 456 clause numbers."
- **Study:** "Make 10 multiple-choice questions on Fourier series with answers and one-line explanations."

**Tools:** chat assistants (ChatGPT, Gemini, Claude, Microsoft Copilot), code assistants (GitHub Copilot), image generators (DALL-E, Midjourney, Stable Diffusion), and AI features in search, office software and design tools.

### Solved examples (prompt rewrites)

**Example 1 (vague to specific).**
- Weak: "Tell me about transformers."
- Better: "Explain the working of a single-phase electrical transformer for a first-year B.Tech student in about 200 words. Include the EMF equation and one solved numerical, and end with three key points."

**Example 2 (few-shot classification).**

```text
Classify the sentiment as Positive or Negative.
Review: "The lab equipment worked perfectly." -> Positive
Review: "The projector kept failing." -> Negative
Review: "The workshop was well organised and useful." ->
```

Expected output: Positive.

**Example 3 (chain-of-thought).** "A bus goes 60 km to a town at 30 km/h and returns at 60 km/h. Find the average speed for the round trip. Think step by step, then give the answer." The steps are: total distance 120 km; time 2 h + 1 h = 3 h; average speed **40 km/h**. Without step-by-step reasoning a model (or a student) often gives the wrong answer 45 km/h by averaging the two speeds.

**Example 4 (role + format).** "You are an interviewer for a software internship. Ask me five technical questions on arrays and linked lists, one at a time, and give feedback after each answer."

### Key points to remember

- Good prompt = clear task + context + role + format + constraints + examples.
- Zero-shot (no examples), few-shot (examples), chain-of-thought (step by step), role (persona).
- Iterate and verify; never share private data in prompts.
- Write weak and improved prompts side by side in the exam.

### Important questions

1. What is prompt engineering? Explain the principles of writing effective prompts.
2. Explain zero-shot, few-shot and chain-of-thought prompting with examples.
3. Explain role prompting and task-specific prompts with examples.
4. Write prompts for domain tasks in your branch (coding, design, report writing) and explain why they work.
5. List common AI tools and explain how to use them responsibly in study and work.

---

## Last-hour checklist

- [ ] AI definition; history (1950, 1956, 1997, 2012, 2016, 2017, 2022); narrow, general, super; AI vs ML vs DL table; learning types table; preprocessing steps.
- [ ] KNN (class A); Naive Bayes 0.8; K-means centroids 2 and 9; confusion matrix 0.70, 0.80, 0.667, 0.727; MAE 0.875; neuron 0.2 and 0.55; CNN 30 × 30 → 15 × 15; GPUs.
- [ ] LLM training stages; Transformer and attention; tokens (2,000 for 1,500 words); context window; temperature; multimodal; diffusion; risks table; academic integrity.
- [ ] Branch applications table; predictive maintenance; digital twin; smart grid; ethics principles; DPDP Act 2023; deepfakes and jobs.
- [ ] Prompt principles (CRAFT); techniques table; weak vs better prompts; few-shot example; chain-of-thought (40 km/h, not 45); domain prompts; tools.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | The Quick Guide to Prompt Engineering | Ian Khan | Wiley | [WorldCat](https://search.worldcat.org/search?q=The+Quick+Guide+to+Prompt+Engineering+Ian+Khan) |
| 2 | AI: Its Nature and Future | Margaret A. Boden | Oxford University Press | [WorldCat](https://search.worldcat.org/search?q=AI+Its+Nature+and+Future+Boden) |
| 3 | Human Compatible: Artificial Intelligence and the Problem of Control | Stuart Russell | Viking / Penguin | [WorldCat](https://search.worldcat.org/search?q=Human+Compatible+Stuart+Russell) |
| 4 | The Age of AI: And Our Human Future | Henry A. Kissinger, Eric Schmidt, Daniel Huttenlocher | Little, Brown | [WorldCat](https://search.worldcat.org/search?q=The+Age+of+AI+Kissinger+Schmidt+Huttenlocher) |
| 5 | Prompt Engineering for Generative AI | James Phoenix, Mike Taylor | O'Reilly | [WorldCat](https://search.worldcat.org/search?q=Prompt+Engineering+for+Generative+AI+Phoenix+Taylor) |

**Syllabus source:** [AKTU B.Tech 1st year CSE stream course structure and syllabus, 2026-27 (official PDF)](https://fms.aktu.ac.in/Resources/aktu/pdf/syllabus/Syllabus2627/CSE_Stream_AKTU_UG_B_Tech__Course_Structure_Syllabus_Evaluation_Scheme_Hyperlinked.pdf)

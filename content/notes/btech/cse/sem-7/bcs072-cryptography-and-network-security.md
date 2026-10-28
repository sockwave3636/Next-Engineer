---
program: btech
branches: [cse, it]
semester: 7
code: BCS072
name: Cryptography and Network Security
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Departmental Elective-IV, 2025-26 onwards
syllabusSource: https://bit.ac.in/PDF/bit_cse_B.Tech.%20CSE%20Syllabus%204th%20Year%202025-26.pdf
units:
  - Classical Encryption and Block Ciphers
  - Number Theory, AES and Public Key Cryptography
  - Message Authentication, Hash Functions and Digital Signatures
  - Key Management and Authentication Applications
  - IP Security, Web Security and System Security
---

# BCS072 Cryptography and Network Security: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: algorithms, structures and comparison tables.
3. **Solved examples**: the numericals that appear every year (Caesar, Vigenère, Playfair, Hill, rail fence, Euclid and extended Euclid, Fermat and Euler, CRT, Miller-Rabin, RSA, Diffie-Hellman, ElGamal, GF(2^8) multiplication, birthday attack).
4. **Formulas / key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (security attacks, services and mechanisms, classical ciphers, steganography, Feistel, DES, modes, 3DES) and Unit 2 (groups, fields, modular arithmetic, Euclid, Fermat, Euler, CRT, primality, AES, RSA).
- **Afternoon (3 hours):** Unit 3 (MAC, hash functions, birthday attack, SHA-512, digital signatures, ElGamal, DSS) and Unit 4 (key distribution, Diffie-Hellman, X.509, PKI, Kerberos, PGP, S/MIME).
- **Evening (2 hours):** Unit 5 (IPSec, AH, ESP, security associations, IKE, SSL/TLS, SET, intruders, IDS, viruses, firewalls). Then the "Last-hour checklist".
- **In the exam:** every numerical must show each modular step; draw the Feistel round, DES round, AES round, Kerberos message flow and IPSec packet formats.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Classical Encryption and Block Ciphers

### 2-mark definitions

- **Cryptography:** the science of keeping messages secure by transforming them so only authorized parties can read them.
- **Cryptanalysis:** the study of breaking ciphers, recovering plaintext or keys without being given the key.
- **Plaintext / ciphertext:** the original readable message / the scrambled output of encryption.
- **Symmetric (conventional) encryption:** the same secret key is used to encrypt and decrypt.
- **Passive attack:** an attacker only observes (release of message contents, traffic analysis); hard to detect, prevented by encryption.
- **Active attack:** an attacker modifies data or creates false data (masquerade, replay, modification of messages, denial of service); hard to prevent, detected and recovered from.
- **Security services (X.800):** authentication, access control, data confidentiality, data integrity, non-repudiation (plus availability).
- **Security mechanisms:** encipherment, digital signature, access control, data integrity, authentication exchange, traffic padding, routing control, notarization.
- **Substitution cipher:** each letter is replaced by another letter or symbol (Caesar, Playfair, Vigenère, Hill).
- **Transposition cipher:** the letters are rearranged without being changed (rail fence, columnar).
- **Steganography:** hiding the existence of a message, for example in the least significant bits of an image.
- **Stream cipher:** encrypts one bit or byte at a time using a keystream (RC4, one-time pad).
- **Block cipher:** encrypts a fixed-size block of plaintext (64 or 128 bits) at a time (DES, AES).
- **Confusion (Shannon):** makes the relationship between the key and the ciphertext as complex as possible (achieved by substitution).
- **Diffusion (Shannon):** spreads the influence of each plaintext bit over many ciphertext bits, hiding statistical patterns (achieved by permutation).
- **Avalanche effect:** a change of one bit in the plaintext or key changes about half of the ciphertext bits.

### Core concepts

**Types of cryptanalytic attacks (by what the attacker has)**

| Attack | Attacker knows |
|---|---|
| Ciphertext only | Only ciphertext |
| Known plaintext | Some plaintext-ciphertext pairs |
| Chosen plaintext | Can encrypt plaintexts of their choice |
| Chosen ciphertext | Can decrypt ciphertexts of their choice |
| Chosen text | Both of the above |

Also brute force (try all keys). A cipher is **unconditionally secure** if the ciphertext reveals nothing even with unlimited computing (one-time pad), and **computationally secure** if breaking it costs more than the information is worth or takes longer than its useful life.

**Classical ciphers**

| Cipher | Idea | Weakness |
|---|---|---|
| Caesar | C = (P + k) mod 26 | Only 25 keys, brute force |
| Monoalphabetic | Any permutation of the alphabet (26! keys) | Letter frequency analysis |
| Playfair | 5×5 matrix from a keyword, encrypts digraphs | Digraph frequency analysis |
| Hill | C = K·P mod 26 with an invertible matrix | Known plaintext attack (linear) |
| Vigenère | C_i = (P_i + K_(i mod m)) mod 26 | Kasiski test finds key length |
| One-time pad | Random key as long as the message, used once | Key distribution impractical |
| Rail fence | Write in zigzag rows, read row by row | Easy to try depths |
| Columnar transposition | Write in rows, read columns in key order | Anagramming; double transposition is stronger |

**Playfair rules:** fill a 5×5 matrix with the keyword then remaining letters (I and J share a cell). Split plaintext into pairs, inserting X between repeated letters and padding with X. Same row: take letters to the right. Same column: take letters below. Otherwise (rectangle): take the letter in the same row at the other's column.

**Stream vs block cipher**

| Stream | Block |
|---|---|
| Bit or byte at a time | Fixed block (64/128 bits) |
| Keystream XOR plaintext | Many rounds of substitution and permutation |
| Fast, little error propagation | Slower, more diffusion |
| RC4, A5/1, ChaCha20 | DES, AES, Blowfish |

**Feistel cipher structure**

- Split the block into halves L0 and R0. For each round i: L_i = R_(i−1), R_i = L_(i−1) XOR F(R_(i−1), K_i).
- Decryption uses the same structure with subkeys in reverse order, so F need not be invertible.
- Design parameters: block size, key size, number of rounds, subkey generation, round function F, fast software and ease of analysis.

**DES (Data Encryption Standard)**

- 64-bit block, 64-bit key of which 56 bits are used (8 parity bits), 16 Feistel rounds, 48-bit subkeys.
- Steps: initial permutation (IP) → 16 rounds → 32-bit swap → inverse initial permutation (IP⁻¹).
- Round function F(R, K): expansion E (32 → 48 bits) → XOR with 48-bit subkey → 8 S-boxes (each 6 → 4 bits, giving 32 bits) → permutation P.
- S-box lookup: for 6 input bits b1…b6, row = b1b6 (outer bits), column = b2b3b4b5 (middle four bits).
- Key schedule: PC-1 (64 → 56) → split into two 28-bit halves → left circular shift by 1 or 2 bits per round → PC-2 (56 → 48).
- **Strength of DES:** the 56-bit key gives 2^56 ≈ 7.2 × 10^16 keys; broken by brute force in 1998 (EFF's Deep Crack, 56 hours). S-boxes resist differential cryptanalysis (designers knew of it). Weak keys exist (4 weak keys, 6 pairs of semi-weak keys).

**Differential cryptanalysis (idea):** study how differences in plaintext pairs (ΔP) propagate to differences in ciphertext (ΔC) through rounds, with certain differences occurring with high probability; this narrows down subkey bits. Against full DES it needs 2^47 chosen plaintexts. **Linear cryptanalysis** (Matsui) finds linear approximations and needs 2^43 known plaintexts.

**Block cipher modes of operation**

| Mode | How it works | Notes |
|---|---|---|
| ECB (Electronic Codebook) | Each block encrypted independently: C_i = E(K, P_i) | Same plaintext block gives same ciphertext; only for short data like keys |
| CBC (Cipher Block Chaining) | C_i = E(K, P_i XOR C_(i−1)), C_0 = IV | Hides patterns; error affects 2 blocks; sequential |
| CFB (Cipher Feedback) | Turns block cipher into a self-synchronizing stream: C_i = P_i XOR MSB_s(E(K, shift register)) | Stream use, s-bit units |
| OFB (Output Feedback) | Keystream O_i = E(K, O_(i−1)); C_i = P_i XOR O_i | No error propagation; keystream precomputable |
| CTR (Counter) | C_i = P_i XOR E(K, Nonce + i) | Parallel, random access; most used today |

**Triple DES (3DES):** C = E(K3, D(K2, E(K1, P))). With three keys the effective key is 168 bits (112-bit security against meet-in-the-middle); with two keys (K1 = K3) 112 bits. Encrypt-Decrypt-Encrypt keeps backward compatibility: if K1 = K2 = K3, it becomes single DES. Double DES is not used because of the meet-in-the-middle attack (only about 2^57 work instead of 2^112).

### Solved examples

**Example 1: Caesar.** Encrypt HELLO with k = 3: H→K, E→H, L→O, L→O, O→R gives **KHOOR**.

**Example 2: Vigenère.** Plaintext ATTACKATDAWN, key LEMON (repeated LEMONLEMONLE). A+L = 0+11 = L, T+E = 19+4 = 23 = X, T+M = 19+12 = 31 mod 26 = 5 = F, and so on. Ciphertext **LXFOPVEFRNHR**.

**Example 3: Playfair.** Key MONARCHY, plaintext "instruments".

| | | | | |
|---|---|---|---|---|
| M | O | N | A | R |
| C | H | Y | B | D |
| E | F | G | I/J | K |
| L | P | Q | S | T |
| U | V | W | X | Z |

Pairs: IN ST RU ME NT SX.
- IN: rectangle, I is row 3 col 4, N is row 1 col 3, giving GA.
- ST: same row 4, shift right, giving TL.
- RU: rectangle, giving MZ.
- ME: same column 1, shift down, giving CL.
- NT: rectangle, giving RQ.
- SX: same column 4, shift down, giving XA.

Ciphertext **GATLMZCLRQXA**.

**Example 4: Hill cipher.** K = [[3, 3], [2, 5]], plaintext HI = (7, 8).
- C1 = 3·7 + 3·8 = 45 mod 26 = 19 = T; C2 = 2·7 + 5·8 = 54 mod 26 = 2 = C. Ciphertext **TC**.
- Decryption: det K = 15 − 6 = 9; 9⁻¹ mod 26 = 3 (since 27 mod 26 = 1). adj K = [[5, −3], [−2, 3]] = [[5, 23], [24, 3]]. K⁻¹ = 3 · adj mod 26 = [[15, 17], [20, 9]].
- Check: 15·19 + 17·2 = 319 mod 26 = 7 = H; 20·19 + 9·2 = 398 mod 26 = 8 = I.

**Example 5: Rail fence, depth 2.** MEETMEAFTERPARTY written in zigzag: row 1 takes letters 1, 3, 5, … = MEMATRAT; row 2 takes letters 2, 4, 6, … = ETEFEPRY. Ciphertext **MEMATRATETEFEPRY**.

**Example 6: DES S-box addressing.** Input to an S-box is 101101. Row = first and last bits 1 and 1 = 11 = 3. Column = middle bits 0110 = 6. Read row 3, column 6 of that S-box to get the 4-bit output.

### Key points to remember

- X.800: 5 services, 8 specific mechanisms; passive vs active attacks.
- Feistel: L_i = R_(i−1), R_i = L_(i−1) ⊕ F(R_(i−1), K_i).
- DES: 64-bit block, 56-bit key, 16 rounds, 48-bit subkeys, 8 S-boxes 6→4, E 32→48.
- Modes: ECB, CBC, CFB, OFB, CTR. ECB leaks patterns; CTR is parallel.
- 3DES = EDE; double DES falls to meet-in-the-middle.

### Important questions

1. Explain security attacks, services and mechanisms with the X.800 model.
2. Explain substitution and transposition techniques with examples (Playfair, Hill, Vigenère, rail fence). Solve a numerical.
3. What is steganography? How is it different from cryptography?
4. Explain block cipher principles, Shannon's confusion and diffusion, and the Feistel structure.
5. Explain DES with a diagram of one round and the key schedule. Discuss the strength of DES and differential cryptanalysis.
6. Explain the block cipher modes of operation. Explain triple DES.

---

## Unit 2: Number Theory, AES and Public Key Cryptography

### 2-mark definitions

- **Group:** a set with a binary operation that is closed, associative, has an identity and inverses; **abelian** if also commutative.
- **Ring:** a set with two operations (addition and multiplication), an abelian group under addition, closed and associative under multiplication, with distributive laws.
- **Field:** a set where addition and multiplication (except by 0) both form abelian groups, so you can add, subtract, multiply and divide; for example GF(p) and GF(2^n).
- **Finite field GF(p):** the integers {0, 1, …, p−1} with arithmetic mod a prime p.
- **Modular arithmetic:** a mod n is the remainder when a is divided by n; a ≡ b (mod n) if n divides (a − b).
- **Multiplicative inverse:** b is the inverse of a mod n if a·b ≡ 1 (mod n); it exists only if gcd(a, n) = 1.
- **Prime number:** an integer greater than 1 whose only divisors are 1 and itself.
- **Relatively prime (coprime):** gcd(a, b) = 1.
- **Euler's totient φ(n):** the number of integers in 1…n−1 that are coprime to n. φ(p) = p − 1 and φ(pq) = (p − 1)(q − 1).
- **Fermat's little theorem:** if p is prime and gcd(a, p) = 1, then a^(p−1) ≡ 1 (mod p).
- **Euler's theorem:** if gcd(a, n) = 1, then a^φ(n) ≡ 1 (mod n).
- **Discrete logarithm:** given a, b and prime p, find x with a^x ≡ b (mod p); believed hard for large p.
- **Primitive root:** a number g whose powers mod p produce all of 1…p−1.
- **Public key cryptosystem:** uses a pair of keys, a public key for encryption or verification and a private key for decryption or signing.

### Core concepts

**Euclid's algorithm:** gcd(a, b) = gcd(b, a mod b), stop when the remainder is 0. **Extended Euclid** also finds x, y with ax + by = gcd(a, b), giving the inverse.

**Chinese Remainder Theorem (CRT):** if m1, m2, …, mk are pairwise coprime, the system x ≡ a_i (mod m_i) has a unique solution mod M = m1·m2·…·mk: x = Σ a_i · M_i · (M_i⁻¹ mod m_i), where M_i = M / m_i. Used to speed up RSA decryption.

**Primality testing**

- Trial division up to √n (slow for big numbers).
- Fermat test: if a^(n−1) ≢ 1 mod n, n is composite; fooled by Carmichael numbers (561).
- **Miller-Rabin:** write n − 1 = 2^k · q with q odd. Pick a. If a^q ≡ 1 mod n, or a^(2^j q) ≡ −1 mod n for some j in 0…k−1, return "inconclusive (maybe prime)"; otherwise "composite". Each round errs with probability at most 1/4.

**AES (Advanced Encryption Standard, Rijndael)**

- Block 128 bits; key 128/192/256 bits with 10/12/14 rounds. Not a Feistel cipher: the whole block is processed each round as a 4×4 byte matrix (the state).
- Round (except the last): **SubBytes** (S-box: inverse in GF(2^8) then affine transform; gives confusion) → **ShiftRows** (row r shifted left by r bytes) → **MixColumns** (each column multiplied by a fixed matrix over GF(2^8); diffusion) → **AddRoundKey** (XOR with round key).
- Initial AddRoundKey before round 1; the final round has no MixColumns.
- Arithmetic is in GF(2^8) with the irreducible polynomial m(x) = x^8 + x^4 + x^3 + x + 1 (0x11B).
- Key expansion: 128-bit key gives 44 words (11 round keys) using RotWord, SubWord and round constants Rcon.

**DES vs AES**

| Feature | DES | AES |
|---|---|---|
| Block | 64 bits | 128 bits |
| Key | 56 bits | 128/192/256 bits |
| Rounds | 16 | 10/12/14 |
| Structure | Feistel | Substitution-permutation network |
| Security | Broken by brute force | No practical attack |
| Year | 1977 | 2001 |

**Principles of public key cryptosystems**

- Each user has a public key PU and private key PR. Confidentiality: encrypt with the receiver's PU, decrypt with their PR. Authentication (signature): encrypt with the sender's PR, verify with their PU. Both: C = E(PU_b, E(PR_a, M)).
- Requirements: easy to generate keys, encrypt and decrypt; infeasible to find PR from PU or M from C and PU. Based on trap-door one-way functions.
- Applications: encryption, digital signatures, key exchange.

**RSA**

- Key generation: choose primes p, q; n = pq; φ(n) = (p − 1)(q − 1); choose e with gcd(e, φ(n)) = 1; d = e⁻¹ mod φ(n). Public key {e, n}, private key {d, n}.
- Encrypt C = M^e mod n; decrypt M = C^d mod n (M less than n).
- Security: depends on the difficulty of factoring n. Attacks: brute force on d, mathematical (factoring), timing attacks (fixed by constant-time exponentiation or blinding), chosen ciphertext attacks (fixed by OAEP padding). Use n of 2048 bits or more.

### Solved examples

**Example 1: Euclid.** gcd(1970, 1066): 1970 = 1·1066 + 904; 1066 = 1·904 + 162; 904 = 5·162 + 94; 162 = 1·94 + 68; 94 = 1·68 + 26; 68 = 2·26 + 16; 26 = 1·16 + 10; 16 = 1·10 + 6; 10 = 1·6 + 4; 6 = 1·4 + 2; 4 = 2·2 + 0. **gcd = 2**.

**Example 2: Extended Euclid, 7⁻¹ mod 160.** 160 = 22·7 + 6; 7 = 1·6 + 1. Back-substitute: 1 = 7 − 6 = 7 − (160 − 22·7) = 23·7 − 160. So **7⁻¹ mod 160 = 23**.

**Example 3: Fermat.** 3^200 mod 13. By Fermat 3^12 ≡ 1. 200 = 16·12 + 8, so 3^200 ≡ 3^8 = 6561 ≡ 6561 − 504·13 = 9. **Answer 9**.

**Example 4: Euler's totient.** φ(35) = φ(5)·φ(7) = 4·6 = 24. φ(100) = 100 · (1 − 1/2)(1 − 1/5) = 40.

**Example 5: CRT.** x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 2 (mod 7). M = 105; M1 = 35, M2 = 21, M3 = 15. Inverses: 35 ≡ 2 mod 3, inverse 2; 21 ≡ 1 mod 5, inverse 1; 15 ≡ 1 mod 7, inverse 1. x = 2·35·2 + 3·21·1 + 2·15·1 = 140 + 63 + 30 = 233 ≡ 233 − 210 = **23** (mod 105).

**Example 6: Miller-Rabin on n = 561, a = 2.** 560 = 2^4 · 35, so k = 4, q = 35. 2^35 mod 561 = 263 (not 1 or 560). Square: 263^2 mod 561 = 166; 166^2 mod 561 = 67; 67^2 mod 561 = 1. We reached 1 without passing through 560 (−1), so **561 is composite** (561 = 3 · 11 · 17), even though it fools the Fermat test.

**Example 7: RSA.** p = 17, q = 11. n = 187, φ = 16 · 10 = 160. Choose e = 7 (gcd(7, 160) = 1). d = 7⁻¹ mod 160 = 23 (Example 2). Public {7, 187}, private {23, 187}.
- Encrypt M = 88: C = 88^7 mod 187. 88^2 = 7744 mod 187 = 77; 88^4 = 77^2 = 5929 mod 187 = 132; 88^7 = 88^4 · 88^2 · 88 = 132 · 77 · 88 mod 187. 132 · 77 = 10164 mod 187 = 66; 66 · 88 = 5808 mod 187 = 11. **C = 11**.
- Decrypt: 11^23 mod 187 = **88**.

**Example 8: Discrete log.** Solve 3^x ≡ 13 (mod 17): 3^1 = 3, 3^2 = 9, 3^3 = 27 ≡ 10, 3^4 = 30 ≡ 13. **x = 4**.

**Example 9: GF(2^8) multiplication (AES).** {57} · {02}: 57 = 0101 0111; shifting left gives 1010 1110 = {AE} (no overflow, so no reduction). And {57} · {83} = {C1} (the standard FIPS-197 example, done by repeated xtime and XOR, reducing by 0x11B whenever bit 8 overflows).

### Formulas

| Item | Formula |
|---|---|
| Inverse exists | gcd(a, n) = 1 |
| Fermat | a^(p−1) ≡ 1 (mod p) |
| Euler | a^φ(n) ≡ 1 (mod n); φ(pq) = (p−1)(q−1) |
| RSA | n = pq, ed ≡ 1 mod φ(n), C = M^e mod n, M = C^d mod n |
| CRT | x = Σ a_i M_i (M_i⁻¹ mod m_i) mod M |
| AES rounds | 10 / 12 / 14 for 128 / 192 / 256-bit keys |

### Important questions

1. Define group, ring and field. Explain finite fields GF(p) and GF(2^n).
2. Explain Euclid's and the extended Euclidean algorithm with an example.
3. State and prove Fermat's and Euler's theorems. Solve numericals.
4. Explain the Chinese Remainder Theorem with an example. Explain primality testing (Miller-Rabin).
5. Explain AES: structure, round functions and key expansion. Compare DES and AES.
6. Explain the principles of public key cryptosystems. Explain RSA with an example and discuss its security.

---

## Unit 3: Message Authentication, Hash Functions and Digital Signatures

### 2-mark definitions

- **Message authentication:** verifying that a message came from the claimed source and was not altered (integrity, sometimes also sequence and timeliness).
- **MAC (Message Authentication Code):** a short fixed-size tag computed from the message and a shared secret key, MAC = C(K, M); the receiver recomputes it to check integrity and authenticity.
- **Hash function:** maps a message of any length to a fixed-length digest h = H(M); has no key.
- **Pre-image resistance (one-way):** given h, it is infeasible to find M with H(M) = h.
- **Second pre-image resistance (weak collision resistance):** given M, infeasible to find M' ≠ M with H(M') = H(M).
- **Collision resistance (strong):** infeasible to find any pair M ≠ M' with H(M) = H(M').
- **Birthday attack:** finding a collision in an n-bit hash needs only about 2^(n/2) tries, not 2^n, based on the birthday paradox.
- **HMAC:** a MAC built from a hash function: HMAC(K, M) = H((K⁺ XOR opad) ‖ H((K⁺ XOR ipad) ‖ M)).
- **Digital signature:** a value computed with the signer's private key over a message (usually its hash), which anyone can verify with the public key; gives authentication, integrity and non-repudiation.
- **DSS (Digital Signature Standard):** the NIST standard (FIPS 186) that specifies the DSA algorithm (and now also RSA and ECDSA signatures).

### Core concepts

**Message authentication functions**

1. **Message encryption:** the ciphertext itself serves as the authenticator (symmetric gives authentication because only the key holders could produce it, if the plaintext has recognizable structure).
2. **MAC:** a keyed checksum appended to the message.
3. **Hash function:** a digest, protected by encryption or a key (HMAC) or signed.

**Requirements for message authentication:** protect against disclosure, traffic analysis, masquerade, content modification, sequence modification, timing modification, source repudiation and destination repudiation.

**MAC vs hash vs digital signature**

| Feature | Hash | MAC | Digital signature |
|---|---|---|---|
| Key | None | Shared secret | Private key to sign, public to verify |
| Integrity | Yes (if digest protected) | Yes | Yes |
| Authentication | No | Yes | Yes |
| Non-repudiation | No | No (both share the key) | Yes |
| Example | SHA-256 | HMAC-SHA256, CMAC | RSA, DSA, ECDSA |

**Requirements of a hash function:** works on any input size, fixed output size, easy to compute, pre-image resistant, second pre-image resistant, collision resistant, output looks random.

**Security of hash functions:** brute force costs 2^n for pre-image and 2^(n/2) for collision (so a 128-bit hash gives only 64-bit collision security; use 256 bits). Cryptanalysis attacks the compression function (MD5 and SHA-1 collisions have been found; SHA-2 and SHA-3 are secure).

**Birthday attack procedure (Yuval):** the attacker prepares 2^(m/2) variations of a genuine message and 2^(m/2) variations of a fraudulent one, finds a pair with the same hash, gets the victim to sign the genuine one, then attaches the signature to the fraudulent one.

**SHA family**

| Algorithm | Digest | Block | Rounds | Status |
|---|---|---|---|---|
| MD5 | 128 | 512 | 64 | Broken |
| SHA-1 | 160 | 512 | 80 | Broken (collision 2017) |
| SHA-256 | 256 | 512 | 64 | Secure |
| SHA-512 | 512 | 1024 | 80 | Secure |
| SHA-3 (Keccak) | 224–512 | Sponge | 24 | Secure, different design |

**SHA-512 steps:** (1) pad the message so length ≡ 896 mod 1024 (a 1 bit then 0s), (2) append the 128-bit length, (3) initialize the eight 64-bit buffers a–h with fixed constants, (4) process each 1024-bit block in 80 rounds using the message schedule W_t and constants K_t, with functions Ch, Maj, Σ0, Σ1, (5) add round output to the buffer; the final buffer is the 512-bit digest.

**Digital signature requirements:** depends on the message; uses information unique to the sender; easy to produce, recognize and verify; infeasible to forge; practical to store.

**ElGamal digital signature**

- Global: prime q, primitive root α. Private X_A (1 < X_A < q − 1), public Y_A = α^X_A mod q.
- Sign m (hash value): choose random K with gcd(K, q − 1) = 1. S1 = α^K mod q. S2 = K⁻¹ (m − X_A · S1) mod (q − 1). Signature (S1, S2).
- Verify: V1 = α^m mod q; V2 = Y_A^S1 · S1^S2 mod q; valid if V1 = V2.

**DSA (Digital Signature Algorithm)**

- Global: prime p (L bits), prime q dividing p − 1 (N bits), g = h^((p−1)/q) mod p. Private x (0 < x < q), public y = g^x mod p.
- Sign: random k (0 < k < q). r = (g^k mod p) mod q. s = k⁻¹ (H(M) + x·r) mod q. Signature (r, s).
- Verify: w = s⁻¹ mod q; u1 = H(M)·w mod q; u2 = r·w mod q; v = (g^u1 · y^u2 mod p) mod q. Valid if v = r.
- **Proof of DSA (why v = r):** since s = k⁻¹(H + xr), k = s⁻¹(H + xr) = w(H + xr) = Hw + xrw = u1 + x·u2 (mod q). Then g^u1 · y^u2 = g^u1 · g^(x·u2) = g^(u1 + x·u2) = g^k (mod p), because g has order q so exponents work mod q. So v = (g^k mod p) mod q = r.

### Solved examples

**Example 1: Birthday paradox.** With 23 people, P(at least two share a birthday) = 1 − (365·364·…·343)/365^23 = 0.507, more than half. For a 64-bit hash, a collision is likely after about 2^32 ≈ 4.3 × 10^9 hashes, which is easy today; so 64-bit hashes are insecure.

**Example 2: ElGamal signature.** q = 19, α = 10, X_A = 16, so Y_A = 10^16 mod 19 = 4. Sign m = 14 with K = 5 (gcd(5, 18) = 1).
- S1 = 10^5 mod 19 = 3.
- K⁻¹ mod 18 = 11 (5·11 = 55 = 3·18 + 1).
- S2 = 11 · (14 − 16·3) mod 18 = 11 · (−34) mod 18 = 11 · 2 mod 18 = 22 mod 18 = 4. Signature (3, 4).
- Verify: V1 = 10^14 mod 19 = 16. V2 = 4^3 · 3^4 mod 19 = 64 · 81 mod 19 = (7 · 5) mod 19 = 35 mod 19 = 16. V1 = V2, so valid.

**Example 3: ElGamal encryption.** Same keys (q = 19, α = 10, Y_A = 4). Bob sends M = 17 with k = 5: K = Y_A^k mod q = 4^5 mod 19 = 1024 mod 19 = 17. C1 = α^k = 3, C2 = K·M mod q = 17·17 mod 19 = 289 mod 19 = 4. Ciphertext (3, 4). Alice: K = C1^X_A = 3^16 mod 19 = 17; K⁻¹ mod 19 = 9 (17·9 = 153 = 8·19 + 1); M = 4·9 mod 19 = 36 mod 19 = 17.

### Key points to remember

- Three authentication functions: encryption, MAC, hash.
- Hash properties: pre-image, second pre-image, collision resistance; birthday bound 2^(n/2).
- HMAC uses ipad (0x36) and opad (0x5C).
- SHA-512: 1024-bit blocks, 80 rounds, 512-bit digest, length field 128 bits.
- ElGamal sign: S1 = α^K, S2 = K⁻¹(m − X_A S1) mod (q−1); verify α^m = Y_A^S1 S1^S2.
- DSA: r = (g^k mod p) mod q, s = k⁻¹(H + xr) mod q; verify v = r.

### Important questions

1. Explain message authentication requirements and functions. What is a MAC?
2. Explain hash functions, their requirements and security. Explain the birthday attack.
3. Explain SHA-512 in detail.
4. Explain HMAC. Compare hash, MAC and digital signature.
5. Explain digital signatures and the ElGamal signature scheme with an example.
6. Explain the Digital Signature Standard (DSA) and prove its correctness.

---

## Unit 4: Key Management and Authentication Applications

### 2-mark definitions

- **Key distribution:** delivering a key to two parties who wish to communicate, without letting others see it.
- **Session key:** a temporary key used for one communication session, then discarded.
- **Master key:** a long-term key shared between a user and a Key Distribution Center (KDC), used to deliver session keys.
- **KDC (Key Distribution Center):** a trusted third party that shares a master key with each user and issues session keys.
- **Diffie-Hellman key exchange:** a protocol that lets two parties agree on a shared secret over an insecure channel, based on the discrete logarithm problem.
- **Man-in-the-middle attack:** an attacker intercepts and replaces public values (for example in Diffie-Hellman) so each victim shares a key with the attacker instead of each other.
- **Digital certificate:** a document binding a public key to an identity, signed by a Certificate Authority (CA).
- **X.509:** the ITU-T standard format for public key certificates and certificate revocation lists.
- **PKI (Public Key Infrastructure):** the set of hardware, software, people, policies and procedures to create, manage, distribute, use, store and revoke digital certificates.
- **CRL (Certificate Revocation List):** a signed list of certificates revoked by a CA before expiry.
- **Kerberos:** an authentication service (MIT) using a trusted third party and symmetric encryption to let users and servers authenticate each other on an open network, with tickets.
- **PGP (Pretty Good Privacy):** an email and file security program giving authentication, confidentiality, compression, email compatibility and segmentation.
- **S/MIME:** the Internet standard for secure email using X.509 certificates and MIME.

### Core concepts

**Symmetric key distribution options:** (1) A selects a key and physically delivers it to B, (2) a third party delivers it, (3) A sends a new key encrypted with an old key, (4) both share an encrypted link with a KDC that delivers keys. Option 4 scales: n users need n master keys instead of n(n−1)/2 pairwise keys.

**KDC protocol (Needham-Schroeder style)**

1. A → KDC: ID_A ‖ ID_B ‖ N1.
2. KDC → A: E(K_a, [K_s ‖ ID_B ‖ N1 ‖ E(K_b, [K_s ‖ ID_A])]).
3. A → B: E(K_b, [K_s ‖ ID_A]).
4. B → A: E(K_s, N2).
5. A → B: E(K_s, f(N2)).

**Distribution of public keys:** public announcement (anyone can forge), publicly available directory, public-key authority (online, bottleneck), public-key certificates (best: offline verification using the CA's public key).

**Diffie-Hellman key exchange**

- Public: prime q and primitive root α.
- A picks secret X_A, sends Y_A = α^X_A mod q. B picks X_B, sends Y_B = α^X_B mod q.
- A computes K = Y_B^X_A mod q; B computes K = Y_A^X_B mod q. Both equal α^(X_A X_B) mod q.
- Security: an eavesdropper sees q, α, Y_A, Y_B and must solve a discrete log. Weakness: no authentication, so it is open to man-in-the-middle; fix with signed or certified public values.

**X.509 certificate fields:** version, serial number, signature algorithm identifier, issuer name, validity period (not before, not after), subject name, subject's public key info, issuer unique ID, subject unique ID, extensions (v3: key usage, subject alternative name, basic constraints), and the CA's signature.
- Notation: CA⟨⟨A⟩⟩ is the certificate of user A issued by CA.
- Certificate chains: A trusts X1, B's certificate is issued by X2, and X1⟨⟨X2⟩⟩ lets A verify B: X1⟨⟨X2⟩⟩ X2⟨⟨B⟩⟩.
- Revocation through CRLs or OCSP (online check).

**PKI components (PKIX model):** end entity, Certification Authority (CA), Registration Authority (RA, verifies identity), CRL issuer, repository. Functions: registration, initialization, certification, key pair recovery, key pair update, revocation request, cross-certification.

**Kerberos version 4 (three exchanges)**

| Step | Messages | Purpose |
|---|---|---|
| Authentication service exchange | (1) C → AS: ID_C ‖ ID_tgs ‖ TS1. (2) AS → C: E(K_c, [K_c,tgs ‖ ID_tgs ‖ TS2 ‖ Lifetime2 ‖ Ticket_tgs]) | Get a ticket-granting ticket (once per logon) |
| Ticket-granting service exchange | (3) C → TGS: ID_v ‖ Ticket_tgs ‖ Authenticator_c. (4) TGS → C: E(K_c,tgs, [K_c,v ‖ ID_v ‖ TS4 ‖ Ticket_v]) | Get a service-granting ticket (once per service) |
| Client/server authentication exchange | (5) C → V: Ticket_v ‖ Authenticator_c. (6) V → C: E(K_c,v, [TS5 + 1]) | Get the service; mutual authentication |

- Ticket_tgs = E(K_tgs, [K_c,tgs ‖ ID_C ‖ AD_C ‖ ID_tgs ‖ TS2 ‖ Lifetime2]). The authenticator (ID_C, AD_C, timestamp encrypted with the session key) proves the client holds the session key and blocks replay.
- Kerberos realm: one AS/TGS and its users and servers; inter-realm authentication needs shared keys between TGSs.
- **Version 5 improvements:** any encryption algorithm (not only DES), network addresses beyond IP, ticket lifetimes with start and end times, ticket forwarding (delegation), inter-realm without n² keys, fixes for double encryption and PCBC mode, subsession keys, pre-authentication against password guessing.

**PGP services**

| Service | Algorithms | How |
|---|---|---|
| Authentication (digital signature) | RSA/DSS with SHA | Hash of message signed with sender's private key |
| Confidentiality | CAST-128, IDEA, 3DES (AES in OpenPGP) with RSA or ElGamal | Message encrypted with a one-time session key; session key encrypted with receiver's public key |
| Compression | ZIP | Applied after signing, before encryption |
| Email compatibility | Radix-64 | Converts binary to ASCII |
| Segmentation | | Splits long messages |

Order of operations at the sender: sign → compress → encrypt → radix-64. PGP uses a **web of trust** (users sign each other's keys; key legitimacy fields, owner trust, signature trust) instead of a strict CA hierarchy. Key rings: private key ring and public key ring.

**S/MIME:** extends MIME with security. Functions: enveloped data (encrypted content and encrypted session keys), signed data (signature, base64 encoded, needs S/MIME to read), clear-signed data (signature in base64 but content readable), signed and enveloped data. Uses X.509 v3 certificates from CAs, SHA-256, RSA/DSS, AES/3DES.

**PGP vs S/MIME**

| Feature | PGP | S/MIME |
|---|---|---|
| Trust model | Web of trust | Hierarchical CAs (X.509) |
| Users | Individuals | Enterprises |
| Format | OpenPGP, radix-64 | MIME, base64 |
| Certificates | PGP keys signed by users | X.509 from CAs |

### Solved examples

**Example 1: Diffie-Hellman.** q = 353, α = 3. A picks X_A = 97, B picks X_B = 233.
- Y_A = 3^97 mod 353 = 40; Y_B = 3^233 mod 353 = 248.
- A computes K = 248^97 mod 353 = 160; B computes K = 40^233 mod 353 = 160. **Shared key 160**.

**Example 2: Man-in-the-middle on Diffie-Hellman.** Darth picks X_D1 and X_D2, intercepts Y_A and sends Y_D1 to Bob, intercepts Y_B and sends Y_D2 to Alice. Alice shares K2 = Y_D2^X_A with Darth; Bob shares K1 = Y_D1^X_B with Darth. Darth decrypts and re-encrypts all traffic. Fix: authenticate Y_A and Y_B with signatures or certificates.

**Example 3: Key count.** For 1000 users, pairwise symmetric keys = 1000 · 999 / 2 = 499,500; with a KDC, 1000 master keys; with public keys, 1000 key pairs.

### Key points to remember

- Diffie-Hellman: Y = α^X mod q; K = α^(X_A X_B) mod q; vulnerable to MITM.
- Public key distribution: announcement, directory, authority, certificates.
- X.509 fields; CA⟨⟨A⟩⟩ notation; chains; CRL and OCSP.
- PKI: end entity, CA, RA, CRL issuer, repository.
- Kerberos: AS gives TGT; TGS gives service ticket; authenticator stops replay; v5 improvements.
- PGP: sign → compress → encrypt → radix-64; web of trust. S/MIME: X.509 and MIME.

### Important questions

1. Explain symmetric key distribution using a KDC.
2. Explain the distribution of public keys. Explain X.509 certificates and PKI.
3. Explain the Diffie-Hellman key exchange with an example. How is it vulnerable to man-in-the-middle attack?
4. Explain Kerberos version 4 with its message exchanges. How is version 5 better?
5. Explain PGP with its services and message generation.
6. Explain S/MIME. Compare PGP and S/MIME.

---

## Unit 5: IP Security, Web Security and System Security

### 2-mark definitions

- **IPSec:** a suite of protocols that secures IP traffic at the network layer, giving authentication, integrity, confidentiality and anti-replay for all applications transparently.
- **AH (Authentication Header):** an IPSec protocol giving connectionless integrity, data origin authentication and anti-replay, but not confidentiality.
- **ESP (Encapsulating Security Payload):** an IPSec protocol giving confidentiality (encryption), and optionally integrity and authentication.
- **Security Association (SA):** a one-way logical connection that defines the security parameters (protocol, keys, algorithms, lifetime) between two peers; identified by SPI, destination IP and protocol (AH or ESP).
- **SPI (Security Parameters Index):** a 32-bit value in the AH/ESP header that identifies the SA at the receiver.
- **Transport mode:** IPSec protects the payload of the IP packet (end-to-end between hosts).
- **Tunnel mode:** IPSec protects the entire original IP packet, which is put inside a new IP packet (gateway-to-gateway VPNs).
- **SSL/TLS:** a transport-layer protocol that gives a secure channel (confidentiality, integrity, server and optional client authentication) between client and server, used by HTTPS.
- **SET (Secure Electronic Transaction):** a protocol by Visa and MasterCard to protect credit card transactions on the Internet using dual signatures.
- **Dual signature:** links two messages for different recipients (order information for the merchant and payment information for the bank) so each sees only its part but can verify the link.
- **Intruder:** a person who gains or tries to gain unauthorized access (masquerader, misfeasor, clandestine user).
- **IDS (Intrusion Detection System):** a system that monitors activity to detect intrusions and raise alerts.
- **Virus:** a program that attaches itself to other programs and replicates when they run.
- **Firewall:** a system placed between a trusted and an untrusted network that enforces an access policy on the traffic passing through it.

### Core concepts

**IPSec architecture**

- Components: AH, ESP, Internet Key Exchange (IKE), the Security Policy Database (SPD: which traffic gets which protection, decides protect, bypass or discard) and the Security Association Database (SAD: parameters of each active SA).
- Benefits: transparent to applications and users; can secure all traffic at a firewall or router; used for VPNs, branch office connectivity, remote access.

**AH header fields:** Next header, Payload length, Reserved, SPI, Sequence number (anti-replay window, usually 64), Integrity Check Value (ICV, HMAC). AH authenticates the whole IP packet except mutable fields (TTL, checksum), which is why it fails across NAT.

**ESP format:** SPI, Sequence number, Payload data (encrypted), Padding, Pad length, Next header, then the optional ICV. Encryption with AES-CBC or AES-GCM.

**Transport vs tunnel mode**

| Feature | Transport mode | Tunnel mode |
|---|---|---|
| Protects | IP payload (upper-layer data) | Entire original IP packet |
| New IP header | No | Yes |
| Used between | Hosts | Gateways (VPN), host to gateway |
| AH | Authenticates payload and selected header fields | Authenticates whole inner packet and parts of outer header |
| ESP | Encrypts payload | Encrypts whole inner packet |

**Combining security associations:** SA bundles, by transport adjacency (apply more than one protocol to the same packet without tunnelling, for example ESP then AH) or iterated tunnelling (nested tunnels through several gateways). Four basic combinations: host-to-host end-to-end, gateway-to-gateway, both, and remote host to gateway to internal host.

**IPSec key management:** manual (small, static setups) or automated with IKE. ISAKMP gives the framework for SA negotiation; Oakley gives authenticated Diffie-Hellman with cookies (anti-clogging), nonces (anti-replay) and authentication of the exchange. IKE phase 1 sets up a secure channel; phase 2 negotiates the IPSec SAs.

**SSL/TLS architecture**

- Layers: SSL Record Protocol at the bottom, with the Handshake, Change Cipher Spec and Alert protocols (and HTTP) above it.
- **Record protocol:** fragment (up to 2^14 bytes) → compress (optional) → add MAC → encrypt → add record header.
- **Handshake (TLS 1.2 summary):** (1) client_hello and server_hello agree on version, cipher suite, random numbers, session ID; (2) server sends certificate, server_key_exchange, server_hello_done; (3) client sends client_key_exchange (pre-master secret encrypted with server's RSA key or DH value), optional certificate and certificate_verify; (4) change_cipher_spec and finished from both sides.
- Session vs connection: a session is created by a handshake and can be shared by many connections.
- Master secret derived from the pre-master secret and both randoms; keys for MAC and encryption derived from it.
- TLS 1.3 (2018) removed RSA key exchange and old ciphers, needs forward-secret (EC)DHE, and completes in one round trip.

**SET (Secure Electronic Transaction)**

- Participants: cardholder, merchant, issuer (cardholder's bank), acquirer (merchant's bank), payment gateway, certification authority.
- Features: confidentiality of payment data, integrity, cardholder authentication, merchant authentication, all via X.509 certificates.
- **Dual signature:** PIMD = H(PI), OIMD = H(OI), POMD = H(PIMD ‖ OIMD), DS = E(PR_c, POMD). The merchant gets OI, PIMD and DS; the bank gets PI, OIMD and DS. Each can verify the signature without seeing the other's data.
- SET was secure but too complex and was replaced in practice by SSL/TLS with 3-D Secure.

**Intruders and intrusion detection**

- Intruder types: **masquerader** (outsider using a legitimate user's account), **misfeasor** (insider misusing access), **clandestine user** (seizes supervisory control to evade audit).
- Techniques: password guessing, exploiting vulnerabilities, social engineering.
- IDS approaches: **statistical anomaly detection** (threshold detection or profile-based, finds new attacks, more false alarms), **rule-based / signature detection** (matches known attack patterns, accurate, misses new attacks).
- IDS types: host-based (HIDS, audit records on one machine) and network-based (NIDS, sniffs traffic). Honeypots lure attackers. Audit records are the main data source.
- Password management: hashed passwords with salt, password policies, proactive password checkers.

**Viruses and malware**

| Malware | Description |
|---|---|
| Virus | Attaches to a host program, needs it to run, replicates |
| Worm | Self-replicating program that spreads over networks on its own |
| Trojan horse | Useful-looking program with hidden malicious function |
| Logic bomb | Code that triggers on a condition (a date) |
| Trapdoor (backdoor) | Secret entry that bypasses security |
| Ransomware | Encrypts data and demands payment |
| Spyware, rootkit, bot | Steals information, hides presence, remote control |

- Virus phases: dormant, propagation, triggering, execution.
- Virus types: boot sector, file infector, macro, polymorphic (changes form each copy), metamorphic (rewrites itself), stealth, encrypted.
- Antivirus generations: simple scanners (signatures), heuristic scanners, activity traps (behaviour), full-featured protection. Generic decryption runs suspicious code in an emulator.

**Firewalls**

- Design goals: all traffic must pass through it; only authorized traffic allowed; the firewall itself immune to penetration.
- Control techniques: service control, direction control, user control, behaviour control.

| Firewall type | Works at | How it works |
|---|---|---|
| Packet filtering | Network layer | Rules on source/destination IP, ports, protocol; fast but no context |
| Stateful inspection | Network and transport | Tracks connection state table; allows replies to established connections |
| Application-level gateway (proxy) | Application layer | Relays traffic per application; deep inspection, user authentication; slower |
| Circuit-level gateway | Session layer | Sets up two TCP connections and relays without inspecting content (SOCKS) |

- Configurations: screened host (packet filter + bastion host), dual-homed bastion host, screened subnet (DMZ between two packet filters, most secure).
- **Bastion host:** a hardened system exposed to the Internet, running only essential proxy services.

### Solved examples

**Example 1: Packet filter rules.** Policy: allow inbound web to server 192.168.1.10 and allow all outbound, block everything else.

| Rule | Direction | Source | Destination | Protocol | Port | Action |
|---|---|---|---|---|---|---|
| 1 | In | Any | 192.168.1.10 | TCP | 80, 443 | Allow |
| 2 | Out | 192.168.1.0/24 | Any | Any | Any | Allow |
| 3 | In | Any | 192.168.1.0/24 | TCP | Any (ACK set) | Allow (replies) |
| 4 | Any | Any | Any | Any | Any | Deny |

Rules are checked top-down; the last rule is the default deny.

**Example 2: Anti-replay window.** Window size 64, highest sequence number received N = 200. A packet with sequence 150 (inside 137–200, not yet seen) is accepted and marked. Sequence 120 (left of the window) is discarded. Sequence 210 (to the right) is accepted after checking the ICV, and the window slides so 210 is the new right edge.

**Example 3: SET dual signature.** Cardholder computes PIMD = H(PI) and OIMD = H(OI), then POMD = H(PIMD ‖ OIMD) and DS = E(PR_c, POMD). Merchant verifies with D(PU_c, DS) = H(PIMD ‖ H(OI)), using PIMD it received; it never sees PI (card number).

### Key points to remember

- IPSec: AH (integrity, no encryption), ESP (encryption plus optional integrity), SA one-way identified by SPI + destination IP + protocol, SPD and SAD.
- Transport mode protects payload; tunnel mode protects the whole packet (VPN).
- IKE = ISAKMP + Oakley.
- SSL protocols: Record, Handshake, Change Cipher Spec, Alert; HTTPS port 443.
- SET: dual signature POMD = H(H(PI) ‖ H(OI)).
- Intruders: masquerader, misfeasor, clandestine; IDS: anomaly vs signature, host vs network.
- Virus phases: dormant, propagation, triggering, execution.
- Firewalls: packet filter, stateful, application gateway, circuit gateway; DMZ.

### Important questions

1. Explain the IPSec architecture. Explain AH and ESP with packet formats.
2. Compare transport and tunnel modes. Explain combining security associations and IPSec key management (IKE).
3. Explain SSL/TLS architecture, the record protocol and the handshake protocol.
4. Explain SET and the dual signature.
5. What are intruders? Explain intrusion detection techniques.
6. Explain viruses and related threats, their phases and types, and countermeasures.
7. What is a firewall? Explain its types and configurations.

---

## Last-hour checklist

- [ ] X.800 services and mechanisms; passive vs active attacks; cryptanalysis attack types.
- [ ] Caesar (KHOOR), Vigenère (LXFOPVEFRNHR), Playfair (GATLMZCLRQXA), Hill (TC and inverse), rail fence.
- [ ] Steganography; stream vs block; confusion and diffusion; Feistel equations.
- [ ] DES round, S-box addressing, key schedule, strength; differential cryptanalysis idea; modes table; 3DES.
- [ ] Group, ring, field; Euclid (gcd 2) and extended Euclid (23); Fermat (9); Euler; CRT (23); Miller-Rabin (561).
- [ ] AES round steps; DES vs AES; GF(2^8) xtime.
- [ ] Public key principles; RSA (p = 17, q = 11, C = 11); RSA attacks.
- [ ] MAC, hash properties, birthday bound; HMAC; SHA-512 steps; hash vs MAC vs signature.
- [ ] ElGamal signature (3, 4) and verification; DSA and its proof.
- [ ] KDC protocol; public key distribution; Diffie-Hellman (key 160) and MITM; X.509 fields; PKI.
- [ ] Kerberos v4 six messages; v5 changes; PGP operations and web of trust; S/MIME.
- [ ] IPSec: AH, ESP, modes, SA, SPD/SAD, IKE; SSL protocols and handshake; SET dual signature.
- [ ] Intruders and IDS; malware table and virus phases; firewall types and configurations.

---

## Books for this subject

The AKTU syllabus copy we could access did not show the book list for this elective, so these are the standard textbooks that cover its units. Check your college's copy of the syllabus for the official list. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Cryptography and Network Security: Principles and Practice | William Stallings | Pearson | [WorldCat](https://search.worldcat.org/search?q=Cryptography+and+Network+Security+Principles+and+Practice+Stallings) |
| 2 | Cryptography and Network Security | Behrouz A. Forouzan, Debdeep Mukhopadhyay | McGraw Hill Education | [WorldCat](https://search.worldcat.org/search?q=Cryptography+and+Network+Security+Forouzan+Mukhopadhyay) |
| 3 | Cryptography and Network Security | Atul Kahate | McGraw Hill Education | [WorldCat](https://search.worldcat.org/search?q=Cryptography+and+Network+Security+Atul+Kahate) |
| 4 | Applied Cryptography | Bruce Schneier | Wiley | [WorldCat](https://search.worldcat.org/search?q=Applied+Cryptography+Bruce+Schneier) |
| 5 | Handbook of Applied Cryptography | Alfred J. Menezes, Paul C. van Oorschot, Scott A. Vanstone | CRC Press | [WorldCat](https://search.worldcat.org/search?q=Handbook+of+Applied+Cryptography+Menezes) |

The Handbook of Applied Cryptography is made available free by its authors at cacr.uwaterloo.ca/hac, and the AES (FIPS 197), SHA (FIPS 180-4) and DSS (FIPS 186) standards are free from NIST.

**Syllabus source:** [AKTU B.Tech CS/CE and CSE 4th year syllabus, 2025-26 (copy hosted by an affiliated college, PDF)](https://bit.ac.in/PDF/bit_cse_B.Tech.%20CSE%20Syllabus%204th%20Year%202025-26.pdf), with the elective unit list cross-checked against aktunotes.in. Unit 4's topic list is reconstructed from that page and matches the standard AKTU course.

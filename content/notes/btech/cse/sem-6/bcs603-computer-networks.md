---
program: btech
branches: [cse, cs, it]
semester: 6
code: BCS603
name: Computer Networks
credits: 4
ltp: 3-1-0
scheme: AKTU B.Tech 3rd year, Core, 2024-25 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/B-TECH-CSIT-IT-3rd-YR-2024-25-AKTU-26112024.pdf
units:
  - Introduction and Physical Layer
  - Data Link Layer and Medium Access Sublayer
  - Network Layer
  - Transport Layer
  - Application Layer
---

# BCS603 Computer Networks: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: layers, protocols and comparison tables.
3. **Solved examples**: the numericals that appear every year (Shannon and Nyquist, CRC, Hamming code, stop-and-wait and sliding window efficiency, ALOHA, subnetting and CIDR, Dijkstra, TCP congestion window).
4. **Formulas / key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (OSI vs TCP/IP, devices, topologies, media, encoding, switching, multiplexing, Shannon and Nyquist) and Unit 2 (framing, CRC, Hamming, stop-and-wait, Go-Back-N, Selective Repeat, ALOHA, CSMA/CD, Ethernet, bridges and spanning tree).
- **Afternoon (3 hours):** Unit 3 (IPv4 addressing, subnetting, CIDR, ARP, DHCP, ICMP, distance vector, link state, RIP, OSPF, BGP, congestion control, IPv6) and Unit 4 (UDP, TCP header, three-way handshake, flow control, congestion control, QoS).
- **Evening (2 hours):** Unit 5 (DNS, HTTP, email protocols, FTP, Telnet and SSH, SNMP, compression, cryptography basics). Then the "Last-hour checklist".
- **In the exam:** draw the layer diagram or header format, label every field, and show each step of a numerical with units. Subnetting and CRC questions are fixed-mark scorers.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Introduction and Physical Layer

### 2-mark definitions

- **Computer network:** a set of interconnected autonomous computers and devices that exchange data and share resources.
- **Goals of networks:** resource sharing, reliability (backup paths), cost reduction, scalability, communication (email, video calls), centralized management.
- **LAN, MAN, WAN:** a LAN covers a building or campus (Ethernet, Wi-Fi); a MAN covers a city (cable TV network, metro Ethernet); a WAN covers a country or the world (the internet, leased lines).
- **Internet organization:** a network of networks. Hosts connect to access ISPs, which connect to regional ISPs, which connect to tier-1 (backbone) ISPs; ISPs exchange traffic at Internet Exchange Points (IXPs). Standards come from the IETF (RFCs), IEEE (802 LAN standards), ITU-T and ISO; addresses and names are managed by ICANN/IANA and regional registries (APNIC for India).
- **ISP (Internet Service Provider):** an organization that provides internet access to users.
- **Protocol:** a set of rules for communication, defining syntax (format), semantics (meaning) and timing.
- **Layering:** dividing network functions into layers, each providing services to the layer above and using services of the layer below.
- **Service:** what a layer offers to the layer above through a service access point (SAP); connection-oriented or connectionless.
- **Topology:** the physical or logical arrangement of devices: bus, star, ring, mesh, tree, hybrid.
- **Bandwidth:** in hertz, the range of frequencies a channel passes; in bps, the maximum data rate.
- **Throughput:** the actual data rate achieved.
- **Latency (delay):** propagation delay + transmission delay + queuing delay + processing delay.
- **Line coding:** converting digital data into a digital signal (NRZ, Manchester).
- **Multiplexing:** sharing one link among several signals (FDM, TDM, WDM).
- **Switching:** connecting senders to receivers through intermediate nodes: circuit switching, packet switching (datagram and virtual circuit), message switching.

### Core concepts

**OSI reference model (7 layers)**

| Layer | Function | Data unit | Examples |
|---|---|---|---|
| 7 Application | Network services to the user | Data / message | HTTP, FTP, SMTP, DNS |
| 6 Presentation | Translation, encryption, compression | Data | JPEG, SSL/TLS (partly), ASCII |
| 5 Session | Dialog control, synchronization (checkpoints) | Data | RPC, NetBIOS |
| 4 Transport | Process-to-process delivery, segmentation, flow and error control | Segment | TCP, UDP |
| 3 Network | Logical addressing, routing | Packet | IP, ICMP, OSPF |
| 2 Data link | Framing, physical addressing, error and flow control, access control | Frame | Ethernet, PPP, HDLC |
| 1 Physical | Bits over the medium: signals, encoding, data rate | Bit | Cables, hubs, repeaters |

Memory aid (top to bottom): "All People Seem To Need Data Processing".

**TCP/IP model:** Application (OSI 5 to 7), Transport, Internet (network), Network access / Link (OSI 1 and 2). Some books use 5 layers by splitting the link layer into data link and physical.

**OSI vs TCP/IP**

| OSI | TCP/IP |
|---|---|
| 7 layers | 4 (or 5) layers |
| Model first, protocols later (generic) | Protocols first, model describes them |
| Clear distinction of service, interface, protocol | Less clear distinction |
| Network layer: connection-oriented and connectionless; transport: connection-oriented | Network layer: connectionless (IP); transport: both (TCP and UDP) |
| Reference model, not widely implemented | Used by the internet |

**Network devices**

| Device | Layer | Function |
|---|---|---|
| Repeater | 1 | Regenerates the signal to extend distance |
| Hub | 1 | Multiport repeater; sends to all ports; one collision domain |
| Bridge | 2 | Connects LAN segments; filters frames by MAC address |
| Switch | 2 | Multiport bridge; each port is a separate collision domain |
| Router | 3 | Connects different networks; forwards packets by IP address; separates broadcast domains |
| Gateway | Up to 7 | Connects networks using different protocols; translates |
| Modem | 1 | Modulates and demodulates digital data over analog lines |

**Topologies**

| Topology | Advantages | Disadvantages |
|---|---|---|
| Bus | Cheap, easy to install | Single cable failure stops all; collisions; hard to troubleshoot |
| Star | Easy to add devices; one link failure affects one device | Hub or switch is a single point of failure |
| Ring | Equal access (token), no collisions | One break can stop the ring (dual ring helps) |
| Mesh | Robust, private links; n(n − 1)/2 links | Expensive cabling and ports |
| Tree / hybrid | Scalable, hierarchical | Depends on the root |

**Connection types:** point-to-point (dedicated link between two devices) and multipoint (several devices share one link). Transmission modes: simplex (one way, keyboard), half-duplex (both ways, one at a time, walkie-talkie), full-duplex (both ways at once, telephone).

**Transmission media**
- **Guided:** twisted pair (UTP Cat 5e/6, RJ-45; twisting reduces crosstalk), coaxial cable (cable TV), optical fibre (light; total internal reflection; single-mode and multimode; very high bandwidth, immune to electromagnetic interference).
- **Unguided:** radio waves (omnidirectional, AM/FM, Wi-Fi), microwaves (line of sight, satellite, mobile), infrared (short range, remote controls).

**Signal encoding (line coding)**
- **NRZ-L:** level depends on the bit (0 = high, 1 = low or the reverse). **NRZ-I:** a 1 means invert the level; a 0 means no change. Problem: long runs lose synchronization.
- **Manchester:** a transition in the middle of every bit (IEEE 802.3: 0 = high to low, 1 = low to high). Self-clocking, but needs twice the bandwidth. Used in classic Ethernet.
- **Differential Manchester:** always a mid-bit transition; a 0 has an extra transition at the start of the bit, a 1 has none. Used in Token Ring.
- **AMI (bipolar):** 0 = zero voltage; 1s alternate between + and −.
- **Block coding (4B/5B) and scrambling (B8ZS, HDB3)** prevent long runs of zeros.
- **Analog modulation of digital data:** ASK, FSK, PSK, QAM.

**Transmission impairments:** attenuation (loss of energy; fixed with amplifiers or repeaters; measured in dB), distortion (different frequency components arrive at different times), noise (thermal, induced, crosstalk, impulse). SNR_dB = 10 log10(SNR).

**Performance measures**
- Transmission delay Tt = L/B (frame length / bandwidth). Propagation delay Tp = d/v (distance / signal speed, about 2 × 10⁸ m/s in cable).
- Bandwidth-delay product = B × Tp: the number of bits that fill the link.
- Nyquist (noiseless channel): max bit rate = 2B log2 L, where L is the number of signal levels.
- Shannon (noisy channel): capacity C = B log2(1 + SNR).

**Switching**

| Circuit switching | Packet switching (datagram) | Virtual circuit |
|---|---|---|
| Dedicated path reserved for the whole call (telephone) | Each packet routed independently (IP) | Path set up first, packets follow it with a VC number (ATM, Frame Relay, MPLS) |
| Setup phase; no headers per packet | No setup; full address in every packet | Setup phase; short label per packet |
| Resources wasted when idle | Efficient sharing; may arrive out of order | In-order delivery |
| Fixed delay, guaranteed bandwidth | Variable delay, best effort | Can reserve resources |

**Multiplexing:** FDM (frequency bands with guard bands; radio, cable TV), TDM (time slots; synchronous TDM gives each source a fixed slot, statistical TDM gives slots on demand), WDM (wavelengths of light in fibre), CDM (codes, as in CDMA).

### Solved examples

**Example 1 (Shannon).** A telephone line has B = 3,000 Hz and SNR = 3,162 (35 dB).
C = 3000 × log2(1 + 3162) = 3000 × 11.63 ≈ **34,880 bps (about 34.9 kbps)**.

**Example 2 (Nyquist).** B = 3,000 Hz, 2 signal levels: max rate = 2 × 3000 × log2 2 = **6,000 bps**. With 4 levels: 2 × 3000 × 2 = **12,000 bps**.

**Example 3 (delays).** A 1,000-byte packet on a 10 Mbps link of 2,000 km (v = 2 × 10⁸ m/s):
Tt = 8,000/10⁷ = **0.8 ms**; Tp = 2 × 10⁶/(2 × 10⁸) = **10 ms**; total ≈ **10.8 ms** (ignoring queuing).

**Example 4 (mesh).** A full mesh of 6 devices needs 6 × 5/2 = **15 links** and 5 ports per device.

**Example 5 (Manchester for 1011).** IEEE 802.3: 1 = low→high, 0 = high→low. So: low-high | high-low | low-high | low-high. Every bit has a mid-bit transition.

### Formulas to remember

- Tt = L/B; Tp = d/v; bandwidth-delay product = B × Tp.
- Nyquist: 2B log2 L. Shannon: B log2(1 + SNR). SNR_dB = 10 log10(SNR).
- Mesh links = n(n − 1)/2.

### Important questions

1. Explain the goals and applications of computer networks and the categories LAN, MAN and WAN. How is the internet organized?
2. Explain the OSI model with the functions of each layer. Compare OSI and TCP/IP.
3. Explain network topologies and network devices (repeater, hub, bridge, switch, router, gateway).
4. Compare guided and unguided transmission media.
5. Explain line coding schemes (NRZ, Manchester, differential Manchester) with waveforms. Explain transmission impairments.
6. Compare circuit switching and packet switching. Explain FDM, TDM and WDM.
7. Solve numericals on Nyquist, Shannon and delays.

---

## Unit 2: Data Link Layer and Medium Access Sublayer

### 2-mark definitions

- **Framing:** dividing the bit stream into frames with clear boundaries: character count, byte stuffing with flag bytes, bit stuffing, or physical-layer coding violations.
- **Bit stuffing:** in HDLC the flag is 01111110; after five consecutive 1s in the data, the sender inserts a 0, and the receiver removes it.
- **Byte stuffing:** an escape byte (ESC) is inserted before any flag or ESC byte appearing in the data.
- **Error detection:** adding redundancy so the receiver can find errors: parity, checksum, CRC.
- **Error correction:** adding enough redundancy to locate and fix errors: Hamming code (forward error correction) or retransmission (ARQ).
- **Hamming distance:** the number of bit positions in which two codewords differ. To detect d errors, minimum distance d + 1 is needed; to correct d errors, 2d + 1.
- **CRC (Cyclic Redundancy Check):** a detection method that divides the data (with n zeros appended) by a generator polynomial of degree n using modulo-2 arithmetic and sends the remainder.
- **Flow control:** preventing a fast sender from overwhelming a slow receiver.
- **ARQ (Automatic Repeat reQuest):** error control by acknowledgements and retransmission: stop-and-wait, Go-Back-N, Selective Repeat.
- **Piggybacking:** sending an acknowledgement inside a data frame going in the opposite direction.
- **MAC sublayer:** the lower part of the data link layer that controls access to a shared channel.
- **Collision domain:** a network segment in which simultaneous transmissions collide.
- **Learning bridge:** a bridge that builds its forwarding table automatically by noting the source MAC address and port of each frame.
- **Spanning tree protocol (IEEE 802.1D):** a protocol that disables redundant bridge links to make a loop-free tree topology.

### Core concepts

**Error detection methods**
- **Simple parity:** one parity bit (even or odd); detects all single-bit errors; misses errors in an even number of bits.
- **Two-dimensional parity:** row and column parity; detects all 1-, 2- and 3-bit errors and most burst errors.
- **Checksum:** sum the data words in one's complement arithmetic, complement the sum, send it; the receiver sums everything and gets all 1s (0 after complement) if no error. Used in IP, TCP, UDP.
- **CRC:** detects all single-bit errors, all double-bit errors (with a suitable generator), all odd numbers of errors (if the generator has the factor x + 1), and all burst errors of length ≤ n (degree of the generator). Used in Ethernet (CRC-32).

**Hamming code:** for m data bits, choose r parity bits with 2^r ≥ m + r + 1. Parity bits go at positions 1, 2, 4, 8, … Parity bit at position p checks all positions whose binary index has bit p set. The syndrome (recomputed parity values) gives the position of the error.

**Elementary data link protocols (Tanenbaum)**
1. **Utopian simplex:** no errors, no flow control (unrealistic).
2. **Simplex stop-and-wait (error-free channel):** sender waits for an ACK before the next frame (flow control only).
3. **Simplex stop-and-wait for a noisy channel (PAR / stop-and-wait ARQ):** timer and retransmission; 1-bit sequence numbers to detect duplicates.

**Sliding window protocols**

| Protocol | Sender window | Receiver window | On error | Sequence numbers (m bits) |
|---|---|---|---|---|
| Stop-and-wait ARQ | 1 | 1 | Resend the frame on timeout | 0 and 1 |
| Go-Back-N ARQ | ≤ 2^m − 1 | 1 | Resend the lost frame and all frames after it | Window ≤ 2^m − 1 |
| Selective Repeat ARQ | ≤ 2^(m−1) | ≤ 2^(m−1) | Resend only the lost frame (NAK), receiver buffers out-of-order frames | Window ≤ 2^(m−1) |

- Efficiency (utilization) with a = Tp/Tt: stop-and-wait η = 1/(1 + 2a); sliding window with window W: η = W/(1 + 2a) if W < 1 + 2a, otherwise 1.

**Channel allocation:** static (FDM, TDM; wasteful for bursty traffic) and dynamic (random access, controlled access, channelization).

**Multiple access protocols**
- **Random access:**
  - **Pure ALOHA:** send whenever ready; vulnerable time 2Tt; throughput S = G e^(−2G); maximum 18.4% at G = 0.5.
  - **Slotted ALOHA:** send only at slot starts; vulnerable time Tt; S = G e^(−G); maximum 36.8% at G = 1.
  - **CSMA:** listen before sending. 1-persistent (send as soon as idle), non-persistent (wait a random time if busy), p-persistent (send with probability p when idle; for slotted channels).
  - **CSMA/CD (Ethernet):** listen while sending; on collision, send a jam signal and back off using binary exponential backoff (after the k-th collision, wait a random number of slots from 0 to 2^k − 1, k capped at 10; give up after 16 attempts). Minimum frame size must ensure Tt ≥ 2Tp (64 bytes for 10 Mbps Ethernet).
  - **CSMA/CA (Wi-Fi, 802.11):** collision avoidance with interframe space (IFS), contention window and acknowledgements; RTS/CTS to solve the hidden-station problem.
- **Controlled access:** reservation, polling (a primary polls secondaries), token passing (Token Ring 802.5, FDDI).
- **Channelization:** FDMA, TDMA, CDMA.

**LAN standards (IEEE 802)**
- 802.3 Ethernet: frame = preamble (7 bytes) + SFD (1) + destination MAC (6) + source MAC (6) + type/length (2) + data (46 to 1,500) + CRC (4). Standard (10 Mbps), Fast (100 Mbps), Gigabit (1 Gbps), 10-Gigabit Ethernet.
- 802.11 wireless LAN (Wi-Fi), 802.15 Bluetooth/PAN, 802.16 WiMAX, 802.1Q VLANs, 802.2 LLC.
- MAC address: 48 bits, written as 6 hex bytes (for example 00-1A-2B-3C-4D-5E); the first 3 bytes are the manufacturer's OUI.

**Switches and bridges**
- **Learning bridge:** for each frame: record (source MAC → incoming port); if the destination is in the table, forward on that port (or drop if it is the same port); if not, flood to all other ports. Entries age out.
- **Spanning tree algorithm:** (1) elect the root bridge (lowest bridge ID); (2) each bridge finds its root port (least-cost path to the root); (3) each LAN segment chooses a designated bridge/port (least cost to the root); (4) all other ports are blocked. This removes loops, which would otherwise cause broadcast storms and endless frame copies.

### Solved examples

**Example 1 (bit stuffing).** Data 011111111100 → stuffed **0111110111100** (a 0 is inserted after the first five 1s). The receiver removes the 0 after any five consecutive 1s.

**Example 2 (CRC).** Data 1101011011, generator 10011 (x⁴ + x + 1).
- Append 4 zeros: 11010110110000; divide by 10011 using XOR.
- Remainder = **1110**. Transmitted frame = **11010110111110**.
- The receiver divides the received frame by 10011; remainder 0 means no error detected.

**Example 3 (Hamming code).** Data 1011 (d1 = 1, d2 = 0, d3 = 1, d4 = 1), even parity, positions p1 p2 d1 p4 d2 d3 d4.
- p1 = d1 ⊕ d2 ⊕ d4 = 1 ⊕ 0 ⊕ 1 = 0. p2 = d1 ⊕ d3 ⊕ d4 = 1 ⊕ 1 ⊕ 1 = 1. p4 = d2 ⊕ d3 ⊕ d4 = 0 ⊕ 1 ⊕ 1 = 0.
- Codeword = **0110011**.
- If bit 5 flips (received 0110111): checks give c1 = 1, c2 = 0, c4 = 1, so syndrome = 101₂ = **5**; flip bit 5 to correct.

**Example 4 (stop-and-wait efficiency).** Frame 1,000 bits, link 1 Mbps, propagation delay 20 ms.
- Tt = 1 ms; a = 20; η = 1/(1 + 40) = **2.44%**.
- Window needed for full use: 1 + 2a = **41 frames**, needing at least 6 bits of sequence number for Go-Back-N (2⁶ − 1 = 63 ≥ 41).

**Example 5 (ALOHA).** A channel of 200 kbps carries 200-bit frames (Tt = 1 ms). The system produces 1,000 frames per second, so G = 1 frame per frame time.
- Pure ALOHA: S = 1 × e^(−2) = 0.135, so about **135 frames/s** succeed.
- Slotted ALOHA: S = 1 × e^(−1) = 0.368, so about **368 frames/s** succeed.

**Example 6 (Go-Back-N).** Window 4; frames 0 to 6 are sent; frame 2 is lost. The receiver discards 3, 4 and 5; on timeout the sender resends **2, 3, 4, 5** (and continues). In Selective Repeat, only frame 2 is resent.

### Formulas to remember

- Hamming: 2^r ≥ m + r + 1; detect d errors: distance d + 1; correct d errors: 2d + 1.
- a = Tp/Tt; stop-and-wait η = 1/(1 + 2a); window W: η = min(1, W/(1 + 2a)).
- GBN window ≤ 2^m − 1; SR window ≤ 2^(m−1).
- Pure ALOHA S = G e^(−2G) (max 0.184); slotted S = G e^(−G) (max 0.368).
- CSMA/CD: minimum frame size = 2 × Tp × B.

### Important questions

1. Explain framing methods with examples of bit stuffing and byte stuffing.
2. Explain error detection methods. Compute CRC for given data and generator.
3. Explain Hamming code with an example, including error correction.
4. Explain stop-and-wait, Go-Back-N and Selective Repeat protocols with diagrams. Derive the efficiency of stop-and-wait.
5. Explain pure and slotted ALOHA and derive their maximum throughput. Explain CSMA, CSMA/CD and CSMA/CA.
6. Explain the IEEE 802.3 frame format and LAN standards.
7. Explain learning bridges and the spanning tree algorithm.

---

## Unit 3: Network Layer

### 2-mark definitions

- **Network layer:** responsible for host-to-host delivery of packets across multiple networks: logical addressing, routing and forwarding.
- **Forwarding vs routing:** forwarding moves a packet from an input port to the right output port using the forwarding table (a local action); routing builds the tables by running routing algorithms (a network-wide process).
- **IPv4 address:** a 32-bit logical address written in dotted decimal (for example 192.168.1.10).
- **Classful addressing:** classes A (first bit 0, /8, 1 to 126), B (10, /16, 128 to 191), C (110, /24, 192 to 223), D (1110, multicast, 224 to 239), E (1111, reserved, 240 to 255).
- **Subnetting:** dividing one network into smaller subnetworks by borrowing host bits for the subnet.
- **Subnet mask:** a 32-bit number with 1s for network and subnet bits and 0s for host bits (for example 255.255.255.192 = /26).
- **CIDR (Classless Inter-Domain Routing):** addresses written as a.b.c.d/n, where n is the prefix length; allows blocks of any size and route aggregation (supernetting).
- **Private addresses:** 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16; used inside networks with NAT.
- **NAT (Network Address Translation):** translates private addresses to a public address at the router.
- **ARP (Address Resolution Protocol):** finds the MAC address for a known IP address on the local network (broadcast request, unicast reply).
- **RARP:** finds the IP address for a known MAC address (used by diskless machines; replaced by BOOTP and DHCP).
- **DHCP (Dynamic Host Configuration Protocol):** automatically gives a host an IP address, mask, default gateway and DNS server; uses UDP ports 67 (server) and 68 (client).
- **ICMP (Internet Control Message Protocol):** reports errors and gives diagnostics (destination unreachable, time exceeded, echo request/reply used by ping and traceroute).
- **Static vs dynamic routing:** static routes are entered manually; dynamic routes are learned by routing protocols that adapt to changes.
- **Autonomous system (AS):** a group of networks under one administration; interior gateway protocols (RIP, OSPF) work inside an AS, exterior protocols (BGP) between ASes.
- **Congestion:** when the load on the network exceeds its capacity, causing delay and packet loss.

### Core concepts

**IPv4 header (20 to 60 bytes):** version (4), header length (4), type of service / DSCP (8), total length (16), identification (16), flags (3: reserved, DF, MF), fragment offset (13, in units of 8 bytes), time to live (8), protocol (8: 6 = TCP, 17 = UDP, 1 = ICMP), header checksum (16), source address (32), destination address (32), options.

**Fragmentation:** when a packet is larger than the MTU of the next link, it is split; each fragment carries the same identification, the MF flag (1 except for the last fragment) and the offset (byte offset / 8). Reassembly happens only at the destination.

**Delivery:** direct delivery (destination on the same network) vs indirect delivery (through routers). Forwarding uses the **longest prefix match** in the table; a default route (0.0.0.0/0) handles everything else.

**Subnetting steps**
1. Find the number of bits to borrow: 2^s ≥ number of subnets.
2. New prefix = old prefix + s; hosts per subnet = 2^h − 2 (network and broadcast addresses reserved).
3. Block size = 256 − last non-255 mask octet; subnets start at multiples of the block size.

**ARP process:** host A wants to send to B (same LAN): checks its ARP cache; if absent, broadcasts "Who has IP_B? Tell IP_A"; B replies with its MAC by unicast; A caches it. For a remote host, A finds the MAC of the default gateway instead.

**DHCP process (DORA):** Discover (client broadcast) → Offer (server) → Request (client) → Acknowledge (server). The address is leased for a time and renewed.

**Routing algorithms**

| Distance vector | Link state |
|---|---|
| Each router sends its whole distance table to neighbours periodically | Each router floods information about its own links to all routers |
| Bellman-Ford: D_x(y) = min over neighbours v of {c(x, v) + D_v(y)} | Each router builds the full topology and runs Dijkstra's algorithm |
| Slow convergence; count-to-infinity problem | Fast convergence; more memory and CPU |
| Example: RIP | Example: OSPF, IS-IS |

- **Count-to-infinity fixes:** split horizon (do not advertise a route back to the neighbour it was learned from), poison reverse (advertise it back with infinite cost), hold-down timers, and a maximum hop count (16 = infinity in RIP).
- **RIP:** distance vector; metric = hop count (max 15); updates every 30 seconds; uses UDP port 520.
- **OSPF:** link state; cost based on bandwidth; areas with a backbone area 0; fast convergence; runs directly on IP (protocol 89).
- **BGP:** path vector protocol between autonomous systems; uses TCP port 179; chooses routes by policy and AS path.
- **Hierarchical routing:** routers grouped into regions; reduces table size.

**Congestion control (network layer)**
- Open loop (prevention): retransmission, window, acknowledgement and discard policies; admission control; **traffic shaping** with the **leaky bucket** (output at a constant rate; excess dropped when the bucket is full) and the **token bucket** (tokens added at rate r up to capacity C; a packet needs a token; allows bursts up to C).
- Closed loop (removal): backpressure, choke packets, implicit signalling (loss or delay), explicit signalling (ECN bits), load shedding, random early detection (RED).

**IPv6**
- 128-bit addresses written in hex with colons (2001:0db8:0000:0000:0000:ff00:0042:8329 → 2001:db8::ff00:42:8329; leading zeros dropped, one run of zeros replaced by ::).
- Fixed 40-byte base header: version, traffic class, flow label, payload length, next header, hop limit, source and destination addresses. Options go in extension headers.
- No header checksum; no fragmentation by routers (only by the source, using path MTU discovery); built-in IPsec support; autoconfiguration (SLAAC); no broadcast (multicast and anycast instead).
- Transition from IPv4: dual stack, tunnelling (IPv6 inside IPv4), header translation (NAT64).

### Solved examples

**Example 1 (subnetting).** Divide 192.168.10.0/24 into 4 subnets.
- 2² = 4, so borrow 2 bits: prefix /26, mask 255.255.255.192, block size 64, hosts 2⁶ − 2 = 62 per subnet.

| Subnet | Network | First host | Last host | Broadcast |
|---|---|---|---|---|
| 1 | 192.168.10.0/26 | .1 | .62 | .63 |
| 2 | 192.168.10.64/26 | .65 | .126 | .127 |
| 3 | 192.168.10.128/26 | .129 | .190 | .191 |
| 4 | 192.168.10.192/26 | .193 | .254 | .255 |

**Example 2 (CIDR).** An address in a block is 200.10.20.77/27. Find the block.
- /27 → mask 255.255.255.224; block size 32. 77 lies in 64 to 95.
- Network address **200.10.20.64**; broadcast **200.10.20.95**; usable hosts 2⁵ − 2 = **30** (.65 to .94).

**Example 3 (fragmentation).** A 4,000-byte datagram (20-byte header, 3,980 bytes data) crosses a link with MTU 1,500. Each fragment can carry 1,480 data bytes (a multiple of 8).
- Fragment 1: data 1,480, offset 0, MF = 1. Fragment 2: data 1,480, offset 185, MF = 1. Fragment 3: data 1,020, offset 370, MF = 0.

**Example 4 (Dijkstra).** Links: A–B 4, A–C 2, B–C 1, B–D 5, C–D 8, C–E 10, D–E 2. Shortest paths from A:

| Step | Node added | B | C | D | E |
|---|---|---|---|---|---|
| 1 | A | 4 (A) | 2 (A) | ∞ | ∞ |
| 2 | C | 3 (C) | **2** | 10 (C) | 12 (C) |
| 3 | B | **3** | | 8 (B) | 12 (C) |
| 4 | D | | | **8** | 10 (D) |
| 5 | E | | | | **10** |

Result: B = 3 (A→C→B), C = 2, D = 8 (A→C→B→D), E = 10 (A→C→B→D→E).

**Example 5 (distance vector update).** Router A has neighbours B (cost 2) and C (cost 5). B reports distance 4 to D; C reports distance 1 to D. A's distance to D = min(2 + 4, 5 + 1) = **6** (via either B or C; a tie).

**Example 6 (token bucket).** Capacity C = 1 MB, token rate r = 2 MBps, output rate M = 25 MBps. Maximum burst time S = C/(M − r) = 1/23 s ≈ **43 ms**.

### Formulas to remember

- Hosts per subnet = 2^h − 2; block size = 256 − mask octet.
- Fragment offset = byte offset/8.
- Bellman-Ford: D_x(y) = min_v {c(x, v) + D_v(y)}.
- Token bucket burst time S = C/(M − r).

### Important questions

1. Explain IPv4 addressing: classful addressing, subnetting and CIDR. Solve a subnetting problem.
2. Draw and explain the IPv4 header. Explain fragmentation with an example.
3. Explain ARP, RARP, DHCP and ICMP.
4. Compare distance vector and link state routing. Explain the count-to-infinity problem and its solutions.
5. Find shortest paths using Dijkstra's algorithm. Explain RIP, OSPF and BGP.
6. Explain congestion control: leaky bucket and token bucket algorithms; choke packets.
7. Explain the IPv6 header and compare IPv4 with IPv6. How does transition from IPv4 to IPv6 happen?

---

## Unit 4: Transport Layer

### 2-mark definitions

- **Transport layer:** provides process-to-process (end-to-end) delivery between applications on different hosts.
- **Port number:** a 16-bit number identifying a process on a host: well-known 0 to 1023 (HTTP 80, HTTPS 443, FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53, DHCP 67/68, POP3 110, IMAP 143, SNMP 161), registered 1024 to 49151, dynamic 49152 to 65535.
- **Socket address:** IP address + port number. A TCP connection is identified by the 4-tuple (source IP, source port, destination IP, destination port).
- **Multiplexing and demultiplexing:** at the sender, many processes share the transport layer (multiplexing); at the receiver, segments are delivered to the right process by port number (demultiplexing).
- **UDP (User Datagram Protocol):** a connectionless, unreliable transport protocol with an 8-byte header.
- **TCP (Transmission Control Protocol):** a connection-oriented, reliable, byte-stream transport protocol with flow and congestion control.
- **MSS (Maximum Segment Size):** the largest amount of data in one TCP segment.
- **RTT (Round Trip Time):** the time for a segment to go to the receiver and its ACK to return.
- **Flow control (TCP):** the receiver advertises its free buffer space (rwnd) so the sender does not overflow it.
- **Congestion window (cwnd):** a sender-side limit based on the network's capacity; the sender's window = min(rwnd, cwnd).
- **Silly window syndrome:** sending or advertising very small segments, wasting bandwidth; solved by Nagle's algorithm (sender) and Clark's solution (receiver).
- **QoS (Quality of Service):** the ability to give traffic guaranteed reliability, delay, jitter and bandwidth.

### Core concepts

**UDP**
- Header: source port (16), destination port (16), length (16), checksum (16).
- No connection setup, no acknowledgements, no ordering, no flow or congestion control.
- Used for DNS, DHCP, SNMP, TFTP, streaming video, VoIP, online games (speed matters more than reliability) and multicast.

**TCP header (20 to 60 bytes):** source port, destination port, sequence number (32), acknowledgement number (32), header length (4), reserved, flags (URG, ACK, PSH, RST, SYN, FIN; also CWR, ECE), window size (16), checksum (16), urgent pointer (16), options (MSS, window scale, SACK, timestamps).

**TCP vs UDP**

| TCP | UDP |
|---|---|
| Connection-oriented (handshake) | Connectionless |
| Reliable: ACKs, retransmission, ordering | Unreliable, no ordering |
| Flow and congestion control | None |
| Header 20 to 60 bytes | Header 8 bytes |
| Byte stream | Message (datagram) |
| Slower | Faster, lower overhead |
| HTTP, FTP, SMTP, SSH | DNS, DHCP, VoIP, video streaming, SNMP |

**Connection management**
- **Three-way handshake:** client sends SYN (seq = x); server replies SYN + ACK (seq = y, ack = x + 1); client sends ACK (ack = y + 1). SYN consumes one sequence number.
- **Connection release (four-way):** FIN → ACK, then FIN → ACK from the other side (half-close is possible). The side that closes first waits in TIME_WAIT for 2 × MSL so that late duplicates expire.
- **TCP state diagram:** CLOSED, LISTEN, SYN_SENT, SYN_RCVD, ESTABLISHED, FIN_WAIT_1, FIN_WAIT_2, CLOSE_WAIT, LAST_ACK, CLOSING, TIME_WAIT.
- **SYN flooding attack:** an attacker sends many SYNs and never completes the handshake; defended with SYN cookies.

**Flow control and retransmission**
- Sliding window in bytes: the sender can have up to min(rwnd, cwnd) unacknowledged bytes.
- ACKs are cumulative (ack number = next byte expected). Delayed ACK and piggybacking reduce traffic.
- **Retransmission:** on timeout (RTO) or on 3 duplicate ACKs (fast retransmit).
- **RTO calculation (Jacobson/Karels):** EstimatedRTT = (1 − α) EstimatedRTT + α SampleRTT (α = 1/8); DevRTT = (1 − β) DevRTT + β |SampleRTT − EstimatedRTT| (β = 1/4); RTO = EstimatedRTT + 4 DevRTT. Karn's algorithm: ignore RTT samples of retransmitted segments and double the RTO after each timeout.
- **Window management:** zero-window advertisement with persistence timer (window probes); window scaling option for high-speed links.

**TCP congestion control**
1. **Slow start:** cwnd starts at 1 MSS and doubles every RTT (exponential growth) until it reaches ssthresh.
2. **Congestion avoidance:** above ssthresh, cwnd increases by 1 MSS per RTT (additive increase).
3. **On timeout:** ssthresh = cwnd/2; cwnd = 1 MSS; slow start again (TCP Tahoe).
4. **On 3 duplicate ACKs (fast retransmit and fast recovery, TCP Reno):** ssthresh = cwnd/2; cwnd = ssthresh (+3); continue with congestion avoidance.
- This behaviour is called **AIMD** (additive increase, multiplicative decrease).

**Quality of Service**
- Flow characteristics: reliability, delay, jitter, bandwidth.
- Techniques: scheduling (FIFO, priority queuing, weighted fair queuing), traffic shaping (leaky and token bucket), resource reservation, admission control.
- **Integrated Services (IntServ):** per-flow reservation using RSVP; guaranteed and controlled-load services; does not scale well.
- **Differentiated Services (DiffServ):** packets marked with a DSCP value in the IP header; routers apply per-hop behaviours (expedited forwarding, assured forwarding); scalable.

### Solved examples

**Example 1 (TCP congestion window).** ssthresh = 16 MSS, cwnd starts at 1, a timeout occurs when cwnd = 20.
- RTT 1 to 5: 1, 2, 4, 8, 16 (slow start).
- RTT 6 to 9: 17, 18, 19, 20 (congestion avoidance).
- Timeout at 20: ssthresh = 10, cwnd = 1.
- RTT 10 to 14: 1, 2, 4, 8, **10** (capped at the new ssthresh), then 11, 12, … linearly.

**Example 2 (sequence numbers).** A TCP connection starts with ISN 1000 and sends 3 segments of 500 bytes each. Sequence numbers: SYN uses 1000; data bytes start at 1001. Segments: 1001–1500, 1501–2000, 2001–2500. The ACK after all three is **2501**.

**Example 3 (RTO).** EstimatedRTT = 100 ms, DevRTT = 10 ms, SampleRTT = 120 ms.
- EstimatedRTT = 0.875 × 100 + 0.125 × 120 = **102.5 ms**.
- DevRTT = 0.75 × 10 + 0.25 × |120 − 102.5| = 7.5 + 4.375 = **11.875 ms**.
- RTO = 102.5 + 4 × 11.875 = **150 ms**.

**Example 4 (throughput limit).** Window 64 KB (65,535 bytes), RTT 20 ms. Maximum throughput = window/RTT = 65,535 × 8/0.02 ≈ **26.2 Mbps**, whatever the link speed. Window scaling is needed for faster links.

### Formulas to remember

- Sender window = min(rwnd, cwnd).
- EstimatedRTT = 0.875 E + 0.125 S; DevRTT = 0.75 D + 0.25 |S − E|; RTO = E + 4D.
- Throughput ≤ window/RTT.
- Timeout: ssthresh = cwnd/2, cwnd = 1. Triple duplicate ACK: ssthresh = cwnd/2, cwnd = ssthresh.

### Important questions

1. Explain process-to-process delivery, port numbers, sockets, multiplexing and demultiplexing.
2. Explain the UDP header and its uses. Compare TCP and UDP.
3. Draw and explain the TCP header.
4. Explain TCP connection establishment and release with diagrams and the TCP state diagram.
5. Explain TCP flow control, retransmission (RTO, fast retransmit) and window management, including silly window syndrome.
6. Explain TCP congestion control (slow start, congestion avoidance, fast recovery) with a graph.
7. What is QoS? Explain IntServ and DiffServ.

---

## Unit 5: Application Layer

### 2-mark definitions

- **DNS (Domain Name System):** a distributed, hierarchical database that maps domain names to IP addresses; uses UDP port 53 (TCP for zone transfers and large replies).
- **Resolver:** the DNS client in the host that sends queries.
- **Recursive vs iterative query:** in a recursive query the server returns the final answer (asking other servers itself); in an iterative query the server returns a referral to another server.
- **WWW (World Wide Web):** a distributed system of linked documents (web pages) identified by URLs and accessed through HTTP.
- **URL:** protocol://host:port/path?query, for example https://www.example.com:443/index.html.
- **HTTP:** the stateless request-response protocol of the web (port 80; HTTPS on 443 with TLS).
- **Cookie:** a small piece of data the server asks the browser to store and send back, used to keep state (login sessions, carts).
- **SMTP:** Simple Mail Transfer Protocol; push protocol to send mail between servers (port 25; 587 for submission).
- **POP3 and IMAP:** protocols to read mail from a mail server; POP3 (port 110) downloads and usually deletes; IMAP (port 143) keeps mail on the server with folders and synchronization.
- **MIME:** Multipurpose Internet Mail Extensions; lets email carry non-ASCII text, images, audio and attachments.
- **FTP:** File Transfer Protocol; uses two TCP connections: control (port 21) and data (port 20 in active mode).
- **Telnet and SSH:** remote login protocols. Telnet (port 23) sends everything in plain text; SSH (port 22) encrypts the session.
- **SNMP:** Simple Network Management Protocol; a manager polls agents on devices for values stored in a MIB (UDP 161; traps on 162).
- **Cryptography:** the science of securing messages by converting plaintext into ciphertext with a key.

### Core concepts

**DNS**
- **Name space:** a tree; root → top-level domains (generic .com, .org, .edu; country .in, .uk) → second-level domains (example.com) → subdomains. A fully qualified domain name ends at the root (www.example.com.).
- **Servers:** root servers (13 logical names, many physical copies), TLD servers, authoritative servers (primary and secondary), local (caching) DNS servers.
- **Resource records:** A (IPv4 address), AAAA (IPv6), CNAME (alias), MX (mail server), NS (name server), PTR (reverse lookup), SOA (start of authority), TXT.
- **Resolution example (iterative):** browser asks local DNS for www.example.com → local server asks a root server (referral to .com TLD) → asks the .com TLD server (referral to example.com's authoritative server) → asks the authoritative server (gets the A record) → returns the IP to the client and caches it with a TTL.

**WWW and HTTP**
- Client (browser) and server; pages written in HTML; static, dynamic (generated on the server) and active (scripts run in the browser) documents.
- **HTTP methods:** GET (retrieve), POST (send data), PUT (replace), DELETE, HEAD (headers only), PATCH, OPTIONS.
- **Status codes:** 1xx informational, 2xx success (200 OK, 201 Created), 3xx redirection (301 Moved Permanently, 304 Not Modified), 4xx client error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found), 5xx server error (500 Internal Server Error, 503 Service Unavailable).
- **Non-persistent vs persistent connections:** HTTP/1.0 opens one TCP connection per object (2 RTT per object + transmission); HTTP/1.1 keeps the connection open (persistent, pipelining). HTTP/2 adds multiplexing of streams and header compression; HTTP/3 runs over QUIC (UDP).
- Web caching (proxy servers) reduces response time and traffic; conditional GET (If-Modified-Since) checks freshness.

**Email architecture:** user agent (Outlook, Gmail web) → SMTP → sender's mail server → SMTP → receiver's mail server (mailbox) → POP3/IMAP/HTTP → receiver's user agent. SMTP commands: HELO/EHLO, MAIL FROM, RCPT TO, DATA, QUIT. Message format: header (From, To, Subject, Date) + blank line + body; MIME headers: MIME-Version, Content-Type, Content-Transfer-Encoding (base64).

**FTP:** control connection stays open for the session (commands like USER, PASS, LIST, RETR, STOR, QUIT; replies with 3-digit codes); a new data connection is opened for each file transfer. Active mode: the server connects to the client from port 20; passive mode: the client connects to a port the server gives (works through firewalls). Transfer modes: stream, block, compressed; file types: ASCII, binary (image). TFTP is a simple UDP version (port 69).

**Remote login:** Telnet uses the Network Virtual Terminal (NVT) to hide terminal differences; it is insecure. SSH provides encrypted login, command execution, file transfer (SCP, SFTP) and port forwarding, with server authentication by host keys and user authentication by password or public key.

**Network management (SNMP):** components are the manager (NMS), agents on managed devices, and the MIB (Management Information Base, a tree of objects named by OIDs using SMI rules). Operations: GetRequest, GetNextRequest, GetBulkRequest, SetRequest, Response, Trap (agent sends an alert). Versions: v1, v2c (community strings), v3 (authentication and encryption). Functions of network management: fault, configuration, accounting, performance and security (FCAPS).

**Data compression**
- **Lossless:** the original data can be recovered exactly. Run-length encoding, Huffman coding (variable-length codes based on frequency), LZW/dictionary coding (ZIP, GIF, PNG).
- **Lossy:** some information is lost for much higher compression; based on human perception. JPEG (DCT, quantization), MPEG (I, P, B frames; motion compensation), MP3 (psychoacoustic model).

**Basics of cryptography**
- **Symmetric key:** the same secret key encrypts and decrypts (DES with 56-bit key, 3DES, AES with 128/192/256-bit keys). Fast; the problem is key distribution (n(n − 1)/2 keys for n users).
- **Asymmetric (public key):** a public key encrypts, the matching private key decrypts (RSA, ECC); also used for digital signatures. Slower; solves key distribution (2n keys for n users).
- **RSA steps:** choose primes p, q; n = pq; φ = (p − 1)(q − 1); choose e with gcd(e, φ) = 1; d = e⁻¹ mod φ. Encrypt C = M^e mod n; decrypt M = C^d mod n.
- **Hash functions** (SHA-256) for integrity; **digital signatures** for authentication and non-repudiation; **Diffie-Hellman** for key exchange; **TLS** combines them to secure HTTP (HTTPS).
- Security services: confidentiality, integrity, authentication, non-repudiation, access control, availability.

### Solved examples

**Example 1 (HTTP timing).** A page has a base HTML file and 10 images, RTT = 50 ms (ignore transmission time).
- Non-persistent, serial: each object needs 2 RTT (TCP setup + request), so 11 × 2 × 50 = **1,100 ms**.
- Persistent without pipelining: 1 RTT for setup + 1 RTT per object = 50 + 11 × 50 = **600 ms**.
- Persistent with pipelining: setup + base file (2 RTT) + 1 RTT for all images = **150 ms**.

**Example 2 (RSA).** p = 3, q = 11: n = 33, φ = 20; choose e = 3 (gcd(3, 20) = 1); d = 7 (since 3 × 7 = 21 ≡ 1 mod 20).
- Encrypt M = 4: C = 4³ mod 33 = 64 mod 33 = **31**.
- Decrypt: 31⁷ mod 33 = **4**. ✓

**Example 3 (Huffman).** Symbols A (0.4), B (0.3), C (0.2), D (0.1). Merge D + C = 0.3, then (DC) + B = 0.6, then + A = 1.0. Codes: A = 0, B = 10, C = 110, D = 111. Average length = 0.4 × 1 + 0.3 × 2 + 0.2 × 3 + 0.1 × 3 = **1.9 bits/symbol** (vs 2 bits for fixed length).

### Formulas / key points to remember

- Port numbers: 20/21 FTP, 22 SSH, 23 Telnet, 25 SMTP, 53 DNS, 67/68 DHCP, 80 HTTP, 110 POP3, 143 IMAP, 161/162 SNMP, 443 HTTPS.
- DNS records: A, AAAA, CNAME, MX, NS, PTR, SOA.
- HTTP status classes 1xx to 5xx.
- Symmetric keys n(n − 1)/2; asymmetric 2n.
- RSA: n = pq, φ = (p − 1)(q − 1), ed ≡ 1 mod φ.

### Important questions

1. Explain DNS: name space, servers, resource records, and recursive and iterative resolution.
2. Explain WWW and HTTP: request and response format, methods, status codes, persistent and non-persistent connections, cookies.
3. Explain the email architecture with SMTP, POP3, IMAP and MIME.
4. Explain FTP with its two connections. Compare Telnet and SSH.
5. Explain SNMP: manager, agent, MIB and operations.
6. Compare lossless and lossy compression with examples.
7. Explain symmetric and asymmetric cryptography. Solve an RSA example.

---

## Last-hour checklist

- [ ] OSI layers with functions and data units; TCP/IP; OSI vs TCP/IP.
- [ ] Devices by layer; topologies; guided vs unguided media.
- [ ] NRZ, Manchester, differential Manchester; impairments; Nyquist and Shannon (34.9 kbps example).
- [ ] Circuit vs packet vs virtual circuit; FDM, TDM, WDM.
- [ ] Bit stuffing; parity, checksum, CRC (remainder 1110 example); Hamming (0110011 example).
- [ ] Stop-and-wait efficiency (2.44%); GBN vs SR windows.
- [ ] ALOHA (18.4%, 36.8%); CSMA types; CSMA/CD backoff; CSMA/CA; Ethernet frame.
- [ ] Learning bridge; spanning tree steps.
- [ ] IPv4 header; fragmentation; classes; subnetting table (/26); CIDR (/27 example).
- [ ] ARP, RARP, DHCP (DORA), ICMP.
- [ ] Distance vector vs link state; count to infinity; Dijkstra table; RIP, OSPF, BGP.
- [ ] Leaky and token bucket; IPv6 header and transition.
- [ ] Ports; UDP header; TCP header; TCP vs UDP.
- [ ] Three-way handshake; four-way release; TIME_WAIT; RTO formula; cwnd example.
- [ ] QoS: IntServ, DiffServ.
- [ ] DNS records and resolution; HTTP methods and codes; SMTP, POP3, IMAP, MIME; FTP; SSH; SNMP.
- [ ] Compression; symmetric vs asymmetric; RSA example.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Data Communication and Networking | Behrouz A. Forouzan | McGraw Hill | [WorldCat](https://search.worldcat.org/search?q=Data+Communications+and+Networking+Forouzan) |
| 2 | Computer Networks | Andrew S. Tanenbaum | Pearson / Prentice Hall | [WorldCat](https://search.worldcat.org/search?q=Computer+Networks+Tanenbaum) |
| 3 | Data and Computer Communication | William Stallings | Pearson | [WorldCat](https://search.worldcat.org/search?q=Data+and+Computer+Communications+Stallings) |
| 4 | Computer Networking: A Top-Down Approach | James F. Kurose, Keith W. Ross | Pearson | [WorldCat](https://search.worldcat.org/search?q=Computer+Networking+A+Top-Down+Approach+Kurose+Ross) |
| 5 | Computer Networks: A Systems Approach | Larry L. Peterson, Bruce S. Davie | Morgan Kaufmann | [WorldCat](https://search.worldcat.org/search?q=Computer+Networks+A+Systems+Approach+Peterson+Davie) |
| 6 | Understanding Communications and Networks | William A. Shay | Cengage Learning | [WorldCat](https://search.worldcat.org/search?q=Understanding+Communications+and+Networks+Shay) |
| 7 | Computer Networks and Internets | Douglas E. Comer | Pearson | [WorldCat](https://search.worldcat.org/search?q=Computer+Networks+and+Internets+Comer) |
| 8 | TCP/IP Protocol Suite | Behrouz A. Forouzan | McGraw Hill | [WorldCat](https://search.worldcat.org/search?q=TCP%2FIP+Protocol+Suite+Forouzan) |

Peterson and Davie's "Computer Networks: A Systems Approach" is also published free online by its authors at book.systemsapproach.org.

**Syllabus source:** [AKTU B.Tech 3rd year CS/IT syllabus, 2024-25 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/B-TECH-CSIT-IT-3rd-YR-2024-25-AKTU-26112024.pdf)

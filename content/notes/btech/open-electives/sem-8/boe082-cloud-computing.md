---
program: btech
branches: [all]
semester: 8
code: BOE082
name: Cloud Computing
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 4th year, Open Elective-III, 2025-26 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf
units:
  - Introduction, Architecture and Cloud Tools
  - Cloud Service Models and Providers
  - Collaborating Using Cloud Services
  - Virtualization
  - Security, Standards, Access and Cloud Technologies
---

# BOE082 Cloud Computing: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: the theory, with comparison tables.
3. **Solved examples**: short worked problems (Amdahl's law, cost, availability, server consolidation, MapReduce trace, HDFS blocks).
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (definition, evolution, architecture, cloud types, business models, players, issues, Eucalyptus/Nimbus/OpenNebula/CloudSim) and Unit 2 (SaaS, PaaS, IaaS, DBaaS, MaaS, CaaS and providers).
- **Afternoon (3 hours):** Unit 3 (collaboration tools) and Unit 4 (virtualization, VMMs, hypervisors).
- **Evening (2 hours):** Unit 5 (security, standards, end-user and mobile access, Hadoop, MapReduce, Google App Engine), then the "Last-hour checklist".
- **In the exam:** draw the cloud architecture, the service-model stack and a hypervisor diagram. Use comparison tables; they score well.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Introduction, Architecture and Cloud Tools

### 2-mark definitions

- **Cloud computing (NIST SP 800-145):** a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (networks, servers, storage, applications and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction.
- **Parallel computing:** many processors working at the same time on parts of one problem, usually with shared memory and tight coupling.
- **Distributed computing:** many independent computers connected by a network, each with its own memory, cooperating by passing messages.
- **Grid computing:** combining loosely coupled, geographically spread resources from several organizations to solve large problems.
- **Utility computing:** offering computing as a metered service, like electricity, paid for by use.
- **Multi-tenancy:** one instance of software or hardware serving many customers whose data is kept isolated.
- **Elasticity:** growing and shrinking resources automatically to match demand.
- **Eucalyptus:** "Elastic Utility Computing Architecture for Linking Your Programs To Useful Systems", an open-source tool for building AWS-compatible private and hybrid IaaS clouds.
- **OpenNebula:** an open-source toolkit for managing virtualized data centres and building private, public and hybrid IaaS clouds.
- **CloudSim:** a Java-based simulation toolkit (University of Melbourne, CLOUDS Lab) for modelling and testing cloud data centres, VM allocation and scheduling policies without real hardware.

### Core concepts

**Evolution of cloud computing**

| Stage | Period | Key idea |
|---|---|---|
| Mainframes and time sharing | 1960s–70s | Many users share one computer through terminals |
| Client-server | 1980s | PCs connect to central servers |
| Cluster computing | 1990s | Many machines in one place act as one |
| Grid computing | Late 1990s | Resources shared across organizations |
| Utility computing | 2000s | Metered computing like a utility |
| Virtualization | 2000s | Many VMs on one host (VMware, Xen) |
| SOA and web services | 2000s | Software as reusable services |
| Cloud computing | 2006 onwards | Salesforce (1999, SaaS), AWS S3 and EC2 (2006), Google App Engine (2008), Azure (2010) |

**Parallel and distributed principles:** Flynn's taxonomy (SISD, SIMD, MISD, MIMD); shared vs distributed memory; data and task parallelism; goals of distributed systems (resource sharing, openness, concurrency, scalability, fault tolerance, transparency). **Amdahl's law:** speedup = 1 / ((1 − f) + f/N).

**Five essential characteristics (NIST):** on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service.

**Cloud architecture** (draw it): front end (client devices, browsers, apps) ↔ network/Internet ↔ back end (cloud service layer: SaaS/PaaS/IaaS; management layer: provisioning, monitoring, billing, security; virtualization layer; physical data centre: servers, storage, network). The **layered model**: hardware → infrastructure (IaaS) → platform (PaaS) → application (SaaS).

**Types of cloud (deployment models)**

| Feature | Public | Private | Hybrid | Community |
|---|---|---|---|---|
| Owner | Provider | One organization | Mix | Group of organizations |
| Cost | Low, pay per use | High upfront | Medium | Shared |
| Security and control | Lower | Highest | Balanced | Medium |
| Scalability | Very high | Limited by hardware | High (cloud bursting) | Medium |
| Example | AWS, Azure, GCP | OpenStack in a bank | Core in private, web front in public | Government cloud (MeghRaj) |

**Business models around cloud**
- **Pay-per-use (utility):** pay for compute hours, GB stored, requests (AWS EC2 on-demand).
- **Subscription:** monthly or yearly per user (Microsoft 365, Salesforce).
- **Freemium:** free basic tier, pay for premium (Dropbox, Google Drive).
- **Reserved/committed use:** discount for a 1–3 year commitment.
- **Spot/auction:** spare capacity at a discount that can be reclaimed.
- **Advertising-supported:** free service paid for by ads (consumer apps).
- **Brokerage and reselling:** cloud brokers aggregate and resell services.
- Effect on business: CapEx becomes OpEx, faster time to market, lower entry barriers for startups.

**Major players:** Amazon Web Services (largest IaaS), Microsoft Azure, Google Cloud, IBM Cloud, Oracle Cloud, Salesforce (SaaS/PaaS), Alibaba Cloud; in India: Jio, Airtel, Tata Communications, government MeghRaj (NIC).

**Issues in cloud computing:** security and privacy, data location and jurisdiction, availability and outages, vendor lock-in and interoperability, performance and latency, compliance and legal issues (India DPDP Act 2023), cost management, limited control and transparency, bandwidth and data transfer cost, SLA enforcement.

**Cloud tools**

| Tool | Type | Key features |
|---|---|---|
| **Eucalyptus** | Open-source private/hybrid IaaS | AWS API compatible (EC2, S3 via Walrus); components: Cloud Controller (CLC), Cluster Controller (CC), Node Controller (NC), Walrus (storage), Storage Controller (SC) |
| **Nimbus** | Open-source IaaS for science | Lets scientists lease remote resources as VMs; EC2-compatible; Cumulus storage; context broker for virtual clusters |
| **OpenNebula** | Open-source cloud management | Manages KVM, VMware, Xen; private, public, hybrid; front-end + hosts + datastores; Sunstone web UI |
| **CloudSim** | Simulation toolkit (Java) | Models data centres, hosts, VMs, cloudlets (tasks), brokers; test VM allocation, scheduling, energy policies; extensions CloudAnalyst, iFogSim |

**Why simulate (CloudSim):** real clouds are costly, cannot be repeated exactly and cannot be controlled; simulation lets researchers test policies at scale, repeatably and for free. Main CloudSim classes: Datacenter, Host, Vm, Cloudlet, DatacenterBroker, VmAllocationPolicy, CloudletScheduler.

### Solved examples

**Example 1: Amdahl's law.** 90% of a program is parallel. Speedup on 8 processors = 1 / (0.1 + 0.9/8) = 1 / 0.2125 = **4.71**. Maximum with infinite processors = 1/0.1 = **10**.

**Example 2: Buy vs rent.** A startup needs 10 servers for 6 months. Buying: 10 × ₹2,00,000 = ₹20,00,000. Cloud at ₹20 per server-hour: 10 × 20 × 24 × 180 = **₹8,64,000**. If it needs 10 servers for 8 hours a day and 2 otherwise: 20 × 180 × (10 × 8 + 2 × 16) = **₹4,03,200**, showing the gain from elasticity. (Prices are illustrative.)

### Key points to remember

- NIST definition; five characteristics; four deployment models.
- Evolution: mainframe → client-server → cluster → grid → utility → virtualization → cloud.
- Business models: pay-per-use, subscription, freemium, reserved, spot.
- Tools: Eucalyptus (AWS-compatible private cloud), Nimbus (science IaaS), OpenNebula (data-centre management), CloudSim (simulation).

### Important questions

1. Define cloud computing. Trace its evolution and explain its essential characteristics.
2. Explain parallel and distributed computing principles. State Amdahl's law.
3. Draw and explain the cloud architecture. Compare public, private, hybrid and community clouds.
4. Explain cloud business models and the major players. Discuss the issues in cloud computing.
5. Explain Eucalyptus, Nimbus, OpenNebula and CloudSim.

---

## Unit 2: Cloud Service Models and Providers

### 2-mark definitions

- **SaaS (Software as a Service):** complete applications delivered over the Internet and used through a browser (Gmail, Salesforce, Microsoft 365).
- **PaaS (Platform as a Service):** a platform (runtime, middleware, database) to build and deploy apps without managing servers (Google App Engine, Heroku, Azure App Service).
- **IaaS (Infrastructure as a Service):** virtual machines, storage and networks; the user manages the OS and above (AWS EC2, Google Compute Engine, Azure VMs).
- **DBaaS (Database as a Service):** a managed database the provider installs, patches, backs up and scales (Amazon RDS, Azure SQL Database, Google Cloud SQL, MongoDB Atlas).
- **MaaS (Monitoring as a Service):** outsourced monitoring of servers, networks, applications and security events, delivered from the cloud (Amazon CloudWatch, Datadog, Azure Monitor).
- **CaaS (Communication as a Service):** outsourced enterprise communication: VoIP, instant messaging, video conferencing, delivered as a service (Twilio, Zoom, Microsoft Teams). (CaaS is also used for "Containers as a Service".)
- **XaaS:** "anything as a service", the general idea of delivering any IT function as a metered service.
- **SLA (service level agreement):** a contract stating service levels (availability, response time) and penalties.

### Core concepts

**Who manages what**

| Item | On-premises | IaaS | PaaS | SaaS |
|---|---|---|---|---|
| Applications | You | You | You | Provider |
| Data | You | You | You | Provider (you own it) |
| Runtime, middleware | You | You | Provider | Provider |
| OS | You | You | Provider | Provider |
| Virtualization | You | Provider | Provider | Provider |
| Servers, storage, network | You | Provider | Provider | Provider |

**SaaS:** characteristics (multi-tenant, browser access, subscription, automatic updates, central management). Pros: no install, low cost, anywhere access. Cons: limited customization, data control, Internet dependence. Examples: Google Workspace, Microsoft 365, Salesforce CRM, Zoho.

**PaaS:** development tools, runtime, database, scaling built in; developer only writes code. Pros: fast development, no server management, auto-scaling. Cons: vendor lock-in, limited control over environment. Examples: Google App Engine, Heroku, Azure App Service, AWS Elastic Beanstalk, Salesforce Force.com.

**IaaS:** virtual servers, block and object storage, networks, load balancers; full control over OS. Pros: flexibility, pay per use, run legacy software. Cons: you manage OS and security, need skills. Examples: AWS EC2 + S3, Google Compute Engine, Azure VMs, IBM Cloud, OpenStack.

**DBaaS:** features (automated backups, replication, patching, scaling, monitoring); relational (Amazon RDS for MySQL/PostgreSQL, Aurora, Azure SQL) and NoSQL (DynamoDB, Firestore, Cosmos DB, MongoDB Atlas). Benefits: no DBA work for routine tasks, high availability. Concerns: data security, latency, cost at scale.

**MaaS:** what it monitors (uptime, CPU, memory, disk, network, logs, application performance, security events); features: dashboards, alerts, thresholds, log analysis, SLA reports. Benefits: early detection, no in-house tools needed, 24×7 coverage. Examples: CloudWatch, Azure Monitor, Datadog, New Relic, Nagios-based services.

**CaaS (Communication as a Service):** hosted VoIP, unified communications, IM, video conferencing, contact centres. Advantages: no PBX hardware, pay per user, flexible scaling, fixed and predictable cost, quality of service handled by provider, business continuity. Examples: Twilio, Zoom, Microsoft Teams, Google Meet, Exotel (India).

**Providers and their main services**

| Provider | IaaS | PaaS | SaaS / other |
|---|---|---|---|
| **Google** | Compute Engine, Cloud Storage | App Engine, Cloud Run, Firebase | Gmail, Docs, Drive (Workspace), BigQuery |
| **Amazon (AWS)** | EC2, S3, EBS, VPC | Elastic Beanstalk, Lambda (serverless) | RDS, DynamoDB, CloudWatch, SNS/SQS |
| **Microsoft Azure** | Virtual Machines, Blob Storage | App Service, Azure Functions | Microsoft 365, Azure SQL, Teams |
| **IBM** | IBM Cloud Virtual Servers | IBM Cloud Foundry, Red Hat OpenShift | Watson AI, Db2 on Cloud |
| **Salesforce** | — | Force.com / Lightning Platform, Heroku | Sales Cloud, Service Cloud (CRM) |

### Solved examples

**Example 1: Pick the model.**
- A college wants email for all students: **SaaS** (Google Workspace).
- A developer wants to deploy a Python web app without servers: **PaaS** (App Engine).
- A company must run a legacy app needing a specific OS: **IaaS** (EC2).
- A startup wants a MySQL database without hiring a DBA: **DBaaS** (Amazon RDS).
- An e-commerce firm wants alerts when its site slows: **MaaS** (CloudWatch).
- A call centre wants VoIP and IVR without a PBX: **CaaS** (Twilio/Exotel).

**Example 2: Availability and downtime.** 99.9% availability allows 0.001 × 365 × 24 = **8.76 h** of downtime a year; 99.99% allows **52.6 min**. Two independent replicas each 99% with failover: 1 − 0.01² = **99.99%**. Two components in series each 99.9%: 0.999² ≈ **99.8%**.

### Key points to remember

- SPI: SaaS (use), PaaS (build), IaaS (host).
- DBaaS = managed database; MaaS = monitoring; CaaS = communication (VoIP, IM, video).
- Google: App Engine; AWS: EC2/S3; Azure: VMs/App Service; IBM: Watson/OpenShift; Salesforce: CRM/Force.com.
- 99.9% = 8.76 h/year downtime.

### Important questions

1. Explain SaaS, PaaS and IaaS with examples, merits and demerits. Show who manages what.
2. Explain Database as a Service and Monitoring as a Service.
3. What is Communication as a Service? Explain its advantages.
4. Compare the cloud offerings of Google, Amazon, Microsoft, IBM and Salesforce.
5. Explain SLA and availability calculations.

---

## Unit 3: Collaborating Using Cloud Services

### 2-mark definitions

- **Cloud collaboration:** people working together on the same files, calendars, tasks or projects through web-based applications, from anywhere, often in real time.
- **Web-based email:** email stored and accessed on the provider's servers through a browser or app (Gmail, Outlook.com), with search, spam filtering and large storage.
- **CRM (customer relationship management):** software that stores and manages contacts, leads, sales and support interactions with customers (Salesforce, Zoho CRM, HubSpot).
- **Project management software:** tools to plan tasks, assign people, track deadlines and progress (Trello, Asana, Jira, Basecamp, Microsoft Planner).
- **Event management:** online tools to plan events, send invitations, take registrations and payments, track RSVPs (Eventbrite, Google Forms + Calendar).
- **Online calendar:** a shared calendar in the cloud for scheduling meetings and events with reminders and invitations (Google Calendar, Outlook Calendar).
- **Groupware:** software that supports a group working together: shared documents, calendars, messaging, workflow (Microsoft 365, Google Workspace, Zoho Workplace).
- **Real-time co-authoring:** several users editing one document at the same time and seeing each other's changes instantly.
- **Online database:** a database created and used through a browser without installing software (Airtable, Zoho Creator, Google Sheets as simple DB, Firebase).
- **Social networking for business:** using social platforms (LinkedIn, Yammer/Viva Engage, Slack communities) for communication, hiring and marketing.

### Core concepts

**Why collaborate in the cloud:** anywhere access, real-time co-editing, single version of truth (no emailing attachments), version history, sharing with permissions, lower cost, mobile access, automatic backup. **Concerns:** Internet dependence, data privacy, access control mistakes, vendor lock-in.

**Collaboration categories and tools**

| Need | What it does | Examples |
|---|---|---|
| Email | Web-based mail, search, labels, filters | Gmail, Outlook.com, Zoho Mail |
| Contact and CRM | Contacts, leads, sales pipeline, support tickets | Salesforce, Zoho CRM, HubSpot |
| Project management | Tasks, Gantt charts, boards, milestones | Trello, Asana, Jira, Basecamp |
| Task management | To-do lists, reminders, assignment | Google Tasks, Microsoft To Do, Todoist |
| Event management | Invitations, registration, RSVPs, tickets | Eventbrite, Google Forms, Zoom Events |
| Calendars | Shared calendars, meeting scheduling | Google Calendar, Outlook Calendar |
| Word processing | Online documents with co-authoring | Google Docs, Word Online, Zoho Writer |
| Spreadsheets | Shared spreadsheets, formulas, charts | Google Sheets, Excel Online |
| Presentations | Online slides | Google Slides, PowerPoint Online, Canva |
| Databases | Web-based databases and forms | Airtable, Zoho Creator, Firebase |
| File storage and sharing | Store, sync, share files | Google Drive, OneDrive, Dropbox |
| Communication | Chat, video meetings | Teams, Slack, Google Meet, Zoom |
| Social networks | Professional networking, internal social | LinkedIn, Viva Engage (Yammer) |
| Groupware suites | All of the above together | Google Workspace, Microsoft 365, Zoho Workplace |

**Collaborating on calendars, schedules and tasks:** shared family/team calendars, free/busy lookup, meeting invitations with RSVP, room booking, reminders by email and phone, calendar sharing with view/edit rights; task lists linked to calendar and email.

**Collaborating on event management:** create an event page, send invitations, collect registrations and fees, manage attendee lists, send reminders, post-event surveys, integrate with calendars and payment gateways.

**Collaborating on contact management and CRM:** central contact database for a sales team, lead tracking, sales pipeline and forecasts, customer support tickets, email integration, mobile access, analytics dashboards.

**Collaborating on project management:** shared project plans and Gantt charts, task boards (Kanban), assign owners and deadlines, file attachments, comments, progress reports, time tracking, integration with chat.

**Collaborating on word processing, spreadsheets and databases:** real-time co-authoring with colour-coded cursors, comments and suggestions, version history and restore, sharing links (view/comment/edit), offline mode, export to standard formats (DOCX, XLSX, PDF).

**Groupware features:** shared workspace, messaging, calendars, document management, workflow automation, video meetings, permissions and admin controls, search across content.

**Collaborating via social networks:** company pages, groups and communities, internal social networks for announcements and knowledge sharing, recruiting, customer engagement; risks: privacy, misinformation, time waste.

### Solved examples

**Example 1: Plan a college tech fest using cloud tools.**
1. **Google Workspace** for the core team: shared Drive folder, budget in Sheets, schedule in Docs.
2. **Google Calendar** for team meetings and the event timetable.
3. **Trello board** with lists: To do, Doing, Done; cards for sponsorship, venue, publicity, registration.
4. **Google Forms / Eventbrite** for participant registration and fees.
5. **Gmail / mailing lists** for confirmations and reminders.
6. **Google Meet / Teams** for remote meetings with sponsors.
7. **Instagram/LinkedIn** for publicity; responses tracked in a CRM sheet.

**Example 2: Version history saves the day.** A teammate deletes a section of the shared report. In Google Docs, open File → Version history, pick yesterday's version and restore it. No email attachments or file copies needed.

### Key points to remember

- Collaboration areas: email, CRM, projects, tasks, events, calendars, office apps, databases, social networks, groupware.
- Benefits: real-time co-editing, one version, anywhere, version history; concerns: privacy, Internet, lock-in.
- Groupware suites: Google Workspace, Microsoft 365, Zoho Workplace.

### Important questions

1. What is cloud collaboration? Explain its benefits and concerns.
2. Explain collaboration on calendars, schedules and task management with cloud tools.
3. Explain web-based CRM and project management applications.
4. Explain online word processing, spreadsheets and databases with real-time co-authoring.
5. Explain groupware and collaboration via social networks.

---

## Unit 4: Virtualization

### 2-mark definitions

- **Virtualization:** creating a software (virtual) version of a resource such as a server, storage, network or OS, so one physical resource appears as many, or many as one.
- **Virtual machine (VM):** a software computer that runs an OS and applications like a physical machine.
- **System virtual machine:** provides a complete system platform that runs a whole guest OS (VMware, VirtualBox, KVM).
- **Process virtual machine:** runs a single program/process and disappears when it ends, giving a platform-independent environment (Java JVM, .NET CLR).
- **Virtual machine monitor (VMM) / hypervisor:** the software layer that creates and runs VMs and shares hardware among them.
- **Type 1 (bare-metal) hypervisor:** runs directly on hardware (VMware ESXi, Xen, Hyper-V, KVM).
- **Type 2 (hosted) hypervisor:** runs as an application on a host OS (VirtualBox, VMware Workstation).
- **Binary translation:** the hypervisor scans the guest's machine code and replaces privileged/sensitive instructions with safe code at run time, so an unmodified guest OS can run (VMware's early approach).
- **Para-virtualization:** the guest OS is modified to call the hypervisor through hypercalls (Xen); faster, but needs OS changes.
- **Hardware-assisted virtualization:** CPU features (Intel VT-x, AMD-V) that let the hypervisor run in a special root mode so guest instructions trap correctly.

### Core concepts

**Need for virtualization:** server consolidation (most servers run at 5–15% utilization), cost saving (hardware, power, space), isolation of applications, fast provisioning from templates, testing and development, legacy app support, disaster recovery (VMs are files), basis of cloud multi-tenancy.

**Pros and cons**

| Pros | Cons |
|---|---|
| Higher hardware utilization | Performance overhead (a few %) |
| Lower cost and energy | Single host failure affects many VMs |
| Isolation and security between VMs | Licensing complexity |
| Snapshots, cloning, live migration | VM sprawl (too many unmanaged VMs) |
| Easier backup and disaster recovery | Hypervisor becomes an attack target |
| Run different OSes on one machine | Needs skilled admins and good hardware |

**System VM vs process VM**

| Feature | System VM | Process VM |
|---|---|---|
| Virtualizes | Whole machine (ISA + hardware) | One process/application |
| Runs | A full guest OS | One program |
| Lifetime | Until shut down | Created with the process, ends with it |
| Example | VMware, KVM, VirtualBox | JVM, .NET CLR, Python VM |

**Levels of virtualization:** ISA level (QEMU), hardware level (VMware, Xen, KVM), OS level (containers: Docker, LXC), library/API level (WINE), application level (JVM).

**Virtualization techniques for x86**
- Classic Popek–Goldberg requirement: all sensitive instructions must be privileged (trap). x86 has about 17 sensitive instructions that do not trap in user mode, so pure trap-and-emulate fails.
- **Full virtualization with binary translation:** kernel code is translated on the fly; user code runs directly. Guest OS is unmodified. (VMware Workstation, early ESX.)
- **Para-virtualization:** guest kernel modified to use hypercalls. Low overhead. (Xen.)
- **Hardware-assisted:** VT-x/AMD-V add root/non-root modes; VM exits on sensitive operations. Used by KVM, Hyper-V, modern VMware.
- **Memory:** shadow page tables or hardware EPT/NPT; ballooning, page sharing. **I/O:** device emulation, para-virtual drivers (virtio), passthrough (SR-IOV).

**Type 1 vs Type 2 hypervisor**

| Feature | Type 1 (bare metal) | Type 2 (hosted) |
|---|---|---|
| Runs on | Hardware directly | Host OS |
| Performance | High | Lower |
| Use | Data centres, cloud | Desktops, testing, learning |
| Security | Smaller attack surface | Host OS adds risk |
| Examples | ESXi, Xen, Hyper-V, KVM | VirtualBox, VMware Workstation, Parallels |

**Hypervisors in detail**

| Hypervisor | Type | Key points |
|---|---|---|
| **Xen** | Type 1, micro-kernel | Open source (Cambridge); Dom0 (privileged control domain with drivers) and DomU (guests); supports para-virtualization and HVM; used in early AWS EC2 and Citrix XenServer |
| **KVM** | Type 1 (in Linux kernel) | Kernel-based Virtual Machine; turns Linux into a hypervisor; needs VT-x/AMD-V; QEMU does device emulation; each VM is a Linux process; used by OpenStack, Google Cloud, AWS Nitro |
| **VMware** | ESXi Type 1; Workstation/Player Type 2 | Commercial leader; vSphere, vCenter, vMotion (live migration), DRS (load balancing), HA |
| **VirtualBox** | Type 2 | Free, open source (Oracle); runs on Windows, Linux, macOS; snapshots, shared folders, guest additions, NAT/bridged/host-only networks |
| **Hyper-V** | Type 1, micro-kernel | Microsoft; parent partition (Windows) and child partitions; built into Windows Server and Windows 10/11 Pro; base of Azure |

**VM vs container:** VM has its own guest OS (GBs, minutes to start, stronger isolation); container shares the host kernel (MBs, seconds, lighter). Docker and Kubernetes are OS-level virtualization.

**Live migration (pre-copy):** reserve target, copy memory pages iteratively while the VM runs, pause and copy remaining dirty pages and CPU state, resume on target. Downtime is milliseconds.

### Solved examples

**Example 1: Server consolidation.** 40 physical servers average 10% CPU. Keep each host ≤ 70%. Total load = 40 × 0.1 = 4 server-equivalents. Hosts needed = ⌈4 / 0.7⌉ = **6**. Saving = 34 servers (85%).

**Example 2: Pre-copy live migration.** VM memory 4 GB, link 1 GB/s, dirty rate 0.2 GB/s.
- Round 1: copy 4 GB in 4 s; 0.8 GB dirtied.
- Round 2: 0.8 GB in 0.8 s; 0.16 GB dirtied.
- Round 3: 0.16 GB in 0.16 s; 0.032 GB dirtied.
- Stop-and-copy 0.032 GB: **downtime ≈ 32 ms**; total time ≈ **4.99 s**.

**Example 3: Classify.** Running Ubuntu inside Windows using VirtualBox → Type 2, system VM. Running a `.jar` on the JVM → process VM. AWS EC2 instance on Nitro (KVM-based) → Type 1.

### Key points to remember

- System VM = whole OS; process VM = one program (JVM).
- Binary translation (VMware) vs para-virtualization (Xen) vs hardware-assisted (VT-x/AMD-V).
- Type 1: ESXi, Xen, Hyper-V, KVM. Type 2: VirtualBox, Workstation.
- Xen: Dom0/DomU; KVM: Linux kernel module + QEMU; Hyper-V: parent/child partitions.

### Important questions

1. What is virtualization? Explain the need for it, with its pros and cons.
2. Compare system VMs and process VMs with examples.
3. Explain virtual machine monitors. Compare Type 1 and Type 2 hypervisors.
4. Explain binary translation, para-virtualization and hardware-assisted virtualization.
5. Explain Xen, KVM, VMware, VirtualBox and Hyper-V.

---

## Unit 5: Security, Standards, Access and Cloud Technologies

### 2-mark definitions

- **Cloud security:** policies, technologies and controls that protect cloud data, applications and infrastructure.
- **Shared responsibility model:** the provider secures the cloud (facilities, hardware, hypervisor); the customer secures what they put in it (data, identities, configuration, and the OS in IaaS).
- **SaaS security:** protecting multi-tenant applications: data segregation, access control, authentication, encryption, web application security.
- **Open Cloud Consortium (OCC):** a non-profit that supports the development of standards and benchmarks for cloud computing and operates cloud testbeds for research (such as the Open Cloud Testbed).
- **DMTF (Distributed Management Task Force):** an industry body that publishes management standards such as OVF (Open Virtualization Format) and CIMI (Cloud Infrastructure Management Interface).
- **OVF:** a DMTF standard for packaging and distributing virtual machines so they can move between hypervisors.
- **Hadoop:** an Apache framework for storing (HDFS) and processing (MapReduce) huge data sets on clusters of commodity machines.
- **MapReduce:** a programming model where map produces key-value pairs and reduce combines values of the same key; the framework handles splitting, shuffling and fault tolerance.
- **Google App Engine (GAE):** Google's PaaS that runs web apps with automatic scaling and managed services.
- **Mobile cloud computing:** running app logic and storage in the cloud and using mobile devices as thin clients.

### Core concepts

**Cloud security concerns**

| Concern | Detail |
|---|---|
| Data breaches | Misconfigured storage, weak access control |
| Data loss | Deletion, no backups |
| Account hijacking | Stolen credentials, phishing |
| Insecure APIs | Poorly protected interfaces |
| Insider threats | Malicious staff |
| Multi-tenancy | Side channels, VM escape |
| Denial of service | Exhausted shared resources |
| Compliance | Data location laws, audits |

**Security controls:** encryption at rest and in transit (TLS), key management (KMS/HSM), IAM with MFA and least privilege, firewalls and security groups, intrusion detection, logging and monitoring, backups and DR, patching, VM hardening, security audits.

**SaaS security:** data security and segregation per tenant; SSO and identity federation (SAML, OAuth, OpenID Connect); authentication and authorization; encryption; web application security (OWASP Top 10: injection, broken authentication, XSS); availability and backup; vendor security assessment.

**Standards for cloud**

| Area | Standards and bodies |
|---|---|
| Application developers | HTTP, XML/JSON, REST, SOAP, AJAX, HTML5 |
| Messaging | SMTP, POP3, IMAP (email); XMPP (instant messaging); SIMPLE |
| Security | SAML (single sign-on), OAuth (authorization), OpenID (authentication), SSL/TLS, X.509; ISO/IEC 27001/27017/27018; CSA STAR |
| Management and interoperability | DMTF (OVF, CIMI), OGF OCCI (Open Cloud Computing Interface), SNIA CDMI (storage), OASIS TOSCA |
| Consortia | Open Cloud Consortium (OCC), Cloud Security Alliance (CSA), NIST, DMTF |

**End-user access to cloud computing:** any device with a browser (thin client); web browsers and HTML5; desktop sync clients (Drive, OneDrive); virtual desktops (VDI, Amazon WorkSpaces); offline mode with sync; single sign-on.

**Mobile Internet devices and the cloud:** smartphones and tablets as front ends; mobile apps call cloud APIs; benefits: offload computation and storage, save battery, sync across devices, push notifications; challenges: bandwidth and latency, intermittent connectivity, security of lost devices, battery. Mobile backends: Firebase, AWS Amplify; offline-first sync.

**Hadoop**
- **HDFS:** NameNode (namespace, block map), DataNodes (store blocks, heartbeat), Secondary NameNode (checkpoint). Blocks 128 MB, replication 3, rack-aware placement, write once read many.
- **MapReduce flow:** input split → map → combiner (optional) → partition → shuffle and sort → reduce → output in HDFS. Hadoop 1: JobTracker/TaskTracker; Hadoop 2: YARN (ResourceManager, NodeManager, ApplicationMaster).
- **Ecosystem:** Hive, Pig, HBase, Sqoop, Flume, Oozie, ZooKeeper, Spark.

**Google App Engine:** PaaS; runtimes Python, Java, Go, PHP, Node.js, Ruby; standard (sandboxed, scales to zero) and flexible (containers) environments; `app.yaml`; `gcloud app deploy`; services: Datastore/Firestore, Memcache, Task Queues, Cron, Cloud Storage. Advantages: no servers, auto-scaling, versioning, traffic splitting. Limits: sandbox restrictions, lock-in.

### Solved examples

**Example 1: MapReduce word count.** Split 1: "cloud data cloud"; split 2: "data cloud big".
- Map 1: (cloud,1), (data,1), (cloud,1). Map 2: (data,1), (cloud,1), (big,1).
- Shuffle/sort: big → [1]; cloud → [1,1,1]; data → [1,1].
- Reduce: **(big,1), (cloud,3), (data,2)**.

**Example 2: HDFS storage.** A 1 GB file with 128 MB blocks → 1024/128 = **8 blocks**; with replication 3, **24 block copies** and 3 GB raw storage. A 300 MB file → 3 blocks (128 + 128 + 44 MB).

**Example 3: Shared responsibility.** In IaaS the customer patches the guest OS; in PaaS the provider patches OS and runtime and the customer secures code and data; in SaaS the customer manages users, access and data only.

**Minimal App Engine app (Python)**

```yaml
# app.yaml
runtime: python312
```

```python
# main.py
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello from App Engine"
```

Deploy with `gcloud app deploy`.

### Key points to remember

- Shared responsibility; encryption, IAM, MFA, least privilege.
- Standards: SAML, OAuth, OpenID, TLS; XMPP for IM; OVF/CIMI (DMTF); OCCI; OCC and CSA.
- Mobile cloud: offload, sync, battery saving; challenges: connectivity, security.
- HDFS 128 MB blocks × 3 replicas; MapReduce map → shuffle → reduce; YARN.
- GAE: PaaS, auto-scaling, `app.yaml`.

### Important questions

1. Explain cloud security challenges and SaaS security.
2. Explain cloud standards: OCC, DMTF, messaging and security standards.
3. Explain end-user access to the cloud and the use of mobile devices with cloud services.
4. Explain Hadoop and HDFS architecture. Explain MapReduce with the word count example.
5. Explain Google App Engine and its programming environment.

---

## Last-hour checklist

- [ ] NIST definition; evolution; five characteristics; architecture diagram; deployment models table.
- [ ] Amdahl (4.71); business models; major players; issues.
- [ ] Eucalyptus (CLC, CC, NC, Walrus, SC), Nimbus, OpenNebula, CloudSim (Datacenter, Host, Vm, Cloudlet, Broker).
- [ ] SaaS/PaaS/IaaS with who-manages-what; DBaaS, MaaS, CaaS; provider table; 99.9% = 8.76 h.
- [ ] Collaboration tools table; calendars, events, CRM, projects, office apps, databases, groupware, social networks; tech-fest example.
- [ ] Need, pros and cons of virtualization; system vs process VM; levels; binary translation, para, hardware-assisted.
- [ ] Type 1 vs Type 2; Xen (Dom0/DomU), KVM, VMware, VirtualBox, Hyper-V; consolidation (6 hosts); live migration (32 ms).
- [ ] Security concerns and controls; SaaS security; standards table; end-user and mobile access.
- [ ] HDFS (8 blocks, 24 copies); word count trace; YARN; GAE.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Implementing and Developing Cloud Computing Applications | David E. Y. Sarna | CRC Press (2011) | [WorldCat](https://search.worldcat.org/search?q=Implementing+and+Developing+Cloud+Computing+Applications+Sarna) |
| 2 | Draft Cloud Computing Synopsis and Recommendations (NIST SP 800-146) | Lee Badger, Tim Grance, Robert Patt-Corner, Jeff Voas | NIST (2011), free official publication | [NIST CSRC](https://csrc.nist.gov/pubs/sp/800/146/final) |
| 3 | Cloud Computing: A Practical Approach | Anthony T. Velte, Toby J. Velte, Robert Elsenpeter | McGraw-Hill (2010) | [WorldCat](https://search.worldcat.org/search?q=Cloud+Computing+A+Practical+Approach+Velte) |
| 4 | Cloud Computing: Best Practices for Managing and Measuring Processes for On-demand Computing, Applications and Data Centers in the Cloud with SLAs | Haley Beard | Emereo Pty Ltd (2008) | [WorldCat](https://search.worldcat.org/search?q=Cloud+Computing+Best+Practices+Haley+Beard) |

**Syllabus source:** [AKTU Open Elective-III and IV syllabus for B.Tech 8th semester, 2025-26 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/Open-Elective-III-IV-List-4th-Year-VIII-Semester-2025-26-28092026.pdf)

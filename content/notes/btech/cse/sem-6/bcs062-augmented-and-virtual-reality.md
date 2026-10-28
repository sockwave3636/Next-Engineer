---
program: btech
branches: [cse, cs, it]
semester: 6
code: BCS062
name: Augmented and Virtual Reality
credits: 3
ltp: 3-0-0
scheme: AKTU B.Tech 3rd year, Departmental Elective, 2024-25 onwards
syllabusSource: https://gnindia.dronacharya.info/Downloads/Syllabus/B-TECH-CSIT-IT-3rd-YR-2024-25-AKTU-26112024.pdf
units:
  - Introduction to VR and Output Hardware for 3D User Interfaces
  - Input Hardware for 3D User Interfaces
  - Software Technologies for VR
  - 3D Interaction Techniques and VR Applications
  - Augmented Reality
---

# BCS062 Augmented and Virtual Reality: One-Day Exam Revision Notes

Original revision notes written for the AKTU syllabus. Every unit has the same parts:
1. **2-mark definitions**: short answers you can write word for word in Section A.
2. **Core concepts**: devices, techniques and comparison tables.
3. **Solved examples**: short calculations (frame time, latency budget, field of view, transformations in a scene hierarchy, Fitts' law) and worked design cases.
4. **Key points to remember**.
5. **Important questions**: the long questions to prepare, with what your answer must contain.

## How to use these notes the day before the paper

- **Morning (3 hours):** Unit 1 (history of VR, requirements, benefits, visual, auditory and haptic displays) and Unit 2 (input devices, tracking technologies, 3D mice, direct human input).
- **Afternoon (3 hours):** Unit 3 (scene graph, coordinates, bounding volumes, LOD, culling, interaction, toolkits) and Unit 4 (selection and manipulation, travel, wayfinding, system control, symbolic input, design and evaluation, applications).
- **Evening (2 hours):** Unit 5 (AR taxonomy, technology, AR vs VR, tracking, visualization, mobile and projection AR, evaluation). Then the "Last-hour checklist".
- **In the exam:** draw the device or pipeline diagram, name real products as examples (Meta Quest, HTC Vive, Microsoft HoloLens, Apple Vision Pro, CAVE), and finish with advantages and limitations.

**AKTU paper pattern (theory, 70 marks, 3 hours):** Section A has 7 short questions of 2 marks, all compulsory (14). Section B has 5 questions of 7 marks, attempt any 3 (21). Section C has 5 questions (one per unit), each with two parts, attempt one part of each, 7 marks each (35). Every unit gets its own Section C question, so do not skip any unit.

---

## Unit 1: Introduction to VR and Output Hardware for 3D User Interfaces

### 2-mark definitions

- **Virtual reality (VR):** a computer-generated, interactive, three-dimensional environment that surrounds the user and responds to their movements in real time, creating a sense of being present in it.
- **Three I's of VR (Burdea):** Immersion, Interaction and Imagination.
- **Immersion:** the objective level of sensory fidelity the system provides (field of view, resolution, tracking, sound); "how much the system surrounds the senses".
- **Presence:** the subjective, psychological feeling of "being there" in the virtual environment.
- **Virtual environment (VE):** the synthetic world (objects, lighting, behaviour) that the user experiences.
- **Real-time computer graphics:** rendering images fast enough (at least about 30 frames per second, ideally 90 or more for head-mounted displays) that motion appears smooth and responds immediately to input.
- **Head-mounted display (HMD):** a display worn on the head with a screen and lenses in front of each eye, showing stereo images that change with head movement.
- **Stereoscopy:** showing slightly different images to each eye so the brain perceives depth.
- **Field of view (FOV):** the angular extent of the scene visible at once (human horizontal FOV is about 200°; typical HMDs give about 90° to 120°).
- **Latency (motion-to-photon):** the delay between a user's movement and the corresponding change on the display; should be below about 20 ms to avoid discomfort.
- **Cybersickness:** nausea, eye strain and disorientation in VR, mostly caused by a mismatch between what the eyes see and what the inner ear senses.
- **Haptics:** technology that gives the sense of touch: force feedback and tactile (vibration, texture) feedback.
- **3D user interface (3D UI):** a user interface in which the user's tasks are performed in a 3D spatial context.

### Core concepts

**History and landmarks of VR**

| Year | Landmark |
|---|---|
| 1929 | Link Trainer: mechanical flight simulator for pilot training |
| 1956–1962 | Morton Heilig's Sensorama: a booth with 3D film, stereo sound, vibration, wind and smells |
| 1965 | Ivan Sutherland's essay "The Ultimate Display" |
| 1968 | Sutherland's "Sword of Damocles": the first computer-driven, head-tracked HMD |
| 1970s | Myron Krueger's "artificial reality" (VIDEOPLACE); computer graphics advances; flight simulators with computer-generated images |
| 1985–1989 | VPL Research (Jaron Lanier, who popularized the term "virtual reality"), DataGlove and EyePhone HMD; NASA VIEW system |
| 1992 | CAVE (Cave Automatic Virtual Environment) at the University of Illinois |
| 1990s | Arcade VR (Virtuality), Nintendo Virtual Boy (1995); high cost and low quality limited adoption |
| 2012–2016 | Oculus Rift Kickstarter (2012), Facebook buys Oculus (2014), HTC Vive and Rift consumer release (2016), Google Cardboard and mobile VR |
| 2019 onwards | Standalone headsets (Oculus Quest), mixed reality (HoloLens 2, 2019; Apple Vision Pro, 2024), metaverse and enterprise training |

- **Computer graphics → real-time graphics:** advances from wireframe to shaded, textured, GPU-accelerated rendering made interactive VR possible.
- **Flight simulation** was the first major application: it showed that training in a simulated environment transfers to the real world.

**Requirements of a VR system**
1. **Hardware:** high-performance computer and GPU; displays (HMD, CAVE, monitors); tracking; input devices; audio; haptics.
2. **Software:** real-time rendering engine; scene database; simulation (physics, behaviour); interaction handling; device drivers; networking for shared worlds.
3. **Performance requirements:** high frame rate (90 Hz for HMDs), low latency (< 20 ms), accurate tracking (6 degrees of freedom), wide FOV, adequate resolution, spatial audio.
4. **Human factors:** comfort, ergonomics, avoiding cybersickness, safety in physical space.

**Benefits of VR:** safe training for dangerous tasks (pilots, surgeons, firefighters); lower cost than real prototypes; visualization of complex or invisible data; remote collaboration; engagement in education; therapy (phobias, PTSD, pain distraction); design review before building.

**Types of VR systems:** non-immersive (desktop VR), semi-immersive (large screens, simulators), fully immersive (HMD, CAVE), augmented and mixed reality, distributed/collaborative VR.

**Visual displays**

| Display | Description | Advantages | Disadvantages |
|---|---|---|---|
| Monitor (fishtank VR) with shutter glasses | Stereo on a desktop monitor with head tracking | Cheap, high resolution | Small FOV, low immersion |
| Surround screen / CAVE | 3 to 6 projection walls around the user | Wide FOV, users see their own body, several users | Expensive, large space, only one tracked viewpoint |
| Workbench / tabletop | Projection on a horizontal or angled surface | Good for design and medical review | Limited immersion |
| Hemispherical / dome | Curved projection surface | Seamless wide view | Costly, distortion correction needed |
| Head-mounted display | Screens and lenses in front of the eyes | Full 360° immersion, portable, personal | Weight, cybersickness, isolation |
| Virtual retinal display | Image drawn directly on the retina with a low-power laser | Bright, high resolution | Experimental |
| Autostereoscopic display | 3D without glasses (lenticular lens, parallax barrier) | No glasses | Limited viewing positions |

- **Visual depth cues:** monocular (occlusion, linear perspective, relative size, texture gradient, shading and shadows, motion parallax, accommodation) and binocular (stereopsis or binocular disparity, convergence). The **vergence-accommodation conflict** in HMDs (eyes converge on a virtual object but focus on the fixed screen) causes eye strain.
- **Stereo techniques:** active (shutter glasses synchronized with alternating frames), passive (polarized or colour-filter glasses), and HMDs (separate screen per eye).

**Auditory displays**
- **3D spatial sound:** sound sources placed in 3D space using head-related transfer functions (HRTFs), which model how the head, ears and torso change sound arriving from each direction. Cues: interaural time difference (ITD), interaural level difference (ILD), spectral cues.
- **Devices:** headphones (personal, easier spatialization) and speaker arrays (ambisonics, surround sound).
- **Uses:** localization of objects, alerts, ambient realism, sonification of data, feedback for interaction.

**Haptic displays**
- **Tactile (cutaneous):** vibration motors, pin arrays, ultrasonic mid-air haptics, thermal displays (sense of texture, contact, temperature).
- **Kinesthetic (force feedback):** devices that apply forces to the hand or body (PHANToM/Touch desk arm, force-feedback joysticks, exoskeleton gloves, motion platforms).
- **Passive haptics:** real physical props matching virtual objects.
- Haptic rendering needs a very high update rate (about 1,000 Hz) compared with graphics (60 to 90 Hz).

**Choosing output devices:** match the device to the task, the users and the budget: immersion needed, number of users, need to see the real world, mobility, resolution and FOV, comfort and duration, cost and space. For example: surgical training needs high-fidelity haptics; architectural review by a group suits a CAVE or large screen; consumer games suit standalone HMDs.

### Solved examples

**Example 1 (frame time budget).** An HMD runs at 90 Hz. Frame time = 1/90 s = **11.1 ms**. With stereo rendering, both eye views must be rendered within those 11.1 ms. At 120 Hz the budget is **8.3 ms**.

**Example 2 (latency budget).** Tracking 2 ms + application/simulation 4 ms + rendering 8 ms + display scan-out 6 ms = **20 ms**: right at the comfort limit. Techniques such as asynchronous time-warp (re-projecting the last frame using the newest head pose) and prediction of head motion reduce the perceived latency.

**Example 3 (pixels per degree).** A headset has 2,000 horizontal pixels per eye and a 100° horizontal FOV. Angular resolution = 2000/100 = **20 pixels per degree**. Human visual acuity is about 60 pixels per degree, so text looks less sharp than on a monitor.

**Example 4 (choosing a display).** A car company wants 6 engineers to review a full-scale dashboard together, discussing it face to face: **CAVE or large stereo wall**, since everyone sees each other and the model. A single trainee rehearsing an aircraft engine repair at home: **standalone HMD with hand tracking**.

### Key points to remember

- Three I's: immersion, interaction, imagination. Immersion is objective; presence is subjective.
- Sutherland 1968 (first HMD); Heilig's Sensorama; Lanier coined "VR"; CAVE 1992; Oculus 2012–2016.
- HMD targets: 90 Hz, < 20 ms latency, 6 DOF.
- Visual, auditory (HRTF, ITD, ILD), haptic (tactile, kinesthetic; 1 kHz).
- Vergence-accommodation conflict causes eye strain.

### Important questions

1. Define virtual reality and explain the three I's. Trace the history and landmarks of VR (flight simulation, Sensorama, Sutherland, CAVE, modern HMDs).
2. Explain the requirements and benefits of virtual reality.
3. Explain visual displays for VR: HMD, CAVE, workbench, monitors and autostereoscopic displays, with advantages and limitations.
4. Explain auditory and haptic displays.
5. How should output devices be chosen for a 3D user interface?

---

## Unit 2: Input Hardware for 3D User Interfaces

### 2-mark definitions

- **Input device:** hardware that captures the user's actions (movement, button presses, voice, gestures) and sends them to the computer.
- **Degrees of freedom (DOF):** the number of independent values a device reports: 3 DOF (orientation only: yaw, pitch, roll), 6 DOF (orientation plus position x, y, z).
- **Discrete vs continuous input:** discrete devices give events (button press); continuous devices give a stream of values (tracker position). Combination devices do both.
- **Active vs passive sensing:** active devices need the user to act on them (buttons, joysticks); passive devices measure the user without explicit action (trackers, eye tracking).
- **Tracking:** continuously measuring the position and/or orientation of the user's head, hands, body or objects.
- **Inside-out tracking:** cameras or sensors on the headset look outward at the environment to compute its pose (Meta Quest, HoloLens).
- **Outside-in tracking:** external sensors or cameras look at markers on the headset and controllers (original Oculus Rift, OptiTrack).
- **Drift:** gradual accumulation of error in a sensor (especially inertial sensors) over time.
- **Jitter:** small random fluctuation in tracker output while the device is still.
- **3D mouse:** a handheld or desktop device that gives 6-DOF input for 3D manipulation (SpaceMouse, VR controllers).
- **Data glove:** a glove with sensors (bend sensors, fibre optics, IMUs) that measures finger flexion and hand posture.
- **Eye tracking:** measuring where the user is looking, usually with infrared cameras inside the headset.

### Core concepts

**Input device characteristics:** degrees of freedom, discrete or continuous, active or passive, absolute or relative (position vs change in position), isotonic (moves freely) or isometric (measures force without moving), range, accuracy, precision (jitter), latency, update rate, ergonomics, wired or wireless.

**Desktop input devices:** keyboard, 2D mouse and trackball, pen-based tablets, joysticks (isotonic or isometric), touch screens, 6-DOF desktop devices (SpaceMouse, which measures push, pull and twist of a cap). Useful in non-immersive VR and for CAD; limited in immersive VR because the user cannot see them.

**Tracking technologies**

| Technology | Principle | Advantages | Disadvantages |
|---|---|---|---|
| Mechanical | Linked arms with joint sensors | Accurate, low latency, can give force feedback | Restricts movement, limited range |
| Electromagnetic | Transmitter field; receiver coils measure field strength | No line-of-sight needed, small sensors | Distorted by metal, limited range |
| Acoustic (ultrasonic) | Time of flight of sound between emitters and microphones | Cheap | Needs line of sight, affected by noise, temperature, slow |
| Inertial (IMU) | Accelerometers and gyroscopes (and magnetometers) | Fast, no external reference, unlimited range | Drift, so usually combined with another method |
| Optical: outside-in | External cameras track markers (passive reflective or active LED) | Accurate, large area, many objects | Occlusion, cost, setup |
| Optical: inside-out | Cameras on the headset track features of the environment (SLAM) | No external setup, portable | Needs texture and light; controllers can leave the camera view |
| Lighthouse (laser sweep) | Base stations sweep laser lines; photodiodes on the device time the sweeps | Very accurate, low latency | Base stations needed, occlusion |
| Hybrid | Combine IMU with optical or other (sensor fusion, Kalman filter) | Best of both: fast and drift-free | Complexity |

**Other tracking:** eye tracking (foveated rendering, gaze selection), hand and finger tracking (cameras, gloves), full-body motion capture (marker suits, depth cameras like Kinect), face tracking.

**3D mice:** handheld 6-DOF controllers (Meta Touch, Vive controllers, Valve Index "knuckles" controllers with finger sensing), wands, flying mice (a tracked mouse used in the air), Cubic mouse (a tracked cube with rods), ring mice. They combine tracking with buttons, triggers, thumbsticks and touch pads.

**Special-purpose input devices:** treadmills and omnidirectional treadmills for walking, bicycles and steering wheels, Wii Remote-style devices, props shaped like real tools (passive haptic props), pressure-sensitive floors, chairs and motion platforms, ShapeTape (bend-sensing tape).

**Direct human input**
- **Speech input:** voice commands with speech recognition; natural and hands-free, but affected by noise and accents; good for system control.
- **Bioelectric input:** EMG (muscle activity, for example wrist bands detecting finger gestures).
- **Brain-computer interfaces (BCI):** EEG headsets detect brain signals for simple commands; slow and noisy, useful for accessibility research.
- **Gaze:** eye tracking for selection and attention; risk of the "Midas touch" problem (everything looked at gets selected).
- **Gestures:** hand poses and movements recognized by gloves or cameras.

**Home-brewed input devices:** custom devices built with microcontrollers (Arduino, Raspberry Pi), sensors (accelerometers, flex sensors, buttons) and 3D-printed shells, used to prototype new interactions cheaply. Design steps: identify the task, choose sensors, build the circuit, connect to the computer (USB, Bluetooth), write drivers, test with users.

**Choosing input devices:** consider the task (selection, travel, text entry), required DOF, the display used (in an HMD users cannot see a keyboard), accuracy and range, ergonomics and fatigue, number of users, cost, and whether one device can do several tasks. Use taxonomies (by DOF and sensing type) and empirical evaluation.

### Solved examples

**Example 1 (DOF).** A phone-based VR viewer with only a gyroscope gives **3 DOF**: turning the head works, but leaning forward does nothing, which breaks presence. A headset with inside-out tracking gives **6 DOF**.

**Example 2 (inertial drift).** A gyroscope has a bias of 0.01°/s. After 10 minutes (600 s) of integration, orientation error = 0.01 × 600 = **6°**, large enough to notice. Correcting with an accelerometer (gravity gives pitch and roll) and a magnetometer or camera (gives yaw) removes drift.

**Example 3 (Fitts' law for pointing).** Movement time MT = a + b log2(D/W + 1). With a = 0.1 s, b = 0.15 s/bit, a target at D = 0.6 m and width W = 0.1 m: index of difficulty = log2(7) = 2.81 bits; MT = 0.1 + 0.15 × 2.81 ≈ **0.52 s**. Doubling the target width to 0.2 m gives log2(4) = 2 bits and MT = **0.40 s**: bigger targets are faster to select.

**Example 4 (choosing input).** A surgeon in VR needs precise hand movement and finger dexterity: **6-DOF tracked stylus or haptic arm**. A museum visitor with no training: **hand tracking with simple gestures, or one-button controller**. A pilot trainee: **real cockpit controls (props) plus head tracking**.

### Key points to remember

- 3 DOF = orientation; 6 DOF = orientation + position.
- Tracking: mechanical, electromagnetic, acoustic, inertial, optical (inside-out, outside-in), lighthouse, hybrid.
- Inertial drift corrected by sensor fusion (Kalman filter).
- Direct human input: speech, gaze, gestures, EMG, BCI.
- Fitts' law: MT = a + b log2(D/W + 1).

### Important questions

1. Explain the characteristics of input devices for 3D UIs.
2. Explain desktop input devices and their use in VR.
3. Explain tracking technologies with their advantages and disadvantages. Compare inside-out and outside-in tracking.
4. Explain 3D mice and special-purpose input devices.
5. Explain direct human input: speech, gestures, gaze, bioelectric and brain input.
6. What are home-brewed input devices? How should input devices be chosen for a 3D UI?

---

## Unit 3: Software Technologies for VR

### 2-mark definitions

- **VR database (world database):** the stored description of all objects in the virtual world: geometry, appearance, position, behaviour, sounds and relationships.
- **World space and world coordinates:** the single global coordinate system in which all objects are placed.
- **Object (local) coordinates:** the coordinate system in which an object's geometry is defined, relative to its own origin.
- **Object hierarchy (scene graph):** a tree of nodes where each child's position and orientation are defined relative to its parent; moving a parent moves its children.
- **Bounding volume:** a simple shape (sphere, axis-aligned bounding box (AABB), oriented bounding box (OBB)) enclosing an object, used for fast collision detection and culling.
- **Tessellation:** dividing curved surfaces into many small flat polygons (usually triangles) for rendering.
- **Level of detail (LOD):** using simpler models (fewer polygons) for objects far from the viewer to save rendering time.
- **Culling:** skipping objects that cannot be seen: view-frustum culling (outside the camera's view), back-face culling (faces pointing away), occlusion culling (hidden behind other objects).
- **Occluder:** a large object (such as a wall) used to hide and cull objects behind it.
- **Script:** a program attached to objects or the world to define behaviour (animation, response to events).
- **VR toolkit / engine:** a software library or environment for building VR applications (Unity, Unreal Engine, OpenXR, WebXR, A-Frame).
- **World authoring:** creating and editing the virtual world (models, layout, behaviour); **playback** is running it for the user.

### Core concepts

**The VR software pipeline (simulation loop)**
1. Read input devices and trackers.
2. Update the simulation (physics, collisions, scripts, AI, networking).
3. Update the scene graph.
4. Cull and select LODs.
5. Render the view for each eye (and audio, haptics).
6. Display; repeat every frame (11 ms at 90 Hz).

**Geometry and position/orientation**
- Objects are made of polygon meshes (vertices, edges, faces), with materials, textures and normals.
- Position is a vector (x, y, z); orientation can be stored as Euler angles (yaw, pitch, roll; suffer from gimbal lock), rotation matrices, or **quaternions** (compact, smooth interpolation with SLERP, no gimbal lock).
- Transformations use 4 × 4 homogeneous matrices: translation, rotation, scaling. World matrix of an object = parent's world matrix × object's local matrix.

**Object hierarchies:** for example Car → Wheels (each rotating about its axle); Human → Upper arm → Lower arm → Hand → Fingers. Benefits: natural modelling, easy animation, efficient culling of whole subtrees, grouping.

**Bounding volumes:** spheres (fastest test, loose fit), AABB (fast, simple; fit changes when rotated), OBB (tighter, more costly), convex hull. Bounding volume hierarchies (BVH) speed up collision detection and ray picking (selection).

**VR environment management**
- **Tessellated data:** curved surfaces converted to triangles; more triangles = smoother but slower.
- **LOD:** discrete LOD (switch between pre-made models by distance), continuous LOD (progressive meshes), view-dependent LOD; avoid "popping" with blending or hysteresis.
- **Cullers and occluders:** frustum culling with bounding volumes; occlusion culling with portals (rooms and doors), potentially visible sets (PVS) computed in advance, and hardware occlusion queries.
- **Lights:** ambient, directional, point and spot lights; shadows; baked (precomputed) lighting for performance.
- **Cameras:** a virtual camera for each eye, separated by the interpupillary distance (IPD, about 63 mm), with projection matching the HMD lenses.
- **Scripts:** event-driven (on collision, on click), time-driven (animations), and logic (game rules).

**Interaction in the VR environment**
- **Simple interaction:** touching, grabbing, pointing at objects; triggers when the user enters an area.
- **Feedback:** visual (highlighting), audio (click sounds), haptic (controller vibration) to confirm actions.
- **Graphical user interface in VR:** menus floating in space or attached to the hand or controller (body-referenced), world-referenced panels, head-referenced HUD elements (used sparingly).
- **Control panel and 2D controls:** buttons, sliders and dials placed on a virtual panel, operated by ray-casting or touch.
- **Hardware controls:** physical buttons, triggers and thumbsticks mapped to actions.
- **Room/stage/area descriptions:** the physical play area (guardian or chaperone boundary), standing vs seated vs room-scale experiences; the world is aligned to the real room.

**World authoring and playback:** authoring tools (3D modelling in Blender, Maya, 3ds Max; scene editing in Unity or Unreal; importing CAD data) create the database; the run-time engine plays it back, loading assets, running scripts and rendering in real time. File formats: glTF, FBX, OBJ, USD, VRML/X3D (older web standards).

**VR toolkits and software in the market**

| Toolkit / engine | Notes |
|---|---|
| Unity (C#) | Most widely used for VR and AR; XR Interaction Toolkit; many platforms |
| Unreal Engine (C++, Blueprints) | High-quality graphics; used for games and enterprise visualization |
| OpenXR | Khronos open standard API so one app runs on many headsets |
| WebXR, A-Frame, Three.js, Babylon.js | VR and AR in the web browser |
| Godot | Open-source engine with OpenXR support |
| Vizard, WorldViz, VR Juggler | Research and enterprise VR frameworks |
| OpenSceneGraph, OpenGL Performer, X3D | Scene-graph libraries and standards from earlier VR systems |
| Platform SDKs | Meta XR SDK, SteamVR/OpenVR, ARKit, ARCore, visionOS |

### Solved examples

**Example 1 (scene hierarchy transform).** A table is placed in the room at world position (5, 0, 2). A lamp sits on the table at local position (0.3, 0.8, 0) relative to the table. If the table is not rotated, the lamp's world position = (5 + 0.3, 0 + 0.8, 2 + 0) = **(5.3, 0.8, 2)**. If the table is moved by (1, 0, 0), the lamp moves with it to (6.3, 0.8, 2) without any change to its own data.

**Example 2 (rotation of a child).** A table at world origin is rotated 90° about the vertical y axis. A cup at local (1, 0.8, 0) on the table: rotating (x, z) = (1, 0) by 90° about y gives (x, z) = (0, −1). World position = **(0, 0.8, −1)**.

**Example 3 (LOD savings).** A forest has 1,000 trees. Full model: 20,000 triangles each. LOD: 100 near trees at full detail, 300 at 5,000 triangles, 600 at 500 triangles. Total = 2,000,000 + 1,500,000 + 300,000 = **3.8 million** triangles instead of **20 million** (an 81% reduction).

**Example 4 (bounding sphere test).** Two objects with bounding spheres: centres (0, 0, 0) and (3, 4, 0), radii 2 and 2.5. Distance between centres = 5; sum of radii = 4.5 < 5, so **no collision**; the detailed mesh test is skipped.

### Key points to remember

- Simulation loop: input → simulate → scene graph → cull/LOD → render per eye → display.
- Scene graph: world matrix = parent × local.
- Quaternions avoid gimbal lock; SLERP for smooth rotation.
- Bounding volumes: sphere, AABB, OBB; BVH.
- LOD, frustum culling, back-face culling, occlusion culling (portals, PVS).
- Toolkits: Unity, Unreal, OpenXR, WebXR.

### Important questions

1. Explain the VR database: world space, world coordinates, world environment, objects, geometry, position and orientation.
2. Explain object hierarchies and bounding volumes with examples.
3. Explain tessellated data, levels of detail, cullers and occluders, lights, cameras and scripts in a VR environment.
4. Explain interaction in VR: simple interaction, feedback, GUIs, control panels, 2D and hardware controls, room/stage/area descriptions.
5. Explain world authoring and playback. Describe VR toolkits and software available in the market.

---

## Unit 4: 3D Interaction Techniques and VR Applications

### 2-mark definitions

- **3D interaction task categories:** selection and manipulation, travel (navigation), wayfinding, system control, and symbolic input.
- **Selection:** choosing one or more objects from the environment.
- **Manipulation:** changing an object's position, orientation, scale or other properties.
- **Ray-casting:** selecting by pointing a virtual ray from the hand or controller; the first object the ray hits is selected.
- **Virtual hand (simple virtual hand):** a direct mapping of the real hand to a virtual hand; the user touches objects to select them.
- **Go-Go technique:** a non-linear arm extension: within a certain distance the virtual hand follows the real hand; beyond it, the virtual arm grows quickly, so far objects can be reached.
- **World-in-miniature (WIM):** a small handheld copy of the world; manipulating objects in the miniature moves the real ones; also used for navigation.
- **Travel:** the motor part of navigation: moving the viewpoint from one place to another.
- **Wayfinding:** the cognitive part of navigation: knowing where you are and how to get where you want to go.
- **System control:** issuing commands to change the system state or mode (menus, voice commands, gestures, tools).
- **Symbolic input:** entering text and numbers in a 3D UI.
- **Usability evaluation:** assessing a 3D UI for effectiveness, efficiency and satisfaction, using expert reviews and user studies.

### Core concepts

**Selection and manipulation techniques**

| Technique | How it works | Good for | Limitation |
|---|---|---|---|
| Simple virtual hand | Real hand mapped one-to-one | Natural, near objects | Cannot reach far objects |
| Go-Go | Non-linear arm extension | Reaching far objects with direct manipulation | Precision drops at distance |
| Ray-casting | Ray from hand selects first hit | Far objects, easy to learn | Hard to select small or distant targets; rotating at a distance is hard |
| Flashlight / aperture | Cone instead of ray | Small or moving targets | Ambiguity when many objects fall in the cone |
| Image-plane (sticky finger, head crusher) | Select what the finger covers in the 2D image | Intuitive "pointing at the view" | Arm fatigue |
| HOMER | Ray-cast to select, then hand-centred manipulation | Selection at a distance + natural manipulation | Moving objects towards or away is limited |
| World-in-miniature | Manipulate a small copy | Large-scale layout | Small copy limits precision |
| Scaled-world grab | Scale the world down so the object comes within reach | Precise manipulation of far objects | Disorients some users |

**Design guidelines for manipulation:** use existing techniques before inventing new ones; match the technique to the task (near vs far, precision); reduce wasted degrees of freedom (constrain movement where possible); give feedback (highlight, snap, vibrate); use props and two-handed interaction where natural; consider fatigue ("gorilla arm"); allow precise modes when needed.

**Travel techniques**
- **Physical locomotion:** real walking (most natural, limited by room size), walking in place, treadmills, redirected walking (slight rotation of the world so users walk in circles without noticing), vehicles and cycles.
- **Steering:** gaze-directed (move where you look), pointing-directed (move where you point), torso-directed, camera-in-hand, using a joystick.
- **Target-based travel:** select a destination and move there automatically (teleportation, which reduces sickness; route planning by placing points on a map).
- **Manipulation-based travel:** grabbing the air ("climbing" or "dragging" the world).
- **Travel tasks:** exploration (no specific goal), search (find a known target), manoeuvring (small, precise movements).
- **Comfort:** continuous artificial movement causes sickness; teleport, vignetting (narrowing FOV during motion) and snap turning help.

**Wayfinding**
- **Theory:** users build a cognitive map: landmark knowledge (memorable objects), route knowledge (sequences of turns), survey knowledge (map-like overview). Wayfinding is harder in VR because of limited FOV and fewer cues.
- **User-centred support:** wide FOV, motion cues (vection, optical flow), audio cues, real walking for body-based cues, search strategies training.
- **Environment-centred support:** environment design (legibility: paths, edges, districts, nodes and landmarks, from Kevin Lynch), artificial cues: maps (north-up or track-up, you-are-here markers), compasses, signs, trails (breadcrumbs), reference objects and landmarks, highlighted paths.
- **Evaluating wayfinding aids:** measure task time, errors, distance travelled, ability to draw a map or point to unseen targets afterwards, and user satisfaction; compare with and without each aid.

**System control**
- **Classification:** graphical menus, voice commands, gestural commands, tools, and multimodal combinations.
- **Graphical menus:** adapted 2D menus (floating panels, pull-down), 1-DOF menus (ring or rotary menus selected by wrist rotation), 3D widgets (handles on objects), TULIP menus (menu items on fingers of a pinch glove), radial (pie) menus attached to the hand.
- **Voice commands:** hands-free and fast for expert users; need good recognition and feedback; users must remember commands.
- **Gestural commands:** postures (static hand shapes) and gestures (movements); natural but must be learned and recognized reliably; avoid fatigue.
- **Tools:** physical props (a real pen, a tablet as a menu holder) and virtual tools (a virtual eraser or paint brush that changes the mode).
- **Multimodal:** combining speech and pointing ("put that there", Bolt 1980) for natural, robust control.
- **Design guidelines:** avoid mode errors (show the current mode clearly), place menus where they are easy to reach (body-referenced), use appropriate spatial reference frames, structure commands logically, give feedback, consider using 2D menus on a physical tablet for complex settings.
- **Case study (immersive architectural design tool):** users need to create walls, change materials and undo. Solution: a palette attached to the non-dominant hand (body-referenced, always reachable), ray selection with the dominant hand, voice shortcuts for "undo" and "delete", and clear highlighting of the current tool.

**Symbolic input:** keyboard-based (physical keyboard with passthrough video, virtual keyboard selected by ray or touch, chord keyboards), pen-based (handwriting recognition on a virtual or tracked tablet), gesture-based (sign language, finger-spelling), speech-based (dictation). Trade-offs: speed, accuracy, learning, fatigue.

**Designing and developing 3D user interfaces**
- **Strategies:** human-centred design (understand users and tasks), borrow from the real world (natural metaphors) or deliberately go beyond reality ("magic" techniques like Go-Go or teleport), use constraints and props, two-handed interaction (non-dominant hand sets the frame, dominant hand does fine work, Guiard's model), and iterate with prototypes.
- **Evaluation methods:** cognitive walkthrough and heuristic evaluation (by experts), formative evaluation (observing users during development), summative evaluation (comparing final designs), questionnaires (presence questionnaires, Simulator Sickness Questionnaire), performance metrics (time, errors), physiological measures (heart rate).
- Special issues in VR evaluation: the evaluator cannot see what the user sees (use mirror displays), cybersickness and fatigue limit session length, and presence is subjective.

**VR applications**
- **Engineering:** virtual prototyping, design review, assembly and maintenance simulation, ergonomic analysis, factory planning (digital twins).
- **Architecture:** walk-throughs of buildings before construction, interior design, client presentations, urban planning.
- **Education:** virtual field trips, virtual labs, history reconstructions, science visualizations (molecules, solar system).
- **Medicine:** surgical training simulators, anatomy learning, therapy for phobias and PTSD (exposure therapy), pain distraction, stroke rehabilitation.
- **Entertainment:** games, theme-park rides, virtual concerts, 360° films, social VR.
- **Science:** visualizing large data sets (molecular, astronomical, fluid flow), remote exploration (telepresence of robots, Mars rovers).
- **Training:** flight and driving simulators, military, firefighting, safety and emergency drills, soft-skills training.

### Solved examples

**Example 1 (Go-Go mapping).** With threshold D = 0.4 m and k = 10, the virtual hand distance Rv = Rr if Rr < D, otherwise Rv = Rr + k(Rr − D)². For a real reach Rr = 0.7 m: Rv = 0.7 + 10 × (0.3)² = 0.7 + 0.9 = **1.6 m**. At Rr = 0.3 m the mapping is one-to-one (Rv = 0.3 m).

**Example 2 (ray selection of a small target).** A target of 2 cm at a distance of 10 m subtends about 0.02/10 rad = 0.11°. Natural hand tremor is about 0.5°, so ray-casting will miss often. Better: a cone (flashlight) selection, snapping, or zoom/scaled-world grab.

**Example 3 (choosing travel).** A VR museum with small rooms: **real walking plus teleport** between rooms. A flight over a city model: **steering with the controller (pointing-directed)** plus a map for wayfinding. A seated user prone to motion sickness: **teleportation with snap turning**.

### Key points to remember

- Tasks: selection/manipulation, travel, wayfinding, system control, symbolic input.
- Go-Go: Rv = Rr + k(Rr − D)² beyond threshold D; HOMER = ray + hand; WIM.
- Travel: physical, steering, target-based (teleport), manipulation-based; exploration, search, manoeuvring.
- Wayfinding: landmark, route, survey knowledge; maps, compasses, trails, landmarks.
- System control: menus, voice, gestures, tools, multimodal ("put that there").
- Evaluation: heuristic, formative, summative; SSQ for cybersickness.

### Important questions

1. Explain 3D manipulation tasks and techniques (virtual hand, Go-Go, ray-casting, HOMER, WIM) and design guidelines.
2. Explain travel tasks and techniques in VR.
3. Explain wayfinding theory, user-centred and environment-centred wayfinding support, and how wayfinding aids are evaluated.
4. Explain system control: classification, graphical menus, voice commands, gestures, tools, multimodal control and design guidelines, with a case study.
5. Explain symbolic input techniques in VR.
6. Explain strategies for designing and developing 3D UIs and methods for evaluating them.
7. Explain applications of VR in engineering, architecture, education, medicine, entertainment, science and training.

---

## Unit 5: Augmented Reality

### 2-mark definitions

- **Augmented reality (AR):** technology that overlays computer-generated content (graphics, text, audio) on the user's view of the real world in real time, registered (aligned) with real objects.
- **Azuma's definition (1997):** an AR system (1) combines real and virtual, (2) is interactive in real time, and (3) is registered in 3D.
- **Mixed reality (MR):** environments where real and virtual objects coexist and interact; covers the range between the real world and fully virtual worlds.
- **Reality-virtuality continuum (Milgram and Kishino, 1994):** real environment → augmented reality → augmented virtuality → virtual environment; the middle part is mixed reality.
- **Registration:** accurately aligning virtual objects with the real world so they appear fixed in place.
- **Marker-based tracking:** using printed fiducial markers (square black-and-white patterns, QR-like codes) recognized by the camera to compute pose.
- **Marker-less tracking:** tracking using natural features of the scene (corners, edges, planes) or models, without special markers, often with SLAM.
- **SLAM (Simultaneous Localization and Mapping):** building a map of an unknown environment while tracking the device's position in it.
- **Optical see-through (OST) display:** the user sees the real world directly through transparent optics with virtual images combined (HoloLens, Magic Leap).
- **Video see-through (VST) display:** cameras capture the real world, and the combined image is shown on opaque screens (phone AR, Apple Vision Pro, Meta Quest 3 passthrough).
- **Spatial (projection) AR:** projecting virtual content directly onto real surfaces, without anything worn or held.
- **Occlusion (in AR):** correctly hiding virtual objects behind real ones (and vice versa) so the scene looks believable.

### Core concepts

**Taxonomy of AR**
- By **display:** head-mounted (OST or VST), handheld (phones, tablets), spatial/projection, and fixed screens (magic mirror).
- By **tracking:** sensor-based (GPS, compass, IMU), vision-based (marker-based, marker-less with natural features, model-based), hybrid.
- By **interaction:** passive viewing, tangible AR (manipulate real objects/markers to control virtual content), collaborative AR, multimodal (gesture, voice, gaze).
- By **mobility:** stationary (desktop, kiosk) vs mobile/wearable.
- Milgram's continuum positions AR between the real world and VR.

**AR technology (components)**
1. **Display:** HMD, smart glasses, phone screen, projector.
2. **Tracking and registration:** cameras, IMU, GPS, depth sensors (LiDAR, time-of-flight), computer vision (feature detection, SLAM).
3. **Rendering:** drawing virtual objects with correct perspective, lighting estimation and occlusion.
4. **Input and interaction:** touch, gestures, voice, gaze, controllers.
5. **Processing:** mobile CPUs and GPUs, cloud or edge offloading.
6. **Content and data:** 3D models, annotations, maps, databases.

**Features of AR:** real-time interaction, combination of real and virtual, 3D registration, context awareness (location, objects), hands-free information in wearable AR.

**AR vs VR**

| Point | AR | VR |
|---|---|---|
| Environment | Real world enhanced with virtual content | Fully virtual world replacing reality |
| Immersion | Partial; user stays aware of surroundings | Full immersion; real world blocked |
| Devices | Phones, tablets, smart glasses, OST/VST HMDs | VR headsets, CAVEs |
| Main challenge | Accurate registration and tracking in uncontrolled environments | Rendering speed, presence, cybersickness |
| Content | Less rendering (only added objects) but must match the real scene | Must render the entire scene |
| Typical use | Navigation, maintenance guidance, retail try-on, games like Pokémon Go | Simulation, training, games, virtual tours |

**Challenges with AR:** registration errors (static from calibration, dynamic from latency), tracking in outdoor and changing environments, limited FOV of see-through displays, brightness and contrast outdoors, occlusion handling, battery and heat on mobile devices, social acceptance and privacy (always-on cameras), information overload, safety (distraction while walking or driving).

**AR systems and functionality:** a typical AR loop: capture camera frame → detect and track (markers or features) → estimate camera pose (6 DOF) → update the virtual scene → render virtual objects with that pose → composite with the real view → display. Functionality includes annotation (labels on objects), guidance (step-by-step instructions), visualization of hidden information (pipes behind walls, X-ray vision), remote collaboration (an expert draws on the live view), and navigation.

**Augmented reality methods**
- **Marker-based:** detect the square border, read the pattern ID, compute pose from the four corners (homography). Robust and cheap, but markers must be visible and placed in advance. Example: ARToolKit (2000, Hirokazu Kato).
- **Marker-less:** feature-based (detect and match keypoints such as ORB, SIFT features), plane detection (ARKit and ARCore detect floors and tables), model-based tracking (match a known 3D CAD model), image targets (natural images like posters), location-based (GPS and compass, for outdoor AR such as Pokémon Go).
- **Sensor fusion:** combining vision with IMU (visual-inertial odometry) for robust, low-latency tracking.

**Visualization techniques for AR:** labels and annotations with leader lines; highlighting and outlines; X-ray and ghosting (showing hidden objects with transparency or cut-away views); depth cues and shadows so virtual objects appear grounded; view management (avoiding cluttered and overlapping labels); light estimation to match real lighting; occlusion using depth sensing.

**Wireless displays in educational AR:** students use tablets and phones (wireless, mobile) to view 3D models over textbooks, AR markers in classrooms, AR sandboxes (projected topography), and shared AR experiences in which a teacher's device controls content shown on students' devices. Benefits: engagement, visualization of abstract concepts, learning by exploration; issues: device cost, classroom management, distraction.

**Mobile projection interfaces:** handheld or wearable projectors (pico projectors) display interfaces on any surface (walls, palms, tables); examples include "SixthSense" (wearable camera + projector recognizing finger gestures) and projector phones. Challenges: brightness, surface colour, keystone correction, hand jitter.

**Marker-less tracking (detail):** SLAM builds a map of feature points while estimating pose; relocalization when tracking is lost; planes and anchors keep content fixed; LiDAR depth sensors improve accuracy and occlusion. Frameworks: ARKit (Apple), ARCore (Google), Vuforia, 8th Wall (web AR).

**Enhancing interactivity in AR:** touch gestures on mobile screens (tap to place, pinch to scale), mid-air hand gestures (HoloLens), gaze and dwell, voice commands, tangible interfaces (move a physical card to move a virtual object), multi-user shared anchors, physics so virtual objects collide with real surfaces.

**Evaluating AR systems:** measure registration accuracy (alignment error in pixels or mm), tracking robustness (how often tracking is lost), latency, frame rate; usability (task time, errors, SUS questionnaire), workload (NASA-TLX), user preference; field studies in real conditions; compare with paper manuals or non-AR methods.

### Solved examples

**Example 1 (registration error from latency).** A user turns their head at 100°/s and the AR system's end-to-end latency is 50 ms. The virtual label lags by 100 × 0.05 = **5°**. At a distance of 2 m, that is about 2 × tan(5°) ≈ **0.17 m** of misalignment, very noticeable. Reducing latency to 10 ms cuts the error to 1° (3.5 cm).

**Example 2 (choosing an AR approach).** An aircraft maintenance technician needs hands-free step-by-step overlays on an engine: **optical see-through HMD with model-based tracking** of the engine. A furniture shop wants customers to preview a sofa at home: **phone-based marker-less AR with plane detection (ARKit/ARCore)**. A museum wants an interactive exhibit with no devices: **spatial (projection) AR** onto the artefact.

**Example 3 (marker vs marker-less).** A textbook with printed 3D chemistry models: marker-based (image targets on each page) is reliable and cheap. Outdoor city navigation: marker-less with GPS, compass and visual positioning is needed because markers cannot be placed everywhere.

### Key points to remember

- Azuma: real + virtual, interactive in real time, registered in 3D.
- Milgram continuum: real → AR → AV → VR; MR in between.
- OST vs VST vs handheld vs spatial (projection) AR.
- Marker-based (ARToolKit) vs marker-less (SLAM, plane detection, model-based, GPS).
- Challenges: registration, latency, FOV, brightness, occlusion, power, privacy.
- Evaluation: accuracy, robustness, latency, usability (SUS, NASA-TLX).

### Important questions

1. Define augmented reality. Explain its taxonomy and the reality-virtuality continuum.
2. Explain AR technology and features. Compare AR and VR.
3. What are the challenges of AR? Explain AR systems and their functionality.
4. Explain AR methods: marker-based and marker-less tracking.
5. Explain visualization techniques for AR and how interactivity is enhanced.
6. Write notes on wireless displays in educational AR and mobile projection interfaces.
7. How are AR systems evaluated?

---

## Last-hour checklist

- [ ] VR definition, three I's, immersion vs presence; history table (Link, Sensorama, Sutherland 1968, VPL, CAVE, Oculus).
- [ ] Requirements and benefits; 90 Hz, 11.1 ms, < 20 ms latency; pixels per degree.
- [ ] Visual displays table; depth cues; vergence-accommodation conflict; auditory (HRTF); haptic (tactile, kinesthetic, 1 kHz).
- [ ] Input device characteristics; 3 vs 6 DOF; tracking technologies table; drift example (6°).
- [ ] 3D mice, special-purpose devices, direct human input, home-brewed devices; Fitts' law example.
- [ ] VR database, coordinates, scene hierarchy example, quaternions, bounding volumes.
- [ ] LOD, culling, occluders, lights, cameras (IPD), scripts; interaction and GUIs; toolkits table.
- [ ] Selection/manipulation table; Go-Go formula (1.6 m example); guidelines.
- [ ] Travel techniques; wayfinding knowledge types and aids; system control and case study; symbolic input.
- [ ] Design strategies and evaluation methods; VR applications.
- [ ] AR definition (Azuma), continuum, taxonomy, technology, AR vs VR table, challenges.
- [ ] Marker-based vs marker-less; visualization; educational AR; projection interfaces; interactivity; evaluation.

---

## Books prescribed by AKTU

These are the books named in the official AKTU syllabus. Buy or borrow them through a bookshop or your college library. The WorldCat links show which libraries hold a copy.

| # | Title | Author(s) | Publisher | Where to get it legally |
|---|---|---|---|---|
| 1 | Developing Virtual Reality Applications: Foundations of Effective Design | Alan B. Craig, William R. Sherman, Jeffrey D. Will | Morgan Kaufmann (2009) | [WorldCat](https://search.worldcat.org/search?q=Developing+Virtual+Reality+Applications+Craig+Sherman+Will) |
| 2 | Designing Virtual Systems: The Structured Approach | Gerard Jounghyun Kim | Springer (2005) | [WorldCat](https://search.worldcat.org/search?q=Designing+Virtual+Systems+The+Structured+Approach+Kim) |
| 3 | 3D User Interfaces: Theory and Practice | Doug A. Bowman, Ernst Kruijff, Joseph J. LaViola, Ivan Poupyrev | Addison Wesley (2005) | [WorldCat](https://search.worldcat.org/search?q=3D+User+Interfaces+Theory+and+Practice+Bowman) |
| 4 | Spatial Augmented Reality: Merging Real and Virtual Worlds | Oliver Bimber, Ramesh Raskar | A K Peters (2005) | [WorldCat](https://search.worldcat.org/search?q=Spatial+Augmented+Reality+Bimber+Raskar) |
| 5 | Virtual Reality Technology | Grigore C. Burdea, Philippe Coiffet | Wiley (2003) | [WorldCat](https://search.worldcat.org/search?q=Virtual+Reality+Technology+Burdea+Coiffet) |
| 6 | Virtual Reality Systems | John Vince | Addison Wesley (1995) | [WorldCat](https://search.worldcat.org/search?q=Virtual+Reality+Systems+John+Vince) |
| 7 | Virtual Reality | Howard Rheingold | Simon & Schuster (1991) | [WorldCat](https://search.worldcat.org/search?q=Virtual+Reality+Howard+Rheingold) |
| 8 | Understanding Virtual Reality: Interface, Application and Design | William R. Sherman, Alan B. Craig | Morgan Kaufmann (2002) | [WorldCat](https://search.worldcat.org/search?q=Understanding+Virtual+Reality+Sherman+Craig) |
| 9 | Understanding Augmented Reality: Concepts and Applications | Alan B. Craig | Morgan Kaufmann (2013) | [WorldCat](https://search.worldcat.org/search?q=Understanding+Augmented+Reality+Alan+Craig) |

Bimber and Raskar's "Spatial Augmented Reality" is available free from the authors' website (Bauhaus-Universität Weimar). Unity Learn and the OpenXR specification (khronos.org) are free, legal companions for Units 3 and 4.

**Syllabus source:** [AKTU B.Tech 3rd year CS/IT syllabus, 2024-25 (copy hosted by an affiliated college, PDF)](https://gnindia.dronacharya.info/Downloads/Syllabus/B-TECH-CSIT-IT-3rd-YR-2024-25-AKTU-26112024.pdf)

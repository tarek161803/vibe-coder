import type { CatalogEntry } from "../types";

/** Robotics and Autonomous Systems */
const entries: CatalogEntry[] = [
  {
    id: "ros-2",
    name: "ROS 2",
    abbr: "R2",
    category: "Robotics Framework",
    color: "#2b4c7e",
    description:
      "The redesigned second generation of ROS, built for real products as well as research. It uses the DDS messaging standard and adds better security and real-time support.",
    highlights: [
      "Production robots and fleets",
      "Multi-robot communication over DDS",
      "Autonomous vehicles and drones",
    ],
    funFact:
      "ROS releases are named alphabetically with turtle-themed names, like \"Humble Hawksbill\" and \"Jazzy Jalisco\", and each comes with its own turtle logo.",
    url: "https://docs.ros.org/",
  },
  {
    id: "gazebo",
    name: "Gazebo",
    abbr: "GZ",
    category: "Robot Simulator",
    color: "#f58113",
    description:
      "An open-source 3D robot simulator with physics, sensors and realistic environments. You can test robot code safely in simulation before running it on real hardware.",
    highlights: [
      "Simulating robots with ROS",
      "Testing sensors like cameras and lidar",
      "Robotics competitions and courses",
    ],
    funFact:
      "Gazebo was used as the simulator for the DARPA Robotics Challenge's virtual competition, where teams programmed simulated humanoid robots for disaster response.",
    url: "https://gazebosim.org/",
  },
  {
    id: "moveit",
    name: "MoveIt",
    abbr: "MI",
    category: "Motion Planning Library",
    color: "#2a9df4",
    description:
      "An open-source motion planning framework for robot arms, built on ROS. It figures out how to move a manipulator to a goal without hitting obstacles or itself.",
    highlights: [
      "Pick-and-place with robot arms",
      "Collision-free arm trajectories",
      "Grasping and manipulation research",
    ],
    funFact:
      "MoveIt was originally developed at Willow Garage — the same robotics lab that incubated ROS itself.",
    url: "https://moveit.ros.org/",
    spawnWeight: 0.5,
  },
  {
    id: "nvidia-isaac",
    name: "NVIDIA Isaac",
    abbr: "NI",
    category: "Robotics Platform",
    color: "#76b900",
    description:
      "NVIDIA's platform for building AI-powered robots, including GPU-accelerated libraries and Isaac Sim, a photorealistic simulator for training and testing robots.",
    highlights: [
      "Training robots in simulation",
      "GPU-accelerated perception for ROS",
      "Synthetic data for robot AI",
    ],
    funFact:
      "Isaac Sim is built on NVIDIA Omniverse, so robots can practice in physically simulated virtual worlds thousands of times before touching real hardware.",
    url: "https://developer.nvidia.com/isaac",
    spawnWeight: 0.5,
  },
  {
    id: "open-rmf",
    name: "Open-RMF",
    abbr: "OR",
    category: "Robot Fleet Framework",
    color: "#1e88e5",
    description:
      "The Open Robotics Middleware Framework: open-source software that lets robot fleets from different vendors share the same building, coordinating traffic, doors and lifts.",
    highlights: [
      "Coordinating mixed robot fleets",
      "Robots riding elevators and opening doors",
      "Hospitals, airports and warehouses",
    ],
    funFact:
      "Open-RMF lets robots from different companies take turns in shared corridors and even call elevators, so a cleaning robot and a delivery robot don't gridlock each other.",
    url: "https://www.open-rmf.org/",
    spawnWeight: 0.5,
  },
  {
    id: "px4",
    name: "PX4",
    abbr: "PX",
    category: "Drone Autopilot",
    color: "#2e7bcf",
    description:
      "An open-source autopilot software for drones and other unmanned vehicles. It handles flight control, stabilization and autonomous missions on flight controller boards.",
    highlights: [
      "Commercial and research drones",
      "Autonomous waypoint missions",
      "Fixed-wing, multicopter and VTOL craft",
    ],
    funFact:
      "PX4 started at ETH Zurich as a student project by Lorenz Meier, alongside the Pixhawk flight controller hardware that is now a common open standard.",
    url: "https://px4.io/",
    spawnWeight: 0.5,
  },
  {
    id: "ardupilot",
    name: "ArduPilot",
    abbr: "AP",
    category: "Autopilot Software",
    color: "#2f9e44",
    description:
      "A mature open-source autopilot that can control drones, planes, rovers, boats and even submarines. It runs on many flight controllers and supports fully autonomous missions.",
    highlights: [
      "Hobby and professional drones",
      "Autonomous boats and rovers",
      "Mapping and agricultural flights",
    ],
    funFact:
      "ArduPilot began in the DIY Drones community on Arduino boards — hence the \"Ardu\" — and today it even has a version for underwater vehicles called ArduSub.",
    url: "https://ardupilot.org/",
    spawnWeight: 0.5,
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    abbr: "CV",
    category: "AI Field",
    color: "#00a8e8",
    description:
      "The field of teaching computers to understand images and video — spotting objects, reading text, tracking movement. It gives robots and apps a sense of sight.",
    highlights: [
      "Face unlock and photo search",
      "Object detection for robots and cars",
      "Medical image analysis",
    ],
    funFact:
      "In 1966 MIT's \"Summer Vision Project\" hoped to get a computer to recognize objects in a single summer. The problem turned out to take decades.",
    url: "https://en.wikipedia.org/wiki/Computer_vision",
  },
  {
    id: "sensor-fusion",
    name: "Sensor Fusion",
    abbr: "SF",
    category: "Robotics Concept",
    color: "#8e44ad",
    description:
      "Combining data from several sensors — like cameras, GPS, lidar and accelerometers — to get a more accurate picture than any single sensor could give on its own.",
    highlights: [
      "Self-driving car perception",
      "Phone orientation and step counting",
      "Drone stabilization",
    ],
    funFact:
      "The Kalman filter, a classic sensor-fusion algorithm, helped guide the Apollo spacecraft to the Moon by blending noisy measurements into reliable estimates.",
    url: "https://en.wikipedia.org/wiki/Sensor_fusion",
  },
  {
    id: "motion-planning",
    name: "Motion Planning",
    abbr: "MP",
    category: "Robotics Concept",
    color: "#e67e22",
    description:
      "Working out a sequence of movements that takes a robot from where it is to where it needs to be, without collisions and within its physical limits.",
    highlights: [
      "Robot arm trajectories",
      "Self-driving car maneuvers",
      "Character movement in games",
    ],
    funFact:
      "A classic version of motion planning is called the \"piano mover's problem\": how do you get a big, awkward object through a cluttered space without hitting anything?",
    url: "https://en.wikipedia.org/wiki/Motion_planning",
  },
  {
    id: "path-planning",
    name: "Path Planning",
    abbr: "PP",
    category: "Robotics Concept",
    color: "#27ae60",
    description:
      "Finding a good route from a start to a goal on a map, avoiding obstacles. Algorithms like A* and Dijkstra's search a grid or graph for the shortest path.",
    highlights: [
      "Robot and drone navigation",
      "Game AI moving around a map",
      "GPS route directions",
    ],
    funFact:
      "The famous A* search algorithm was invented in 1968 for Shakey the robot at the Stanford Research Institute, one of the first mobile robots that could reason about its actions.",
    url: "https://en.wikipedia.org/wiki/A*_search_algorithm",
  },
  {
    id: "autonomous-navigation",
    name: "Autonomous Navigation",
    abbr: "AN",
    category: "Robotics Concept",
    color: "#16a085",
    description:
      "A robot or vehicle getting itself from place to place without a human steering. It combines sensing, localization, mapping and planning to move safely through the world.",
    highlights: [
      "Self-driving cars and delivery robots",
      "Warehouse robots",
      "Planetary rovers like on Mars",
    ],
    funFact:
      "At the first DARPA Grand Challenge in 2004, no self-driving vehicle finished the desert course. A year later, Stanford's car \"Stanley\" won.",
    url: "https://en.wikipedia.org/wiki/DARPA_Grand_Challenge",
  },
  {
    id: "localization",
    name: "Localization",
    abbr: "Lo",
    category: "Robotics Concept",
    color: "#c0392b",
    description:
      "How a robot figures out exactly where it is on a map, using sensor readings and its own movement. GPS alone often isn't precise enough, and it doesn't work indoors.",
    highlights: [
      "Indoor robots and robot vacuums",
      "Lane-level position in self-driving cars",
      "Warehouse and factory robots",
    ],
    funFact:
      "Monte Carlo localization scatters thousands of guesses called \"particles\" across the map, then keeps the ones that best match what the robot's sensors actually see.",
    url: "https://en.wikipedia.org/wiki/Monte_Carlo_localization",
  },
  {
    id: "kinematics",
    name: "Kinematics",
    abbr: "Ki",
    category: "Robotics Math",
    color: "#2980b9",
    description:
      "The math of motion without worrying about forces. In robotics it links joint angles to where a robot's hand ends up — and inverse kinematics works it out backwards.",
    highlights: [
      "Controlling robot arm joints",
      "Inverse kinematics for game characters",
      "Animation rigs in 3D software",
    ],
    funFact:
      "\"Kinematics\" comes from the Greek word kinema, meaning \"motion\" — the same root that gave us the word \"cinema\".",
    url: "https://en.wikipedia.org/wiki/Kinematics",
  },
  {
    id: "control-systems",
    name: "Control Systems",
    abbr: "CS",
    category: "Engineering Field",
    color: "#d35400",
    description:
      "Systems that keep a machine doing what you want by measuring its output and correcting it continuously, like a thermostat or cruise control. PID controllers are the classic example.",
    highlights: [
      "Keeping drones stable in the air",
      "Motor speed and position control",
      "Cruise control and thermostats",
    ],
    funFact:
      "In 1868 James Clerk Maxwell wrote a paper \"On Governors\", analyzing the spinning-ball speed regulators on steam engines — an early milestone of control theory.",
    url: "https://en.wikipedia.org/wiki/Control_system",
  },
];

export default entries;

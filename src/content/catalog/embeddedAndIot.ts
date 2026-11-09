import type { CatalogEntry } from "../types";

/** Embedded Systems and IoT */
const entries: CatalogEntry[] = [
  {
    id: "arduino",
    name: "Arduino",
    abbr: "Ar",
    category: "Microcontroller Platform",
    color: "#00979d",
    description:
      "A beginner-friendly electronics platform: small programmable boards plus a simple editor. You write a little code, upload it, and make LEDs blink, motors spin or sensors report.",
    highlights: [
      "Learning electronics and coding",
      "DIY gadgets and robots",
      "Quick hardware prototypes",
    ],
    funFact:
      "Arduino was born in 2005 in Ivrea, Italy, and is named after Bar di Re Arduino, a bar where some of the founders used to meet.",
    url: "https://www.arduino.cc",
  },
  {
    id: "raspberry-pi",
    name: "Raspberry Pi",
    abbr: "RP",
    category: "Single-Board Computer",
    color: "#c51a4a",
    description:
      "A small, cheap computer the size of a credit card that runs Linux. You can plug in a screen and keyboard, or use its pins to control electronics.",
    highlights: [
      "Learning to code and use Linux",
      "Home servers and media centers",
      "Robotics and IoT projects",
    ],
    funFact:
      "The Raspberry Pi was created to get kids interested in computer science, and has sold tens of millions of units, making it one of the best-selling computers ever.",
    url: "https://www.raspberrypi.com",
  },
  {
    id: "esp32",
    name: "ESP32",
    abbr: "ES",
    category: "Microcontroller",
    color: "#e7352c",
    description:
      "A low-cost microcontroller chip with built-in Wi-Fi and Bluetooth. It’s a favorite for connected gadgets and can be programmed with the Arduino tools.",
    highlights: [
      "Wi-Fi and Bluetooth IoT devices",
      "Smart home sensors",
      "Hobby projects with Arduino IDE",
    ],
    funFact:
      "The ESP32 is made by Espressif Systems, a company based in Shanghai, and many ESP32 chips have two processor cores despite costing just a few dollars.",
    url: "https://www.espressif.com/en/products/socs/esp32",
  },
  {
    id: "esp8266",
    name: "ESP8266",
    abbr: "ES",
    category: "Microcontroller",
    color: "#d0352b",
    description:
      "A tiny, very cheap Wi-Fi chip with a built-in microcontroller. It made it easy for hobbyists to connect their projects to the internet.",
    highlights: [
      "Cheap Wi-Fi connected sensors",
      "Smart plugs and switches",
      "Boards like NodeMCU and Wemos D1",
    ],
    funFact:
      "When the ESP8266 appeared around 2014, its documentation was mostly in Chinese — hobbyists reverse-engineered and translated it, sparking a huge maker community.",
    url: "https://www.espressif.com/en/products/socs/esp8266",
    spawnWeight: 0.5,
  },
  {
    id: "stm32",
    name: "STM32",
    abbr: "ST",
    category: "Microcontroller Family",
    color: "#03234b",
    description:
      "A large family of 32-bit microcontrollers based on Arm Cortex-M cores. They’re widely used in professional products, from drones to industrial gear.",
    highlights: [
      "Industrial and consumer devices",
      "Drone flight controllers",
      "Embedded C development",
    ],
    funFact:
      "Cheap STM32 boards are nicknamed \"Blue Pill\" and \"Black Pill\" by hobbyists, after the colors of their circuit boards.",
    url: "https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",
    spawnWeight: 0.5,
  },
  {
    id: "nvidia-jetson",
    name: "NVIDIA Jetson",
    abbr: "NJ",
    category: "Edge AI Computer",
    color: "#76b900",
    description:
      "A line of small computers from NVIDIA with powerful GPUs for running AI models on devices, rather than in the cloud.",
    highlights: [
      "AI on robots and drones",
      "Real-time computer vision",
      "Smart cameras at the edge",
    ],
    funFact:
      "Jetson boards run the same CUDA software used on NVIDIA’s big data center GPUs, so you can prototype AI on a desktop and deploy it to a robot.",
    url: "https://developer.nvidia.com/embedded-computing",
    spawnWeight: 0.5,
  },
  {
    id: "beaglebone",
    name: "BeagleBone",
    abbr: "BB",
    category: "Single-Board Computer",
    color: "#c25b1b",
    description:
      "An open-source single-board computer that runs Linux, with lots of input/output pins and special real-time co-processors for precise hardware control.",
    highlights: [
      "Industrial control prototypes",
      "Robotics with real-time I/O",
      "Learning embedded Linux",
    ],
    funFact:
      "BeagleBone boards include PRUs — tiny extra processors that can toggle pins with precise timing, something a normal Linux system struggles to do.",
    url: "https://www.beagleboard.org",
    spawnWeight: 0.5,
  },
  {
    id: "teensy",
    name: "Teensy",
    abbr: "Te",
    category: "Microcontroller Board",
    color: "#2e8b57",
    description:
      "A tiny but powerful microcontroller board that works with the Arduino tools. It’s known for speed and excellent USB support.",
    highlights: [
      "Custom keyboards and MIDI gear",
      "Audio processing projects",
      "Fast Arduino-compatible code",
    ],
    funFact:
      "Teensy is made by PJRC, essentially a small shop run by Paul Stoffregen, and is beloved by musicians for building custom MIDI controllers.",
    url: "https://www.pjrc.com/teensy/",
    spawnWeight: 0.5,
  },
  {
    id: "nordic-nrf52",
    name: "Nordic nRF52",
    abbr: "nR",
    category: "Wireless Microcontroller",
    color: "#00a9ce",
    description:
      "A family of low-power chips from Nordic Semiconductor with built-in Bluetooth Low Energy radios. They run for a long time on small batteries.",
    highlights: [
      "Fitness trackers and wearables",
      "Bluetooth LE sensors",
      "Battery-powered IoT devices",
    ],
    funFact:
      "Nordic Semiconductor is a Norwegian company, and its chips are inside a huge number of Bluetooth gadgets — from smart rings to wireless keyboards.",
    url: "https://www.nordicsemi.com/Products/nRF52-Series-SoC",
    spawnWeight: 0.5,
  },
  {
    id: "freertos",
    name: "FreeRTOS",
    abbr: "Fr",
    category: "Real-Time OS",
    color: "#2f9e44",
    description:
      "A tiny, free real-time operating system for microcontrollers. It lets small devices run several tasks at once with predictable timing.",
    highlights: [
      "Multitasking on microcontrollers",
      "IoT devices with AWS",
      "Running tasks on ESP32",
    ],
    funFact:
      "FreeRTOS was created by Richard Barry around 2003 and later taken over by Amazon, which still offers it under the permissive MIT license.",
    url: "https://www.freertos.org",
  },
  {
    id: "zephyr",
    name: "Zephyr",
    abbr: "Ze",
    category: "Real-Time OS",
    color: "#7929d2",
    description:
      "An open-source real-time operating system for small, connected devices, hosted by the Linux Foundation. It supports hundreds of boards and many wireless protocols.",
    highlights: [
      "Bluetooth and Thread devices",
      "Wearables and sensors",
      "Cross-board embedded firmware",
    ],
    funFact:
      "Zephyr is named after Zephyrus, the Greek god of the gentle west wind — a nod to being small and lightweight.",
    url: "https://www.zephyrproject.org",
    spawnWeight: 0.5,
  },
  {
    id: "riot-os",
    name: "RIOT OS",
    abbr: "RO",
    category: "IoT Operating System",
    color: "#bc1a29",
    description:
      "A free, open-source operating system for tiny IoT devices. It lets you write firmware in standard C or C++ with multithreading and networking built in.",
    highlights: [
      "Low-power IoT devices",
      "Academic networking research",
      "6LoWPAN and IPv6 sensors",
    ],
    funFact:
      "RIOT calls itself \"the friendly operating system for the Internet of Things\" and started as a research project among universities in Germany and France.",
    url: "https://www.riot-os.org",
    spawnWeight: 0.5,
  },
  {
    id: "micropython",
    name: "MicroPython",
    abbr: "Mi",
    category: "Embedded Language",
    color: "#3c8dbc",
    description:
      "A lean version of Python 3 that runs directly on microcontrollers. You can type commands at an interactive prompt and instantly control hardware.",
    highlights: [
      "Python on ESP32 and Raspberry Pi Pico",
      "Teaching electronics with Python",
      "Rapid hardware prototyping",
    ],
    funFact:
      "MicroPython was created by physicist Damien George, who launched it through a successful Kickstarter campaign in 2013.",
    url: "https://micropython.org",
  },
  {
    id: "zigbee",
    name: "Zigbee",
    abbr: "ZB",
    category: "Wireless Protocol",
    color: "#eb0443",
    description:
      "A low-power wireless protocol where smart home devices form a mesh network, passing messages along to each other to cover a whole house.",
    highlights: [
      "Smart bulbs like Philips Hue",
      "Home sensors and switches",
      "Low-power mesh networks",
    ],
    funFact:
      "Zigbee’s name comes from the zig-zag \"waggle dance\" honeybees use to tell each other where to find food.",
    url: "https://csa-iot.org/all-solutions/zigbee/",
  },
  {
    id: "z-wave",
    name: "Z-Wave",
    abbr: "ZW",
    category: "Wireless Protocol",
    color: "#1b5faa",
    description:
      "A wireless mesh protocol made for home automation. It uses lower radio frequencies than Wi-Fi, so it avoids interference and reaches through walls well.",
    highlights: [
      "Smart locks and thermostats",
      "Home security sensors",
      "Interoperable smart home gear",
    ],
    funFact:
      "Z-Wave operates below 1 GHz (around 900 MHz in the US), steering clear of the crowded 2.4 GHz band used by Wi-Fi, Bluetooth and Zigbee.",
    url: "https://z-wavealliance.org",
    spawnWeight: 0.5,
  },
  {
    id: "matter",
    name: "Matter",
    abbr: "Ma",
    category: "Smart Home Standard",
    color: "#2563eb",
    description:
      "A smart home standard that lets devices from different brands work together with Apple, Google, Amazon and Samsung systems.",
    highlights: [
      "Cross-brand smart home devices",
      "Runs over Wi-Fi and Thread",
      "Local control without the cloud",
    ],
    funFact:
      "Matter began as \"Project CHIP\" (Connected Home over IP), a rare team-up between rivals Apple, Google and Amazon.",
    url: "https://csa-iot.org/all-solutions/matter/",
  },
  {
    id: "thread",
    name: "Thread",
    abbr: "Th",
    category: "Wireless Protocol",
    color: "#4d4dff",
    description:
      "A low-power, IP-based mesh networking protocol for smart home devices. Each device gets its own IPv6 address, and the mesh heals itself if one device drops.",
    highlights: [
      "Network layer for Matter",
      "Battery-powered smart sensors",
      "Self-healing home mesh networks",
    ],
    funFact:
      "Thread was designed with help from Google’s Nest team, and devices like HomePods and Nest hubs can act as \"border routers\" linking Thread to your Wi-Fi.",
    url: "https://www.threadgroup.org",
    spawnWeight: 0.5,
  },
  {
    id: "bluetooth-le",
    name: "Bluetooth LE",
    abbr: "BL",
    category: "Wireless Protocol",
    color: "#0082fc",
    description:
      "Bluetooth Low Energy: a version of Bluetooth designed to send small bits of data using very little power, so devices can run for months on a coin battery.",
    highlights: [
      "Fitness bands and smartwatches",
      "Beacons and item trackers",
      "Phone-to-gadget communication",
    ],
    funFact:
      "Bluetooth is named after Harald \"Bluetooth\" Gormsson, a 10th-century Danish king; its logo combines his initials in Nordic runes.",
    url: "https://www.bluetooth.com",
  },
  {
    id: "lorawan",
    name: "LoRaWAN",
    abbr: "Lo",
    category: "Wireless Protocol",
    color: "#1c75bc",
    description:
      "A long-range, low-power wireless protocol that lets sensors send small messages over many kilometers. Perfect for farms, cities and remote monitoring.",
    highlights: [
      "Smart agriculture sensors",
      "City parking and metering",
      "Remote asset tracking",
    ],
    funFact:
      "LoRa stands for \"Long Range\". A single LoRaWAN gateway can often cover sensors several kilometers away in open country.",
    url: "https://lora-alliance.org",
    spawnWeight: 0.5,
  },
  {
    id: "modbus",
    name: "Modbus",
    abbr: "MB",
    category: "Industrial Protocol",
    color: "#c2410c",
    description:
      "A simple, very old communication protocol for industrial equipment like sensors, meters and controllers. It’s still everywhere in factories today.",
    highlights: [
      "Factory automation and PLCs",
      "Energy meters and HVAC systems",
      "Serial and TCP device networks",
    ],
    funFact:
      "Modbus was published by Modicon in 1979 for its programmable logic controllers — and it’s still one of the most common industrial protocols decades later.",
    url: "https://en.wikipedia.org/wiki/Modbus",
    spawnWeight: 0.5,
  },
  {
    id: "can-bus",
    name: "CAN Bus",
    abbr: "CB",
    category: "Vehicle Network",
    color: "#b91c1c",
    description:
      "Controller Area Network: a robust way for the small computers inside a car, like engine and brake controllers, to talk to each other over shared wires.",
    highlights: [
      "In-vehicle communication",
      "Car diagnostics via OBD-II",
      "Industrial machines and robots",
    ],
    funFact:
      "CAN bus was developed by Bosch in the 1980s to cut down on the heavy bundles of wiring in cars. Nearly every modern car uses it.",
    url: "https://en.wikipedia.org/wiki/CAN_bus",
    spawnWeight: 0.5,
  },
  {
    id: "aws-iot",
    name: "AWS IoT",
    abbr: "AI",
    category: "IoT Cloud Platform",
    color: "#ff9900",
    description:
      "Amazon Web Services’ set of tools for securely connecting devices to the cloud, collecting their data and managing them at scale.",
    highlights: [
      "Connecting devices via MQTT",
      "Device shadows and fleet updates",
      "Routing sensor data to AWS",
    ],
    funFact:
      "AWS IoT keeps a \"device shadow\" — a cloud copy of each device’s state — so apps can read or change settings even while the device is offline.",
    url: "https://aws.amazon.com/iot/",
  },
  {
    id: "azure-iot",
    name: "Azure IoT",
    abbr: "AI",
    category: "IoT Cloud Platform",
    color: "#0078d4",
    description:
      "Microsoft’s cloud services for connecting, monitoring and controlling IoT devices. Azure IoT Hub handles secure two-way messaging with millions of devices.",
    highlights: [
      "Device messaging with IoT Hub",
      "Industrial IoT monitoring",
      "Edge computing with IoT Edge",
    ],
    funFact:
      "Azure IoT uses \"device twins\" — JSON documents in the cloud that mirror each device’s state and settings so you can sync them.",
    url: "https://azure.microsoft.com/en-us/solutions/iot",
    spawnWeight: 0.5,
  },
  {
    id: "thingsboard",
    name: "ThingsBoard",
    abbr: "TB",
    category: "IoT Platform",
    color: "#305680",
    description:
      "An open-source IoT platform for collecting device data, visualizing it on dashboards and setting up rules and alerts.",
    highlights: [
      "IoT dashboards and charts",
      "Device management",
      "Rule-based alerts",
    ],
    funFact:
      "ThingsBoard has a free open-source Community Edition you can self-host, so you can build a full IoT dashboard without paying for a cloud service.",
    url: "https://thingsboard.io",
    spawnWeight: 0.5,
  },
  {
    id: "home-assistant",
    name: "Home Assistant",
    abbr: "HA",
    category: "Home Automation",
    color: "#18bcf2",
    description:
      "Free, open-source software for controlling your smart home locally. It connects thousands of devices from different brands into one dashboard with automations.",
    highlights: [
      "Unifying smart home devices",
      "Local automations and scenes",
      "Running on a Raspberry Pi",
    ],
    funFact:
      "Home Assistant was started in 2013 by Paulus Schoutsen, and it has become one of the most active open-source projects on GitHub by contributor count.",
    url: "https://www.home-assistant.io",
  },
  {
    id: "node-red",
    name: "Node-RED",
    abbr: "NR",
    category: "Flow-Based Programming",
    color: "#8f0000",
    description:
      "A visual programming tool where you wire together boxes (nodes) in a browser to connect devices, APIs and services. It runs on Node.js.",
    highlights: [
      "Wiring IoT devices together",
      "Home automation flows",
      "Quick API integrations",
    ],
    funFact:
      "Node-RED was created at IBM in 2013 by Nick O’Leary and Dave Conway-Jones and later donated to the OpenJS Foundation.",
    url: "https://nodered.org",
  },
  {
    id: "arduino-cloud",
    name: "Arduino Cloud",
    abbr: "AC",
    category: "IoT Cloud Platform",
    color: "#008184",
    description:
      "Arduino’s online platform for writing code in the browser, connecting boards to the internet and building dashboards to control them.",
    highlights: [
      "Browser-based Arduino coding",
      "IoT dashboards for boards",
      "Remote control from a phone app",
    ],
    funFact:
      "Arduino Cloud can auto-generate the networking code for your sketch, so a beginner can connect a board to a phone dashboard without writing Wi-Fi code.",
    url: "https://cloud.arduino.cc",
    spawnWeight: 0.5,
  },
];

export default entries;

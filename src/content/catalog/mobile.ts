import type { CatalogEntry } from "../types";

/** Mobile Development */
const entries: CatalogEntry[] = [
  {
    id: "react-native",
    name: "React Native",
    abbr: "RN",
    category: "Mobile Framework",
    color: "#61dafb",
    description:
      "A framework for building real native iOS and Android apps using JavaScript and React. You write components once and they render as genuine native UI elements on each platform.",
    highlights: [
      "Cross-platform iOS and Android apps",
      "Reusing React skills for mobile",
      "Apps from Meta, Shopify and more",
    ],
    funFact:
      "React Native grew out of an internal Facebook hackathon in 2013 and was open-sourced in 2015. Facebook and Instagram use it in parts of their own apps.",
    url: "https://reactnative.dev",
  },
  {
    id: "expo",
    name: "Expo",
    abbr: "Ex",
    category: "Mobile Platform",
    color: "#4630eb",
    description:
      "A platform and set of tools that make building React Native apps much easier. It handles native setup, device APIs, builds and updates so you can focus on your app.",
    highlights: [
      "Starting React Native projects fast",
      "Cloud builds without a Mac",
      "Pushing over-the-air updates",
    ],
    funFact:
      "With the Expo Go app, you can scan a QR code and instantly run your in-progress app on your real phone — no Xcode or Android Studio needed to get started.",
    url: "https://expo.dev",
  },
  {
    id: "flutter",
    name: "Flutter",
    abbr: "Fl",
    category: "UI Toolkit",
    color: "#02569b",
    description:
      "Google’s UI toolkit for building apps for mobile, web and desktop from a single codebase, written in Dart. It draws every pixel itself, so your app looks the same everywhere.",
    highlights: [
      "Cross-platform mobile apps",
      "Pixel-perfect custom UIs",
      "Fast iteration with hot reload",
    ],
    funFact:
      "Flutter’s first public appearance was in 2015 under the codename \"Sky\", shown as an experiment for running Android apps smoothly at high frame rates.",
    url: "https://flutter.dev",
  },
  {
    id: "ionic",
    name: "Ionic",
    abbr: "Io",
    category: "Mobile UI Framework",
    color: "#3880ff",
    description:
      "An open-source toolkit for building mobile and desktop apps with web technologies like HTML, CSS and JavaScript. It provides ready-made, native-looking UI components.",
    highlights: [
      "Hybrid apps using web skills",
      "Pairing with Angular, React or Vue",
      "Progressive web apps",
    ],
    funFact:
      "Ionic was originally built on top of AngularJS. Today its components are framework-agnostic web components, so they work with React and Vue too.",
    url: "https://ionicframework.com",
  },
  {
    id: "capacitor",
    name: "Capacitor",
    abbr: "Ca",
    category: "Native Runtime",
    color: "#119eff",
    description:
      "A tool from the Ionic team that wraps a web app into a native iOS or Android app. It gives your JavaScript code access to native features like the camera and file system.",
    highlights: [
      "Turning web apps into mobile apps",
      "Accessing native device APIs",
      "Modern replacement for Cordova",
    ],
    funFact:
      "Capacitor was created by the Ionic team as a spiritual successor to Apache Cordova, and it can still run many existing Cordova plugins.",
    url: "https://capacitorjs.com",
    spawnWeight: 0.5,
  },
  {
    id: "dotnet-maui",
    name: ".NET MAUI",
    abbr: "NM",
    category: "Mobile Framework",
    color: "#512bd4",
    description:
      "Microsoft’s framework for building native apps for Android, iOS, macOS and Windows with C# and XAML from one shared codebase.",
    highlights: [
      "Cross-platform apps in C#",
      "Enterprise mobile and desktop apps",
      "Sharing code with .NET backends",
    ],
    funFact:
      "MAUI stands for Multi-platform App UI. It is the evolution of Xamarin.Forms, which Microsoft gained when it bought Xamarin in 2016.",
    url: "https://dotnet.microsoft.com/en-us/apps/maui",
  },
  {
    id: "nativescript",
    name: "NativeScript",
    abbr: "NS",
    category: "Mobile Framework",
    color: "#65adf1",
    description:
      "An open-source framework for building native mobile apps with JavaScript or TypeScript. Your code can call native iOS and Android APIs directly, without writing Swift or Kotlin.",
    highlights: [
      "Native apps with Angular or Vue",
      "Direct access to platform APIs",
      "Cross-platform JavaScript apps",
    ],
    funFact:
      "NativeScript lets JavaScript call native platform APIs directly — you can use an Android or iOS class from JS almost as if it were a regular JavaScript object.",
    url: "https://nativescript.org",
    spawnWeight: 0.5,
  },
  {
    id: "kotlin-multiplatform",
    name: "Kotlin Multiplatform",
    abbr: "KM",
    category: "Cross-platform SDK",
    color: "#7f52ff",
    description:
      "A JetBrains technology for sharing Kotlin code across Android, iOS, desktop, web and servers. You can share business logic while still building fully native user interfaces.",
    highlights: [
      "Shared logic for Android and iOS",
      "Networking and data layers once",
      "Gradually adopting in existing apps",
    ],
    funFact:
      "Unlike many cross-platform tools, Kotlin Multiplatform doesn’t force you to share UI — teams often share only the logic and keep SwiftUI on iOS.",
    url: "https://kotlinlang.org/docs/multiplatform.html",
  },
  {
    id: "compose-multiplatform",
    name: "Compose Multiplatform",
    abbr: "CM",
    category: "UI Framework",
    color: "#6b57ff",
    description:
      "A declarative UI framework from JetBrains that brings Jetpack Compose to iOS, desktop and web. You can write one Kotlin UI and run it on several platforms.",
    highlights: [
      "Shared Kotlin UI across platforms",
      "Desktop apps with Compose",
      "Extending KMP to the UI layer",
    ],
    funFact:
      "Compose Multiplatform reuses the same APIs as Google’s Jetpack Compose, so Android developers can carry their UI skills straight over to desktop and iOS.",
    url: "https://www.jetbrains.com/compose-multiplatform/",
    spawnWeight: 0.5,
  },
  {
    id: "apache-cordova",
    name: "Apache Cordova",
    abbr: "AC",
    category: "Hybrid App Framework",
    color: "#4cc2e4",
    description:
      "An open-source framework that packages HTML, CSS and JavaScript into a mobile app running inside a web view. Plugins let the web code reach native device features.",
    highlights: [
      "Older hybrid mobile apps",
      "Wrapping websites as apps",
      "Plugins for device features",
    ],
    funFact:
      "Cordova started life as PhoneGap, created by a company called Nitobi. Adobe bought Nitobi in 2011 and donated the core code to the Apache Software Foundation.",
    url: "https://cordova.apache.org",
    spawnWeight: 0.5,
  },
  {
    id: "swiftui",
    name: "SwiftUI",
    abbr: "Sw",
    category: "UI Framework",
    color: "#0a84ff",
    description:
      "Apple’s modern, declarative framework for building user interfaces in Swift. You describe what the UI should look like for a given state, and SwiftUI keeps it updated.",
    highlights: [
      "iPhone and iPad apps",
      "Apps for Mac, Watch and Vision Pro",
      "Live previews while coding",
    ],
    funFact:
      "SwiftUI was unveiled at WWDC 2019, and a single SwiftUI codebase can target iPhone, iPad, Mac, Apple Watch, Apple TV and Vision Pro.",
    url: "https://developer.apple.com/xcode/swiftui/",
  },
  {
    id: "uikit",
    name: "UIKit",
    abbr: "Ui",
    category: "UI Framework",
    color: "#2396f3",
    description:
      "Apple’s long-standing framework for building iOS app interfaces with views, view controllers and touch handling. Most iOS apps were built with it before SwiftUI arrived.",
    highlights: [
      "Classic iOS app interfaces",
      "Fine-grained UI control",
      "Maintaining existing iOS apps",
    ],
    funFact:
      "Many Apple classes start with \"NS\", a leftover from NeXTSTEP, Steve Jobs’s earlier company. UIKit broke the pattern with its own \"UI\" prefix, as in UIView and UIButton.",
    url: "https://developer.apple.com/documentation/uikit",
  },
  {
    id: "combine",
    name: "Combine",
    abbr: "Co",
    category: "Reactive Framework",
    color: "#e8572a",
    description:
      "Apple’s framework for handling values that change over time, like network responses or user input. You connect publishers and subscribers to react to events in a declarative way.",
    highlights: [
      "Reacting to user input streams",
      "Chaining async network calls",
      "Data flow in SwiftUI apps",
    ],
    funFact:
      "Combine debuted at WWDC 2019 alongside SwiftUI — Apple’s take on reactive programming ideas made popular by libraries like RxSwift.",
    url: "https://developer.apple.com/documentation/combine",
    spawnWeight: 0.5,
  },
  {
    id: "core-data",
    name: "Core Data",
    abbr: "CD",
    category: "Persistence Framework",
    color: "#2e7cf6",
    description:
      "Apple’s framework for managing and saving your app’s data objects on the device. It tracks changes, relationships and undo, and stores everything to disk for you.",
    highlights: [
      "Saving app data offline on iOS",
      "Managing related data objects",
      "Syncing data with iCloud",
    ],
    funFact:
      "Core Data isn’t a database itself — it’s an object management layer that usually stores your data in SQLite behind the scenes.",
    url: "https://developer.apple.com/documentation/coredata",
  },
  {
    id: "core-animation",
    name: "Core Animation",
    abbr: "CA",
    category: "Graphics Framework",
    color: "#ff9500",
    description:
      "Apple’s framework for smooth, hardware-accelerated animations and layer rendering. You describe what should change, and it animates the transition on the GPU.",
    highlights: [
      "Smooth UI transitions on iOS",
      "Layer-based visual effects",
      "Custom animated controls",
    ],
    funFact:
      "On iOS, every UIView is backed by a Core Animation layer (CALayer), so even apps that never animate anything are using Core Animation to draw.",
    url: "https://developer.apple.com/documentation/quartzcore",
    spawnWeight: 0.5,
  },
  {
    id: "core-graphics",
    name: "Core Graphics",
    abbr: "CG",
    category: "2D Graphics Framework",
    color: "#34c759",
    description:
      "Apple’s low-level 2D drawing framework, also known as Quartz 2D. It lets you draw paths, shapes, gradients, images and PDFs with precise control.",
    highlights: [
      "Custom drawing on iOS and macOS",
      "Generating images and PDFs",
      "Charts and custom shapes",
    ],
    funFact:
      "Core Graphics is based on the PDF imaging model, which is why it’s so good at drawing and generating PDF documents.",
    url: "https://developer.apple.com/documentation/coregraphics",
    spawnWeight: 0.5,
  },
  {
    id: "arkit",
    name: "ARKit",
    abbr: "AR",
    category: "Augmented Reality",
    color: "#ff2d55",
    description:
      "Apple’s framework for building augmented reality experiences on iPhone and iPad. It tracks the device’s position and understands surfaces so virtual objects can sit in the real world.",
    highlights: [
      "Placing virtual furniture in rooms",
      "AR games and measuring apps",
      "Face tracking effects",
    ],
    funFact:
      "ARKit launched with iOS 11 in 2017, instantly turning hundreds of millions of existing iPhones and iPads into AR-capable devices with a software update.",
    url: "https://developer.apple.com/augmented-reality/arkit/",
  },
  {
    id: "metal",
    name: "Metal",
    abbr: "Me",
    category: "Graphics API",
    color: "#5e5ce6",
    description:
      "Apple’s low-level API for talking directly to the GPU. It is used for high-performance 3D graphics, games and GPU computing on Apple devices.",
    highlights: [
      "High-end iOS and Mac games",
      "Game engines on Apple platforms",
      "GPU computing and machine learning",
    ],
    funFact:
      "Metal was introduced in 2014, and in 2018 Apple deprecated OpenGL on its platforms, pushing developers toward Metal instead.",
    url: "https://developer.apple.com/metal/",
    spawnWeight: 0.5,
  },
  {
    id: "android-sdk",
    name: "Android SDK",
    abbr: "AS",
    category: "Mobile SDK",
    color: "#3ddc84",
    description:
      "The official set of libraries and tools for building Android apps. It includes the platform APIs, build tools, an emulator and debugging utilities.",
    highlights: [
      "Building native Android apps",
      "Testing on the Android emulator",
      "Accessing phone hardware APIs",
    ],
    funFact:
      "From Cupcake to Pie, Android versions were nicknamed after desserts in alphabetical order. Google dropped the public dessert names starting with Android 10.",
    url: "https://developer.android.com",
  },
  {
    id: "android-ndk",
    name: "Android NDK",
    abbr: "AN",
    category: "Native Dev Kit",
    color: "#2e9e5b",
    description:
      "A toolset for writing parts of Android apps in C and C++. It is used when you need maximum performance or want to reuse existing native libraries.",
    highlights: [
      "Game engines on Android",
      "Audio and video processing",
      "Reusing C/C++ libraries",
    ],
    funFact:
      "Google’s own docs say most apps don’t need the NDK — it’s meant for performance-critical code or reusing native libraries, not for writing whole apps.",
    url: "https://developer.android.com/ndk",
    spawnWeight: 0.5,
  },
  {
    id: "jetpack-compose",
    name: "Jetpack Compose",
    abbr: "JC",
    category: "UI Framework",
    color: "#4285f4",
    description:
      "Android’s modern toolkit for building native UI with Kotlin. You build screens by writing functions that describe the UI, and Compose redraws them when data changes.",
    highlights: [
      "Modern Android app interfaces",
      "Replacing XML layouts",
      "Reusable UI components in Kotlin",
    ],
    funFact:
      "In Compose, a UI element is just a Kotlin function marked with @Composable — no XML layout files needed. Version 1.0 shipped in 2021.",
    url: "https://developer.android.com/compose",
  },
  {
    id: "android-jetpack",
    name: "Android Jetpack",
    abbr: "JP",
    category: "Library Suite",
    color: "#4caf50",
    description:
      "A collection of official Android libraries that help with common tasks like navigation, lifecycle, databases and background work, following recommended best practices.",
    highlights: [
      "Navigation and lifecycle handling",
      "ViewModel and app architecture",
      "Backward-compatible Android APIs",
    ],
    funFact:
      "Jetpack libraries live under the androidx package name, which replaced the old Android Support Library that developers used for years.",
    url: "https://developer.android.com/jetpack",
  },
  {
    id: "room",
    name: "Room",
    abbr: "Ro",
    category: "Database Library",
    color: "#00897b",
    description:
      "An Android Jetpack library that makes working with SQLite databases easier. You define data classes and query methods, and Room generates the database code for you.",
    highlights: [
      "Local data storage on Android",
      "Offline caching of app data",
      "Type-safe SQL queries",
    ],
    funFact:
      "Room checks your SQL queries at compile time, so a typo in a query breaks the build instead of crashing your app on a user’s phone.",
    url: "https://developer.android.com/training/data-storage/room",
  },
  {
    id: "workmanager",
    name: "WorkManager",
    abbr: "WM",
    category: "Background Tasks",
    color: "#7cb342",
    description:
      "An Android Jetpack library for scheduling background work that must eventually run, like syncing data or uploading files, even if the app closes.",
    highlights: [
      "Background data syncing",
      "Uploading files reliably",
      "Scheduled periodic tasks",
    ],
    funFact:
      "Work scheduled with WorkManager survives app restarts and even device reboots — it will still run once its conditions, like having Wi-Fi, are met.",
    url: "https://developer.android.com/topic/libraries/architecture/workmanager",
    spawnWeight: 0.5,
  },
  {
    id: "hilt",
    name: "Hilt",
    abbr: "Hi",
    category: "Dependency Injection",
    color: "#e65100",
    description:
      "Android’s recommended dependency injection library, built on top of Dagger. It automatically provides objects your classes need, cutting down on setup code.",
    highlights: [
      "Dependency injection on Android",
      "Simplifying Dagger setup",
      "Making code easier to test",
    ],
    funFact:
      "The name is a pun: Hilt is built on top of Dagger, another dependency injection library — and a hilt is the handle of a dagger.",
    url: "https://dagger.dev/hilt/",
    spawnWeight: 0.5,
  },
  {
    id: "camerax",
    name: "CameraX",
    abbr: "Ca",
    category: "Camera Library",
    color: "#1a73e8",
    description:
      "A Jetpack library that makes it easier to add camera features to Android apps. It hides many device-specific differences behind a simple, consistent API.",
    highlights: [
      "Taking photos in Android apps",
      "Camera previews and scanning",
      "Image analysis like barcodes",
    ],
    funFact:
      "Android phones come from many manufacturers with quirky cameras; CameraX exists largely to smooth over those device-specific differences for you.",
    url: "https://developer.android.com/media/camera/camerax",
    spawnWeight: 0.5,
  },
  {
    id: "react-navigation",
    name: "React Navigation",
    abbr: "RN",
    category: "Navigation Library",
    color: "#6b52ae",
    description:
      "The most popular library for moving between screens in React Native apps. It provides stacks, tabs and drawers so users can navigate your app naturally.",
    highlights: [
      "Screen stacks in React Native",
      "Tab bars and side drawers",
      "Deep linking into app screens",
    ],
    funFact:
      "React Native doesn’t include screen navigation out of the box, which is why this community library became the go-to choice for most React Native apps.",
    url: "https://reactnavigation.org",
  },
  {
    id: "expo-router",
    name: "Expo Router",
    abbr: "ER",
    category: "Navigation Library",
    color: "#5b4ae8",
    description:
      "A file-based router for React Native and web apps built with Expo. Each file in your app folder automatically becomes a screen with its own URL.",
    highlights: [
      "File-based routing in mobile apps",
      "Universal apps for mobile and web",
      "Automatic deep links",
    ],
    funFact:
      "Expo Router is built on top of React Navigation and brings the Next.js-style idea of \"files are routes\" to native mobile apps.",
    url: "https://docs.expo.dev/router/introduction/",
    spawnWeight: 0.5,
  },
  {
    id: "sqlite",
    name: "SQLite",
    abbr: "Sq",
    category: "Embedded Database",
    color: "#0f80cc",
    description:
      "A small, self-contained SQL database stored in a single file, with no separate server to run. It is built into countless apps and devices.",
    highlights: [
      "Local storage in mobile apps",
      "Browsers and desktop software",
      "Prototypes and small projects",
    ],
    funFact:
      "SQLite is probably the most widely deployed database in the world — it ships inside every Android phone and iPhone — and its source code is in the public domain.",
    url: "https://www.sqlite.org",
  },
  {
    id: "watermelondb",
    name: "WatermelonDB",
    abbr: "Wa",
    category: "Mobile Database",
    color: "#ff4d6d",
    description:
      "A reactive database for React and React Native apps built on top of SQLite. It loads data lazily, so apps stay fast even with tens of thousands of records.",
    highlights: [
      "Large offline datasets in RN apps",
      "Reactive UI updates from data",
      "Syncing with your own backend",
    ],
    funFact:
      "WatermelonDB was built by the team behind the Nozbe to-do app, who needed their React Native app to stay fast with huge amounts of local data.",
    url: "https://watermelondb.dev",
    spawnWeight: 0.5,
  },
  {
    id: "mmkv",
    name: "MMKV",
    abbr: "MM",
    category: "Key-Value Storage",
    color: "#07c160",
    description:
      "An extremely fast key-value storage library for mobile apps that uses memory-mapped files. It is a quick replacement for slower storage like AsyncStorage or SharedPreferences.",
    highlights: [
      "Storing settings and small data",
      "Fast storage in React Native",
      "Replacing SharedPreferences",
    ],
    funFact:
      "MMKV was created by Tencent and is used in WeChat, one of the most-used messaging apps in the world.",
    url: "https://github.com/Tencent/MMKV",
    spawnWeight: 0.5,
  },
  {
    id: "powersync",
    name: "PowerSync",
    abbr: "PS",
    category: "Sync Engine",
    color: "#8b5cf6",
    description:
      "A sync engine that keeps a backend database like Postgres in sync with a local SQLite database on the user’s device, so apps work offline and feel instant.",
    highlights: [
      "Offline-first mobile apps",
      "Syncing Postgres to devices",
      "Instant local reads and writes",
    ],
    funFact:
      "With offline-first tools like PowerSync, your app reads and writes to a local database first, so the UI responds instantly even with no internet connection.",
    url: "https://www.powersync.com",
    spawnWeight: 0.5,
  },
  {
    id: "firebase",
    name: "Firebase",
    abbr: "FB",
    category: "Backend as a Service",
    color: "#ffca28",
    description:
      "Google’s platform of ready-made backend services for apps, including authentication, databases, file storage, hosting and push notifications, so you can skip building a server.",
    highlights: [
      "User login without a backend",
      "Real-time databases for apps",
      "Push notifications and analytics",
    ],
    funFact:
      "Firebase began as Envolve, a chat widget startup. Developers kept using it to sync other app data in real time, so the founders pivoted — and Google bought Firebase in 2014.",
    url: "https://firebase.google.com",
  },
  {
    id: "detox",
    name: "Detox",
    abbr: "De",
    category: "E2E Testing",
    color: "#2db4a5",
    description:
      "An end-to-end testing framework for React Native apps from Wix. It runs your real app on a simulator or device and taps through it like a user would.",
    highlights: [
      "E2E tests for React Native",
      "Automating UI flows in CI",
      "Catching regressions before release",
    ],
    funFact:
      "Detox is called a \"gray box\" tester: it knows when your app is busy and waits for it to go idle, which helps avoid flaky tests full of manual sleeps.",
    url: "https://wix.github.io/Detox/",
    spawnWeight: 0.5,
  },
  {
    id: "maestro",
    name: "Maestro",
    abbr: "Ma",
    category: "UI Testing",
    color: "#a855f7",
    description:
      "A mobile UI testing framework where you write test flows in simple YAML files. It works with native, React Native and Flutter apps.",
    highlights: [
      "Simple YAML-based UI tests",
      "Testing iOS and Android apps",
      "Quick smoke tests in CI",
    ],
    funFact:
      "Maestro tests can read almost like plain English — steps such as launchApp and tapOn: \"Login\" — so even non-programmers can follow them.",
    url: "https://maestro.mobile.dev",
    spawnWeight: 0.5,
  },
  {
    id: "appium",
    name: "Appium",
    abbr: "Ap",
    category: "Mobile Test Automation",
    color: "#662d91",
    description:
      "An open-source tool for automating tests on mobile, desktop and other apps. It uses the WebDriver protocol, so you can write tests in many languages.",
    highlights: [
      "Automated tests for iOS and Android",
      "Cross-platform test suites",
      "QA teams using Selenium skills",
    ],
    funFact:
      "Appium speaks the same WebDriver protocol as Selenium, so testers who automate websites can reuse much of that knowledge to automate mobile apps.",
    url: "https://appium.io",
  },
  {
    id: "espresso",
    name: "Espresso",
    abbr: "Es",
    category: "UI Testing",
    color: "#795548",
    description:
      "Google’s framework for writing UI tests for Android apps. It finds views, performs actions like clicks and checks results on screen.",
    highlights: [
      "Android UI tests",
      "Testing user flows on devices",
      "Automated checks in CI",
    ],
    funFact:
      "Espresso automatically waits for the app’s UI thread to be idle before each action, so you rarely need to add manual sleeps to your tests.",
    url: "https://developer.android.com/training/testing/espresso",
    spawnWeight: 0.5,
  },
  {
    id: "xcuitest",
    name: "XCUITest",
    abbr: "Xc",
    category: "UI Testing",
    color: "#1c7cd5",
    description:
      "Apple’s framework for automated UI testing of iOS and macOS apps, built into Xcode. Tests launch your app and interact with it like a real user.",
    highlights: [
      "iOS UI automation in Xcode",
      "Recording user interactions",
      "Testing apps in CI pipelines",
    ],
    funFact:
      "XCUITest finds buttons and labels through the accessibility system, so adding good accessibility labels makes your app both more inclusive and easier to test.",
    url: "https://developer.apple.com/documentation/xctest/user_interface_tests",
    spawnWeight: 0.5,
  },
  {
    id: "robolectric",
    name: "Robolectric",
    abbr: "Ro",
    category: "Unit Testing",
    color: "#a4c639",
    description:
      "A testing framework that runs Android tests on your computer’s regular Java virtual machine, without an emulator or device. Tests run much faster as a result.",
    highlights: [
      "Fast Android unit tests",
      "Testing without an emulator",
      "Running tests in CI quickly",
    ],
    funFact:
      "Because Robolectric simulates the Android framework inside a normal JVM, tests that would take minutes on an emulator can finish in seconds.",
    url: "https://robolectric.org",
    spawnWeight: 0.5,
  },
];

export default entries;

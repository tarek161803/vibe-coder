import type { CatalogEntry } from "../types";

/** Software Testing and QA */
const entries: CatalogEntry[] = [
  {
    id: "jest",
    name: "Jest",
    abbr: "Jest",
    category: "Testing Framework",
    color: "#c21325",
    description:
      "A popular JavaScript testing framework that bundles a test runner, assertions, mocking and code coverage in one package. You write small test functions and Jest tells you which ones pass or fail.",
    highlights: [
      "Unit testing React and Node.js code",
      "Mocking modules and functions",
      "Snapshot tests for UI output",
    ],
    funFact:
      "Jest was born at Facebook, and in 2022 Meta handed it over to the OpenJS Foundation so the community could steer its future.",
    url: "https://jestjs.io",
  },
  {
    id: "vitest",
    name: "Vitest",
    abbr: "VT",
    category: "Testing Framework",
    color: "#729b1b",
    description:
      "A fast test runner built on top of Vite. It offers a Jest-compatible API, so tests look familiar, but it reuses your Vite setup and runs very quickly with instant re-runs in watch mode.",
    highlights: [
      "Testing Vite, Vue and React projects",
      "Drop-in replacement for many Jest setups",
      "Fast watch mode during development",
    ],
    funFact:
      "Vitest reads your existing Vite config, so the same plugins, aliases and transforms that build your app also work in your tests — no duplicate setup.",
    url: "https://vitest.dev",
  },
  {
    id: "mocha",
    name: "Mocha",
    abbr: "Mo",
    category: "Testing Framework",
    color: "#8d6748",
    description:
      "A flexible JavaScript test framework for Node.js and the browser. It runs your describe/it test blocks but lets you choose your own assertion and mocking libraries, such as Chai and Sinon.",
    highlights: [
      "Testing Node.js backends",
      "Pairing with Chai for assertions",
      "Async tests with promises or callbacks",
    ],
    funFact:
      "Mocha was created by TJ Holowaychuk, the same prolific developer who created the Express web framework.",
    url: "https://mochajs.org",
  },
  {
    id: "jasmine",
    name: "Jasmine",
    abbr: "Jas",
    category: "Testing Framework",
    color: "#8a4182",
    description:
      "A behavior-driven JavaScript testing framework that works without other libraries. Tests read almost like sentences, such as expect(total).toBe(10), and it includes its own assertions and spies.",
    highlights: [
      "Testing Angular apps (long its default)",
      "Behavior-driven style specs",
      "Browser and Node.js testing",
    ],
    funFact:
      "Jest's original test runner was built on Jasmine, which is why the describe, it and expect style feels so similar between the two.",
    url: "https://jasmine.github.io",
  },
  {
    id: "playwright",
    name: "Playwright",
    abbr: "PW",
    category: "E2E Testing Tool",
    color: "#2ead33",
    description:
      "A Microsoft tool for automating real browsers — Chromium, Firefox and WebKit — with one API. It clicks, types and checks pages just like a user would, and waits for elements automatically.",
    highlights: [
      "End-to-end tests across browsers",
      "Recording tests with codegen",
      "Web scraping and automation",
    ],
    funFact:
      "Playwright was built by engineers who had previously created Puppeteer at Google before moving to Microsoft.",
    url: "https://playwright.dev",
  },
  {
    id: "cypress",
    name: "Cypress",
    abbr: "Cy",
    category: "E2E Testing Tool",
    color: "#69d3a7",
    description:
      "A JavaScript end-to-end testing tool that runs right inside the browser next to your app. Its interactive runner shows each step as it happens, making failing tests easier to understand.",
    highlights: [
      "End-to-end tests for web apps",
      "Component testing in a real browser",
      "Debugging with time-travel snapshots",
    ],
    funFact:
      "Cypress takes a snapshot at every step of a test, so you can hover over a command afterward and \"time travel\" to see exactly what the page looked like.",
    url: "https://www.cypress.io",
  },
  {
    id: "selenium",
    name: "Selenium",
    abbr: "Se",
    category: "Browser Automation",
    color: "#43b02a",
    description:
      "One of the oldest and most widely used browser automation projects. Its WebDriver lets code in many languages, like Java, Python and C#, drive real browsers to test websites.",
    highlights: [
      "Cross-browser UI testing",
      "Running tests on Selenium Grid",
      "Automating repetitive web tasks",
    ],
    funFact:
      "The name is a joke: a rival tool came from Mercury Interactive, and selenium supplements are known as a treatment for mercury poisoning.",
    url: "https://www.selenium.dev",
  },
  {
    id: "webdriverio",
    name: "WebdriverIO",
    abbr: "WDIO",
    category: "Browser Automation",
    color: "#ea5906",
    description:
      "A Node.js test automation framework for web and mobile apps. It speaks the WebDriver and DevTools protocols, so you can control browsers and, through Appium, native phone apps too.",
    highlights: [
      "End-to-end testing in JavaScript",
      "Mobile app testing with Appium",
      "Plugins for many reporters and services",
    ],
    funFact:
      "WebdriverIO can test both websites and native iOS or Android apps with the same style of test code, thanks to its Appium integration.",
    url: "https://webdriver.io",
    spawnWeight: 0.5,
  },
  {
    id: "puppeteer",
    name: "Puppeteer",
    abbr: "Pup",
    category: "Browser Automation",
    color: "#40b5a4",
    description:
      "A Node.js library from Google for controlling Chrome or Firefox through code. It can open pages, click buttons, take screenshots and make PDFs, often in headless mode with no visible window.",
    highlights: [
      "Screenshots and PDF generation",
      "Scraping JavaScript-heavy sites",
      "Automated browser testing",
    ],
    funFact:
      "The name fits the job: your script is the puppeteer pulling the strings of a (usually invisible, headless) browser.",
    url: "https://pptr.dev",
  },
  {
    id: "testing-library",
    name: "Testing Library",
    abbr: "TL",
    category: "Testing Utility",
    color: "#e33332",
    description:
      "A family of helpers for testing user interfaces the way people actually use them. Instead of poking at internal state, you find elements by their text, label or role and interact with them.",
    highlights: [
      "Testing React components",
      "Accessible queries like getByRole",
      "Works with Jest and Vitest",
    ],
    funFact:
      "Created by Kent C. Dodds, its guiding principle is: \"The more your tests resemble the way your software is used, the more confidence they can give you.\"",
    url: "https://testing-library.com",
  },
  {
    id: "supertest",
    name: "Supertest",
    abbr: "ST",
    category: "HTTP Testing Library",
    color: "#2d8cf0",
    description:
      "A Node.js library for testing HTTP servers. You hand it your Express app, send fake requests like GET /users, and check the status code, headers and body that come back.",
    highlights: [
      "Testing Express API routes",
      "Checking status codes and JSON",
      "Used with Jest or Mocha",
    ],
    funFact:
      "Supertest can start your app on a temporary port by itself, so you can test an API without manually launching a server first.",
    url: "https://github.com/ladjs/supertest",
    spawnWeight: 0.5,
  },
  {
    id: "junit",
    name: "JUnit",
    abbr: "JU",
    category: "Testing Framework",
    color: "#25a162",
    description:
      "The standard unit testing framework for Java. You mark methods with @Test, use assertions to check results, and build tools like Maven and Gradle run them automatically.",
    highlights: [
      "Unit testing Java and Kotlin code",
      "Running tests in Maven and Gradle builds",
      "Spring Boot application tests",
    ],
    funFact:
      "JUnit was written by Kent Beck and Erich Gamma, and it inspired a whole family of \"xUnit\" testing frameworks in other languages.",
    url: "https://junit.org",
  },
  {
    id: "testng",
    name: "TestNG",
    abbr: "TNG",
    category: "Testing Framework",
    color: "#e8721c",
    description:
      "A Java testing framework inspired by JUnit that adds features like test groups, dependencies between tests, and data-driven tests. It is popular for larger integration and Selenium suites.",
    highlights: [
      "Selenium test suites in Java",
      "Parallel and grouped test runs",
      "Data-driven tests with @DataProvider",
    ],
    funFact:
      "The \"NG\" stands for \"Next Generation\" — creator Cédric Beust built it to go beyond what JUnit offered at the time.",
    url: "https://testng.org",
    spawnWeight: 0.5,
  },
  {
    id: "pytest",
    name: "Pytest",
    abbr: "PyT",
    category: "Testing Framework",
    color: "#0a9edc",
    description:
      "The most popular testing framework for Python. You write plain functions starting with test_ and use normal assert statements, and pytest finds and runs them with helpful failure messages.",
    highlights: [
      "Unit testing Python code",
      "Reusable setup with fixtures",
      "Huge plugin ecosystem",
    ],
    funFact:
      "Pytest rewrites your plain assert statements behind the scenes, so a failure shows the actual values involved instead of just \"AssertionError\".",
    url: "https://docs.pytest.org",
  },
  {
    id: "phpunit",
    name: "PHPUnit",
    abbr: "PHPU",
    category: "Testing Framework",
    color: "#3c9cd7",
    description:
      "The standard unit testing framework for PHP. You write test classes with methods that check your code’s results, and frameworks like Laravel and Symfony build their testing tools on it.",
    highlights: [
      "Testing Laravel and Symfony apps",
      "Unit tests for PHP libraries",
      "Code coverage reports",
    ],
    funFact:
      "PHPUnit was created by Sebastian Bergmann, who has maintained it for well over a decade and a half as part of the xUnit family.",
    url: "https://phpunit.de",
  },
  {
    id: "xunit",
    name: "xUnit",
    abbr: "xU",
    category: "Testing Framework",
    color: "#5c2d91",
    description:
      "xUnit.net is a free, open-source unit testing tool for .NET languages like C# and F#. Tests are methods marked [Fact] or [Theory], and it is widely used in modern .NET projects.",
    highlights: [
      "Unit testing C# and .NET code",
      "Data-driven tests with [Theory]",
      "Running tests in Visual Studio and CI",
    ],
    funFact:
      "xUnit.net was created by James Newkirk, one of the original authors of NUnit v2, together with Brad Wilson, to rethink .NET testing.",
    url: "https://xunit.net",
  },
  {
    id: "nunit",
    name: "NUnit",
    abbr: "NU",
    category: "Testing Framework",
    color: "#22a845",
    description:
      "A long-standing unit testing framework for .NET languages. You mark classes and methods with attributes like [Test], and NUnit runs them and reports which checks passed or failed.",
    highlights: [
      "Unit testing C# applications",
      "Parameterized tests with [TestCase]",
      "Integration with Visual Studio",
    ],
    funFact:
      "NUnit started life as a port of Java’s JUnit to .NET, and later versions were rewritten to take advantage of C# features like attributes.",
    url: "https://nunit.org",
  },
  {
    id: "xctest",
    name: "XCTest",
    abbr: "XCT",
    category: "Testing Framework",
    color: "#147efb",
    description:
      "Apple’s built-in testing framework for Swift and Objective-C. It runs unit tests, performance tests and UI tests for iPhone, iPad and Mac apps directly from Xcode.",
    highlights: [
      "Unit testing iOS and macOS apps",
      "UI tests that tap through screens",
      "Measuring performance in Xcode",
    ],
    funFact:
      "XCTest finds your tests by name: any method in an XCTestCase subclass whose name starts with \"test\" is run automatically.",
    url: "https://developer.apple.com/documentation/xctest",
  },
  {
    id: "eslint",
    name: "ESLint",
    abbr: "ES",
    category: "Linter",
    color: "#4b32c3",
    description:
      "A tool that reads your JavaScript or TypeScript and flags problems, like unused variables or risky patterns, before you run the code. Rules are configurable and many can be fixed automatically.",
    highlights: [
      "Catching bugs in JS and TS code",
      "Enforcing a team’s code rules",
      "Auto-fixing issues in the editor",
    ],
    funFact:
      "ESLint was created by Nicholas C. Zakas in 2013, with the big idea that every single rule should be a pluggable piece you can turn on or off.",
    url: "https://eslint.org",
  },
  {
    id: "prettier",
    name: "Prettier",
    abbr: "Pr",
    category: "Code Formatter",
    color: "#f7b93e",
    description:
      "An opinionated code formatter that rewrites your code into a consistent style every time you save. It supports JavaScript, TypeScript, CSS, HTML, Markdown and more.",
    highlights: [
      "Formatting code on save",
      "Ending style debates in code reviews",
      "Pre-commit formatting hooks",
    ],
    funFact:
      "Prettier deliberately offers very few options — the whole point is to stop teams arguing about tabs, quotes and line breaks.",
    url: "https://prettier.io",
  },
  {
    id: "biome",
    name: "Biome",
    abbr: "Bio",
    category: "Linter and Formatter",
    color: "#60a5fa",
    description:
      "A fast all-in-one toolchain for web projects that formats and lints JavaScript, TypeScript, JSON and CSS. It is written in Rust and aims to replace separate Prettier and ESLint setups.",
    highlights: [
      "Formatting and linting in one tool",
      "Speeding up CI checks",
      "Prettier-compatible formatting",
    ],
    funFact:
      "Biome is the community-led continuation of the Rome project, forked and renamed after the company behind Rome wound down.",
    url: "https://biomejs.dev",
  },
  {
    id: "sonarqube",
    name: "SonarQube",
    abbr: "SQ",
    category: "Code Quality Platform",
    color: "#4e9bcd",
    description:
      "A platform that scans your code for bugs, security issues, duplicated code and \"code smells\". It gives projects a dashboard and a quality gate that can block merges if code gets worse.",
    highlights: [
      "Continuous code quality checks",
      "Quality gates in CI pipelines",
      "Tracking technical debt",
    ],
    funFact:
      "SonarQube is made by SonarSource, a company founded in Geneva, Switzerland, and the product was originally called simply \"Sonar\".",
    url: "https://www.sonarsource.com/products/sonarqube/",
  },
  {
    id: "sonarcloud",
    name: "SonarCloud",
    abbr: "SC",
    category: "Code Quality Service",
    color: "#f3702a",
    description:
      "The hosted, cloud version of SonarSource’s code analysis. It connects to GitHub, GitLab, Bitbucket or Azure DevOps and comments on pull requests with bugs and security issues it finds.",
    highlights: [
      "Automatic pull request analysis",
      "Free scanning for open-source projects",
      "Code quality without self-hosting",
    ],
    funFact:
      "In late 2024 SonarCloud was renamed \"SonarQube Cloud\" to make it clearer that it is the cloud edition of SonarQube.",
    url: "https://sonarcloud.io",
    spawnWeight: 0.5,
  },
  {
    id: "codeql",
    name: "CodeQL",
    abbr: "CQL",
    category: "Security Analysis",
    color: "#2188ff",
    description:
      "GitHub’s code analysis engine that turns your source code into a database you can query. Security researchers write queries that find vulnerable patterns, like untrusted input reaching a database.",
    highlights: [
      "GitHub code scanning alerts",
      "Finding security vulnerabilities",
      "Variant analysis across many repos",
    ],
    funFact:
      "CodeQL came from Semmle, a company GitHub acquired in 2019 — its trick is treating code as data you can search with a SQL-like language.",
    url: "https://codeql.github.com",
  },
  {
    id: "semgrep",
    name: "Semgrep",
    abbr: "SG",
    category: "Static Analysis",
    color: "#00a37a",
    description:
      "A fast static analysis tool that searches code for patterns you describe. Rules look like the code you want to find, which makes it easy to write custom checks for bugs and security issues.",
    highlights: [
      "Security scanning in CI",
      "Custom rules for team conventions",
      "Supports many programming languages",
    ],
    funFact:
      "The name is short for \"semantic grep\": like grep it searches code, but it understands code structure instead of just matching text.",
    url: "https://semgrep.dev",
    spawnWeight: 0.5,
  },
  {
    id: "ruff",
    name: "Ruff",
    abbr: "Ruff",
    category: "Linter and Formatter",
    color: "#c9b800",
    description:
      "An extremely fast Python linter and code formatter written in Rust. It checks for hundreds of common mistakes and style issues and can fix many of them automatically.",
    highlights: [
      "Linting Python projects",
      "Replacing Flake8, isort and Black",
      "Fast checks in CI and editors",
    ],
    funFact:
      "Ruff is made by Astral, the same company behind the uv package manager, and it can replace several older Python tools with a single binary.",
    url: "https://docs.astral.sh/ruff/",
  },
  {
    id: "pylint",
    name: "Pylint",
    abbr: "PyL",
    category: "Linter",
    color: "#2a5adf",
    description:
      "A thorough static code checker for Python. It looks for errors, enforces coding standards like PEP 8, and points out code that could be simpler or easier to read.",
    highlights: [
      "Checking Python code quality",
      "Enforcing style conventions",
      "Spotting bugs before runtime",
    ],
    funFact:
      "Pylint grades your code with a score out of 10 — and if your code is bad enough, the score can actually go negative.",
    url: "https://pylint.readthedocs.io",
  },
  {
    id: "checkstyle",
    name: "Checkstyle",
    abbr: "CS",
    category: "Linter",
    color: "#e76f00",
    description:
      "A development tool that checks Java source code against a coding standard. It flags things like naming, spacing, missing Javadoc and overly long methods so a team’s code stays consistent.",
    highlights: [
      "Enforcing Java style guides",
      "Maven and Gradle build checks",
      "IDE plugins for instant feedback",
    ],
    funFact:
      "Checkstyle ships with ready-made configurations for both Sun’s classic Java conventions and Google’s Java Style Guide.",
    url: "https://checkstyle.org",
    spawnWeight: 0.5,
  },
  {
    id: "clippy",
    name: "Clippy",
    abbr: "Clip",
    category: "Linter",
    color: "#dea584",
    description:
      "The official linter for Rust. Running cargo clippy checks your code against hundreds of lints that catch common mistakes and suggest more idiomatic, faster or simpler Rust.",
    highlights: [
      "Learning idiomatic Rust",
      "Catching subtle mistakes early",
      "Linting Rust code in CI",
    ],
    funFact:
      "Clippy is named after Microsoft Office’s famous paperclip assistant — though unlike the original, Rust developers actually like its advice.",
    url: "https://doc.rust-lang.org/clippy/",
  },
  {
    id: "husky",
    name: "Husky",
    abbr: "Hsk",
    category: "Git Hooks Tool",
    color: "#0099e5",
    description:
      "A small tool that makes Git hooks easy to set up in JavaScript projects. It can run linters, formatters or tests automatically before you commit or push, so broken code is caught early.",
    highlights: [
      "Running lint before each commit",
      "Checking commit message format",
      "Pairing with lint-staged",
    ],
    funFact:
      "Husky was created by typicode, the same developer behind json-server, the popular tool for spinning up a fake REST API in seconds.",
    url: "https://typicode.github.io/husky/",
  },
  {
    id: "lefthook",
    name: "Lefthook",
    abbr: "LH",
    category: "Git Hooks Tool",
    color: "#ff1e1e",
    description:
      "A fast Git hooks manager configured with a simple YAML file. It runs checks like linters and tests before commits or pushes, and can run several commands in parallel to save time.",
    highlights: [
      "Pre-commit and pre-push checks",
      "Running hook commands in parallel",
      "Works in any language project",
    ],
    funFact:
      "Lefthook is built by the developer agency Evil Martians and is written in Go, so it ships as a single fast binary.",
    url: "https://github.com/evilmartians/lefthook",
    spawnWeight: 0.5,
  },
  {
    id: "unit-testing",
    name: "Unit Testing",
    abbr: "UT",
    category: "Testing Concept",
    color: "#3fa34d",
    description:
      "Testing the smallest pieces of your code, like a single function, on their own. Unit tests are quick to run and tell you exactly which piece broke when something goes wrong.",
    highlights: [
      "Checking functions in isolation",
      "Safety net for refactoring",
      "Running fast on every save",
    ],
    funFact:
      "Most unit testing frameworks trace their family tree back to SUnit, a tiny Smalltalk framework written by Kent Beck.",
    url: "https://en.wikipedia.org/wiki/Unit_testing",
  },
  {
    id: "integration-testing",
    name: "Integration Testing",
    abbr: "IT",
    category: "Testing Concept",
    color: "#2e86de",
    description:
      "Testing how several parts of a system work together, such as your code with a real database or another service. It catches problems in the connections between pieces.",
    highlights: [
      "Testing code with a real database",
      "Checking API routes end to end",
      "Verifying services talk correctly",
    ],
    funFact:
      "Two pieces of code can each pass all their unit tests and still fail together — catching exactly that is the job of integration tests.",
    url: "https://en.wikipedia.org/wiki/Integration_testing",
  },
  {
    id: "end-to-end-testing",
    name: "End-to-End Testing",
    abbr: "E2E",
    category: "Testing Concept",
    color: "#8e44ad",
    description:
      "Testing a whole application from the user’s point of view, like opening a browser, logging in and placing an order. It gives high confidence but is slower than smaller tests.",
    highlights: [
      "Testing full user journeys",
      "Catching issues before release",
      "Automated with Playwright or Cypress",
    ],
    funFact:
      "In the classic \"test pyramid\" popularized by Mike Cohn, end-to-end tests sit at the narrow top: valuable, but slow, so you keep fewer of them.",
    url: "https://martinfowler.com/articles/practical-test-pyramid.html",
  },
  {
    id: "regression-testing",
    name: "Regression Testing",
    abbr: "RT",
    category: "Testing Concept",
    color: "#d35400",
    description:
      "Re-running existing tests after a change to make sure features that used to work still work. A \"regression\" is when software goes backwards and an old bug or broken feature reappears.",
    highlights: [
      "Running full suites before release",
      "Catching bugs from new changes",
      "Automated in CI pipelines",
    ],
    funFact:
      "A common team habit: whenever a bug is fixed, add a test that reproduces it, so that exact bug can never sneak back in unnoticed.",
    url: "https://en.wikipedia.org/wiki/Regression_testing",
  },
  {
    id: "smoke-testing",
    name: "Smoke Testing",
    abbr: "Smk",
    category: "Testing Concept",
    color: "#7f8c8d",
    description:
      "A quick set of basic checks that the most important parts of an app work at all, like \"does it start?\" and \"can I log in?\". If smoke tests fail, there is no point running deeper tests.",
    highlights: [
      "Quick checks after a deployment",
      "Gatekeeping a new build",
      "Verifying critical paths work",
    ],
    funFact:
      "The name comes from hardware testing: switch a new device on and see if smoke comes out. No smoke? Time for more careful tests.",
    url: "https://en.wikipedia.org/wiki/Smoke_testing_(software)",
  },
  {
    id: "performance-testing",
    name: "Performance Testing",
    abbr: "Perf",
    category: "Testing Concept",
    color: "#e67e22",
    description:
      "Testing how fast and efficient software is, measuring things like response time, throughput and memory use. It helps find slow spots before users notice them.",
    highlights: [
      "Measuring page and API speed",
      "Finding bottlenecks",
      "Setting performance budgets",
    ],
    funFact:
      "Speed affects more than patience: Google uses Core Web Vitals, page-speed metrics like Largest Contentful Paint, as signals in search ranking.",
    url: "https://en.wikipedia.org/wiki/Software_performance_testing",
  },
  {
    id: "load-testing",
    name: "Load Testing",
    abbr: "Load",
    category: "Testing Concept",
    color: "#c0392b",
    description:
      "Simulating many users at once to see how a system behaves under expected traffic. It answers questions like \"can our site handle 5,000 shoppers during a sale?\"",
    highlights: [
      "Preparing for traffic spikes",
      "Capacity planning for servers",
      "Tools like k6, JMeter and Locust",
    ],
    funFact:
      "Locust, a popular load-testing tool, lets you describe simulated users in plain Python and then sends a swarm of them at your site — just like locusts.",
    url: "https://en.wikipedia.org/wiki/Load_testing",
  },
  {
    id: "stress-testing",
    name: "Stress Testing",
    abbr: "Strs",
    category: "Testing Concept",
    color: "#e74c3c",
    description:
      "Pushing a system beyond its normal limits to find its breaking point. The goal is to learn how it fails and whether it recovers gracefully, rather than crashing badly.",
    highlights: [
      "Finding a system’s breaking point",
      "Checking recovery after overload",
      "Testing resilience of services",
    ],
    funFact:
      "Netflix took the idea further with Chaos Monkey, a tool that randomly shuts down production servers to prove the system survives failures.",
    url: "https://en.wikipedia.org/wiki/Stress_testing_(software)",
  },
  {
    id: "security-testing",
    name: "Security Testing",
    abbr: "Sec",
    category: "Testing Concept",
    color: "#16a085",
    description:
      "Checking software for weaknesses attackers could exploit, like injection flaws, broken logins or leaked data. It includes automated scanners and hands-on penetration testing.",
    highlights: [
      "Penetration testing",
      "Scanning for known vulnerabilities",
      "Checking auth and data protection",
    ],
    funFact:
      "Many companies run bug bounty programs, paying outside \"ethical hackers\" rewards for responsibly reporting security holes they find.",
    url: "https://en.wikipedia.org/wiki/Security_testing",
  },
  {
    id: "accessibility-testing",
    name: "Accessibility Testing",
    abbr: "A11y",
    category: "Testing Concept",
    color: "#0072c6",
    description:
      "Checking that people with disabilities can use your app, for example with a screen reader, keyboard only, or with low vision. It often follows the WCAG guidelines.",
    highlights: [
      "Checking WCAG compliance",
      "Screen reader and keyboard testing",
      "Automated checks with axe",
    ],
    funFact:
      "\"a11y\" is a numeronym: an a, then 11 letters, then a y. Automated tools only catch part of the issues, so testing with a keyboard or screen reader matters.",
    url: "https://www.w3.org/WAI/test-evaluate/",
  },
  {
    id: "visual-regression-testing",
    name: "Visual Regression Testing",
    abbr: "VRT",
    category: "Testing Concept",
    color: "#9b59b6",
    description:
      "Taking screenshots of your UI and comparing them to approved \"baseline\" images to spot unexpected visual changes, like a shifted button or a broken layout.",
    highlights: [
      "Catching CSS layout breakage",
      "Reviewing UI changes in PRs",
      "Testing design system components",
    ],
    funFact:
      "Fonts render slightly differently on each operating system, so many teams take visual test screenshots inside the same Docker image to avoid false alarms.",
    url: "https://playwright.dev/docs/test-snapshots",
    spawnWeight: 0.5,
  },
  {
    id: "mutation-testing",
    name: "Mutation Testing",
    abbr: "MT",
    category: "Testing Concept",
    color: "#27ae60",
    description:
      "A way to test your tests: a tool makes small changes to your code, like flipping > to <, and checks whether your tests fail. If they still pass, your tests missed something.",
    highlights: [
      "Measuring test suite quality",
      "Finding weak assertions",
      "Tools like Stryker and PIT",
    ],
    funFact:
      "Each changed copy of your code is called a \"mutant\". When a test fails because of it, the mutant is said to be \"killed\" — the more kills, the better.",
    url: "https://en.wikipedia.org/wiki/Mutation_testing",
    spawnWeight: 0.5,
  },
  {
    id: "contract-testing",
    name: "Contract Testing",
    abbr: "CT",
    category: "Testing Concept",
    color: "#f39c12",
    description:
      "Testing that two services agree on how they talk to each other, such as the shape of an API’s requests and responses, without needing to run both together.",
    highlights: [
      "Testing microservice APIs",
      "Consumer-driven contracts with Pact",
      "Catching breaking API changes",
    ],
    funFact:
      "In consumer-driven contract testing, the app that calls an API writes down what it expects, and the API provider then proves it keeps that promise.",
    url: "https://docs.pact.io",
    spawnWeight: 0.5,
  },
  {
    id: "snapshot-testing",
    name: "Snapshot Testing",
    abbr: "Snap",
    category: "Testing Concept",
    color: "#99425b",
    description:
      "Saving the output of some code, like a rendered component, to a file and comparing future runs against it. If the output changes, the test fails until you review and accept it.",
    highlights: [
      "Catching unexpected UI changes",
      "Testing serialized output",
      "Built into Jest and Vitest",
    ],
    funFact:
      "Snapshot files are meant to be committed and reviewed like code; in Jest you run with -u to update them when a change is intentional.",
    url: "https://jestjs.io/docs/snapshot-testing",
  },
];

export default entries;

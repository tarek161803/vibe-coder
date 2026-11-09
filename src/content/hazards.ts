import { badgeLogo } from "./logos";
import type { TechInfo } from "./types";

/**
 * Everyday developer problems. They make up a fixed share of obstacles
 * (see OBSTACLE.hazardChance), and their lessons explain how to deal with them.
 */
export const HAZARDS: TechInfo[] = [
  {
    id: "bug",
    name: "Bug",
    kind: "hazard",
    category: "Software Defect",
    color: "#ef4444",
    logo: badgeLogo("BUG", "#ef4444"),
    description:
      "A bug is a mistake in code that makes a program behave in a way nobody intended — crashing, showing the wrong data, or doing something just plain weird.",
    highlights: [
      "Read the error message carefully (really!)",
      "Use a debugger or breakpoints instead of guessing",
      "Write tests so the same bug can't come back",
    ],
    funFact:
      "In 1947, engineers working on the Harvard Mark II found an actual moth stuck in a relay. They taped it into the logbook as the \"first actual case of bug being found.\"",
    url: "https://developer.chrome.com/docs/devtools/javascript",
    spawnWeight: 0.7,
  },
  {
    id: "merge-conflict",
    name: "Merge Conflict",
    kind: "hazard",
    category: "Git Problem",
    color: "#a78bfa",
    logo: badgeLogo("MERGE", "#a78bfa"),
    description:
      "Happens when two branches change the same lines of a file and Git can't decide which version to keep. It pauses the merge and marks the clashing sections so a human can choose.",
    highlights: [
      "Pull from the main branch often",
      "Keep branches small and short-lived",
      "Edit the marked section, remove the markers, then commit",
    ],
    funFact:
      "Those <<<<<<<, ======= and >>>>>>> lines are conflict markers. Accidentally committing them is a rite of passage for every developer.",
    url: "https://git-scm.com/docs/git-merge#_how_conflicts_are_presented",
    spawnWeight: 0.6,
  },
  {
    id: "build-error",
    name: "Build Error",
    kind: "hazard",
    category: "Toolchain Problem",
    color: "#f97316",
    logo: badgeLogo("ERR", "#f97316"),
    description:
      "The compiler or bundler couldn't turn your source code into a runnable app — usually because of a syntax mistake, a type error, or a missing import.",
    highlights: [
      "Fix the first error first — the rest often vanish",
      "Check the file name and line number in the message",
      "Look at what you changed most recently",
    ],
    funFact:
      "A single missing bracket can produce dozens of error messages. Fixing one character and watching 40 errors disappear at once is one of the best feelings in programming.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors",
    spawnWeight: 0.6,
  },
  {
    id: "infinite-loop",
    name: "Infinite Loop",
    kind: "hazard",
    category: "Logic Error",
    color: "#c084fc",
    logo: badgeLogo("LOOP", "#c084fc"),
    description:
      "A loop whose exit condition is never met, so it runs forever — freezing the page and pinning your CPU at 100%.",
    highlights: [
      "Make sure the loop variable actually changes",
      "Double-check < vs <= in conditions",
      "Pause execution in DevTools to find where it's stuck",
    ],
    funFact:
      "Apple's former headquarters was literally at 1 Infinite Loop, Cupertino, California.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
    spawnWeight: 0.5,
  },
  {
    id: "cors-error",
    name: "CORS Error",
    kind: "hazard",
    category: "Browser Security",
    color: "#f87171",
    logo: badgeLogo("CORS", "#f87171"),
    description:
      "The browser blocked your page from reading a response from a different domain, because that server didn't say your site was allowed. It's a security feature, not a bug in your frontend.",
    highlights: [
      "The server must send an Access-Control-Allow-Origin header",
      "Use a dev-server proxy while developing locally",
      "Check the preflight OPTIONS request in the Network tab",
    ],
    funFact:
      "CORS only exists in browsers — the exact same request works fine in curl or Postman, which is exactly why it confuses everyone the first time.",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
    spawnWeight: 0.5,
  },
];

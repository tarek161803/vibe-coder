/**
 * Copies brand icons from the `simple-icons` package (CC0) into the source tree,
 * for every technology whose name matches a Simple Icons title.
 *
 *   npm run icons            regenerate the icon files
 *   npm run icons -- --report  print matched / unmatched names without writing
 *
 * Output (only the matched icons, so the app never ships the whole library):
 *   src/content/brandIcons/core.generated.ts     core technologies (main bundle)
 *   src/content/brandIcons/catalog.generated.ts  catalog entries (lazy chunk)
 */
import { writeFileSync } from "node:fs";
import * as simpleIcons from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { CATALOG_ENTRIES } from "../src/content/catalog/index";
import { CORE_TECHNOLOGIES } from "../src/content/coreTechnologies";
import { HAZARDS } from "../src/content/hazards";

/** Our id → Simple Icons slug, for names that don't match a title exactly. */
const ALIASES: Record<string, string> = {
  html: "html5",
  gcp: "googlecloud",
  "sass-scss": "sass",
  "expressjs": "express",
  "ruby-on-rails": "rubyonrails",
  phoenix: "phoenixframework",
  "spring-boot": "springboot",
  "dotnet-maui": "dotnet",
  "aspnet-core": "dotnet",
  "android-sdk": "android",
  "android-ndk": "android",
  "android-jetpack": "android",
  gemini: "googlegemini",
  mistral: "mistralai",
  "hugging-face": "huggingface",
  llama: "meta",
  "signal-protocol": "signal",
  "nvidia-cuda": "nvidia",
  "nvidia-tensorrt": "nvidia",
  "nvidia-jetson": "nvidia",
  "nvidia-isaac": "nvidia",
  "nvidia-omniverse": "nvidia",
  "tensorrt-llm": "nvidia",
  "triton-inference-server": "nvidia",
  "github-copilot": "githubcopilot",
  "github-actions": "githubactions",
  "github-pages": "githubpages",
  "gitlab-ci-cd": "gitlab",
  "bitbucket-pipelines": "bitbucket",
  "google-kubernetes-engine": "googlecloud",
  "google-cloud-functions": "googlecloud",
  "google-cloud-storage": "googlecloudstorage",
  "google-cloud-cdn": "googlecloud",
  "google-bigtable": "googlecloud",
  "google-bigquery": "googlebigquery",
  "google-pub-sub": "googlepubsub",
  "firebase-firestore": "firebase",
  "firebase-hosting": "firebase",
  "firebase-authentication": "firebase",
  "cloudflare-pages": "cloudflarepages",
  "cloudflare-workers": "cloudflareworkers",
  "cloudflare-r2": "cloudflare",
  "cloudflare-cdn": "cloudflare",
  "cloudflare-tunnel": "cloudflare",
  "cloudflare-zero-trust": "cloudflare",
  "vercel-functions": "vercel",
  "deno-deploy": "deno",
  "supabase-edge-functions": "supabase",
  "supabase-auth": "supabase",
  "apache-kafka": "apachekafka",
  "apache-spark": "apachespark",
  "apache-flink": "apacheflink",
  "apache-airflow": "apacheairflow",
  "apache-cassandra": "apachecassandra",
  "apache-hadoop": "apachehadoop",
  "apache-superset": "apachesuperset",
  "apache-solr": "apachesolr",
  "apache-pulsar": "apachepulsar",
  "apache-cordova": "apachecordova",
  "apache-parquet": "apacheparquet",
  "apache-arrow": "apachearrow",
  "apache-lucene": "apachelucene",
  "apache-http-server": "apache",
  "redis-streams": "redis",
  "elk-stack": "elastic",
  "red-hat-enterprise-linux": "redhat",
  "jetpack-compose": "jetpackcompose",
  "kotlin-multiplatform": "kotlin",
  "expo-router": "expo",
  "tanstack-query": "reactquery",
  "tanstack-start": "tanstack",
  "redux-toolkit": "redux",
  "rtk-query": "redux",
  "apollo-client": "apollographql",
  "material-ui": "mui",
  "testing-library": "testinglibrary",
  "unreal-xr": "unrealengine",
  "unity-xr": "unity",
  "unity-netcode": "unity",
  "meta-quest": "meta",
  "apple-vision-pro": "apple",
  "apple-storekit": "apple",
  "google-play-billing": "googleplay",
  "ros-2": "ros",
  "owasp-top-10": "owasp",
  "owasp-zap": "zap",
  "kali-linux": "kalilinux",
  "arch-linux": "archlinux",
  "alpine-linux": "alpinelinux",
  "linux-kernel": "linux",
  "home-assistant": "homeassistant",
  "node-red": "nodered",
  "arduino-cloud": "arduino",
  "raspberry-pi": "raspberrypi",
  "web-components": "webcomponentsdotorg",
  "chakra-ui": "chakraui",
  "ant-design": "antdesign",
  "radix-ui": "radixui",
  "headless-ui": "headlessui",
  "shadcn-ui": "shadcnui",
  "payload-cms": "payloadcms",
  "intellij-idea": "intellijidea",
  "android-studio": "androidstudio",
  "sublime-text": "sublimetext",
  "swift-package-manager": "swift",
  "go-modules": "go",
  "claude-code": "claude",
  "gemini-code-assist": "googlegemini",
  "weights-and-biases": "weightsandbiases",
  "scikit-learn": "scikitlearn",
  "new-relic": "newrelic",
  "digitalocean": "digitalocean",
  "hetzner-cloud": "hetzner",
  "akamai-cloud": "akamai",
  "alibaba-cloud": "alibabacloud",
  "travis-ci": "travisci",
  "argo-cd": "argo",
  "flux-cd": "flux",
  "docker-swarm": "docker",
  "unreal-engine": "unrealengine",
  "babylonjs": "babylondotjs",
  "threejs": "threedotjs",
  "cocos-creator": "cocos",
  "cinema-4d": "cinema4d",
  "autodesk-maya": "autodeskmaya",
  "3ds-max": "autodesk",
  "near-protocol": "near",
  "web3js": "web3dotjs",
  "ethersjs": "ethers",
  solidjs: "solid",
  sveltekit: "svelte",
  "actix-web": "actix",
  keystonejs: "keystone",
  openapi: "openapiinitiative",
  "react-native": "react",
  timescaledb: "timescale",
  traefik: "traefikproxy",
  envoy: "envoyproxy",
  nats: "natsdotio",
  "openid-connect": "openid",
  junit: "junit5",
  sonarqube: "sonarqubeserver",
  sonarcloud: "sonarqubecloud",
  godot: "godotengine",
  construct: "construct3",
  rhino: "rhinoceros",
  "bluetooth-le": "bluetooth",
  zed: "zedindustries",
  rollup: "rollupdotjs",
  "android-xr": "android",
  "typescript-compiler": "typescript",
  rustc: "rust",
  "llvm-mlir": "llvm",
  "pydantic-ai": "pydantic",
  "apache-beam": "apache",
  "apache-samza": "apache",
  "apache-orc": "apache",
  "apache-ignite": "apache",
  "apache-thrift": "apache",
  backstage: "backstage",
  cockroachdb: "cockroachlabs",
  couchdb: "apachecouchdb",
  hbase: "apachehbase",
  esp32: "espressif",
  esp8266: "espressif",
  saltstack: "saltproject",
  lxc: "linuxcontainers",
  lxd: "linuxcontainers",
  mcp: "modelcontextprotocol",
  groovy: "apachegroovy",
  jwt: "jsonwebtokens",
};

/**
 * Ids whose name matches a Simple Icons title that is a *different* thing
 * (e.g. GNU Make vs the Make automation platform). These keep their badge.
 */
const BLOCKLIST = new Set<string>(["cnn", "ram", "uikit", "make", "vespa"]);

const icons = Object.values(simpleIcons).filter(
  (value): value is SimpleIcon => typeof value === "object" && value !== null && "slug" in value,
);
const norm = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\+/g, "plus")
    .replace(/#/g, "sharp")
    .replace(/[^a-z0-9]/g, "");
const byTitle = new Map(icons.map((icon) => [norm(icon.title), icon]));
const bySlug = new Map(icons.map((icon) => [icon.slug, icon]));

function findIcon(id: string, name: string): SimpleIcon | undefined {
  if (BLOCKLIST.has(id)) return undefined;
  if (ALIASES[id]) return bySlug.get(ALIASES[id]);
  const withoutParens = name.replace(/\s*\(.*\)$/, "");
  const inParens = name.match(/\((.*)\)/)?.[1];
  return [name, withoutParens, inParens]
    .filter((variant): variant is string => Boolean(variant))
    .map((variant) => byTitle.get(norm(variant)))
    .find(Boolean);
}

type Entry = { id: string; name: string; category: string };

function resolve(entries: Entry[]) {
  const matched: Record<string, { title: string; hex: string; path: string }> = {};
  const report: string[] = [];
  const missing: string[] = [];
  for (const entry of entries) {
    const icon = findIcon(entry.id, entry.name);
    if (icon) {
      matched[entry.id] = { title: icon.title, hex: icon.hex, path: icon.path };
      report.push(`${entry.name} → ${icon.title} (${entry.category})`);
    } else {
      missing.push(`${entry.id} — ${entry.name} (${entry.category})`);
    }
  }
  return { matched, report, missing };
}

const core = resolve(CORE_TECHNOLOGIES);
const catalog = resolve(CATALOG_ENTRIES);

// Aliases pointing at slugs that don't exist would silently fall back to badges.
const knownIds = new Set([...CORE_TECHNOLOGIES, ...HAZARDS, ...CATALOG_ENTRIES].map((tech) => tech.id));
const brokenAliases = Object.entries(ALIASES).filter(([id, slug]) => !bySlug.has(slug) || !knownIds.has(id));

if (process.argv.includes("--report")) {
  console.log(`CORE matched ${core.report.length}`, core.report, "\nmissing", core.missing);
  console.log(`\nCATALOG matched ${catalog.report.length}\n${catalog.report.join("\n")}`);
  console.log(`\nCATALOG missing ${catalog.missing.length}\n${catalog.missing.join("\n")}`);
  console.log(`\nBROKEN ALIASES ${brokenAliases.length}`, brokenAliases);
} else {
  const write = (file: string, exportName: string, matched: Record<string, unknown>) =>
    writeFileSync(
      `src/content/brandIcons/${file}`,
      `// Generated by scripts/generate-brand-icons.mts from simple-icons (CC0). Do not edit.\n` +
        `// Logos are trademarks of their respective owners.\n` +
        `import type { BrandIcon } from "../types";\n\n` +
        `export const ${exportName}: Record<string, BrandIcon> = ${JSON.stringify(matched, null, 2)};\n`,
    );
  write("core.generated.ts", "CORE_BRAND_ICONS", core.matched);
  write("catalog.generated.ts", "CATALOG_BRAND_ICONS", catalog.matched);
  console.log(`Wrote ${Object.keys(core.matched).length} core + ${Object.keys(catalog.matched).length} catalog icons.`);
  if (brokenAliases.length) console.warn("Aliases with unknown slugs or ids:", brokenAliases);
}

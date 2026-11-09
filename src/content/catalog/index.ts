/**
 * The extended catalog: ~1,100 technologies and concepts, one file per topic.
 * Loaded lazily via loadCatalog() in ../index.ts because it is large.
 *
 * To add an entry, append it to the matching topic file (format: CatalogEntry
 * in ../types.ts), then run `npm run icons` to pick up its Simple Icons logo.
 * Without a matching logo, the entry gets a text badge from its `abbr`.
 */
import { CATALOG_BRAND_ICONS } from "../brandIcons/catalog.generated";
import { badgeLogo, brandLogo } from "../logos";
import type { CatalogEntry, TechInfo } from "../types";
import programmingLanguages from "./programmingLanguages";
import frontend from "./frontend";
import backend from "./backend";
import mobile from "./mobile";
import databases from "./databases";
import devops from "./devops";
import cloud from "./cloud";
import networking from "./networking";
import aiAndMachineLearning from "./aiAndMachineLearning";
import dataEngineering from "./dataEngineering";
import cybersecurity from "./cybersecurity";
import testingAndQuality from "./testingAndQuality";
import gameDevelopment from "./gameDevelopment";
import graphicsAnd3d from "./graphicsAnd3d";
import blockchain from "./blockchain";
import embeddedAndIot from "./embeddedAndIot";
import operatingSystems from "./operatingSystems";
import hardware from "./hardware";
import distributedSystems from "./distributedSystems";
import developerTools from "./developerTools";
import search from "./search";
import spatialComputing from "./spatialComputing";
import robotics from "./robotics";
import theoryAndMath from "./theoryAndMath";
import compilers from "./compilers";
import communication from "./communication";
import multimedia from "./multimedia";
import authAndPayments from "./authAndPayments";
import specializedFields from "./specializedFields";

export const CATALOG_ENTRIES: CatalogEntry[] = [
  ...programmingLanguages,
  ...frontend,
  ...backend,
  ...mobile,
  ...databases,
  ...devops,
  ...cloud,
  ...networking,
  ...aiAndMachineLearning,
  ...dataEngineering,
  ...cybersecurity,
  ...testingAndQuality,
  ...gameDevelopment,
  ...graphicsAnd3d,
  ...blockchain,
  ...embeddedAndIot,
  ...operatingSystems,
  ...hardware,
  ...distributedSystems,
  ...developerTools,
  ...search,
  ...spatialComputing,
  ...robotics,
  ...theoryAndMath,
  ...compilers,
  ...communication,
  ...multimedia,
  ...authAndPayments,
  ...specializedFields,
];

export function toTechInfo(entry: CatalogEntry): TechInfo {
  const icon = CATALOG_BRAND_ICONS[entry.id];
  return {
    id: entry.id,
    name: entry.name,
    kind: "technology",
    category: entry.category,
    color: entry.color,
    logo: icon ? brandLogo(icon) : badgeLogo(entry.abbr, entry.color),
    description: entry.description,
    highlights: entry.highlights,
    funFact: entry.funFact,
    url: entry.url,
    spawnWeight: entry.spawnWeight,
  };
}

export const CATALOG: TechInfo[] = CATALOG_ENTRIES.map(toTechInfo);

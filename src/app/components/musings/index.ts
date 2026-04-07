import { ComponentType } from "react";
import { MusingsEntry } from "../../../data/musingsEntries";
import ForestEntry from "./ForestEntry";
import MyProcess from "./MyProcess";

export type MusingsEntryComponent = ComponentType<{ entry: MusingsEntry }>;

const entryComponents: Record<string, MusingsEntryComponent> = {
  "forest-from-the-trees": ForestEntry,
  "my-process": MyProcess,
};

export function getEntryComponent(slug: string): MusingsEntryComponent | undefined {
  return entryComponents[slug];
}

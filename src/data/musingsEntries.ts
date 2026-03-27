export interface MusingsEntry {
  id: string;
  slug: string;
  /** Shown as "Entry {entryLabel}" */
  entryLabel: string;
  title: string;
  /** Display date e.g. 01/24/26 */
  date: string;
  /** Optional art revealed subtly on row hover */
  hoverImageSrc?: string;
  /** Article body; paragraphs separated by blank lines */
  body?: string;
}

export const musingsEntries: MusingsEntry[] = [
  {
    id: "1",
    slug: "vibe-coding-design-process",
    entryLabel: "01",
    title: "Vibe coding and design process",
    date: "01/24/26",
    hoverImageSrc: "/images/Introsection/doodle_phone.jpg",
    body: `Vibe coding names what many of us were already doing: moving fast with AI-assisted tools, sketching in code, and iterating in public. The phrase is catchy, but it also papers over a lot of nuance: when the “vibe” is the brief, the craft of framing problems, choosing constraints, and editing ruthlessly still matters.

Design process has not disappeared — it has shifted. The same questions remain: who is this for, what is wrong today, what would we ship if we had half the time? The difference is how quickly you can try answers, and how honest you are about what still feels wrong.

This piece is a place to unpack that tension: speed without losing judgment, and tools without losing taste.`,
  },
  {
    id: "2",
    slug: "lack-of-feeling-with-vibe-coding",
    entryLabel: "02",
    title: "The lack of feeling with vibe coding",
    date: "01/24/26",
    hoverImageSrc: "/images/Introsection/doodle_lamp.jpg",
    body: `Placeholder for thoughts on intuition, craft, and what gets lost when output is instant. More soon.`,
  },
  {
    id: "3",
    slug: "notes-on-tools",
    entryLabel: "03",
    title: "Notes on tools",
    date: "02/01/26",
    hoverImageSrc: "/images/Introsection/doodle_fan.jpg",
    body: `Short notes on the tools I reach for every day. Draft.`,
  },
];

export function getMusingBySlug(slug: string): MusingsEntry | undefined {
  return musingsEntries.find((e) => e.slug === slug);
}

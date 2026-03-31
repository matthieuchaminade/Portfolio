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
  /** Hero image shown at top of entry page */
  heroImage?: string;
  /** Optional video shown in the media container */
  heroVideo?: string;
  /** Poster frame for the video */
  heroPoster?: string;
  /** Additional gallery images for the carousel */
  gallery?: string[];
  /** Article body; paragraphs separated by blank lines */
  body?: string;
}

export const musingsEntries: MusingsEntry[] = [
  {
    id: "1",
    slug: "forest-from-the-trees",
    entryLabel: "01",
    title: "Forest from the trees",
    date: "01/24/26",
    hoverImageSrc: "/images/Introsection/doodle_phone.jpg",
    heroVideo: "/images/Musings/Forest/Forest_demo_web.mp4",
    heroPoster: "/images/Musings/Forest/Forest_poster.jpg",
    body: `Built this app for two reasons:

- Learn more about vibe coding (making an iOS app from scratch)
- Explore an idea

The goal wasn't to have a super polished product but simply to learn and explore. I do think that AI is perfect for that right now, I can quickly build and get a V1, ready to test, learn and iterate on extremely fast. With each cycle adding more polish and refinements to the product.

Key learnings/thoughts:

I find that vibe coding UI isn't as fun as drawing it if I have a specific design in mind already. Vibe coding app logic though feels a lot more like "drawing" in that I am engaging my mind and my hands especially when I do so in a more conversational back and forth way with the model. Chatgpt asked good follow up questions and it felt more like building something vs finding the right prompting flows to get perfect UI.

With vibe coding as a designer there are more ways to craft and mold the product as you can directly think through the experience as you move onto the code. There's a lot of interactions and behaviors that I designed on the fly while going back-and-forth working on the code and playing with the build. The product direction is more fluid and editable as the design and handoff phases become more overlapped.

There is a nice hybrid workflow emerging where some things are still drown and divergent ideas explored in a simple canvas like figma but not everything needs to be defined there. Things like blurring content as it scrolls, dynamic type and UI elements are better defined in the build itself directly editing the code. The source of truth becomes the prototype.

Here is a brief description of the experience written in cursor based on its understanding of the project (had it write this directly from the project):

Forest is an app that helps you pause, recenter with a short grounding activity, and answer two simple questions: what matters most right now, and what's one small step you can take? Over time, it surfaces the themes you keep coming back to — no tracking, no streaks, just a simple way to touch base with yourself as you get caught up in the busy day to day life.`,
  },
];

export function getMusingBySlug(slug: string): MusingsEntry | undefined {
  return musingsEntries.find((e) => e.slug === slug);
}

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
    date: "04/01/26",
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
  {
    id: "2",
    slug: "my-process",
    entryLabel: "02",
    title: "My process",
    date: "04/07/26",
    hoverImageSrc: "/images/Introsection/doodle_lamp.jpg",
    body: `I don’t believe in following a rinse and repeat process for building products. In my opinion building new products is not the same as manufacturing products where a product goes through an assembly line with repeated steps every single time. The assembly line process is intended for repeated output but when designing products and features from scratch each instance is different. Too often though I see designers preaching a new step by step process and often times we get measured against it, as if that is what consists the basis of our skills over knowing what good product design is or experience.

The truth is, making products is far more messy, nuanced, chaotic and complex than a perfectly formulated siloed design process can account for. Which is why I don’t have a strict process that I just follow over and over again and lean on to get results. What I do have is experience and pillars.

Underlying everything, I think the role of a product designer is to keep the product moving towards shipping and then refining the shipped experience. Design’s superpower is to make something tangible at every stage, something people can look at, play with, test and discuss. It helps define the vision and get the whole team aligned on something everyone can better understand. This becomes a consistent and unique way design can continuously contribute throughout a project.

The pillars (in no particular order):

- Make the best decisions you can based on what you know right now. Ambiguity is always going to ebb and flow as you work on various products and features. You won’t always have the answers, the road to the next feature may not be clear but there is always some information you can use. It may range from intuition to objective data but the key to is keep moving and making decisions based on what information you have. You will rarely have a perfect situation where everything is known, if ever to be honest.


- Be creative, explore wild ideas, create discussions, look for new patterns and solutions. If anyone on the team has space to be an artist and creative its us designers and we should lean in to that when we can.

- Iterate, iterate, iterate. Make a version, the best version you can think of, share it to whoever you can or whoever you need to. Take some feedback  leave some aside and design another version. Keep going, this never really stops, even after you ship. Design is a super powerful tool to drive ideas and influence the product direction by showing what that vision is and continuing to evolve it.

- Ensure people understand the narrative and product direction. This is an underrated one but after pitching many ideas I’ve learned that sometimes it’s not that people don’t believe in your idea it’s just that sometimes they didn’t follow the narrative, design comps or presentation. Learn from this and refine one of those things, re-pitch and lots of times the conversation is completely different. The understanding of a product is no different than a pitch deck, you need to accommodate it for your users.

- Spend as much time understanding the problem as possible. Try to internalize it and don’t rush to solutions. Don’t let the nerves take over.

How is AI changing this:

I can’t talk about process without talking about AI, truth is I think the above pillars are going to evolve as we use AI more and more to build products. For example AI’s ability to create prototypes extremely fast is going to drastically change how fast I can iterate, how many ideas I can explore and help me navigate all the ambiguity that we often find in the product world. But I also think that spending time to understand the problem space is still relevant and a core pillar. As product designers (makers, design engineers, whatever the role changes too) understanding the space we are trying to innovate in doesn’t cease to be a need because we can vibe code something, but how we get to that understanding will. Things are changing pretty much daily so for now my main focus is to keep experimenting with, thinking about and learning all of this AI stuff.`,
  },
];

export function getMusingBySlug(slug: string): MusingsEntry | undefined {
  return musingsEntries.find((e) => e.slug === slug);
}

"use client";
import React from "react";
import { MusingsEntry } from "../../../data/musingsEntries";
import MusingsMediaContainer from "../MusingsMediaContainer";

interface Props {
  entry: MusingsEntry;
}

function bodyParagraphs(body: string | undefined): string[] {
  if (!body?.trim()) {
    return ["More to come."];
  }
  return body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export default function ForestEntry({ entry }: Props) {
  const paragraphs = bodyParagraphs(entry.body);

  return (
    <>
      {(entry.heroImage || entry.heroVideo) && (
        <div className="mt-8 w-full px-4">
          <MusingsMediaContainer
            heroImage={entry.heroImage}
            heroVideo={entry.heroVideo}
            heroPoster={entry.heroPoster}
            gallery={entry.gallery}
            title={entry.title}
          />
        </div>
      )}

      <article className="mx-auto w-full max-w-xl px-6 pb-20 md:px-10">
        <p className="mt-10 font-bodymono text-sm text-neutral-600">
          Entry {entry.entryLabel} - {entry.date}
        </p>

        <h1 className="mt-6 font-ppNeueMachinaInktrapLight text-[clamp(2rem,7vw,3.75rem)] font-light uppercase leading-[1.05] tracking-tight text-neutral-900">
          {entry.title}
        </h1>

        <div className="mt-10 space-y-5 font-spectral text-[16px] leading-[24px] text-[#2E2F35]">
          {paragraphs.map((p, i) => (
            <p key={i} className="m-0">
              {p}
            </p>
          ))}
        </div>
      </article>
    </>
  );
}

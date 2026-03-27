import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getMusingBySlug,
  musingsEntries,
} from "../../../data/musingsEntries";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return musingsEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = getMusingBySlug(slug);
  if (!entry) return { title: "Not found" };
  return {
    title: `${entry.title} — Musings`,
    description: `Thoughts: ${entry.title}`,
  };
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

export default async function MusingPage({ params }: Props) {
  const { slug } = await params;
  const entry = getMusingBySlug(slug);
  if (!entry) notFound();

  const paragraphs = bodyParagraphs(entry.body);

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <article className="mx-auto w-full max-w-xl px-6 pb-20 pt-10 md:px-10 md:pt-12">
        <Link
          href="/musings"
          aria-label="Back to musings"
          className="inline-block font-bodymono text-2xl font-normal leading-none text-neutral-800 transition-colors hover:text-neutral-950"
        >
          {"<"}
        </Link>

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
    </div>
  );
}

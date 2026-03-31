import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getMusingBySlug,
  musingsEntries,
} from "../../../data/musingsEntries";
import { getEntryComponent } from "../../components/musings";

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

export default async function MusingPage({ params }: Props) {
  const { slug } = await params;
  const entry = getMusingBySlug(slug);
  if (!entry) notFound();

  const EntryComponent = getEntryComponent(slug);
  if (!EntryComponent) notFound();

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <div className="w-full p-8">
        <Link
          href="/musings"
          aria-label="Back to musings"
          className="inline-block font-bodymono text-base font-normal leading-none transition-colors hover:text-neutral-950"
          style={{ color: "#97989B" }}
        >
          {"<"} back
        </Link>
      </div>

      <EntryComponent entry={entry} />
    </div>
  );
}

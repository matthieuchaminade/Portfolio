import Link from "next/link";
import { musingsEntries } from "../../data/musingsEntries";

export default function MusingsEntryList() {
  return (
    <div className="w-full">
      <ul className="list-none m-0 p-0">
        {musingsEntries.map((entry) => (
          <li key={entry.id} className="m-0 p-0">
            <Link
              href={`/musings/${entry.slug}`}
              className="group relative block overflow-hidden border-b border-neutral-900/15 bg-[#F5F5F5] px-4 py-5 md:px-6 md:py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5F5] motion-safe:transition-colors motion-reduce:transition-none"
            >
              <span
                className="pointer-events-none absolute inset-0 z-0 bg-neutral-950 opacity-0 transition-opacity duration-200 motion-safe:duration-200 group-hover:opacity-100 motion-reduce:transition-none"
                aria-hidden
              />
              {entry.hoverImageSrc ? (
                <img
                  src={entry.hoverImageSrc}
                  alt=""
                  className="pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover opacity-0 transition-opacity duration-200 motion-safe:duration-200 group-hover:opacity-[0.15] motion-reduce:opacity-0 motion-reduce:group-hover:opacity-0"
                />
              ) : null}
              <span className="relative z-10 flex w-full flex-row items-center justify-between gap-4 font-bodymono text-sm text-neutral-900 transition-colors duration-200 group-hover:text-white sm:text-base">
                <span className="min-w-0 flex-1">
                  Entry {entry.entryLabel} — {entry.title}
                </span>
                <span className="shrink-0 tabular-nums">{entry.date}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import IntroLayout from "../components/IntroLayout";
import MusingsIntroCenter from "../components/MusingsIntroCenter";
import MusingsEntryList from "../components/MusingsEntryList";

/** Toggle when the hover entry list should return. */
const SHOW_MUSINGS_ENTRY_LIST = true;

export const metadata = {
  title: "Musings",
  description: "Thoughts and notes.",
};

export default function MusingsPage() {
  return (
    <>
      <IntroLayout id="musings-intro-section" showImageGrid={false} background="#1E1D20">
        <MusingsIntroCenter />
      </IntroLayout>
      {SHOW_MUSINGS_ENTRY_LIST ? (
        <section className="w-full bg-[#F3F1EE]" aria-label="Musings entries">
          <MusingsEntryList />
        </section>
      ) : null}
    </>
  );
}

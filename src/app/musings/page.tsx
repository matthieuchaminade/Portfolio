import IntroLayout from "../components/IntroLayout";
import MusingsIntroCenter from "../components/MusingsIntroCenter";

export const metadata = {
  title: "Musings",
  description: "Thoughts and notes.",
};

export default function MusingsPage() {
  return (
    <IntroLayout id="musings-intro-section" showImageGrid={false} background="#1E1D20">
      <MusingsIntroCenter />
    </IntroLayout>
  );
}

import IntroSection from "./components/IntroSection";
import WhatImDoing from "./components/WhatImDoing";
import MyProjects from "./components/MyProjects";

export const metadata = {
  title: "Who",
  description: "Matthieu Chaminade — who I am",
};

export default function Home() {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <IntroSection />
      </div>
      <MyProjects />
      {false && <WhatImDoing />}
    </>
  );
}

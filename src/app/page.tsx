import IntroSection from "./components/IntroSection";
import WhatImDoing from "./components/WhatImDoing";
import MyProjects from "./components/MyProjects";

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

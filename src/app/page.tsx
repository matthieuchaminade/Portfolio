import IntroSection from "./components/IntroSection";
import WhatImDoing from "./components/WhatImDoing";
import MyProjects from "./components/MyProjects";

export default function Home() {
  return (
    <>
      <div style={{ overflow: "hidden", padding: "24px 0", background: "#fff" }}>
        <IntroSection />
      </div>
      <MyProjects />
      <WhatImDoing />
    </>
  );
}

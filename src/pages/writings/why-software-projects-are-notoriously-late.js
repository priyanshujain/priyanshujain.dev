import React, { useState } from "react";
import Layout from "../../components/layout/index";
import SEO from "../../components/seo";
import { SectionBox } from "../../components/home";
import Icon from "../../components/Icon";

const handleScroll = (isModalOpen) => {
  if (isModalOpen === true) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflowY = "scroll";
  }
};

const Page = (props) => {
  const [isContactOpen, setContact] = useState(false);
  const handleContact = () => {
    // Look into state updates
    // Look into state updates
    handleScroll(!isContactOpen);
    setContact(!isContactOpen);
  };

  return (
    <Layout headerClass="">
      <SEO
        title="Why software projects are notoriously late?"
        description={` It's a question that is asked to every software developer. `}
        image={"/software-projects.png"}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="why software projects are notoriously late?"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              why software projects are notoriously late? It's a question that
              is asked to every software developer. The answer, shockingly,
              might be simpler than you think: estimates are fundamentally
              flawed.
              <br />
              <br />
              Let's face it, predicting how long it will take to build software
              is like trying to predict the weather a year in advance. Sure, we
              can make educated guesses, but the reality is, there are too many
              variables at play. The moment a piece of software becomes
              predictable enough to estimate, it's usually turned into a product
              you can buy off the shelf. So, most of what we build is new,
              unexplored territory.
              <br />
              <br />
              But here's the kicker: we insist on pretending that this novel
              work can be nailed down with numbers. We've been doing it for
              decades, and it hasn’t worked once. Yet, every new project is met
              with the same old ritual of estimation. It's like watching a car
              crash in slow motion.
              <br />
              <br />
              The problem is deeper than just inaccuracy. Estimates create a
              toxic environment. They lead to unrealistic deadlines, burnout,
              and a focus on speed over quality. We end up building things
              quickly, but often incorrectly. And when a project misses its
              estimate, fingers get pointed instead of lessons learned.
              <br />
              <br />
              So, what's the alternative? It's not about throwing caution to the
              wind. It's about acknowledging the inherent uncertainty of
              software development and adapting our approach. Instead of rigid
              estimates, we need to focus on delivering value incrementally,
              being transparent about challenges, and empowering teams to make
              decisions.
                <br />
                <br />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

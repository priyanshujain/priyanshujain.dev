import React, { useState } from "react";
import Layout from "../../components/layout/index";
import SEO from "../../components/seo";
import { SectionBox } from "../../components/home";

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
        title="Developers Hate JIRA"
        description={`Developers hate JIRA. It's a sentiment that's been echoed in countless memes, tweets, and blog posts. But why is this project management tool so reviled by the very people who use it?`}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="Developers Hate JIRA"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              From countless conference discussions and Twitter threads, it
              seems there’s a universal disdain among developers for JIRA as a
              project management tool. Yet, whenever I ask developers at
              companies with more than a handful of people, they’re still using
              JIRA. Why is that?
              <br />
              <br />
              The answer lies in history. It’s often a byproduct of when the
              company was started. For a time, JIRA was the default tool for
              project management. Once a company adopts it, momentum builds, and
              even if teams grow frustrated with JIRA, the cost and effort of
              switching often outweigh the perceived benefits. So it lingers.
              <br />
              <br />
              The core issue with JIRA is that it’s too customizable. This
              flexibility allows teams to create cumbersome workflows and
              systems. JIRA’s complexity and extensive options often tempt
              project managers to use as many features as possible. If you have
              an overzealous PM with admin privileges, you can quickly end up
              with a labyrinth of workflows, tickets overloaded with unnecessary
              fields, and other busywork that makes JIRA a nightmare to use.
              <br />
              <br />
              We used JIRA for over five years, and it was always confusing,
              packed with too many features. It felt like it was designed for
              large companies with quarterly release cycles. The UI was
              unnecessarily complex and, frankly, made me feel dumb — which is a
              terrible thing for any user interface to do. Software should never
              make you feel that way. In the end, JIRA felt like an
              overcomplicated to-do list—full of features we never fully
              utilized and costing us more than it was worth.
              <br />
              <br />
              Switching to GitHub Issues simplified everything. Initially, I
              thought it would only work for engineers, and that PMs wouldn’t be
              comfortable using it. There was some resistance from the PMs
              during the migration, but once we started using GitHub Projects,
              they loved it. Managing products closer to where the code lives
              cut down on a lot of back-and-forth between systems. Developers
              were thrilled, too, as they could directly link their PRs and
              feature branches to issues. All conversations moved to GitHub
              Issues, and, as a result, we were able to reduce the time it took
              to ship features because everything was encapsulated within PRs.
              Plus, migrating to GitHub saved us a lot of money since we could
              cancel our JIRA subscription — the cherry on top.
              <br />
              <br />
              In the end, it’s all about what works best for your team. Good
              software should guide you toward specific, productive use, not
              overwhelm you with unnecessary complexity.
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

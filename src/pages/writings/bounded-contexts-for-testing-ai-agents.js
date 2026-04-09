import React, { useState } from "react";
import Layout from "../../components/layout/index";
import SEO from "../../components/seo";
import { SectionBox } from "../../components/home";

const Page = (props) => {
  const [isContactOpen, setContact] = useState(false);

  const handleScroll = (isModalOpen) => {
    if (isModalOpen === true) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  };

  const handleContact = () => {
    handleScroll(!isContactOpen);
    setContact(!isContactOpen);
  };

  return (
    <Layout headerClass="">
      <SEO
        title="Bounded contexts for testing AI agents (v2)"
        description="The bounded context pattern from domain driven design gives me a clean way to organise tests for AI agents. Four levels of tests, four different questions, four kinds of bugs they catch."
        image="/bounded-contexts-for-testing-ai-agents.png"
      />
      <div
        className="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="Bounded contexts for testing AI agents"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <div className="tc mt4 pl5 pr5">
              <img
                src="/bounded-contexts-for-testing-ai-agents.png"
                alt="four levels of tests for AI agents, from unit test at the bottom to use case test at the top"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              Testing agents is difficult. An agent is not deterministic with predictable inputs and outputs given an environment. It decide it's actions in loop governed by an LLM and the output it produces is not directly verifiable.

              <br />
              It requires something that is verifiable for an agent in order to be testable.
              <br />
              <br />
              The framing that helps me most is bounded context pattern, borrowed from DDD(domain driven design). The idea is that a large system is broken into separate pieces with explicit boundaries between them.
              <br />
              We can convert an agentic system into a bounded context. In order to test it, I define four levels of tests for an agent, and each level is an absraction built on confidence of the previous level.
              <br />
              <br />
              <ol>
                <li>Unit test</li>
                <li>Integration test</li>
                <li>Spec test</li>
                <li>Use case test</li>
              </ol>
              <br />
              A unit test checks one piece of logic in smallest isolation. A simple example is to test if API key is empty it returns blank api key error. These tests test most granular components and most business logic. They are fast and cheap, so we can run them after every change.
              <br />
              <br />
              An integration test checks the integration between two boundaries. A simplest example is a database round trip. I save a reminder to a real postgres database, then read reminders back, and check the one I saved is there. If the code that writes and the code that reads disagree about the schema, a unit test on either side would still pass, but the integration test fails immediately.
              <br />
              I use testcontainers to simulate real postgres with schema migration and seed data to define a state. This integration test tests for the given state how would application logic executes.
              <br />
              <br />
A spec test checks a single workflow from the user's point of view. It's the boundary between the user and the whole agentic application. For example this is how I test the
              email search flow. I seed the email store with one email from Alice. I run the agent with "did I receive any email from alice today". The agent finds the email and writes
              a summary. The test passes if that summary matches what the email actually said. A unit test can't catch a bug here because the retrieval code works fine. An integration
              test can't catch it because the email really is in the store. Only a spec test sees whether the agent actually understood the email.
              <br />
              <br />
              Asserting on spec tests is the hardest part because it touches real LLM calls. The LLMs are non deterministic. I check two things. First, did the right tool
              get called? I record the tool calls the agent made and compare them to what I expect. Second, does the summary actually match the email? For that I employ an LLM as judge.
              The judge reads the original email and the agent's summary and returns a pass or fail. This way the whole flow runs end to end with real LLM calls and simulated user
              actions, and the final answer is validated by a binary classification from the judge.              <br />
              <br />
              Finally, A use case test runs one full use case in a given domain end to end. It touches multiple spec workflows. Email use case is one example where agent can read email, prioritize them and reply to an email on user's behalf. A spec test checks that the agent's draft mentions the right person and topic. A use case test runs the full path receiving email from the client, informing user about the email, drafting a reply, asking for user approval, and the sending the email after the approval.

              <br />
              <br />
              We do this by simulating the entire external tooling that is user specific. Ex. the send email call goes through the email tool layer into a dry-run sink so that nothing actually leaves the machine and no real email is sent. The test then reads the sink and asserts the recipient was alice@company.com and the body mentions the budget meeting.
              <br />
              <br />
              Overall, a unit test catches bugs in the core logic. An integration test catches bugs at the boundary. A spec test catches bugs if our agentic loop breaks. A use case test makes sure that a user will be able to use the agent for intended use case with all the wiring in place.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

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
        title="How I Code with AI: Pair Programming with Agents"
        description={`AI coding agents are changing how we build software—but only if you know how to use them right. In this post, I share my hands-on workflow, tips, and tricks for pairing with LLMs like Claude to write, test, and refactor production-grade code efficiently `}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="How I Code with AI: Pair Programming with Agents"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              I pair program a lot of my code with the help of AI agents.  Software engineers are split on this subject. Many think it’s the most transformative tech ever built; others say it’s hype. Personally, I feel like I get a lot of value from AI. Personally, I get a lot of value from AI. I want to dig a bit into the fundamentals and how I use it efficiently.
              <br />
              <br />


              At the core, an agent is an LLM with access to tools that manipulate text. There are many coding agents out there right now, but most of it is just an LLM in a loop the rest is elbow grease. The model itself still drives most of the effectiveness.
              <br />
              <br />

              Agents can use various tools such as file editing, running terminal commands to accomplish tasks. Our goal should be to utilize the agent for specific tasks to make the tool work well with model. Use model which has a better tools support, Claude 3.7 is the best right now with the tool support but performance can vary on different tasks.

              <br />
              <br />

              This is how I work with agents -
              <br />
              <br />


              First, Setup. Add context for agent like commands, workflows, and project guidelines to CLAUDE.md or AGENTS.md(depends on the agent you are using). This saves a ton of time on feedback loops and improves quality.

              <br />
              <br />

              If jumping into a new codebase then use the agent as a colleague to explain code line by line. Make sure to ask specific questions as generic questions blow up the context size and take a lot of space in context window.

              <br />
              <br />

              Give clear instructions. If it’s an integration, point the agent to relevant docs or links. Specificity matters. Again, generic prompts are a trap they consume context and often don’t help.

              <br />
              <br />

              Ask the agent to create an architectural plan and break the work into tasks. Save this in a plan.md or similar. Then implement it one task at a time. Ideally, each task should be testable in isolation.


              <br />
              <br />
              Agents make test writing easy use that. Write end to end tests so you know new changes don’t break things.
              <br />
              <br />


              Target one task each coding session so agent can hold the context for the task as there is a limited context window a model can hold.


              <br />
              <br />
              Before asking for code, ask the agent to reason about the problem. This is a general philosophy ask agent to explain the solution in clearest form before implementing, it helps agent define the solution before implementing.

              <br />
              <br />

              Write the test for the task and then the implementation. Test gives clarity about the feature and allows us to refactor later. So first implement working but throwaway code just so the test passes.

              <br />
              <br />

              Feedback loops are crucial for effective agent performance. Use agent in full mode where it can compile and run tests on it’s own, analyze errors with squiggly lines, correct the errors and run the tests again.
              <br />
              <br />


              Once tests pass then refactor the code to match production quality as it becomes easy with tests. Before committing, proofread and check for typos. Commit regularly to revert to working versions if the agent makes errors.

              <br />
              <br />
              Few hacks I use with agents:
              <br />
              <br />
              Codebases need to adapt to better work with agents, such as splitting up large files into smaller files as large files blow up the context.
              <br />
              <br />
              It's important to align with the model's inherent tendencies  like use more well known tools and frameworks as LLM are Trained on them. ex. using makefile instead of  justfile
              <br />
              <br />
              One recent thing I noticed is this LLM dark pattern, models for being overly sycophantic. One solution is lie to the llm and pretend that their work was written by someone else to counteract the model’s natural desire to shower praise on the user.

              <br />
              <br />

              In summary, These models are incredibly powerful now. Go and see how far you can get with this. I bet it’s a lot farther than you think.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

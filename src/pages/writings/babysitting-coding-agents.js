import React, { useState } from "react";
import Layout from "../../components/layout/index";
import SEO from "../../components/seo";
import { SectionBox } from "../../components/home";

const Page = (props) => {
  const [isContactOpen, setContact] = useState(false);
  const handleContact = () => {
    handleScroll(!isContactOpen);
    setContact(!isContactOpen);
  };

  return (
    <Layout headerClass="">
      <SEO
        title="Why do we still need to babysit coding agents?"
        description="One of the biggest problems with coding agents today is that they invent implicit rules and then rigidly follow them. Exploring the challenges with current coding agents and their reliability issues."
      />
      <div
        className="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="Why do we still need to babysit coding agents?"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              One of the biggest problems with coding agents today is that they invent implicit rules and then rigidly follow them.
              <br />
              <br />
              Take Claude, for example. It loves adding backward compatibility. Sounds thoughtful, right? But in practice, this often leads to bloated, brittle, or just plain terrible code. The intent is noble. The outcome? Messy.
              <br />
              <br />
              You can try solving this by writing explicit guidelines in the claude.md file. But even then, things slip through. Frequently.
              <br />
              <br />
              The inability to reliably follow explicit instructions makes these agents poor coding partners. You think you've been clear, but they hallucinate structure or logic that no one asked for.
              <br />
              <br />
              To be fair, Claude has gotten better from Sonnet 3.7 to Sonnet 4, it now follows instructions more faithfully. But still, not enough to be truly reliable.
              <br />
              <br />
              Now, the idea of "just only explicit instructions" is appealing in theory. But in practice, human programmers don't work like that either. We bring in context, experience, and intuition. We fill in the blanks when instructions are ambiguous or incomplete which they always are. Because to write 100% complete instructions, you'd have to describe the universe.
              <br />
              <br />
              A human will pause, ask questions, and seek clarification when in doubt. An LLM? It just plows ahead, confidently wrong.
              <br />
              <br />
              I'm sure there are some RLHF techniques that could improve this. But at some level, I think this is an inherent limitation.
              <br />
              <br />
              And that's fine if you're ready to babysit. Not fine if you expect the agent to ship production-quality code without dragging you into a pit of tech debt.
              <br />
              <br />
              Depending on how much oversight is needed, using an LLM might actually be slower than coding by hand. The time you save up front? You'll probably spend later debugging and refactoring.
              <br />
              <br />
              All this is loosely tied to another truth: LLMs tend to generate average code at best. At worst, they produce overengineered, subtly broken slop that looks okay until it bites you.
              <br />
              <br />
              A junior developer can be coached, mentored, and improved. An LLM? It won't learn from your feedback. You might think it just needs better prompt engineering. Believe me I've tried. A lot.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
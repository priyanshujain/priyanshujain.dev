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
        title="A tiny HRM 27M beat Opus 4 and o3 on the ARC AGI benchmark"
        description={`That sounds very surprising. Most of the SOTA models we hear about are hundreds of billions to a few trillion parameters. HRM shows something different can work for reasoning on limited data.`}
        image="/arc-prize-leaderboard.png"
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="A tiny HRM 27M beat Opus 4 and o3 on the ARC AGI benchmark"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              That sounds very surprising.
              <br />
              <br />
              Most of the SOTA models we hear about (Claude, GPT, Gemini, Grok) are hundreds of billions to a few trillion parameters. We can't realistically run those locally. So when Sapient Intelligence published HRM (paper in June, model out in July) everyone was impressed that something a thousand times smaller can outperform larger counterparts on a ARC AGI benchmark. But size alone doesn't tell the full story.
              <br />
              <br />
              HRM scored 32% on ARC AGI 1 and 2% on ARC AGI 2 without pre-training. That's the interesting part, as the current foundation models are trained on almost the entire internet. It shows something different can work for reasoning on limited data.
              <br />
              <br />
              For context from recent large models:
              <br />
              - Qwen3-coder (480B parameter model) was trained on 7.5 trillion tokens
              <br />
              - Kimi-k2 (1T parameter model) saw 15.5 trillion tokens
              <br />
              <br />
              As we understand HRM is not a foundation model. It lacks:
              <br />
              1. Broad pre-training data.
              <br />
              2. Transfer learning capability.
              <br />
              <br />
              So we can't expect HRM to write polished emails or build software apps from scratch. What it can do is solve logical puzzles and show reasoning aptitude exactly what ARC AGI measures.
              <br />
              <br />
              <strong>How does HRM work?</strong>
              <br />
              <br />
              HRM's core novelty is architectural, inspired (loosely) by neuroscience. Instead of one transformer predicting the next token, HRM uses a dual recurrent loop. Two recurrent neural networks operating at different time scales:
              <br />
              <br />
              - A fast, lower-level module that generates bursts of thinking (rapid, local processing)
              <br />
              - A slower, higher-level module that is more abstract and refines the fast module's outputs
              <br />
              <br />
              Think of it as fast intuition + slow deliberation. The higher module provides guidance, the lower module produces quick hypotheses which are iteratively refined. This outer-refinement loop feeding fast bursts into a slower, abstract controller is what gives HRM its compositional reasoning advantage on specific tasks.
              <br />
              <br />
              Transformers, by contrast, optimize next-token prediction over large contexts and scale extremely well in parallel training. RNNs historically struggled with long-term dependencies and early convergence to suboptimal representations. HRM sidesteps some of those issues by bifurcating timescales and adding that iterative refinement.
              <br />
              <br />
              <br />
              <strong>Why this matters?</strong>
              <br />
              <br />
              HRM is not a transformer killer or an immediate replacement for foundation models. It's not a threat to the scale and pre-training paradigm that powers GPT-class models. Instead, it's a refinement in the AGI/reasoning direction an architecture that shows RNN-style systems can be competitive on reasoning tasks without trillions of tokens.
              <br />
              <br />
              Now RNNs could come back. We've traded a lot of learning quality for speed of scaling. If new architectures learn better, we might not need monstrous models to get strong reasoning.
              <br />
              <br />
              A path toward more efficient AGI-style reasoning. Transformer scale has limits eventual saturation, huge compute, and the impossibility of local runs. HRM hints at designs that might be more compute-friendly for certain classes of reasoning.
              <br />
              <br />
              Biology-inspired loops are promising again. The outer refinement loop is simple but powerful iterate, correct, repeat. That's central to human reasoning and now seems useful in neural nets too.
              <br />
              <br />
              Pre-training is still a massive advantage. Transformers win because they parallelize well and learn from massive batches. HRM hasn't been scaled with that same pre-training playbook yet.
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
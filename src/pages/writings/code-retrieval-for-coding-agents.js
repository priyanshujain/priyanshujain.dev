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
        handleScroll(!isContactOpen);
        setContact(!isContactOpen);
    };

    return (
        <Layout headerClass="">
            <SEO
                title="Code retrieval for coding agents"
                description={`For a coding agent, the right context is everything. Pulling a relevant function, docstring, or example into the agent's working context can be the difference between a correct, concise patch and a hallucinated mess.`}
            />
            <div
                class="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="Code retrieval for coding agents"
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            For a coding agent, the right context is everything.
                            <br />
                            <br />
                            Pulling a relevant function, docstring, or example into the agent's working context can be the difference between a correct, concise patch and a hallucinated mess that wastes minutes of developer time.
                            <br />
                            <br />
                            I researched this problem in a short exploratory study comparing code-search techniques for coding agents to help them retrieve the right context so they can produce the right output.
                            <br />
                            <br />
                            The study examines different code-retrieval techniques, their integration into agentic workflows, and how they improve coding agent output quality.
                            <br />
                            <br />
                            It compares how human programmers and agents interact with tools, analyzes lexical versus semantic search for code retrieval, evaluates retrieval's impact, and reviews benchmarks focused on latency, token usage, context utilization, and iteration loops.
                            <br />
                            <br />
                            Overall, code retrieval isn't just a search problem, it's the bridge between a knowledge base and an agent's reasoning loop.
                            <br />
                            <br />
                            Paper: <a href="https://www.preprints.org/manuscript/202510.0924" target="_blank" rel="noopener noreferrer" className="sig-blue">https://www.preprints.org/manuscript/202510.0924</a>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;

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
                title="Production outage from copy paste error made by a coding agent :("
                description={`A production outage occurred due to a copy-paste error made by a coding agent. This incident highlights the importance of code review and testing in preventing such issues.`}
            />
            <div
                class="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="Production outage from copy paste error made by a coding agent :("
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            Agents don’t copy and paste the way humans do. When we have to move a block of code from one file to another file. A human doing this refactor would select the original text, cut it, move to the new file, and paste it.
                            <br />
                            <br />
                            Coding agents typically operate this by emitting patches a deletion in the source file and an insertion in the target file. Two separate operations. That split creates room for mistakes (off-by-one deletions, context mismatches, ordering/race issues, or misinterpreted ranges).
                            <br />
                            <br />
                            The solution would be making the clipboard a first-class tool for agents. If an agent can copy a block to a clipboard and then paste it, it preserves the exact text and avoids interpretation errors that arise from reconstructing code with separate patches.
                            <br />
                            <br />
                            Sketch.dev experienced a real production outage from the similar issue.
                            <br />
                            Read more at: <a href="https://sketch.dev/blog/our-first-outage-from-llm-written-code" target="_blank" rel="noopener noreferrer">https://sketch.dev/blog/our-first-outage-from-llm-written-code</a>
                            <br />
                            <br />
                            This aligns me with my overall philosophy, What's good for AI agents is good for engineers.

                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;
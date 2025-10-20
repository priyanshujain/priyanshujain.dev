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
                title="OpenAI no longer exposes raw reasoning traces"
                description={``}
            />
            <div
                class="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="OpenAI no longer exposes raw reasoning traces"
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            They used to do it via the /chat/completions API but the new Responses API doesn’t expose chain-of-thought (CoT). OpenAI is pushing Responses hard with its stateful features, but as a developer I still find it easier to control state myself using the completions API.
                            <br />
                            <br />
                            It looks deliberate: since GPT-5, OpenAI hasn’t exposed raw reasoning traces. The reasons are unclear, safety, security, or concerns about the reliability of traces are possible explanations but whatever the rationale, the traces are now a tightly guarded secret.
                            <br />
                            <br />
                            Google’s Gemini has moved the same way. Hiding raw reasoning in Gemini 2.5 Pro provoked backlash from developers who relied on CoT to build and debug agents.
                            <br />
                            <br />
                            Right now, among the major foundation-model providers, Anthropic appears to be the only one still offering raw reasoning traces via API.
                            <br />
                            <br />
                            As someone building agents especially for debugging losing raw CoT makes debugging harder, and pushes me to rely more on Anthropic models.

                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;
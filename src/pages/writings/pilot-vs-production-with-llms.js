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
                title="Pilot vs Production with LLMs"
                description={``}
            />
            <div
                class="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="Pilot vs Production with LLMs"
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            A recent MIT report says 95% of companies are getting zero return.

                            <br />
                            <br />
                            Generic LLM chatbots like ChatGPT appear to show high pilot to implementation rates (~83%). Even custom agents built on SOTA models are great for small workflows or single-system tasks but when you push them into multi-system interactions they tend to lose context and deliver poor quality. The solutions often feel brittle, over-engineered, and unnecessarily complicated.

                            <br />
                            <br />
                            Well-designed custom agents still outperform generic tools like ChatGPT or Claude, but most of the time they fail to match the user experience people expect. That creates friction: avid ChatGPT users distrust internal custom tools that aren’t faster, easier, or as familiar.

                            <br />
                            <br />
                            What custom tools need is better UX with familiar elements, stronger domain fluency, and a tight feedback loop. We’ve seen this in coding Claude Code and other tools use human-in-the-loop patterns to get reliable, high-quality outputs. Those same lessons transfer across domains.
                            <br />
                            <br />
                            High ROI often hides in overlooked functions like operations and finance. We can now build small back-office tools super-quick, things that used to take long engineering cycles and they can improve customer retention and recover 2–5% of lost revenue.
                            <br />
                            <br />
                            MIT’s Project Iceberg estimates about $2.3 trillion in potential value from automation.
                            <br />
                            <br />
                           Read full report here: <a href="https://assets.73ai.org/v0.1_State_of_AI_in_Business_2025_Report.pdf/" className="sig-blue underline">https://assets.73ai.org/v0.1_State_of_AI_in_Business_2025_Report.pdf/</a>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;
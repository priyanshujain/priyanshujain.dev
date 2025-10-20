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
                title="Labour market for early-career developers is shot"
                description={``}
            />
            <div
                class="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="Labour market for early-career developers is shot"
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            A recent Stanford paper states there’s about a 20% relative decline in employment for early-career software developers.
                            <br />
                            <br />
                            The unemployment rate for college graduates has risen above the rate for non-graduates.
                            <br />
                            <br />
                            Employment declines are concentrated in occupations where AI is likely to automate, not augment, human labor, and that explains why software development is disproportionately affected.
                            <br />
                            <br />
                            Even if AI’s net productivity gain at the org level is under 5%, its impact on hiring and entry-level roles in software is much larger.
                            <br />
                            <br />
                            The AI Index Report shows a dramatic jump on SWE-Bench: AI systems solved 4.4% of coding problems in 2023, rising to 71.7% in 2024.
                            <br />
                            <br />
                            That said, AI struggles to replace tacit knowledge with the idiosyncratic tips, tricks and judgment that accumulate with experience.
                            <br />
                            <br />
                            Read the full paper <a href="https://assets.73ai.org/Canaries_BrynjolfssonChandarChen.pdf" className="underline hover-no-underline">here</a>.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;
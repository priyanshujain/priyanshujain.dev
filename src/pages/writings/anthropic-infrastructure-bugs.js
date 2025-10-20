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
                title="Anthropic's rough month: Infrastructure bugs and the importance of evals"
                description={``}
            />
            <div
                class="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="Anthropic's rough month: Infrastructure bugs and the importance of evals"
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            Anthropic had a rough month for model reliability because of infrastructure bugs.
                            <br />
                            <br />
                            Apparently they did some explaining.
                            <br />
                            <br />
                            It sounds like the problems came down to three separate bugs which unfortunately came along very close to each other, that caused further problem due to overlapping nature of bugs.
                            <br />
                            <br />
                            Additionally, Anthropic deploys models across multiple hardware platforms, AWS Trainium, NVIDIA GPUs, and Google TPUs. That multi-platform setup means every change needs validation on each target, which makes detecting platform-specific regressions harder.
                            <br />
                            <br />
                            At root, it comes down to noisy evals. They saw rising reports online but didn't have a clear way to connect those reports to specific changes.
                            <br />
                            <br />
                            When negative reports spiked on August 29, the team didn't immediately link them to what would otherwise have been a routine load-balancing change.
                            <br />
                            <br />
                            Fundamental step they are taking to prevent it in future:
                            <br />
                            <br />
                            <strong>Build evals</strong> that reliably distinguish working vs broken implementations and keep a closer eye on model quality.
                            <br />
                            <br />
                            <strong>Run evals</strong> regularly on production systems to catch issues like the context-window load-balancing error.
                            <br />
                            <br />
                            <strong>Debug tooling around customer feedback</strong> so community signals can be analyzed faster and remediation time reduced.
                            <br />
                            <br />
                            Evals and monitoring are super important. But these incidents show everyone needs continuous user signal to detect bugs before they hit lots of users.
                            <br />
                            <br />
                            I'm glad Anthropic published this level of detail. Transparency like this is a real advantage.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;

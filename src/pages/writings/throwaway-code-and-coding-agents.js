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
                title="Throwaway code and coding agents: Build it, ship it, move on"
                description={``}
            />
            <div
                class="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="Throwaway code and coding agents: Build it, ship it, move on"
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            We as developers have a bias towards quality of code, even when it comes to throwaway code that we write to analyze some data or visualize results.
                            <br />
                            <br />
                            We spend too much time polishing things that don't need polishing.
                            <br />
                            <br />
                            Another thing is that coding agents are very good at writing throwaway code. We can use that skill.
                            <br />
                            <br />
                            We get fixated on evaluating coding agents on the ability to write perfect code, but we tend to forget the places where we can use them for what they are good at.
                            <br />
                            <br />
                            There was or is a time in every dev's life when we wished for a tool to solve one specific problem. Now it is easy to build that tool.
                            <br />
                            <br />
                            So we should just build it, ship it, and stop hand-polishing the parts that don't matter.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;

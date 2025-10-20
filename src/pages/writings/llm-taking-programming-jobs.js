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
                title="Is LLM Coding Going to Take Programming Jobs? I'm Not Worried."
                description={`Exploring the impact of LLMs on programming jobs and why I believe they won't replace developers.`}
            />
            <div
                class="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="Is LLM Coding Going to Take Programming Jobs? I'm Not Worried."
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            I spend a lot of time using LLMs to write code. And the more I use them, the less worried I am about them taking over my job even as their coding abilities keep getting better.

                            <br />
                            <br />
                            If anything, using LLMs has made me more aware of how much of my work isn't just about churning out lines of code.

                            <br />
                            <br />
                            My real job is to understand user problems and turn them into working solutions. That involves a deep understanding of the domain, the users, and the context in which the software is going to be used. Then comes system design figuring out what to build and how, and finally verifying that it works in the real-world context of the user.

                            <br />
                            <br />
                            LLMs are great at the middle part generating code for well-defined specific tasks. But someone still needs to define those tasks in the first place, in a way that aligns with the bigger picture. That part isn't going away.
                            <br />
                            <br />
                            Honestly, I’m quite happy with this setup. I don’t have to spend hours typing, searching Google/Stack Overflow, or digging through documentation. I can focus more on high-level design and architecture, and run experiments faster because the mechanical part of writing code is handled by the LLM.

                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;
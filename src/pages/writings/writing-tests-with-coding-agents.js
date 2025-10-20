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
                title="Writing tests with coding agents is a bad idea"
                description={`AI tools tend to generate tests for random scenarios instead of focusing on what matters to users. Keep tests focused on real failures and user impact.`}
            />
            <div
                class="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="Writing tests with coding agents is a bad idea"
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            One thing that I found extremely important is that with AI now code becomes easier to create so you should use it to be extremely explicit and declarative. It also makes it much much easier to evaluate the code. I'm talking about things like no inheritance, functional patterns and so on.
                            <br />
                            <br />
                            The only part where AI doesn't get me or where I get angry is when it comes to tests.
                            <br />
                            <br />
                            My observation is that whenever I involve AI tools in my test-writing process, they tend to generate tests for all kinds of random scenarios. A lot of times, this feels distracting and even manipulative. Instead of thinking from the user's point of view, I find myself thinking purely in terms of code logic.
                            <br />
                            <br />
                            My approach to writing tests is to cover everything that's important for the user. The goal of writing tests is to ensure that my code doesn't break in production due to known reasons. If it breaks for an unknown reason, I fix it and then add a test for that specific case. But if I just focus on code logic and start writing all sorts of imaginary tests, it becomes useless.
                            <br />
                            <br />
                            Inventing imaginary failures upfront is usually wasted effort.
                            <br />
                            <br />
                            Even during PR reviews, AI can be distracting. It often suggests unnecessary test coverage or overcomplicates existing tests even when I know as a developer that it's not required. The whole PR ends up getting polluted with these irrelevant comments. Before AI, having a dense, insightful comment on a PR was considered a good thing. But now, I'm not so sure.
                            <br />
                            <br />
                            AI also tends to add excessive fallbacks for everything. As a developer, I understand the risks involved and can make informed decisions about them. AI tools, however, don't see the full picture and often suggest solutions that I never asked for.
                            <br />
                            <br />
                            We should use AI to make code explicit and easier to evaluate. Use it to reduce boilerplate and to catch obvious mistakes. But when it comes to tests treat AI as an more like autocomplete at best, not a peer. Keep tests focused on what matters to users, let impossible invariants fail loudly, and add tests for real failures as they happen. That discipline keeps code honest, reviews useful, and teams moving.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;

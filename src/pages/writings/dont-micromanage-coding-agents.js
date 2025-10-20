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
                title="Don't micromanage your coding agents"
                description={`An agent should just make edits to your files. It shouldn't ask at every turn if you want to apply changes.`}
            />
            <div
                class="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="Don't micromanage your coding agents"
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            An agent should just make edits to your files. It shouldn't ask at every turn, "Hey, I want to make this change, should I apply it?" If it's asking while it's already done the wrong thing, it's already wasted your time.
                            <br />
                            <br />
                            We need to move out of the inner loop and sit on top of it - still steering and guiding, but not micromanaging every change.
                            <br />
                            <br />
                            Anthropic people call yolo mode as <code>--dangerous-skip-permissions</code> and flags this risky. Still, almost everyone I know runs yolo mode all the time, because it's shockingly effective.
                            <br />
                            <br />
                            So far it hasn't done anything malicious on my machine. It has the permissions to do some wild things, but for whatever reason they did a really good job and it just works.
                            <br />
                            <br />
                            There are obvious risks. Prompt injection is not solved. But in practice the trade-off seems acceptable for the kinds of projects you typically use coding agents.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;

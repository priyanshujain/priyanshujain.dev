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
                title="Prediction is not intelligence"
                description={`LLMs are breathtaking at predicting and mimicking human text. But prediction of tokens is not the same as learning from the consequences of actions in the world.`}
            />
            <div
                class="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="Prediction is not intelligence"
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            It's fascinating how we define intelligence.
                            <br />
                            <br />
                            Mostly when it comes to evaluating AI for intelligence we evaluate against math. Moravec's paradox suggests it's easier to evaluate computers against hard logical problems than actions a one year old takes.
                            <br />
                            <br />
                            Things like picking up a cup, learning to walk or to balance is wildly harder to pin down and measure, yet it's what biological intelligence evolved to do.
                            <br />
                            <br />
                            We humans or animals in general have acquired intelligence over hundreds of thousands of years of evolution. It took a lot of trial and error to get to the level we are now.
                            <br />
                            <br />
                            How one big questions is how does a baby learn things?
                            <br />
                            <br />
                            We have a notion of supervised learning where we learn by imitation. Does this work at all?
                            <br />
                            <br />
                            But when we zoom out to the open, interactive world, imitation is only part of the story. Babies learn by acting, by getting feedback that isn't a label but a cascade of physical consequences: the cup falls, someone laughs, a hand recoils. That stream of outcomes supplies goals → implicit rewards → that the child discovers and optimizes for.
                            <br />
                            <br />
                            Richard Sutton (one of the founding fathers of reinforcement learning), argues that intelligence is fundamentally about achieving goals through interaction and learning from experience.
                            <br />
                            <br />
                            LLMs are breathtaking at predicting and mimicking human text. But prediction of tokens is not the same as learning from the consequences of actions in the world. A prediction task doesn't necessarily give the model a goal that changes the external environment and provides feedback for continual learning.
                            <br />
                            <br />
                            That's also one of the reasons that post training RL fine tuning is becoming a crucial step in LLM training.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;

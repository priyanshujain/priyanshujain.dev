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
                title="Tokens != intelligence"
                description={`The perceived cost of intelligence can be misleading. Intelligence is the quality of the response, not just raw token cost.`}
            />
            <div
                class="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="Tokens != intelligence"
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            The perceived cost of intelligence can be misleading.
                            <br />
                            <br />
                            A model might require longer or more complex prompts, or more loops, to produce the same-quality output as another model. Intelligence is the quality of the response, not just raw token cost.
                            <br />
                            <br />
                            Tokenizer efficiency also matters.
                            <br />
                            <br />
                            Claude's tokenizer produces approximately 16% more tokens than GPT-4o for the same input. That varies by domain: for mathematical equations the overhead is about 21%, and for Python code Claude generates roughly 30% more tokens.
                            <br />
                            <br />
                            When comparing models on real tasks :-
                            <br />
                            While a model like GPT-5 may have a cheaper per-token price than Sonnet-4, an agent using GPT-5 might consume far more tokens and require more turns to get a good result, negating the cost savings.
                            <br />
                            <br />
                            The ultimate cost combines token price, total tokens used, and the number of turns required to complete a task.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;

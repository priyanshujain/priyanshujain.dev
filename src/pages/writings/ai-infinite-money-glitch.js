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
                title="AI infinite money glitch"
                description={`OpenAI, Oracle, and Nvidia have created a self-reinforcing loop where capital ping-pongs between them, locking in customers, capacity, and market power.`}
            />
            <div
                class="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="AI infinite money glitch"
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            OpenAI signed a deal to buy roughly $300 billion of cloud compute from Oracle over the next few years.
                            <br />
                            <br />
                            Oracle's stock ripped up about 36% in one day, its biggest single-day gain since 1992.
                            <br />
                            <br />
                            To run that capacity Oracle is placing huge orders for Nvidia chips. It put the first batch at roughly $40 billion for a Texas data center.
                            <br />
                            <br />
                            Nvidia, valued around $4.4–4.5 trillion, is itself committing up to $100 billion to OpenAI and will be both supplier and investor.
                            <br />
                            <br />
                            The net effect looks like a self-reinforcing loop: OpenAI pays Oracle for compute, Oracle pays Nvidia for GPUs, and Nvidia funnels capital back into OpenAI. Capital ping-pongs between the three and in the process locks in customers, capacity, and market power.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;

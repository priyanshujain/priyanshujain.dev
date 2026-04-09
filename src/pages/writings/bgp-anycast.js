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

const content = (
    <p>
    Can I announce same IP from multiple locations simultaneously?

    The internet isn't one single network - it's thousands of independent networks (called Autonomous Systems) that agree to connect and exchange traffic.

    An ASN is a unique identifier for an independent network on the internet.

    Anycast is a network addressing method where the same IP address is announced from multiple locations simultaneously. The internet routing infrastructure (BGP) automatically routes users to the "nearest" location based on network topology.



    </p>
)

const Page = (props) => {
    const [isContactOpen, setContact] = useState(false);
    const handleContact = () => {
        // Look into state updates
        handleScroll(!isContactOpen);
        setContact(!isContactOpen);
    };

    return (
        <Layout headerClass="">
            <SEO
                title=""
                description=""
            />
            <div
                className="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="This is a template page"
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;

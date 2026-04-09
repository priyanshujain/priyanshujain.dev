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
    <>
    Hi there!
    So much so that I might just use this template for future writings.
    </>
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

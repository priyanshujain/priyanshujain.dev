import React, { useState } from "react";
import Layout from "../components/layout/index";
import SEO from "../components/seo";
import { SectionBox } from "../components/home";

const handleScroll = isModalOpen => {
  if (isModalOpen === true) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflowY = "scroll";
  }
};

const Index = props => {
  const [isContactOpen, setContact] = useState(false);
  const handleContact = () => {
    // Look into state updates
    // Look into state updates
    handleScroll(!isContactOpen);
    setContact(!isContactOpen);
  };

  return (
    <Layout headerClass="">
      <SEO title="About Priyanshu Jain" />
      <div class="main-content">
        <SectionBox
          heading="Priyanshu Jain"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600 tc thead w-100"
          bodyClass="col-12 mw-100 w-100 center"
          className="pt16"
          />
        <div className="pt0 pb5 pt10-ns">
          <div className="mw-l center">
          <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
            I am a software developer based in Bangalore, India.
            I currently work at OkCredit where I work as Principal Engineer and responsible for 
            building the core payments platform and help fellow developers on technical problems.
            <br />
            <br />
             Over my career I have worked in multiple industries including healthcare, recruiting platforms and payments.
              previously I co-founded an international payments startup in the US market and ran it for 3 years where 
              I was responsible for overall product and technology.
            <br />
            <br />
            I'm sports enthusiast with experience of running many marathons and triathlons(🏊🚴🏃). I have finished an Ironman 70.3 in 2022.

            <br />
            <br />
            I am a big believer of effective altruism. I run a non-profit initiative, PlayTogether. 
            It's a sports platform for underprivileged athletes to crowdfund for training expenses,
             create personalized campaigns and engage with a community of supporters.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

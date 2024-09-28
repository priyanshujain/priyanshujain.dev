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
    // Look into state updates
    // Look into state updates
    handleScroll(!isContactOpen);
    setContact(!isContactOpen);
  };

  return (
    <Layout headerClass="">
      <SEO
        title="Software bugs, can’t we just hire more developers to fix all the bugs?"
        description={`Software bugs are a fact of life. They’re annoying, time-consuming, and can be costly. But can’t we just hire more developers to fix all the bugs?`}
        image={"/software-bugs.png"}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="Software bugs, can’t we just hire more developers to fix all the bugs?"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              Software bugs, can’t we just hire more developers to fix all the
              bugs?
              <br />
              <br />
              Software has bugs. This is normal.
              <br />
              <br />
              It's a harsh reality, but one we must accept. The disappointment
              we often feel when encountering bugs stems from unrealistic
              expectations. We demand perfection, but software development is a
              complex endeavor prone to errors.
              <br />
              <br />
              While throwing more developers and testers at the problem might
              seem like a solution, it often leads to more issues. Frederick
              Brooks famously observed that adding people to a late software
              project makes it later.
              <br />
              <br />
              The ideal way to ensure impeccable software quality is to write
              minimal code and spend an exorbitant amount of time refining it.
              However, this approach is rarely compatible with commercial
              success or developer motivation. Imagine an iPhone with 1/3 fewer
              features to reduce bugs. It wouldn't be a popular choice.
              <br />
              <br />
              Bugs are an inevitable byproduct of writing software. Techniques
              and tools can help reduce their occurrence, but complete
              eradication is impossible.
              <br />
              <br />
              Understanding that software = bugs allows us to prioritize bug
              fixes more effectively. The absence of bugs is just one factor in
              software success. A useful piece of software can still be valuable
              despite bugs, while a bug-free piece of software can be useless.
              <br />
              <br />
              The market often values factors like adoption, integrations,
              brand, and user experience over bug-free perfection. A software
              package with fewer bugs but limited adoption might not outperform
              a buggy one with a strong user base.
              <br />
              <br />
              Software organizations prioritize bug fixes based on their impact
              on users. Critical bugs affecting many users are addressed
              immediately, while less severe ones might be deferred. This is a
              normal and expected practice.
              <br />
              <br />
              Instead of demeaning developers or demanding immediate bug fixes,
              we should appreciate the complexity of software development.
              Marvel at the miracle of functioning software and have empathy for
              the developers who work tirelessly to create it.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

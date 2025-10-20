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
        title="How do you garbage collect your thoughts?"
        description={`Exploring techniques to declutter the mind and enhance focus through mental 'garbage collection'.`}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="How do you garbage collect your thoughts?"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              There are times when my mind is all over the place with too many thoughts, not enough focus. It’s a common problem these days with most of us.
              <br />
              <br />
              One of the ways I’ve started dealing with it is by using ChatGPT to restructure my thoughts. It helps me turn my scattered thoughts into something more structured. I can write freely, and it nudges me to be more objective, asks the right questions, and helps me organize my rough thoughts in a way that gives clarity and context.
              <br />
              <br />
              Over time, my writing has improved noticeably. I use better words, cleaner grammar even when I'm not using ChatGPT just because I’ve gotten so much feedback from it earlier. It taught me small but important things: when a sentence is too long and needs breaking down, when to add punctuation, how to keep things readable.
              <br />
              <br />
              It also helps with overthinking. Once my thoughts are out of my head and neatly written down, I can actually see what I’m trying to say. And that clarity makes all the difference.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
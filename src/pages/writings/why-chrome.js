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
        title="why Chrome?"
        description={`why so many people stick with Chrome, even when Firefox has some clear advantages`}
        image={"/why-chrome.png"}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="why so many people stick with Chrome, even when Firefox has some clear advantages?"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              I often wonder why so many people stick with Chrome, even when
              Firefox has some clear advantages?
              <br />
              <br />
              Honestly, it comes down to one thing: Chrome is made by Google.
              That’s it—plain and simple.
              <br />
              <br />
              Google = The Internet
              <br />
              <br />
              {<Icon name="why-chrome.png" />}
              <br />
              <br />
              For most folks, Chrome is the internet. When they think about
              browsing, they think about Google—searching, Gmail, YouTube,
              Google Docs, you name it. Since Chrome is a Google product, it
              just feels like the natural choice, especially because it works
              seamlessly with all those services.
              <br />
              <br />
              A lot of people don’t even realize they can use Google’s stuff on
              other browsers like Firefox. But when Chrome is right there, and
              it’s made by Google, they don’t really see a reason to switch.
              <br />
              <br />
              <b>The Power of the Google Name</b>
              <br />
              Google’s got serious name recognition. People trust it, so when
              they see “Chrome,” they think, “Yeah, that’s reliable.” Even
              tech-savvy folks who know about other browsers often stick with
              Chrome because they feel like it integrates better with Google’s
              ecosystem.
              <br />
              <br />
              Sure, Firefox might be just as good (or even better) in some
              areas, but once you’ve switched to Chrome, it’s easy to stay
              put—especially if everything just works.
              <br />
              <br />
              <b>The Old Performance Boost</b>
              <br />
              Back in the day, Chrome was faster and smoother than other
              browsers, which is why so many people made the switch. Firefox has
              caught up big time, especially with the Firefox Quantum update,
              but that old reputation for speed still sticks with Chrome.
              <br />
              <br />
              People are creatures of habit. Once they’re used to something,
              they’re not likely to change unless they have a good reason. And
              for a lot of people, Chrome does the job just fine.
              <br />
              <br />
              <b>Firefox’s Privacy Focus</b>
              <br />
              Firefox is awesome—better privacy, less RAM usage, and a
              commitment to open standards. But here’s the thing: most people
              don’t prioritize privacy when they pick a browser. They want
              something fast, simple, and familiar.
              <br />
              <br />
              Mozilla, the company behind Firefox, has really leaned into the
              privacy angle, which is great if you care about that stuff. But if
              you’re just looking for a browser that works, all the talk about
              privacy can feel a bit overwhelming or irrelevant.
              <br />
              <br />
              <b>Website Compatibility Issues</b>
              <br />
              Another thing that keeps people on Chrome is that a lot of
              websites are now optimized specifically for it. Sometimes, other
              browsers, like Firefox, struggle with compatibility. Ever tried
              using Microsoft Teams on Firefox? Yeah, it can be a pain. This
              makes people stick with Chrome because it just works without the
              hassle.
              <br />
              <br />
              <b>Chrome’s Simple Messaging</b>
              <br />
              When you visit Chrome’s website, the message is super clear: “The
              browser built by Google. Fast, easy-to-use tools for browsing.”
              That’s exactly what most people want to hear. It’s simple,
              straightforward, and doesn’t overwhelm you with too much info.
              <br />
              <br />
              On the other hand, Firefox’s website focuses a lot on privacy,
              which might not click with everyone. If you’re just looking for a
              fast browser, that messaging might not grab your attention.
              <br />
              <br />
              The Bottom Line
              <br />
              <br />
              Until another browser can compete with the whole Google ecosystem
              and the trust people have in the Google name, Chrome’s going to
              stay on top. Firefox is awesome, but maybe it’s time they simplify
              their message and focus more on what everyday users care
              about—speed, ease of use, and getting stuff done without any
              headaches.
              <br />
              <br />
              At the end of the day, most people don’t choose Chrome—they just
              use it because it’s the default. Breaking that habit will take a
              lot more than just offering a better browser.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

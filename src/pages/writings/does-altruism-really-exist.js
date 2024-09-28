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
        title="Does Altruism Really Exist?"
        description={`We’ve all heard the term thrown around, 
            usually in the context of people doing something for others
             without expecting anything in return. But, let’s ask ourselves a tough
              question: Does true altruism actually exist? 
`}
        image={"/altruism.png"}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="Does Altruism Really Exist?"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              Does Altruism Really Exist? We’ve all heard the term thrown
              around, usually in the context of people doing something for
              others without expecting anything in return. But, let’s ask
              ourselves a tough question: Does true altruism actually exist?
              <br />
              <br />
              Imagine a world where everyone is purely selfish—sounds chaotic,
              right? But, if you think about it, we didn’t start out by
              cooperating; that came later because we figured out that
              cooperation was actually better than being selfish. So, why did we
              make the shift?
              <br />
              <br />
              We, as humans, are driven by incentives. Every action we take has
              some form of motivation behind it, even if it’s just a subtle one.
              If we lived in a perfectly rational world, wouldn’t the best
              option always be to act in our own self-interest? After all, in a
              zero-sum game, someone else’s loss is my gain. If everyone’s out
              for themselves, wouldn’t that lead to a world where we’re all
              competing so hard that we end up worse off?
              <br />
              <br />
              But here’s the twist: life isn’t a one-time game. We make
              decisions every day, over and over again. If I decide not to
              cooperate today, that behavior might spread around me, and
              suddenly, I’m surrounded by people who also don’t cooperate. On
              the other hand, if I choose to cooperate, those around me are more
              likely to do the same, creating an environment where everyone
              benefits. So, maybe people cooperate not because they’re selfless,
              but because it’s in their long-term self-interest to do so.
              <br />
              <br />
              Even when we’re doing something that seems purely for someone
              else’s benefit, there’s usually some incentive. Think about the
              Prisoner’s Dilemma: two people are better off cooperating rather
              than betraying each other, even if the temptation to betray is
              strong. This shows that the world isn’t just a zero-sum
              game—there’s potential for everyone to win if we work together.
              <br />
              <br />
              But what about those times when people cooperate out of genuine
              affection? Maybe they’re helping someone without considering the
              outcome, simply because they care. Does that make them truly
              altruistic, or is there still some subtle incentive at play—like
              the warm feeling of doing something good?
              <br />
              <br />
              In the end, the choices we make don’t just affect us; they ripple
              out to influence the people around us and even the broader
              environment in the long run. While our environment shapes who we
              are in the short term, in the long term, we also have the power to
              shape our environment.
              <br />
              <br />
              So, does altruism exist? Maybe, maybe not. But what’s clear is
              that cooperation—whether motivated by self-interest, affection, or
              something else—is key to creating a world where everyone can
              thrive.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

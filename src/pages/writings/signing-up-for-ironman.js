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
        title="I signed up for Ironman 70.3 race"
        description={
          `Almost two kilometres of swimming, 90 kilometres on the bike, and 21 kilometres of running, ` +
          `this was what it takes to finish an Ironman 70.3 race`
        }
        image={"/Ironman-70.3.jpg"}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="I signed up for Ironman 70.3 race"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              Almost two kilometres of swimming, 90 kilometres on the bike, and
              21 kilometres of running, this was what it takes to finish an
              Ironman 70.3 race.
                <br />
                <br />
              {<Icon name="PHOTO-AR.jpg" />}
              <span
                style={{
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                }}
              >
                Adidas runners Bangalore group run at Cubbon Park in Bangalore,
                India. I'm in the middle with a blue t-shirt next to the person
                in the red t-shirt(our coach).
              </span>
              <br />
              <br />
              Until 2021, I used to occasionally go for a run, but starting in 2021,
              I began to engage in consistent weekly training and ran my half marathon in December'21. 
                <br />
                <br />

                Since I started running, I was always looking for a new challenge and wanted to push my body to the limit.
                So I thought about trying biking. I used to ride a bike all my life for commuting but never rode a
                bike more than 15-20 kilometres.
                <br />
                so one weekend I borrowed a road bike and went for a ride.
                I was aiming to ride 50 kilometres to see how it feels to ride bike for long distance.
                I kept riding and thinking that I will turn back after 25 kilometres but I was enjoying the ride so much that
                I reached Bangalore Airport that is almost 50 kilometres and I was still enjoying it. I turned back and rode back to my home.
                This was the first time I rode a bike for 100 kilometres. I was tired but I was happy that I was able to do it. 
                <br />
                <br />
                <div style={{
                  width: "100%",
                  maxWidth: "100%",
                  textAlign: "center",
                }}>
                {<Icon name="PHOTO-Airport.jpg" className="mw-s-l" />}
                <span
                style={{
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                  display: "block",
                }}
              >
                This was my first time going to Bangalore Airport on a bike.
              </span>
                </div>
              <br />
              <br />

              I used to watch running videos on YouTube on this channel called
              Global Triathlon Network(GTN), that's where I first heard about
              Triathlons. There was something about the sport that was very
              intriguing to me. I was always fascinated by the idea of pushing
              my body to the limit and see how far I can go.
              <br />
              There was a new video on GTN about preparing for an half Ironman.
              I was fascinated by the idea of doing a triathlon and started
              researching about it.
                <br />
                <br />
                <b>So what is a Ironman?</b> It's a triathlon that consists of 1.9 km of swimming,
                90 km of cycling and 21.1 km of running, and it has to be completed in 8 hours.
                Ironman is the gold standard of triathlons and it's the most difficult triathlon.
                But more I read about it, more I was fascinated by it.
                <br />
                The only Ironman even I found in India about was Ironman 70.3 Goa that was scheduled in October 2022.
                It was all set in my mind that I will do it.
                <br />
                <br />
              But the challenge was that I have been barely able to swim 10 metres, never rode a road bike
              and only practicing running for few months.
              I remember my 100km biking experience and I was confident that I can do it.
              <br />
              <br />
              My biggest challenge was swimming. I have never swam in my life and I was scared of water.
                I was not sure if I will be able to swim 1.9 kilometres in open water.
                I went to a swimming pool and consulted a coach. He told me that I will be able to swim 1.9 kilometres
                in 6 months if I practice regularly. I was not sure if I will be able to do it but I was ready to give it a try.
              <br />
              <br />
                I started training for swimming, and within a month I was able to swim 50m without stopping.
                It game me confidence that I will be able to do it.
                <br />
                <br />
                Finally, I made my mind and signed up for Ironman 70.3 Goa in April 2022. I had six months to train for it.
                 I was excited and nervous at the same time.
                I was excited because I was going to do something that I have never done before and nervous because I was not sure if I will be able to do it.
                <br />
                <br />
                I started training for swimming, biking and running. I was training 6 days a week and I was enjoying it.
                I was enjoying the process of training and pushing my body to the limit.
                <br />
                <br />
                I will be sharing my training experience in the next post.
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

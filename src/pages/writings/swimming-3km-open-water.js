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
        title="How did I swim 3km in open water?"
        description={
          `From pool training in Bangalore to conquering 3km in the backwaters of Vani Vilas Dam - ` +
          `my first open water swimming adventure.`
        }
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="How did I swim 3km in open water?"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              I used to go to Kensington Pool in Bangalore to learn how to swim.
              While I was there, I met a ton of people — there's a huge community of open water swimmers in Bangalore.
              <br />
              <br />
              Some folks were planning a trip to Vani Vilas Dam in Chitradurga (about 150 km from Bangalore) for an open water swim.
              The idea honestly scared me. I mean — a dam? That's crazy. I'd normally avoid something like that.
              But somehow, I let myself get convinced. I decided to take a chance.
              <br />
              <br />
              I hitchhiked with someone from the group and we made it to Chitradurga after a 150 km drive.
              We stayed at GETHNAA (General Thimayya National Adventure Academy) — a professional training camp I hadn't expected at all.
              The accommodations were simple but comfortable, with large rooms and bunk beds.
              They provided us with great South Indian food (we washed our own dishes afterwards — a nice community feeling).
              <br />
              <br />
              The next day, we went down to the backwaters. It was wild — I couldn't see the end of it; it honestly looked more like an ocean.
              The water was not clear at all, even though it's a drinking water source for the area.
              <br />
              <br />
              I started by warming up with 500m near the starting deck. They had a jetty boat we could reach if we got tired.
              There were so many people there — even two 12-year-old boys — which really motivated me.
              I decided to go for it. I carried two energy gels (thanks to my tri suit's pocket) and kept following the group for more than two hours.
              <br />
              <br />
              All the years of running had kept up my endurance.
              This entire experience reminded me of all the training I'd gotten in the pool — from sighting to sculling, and all the instructions from my coach.
              Sculling really helped me stay afloat when I paused to consume a gel mid-swim.
              <br />
              <br />
              Once we started to see the other side — some kind of an island — I checked my watch.
              It seemed I'd crossed more than 3 km in nearly 3 hours!
              This was huge — my max distance in the pool was 1.5 km with breaks, and now I'd gone much farther in the open water.
              I honestly couldn't believe it. I even double-checked with other people's watches just to be sure.
              <br />
              <br />
              On the way back, we used the boat — and surprisingly, they had arranged breakfast for us, right there on the jetty!
              We had a hearty meal in the middle of the dam, with water all around us. I was so hungry I ate a ton!
              Sun was so high so we took a few photos and then went back to the camp.
              <br />
              <br />
              We rested in the afternoon and later went sightseeing — we did a small trek, visited a few wind turbine sites, and saw the dam from up high.
              It was wild to look down and realize we'd crossed it ourselves just the day before.
              <br />
              <br />
              In the afternoon, we did even more water activities — kayaking, banana boating, and jet skiing — a lot of pure fun.
              <br />
              <br />
              The following day, after breakfast, we headed back to Bangalore.
              It was a super-memorable trip — I won't forget it.
              It's my longest swim to this date.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
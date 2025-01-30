import React, { useState } from "react";
import Layout from "../../components/layout/index";
import SEO from "../../components/seo";
import { SectionBox } from "../../components/home";

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
        title="Reflecting on 2024"
        description={`Reflecting on 2024 and things I've done and learned along the way.`}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="Reflecting on 2024"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              New years get people in a reflective mood, and I wanted to share
              some personal thoughts about how it has gone so far, and some of
              the things I’ve done and learned along the way.
              <br />
              <br />
              I welcomed 2024 amidst the serene beauty of the mountains, a
              setting that profoundly influenced me. That trip inspired me to
              sign up for a long-dreamed mountaineering course at HMI (Himalayan
              Mountaineering Institute) in Darjeeling. Later in the year, I
              completed the course, diving deep into the technicalities of
              mountaineering, rock climbing, practicing on the Rathong Glacier,
              and even climbing the 5,000m Mount Renok. It was a transformative
              experience that taught me resilience, teamwork, and the sheer joy
              of pushing physical and mental boundaries.
              <br />
              <br />
              The year began on a high note with my long due promotion to
              Principal Engineer. It’s been a journey, filled with challenges
              that allowed me to grow and contribute meaningfully to my field.
              <br />
              2024 was also special because I got to celebrate my leap-year
              birthday on February 29th. It’s not every year you get to throw a
              birthday party—literally once in four years! Surrounded by
              friends, it was a memorable day that reminded me of the importance
              of cherishing relationships.
              <br />
              <br />
              While I participated in fewer running races this year, I stuck to
              my staples: the TCS World 10K, the Bangalore 10K Challenge, and
              the Bangalore Marathon. Beyond running, I ventured into new
              territories. For the first time, I joined a gym and managed to
              stick with it for three months straight, thanks to my trainer
              Lobo, whose guidance and motivation kept me consistent. In the
              outdoors, I explored the trails of South India through multiple
              small treks and took on another Himalayan trek in Himachal. The
              experience of repelling for the first time gave me a thrilling
              taste of mountaineering. These moments reinforced my love for the
              mountains and the fulfillment that comes from embracing nature’s
              challenges.
              <br />
              <br />
              On the professional front, one of my proudest achievements this
              year was building an ERP software for one of India’s largest
              telecom distributors. The pilot, developed in just two weeks,
              convinced them to switch from Tally, a traditional ERP tool. The
              project was a testament to the power of simple and quality
              software to address real-world problems.
              <br />
              I also ventured back into the world of open-source, contributing,
              giving talks at tech meetups in Bangalore. It had been a while
              since I stood in front of an audience, but sharing insights on
              cloud infrastructure cost management and security rekindled my
              passion for community engagement.
              <br />
              <br />
              This year, I also finally set up a home lab with two Intel mini
              computers (NUCs). It was a fun and geeky project where I
              experimented with running multiple services. It felt great to
              create a dedicated space for tinkering and learning.
              <br />
              <br />
              This year marked a period of renewal in many ways. After four
              years, I upgraded my devices, moving from an iPhone 12 to a 16 and
              from a MacBook Pro M1 (2020) to an M3 (2024). These upgrades
              reminded me of the importance of investing in tools that enable us
              to perform at our best. Welcoming my brother into the apartment
              was another meaningful change. Creating a space for him brought a
              sense of family connection.
              <br />
              Finally, I undertook a big renovation project of my apartment,
              giving it a fresh new look and decluttering by giving away a lot
              of stuff. This project not only revitalized my living space but
              also brought a sense of simplicity to my everyday life.
              <br />
              <br />
              I always wanted to learn a new language and towards the end of the
              year, I started learning German. This turned into an unexpected
              obsession. I went all in into language learning practicing 6-8
              hours a day, completing the A1 level in just two weeks.
              <br />
              <br />
              Reflecting on 2024, I am grateful for the opportunities, the
              challenges, and the growth that came my way. It was a year of
              transformation, of pushing boundaries, and embracing new
              experiences. As I look ahead, I am excited about the possibilities
              that 2025 holds, the new challenges, and the adventures that
              await.
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

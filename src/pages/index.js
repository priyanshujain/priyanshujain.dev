import React from "react";
import Layout from "../components/layout/index";
import SEO from "../components/seo";
import { SectionBox } from "../components/home";
import { StaticImage } from "gatsby-plugin-image";

const Index = (props) => {
  return (
    <Layout headerClass="">
      <SEO title="About Priyanshu Jain" />
      <div class="main-content">
        <SectionBox
          heading="Priyanshu Jain"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600 tc thead w-100"
          bodyClass="col-12 mw-100 w-100 center"
          className="pt16"
          sideClass={`col-12 col-6-l mt6 mt0-l o2 o2-l col-7-l justify-self-center justify-self-end-r`}
        />
        <div className="pt0 pb5 pt10-ns">
          <div className="mw-l center">
            <div className="ma0 pa0 pl5 pr5 mt4">
              <span
                className="f3 sig-grey"
                style={{
                  fontStyle: "italic",
                }}
              >
                Programmer/ Athlete / Effective Altruist
              </span>
              <br />
              <p className="f4 f3-ns sig-grey">
              I am pjay, a software developer and an advocate for
              technology-driven impact. I sometimes{" "}
              <a href="/writings">write</a> about software, philosophy, and
              sports.
              <br />I welcome emails at{" "}
              <a href="mailto:priyanshu@protonmail.com">priyanshu@pm.me</a>. You
              can also find me on{" "}
              <a href="https://twitter.com/dotpjay" target="_blank">
                Twitter
              </a>
              ,
              <a
                href="https://www.linkedin.com/in/ipriyanshujain/"
                target="_blank"
              >
                {" "}
                LinkedIn
              </a>{" "}
              and
              <a href="https://github.com" target="_blank">
                {" "}
                Github
              </a>
              .
              </p>
              <h4 className="f3 sig-blue">Programmer</h4>
              <p className="f4 f3-ns sig-grey">
              For a brief period I was doing research in the field of matching
              algorithms and wrote two papers on applications of matching
              algorithms in healthcare(organ exchanges).
              <br />
              In the past, my research has been applied in developing document
              parsing algorithms(resumes) and auditing systems for international
              payments(rate markup calculations).
              <br />
              <br />
              Over the years, I've co-founded a startup, navigated the ups and
              downs of the startup world, and built products spanning financial
              software, payment platforms, and cloud infrastructure.
              <br />I currently work at{" "}
              <a href="https://okcredit.in" target="_blank">
                OkCredit
              </a>{" "}
              {` `}
              where I work as Principal Engineer and responsible for backend,
              security and infrastructure things.
              <br />
              <br />I am a big fan of open source. I build and maintain a few
              open source projects :-
              </p>
              <ul
                className="f4 f3-ns sig-grey"
                style={{
                  marginTop: "8px",
                }}
              >
                <li>
                  <a href="https://actualize.live" target="_blank">
                    Actualize
                  </a>{" "}
                  - World's simplest lifestyle navigator through daily habits
                  and reflections
                </li>
                <li>
                  <a href="https://ossbox.org" target="_blank">
                    OSSBOX
                  </a>{" "}
                  - A box of free open source tools for everyone's need (WIP)
                </li>
                <li>
                  <a href="https://playtogether.in" target="_blank">
                    PlayTogether
                  </a>{" "}
                  - A sports platform for underprivileged athletes to crowdfund
                  for training expenses
                </li>
                <li>
                  <a href="https://besttogether.in" target="_blank">
                    BestTogether
                  </a>{" "}
                  - Loneliness support group/platform started during COVID
                  pandemic (looking for volunteers to help organize sessions)
                </li>
              </ul>
              <p className="f4 f3-ns sig-grey">
              <br />I identify myself as a software philosopher and always ponder
              about the complexity of software systems and what makes a software
              great. I have this{" "}
              <a
                href="https://docs.google.com/document/d/1mi8WUGGw0D3kW8AQZY4ThVncu1cFFQVj3O1hnr2SdnI/edit?usp=sharing"
                target="_blank"
              >
                live document
              </a>{" "}
              where I keep adding my thoughts on ideal software systems. Feel
              free to comment your thoughts too. I believe that every tool,
              programming language, and framework is just that—a tool. The best
              software doesn't get bogged down in the specifics of the tools it
              uses. Instead, it focuses on solving the actual problem at hand.
              Tools should serve the software, not the other way around. This is
              why companies like Basecamp have thrived—they use simple,
              well-understood tools to solve real problems, rather than chasing
              the latest trends or technologies.
              </p>
              <h4 className="f3 sig-blue">Athlete</h4>
              <p className="f4 f3-ns sig-grey">
              I'm a sports enthusiast and have experience of running many
              marathons and triathlons(🏊🚴🏃). I did an Ironman 70.3 in 2022.
              This started as a channel to get out of the house and get some
              exercise during covid, but it has since become a serious hobby.
              Last few years, I have been training for running and triathlons. I
              have been part of running groups and have participated in more
              than 40 sporting events.
              <br />
              {
                <StaticImage
                  src="https://pub-542530527f654674852705ad26a74a46.r2.dev/medals.jpeg"
                  style={{
                    maxWidth: "360px",
                    margin: "20px auto",
                    borderRadius: "8px",
                  }}
                  alt=""
                />
              }
              <br />
              This has been a great way to meet new people, stay fit, and push
              myself to new limits. This year I started training for mountains
              and have been doing some high altitude treks in Himalayas. I
              enrolled in a mountaineering course at HMI Darjeeling (starting
              Dec 2024) and have been training for it for the last few months.
              <br />
              </p>
              <h4 className="f3 sig-blue">Effective Altruist</h4>
              <p className="f4 f3-ns sig-grey">
              Beyond my work in tech, I am committed to giving back. I am a big
              believer of effective altruism—using evidence and reason to figure
              out how to benefit others the most and taking action on that
              basis. I allocate a portion of my income (5-10%) for various
              causes. My main focus is on sports and education. I have been
              supporting a few national athletes and students in their journey.
              <br />
              <br />
              Fun fact: I always donate my old laptops to underprivileged
              students. I believe that technology can be a great equalizer.
              <br />
              <br />
              Apart from this I founded PlayTogether, a platform dedicated to
              supporting underprivileged athletes by connecting them with
              resources and opportunities. It's my way of merging my passion for
              sports with a mission to level the playing field.
              </p>
              <h4 className="f3 sig-blue">Pictures</h4>
              {
                <StaticImage
                  src="https://pub-542530527f654674852705ad26a74a46.r2.dev/pj.jpeg"
                  style={{
                    width: "600px",
                    maxWidth: "100%",
                    margin: "20px auto",
                    borderRadius: "8px",
                  }}
                  alt=""
                />
              }
              <br />
              {
                <StaticImage
                  src="https://pub-542530527f654674852705ad26a74a46.r2.dev/ironman-pj.jpeg"
                  style={{
                    width: "600px",
                    maxWidth: "100%",
                    margin: "20px auto",
                    borderRadius: "8px",
                  }}
                  alt=""
                />
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

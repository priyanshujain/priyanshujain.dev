import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/index";
import SEO from "../../components/seo";
import { SectionBox } from "../../components/home";
import Icon from "../../components/Icon";

const Page = (props) => {
  const [essayList, setEssayList] = useState([]);

  const url = `https://api.pjay.in/?url=https://paulgraham.com/articles.html`;

  useEffect(() => {
    const fetchAndRender = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const text = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");

        const aTags = doc
          .getElementsByTagName("table")[0]
          .getElementsByTagName("table")[1]
          .getElementsByTagName("a");
        const essays = [];
        for (let i = 0; i < aTags.length; i++) {
          const href = aTags[i].getAttribute("href");
          const name = href.split(".")[0];
          const title = aTags[i].textContent;
          essays.push({ name, href, title });
        }
        // sort essays by name
        essays.sort((a, b) => {
          return a.title.localeCompare(b.title);
        })
        setEssayList(essays);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchAndRender();
  }, [url]);

  return (
    <Layout headerClass="">
      <SEO
        title="Essays by Paul Graham"
        description={`A collection of essays by Paul Graham`}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="Essays by Paul Graham"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              <div className="pb20">
                All the content, views and opinions present in the essays in the
                app belongs to original author i.e., Paul Graham.
                <br />
                This page uses the rss feed provided in Paul Graham's website
                and merely renders essays displayed in the site {" "}
                <a href="http://paulgraham.com/articles.html" target="_blank">
                  http://paulgraham.com/articles.html
                </a>
                . This is just a wrapper to display essays which are freely
                available in Paul Grahams website. This page is intended
                to provide easy access and beautiful reading experience for Paul
                Grahams essays.
                <br />
              </div>
              {essayList.map((essay, index) => (
                <a
                  key={index}
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href={`/pg/essays?essay=${essay.name}`}
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="underline fit-content">{essay.title}</p>
                  </h4>
                </a>
              ))}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

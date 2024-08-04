import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/index";
import SEO from "../../components/seo";
import { SectionBox } from "../../components/home";
import Icon from "../../components/Icon";

const Page = (props) => {
  const [content, setContent] = useState(null);

  // get essay query params
  const urlParams = new URLSearchParams(props.location.search);
  const essay = urlParams.get("essay");

  const url = `https://api.pjay.in/?url=https://paulgraham.com/${essay}.html`;

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

        var table = doc
          .getElementsByTagName("table")[0]
          ?.getElementsByTagName("table")[0]
          .getElementsByTagName("font")[0].innerHTML;

        // if any of the a tags have a href matching *.html  then replace it with /pg/essays?essay=*
        const aTags = table.match(/<a href=".*.html">.*<\/a>/g);
        if (aTags) {
          aTags.forEach((aTag) => {
            const href = aTag.match(/<a href="(.*)">.*<\/a>/)[1];
            table = table.replace(
              href,
              `/pg/essays?essay=${href.split(".")[0]}`
            );
          });
        }

        if (table) {
          setContent(table);
        } else {
          if (
            doc
              .getElementsByTagName("table")[0]
              .getElementsByTagName("table")[1]
          ) {
            setContent(
              doc
                .getElementsByTagName("table")[0]
                .getElementsByTagName("table")[1].innerHTML
            );
          } else if (doc.getElementsByTagName("table")[0]) {
            setContent(doc.getElementsByTagName("table")[0].innerHTML);
          } else {
            setContent(doc.innerHTML);
          }
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setContent("Failed to fetch and render content.");
      }
    };

    fetchAndRender();
  }, [url]);

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
        <SectionBox bodyClass="col-12 mw-100 center" />
        <div className=" pt0 pb5 pb20-ns">
          <div className="mw-l center">
            <p
              className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

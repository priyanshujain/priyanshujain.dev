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
        title="Latency Numbers Every Programmer Should Know"
        description=""
        image=""
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="Latency Numbers Every Programmer Should Know"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="f4 mb10">
              Last updated: Mar 16, 2024 
            </p>
            <table>
              <tr>
                <th>Description</th>
                <th>Latency</th>
              </tr>
              <tr>
                <td>L1 cache reference</td>
                <td>0.5 ns</td>
              </tr>
              <tr>
                <td>Branch mispredict</td>
                <td>5 ns</td>
              </tr>
              <tr>
                <td>L2 cache reference</td>
                <td>7 ns</td>
              </tr>
              <tr>
                <td>Main memory reference</td>
                <td>100 ns</td>
              </tr>
              <tr>
                <td>SSD random read</td>
                <td>150,000 ns</td>
              </tr>
              <tr>
                <td>Send 2 KB over 1 Gbps network</td>
                <td>20,000 ns</td>
              </tr>
              <tr>
                <td>Read 1 MB sequentially from memory</td>
                <td>250,000 ns</td>
              </tr>
              <tr>
                <td>Round trip within same datacenter</td>
                <td>500,000 ns</td>
              </tr>
              <tr>
                <td>Read 1 MB sequentially from SSD</td>
                <td>1,000,000 ns</td>
              </tr>
              <tr>
                <td>Disk seek</td>
                <td>10,000,000 ns</td>
              </tr>
              <tr>
                <td>Read 1 MB sequentially from disk</td>
                <td>20,000,000 ns</td>
              </tr>
            </table>
            <p className="f4 f3-ns sig-grey">
              <a
                href="https://people.eecs.berkeley.edu/~rcs/research/interactive_latency.html"
                target="_blank"
                rel="noreferrer"
              >
                Click to view Interactive Latency Numbers Over Time in History
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

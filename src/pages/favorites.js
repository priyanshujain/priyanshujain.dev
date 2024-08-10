import React, { useState, useEffect } from "react";
import Layout from "../components/layout/index";
import SEO from "../components/seo";
import { SectionBox } from "../components/home";
import { Link } from "gatsby";

const Page = (props) => {
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
          heading="Favorite"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              <div className="pb20">
              Some of my favorite blogs/essays/books that I have read over the
              years. 
              </div>
              <Link
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  to="/pg"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="underline fit-content">Paul Graham's Essays</p>
                  </h4>
                </Link>
                <a 
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="https://en.wikipedia.org/wiki/12_Rules_for_Life" 
                  target="_blank" rel
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="underline fit-content">12 Rules for Life by Jordan Peterson</p>
                  </h4>
                </a>
                <a 
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="https://www.goodreads.com/book/show/40121378-atomic-habits" 
                  target="_blank" rel
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="underline fit-content">Atomic Habits by James Clear</p>
                  </h4>
                </a>
                <a 
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="https://nav.al" 
                  target="_blank" rel
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="underline fit-content">Naval Ravikant</p>
                  </h4>
                </a>
                <a 
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="https://en.wikipedia.org/wiki/Why_We_Sleep" 
                  target="_blank" rel
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="underline fit-content">Why We Sleep by Matthew Walker</p>
                  </h4>
                </a>
                <a 
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="https://80000hours.org/book/" 
                  target="_blank" rel
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="underline fit-content">80,000 hours</p>
                  </h4>
                </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

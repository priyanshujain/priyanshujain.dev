import React from "react";
import Layout from "../../components/layout/index";
import SEO from "../../components/seo";
import styleVars from "../../styles/style-vars";

const Writing = (props) => {
  return (
    <Layout headerClass="">
      <SEO title="My Writings" />
      <div class="main-content">
        <div className={`${styleVars.page.xl} mb10`}>
          <div className="pt10 pb10 pt20-ns tc tl-ns pb20-ns">
            <h1 className="pa0 f3 f1-ns center fw-bold tc">Gists</h1>
            <p className="f4 f3-ns ma0 mt4 mt10-ns fw-normal tc">
              This is small quick reference for programmers.
            </p>
            <div>
              <div className="mt10 ma20-l">
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/gists/access-latencies"
                >
                  <h4 className="f3 flex-l justify-center">
                  <p className="fit-content">
                  Latency Numbers Every Programmer Should Know
                  </p>
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Writing;

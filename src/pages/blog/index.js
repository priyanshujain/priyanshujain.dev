import React from "react";
import Layout from "../../components/layout/index";
import SEO from "../../components/seo";
import styleVars from "../../styles/style-vars";


const Blog = props => {

  return (
    <Layout headerClass="">
      <SEO title="My Writings" />
      <div class="main-content">
      <div className={`${styleVars.page.xl} mb10`}>
            <div className="pt10 pb10 pt20-ns tc tl-ns pb20-ns">
              <h1 className="pa0 f3 f1-ns center fw-bold">My Writings</h1>
              <p className="f4 f3-ns ma0 mt4 mt10-ns fw-normal">
               
              </p>
            </div>
          </div>
      </div>
    </Layout>
  );
}

export default Blog;

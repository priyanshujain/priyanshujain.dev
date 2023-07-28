import React, { Component } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/index";
import SEO from "../components/seo";
import { SectionBox } from "../components/home";
import "../layouts/index.css";
import styleVars from "../styles/style-vars";

class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Page Not Found" />
        <div className="main-content">
          <div className={`${styleVars.page.xl} mb10`}>
            <div className="pt10 pb10 pt20-ns tc tl-ns pb20-ns">
              <h1 className="pa0 f3 f1-ns center fw-bold">Page not found</h1>
              <p className="f4 f3-ns ma0 mt4 mt10-ns fw-normal">
                We can’t find the page you are looking for. Try starting from
                the <Link to="/">homepage.</Link>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default NotFoundPage;

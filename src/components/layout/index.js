import React from "react";
import PropTypes from "prop-types";

import Header from "../header/index";
import "./common.css";
import "../../styles/app.css";
import Footer from "../footer/index";

const Layout = ({ children, headerClass, hideHeaderAndFooter = false }) => {
  return (
    <>
      {!hideHeaderAndFooter && <Header className={headerClass} />}
      <div
        style={
          {
            // minHeight: `100vh`
          }
        }
      >
        <main>{children}</main>
      </div>

      {!hideHeaderAndFooter && <Footer />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

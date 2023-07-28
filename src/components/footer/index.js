import React from "react";
import styleVars from "../../styles/style-vars";

const Footer = () => {
  const linkClassName =
    "ma0 pa0 f5 mt2 mb2 tertiary-text-color primary-text-color-hover db";
  return (
    <div>
      <div
        className={`${styleVars.page.xl} pt10 pb10 pt20-ns pb20-ns grid-12 gutter-row-40 gutter-36-ns`}
      >
        <div className="col-12 mt4">
          <p className={linkClassName}>
            Copyright © {new Date().getFullYear()}, Priyanshu Jain
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

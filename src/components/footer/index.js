import React from "react";
import styleVars from "../../styles/style-vars";
import Icon from "../Icon";

const Footer = () => {
  const linkClassName =
    "ma0 pa0 f5 mt2 mb2 tertiary-text-color primary-text-color-hover db";
  return (
    <div>
      <div
        className={`${styleVars.page.xl} pt10 pb10 grid-12 gutter-row-40 gutter-36-ns flex-l justify-between`}
      >
        <div className="col-12 mt4">
          <p className={linkClassName}>
            Copyright © {new Date().getFullYear()}, Priyanshu Jain
          </p>
        </div>
        <div className="col-12 col-6-l">
          <div className="flex">
            <a
              href="https://github.com/priyanshujain"
              className="db mr4"
              target="_blank"
            >
              <div className="circular-box mt2">
                <Icon name="github.svg" className="ma0 pa0 mh2" />
              </div>
            </a>
            <a
              href="https://linkedin.com/in/ipriyanshujain"
              className="db mr4"
              target="_blank"
            >
              <div className="circular-box mt2">
                <Icon name="linkedin.png" className="ma0 pa0 mh2" />
              </div>
            </a>
            <a
              href="https://twitter.com/impriyanshujain"
              className="db mr4"
              target="_blank"
            >
              <div className="circular-box mt2">
                <Icon name="twitter.png" className="ma0 pa0 mh2" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

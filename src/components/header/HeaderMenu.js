import React from "react";
import styleVars from "../../styles/style-vars";
import Icon from "../Icon";
import { Link } from "gatsby";

const HeaderMenu = ({ menu, setMenu, handleButton }) => {
  return (
    <div
      className={`${styleVars.page.xl} header-menu ${
        menu ? "show" : "hide"
      } pt6 pb6 flex flex-column`}
    >
      <Link className="primary-text-color ma0 pa0 mt6 f5 db" to="/">
        Community
      </Link>
      <Link className="primary-text-color ma0 pa0 mt6 f5 db" to="/athletes">
        Athletes
      </Link>
      <Link className="primary-text-color ma0 pa0 mt6 f5 db" to="/about">
        About
      </Link>
      {/* <div className="flex flex-column justify-end fg1">
        <button className="btn-base btn-outlined pa3 pl6 pr6 f4 bg-blue db mt6 tc fw-bold" onClick={handleButton}>Get Early Access</button>
      </div> */}
    </div>
  );
};

export default HeaderMenu;

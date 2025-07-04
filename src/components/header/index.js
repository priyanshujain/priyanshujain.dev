import React, { useState } from "react";
import styleVars from "../../styles/style-vars";

const Header = ({ className }) => {
  const isAbout =
    typeof window !== "undefined" ? window.location.pathname === "/" : false;
  const isWriting =
    typeof window !== "undefined"
      ? window.location.pathname?.includes?.("writings")
      : false;
  const isGists = 
    typeof window !== "undefined"
      ? window.location.pathname?.includes?.("gists")
      : false;
  const isFavorites = 
    typeof window !== "undefined"
      ? window.location.pathname?.includes?.("favorites")
      : false;
  return (
    <div className={`${className} header-container`} id="header-container">
      <div
        className={`${styleVars.page.xl} grid-12 gutter-row-20 gutter-36-ns pt6 pb6`}
      >
        <div className="ml-auto align-center">
          <a
            className={`primary-text-color ma0 pa0 f5 mr6 ${
              isAbout ? "fw-bold" : ""
            }`}
            href="/"
          >
            About
          </a>
          <a
            className={`primary-text-color ma0 pa0 f5 mr6 ${
              isWriting ? "fw-bold" : ""
            }`}
            href="/writings"
          >
            Writings
          </a>
          <a
            className={`primary-text-color ma0 pa0 f5 mr6 ${
              isFavorites ? "fw-bold" : ""
            }`}
            href="/favorites"
          >
            Favorites
          </a>
          <a
            className={`primary-text-color ma0 pa0 f5 mr6 ${
              isGists ? "fw-bold" : ""
            }`}
            href="/gists"
          >
            Gists
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

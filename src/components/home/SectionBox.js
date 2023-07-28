import React from "react";
import Icon from "../Icon";
import styleVars from "../../styles/style-vars";

const SectionBox = ({
  heading, 
  headingClass="", 
  bodyClass="", 
  sideComponent,
  sideImg, 
  sideClass="", 
  className="",
  sideImgClassName="",
  id="",
  children
}) => {
  return (
    <div className={className} id={id}>
      <div className={`${styleVars.page.xl} grid-12 gutter-row-20 gutter-36-ns`}>
        <div className={`${bodyClass}`}>
          <h1 className={`${headingClass}`}>
            {heading}
          </h1>
          {children}
        </div>
        {sideImg || sideComponent ? (
          <div className={`${sideClass}`}>
            {sideImg ? (
              <Icon name={sideImg} className={sideImgClassName}/>
            ) : (
              sideComponent
            )}
          </div>
        ): null}
      </div>
    </div>
  );
}

export default SectionBox;

import React from "react";
import styleVars from "../styles/style-vars";

const Loader = ({ height, width }) => {
  height = parseInt(height);
  width = parseInt(width);
  var radius = width / 2;
  return (
    <svg
      id="annie-loader"
      viewBox={`0 0 ${width} ${height}`}
      height={height}
      width={width}
    >
      <defs>
        <linearGradient
          id="grad1"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
          spreadMethod="pad"
        >
          <stop offset="10%" style={{ stopColor: styleVars.primaryColor }} />
          <stop offset="42%" style={{ stopColor: "rgba(255, 255, 255, 0)" }} />
        </linearGradient>
        <mask id="circle-mask">
          <circle cx={width / 2} cy={height / 2} r={radius} fill="white" />
          <circle
            cx={width / 2}
            cy={height / 2}
            r={radius * 0.9}
            fill="black"
          />
        </mask>
      </defs>
      <g mask="url(#circle-mask)">
        <path
          d={`M${width / 2},${height / 2} L0,${height / 2} A${width /
            2} ${height / 2} 0 0 1 ${width / 2} 0`}
          fill={styleVars.primaryColor}
        />
        <circle cx={width / 2} cy={height / 2} r={radius} fill="url(#grad1)" />
      </g>
    </svg>
  );
};

const Loading = ({ overlay = false, style }) => {
  if (overlay) {
    return (
      <div
        className={styleVars.loadingOverlay}
        style={{
          zIndex: 3,
          background: "rgba(255, 255, 255, 0.2)",
          // minHeight: "100vh",
          // height: document.getElementById("app").clientHeight,
          // width: document.getElementById("app").clientWidth,
          position: "fixed",
          ...style,
        }}
      >
        <Loader height={150} width={150} />
        {/* <Spin size="large" /> */}
        {/* <div className="loader" /> */}
      </div>
    );
  } else {
    return (
      <div
        className="db tc"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...style,
        }}
      >
        <Loader height={150} width={150} />
        {/* <Spin size="large" /> */}
        {/* <div className="loader" /> */}
      </div>
    );
  }
};

export default Loading;

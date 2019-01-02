import React from "react";

const ReactImgSelect = props => {
  const { width, height, items, text } = props;
  return (
    <div
      style={{
        width: width || 100,
        height: height || 100,
        backgroundColor: color || "blue"
      }}
    >
      {text}
    </div>
  );
};

export default ReactImgSelect;

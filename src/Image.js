import React from "react";

const Image = props => {
  const { src, style } = props;
  return <img src={src} style={style} />;
};

export default Image;

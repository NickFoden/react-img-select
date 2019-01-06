import React from "react";

const Caption = props => {
  const { caption, captionBold, captionTag } = props;
  switch (captionTag) {
    case "p":
      return <p>{caption}</p>;
      break;
    case "pBold":
      return (
        <p>
          <strong>{caption}</strong>
        </p>
      );
      break;
    case "h2":
      return <h2>{caption}</h2>;
    case "h2Bold":
      return (
        <h2>
          <strong>{caption}</strong>
        </h2>
      );
    default:
      return <p>{caption}</p>;
      break;
  }
};
export default Caption;

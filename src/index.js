import React from "react";
import Image from "./Image";

const ReactImgSelect = props => {
  const {
    width,
    height,
    color,
    // text,
    imageArray,
    liWidth,
    liHeight,
    liStyle,
    imgHeight,
    imgStyle,
    imgWidth,
    onPress
  } = props;
  return (
    <ul
      style={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `spaceAround`,
        height: height || 100,
        width: width || 100,
        alignContent: `spaceBetween`
        // backgroundColor: color || "blue"
      }}
    >
      {Array.isArray(imageArray)
        ? imageArray.map((item, idx) => {
            return (
              <li
                key={idx}
                style={
                  liStyle
                    ? liStyle
                    : {
                        backgroundColor: color || "blue",
                        display: `flex`,
                        flexDirection: `row`,
                        width: liWidth || 100,
                        height: liHeight || 10
                      }
                }
                onClick={
                  onPress
                    ? (e, idx) => {
                        onPress(e, idx);
                      }
                    : null
                }
              >
                <Image
                  src={item.src}
                  style={
                    imgStyle
                      ? imgStyle
                      : {
                          width: imgWidth || `100%`,
                          height: imgHeight || `100%`,
                          objectFit: `cover`
                        }
                  }
                />
                {/*{item.caption ? item.caption : ""}*/}
              </li>
            );
          })
        : "not an array of image objects"}
    </ul>
  );
};

export default ReactImgSelect;

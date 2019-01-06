import React from "react";
import Caption from "./Caption";
import Image from "./Image";

const ReactImgSelect = props => {
  const {
    width,
    height,
    captionDisplay,
    color,
    containerStyle,
    // text,
    imageArray,
    liDirection,
    liDisplay,
    liHeight,
    liPadding,
    liStyle,
    listStyle,
    liWidth,
    imgFlex,
    imgHeight,
    imgObjectFit,
    imgStyle,
    imgWidth,
    onPress,
    ulDirection,
    ulDisplay,
    ulStyle
  } = props;
  return (
    <ul
      style={
        ulStyle
          ? { ulStyle }
          : {
              display: ulDisplay || "flex",
              flexDirection: ulDirection || "column",
              width: width || 100,
              height: height || 100,
              listStyle: listStyle || "none"
              // backgroundColor: color || "blue"
            }
      }
    >
      {Array.isArray(imageArray)
        ? imageArray.map((item, idx) => {
            return (
              <li
                key={idx}
                style={
                  liStyle
                    ? { liStyle }
                    : {
                        // display: liDisplay || "inlineBlock",
                        backgroundColor: color || "",
                        cursor: onPress ? "pointer" : "auto",
                        flex: "1",
                        flexDirection: liDirection || "row",
                        height: liHeight || 10,
                        justifyContent: "flex-start",
                        padding: liPadding || "5px",
                        width: liWidth || 100
                      }
                }
                // onClick={e => onPress(e, item)}
                // onClick={(idx, item) => {
                //   idx, item;
                // }}
                onClick={onPress ? e => onPress(e) : ""}
              >
                {/* <div
                  style={
                    containerStyle
                      ? { containerStyle }
                      : {
                          flex: "1",
                          // display: "inlineBlock",
                          flexDirection: "row"
                        }
                  }
                > */}
                <img
                  src={item.src}
                  style={
                    imgStyle
                      ? { imgStyle }
                      : // : imgFlex
                        // ? {
                        //     flex: "1",
                        //     objectFit: imgObjectFit || "cover"
                        //   }

                        {
                          flex: "1",
                          width: imgWidth || "30px",
                          height: imgHeight || "90%",
                          objectFit: imgObjectFit || "cover"
                        }
                  }
                />
                {item.caption ? `  ${item.caption}` : ""}
                {/*<Caption
                  // style={
                  //   captionDisplay
                  //     ? { display: captionDisplay }
                  //     : { display: "inlineBlock" }
                  // }
                  caption={item.caption ? item.caption : ""}
                />*/}
              </li>
            );
          })
        : "not an array of image objects"}
    </ul>
  );
};

export default ReactImgSelect;

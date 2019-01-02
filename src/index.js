import React from "react";

// const ReactImgSelect = props => {
//   const { width, height, color, text } = props;
//   return (
//     <div
//       style={{
//         width: width || 100,
//         height: height || 100,
//         backgroundColor: color || "blue"
//       }}
//     >
//       {text}
//     </div>
//   );
// };

const ReactImgSelect = props => {
  const {
    width,
    height,
    color,
    text,
    imageArray,
    liWidth,
    liHeight,
    imgHeight,
    imgWidth
  } = props;
  console.log("imageArray is " + JSON.stringify(imageArray));
  return (
    <ul
      style={{
        width: width || 100,
        height: height || 100
        // backgroundColor: color || "blue"
      }}
    >
      {Array.isArray(imageArray)
        ? imageArray.map(item => {
            return (
              <li
                style={{
                  width: liWidth || 100,
                  height: liHeight || 10,
                  backgroundColor: color || "blue"
                }}
              >
                <img
                  src={item.src}
                  style={{
                    width: imgWidth || 20,
                    height: imgHeight || 20
                  }}
                />
                {item.caption ? item.caption : ""}
              </li>
            );
          })
        : "not an array of image objects"}
    </ul>
  );
};

export default ReactImgSelect;

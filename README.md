# react-img-select

## Currently In Development Do not Use in Production !

Still establishing the default props and will write out longer docs, estimating a basic prototype to be published and complete by 01/08/19, if you have feature requests can twitter @nickfoden

[![npm (scoped)](https://img.shields.io/npm/v/react-img-select.svg)](https://www.npmjs.com/package/react-img-select)

[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react-img-select.svg)](https://www.npmjs.com/package/react-img-select)

Render list of images

## Install

```
$ npm install react-img-select
```

## Usage

```js
import ReactImgSelect from "react-img-select";
{...}
 handleSelect = (e, item) => {
    e.preventDefault();
    console.log(item);
  };

{...}

<ReactImgSelect
  onPress={(e, item) => this.handleSelect(e, item)}
  imageArray={[
    {
      caption: "",
      key: "",
      src: ""
    },
    {
      caption: "",
      key: "",
      src: ""
    }
  ]}
/>;
```

Default props are changing and prop names are subject to change as tinkering with best defaults is accomplished. Captions and keys and onPress are optional. Thinking about alternatives/flexibility for src. Will write out behaviors and examples this week as firm up the props.

Height and Width are for the container/ul

liHeight and liWidth handle the item/li <--- start here

Current Props List

```js
    color,
    height,
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
    ulStyle,
    width,
```

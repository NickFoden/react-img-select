# react-img-select

## Currently In Development Do not Use in Production !

Still establishing the default props and will write out longer docs, estimating a basic prototype to be published and complete by 01/06/19, if you have feature requests can twitter @nickfoden

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

<ReactImgSelect
  imgStyle={{}}
  onPress={e => this.handleSelect(e)}
  imageArray={[
    {
      caption: "",
      src: ""
    },
    {
      caption: "",
      src: ""
    }
  ]}
/>;
```

Default props are changing and prop names are subject to change as tinkering with best defaults is accomplished. Captions will be optional.

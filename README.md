# nd-wheel

[![Travis](https://img.shields.io/travis/ndfront/nd-wheel.svg?style=flat-square)](https://github.com/ndfront/nd-wheel)
[![Coveralls](https://img.shields.io/coveralls/ndfront/nd-wheel.svg?style=flat-square)](https://github.com/ndfront/nd-wheel)
[![NPM version](https://img.shields.io/npm/v/nd-wheel.svg?style=flat-square)](https://npmjs.org/package/nd-wheel)

> 滚轮事件

## 安装

```bash
$ npm install nd-wheel --save
```

## 使用

```js
var wheel = require('nd-wheel');
// use wheel
wheel(input, function(type, prevent) {
  prevent();

  if (type === 'up') {
    // increase
  } else if (type === 'down') {
    // descrease
  }

  input.select();
});
```

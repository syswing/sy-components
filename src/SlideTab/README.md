# 滑动条tab

使用例子

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Table } from '../dist/main.js'

ReactDOM.render(
  <div style={{ width: 300 }}>
    <SlideTab tabArrs={['aa','bb','123','阿道夫']} callback={(e:Number) => {
        console.log(e)
      }}/>
  </div>,
  document.getElementById("root")
);
```

![alt 例子](./tab.png)

## 类型定义

src/SlideTab/index.d.ts

## props

* tabArrs: Array<string>;           // ? 字符串数组，代表切换的内容
* callback: Function;               // ? 单切时回调数组下标
* style?: CSSProperties;            // ? 整体样式

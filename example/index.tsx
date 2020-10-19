import React from "react";
import ReactDOM from "react-dom";
import { Table } from "@/index";


ReactDOM.render(
  <div style={{width:300}}>
    <Table
      source={[
        { name: "苹果", count: 123 },
        { name: "香蕉", count: 2345 },
        { name: "菠萝", count: 123 },
        { name: "梨", count: 445 },
      ]}
      cols={[
        { dataIndex: "name", title: "名称" },
        { dataIndex: "count", title: "数量" },
      ]}
      // rank={'count'}
    />
  </div>,
  document.getElementById("root")
);

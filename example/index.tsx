import React from "react";
import ReactDOM from "react-dom";
import { Table, Tab,Loadings } from "../dist/main.js";

ReactDOM.render(
  <>
    <div style={{ width: 300 }}>
      <Table
        source={[
          { name: "苹果", count: 123, sale: 555 },
          { name: "香蕉", count: 234, sale: 666 },
          { name: "菠萝", count: 123, sale: 666 },
          { name: "梨", count: 445, sale: 666, edit: "阿斯蒂芬" },
        ]}
        cols={[
          { dataIndex: "name", title: "名称" },
          { dataIndex: "count", title: "数量" },
          { dataIndex: "sale", title: "销售额", unit: "元" },
          {
            dataIndex: "edit",
            title: "编辑",
            render: (content: any) => {
              return <button>{content}</button>;
            },
          },
        ]}
        rank={"count"}
      />
    </div>
    <div style={{ width: 300,marginBottom:20 }}>
      <Tab tabArrs={['测试1','测试2']} callback={(e:any) => console.log(e)} style={{background:'#fff'}}/>
    </div>
    <div style={{ width: 300,marginBottom:20 }}>
      <Loadings.Elastic/>
    </div>
  </>,
  document.getElementById("root")
);

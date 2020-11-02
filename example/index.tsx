import React from "react";
import ReactDOM from "react-dom";
// import { Table, Tab,Loadings } from "../dist/main.js";
import { Table, Tab,Loadings,Buttons } from "../src/index";

ReactDOM.render(
  <>
    <div style={{ width: 300 }}>
      <Table
        source={[
          { name: "苹果", count: 123, sale: 555 },
          { name: "香蕉", count: 234, sale: 666 },
          { name: "菠萝", count: 123, sale: 666 },
          { name: "菠萝", count: 123, sale: 666 },
          { name: "菠萝", count: 123, sale: 666 },
          { name: "菠萝", count: 123, sale: 666 , edit: "渲染按钮1"},
          { name: "梨", count: 445, sale: 666, edit: "渲染按钮2" },
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
      <Tab styleNo={4} tabArrs={['测试1','测试2']} callback={(e:any) => console.log(e)} style={{background:'#fff'}}/>
    </div>
    <div style={{ width: 300,marginBottom:20 }}>
      <Tab styleNo={5} tabArrs={['测试1','测试2']} callback={(e:any) => console.log(e)} style={{background:'#fff'}}/>
    </div>
    <div style={{ width: 300,marginBottom:20 }}>
      <Tab styleNo={2} tabArrs={['测试1','测试2']} callback={(e:any) => console.log(e)} style={{background:'#fff'}}/>
    </div>
    <div style={{ width: 300,marginBottom:20 }}>
      <Tab styleNo={3} tabArrs={['测试1','测试2']} callback={(e:any) => console.log(e)} style={{background:'#fff'}}/>
    </div>
    <div style={{ width: 300,marginBottom:60 }}>
      <Loadings.Elastic/>
    </div>
    <div style={{ width: 300,marginBottom:20,marginLeft:100 }}>
      <Buttons.Bubbly>冒泡按钮</Buttons.Bubbly>
    </div>
  </>,
  document.getElementById("root")
);
